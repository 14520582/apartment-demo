/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/ml_parser/xml_tags", ["require", "exports", "@angular/compiler/src/ml_parser/tags"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tags_1 = require("@angular/compiler/src/ml_parser/tags");
    var XmlTagDefinition = /** @class */ (function () {
        function XmlTagDefinition() {
            this.closedByParent = false;
            this.contentType = tags_1.TagContentType.PARSABLE_DATA;
            this.isVoid = false;
            this.ignoreFirstLf = false;
            this.canSelfClose = true;
        }
        XmlTagDefinition.prototype.requireExtraParent = function (currentParent) { return false; };
        XmlTagDefinition.prototype.isClosedByChild = function (name) { return false; };
        return XmlTagDefinition;
    }());
    exports.XmlTagDefinition = XmlTagDefinition;
    var _TAG_DEFINITION = new XmlTagDefinition();
    function getXmlTagDefinition(tagName) {
        return _TAG_DEFINITION;
    }
    exports.getXmlTagDefinition = getXmlTagDefinition;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG1sX3RhZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvbWxfcGFyc2VyL3htbF90YWdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsNkRBQXFEO0lBRXJEO1FBQUE7WUFDRSxtQkFBYyxHQUFZLEtBQUssQ0FBQztZQU9oQyxnQkFBVyxHQUFtQixxQkFBYyxDQUFDLGFBQWEsQ0FBQztZQUMzRCxXQUFNLEdBQVksS0FBSyxDQUFDO1lBQ3hCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1lBQy9CLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBSy9CLENBQUM7UUFIQyw2Q0FBa0IsR0FBbEIsVUFBbUIsYUFBcUIsSUFBYSxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFcEUsMENBQWUsR0FBZixVQUFnQixJQUFZLElBQWEsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFELHVCQUFDO0lBQUQsQ0FBQyxBQWhCRCxJQWdCQztJQWhCWSw0Q0FBZ0I7SUFrQjdCLElBQU0sZUFBZSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztJQUUvQyw2QkFBb0MsT0FBZTtRQUNqRCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBRkQsa0RBRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7VGFnQ29udGVudFR5cGUsIFRhZ0RlZmluaXRpb259IGZyb20gJy4vdGFncyc7XG5cbmV4cG9ydCBjbGFzcyBYbWxUYWdEZWZpbml0aW9uIGltcGxlbWVudHMgVGFnRGVmaW5pdGlvbiB7XG4gIGNsb3NlZEJ5UGFyZW50OiBib29sZWFuID0gZmFsc2U7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICByZXF1aXJlZFBhcmVudHMgIToge1trZXk6IHN0cmluZ106IGJvb2xlYW59O1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcGFyZW50VG9BZGQgITogc3RyaW5nO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgaW1wbGljaXROYW1lc3BhY2VQcmVmaXggITogc3RyaW5nO1xuICBjb250ZW50VHlwZTogVGFnQ29udGVudFR5cGUgPSBUYWdDb250ZW50VHlwZS5QQVJTQUJMRV9EQVRBO1xuICBpc1ZvaWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaWdub3JlRmlyc3RMZjogYm9vbGVhbiA9IGZhbHNlO1xuICBjYW5TZWxmQ2xvc2U6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHJlcXVpcmVFeHRyYVBhcmVudChjdXJyZW50UGFyZW50OiBzdHJpbmcpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaXNDbG9zZWRCeUNoaWxkKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cbn1cblxuY29uc3QgX1RBR19ERUZJTklUSU9OID0gbmV3IFhtbFRhZ0RlZmluaXRpb24oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFhtbFRhZ0RlZmluaXRpb24odGFnTmFtZTogc3RyaW5nKTogWG1sVGFnRGVmaW5pdGlvbiB7XG4gIHJldHVybiBfVEFHX0RFRklOSVRJT047XG59XG4iXX0=