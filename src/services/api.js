import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;

/**
 * iOS com emulador: localhost;
 * iOS com físico: IP da máquina;
 * Android com emulador: localhost: adb reverse tcp:3333 tcp:3333 --> red da maq. pro emulator;
 * Android com emulador: 10.0.2.2 (Android Studio);
 * Android com emulador: 10.0.3.2 (Genymotion)
 * Android com físico: Ip da máquina
 */