const button = document.querySelector("button");
const form = document.forms[0];
const input = form.querySelector('input');
const result = document.querySelector('.result');

function handleSubmit(e) {
  e.preventDefault();
  const birthDate = new Date(input.value).getTime();
  if(isNaN(birthDate)) {
    result.innerHTML = "Please enter a valid date";
    return;
  }
  const age = calcAge(birthDate);
  result.innerHTML = age;
  input.value = "";
}

function calcAge(birth) {
  const currentDate = Date.now();
  const ageMilliseconds = currentDate - birth;
  const years = Math.floor(ageMilliseconds / (1000 * 60 * 60 * 24 * 365));
  const remainingMilliseconds = ageMilliseconds - (years * 1000 * 60 * 60 * 24 * 365);
  const months = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24 * 30));
  const remainingDaysMilliseconds = remainingMilliseconds - (months * 1000 * 60 * 60 * 24 * 30);
  const days = Math.floor(remainingDaysMilliseconds / (1000 * 60 * 60 * 24));
  return `Your age is ${years} Years, ${months} Months and ${days} Days`
}
form.addEventListener('submit', handleSubmit);


