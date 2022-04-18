import { useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import * as Bs from "react-icons/bs";
import { useCreateRoomType } from "../../../apollo/action";
import { FormRoomType, LayoutAdmin } from "../../../components";
const New = () => {
  const router = useRouter();
  const [createRoomType, { loading, error, data }] = useCreateRoomType();
  useEffect(() => {
    if (data && data.roomType) {
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
      baseOccupancy: parseInt(inputRoomType.baseOccupancy, 10),
      kidsOccupancy: parseInt(inputRoomType.kidsOccupancy, 10),
      amenities: inputRoomType.amenitie,
      typeBed: inputRoomType.typeBed,
      extraBed: parseInt(inputRoomType.extraBed, 10),
      extraBedPrice: parseInt(inputRoomType.extraBedPrice, 10),
      maxOccupancy: parseInt(inputRoomType.maxOccupancy, 10),
      basePrice: parseInt(inputRoomType.basePrice, 10),
      additionalPersonPrice: parseInt(inputRoomType.additionalPersonPrice, 10),
    };
    createRoomType({ variables: input });
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
            New
          </h1>
        </div>

        <div className="w-[80vw] p-5">
          <FormRoomType onSubmit={handleSubmit} />
        </div>
      </section>
    </LayoutAdmin>
  );
};

export default New;
