import { observable, computed, action } from 'mobx';
import UserProfile from '../Config/UserProfile.json';

class UserProfileStore {

  @observable UserProfileDisplayName = "";
  @observable UserProfileObject = UserProfile;

  @computed get getUserProfile() {
    return this.UserProfileObject;
  }

  @action updateDisplayName(name) {
    this.UserProfileDisplayName = name;
    this.UserProfileObject.results[0].name.displayName = name;
  }

  constructor() {
    this.UserProfileDisplayName = this.UserProfileObject.results[0].name.displayName;
  }

}

const userProfileStore = new UserProfileStore();

export default userProfileStore;
