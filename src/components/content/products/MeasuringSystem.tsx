import Styles from './products.module.scss';
import { useState, useEffect } from 'react';
import product_3 from '../../../images/products/product_3.webp';
import product_3_1 from '../../../images/products/product_3_1.webp';
import product_3_2 from '../../../images/products/product_3_2.webp';
import product_3_3 from '../../../images/products/product_3_3.webp';
import up from '../../../images/arrow.svg';
import dot from '../../../images/dot.svg';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useClickToScroll } from '../../../hooks/useClickToScroll';
import { useTranslation } from 'react-i18next';

export const MeasuringSystem = () => {
  const { t } = useTranslation('products');

  const [oneIsOpen, setOneIsOpen] = useState(false);
  const [twoIsOpen, setTwoIsOpen] = useState(false);
  const [threeIsOpen, setThreeIsOpen] = useState(false);
  const [fourIsOpen, setFourIsOpen] = useState(false);

  const handleClick = useClickToScroll();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Плавная прокрутка
    });
  };

  const [isVisible, setIsVisible] = useState(false); // Состояние видимости кнопки

  // Функция для отслеживания прокрутки
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) { // Показывать кнопку после прокрутки на 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Добавляем слушатель прокрутки при монтировании компонента
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.bloc}>
        <div className={Styles.verticalMenu}>
          <a onClick={() => {handleClick('products-1');}}>{t('СИКН')}</a>
          <a onClick={() => {handleClick('products-2');}}>{t('СИКГ')}</a>
          <a onClick={() => {handleClick('products-3');}}>{t('СИКВ')}</a>
          <a onClick={() => {handleClick('products-4');}}>{t('БДР')}</a>
        </div>

        <div className={Styles.productsInfo}>
          <section className={Styles.productsText}>
            <h3 id="products-1">{t('СИКН')}</h3>
            <img src={product_3.src} className={Styles.mainImg} onClick={() => {setOneIsOpen(true);}}/>
            <h1>{t('Назначение')}</h1>
            <p>
              <img src={dot.src}/>
              {t('Измерения')}
            </p>
            <p>
              <img src={dot.src}/>
              {t('Определения')}
            </p>
            <p>
              <img src={dot.src}/>
              {t('Отбор')}
            </p>
            <p>
              <img src={dot.src}/>
              {t('Выдача')}
            </p>
            <p>
              <img src={dot.src}/>
              {t('Изготавливаться')}
            </p>
          </section>

          <section className={Styles.productsText}>
            <h3 id="products-2">{t('СИКГ')}</h3>
            <img src={product_3_1.src} className={Styles.mainImg} onClick={() => {setTwoIsOpen(true);}}/>
            <h1>{t('Назначение')}</h1>
            <p>{t('Автоматизированного')}</p>
            <p>{t('Входит')}</p>

            <h1>{t('Типовой')}</h1>
            <p>
              <img src={dot.src}/>
              {t('Преобразователь')}
            </p>
            <p>
              <img src={dot.src}/>
              {t('Вычислитель')}
            </p>
            <p>
              <img src={dot.src}/>
              {t('Регуляторы')}
            </p>
            <p>
              <img src={dot.src}/>
              {t('Аппаратно')}
            </p>
            <p>
              <img src={dot.src}/>
              {t('Газовая')}
            </p>
            <p>
              <img src={dot.src}/>
              {t('Анализатор')}
            </p>
            <p>
              <img src={dot.src}/>
              {t('Преобразователи')}
            </p>
            <p>
              <img src={dot.src}/>
              {t('Система')}
            </p>
            <p>
              <img src={dot.src}/>
              {t('Комплексов')}
            </p>
          </section>

          <section className={Styles.productsText}>
            <h3 id="products-3">{t('СИКВ')}</h3>
            <img src={product_3_2.src} className={Styles.mainImg} onClick={() => {setThreeIsOpen(true);}}/>
            <h1>{t('Назначение')}</h1>
            <p>{t('Количества')}</p>

            <h1>{t('Типовой')}</h1>
            <p>
              <img src={dot.src}/>
              {t('Измерительных')}
            </p>
            <p>
              <img src={dot.src}/>
              {t('Обработки')}
            </p>
            <p>
              <img src={dot.src}/>
              {t('Технологические')}
            </p>
          </section>

          <section className={Styles.productsText}>
            <h3 id="products-4">{t('БДР')}</h3>
            <img src={product_3_3.src} className={Styles.mainImg} onClick={() => {setFourIsOpen(true);}}/>
            <h1>{t('Назначение')}</h1>
            <p>{t('Установка')}</p>
          </section>
        </div>
      </div>     

      {/* Кнопка "Наверх" с условием видимости */}
      <div className={`${Styles.backUp} ${isVisible ? Styles.visible : ''}`}>
        <a onClick={scrollToTop}>
          <img src={up.src} alt="Наверх" />
        </a>
      </div>

      {oneIsOpen && <BigPhoto src={product_3.src} onClose={() => setOneIsOpen(false)} />}
      {twoIsOpen && <BigPhoto src={product_3_1.src} onClose={() => setTwoIsOpen(false)} />}
      {threeIsOpen && <BigPhoto src={product_3_2.src} onClose={() => setThreeIsOpen(false)} />}
      {fourIsOpen && <BigPhoto src={product_3_3.src} onClose={() => setFourIsOpen(false)} />}
    </div>
      
  );
};
