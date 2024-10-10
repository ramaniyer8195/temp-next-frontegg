import { useAuth } from "@frontegg/nextjs";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Home = (): React.JSX.Element => {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = (): void => {
    router.replace("/account/logout");
  };

  return (
    <div>
      <p>Welcome {user?.name}</p>
      <Image
        alt="Profile picture"
        height="96px"
        src={user?.profilePictureUrl || ""}
        width="96px"
      />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
