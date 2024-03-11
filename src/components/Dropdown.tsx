import { ClickAwayListener } from '@mui/material';
import { useRouter } from 'next/router';

import styles from './Dropdown.module.css';

interface Props {
  handleClose: () => void;
}

export const Dropdown: React.FC<Props> = ({ handleClose }) => {
  const router = useRouter();

  const handleFaqClick = async () => {
    await router.push('/faq');
    handleClose();
  };

  const handleChatClick = async () => {
    await router.push('/support');
    handleClose();
  };
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <ul className={styles.dropdown}>
        <li onClick={handleFaqClick}>FAQ</li>
        <li onClick={handleChatClick}>Chatea con Nosotros</li>
      </ul>
    </ClickAwayListener>
  );
};
