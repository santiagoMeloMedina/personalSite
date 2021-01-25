
import styles from '../styles/main/profile.module.css';
import { Grid } from '@material-ui/core';
import Link from 'next/link';

export default function Profile() {
    return (
        <Grid container className={styles.container} direction="column" alignItems="center" sm={12} justify="center">
            <Grid container sm={4} className={styles.photoGrid} direction="row" alignItems="center" justify="center">
                <img src="photo.jpeg" className={styles.photo}></img>
            </Grid>
            <Grid container className={styles.info} direction="column" alignItems="center" justify="center">
                <h1>Hello there!</h1>
                <div>My name is <span className={styles.name}>Santiago Melo Medina</span></div>
                <div>I'm a software engineer estusiactic for creating stuff!</div>
                <h3>Welcome to my {' '}
                    <Link href={"hello"}>
                        <a>personal space</a>
                    </Link>
                </h3>
            </Grid>
        </Grid>
    )
}