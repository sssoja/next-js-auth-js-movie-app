"use client";

import { signOut, useSession } from "next-auth/react";
import PrimaryButton from "../PrimaryButton";
import Link from "next/link";
import Image from "next/image";
import { avatar_api_base_url } from "@/config";

const LoginButton = () => {
  const { data: session, status } = useSession();

  const handleSignOutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    signOut();
  };

  if (status === "authenticated") {
    return (
      <>
        <div className="flex flex-row">
          <span className="mr-2">Signed in as {session.user?.name}</span>
          <Image
            src={
              session?.user?.image ||
              `${avatar_api_base_url}/api/initials/${session?.user?.name}.svg`
            }
            alt="User Profile Image"
            width={24}
            height={24}
            className="rounded-full"
          />
        </div>
        <PrimaryButton
          leftIcon="ArrowLeftEndOnRectangleIcon"
          onClick={handleSignOutClick}
          className="mt-2 sm:mt-0 sm:ml-4"
        >
          Log out
        </PrimaryButton>
      </>
    );
  }
  return (
    <>
      <Link href="/api/auth/signin">
        <PrimaryButton leftIcon="UserIcon">Log in</PrimaryButton>
      </Link>
    </>
  );
};

export default LoginButton;
