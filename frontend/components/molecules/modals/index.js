const Modal = ({ children, openModal, closeModal, areaClose }) => {
  if (areaClose) {
    return (
      <div
        className={`absolute ${
          !openModal && "hidden"
        } z-20 transition duration-300 ease-in-out inset-0 bg-gray-700 bg-opacity-60 overflow-y-auto h-full w-full px-4 justify-center`}
        onClick={() => closeModal()}
      >
        <div className="relative z-[21] top-40 mx-auto shadow-lg rounded-md bg-white max-w-2xl">
          {children}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`absolute ${
          !openModal && "hidden"
        } z-20 transition duration-300 ease-in-out inset-0 bg-gray-700 bg-opacity-60 overflow-y-auto h-full w-full px-4 justify-center`}
      >
        <div className="relative top-40 mx-auto shadow-lg rounded-md bg-white  max-w-2xl">
          {children}
        </div>
      </div>
    );
  }
};

export default Modal;
