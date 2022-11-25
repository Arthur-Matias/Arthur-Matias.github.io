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
        phrase: string
    }
}

export type {
    ConfigOptions,
    SystemTexts
}
