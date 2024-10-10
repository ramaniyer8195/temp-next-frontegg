import { useAuth } from "@frontegg/nextjs";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

// @ts-expect-error return type will be defined later
const Home = () => {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/account/logout");
  };

  return (
    <div>
      <p>Welcome {user?.name}</p>
      <Image src={user?.profilePictureUrl || ""} width="96px" height="96px" />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
