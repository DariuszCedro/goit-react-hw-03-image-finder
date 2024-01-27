import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map((image, index) => (
        <li key={index} className={css.imageGalleryItem}>
          <img
            src={image.webformatURL}
            alt={image.tags}
            className={css.imageGalleryItemImage}
          />
        </li>
      ))}
    </ul>
  );
};
