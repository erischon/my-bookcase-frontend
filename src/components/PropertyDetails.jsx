const PropertyDetails = ({ item }) => {
  const typeIcon = () => {
    switch (item.propertyType) {
      case "livre":
        return "book";
      case "film":
        return "movie";
      case "musique":
        return "music_note";
      default:
        return item.propertyType;
    }
  };

  return (
    <div className="item-card">
      <img src={item.images[0].url} alt="item.title" />

      <h3 className="item-card__title">{item.title}</h3>
      <span className="item-card__type material-symbols-outlined">
        {typeIcon(item.propertyType)}
      </span>

      <div className="item-card__rate">
        <span className="material-symbols-outlined">star</span>{" "}
        <span className="">{item.rate}</span>
      </div>
    </div>
  );
};

export default PropertyDetails;
