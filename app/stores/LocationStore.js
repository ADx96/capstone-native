import * as Location from "expo-location";
import { runInAction, makeAutoObservable } from "mobx";

class LocationStore {
  location = null;
  message = null;
  adress = null;
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
          runInAction(async () => {
            this.location = {
              lat: +loc.coords.latitude,
              lng: +loc.coords.longitude,
            };
            this.adress = await Location.reverseGeocodeAsync({
              latitude: loc.coords.latitude,
              longitude: loc.coords.longitude,
            });
          });
        }
      }
    );
  };
}

const locationStore = new LocationStore();
locationStore.GetLocation();

export default locationStore;

//const place = await Location.reverseGeocodeAsync({
//   latitude : location.coords.latitude,
//   longitude : location.coords.longitude
// });
