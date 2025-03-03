import Styles from './products.module.scss';
import { useState, useEffect } from 'react';
import product_2 from '../../../images/products/product_2.webp';
import product_2_1 from '../../../images/products/product_2_1.webp';
import product_2_2 from '../../../images/products/product_2_2.webp';
import product_2_3 from '../../../images/products/product_2_3.webp';
import product_2_4 from '../../../images/products/product_2_4.webp'; 
import product_2_5 from '../../../images/products/product_2_5.webp';
import up from '../../../images/arrow.svg';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useClickToScroll } from '../../../hooks/useClickToScroll';
import { useTranslation } from 'react-i18next';


// Комплектующие для автоматизированной групповой замерной установки
export const Accessories = () => {
  const { t } = useTranslation('products');
  
  const [srcForBigPhoto, setSrcForBigPhoto] = useState<string | null>(null);

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
      <div className={Styles.verticalMenu}>
        <a onClick={() => {handleClick('products-1');}}>{t('Расходомер')}</a>
        <a onClick={() => {handleClick('products-2');}}>{t('УРПД')}</a>
        <a onClick={() => {handleClick('products-3');}}>{t('ПСМ')}</a>
        <a onClick={() => {handleClick('products-4');}}>{t('КМР')}</a>
        <a onClick={() => {handleClick('products-5');}}>{t('Гидропривод')}</a>
        <a onClick={() => {handleClick('products-6');}}>{t('Емкость')}</a>
      </div>

      <div className={Styles.productsInfo}>
        <section className={Styles.productsText}>
          <h3 id="products-1">{t('Расходомер')}</h3>
          <div className={Styles.ikon}>
            <img src={product_2.src} alt="ВР" className={Styles.mainImg} onClick={() => {setSrcForBigPhoto(product_2.src);}}/>
          </div>          
          <h1>{t('Назначение')}</h1>
          <p>{t('Стабильность')}</p>
          <p>{t('Колибровка')}</p>
          <h1>{t('Принцип')}</h1>
          <p>{t('Метод')}</p>
          <p>{t('Внутри')}</p>
        </section>

        <section className={Styles.productsText}>
          <h3 id="products-2">{t('УРПД')}</h3>
          <div className={Styles.ikon}>
            <img src={product_2_1.src}alt="УРПД" className={Styles.mainImg} onClick={() => {setSrcForBigPhoto(product_2_1.src);}}/>
          </div>          
          <h1>{t('Назначение')}</h1>
          <p>{t('Регулирование')}</p>
        </section>

        <section className={Styles.productsText}>
          <h3 id="products-3">{t('ПСМ')}</h3>
          <div className={Styles.ikon}>
            <img src={product_2_2.src} alt="ПСМ" className={Styles.mainImg} onClick={() => {setSrcForBigPhoto(product_2_2.src);}}/>
          </div>          
          <h1>{t('Назначение')}</h1>
          <p>{t('Становка')}</p>
        </section>

        <section className={Styles.productsText}>
          <h3 id="products-4">{t('КМР')}</h3>
          <div className={Styles.ikon}>
            <img src={product_2_3.src} alt="КМР" className={Styles.mainImg} onClick={() => {setSrcForBigPhoto(product_2_3.src);}}/>
          </div>          
          <h1>{t('Назначение')}</h1>
          <p>{t('Расход')}</p>
        </section>

        <section className={Styles.productsText}>
          <h3 id="products-5">{t('Гидропривод')}</h3>
          <div className={Styles.ikon}>
            <img src={product_2_4.src} alt="Г" className={Styles.mainImg} onClick={() => {setSrcForBigPhoto(product_2_4.src);}}/>
          </div>          
          <h1>{t('Назначение')}</h1>
          <p>{t('Давление')}</p>
        </section>

        <section className={Styles.productsText}>
          <h3 id="products-6">{t('Емкость')}</h3>
          <div className={Styles.ikon}>
            <img src={product_2_5.src} alt="СЕ" className={Styles.mainImg} onClick={() => {setSrcForBigPhoto(product_2_5.src);}}/>
          </div>          
          <h1>{t('Назначение')}</h1>
          <p>{t('Нефтезаговых')}</p>
        </section>
      </div>    

      {/* Кнопка "Наверх" с условием видимости */}
      <div className={`${Styles.backUp} ${isVisible ? Styles.visible : ''}`}>
        <a onClick={scrollToTop}>
          <img src={up.src} alt="Наверх" />
        </a>
      </div>

      {srcForBigPhoto && <BigPhoto src={srcForBigPhoto} onClose={() => setSrcForBigPhoto(null)} />}
    </div>
  );
};
