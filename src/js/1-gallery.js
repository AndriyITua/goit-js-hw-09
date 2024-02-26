import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');

const galleryCardMarkup = galleryItems
  .map( item =>
    `<li class="gallery-item">
	<a class="gallery-link" href="${item.original} ">
		<img 
		    class="gallery-image" 
			src="${item.preview}" 
			alt="${item.description}" 
		/>
	</a>
    </li>`)
  .join('');
gallery.insertAdjacentHTML('beforeend', galleryCardMarkup);

let lightbox = new SimpleLightbox('.gallery li', {
	captionsData: 'alt',
	captionDelay: 250,
});
lightbox.on('shown.simplelightbox');

