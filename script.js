const roastButton = document.getElementById("roastButton");
const roastBox = document.getElementById("roastBox");
const copyBtn = document.getElementById("copyBtn");
const darkModeBtn = document.getElementById("darkModeBtn");

const counter = document.getElementById("counter");
const legendCounter = document.getElementById("legendCounter");

const categoryButtons = document.querySelectorAll(".category");

let roastCount = 0;
let legendaryCount = 0;

let currentCategory = "beginner";

const roasts = {

beginner:[
"Your Wi-Fi has more confidence than you.",
"You look like you clap when the plane lands.",
"You have two brain cells and they're both on vacation.",
"You blink manually now.",
"Your reflection sighs every morning.",
"You'd lose hide and seek in an empty room.",
"You could trip over a wireless connection.",
"You microwave cereal, don't you?",
"You make calculators do extra work.",
"You probably read terms and conditions for fun."
],

developer:[
"Your code works because the bugs gave up.",
"You use Stack Overflow as your diary.",
"Your semicolons are crying.",
"You have 99 problems and JavaScript caused 98.",
"Your code has more patches than a pirate ship.",
"You debug by refreshing repeatedly.",
"Git fears your commits.",
"You treat warnings like decorations.",
"Your indentation needs therapy.",
"Even AI refuses to explain your code."
],

gamer:[
"You rage at tutorial levels.",
"You blame lag while playing offline.",
"NPCs avoid you.",
"Your aim needs GPS.",
"You pause online games.",
"You lost to the practice bot.",
"Your keyboard filed a complaint.",
"Your mouse deserves better.",
"You celebrate loading screens.",
"You camp in single-player."
],

school:[
"Even your calculator is disappointed.",
"Your homework hides from you.",
"Your backpack weighs more than your GPA.",
"Your pencil writes resignation letters.",
"You ask the teacher if the test is optional.",
"You bring vibes instead of notes.",
"Your notebook is mostly doodles.",
"You study by hoping.",
"Your exam guessed you instead.",
"Your eraser works harder than your brain."
],

ai:[
"Even ChatGPT asked for help.",
"The robots voted against you.",
"Your prompts confuse the AI.",
"The chatbot muted itself.",
"Even autocorrect gave up.",
"Your artificial intelligence is natural confusion.",
"Neural networks disconnect when you arrive.",
"Your prompts need therapy.",
"You crashed the algorithm emotionally.",
"The AI generated an apology instead."
],

savage:[
"You are proof that loading forever is possible.",
"Your confidence is in airplane mode.",
"You make Mondays look exciting.",
"Your shadow left for someone cooler.",
"Even your echo ignores you.",
"Your keyboard types better ideas without you.",
"You lose arguments with mirrors.",
"You'd hide during hide-and-seek by announcing your location.",
"Even your coffee needs coffee.",
"You're the reason instructions exist."
]

};

categoryButtons.forEach(button=>{

button.addEventListener("click",()=>{

categoryButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

currentCategory=button.dataset.category;

});

});

roastButton.addEventListener("click",generateRoast);

function generateRoast(){

const list=roasts[currentCategory];

const random=Math.floor(Math.random()*list.length);

const legendary=Math.random()<0.05;

roastCount++;

counter.textContent=roastCount;

roastBox.classList.remove("fade","legendary","shake");

void roastBox.offsetWidth;

if(legendary){

legendaryCount++;

legendCounter.textContent=legendaryCount;

roastBox.innerHTML=
"🔥 <strong>LEGENDARY ROAST</strong><br><br>"+list[random];

roastBox.classList.add("legendary");
roastBox.classList.add("shake");

}
else{

roastBox.textContent=list[random];

}

roastBox.classList.add("fade");

}

copyBtn.addEventListener("click",()=>{

navigator.clipboard.writeText(roastBox.innerText);

copyBtn.textContent="✅ Copied!";

setTimeout(()=>{

copyBtn.textContent="📋 Copy Roast";

},1500);

});

darkModeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

darkModeBtn.textContent="☀️ Light Mode";

}
else{

darkModeBtn.textContent="🌙 Dark Mode";

}

});

