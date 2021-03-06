import "tns-core-modules/globals";
import "tns-core-modules/application";
import "./zone-js/dist/zone-nativescript";
import "reflect-metadata";
import "./polyfills/array";
import "./polyfills/console";
import { Type, Injector, CompilerOptions, PlatformRef, NgModuleFactory, NgModuleRef, EventEmitter, Sanitizer, InjectionToken, StaticProvider } from "@angular/core";
import { PageFactory } from "./platform-providers";
import "nativescript-intl";
export declare const onBeforeLivesync: EventEmitter<NgModuleRef<any>>;
export declare const onAfterLivesync: EventEmitter<{
    moduleRef?: NgModuleRef<any>;
    error?: Error;
}>;
export interface AppOptions {
    bootInExistingPage?: boolean;
    cssFile?: string;
    startPageActionBarHidden?: boolean;
    createFrameOnBootstrap?: boolean;
}
export declare type PlatformFactory = (extraProviders?: StaticProvider[]) => PlatformRef;
export declare class NativeScriptSanitizer extends Sanitizer {
    sanitize(_context: any, value: string): string;
}
export declare class NativeScriptDocument {
    body: any;
    createElement(tag: string): void;
}
export declare const COMMON_PROVIDERS: ({
    provide: InjectionToken<PageFactory>;
    useValue: PageFactory;
} | {
    provide: typeof Sanitizer;
    useClass: typeof NativeScriptSanitizer;
    deps: any[];
} | {
    provide: InjectionToken<Document>;
    useClass: typeof NativeScriptDocument;
    deps: any[];
})[];
export declare class NativeScriptPlatformRef extends PlatformRef {
    private platform;
    private appOptions;
    private _bootstrapper;
    constructor(platform: PlatformRef, appOptions?: AppOptions);
    bootstrapModuleFactory<M>(moduleFactory: NgModuleFactory<M>): Promise<NgModuleRef<M>>;
    bootstrapModule<M>(moduleType: Type<M>, compilerOptions?: CompilerOptions | CompilerOptions[]): Promise<NgModuleRef<M>>;
    private bootstrapApp();
    onDestroy(callback: () => void): void;
    readonly injector: Injector;
    destroy(): void;
    readonly destroyed: boolean;
    private bootstrapNativeScriptApp();
    _livesync(): void;
    private createErrorUI(message);
    private createFrameAndPage(isLivesync);
}
