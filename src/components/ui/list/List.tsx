import Styles from './list.module.scss';
import { useTranslation } from 'react-i18next';
import sign from '../../../images/doc.svg';
import { useEffect, useRef } from 'react';

type TProps = {
  title: string;
  onClick?: () => void;
  index: number; // Добавляем индекс для определения задержки
};

export const List = ({ title, onClick, index }: TProps) => {
  const { t } = useTranslation('layout');
  const listRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (listRef.current) {
      // Задержка зависит от индекса карточки (например, 0.1s для каждой следующей)
      const delay = index * 100; // 100ms задержка между карточками
      
      setTimeout(() => {
        if (listRef.current) {
          listRef.current.style.transform = 'translateX(0)';
          listRef.current.style.opacity = '1';
        }
      }, delay);
    }
  }, [index]);

  return (
    <div 
      className={Styles.certificatesList} 
      onClick={onClick}
      ref={listRef}
      style={{
        transitionDelay: `${index * 0.1}s` // Добавляем задержку для плавности
      }}
    >
      <div className={Styles.actionTitle}>
        <img src={sign.src} alt="document icon" />
        <p>{t(title)}</p>
      </div>
      
    </div>
  );
};