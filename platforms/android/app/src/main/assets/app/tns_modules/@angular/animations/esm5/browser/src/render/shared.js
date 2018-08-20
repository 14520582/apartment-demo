import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AUTO_STYLE, NoopAnimationPlayer, ɵAnimationGroupPlayer, ɵPRE_STYLE as PRE_STYLE } from '@angular/animations';
export function isBrowser() {
    return (typeof window !== 'undefined' && typeof window.document !== 'undefined');
}
export function isNode() {
    return (typeof process !== 'undefined');
}
export function optimizeGroupPlayer(players) {
    switch (players.length) {
        case 0:
            return new NoopAnimationPlayer();
        case 1:
            return players[0];
        default:
            return new ɵAnimationGroupPlayer(players);
    }
}
export function normalizeKeyframes(driver, normalizer, element, keyframes, preStyles, postStyles) {
    if (preStyles === void 0) { preStyles = {}; }
    if (postStyles === void 0) { postStyles = {}; }
    var errors = [];
    var normalizedKeyframes = [];
    var previousOffset = -1;
    var previousKeyframe = null;
    keyframes.forEach(function (kf) {
        var offset = kf['offset'];
        var isSameOffset = offset == previousOffset;
        var normalizedKeyframe = (isSameOffset && previousKeyframe) || {};
        Object.keys(kf).forEach(function (prop) {
            var normalizedProp = prop;
            var normalizedValue = kf[prop];
            if (prop !== 'offset') {
                normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
                switch (normalizedValue) {
                    case PRE_STYLE:
                        normalizedValue = preStyles[prop];
                        break;
                    case AUTO_STYLE:
                        normalizedValue = postStyles[prop];
                        break;
                    default:
                        normalizedValue =
                            normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
                        break;
                }
            }
            normalizedKeyframe[normalizedProp] = normalizedValue;
        });
        if (!isSameOffset) {
            normalizedKeyframes.push(normalizedKeyframe);
        }
        previousKeyframe = normalizedKeyframe;
        previousOffset = offset;
    });
    if (errors.length) {
        var LINE_START = '\n - ';
        throw new Error("Unable to animate due to the following errors:" + LINE_START + errors.join(LINE_START));
    }
    return normalizedKeyframes;
}
export function listenOnPlayer(player, eventName, event, callback) {
    switch (eventName) {
        case 'start':
            player.onStart(function () { return callback(event && copyAnimationEvent(event, 'start', player)); });
            break;
        case 'done':
            player.onDone(function () { return callback(event && copyAnimationEvent(event, 'done', player)); });
            break;
        case 'destroy':
            player.onDestroy(function () { return callback(event && copyAnimationEvent(event, 'destroy', player)); });
            break;
    }
}
export function copyAnimationEvent(e, phaseName, player) {
    var totalTime = player.totalTime;
    var disabled = player.disabled ? true : false;
    var event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == undefined ? e.totalTime : totalTime, disabled);
    var data = e['_data'];
    if (data != null) {
        event['_data'] = data;
    }
    return event;
}
export function makeAnimationEvent(element, triggerName, fromState, toState, phaseName, totalTime, disabled) {
    if (phaseName === void 0) { phaseName = ''; }
    if (totalTime === void 0) { totalTime = 0; }
    return { element: element, triggerName: triggerName, fromState: fromState, toState: toState, phaseName: phaseName, totalTime: totalTime, disabled: !!disabled };
}
export function getOrSetAsInMap(map, key, defaultValue) {
    var value;
    if (map instanceof Map) {
        value = map.get(key);
        if (!value) {
            map.set(key, value = defaultValue);
        }
    }
    else {
        value = map[key];
        if (!value) {
            value = map[key] = defaultValue;
        }
    }
    return value;
}
export function parseTimelineCommand(command) {
    var separatorPos = command.indexOf(':');
    var id = command.substring(1, separatorPos);
    var action = command.substr(separatorPos + 1);
    return [id, action];
}
var _contains = function (elm1, elm2) { return false; };
var ɵ0 = _contains;
var _matches = function (element, selector) {
    return false;
};
var ɵ1 = _matches;
var _query = function (element, selector, multi) {
    return [];
};
var ɵ2 = _query;
// Define utility methods for browsers and platform-server(domino) where Element
// and utility methods exist.
var _isNode = isNode();
if (_isNode || typeof Element !== 'undefined') {
    // this is well supported in all browsers
    _contains = function (elm1, elm2) { return elm1.contains(elm2); };
    if (_isNode || Element.prototype.matches) {
        _matches = function (element, selector) { return element.matches(selector); };
    }
    else {
        var proto = Element.prototype;
        var fn_1 = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector ||
            proto.oMatchesSelector || proto.webkitMatchesSelector;
        if (fn_1) {
            _matches = function (element, selector) { return fn_1.apply(element, [selector]); };
        }
    }
    _query = function (element, selector, multi) {
        var results = [];
        if (multi) {
            results.push.apply(results, tslib_1.__spread(element.querySelectorAll(selector)));
        }
        else {
            var elm = element.querySelector(selector);
            if (elm) {
                results.push(elm);
            }
        }
        return results;
    };
}
function containsVendorPrefix(prop) {
    // Webkit is the only real popular vendor prefix nowadays
    // cc: http://shouldiprefix.com/
    return prop.substring(1, 6) == 'ebkit'; // webkit or Webkit
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
export function validateStyleProperty(prop) {
    if (!_CACHED_BODY) {
        _CACHED_BODY = getBodyNode() || {};
        _IS_WEBKIT = _CACHED_BODY.style ? ('WebkitAppearance' in _CACHED_BODY.style) : false;
    }
    var result = true;
    if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
        result = prop in _CACHED_BODY.style;
        if (!result && _IS_WEBKIT) {
            var camelProp = 'Webkit' + prop.charAt(0).toUpperCase() + prop.substr(1);
            result = camelProp in _CACHED_BODY.style;
        }
    }
    return result;
}
export function getBodyNode() {
    if (typeof document != 'undefined') {
        return document.body;
    }
    return null;
}
export var matchesElement = _matches;
export var containsElement = _contains;
export var invokeQuery = _query;
export function hypenatePropsObject(object) {
    var newObj = {};
    Object.keys(object).forEach(function (prop) {
        var newProp = prop.replace(/([a-z])([A-Z])/g, '$1-$2');
        newObj[newProp] = object[prop];
    });
    return newObj;
}
export { ɵ0, ɵ1, ɵ2 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5pbWF0aW9ucy9icm93c2VyL3NyYy9yZW5kZXIvc2hhcmVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUMsVUFBVSxFQUFtQyxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxVQUFVLElBQUksU0FBUyxFQUFhLE1BQU0scUJBQXFCLENBQUM7QUFLakssTUFBTTtJQUNKLE9BQU8sQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDO0FBQ25GLENBQUM7QUFFRCxNQUFNO0lBQ0osT0FBTyxDQUFDLE9BQU8sT0FBTyxLQUFLLFdBQVcsQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFRCxNQUFNLDhCQUE4QixPQUEwQjtJQUM1RCxRQUFRLE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFDdEIsS0FBSyxDQUFDO1lBQ0osT0FBTyxJQUFJLG1CQUFtQixFQUFFLENBQUM7UUFDbkMsS0FBSyxDQUFDO1lBQ0osT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEI7WUFDRSxPQUFPLElBQUkscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDN0M7QUFDSCxDQUFDO0FBRUQsTUFBTSw2QkFDRixNQUF1QixFQUFFLFVBQW9DLEVBQUUsT0FBWSxFQUMzRSxTQUF1QixFQUFFLFNBQTBCLEVBQ25ELFVBQTJCO0lBREYsMEJBQUEsRUFBQSxjQUEwQjtJQUNuRCwyQkFBQSxFQUFBLGVBQTJCO0lBQzdCLElBQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixJQUFNLG1CQUFtQixHQUFpQixFQUFFLENBQUM7SUFDN0MsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEIsSUFBSSxnQkFBZ0Is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QyxNQUFNLENBQUMsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDO0FBRWxDLE1BQU0sOEJBQThCLE1BQTRCO0lBQzlELElBQU0sTUFBTSxHQUF5QixFQUFFLENBQUM7SUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1FBQzlCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0FVVE9fU1RZTEUsIEFuaW1hdGlvbkV2ZW50LCBBbmltYXRpb25QbGF5ZXIsIE5vb3BBbmltYXRpb25QbGF5ZXIsIMm1QW5pbWF0aW9uR3JvdXBQbGF5ZXIsIMm1UFJFX1NUWUxFIGFzIFBSRV9TVFlMRSwgybVTdHlsZURhdGF9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQge0FuaW1hdGlvblN0eWxlTm9ybWFsaXplcn0gZnJvbSAnLi4vLi4vc3JjL2RzbC9zdHlsZV9ub3JtYWxpemF0aW9uL2FuaW1hdGlvbl9zdHlsZV9ub3JtYWxpemVyJztcbmltcG9ydCB7QW5pbWF0aW9uRHJpdmVyfSBmcm9tICcuLi8uLi9zcmMvcmVuZGVyL2FuaW1hdGlvbl9kcml2ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNCcm93c2VyKCkge1xuICByZXR1cm4gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZSgpIHtcbiAgcmV0dXJuICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3B0aW1pemVHcm91cFBsYXllcihwbGF5ZXJzOiBBbmltYXRpb25QbGF5ZXJbXSk6IEFuaW1hdGlvblBsYXllciB7XG4gIHN3aXRjaCAocGxheWVycy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gbmV3IE5vb3BBbmltYXRpb25QbGF5ZXIoKTtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gcGxheWVyc1swXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG5ldyDJtUFuaW1hdGlvbkdyb3VwUGxheWVyKHBsYXllcnMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVLZXlmcmFtZXMoXG4gICAgZHJpdmVyOiBBbmltYXRpb25Ecml2ZXIsIG5vcm1hbGl6ZXI6IEFuaW1hdGlvblN0eWxlTm9ybWFsaXplciwgZWxlbWVudDogYW55LFxuICAgIGtleWZyYW1lczogybVTdHlsZURhdGFbXSwgcHJlU3R5bGVzOiDJtVN0eWxlRGF0YSA9IHt9LFxuICAgIHBvc3RTdHlsZXM6IMm1U3R5bGVEYXRhID0ge30pOiDJtVN0eWxlRGF0YVtdIHtcbiAgY29uc3QgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBub3JtYWxpemVkS2V5ZnJhbWVzOiDJtVN0eWxlRGF0YVtdID0gW107XG4gIGxldCBwcmV2aW91c09mZnNldCA9IC0xO1xuICBsZXQgcHJldmlvdXNLZXlmcmFtZTogybVTdHlsZURhdGF8bnVsbCA9IG51bGw7XG4gIGtleWZyYW1lcy5mb3JFYWNoKGtmID0+IHtcbiAgICBjb25zdCBvZmZzZXQgPSBrZlsnb2Zmc2V0J10gYXMgbnVtYmVyO1xuICAgIGNvbnN0IGlzU2FtZU9mZnNldCA9IG9mZnNldCA9PSBwcmV2aW91c09mZnNldDtcbiAgICBjb25zdCBub3JtYWxpemVkS2V5ZnJhbWU6IMm1U3R5bGVEYXRhID0gKGlzU2FtZU9mZnNldCAmJiBwcmV2aW91c0tleWZyYW1lKSB8fCB7fTtcbiAgICBPYmplY3Qua2V5cyhrZikuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgIGxldCBub3JtYWxpemVkUHJvcCA9IHByb3A7XG4gICAgICBsZXQgbm9ybWFsaXplZFZhbHVlID0ga2ZbcHJvcF07XG4gICAgICBpZiAocHJvcCAhPT0gJ29mZnNldCcpIHtcbiAgICAgICAgbm9ybWFsaXplZFByb3AgPSBub3JtYWxpemVyLm5vcm1hbGl6ZVByb3BlcnR5TmFtZShub3JtYWxpemVkUHJvcCwgZXJyb3JzKTtcbiAgICAgICAgc3dpdGNoIChub3JtYWxpemVkVmFsdWUpIHtcbiAgICAgICAgICBjYXNlIFBSRV9TVFlMRTpcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRWYWx1ZSA9IHByZVN0eWxlc1twcm9wXTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBBVVRPX1NUWUxFOlxuICAgICAgICAgICAgbm9ybWFsaXplZFZhbHVlID0gcG9zdFN0eWxlc1twcm9wXTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRWYWx1ZSA9XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplci5ub3JtYWxpemVTdHlsZVZhbHVlKHByb3AsIG5vcm1hbGl6ZWRQcm9wLCBub3JtYWxpemVkVmFsdWUsIGVycm9ycyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbm9ybWFsaXplZEtleWZyYW1lW25vcm1hbGl6ZWRQcm9wXSA9IG5vcm1hbGl6ZWRWYWx1ZTtcbiAgICB9KTtcbiAgICBpZiAoIWlzU2FtZU9mZnNldCkge1xuICAgICAgbm9ybWFsaXplZEtleWZyYW1lcy5wdXNoKG5vcm1hbGl6ZWRLZXlmcmFtZSk7XG4gICAgfVxuICAgIHByZXZpb3VzS2V5ZnJhbWUgPSBub3JtYWxpemVkS2V5ZnJhbWU7XG4gICAgcHJldmlvdXNPZmZzZXQgPSBvZmZzZXQ7XG4gIH0pO1xuICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgIGNvbnN0IExJTkVfU1RBUlQgPSAnXFxuIC0gJztcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBVbmFibGUgdG8gYW5pbWF0ZSBkdWUgdG8gdGhlIGZvbGxvd2luZyBlcnJvcnM6JHtMSU5FX1NUQVJUfSR7ZXJyb3JzLmpvaW4oTElORV9TVEFSVCl9YCk7XG4gIH1cblxuICByZXR1cm4gbm9ybWFsaXplZEtleWZyYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3Rlbk9uUGxheWVyKFxuICAgIHBsYXllcjogQW5pbWF0aW9uUGxheWVyLCBldmVudE5hbWU6IHN0cmluZywgZXZlbnQ6IEFuaW1hdGlvbkV2ZW50IHwgdW5kZWZpbmVkLFxuICAgIGNhbGxiYWNrOiAoZXZlbnQ6IGFueSkgPT4gYW55KSB7XG4gIHN3aXRjaCAoZXZlbnROYW1lKSB7XG4gICAgY2FzZSAnc3RhcnQnOlxuICAgICAgcGxheWVyLm9uU3RhcnQoKCkgPT4gY2FsbGJhY2soZXZlbnQgJiYgY29weUFuaW1hdGlvbkV2ZW50KGV2ZW50LCAnc3RhcnQnLCBwbGF5ZXIpKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkb25lJzpcbiAgICAgIHBsYXllci5vbkRvbmUoKCkgPT4gY2FsbGJhY2soZXZlbnQgJiYgY29weUFuaW1hdGlvbkV2ZW50KGV2ZW50LCAnZG9uZScsIHBsYXllcikpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Rlc3Ryb3knOlxuICAgICAgcGxheWVyLm9uRGVzdHJveSgoKSA9PiBjYWxsYmFjayhldmVudCAmJiBjb3B5QW5pbWF0aW9uRXZlbnQoZXZlbnQsICdkZXN0cm95JywgcGxheWVyKSkpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlBbmltYXRpb25FdmVudChcbiAgICBlOiBBbmltYXRpb25FdmVudCwgcGhhc2VOYW1lOiBzdHJpbmcsIHBsYXllcjogQW5pbWF0aW9uUGxheWVyKTogQW5pbWF0aW9uRXZlbnQge1xuICBjb25zdCB0b3RhbFRpbWUgPSBwbGF5ZXIudG90YWxUaW1lO1xuICBjb25zdCBkaXNhYmxlZCA9IChwbGF5ZXIgYXMgYW55KS5kaXNhYmxlZCA/IHRydWUgOiBmYWxzZTtcbiAgY29uc3QgZXZlbnQgPSBtYWtlQW5pbWF0aW9uRXZlbnQoXG4gICAgICBlLmVsZW1lbnQsIGUudHJpZ2dlck5hbWUsIGUuZnJvbVN0YXRlLCBlLnRvU3RhdGUsIHBoYXNlTmFtZSB8fCBlLnBoYXNlTmFtZSxcbiAgICAgIHRvdGFsVGltZSA9PSB1bmRlZmluZWQgPyBlLnRvdGFsVGltZSA6IHRvdGFsVGltZSwgZGlzYWJsZWQpO1xuICBjb25zdCBkYXRhID0gKGUgYXMgYW55KVsnX2RhdGEnXTtcbiAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgIChldmVudCBhcyBhbnkpWydfZGF0YSddID0gZGF0YTtcbiAgfVxuICByZXR1cm4gZXZlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQW5pbWF0aW9uRXZlbnQoXG4gICAgZWxlbWVudDogYW55LCB0cmlnZ2VyTmFtZTogc3RyaW5nLCBmcm9tU3RhdGU6IHN0cmluZywgdG9TdGF0ZTogc3RyaW5nLCBwaGFzZU5hbWU6IHN0cmluZyA9ICcnLFxuICAgIHRvdGFsVGltZTogbnVtYmVyID0gMCwgZGlzYWJsZWQ/OiBib29sZWFuKTogQW5pbWF0aW9uRXZlbnQge1xuICByZXR1cm4ge2VsZW1lbnQsIHRyaWdnZXJOYW1lLCBmcm9tU3RhdGUsIHRvU3RhdGUsIHBoYXNlTmFtZSwgdG90YWxUaW1lLCBkaXNhYmxlZDogISFkaXNhYmxlZH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPclNldEFzSW5NYXAoXG4gICAgbWFwOiBNYXA8YW55LCBhbnk+fCB7W2tleTogc3RyaW5nXTogYW55fSwga2V5OiBhbnksIGRlZmF1bHRWYWx1ZTogYW55KSB7XG4gIGxldCB2YWx1ZTogYW55O1xuICBpZiAobWFwIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgdmFsdWUgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgbWFwLnNldChrZXksIHZhbHVlID0gZGVmYXVsdFZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgPSBtYXBba2V5XTtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG1hcFtrZXldID0gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRpbWVsaW5lQ29tbWFuZChjb21tYW5kOiBzdHJpbmcpOiBbc3RyaW5nLCBzdHJpbmddIHtcbiAgY29uc3Qgc2VwYXJhdG9yUG9zID0gY29tbWFuZC5pbmRleE9mKCc6Jyk7XG4gIGNvbnN0IGlkID0gY29tbWFuZC5zdWJzdHJpbmcoMSwgc2VwYXJhdG9yUG9zKTtcbiAgY29uc3QgYWN0aW9uID0gY29tbWFuZC5zdWJzdHIoc2VwYXJhdG9yUG9zICsgMSk7XG4gIHJldHVybiBbaWQsIGFjdGlvbl07XG59XG5cbmxldCBfY29udGFpbnM6IChlbG0xOiBhbnksIGVsbTI6IGFueSkgPT4gYm9vbGVhbiA9IChlbG0xOiBhbnksIGVsbTI6IGFueSkgPT4gZmFsc2U7XG5sZXQgX21hdGNoZXM6IChlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpID0+IGJvb2xlYW4gPSAoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nKSA9PlxuICAgIGZhbHNlO1xubGV0IF9xdWVyeTogKGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZywgbXVsdGk6IGJvb2xlYW4pID0+IGFueVtdID1cbiAgICAoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nLCBtdWx0aTogYm9vbGVhbikgPT4ge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH07XG5cbi8vIERlZmluZSB1dGlsaXR5IG1ldGhvZHMgZm9yIGJyb3dzZXJzIGFuZCBwbGF0Zm9ybS1zZXJ2ZXIoZG9taW5vKSB3aGVyZSBFbGVtZW50XG4vLyBhbmQgdXRpbGl0eSBtZXRob2RzIGV4aXN0LlxuY29uc3QgX2lzTm9kZSA9IGlzTm9kZSgpO1xuaWYgKF9pc05vZGUgfHwgdHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIHRoaXMgaXMgd2VsbCBzdXBwb3J0ZWQgaW4gYWxsIGJyb3dzZXJzXG4gIF9jb250YWlucyA9IChlbG0xOiBhbnksIGVsbTI6IGFueSkgPT4geyByZXR1cm4gZWxtMS5jb250YWlucyhlbG0yKSBhcyBib29sZWFuOyB9O1xuXG4gIGlmIChfaXNOb2RlIHx8IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICBfbWF0Y2hlcyA9IChlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpID0+IGVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZSBhcyBhbnk7XG4gICAgY29uc3QgZm4gPSBwcm90by5tYXRjaGVzU2VsZWN0b3IgfHwgcHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8IHByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgIHByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHwgcHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuICAgIGlmIChmbikge1xuICAgICAgX21hdGNoZXMgPSAoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nKSA9PiBmbi5hcHBseShlbGVtZW50LCBbc2VsZWN0b3JdKTtcbiAgICB9XG4gIH1cblxuICBfcXVlcnkgPSAoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nLCBtdWx0aTogYm9vbGVhbik6IGFueVtdID0+IHtcbiAgICBsZXQgcmVzdWx0czogYW55W10gPSBbXTtcbiAgICBpZiAobXVsdGkpIHtcbiAgICAgIHJlc3VsdHMucHVzaCguLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZWxtID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIGlmIChlbG0pIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGVsbSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb250YWluc1ZlbmRvclByZWZpeChwcm9wOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gV2Via2l0IGlzIHRoZSBvbmx5IHJlYWwgcG9wdWxhciB2ZW5kb3IgcHJlZml4IG5vd2FkYXlzXG4gIC8vIGNjOiBodHRwOi8vc2hvdWxkaXByZWZpeC5jb20vXG4gIHJldHVybiBwcm9wLnN1YnN0cmluZygxLCA2KSA9PSAnZWJraXQnOyAgLy8gd2Via2l0IG9yIFdlYmtpdFxufVxuXG5sZXQgX0NBQ0hFRF9CT0RZOiB7c3R5bGU6IGFueX18bnVsbCA9IG51bGw7XG5sZXQgX0lTX1dFQktJVCA9IGZhbHNlO1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU3R5bGVQcm9wZXJ0eShwcm9wOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKCFfQ0FDSEVEX0JPRFkpIHtcbiAgICBfQ0FDSEVEX0JPRFkgPSBnZXRCb2R5Tm9kZSgpIHx8IHt9O1xuICAgIF9JU19XRUJLSVQgPSBfQ0FDSEVEX0JPRFkgIS5zdHlsZSA/ICgnV2Via2l0QXBwZWFyYW5jZScgaW4gX0NBQ0hFRF9CT0RZICEuc3R5bGUpIDogZmFsc2U7XG4gIH1cblxuICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgaWYgKF9DQUNIRURfQk9EWSAhLnN0eWxlICYmICFjb250YWluc1ZlbmRvclByZWZpeChwcm9wKSkge1xuICAgIHJlc3VsdCA9IHByb3AgaW4gX0NBQ0hFRF9CT0RZICEuc3R5bGU7XG4gICAgaWYgKCFyZXN1bHQgJiYgX0lTX1dFQktJVCkge1xuICAgICAgY29uc3QgY2FtZWxQcm9wID0gJ1dlYmtpdCcgKyBwcm9wLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcC5zdWJzdHIoMSk7XG4gICAgICByZXN1bHQgPSBjYW1lbFByb3AgaW4gX0NBQ0hFRF9CT0RZICEuc3R5bGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvZHlOb2RlKCk6IGFueXxudWxsIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlc0VsZW1lbnQgPSBfbWF0Y2hlcztcbmV4cG9ydCBjb25zdCBjb250YWluc0VsZW1lbnQgPSBfY29udGFpbnM7XG5leHBvcnQgY29uc3QgaW52b2tlUXVlcnkgPSBfcXVlcnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBlbmF0ZVByb3BzT2JqZWN0KG9iamVjdDoge1trZXk6IHN0cmluZ106IGFueX0pOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gIGNvbnN0IG5ld09iajoge1trZXk6IHN0cmluZ106IGFueX0gPSB7fTtcbiAgT2JqZWN0LmtleXMob2JqZWN0KS5mb3JFYWNoKHByb3AgPT4ge1xuICAgIGNvbnN0IG5ld1Byb3AgPSBwcm9wLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpO1xuICAgIG5ld09ialtuZXdQcm9wXSA9IG9iamVjdFtwcm9wXTtcbiAgfSk7XG4gIHJldHVybiBuZXdPYmo7XG59XG4iXX0=