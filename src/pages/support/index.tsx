import { DashboardLayout } from '@/layouts/dashboard';
import styles from '@/styles/support.module.css';
import { InputAdornment, TextField } from '@mui/material';
import SendIcon from '@/assets/SendIcon.svg';
import Image from 'next/image';

const Support = () => (
  <DashboardLayout>
    <div className={styles.container}>
      <section className={styles.chat}>
        <h1 className={styles.chatHeader}>Soporte SociAlarm</h1>
      </section>
      <TextField
        className={styles.chatText}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#006B3C',
            borderRadius: '40px',
            borderWidth: '3px',
          },
          '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#006B3C',
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: '3px',
          },
        }}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Image src={SendIcon} alt="Buscar" className={styles.icon} />
            </InputAdornment>
          ),
        }}
        size="small"
      />
    </div>
  </DashboardLayout>
);

export default Support;
