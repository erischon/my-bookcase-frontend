import { useState } from "react";

const PropertyForm = () => {
  const [title, setTitle] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [upc, setUpc] = useState("");
  const [images, setImages] = useState("");
  const [rate, setRate] = useState("");
  const [readingDate, setReadingDate] = useState("");
  const [error, setError] = useState(null);
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const property = { title, propertyType, upc, images, rate, readingDate };

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
      setReadingDate("");
      // setUrl("");
      setError(null);
      console.log("New Property added", json);
    }
  };

  const uploadImage = (event) => {
    const data = new FormData();
    data.append("file", event.target.files[0]);
    data.append("upload_preset", "property");
    data.append("cloud_name", "dxyabkggp");
    fetch("https://api.cloudinary.com/v1_1/dxyabkggp/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setImages(data.url);
      })
      .catch((err) => console.log(err));
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
        {["", "livre", "film", "série", "bd", "musique", "jeux vidéo"].map(
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
      <input type="file" onChange={uploadImage} />
      {/* <input type="file" onChange={(e) => setImages(e.target.files[0])} /> */}

      <label>Rate:</label>
      <input
        type="number"
        onChange={(e) => setRate(e.target.value)}
        value={rate}
      />

      <label>Reading Date:</label>
      <input
        type="date"
        onChange={(e) => setReadingDate(e.target.value)}
        value={readingDate}
      />

      <button>Add Property</button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default PropertyForm;
