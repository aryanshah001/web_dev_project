import useCustomhook from "../customHook/useCustomhook";

function Home() {
  const { error, loading, data } = useCustomhook();

  if (error) return <p> {error} </p>;
  if (loading) return <>Loading...</>;

  const Sky = data?.weather[0]?.description;
  const Tempearature = (data?.main.temp - 273.15).toFixed(2);
  const FeelsLike = data?.main?.feels_like;

  return (
      <div className="text-3xl font-bold ">
        <p>Sky = {Sky}</p>
        <p>Temperatur = {Tempearature} °C</p>
        <p>Feels Like = {FeelsLike}</p>
      </div>
  );
}

export default Home;
