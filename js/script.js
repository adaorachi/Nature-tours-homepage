const selectElement = (s) => document.querySelector(s);

// open nav bar
selectElement('.open').addEventListener('click', ()=> {
  selectElement('.nav-list').classList.add('active');
})

// close nav bar
selectElement('.close').addEventListener('click', ()=> {
  selectElement('.nav-list').classList.remove('active');
})
