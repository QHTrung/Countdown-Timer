const daysEl = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEL = document.getElementById('seconds');
const christmasDay = new Date('Dec 24, 2024 00:00:00').getTime();

let x = setInterval(() => {
  const now = new Date().getTime();
  const distance = christmasDay - now;
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  daysEl.innerHTML = days;
  hoursEL.innerHTML = `0${hours}`.slice(-2);
  minsEl.innerHTML = `0${minutes}`.slice(-2);
  secondsEL.innerHTML = `0${seconds}`.slice(-2);
  if (distance < 0) {
    clearInterval(x);
    daysEl.innerHTML = '0';
    hoursEL.innerHTML = '0';
    minsEl.innerHTML = '0';
    secondsEL.innerHTML = '0';
  }
}, 1000);
