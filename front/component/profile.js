
import styles from '../styles/main/profile.module.css';
import { Grid } from '@material-ui/core';
import Link from 'next/link';
import Skills from '../component/skills';

export default function Profile({ ...pageProps }) {
    return (
        <Grid container className={styles.container} direction="column" alignItems="center" xs={12} sm={12} justify="center">
            <Grid container xs={4} sm={4} className={styles.photoGrid} direction="row" alignItems="center" justify="center">
                <Skills state={pageProps.state}></Skills>
                <Grid container className={styles.noselect} direction="row" alignItems="center" justify="center">
                    <img src="photo.jpeg" className={styles.photo}></img>  
                </Grid>      
            </Grid>
            <Grid container className={styles.info} direction="column" alignItems="center" justify="center">
                <h1>Hello there!</h1>
                <div>My name is <span className={styles.name}>Santiago Melo Medina</span></div>
                <div>I'm a software engineer enthusiastic for creating stuff!</div>
                <h3>Welcome</h3>
            </Grid>
        </Grid>
    )
}