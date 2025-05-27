import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';

import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
