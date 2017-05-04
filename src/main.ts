import { WebApp } from "n-web";
import { DefaultController } from "./controllers/default-controller";
import { ConfigurationManager } from "n-config";


console.log("mode", ConfigurationManager.getConfig("mode"));

const app = new WebApp(ConfigurationManager.getConfig<number>("port"))
    .useViewResolutionRoot("src/controllers")
    .registerStaticFilePaths("src/client/dist")
    .registerControllers(DefaultController);
    


app.bootstrap();


