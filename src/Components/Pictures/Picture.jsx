import React from 'react'
import styles from "../HomePage/home.module.css";

const Picture = ({url,tumbnailUrl}) => {
  return (
    <div className={styles.photos_div}>
      <img src={url} alt={url} />
    </div>
  )
}

export default Picture
