import { useForm } from "react-hook-form";
const LoginFrom = ({ onSubmit, loading }) => {
  const { handleSubmit, register } = useForm();
  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6">
          <label htmlFor="email" className="block">
            <span className="font-bold">Email / username</span>
            <input
              type="text"
              name="email"
              className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm form-input focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="email"
              autoComplete="off"
              {...register("email")}
            />
          </label>
          <label htmlFor="password" className="block">
            <span className="font-bold">Password</span>
            <input
              type="password"
              name="password"
              className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm form-input focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="password"
              {...register("password")}
            />
          </label>
        </div>
        {loading && "Signing in..."}
        {!loading && (
          <button
            type="submit"
            className="bg-cyan-500 py-2 px-2 rounded-md w-full text-white hover:bg-cyan-400 border-none cursor-pointer"
          >
            Login
          </button>
        )}
      </form>
    </>
  );
};

export default LoginFrom;
