
import { Grid } from '@material-ui/core';
import styles from '../styles/main/menu.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

function waitBeforeRoute(push, url, callback) {
    callback();
    setTimeout(() => {
        push(url);
    }, 1500);
}

export default function Menu({ ...pageProps }) {
    const router = useRouter();
    return (
        <Grid container className={styles.container} sm={12}>
            <Grid style={{'position': 'absolute'}} container xs={12} sm={12}  direction="row" alignItems="center" justify="space-evenly">
                <Grid className={styles.pagelink}>
                    <button onClick={()=>{waitBeforeRoute(router.push, "project", pageProps.out)}}>
                        projects
                    </button>
                </Grid>
                <Grid className={styles.pagelink}>
                    <button onClick={()=>{waitBeforeRoute(router.push, "email", pageProps.out)}}>
                        email me
                    </button>
                </Grid>
            </Grid>
        </Grid>
    );
}