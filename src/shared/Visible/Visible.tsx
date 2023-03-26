import React from 'react';
import classNames from 'classnames';
import { EScreens } from '../../enums/screensEnum';
import styles from './visible.css';

interface IVisibleProps {
  children: React.ReactNode;
  screens: EScreens[];
}

export function Visible({ screens, children }: IVisibleProps) {
  const classes = classNames(
    screens.map(screen => styles[screen])
  );
  return (
    <div className={classes}>
      {children}
    </div>
  );
}
