import { Injectable } from "@angular/core";
import { CanLoad } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Injectable()
export class LoggedInLazyLoadGuard implements CanLoad {
    constructor(private _routerExtensions: RouterExtensions) { }

    canLoad(): boolean {
        this._routerExtensions.navigate(["login"], { clearHistory: true });
        return true;
    }
}