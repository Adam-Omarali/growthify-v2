import mongoose from 'mongoose'
import { getToken } from 'next-auth/jwt'
import { getSession } from 'next-auth/react'
import { User, UserModel } from '../../models/user'

export default async function handler(req, res) {
    const session = await getSession({req})

    if (!session) return res.status(403).send("Not logged in")

    if (req.method === "GET"){
        mongoose.connect(process.env.MONGO_URI)

        let user = await UserModel.findOne({email: session.user.email})

        if (user === null){
            user = await UserModel.create({
                name: session.user.name,
                email: session.user.email,
                accountType: "free"
            })
            return res.status(200).json(user)
        }
        else{
            return res.status(200).json(user)
        }

    }

    if (req.method === "UPDATE"){
        mongoose.connect(process.env.MONGO_URI)
        console.log(req.req.body)
        let user = await UserModel.findOne({email: req.req.body.session.user.email})

        if (!user){
            user = await UserModel.create({
                name: req.req.body.session.user.name,
                email: req.req.body.session.user.email,
                accountType: "free"
            })
            return res.status(200).json(user)
        }

    }
}