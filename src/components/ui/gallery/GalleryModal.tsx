import Styles from './gallery-modal.module.scss';
import { useState, useRef } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

export const GalleryModal = ({ openPhotoId, photos, onClose }) => {
  const previousRef = useRef<HTMLAnchorElement>(null);
  const nextRef = useRef<HTMLAnchorElement>(null);
  useOutsideClick([previousRef, nextRef], () => onClose(showPhotoId));

  const [showPhotoId, setShowPhotoId] = useState<number>(openPhotoId);

  const currentPhoto = photos.find((photo) => photo.id === showPhotoId);

  const nextPhoto = () => {
    setShowPhotoId((prev) => {
      let nextValue = prev + 1;
      return nextValue > photos.length ? 1 : nextValue;
    });
  };

  const previousPhoto = () => {
    setShowPhotoId((prev) => {
      let prevValue = prev - 1;
      return prevValue === 0 ? photos.length : prevValue;
    });
  };

  return (
    <div className={Styles.modal}>
      <span
        className={Styles.close}
        onClick={(e) => {
          e.stopPropagation();
          onClose(showPhotoId);
        }}
      >
        &times;
      </span>
      <div className={Styles.imageBlock}>
        <img src={currentPhoto.src} alt="" className={Styles.image} />
      </div>
      {photos.length > 1 && (
        <>
          <a ref={previousRef} className={Styles.previous} onClick={previousPhoto}>
            &#10094;
          </a>
          <a ref={nextRef} className={Styles.next} onClick={nextPhoto}>
            &#10095;
          </a>
        </>
      )}
    </div>
  );
};
