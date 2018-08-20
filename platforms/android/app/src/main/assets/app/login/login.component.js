"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var core_2 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_routerExtensions, zone, page) {
        this._routerExtensions = _routerExtensions;
        this.zone = zone;
        this.page = page;
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.className = "page-login-container";
        this.page.statusBarStyle = "dark";
    }
    LoginComponent.prototype.login = function () {
        this.navigateHome();
    };
    LoginComponent.prototype.navigateHome = function () {
        var _this = this;
        this.zone.run(function () {
            _this._routerExtensions.navigate(["home"], {
                clearHistory: true,
                animated: true,
                transition: {
                    name: "slideTop",
                    duration: 350,
                    curve: "ease"
                }
            });
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, core_2.NgZone, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNEQUErRDtBQUMvRCxzQ0FBdUM7QUFDdkMsaURBQStDO0FBTy9DO0lBRUksd0JBQW9CLGlCQUFtQyxFQUFVLElBQVksRUFBVSxJQUFVO1FBQTdFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUM3RixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO0lBQ3RDLENBQUM7SUFDRCw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxxQ0FBWSxHQUFwQjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDVixLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3RDLFlBQVksRUFBRSxJQUFJO2dCQUNsQixRQUFRLEVBQUUsSUFBSTtnQkFDZCxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFFBQVEsRUFBRSxHQUFHO29CQUNiLEtBQUssRUFBRSxNQUFNO2lCQUNoQjthQUNKLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXhCUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQUd1Qyx5QkFBZ0IsRUFBZ0IsYUFBTSxFQUFnQixXQUFJO09BRnhGLGNBQWMsQ0F5QjFCO0lBQUQscUJBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibG9naW5cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cclxuICB9KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhZ2UuY2xhc3NOYW1lID0gXCJwYWdlLWxvZ2luLWNvbnRhaW5lclwiO1xyXG4gICAgICAgIHRoaXMucGFnZS5zdGF0dXNCYXJTdHlsZSA9IFwiZGFya1wiO1xyXG4gICAgfVxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZUhvbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5hdmlnYXRlSG9tZSgpIHtcclxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJob21lXCJdLCB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlVG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDM1MCxcclxuICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=