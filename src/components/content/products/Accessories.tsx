import Styles from './products.module.scss';
import { useState, useEffect, useRef } from 'react';
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

  const sectionsRef = useRef([]);
  const handleClick = useClickToScroll();

  // Кнопка "Наверх"
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.mainContent}>
        <aside className={Styles.sidebar}>
          <nav className={Styles.navMenu}>
            <button onClick={() => handleClick('products-1')} className={`${Styles.navItem}`}>
              <span>{t('Расходомер')}</span>
            </button>
            <button onClick={() => handleClick('products-2')} className={`${Styles.navItem}`}>
              <span>{t('УРПД')}</span>
            </button>
            <button onClick={() => handleClick('products-3')} className={`${Styles.navItem}`}>
              <span>{t('ПСМ')}</span>
            </button>
            <button onClick={() => handleClick('products-4')} className={`${Styles.navItem}`}>
              <span>{t('КМР')}</span>
            </button>
            <button onClick={() => handleClick('products-5')} className={`${Styles.navItem}`}>
              <span>{t('Гидропривод')}</span>
            </button>
            <button onClick={() => handleClick('products-6')} className={`${Styles.navItem}`}>
              <span>{t('Емкость')}</span>
            </button>
          </nav>
        </aside>

        <div className={Styles.content}>

          <section id="products-1"  ref={el => sectionsRef.current[0] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2><span>Вихревой расхо</span>домер систем</h2>
              <p>Современное решение для мобильных газозаправочных пунктов</p>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.minFoto}>
                <div className={Styles.imageCard} onClick={() => setSrcForBigPhoto(product_2.src)}>
                  <img src={product_2.src} alt="#" className={Styles.mainImage} />                               
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.zoomText}>Нажмите для увеличения</span>
                  </div>
                </div>
              </div>              
            </div>
            <div className={Styles.features}>
              <h3>Основное назначение</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>💎</div>
                  <div>
                    <h4 className={Styles.featureTitle}>Высокая стабильность</h4>
                    <p className={Styles.featureText}>{t('Стабильность')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🔧</div>
                  <div>
                    <h4 className={Styles.featureTitle}>Гибкость настройки</h4>
                    <p className={Styles.featureText}>{t('Колибровка')}</p>
                  </div>
                </li>                
              </ul>
              <h3>{t('Принцип')}</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>                  
                  <div>
                    <p className={Styles.featureText}>{t('Метод')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>                  
                  <div>
                    <p className={Styles.featureText}>{t('Внутри')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-2"  ref={el => sectionsRef.current[1] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2><span>Устройство регулирования</span>перепада давления (УРПД)</h2>
              <p>Современное решение для мобильных газозаправочных пунктов</p>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.minFoto}>
                <div className={Styles.imageCard} onClick={() => setSrcForBigPhoto(product_2_1.src)}>
                  <div>
                    <img src={product_2_1.src} alt="#" className={Styles.mainImage} />
                  </div>                
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.zoomText}>Нажмите для увеличения</span>
                  </div>
                </div>
              </div>              
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div>
                    <h4 className={Styles.featureTitle}>{t('Назначение')}</h4>
                    <p className={Styles.featureText}>{t('Регулирование')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-3"  ref={el => sectionsRef.current[2] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2><span>Переключатель скважин</span> многоходовой (ПСМ)</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.minFoto}>
                <div className={Styles.imageCard} onClick={() => setSrcForBigPhoto(product_2_2.src)}>
                  <img src={product_2_2.src} alt="#" className={Styles.mainImage} />
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.zoomText}>Нажмите для увеличения</span>
                  </div>
                </div>
              </div>              
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div>
                    <h4 className={Styles.featureTitle}>{t('Назначение')}</h4>
                    <p className={Styles.featureText}>{t('Регулирование')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-4"  ref={el => sectionsRef.current[3] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2><span>Магниторегулируемый</span> клапан (КМР)</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.minFoto}>
                <div className={Styles.imageCard} onClick={() => setSrcForBigPhoto(product_2_3.src)}>
                  <img src={product_2_3.src} alt="#" className={Styles.mainImage} />
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.zoomText}>Нажмите для увеличения</span>
                  </div>
                </div>
              </div>              
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div>
                    <h4 className={Styles.featureTitle}>{t('Назначение')}</h4>
                    <p className={Styles.featureText}>{t('Расход')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-5"  ref={el => sectionsRef.current[4] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2><span>Гидропривод </span>(ГП)</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.minFoto}>
                <div className={Styles.imageCard} onClick={() => setSrcForBigPhoto(product_2_4.src)}>
                  <img src={product_2_4.src} alt="#" className={Styles.mainImage} />
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.zoomText}>Нажмите для увеличения</span>
                  </div>
                </div>
              </div>              
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div>
                    <h4 className={Styles.featureTitle}>{t('Назначение')}</h4>
                    <p className={Styles.featureText}>{t('Давление')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-6"  ref={el => sectionsRef.current[5] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2><span>Гидропривод </span>(ГП)</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.minFoto}>
                <div className={Styles.imageCard} onClick={() => setSrcForBigPhoto(product_2_5.src)}>
                  <img src={product_2_5.src} alt="#" className={Styles.mainImage} />
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.zoomText}>Нажмите для увеличения</span>
                  </div>
                </div>
              </div>              
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div>
                    <h4 className={Styles.featureTitle}>{t('Назначение')}</h4>
                    <p className={Styles.featureText}>{t('Нефтезаговых')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>   

      <button 
        onClick={scrollToTop} 
        className={`${Styles.backToTop} ${isVisible ? Styles.visible : ''}`}
        aria-label="Наверх">
        <img src={up.src} alt="" className={Styles.upIcon} />
      </button>

      {srcForBigPhoto && <BigPhoto src={srcForBigPhoto} onClose={() => setSrcForBigPhoto(null)} />}
    </div>
  );
};
