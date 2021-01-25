
import { Grid, Button } from '@material-ui/core';
import styles from '../styles/email.module.css';

export default function email() {
    return (
        <Grid container className={styles.container} xs={12} sm={12} direction="row">
            <Grid className={styles.header} xs={12} sm={12}>
            </Grid>
            <Grid container className={styles.field} xs={12} sm={12}>
            <Grid container className={styles.inputs} alignItems="center" justify="center">
                    <Button
                        onClick={()=>{}}
                    >
                        send mail
                    </Button>
                </Grid>
                <Grid container alignItems="center" justify="center" direction="column">
                    <input className={styles.text} 
                        placeholder="full name"
                        justify="center"
                    ></input>
                    <input className={styles.text} 
                        placeholder="email"
                        justify="center"
                    ></input>
                    <textarea className={styles.message} 
                        placeholder="message"
                    ></textarea>
                </Grid>
            </Grid>
            <Grid container className={styles.foot} xs={12} sm={12}>
            </Grid>
        </Grid>
    );
}