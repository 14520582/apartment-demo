"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var LoggedInLazyLoadGuard = /** @class */ (function () {
    function LoggedInLazyLoadGuard(_routerExtensions) {
        this._routerExtensions = _routerExtensions;
    }
    LoggedInLazyLoadGuard.prototype.canLoad = function () {
        this._routerExtensions.navigate(["login"], { clearHistory: true });
        return true;
    };
    LoggedInLazyLoadGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], LoggedInLazyLoadGuard);
    return LoggedInLazyLoadGuard;
}());
exports.LoggedInLazyLoadGuard = LoggedInLazyLoadGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VkLWluLWxhenktbG9hZC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2dlZC1pbi1sYXp5LWxvYWQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0Msc0RBQStEO0FBRy9EO0lBQ0ksK0JBQW9CLGlCQUFtQztRQUFuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO0lBQUksQ0FBQztJQUU1RCx1Q0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkUsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBTlEscUJBQXFCO1FBRGpDLGlCQUFVLEVBQUU7eUNBRThCLHlCQUFnQjtPQUQ5QyxxQkFBcUIsQ0FPakM7SUFBRCw0QkFBQztDQUFBLEFBUEQsSUFPQztBQVBZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDYW5Mb2FkIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9nZ2VkSW5MYXp5TG9hZEd1YXJkIGltcGxlbWVudHMgQ2FuTG9hZCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgICBjYW5Mb2FkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wibG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59Il19