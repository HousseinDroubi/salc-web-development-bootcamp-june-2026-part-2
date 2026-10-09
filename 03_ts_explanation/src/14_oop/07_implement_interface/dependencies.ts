interface System{
    _theme:boolean;
    _font:string;
    save:()=>void;
}
// Summary: Only public access modifiers are available when dealing implementing interfaces.

class MySystem implements System{
    constructor(public _theme:boolean, public _font:string){
        this._theme = _theme;
        this._font = _font;
    }

    public get theme(){
        return this._theme;
    }

    public get font(){
        return this._font;
    }

    public set theme(theme:boolean){
        this._theme = theme;
    }

    public set font(font:string){
        this._font = font;
    }

    public save = ()=>{
        console.log("Saving stuff");
    }
}

export default MySystem;