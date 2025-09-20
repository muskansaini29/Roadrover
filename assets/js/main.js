/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/ 
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*===============  MIXITUP FILTER FEATURED  ===============*/
  let mixerFeatured = mixitup('.featured__content', {
    selectors: {
      target: '.featured__card'
    },
    animation: {
      duration: 300
    }
  });
  /*=============== LINK ACTIVE FEATURED ===============*/
  const linkFeatured = document.querySelectorAll('.featured__item')

  function activeFeatured(){
    linkFeatured.forEach(l=> l.classList.remove('active-featured'))
    this.classList.add('active-featured')
  }

  linkFeatured.forEach(l=> l.addEventListener('click',activeFeatured))
 /*=============== SHOW SCROLL   UP ===============*/

  function scrollup(){
    const scrollup = document.getElementById('scroll-up')
      // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
              : scrollup.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

  /*=============== SHOW SECTIONS ACTIVE LINK ===============*/
  
  const sections = document.querySelectorAll('section[id]')
    
  const scrollActive = () =>{
      const scrollDown = window.scrollY
  
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
  
      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
      }else{
        sectionsClass.classList.remove('active-link')
      }                                                    
    })
  }
  window.addEventListener('scroll', scrollActive)

  
  
  
