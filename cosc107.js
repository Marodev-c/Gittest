/*Declare variable to store months of a year*/
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  /*Declare variable to store days in a week*/
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  
  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');

  /*Declare variables storing current time such as Year,month,day,hour,minute e.t.c*/
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();

  /*Declare variable called futuredate and time in the future where the timer ends and starts again*/
  const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

  /*Extracts the components from futuredate*/
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();
  /*Retrieves months from months array*/
  let month = futureDate.getMonth();
  month = months[month];
  /*Rerieves Days from weekdays array*/
  const weekday = weekdays[futureDate.getDay()];
  const date = futureDate.getDate();
  /*Updates the content giveaway from the html with the calaculated future date*/
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} at ${hours}:${minutes}am`;
  
  const futureTime = futureDate.getTime();
  
  /*Countdown logic*/
  function getCountdownTimer() {
    const today = new Date().getTime();
  
    const currentTime = futureTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
  
   
    let days = currentTime / oneDay;
    days = Math.floor(days);
  
    let hours = Math.floor((currentTime % oneDay) / oneHour);
  
    let minutes = Math.floor((currentTime % oneHour) / oneMinute);
  
    let seconds = Math.floor((currentTime % oneMinute) / 1000);
  
    const values = [days, hours, minutes, seconds];

    function format(item) {
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item;
    }
  
    items.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
    });
  
    if (currentTime < 0) {
      clearInterval(countdown);
      const expiredMessage = document.querySelector('.expired-message');
      deadline.innerHTML = `<h4 class="expired expired-message">Sorry, this giveaway has expired! <br/> Please check back soon.</h4>`;
  
      expiredMessage.style.color = 'red';
      expiredMessage.style.fontWeight = 'bold';
      expiredMessage.textContent = expiredMessage.textContent.toUpperCase();
    }
  
  }
  
  let countdown = setInterval(getCountdownTimer, 1000);
  
  getCountdownTimer();
