// CircularProgressBar.js
import { useEffect, useState } from 'react';
import styles from './CircularProgressBar.module.css';

const CircularProgressBar = ({ percentage }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const progress = (100 - percentage) / 100 * 314.16; // Correcting the calculation
    setOffset(progress);
  }, [percentage]);

  return (
    <div className={styles.circularProgressBar}>
      <svg>
        <circle cx="50%" cy="50%" r="70" />
        <circle
          cx="50%"
          cy="50%"
          r="70"
          style={{
            strokeDashoffset: offset,
            strokeDasharray: '314.16',
          }}
        />
      </svg>
    </div>
  );
};

export default CircularProgressBar;
