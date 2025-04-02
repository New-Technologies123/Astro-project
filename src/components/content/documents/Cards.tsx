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
        <List title={t('Сделано')} onClick={() => handleCardClick('MadeInRussia')} />
      )}
      {(selectId === 'all' || selectId === 'accountingSystem') && (
        <List title={t('Декларация')} onClick={() => handleCardClick('Declaration')} />
      )}
      {(selectId === 'all' || selectId === 'accountingSystem') && (
        <List title={t('Заключение')} onClick={() => handleCardClick('Conclusion')} />
      )}
      {(selectId === 'all' || selectId === 'accountingSystem') && (
        <List title={t('Сертификат')} onClick={() => handleCardClick('Certificate')} />
      )}
      {(selectId === 'all' || selectId === 'components') && (
        <List title={t('Гидропривод')} onClick={() => handleCardClick('hydrodrive')} />
      )}
      {(selectId === 'all' || selectId === 'measurementSystem') && (
        <List title={t('Дозирования')} onClick={() => handleCardClick('bdr')} />
      )}
      {(selectId === 'all' || selectId === 'trainingSystem') && (
        <List title={t('Очистки')} onClick={() => handleCardClick('uokCnt')} />
      )}
      
      {/* {(selectId === 'all' || selectId === 'pumpingStations') && (
        <List imgSrc="" title="Документ Насосные станции" onClick={() => handleCardClick('pumpingStations')} />
      )} */}
    </div>
  );
};
