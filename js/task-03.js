const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallaryEl = document.querySelector('.gallery');

const makeGallery = ({ url, alt }) =>
  `<li>
  <img src='${url}' alt='${alt}'>
  </li>`;
const markup = images.map((el) => {
 return makeGallery(el);
});

gallaryEl.insertAdjacentHTML("afterbegin", markup.join(''));

const styleEl = document.querySelector('ul');
styleEl.style.listStyle = 'none';
styleEl.style.display = 'flex';
styleEl.style.gap = '30px';
