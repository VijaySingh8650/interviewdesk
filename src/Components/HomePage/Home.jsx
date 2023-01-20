import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPictures, getUser } from '../../Store/Home/home.action';
import userPic from '../../Assets/user.svg';
import point from '../../Assets/point.svg';
import styles from './home.module.css';
import { Link } from 'react-router-dom';
import Picture from '../Pictures/Picture';
import ResSidebar from '../Sidebar/ResSidebar';

const Home = () => {
  const dispatch = useDispatch();
  const { user, pictures } = useSelector((store) => store.data);
  console.log(user, pictures);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getPictures());
  }, [dispatch]);

  return (
    <div>
      {/* user details */}
      <div className={styles.container}>
        {/* user picture */}
        <div>

            <div className={styles.picture}></div>
 
        </div>
        {/* user info */}

        {'{}' !== JSON.stringify(user) && (
          <div>
            <div className={styles.username}>
              <p className={styles.username_username}>{user.username}</p>
              <button className={styles.username_follow}>Follow</button>
              <button className={styles.username_message}>Message</button>
              <button className={styles.username_userpic}>
                <img src={userPic} alt="user" />
              </button>
              <img className={styles.username_points} src={point} alt="point" />
            </div>
            <div className={styles.name}>
              <p>{user.name}</p>
              <Link to="#">{user.website}</Link>
              <p>{user?.email}</p>
              <p>{user?.phone}</p>
              <p>
                Address - {user.address.street}, {user.address.suite},{' '}
                {user?.address.city}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className={styles.divider}></div>

      {/* pictures */}
      <div className={styles.photos}>
        {pictures?.map((el) => {
          const { id, url, thumbnailUrl } = el;
          return <Picture key={id} url={url} thumbnailUrl={thumbnailUrl} />;
        })}
      </div>

      
      {/* responsive sidebar */}
       <ResSidebar/>
    </div>
  );
};

export default Home;
