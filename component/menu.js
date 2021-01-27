
import { Grid } from '@material-ui/core';
import styles from '../styles/main/menu.module.css';
import Link from 'next/link';

export default function Menu({ ...pageProps }) {
    return (
        <Grid container className={styles.container} sm={12}>
            <Grid style={{'position': 'absolute'}} container xs={12} sm={12}  direction="row" alignItems="center" justify="space-evenly">
                <Grid className={styles.pagelink}>
                    <button onClick={()=>{pageProps.waitBeforeRoute("project", pageProps.out)}}>
                        projects
                    </button>
                </Grid>
                <Grid className={styles.pagelink}>
                    <button onClick={()=>{pageProps.waitBeforeRoute("email", pageProps.out)}}>
                        email me
                    </button>
                </Grid>
            </Grid>
        </Grid>
    );
}