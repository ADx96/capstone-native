import { runInAction, makeAutoObservable } from "mobx";
import instance from "./instance";

import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
class AuthStore {
  user = null;
  isLoading = true;
  constructor() {
    makeAutoObservable(this);
  }

  storageData = async (token) => {
    try {
      await AsyncStorage.setItem("myToken", token);
      const jsonValue = decode(token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      runInAction(() => {
        this.user = jsonValue;
        this.isLoading = false;
      });
    } catch (e) {
      console.log(e);
    }
  };

  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("myToken");
      if (jsonValue) {
        runInAction(() => {
          this.user = decode(jsonValue);
          this.isLoading = false;
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  signout = () => {
    AsyncStorage.removeItem("myToken");
    runInAction(() => (this.user = null));
  };

  signUp = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      runInAction(() => this.storageData(res.data.token));
    } catch (error) {
      console.log("AuthStore -> signUp -> error", error);
    }
  };
  signIn = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      runInAction(() => this.storageData(res.data.token));
    } catch (error) {
      console.log("AuthStore -> signIn -> error", error);
    }
  };
}

const authStore = new AuthStore();
authStore.getData();

export default authStore;
