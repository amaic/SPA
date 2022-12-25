import Bootloader from "./Bootloader";
import Initialization from "./Run";
import RegisterServices from "./Services";

Bootloader({
    appSettingsUrl: "./appSettings.json",
    registerServices: RegisterServices,
    initialization: Initialization
});
