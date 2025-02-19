
import Styles from './careers.module.scss';
import { useTranslation } from 'react-i18next';

export const Vacancy1 = () => {
  const { t } = useTranslation('careers');


  return (
    <div className={Styles.wrapper}>
      <h3>{t('Опыт1')}</h3>
    </div>
  );
};
