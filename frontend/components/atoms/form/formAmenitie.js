import { useForm } from "react-hook-form";

const FormAmenitie = ({ onSubmit, closeModal, initialData }) => {
  const { handleSubmit, register, setValue } = useForm();
  if (initialData) {
    setValue("id", initialData._id);
    setValue("name", initialData.name, { shouldValidate: true });
    setValue("description", initialData.description, { shouldValidate: true });
    setValue("active", initialData.active, { shouldValidate: true });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("id")} />
      <div className="grid grid-cols-1 gap-6">
        <label className="block">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            className="mt-0 form-input block  w-full  px-0.5 border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
            placeholder="Air Conditioner"
            {...register("name")}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Description</span>
          <textarea
            className="mt-0 form-input block  w-full  px-0.5 border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
            placeholder="AC is a very good thing"
            {...register("description")}
          />
        </label>
        <div className="block mb-4">
          <label className="inline-flex items-center">
            <span className="text-gray-700 mr-6">Active</span>
            <input
              type="checkbox"
              className="px-0.5 form-checkbox border-2 border-blue-500
                focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
              {...register("active")}
            />
          </label>
          <p className="text-sm text-gray-700">tick if amenitie active</p>
        </div>
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
  );
};

export default FormAmenitie;
