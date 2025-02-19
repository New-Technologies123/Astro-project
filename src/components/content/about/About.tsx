import der from '../../../images/about/der.webp';
import { Layout } from '../../layout/Layout';
import { Card } from '../../ui/card/Card';

export const About = () => {
  return (
    <>
      <Layout        
        title="О компании"
        description="Текст о компании"
      >
        <>
          <Card imgSrc={der.src} title="Рауфович" header="Генеральный" />
          <Card imgSrc="" title="Рамиловна" header="Коммерческий" />
        </>
      </Layout>
    </>
  );
};
