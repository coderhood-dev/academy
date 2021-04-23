const { format } = require('date-fns');

const today = new Date();
const formattedToday = format(today, "dd-mm-yyyy");

console.log(formattedToday);