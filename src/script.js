const SUPERHERO_TOKEN = "8972506016123366";
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;
const heroImageDiv = document.getElementById("heroImage");
const heroNameDiv = document.getElementById("hero-name");

const getStats = (statList) => {
  const stats = Object.keys(statList).map((stat) => {
    let statDiv = document.getElementById(`${stat}`);
    statDiv.innerText = `${statList[stat]}`;
  });
};

const getRandomSuperHero = (id) => {
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      heroImageDiv.innerHTML = `<img class="hero-image" src="${json.image.url}"/>`;
      heroNameDiv.innerText = `${json.name.toUpperCase()}`;

      // Powerstats
      getStats(json.powerstats);
    });
};

const getSearchSuperHero = (name) => {
  console.log(searchInput.value);
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      console.log(hero);
      heroImageDiv.innerHTML = `<img class="hero-image" src="${hero.image.url}"/>`;
      heroNameDiv.innerText = `${hero.name.toUpperCase()}`;

      // Powerstats
      getStats(hero.powerstats);
    });
};

const newHeroButton = document.getElementById("btn-hero");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

const getRandomHeroId = (_) => {
  const numberOfHeroes = 731;
  return Math.ceil(Math.random() * numberOfHeroes);
};

newHeroButton.onclick = (_) => getRandomSuperHero(getRandomHeroId());
searchButton.onclick = (_) => getSearchSuperHero(searchInput.value);
