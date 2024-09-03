import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useFetchAllUsers } from "../apis/useUsers";
import { useEffect, useState } from "react";

export default function DropDown({ setUserName, userName }) {
  const { data, isLoading, isError } = useFetchAllUsers();
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading users</div>;

  return (
    <>
      <select
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        className="inline-flex  justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        {data.map((user) => (
          <option
            // onClick={() => setUsername(user.username)}
            value={user.username}
            className="hover:bg-red z-12"
          >
            {user.username}
          </option>
        ))}
      </select>
    </>
  );
}
