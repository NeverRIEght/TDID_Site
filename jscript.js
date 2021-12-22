// Дозаполнить состав кафедры
// Картинки в партнёрах
// Адаптивность ПК
// Мобильная версия
// Новости
// XML
// Переверстать контакты
// Накинуть теней
// Структура кода








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
});







// var obj = document.getElementByTagName('header');

// new Swiper('.gallery-swiper', {
//     //Стрелки
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     },
//     //Пагинация
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     //Нужный тип курсора
//     grabCursor: true,

//     //Количество слайдов для показа
//     slidesPerView: 2,

//     //Отступ между слайдами
//     spaceBetween: 30,

//     //Выравнивание первого слайда по центру
//     centeredSlides: true,

//     //Бесконечная прокрутка
//     loop: true,
// });

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
    // autoplay: {
    //     delay: 1500,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: true,
    // },
    //Точки адаптивности
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        1800: {
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
        1030: {
            slidesPerView: 2,
        },
        1600: {
            slidesPerView: 3,
        },
    },

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