import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export const Searchbar = () => (
  <header>
    <form className={css.searchForm}>
      <button type="submit" className={css.searchFormButton}>
        <span>Search</span>
      </button>

      <input
        className={css.searchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);
