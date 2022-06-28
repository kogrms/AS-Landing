export class UserInfo {
  constructor(profileName, profilePosition, profileAvatar) {
    this._profileName = profileName;
    this._profilePosition = profilePosition;
    this._profileAvatar = profileAvatar
  };

  getUserInfo() {
    const userInfo = {
      profileNameInput: this._profileName.textContent,
      profileInfoInput: this._profilePosition.textContent
    }
    return userInfo
  };

  setUserInfo(name, position) {
    this._profileName.textContent = name;
    this._profilePosition.textContent = position;
  };

  setUserAvatar(link) {
    this._profileAvatar.src = link
  };
};
