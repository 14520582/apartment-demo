import { Component } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { NgZone } from "@angular/core";
import { Page } from "tns-core-modules/ui/page"
@Component({
    selector: "login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
  })
export class LoginComponent {
  
    constructor(private _routerExtensions: RouterExtensions, private zone: NgZone, private page: Page) {
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.className = "page-login-container";
        this.page.statusBarStyle = "dark";
    }
    login() {
        this.navigateHome();
    }

    private navigateHome() {
        this.zone.run(() => {
            this._routerExtensions.navigate(["home"], {
                clearHistory: true,
                animated: true,
                transition: {
                    name: "slideTop",
                    duration: 350,
                    curve: "ease"
                }
            });
        });
    }
}