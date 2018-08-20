import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoggedInLazyLoadGuard } from "./logged-in-lazy-load.guard";
const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", loadChildren: "./login/login.module#LoginModule"},
    { path: "home", loadChildren: "./home/home.module#HomeModule", canLoad: [LoggedInLazyLoadGuard]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
