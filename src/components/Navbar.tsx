import Image from 'next/image';

import { Button } from '@mui/material';

import AccountIcon from '@/assets/AccountIcon.svg';
import HelpIcon from '@/assets/HelpIcon.svg';
import HomeIcon from '@/assets/HomeIcon.svg';
import LogoutIcon from '@/assets/LogoutIcon.svg';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Dropdown } from './Dropdown';
import styles from './Navbar.module.css';

interface Props {
  handlePersonaClick: () => void;
}

export const Navbar: React.FC<Props> = ({ handlePersonaClick }) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    router.push('/');
  };

  const handleHelpClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleHomeClick = () => {
    router.push('/dashboard');
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.iconButtonContainer}>
        <Button className={styles.iconButton} onClick={handlePersonaClick}>
          <Image src={AccountIcon} alt="Account" className={styles.icon} />
        </Button>
        <Button className={styles.iconButton} onClick={handleHomeClick}>
          <Image src={HomeIcon} alt="Home" className={styles.icon} />
        </Button>
      </div>
      <div className={styles.iconButtonContainer}>
        <Button className={styles.iconButton} onClick={handleHelpClick}>
          <Image src={HelpIcon} alt="Help" className={styles.icon} />
        </Button>
        {isOpen && (
          <Dropdown handleClose={handleClose} />
        )}
        <Button className={styles.iconButton} onClick={handleLogout}>
          <Image src={LogoutIcon} alt="Logout" className={styles.icon} />
        </Button>
      </div>
    </div>
  );
};
