
import { Grid } from '@material-ui/core';
import styles from '../styles/main/menu.module.css';
import Link from 'next/link';

export default function Menu() {
    return (
        <Grid container className={styles.container} sm={12} direction="column" alignItems="center" justify="space-evenly">
            <Grid className={styles.pagelink}>
                <Link href="project">
                    projects
                </Link>
            </Grid>
            <Grid className={styles.pagelink}>
                <Link href="email">
                    email me
                </Link>
            </Grid>
        </Grid>
    );
}