import Image from 'next/image';

import { TextField, InputAdornment } from '@mui/material';

import { DashboardLayout } from '@/layouts/dashboard';
import styles from '@/styles/faq.module.css';

import SearchIcon from '@/assets/SearchIcon.svg';
import HelpIcon from '@/assets/HelpIcon.svg';

interface FaqLayoutProps {
  children: React.ReactNode;
}

const temasFrecuentes = [
  'Tema frecuente 1',
  'Tema frecuente 2',
  'Tema frecuente 3',
  'Tema frecuente 4',
  'Tema frecuente 5',
];

const faqItems = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    text: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis n',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    text: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis n',
  },
];

const FaqLayout: React.FC<FaqLayoutProps> = ({ children }) => {
  return (
    <DashboardLayout>
      <div className={styles.container}>
        <section className={styles.mainContainer}>
          <h3 className={styles.containerTitle}>¿Cómo podemos ayudarte?</h3>
          {faqItems.map((item) => (
            <div className={styles.cardItem}>
              <Image
                src={HelpIcon}
                alt="Help Icon"
                className={styles.cardIcon}
                height={100}
              />
              <article>
                <h1 className={styles.cardItemTitle}>{item.title}</h1>
                <p className={styles.cardItemText}>{item.text}</p>
              </article>
            </div>
          ))}
        </section>
        <section className={styles.sencondaryContainer}>
          <TextField
            className={styles.searchInput}
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#006B3C',
              },
            }}
            label="Buscar"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Image
                    src={SearchIcon}
                    alt="Buscar"
                    className={styles.icon}
                  />
                </InputAdornment>
              ),
            }}
            size="small"
          />
          <h2 className={styles.secondaryContainerTitle}>Temas Frecuentes</h2>
          {temasFrecuentes.map((tema) => (
            <p key={tema} className={styles.secondContainerListItem}>
              {tema}
            </p>
          ))}
        </section>
      </div>
    </DashboardLayout>
  );
};

export default FaqLayout;
