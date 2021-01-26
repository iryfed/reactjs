import React, { Children } from 'react';
import styles from './icon.scss';
import classNames from 'classnames';

type TSizes = 10 | 12 | 14 | 16 | 30 | 50;

export enum EIcons {
  hide = 'hideIcon',
  complain = 'complainIcon',
  anonim = 'anonimIcon'
}

interface IIcons {
  size: TSizes;
  mobileSize ?: TSizes;
  desktopSize ?: TSizes;
  name: EIcons;
}

export function Icon(props: IIcons) {
  const {
    size,
    mobileSize,
    desktopSize,
    name
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`m${desktopSize}`]]: desktopSize },
    styles[name]
  );

  return (
    <div className={classes} />
  );
}
