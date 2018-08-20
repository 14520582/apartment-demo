/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
/**
 * `LocationStrategy` is responsible for representing and reading route state
 * from the browser's URL. Angular provides two strategies:
 * {\@link HashLocationStrategy} and {\@link PathLocationStrategy}.
 *
 * This is used under the hood of the {\@link Location} service.
 *
 * Applications should use the {\@link Router} or {\@link Location} services to
 * interact with application route state.
 *
 * For instance, {\@link HashLocationStrategy} produces URLs like
 * `http://example.com#/foo`, and {\@link PathLocationStrategy} produces
 * `http://example.com/foo` as an equivalent URL.
 *
 * See these two classes for more.
 *
 *
 * @abstract
 */
export class LocationStrategy {
}
if (false) {
    /**
     * @abstract
     * @param {?=} includeHash
     * @return {?}
     */
    LocationStrategy.prototype.path = function (includeHash) { };
    /**
     * @abstract
     * @param {?} internal
     * @return {?}
     */
    LocationStrategy.prototype.prepareExternalUrl = function (internal) { };
    /**
     * @abstract
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @param {?} queryParams
     * @return {?}
     */
    LocationStrategy.prototype.pushState = function (state, title, url, queryParams) { };
    /**
     * @abstract
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @param {?} queryParams
     * @return {?}
     */
    LocationStrategy.prototype.replaceState = function (state, title, url, queryParams) { };
    /**
     * @abstract
     * @return {?}
     */
    LocationStrategy.prototype.forward = function () { };
    /**
     * @abstract
     * @return {?}
     */
    LocationStrategy.prototype.back = function () { };
    /**
     * @abstract
     * @param {?} fn
     * @return {?}
     */
    LocationStrategy.prototype.onPopState = function (fn) { };
    /**
     * @abstract
     * @return {?}
     */
    LocationStrategy.prototype.getBaseHref = function () { };
}
/** *
 * The `APP_BASE_HREF` token represents the base href to be used with the
 * {\@link PathLocationStrategy}.
 *
 * If you're using {\@link PathLocationStrategy}, you must provide a provider to a string
 * representing the URL prefix that should be preserved when generating and recognizing
 * URLs.
 *
 * ### Example
 *
 * ```typescript
 * import {Component, NgModule} from '\@angular/core';
 * import {APP_BASE_HREF} from '\@angular/common';
 *
 * \@NgModule({
 *   providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
 * })
 * class AppModule {}
 * ```
 *
 *
  @type {?} */
export const APP_BASE_HREF = new InjectionToken('appBaseHref');

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25fc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xvY2F0aW9uL2xvY2F0aW9uX3N0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQjdDLE1BQU07Q0FTTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCRCxhQUFhLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBUyxhQUFhLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3Rpb25Ub2tlbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xvY2F0aW9uQ2hhbmdlTGlzdGVuZXJ9IGZyb20gJy4vcGxhdGZvcm1fbG9jYXRpb24nO1xuXG4vKipcbiAqIGBMb2NhdGlvblN0cmF0ZWd5YCBpcyByZXNwb25zaWJsZSBmb3IgcmVwcmVzZW50aW5nIGFuZCByZWFkaW5nIHJvdXRlIHN0YXRlXG4gKiBmcm9tIHRoZSBicm93c2VyJ3MgVVJMLiBBbmd1bGFyIHByb3ZpZGVzIHR3byBzdHJhdGVnaWVzOlxuICoge0BsaW5rIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBhbmQge0BsaW5rIFBhdGhMb2NhdGlvblN0cmF0ZWd5fS5cbiAqXG4gKiBUaGlzIGlzIHVzZWQgdW5kZXIgdGhlIGhvb2Qgb2YgdGhlIHtAbGluayBMb2NhdGlvbn0gc2VydmljZS5cbiAqXG4gKiBBcHBsaWNhdGlvbnMgc2hvdWxkIHVzZSB0aGUge0BsaW5rIFJvdXRlcn0gb3Ige0BsaW5rIExvY2F0aW9ufSBzZXJ2aWNlcyB0b1xuICogaW50ZXJhY3Qgd2l0aCBhcHBsaWNhdGlvbiByb3V0ZSBzdGF0ZS5cbiAqXG4gKiBGb3IgaW5zdGFuY2UsIHtAbGluayBIYXNoTG9jYXRpb25TdHJhdGVneX0gcHJvZHVjZXMgVVJMcyBsaWtlXG4gKiBgaHR0cDovL2V4YW1wbGUuY29tIy9mb29gLCBhbmQge0BsaW5rIFBhdGhMb2NhdGlvblN0cmF0ZWd5fSBwcm9kdWNlc1xuICogYGh0dHA6Ly9leGFtcGxlLmNvbS9mb29gIGFzIGFuIGVxdWl2YWxlbnQgVVJMLlxuICpcbiAqIFNlZSB0aGVzZSB0d28gY2xhc3NlcyBmb3IgbW9yZS5cbiAqXG4gKlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9jYXRpb25TdHJhdGVneSB7XG4gIGFic3RyYWN0IHBhdGgoaW5jbHVkZUhhc2g/OiBib29sZWFuKTogc3RyaW5nO1xuICBhYnN0cmFjdCBwcmVwYXJlRXh0ZXJuYWxVcmwoaW50ZXJuYWw6IHN0cmluZyk6IHN0cmluZztcbiAgYWJzdHJhY3QgcHVzaFN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBxdWVyeVBhcmFtczogc3RyaW5nKTogdm9pZDtcbiAgYWJzdHJhY3QgcmVwbGFjZVN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBxdWVyeVBhcmFtczogc3RyaW5nKTogdm9pZDtcbiAgYWJzdHJhY3QgZm9yd2FyZCgpOiB2b2lkO1xuICBhYnN0cmFjdCBiYWNrKCk6IHZvaWQ7XG4gIGFic3RyYWN0IG9uUG9wU3RhdGUoZm46IExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIpOiB2b2lkO1xuICBhYnN0cmFjdCBnZXRCYXNlSHJlZigpOiBzdHJpbmc7XG59XG5cblxuLyoqXG4gKiBUaGUgYEFQUF9CQVNFX0hSRUZgIHRva2VuIHJlcHJlc2VudHMgdGhlIGJhc2UgaHJlZiB0byBiZSB1c2VkIHdpdGggdGhlXG4gKiB7QGxpbmsgUGF0aExvY2F0aW9uU3RyYXRlZ3l9LlxuICpcbiAqIElmIHlvdSdyZSB1c2luZyB7QGxpbmsgUGF0aExvY2F0aW9uU3RyYXRlZ3l9LCB5b3UgbXVzdCBwcm92aWRlIGEgcHJvdmlkZXIgdG8gYSBzdHJpbmdcbiAqIHJlcHJlc2VudGluZyB0aGUgVVJMIHByZWZpeCB0aGF0IHNob3VsZCBiZSBwcmVzZXJ2ZWQgd2hlbiBnZW5lcmF0aW5nIGFuZCByZWNvZ25pemluZ1xuICogVVJMcy5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7Q29tcG9uZW50LCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKiBpbXBvcnQge0FQUF9CQVNFX0hSRUZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4gKlxuICogQE5nTW9kdWxlKHtcbiAqICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEFQUF9CQVNFX0hSRUYsIHVzZVZhbHVlOiAnL215L2FwcCd9XVxuICogfSlcbiAqIGNsYXNzIEFwcE1vZHVsZSB7fVxuICogYGBgXG4gKlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IEFQUF9CQVNFX0hSRUYgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignYXBwQmFzZUhyZWYnKTtcbiJdfQ==