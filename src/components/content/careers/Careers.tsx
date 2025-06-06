import Styles from './careers.module.scss';
import { useTranslation } from 'react-i18next';
import { Vacancy } from '../../ui/vacancy/Vacancy';
import { useState } from 'react';
import { Title } from '../../ui/title/Title';
import { useEffect } from 'react';
import up from '../../../images/arrow.svg';

type TCareers = 'vacancy1' | 'vacancy2' | 'vacancy3' | 'vacancy4' | 'vacancy5' | 'vacancy6' 
 | 'vacancy7' | 'vacancy8' | 'vacancy9' | 'vacancy10' | 'vacancy11' | 'vacancy12' | 'vacancy13'
 | 'vacancy14' | 'vacancy15' | 'vacancy16' | 'vacancy17' | 'vacancy18' | 'vacancy20'
 | 'vacancy21' | 'vacancy22' | 'vacancy23';

export const Careers = () => {
    const { t, i18n } = useTranslation('careers');

    const vacancyLinks: Record<TCareers, string> = {
        vacancy1: "https://ufa.hh.ru/vacancy/119819836?hhtmFrom=vacancy_search_list",
        vacancy2: "https://ufa.hh.ru/vacancy/119490414?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",        
        vacancy3: "https://ufa.hh.ru/vacancy/120697632?hhtmFrom=vacancy_search_list",
        vacancy4: "https://ufa.hh.ru/vacancy/120526587?hhtmFrom=vacancy_search_list",
        vacancy5: "https://ufa.hh.ru/vacancy/119054462?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",        
        vacancy9: "https://ufa.hh.ru/vacancy/120561475?hhtmFrom=vacancy_search_list",
        vacancy6: "https://ufa.hh.ru/vacancy/120012608?hhtmFrom=vacancy_search_list",
        vacancy7: "https://ufa.hh.ru/vacancy/120113191?hhtmFrom=vacancy_search_list",
        vacancy8: "https://ufa.hh.ru/vacancy/120979950?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy10: "https://ufa.hh.ru/vacancy/119206223?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy11: "https://ufa.hh.ru/vacancy/119888842?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy12: "https://ufa.hh.ru/vacancy/119591418?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy13: "https://ufa.hh.ru/vacancy/120012414?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",        
        vacancy14: "https://ufa.hh.ru/vacancy/121163003?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy15: "https://ufa.hh.ru/vacancy/119049339?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy16: "https://ufa.hh.ru/vacancy/120455324?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy17: "https://ufa.hh.ru/vacancy/119000621?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy18: "https://ufa.hh.ru/vacancy/121164312?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",        
        vacancy20: "https://ufa.hh.ru/vacancy/120468792?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy21: "https://ufa.hh.ru/vacancy/119019977?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy22: "https://ufa.hh.ru/vacancy/121165460?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy23: "https://ufa.hh.ru/vacancy/121359859?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
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
                    <div className={Styles.ramca}>                                           
                        <div className={Styles.vacancies}>
                            <p>Заки Валиди 32/2</p>
                            <div className={Styles.team}>
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
                                    header={t('Специалист')}
                                    title={t('Опыт')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy9, "_blank")}
                                />
                            </div>

                        </div>
                        <div className={Styles.vacancies}>
                            <p>Благоварская 16/2</p>
                            <div className={Styles.team}>
                                <Vacancy
                                    header={t('Контролер')}
                                    title={t('Опыт')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy1, "_blank")}
                                />
                                <Vacancy
                                    header={t('Работник')}
                                    title={t('ОпытНе')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy2, "_blank")}
                                />
                                <Vacancy
                                    header={t('Монтажник')}
                                    title={t('Опыт')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy5, "_blank")}
                                />
                                <Vacancy
                                    header={t('Слесарь')}
                                    title={t('Опыт')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy8, "_blank")}
                                />
                                <Vacancy
                                    header={t('Маляр')}
                                    title={t('ОпытНе')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy10, "_blank")}
                                />
                                <Vacancy
                                    header={t('Ведущий')}
                                    title={t('Опыт')}
                                    experience={t('Полная')}
                                    employmentType={t('ГрафикДр')}
                                    onClick={() => window.open(vacancyLinks.vacancy12, "_blank")}
                                />
                                <Vacancy
                                    header={t('Электрогазосварщик')}
                                    title={t('Опыт')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy13, "_blank")}
                                />
                                <Vacancy
                                    header={t('Электрик')}
                                    title={t('Опыт')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy14, "_blank")}
                                />
                                <Vacancy
                                    header={t('Токарь')}
                                    title={t('Опыт')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy15, "_blank")}
                                />
                                <Vacancy
                                    header={t('Пильщик')}
                                    title={t('Опыт')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy17, "_blank")}
                                />
                                <Vacancy
                                    header={t('КИПиА')}
                                    title={t('Опыт')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy18, "_blank")}
                                />
                                <Vacancy
                                    header={t('Бухгалтера')}
                                    title={t('Опыт3')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy22, "_blank")}
                                />
                                <Vacancy
                                    header={t('Кладовщик')}
                                    title={t('Опыт')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy23, "_blank")}
                                />
                            </div> 
                        </div>
                        <div className={Styles.vacancies}>
                            <p>Вахта</p>
                            <div className={Styles.team}>
                                <Vacancy
                                    header={t('Водитель')}
                                    title={t('ОпытНе')}
                                    experience={t('Вахта')}
                                    employmentType={t('График6')}
                                    onClick={() => window.open(vacancyLinks.vacancy11, "_blank")}
                                />
                                <Vacancy
                                    header={t('Замера')}
                                    title={t('Опыт')}
                                    experience={t('Вахта3')}
                                    employmentType={t('График6и5')}
                                    onClick={() => window.open(vacancyLinks.vacancy16, "_blank")}
                                />
                                <Vacancy
                                    header={t('ВодительС')}
                                    title={t('ОпытНе')}
                                    experience={t('Вахта3')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy20, "_blank")}
                                />
                                <Vacancy
                                    header={t('Исследованию')}
                                    title={t('Опыт')}
                                    experience={t('Вахта')}
                                    employmentType={t('График6')}
                                    onClick={() => window.open(vacancyLinks.vacancy21, "_blank")}
                                />
                            </div>
                        </div>
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