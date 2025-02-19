import Styles from './layoutBack.module.scss';
import { ScrollTopOnRender } from '../base/ScrollTopOnRender';
import { Title } from '../ui/title/Title';
import back from '../../images/back.svg'

export const LayoutBack = ({ title, onBack, children }) => {
  return (
    <ScrollTopOnRender>
      <div className={Styles.boxButtonText}>
          <img src={back.src} alt="" onClick={onBack}/>
        <Title text={title}></Title>
      </div>

      <div className={Styles.content}>{children}</div>
    </ScrollTopOnRender>
  );
};
