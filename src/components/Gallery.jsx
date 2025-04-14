import { useEffect, useState } from "react";
import TourCard from "./TourCard";
const url = "https://course-api.com/react-tours-project";

//Gallery is responsible for fetching and rendering the tour

const Gallery = ({ tours, setTours, onRemove }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //Function to fetch tours from API
    const fetchTours = async () => {
        try {
          const res = await fetch(url);
          if (!res.ok) throw new Error("Failed to fetch tours");
          const data = await res.json();
    
          const trimmed = data.map((tour) => ({
            id: tour.id,
            name: tour.name,
            info: tour.info,
            price: tour.price,
            image: tour.image,
          }));
    
          setTours(trimmed);
          setLoading(false);
        } catch (error) {
          setError(true);
          setLoading(false);
        }
      };
    
      // useEffect to call fetchTours on mount
      useEffect(() => {
        fetchTours();
      }, []);
    //Display an error message if fetch fails
      if (loading) return <h2>Loading...</h2>;
      if (error) return <h2>There was an error loading the tours.</h2>;
    
      return (
        <section className="gallery">
          {tours.map((tour) => (
            <TourCard key={tour.id} {...tour} onRemove={onRemove} />
          ))}
        </section>
      );
    };
    
    export default Gallery;

