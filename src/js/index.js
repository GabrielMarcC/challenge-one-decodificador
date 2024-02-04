let currentValue = "";
let value = "";

const binaryLetters = {
  a: "01100001",
  b: "01100010",
  c: "01100011",
  d: "01100100",
  e: "01100101",
  f: "01100110",
  g: "01100111",
  h: "01101000",
  i: "01101001",
  j: "01101010",
  k: "01101011",
  l: "01101100",
  m: "01101101",
  n: "01101110",
  o: "01101111",
  p: "01110000",
  q: "01110001",
  r: "01110010",
  s: "01110011",
  t: "01110100",
  u: "01110101",
  v: "01110110",
  w: "01110111",
  x: "01111000",
  y: "01111001",
  z: "01111010",
};

const binaryToLetters = {
  "01100001": "a",
  "01100010": "b",
  "01100011": "c",
  "01100100": "d",
  "01100101": "e",
  "01100110": "f",
  "01100111": "g",
  "01101000": "h",
  "01101001": "i",
  "01101010": "j",
  "01101011": "k",
  "01101100": "l",
  "01101101": "m",
  "01101110": "n",
  "01101111": "o",
  "01110000": "p",
  "01110001": "q",
  "01110010": "r",
  "01110011": "s",
  "01110100": "t",
  "01110101": "u",
  "01110110": "v",
  "01110111": "w",
  "01111000": "x",
  "01111001": "y",
  "01111010": "z",
};

function encryptContent() {
  currentValue = document.getElementById("text-content").value;
  value = document.getElementById("text-content").value;

  let encryptedValue = "";

  for (let i = 0; i < currentValue.length; i++) {
    if (currentValue.length > 0) {
      const char = currentValue[i].toLowerCase();
      encryptedValue += binaryLetters[char] || char;
    }
  }

  currentValue = encryptedValue;

  document.getElementById("encrypt-content").value = currentValue;
}

function decryptContent() {
  const currentValue = document.getElementById("text-content").value;
  let decryptedValue = "";

  for (let i = 0; i < currentValue.length; i += 8) {
    const binaryChunk = currentValue.substr(i, 8);
    decryptedValue += binaryToLetters[binaryChunk] || binaryChunk;
  }

  document.getElementById("encrypt-content").value = decryptedValue;
}

function copyText() {
  let textCopy = document.getElementById("encrypt-content").value;

  navigator.clipboard
    .writeText(textCopy)
    .then(() => {
      console.log("copy sucess");
    })
    .catch((err) => {
      console.error("error: ", err);
    });
}
