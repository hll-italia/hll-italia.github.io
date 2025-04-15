// Animazioni e navbar
document.addEventListener('DOMContentLoaded', function () {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    setTimeout(() => {
      heroContent.style.transition = 'opacity 1.5s ease-in-out';
      heroContent.style.opacity = '1';
    }, 300);
  }

  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark', 'navbar-dark');
      navbar.classList.remove('bg-light');
    } else {
      navbar.classList.remove('bg-dark', 'navbar-dark');
      navbar.classList.add('bg-light');
    }
  });
});

// Dati partite
const matches = [
  {
    title: "ITHL - TEAM1",
    team1: "ITHL",
    team2: "TEAM1",
    logo1: "assets/img/logo-ita.jpg",
    logo2: "assets/img/logo-ita.jpg",
    date: "2025-04-17T20:00:00",
    bg: "assets/img/slide4.jpg"
  },
  {
    title: "ITHL - TEAM2",
    team1: "ITHL",
    team2: "TEAM2",
    logo1: "assets/img/logo-ita.jpg",
    logo2: "assets/img/logo-ita.jpg",
    date: "2025-04-19T17:00:00",
    bg: "assets/img/slide3.jpg"
  },
  {
    title: "ITHL - TEAM3",
    team1: "ITHL",
    team2: "TEAM3",
    logo1: "assets/img/logo-ita.jpg",
    logo2: "assets/img/logo-ita.jpg",
    date: "2025-04-25T20:00:00",
    bg: "assets/img/slide2.jpg"
  }
];

const matchesList = document.getElementById("matches-list");
const matchTitle = document.getElementById("match-title");
const team1Logo = document.getElementById("team1-logo");
const team2Logo = document.getElementById("team2-logo");
const hero = document.getElementById("main-match");

// Crea le card dinamiche
matches.forEach((match, index) => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-3";

  const card = document.createElement("div");
  card.className = "p-3 bg-secondary rounded card-match text-white";
  card.setAttribute("data-index", index);
  card.style.cursor = "pointer";

  card.innerHTML = `
    <div class="d-flex align-items-center justify-content-between">
      <img src="${match.logo1}" height="30">
      <span class="fw-bold">${match.team1} VS ${match.team2}</span>
      <img src="${match.logo2}" height="30">
    </div>
    <div class="mt-2 small">
      ${new Date(match.date).toLocaleString("it-IT", {
        dateStyle: "medium",
        timeStyle: "short"
      })}
    </div>
  `;

  card.addEventListener("click", () => {
    updateHero(match);
    highlightCard(index);
  });

  col.appendChild(card);
  matchesList.appendChild(col);
});

// Evidenzia la card selezionata
function highlightCard(index) {
  document.querySelectorAll(".card-match").forEach((el, i) => {
    el.classList.toggle("card-selected", i === index);
    el.classList.toggle("bg-secondary", i !== index);
  });
}

// Countdown
let countdownInterval;

function updateCountdown(targetDate) {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("Giorni").textContent = String(days).padStart(2, '0');
  document.getElementById("Ore").textContent = String(hours).padStart(2, '0');
  document.getElementById("Minuti").textContent = String(minutes).padStart(2, '0');
  document.getElementById("Secondi").textContent = String(seconds).padStart(2, '0');
}

// Aggiorna hero
function updateHero(match) {
  matchTitle.textContent = match.title;
  team1Logo.src = match.logo1;
  team2Logo.src = match.logo2;
  hero.style.backgroundImage = `url('${match.bg}')`;

  clearInterval(countdownInterval);
  const targetDate = new Date(match.date);
  updateCountdown(targetDate);
  countdownInterval = setInterval(() => updateCountdown(targetDate), 1000);
}

// Carica primo match di default
updateHero(matches[0]);
highlightCard(0);


document.addEventListener('DOMContentLoaded', function() {
  const today = new Date().getDay();
  
  // Controlla se oggi è giovedì (giorno 4)
  if (today === 4) {
    // Seleziona il container e rimuovi la classe d-none per renderlo visibile, questa parte è importante, per fare test modificare il numero 4
    const thursdayContainer = document.getElementById('thursday-container');
    thursdayContainer.classList.remove('d-none');
  }
});