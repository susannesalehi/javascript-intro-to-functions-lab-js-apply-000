function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log(string.toUpperCase())
}

function logWhisper(string) {
  return console.log(string.toLowerCase())
}

var lowercase = 'hello!'

function sayHiToGrandma(string) {
  if (string) return console.log("I can't hear you!")
}