import { WebApp } from "n-web";
import { DefaultController } from "./controllers/default-controller";
import { ConfigurationManager } from "n-config";


const app = new WebApp(ConfigurationManager.getConfig<number>("port"))
    .useViewResolutionRoot("src/controllers")
    .registerControllers(DefaultController);

ConfigurationManager.getConfig<string>("mode") === "dev"
    ? app.registerStaticFilePaths("/")
    : app.registerStaticFilePaths("src/client/dist");

app.bootstrap();


