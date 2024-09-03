const Card = ({ streetAddress, state, zip, sqft, beds, baths, listPrice }) => {
    return (
      <div className="shadow-lg rounded-md p-2">
        <p className="">{streetAddress}</p>
        <p>{state}</p>
        <p>{zip}</p>
        <p>{sqft}</p>
        <p>{beds}</p>
        <p>{baths}</p>
        <p>{listPrice}</p>
      </div>
    );
  };
  export default Card;