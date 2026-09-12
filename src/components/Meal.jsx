import { useState, useEffect } from "react";

export default function Meal() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals"); //GET is the default method.

        if (!response.ok) {
          //... treat the error.
        }

        const meals = await response.json();
        setLoadedMeals(meals);
      } catch {
        //do something
      }
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
