const moment = require('moment');

// const dateOfBirth = moment('1988-08-17', 'YYYY-MM-DD');
const dateOfBirth = moment(new Date('1988/08/17')).format('YYYY-MM-DD');
const today = moment();
const yearsSinceBirth = today.diff(dateOfBirth, 'years');
const daysSinceBirth = today.diff(dateOfBirth, 'days');
console.log({yearsSinceBirth})
console.log({daysSinceBirth});