// import spb from '../images/spb.jpg';
// import msk from '../images/moscow.jpg';
// import kij from '../images/kizhy.jpg';
// import hib from '../images/khibiny.jpg';
// import mur from '../images/murmansk.jpg';
// import kro from '../images/kronshtadt.jpg';

// export const initialCards = [
//   {
//     name: 'Санкт-Петербург',
//     link: spb,
//   },
//   {
//     name: 'Москва',
//     link: msk,
//   },
//   {
//     name: 'Кижи',
//     link: kij,
//   },
//   {
//     name: 'Хибины',
//     link: hib,
//   },
//   {
//     name: 'Мурманск',
//     link: mur,
//   },
//   {
//     name: 'Кронштадт',
//     link: kro
//   }
// ];

export const validationObject = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input_type_error'
};

const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupAvatar = document.querySelector('.popup_type_avatar');
const popupConfirm = document.querySelector('.popup_type_confirm');

export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const buttonAvatar = document.querySelector('.profile__avatar-edit-button');
export const formEdit = popupEdit.querySelector('.form');
export const formAdd = popupAdd.querySelector('.form');
export const formAvatar = popupAvatar.querySelector('.form');
export const inputName = formEdit.querySelector('.form__input_value_name');
export const inputPosition = formEdit.querySelector('.form__input_value_position');
export const popupEditSubmit = popupEdit.querySelector('.form__submit-button');
export const popupAddSubmit = popupAdd.querySelector('.form__submit-button');
export const popupAvatarSubmit = popupAvatar.querySelector('.form__submit-button');
export const popupConfirmSubmit = popupConfirm.querySelector('.form__submit-button');
export const currentId = 'b02aa1771eae819636737318';
export const profileName = document.querySelector('.profile__name');
export const profilePosition = document.querySelector('.profile__position');
export const profileAvatar = document.querySelector('.profile__avatar');

// export const
