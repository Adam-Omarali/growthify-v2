import { useSession, signIn } from "next-auth/react";

async function fetchData(){
  console.log(process.env.URL +  "/api/user")
  let user = await fetch(process.env.URL +  "/api/user", {
    method: 'GET'
  })
  // console.log(user)
  // console.log(await user.text())
  // return await user.json()
}

export default async function Home() {

  return (
    <div>
      <p>h1</p>
    </div>
  )
}
