/*

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

// const { starships } = require("./data/fixtures-bundle");

/**
 * ### Challenge `getName`
 * Example ✅
 * 
 * @instructions
 * Must return input object's `name` property.
 *
 * Sample data expected output: `Luke Skywalker`
*/
function getName(character) {
  // ⭐️ Example Solution Provided For First Function ⭐️
  return character.name
}

/**
 * ### Challenge `getFilmCount`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Must return the number of elements in the `films` property.
 *
 * Sample data expected output: 5
 */
function getFilmCount(character) {
  // TODO: Add your code inside the functions (others below).
  return character.films.length
}

/**
 * ### Challenge `getSecondStarshipName`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Return second starship's name from `starships` property.
 * If length is 0. Return 'none'
*/
function getSecondStarshipName(character) {
  // TODO: Add your code here.
  console.log(character);
  if (character.starships.length === 0) return "none";
  return character.starships[1].name;
}

/**
 * ### Challenge `getSummary`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Combine specified field values and return them in the following string format:
 *    Template: `{name}, {height}cm, {mass}kg. Featured in {film count} films.`
 *    Result: `Luke Skywalker, 172cm, 77kg. Featured in 5 films.`
 */
function getSummary(character) {
  // TODO: Add your code here.
  return `${character.name}, ${character.height}cm, ${character.mass}kg. Featured in ${character.films.length} films.`
}

/**
 * ### Challenge `getVehiclesCostInCreditsSumTotal`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Sum the total cost in credits for all vehicles defined on the input character.
 * Sample data expected output: 8000
*/
function getVehiclesCostInCreditsSumTotal(character) {
  // TODO: Add your code here.
  var sum = 0;
  character.vehicles.forEach(vehicle => {
    sum += vehicle.cost_in_credits;
  });
  return sum;
}
/**
 * ### Challenge `getStarshipPassengerAndCrewSumTotal`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Sum the number of crew and passenger spots for all starships defined on the
 * input character.
 *
 * Sample data expected output: 27
*/
function getStarshipPassengerAndCrewSumTotal(character) {
  // TODO: Add your code here.
  var sum = 0;
  character.starships.forEach(starship => {
    sum += starship.crew 
    sum += starship.passengers;
  });
  return sum;
}

/**
 * ### Challenge `getNthFilm`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Return the Nth `films` value (in this case title).
 * Rules: filmNumber starts at 1 and refers to the *first* film, and includes only the range 1-3.
 * Any numbers outside that range should throw an error.
 * The Error must mention the name of your favorite _extra cheesy_ movie.
 *
 * Given film #1, expected output: `A New Hope`
 * Given film #7, expected error: `There are only 3 Star Wars movies. Flan fiction excluded.`
*/
function getNthFilm(character, filmNumber) {
  // TODO: Add your code here.
  return character.films[filmNumber - 1];
}

/**
 * ### Challenge `getCargoCapacityTotal`
 * Stretch Goal 💪
 * 
 * @instructions
 * Sum the total cargo capacity for *all* vehicles and starships.
 * Some objects may not have a value for their cargo capacity.
 *
 * Sample data expected output: 80124
*/
function getCargoCapacityTotal(character) {
  // TODO: Add your code here.
  var sum = 0;
  character.starships.forEach(starship => {
    if (starship.cargo_capacity === null) return;
    sum += parseInt(starship.cargo_capacity);
  });
  character.vehicles.forEach(vehicle => {
    if (vehicle.cargo_capacity === null) return;
    sum += parseInt(vehicle.cargo_capacity);
  })
  return sum;
}

/**
 * ### Challenge `getFastestStarshipName`
 * Stretch Goal 💪
 * 
 * @instructions
 * Find the fastest starship (by atmospheric speed.)
 * Determine the correct field to compare, and return the name of the fastest.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `X-wing`
*/
function getFastestStarshipName(character) {
  // TODO: Add your code here.
  var fastestStarshipName = "none";
  var fastestStarshipSpeed = 0;
  character.starships.forEach(starship => {
    if (starship.max_atmosphering_speed > fastestStarshipSpeed) {
      fastestStarshipName = starship.name;
      fastestStarshipSpeed = starship.max_atmosphering_speed;
    }
  })
  return fastestStarshipName;
}

/**
 * ### Challenge `getLargestCargoStarshipModelName`
 * Stretch Goal 💪
 * 
 * @instructions
 * Determine the starship with the largest cargo capacity.
 * Return it's **_model_** property.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `Lambda-class T-4a shuttle`
*/
function getLargestCargoStarshipModelName(character) {
  // TODO: Add your code here.
  var starshipMaxCapacity = 0;
  var maxStarship = {model: "none"};
  character.starships.forEach(starship => {
    if (starship.cargo_capacity >= starshipMaxCapacity) {
      maxStarship = starship;
      starshipMaxCapacity = starship.cargo_capacity;
    }
  });
  return maxStarship.model;
}

/**
 * ### Challenge `getSlowestVehicleOrStarshipName`
 *Stretch Goal 💪
 *
 * @instructions
 * Find the slowest transport (including vehicles and starships)
 * based on `max_atmosphering_speed`, and return its name.
 * If the character does not have any starships or vehicles, then return string 'none'.
 *
*/
function getSlowestVehicleOrStarshipName(character) {
  // TODO: Add your code here.
  var slowestName = "none";
  var slowestSpeed = 999999999999999;
  character.starships.forEach(starship => {
    if (starship.max_atmosphering_speed < slowestSpeed) {
      slowestName = starship.name;
      slowestSpeed = starship.max_atmosphering_speed;
    }
  })
  character.vehicles.forEach(vehicle => {
    if (vehicle.max_atmosphering_speed < slowestSpeed) {
      slowestName = vehicle.name;
      slowestSpeed = vehicle.max_atmosphering_speed;
    }
  })
  return slowestName;
}





/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
// DO NOT CHANGE ANYTHING BELOW THIS LINE //
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (getName) { module.exports.getName = getName }
  if (getFilmCount) { module.exports.getFilmCount = getFilmCount }
  if (getSecondStarshipName) { module.exports.getSecondStarshipName = getSecondStarshipName }
  if (getSummary) { module.exports.getSummary = getSummary }
  if (getVehiclesCostInCreditsSumTotal) { module.exports.getVehiclesCostInCreditsSumTotal = getVehiclesCostInCreditsSumTotal }
  if (getStarshipPassengerAndCrewSumTotal) { module.exports.getStarshipPassengerAndCrewSumTotal = getStarshipPassengerAndCrewSumTotal }
  if (getNthFilm) { module.exports.getNthFilm = getNthFilm }
  if (getCargoCapacityTotal) { module.exports.getCargoCapacityTotal = getCargoCapacityTotal }
  if (getFastestStarshipName) { module.exports.getFastestStarshipName = getFastestStarshipName }
  if (getLargestCargoStarshipModelName) { module.exports.getLargestCargoStarshipModelName = getLargestCargoStarshipModelName }
  if (getSlowestVehicleOrStarshipName) { module.exports.getSlowestVehicleOrStarshipName = getSlowestVehicleOrStarshipName }
}
