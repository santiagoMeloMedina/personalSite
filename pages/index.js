
import Head from 'next/head';
import styles from '../styles/main/main.module.css';
import Profile from '../component/profile';
import { Grid } from '@material-ui/core';
import Menu from '../component/menu';
import cn from 'classnames';
import { useState } from 'react';

function getOut(setState, states) {
    setState(states);
}

export default function main() {
    const [state, setState] = useState({ in: true });
    return (
        <div className={styles.container}>
            <Head>
                <title>Welcome</title>
            </Head>
            <Grid container className={styles.profile} direction="row" xs={12} sm={12}>
                <Grid xs={12} sm={12}></Grid>
                <Grid container xs={12} sm={12} className={cn({
                    [styles.grid]: state.in,
                    [styles.gridout]: !state.in
                })} >
                    <Profile state={state} ></Profile>
                </Grid>
                <Grid container xs={12} sm={12} direction="row" className={cn({
                    [styles.grid]: state.in,
                    [styles.gridout]: !state.in
                })} >
                    <Grid container direction="row" xs={12} sm={12}>
                        <Menu out={()=>{ getOut(setState, { in: false}) }}></Menu>
                    </Grid>
                    <Grid item xs={12} sm={12}></Grid>
                </Grid>
            </Grid>
        </div>
    );
}