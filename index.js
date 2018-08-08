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
  if (string === string.toLowerCase()) console.log ("I can't hear you!")
} if (string === string.toUpperCase()) console.log ("YES INDEED!")