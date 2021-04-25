import { makeAutoObservable } from "mobx";

import * as Location from "expo-location";

class LocationStore {
  constructor() {
    makeAutoObservable(this);
  }

  GetLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log("karafta");
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location = await Location.watchPositionAsync(
      { accuracy: Location.Accuracy.Lowest, distanceInterval: 2000 },
      (loc) => setLocation(JSON.parse(JSON.stringify(loc.coords)))
    );

    console.log(location);
    setLocation(location);
    let text = "Waiting..";
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
  };
}

const locationStore = new LocationStore();
locationStore.GetLocation();

export default locationStore;
