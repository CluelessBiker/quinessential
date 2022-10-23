import React from 'react';
import SiteLinks from '../sitelinks/SiteLinks';
import five from '../../assets/icons/five.png';
import styles from './SideNav.module.css';

const SideNavTwo = () => {
    return (
        <div className={styles.Main}>
            <h4><i className="fa-solid fa-table-list" /> ΚΑΤΑΧΩΡΙΣΗ ΥΛΙΚΩΝ ΚΑΙ ΚΩΔΙΚΩΝ</h4>
            <SiteLinks icon={five} source="five" title="Καταχώριση" />
        </div>
    )
}

export default SideNavTwo