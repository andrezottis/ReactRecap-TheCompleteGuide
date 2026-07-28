import ErrorPage from "./ErrorPage.jsx";
import Places from "./Places.jsx";
import { useState, useEffect } from "react";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const places = await fetchAvailablePlaces();
        
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude,
          );
          setAvailablePlaces(sortedPlaces);
        });
      } catch (error) {
        setError({
          message: error.message || "Failed while fetching data. Try again.",
        });
        setIsFetching(false);
      }
    }

    setIsFetching(true);
    fetchPlaces().finally(() => setIsFetching(false));
  }, []);

  if (error) {
    return <ErrorPage title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Loading available places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
