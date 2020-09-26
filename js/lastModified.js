//shows date last modified and current year
const dateTimeObject = new Date();
const fullYear = dateTimeObject.getFullYear();
const currentYear = document.getElementById("currentYear");
currentYear.textContent = fullYear;


document.getElementById('lastModifiedDate').textContent = document.lastModified;