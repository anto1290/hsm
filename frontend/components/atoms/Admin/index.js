import * as Fa from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { MenuAdmin } from "../../../components";
import withAuth from "../withAuth";
const LayoutAdmin = withAuth(({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [dropdown, setDropdown] = useState({ status: false, id: null });
  const handleClick = (id) => {
    if (dropdown.id === id) {
      setDropdown({ status: false, id: null });
    } else {
      setDropdown({ status: true, id });
    }
  };
  return (
    <>
      <div className="flex">
        <div
          className={`h-screen bg-dark-purple left-0 top-0 ${
            isOpen ? "w-72 bottom-0 overflow-y-scroll no-scrollbar" : "w-20"
          } duration-300 sticky `}
        >
          <div className="h-12 bg-[#01B477]">
            {isOpen ? (
              <h2 className="font-bold text-white text-xl text-center py-2 rotate-[360deg] duration-500 ">
                Company Name
              </h2>
            ) : (
              <h2 className="font-bold text-white text-xl text-center py-2 rotate-[-360deg] duration-500">
                CN
              </h2>
            )}
          </div>
          <div className="sticky">
            <ul className="pt-6">
              {MenuAdmin.map((item) => {
                if (!item.childern) {
                  return (
                    <Link key={item.id} href={item.href}>
                      <li className="flex rounded-md p-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2">
                        <a>
                          {item.icon}
                          <span
                            className={`${
                              !isOpen && "hidden"
                            } ml-3 origin-left duration-200`}
                          >
                            {item.name}
                          </span>
                        </a>
                      </li>
                    </Link>
                  );
                } else {
                  return (
                    <li
                      key={item.id}
                      className="blok rounded-md p-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2"
                      onClick={() => handleClick(item.id)}
                    >
                      <button type="button">
                        {item.icon}
                        <span
                          className={`${
                            !isOpen && "hidden"
                          } inline-block ml-3 origin-left duration-200`}
                        >
                          {item.name}
                        </span>
                        {dropdown.status && dropdown.id === item.id ? (
                          <Fa.FaAngleDown
                            className={`text-white text-2xl inline-block ${
                              !isOpen && "hidden"
                            } absolute right-3  origin-left duration-200 `}
                          />
                        ) : (
                          <Fa.FaAngleLeft
                            className={`text-white text-2xl inline-block ${
                              !isOpen && "hidden"
                            } absolute right-3 origin-left duration-200`}
                          />
                        )}
                      </button>
                      <ul
                        className={`${
                          !isOpen
                            ? dropdown.status && dropdown.id === item.id
                              ? "pl-2 pb-1 absolute bg-gray-900 -mt-10 left-20 w-52 origin-left duration-300 overflow-y-scroll scrollbars-adminSubMenu h-80"
                              : "hidden"
                            : dropdown.status && dropdown.id === item.id
                            ? "pl-5 origin-top duration-200"
                            : "hidden"
                        } `}
                      >
                        {item.childern.map((child) => {
                          return (
                            <li
                              key={child.id}
                              className="rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2"
                            >
                              <Link href={child.href}>
                                <a>
                                  <Fa.FaRegDotCircle className="text-gray-300 text-base inline-block mr-3" />
                                  {child.name}
                                </a>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                      {/* Ul content */}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
        <main
          className={`flex-[1] ${
            isOpen ? "w-[calc(100%-18rem)]" : "w-[calc(100%-5rem)]"
          } `}
        >
          <div
            className={`${
              isOpen ? "w-[calc(100%-18rem)]" : "w-[calc(100%-5rem)]"
            }  h-12 bg-slate-700 top-0 z-10 fixed right-0 origin-top-right duration-300`}
          >
            <div className="flex justify-between">
              <div className="pl-2 py-2">
                {isOpen ? (
                  <button type="button" onClick={() => setIsOpen(false)}>
                    <Fa.FaTimes className="fill-white text-3xl cursor-pointer " />
                  </button>
                ) : (
                  <button type="button" onClick={() => setIsOpen(true)}>
                    <Fa.FaBars className="fill-white text-3xl cursor-pointer " />
                  </button>
                )}
              </div>
              <div className="flex py-2 pr-2">
                <div className="mr-2 py-1">
                  <Fa.FaEnvelope className="fill-white text-2xl" />
                </div>
                <div className="mr-2">
                  <img
                    className="h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="mr-2">
                  <Link href="/logout">
                    <a>
                      <Fa.FaCogs className="fill-white text-3xl" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {children}
        </main>
      </div>
    </>
  );
}, "admin");

export default LayoutAdmin;
