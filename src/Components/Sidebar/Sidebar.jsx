import React from 'react';
import insta from '../../Assets/insta.svg';
import home from '../../Assets/home.svg';
import search from '../../Assets/search.svg';
import create from '../../Assets/create.svg';
import heart from '../../Assets/heart.svg';
import explore from '../../Assets/explore.svg';
import reels from '../../Assets/reels.svg';
import msg from '../../Assets/msg.svg';

const Sidebar = () => {
  return (

      <div className="sidebar">
        <img src={insta} alt="Home" />
        <div className="flexIcon">
          <img src={home} alt="Home" />
          <img src={search} alt="search" />
          <img src={explore} alt="explore" />
          <img src={reels} alt="reels" />
          <img src={msg} alt="msg" />
          <img src={heart} alt="heart" />
          <img src={create} alt="create" />
        </div>
      </div>

  );
};

export default Sidebar;
