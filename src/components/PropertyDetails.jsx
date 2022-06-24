const PropertyDetails = ({ item }) => {
  console.log("item:", item);
  return (
    <div className="item-details">
      <h4>{item.title}</h4>
      <p>
        <strong>Type: </strong>
        {item.propertyType}
      </p>
      <p>
        <strong>UPC </strong>
        {item.upc}
      </p>
      <p>{item.images[0].url}</p>
      <p>{item.rate}</p>
    </div>
  );
};

export default PropertyDetails;
