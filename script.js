const reasons = [
  "You are my SHONI 👻",
  "Your smile makes my day better 😊",
  "You always listen to me when I need it 🫶",
  "You make even ordinary moments feel special 🌟",
  "You're kind, caring, and compassionate 💗",
  "Your laughter is pure music 🎶",
  "You inspire me to be a better person 💪",
  "You’re strong, even when things get tough 💫",
  "You’re silly in the cutest way 🐣",
  "Your heart is the most beautiful thing 💖",
  "You make my world colorful 🎨",
  "You’re effortlessly gorgeous ✨",
  "You support my dreams and ideas 🎯",
  "You don’t even realize how special you are 🌈",
  "You understand me without words 💬",
  "Your energy lights up a room 🔥",
  "You’re unique and irreplaceable 🧩",
  "You make me feel seen, heard, and loved 🫂",
  "Every little thing you do melts my heart 🥺",
  "Just... you. You being you. That’s enough ❤️",
  "You have the most beautiful eyes 👀",
  "You care deeply about others 💞",
  "You're my favorite notification 📱",
  "You’re so naturally cute, it’s unreal 🥰",
  "You believe in me, even when I don’t 💭",
  "You notice the little things 💡",
  "You're patient with me 🙏",
  "You’re honest and real 💬",
  "You're my calm in chaos 🌧️☀️",
  "You remember the small details 🧠",
  "You're goofy in the best way 😂",
  "You’re my favorite person to spend time with ⏳",
  "You bring peace to my life 🕊️",
  "You're always evolving and growing 🌱",
  "You're creative and talented 🎨",
  "You never stop being kind 🌼",
  "You make me laugh even on bad days 🤭",
  "You don’t judge me 🙈",
  "You're the best part of my day 🫶",
  "You inspire me to work harder 📈",
  "You’re an amazing listener 👂",
  "You give the best advice 💡",
  "You’re emotionally intelligent 🧠💓",
  "You’re humble, no matter how amazing you are 🌟",
  "You always find the right words 📝",
  "You show me what love really is 💝",
  "You’re thoughtful and considerate 💐",
  "You care about your dreams and passions 🔥",
  "You never stop being beautiful 🦋",
  "You're the definition of genuine 💯",
  "You have a heart of gold 💛",
  "You're so understanding 👼",
  "You’re the most special girl I’ve ever met 🌸",
  "You brighten up my dark days 🌞",
  "You’re my muse 💌",
  "You challenge me to grow 🌱",
  "You help me see the world differently 🌍",
  "You make the ordinary feel magical ✨",
  "You surprise me in the best ways 🎁",
  "You're a beautiful soul 💫",
  "You're so fun to talk to 🗣️",
  "You’re never boring, not for one second 🔥",
  "You're the missing puzzle piece in my life 🧩",
  "You’re everything I never knew I needed 💘",
  "You're strong and soft at the same time 🌷",
  "You care even when it's hard 🥲",
  "You're rare and real 💎",
  "You're my biggest inspiration 📖",
  "You respect yourself and others 🤝",
  "You’re graceful under pressure 🦢",
  "You’re kind even to strangers 🫂",
  "You light up my thoughts 💡",
  "You're someone I admire deeply 🤍",
  "You're everything beautiful in one person 🎇",
  "You bring joy into my life 🎉",
  "You're the reason I believe in love again 💘",
  "You’re always on my mind 🌙",
  "You're unforgettable 💭",
  "You feel like home 🏡",
  "You make my heart skip a beat 💓",
  "You’re more than words can explain 📚",
  "You bring out the best in me 🏆",
  "You’re effortlessly elegant 👗",
  "You are worth every effort 💪",
  "You look cute even when you're angry 😡💕",
  "You make life more meaningful 🌼",
  "You make silence feel comfortable 🤫",
  "You laugh at my dumb jokes 😅",
  "You’re supportive of everything I do 📣",
  "You make me feel lucky every day 🍀",
  "You’re the most beautiful thought in my mind 🧠❤️",
  "You're sweet without even trying 🍯",
  "You are everything I’ve been looking for 🔍",
  "You're the one I want to grow old with 👵🧓",
  "You’re worth waiting for ⏰",
  "You're my heart's favorite person 💓",
  "You're gentle and fierce at the same time 🐯🌸",
  "You’re one of a kind 🦄",
  "You're my greatest blessing 🙏",
  "You deserve the whole world 🌎",
  "You're simply... my everything 💗"
];

const container = document.getElementById("reasons");

reasons.forEach((text, index) => {
  const reasonDiv = document.createElement("div");
  reasonDiv.classList.add("reason");
  reasonDiv.textContent = `${index + 1}. ${text}`;
  container.appendChild(reasonDiv);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

// Fix autoplay block by browsers
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("background-music");

  // Play after first user interaction
  const enableAudio = () => {
    audio.play().catch((e) => {
      console.log("Audio autoplay blocked until interaction.");
    });
    document.removeEventListener("click", enableAudio);
    document.removeEventListener("keydown", enableAudio);
  };

  document.addEventListener("click", enableAudio);
  document.addEventListener("keydown", enableAudio);
});

document.querySelectorAll(".reason").forEach((el) => observer.observe(el));

