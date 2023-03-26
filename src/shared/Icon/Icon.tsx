import React from 'react';
import { EIcon } from '../../enums/iconsEnum';
import { ArrowDownIcon, ArrowUpIcon, BlockIcon, CommentIcon, MenuIcon, SaveIconWithoutBack, ShareIcon, ShareIconWithoutBack, WarningIcon } from '../icons';

export interface IIconProps {
  size?: number;
}

const iconComponents: {[n in EIcon]: React.FC<IIconProps>} = {
  [EIcon.arrowDown]: ArrowDownIcon,
  [EIcon.arrowUp]: ArrowUpIcon,
  [EIcon.block]: BlockIcon,
  [EIcon.saveIconWithoutBack]: SaveIconWithoutBack,
  [EIcon.warning]: WarningIcon,
  [EIcon.shareIconWithoutBack]: ShareIconWithoutBack,
  [EIcon.shareIcon]: ShareIcon,
  [EIcon.menu]: MenuIcon,
  [EIcon.comment]: CommentIcon,
}

interface IIconCompProps {
  name: EIcon;
  size?: 14 | 20;
}

export function Icon({name, size}: IIconCompProps) {
  const IconComponent = iconComponents[name];
  return (
    <IconComponent size={size}/>
  );
}
