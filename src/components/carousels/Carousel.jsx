import React from 'react';
import './Carousel.css';
import ImageSlider from './ImageSlider';

const Carousel = () => {
  const slides = [
    {
      img: 'https://media.istockphoto.com/id/1369588714/photo/smiling-arab-man-in-glasses-using-laptop-and-writing.jpg?s=1024x1024&w=is&k=20&c=LH84HI0jA1S2UVA_pjNmaeNXuF7250dJfUEpFn2w7hg=',
    },
    {
      img: 'https://media.istockphoto.com/id/1276936276/photo/creative-background-online-casino-in-a-mans-hand-a-smartphone-with-playing-cards-roulette-and.jpg?s=1024x1024&w=is&k=20&c=Hd5hqc5Ey6IqZmPKvmXjfclw9E5OR5x_-AXjEvGDvWM=',
    },
    {
      img: 'https://media.istockphoto.com/id/1152537185/photo/hacker-working-on-laptop-in-the-dark.jpg?s=1024x1024&w=is&k=20&c=XfH6Pl4y4Pm1KHbWNXuxmdUfmWdxPIC7ZeUXjwiaEzY=',
    },
    {
      img: 'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className="container">
      <ImageSlider slides={slides} />
    </div>
  );
};

export default Carousel;
