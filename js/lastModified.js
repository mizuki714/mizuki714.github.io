//shows date last modified
const options = {weekday: 'long', day: 'numeric', month:'long', year: 'numeric'};
document.getElementById('lastModifiedDate').textContent = new Date().toLocaleDateString('en-US', options);
