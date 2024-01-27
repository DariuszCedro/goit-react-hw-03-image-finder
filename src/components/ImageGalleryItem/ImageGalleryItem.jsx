import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = () => (
  <li className="imageGalleryItem">
    <img className={css.imageGalleryItemImage} src="" alt="" />
  </li>
);
