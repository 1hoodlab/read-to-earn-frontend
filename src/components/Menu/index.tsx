import React from 'react'
import styles from "@/styles/Home.module.scss";


export default function index() {
    return (
        <div className={styles.menu}>
            <ul className={styles.menu_list}>
                <li>Home</li>
                <li>War in Ukraina</li>
                <li>Coronavirus</li>
                <li>World</li>
                <li>Asia</li>
                <li>UK</li>
                <li>Tech</li>
                <li>Stories</li>
                <li>Enterintment & Arts</li>
                <li>Health</li>
                <li>Business</li>
            </ul>
        </div>
    )
}
