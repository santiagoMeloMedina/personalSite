
import styles from '../styles/main/skills.module.css';

export default function Skills() {
    return (
        <div>
            <div className={styles.ball}>
                <div>
                    <img src="logos/python.svg" className={styles.logo}></img>
                    <img src="logos/javascript.svg" className={styles.logo}></img>
                    <img src="logos/java.svg" className={styles.logo}></img>
                    <img src="logos/cpluplus.svg" className={styles.logo}></img>
                    <img src="logos/docker.svg" className={styles.logo}></img>
                    <img src="logos/flask.svg" className={styles.logo}></img>
                    <img src="logos/angular.svg" className={styles.logo}></img>
                    <img src="logos/next.svg" className={styles.logo}></img>
                    <img src="logos/react.svg" className={styles.logo}></img>
                    <img src="logos/django.svg" className={styles.logo}></img>
                </div>
            </div>
        </div>
    );
}