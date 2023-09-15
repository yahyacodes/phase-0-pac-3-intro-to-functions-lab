// Shout Function
function shout(string) {
  return string.toUpperCase();
}

// Whisper Function
function whisper(string) {
  return string.toLowerCase();
}

// logShout Function
function logShout(string) {
  console.log(string.toUpperCase());
}

// logWhisper Function
function logWhisper(string) {
  console.log(string.toLowerCase());
}

// sayHiToHeadphonedRoommate Function
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  } else if (string === string.toLowerCase()) {
    return "I can't hear you!";
  }
}
