import { useFetchAllUsers } from "../apis/useUsers";
import { useFetchAllHomes } from "../apis/useHome";
import { useAssignUsersToHome } from "../apis/assignUsersToHome";
import { useState } from "react";
import Card from "./Card";

const DashBoard = () => {
  const [username, setUsername] = useState("user2");
  const [page, setPage] = useState(2);

  const { data: users, isFetching: isUsersLoading } = useFetchAllUsers();
  const { data: homes, isFetching: isHomeLoading } = useFetchAllHomes(
    username,
    page
  );

  //   console.log(users);
  //   console.log(isUsersLoading);
  console.log(homes);
  console.log(isHomeLoading);

  if (isUsersLoading) {
    return <div>user data loading</div>;
  }
  if (isHomeLoading) {
    return <div>homes data loading</div>;
  }
  return (
    <div>
      <h1>hello</h1>
      {homes.map((home) => (
        <Card
          sqft={home.sqft}
          streetAddress={home.street_address}
          state={home.state}
          zip={home.zip}
          beds={home.beds}
          baths={home.baths}
          listPrice={home.list_price}
        />
      ))}
    </div>
  );
};

export default DashBoard;
