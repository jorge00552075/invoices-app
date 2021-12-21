import React from 'react';
import Sidebar from './Sidebar.jsx';

import styles from './Layout.module.css';

const Layout = (props) => {
  const bgColor = props.bgColor || 'hsl(240, 20%, 98%)';

  return (
    <div className={styles.layout}>
      <aside className={styles.aside}>
        <Sidebar />
      </aside>
      <main className={styles.main} style={{ background: bgColor }}>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
