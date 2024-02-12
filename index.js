let currentValue = "";

const letterToWord = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const wordToLetter = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
};

const oldValues = Object.values(letterToWord);
const newValues = Object.values(wordToLetter);

function encryptContent() {
  currentValue = document.getElementById("text-content").value;

  let encryptedValue = "";

  for (let i = 0; i < currentValue.length; i++) {
    if (currentValue.length > 0) {
      const char = currentValue[i].toLowerCase();
      encryptedValue += letterToWord[char] || char;
    }
  }

  currentValue = encryptedValue;

  document.getElementById("encrypt-content").value = currentValue;
}

function decryptContent() {
  let decryptContent = currentValue;

  oldValues.forEach((word, index) => {
    decryptContent = decryptContent.replace(
      new RegExp(word, "g"),
      newValues[index]
    );
  });

  document.getElementById("encrypt-content").value = decryptContent;
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
