import React from 'react';
import { EColors } from '../../../enums/colorsEnum';
import styles from './userblock.css';
import { Text } from '../../Text';
import { AnonIcon } from '../../icons';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({avatarSrc, username = 'Аноним', loading}: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=RdVD0wlEpVk0wf2af6Cj2A&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}
    >
      <div className={styles.userBox}>
        <div className={styles.avatarBox}>
          {avatarSrc
            ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
            : <AnonIcon /> 
          }
        </div>

        <div className={styles.username}>
          {/* <Break size={12}/> */}
          <Text size={20} color={EColors.black}>{loading ? 'Загрузка' : username}</Text>
        </div>
      </div>
    </a>
  );
}
