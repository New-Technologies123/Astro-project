import Styles from './contact.module.scss';
import { useTranslation } from 'react-i18next';
import { Title } from '../../ui/title/Title';

export const Contact = () => {
  const { t, i18n } = useTranslation('contact');
  
  // Определяем URL карты в зависимости от текущего языка
  const mapUrl = i18n.language === 'en' 
    ? "https://yandex.ru/map-widget/v1/?um=constructor%3A7e310988bcfd232d57415d059b582e872e6f9b30a42d2aad2a15aa82885ad21f&amp;source=constructor"
    : "https://yandex.ru/map-widget/v1/?um=constructor%3Ab53b3618b02478d6cb63f80a7fa6df1cea0c7c3c6b4c63b5e05478c148831d61&amp;source=constructor";

  return (
    <>
      <div className={Styles.title}>
        <Title text={t('Контакты')}></Title>
      </div>      
      
      <section className={Styles.contactContent}>        
        <div className={Styles.contactText}>
          <div className={Styles.contactBloc}>
            <h4>{t('Офис')}</h4>
            <p>{t('Валиди')}</p>
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