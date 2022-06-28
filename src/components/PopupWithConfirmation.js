import { Popup } from './Popup.js';
export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  };

  handleConfirm(handleDeleteCard) {
    this._handleDeleteCard = handleDeleteCard;
  }

  setEventListeners() {
    super.setEventListeners()
    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleDeleteCard()
      // this.close()
    });
  }
};
