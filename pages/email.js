
import { Grid, Button } from '@material-ui/core';
import styles from '../styles/email.module.css';
import cn from 'classnames';
import { useState } from 'react';
import { checkEmailValid } from '../util/checkValidity';

function checkValidity(state, setState) {
    let email = checkEmailValid(state.inputs.email);
    let result = state.inputs.name != "" && email && state.inputs.message != "";
    setState({ ...state, send: result });
}

function updateTextValue(state, setState, key, value) {
    let newInputs = state.inputs;
    newInputs[key] = value;
    setState({ ...state, inputs: newInputs });
    checkValidity(state, setState);
}

export default function email() {
    const [state, setState] = useState({ send: false, inputs: { name: "", email: "", message: ""}});
    return (
        <Grid container className={styles.container} xs={12} sm={12} direction="row" alignItems="center" justify="center">
            <Grid className={styles.header} xs={12} sm={12}>
            </Grid>
            <Grid container className={styles.field} direction="column" alignItems="center" justify="center" xs={9} sm={9}>
                <Grid container className={styles.form} direction="column" alignItems="center" justify="center">
                    <input className={styles.text} 
                        placeholder="full name" 
                        onChange={(e)=>{ updateTextValue(state, setState, "name", e.target.value) }}
                    ></input>
                    <input className={styles.text} 
                        placeholder="email"
                        onChange={(e)=>{ updateTextValue(state, setState, "email", e.target.value) }}
                    ></input>
                    <textarea className={styles.message} 
                        placeholder="message"
                        onChange={(e)=>{ updateTextValue(state, setState, "message", e.target.value) }}
                    ></textarea>
                    <button className={cn({
                        [styles.send]: !state.send,
                        [styles.sendactive]: state.send
                    })}>send</button>
                </Grid>
            </Grid>
            <Grid container className={styles.foot} xs={12} sm={12}>
            </Grid>
        </Grid>
    );
}