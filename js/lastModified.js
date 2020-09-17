const options = {weekday: 'long', day: 'numeric', month:'long', year: 'numeric'};
document.getElementById('dateLastModified').textContent = newDate().toLocalDateString('en-US', options);