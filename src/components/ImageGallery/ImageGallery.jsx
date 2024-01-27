import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ children }) => (
  <ul className={css.imageGallery}>{children}</ul>
);
