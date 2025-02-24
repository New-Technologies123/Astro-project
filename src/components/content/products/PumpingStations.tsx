import Styles from './products.module.scss';
import { useState, useEffect } from 'react';
import product_5 from '../../../images/products/product_5.webp';
import product_5_1 from '../../../images/products/product_5_1.webp';
import up from '../../../images/arrow.svg';
import dot from '../../../images/dot.svg';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useClickToScroll } from '../../../hooks/useClickToScroll';
import { useTranslation } from 'react-i18next';


export const PumpingStations = () => {
  const { t } = useTranslation('products');

  const [oneIsOpen, setOneIsOpen] = useState(false);
  const [twoIsOpen, setTwoIsOpen] = useState(false);

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
        <a onClick={() => {handleClick('products-1');}}>{t('Насосная')}</a>
        <a onClick={() => {handleClick('products-2');}}>{t('Мультифазная')}</a>
      </div>

      <div className={Styles.productsInfo}>
        <section className={Styles.productsText}>
          <h3 id="products-1">{t('Насосная')}</h3>
          <img src={product_5.src} alt="БН" className={Styles.mainImg} onClick={() => {setOneIsOpen(true);}}/>
          <h1>{t('Назначение')}</h1>
          <p>{t('Трубопроводы')}</p>
          <p>{t('Производства')}</p>

          <h1>{t('Типовой')}</h1>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Насосные')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Приемный')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Дренажа')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Пожароохранной')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Пенного')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Автоматизации')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Грузоподъемные')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Управления')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Передачи')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Электроснабжения')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Жизнеобеспечения')}
          </p>
        </section>

        <section className={Styles.productsText}>
          <h3 id="products-2">{t('Мультифазная')}</h3>
          <img src={product_5_1.src} alt="БЛ" className={Styles.mainImg} onClick={() => {setTwoIsOpen(true);}}/>
          <h1>{t('Назначение')}</h1>
          <p>{t('Перекачивания')}</p>

          <h1>{t('Типовой')}</h1>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Мультифазные')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Насосной')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Трубо')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Дренажные')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Комплект')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Отопление')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Агрегатами')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Противоаварийной')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Частотных')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Информации')}
          </p>
          <p>
            <img src={dot.src} className={Styles.dotIcon}/>
            {t('Электро')}
          </p>
        </section>
      </div>

      {/* Кнопка "Наверх" с условием видимости */}
      <div className={`${Styles.backUp} ${isVisible ? Styles.visible : ''}`}>
        <a onClick={scrollToTop}>
          <img src={up.src} alt="Наверх" />
        </a>
      </div>

      {oneIsOpen && <BigPhoto src={product_5.src} onClose={() => setOneIsOpen(false)} />}
      {twoIsOpen && <BigPhoto src={product_5_1.src} onClose={() => setTwoIsOpen(false)} />}
    </div>
      
  );
};
