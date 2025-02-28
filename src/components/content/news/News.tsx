import news_1 from '../../../images/news/news_1.webp';
import news_2 from '../../../images/news/news_2.webp';
import news_3 from '../../../images/news/news_3.webp';
import Styles from './news.module.scss';
import { useTranslation } from 'react-i18next';
import { Gallery } from '../../ui/gallery/Gallery';
import { useState } from 'react';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { Title } from '../../ui/title/Title';

export const News = () => {
  const { t } = useTranslation('news');

  const [photoIsOpen, setPhotoIsOpen] = useState(false);

  return (
    <>
      <div className={Styles.title}>
        <Title text={t('Новости')}></Title>
      </div>
      
      
      <section className={Styles.newsContent}>
        <div className={Styles.newsItem}>
          <Gallery
            photos={[
              { id: 1, src: news_2.src, alt: '' },
              { id: 2, src: news_3.src, alt: '' },
            ]}
          />
          <p>
            {t('Выставка')}
          </p>
        </div>

        <div className={Styles.newsItem}>
          <img src={news_1.src} className={Styles.thumbnail} onClick={() => { setPhotoIsOpen(true); }}/>
          <p>
            {t('Конкурс')}
          </p>

          {photoIsOpen && <BigPhoto src={news_1.src} onClose={() => setPhotoIsOpen(false)} />}

          
        </div>
      </section>
    </>
  );
};
