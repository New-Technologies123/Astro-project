import Styles from './contact.module.scss';
import { useTranslation } from 'react-i18next';
import { Title } from '../../ui/title/Title';

export const Contact = () => {
  const { t, i18n } = useTranslation('contact');
  
  // Определяем URL карты в зависимости от текущего языка
  const mapUrl = i18n.language === 'en' 
    ? "https://yandex.ru/map-widget/v1/?um=constructor%3A7e310988bcfd232d57415d059b582e872e6f9b30a42d2aad2a15aa82885ad21f&amp;source=constructor"
    : "https://yandex.ru/map-widget/v1/?um=constructor%3Af1bd327c32b7c5c037613d0c1228b955362997bce9338237e5b612e6449e8c86&amp;source=constructor";

  return (
    <>
      <Title text={t('Контакты')}></Title>

      <section className={Styles.contactContent}>
        <div className={Styles.contactBloc}>
          <div className={Styles.contactText}>
            <h4>{t('Офис')}</h4>
            <p>{t('Валиди')}</p>
          </div>
          <div className={Styles.contactText}>
            <h4>{t('Юридический')}</h4>
            <p>{t('Менделеева')}</p>
          </div>
          <div className={Styles.contactInfo}>
            <p>{t('ИннОгрн')}</p>
          </div>
          <div className={Styles.contactInfo}>
            <p>{t('Вопросы')}</p>
            <h6>+7 999 999 999</h6>
          </div>
        </div>
        
        <figure className={Styles.leftContent}>          
          <iframe 
            src={mapUrl}
            width="700" 
            height="450" 
            frameBorder="0"
            key={i18n.language} // Добавляем ключ для принудительного ререндера при смене языка
          />
        </figure>
      </section>
    </>
  );
};