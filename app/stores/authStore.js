import { makeAutoObservable } from "mobx";
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
      const jsonValue = decode(token);
      await AsyncStorage.setItem("myToken", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      console.log(token);
      this.user = jsonValue;
      this.isLoading = false;
    } catch (e) {
      console.log(e);
    }
  };

  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("myToken");
      if (jsonValue) {
        this.user = decode(jsonValue);
        this.isLoading = false;
      }
    } catch (e) {
      console.log(e);
    }
  };
  signout = () => {
    AsyncStorage.removeItem("myToken");
    this.user = null;
  };

  signUp = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.storageData(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signUp -> error", error);
    }
  };
  signIn = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.storageData(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signIn -> error", error);
    }
  };
}

const authStore = new AuthStore();
authStore.getData();

export default authStore;
