"use client"

import Image from "next/image"
import HeaderLogo from "public/logo-header.png"
import Navigation from "../Navigation"
import Socials from "../Social"
import Logo from "public/svg/logo.svg"
import { useState } from "react"
import Menu from "public/svg/menu.svg"
import Close from "public/svg/close.svg"
export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean | undefined>(undefined)
    return (
        <>
            <header className="header" id="header">
                <div className="header-container container">
                    <Logo width={97} height={59} />
                    <Navigation />
                    <Socials />
                    <button onClick={() => { setIsOpen(true) }}>
                        <Menu width={30} height={30}/>
                    </button>
                </div>
            </header>
            <div className={`top-navigation ${isOpen ? "show" : "hide"}`}>
                <div className={`top-navigation-container`}>
                    <button className="hide-nav-btn" onClick={() => { setIsOpen(false) }}>
                        <Close/>
                    </button>
                    <Navigation/>
                    <Socials />
                </div>
            </div>
        </>
    )
}