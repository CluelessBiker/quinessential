import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import appStyles from '../../App.module.css'

const Login = () => {
    return (
        <div className={`${styles.LoginPage} ${appStyles.Main}`}>
            <div className={styles.LoginBox}>
                <h2>Συνδεση</h2>
                <form>
                    <label htmlFor="email">Δ/νση ηλεκτρονικού ταχυδρομείου“</label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        placeholder="jane.doe@example.com"
                        required
                    />
                    <br />
                    <label htmlFor="password">Κωδικός πρόσβασης</label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="••••••••••••"
                        required
                    />
                    <br />
                    <Link to="/">
                        <button>Είσοδος</button>
                    </Link>
                    
                </form>
                <Link to="/" className={styles.ForgotPassword}>
                    <p>Ξέχασα τον κωδικό μου</p>
                </Link>
            </div>
        </div>
    )
}

export default Login