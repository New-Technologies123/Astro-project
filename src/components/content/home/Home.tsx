import Styles from './home.module.scss';
import { useTranslation } from 'react-i18next';
import { Title } from '../../ui/title/Title';

// Импортируем изображения для русского языка
import item_1_ru from '../../../images/home/ros.webp';
import item_2_ru from '../../../images/home/gas.webp';
import item_3_ru from '../../../images/home/nnk.webp';
import item_4_ru from '../../../images/home/ink.webp';
import item_5_ru from '../../../images/home/sur.webp';
import item_6_ru from '../../../images/home/tat.webp';
import item_7_ru from '../../../images/home/bel.webp';
import item_8_ru from '../../../images/home/cas.webp';
import item_9_ru from '../../../images/home/luc.webp';
import item_10_ru from '../../../images/home/luc_ysb.webp';

// Импортируем изображения для английского языка (замените на реальные пути)
import item_1_en from '../../../images/home/en/ros.jpg';
import item_2_en from '../../../images/home/en/gas.png';
import item_3_en from '../../../images/home/en/nnk.webp';
import item_4_en from '../../../images/home/en/ink.png';
import item_5_en from '../../../images/home/en/sur.webp';
import item_6_en from '../../../images/home/en/tat.png';
import item_7_en from '../../../images/home/en/bel.png';
import item_8_en from '../../../images/home/en/cas.webp';
import item_9_en from '../../../images/home/en/luc.png';
import item_10_en from '../../../images/home/en/luc_ysb.webp';

import homeItem from '../../../images/home/geography.webp';

export const Home = () => {
  const { t, i18n } = useTranslation('home');

  // Создаем объекты с изображениями для каждого языка
  const imagesByLanguage = {
    ru: [
      item_1_ru, item_2_ru, item_3_ru, item_4_ru, item_5_ru,
      item_6_ru, item_7_ru, item_8_ru, item_9_ru, item_10_ru
    ],
    en: [
      item_1_en, item_2_en, item_3_en, item_4_en, item_5_en,
      item_6_en, item_7_en, item_8_en, item_9_en, item_10_en
    ]
  };

  // Получаем текущий язык или используем русский по умолчанию
  const currentLanguage = i18n.language || 'ru';
  const currentImages = imagesByLanguage[currentLanguage] || imagesByLanguage.ru;

  // Функция для рендеринга карусели с логотипами
  const renderBrandsCarousel = () => {
    return currentImages.map((image, index) => (
      <div key={index} className={Styles.slideContent}>
        <a>
          <img src={image.src} alt={`Логотип ${index + 1}`} />
        </a>
      </div>
    ));
  };

  return (
    <>
      <section className={Styles.hero}>
        <div className={Styles.heroOverlay}>
          <h1>{t('Добро')}</h1>
          <p>{t('Обеспечиваем')}</p>
        </div>
      </section>

      <Title text={t('Поставки')}></Title>
      <img src={homeItem.src} alt="Карта поставок" className={Styles.homeImg} />
      <Title text={t('Заказчики')}></Title>      

      <div className={Styles.brandParent}>
        <div className={Styles.brandsCarousel} id="brandsCarousel">
          {renderBrandsCarousel()}
        </div>
        <div className={Styles.brandsCarousel} id="brandsCarousel2">
          {renderBrandsCarousel()}
        </div>
      </div>
    </>
  );
};