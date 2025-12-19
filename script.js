const emoji = [
  "🚀",
  "✨",
  "🌟",
  "💫",
  "🌈",
  "🔥",
  "🎉",
  "💖",
  "💡",
  "🔮",
  "💎",
  "💯",
  "🤩",
  "🥳",
  "🤯",
  "😎",
  "😇",
  "🥰",
  "🍓",
  "🍕",
  "🎵",
  "🎈",
  "🌊",
  "⚡",
  "🦋",
  "🍭",
  "🎨",
  "🛸",
];

const main = document.querySelector(".main");
const btn = document.querySelector(".btn");

const getRandom = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const addEmoji = (e) => {
  const el = document.createElement("div");
  el.className = "emoji-item";

  const randomEmoji = emoji[getRandom(emoji.length - 1)];
  el.textContent = randomEmoji;

  const x = getRandom(90, 5);
  const y = getRandom(90, 5);

  const scale = getRandom(30, 15) / 10;
  const rotation = getRandom(45, -45);

  el.style.left = `${x}%`;
  el.style.top = `${y}%`;
  el.style.fontSize = `${getRandom(40, 20) / 10}rem`;

  el.style.setProperty("--final-scale", scale);
  el.style.setProperty("--final-rotation", `${rotation}deg`);

  const headings = document.querySelectorAll(".emoji-item");
  if (headings.length > 50) {
    headings[0].remove();
  }

  main.appendChild(el);
};

btn.addEventListener("click", addEmoji);

setTimeout(addEmoji, 500);
