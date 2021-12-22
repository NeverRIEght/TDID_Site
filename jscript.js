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

//Конструктор для состава кафедры

// surname = new Array();

// surname[0] = "Чуйков";
// surname[1] = "Шетько";
// surname[2] = "Прохорчик";
// surname[3] = "Игнатович";
// surname[4] = "Трофимов";
// surname[5] = "Гайдук";
// surname[6] = "Козлов";
// surname[7] = "Рудак";
// surname[8] = "Ручкина";
// surname[9] = "Полховский";
// surname[10] = "Гордиевич";
// surname[11] = "Куневич";
// surname[12] = "Мухурова";
// surname[13] = "Жарко";
// surname[14] = "Корзенок";
// surname[15] = "Гончарова";
// surname[16] = "Шелемет";

// patronymic = new Array();

// patronymic[0] = "Алексей Сергеевич";
// patronymic[1] = "Сергей Васильевич";
// patronymic[2] = "Сергей Александрович";
// patronymic[3] = "Людмила Владимировна";
// patronymic[4] = "Сергей Петрович";
// patronymic[5] = "Сергей Сергеевич";
// patronymic[6] = "Николай Гельевич";
// patronymic[7] = "Оксана Геннадьевна";
// patronymic[8] = "Елена Васильевна";
// patronymic[9] = "Антон Викторович";
// patronymic[10] = "Екатерина Ивановна";
// patronymic[11] = "Валерия Олеговна";
// patronymic[12] = "Екатерина Александровна";
// patronymic[13] = "Виталий Владимирович";
// patronymic[14] = "Мария Михайловна";
// patronymic[15] = "Зоя Валентиновна";
// patronymic[16] = "Никита Юрьевич";

// position = new Array();

// position[0] = "Заведующий кафедрой";
// position[1] = "Доцент";
// position[2] = "Доцент";
// position[3] = "Доцент";
// position[4] = "Доцент";
// position[5] = "Доцент";
// position[6] = "Профессор";
// position[7] = "Старший преподаватель";
// position[8] = "Ассистент";
// position[9] = "Ассистент";
// position[10] = "Преподаватель-стажер";
// position[11] = "Преподаватель-стажер";
// position[12] = "Заведующий лабораторией";
// position[13] = "Техник 2-ой категории";
// position[14] = "Специалист 2-ой категории";
// position[15] = "Лаборант 2-ой категории";
// position[16] = "Аспирант";

// degree = new Array();

// degree[0] = "Кандидат технических наук";
// degree[1] = "Кандидат технических наук";
// degree[2] = "Кандидат технических наук";
// degree[3] = "Кандидат технических наук";
// degree[4] = "Кандидат технических наук";
// degree[5] = "Кандидат технических наук";
// degree[6] = "Доктор химических наук";
// degree[7] = "-";
// degree[8] = "-";
// degree[9] = "-";
// degree[10] = "-";
// degree[11] = "-";
// degree[12] = "-";
// degree[13] = "-";
// degree[14] = "-";
// degree[15] = "-";
// degree[16] = "-";

// classroom = new Array();

// classroom[0] = "Ауд. 314-4";
// classroom[1] = "Ауд. 358-4";
// classroom[2] = "Ауд. 301-2";
// classroom[3] = "Ауд. 403-4";
// classroom[4] = "Ауд. 412-4";
// classroom[5] = "Ауд. 412-4";
// classroom[6] = "Ауд. 313-4";
// classroom[7] = "Ауд. 313-4";
// classroom[8] = "Ауд. 403-4";
// classroom[9] = "Ауд. 412-4";
// classroom[10] = "Ауд. 403-4";
// classroom[11] = "Ауд. 403-4";
// classroom[12] = "Ауд. 415-4";
// classroom[13] = "Ауд. 415-4";
// classroom[14] = "Ауд. 313-4";
// classroom[15] = "Ауд. 400-4";
// classroom[16] = "Ауд. 313-4";

// //Заменяем дефисы на пустое место с помощью функции
// degree.forEach(element => function hyphen() {
//     if(element.includes("-"))
//     {
//         element = "";
//     }
// });

// //Сам конструктор

// //Находим контейнер, в котором хранятся слайды
// var cont = document.querySelector(".people_wrapper");
// //Добавляем в контейнер элемент слайда с нужными классами
// var slide = document.createElement("div");
// slide.classList.add("swiper-slide");
// slide.classList.add("people_slide");
// var image = document.createElement("img")
// var sname = document.createElement("h1")


// {/* <img src="images/professors/1_chuikov.jpg" alt="Чуйков С.А.">
// <h1>Чуйков</h1>
// <h2>Сергей Алексеевич</h2>
// <h3>Заведующий кафедрой</h3>
// <h4>Кандидат технических наук<br>Ауд. 314-4</h4> */}


//     image.src = "images/professors/1_chuikov.jpg";
//     cont.appendChild(slide);
//     slide.appendChild(image);
//     image.src = "images/professors/2_shetko.jpg";
//     cont.appendChild(slide);
//     slide.appendChild(image);



//Меню бургер

const Nav = document.querySelector('.primary_navigation');
const navToggle = document.querySelector('.burger');

navToggle.addEventListener('click', () => {
    const visibility = Nav.getAttribute('data-visible');
    
    if(visibility === "false") {
        Nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }
    else if(visibility === "true") {
        Nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
    else if(visibility === "first") {
        Nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }

    window.addEventListener('resize', () => {
        if(visibility === "false") {
            visibility = "first";
        }
    });
});





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