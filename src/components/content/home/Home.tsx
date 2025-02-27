import Styles from './home.module.scss';
import item_1 from '../../../images/home/ros.webp';
import item_2 from '../../../images/home/gas.webp';
import item_3 from '../../../images/home/nnk.webp';
import item_4 from '../../../images/home/ink.webp';
import item_5 from '../../../images/home/sur.webp';
import item_6 from '../../../images/home/tat.webp';
import item_7 from '../../../images/home/bel.webp';
import item_8 from '../../../images/home/cas.webp';
import item_9 from '../../../images/home/luc.webp';
import item_10 from '../../../images/home/luc_ysb.webp';
import homeItem_1 from '../../../images/home/home.webp';
import homeItem_2 from '../../../images/home/geography.webp';
import { useTranslation } from 'react-i18next';
import { Title } from '../../ui/title/Title';

export const Home = () => {
  const { t, i18n } = useTranslation('home');

  return (
    <>
      <div className={Styles.homeInfo}>
        <img src={homeItem_1.src} alt="Главная картинка" className={Styles.homeImg} />
        {/* <div className={Styles.title}>
          <Title text={t('Поставки')}></Title>
        </div> */}
        <Title text={t('Поставки')}></Title>
        <img src={homeItem_2.src} alt="Карта поставок" className={Styles.homeImg} />
        <div className={Styles.title}>
          <Title text={t('Заказчики')}></Title>
        </div>
      </div>
      
      

      <div className={Styles.brandParent}>
        <div className={Styles.brandsCarousel} id="brandsCarousel">
          <div className={Styles.slideContent}>
            <a>
              <img src={item_1.src} alt="Логотип 1" />
            </a>
          </div>
          <div className={Styles.slideContent}>
            <a>
              <img src={item_2.src} alt="Логотип 2" />
            </a>
          </div>
          <div className={Styles.slideContent}>
            <a>
              <img src={item_3.src} alt="Логотип 3" />
            </a>
          </div>
          <div className={Styles.slideContent}>
            <a>
              <img src={item_4.src} alt="Логотип 4" />
            </a>
          </div>
          <div className={Styles.slideContent}>
            <a>
              <img src={item_5.src} alt="Логотип 5" />
            </a>
          </div>
          <div className={Styles.slideContent}>
            <a>
              <img src={item_6.src} alt="Логотип 6" />
            </a>
          </div>
          <div className={Styles.slideContent}>
            <a>
              <img src={item_7.src} alt="Логотип 7" />
            </a>
          </div>
          <div className={Styles.slideContent}>
            <a>
              <img src={item_8.src} alt="Логотип 8" />
            </a>
          </div>
          <div className={Styles.slideContent}>
            <a>
              <img src={item_9.src} alt="Логотип 9" />
            </a>
          </div>
          <div className={Styles.slideContent}>
            <a>
              <img src={item_10.src} alt="Логотип 10" />
            </a>
          </div>
        </div>
        <div className={Styles.brandsCarousel} id="brandsCarousel2">
          <div className={Styles.slideContent}>
            <a>
              <img src={item_1.src} alt="Логотип 1" />
            </a>
          </div>
          <div className={Styles.slideContent}>
            <a>
              <img src={item_2.src} alt="Логотип 2" />
            </a>
          </div>
          <div className={Styles.slideContent}>
            <a>
              <img src={item_3.src} alt="Логотип 3" />
            </a>
          </div>
          <div className={Styles.slideContent}>
            <a>
              <img src={item_4.src} alt="Логотип 4" />
            </a>
          </div>
          <div className={Styles.slideContent}>
            <a>
              <img src={item_5.src} alt="Логотип 5" />
            </a>
          </div>
          <div className={Styles.slideContent}>
            <a>
              <img src={item_6.src} alt="Логотип 6" />
            </a>
          </div>
          <div className={Styles.slideContent}>
            <a>
              <img src={item_7.src} alt="Логотип 7" />
            </a>
          </div>
          <div className={Styles.slideContent}>
            <a>
              <img src={item_8.src} alt="Логотип 8" />
            </a>
          </div>
          <div className={Styles.slideContent}>
            <a>
              <img src={item_9.src} alt="Логотип 9" />
            </a>
          </div>
          <div className={Styles.slideContent}>
            <a>
              <img src={item_10.src} alt="Логотип 10" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
