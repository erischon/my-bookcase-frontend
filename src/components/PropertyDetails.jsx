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

  let date = item.readingDate;

  if (item.readingDate) {
    date = new Date(item.readingDate);
  }

  return (
    <div className="item-card">
      <img src={item.images} alt="item.title" />

      <h3 className="item-card__title">{item.title}</h3>
      <span className="item-card__type material-symbols-outlined">
        {typeIcon(item.propertyType)}
      </span>

      <div className="item-card__rate">
        <span className="material-symbols-outlined">star</span>{" "}
        <span className="">
          {item.readingDate ? date.getFullYear() : "Non lu"}
        </span>
      </div>
    </div>
  );
};

export default PropertyDetails;
