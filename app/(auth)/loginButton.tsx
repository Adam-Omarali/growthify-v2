"use client";

import { Button } from "@mantine/core";
import { Manrope } from "@next/font/google";
import { useSession, signOut } from "next-auth/react";

const manrope = Manrope()


export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <Button onClick={() => signOut()} color="dark" className={`font-normal pl-4 ${manrope.className}`} style={{fontSize: "18px"}}>Sign out</Button>
      </div>
    );
  }
  return (
    <>
    </>
  );
}