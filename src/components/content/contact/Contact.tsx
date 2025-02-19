import Styles from './contact.module.scss';
import { useTranslation } from 'react-i18next';
import { Title } from '../../ui/title/Title';

export const Contact = () => {
  const { t, i18n } = useTranslation('contact');
  return (
    <>
      <div className={Styles.title}>
        <Title text={t('Контакты')}></Title>
      </div>      
      
      <section className={Styles.contactContent}>
        <p>
          <span id="contacts">{t('Информация')}</span>
        </p>
        <figure className={Styles.leftContent}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Af1bd327c32b7c5c037613d0c1228b955362997bce9338237e5b612e6449e8c86&amp;source=constructor"
            width="700"
            height="450"
            frameBorder="0"
          />
        </figure>
      </section>
    </>
  );
};