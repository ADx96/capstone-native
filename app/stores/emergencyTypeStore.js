import { runInAction, makeAutoObservable } from "mobx";
import instance from "./instance";

class EmergencyTypeMobx {
  types = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }

  fetchType = async () => {
    try {
      const response = await instance.get("/type");
      runInAction(() => {
        this.types = response.data;
        this.loading = false;
      });
    } catch (e) {
      console.log(e);
    }
  };
}

const typeStore = new EmergencyTypeMobx();
typeStore.fetchType();

export default typeStore;
