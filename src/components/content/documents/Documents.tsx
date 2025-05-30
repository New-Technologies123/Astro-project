import Styles from './documents.module.scss';
import { Select } from '../../ui/select/Select';
import { useState, useEffect } from 'react';
import { Cards } from './Cards';
import { useTranslation } from 'react-i18next';
import { Title } from '../../ui/title/Title';
import up from '../../../images/arrow.svg';

export const Documents = () => {
  const { t, i18n } = useTranslation('documents');
  const [selectedId, setSelectedId] = useState<TTitleOptions>('all');
  const [showId, setShowId] = useState<TTitleOptions>('all');

  type TTitleOptions = 'all' | 'accountingSystem' | 'components' | 'measurementSystem' | 'trainingSystem' | 'pumpingStations';

  const options: { id: TTitleOptions; title: string }[] = [
    {
      id: 'all',
      title: t('Вся'),
    },
    {
      id: 'accountingSystem',
      title: t('Система учета'),
    },
    {
      id: 'components',
      title: t('Комплектующие'),
    },
    {
      id: 'measurementSystem',
      title: t('Система измерения'),
    },
    { 
      id: 'trainingSystem',
      title: t('Системы подготовки'),
    },
    {
      id: 'pumpingStations',
      title: t('Насосные станции'),
    },
  ];

  const onShowClick = () => {
    setShowId(selectedId);
  };

  // Кнопка "Наверх"
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 50) setIsVisible(true);
        else setIsVisible(false);
      };
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <>
      <Title text={t('Документы')}></Title>
      
      <div className={Styles.documentList}>
        <p>{t('Выбор')}</p>
        <div className={Styles.list}>
          <Select options={options} selectedId={selectedId} onSelect={(id) => setSelectedId(id as TTitleOptions)}/>

          <div className={Styles.documentButton}>
            <button onClick={onShowClick}>{t('Показать')}</button>
          </div>
        </div>
      </div>
      <Cards selectId={showId} key={showId}/>
      <button onClick={scrollToTop} 
        className={`${Styles.backToTop} ${isVisible ? Styles.visible : ''}`}
        aria-label="Наверх">
        <img src={up.src} alt="" className={Styles.upIcon} />
      </button>
    </>
  );
};