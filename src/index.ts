import Bootloader from "./bootloader";

Bootloader("./appSettings.json");

console.debug(window.location);

const searchParams = new URLSearchParams(window.location.search);

for(let key of searchParams.keys())
{
    console.debug(key);
}