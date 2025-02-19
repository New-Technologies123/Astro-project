
import Styles from './careers.module.scss';
import { useTranslation } from 'react-i18next';

export const Vacancy2 = () => {
  const { t } = useTranslation('careers');


  return (
    <div className={Styles.wrapper}>
      <h3>{t('Опыт2')}</h3>
    </div>
  );
};
