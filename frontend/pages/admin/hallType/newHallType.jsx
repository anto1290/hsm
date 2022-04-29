import { useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import * as Bs from "react-icons/bs";
import { useCreateRoomType } from "@/apollo/action";
import { FormHallType, LayoutAdmin } from "@/components";
const NewHallType = () => {
  const router = useRouter();
  const [createRoomType, { loading, error, data }] = useCreateRoomType();
  useEffect(() => {
    if (data && data.createRoomType) {
      router.push("./");
    }
  }, [data]);
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
      maxOccupancy: inputRoomType.maxOccupancy,
      basePrice: inputRoomType.basePrice,
      additionalPersonPrice: inputRoomType.additionalPersonPrice,
      typeRoom: "Halls",
    };
    createRoomType({ variables: input });
  };

  return (
    <LayoutAdmin>
      <section className="container mt-12">
        <div className="flex justify-between p-2">
          <h1 className="text-2xl font-bold block">Create Hall Type</h1>
          <h1 className="text-sm font-bold mt-8 pr-2">
            <span className="text-gray-400">
              admin {"> "}Hall Type {"> "}
            </span>
            New
          </h1>
        </div>

        <div className="w-[80vw] p-5">
          <FormHallType onSubmit={handleSubmit} />
        </div>
      </section>
    </LayoutAdmin>
  );
};

export default NewHallType;
