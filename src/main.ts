import { WebApp } from "n-web";
import { HomeController } from "./controllers/home/home-controller";


const app = new WebApp(4000)
    // .registerStaticFilePaths("src/views")
    .registerControllers(HomeController);
    
app.bootstrap();

