import { useEffect, useState } from "react";
import TourCard from "./TourCard";

const url = "https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project";

// Gallery is responsible for fetching and rendering the tours
const Gallery = ({ tours, setTours, onRemove }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch tours from API
  const fetchTours = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch tours");
      const data = await res.json();

      setTours(data); // data is already correctly formatted
      setLoading(false);
    } catch (err) {
      console.error("Error fetching tours:", err);
      setError(true);
      setLoading(false);
    }
  };

  // useEffect to call fetchTours on mount
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>There was an error loading the tours.</h2>;

  return (
    <section className="gallery">
      {tours.length === 0 ? (
        <div>
          <h2>No Tours Left</h2>
          <button onClick={fetchTours}>Refresh</button>
        </div>
      ) : (
        tours.map((tour) => (
          <TourCard key={tour.id} {...tour} onRemove={onRemove} />
        ))
      )}
    </section>
  );
};

export default Gallery;