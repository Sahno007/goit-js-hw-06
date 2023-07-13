const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
    width: '800px',
    height: '530px',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    width: '800px',
    height: '530px',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
    width: '800px',
    height: '530px',
  },
];

const galleryList = document.querySelector('.gallery');

images.forEach((image) => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery-item');
 

  const img = document.createElement('img');
  img.src = image.url;
  img.alt = image.alt;
  img.style.width = image.width;
  img.style.height = image.height;

  listItem.appendChild(img);
  galleryList.appendChild(listItem);
});

galleryList.style.display = 'flex';
galleryList.style.listStyle = 'none';
galleryList.style.margin = '0';
galleryList.style.padding = '0';
galleryList.style.justifyContent = 'space-between';
galleryList.style.flexWrap = 'wrap';