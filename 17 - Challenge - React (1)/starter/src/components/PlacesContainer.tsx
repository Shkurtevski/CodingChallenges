import React, { useState, useEffect } from "react";
import Place from "./Place";

interface PlaceData {
  id: number;
  place: string;
  desc: string;
  img: string;
}

const PlacesContainer = () => {
  const [places, setPlaces] = useState<PlaceData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const response = await fetch("http://localhost:5001/places");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: PlaceData[] = await response.json();
        setPlaces(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      }
    }

    fetchPlaces();
  }, []);

  return (
    <div className="place-container">
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        places.map((place) => (
          <Place
            key={place.id}
            title={place.place}
            text={place.desc}
            image={place.img}
          />
        ))
      )}
    </div>
  );
};

export default PlacesContainer;
