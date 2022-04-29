import { useRouter } from "next/router";
import { useEffect } from "react";
import { resetApolloContext } from "@apollo/client";
import { useGetUser, useSignOut } from "@/apollo/action";

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
  console.log(data);
  return (
    <>
      <div className="h-screen w-screen overflow-hidden">
        <div className="flex justify-center my-[20vh]">
          <div
            className="spinner-border animate-spin w-40 h-40 border-10 rounded-full text-red-600"
            role="loading"
          >
            <span className="visually-hidden">Singout...</span>
          </div>
        </div>

      </div>
    </>
  );
};

export default Logout;
