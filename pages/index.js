
import Head from 'next/head';
import styles from '../styles/main/main.module.css';
import Profile from '../component/profile';
import { Grid } from '@material-ui/core';
import Menu from '../component/menu';

export default function main() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Welcome</title>
            </Head>
            <Grid container className={styles.profile} direction="row" sm={12}>
                <Grid sm={2}></Grid>
                <Grid container sm={8} className={styles.grid}>
                    <Profile></Profile>
                </Grid>
                <Grid container sm={2} direction="row">
                    <Grid container direction="column" sm={12}>
                        <Menu></Menu>
                    </Grid>
                    <Grid item sm={12}></Grid>
                </Grid>
            </Grid>
        </div>
    );
}