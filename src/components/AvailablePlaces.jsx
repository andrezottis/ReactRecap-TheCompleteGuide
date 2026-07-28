import ErrorPage from "./ErrorPage.jsx";
import Places from "./Places.jsx";
import { useState, useEffect } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Fail to perform the request.");
        }

        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({
          message: error.message || "Failed while fetching data. Try again.",
        });
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
