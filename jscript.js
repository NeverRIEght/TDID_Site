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

// Получение ширины и высоты экрана

// const screenWidth = window.screen.width;
// const screenHeight = window.screen.height;

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
        nextEl: '.swiper-gallery-button-next',
        prevEl: '.swiper-gallery-button-prev'
    },
    //Добавление scroll-бара
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    //Анимация
    speed: 800,
    effect: 'slide',
    //Точки адаптивности
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        1800: {
            slidesPerView: 2,
        },
    },

    //Слайдов на странице одновременно и расстояние между ними
    slidesPerView: 2,
    spaceBetween: 100,
})

new Swiper('.people_container', {
    //Добавление стрелок
    navigation: {
        nextEl: '.swiper-people-button-next',
        prevEl: '.swiper-people-button-prev'
    },
    //Добавление scroll-бара
    scrollbar: {
        el: '.swiper-scrollbar',
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
    },
    spaceBetween: 100,
})

new Swiper('.partners_container', {
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