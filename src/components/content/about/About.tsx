import der from '../../../images/about/der.webp';
import { Layout } from '../../layout/Layout';
import { AboutCard } from '../../ui/about-card/AboutCard';
import Styles from './about.module.scss';
import { Title } from '../../ui/title/Title';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation('about');
  return (
    <>
      <Layout        
        title="О компании"
        description="Текст о компании"
      >
        <>
          <AboutCard imgSrc={der.src} title="Рауфович" header="Генеральный" />
          <AboutCard imgSrc="" title="Рамиловна" header="Коммерческий" />
        </>
      </Layout>
      <Title text={t('Цифра')}></Title>
      <div className={Styles.numberAbout}>
        <div className={Styles.bloc}>
          <h1>Более</h1>
          <h3>300</h3>
          <p>Штатных сотрудников</p>
        </div>
      </div>
    </>
  );
};
