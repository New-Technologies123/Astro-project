import der from '../../../images/about/der.webp';
import { Layout } from '../../layout/Layout';
import { ProfileCard } from '../../ui/profile-card/ProfileCard';
import Styles from './about.module.scss';
import { Title } from '../../ui/title/Title';
import { useTranslation } from 'react-i18next';
import { CountCard } from '../../ui/count-card/CountCard';


export const About = () => {
  const { t } = useTranslation('about');
  return (
    <>
      <Layout title="О компании" description="Текст о компании">
        <>
          <ProfileCard imgSrc={der.src} title="Рауфович" header="Генеральный" />
          <ProfileCard imgSrc="" title="Рамиловна" header="Коммерческий" />
        </>
      </Layout>
      <Title text={t('Цифра')}></Title>
      <div className={Styles.numberAbout}>
        <CountCard 
          header={t('Более')}
          number='300'
          title={t('Штатных')}
        />

        <CountCard
          number='31404'
          text='м'
          offer='2'
          title={t('Площадь')}
        />
        <CountCard
          header={t('Более')}
          number='100'
          title={t('Успешно')}
        />
        <CountCard
          number='100%'
          title={t('Следование')}
        />
        <CountCard
          number='79'
          offer='Единиц вездеходной техники'
          title={t('Краны')}
        />
      </div>
    </>
  );
};
