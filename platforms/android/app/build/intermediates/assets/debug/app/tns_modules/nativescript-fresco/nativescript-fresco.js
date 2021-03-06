"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./nativescript-fresco-common"));
var commonModule = require("./nativescript-fresco-common");
var utils = require("tns-core-modules/utils/utils");
var types = require("tns-core-modules/utils/types");
var application = require("tns-core-modules/application");
var imageSource = require("tns-core-modules/image-source");
var fs = require("tns-core-modules/file-system");
function initialize(config) {
    if (application.android) {
        if (config && config.isDownsampleEnabled) {
            var imagePipelineConfig = com.facebook.imagepipeline.core.ImagePipelineConfig.newBuilder(application.android.context)
                .setDownsampleEnabled(true)
                .build();
            com.facebook.drawee.backends.pipeline.Fresco.initialize(application.android.context, imagePipelineConfig);
        }
        else {
            com.facebook.drawee.backends.pipeline.Fresco.initialize(application.android.context);
        }
    }
}
exports.initialize = initialize;
function getImagePipeline() {
    if (application.android) {
        var nativePipe = com.facebook.drawee.backends.pipeline.Fresco.getImagePipeline();
        var imagePineLine = new ImagePipeline();
        imagePineLine.android = nativePipe;
        return imagePineLine;
    }
    return null;
}
exports.getImagePipeline = getImagePipeline;
var ImagePipeline = (function () {
    function ImagePipeline() {
    }
    ImagePipeline.prototype.isInDiskCacheSync = function (uri) {
        return this._android.isInDiskCacheSync(android.net.Uri.parse(uri));
    };
    ImagePipeline.prototype.isInBitmapMemoryCache = function (uri) {
        return this._android.isInBitmapMemoryCache(android.net.Uri.parse(uri));
    };
    ImagePipeline.prototype.evictFromMemoryCache = function (uri) {
        this._android.evictFromMemoryCache(android.net.Uri.parse(uri));
    };
    ImagePipeline.prototype.evictFromDiskCache = function (uri) {
        this._android.evictFromDiskCache(android.net.Uri.parse(uri));
    };
    ImagePipeline.prototype.evictFromCache = function (uri) {
        this._android.evictFromCache(android.net.Uri.parse(uri));
    };
    ImagePipeline.prototype.clearCaches = function () {
        this._android.clearCaches();
    };
    ImagePipeline.prototype.clearMemoryCaches = function () {
        this._android.clearMemoryCaches();
    };
    ImagePipeline.prototype.clearDiskCaches = function () {
        this._android.clearDiskCaches();
    };
    Object.defineProperty(ImagePipeline.prototype, "android", {
        get: function () {
            return this._android;
        },
        set: function (value) {
            this._android = value;
        },
        enumerable: true,
        configurable: true
    });
    return ImagePipeline;
}());
exports.ImagePipeline = ImagePipeline;
var FrescoError = (function () {
    function FrescoError(throwable) {
        this._message = throwable.getMessage();
        this._errorType = throwable.getClass().getName();
        this._stringValue = throwable.toString();
    }
    FrescoError.prototype.getMessage = function () {
        return this._message;
    };
    FrescoError.prototype.getErrorType = function () {
        return this._errorType;
    };
    FrescoError.prototype.toString = function () {
        return this._stringValue;
    };
    return FrescoError;
}());
exports.FrescoError = FrescoError;
var ImageInfo = (function () {
    function ImageInfo(imageInfo) {
        this._nativeImageInfo = imageInfo;
    }
    ImageInfo.prototype.getHeight = function () {
        return this._nativeImageInfo.getHeight();
    };
    ImageInfo.prototype.getWidth = function () {
        return this._nativeImageInfo.getWidth();
    };
    ImageInfo.prototype.getQualityInfo = function () {
        return this._nativeImageInfo.getQualityInfo();
    };
    return ImageInfo;
}());
exports.ImageInfo = ImageInfo;
var FinalEventData = (function (_super) {
    __extends(FinalEventData, _super);
    function FinalEventData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FinalEventData.prototype, "imageInfo", {
        get: function () {
            return this._imageInfo;
        },
        set: function (value) {
            this._imageInfo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinalEventData.prototype, "animatable", {
        get: function () {
            return this._animatable;
        },
        set: function (value) {
            this._animatable = value;
        },
        enumerable: true,
        configurable: true
    });
    return FinalEventData;
}(commonModule.EventData));
exports.FinalEventData = FinalEventData;
var IntermediateEventData = (function (_super) {
    __extends(IntermediateEventData, _super);
    function IntermediateEventData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(IntermediateEventData.prototype, "imageInfo", {
        get: function () {
            return this._imageInfo;
        },
        set: function (value) {
            this._imageInfo = value;
        },
        enumerable: true,
        configurable: true
    });
    return IntermediateEventData;
}(commonModule.EventData));
exports.IntermediateEventData = IntermediateEventData;
var FailureEventData = (function (_super) {
    __extends(FailureEventData, _super);
    function FailureEventData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FailureEventData.prototype, "error", {
        get: function () {
            return this._error;
        },
        set: function (value) {
            this._error = value;
        },
        enumerable: true,
        configurable: true
    });
    return FailureEventData;
}(commonModule.EventData));
exports.FailureEventData = FailureEventData;
var FrescoDrawee = (function (_super) {
    __extends(FrescoDrawee, _super);
    function FrescoDrawee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FrescoDrawee.prototype.createNativeView = function () {
        this._android = new com.facebook.drawee.view.SimpleDraweeView(this._context);
        return this._android;
    };
    FrescoDrawee.prototype.initNativeView = function () {
        this.initDrawee();
        this.updateHierarchy();
    };
    FrescoDrawee.prototype.disposeNativeView = function () {
        this._android.setImageURI(null, null);
        this._android = undefined;
    };
    FrescoDrawee.prototype.updateImageUri = function () {
        var imagePipeLine = getImagePipeline();
        var isInCache = imagePipeLine.isInBitmapMemoryCache(this.imageUri);
        if (isInCache) {
            imagePipeLine.evictFromCache(this.imageUri);
            var imageUri = this.imageUri;
            this.imageUri = null;
            this.imageUri = imageUri;
        }
    };
    FrescoDrawee.prototype.onImageUriChanged = function (oldValue, newValue) {
        this.initImage();
    };
    FrescoDrawee.prototype.onPlaceholderImageUriChanged = function (oldValue, newValue) {
        this.updateHierarchy();
    };
    FrescoDrawee.prototype.onFailureImageUriChanged = function (oldValue, newValue) {
        this.updateHierarchy();
    };
    FrescoDrawee.prototype.onActualImageScaleTypeChanged = function (oldValue, newValue) {
        this.updateHierarchy();
    };
    FrescoDrawee.prototype.onFadeDurationChanged = function (oldValue, newValue) {
        this.updateHierarchy();
    };
    FrescoDrawee.prototype.onBackgroundUriChanged = function (oldValue, newValue) {
        this.updateHierarchy();
    };
    FrescoDrawee.prototype.onProgressiveRenderingEnabledChanged = function (oldValue, newValue) {
    };
    FrescoDrawee.prototype.onShowProgressBarChanged = function (oldValue, newValue) {
        this.updateHierarchy();
    };
    FrescoDrawee.prototype.onProgressBarColorChanged = function (oldValue, newValue) {
        this.updateHierarchy();
    };
    FrescoDrawee.prototype.onRoundAsCircleChanged = function (oldValue, newValue) {
        this.updateHierarchy();
    };
    FrescoDrawee.prototype.onRoundTopLeftChanged = function (oldValue, newValue) {
        this.updateHierarchy();
    };
    FrescoDrawee.prototype.onRoundTopRightChanged = function (oldValue, newValue) {
        this.updateHierarchy();
    };
    FrescoDrawee.prototype.onRoundBottomLeftChanged = function (oldValue, newValue) {
        this.updateHierarchy();
    };
    FrescoDrawee.prototype.onRoundBottomRightChanged = function (oldValue, newValue) {
        this.updateHierarchy();
    };
    FrescoDrawee.prototype.onRoundedCornerRadiusChanged = function (oldValue, newValue) {
        this.updateHierarchy();
    };
    FrescoDrawee.prototype.onAutoPlayAnimationsPChanged = function (oldValue, newValue) {
    };
    FrescoDrawee.prototype.onTapToRetryEnabledChanged = function (oldValue, newValue) {
    };
    FrescoDrawee.prototype.onAspectRatioChanged = function (oldValue, newValue) {
        this.initImage();
    };
    FrescoDrawee.prototype.initDrawee = function () {
        this.initImage();
    };
    FrescoDrawee.prototype.initImage = function () {
        if (this._android) {
            this._android.setImageURI(null);
            if (this.imageUri) {
                var uri = void 0;
                if (utils.isFileOrResourcePath(this.imageUri)) {
                    var res = utils.ad.getApplicationContext().getResources();
                    if (!res) {
                        return;
                    }
                    if (this.imageUri.indexOf(utils.RESOURCE_PREFIX) === 0) {
                        var resName = this.imageUri.substr(utils.RESOURCE_PREFIX.length);
                        var identifier = res.getIdentifier(resName, 'drawable', utils.ad.getApplication().getPackageName());
                        if (0 < identifier) {
                            uri = new android.net.Uri.Builder()
                                .scheme(com.facebook.common.util.UriUtil.LOCAL_RESOURCE_SCHEME)
                                .path(java.lang.String.valueOf(identifier))
                                .build();
                        }
                    }
                    else if (this.imageUri.indexOf("~/") === 0) {
                        uri = android.net.Uri.parse("file:" + fs.path.join(fs.knownFolders.currentApp().path, this.imageUri.replace("~/", "")));
                    }
                    else if (this.imageUri.indexOf("/") === 0) {
                        uri = android.net.Uri.parse("file:" + this.imageUri);
                    }
                }
                else {
                    uri = android.net.Uri.parse(this.imageUri);
                }
                if (!uri) {
                    console.log("Error: 'imageUri' not valid: " + this.imageUri);
                    return;
                }
                var progressiveRenderingEnabledValue = this.progressiveRenderingEnabled !== undefined ? this.progressiveRenderingEnabled : false;
                var request = void 0;
                if (this.decodeWidth && this.decodeHeight) {
                    request = com.facebook.imagepipeline.request.ImageRequestBuilder.newBuilderWithSource(uri)
                        .setProgressiveRenderingEnabled(progressiveRenderingEnabledValue)
                        .setResizeOptions(new com.facebook.imagepipeline.common.ResizeOptions(this.decodeWidth, this.decodeHeight))
                        .build();
                }
                else {
                    request = com.facebook.imagepipeline.request.ImageRequestBuilder.newBuilderWithSource(uri)
                        .setProgressiveRenderingEnabled(progressiveRenderingEnabledValue)
                        .build();
                }
                var that_1 = new WeakRef(this);
                var listener = new com.facebook.drawee.controller.ControllerListener({
                    onFinalImageSet: function (id, imageInfo, animatable) {
                        if (that_1 && that_1.get()) {
                            var info = new ImageInfo(imageInfo);
                            var args = {
                                eventName: commonModule.FrescoDrawee.finalImageSetEvent,
                                object: that_1.get(),
                                imageInfo: info,
                                animatable: animatable,
                            };
                            that_1.get().notify(args);
                        }
                        else {
                            console.log("Warning: WeakRef<FrescoDrawee> was GC and no '" + commonModule.FrescoDrawee.finalImageSetEvent + "' callback will be raised.");
                        }
                    },
                    onFailure: function (id, throwable) {
                        if (that_1 && that_1.get()) {
                            var frescoError = new FrescoError(throwable);
                            var args = {
                                eventName: commonModule.FrescoDrawee.failureEvent,
                                object: that_1.get(),
                                error: frescoError
                            };
                            that_1.get().notify(args);
                        }
                        else {
                            console.log("Warning: WeakRef<FrescoDrawee> was GC and no '" + commonModule.FrescoDrawee.failureEvent + "' callback will be raised.");
                        }
                    },
                    onIntermediateImageFailed: function (id, throwable) {
                        if (that_1 && that_1.get()) {
                            var frescoError = new FrescoError(throwable);
                            var args = {
                                eventName: commonModule.FrescoDrawee.intermediateImageFailedEvent,
                                object: that_1.get(),
                                error: frescoError
                            };
                            that_1.get().notify(args);
                        }
                        else {
                            console.log("Warning: WeakRef<FrescoDrawee> was GC and no '" + commonModule.FrescoDrawee.intermediateImageFailedEvent + "' callback will be raised.");
                        }
                    },
                    onIntermediateImageSet: function (id, imageInfo) {
                        if (that_1 && that_1.get()) {
                            var info = new ImageInfo(imageInfo);
                            var args = {
                                eventName: commonModule.FrescoDrawee.intermediateImageSetEvent,
                                object: that_1.get(),
                                imageInfo: info
                            };
                            that_1.get().notify(args);
                        }
                        else {
                            console.log("Warning: WeakRef<FrescoDrawee> was GC and no '" + commonModule.FrescoDrawee.intermediateImageSetEvent + "' callback will be raised.");
                        }
                    },
                    onRelease: function (id) {
                        if (that_1 && that_1.get()) {
                            var args = {
                                eventName: commonModule.FrescoDrawee.releaseEvent,
                                object: that_1.get()
                            };
                            that_1.get().notify(args);
                        }
                        else {
                            console.log("Warning: WeakRef<FrescoDrawee> was GC and no '" + commonModule.FrescoDrawee.releaseEvent + "' callback will be raised.");
                        }
                    },
                    onSubmit: function (id, callerContext) {
                        if (that_1 && that_1.get()) {
                            var args = {
                                eventName: commonModule.FrescoDrawee.submitEvent,
                                object: that_1.get()
                            };
                            that_1.get().notify(args);
                        }
                        else {
                            console.log("Warning: WeakRef<FrescoDrawee> was GC and no 'submitEvent' callback will be raised.");
                        }
                    },
                });
                var builder = com.facebook.drawee.backends.pipeline.Fresco.newDraweeControllerBuilder();
                builder.setImageRequest(request);
                builder.setControllerListener(listener);
                builder.setOldController(this._android.getController());
                if (this.autoPlayAnimations) {
                    builder.setAutoPlayAnimations(this.autoPlayAnimations);
                }
                if (this.tapToRetryEnabled) {
                    builder.setTapToRetryEnabled(this.tapToRetryEnabled);
                }
                var controller = builder.build();
                if (this.aspectRatio) {
                    this._android.setAspectRatio(this.aspectRatio);
                }
                this._android.setController(controller);
            }
        }
    };
    FrescoDrawee.prototype.updateHierarchy = function () {
        if (this._android) {
            var failureImageDrawable = void 0;
            var placeholderImageDrawable = void 0;
            var backgroundDrawable = void 0;
            if (this.failureImageUri) {
                failureImageDrawable = this.getDrawable(this.failureImageUri);
            }
            if (this.placeholderImageUri) {
                placeholderImageDrawable = this.getDrawable(this.placeholderImageUri);
            }
            if (this.backgroundUri) {
                backgroundDrawable = this.getDrawable(this.backgroundUri);
            }
            var builder = new GenericDraweeHierarchyBuilder();
            if (this.failureImageUri && failureImageDrawable) {
                builder.setFailureImage(failureImageDrawable);
            }
            if (this.placeholderImageUri && placeholderImageDrawable) {
                builder.setPlaceholderImage(placeholderImageDrawable);
            }
            if (this.actualImageScaleType) {
                builder.setActualImageScaleType(this.actualImageScaleType);
            }
            if (this.fadeDuration) {
                builder.setFadeDuration(this.fadeDuration);
            }
            if (this.backgroundUri && backgroundDrawable) {
                builder.setBackground(backgroundDrawable);
            }
            if (this.showProgressBar) {
                builder.setProgressBarImage(this.progressBarColor);
            }
            if (this.roundAsCircle) {
                builder.setRoundingParamsAsCircle();
            }
            if (this.roundBottomLeft || this.roundBottomRight || this.roundTopLeft || this.roundTopRight) {
                var topLeftRadius = this.roundTopLeft ? this.roundedCornerRadius : 0;
                var topRightRadius = this.roundTopRight ? this.roundedCornerRadius : 0;
                var bottomRightRadius = this.roundBottomRight ? this.roundedCornerRadius : 0;
                var bottomLeftRadius = this.roundBottomLeft ? this.roundedCornerRadius : 0;
                builder.setCornersRadii(topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius);
            }
            var hierarchy = builder.build();
            this._android.setHierarchy(hierarchy);
        }
    };
    FrescoDrawee.prototype.getDrawable = function (path) {
        var drawable;
        var builder = new GenericDraweeHierarchyBuilder();
        if (utils.isFileOrResourcePath(path)) {
            if (path.indexOf(utils.RESOURCE_PREFIX) === 0) {
                drawable = this.getDrawableFromResource(path);
            }
            else {
                drawable = this.getDrawableFromLocalFile(path);
            }
        }
        return drawable;
    };
    FrescoDrawee.prototype.getDrawableFromLocalFile = function (localFilePath) {
        var img = imageSource.fromFile(localFilePath);
        var drawable = null;
        if (img) {
            drawable = new android.graphics.drawable.BitmapDrawable(utils.ad.getApplicationContext().getResources(), img.android);
        }
        return drawable;
    };
    FrescoDrawee.prototype.getDrawableFromResource = function (resourceName) {
        var img = imageSource.fromResource(resourceName.substr(utils.RESOURCE_PREFIX.length));
        var drawable = null;
        if (img) {
            drawable = new android.graphics.drawable.BitmapDrawable(utils.ad.getApplicationContext().getResources(), img.android);
        }
        return drawable;
    };
    return FrescoDrawee;
}(commonModule.FrescoDrawee));
exports.FrescoDrawee = FrescoDrawee;
var GenericDraweeHierarchyBuilder = (function () {
    function GenericDraweeHierarchyBuilder() {
        var res = application.android.context.getResources();
        this.nativeBuilder = new com.facebook.drawee.generic.GenericDraweeHierarchyBuilder(res);
    }
    GenericDraweeHierarchyBuilder.prototype.setPlaceholderImage = function (drawable) {
        if (!application.android) {
            return null;
        }
        this.nativeBuilder.setPlaceholderImage(drawable);
        return this;
    };
    GenericDraweeHierarchyBuilder.prototype.setFailureImage = function (drawable) {
        if (!application.android) {
            return null;
        }
        this.nativeBuilder.setFailureImage(drawable);
        return this;
    };
    GenericDraweeHierarchyBuilder.prototype.setActualImageScaleType = function (scaleType) {
        if (!application.android) {
            return null;
        }
        this.nativeBuilder.setActualImageScaleType(getScaleType(scaleType));
        return this;
    };
    GenericDraweeHierarchyBuilder.prototype.build = function () {
        if (!application.android) {
            return null;
        }
        return this.nativeBuilder.build();
    };
    GenericDraweeHierarchyBuilder.prototype.setFadeDuration = function (duration) {
        if (!application.android) {
            return null;
        }
        this.nativeBuilder.setFadeDuration(duration);
        return this;
    };
    GenericDraweeHierarchyBuilder.prototype.setBackground = function (drawable) {
        if (!application.android) {
            return null;
        }
        this.nativeBuilder.setBackground(drawable);
        return this;
    };
    GenericDraweeHierarchyBuilder.prototype.setProgressBarImage = function (color) {
        if (!application.android) {
            return null;
        }
        var drawable = new com.facebook.drawee.drawable.ProgressBarDrawable();
        if (color) {
            drawable.setColor(android.graphics.Color.parseColor(color));
        }
        this.nativeBuilder.setProgressBarImage(drawable);
        return this;
    };
    GenericDraweeHierarchyBuilder.prototype.setRoundingParamsAsCircle = function () {
        if (!application.android) {
            return null;
        }
        var params = new com.facebook.drawee.generic.RoundingParams.asCircle();
        this.nativeBuilder.setRoundingParams(params);
        return this;
    };
    GenericDraweeHierarchyBuilder.prototype.setCornersRadii = function (topLeft, topRight, bottomRight, bottomLeft) {
        if (!application.android) {
            return null;
        }
        var params = new com.facebook.drawee.generic.RoundingParams();
        params.setCornersRadii(topLeft, topRight, bottomRight, bottomLeft);
        this.nativeBuilder.setRoundingParams(params);
        return this;
    };
    GenericDraweeHierarchyBuilder.prototype.shutDown = function () {
        this.nativeBuilder.shutDown();
    };
    return GenericDraweeHierarchyBuilder;
}());
function getScaleType(scaleType) {
    if (types.isString(scaleType)) {
        switch (scaleType) {
            case commonModule.ScaleType.Center:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.CENTER;
            case commonModule.ScaleType.CenterCrop:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.CENTER_CROP;
            case commonModule.ScaleType.CenterInside:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.CENTER_INSIDE;
            case commonModule.ScaleType.FitCenter:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.FIT_CENTER;
            case commonModule.ScaleType.FitEnd:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.FIT_END;
            case commonModule.ScaleType.FitStart:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.FIT_START;
            case commonModule.ScaleType.FitXY:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.FIT_XY;
            case commonModule.ScaleType.FocusCrop:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.FOCUS_CROP;
            default:
                break;
        }
    }
}
//# sourceMappingURL=nativescript-fresco.js.map