import React from 'react'
import styles from './linkbutton.module.scss'

export default function LinkButton({id, label, url}) {

    function retirectCall(url) {
        window.location.href = url
    }

    return (
        <div id={id} key={id} 
            onClick={()=>retirectCall(url)}
            className={styles.container}
        >
            <span className={styles.label}>
                {label}
            </span>
        </div>
    )
}
