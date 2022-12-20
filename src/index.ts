import Bootloader from "./Bootloader";
import RegisterServices from "./ServiceRegistration";

Bootloader({
    appSettingsUrl: "./appSettings.json",
    registerServices: RegisterServices 
});
