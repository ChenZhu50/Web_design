import React from 'react'
import styles from './Button.module.css'

interface Props {
    children: React.ReactNode
    onClick: () => void
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
}

const CustomButton = ({ children, onClick, color = "primary" }: Props) => {

    return (
        <>
            <h1>Button</h1>
            <button className={[styles.btn, styles['btn-' + color]].join(" ")} onClick={onClick}>{children}</button>
        </>
    )
}

export default CustomButton