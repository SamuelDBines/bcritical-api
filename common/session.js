const fs = require('fs');

const write = (email, password, hash) => {
  let data = {}
  try {
    data = JSON.parse(fs.readFileSync('data.json'));
  } catch (err) {
    //doesn't matter
  }
  data[hash] = { email, password }
  fs.writeFileSync('data.json', JSON.stringify(data));
}
const read = (hash, email) => {
  let data = {}
  try {
    data = JSON.parse(fs.readFileSync('data.json'));
  } catch (err) {
    //doesn't matter
  }
  return Object.keys(data).find(itemHash => itemHash === hash)
}
module.exports = {
  read,
  write
}