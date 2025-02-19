import logo from '../../images/logo.webp';
import location from '../../images/location.svg';
import email from '../../images/email.svg';
import phone from '../../images/phone.svg';
import Styles from './footer.module.scss';
import { useTranslation } from 'react-i18next';

export const Footer = ({ }) => {
  const { t, i18n } = useTranslation('footer');

  return (
    <footer>
      <div className={Styles.footerContainerImg}>
        <div className={Styles.footerContainer}>
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
                <a href={`/${i18n.language}/services`} className={Styles.active}>
                  {t('Сервисные услуги')}
                </a>
              </p>
              <h3>{t('Карьера')}</h3>
              <p>
                <a href={`/${i18n.language}/careers`} className={Styles.active}>
                  {t('Вакансия')}
                </a>
              </p>
            </div>
            <div className={Styles.footerSection}>
              <h3>{t('О компании')}</h3>
              <p>
                <a href={`/${i18n.language}/documents`} className={Styles.active}>
                  {t('Документы')}
                </a>
              </p>
              <p>
                <a href={`/${i18n.language}/news`} className={Styles.active}>
                  {t('Новости')}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.footerLogo}>
          <img src={logo.src} alt="Новые Технологии" />
        </div>
      </div>
      
    </footer>
  );
};
