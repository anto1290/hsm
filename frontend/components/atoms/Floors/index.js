import { useForm } from "react-hook-form";
const FormFloor = ({ onSubmit, closeModal, initialData }) => {
  const { handleSubmit, register, setValue } = useForm();

  if (initialData) {
    setValue("id", initialData._id);
    setValue("name", initialData.name, { shouldValidate: true });
    setValue("numberFloor", initialData.numberFloor, { shouldValidate: true });
    setValue("description", initialData.description, { shouldValidate: true });
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register("id")} />
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700">Name</span>
            <input
              type="text"
              className="mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
              placeholder="1st floor"
              {...register("name")}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Number Floor</span>
            <input
              type="number"
              className="mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
              placeholder="1"
              {...register("numberFloor")}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Description</span>
            <input
              type="text"
              className="mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
              placeholder="1st floor type standart"
              {...register("description")}
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
            onClick={closeModal}
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            close
          </button>
        </div>
      </form>
    </>
  );
};

export default FormFloor;
