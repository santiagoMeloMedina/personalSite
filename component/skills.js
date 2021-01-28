
import styles from '../styles/main/skills.module.scss';
import cn from 'classnames';
import { getRandomCirclePosition } from '../util/mathOperations';
import { useState } from 'react';

const images = [
    'python.svg', 'javascript.svg', 'java.svg', 
    'cplusplus.svg', 'docker.svg', 'flask.svg', 
    'angular.svg', 'next.svg', 'django.svg'
];

function getPositions(images) {
    let positions = {};
    images.forEach(name => {
        positions[name] = getRandomCirclePosition(130);;
    });
    return positions;
}

function getSkills(state, positions) {
    const elements = [];
    images.forEach(name => {
        let [x, y] = positions[name];
        elements.push(
        <div>
            <img src={`logos/${name}`} 
                className={cn({
                    [styles.logo]: state.in,
                    [styles.logoout]: !state.in 
                })} 
                style={{
                    left: `${x+50}%`,
                    top: `${y+50}%`
                }}
            ></img>
            {/* <svg><line stroke-width="5px" stroke="#000000"  x1="50%" y1="50%" x2={x} y2={y} id="mySVG"/></svg> */}
        </div>)
    });
    return elements;
}

export default function Skills({ ...pageProps }) {
    const [state, setState] = useState({ positions: null });
    let positions = state.positions;
    if (state.positions == null) {
        positions = getPositions(images);
        setState({ ...state, positions: positions });
    }
    return (
        <div className={styles.noselect}>
        {/*  */}
            <div className={styles.ball}>
                <div>
                    { getSkills(pageProps.state, positions) }
                </div>
            </div>
        </div>
    );
}