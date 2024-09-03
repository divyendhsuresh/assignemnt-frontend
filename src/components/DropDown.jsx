import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useFetchAllUsers } from "../apis/useUsers";
import { useEffect, useState } from "react";

export default function DropDown({ setUsername }) {
  const { data, isLoading, isError } = useFetchAllUsers();
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading users</div>;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Users
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2  rounded-md bg-white shadow-lg px-4 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="p-2">
          {data.map((user) => (
            <MenuItem key={user.email}>
              <div
                onClick={() => setUsername(user.username)}
                className="hover:bg-red z-12"
              >
                {user.username}
              </div>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
