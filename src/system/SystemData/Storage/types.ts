type ConfigOptions  = {
    title: string;
    options?: string[]
}
type SystemTexts = {
    config: {
        title: string;
        options: ConfigOptions[];
    }
    boot: string[];
    login: {
        mobileMessage: string;
        desktopMessage: string;
    }
}

export type {
    ConfigOptions,
    SystemTexts
}
