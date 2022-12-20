import Bootloader from "./Bootloader";
import Initialization from "./Run";
import RegisterServices from "./ServiceRegistration";

Bootloader({
    appSettingsUrl: "./appSettings.json",
    registerServices: RegisterServices,
    initialization: Initialization
});
