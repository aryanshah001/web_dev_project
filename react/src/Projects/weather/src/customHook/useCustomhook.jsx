import { useEffect, useState } from "react";

function useCustomhook(city) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!city) return;

    const getData = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = new URL("https://api.openweathermap.org/data/2.5/weather");
        url.searchParams.set("q", city);
        url.searchParams.set("appid", "9fe26bff63a3c5f54abbb5320535775b");

        const res = await fetch(url);
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error("Location not found. Check the city name and try again.");
          }
          throw new Error("Weather data could not be loaded. Please try again.");
        }

        const weatherData = await res.json();
        setData(weatherData);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [city]);

  return { loading, error, data };
}

export default useCustomhook;
