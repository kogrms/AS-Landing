export class Api {
  constructor(id) {
    this.link = id.link;
    this.headers = id.headers;
  };

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
      return Promise.reject('Ошибка')
  };

  getUserInfo() {
    return fetch(`${this.link}/users/me`, {
      method: "GET",
      headers: this.headers
    })
    .then(this._handleResponse)
  };

  getInitialCard() {
    return fetch(`${this.link}/cards`, {
      method: "GET",
      headers: this.headers
    })
    .then(this._handleResponse)
  };

  setUserInfo(name, about) {
    return fetch(`${this.link}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: `${name}`,
        about: `${about}`
      })
    })
    .then(this._handleResponse)
  };

  addNewCard(name, link) {
    return fetch(`${this.link}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: `${name}`,
        link: `${link}`
      })
    })
    .then(this._handleResponse)
  };

  addNewAvatar(link) {
    return fetch(`${this.link}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: `${link}`
      })
    })
    .then(this._handleResponse)
  };

  deleteCard(id) {
    return fetch(`${this.link}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers,
      body: JSON.stringify({
        _id: `${id}`
      })
    })
    .then(this._handleResponse)
  };

  like(id) {
    return fetch(`${this.link}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify({
        _id: `${id}`
      })
    })
    .then(this._handleResponse)
  };

  dislike(id) {
    return fetch(`${this.link}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this.headers,
      body: JSON.stringify({
        _id: `${id}`
      })
    })
    .then(this._handleResponse)
  };
}
