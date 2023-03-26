import React from 'react';
import classNames from 'classnames';
import styles from './text.css';
import { EColors, TSizes } from '../../enums/colorsEnum';

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  size: TSizes;
  bold?: boolean;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColors;
  children?: React.ReactNode;
}

export function Text({
  As = 'span',
  children,
  size,
  mobileSize,
  tabletSize,
  desktopSize,
  color = EColors.black,
  bold = false,
}: ITextProps) {
  const classes = classNames(
    styles[`s${size}`],
    {
      [styles[`m${mobileSize}`]]: mobileSize,
      [styles[`t${tabletSize}`]]: tabletSize,
      [styles[`d${desktopSize}`]]: desktopSize,
      [styles.bold]: bold,
    },
    styles[color],
  );
  return (
    <As className={classes}>
      {children}
    </As>
  );
}
