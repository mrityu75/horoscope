// Write code below 💖

let fortunes = [
  "Today is your day to shine ✨",
  "An opportunity will come from where you least expect it 💡",
  "Someone close to you has good news to share 🎉",
  "Stay focused, your hard work will pay off soon 💪",
  "Take a break, your mind needs rest 🌿",
  "Trust your instincts, they are guiding you right 🧭",
  "Good fortune is on the horizon 🌅",
  "You’ll meet someone who will inspire you 🌟",
  "A surprise message will brighten your day 💌",
  "Your creativity will open doors today 🎨",
  "Take a risk, it will be worth it 🎲",
  "Stay patient, your efforts are being noticed ⏳",
  "Your kindness will come back to you 💖",
  "Adventure is calling, be ready 🌍",
  "New beginnings are around the corner 🌱",
  "Your energy will attract positive people ✨",
  "Expect a small but meaningful gift 🎁",
  "A challenge will test you, but you’ll succeed 🏆",
  "Be open to change, it’s working in your favor 🔄",
  "You’ll laugh harder than you have in a long time 😂",
  "A secret will be revealed 👀",
  "Your confidence will be your superpower today 💥",
  "Financial gain is closer than you think 💰",
  "Love is flowing into your life 💕",
  "You will inspire someone without realizing it 🌟",
  "Stay humble, but don’t downplay your achievements 🙌",
  "An old friend may reconnect with you 📞",
  "Your hard work is creating unseen opportunities 🔑",
  "Peace of mind is your greatest treasure 🕊️",
  "You’ll soon see why the wait was worth it 🌸",
  "Your perseverance will turn into success 🚀",
  "Today is a perfect day to start something new 📖",
  "Happiness will come from the little things 🍀",
  "You’ll find clarity in silence 🌌",
  "Be bold, fortune favors the brave 🦁",
  "Your optimism is contagious ☀️",
  "A door may close, but a better one will open 🚪",
  "Your future is brighter than you imagine 🌠",
  "Trust the process, everything is aligning 🔮",
  "You’ll be reminded of how loved you are ❤️"
];


let month = "march" ;
let luckyNumber = Math.floor(Math.random() * fortunes.length);
let yourFortune = fortunes[luckyNumber];
let sign;



if (month === 'january') {
  sign = 'Capricorn';
  console.log("Your horoscope is" + sign + "♑\n");
  console.log("Here is a piece of fortune tell for you :" + yourFortune);

} else if (month === 'february') {
  sign = 'Aquarius';
  console.log("Your horoscope is" + sign + "♒\n");
  console.log("Here is a piece of fortune tell for you :" + yourFortune);

} else if (month === 'march') {
  sign = 'Pisces';
  console.log("Your horoscope is" + sign + "♓\n");
  console.log("Here is a piece of fortune tell for you :" + yourFortune);

} else if (month === 'april') {
  sign = 'Aries';
  console.log("Your horoscope is" + sign + "♉\n");
  console.log("Here is a piece of fortune tell for you :" + yourFortune);

} else if (month === 'may') {
  sign = 'Taurus';
  console.log("Your horoscope is" + sign + "♉\n");
  console.log("Here is a piece of fortune tell for you :" + yourFortune);

} else if (month === 'june') {
  sign = 'Gemini';
  console.log("Your horoscope is" + sign + "♊\n");
  console.log("Here is a piece of fortune tell for you :" + yourFortune);

} else if (month === 'july') {
  sign = 'Cancer';
  console.log("Your horoscope is" + sign + "♋\n");
  console.log("Here is a piece of fortune tell for you :" + yourFortune);

} else if (month === 'august') {
  sign = 'Leo';
  console.log("Your horoscope is" + sign + "♌\n");
  console.log("Here is a piece of fortune tell for you :" + yourFortune);

} else if (month === 'september') {
  sign = 'Virgo';
  console.log("Your horoscope is" + sign + "♍\n");
  console.log("Here is a piece of fortune tell for you :" + yourFortune);

} else if (month === 'october') {
  sign = 'Libra';
  console.log("Your horoscope is" + sign + "♎\n");
  console.log("Here is a piece of fortune tell for you :" + yourFortune);

} else if (month === 'november') {
  sign = 'Scorpio';
  console.log("Your horoscope is" + sign + "♏\n");
  console.log("Here is a piece of fortune tell for you :" + yourFortune);

} else {
  sign = 'Sagittarius';
  console.log("Your horoscope is" + sign + "♐\n");
  console.log("Here is a piece of fortune tell for you :" + yourFortune);

}
