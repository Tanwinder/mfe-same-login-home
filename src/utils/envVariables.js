export const envVariables = (val) => {
    const ENV = process.env.NODE_ENV || 'development';
    switch(val) {
        case "REMOTE":
            return ENV === "production" ? "https://mfe-home.netlify.app/": "http://localhost:9000/";
        default:
            return ENV === "production" ? "https://cross-domain-showroom.netlify.app/": "http://localhost:4000/";
    }
}