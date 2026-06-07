let selectedFilm = JSON.parse(sessionStorage.getItem("selectedFilm"));

let reservedSessions = [];
let sessionData = {};
let total = 0;

// HOURS
const hours = ["12:00", "15:00", "18:00", "21:00"];

// GENRE RULES
const rules = {
  "Romance": 0,
  "Drama": 1,
  "Animation": 2,
  "Horror": 3,
  "Action": 4,
  "Science Fiction": 6
};

// MOVIE INFO
function loadMovie() {
  if (!selectedFilm) return;

  document.getElementById("movieInfo").innerHTML = `
    <h3>${selectedFilm.titre}</h3>
    <p>${selectedFilm.categorie} | ${selectedFilm.region}</p>
  `;

  generateSessions();
}

// GENERATE VALID DATES FOR MOVIE
function getNextDate(dayIndex, week) {
  let d = new Date();
  let diff = (dayIndex - d.getDay() + 7) % 7 + week * 7;
  d.setDate(d.getDate() + diff);
  return d.toISOString().split("T")[0];
}

// CREATE SESSIONS
function generateSessions() {
  let cat = selectedFilm.categorie;
  let dayIndex = rules[cat];

  if (dayIndex === undefined) return;

  let select = document.getElementById("session");
  select.innerHTML = "";

  for (let w = 0; w < 3; w++) {
    let date = getNextDate(dayIndex, w);

    hours.forEach(hour => {
      let option = document.createElement("option");
      option.value = `${date}|${hour}`;
      option.textContent = `${date} - ${hour}`;
      select.appendChild(option);
    });
  }
}

// STEP 1
function goStep2() {

  let salle = document.getElementById("salle").value;
  let session = document.getElementById("session").value;

  let [date, hour] = session.split("|");

  let conflict = reservedSessions.find(r =>
    r.salle === salle &&
    r.date === date &&
    r.hour === hour
  );

  if (conflict) {
    alert("❌ Session already booked!");
    return;
  }

  sessionData = { salle, date, hour };

  document.getElementById("step1").classList.remove("active");
  document.getElementById("step2").classList.add("active");
}

// PRICE
document.addEventListener("input", () => {
  let adult = document.getElementById("adult").value * 100;
  let kid = document.getElementById("kid").value * 50;
  let student = document.getElementById("student").value * 70;

  total = adult + kid + student;
  document.getElementById("total").innerText = total;
});

// STEP 2
function goStep3() {
  if (total === 0) return alert("Select tickets!");

  document.getElementById("step2").classList.remove("active");
  document.getElementById("step3").classList.add("active");
}

// FINAL
function confirmTicket() {

  let name = document.getElementById("name").value;
  let card = document.getElementById("card").value;
  let exp = document.getElementById("exp").value;
  let cvv = document.getElementById("cvv").value;

  if (!name || !card || !exp || !cvv) {
    alert("Fill payment info");
    return;
  }

  reservedSessions.push(sessionData);

  let adult = document.getElementById("adult").value;
  let kid = document.getElementById("kid").value;
  let student = document.getElementById("student").value;

  document.getElementById("step3").classList.remove("active");
  document.getElementById("step4").classList.add("active");

  document.getElementById("ticket").innerHTML = `
    <h3>🎬 ${selectedFilm.titre}</h3>
    <p>Salle: ${sessionData.salle}</p>
    <p>Date: ${sessionData.date}</p>
    <p>Hour: ${sessionData.hour}</p>

    <hr>

    <p>Adults: ${adult} × 100 DA</p>
    <p>Kids: ${kid} × 50 DA</p>
    <p>Students: ${student} × 70 DA</p>

    <h2>Total: ${total} DA</h2>
    <h3>✅ SUCCESS</h3>
  `;
}

loadMovie();