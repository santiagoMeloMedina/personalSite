
import { Grid, Button } from '@material-ui/core';
import styles from '../styles/email.module.css';
import cn from 'classnames';
import { useState } from 'react';
import { checkEmailValid } from '../util/checkValidity';
import { useRouter } from 'next/router';
import emailService from '../service/email';
import * as EMAIL from '../constant/email';

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

function triggerNotification(state, setState, message = '', icon = 'default') {
    let newState = { ...state, notification: { state: true, message: message, visible: true } };
    setState(newState);
    setTimeout(() => {
        setState({ ...newState, notification: { ...newState.notification, state: false } });
    }, 2000);
}

function sendEmail(state, setState) {
    if (state.send) {
        state.methods.changeLoading(true);
        const finished = (result) => {
            state.methods.changeLoading(false);
            if (result) {
                let newState = { ...state, send: false, inputs: { name: "", email: "", message: "" } };
                setState(newState);
                triggerNotification(newState, setState, EMAIL.SUCESSFUL_SEND(state.inputs.name));
            } else {
                triggerNotification(state, setState, EMAIL.ERROR_SEND(state.inputs.name));
            }    
        }
        emailService.sendEmail(state.inputs.name, state.inputs.email, state.inputs.message, finished);
    } else {
        triggerNotification(state, setState, `Please fill up all fields accordingly`);
    }
}

function getOut(state, setState) {
    setState({ ...state, in: false});
}

function setInitialStates(configure, props) {
    return configure({
        methods: {
            changeLoading: props.changeLoadingState,
        },
        in: true,
        send: false,
        notification: {
            state: false,
            message: "",
            visible: false
        },
        inputs: {
            name: "",
            email: "",
            message: ""
        }
    });
}

export default function email({ ...pageProps }) {
    const [state, setState] = setInitialStates(useState, pageProps);
    return (
        <Grid container className={cn({
            [styles.container]: state.in,
            [styles.out]: !state.in 
        })} xs={12} sm={12} direction="row" justify="center">
            <Grid container className={styles.header} xs={12} sm={12} alignItems="center" justify="center">
                <Grid container className={cn({
                    [styles.notified]: state.notification.state,
                    [styles.unnotified]: !state.notification.state
                })} style={{ visibility: !state.notification.visible ? 'hidden' : 'visible' }} xs={8} sm={8} alignItems="center" justify="center">
                    {state.notification.message}
                </Grid>
            </Grid>
            <Grid container className={styles.field} direction="column" alignItems="center" justify="center" xs={9} sm={9}>
                <Grid container className={styles.form} direction="column" alignItems="center" justify="center">
                    <input className={styles.text}
                        placeholder="full name"
                        value={state.inputs.name}
                        onChange={(e) => { updateTextValue(state, setState, "name", e.target.value) }}
                    ></input>
                    <input className={styles.text}
                        placeholder="email"
                        value={state.inputs.email}
                        onChange={(e) => { updateTextValue(state, setState, "email", e.target.value) }}
                    ></input>
                    <textarea className={styles.message}
                        placeholder="message"
                        value={state.inputs.message}
                        onChange={(e) => { updateTextValue(state, setState, "message", e.target.value) }}
                    ></textarea>
                    <button className={cn({
                        [styles.send]: !state.send,
                        [styles.sendactive]: state.send
                    })} onClick={() => { sendEmail(state, setState) }}>send</button>
                </Grid>
            </Grid>
            <Grid container className={styles.foot} xs={12} sm={12} direction="column" alignItems="center" justify="center">
                <img src="arrow.svg" className={styles.back} onClick={()=>{ pageProps.waitBeforeRoute("/", getOut(state, setState), 500)}}></img>
            </Grid>
        </Grid>
    );
}