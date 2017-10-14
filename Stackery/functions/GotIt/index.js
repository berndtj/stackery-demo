const stackery = require('stackery')

module.exports = function handler(message) {
  console.dir(message)

  let response = {
      "got": "it"
  }
  
  return response
}