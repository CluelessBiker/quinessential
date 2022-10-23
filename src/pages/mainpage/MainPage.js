import React from 'react';
import styles from './MainPage.module.css';
import appStyles from '../../App.module.css'
import ImportExport from '../../components/importexport/ImportExport';
import SideNavOne from '../../components/sidenav/SideNavOne';
import SideNavTwo from '../../components/sidenav/SideNavTwo';
import SiteLinks from '../../components/sitelinks/SiteLinks';
import settings from '../../assets/icons/settings.png';
import logo from '../../assets/icons/logo.png';

const MainPage = () => {
    return (
        <div className={`${styles.Main} ${appStyles.Main}`}>
            <div className={styles.Header}>
                <div className={styles.HeaderFlex}>
                    <h2>Κεντρική σελίδα</h2>
                    <input
                        type="text"
                        name="searchbar"
                        placeholder="Αναζήτηση υλικού, έλεγχος αποθεμάτων"
                    />
                </div>
            </div>

            {/* <div className={styles.SidePanel}> */}
            <div className={styles.SidePanelTop}>
                <div className={styles.SiteLogo}>
                    <img src={logo} alt="logo" />
                    <h3>Warehouse management</h3>
                </div>
            </div>   

            <div className={styles.SidePanelMiddle}>
                <div className={styles.SideNavs}>
                    <SideNavOne />
                    <SideNavTwo />
                </div>
            </div>

            <div className={styles.SidePanelBottom}>
                <div className={styles.Settings}>
                    <SiteLinks icon={settings} src="settings" title="ΡΥΘΜΙΣΕΙΣ" />
                </div>
            </div>

            <div className={styles.MainArea}>
                <div className={styles.MainAreaFlex}>
                    <ImportExport
                        color="#C2566E"
                        heading="ΕΞΑΓΩΓΗ"
                        text="Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη"
                    />

                    <ImportExport
                        color="#F0C17D"
                        heading="ΜΕΤΑΚΙΝΗΣΗ"
                        text="Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη"
                    />

                    <ImportExport
                        color="#2BC3A7"
                        heading="ΕΙΣΑΓΩΓΗ"
                        text="Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη"
                    />
                </div>
            </div>
        </div>
    )
}

export default MainPage