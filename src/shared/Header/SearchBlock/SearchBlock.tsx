import React, { useContext} from 'react';
import { useUserData } from '../../../hooks/useUserData';
import { userContext } from '../../context/userContext';
import { UserBlock } from '../UserBlock';
import styles from './searchblock.css';

export function SearchBlock() {
  const {data: { iconImg, name}, loading} = useUserData();

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name} loading={loading}/>
    </div>
  );
}
