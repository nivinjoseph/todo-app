import { Controller, httpGet, route, view, TemplateBundle, ScriptBundle } from "n-web";


@route("/")
@httpGet
@view("default-view")
export class DefaultController extends Controller
{
    public execute(): Promise<any>
    {
        let templates = new TemplateBundle("templates");
        templates.includeDir("src/client");

        let scripts = new ScriptBundle("scripts");
        scripts.includeFile("src/client/dist/bundle.js");

        return Promise.resolve({
            templates: templates.render(),
            scripts: scripts.render()
        });
    }
}