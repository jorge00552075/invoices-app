import { useState } from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Moon } from '../../assets/icon-moon.svg';
import { ReactComponent as Sun } from '../../assets/icon-sun.svg';
import avatar from '../../assets/image-avatar.jpg';

import styles from './Sidebar.module.css';

const htmlEl = document.documentElement;

function Sidebar() {
  const [theme, setTheme] = useState('light');

  function handleClick() {
    if (theme === 'light') {
      htmlEl.setAttribute('data-theme', 'dark');
      setTheme('dark');
    } else {
      htmlEl.setAttribute('data-theme', 'light');
      setTheme('light');
    }
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <div className={styles.container}>
        <button className={styles.btn} onClick={handleClick}>
          {theme === 'light' ? <Sun /> : <Moon />}
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
