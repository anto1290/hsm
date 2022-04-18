import { useRouter } from "next/router";
import { useEffect } from "react";
import { resetApolloContext } from "@apollo/client";
import { useGetUser, useSignOut } from "../apollo/action";

const Logout = ({ apollo }) => {
  const [signOut] = useSignOut();
  const router = useRouter();
  const { client, data, loading, error } = useGetUser({
    fetchPolicy: "network-only",
  });
  useEffect(() => {
    signOut().then(() => {
      client.resetStore().then(() => {
        setTimeout(() => {
          resetApolloContext();
          router.push("/");
        }, 2000);
      });
      resetApolloContext();
    });
  }, []);
  return (
    <>
      <div className="flex h-screen">
        <span className="bg-red-200 text-white flex mx-auto">
          Signing out...
        </span>
      </div>
    </>
  );
};

export default Logout;
