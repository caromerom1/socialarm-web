import Image from 'next/image';

import { Button } from '@mui/material';

import HomeIcon from '@/assets/HomeIcon.svg';
import AccountIcon from '@/assets/AccountIcon.svg';
import HelpIcon from '@/assets/HelpIcon.svg';
import LogoutIcon from '@/assets/LogoutIcon.svg';
import styles from './Navbar.module.css';

export const Navbar = () => (
  <div className={styles.navbarContainer}>
    <div className={styles.iconButtonContainer}>
      <Button className={styles.iconButton}>
        <Image src={AccountIcon} alt="Account" className={styles.icon} />
      </Button>
      <Button className={styles.iconButton}>
        <Image src={HomeIcon} alt="Home" className={styles.icon} />
      </Button>
    </div>
    <div className={styles.iconButtonContainer}>
      <Button className={styles.iconButton}>
        <Image src={HelpIcon} alt="Help" className={styles.icon} />
      </Button>
      <Button className={styles.iconButton}>
        <Image src={LogoutIcon} alt="Logout" className={styles.icon} />
      </Button>
    </div>
  </div>
);
