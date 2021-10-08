import React from 'react';
import styles from './Counter.module.css'

export type propsType = {
    count: number
    increment: () => void
    reset: () => void
}


export const Counter =({count, increment, reset}: propsType)=> {


    return(

       <div className={styles.box}>
            <div className={styles.counterBox}>
                <span className={count === 5 ? styles.active : ''}>{count}</span>
            </div>
            <div className={styles.buttonBox}>
                <button disabled={count === 5} onClick={increment}>Inc</button>
                <button disabled={count === 0} onClick={reset}>Reset</button>
            </div>
        </div>
    )
}