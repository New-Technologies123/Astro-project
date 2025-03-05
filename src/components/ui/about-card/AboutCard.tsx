import Styles from './about-card.module.scss';
import { useTranslation } from 'react-i18next';

type TProps = {
  imgSrc: string;
  title: string;
  header?: string;
};

export const AboutCard = ({ imgSrc, title, header }: TProps) => {
  const { t } = useTranslation('layout');
  
  return (
    <div className={Styles.employeeCard}>
        <div className={Styles.system} style={{ backgroundImage: `url(${imgSrc})` }}></div>
        <h3>
            {t(header)}
        </h3>
        <p>
            {t(title)}
        </p>     
    </div>
  );
};