import Bootloader from "./services/Bootloader";
import Startup from "./Run";
import RegisterServices from "./Services";

Bootloader({
    appSettingsUrl: "./appSettings.json",
    registerServices: RegisterServices,
    startup: Startup
});
