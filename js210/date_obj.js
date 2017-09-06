var today = new Date();
var weekday = today.getDay();
var date = today.getDate();
var month = today.getMonth();
var tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);


var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function dateSuffix(date) {
  if (date >= 4 && date <= 20) {
    return date + 'th';
  } else if (date % 10 == 1) {
    return date + 'st';
  } else if (date % 10 == 2) {
    return date + 'nd';
  } else if (date % 10 == 3) {
    return date + 'rd';
  } else {
    return date + 'th';
  }
}

function formattedMonth(month) {
  return months[month];
}

function formattedDay(weekday) {
  return daysOfWeek[weekday];
}

function formattedDate(weekday, month, date) {
  return formattedDay(weekday) + ', ' + formattedMonth(month) + ' ' + dateSuffix(date);
}

formattedDate(weekday, month, date);

function appendZero(number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

function formatTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();

  return appendZero(hours) + ':' + appendZero(minutes);
}