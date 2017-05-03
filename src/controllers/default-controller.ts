import { Controller, httpGet, route, view, StyleBundle, TemplateBundle, ScriptBundle } from "n-web";


@route("/")
@httpGet
@view("default-view")
export class DefaultController extends Controller
{
    public execute(): Promise<any>
    {
        let styles = new StyleBundle("styles", "src/client/dist/styles", "styles");
        styles
            .include("src/client/dist/styles/bootstrap.css")
            .include("src/client/dist/styles/font-awesome.css")
            .include("src/client/dist/styles/bootstrap-material-design.css")
            .include("src/client/dist/styles/ripples.css")
            .include("src/client/dist/styles/app.css");
        
        let templates = new TemplateBundle("templates");
        templates.include("src/client");

        let scripts = new ScriptBundle("scripts", "src/client/dist/scripts", "scripts");
        scripts
            .include("node_modules/jquery/dist/jquery.js")   
            .include("src/client/dist/scripts/bootstrap.js")
            .include("src/client/dist/scripts/material.js")
            .include("src/client/dist/scripts/ripples.js")
            .include("src/client/dist/scripts/app-bundle.js")
            ;
                
        return Promise.resolve({
            styles: styles.render(),
            templates: templates.render(),
            scripts: scripts.render()
        });
    }
}