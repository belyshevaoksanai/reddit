import React from 'react';
import { EIcon } from '../../../../../enums/iconsEnum';
import { Icon } from '../../../../Icon';
import styles from './karmacounter.css';

interface IKarmaCounterProps {
  ups: number;
}

export function KarmaCounter({ups = 0}: IKarmaCounterProps) {
  const count = ups > 1000 ? `${(ups / 1000).toLocaleString(undefined, {maximumFractionDigits: 1})}k` : ups.toString();
  return (
    <div className={styles.karmaCounter}>
      <button className={styles.up}>
      <Icon size={20} name={EIcon.arrowUp} />
      </button>
      <span className={styles.karmaValue}>{count}</span>
      <button className={styles.down}>
        <Icon size={20} name={EIcon.arrowDown} />
      </button>
    </div>
  );
}
