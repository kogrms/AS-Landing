import { Popup } from './Popup.js';
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupElement.querySelector('.popup__photo');
    this._title = this._popupElement.querySelector('.popup__caption');
  };

  open(data) {
    super.open();
    this._image.src = data.link;
    this._title.textContent = data.name;
    this._image.alt = data.name;
  };
};
