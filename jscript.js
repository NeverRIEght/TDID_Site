
// Текстурки на фоне








// Скрипт плавного пролистывания

const menuLinks = document.querySelectorAll('[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    })

    function onMenuLinkClick(obj) {
        const menuLink = obj.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoHeight = gotoBlock.getBoundingClientRect().top + pageYOffset;

            window.scrollTo({
                top: gotoHeight,
                behavior: "smooth"
            })
            obj.preventDefault();
        }
    }
}


//Меню бургер

const Nav = document.querySelector('.primary_navigation');
const navToggle = document.querySelector('.burger');

navToggle.addEventListener('click', () => {
    let visibility = Nav.getAttribute('data-visible');

    if(visibility === "false") {
        Nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }
    else if(visibility === "true") {
        Nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }

    let block= xmlDoc.getElementsByTagName("block");
});


//XML

// function specConstructor() {
//     if (window.XMLHttpRequest) {
//         xmlhttp = new XMLHttpRequest();
//     } else {
//         xmlhttp = new ActiveXObject("Microsoft.XMLDOM");
//     }
//     xmlhttp.open("GET",'/spec.xml',false); // доступ к файлу XML
//     xmlhttp.send();
//     xmlDoc = xmlhttp.responseXML;

//     for(i = 0; i < block.length; i++){
//         let newElement = document.createElement("div") // создаёт див 
//         newElement.innerHTML = `<div class="spec_block" style="background-color: #F2F7F7; width: 32%; padding-bottom: 115px; margin-bottom: 55px; z-index: 1;">
//         <p style="padding-top: 30px; margin-bottom: 5px; color: #037769; font-family: Inter, sans-serif; font-size: 28px;
//         padding-left: 35px; font-weight: 500; line-height: 155%;">${block[i].getElementsByTagName('blockId')[0].innerHTML}
//         </p>
//     </div>`
//         document.querySelector('.spec_container').appendChild(newElement); // заполняет контейнер XML
//     }
// }


new Swiper('.gallery_container', {
    //Добавление стрелок
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    allowTouchMove: false,
    //Анимация
    speed: 800,
    effect: 'slide',
    //Точки адаптивности
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        1240: {
            
        },
        1720: {
            slidesPerView: 2,
        },
    },

    spaceBetween: -200,

    preloadImages: false,
    lazy : {
        loadOnTransitionStart: true,
        loadPrevNext: true,
        watchSlidesProgress: true,
    }

})

new Swiper('.people_container', {
    //Добавление стрелок
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //Добавление scroll-бара
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    //Анимация
    speed: 800,
    effect: 'slide',
    //Точки адаптивности
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        1030: {
            slidesPerView: 2,
        },
        1600: {
            slidesPerView: 3,
        },
        1800: {
            slidesPerView: 4,
        },
    },

    preloadImages: false,
    lazy : {
        loadOnTransitionStart: true,
        loadPrevNext: true,
        watchSlidesProgress: true,
    }
})

new Swiper('.partners_container', {
    //Анимация
    speed: 800,
    effect: 'slide',
    allowTouchMove: false,
    //Точки адаптивности
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        1320: {
            slidesPerView: 3,
        },
    },
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
})

new Swiper('.news_container', {
    //Анимация
    speed: 800,
    effect: 'slide',
    //Точки адаптивности
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        1030: {
            slidesPerView: 2,
        },
        1600: {
            slidesPerView: 3,
        },
    },

    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
})