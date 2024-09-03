import { useFetchAllHomes } from "../apis/useHome";
import { useState } from "react";
import Card from "./Card";
import DropDown from "./DropDown";

const DashBoard = () => {
  const [username, setUsername] = useState(undefined);
  const [page, setPage] = useState(2);

  const { data: homes, isFetching: isHomeLoading } = useFetchAllHomes(
    username,
    page
  );

  if (isHomeLoading) {
    return <div>homes data loading</div>;
  }

  console.log(homes);

  return (
    <div className="maxW-100% p-2">
      <div className="flex justify-end">
        <DropDown setUsername={setUsername} />
      </div>
      {!homes || homes?.length === 0 ? (
        <div>no data to show </div>
      ) : (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
          {homes.map((home, index) => (
            <Card
              sqft={home.sqft}
              streetAddress={home.street_address}
              state={home.state}
              zip={home.zip}
              beds={home.beds}
              baths={home.baths}
              listPrice={home.list_price}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashBoard;
