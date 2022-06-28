export class FormValidator {
  constructor(obj, formElement) {
    this._obj = obj;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._obj.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._obj.submitButtonSelector);
  }

  _showInputError(inputElement) {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    inputElement.classList.add(this._obj.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  };

  _hideInputError (inputElement) {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    inputElement.classList.remove(this._obj.inputErrorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _enableSubmitButton(buttonElement) {
    buttonElement.classList.remove(this._obj.inactiveButtonClass),
    buttonElement.removeAttribute('disabled');
  };

  _disableSubmitButton(buttonElement) {
    buttonElement.classList.add(this._obj.inactiveButtonClass),
    buttonElement.setAttribute('disabled', true);
  };

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      this._disableSubmitButton(buttonElement);
    } else {
      this._enableSubmitButton(buttonElement);
    }
  };

  _setEventListeners = () => {
    this._toggleButtonState(this._inputList, this._buttonElement);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, this._buttonElement);
      });
    });
  };

  enableValidation() {
    this._formElement.addEventListener('submit', function(evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  };

  resetValidation(buttonElement) {
    this._inputList.forEach((inputElement) => {
        this._toggleButtonState(this._inputList, buttonElement);
        this._hideInputError(inputElement);
    });
  };
};
