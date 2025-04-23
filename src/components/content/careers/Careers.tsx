import Styles from './careers.module.scss';
import { useTranslation } from 'react-i18next';
import { Vacancy } from '../../ui/vacancy/Vacancy';
import { useState } from 'react';
import { Title } from '../../ui/title/Title';
import { useEffect } from 'react';


type TCareers = 'vacancy1' | 'vacancy2' | 'vacancy3' | 'vacancy4' ;

export const Careers = () => {
    const { t, i18n } = useTranslation('careers');

    const vacancyLinks: Record<TCareers, string> = {
        vacancy1: "https://ufa.hh.ru/vacancy/119582800?hhtmFrom=vacancy_search_list",
        vacancy2: "https://ufa.hh.ru/vacancy/118708540?hhtmFrom=vacancy_search_list",
        vacancy3: "https://ufa.hh.ru/vacancy/119825321?hhtmFrom=vacancy_search_list",
        vacancy4: "https://ufa.hh.ru/vacancy/119363040?hhtmFrom=vacancy_search_list",
    };

    const [typeLayoutBackOpen, setTypeLayoutBackOpen] = useState<TCareers | null>(null);
    
    useEffect(() => {
        setTypeLayoutBackOpen(() => {
            const queryParams = new URLSearchParams(window.location.search);
            const typeFromQuery = queryParams.get('type');
            return typeFromQuery ? (typeFromQuery as TCareers) : null;
        });
    }, []);
    
    const onBack = () => {
        setTypeLayoutBackOpen(null);
    
        const newUrl = `${window.location.origin}${window.location.pathname}`;
        window.history.pushState({}, '', newUrl);
    };
    
    const onClickCard = (typeProduct: TCareers) => {
        setTypeLayoutBackOpen(typeProduct);
    
        const newUrl = `${window.location.origin}${window.location.pathname}?type=${typeProduct}`;
        window.history.pushState({}, '', newUrl);
    };

    return (
        <>
            {typeLayoutBackOpen === null && (
                <>
                    <Title text={t('Вакансии')}></Title>                   
                    
                    <div className={Styles.team}>
                        <Vacancy
                            header={t('Куратор')}
                            title={t('Опыт')}
                            experience={t('Полная')}
                            employmentType={t('График')}
                            onClick={() => window.open(vacancyLinks.vacancy1, "_blank")}
                        />
                        <Vacancy
                            header={t('Электрогазосварщик')}
                            title={t('Опыт')}
                            experience={t('Полная')}
                            employmentType={t('График')}
                            onClick={() => window.open(vacancyLinks.vacancy2, "_blank")}
                        />
                        <Vacancy
                            header={t('Логист')}
                            title={t('Опыт3')}
                            experience={t('Полная')}
                            employmentType={t('График')}
                            onClick={() => window.open(vacancyLinks.vacancy3, "_blank")}
                        />
                        <Vacancy
                            header={t('Руководитель')}
                            title={t('Опыт')}
                            experience={t('Полная')}
                            employmentType={t('График')}
                            onClick={() => window.open(vacancyLinks.vacancy4, "_blank")}
                        />
                    </div>
                </>
            )}
        </>
    );
};