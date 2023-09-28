import {urlMain, urlImg} from "../constants"

export default class MainApi { 
  constructor({ url, headers, urlMovie }) { 
    this._baseUrl = urlMain; 
    this._urlMovie = urlMovie; 
    this._headers = headers; 
  } 
    _checkResponse(res) { 
    if (!res.ok) { 
      return Promise.reject(`Ошибка: ${res.status}`);
    } 
    return res.json(); 
  }

// возвращает информацию о пользователе (email и имя)
  getUserInfo() { 
    console.log(localStorage.getItem("token"))
    return fetch(`${this._baseUrl}/users/me`, { 
      method: "GET", 
      headers: this._headers, 
    }).then(this._checkResponse); 
  } 

// обновляет информацию о пользователе (email и имя)



editeProfile( name, email ) { 
    return fetch(`${this._baseUrl}/users/me `, { 
      method: "PATCH", 
      headers: this._headers, 
      body: JSON.stringify( 
        name, 
        email, 
      ), 
    }).then(this._checkResponse); 
  } 


  getMoviesUser() { 
    console.log(localStorage.getItem("token"))
    return fetch(`${this._baseUrl}/movies`, { 
      method: "GET", 
      headers: this._headers, 
    }).then(this._checkResponse); 
  } 

  // создает фильм
  handleAddMovieApi(movie) { 
    console.log(movie)
    return fetch(`${this._baseUrl}/movies`, { 
      method: "POST", 
      headers: this._headers, 
      body: JSON.stringify({ 
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: this._urlMovie + movie.image.url,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: this._urlMovie + movie.image.formats.thumbnail.url,
        movieId: movie.id,
      }), 
    }).then(this._checkResponse);
  } 

  // удаляет фильм
  deleteMovie(movieId) { 
    return fetch(`${this._baseUrl}/movies/${movieId}`, { 
      method: "DELETE", 
      headers: this._headers, 
    }).then(this._checkResponse); 
  } 

}
export const mainApi = new MainApi({ 
    url: urlMain, 
    urlMovie:urlImg,
    headers: { 
      Authorization : `Bearer ${localStorage.getItem("token")}`, 
      "Content-Type": "application/json", 
      'Accept': 'application/json', 
    } 
  }); 