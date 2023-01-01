"use client";

import { createStyles } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Manrope } from "@next/font/google";
import Providers from "./(auth)/providers"
import { HeaderSearch } from "./(nav)/header";
import "./globals.css"
import { ModalsProvider } from '@mantine/modals';
import MantineWrapper from "./(providers)/mantineProvider";
import CheckLogin from "./login/checkLogin";
import { Context, useContext, useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import checkLogin from "./login/checkLogin";
import ContextProvider from "./(providers)/contextProvider";


const manrope = Manrope()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const useStyles = createStyles((theme) => (
  { 
    body: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      margin: 0
    },
    childrenFull: {
      paddingLeft: "56px",
      paddingTop: '80px',
      transition: "800ms",
    },
    childrenHalf: {
      paddingLeft: "320px",
      paddingTop: '80px',
      transition: "600ms",
    }
  }))

  const [opened, { toggle }] = useDisclosure(true);
  
  const { classes } = useStyles()

    return (
      <html>
        <head />
        <MantineWrapper>
          <body>
            <Providers>
                <ContextProvider>
                  <ModalsProvider labels={{ confirm: 'Submit', cancel: 'Cancel' }}>
                    <CheckLogin>
                      <div className={manrope.className}>
                            <HeaderSearch navOpen={opened} setNavOpen={toggle}/>
                            <div className={opened ? classes.childrenHalf : classes.childrenFull}>
                              {children}
                            </div>
                      </div>
                    </CheckLogin>
                  </ModalsProvider>
                </ContextProvider>
            </Providers>
          </body>
        </MantineWrapper>
      </html>
    )
}
