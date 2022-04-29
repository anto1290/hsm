import { useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import { useGetRoom,useUpdateRoom} from "@/apollo/action";
import { FormRoom,LayoutAdmin } from "@/components";
const Edit = () => {
  const router = useRouter();
  const { id } = router.query;
  const [updateRoom,{loading,error}] = useUpdateRoom();
  const [getDataRoom ,{data:getRoom}] = useGetRoom();
  useEffect(()=>{
    if(id){
        getDataRoom({variables:{id}})
    }
    },[id])

  const handleSubmit = (data) => {
    const input  = {
      name: data.name,
      floor: data.floor,
      roomType: data.roomType,
      statusRoom: data.statusRoom,
      typeRoom:"Halls",
      status: data.status ? "active" : "inactive"
    }
    updateRoom({variables: {id:data.id,input}});
    !loading && router.push("/admin/rooms");

  };
  return (
    <LayoutAdmin>
        <section className="container mt-12">
        <div className="flex justify-between p-2">
          <h1 className="text-2xl font-bold block">Edit Halls</h1>
          <h1 className="text-sm font-bold mt-8 pr-2">
            <span className="text-gray-400">
              admin {"> "}Halls {"> "}
            </span>
            Edit
          </h1>
        </div>

        <div className="w-[80vw] p-5">
          <FormRoom onSubmit={handleSubmit} initialData={(getRoom && getRoom.room)||{}} typeRoomData="Halls" />
        </div>
        {error && <div className="text-red-500">{error.message}</div>}
      </section>
    </LayoutAdmin>
  )
}

export default Edit