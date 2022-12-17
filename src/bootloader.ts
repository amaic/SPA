let fetchAppSettingsTask: Promise<Response> | undefined;

export default function Bootloader(appSettingsUrl: string)
{
    fetchAppSettingsTask = fetch(appSettingsUrl);

    if (document.readyState === "loading")
    {
        window.addEventListener('DOMContentLoaded', Startup);
    }
    else
    {
        Startup();
    }
}

async function Startup()
{
    if (fetchAppSettingsTask == undefined)
    {
        console.error("fetchAppSettingsTask is undefined.");
        return;
    }

    const appSettingsrResponse = await fetchAppSettingsTask;

    if (appSettingsrResponse.ok == false)
    {
        console.error("Unable to load %s: %d %s", appSettingsrResponse.url, appSettingsrResponse.status, appSettingsrResponse.statusText);
        return;
    }

    console.debug(await appSettingsrResponse.json());
}