let burger = document.getElementsByClassName('label_burger')[0];
let cross = document.getElementsByClassName('label_cross')[0];
let body = document.getElementsByClassName('body')[0];
let navLink = document.querySelectorAll('.header-nav-link');
let nav = document.getElementsByClassName('header-nav')[0];


burger.addEventListener('click', () => {
  if(burger.classList.contains('label_burger')) {
    nav.classList.toggle('active')
    burger.classList.toggle('dn')
    cross.classList.toggle('db')
    body.classList.toggle("overflowHidden")
  }
})
cross.addEventListener('click', () => {
  if(nav.classList.contains('active')) {
    nav.classList.toggle('active')
    burger.classList.toggle('dn')
    cross.classList.toggle('db')
    body.classList.remove('overflowHidden')
  }
})

for(navs of navLink) {
  navs.addEventListener('click', () => {
    if(body.classList.contains('overflowHidden')) {
      body.classList.toggle('overflowHidden')
      nav.classList.toggle('active')
      burger.classList.toggle('dn')
      cross.classList.toggle('db')
    }
  })
}



let header = document.getElementsByClassName('header')[0];
let scrollPrev = 0;

window.addEventListener('scroll', () => {
  let scrolled = window.scrollY
  if( scrolled > 50 && scrolled > scrollPrev) {
    header.classList.add('hide')
  }
  else {
      header.classList.remove('hide')
  }
  scrollPrev = scrolled;
})


let plus = document.querySelector(".pdp_left-count-plus")
let minus = document.querySelector(".pdp_left-count-minus")
let count = document.querySelector(".pdp_left-count-number")
let price = document.querySelector(".pdp_left-price-sale")
let price1 = document.querySelector(".pdp_left-price-standart")

plus.addEventListener("click", function() {
   if (plus.classList.contains("pdp_left-count-plus")) {
      count.innerHTML++
      price.innerHTML = 350 * count.innerHTML;
      price1.innerHTML = 250 * count.innerHTML;
   }
})

minus.addEventListener("click", function() {
   if (minus.classList.contains("pdp_left-count-minus")) {
      if (count.innerHTML > 1) {
         count.innerHTML--
         price.innerHTML = 350 * count.innerHTML;
        price1.innerHTML = 250 * count.innerHTML;
      }
   }
})