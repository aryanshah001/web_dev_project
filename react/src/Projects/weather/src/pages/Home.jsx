import { useState } from "react";
import useCustomhook from "../customHook/useCustomhook";

function Home() {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("Ahmedabad");
  const { error, loading, data } = useCustomhook(city);

  function handleSubmit(event) {
    event.preventDefault();
    const searchedCity = input.trim();
    if (searchedCity) {
      setCity(searchedCity);
    }
  }

  const temperature = data?.main?.temp;
  const feelsLike = data?.main?.feels_like;

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 p-4">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Enter a city"
          aria-label="Location"
          className="rounded border px-3 py-2"
        />
        <button type="submit" className="rounded border px-3 py-2">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data && !loading && !error && (
        <div className="text-3xl font-bold">
          <p>Location = {data.name}</p>
          <p>Sky = {data.weather?.[0]?.description}</p>
          <p>Temperature = {(temperature - 273.15).toFixed(2)} °C</p>
          <p>Feels Like = {(feelsLike - 273.15).toFixed(2)} °C</p>
        </div>
      )}
    </div>
  );
}

export default Home;
