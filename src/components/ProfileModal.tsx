import { Button, TextField, FormLabel } from '@mui/material';
import styles from './ProfileModal.module.css';

interface Props {
  handleClose: () => void;
}

export const ProfileModal: React.FC<Props> = ({ handleClose }) => (
  <div className={styles.modalContent}>
    <h3 className={styles.modalTitle}>Perfil</h3>
    <form className={styles.form}>
      <TextField
        className={styles.textField}
        id="nombre"
        label="Nombre"
        placeholder="Nombre"
        variant="outlined"
      />
      <TextField
        className={styles.textField}
        id="fecha_nacimiento"
        label="Fecha de nacimiento"
        placeholder="Fecha de nacimiento"
        variant="outlined"
      />
      <TextField
        className={styles.textField}
        type="email"
        label="Correo electrónico"
        id="correo"
        name="correo"
        placeholder="Correo"
      />
      <TextField
        className={styles.textField}
        type="tel"
        label="Teléfono"
        id="telefono"
        name="telefono"
        placeholder="Teléfono"
      />
      <TextField
        className={styles.textField}
        type="password"
        label="Clave"
        id="clave"
        name="clave"
        placeholder="Clave"
      />
      <Button
        className={styles.button}
        variant="contained"
        color="secondary"
        sx={{
          color: 'white',
          textTransform: 'none',
          fontSize: '20px',
          fontWeight: '400',
        }}
        onClick={handleClose}
      >
        Guardar
      </Button>
    </form>
  </div>
);
