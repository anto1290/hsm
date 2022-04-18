import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  useUploadImage,
  useGetAmenities,
  useDeleteImage,
} from "../../../apollo/action";
const FormRoomType = ({ onSubmit, initialData }) => {
  const router = useRouter();
  const imageReset = useRef();
  const { handleSubmit, register, setValue } = useForm();
  const [image, setImage] = useState(null);
  const [imageUpload, { data: imageData }] = useUploadImage();
  const [deleteImage] = useDeleteImage();

  useEffect(() => {
    if (imageData) {
      setImage(imageData.imageUpload);
      setValue("imageType", imageData.imageUpload);
    }
  }, [imageData]);
  const { loading, error, data } = useGetAmenities();
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!image) {
        imageUpload({ variables: { file: file } });
      } else {
        deleteImage({ variables: { link: image } });
        setTimeout(() => {
          imageUpload({ variables: { file: file } });
        }, 2000);
      }
    }
  };
  if (initialData) {
    setValue("description", initialData.description);
    setValue("amenities", initialData.amenities);
    setValue("image", initialData.image);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-6">
        <label className="block">
          <span className="text-gray-700">Name Room Type</span>
          <input
            type="text"
            className="mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
            placeholder="Name Room Type"
            {...register("nameType")}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Code Room Type</span>
          <input
            type="text"
            className="mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
            placeholder="DLX"
            {...register("codeType")}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Image Room Type</span>
          <input
            type="file"
            ref={imageReset}
            className="mt-0  block  w-full"
            onChange={(e) => handleImageUpload(e)}
          />
          <input type="hidden" name="imageType" {...register("imageType")} />
        </label>
        <label className="block">
          {image ? (
            <div className="relative h-40 w-40">
              <img src={image} alt="img" className="rounded-md" />
              <button
                type="button"
                onClick={() => {
                  deleteImage({ variables: { link: image } });
                  setImage(null);
                  imageReset.current.value = null;
                }}
                className="rounded-full z-1 py-1 px-2 text-sm absolute top-1 right-2 bg-slate-50 opacity-75 hover:opacity-100 hover:bg-slate-100"
              >
                X
              </button>
            </div>
          ) : null}
        </label>
        {/* End Image Type */}
        <label className="block col-span-2">
          <span className="text-gray-700">Description Room Type</span>
          <textarea
            className="mt-0 form-textarea  block  w-full  px-0.5 border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
            placeholder="1st floor"
            {...register("description")}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Base Occupancy</span>
          <input
            type="number"
            className="mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
            placeholder="number only"
            {...register("baseOccupancy")}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Kids Ocupancy</span>
          <input
            type="number"
            className="mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
            placeholder="1"
            {...register("kidsOccupancy")}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Amenities</span>
          {loading && <div>Loading</div>}
          {error && <div>Error</div>}
          <div className="grid grid-col-3">
            {data &&
              data.amenities.map((amenitie) => (
                <div key={amenitie._id}>
                  <input
                    {...register("amenitie")}
                    type="checkbox"
                    name="amenitie"
                    value={amenitie._id}
                  />
                  {`  ${amenitie.name}`}
                </div>
              ))}
          </div>
        </label>
        <label className="block">
          <span className="text-gray-700">Bed Type</span>
          <select
            className="mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
            {...register("typeBed")}
          >
            <option>Single</option>
            <option>Twin</option>
            <option>Double</option>
            <option>Queen</option>
            <option>King</option>
          </select>
        </label>
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-4">
            <label className="block">
              <span className="text-gray-700">Max Occupancy</span>
              <input
                type="text"
                className="mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
                placeholder="1"
                {...register("maxOccupancy")}
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Extra Bed</span>
              <input
                type="text"
                className="mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
                placeholder="extra bed"
                {...register("extraBed")}
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Extra Bed Price</span>
              <input
                type="text"
                className="mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
                placeholder="1st floor"
                {...register("extraBedPrice")}
              />
            </label>
          </div>
        </div>
        <label className="block">
          <span className="text-gray-700">Base Price</span>
          <input
            type="text"
            className="mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
            placeholder="RP. 1.000.000"
            {...register("basePrice")}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Additional Person Price</span>
          <input
            type="text"
            className="mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
            placeholder="Rp. 500.000"
            {...register("additionalPersonPrice")}
          />
        </label>
      </div>
      <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => router.push("./")}
          className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          back
        </button>
      </div>
    </form>
  );
};

export default FormRoomType;
