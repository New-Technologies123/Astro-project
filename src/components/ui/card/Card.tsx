import Styles from './card.module.scss';
import { useTranslation } from 'react-i18next';

type TProps = {
  imgSrc: string;
  title: string;
  header?: string;
  onClick?: () => void;
};

export const Card = ({ imgSrc, title, header, onClick }: TProps) => {
  const { t } = useTranslation('layout');
  
  return (
    <div className={Styles.employeeCard} onClick={onClick}>
      <div className={Styles.system} style={{ backgroundImage: `url(${imgSrc})` }}></div>
      {header && <h3 className={Styles.headerTitle}>
        {t(header)}
      </h3>}
      <p className={onClick ? Styles.actionTitle : Styles.title}>
        {t(title)}
      </p>
    </div>
  );
};