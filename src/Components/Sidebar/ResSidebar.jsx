import React from 'react'
import home from '../../Assets/home.svg';
import search from '../../Assets/search.svg';
import create from '../../Assets/create.svg';
import heart from '../../Assets/heart.svg';
import explore from '../../Assets/explore.svg';
import msg from '../../Assets/msg.svg';

const ResSidebar = () => {
  return (
    <div className="sidebar_responsive">
      <img src={home} alt="Home" />
      <img src={search} alt="search" />
      <img src={explore} alt="explore" />
      <img src={msg} alt="msg" />
      <img src={heart} alt="heart" />
      <img src={create} alt="create" />
    </div>
  );
}

export default ResSidebar
