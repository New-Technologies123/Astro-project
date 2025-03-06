import Styles from './count-card.module.scss';

// Тип для пропсов компонента
type TVacancyProps = {
    number: string;
    header?: string;
    title?: string;
    text?: string;
    offer?: string;
};

export const CountCard = ({ number, header, title, text, offer}: TVacancyProps) => {

    return (
        <div className={Styles.bloc}>
            <h1>{header}</h1>
            <div className={Styles.numberText}>
                <h3>{number}</h3>
                <h4>{text}</h4>
                <h5>{offer}</h5>
            </div>        
            <p>{title}</p>
        </div>
    );
};