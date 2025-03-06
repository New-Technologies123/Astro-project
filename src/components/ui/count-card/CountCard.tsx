import Styles from './count-card.module.scss';

// Тип для пропсов компонента
type TVacancyProps = {
  title: string;
  header?: string;
  experience?: string;
};

export const CountCard = ({ title, header, experience}: TVacancyProps) => {

  return (
    <div className={Styles.bloc}>
        <h1>{header}</h1>
        <div>
            <h3>{title}</h3>
        </div>        
        <p>{experience}</p>
    </div>
  );
};