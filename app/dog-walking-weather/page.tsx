import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog Walking Weather | Penkridge Dog Services",
  description:
    "Live dog walking weather for Penkridge with automatic dog walking advice based on today's conditions.",
  alternates: {
    canonical:
      "https://www.penkridgedogservices.co.uk/dog-walking-weather",
  },
};

async function getWeather() {
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=52.723&longitude=-2.115&current=temperature_2m,wind_speed_10m,weather_code,rain&timezone=Europe/London",
    {
      next: {
        revalidate: 1800,
      },
    }
  );

  return res.json();
}

function getWeatherText(code: number) {
  switch (code) {
    case 0:
      return "Sunny";
    case 1:
    case 2:
      return "Partly Cloudy";
    case 3:
      return "Cloudy";
    case 45:
    case 48:
      return "Fog";
    case 51:
    case 53:
    case 55:
      return "Drizzle";
    case 61:
    case 63:
    case 65:
      return "Rain";
    case 71:
    case 73:
    case 75:
      return "Snow";
    case 95:
      return "Thunderstorm";
    default:
      return "Mixed Conditions";
  }
}

function getDogRating(temp: number, rain: number, wind: number) {
  if (temp >= 28)
    return {
      colour: "text-red-600",
      rating: "🔴 Avoid",
      advice:
        "Too hot for most dogs. Walk early morning or late evening only.",
    };

  if (temp >= 24)
    return {
      colour: "text-orange-600",
      rating: "🟠 Caution",
      advice:
        "Carry water, avoid hot pavements and keep walks short.",
    };

  if (rain > 5 || wind > 35)
    return {
      colour: "text-yellow-600",
      rating: "🟡 Fair",
      advice:
        "Suitable for a walk but prepare for wet or windy conditions.",
    };

  return {
    colour: "text-green-600",
    rating: "🟢 Excellent",
    advice:
      "Perfect weather for longer walks around Penkridge.",
  };
}

export default async function WeatherPage() {
  const weather = await getWeather();

  const current = weather.current;

  const result = getDogRating(
    current.temperature_2m,
    current.rain,
    current.wind_speed_10m
  );

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <a
        href="/"
        className="inline-block mb-8 text-sm font-semibold hover:underline"
      >
        ← Back to Penkridge Dog Services
      </a>

      <h1 className="text-4xl font-bold mb-10">
        🐾 Today's Dog Walking Weather in Penkridge
      </h1>

      <div className="rounded-xl border p-8 shadow-sm">

        <h2 className="text-2xl font-semibold">
          Current Conditions
        </h2>

        <p className="mt-6 text-xl">
          🌡 Temperature: <strong>{current.temperature_2m}°C</strong>
        </p>

        <p className="text-xl">
          💨 Wind: <strong>{current.wind_speed_10m} km/h</strong>
        </p>

        <p className="text-xl">
          🌧 Rain: <strong>{current.rain} mm</strong>
        </p>

        <p className="text-xl">
          ☁ Conditions:{" "}
          <strong>{getWeatherText(current.weather_code)}</strong>
        </p>

      </div>

      <div className="rounded-xl bg-green-50 border p-8 mt-10">

        <h2 className="text-3xl font-bold">
          Today's Dog Walk Rating
        </h2>

        <p className={`text-4xl mt-6 font-bold ${result.colour}`}>
          {result.rating}
        </p>

        <p className="mt-6 text-lg">
          {result.advice}
        </p>

      </div>

      <h2 className="text-3xl font-bold mt-12">
        🎒 What to Bring
      </h2>

      <ul className="list-disc ml-6 mt-6 space-y-2">
        <li>Fresh drinking water</li>
        <li>Poo bags</li>
        <li>Treats</li>
        <li>Towel for muddy paws</li>
        <li>Cooling mat during hot weather</li>
      </ul>

      <h2 className="text-3xl font-bold mt-12">
        🌡 Temperature Guide
      </h2>

      <table className="mt-6 w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-3">Temperature</th>
            <th className="border p-3">Advice</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-3">Below 0°C</td>
            <td className="border p-3">Watch for icy paths.</td>
          </tr>

          <tr>
            <td className="border p-3">0–20°C</td>
            <td className="border p-3">Excellent walking weather.</td>
          </tr>

          <tr>
            <td className="border p-3">20–24°C</td>
            <td className="border p-3">Carry water.</td>
          </tr>

          <tr>
            <td className="border p-3">24–28°C</td>
            <td className="border p-3">Shorter shaded walks.</td>
          </tr>

          <tr>
            <td className="border p-3">Above 28°C</td>
            <td className="border p-3">Avoid daytime walks.</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-12 space-y-4">

        <a href="/summer-dog-safety" className="block font-semibold hover:underline">
          ☀ Summer Dog Safety →
        </a>

        <a href="/local-dog-walks" className="block font-semibold hover:underline">
          🌿 Favourite Local Walks →
        </a>

        <a href="/recent-walks" className="block font-semibold hover:underline">
          🐾 Recent Walks →
        </a>

        <a href="/contact" className="block font-semibold hover:underline">
          Contact Penkridge Dog Services →
        </a>

      </div>

    </main>
  );
}
