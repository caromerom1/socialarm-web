import RootLayout from '@/layouts/root';
import styles from '@/styles/login.module.css';

interface LoginLayoutProps {
  children: React.ReactNode;
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return (
    <RootLayout>
      <section className={styles.mainContainer}>
        <div className={styles.container}>{children}</div>
      </section>
    </RootLayout>
  );
};

export default LoginLayout;
