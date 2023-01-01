"use client"

import React, { useEffect, useState } from "react";
import * as Icons from "react-icons/fa";
import getSidebarData from "../(data)/menu-options";
import { IconX } from "@tabler/icons"
import Link from "next/link";
import styles from "../styles/Layout.module.css"
import '../app/globals.css'
import Image from "next/image";
import Logo from "../styles/LogoAsset 3@4x.png"
import { ActionIcon, Button } from "@mantine/core";
import LoginButton from "../(auth)/loginButton";
import { useSession } from "next-auth/react";

export interface Layout {
    props: {
        ToggleTheme: React.FC
    }
}

function Layout(props: {
    ToggleTheme: React.FC
}) {

    const [menu, setMenu] = useState<boolean>(false)
    const [windowSize, setWindowSize] = useState<number>(600)
    const session = useSession();

    let colors = ['#46e7fc', '#fcf546', '#fc9a46', '#f11010', 'linear-gradient(240deg, rgb(255,87,87) 0%, rgb(62, 136, 255) 100%)']

    useEffect(() => {
        setWindowSize(window.innerWidth);
    }, [])

    if(session.status != "loading"){
        return (
            <div className={styles.header}>
                <div className={styles.navbar}>
                    <ActionIcon className={`${styles.menuBars} flex`} variant="transparent">
                        <Icons.FaBars onClick={() => setMenu(!menu)} />
                    </ActionIcon>
                    <nav className={menu ? `${styles.navMenuActive}` : styles.navMenu}>
                        <ul className={styles.navMenuItems}>
                            <li className={styles.navbarToggle}>
                                <div className={styles.navIcons}>
                                    <ActionIcon className={styles.menuBars} onClick={() => setMenu(!menu)} variant="transparent">
                                        <IconX color="white"/>
                                    </ActionIcon>
                                    <div className={`${styles.menuBars} mx-5`}>
                                        <props.ToggleTheme/>
                                    </div>
                                </div>
                            </li>
    
                            {/* Avatar */}
                            <li className={styles.navText}>
                                <div className={styles.avatarParent}>
                                    {/* <div style={{'width': '35px', 'height': '35px', 'borderRadius': '50%', 'backgroundColor': colors[4], 'background': colors[4]}} /> */}
                                    <Image src={session.data.user.image} alt="google photo" width={35} height={35} style={{'borderRadius': '20%'}}></Image>
                                    <div style={{'display': 'flex', 'flexDirection': 'column'}}>
                                        <span>{session.data.user.name}</span>
                                        {/* Getting daily points currently */}
                                        <span style={{'fontSize': 'small'}}>Today's Points: </span>
                                    </div>
                                </div>
                            </li>
    
                            {/* Menu Options */}
                            {getSidebarData().map((item, index) => {
                                return (
                                    <li key={index} className={styles.navText} onClick={windowSize < 600 ? () => {setMenu(!menu)} : null}>
                                        <Link href={('/app' + item.path)}>
                                            {/* {item.icon} */}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
    
                            {/* Logout Button */}
    
                            <li className="flex items-center" style={{height: "60px", width: "200px"}}>
                                <LoginButton />
                            </li>
                            
    
                            {/* Growthify Logo */}
                            <li>
                                <div className={`md:pt-36 sm:pt-10 `}>
                                    <Link href={"#"} className="flex flex-col items-center">
                                        <Image src={Logo} alt="" style={{"maxWidth":"50%", "height": "auto"}}/>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* <div className={menu ? 'progress-wrapper active':'progress-wrapper'}>
                    <DisplayProgress context={context}/>
                </div> */}
            </div>
        );
    }
}

export default Layout;
