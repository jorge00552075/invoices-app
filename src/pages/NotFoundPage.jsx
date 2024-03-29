import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";

import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.heading}>404</h1>
        <p className={styles.text}>Sorry, the page could not be found.</p>
        <Link to="/" className={styles.link}>
          Go Back
        </Link>
      </div>
    </Layout>
  );
}
export default NotFoundPage;
