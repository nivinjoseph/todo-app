import { Controller, httpGet, httpRoute, view, viewLayout } from "n-web";

@httpRoute("/Home?{name: string}")
@httpGet
@view("src/controllers/home/home-view.html")    
@viewLayout("src/controllers/layout.html")    
export class HomeController extends Controller
{
    public execute(name: string): Promise<any>
    {
        return Promise.resolve({ name, age: 31 });
    }
}