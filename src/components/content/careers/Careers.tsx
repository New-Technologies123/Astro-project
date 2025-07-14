import Styles from './careers.module.scss';
import { useTranslation } from 'react-i18next';
import { Vacancy } from '../../ui/vacancy/Vacancy';
import { useState } from 'react';
import { Title } from '../../ui/title/Title';
import { useEffect } from 'react';
import { BackToTop } from '../../ui/back-to-top/BackToTop';

type TCareers = 'vacancy1' | 'vacancy2' | 'vacancy3' | 'vacancy4' | 'vacancy5' | 'vacancy6' 
 | 'vacancy7' | 'vacancy8' | 'vacancy9' | 'vacancy10' | 'vacancy11' | 'vacancy12' | 'vacancy13'
 | 'vacancy14' | 'vacancy15' | 'vacancy16' | 'vacancy17' | 'vacancy18' | 'vacancy19' | 'vacancy20'
 | 'vacancy21' | 'vacancy22' | 'vacancy23' | 'vacancy24' | 'vacancy25' | 'vacancy26' | 'vacancy27'
 | 'vacancy28' | 'vacancy29' | 'vacancy30';

export const Careers = () => {
    const { t, i18n } = useTranslation('careers');

    const vacancyLinks: Record<TCareers, string> = {
        vacancy1: "https://ufa.hh.ru/vacancy/121705019?hhtmFrom=vacancy_search_list",
        vacancy2: "https://ufa.hh.ru/vacancy/122450980?hhtmFrom=vacancy_search_list",        
        vacancy3: "https://ufa.hh.ru/vacancy/120697632?hhtmFrom=vacancy_search_list",
        vacancy4: "https://ufa.hh.ru/vacancy/122555950?hhtmFrom=vacancy_search_list",        
        vacancy5: "https://ufa.hh.ru/vacancy/122445536?hhtmFrom=vacancy_search_list",        
        vacancy6: "https://ufa.hh.ru/vacancy/122610706?hhtmFrom=vacancy_search_list",
        vacancy7: "https://ufa.hh.ru/vacancy/120113191?hhtmFrom=vacancy_search_list",
        vacancy8: "https://ufa.hh.ru/vacancy/122235577?hhtmFrom=vacancy_search_list",
        vacancy9: "https://ufa.hh.ru/vacancy/120561475?hhtmFrom=vacancy_search_list",
        vacancy10: "https://ufa.hh.ru/vacancy/122706135?hhtmFrom=vacancy_search_list",
        vacancy11: "https://ufa.hh.ru/vacancy/119888842?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy12: "https://ufa.hh.ru/vacancy/119591418?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy13: "https://ufa.hh.ru/vacancy/122448154?hhtmFrom=vacancy_search_list",        
        vacancy14: "https://ufa.hh.ru/vacancy/121163003?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy15: "https://ufa.hh.ru/vacancy/122074508?hhtmFrom=vacancy_search_list",
        vacancy16: "https://ufa.hh.ru/vacancy/122081675?hhtmFrom=vacancy_search_list",
        vacancy17: "https://ufa.hh.ru/vacancy/121923403?hhtmFrom=vacancy_search_list",        
        vacancy18: "https://ufa.hh.ru/vacancy/121164312?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy19: "https://ufa.hh.ru/vacancy/122450867?hhtmFrom=vacancy_search_list",
        vacancy20: "https://ufa.hh.ru/vacancy/122553765?hhtmFrom=vacancy_search_list",
        vacancy21: "https://ufa.hh.ru/vacancy/122228698?hhtmFrom=vacancy_search_list",
        vacancy22: "https://ufa.hh.ru/vacancy/122448531?hhtmFrom=vacancy_search_list",
        vacancy23: "https://ufa.hh.ru/vacancy/122520443?hhtmFrom=vacancy_search_list",
        vacancy24: "https://ufa.hh.ru/vacancy/121679607?hhtmFrom=vacancy_search_list",
        vacancy25: "https://ufa.hh.ru/vacancy/121923492?hhtmFrom=vacancy_search_list",
        vacancy26: "https://ufa.hh.ru/vacancy/121933089?hhtmFrom=vacancy_search_list",
        vacancy27: "https://ufa.hh.ru/vacancy/122203325?hhtmFrom=vacancy_search_list",
        vacancy28: "https://ufa.hh.ru/vacancy/122203130?hhtmFrom=vacancy_search_list",
        vacancy29: "https://ufa.hh.ru/vacancy/122625941?hhtmFrom=vacancy_search_list",
        vacancy30: "https://ufa.hh.ru/vacancy/122705794?hhtmFrom=vacancy_search_list",
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
                                    header={t('Экономист')}
                                    title={t('Опыт3')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy15, "_blank")}
                                />
                                <Vacancy
                                    header={t('Инженер')}
                                    title={t('ОпытНе')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy7, "_blank")}
                                />
                                <Vacancy
                                    header={t('Коммерческий')}
                                    title={t('Опыт3')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy6, "_blank")}
                                />
                                <Vacancy
                                    header={t('Заместитель')}
                                    title={t('Опыт6')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy8, "_blank")}
                                />
                                <Vacancy
                                    header={t('Куратор')}
                                    title={t('Опыт')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy21, "_blank")}
                                />
                                <Vacancy
                                    header={t('Главный')}
                                    title={t('Опыт3')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy30, "_blank")}
                                />
                            </div>
                        </div>
                        <div className={Styles.vacancies}>
                            <p>Благоварская 16/2</p>
                            <div className={Styles.team}>
                                <Vacancy
                                    header={t('Специалист')}
                                    title={t('Опыт')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy9, "_blank")}
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
                                    header={t('Маляр')}
                                    title={t('ОпытНе')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy19, "_blank")}
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
                                    header={t('Пильщик')}
                                    title={t('Опыт')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy16, "_blank")}
                                />
                                <Vacancy
                                    header={t('КИПиА')}
                                    title={t('Опыт')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy18, "_blank")}
                                />
                                <Vacancy
                                    header={t('Бухгалтер')}
                                    title={t('Опыт')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy1, "_blank")}
                                />
                                <Vacancy
                                    header={t('Бухгалтера')}
                                    title={t('Опыт3')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy22, "_blank")}
                                />
                                <Vacancy
                                    header={t('Ведущий')}
                                    title={t('Опыт')}
                                    experience={t('Полная')}
                                    employmentType={t('ГрафикДр')}
                                    onClick={() => window.open(vacancyLinks.vacancy12, "_blank")}
                                />                                
                                <Vacancy
                                    header={t('Начальник')}
                                    title={t('Опыт3')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy24, "_blank")}
                                />
                                <Vacancy
                                    header={t('Делопроизводитель')}
                                    title={t('ОпытНе')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy4, "_blank")}
                                />
                                <Vacancy
                                    header={t('Уборщик')}
                                    title={t('ОпытНе')}
                                    experience={t('Частичная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy10, "_blank")}
                                />
                                <Vacancy
                                    header={t('Фрезеровщик')}
                                    title={t('Опыт')}
                                    experience={t('Полная')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy20, "_blank")}
                                />
                                <Vacancy
                                    header={t('Токарь')}
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
                                    header={t('КондаНефть')}
                                    title={t('Опыт')}
                                    experience={t('Вахта4')}
                                    employmentType={t('График6')}
                                    onClick={() => window.open(vacancyLinks.vacancy17, "_blank")}
                                />
                                <Vacancy
                                    header={t('Водитель')}
                                    title={t('ОпытНе')}
                                    experience={t('Вахта3и4')}
                                    employmentType={t('График6')}
                                    onClick={() => window.open(vacancyLinks.vacancy11, "_blank")}
                                />
                                   
                                <Vacancy
                                    header={t('Лебедки')}
                                    title={t('ОпытНе')}
                                    experience={t('Вахта4')}
                                    employmentType={t('График6')}
                                    onClick={() => window.open(vacancyLinks.vacancy25, "_blank")}
                                />
                                <Vacancy
                                    header={t('Категории')}
                                    title={t('Опыт')}
                                    experience={t('Вахта3')}
                                    employmentType={t('График6')}
                                    onClick={() => window.open(vacancyLinks.vacancy26, "_blank")}
                                />
                                <Vacancy
                                    header={t('ВодительСургут')}
                                    title={t('ОпытНе')}
                                    experience={t('Вахта3')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy27, "_blank")}
                                />
                                <Vacancy
                                    header={t('СлесарьСургут')}
                                    title={t('Опыт')}
                                    experience={t('Вахта3')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy28, "_blank")}
                                />
                                <Vacancy
                                    header={t('СлесарьНижневартовск')}
                                    title={t('Опыт')}
                                    experience={t('Вахта3')}
                                    employmentType={t('График')}
                                    onClick={() => window.open(vacancyLinks.vacancy29, "_blank")}
                                />
                            </div>
                        </div>
                    </div>
                </>
                
            )}
            <BackToTop/>
        </>
    );
};