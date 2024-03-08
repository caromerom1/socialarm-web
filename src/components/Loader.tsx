import Image from 'next/image';

import LoaderImage from '@/assets/Loader.png';
import styles from './Loader.module.css';

export const Loader = () => (
  <div className={styles.loaderContainer}>
    <Image
      src={LoaderImage}
      alt="Loading"
      height={100}
      width={100}
      quality={100}
      className={styles.loader}
    />
  </div>
);
