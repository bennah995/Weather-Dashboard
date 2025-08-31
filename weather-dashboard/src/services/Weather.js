import axios from "axios";

const API_KEY = "1604c5ceb672754f4d200256f579559d";

export async function getWeather(city) {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return res.data;
  } catch (err) {
    throw err;
  }
}
