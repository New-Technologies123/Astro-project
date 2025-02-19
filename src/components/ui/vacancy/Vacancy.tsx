import Styles from './vacancy.module.scss';

// Тип для пропсов компонента
type TVacancyProps = {
  title: string;
  header?: string;
  experience?: string; // Требуемый опыт
  // employmentType?: string; // Тип занятости
  onClick?: () => void;
};

export const Vacancy = ({ title, header, experience, onClick,}: TVacancyProps) => {

  return (
    <div className={Styles.employeeVacancy} onClick={onClick}>
      {header && (
        <h3 className={Styles.titleVacancy}>
          {header}
        </h3>
      )}
      <p className={onClick ? Styles.actionVacancy : Styles.title}>
        {title}
      </p>
      {experience && (
        <p className={Styles.experience}>
          {experience}
        </p>
      )}
      {/* Вывод для дополнительной информации */}
      {/* {employmentType && (
        <p className={Styles.employmentType}>
          {t(employmentType)}
        </p>
      )} */}
    </div>
  );
};
