import React, { useEffect } from 'react';
import './InfiniteScrolling.css';

const InfiniteScrolling = () => {
  useEffect(() => {
    const addAnime = () => {
      const uiList = document.querySelector('.scrolling');
      const uiListChildrens = Array.from(uiList.children);
      uiListChildrens.forEach((lists) => {
        const clonedLists = lists.cloneNode(true);
        uiList.appendChild(clonedLists);
      });
    };

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnime();
    }
  }, []);

  return (
    <div className="container">
      <h1>InfiniteScrolling</h1>
      <div className="infiniter_scrolling_container">
        <ul className="scrolling">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>PYTHON</li>
          <li>UI</li>
          <li>UX</li>
          <li>REACT</li>
          <li>ANGULAR</li>
        </ul>
      </div>
    </div>
  );
};

export default InfiniteScrolling;
