import logoRu from '../../images/logo_ru.webp';
import logoEn from '../../images/logo_en.webp';

import location from '../../images/location.svg';
import email from '../../images/email.svg';
import phone from '../../images/phone.svg';
import Styles from './footer.module.scss';
import { useTranslation } from 'react-i18next';

export const Footer = ({ }) => {
  const { t, i18n } = useTranslation('footer');

   // Выбираем логотип в зависимости от текущего языка
   const getLogoByLanguage = (language) => {
    switch(language) {
      case 'en':
        return logoEn;
      case 'ru':
        return logoRu;
    }
  };

  const currentLogo = getLogoByLanguage(i18n.language);

  return (
    <footer>
      <div className={Styles.footerContainer}>
        <div className={Styles.footerContainerText}>
          <div className={Styles.footerText}>
            <h3>{t('Контакты')}</h3>
            <p>
              <img src={location.src} alt="Адрес" className={Styles.footerIcon} /> 
              {t('Адрес')}
            </p>
            <p>
              <img src={email.src} alt="Email" className={Styles.footerIcon} /> 
              Email: nt@tech-new.ru
            </p>
            <p>
              <img src={phone.src} alt="Телефон" className={Styles.footerIcon} />
              {t('Телефон')}
            </p>
          </div>
          <div className={Styles.footerBloc}>
            <div className={Styles.footerSection}>
              <h3>{t('Продукция')}</h3>
              <p>
                <a href={`/${i18n.language}/services`}>
                  {t('Сервисные услуги')}
                </a>
              </p>
              <h3>{t('Карьера')}</h3>
              <p>
                <a href={`/${i18n.language}/careers`}>
                  {t('Вакансия')}
                </a>
              </p>
            </div>
            <div className={Styles.footerSection}>
              <h3>{t('О компании')}</h3>
              <p>
                <a href={`/${i18n.language}/documents`}>
                  {t('Документы')}
                </a>
              </p>
              <p>
                <a href={`/${i18n.language}/news`}>
                  {t('Новости')}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.footerLogo}>
          <img src={currentLogo.src} alt="Новые Технологии" />
        </div>
      </div>
      
    </footer>
  );
};
