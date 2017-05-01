import { PageViewModel, route, view } from "n-app";
import * as Routes from "./../routes";

@route(Routes.updateTodo)
@view("todos-view")
export class UpdateTodoViewModel extends PageViewModel
{
    
}