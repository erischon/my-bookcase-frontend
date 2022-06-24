const PropertyDetails = ({ item }) => {
  const typeIcon = () => {
    switch (item.propertyType) {
      case "livre":
        return "book";
      case "film":
        return "movie";
      case "musique":
        return "album";
      default:
        return item.propertyType;
    }
  };

  return (
    <div className="item-card">
      <img src={item.images[0].url} alt="item.title" />

      <h3 className="item-card__title">{item.title}</h3>

      <div className="item-card__infos">
        <p>{item.rate}</p>
        <p>{`n° UPC: ${item.upc}`}</p>
      </div>
      <span className="item-card__type material-symbols-outlined">
        {typeIcon(item.propertyType)}
      </span>
    </div>
  );
};

export default PropertyDetails;
