import { useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import * as Bs from "react-icons/bs";
import { useCreateRoom} from "@/apollo/action";
import { FormRoom,LayoutAdmin } from "@/components";
const New = () => {
  const router = useRouter();
  const [createRoom,{loading,error,data:createRooms}] = useCreateRoom();
  const handleSubmit = (data) => {
    const input  = {
      name: data.name,
      floor: data.floor,
      roomType: data.roomType,
      statusRoom: data.statusRoom,
      typeRoom:"Rooms",
      status: data.status ? "active" : "inactive"
    }
    createRoom({variables: input});
    !loading && router.push("/admin/rooms");

  };
  return (
    <LayoutAdmin>
        <section className="container mt-12">
        <div className="flex justify-between p-2">
          <h1 className="text-2xl font-bold block">Create Room</h1>
          <h1 className="text-sm font-bold mt-8 pr-2">
            <span className="text-gray-400">
              admin {"> "}Room {"> "}
            </span>
            New
          </h1>
        </div>

        <div className="w-[80vw] p-5">
          <FormRoom onSubmit={handleSubmit} typeRoomData="Rooms" />
        </div>
        {error && <div className="text-red-500">{error.message}</div>}
      </section>
    </LayoutAdmin>
  )
}

export default New