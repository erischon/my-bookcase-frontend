import { useState } from "react";

const PropertyForm = () => {
  const [title, setTitle] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [upc, setUpc] = useState("");
  const [images, setImages] = useState("");
  const [rate, setRate] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const property = { title, propertyType, upc, images, rate };

    const response = await fetch("/api/property", {
      method: "POST",
      body: JSON.stringify(property),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setPropertyType("");
      setUpc("");
      setImages("");
      setRate("");
      setError(null);
      console.log("New Property added", json);
    }
  };

  return (
    <form className="create form" onSubmit={handleSubmit}>
      <h3>Add a New Property</h3>

      <label>Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Type:</label>
      <select
        type="text"
        onChange={(e) => setPropertyType(e.target.value)}
        value={propertyType}
      >
        {["livre", "film", "série", "bd", "musique", "jeux vidéo"].map(
          (propType) => (
            <option key={propType} value={propType}>
              {propType}
            </option>
          )
        )}
      </select>

      <label>UPC:</label>
      <input type="text" onChange={(e) => setUpc(e.target.value)} value={upc} />

      <label>Image:</label>
      <input
        type="file"
        onChange={(e) => setImages(e.target.value)}
        value={images}
      />

      <label>Rate:</label>
      <input
        type="number"
        onChange={(e) => setRate(e.target.value)}
        value={rate}
      />

      <button>Add Property</button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default PropertyForm;
