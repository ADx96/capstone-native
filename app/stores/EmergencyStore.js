import { makeAutoObservable } from "mobx";
import instance from "./instance";

class EmergencyStore {
  emergencies = [];
  loading = true;

  fetchEmergency = async () => {
    try {
      const response = await instance.get("/emergency");
      this.emergencies = response.data;
      this.loading = false;
    } catch (error) {
      console.error("Emergency -> fetchEmergency -> error", error);
    }
  };

  createEmergency = async (newEmergency) => {
    try {
      const res = await instance.post("/emergency", newEmergency);
      this.emergencies.push(res.data);
    } catch (error) {
      console.log("log1 -> createHotel -> error", error);
    }
  };

  constructor() {
    makeAutoObservable(this);
  }
}

const emergencyStore = new EmergencyStore();
emergencyStore.fetchEmergency();

export default emergencyStore;
