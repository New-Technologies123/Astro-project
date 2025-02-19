import Styles from './list.module.scss';
import { useTranslation } from 'react-i18next';
import sign from '../../../images/doc.svg';

type TProps = {
  title: string;
  onClick?: () => void;
};

export const List = ({ title, onClick }: TProps) => {
  const { t } = useTranslation('layout');
  
  return (
    <div className={Styles.employeeList} onClick={onClick}>            
      <p className={onClick ? Styles.actionTitle : Styles.title}>
        <img src={sign.src} className={Styles.systemImg} ></img>
        {t(title)}
      </p>
    </div>
  );
};