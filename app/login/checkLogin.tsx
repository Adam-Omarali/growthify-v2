import mongoose from 'mongoose'
import { signIn, useSession } from 'next-auth/react'
import React, { MutableRefObject, useContext } from 'react'
import { appContext, defaultContext } from '../../components/appContext'
import { User, UserModel } from '../../models/user'

async function fetchUser(){
    let user = await fetch("/api/user", {
        method: "GET"
    })
    let data = await user.json()
    return data
}

export default function CheckLogin({
    children,
  }: {
    children: React.ReactNode
  }) {

    const session = useSession()
    const context = useContext(appContext)

    if (session != undefined && session.status != 'loading'){
        if (session.status != "authenticated"){
            signIn("google")
        }
        else{
            fetchUser()
        }
    }

    return (
        <div className={session.status === "loading" ? "hidden" : ""}>
            {children}
        </div>
    )
}
