import * as Fa from "react-icons/fa";
export const MenuAdmin = [
  {
    id: "1",
    name: "Dashboard",
    href: "/admin",
    icon: <Fa.FaTachometerAlt className="text-white text-2xl inline-block" />,
  },
  {
    id: "2",
    name: "Booking",
    href: "/admin/booking",
    icon: <Fa.FaBookOpen className="text-white text-2xl inline-block" />,
  },
  {
    id: "3",
    name: "Booking Rooms",
    href: "/admin/bookingRooms",
    icon: <Fa.FaBook className="text-white text-2xl inline-block" />,
  },
  {
    id: "4",
    name: "Booking Halls",
    href: "/admin/bookingHalls",
    icon: <Fa.FaLandmark className="text-white text-2xl inline-block" />,
  },
  {
    id: "5",
    name: "Booking Events",
    href: "/admin/calendar",
    icon: <Fa.FaCalendarAlt className="text-white text-2xl inline-block" />,
  },
  {
    id: "6",
    name: "Guests",
    href: "/admin/guests",
    icon: <Fa.FaUtensils className="text-white text-2xl inline-block" />,
  },
  {
    id: "7",
    name: "Hotel Configuration",
    icon: <Fa.FaHotel className="text-white text-2xl inline-block" />,
    childern: [
      {
        id: "1",
        name: "Room Types",
        href: "/admin/roomType",
      },
      {
        id: "2",
        name: "Rooms",
        href: "/admin/rooms",
      },
      {
        id: "3",
        name: "Hall Types",
        href: "/admin/hallType",
      },
      {
        id: "4",
        name: "Halls",
        href: "/admin/halls",
      },
      {
        id: "5",
        name: "Price Manager",
        href: "/admin/priceManager",
      },
      {
        id: "6",
        name: "Paid Services",
        href: "/admin/paidServices",
      },
      {
        id: "7",
        name: "Coupon",
        href: "/admin/coupon",
      },
      {
        id: "8",
        name: "Floors",
        href: "/admin/floors",
      },
      {
        id: "9",
        name: "Amenities",
        href: "/admin/amenities",
      },
      {
        id: "10",
        name: "HouseKeeping Status",
        href: "/admin/houseKeepingStatus",
      },
    ],
  },
  {
    id: "8",
    name: "Reports",
    icon: <Fa.FaHotel className="text-white text-2xl inline-block" />,
    childern: [
      {
        id: "1",
        name: "Occupancy",
        href: "/admin/occupancy",
      },
      {
        id: "2",
        name: "Guests",
        href: "/admin/guests",
      },
      {
        id: "3",
        name: "Finance",
        href: "/admin/finance",
      },
    ],
  },
  {
    id: "9",
    name: "HR Management",
    icon: <Fa.FaHotel className="text-white text-2xl inline-block" />,
    childern: [
      {
        id: "1",
        name: "Employes",
        href: "/admin/employes",
      },
      {
        id: "2",
        name: "Departments",
        href: "/admin/departments",
      },
      {
        id: "3",
        name: "Designations",
        href: "/admin/designations",
      },
    ],
  },
  {
    id: "10",
    name: "Adminitrative",
    icon: <Fa.FaHotel className="text-white text-2xl inline-block" />,
    childern: [
      {
        id: "1",
        name: "Settings",
        href: "/admin/settings",
      },
      {
        id: "2",
        name: "Languages",
        href: "/admin/languages",
      },
      {
        id: "3",
        name: "Currency",
        href: "/admin/currency",
      },
      {
        id: "4",
        name: "Taxes",
        href: "/admin/taxes",
      },
      {
        id: "5",
        name: "Locations",
        href: "/admin/locations",
      },
      {
        id: "6",
        name: "Testimonials",
        href: "/admin/testimonials",
      },
    ],
  },
];
