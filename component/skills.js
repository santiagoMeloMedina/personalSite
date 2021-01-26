
import styles from '../styles/main/skills.module.scss';
import cn from 'classnames';

function getSkills(state) {
    const images = [
        'python.svg', 'javascript.svg', 'java.svg', 
        'cplusplus.svg', 'docker.svg', 'flask.svg', 
        'angular.svg', 'next.svg', 'django.svg'
    ];
    const elements = [];
    images.forEach(name => {
        elements.push(<img src={`logos/${name}`} className={cn({
            [styles.logo]: state,
            [styles.logoout]: !state 
        })}></img>)
    });
    return elements;
}

export default function Skills({ ...pageProps }) {
    return (
        <div className={styles.noselect}>
            <div className={styles.ball}>
                <div>
                    { getSkills(pageProps.state.in) }
                </div>
            </div>
        </div>
    );
}