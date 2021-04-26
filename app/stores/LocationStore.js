import { makeAutoObservable } from "mobx";

import * as Location from "expo-location";

class LocationStore {
  location = null;
  message = null;
  constructor() {
    makeAutoObservable(this);
  }

  GetLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      this.message = "Permession not granted";
      return;
    }
    await Location.watchPositionAsync(
      { accuracy: Location.Accuracy.High },
      (loc) => {
        if (loc) {
          this.location = {
            lat: +loc.coords.latitude,
            lng: +loc.coords.longitude,
          };
        }
      }
    );
  };
}

const locationStore = new LocationStore();
locationStore.GetLocation();

export default locationStore;
