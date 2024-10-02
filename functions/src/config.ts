interface Config{
    apiUrl: string;
    otherSettings?: any;
}

export const developmentConfig: Config = {
    apiUrl: "https://localhost:5001/"
}
export const productionConfig: Config = {
    apiUrl: ""
}