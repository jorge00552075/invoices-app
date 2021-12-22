import { useState } from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Moon } from '../../assets/icon-moon.svg';
import { ReactComponent as Sun } from '../../assets/icon-sun.svg';
import avatar from '../../assets/image-avatar.jpg';

import styles from './Sidebar.module.css';

const htmlEl = document.documentElement;

function Sidebar() {
  const [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode((prev) => !prev);
    htmlEl.setAttribute('data-theme', 'dark');
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo_wrapper}>
        <Logo />
      </div>
      <div className={styles.container}>
        <button className={styles.btn} onClick={handleClick}>
          {darkMode ? <Sun /> : <Moon />}
        </button>
        <div className={styles.line} />
        <button className={styles.btn}>
          <img src={avatar} alt="avatar" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
