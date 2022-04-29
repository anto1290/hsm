import { useRouter } from "next/router";
import * as Bs from "react-icons/bs";
import { useState, useEffect } from "react";
import { FormRoomType, LayoutAdmin, errorMessage } from "@/components";
import { useGetRoomType, useUpdateRoomType } from "@/apollo/action";
const edit = () => {
  const router = useRouter();
  const { id } = router.query;
  const [updateRoomType, { error, data: update }] = useUpdateRoomType();
  const { data } = useGetRoomType({ variables: { id } });

  const handleSubmit = (inputRoomType) => {
    const input = {
      nameType: inputRoomType.nameType,
      codeType: inputRoomType.codeType,
      imageType: inputRoomType.imageType,
      image: inputRoomType.image,
      description: inputRoomType.description,
      baseOccupancy: inputRoomType.baseOccupancy,
      kidsOccupancy: inputRoomType.kidsOccupancy,
      amenities: inputRoomType.amenitie,
      typeBed: inputRoomType.typeBed,
      extraBed: inputRoomType.extraBed,
      extraBedPrice: inputRoomType.extraBedPrice,
      maxOccupancy: inputRoomType.maxOccupancy,
      basePrice: inputRoomType.basePrice,
      additionalPersonPrice: inputRoomType.additionalPersonPrice,
      typeRoom: "Rooms",
    };
    updateRoomType({ variables: { id, input } });
    update && router.push("/admin/roomType");
  };
  return (
    <LayoutAdmin>
      <section className="container mt-12">
        <div className="flex justify-between p-2">
          <h1 className="text-2xl font-bold block">Create Room Type</h1>
          <h1 className="text-sm font-bold mt-8 pr-2">
            <span className="text-gray-400">
              admin {"> "}Room Type {"> "}
            </span>
            Edit
          </h1>
        </div>

        <div className="w-[80vw] p-5">
          {error && errorMessage(error)}
          <FormRoomType
            onSubmit={handleSubmit}
            initialData={(data && data.roomType) || []}
          />
        </div>
      </section>
    </LayoutAdmin>
  );
};

export default edit;
