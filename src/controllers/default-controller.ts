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

        return Promise.resolve({ templates: templates.render() });
    }
}