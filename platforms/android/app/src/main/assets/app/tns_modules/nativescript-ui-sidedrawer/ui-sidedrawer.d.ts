export * from "./ui-sidedrawer.common";
import * as commonModule from "./ui-sidedrawer.common";
import { View } from "tns-core-modules/ui/core/view";
import * as colorModule from "tns-core-modules/color";
export declare class RadSideDrawer extends commonModule.RadSideDrawer {
    private _android;
    private _actionBarHeight;
    private _mainContentNativeView;
    private layoutChangeFunction;
    private _androidViewId;
    readonly _nativeView: any;
    private readonly _page;
    onUnloaded(): void;
    onBackPressed(): boolean;
    _addViewToNativeVisualTree(child: View): boolean;
    _removeViewFromNativeVisualTree(child: View): void;
    private initDrawer();
    private getSdkVersion();
    createNativeView(): com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer;
    initNativeView(): void;
    disposeNativeView(): void;
    private onNavigatingFrom(args);
    readonly android: any;
    protected _onGesturesEnabledChanged(oldValue: boolean, newValue: boolean): void;
    protected _onAllowEdgeSwipeChanged(oldValue: boolean, newValue: boolean): void;
    protected _onDrawerContentSizeChanged(oldValue: number, newValue: number): void;
    protected _onDrawerTransitionChanged(oldValue: DrawerTransitionBase, newValue: DrawerTransitionBase): void;
    protected _onShadowColorChanged(oldValue: colorModule.Color, newValue: colorModule.Color): void;
    protected _onDrawerLocationChanged(oldValue: string, newValue: string): void;
    private setDrawerLocation(newLocation);
    closeDrawer(): void;
    showDrawer(): void;
}
export declare class DrawerTransitionBase implements commonModule.DrawerTransitionBase {
    getNativeContent(): any;
}
export declare class FadeTransition extends DrawerTransitionBase {
    getNativeContent(): any;
}
export declare class PushTransition extends DrawerTransitionBase {
    getNativeContent(): any;
}
export declare class RevealTransition extends DrawerTransitionBase {
    getNativeContent(): any;
}
export declare class ReverseSlideOutTransition extends DrawerTransitionBase {
    getNativeContent(): any;
}
export declare class ScaleDownPusherTransition extends DrawerTransitionBase {
    getNativeContent(): any;
}
export declare class ScaleUpTransition extends DrawerTransitionBase {
    getNativeContent(): any;
}
export declare class SlideAlongTransition extends DrawerTransitionBase {
    getNativeContent(): any;
}
export declare class SlideInOnTopTransition extends DrawerTransitionBase {
    getNativeContent(): any;
}
