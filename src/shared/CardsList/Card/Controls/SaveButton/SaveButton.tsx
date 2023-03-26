import React from 'react';
import { SaveIcon } from '../../../../icons';
import styles from './savebutton.css';

export function SaveButton() {
  return (
    <button className={styles.saveButton}>
        <SaveIcon />
    </button>
  );
}
