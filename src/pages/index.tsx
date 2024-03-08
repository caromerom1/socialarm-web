import Image from 'next/image';
import { useState } from 'react';

import { Button, TextField } from '@mui/material';

import LoginLayout from '@/layouts/login';
import styles from '@/styles/login.module.css';

import SociAlarmLogo from '@/assets/SociAlarmLogo.svg';
import { Loader } from '@/components/Loader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  if (isLoading) {
    return (
      <LoginLayout>
        <Loader />
      </LoginLayout>
    );
  }

  return (
    <LoginLayout>
      <Image
        src={SociAlarmLogo}
        alt="SociAlarm"
        className={styles.sociAlarmLogo}
      />

      <TextField
        id="outlined-basic"
        label="Correo electrónico"
        variant="outlined"
        sx={{
          width: '500px',
          backgroundColor: 'white',
        }}
        placeholder="Correo electrónico"
      />
      <TextField
        id="outlined-basic"
        label="Contraseña"
        variant="outlined"
        sx={{
          width: '500px',
          backgroundColor: 'white',
        }}
        placeholder="Contraseña"
        type="password"
      />
      <Button
        variant="contained"
        color="secondary"
        sx={{
          color: 'white',
          textTransform: 'none',
          paddingY: '13.5px',
          fontSize: '20px',
          fontWeight: '400',
        }}
        onClick={handleLogin}
      >
        Ingresar
      </Button>
    </LoginLayout>
  );
};

export default Home;
