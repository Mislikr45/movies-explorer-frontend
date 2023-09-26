
import { urlMovie } from "../constants";
class MovieApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _handelResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: "GET",
      headers: { 
        "Content-Type": "application/json", 
        'Accept': 'application/json', 
      } 
    })
      .then(this._handelResponse)
      .then((movies) => {
        return movies; // Возвращаем данные для дальнейшей обработки
      });
  }
}

export const movieApi = new MovieApi({
  baseUrl: urlMovie,
});