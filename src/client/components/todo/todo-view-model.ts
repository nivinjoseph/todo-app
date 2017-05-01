import { ComponentViewModel, element, bind, view } from "n-app";
import { Todo } from "../../models/todo";

@element("todo-dir")
@bind("value", "editValue", "deleteValue")    
@view("todo-view")    
export class TodoViewModel extends ComponentViewModel
{
    public get todo(): Todo { return this.ctx["value"]; }
    
    public edit(): void
    {
        this.ctx["editValue"](this.todo);
    }
    
    public delete(): void
    {
        this.ctx["deleteValue"](this.todo);
    }
    
    protected onCreate(): void
    {
        console.log("created", this.todo);
    }
}