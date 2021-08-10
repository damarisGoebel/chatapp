import React, { SyntheticEvent } from 'react'
import styles from './Button.module.css'

export type ButtonProps = {
    text: string;
    onClick?: (e: SyntheticEvent) => void;
}

const Button: React.FC<ButtonProps> = ({onClick, text}) => {
    return(
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;