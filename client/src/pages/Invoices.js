import Sidebar from '../components/Sidebar';

import styles from './Invoices.module.css';

function Invoices() {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <Sidebar />
      </aside>
      <main className={styles.main}>
        <div className={styles.container_main}>
          <header>HEADER</header>
          <ul>INVOICES LIST</ul>
        </div>
      </main>
    </div>
  );
}

export default Invoices;
