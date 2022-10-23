import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SiteLinks.module.css';

const SiteLinks = (props) => {
    return (
        <div className={styles.Main}>
            <Link to="/" className={styles.Link}>
                <div className={styles.Align}>
                    <img src={props.icon} alt={ props.source } />
                    <p>{ props.title }</p>
                </div>
            </Link>
        </div>
    )
}

export default SiteLinks