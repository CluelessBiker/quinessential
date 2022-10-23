import React from 'react';
import SiteLinks from '../sitelinks/SiteLinks';
import house from '../../assets/icons/house.png';
import one from '../../assets/icons/one.png';
import two from '../../assets/icons/two.png';
import three from '../../assets/icons/three.png';
import four from '../../assets/icons/four.png';
import styles from './SideNav.module.css';

const SideNavOne = () => {
    return (
        <div className={styles.Main}>
            <h4><i className="fa-solid fa-table-list" /> ΜΕΝΟΥ ΕΠΙΛΟΓΩΝ</h4>
            <SiteLinks icon={house} source="home" title="Κεντρική σελίδα" />
            <SiteLinks icon={one} source="one" title="Αποθήκη 1" />
            <SiteLinks icon={two} source="two" title="Αποθήκη 2" />
            <SiteLinks icon={three} source="three" title="Αποθήκη 3" />
            <SiteLinks icon={four} source="four" title="Αποθήκη 4" />
        </div>
    )
}

export default SideNavOne;