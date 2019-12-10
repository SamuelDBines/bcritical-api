const https = require("https");
async function run(teamkey) {
  const data = await getData();
  console.log(
    data
      .filter(item => item.key === "qpr")
      .map(item => item.goals)
      .reduce(reducer)
  );
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
run();
async function getData() {
  const result = await Promise.all([
    getRequestPromise(
      "https://raw.githubusercontent.com/openfootball/football.json/master/2014-15/en.1.json"
    )
  ]).then(results => {
    const arrayTeams = [];
    results[0].rounds.forEach(round => {
      round.matches.forEach(team => {
        const team1 = { ...team.team1, goals: team.score1 };
        const team2 = { ...team.team2, goals: team.score2 };
        arrayTeams.push(team1);
        arrayTeams.push(team2);
      });
    });
    console.log(arrayTeams);
    return arrayTeams;
  });
  return result;
}
function getRequestPromise(url) {
  return new Promise((resolve, reject) => {
    let request = https.get(url, response => {
      if (response.statusCode < 200 || response.statusCode > 299) {
        reject(
          new Error("Failed to load page, status code: " + response.statusCode)
        );
      }

      let body = [];
      response.on("data", chunk => body.push(chunk));
      response.on("end", () => resolve(JSON.parse(body.join(""))));
    });

    request.on("error", err => reject(err));
  });
}
