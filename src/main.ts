import { WebApp } from "n-web";
import { DefaultController } from "./controllers/default-controller";
import { ConfigurationManager } from "n-config";


const app = new WebApp(ConfigurationManager.getConfig<number>("port"))
    .useViewResolutionRoot("src/controllers")
    .registerStaticFilePaths("src/client/dist")
    .registerControllers(DefaultController);

app.bootstrap();


