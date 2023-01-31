import React from "react";
import './styles.css';
import Main from './Main.js'

export default function DisplayHeader() {
    return (
        <div>
            <Header />
        </div>
    )
}

function Header() {
    return  (
        <header className="page-title">
            <div>MEMORY CARD GAME</div>
        </header>
    )
}