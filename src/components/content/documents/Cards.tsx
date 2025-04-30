import Styles from './cards.module.scss';
import { List } from '../../ui/list/List';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

export const Cards = ({ selectId }) => {
  const { t, i18n } = useTranslation('documents');

  const handleCardClick = (docType: string) => {
    const openUrl = `${window.location.origin}/doc/${i18n.language}/${docType}.pdf`;
    window.open(openUrl, '_blank');
  };

  const cards = useMemo(() => {
    const allCards = [
      { id: 'accountingSystem', condition: (selectId === 'all' || selectId === 'accountingSystem'), title: t('Сделано'), docType: 'MadeInRussia' },
      { id: 'accountingSystem', condition: (selectId === 'all' || selectId === 'accountingSystem'), title: t('Декларация'), docType: 'Declaration' },
      { id: 'accountingSystem', condition: (selectId === 'all' || selectId === 'accountingSystem'), title: t('Заключение'), docType: 'Conclusion' },
      { id: 'accountingSystem', condition: (selectId === 'all' || selectId === 'accountingSystem'), title: t('Сертификат'), docType: 'Certificate' },
      { id: 'components', condition: (selectId === 'all' || selectId === 'components'), title: t('Гидропривод'), docType: 'hydrodrive' },
      { id: 'measurementSystem', condition: (selectId === 'all' || selectId === 'measurementSystem'), title: t('Дозирования'), docType: 'bdr' },
      { id: 'trainingSystem', condition: (selectId === 'all' || selectId === 'trainingSystem'), title: t('Очистки'), docType: 'uokCnt' },
    ];

    return allCards.filter(card => card.condition);
  }, [selectId, t]);

  return (
    <div className={Styles.team}>
      {cards.map((card, index) => (
        <List 
          key={`${selectId}-${card.id}-${card.docType}`}
          title={card.title} 
          onClick={() => handleCardClick(card.docType)}
          index={index}
        />
      ))}
    </div>
  );
};