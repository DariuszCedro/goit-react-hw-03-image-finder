import PropTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({ show, imageURL, onClose }) => {
  return (
    show && (
      <div className={css.overlay} onClick={onClose}>
        <div className={css.modal}>
          <img src={imageURL} alt="" />
        </div>
      </div>
    )
  );
};
