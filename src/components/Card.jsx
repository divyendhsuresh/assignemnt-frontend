import { EditUserModal } from "./EditUserModal";
import React, { useState } from "react";

const Card = ({ streetAddress, state, zip, sqft, beds, baths, listPrice }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="shadow-lg rounded-md p-2 flex-1 justify-between flex-col ">
      <div>
        <p className="">{streetAddress}</p>
        <p>{state}</p>
        <p>{zip}</p>
        <p>{sqft}</p>
        <p>{beds}</p>
        <p>{baths}</p>
        <p>{listPrice}</p>
      </div>
      <button
        onClick={openModal}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Edit Users
      </button>
      {isOpen && <EditUserModal />}
    </div>
  );
};

export default Card;
