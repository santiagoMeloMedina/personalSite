
import Head from 'next/head';
import styles from '../styles/main/main.module.css';
import Profile from '../component/profile';
import { Grid } from '@material-ui/core';
import Menu from '../component/menu';
import Skills from '../component/skills';

export default function main() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Welcome</title>
            </Head>
            <Grid container className={styles.profile} direction="row" xs={12} sm={12}>
                <Grid xs={12} sm={12}></Grid>
                <Grid container xs={12} sm={12} className={styles.grid} >
                    <Profile></Profile>
                </Grid>
                <Grid container xs={12} sm={12} direction="row">
                    <Grid container direction="row" xs={12} sm={12}>
                        <Menu></Menu>
                    </Grid>
                    <Grid item xs={12} sm={12}></Grid>
                </Grid>
            </Grid>
        </div>
    );
}