// navbar js
( () => {
    const factorySideNav = function factorySideNav() {
      // DOM
      const showButtonEl = document.querySelector( '.js-menu-show' );
      const hideButtonEl = document.querySelector( '.js-menu-hide' );
      const sideNavEl = document.querySelector( '.js-side-nav' );
      const sideNavContainerEl = document.querySelector( '.js-side-nav-container' );
      
      // State
      let startX = 0;
      let currentX = 0;
      let touchingSideNav = false;
      
      const onTransitionEnd = function onTransitionEnd( evt ) {
        sideNavEl.classList.remove( 'side-nav--animatable' );
        sideNavEl.removeEventListener( 'transitionend', onTransitionEnd );
      };
      
      const showSideNav = function showSideNav() {
        sideNavEl.classList.add( 'side-nav--animatable' );
        sideNavEl.classList.add( 'side-nav--visible' );
        sideNavEl.addEventListener( 'transitionend', onTransitionEnd );
      };
      
      const hideSideNav = function hideSideNav() {
        sideNavEl.classList.add( 'side-nav--animatable' );
        sideNavEl.classList.remove( 'side-nav--visible' );
        sideNavEl.addEventListener( 'transitionend', onTransitionEnd );
      };
      
      const update = function update() {
        if ( !touchingSideNav ) return;
        
        requestAnimationFrame( update );
        
        const translateX = Math.min( 0, currentX - startX );
        sideNavContainerEl.style.transform = `translateX( ${ translateX }px )`;
      };
      
      const onTouchStart = function onTouchStart( evt ) {
        if ( !sideNavEl.classList.contains( 'side-nav--visible' ) ) return;
        
        startX = evt.touches[ 0 ].pageX;
        currentX = startX;
        
        touchingSideNav = true;
        requestAnimationFrame( update );
      };
      
      const onTouchMove = function onTouchMove( evt ) {
        if ( !touchingSideNav ) return;
        
        currentX = evt.touches[ 0 ].pageX;
      };
      
      const onTouchEnd = function onTouchEnd( evt ) {
        if ( !touchingSideNav ) return;
        
        touchingSideNav = false;
        
        const translateX = Math.min( 0, currentX - startX );
        sideNavContainerEl.style.transform = '';
        
        if ( translateX < 0 ) hideSideNav();
      }
      
      const blockClicks = function blockClicks( evt ) {
        evt.stopPropagation();
      };
      
      const addEventListeners = function addEventListeners() {
        showButtonEl.addEventListener( 'click', showSideNav );
        hideButtonEl.addEventListener( 'click', hideSideNav );
        sideNavEl.addEventListener( 'click', hideSideNav );
        sideNavContainerEl.addEventListener( 'click', blockClicks );
        
        sideNavEl.addEventListener( 'touchstart', onTouchStart );
        sideNavEl.addEventListener( 'touchmove', onTouchMove );
        sideNavEl.addEventListener( 'touchend', onTouchEnd );
      };
      
      return {
        addEventListeners,
      };
    }
    
    const sideNav = factorySideNav();
    
    sideNav.addEventListeners();
  } )()
// navbar js

// toggle button

// toggle button


// popUp
let popup = document.querySelector("#popup")

function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}
// popUp



let bell = document.querySelector("#popup-bell")
// open bell
function openbell(){
  bell.classList.add("open-bell");
}
function closebell(){
  bell.classList.remove("open-bell");
}
// open bell


function loginPopup() {
  var logpopup = document.getElementById('login-popup');
  logpopup.style.display = (logpopup.style.display == 'block') ? 'none' : 'block';
}

const toggle = document.getElementById('toggleDark')
const body = document.querySelector("body")
const darktheme = document.getElementById("dark-theme")


// section_color = document.children()

toggle.addEventListener('click',function(){
  this.classList.toggle('bi-sun')
  darktheme.classList.toggle("dark-theme")
  if(this.classList.toggle('bi-moon')){
    body.style.background = "#606996";
    body.style.transition = '.5s';
  }else{
    body.style.background = "#444A69";
    body.style.transition = '.5s'
  }
})


// swiper js 
var swiper = new Swiper(".mySwiper",{
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: true,
  },
  grabCursor: true,

});
// swiper js 

// swiper 2
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 10,
  freeMode: true,
  loop:true,
  duration:6,
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  breakpoints: {
    // When window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // When window width is >= 1024px
  }

});
// swiper 2


// infinite scroll
  // const infiniteContainer = document.querySelector('.infinite-scroll-container')
  // let limit = 1;
  // let pageCount = 1;
  // let postCount = 1;

  // const getPost = async ()=>{
  //  const response = await fetch(`https://sherlockholmes.ch/en/Info/Sherlock_Holmes`)
  //  const data = await response.json();
  //  console.log(data)

  // data.map((currElem,index)=>{
  //   const htmlData = ``
  // })
  // }

  // getPost()

// infinite scroll

// like btn
//   const likes = document.querySelectorAll('.like-btn');
//   const product = [
//     {
//     name: "books",
//     tag : 'like 1',
//     inlike: 0
//   },
//     {
//     name: "books1",
//     tag : 'like 2',
//     inlike: 0
//   },
//     {
//     name: "books2",
//     tag : 'like 3',
//     inlike: 0
//   },
  
// ]

//   for(let i=0 ; i<likes.length ; i++){
//     likes[i].addEventListener("click",()=>{
//       cartNumber(product[i])
//     })
//   }

//   function cartNumber(product){
//     console.log(product)
//     let post = localStorage.getItem('cartNumbers');
//     post = parseInt(post);
//     if(post){
//       localStorage.setItem('cartNumbers',post + 1)
//     }else{
//       localStorage.setItem('cartNumbers', 1)
//     }
//     setItems(product)
//   }
// // like btn

// function setItems(product){
//   let likeItem = localStorage.getItem('')
//   likeItem = JSON.parse(likeItem)
//   if(likeItem == null){
//     if(likeItem[product.tag] != undefined){
//       likeItem = {
//         ...likeItem,
//         [product.tag]:product
//       }
//     }
//     likeItem[product.tag].inCart += 1 
//   }
//   else{
//     product.inCart = 1
//      likeItem = {
//       [product.tag]:product}
//   }
//   localStorage.setItem(JSON.stringify(likeItem))
// }

document.addEventListener('DOMContentLoaded', () => {
  loadLikedImages();
});

function likeImage(button) {
  const imageItem = button.parentElement;
  const imageUrl = imageItem.querySelector('img').src;
  let likedImages = JSON.parse(localStorage.getItem('likedImages')) || [];

  if (button.classList.contains('liked')) {
      // If already liked, remove from local storage
      button.classList.remove('liked');
      likedImages = likedImages.filter(url => url !== imageUrl);
  } else {
      // If not liked, add to local storage
      button.classList.add('liked');
      likedImages.push(imageUrl);
  }

  localStorage.setItem('likedImages', JSON.stringify(likedImages));
}

function loadLikedImages() {
  const likedImages = JSON.parse(localStorage.getItem('likedImages')) || [];
  const imageItems = document.querySelectorAll('.image-item');

  imageItems.forEach(item => {
      const img = item.querySelector('img');
      const button = item.querySelector('.like-btn');

      if (likedImages.includes(img.src)) {
          button.classList.add('liked');
      }
  });
}

document.querySelectorAll('.nav-item2').forEach(item => {
  item.addEventListener('click', () => {
      if (item.id === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
          alert(`${item.id.charAt(0).toUpperCase() + item.id.slice(1)} icon clicked!`);
      }
  });
});