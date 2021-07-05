import imageUrl from './logo.svg'

function generateVoteCount() {
  return Math.floor(Math.random() * (100 - 10) + 10);
}

export default [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/daniel.jpg',
    productImageUrl: imageUrl, //'images/products/image-aqua.png',
  },
  {
    id: 2,
    title: 'Green Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/daniel.jpg',
    productImageUrl: imageUrl, //'images/products/image-aqua.png',
  },
  {
    id: 3,
    title: 'Blue Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/daniel.jpg',
    productImageUrl: imageUrl, //'images/products/image-aqua.png',
  },
  {
    id: 4,
    title: 'Red Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/daniel.jpg',
    productImageUrl: imageUrl, //'images/products/image-aqua.png',
  },
  {
    id: 5,
    title: 'Pink Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/daniel.jpg',
    productImageUrl: imageUrl, //'images/products/image-aqua.png',
  },
  {
    id: 6,
    title: 'Gray Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/daniel.jpg',
    productImageUrl: imageUrl, //'images/products/image-aqua.png',
  },
]
