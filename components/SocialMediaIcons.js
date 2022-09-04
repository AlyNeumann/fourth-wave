import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import styles from '../styles/Home.module.css';

export default function SocialMediaIcons() {
    return(
        <div className={styles.socialicons}>
            <SocialIcon network="twitter" url="https://twitter.com/FourthWaveDAO" fgColor="#e7daf2" bgColor="#289e9e" />
            <SocialIcon network="facebook" url="https://www.facebook.com/Fourth-Wave-DAO-107342545440084" fgColor="#e7daf2" bgColor="#289e9e" />
            <SocialIcon network="instagram" url="https://www.instagram.com/fourthwave.dao/" fgColor="#e7daf2" bgColor="#289e9e" />
            <SocialIcon network="discord" url="https://discord.gg/khDMhQ9w" fgColor="#e7daf2" bgColor="#289e9e" />
            <SocialIcon network="telegram" url="https://t.me/+u_-ELJjLgY8wZmMx" fgColor="#e7daf2" bgColor="#289e9e" />
        </div>
    )
}