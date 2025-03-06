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
          title='300'
          experience={t('Штатных')}
        />

        <CountCard
          title='31404'
          experience={t('Площадь')}
        />
        <CountCard
          header={t('Более')}
          title='100'
          experience={t('Успешно')}
        />
        <CountCard
          title='100%'
          experience={t('Следование')}
        />
        <CountCard
          title='79'
          experience={t('Краны')}
        />
      </div>
    </>
  );
};
