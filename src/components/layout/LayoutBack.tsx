import Styles from './layoutBack.module.scss';
import { ScrollTopOnRender } from '../base/ScrollTopOnRender';
import { Title } from '../ui/title/Title';

export const LayoutBack = ({ title, onBack, children }) => {
  return (
    <ScrollTopOnRender>
      <div className={Styles.boxButtonText}>
        <a onClick={onBack}>
          <span className={Styles.back}>&#8656;</span>
        </a>
        <Title text={title}></Title>
      </div>

      <div className={Styles.content}>{children}</div>
    </ScrollTopOnRender>
  );
};
