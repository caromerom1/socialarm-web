import { Navbar } from '@/components/Navbar';
import RootLayout from './root';
import { useState } from 'react';
import { ProfileModal } from '@/components/ProfileModal';

interface Props {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<Props> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <RootLayout>
      <Navbar
        handlePersonaClick={isModalOpen ? handleModalClose : handleModalOpen}
      />
      {isModalOpen && <ProfileModal handleClose={handleModalClose} />}
      {children}
    </RootLayout>
  );
};
