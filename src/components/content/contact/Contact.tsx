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
        {/* <p>
          <span id="contacts">{t('Информация')}</span>
        </p> */}
        <div className={Styles.contactText}>
          <div className={Styles.contactBloc}>
            <h4>Офис:</h4>
            <p>450076, Республика Башкортостан, г. Уфа, ул. Заки Валиди 32/2</p>
          </div>
          <div className={Styles.contactBloc}>
            <h4>Производственные площадки:</h4>
            <p>450019, Республика Башкортостан, г. Уфа, ул. Благоварская 16/2</p>
            <p>628621, Ханты-Мансийский Автономный округ-Югра, г. Нижневартовск, ул. 2П-2С, 12В строение 1</p>
            <p>450027, Республика Башкортостан, г. Уфа, ул. Индустриальное шоссе 55</p>
          </div>
        </div>
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