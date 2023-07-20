const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
    width: '200px',
    height: 'auto',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    width: '200px',
    height: 'auto',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
    width: '200px',
    height: 'auto',
  },
];

const gallery = document.querySelector('.gallery');

const createGalleryItem = ({ url, alt, width, height }) => {
  return `
    <li class="gallery__item">
      <img src="${url}" alt="${alt}" class="gallery__image" style="width: ${width}; height: ${height}">
    </li>
  `;
};

const galleryMarkup = images.map((image) => createGalleryItem(image)).join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.style.display = 'flex';
gallery.style.listStyle = 'none';
gallery.style.margin = '0';
gallery.style.padding = '0';
gallery.style.justifyContent = 'space-between';
gallery.style.flexWrap = 'wrap';