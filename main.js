
// ну потом то я выучу и перечитаю все что тут написано 
// честно..


// Находим все радиокнопки
const radioButtons = document.querySelectorAll('.header__tooltip-radio');

// Добавляем обработчик события change для каждой радиокнопки
radioButtons.forEach(radio => {
    radio.addEventListener('change', function () {
        // Получаем значение выбранной радиокнопки (путь к изображению)
        const selectedImage = this.value;

        // Меняем background-image у body (или другого элемента)
            const bg = document.querySelector('.header'); // Используем класс
            if (bg) {
                bg.style.backgroundImage = selectedImage;
                console.log('Фон header изменён на:', selectedImage); // Для отладки
            } else {
                console.error('Элемент .header не найден');
            }
    });
});



//ui elements
const toolTips = document.querySelectorAll('.header__dot');
const mainTooltip = document.querySelectorAll('.header__tooltip');

// Открываем/закрываем подсказку при клике на кнопку
for (let btn of toolTips) {
    btn.addEventListener('click', showTip);
}

function showTip(e) {
    e.stopPropagation(); // Останавливаем всплытие события
    const tooltip = this.parentNode.querySelector('.header__tooltip');
    tooltip.classList.toggle('none');
}

// Закрываем все подсказки при клике вне кнопок и подсказок
document.addEventListener('click', closeTip);

function closeTip(e) {
    // Проверяем, был ли клик вне кнопок и подсказок
    if (!e.target.closest('.header__dot') && !e.target.closest('.header__tooltip')) {
        for (let tip of mainTooltip) {
            tip.classList.add('none');
        }
    }
}


// Функция для перемешивания массива
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// Перемешиваем слайды
const swiperContainer = document.querySelector('.swiper-wrapper');
const slides = Array.from(swiperContainer.querySelectorAll('.swiper-slide'));
// Перемешиваем массив слайдов
const shuffledSlides = shuffleArray(slides);
// Очищаем контейнер
swiperContainer.innerHTML = '';
// Вставляем слайды в новом порядке
shuffledSlides.forEach(slide => swiperContainer.appendChild(slide));

//swiper

const swiper = new Swiper('.swiper', {
    //direction: 'horisontal',
    loop: true,
    freeMode: true,
    
    slidesPerView: 4,
    spaceBetween: 42,

  
    // Navigation arrows
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
  
  });

  const tabBtns = document.querySelectorAll('[data-tab]');
  const tabsProducts = document.querySelectorAll('[data-tab-value]');
  const swiperInstance = document.querySelector('.swiper').swiper; // Получаем экземпляр Swiper
  
  for (let btn of tabBtns) {
    btn.addEventListener('click', function () {
      // Убираем активные классы у всех кнопок
      tabBtns.forEach((btn) => btn.classList.remove('products__tabs-controls-btn--active'));
      this.classList.add('products__tabs-controls-btn--active');
  
      // Получаем выбранную категорию
      const selectedTab = this.dataset.tab;
  
      // Удаляем все слайды из Swiper
      swiperInstance.removeAllSlides();
  
      // Добавляем только нужные слайды
      tabsProducts.forEach((product) => {
        if (selectedTab === 'all' || product.dataset.tabValue === selectedTab) {
          swiperInstance.appendSlide(product.outerHTML); // Добавляем слайд в Swiper
        }
      });
  
      // Обновляем Swiper
      swiperInstance.update();
    });
  }
  