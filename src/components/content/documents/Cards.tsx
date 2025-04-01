import Styles from './cards.module.scss';
import { List } from '../../ui/list/List';
import { useTranslation } from 'react-i18next';

export const Cards = ({ selectId }) => {
  const { t, i18n } = useTranslation('documents');

  const handleCardClick = (docType: string) => {
    const openUrl = `${window.location.origin}/doc/${i18n.language}/${docType}.pdf`;
    window.open(openUrl, '_blank');
  };

  return (
    <div className={Styles.team}>
      {(selectId === 'all' || selectId === 'accountingSystem') && (
        <List title={t('Учет')} onClick={() => handleCardClick('accountingSystem')} />
      )}
      {(selectId === 'all' || selectId === 'components') && (
        <List title="Гидропривод" onClick={() => handleCardClick('hydrodrive')} />
      )}
      {(selectId === 'all' || selectId === 'measurementSystem') && (
        <List title="Установка дозирования химического реагента" onClick={() => handleCardClick('bdr')} />
      )}
      {(selectId === 'all' || selectId === 'trainingSystem') && (
        <List title="Устройство очистки колонны УОК-НКТ" onClick={() => handleCardClick('uokCnt')} />
      )}
      {/* {(selectId === 'all' || selectId === 'measurementSystem') && (
        <List imgSrc="" title="Документ Система измерения" onClick={() => handleCardClick('measurementSystem')} />
      )} 
      {(selectId === 'all' || selectId === 'trainingSystem') && (
        <List imgSrc="" title="Документ Системы подготовки" onClick={() => handleCardClick('trainingSystem')} />
      )} 
      {(selectId === 'all' || selectId === 'pumpingStations') && (
        <List imgSrc="" title="Документ Насосные станции" onClick={() => handleCardClick('pumpingStations')} />
      )}  */}
    </div>
  );
};
