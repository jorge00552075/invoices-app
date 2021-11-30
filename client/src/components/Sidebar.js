import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Moon } from '../assets/icon-moon.svg';
// import { ReactComponent as Sun } from '../assets/icon-sun.svg';
import avatar from '../assets/image-avatar.jpg';

import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo_wrapper}>
        <Logo />
      </div>

      <div className={styles.container}>
        <button className={styles.btn}>
          <Moon />
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
