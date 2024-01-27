import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    keyword: '',
    currentPage: 1,
    isLoading: false,
    images: [],
  };

  handleSearch = async () => {
    const API_KEY = '39463260-e3e8f658d6ff3e91dda44456f';
    const form = document.querySelector('form');
    const keywordsToSearch = form.elements.keywords.value;
    try {
      this.setState({ isLoading: true });
      const response = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${keywordsToSearch}&per_page=12&page=${this.state.currentPage}`
      );
      const data = await response.json();

      this.setState(
        this.state.currentPage === 1
          ? { images: data.hits }
          : { images: this.state.images, ...data.hits }
      );
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  render() {
    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery images={this.state.images} />
        {this.state.isLoading && <Loader />}
      </>
    );
  }
}
