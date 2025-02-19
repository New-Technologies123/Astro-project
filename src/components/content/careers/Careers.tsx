import Styles from './careers.module.scss';
import { useTranslation } from 'react-i18next';
import { LayoutBack } from '../../layout/LayoutBack';
import { Vacancy } from '../../ui/vacancy/Vacancy';
import { Vacancy1 } from './Vacancy1';
import { Vacancy2 } from './Vacancy2';
import { useState } from 'react';
import { Title } from '../../ui/title/Title';


type TProducts = 'vacancy1' | 'vacancy2' ;

export const Careers = () => {
    const { t, i18n } = useTranslation('careers');

    const cardTitle: Record<TProducts, string> = {
        vacancy1: t('Карточка'),
        vacancy2: t('Карточка'),
    };
    
    const [typeLayoutBackOpen, setTypeLayoutBackOpen] = useState<TProducts | null>(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const typeFromQuery = queryParams.get('type');
        return typeFromQuery ? (typeFromQuery as TProducts) : null;
      });
    
    const onBack = () => {
        setTypeLayoutBackOpen(null);
    
        const newUrl = `${window.location.origin}${window.location.pathname}`;
        window.history.pushState({}, '', newUrl);
    };
    
    const onClickCard = (typeProduct: TProducts) => {
        setTypeLayoutBackOpen(typeProduct);
    
        const newUrl = `${window.location.origin}${window.location.pathname}?type=${typeProduct}`;
        window.history.pushState({}, '', newUrl);
    };

    return (
        <>
            {typeLayoutBackOpen === null && (
                <>
                    <div className={Styles.title}>
                        <Title text={t('Вакансии')}></Title>
                    </div>
                    
                    
                    <div className={Styles.team}>
                        <Vacancy
                            header={t('Карточка')}
                            title={t('Опыт1')}
                            experience={t('Занятость')}
                            onClick={() => {onClickCard('vacancy1');}}
                        />
                        <Vacancy
                            header={t('Карточка')}
                            title={t('Опыт2')}
                            experience={t('Занятость')}
                            onClick={() => {onClickCard('vacancy2');}}
                        />
                    </div>
                    
                </>
            )}
            {typeLayoutBackOpen === 'vacancy1' && (
                <LayoutBack onBack={onBack} title={cardTitle.vacancy1}>
                    <Vacancy1 />
                </LayoutBack>
            )}
            {typeLayoutBackOpen === 'vacancy2' && (
                <LayoutBack onBack={onBack} title={cardTitle.vacancy2}>
                    <Vacancy2 />
                </LayoutBack>
            )}            
        </>
      );
  };