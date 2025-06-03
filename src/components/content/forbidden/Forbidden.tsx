import { useTranslation } from "react-i18next";
import Styles from './forbidden.module.scss';

export const Forbidden = () => {
  const { t, i18n } = useTranslation('403');
  
  return (
    <div className={Styles.forbidden}>
      <h1>403</h1>
      <p>{t('Ошибка')}</p>
      <a href="/">{t('Главная')}</a>
    </div>
  );
};