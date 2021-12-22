import React from 'react';
import Sidebar from './Sidebar.jsx';

import styles from './Layout.module.css';

const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <aside className={styles.aside}>
        <Sidebar />
      </aside>
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
