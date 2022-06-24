import { useEffect, useState } from "react";

import PropertyDetails from "../components/PropertyDetails";

const Home = () => {
  const [property, setProperty] = useState(null);

  const API_URL = "/api/property";

  useEffect(() => {
    const fetchProperty = async () => {
      const response = await fetch(API_URL);
      const json = await response.json();

      if (response.ok) {
        setProperty(json);
      }
    };

    fetchProperty();
  }, []);

  return (
    <div className="home">
      <section className="property-list">
        {property &&
          property.map((item) => (
            <PropertyDetails key={item._id} item={item} />
          ))}
      </section>
    </div>
  );
};

export default Home;
