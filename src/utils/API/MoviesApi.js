// // import { urlMovie } from "../../utils/constants";
// // export default class MovieApi { 
// //   constructor({ url, headers }) { 
// //     this._baseUrl = url; 
// //   } 
// //     _checkResponse(res) { 
// //     if (!res.ok) { 
// //       return Promise.reject(`Ошибка: ${res.status}`);
// //     } 
// //     return res.json(); 
// //   }

// //   getMovies() { 
// //     return fetch(`${this._baseUrl}`, { 
// //       method: "GET", 
// //     }).then(this._checkResponse); 
// //   } 

// // }

// // export const movieApi = new MovieApi({ 
// //     url: urlMovie, 
// //   }); 

// import {urlMain, urlMovie} from "../constants"

// export default class MovieApi { 
//   constructor({ url, headers }) { 
//     this._baseUrl = url; 
//     this._headers = headers; 
//   } 
//   getMovies() { 
//     return fetch(`${this._baseUrl}`, { 
//       method: "GET", 
//       headers: this._headers, 
//     }).then(this._checkResponse); 
//   } 

// }



// export const movieApi = new MovieApi({ 
//   url: urlMovie, 
//   // urlMovie:urlMovie,
// }); 


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