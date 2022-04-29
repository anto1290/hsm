import { LayoutAdmin, ChartComponent } from "@/components";
import * as Fa from "react-icons/fa";
const Admin = () => {
  const data = [
    {
      x: Date.parse("2022-03-01 00:10:00 GMT+07:00"),
      y: 60,
    },
    {
      x: Date.parse("2022-03-02 00:10:00 GMT+07:00"),
      y: 80,
    },
    {
      x: Date.parse("2022-03-03 00:10:00 GMT+07:00"),
      y: 60,
    },
    {
      x: Date.parse("2022-03-04 00:10:00 GMT+07:00"),
      y: 59,
    },
    {
      x: Date.parse("2022-03-05 00:10:00 GMT+07:00"),
      y: 0,
    },
    {
      x: Date.parse("2022-03-06 00:10:00 GMT+07:00"),
      y: 66,
    },
    {
      x: Date.parse("2022-03-07 00:10:00 GMT+07:00"),
      y: 55,
    },
    {
      x: Date.parse("2022-03-08 00:10:00 GMT+07:00"),
      y: 55,
    },
    {
      x: Date.parse("2022-03-09 00:10:00 GMT+07:00"),
      y: 55,
    },
    {
      x: Date.parse("2022-03-010 00:10:00 GMT+07:00"),
      y: 55,
    },
    {
      x: Date.parse("2022-03-011 00:10:00 GMT+07:00"),
      y: 10,
    },
    {
      x: Date.parse("2022-03-012 00:10:00 GMT+07:00"),
      y: 20,
    },
    {
      x: Date.parse("2022-03-013 00:10:00 GMT+07:00"),
      y: 45,
    },
    {
      x: Date.parse("2022-03-014 00:10:00 GMT+07:00"),
      y: 30,
    },
  ];
  return (
    <>
      <LayoutAdmin>
        <section className="bg-slate-300 container p-2 mt-12">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-4">
            <div className="flex bg-white rounded-2xl shadow-xl h-28">
              <div className="flex rounded-l-2xl justify-center items-center h-full bg-cyan-700 text-white w-28">
                <Fa.FaBookmark className="text-5xl" />
              </div>
              <div className="w-full px-2 py-2">
                <h2 className="text-2xl font-bold text-gray-800">Order </h2>
                <span className="text-xl text-gray-800">0 </span>
              </div>
            </div>
            <div className="flex bg-white rounded-2xl shadow-xl h-28">
              <div className="flex rounded-l-2xl justify-center items-center h-full bg-green-500 text-white w-28">
                <Fa.FaDollarSign className="text-5xl" />
              </div>
              <div className="w-full px-2 py-2">
                <h2 className="text-2xl font-bold text-gray-800">
                  Revenue Today{" "}
                </h2>
                <span className="text-xl text-gray-800">0 </span>
              </div>
            </div>
            <div className="flex bg-white rounded-2xl shadow-xl h-28">
              <div className="flex rounded-l-2xl justify-center items-center h-full bg-red-600 text-white w-28">
                <Fa.FaHome className="text-5xl" />
              </div>
              <div className="w-full px-2 py-2">
                <h2 className="text-2xl font-bold text-gray-800">Rooms </h2>
                <span className="text-xl text-gray-800">0 </span>
              </div>
            </div>
            <div className="flex bg-white rounded-2xl shadow-xl h-28">
              <div className="flex rounded-l-2xl justify-center items-center h-full bg-yellow-400 text-white w-28">
                <Fa.FaUserAlt className="text-5xl" />
              </div>
              <div className="w-full px-2 py-2">
                <h2 className="text-2xl font-bold text-gray-800">Guests </h2>
                <span className="text-xl text-gray-800">0 </span>
              </div>
            </div>
          </div>
        </section>
        <section className={`container p-3 w-[80vw]`}>
          <ChartComponent
            dataDataSet={data}
            labelDataset={"laporan"}
            titleChart="Weekly Revenue Reports"
            type="line"
            typeUnit="week"
          />
        </section>
      </LayoutAdmin>
    </>
  );
};

export default Admin;
