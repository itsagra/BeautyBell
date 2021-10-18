import React from "react";
import Layout from "../components/Layout";
import { useSession } from "next-auth/client";

export default function Profile() {
  const [session] = useSession();
  return (
    <div>
      <Layout title="Profile">
        <div className="mt-8 p-2 flex">
          <img
            src={session.user.image}
            className="h-32 w-32 border border-black"
          />
          <div className="my-auto ml-5">
            <p>Name: {session.user.name}</p>
            <p>Birth of date: </p>
            <p>Email: {session.user.email}</p>
          </div>
        </div>
      </Layout>
    </div>
  );
}
