const headerToggle = document.querySelector('.header__toggle');
const headerNav = document.querySelector('.header__nav');

headerToggle.addEventListener('click', () =>{
   headerToggle.classList.toggle("active");
  if(headerToggle.classList.contains('active')){
   headerNav.style.left = "0%";
  }
  else{
   headerNav.style.left = "-80%";
  }
})




