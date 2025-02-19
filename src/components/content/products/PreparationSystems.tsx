import Styles from './products.module.scss';
import { useState, useEffect } from 'react';
import product_4 from '../../../images/products/product_4.webp';
import product_4_1 from '../../../images/products/product_4_2.webp';
import product_4_2 from '../../../images/products/product_4_3.webp';
import product_4_3 from '../../../images/products/product_4_4.webp';
import product_4_4 from '../../../images/products/product_4_5.webp';
import dot from '../../../images/dot.svg';
import up from '../../../images/arrow.svg';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useClickToScroll } from '../../../hooks/useClickToScroll';
import { useTranslation } from 'react-i18next';
import { GalleryProducts } from '../../ui/gallery/GalleryProducts';

export const PreparationSystems = () => {
  const { t } = useTranslation('products');

  const [oneIsOpen, setOneIsOpen] = useState(false);
  const [twoIsOpen, setTwoIsOpen] = useState(false);
  const [threeIsOpen, setThreeIsOpen] = useState(false);


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
          <a onClick={() => {handleClick('products-1');}}>{t('Запуск')}</a>
          <a onClick={() => {handleClick('products-2');}}>{t('Блок')}</a>
          <a onClick={() => {handleClick('products-3');}}>{t('Очистка')}</a>
        </div>

        <div className={Styles.productsInfo}>
          <section className={Styles.productsText}>
            <h3 id="products-1">{t('Запуск')}</h3>
            <img src={product_4.src} alt="УЗПЗ" className={Styles.mainImg} onClick={() => {setOneIsOpen(true);}}/>
            <h1>{t('Назначение')}</h1>
            <p>{t('Переодического')}</p>
            <h1>{t('Область')}</h1>
            <p>{t('Узлы')}</p>
          </section>
          <section className={Styles.productsText}>
            <h3 id="products-2">{t('Блок')}</h3>
            <img src={product_4_1.src} alt="БГ" className={Styles.mainImg} onClick={() => {setTwoIsOpen(true);}}/>
            <h1>{t('Назначение')}</h1>
            <p>{t('Распределение')}</p>
          </section>
          <section className={Styles.productsText}>
            <h3 id="products-3">{t('Очистка')}</h3>
            <div className={Styles.productsGallery}>
              <GalleryProducts
                photos={[
                  { id: 1, src: product_4_2.src, alt: '' },
                  { id: 2, src: product_4_3.src, alt: '' },
                  { id: 3, src: product_4_4.src, alt: '' },
                ]}
              />
            </div>
            
            {/* <img src={product_4_2.src} alt="УН" className={Styles.mainImg} onClick={() => {setThreeIsOpen(true);}}/> */}
            <h1>{t('Назначение')}</h1>
            <p>{t('Поверхности')}</p>
            <h1>{t('Аналог')}</h1>
            <p>
              <img src={dot.src}/>
              {t('Сматывание')}
            </p>
            <p>
              <img src={dot.src}/>
              {t('Процесс')}
            </p>
            <p>
              <img src={dot.src}/>
              {t('Положения')}
            </p>
            <p>
              <img src={dot.src}/>
              {t('Скребок')}
            </p>
            <p>
              <img src={dot.src}/>
              {t('Магниты')}
            </p>            
          </section>
        </div>
      </div>

      {/* Кнопка "Наверх" с условием видимости */}
      <div className={`${Styles.backUp} ${isVisible ? Styles.visible : ''}`}>
        <a onClick={scrollToTop}>
          <img src={up.src} alt="Наверх" />
        </a>
      </div>

      {oneIsOpen && <BigPhoto src={product_4.src} onClose={() => setOneIsOpen(false)} />}
      {twoIsOpen && <BigPhoto src={product_4_1.src} onClose={() => setTwoIsOpen(false)} />}
      {threeIsOpen && <BigPhoto src={product_4_2.src} onClose={() => setThreeIsOpen(false)} />}
      {threeIsOpen && <BigPhoto src={product_4_3.src} onClose={() => setThreeIsOpen(false)} />}
    </div>
      
  );
};
