import Styles from './careers.module.scss';
import { useTranslation } from 'react-i18next';
import { Vacancy } from '../../ui/vacancy/Vacancy';
import { useState } from 'react';
import { Title } from '../../ui/title/Title';
import { useEffect } from 'react';
import up from '../../../images/arrow.svg';

type TCareers = 'vacancy1' | 'vacancy2' | 'vacancy3' | 'vacancy4' | 'vacancy6' 
 | 'vacancy7' | 'vacancy8' | 'vacancy9';

export const Careers = () => {
    const { t, i18n } = useTranslation('careers');

    const vacancyLinks: Record<TCareers, string> = {
        vacancy1: "https://ufa.hh.ru/vacancy/119819836?hhtmFrom=vacancy_search_list",
        vacancy2: "https://ufa.hh.ru/vacancy/120814039?hhtmFrom=vacancy_search_list",
        vacancy3: "https://ufa.hh.ru/vacancy/120697632?hhtmFrom=vacancy_search_list",
        vacancy4: "https://ufa.hh.ru/vacancy/120526587?hhtmFrom=vacancy_search_list",        
        vacancy9: "https://ufa.hh.ru/vacancy/120561475?hhtmFrom=vacancy_search_list",
        vacancy6: "https://ufa.hh.ru/vacancy/120012608?hhtmFrom=vacancy_search_list",
        vacancy7: "https://ufa.hh.ru/vacancy/120113191?hhtmFrom=vacancy_search_list",
        vacancy8: "https://ufa.hh.ru/vacancy/120113226?hhtmFrom=vacancy_search_list",
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

    // Кнопка "Наверх"
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 100) setIsVisible(true);
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
            {typeLayoutBackOpen === null && (
                <>
                    <Title text={t('Вакансии')}></Title>                   
                    
                    <div className={Styles.team}>
                        {/* Вакансия Узно */}
                        <Vacancy
                            header={t('Контролер')}
                            title={t('Опыт')}
                            experience={t('Полная')}
                            employmentType={t('График')}
                            onClick={() => window.open(vacancyLinks.vacancy1, "_blank")}
                        />
                        <Vacancy
                            header={t('Куратор')}
                            title={t('Опыт')}
                            experience={t('Полная')}
                            employmentType={t('График')}
                            onClick={() => window.open(vacancyLinks.vacancy2, "_blank")}
                        />
                        <Vacancy
                            header={t('Тендерный')}
                            title={t('Опыт')}
                            experience={t('Полная')}
                            employmentType={t('График')}
                            onClick={() => window.open(vacancyLinks.vacancy3, "_blank")}
                        />
                        <Vacancy
                            header={t('Менеджер')}
                            title={t('ОпытНе')}
                            experience={t('Полная')}
                            employmentType={t('График')}
                            onClick={() => window.open(vacancyLinks.vacancy4, "_blank")}
                        />                       
                        <Vacancy
                            header={t('Оператор')}
                            title={t('Опыт')}
                            experience={t('Полная')}
                            employmentType={t('График')}
                            onClick={() => window.open(vacancyLinks.vacancy6, "_blank")}
                        />
                        <Vacancy
                            header={t('Инженер')}
                            title={t('ОпытНе')}
                            experience={t('Полная')}
                            employmentType={t('График')}
                            onClick={() => window.open(vacancyLinks.vacancy7, "_blank")}
                        />
                        <Vacancy
                            header={t('Электронщик')}
                            title={t('Опыт')}
                            experience={t('Полная')}
                            employmentType={t('График')}
                            onClick={() => window.open(vacancyLinks.vacancy8, "_blank")}
                        />
                        <Vacancy
                            header={t('Специалист')}
                            title={t('Опыт')}
                            experience={t('Полная')}
                            employmentType={t('График')}
                            onClick={() => window.open(vacancyLinks.vacancy9, "_blank")}
                        />
                    </div>
                </>
            )}
            <button 
                onClick={scrollToTop} 
                className={`${Styles.backToTop} ${isVisible ? Styles.visible : ''}`}
                aria-label="Наверх">
                <img src={up.src} alt="" className={Styles.upIcon} />
            </button>
        </>
    );
};