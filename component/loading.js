
import styles from '../styles/loading.module.css';
import cn from 'classnames';
import { Grid } from '@material-ui/core';

export default function Loading({ ...pageProps }) {
    return (
        <Grid container className={cn({
            [styles.shown]: pageProps.loading,
            [styles.hidden]: !pageProps.loading
        })} alignItems="center" justify="center">
            <div className={styles.screen}></div>
            <div className={styles.square}></div>
        </Grid>
    )
}