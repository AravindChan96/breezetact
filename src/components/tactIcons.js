import React from 'react';
import styles from './tactIcons.module.css';

const tactIcon = (props) => {

    let classList = ['fa'];
    if (props.classname){
        classList.push(props.classname);
    }
    return(
        <div className={styles.TactIcon}>
            <i className={classList.join(' ')}></i>
        </div>
    );
}

export default tactIcon;