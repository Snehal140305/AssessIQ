const data = {

quant: [
[
{q:"If the cost of 5 pens is ₹25, what is the cost of 12 pens?",o:["₹40","₹50","₹60","₹70"],a:2},
{q:"Find the average of 10, 20, 30, 40.",o:["20","25","30","35"],a:1},
{q:"What is 25% of 200?",o:["25","50","75","100"],a:1},
{q:"A train covers 60 km in 1 hour. Speed?",o:["40","50","60","70"],a:2},
{q:"If x+5=15, x=?",o:["5","8","10","12"],a:2},
{q:"Simple Interest on ₹1000 at 10% for 1 year?",o:["50","100","150","200"],a:1},
{q:"Value of 3² + 4² ?",o:["20","25","30","35"],a:1},
{q:"What is 15% of 300?",o:["30","40","45","50"],a:2},
{q:"LCM of 4 and 6?",o:["8","10","12","16"],a:2},
{q:"Which is greater: 3/4 or 2/3?",o:["3/4","2/3","Equal","None"],a:0}
],
[
{q:"Ratio of 2:4 simplified?",o:["1:2","2:1","3:2","4:1"],a:0},
{q:"Average of 5,10,15?",o:["8","10","12","15"],a:1},
{q:"Value of 7*8?",o:["54","56","58","60"],a:1},
{q:"20% of 150?",o:["20","25","30","35"],a:2},
{q:"Find x: 2x=20",o:["5","8","10","12"],a:2},
{q:"Simple Interest of ₹500 at 10%?",o:["25","50","75","100"],a:1},
{q:"Area of square side 4?",o:["8","12","16","20"],a:2},
{q:"20+30/5=?",o:["10","14","16","26"],a:3},
{q:"LCM of 3 and 5?",o:["10","15","20","25"],a:1},
{q:"What is 50% of 90?",o:["40","45","50","55"],a:1}
],
[
{q:"Speed = Distance / ?",o:["Time","Speed","Work","Power"],a:0},
{q:"Value of 9²?",o:["18","27","72","81"],a:3},
{q:"Which is smallest?",o:["0.5","0.05","0.005","0.0005"],a:3},
{q:"Find 30% of 500",o:["100","120","150","200"],a:2},
{q:"If 3x=18, x=?",o:["3","6","9","12"],a:1},
{q:"Area of rectangle 4x5?",o:["9","15","20","25"],a:2},
{q:"2³=?",o:["4","6","8","10"],a:2},
{q:"HCF of 8 and 12?",o:["2","3","4","6"],a:2},
{q:"40% of 200?",o:["40","60","80","100"],a:2},
{q:"Which is prime?",o:["4","6","8","7"],a:3}
],
[
{q:"Value of 100/4?",o:["20","25","30","35"],a:1},
{q:"Perimeter of square side 5?",o:["10","15","20","25"],a:2},
{q:"Which is even?",o:["3","5","7","8"],a:3},
{q:"Find: 9+6/3",o:["11","13","15","17"],a:0},
{q:"10% of 400?",o:["20","30","40","50"],a:2},
{q:"Which is multiple of 9?",o:["36","25","18","14"],a:0},
{q:"Find x: x-5=10",o:["10","12","15","18"],a:2},
{q:"Area of triangle base 4 height 6?",o:["10","12","14","16"],a:1},
{q:"LCM of 2,3?",o:["3","4","5","6"],a:3},
{q:"25+75=?",o:["50","75","100","150"],a:2}
],
[
{q:"Which is largest?",o:["2/3","3/4","4/5","5/6"],a:3},
{q:"Average of 2,4,6,8?",o:["4","5","6","7"],a:1},
{q:"5²=?",o:["10","15","20","25"],a:3},
{q:"Value of 15*2?",o:["20","25","30","35"],a:2},
{q:"50% of 60?",o:["20","25","30","35"],a:2},
{q:"Which is odd?",o:["6","8","10","11"],a:3},
{q:"Area of square side 6?",o:["30","32","34","36"],a:3},
{q:"HCF of 10,20?",o:["5","10","15","20"],a:1},
{q:"Speed = Distance / ?",o:["Work","Time","Power","Energy"],a:1},
{q:"Which is composite?",o:["2","3","5","9"],a:3}
]
],

logical: [
[
{q:"Odd one out?",o:["Apple","Banana","Carrot","Mango"],a:2},
{q:"Next: 2,4,8,16, ?",o:["18","24","32","34"],a:2},
{q:"Find missing: A,C,E, ?",o:["F","G","H","I"],a:1},
{q:"Day after Tuesday?",o:["Wed","Thu","Fri","Sat"],a:1},
{q:"Pen : Write :: Knife : ?",o:["Cut","Eat","Paint","Jump"],a:0},
{q:"1,4,9,16, ?",o:["20","24","25","30"],a:2},
{q:"Opposite of Tall?",o:["Long","Short","Big","High"],a:1},
{q:"All roses are flowers. All flowers are plants. Roses are?",o:["Plants","Trees","Fruits","Roots"],a:0},
{q:"Which is different?",o:["Cat","Dog","Cow","Car"],a:3},
{q:"Next: 5,10,20,40, ?",o:["50","60","80","100"],a:2}
],
[
{q:"Odd one out?",o:["Circle","Square","Triangle","Blue"],a:3},
{q:"Find next: 3,6,9, ?",o:["11","12","13","14"],a:1},
{q:"Brother of your father is?",o:["Cousin","Uncle","Nephew","Aunt"],a:1},
{q:"Next: 1,1,2,3,5, ?",o:["6","7","8","9"],a:2},
{q:"Opposite of Cold?",o:["Hot","Cool","Freeze","Warm"],a:0},
{q:"Find missing: B,D,F, ?",o:["G","H","I","J"],a:1},
{q:"Which is different?",o:["Dog","Cat","Fish","Rose"],a:3},
{q:"Clock : Time :: Thermometer : ?",o:["Heat","Degree","Temperature","Energy"],a:2},
{q:"Next: 2,6,12,20, ?",o:["24","30","32","36"],a:1},
{q:"Odd one out?",o:["Bus","Car","Bike","Tree"],a:3}
],
[
{q:"Odd one out?",o:["Red","Blue","Green","Pen"],a:3},
{q:"Next: 10,20,30, ?",o:["35","40","50","60"],a:1},
{q:"Which is odd?",o:["Bus","Car","Bike","Tree"],a:3},
{q:"A is B’s mother. B is C’s brother. A is C’s?",o:["Mother","Father","Sister","Brother"],a:0},
{q:"Next: 1,4,9,16, ?",o:["20","25","30","36"],a:1},
{q:"Opposite of Old?",o:["New","Young","Fresh","All"],a:3},
{q:"Find missing: 2,4,8, ?",o:["10","12","16","18"],a:2},
{q:"Odd one out?",o:["Rose","Lotus","Lily","Car"],a:3},
{q:"Book : Read :: Food : ?",o:["Eat","Cook","Serve","Wash"],a:0},
{q:"Next: 7,14,21, ?",o:["24","28","30","35"],a:1}
],
[
{q:"Which is different?",o:["Fan","AC","TV","Water"],a:3},
{q:"Next: 5,15,45, ?",o:["60","90","135","150"],a:2},
{q:"Odd one out?",o:["January","March","April","Sunday"],a:3},
{q:"Father of your mother?",o:["Uncle","Aunt","Grandfather","Brother"],a:2},
{q:"Next: 1,3,6,10, ?",o:["12","13","15","20"],a:2},
{q:"Opposite of Heavy?",o:["Light","Weight","Soft","Large"],a:0},
{q:"Which is different?",o:["Pen","Book","Pencil","Phone"],a:3},
{q:"Fish : Water :: Bird : ?",o:["Sky","Tree","Air","Nest"],a:2},
{q:"Next: 4,9,16,25, ?",o:["30","36","40","49"],a:1},
{q:"Odd one out?",o:["Car","Bus","Train","River"],a:3}
],
[
{q:"Odd one out?",o:["Cat","Dog","Cow","Chair"],a:3},
{q:"Next: 2,5,10,17, ?",o:["24","26","28","30"],a:1},
{q:"Which is different?",o:["Red","Blue","Green","Apple"],a:3},
{q:"Sister of your brother is?",o:["Mother","You","Aunt","Niece"],a:1},
{q:"Next: 3,6,12,24, ?",o:["30","36","48","60"],a:2},
{q:"Opposite of Early?",o:["Late","Soon","Fast","Quick"],a:0},
{q:"Find missing: A,B,D,G, ?",o:["H","I","J","K"],a:2},
{q:"Which is odd?",o:["Fan","Light","AC","Stone"],a:3},
{q:"Doctor : Hospital :: Teacher : ?",o:["School","College","Office","Home"],a:0},
{q:"Next: 1,3,5,7, ?",o:["8","9","10","11"],a:1}
]
],

verbal: [
[
{q:"Synonym of Happy?",o:["Sad","Joyful","Angry","Tired"],a:1},
{q:"Antonym of Big?",o:["Large","Huge","Small","Tall"],a:2},
{q:"He ___ going to school.",o:["is","are","were","be"],a:0},
{q:"Plural of Child?",o:["Childs","Children","Childrens","Childes"],a:1},
{q:"Correct spelling?",o:["Recieve","Receive","Receeve","Receve"],a:1},
{q:"Synonym of Start?",o:["Begin","Stop","End","Close"],a:0},
{q:"Antonym of Fast?",o:["Slow","Quick","Speed","Rapid"],a:0},
{q:"She ___ a car.",o:["have","has","had","having"],a:1},
{q:"Opposite of Old?",o:["New","Fresh","Young","All"],a:3},
{q:"Plural of Mouse?",o:["Mouses","Mice","Mouseses","Mouse"],a:1}
],
[
{q:"Synonym of Angry?",o:["Happy","Furious","Calm","Soft"],a:1},
{q:"Antonym of Rich?",o:["Wealthy","Poor","Strong","Kind"],a:1},
{q:"Fill: I ___ completed the work.",o:["has","have","had","am"],a:1},
{q:"Plural of Leaf?",o:["Leafs","Leaves","Leafes","Leaf"],a:1},
{q:"Correct spelling?",o:["Enviroment","Environment","Envirnment","Environmnt"],a:1},
{q:"Synonym of Quick?",o:["Slow","Fast","Late","Lazy"],a:1},
{q:"Antonym of Clean?",o:["Neat","Pure","Dirty","Fresh"],a:2},
{q:"She ___ cooking.",o:["is","are","were","be"],a:0},
{q:"Opposite of High?",o:["Low","Tall","Deep","Long"],a:0},
{q:"Plural of Tooth?",o:["Tooths","Teeth","Toothes","Tooth"],a:1}
],
[
{q:"Synonym of Brave?",o:["Coward","Bold","Weak","Lazy"],a:1},
{q:"Antonym of Old?",o:["Ancient","New","Fresh","Modern"],a:1},
{q:"He ___ his homework.",o:["do","does","did","done"],a:1},
{q:"Plural of Man?",o:["Men","Mans","Manes","Man"],a:0},
{q:"Correct spelling?",o:["Succesful","Successful","Succesfull","Succeful"],a:1},
{q:"Synonym of Smart?",o:["Clever","Slow","Dull","Stupid"],a:0},
{q:"Antonym of Easy?",o:["Hard","Soft","Simple","Nice"],a:0},
{q:"They ___ ready.",o:["is","are","was","be"],a:1},
{q:"Opposite of Short?",o:["Tiny","Tall","Low","Near"],a:1},
{q:"Plural of Foot?",o:["Foots","Feets","Feet","Foot"],a:2}
],
[
{q:"Synonym of Begin?",o:["Start","Stop","End","Close"],a:0},
{q:"Antonym of Heavy?",o:["Big","Light","Huge","Hard"],a:1},
{q:"She ___ singing.",o:["is","are","was","be"],a:0},
{q:"Plural of Ox?",o:["Oxes","Oxen","Oxes","Ox"],a:1},
{q:"Correct spelling?",o:["Beautifull","Beautiful","Beutiful","Beautful"],a:1},
{q:"Synonym of Cold?",o:["Hot","Cool","Warm","Chill"],a:3},
{q:"Antonym of Brave?",o:["Fearless","Coward","Bold","Strong"],a:1},
{q:"He ___ angry.",o:["is","are","were","be"],a:0},
{q:"Opposite of Open?",o:["Close","Shut","Lock","All"],a:3},
{q:"Plural of Goose?",o:["Gooses","Geese","Goos","Goose"],a:1}
],
[
{q:"Synonym of Silent?",o:["Noisy","Quiet","Loud","Talk"],a:1},
{q:"Antonym of Happy?",o:["Joyful","Glad","Sad","Smile"],a:2},
{q:"They ___ playing.",o:["is","are","was","be"],a:1},
{q:"Plural of Deer?",o:["Deers","Deer","Deeres","Deeren"],a:1},
{q:"Correct spelling?",o:["Occured","Occurred","Ocurred","Occur"],a:1},
{q:"Synonym of Strong?",o:["Weak","Powerful","Soft","Tiny"],a:1},
{q:"Antonym of Rich?",o:["Poor","Wealthy","Strong","Healthy"],a:0},
{q:"She ___ late.",o:["is","are","were","be"],a:0},
{q:"Opposite of Dark?",o:["Black","Bright","Light","Dim"],a:2},
{q:"Plural of Woman?",o:["Womans","Women","Womens","Woman"],a:1}
]
],

technical: [
[
{q:"HTML stands for?",o:["Hyper Text Markup Language","High Text ML","None","Hyper Tool ML"],a:0},
{q:"CSS is used for?",o:["Structure","Styling","Logic","Database"],a:1},
{q:"JS is a ___ language.",o:["Markup","Styling","Programming","Query"],a:2},
{q:"Tag for image?",o:["<img>","<image>","<pic>","<src>"],a:0},
{q:"Which is browser?",o:["Chrome","Linux","Java","Python"],a:0},
{q:"CSS extension?",o:[".js",".css",".html",".txt"],a:1},
{q:"JS keyword for variable?",o:["var","let","const","All"],a:3},
{q:"HTML is ___ language.",o:["Programming","Markup","Query","DB"],a:1},
{q:"Which runs JS?",o:["Browser","Compiler","OS","DB"],a:0},
{q:"<br> means?",o:["Bold","Break","Box","Big"],a:1}
],
[
{q:"JS stands for?",o:["JavaScript","JavaSource","JustScript","None"],a:0},
{q:"Which is not a JS data type?",o:["Number","String","Boolean","Float"],a:3},
{q:"Which symbol for comments in JS?",o:["//","##","**","%%"],a:0},
{q:"CSS property for text color?",o:["background","font","color","style"],a:2},
{q:"HTML tag for link?",o:["<a>","<link>","<href>","<url>"],a:0},
{q:"Which is not CSS?",o:["margin","padding","border","console"],a:3},
{q:"JS function to print?",o:["log()","print()","write()","console.log()"],a:3},
{q:"HTML tag for list?",o:["<ul>","<li>","<ol>","All"],a:3},
{q:"Which is JS loop?",o:["for","while","do-while","All"],a:3},
{q:"CSS property for size?",o:["font-size","text-style","font-weight","color"],a:0}
],
[
{q:"Which runs HTML?",o:["Compiler","Browser","OS","Server"],a:1},
{q:"CSS stands for?",o:["Cascading Style Sheets","Computer Style Sheet","Color Style System","None"],a:0},
{q:"Which tag for paragraph?",o:["<p>","<para>","<pr>","<pg>"],a:0},
{q:"JS operator for AND?",o:["&&","||","==","!="],a:0},
{q:"Which is array?",o:["{}","[]","()","<>"],a:1},
{q:"CSS property for background?",o:["bg","background","color","image"],a:1},
{q:"Which stores value?",o:["var","let","const","All"],a:3},
{q:"Which is boolean?",o:["true","yes","1","on"],a:0},
{q:"HTML tag for table?",o:["<table>","<tab>","<tb>","<t>"],a:0},
{q:"JS used for?",o:["Structure","Design","Logic","None"],a:2}
],
[
{q:"Which is correct JS variable?",o:["1a","_a","-a","@a"],a:1},
{q:"HTML tag for break?",o:["<br>","<break>","<lb>","<b>"],a:0},
{q:"CSS property for center?",o:["align","center","text-align","float"],a:2},
{q:"JS comparison operator?",o:["==","=","++","--"],a:0},
{q:"Which is string?",o:["123","'abc'","true","[]"],a:1},
{q:"CSS for bold?",o:["font-bold","bold","font-weight","text-bold"],a:2},
{q:"JS method to add?",o:["push()","add()","append()","insert()"],a:0},
{q:"HTML tag for form?",o:["<form>","<input>","<box>","<submit>"],a:0},
{q:"Which is CSS unit?",o:["px","pt","cm","All"],a:3},
{q:"JS alert box?",o:["alert()","msg()","show()","warn()"],a:0}
],
[
{q:"Which is not JS keyword?",o:["var","let","define","const"],a:2},
{q:"HTML tag for button?",o:["<btn>","<button>","<click>","<press>"],a:1},
{q:"CSS property for shadow?",o:["shadow","box-shadow","font-shadow","text-bold"],a:1},
{q:"JS operator for OR?",o:["&&","||","!=","=="],a:1},
{q:"Which is object?",o:["[]","{}","()","<>"],a:1},
{q:"CSS property for width?",o:["size","length","width","span"],a:2},
{q:"JS to convert string to int?",o:["parseInt()","Number()","Both","None"],a:2},
{q:"HTML tag for input?",o:["<input>","<box>","<enter>","<data>"],a:0},
{q:"Which is loop?",o:["for","if","switch","break"],a:0},
{q:"JS file extension?",o:[".js",".java",".json",".jsx"],a:0}
]
]
};

/* ------------------ DOM CACHE ------------------ */
const dashboard = document.getElementById("dashboard");
const setBox = document.getElementById("set-box");
const quizBox = document.getElementById("quiz-container");
const resultBox = document.getElementById("result-box");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("time-left");
const sectionTitle = document.getElementById("section-title");
const correctEl = document.getElementById("correct");
const wrongEl = document.getElementById("wrong");
const accuracyEl = document.getElementById("accuracy");
const backBtn = document.getElementById("backToDashboard");

/* ------------------ STATE ------------------ */
let category = "";
let currentSet = [];
let qIndex = 0;
let correct = 0;
let wrong = 0;
let timer;
let time = 20;

/* ------------------ UTILITIES ------------------ */
function shuffle(arr){
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/* ------------------ DASHBOARD ------------------ */
function showSets(cat){
  category = cat;
  dashboard.classList.add("hidden");
  quizBox.classList.add("hidden");
  resultBox.classList.add("hidden");

  setBox.classList.remove("hidden");

  const setList = document.getElementById("set-list");
  setList.innerHTML = "";

  data[cat].forEach((_, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerText = `Set ${i+1}`;
    card.addEventListener("click", () => startTest(i));
    setList.appendChild(card);
  });
}



/* ------------------ START TEST ------------------ */
function startTest(i){
  clearInterval(timer);
  qIndex = 0;
  correct = 0;
  wrong = 0;

  currentSet = [...data[category][i]];
  shuffle(currentSet);

  sectionTitle.innerText = category.toUpperCase() + " TEST";

  setBox.classList.add("hidden");
  quizBox.classList.remove("hidden");

  loadQuestion();
}

/* ------------------ LOAD QUESTION ------------------ */
function loadQuestion(){
  clearInterval(timer);
  time = 20;
  timerEl.innerText = time;

  timer = setInterval(() => {
    time--;
    timerEl.innerText = time;
    if(time < 0) check(-1);
  }, 1000);

  const q = currentSet[qIndex];
  questionEl.innerText = q.q;
  optionsEl.innerHTML = "";

  q.o.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt;
    div.addEventListener("click", () => check(i));
    optionsEl.appendChild(div);
  });
}

/* ------------------ CHECK ANSWER ------------------ */
function check(i){
  clearInterval(timer);

  const ans = currentSet[qIndex].a;
  document.querySelectorAll(".option").forEach((b, idx) => {
    b.onclick = null;
    if(idx === ans) b.style.background = "#4CAF50";
    if(idx === i && i !== ans) b.style.background = "#f44336";
  });

  i === ans ? correct++ : wrong++;

  setTimeout(() => {
    qIndex++;
    qIndex < currentSet.length ? loadQuestion() : showResult();
  }, 800);
}

/* ------------------ RESULT ------------------ */
function showResult(){
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  correctEl.innerText = correct;
  wrongEl.innerText = wrong;
  accuracyEl.innerText = Math.round((correct / currentSet.length) * 100);
}

/* ------------------ BACK BUTTON ------------------ */
backBtn.onclick = () => {
  setBox.classList.add("hidden");
  dashboard.classList.remove("hidden");
};
