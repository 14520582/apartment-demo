Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("tns-core-modules/ui/core/view");
var view_2 = require("tns-core-modules/ui/core/view");
var enums = require("tns-core-modules/ui/enums");
var utils = require("tns-core-modules/utils/utils");
var knownCollections;
(function (knownCollections) {
    knownCollections.properties = "properties";
    knownCollections.groups = "groups";
    knownCollections.validators = "validators";
})(knownCollections = exports.knownCollections || (exports.knownCollections = {}));
/*
* Lists the possible commit modes.
*/
var CommitMode;
(function (CommitMode) {
    CommitMode.Immediate = "Immediate";
    CommitMode.OnLostFocus = "OnLostFocus";
    CommitMode.Manual = "Manual";
})(CommitMode = exports.CommitMode || (exports.CommitMode = {}));
/*
* Lists the possible AutoCompleteInline editor display modes.
*/
var AutoCompleteDisplayMode;
(function (AutoCompleteDisplayMode) {
    AutoCompleteDisplayMode.Plain = "Plain";
    AutoCompleteDisplayMode.Tokens = "Tokens";
})(AutoCompleteDisplayMode = exports.AutoCompleteDisplayMode || (exports.AutoCompleteDisplayMode = {}));
/*
* Lists the possible validation modes.
*/
var ValidationMode;
(function (ValidationMode) {
    ValidationMode.Immediate = "Immediate";
    ValidationMode.OnLostFocus = "OnLostFocus";
    ValidationMode.Manual = "Manual";
})(ValidationMode = exports.ValidationMode || (exports.ValidationMode = {}));
/*
* Lists the possible data form label position modes.
*/
var DataFormLabelPosition;
(function (DataFormLabelPosition) {
    DataFormLabelPosition.Left = "Left";
    DataFormLabelPosition.Top = "Top";
})(DataFormLabelPosition = exports.DataFormLabelPosition || (exports.DataFormLabelPosition = {}));
/*
* Lists the possible editors.
*/
var EditorType;
(function (EditorType) {
    EditorType.Text = "Text";
    EditorType.MultilineText = "MultilineText";
    EditorType.Email = "Email";
    EditorType.Password = "Password";
    EditorType.Phone = "Phone";
    EditorType.Decimal = "Decimal";
    // tslint:disable-next-line:variable-name
    EditorType.Number = "Number";
    EditorType.Switch = "Switch";
    EditorType.Stepper = "Stepper";
    EditorType.Slider = "Slider";
    EditorType.SegmentedEditor = "SegmentedEditor";
    EditorType.DatePicker = "DatePicker";
    EditorType.TimePicker = "TimePicker";
    EditorType.Picker = "Picker";
    EditorType.List = "List";
    EditorType.AutoCompleteInline = "AutoCompleteInline";
    EditorType.Label = "Label";
})(EditorType = exports.EditorType || (exports.EditorType = {}));
/**
 * Font styles
 */
var FontStyles;
(function (FontStyles) {
    FontStyles.Normal = "Normal";
    FontStyles.Bold = "Bold";
    FontStyles.Italic = "Italic";
    FontStyles.BoldItalic = "BoldItalic";
})(FontStyles = exports.FontStyles || (exports.FontStyles = {}));
/**
 * A class that provides common arguments of {@link RadDataForm} events.
 */
var DataFormEventData = /** @class */ (function () {
    function DataFormEventData() {
    }
    return DataFormEventData;
}());
exports.DataFormEventData = DataFormEventData;
/**
 * A class that provides common arguments of {@link CustomPropertyEditor} events.
 */
var DataFormCustomPropertyEditorEventData = /** @class */ (function () {
    function DataFormCustomPropertyEditorEventData() {
    }
    return DataFormCustomPropertyEditorEventData;
}());
exports.DataFormCustomPropertyEditorEventData = DataFormCustomPropertyEditorEventData;
///////////////////////////////////////////////////////////////////////////////
var RadDataForm = /** @class */ (function (_super) {
    __extends(RadDataForm, _super);
    function RadDataForm() {
        var _this = _super.call(this) || this;
        _this.on("bindingContextChange", _this.bindingContextChanged, _this);
        return _this;
    }
    RadDataForm.prototype.disposeNativeView = function () {
        this.entityPropertyChangedHandler = undefined;
        this.groupPropertyChangedHandler = undefined;
        this.groupTitleStylePropertyChangedHandler = undefined;
        this.groupLayoutPropertyChangedHandler = undefined;
    };
    RadDataForm.prototype.notifyValidated = function (propertyName, result) {
    };
    RadDataForm.prototype.onIsReadOnlyPropertyChanged = function (oldValue, newValue) {
        this._onIsReadOnlyPropertyChanged(oldValue, newValue);
    };
    RadDataForm.prototype.onValidationModePropertyChanged = function (oldValue, newValue) {
        this._onValidationModePropertyChanged(oldValue, newValue);
    };
    RadDataForm.prototype.onCommitModePropertyChanged = function (oldValue, newValue) {
        this._onCommitModePropertyChanged(oldValue, newValue);
    };
    RadDataForm.prototype.onSourcePropertyChanged = function (oldValue, newValue) {
        this._onSourcePropertyChanged(oldValue, newValue);
    };
    RadDataForm.prototype.onMetadataPropertyChanged = function (oldValue, newValue) {
        this._onMetadataPropertyChanged(oldValue, newValue);
    };
    RadDataForm.prototype.onGroupsPropertyChanged = function (oldValue, newValue) {
        this._onGroupsPropertyChanged(oldValue, newValue);
    };
    RadDataForm.prototype.onPropertiesPropertyChanged = function (oldValue, newValue) {
        this._onPropertiesPropertyChanged(oldValue, newValue);
    };
    RadDataForm.prototype.bindingContextChanged = function (data) {
        if (this.groups) {
            for (var i = 0; i < this.groups.length; i++) {
                this.groups[i].bindingContext = data.value;
                if (this.groups[i].properties) {
                    for (var j = 0; j < this.groups[i].properties.length; j++) {
                        var entityProperty = this.groups[i].properties[j];
                        entityProperty.bindingContext = data.value;
                    }
                }
            }
        }
        if (this.properties) {
            for (var i = 0; i < this.properties.length; i++) {
                var entityProperty = this.properties[i];
                entityProperty.bindingContext = data.value;
            }
        }
    };
    RadDataForm.prototype._attachEntityPropertyPropertyChangeListener = function (property) {
        var that = new WeakRef(this);
        property.off('indexChange', this.entityPropertyChangedHandler);
        property.off('hiddenChange', this.entityPropertyChangedHandler);
        property.off('editorChange', this.entityPropertyChangedHandler);
        property.off('readOnlyChange', this.entityPropertyChangedHandler);
        property.off('hintTextChange', this.entityPropertyChangedHandler);
        property.off('displayNameChange', this.entityPropertyChangedHandler);
        property.off('valuesProviderChange', this.entityPropertyChangedHandler);
        property.on('indexChange', this.entityPropertyChangedHandler);
        property.on('hiddenChange', this.entityPropertyChangedHandler);
        property.on('editorChange', this.entityPropertyChangedHandler);
        property.on('readOnlyChange', this.entityPropertyChangedHandler);
        property.on('hintTextChange', this.entityPropertyChangedHandler);
        property.on('displayNameChange', this.entityPropertyChangedHandler);
        property.on('valuesProviderChange', this.entityPropertyChangedHandler);
    };
    RadDataForm.prototype._attachGroupLayoutChangeListener = function (oldValue, newValue) {
        if (oldValue) {
            oldValue.off('orientationChange', this.groupLayoutPropertyChangedHandler);
        }
        if (newValue) {
            newValue.on('orientationChange', this.groupLayoutPropertyChangedHandler);
        }
    };
    RadDataForm.prototype._attachGroupTitleStyleChangeListener = function (oldValue, newValue) {
        if (oldValue) {
            oldValue.off('strokeColorChange', this.groupTitleStylePropertyChangedHandler);
            oldValue.off('strokeWidthChange', this.groupTitleStylePropertyChangedHandler);
            oldValue.off('fillColorChange', this.groupTitleStylePropertyChangedHandler);
            oldValue.off('separatorColorChange', this.groupTitleStylePropertyChangedHandler);
            oldValue.off('labelTextColorChange', this.groupTitleStylePropertyChangedHandler);
            oldValue.off('labelTextSizeChange', this.groupTitleStylePropertyChangedHandler);
            oldValue.off('labelFontNameChange', this.groupTitleStylePropertyChangedHandler);
            oldValue.off('labelFontStyleChange', this.groupTitleStylePropertyChangedHandler);
        }
        if (newValue) {
            newValue.on('strokeColorChange', this.groupTitleStylePropertyChangedHandler);
            newValue.on('strokeWidthChange', this.groupTitleStylePropertyChangedHandler);
            newValue.on('fillColorChange', this.groupTitleStylePropertyChangedHandler);
            newValue.on('separatorColorChange', this.groupTitleStylePropertyChangedHandler);
            newValue.on('labelTextColorChange', this.groupTitleStylePropertyChangedHandler);
            newValue.on('labelTextSizeChange', this.groupTitleStylePropertyChangedHandler);
            newValue.on('labelFontNameChange', this.groupTitleStylePropertyChangedHandler);
            newValue.on('labelFontStyleChange', this.groupTitleStylePropertyChangedHandler);
        }
    };
    RadDataForm.prototype._attachGroupChangeListener = function (group) {
        var that = new WeakRef(this);
        group.off('layoutChange', this.groupPropertyChangedHandler);
        group.off('titleStyleChange', this.groupPropertyChangedHandler);
        group.off('hiddenChange', this.groupPropertyChangedHandler);
        group.off('nameChange', this.groupPropertyChangedHandler);
        group.off('collapsibleChange', this.groupPropertyChangedHandler);
        group.off('collapsedChange', this.groupPropertyChangedHandler);
        group.off('titleHiddenChange', this.groupPropertyChangedHandler);
        group.on('layoutChange', this.groupPropertyChangedHandler);
        group.on('titleStyleChange', this.groupPropertyChangedHandler);
        group.on('hiddenChange', this.groupPropertyChangedHandler);
        group.on('nameChange', this.groupPropertyChangedHandler);
        group.on('collapsibleChange', this.groupPropertyChangedHandler);
        group.on('collapsedChange', this.groupPropertyChangedHandler);
        group.on('titleHiddenChange', this.groupPropertyChangedHandler);
        this._attachGroupLayoutChangeListener(undefined, group.layout);
        this._attachGroupTitleStyleChangeListener(undefined, group.titleStyle);
    };
    RadDataForm.prototype._onIsReadOnlyPropertyChanged = function (oldValue, newValue) { };
    RadDataForm.prototype._onCommitModePropertyChanged = function (oldValue, newValue) { };
    RadDataForm.prototype._onValidationModePropertyChanged = function (oldValue, newValue) { };
    RadDataForm.prototype._onSourcePropertyChanged = function (oldValue, newValue) { };
    RadDataForm.prototype._onMetadataPropertyChanged = function (oldValue, newValue) { };
    RadDataForm.prototype._onGroupsPropertyChanged = function (oldValue, newValue) { };
    RadDataForm.prototype._onPropertiesPropertyChanged = function (oldValue, newValue) { };
    Object.defineProperty(RadDataForm.prototype, "editedObject", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    RadDataForm.prototype._addArrayFromBuilder = function (name, value) {
        if (name === "groups") {
            this.groups = value;
        }
        if (name === "properties") {
            this.properties = value;
        }
    };
    RadDataForm.prototype.getPropertyByName = function (propertyName) {
        if (this.groups) {
            for (var i = 0; i < this.groups.length; i++) {
                if (this.groups[i].properties) {
                    for (var j = 0; j < this.groups[i].properties.length; j++) {
                        var entityProperty = this.groups[i].properties[j];
                        if (entityProperty.name === propertyName) {
                            return entityProperty;
                        }
                    }
                }
            }
        }
        if (this.properties) {
            for (var i = 0; i < this.properties.length; i++) {
                var entityProperty = this.properties[i];
                if (entityProperty.name === propertyName) {
                    return entityProperty;
                }
            }
        }
        return null;
    };
    RadDataForm.prototype.getGroupByName = function (groupName) {
        if (this.groups) {
            for (var i = 0; i < this.groups.length; i++) {
                if (groupName === this.groups[i].name) {
                    return this.groups[i];
                }
            }
        }
        return null;
    };
    RadDataForm.prototype.reload = function () { };
    RadDataForm.prototype.validateAll = function () { return null; };
    RadDataForm.prototype.validateAndCommitAll = function () { return null; };
    RadDataForm.prototype.commitAll = function () { };
    RadDataForm.editorSelectedEvent = "editorSelected";
    RadDataForm.editorDeselectedEvent = "editorDeselected";
    RadDataForm.propertyEditedEvent = "propertyEdited";
    RadDataForm.propertyValidateEvent = "propertyValidate";
    RadDataForm.propertyValidatedEvent = "propertyValidated";
    RadDataForm.editorSetupEvent = "editorSetup";
    RadDataForm.editorUpdateEvent = "editorUpdate";
    RadDataForm.groupUpdateEvent = "groupUpdate";
    RadDataForm.propertyCommitEvent = "propertyCommit";
    RadDataForm.propertyCommittedEvent = "propertyCommitted";
    RadDataForm.groupExpandedEvent = "groupExpanded";
    RadDataForm.groupCollapsedEvent = "groupCollapsed";
    RadDataForm.isReadOnlyProperty = new view_1.Property({
        name: "isReadOnly",
        defaultValue: undefined,
        valueConverter: view_2.booleanConverter,
        valueChanged: function (target, oldValue, newValue) {
            target.onIsReadOnlyPropertyChanged(oldValue, newValue);
        },
    });
    RadDataForm.commitModeProperty = new view_1.Property({
        name: "commitMode",
        defaultValue: CommitMode.Immediate,
        valueChanged: function (target, oldValue, newValue) {
            target.onCommitModePropertyChanged(oldValue, newValue);
        },
    });
    RadDataForm.validationModeProperty = new view_1.Property({
        name: "validationMode",
        defaultValue: ValidationMode.Immediate,
        valueChanged: function (target, oldValue, newValue) {
            target.onValidationModePropertyChanged(oldValue, newValue);
        },
    });
    RadDataForm.sourceProperty = new view_1.Property({
        name: "source",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onSourcePropertyChanged(oldValue, newValue);
        },
    });
    RadDataForm.metadataProperty = new view_1.Property({
        name: "metadata",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onMetadataPropertyChanged(oldValue, newValue);
        },
    });
    RadDataForm.groupsProperty = new view_1.Property({
        name: "groups",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onGroupsPropertyChanged(oldValue, newValue);
        },
    });
    RadDataForm.propertiesProperty = new view_1.Property({
        name: "properties",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onPropertiesPropertyChanged(oldValue, newValue);
        },
    });
    return RadDataForm;
}(view_1.View));
exports.RadDataForm = RadDataForm;
RadDataForm.isReadOnlyProperty.register(RadDataForm);
RadDataForm.commitModeProperty.register(RadDataForm);
RadDataForm.validationModeProperty.register(RadDataForm);
RadDataForm.sourceProperty.register(RadDataForm);
RadDataForm.metadataProperty.register(RadDataForm);
RadDataForm.groupsProperty.register(RadDataForm);
RadDataForm.propertiesProperty.register(RadDataForm);
///////////////////////////////////////////////////////////////////////////////
var PropertyGroup = /** @class */ (function (_super) {
    __extends(PropertyGroup, _super);
    function PropertyGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropertyGroup.prototype._addArrayFromBuilder = function (name, value) {
        if (name === "properties") {
            this.properties = value;
        }
    };
    PropertyGroup.prototype.onNamePropertyChanged = function (oldValue, newValue) {
        this.onNameChanged(oldValue, newValue);
    };
    PropertyGroup.prototype.onHiddenPropertyChanged = function (oldValue, newValue) {
        this.onHiddenChanged(oldValue, newValue);
    };
    PropertyGroup.prototype.onTitleHiddenPropertyChanged = function (oldValue, newValue) {
        this.onTitleHiddenChanged(oldValue, newValue);
    };
    PropertyGroup.prototype.onCollapsiblePropertyChanged = function (oldValue, newValue) {
        this.onCollapsibleChanged(oldValue, newValue);
    };
    PropertyGroup.prototype.onCollapsedPropertyChanged = function (oldValue, newValue) {
        this.onCollapsedChanged(oldValue, newValue);
    };
    PropertyGroup.prototype.onTitleStylePropertyChanged = function (oldValue, newValue) {
        this.onTitleStyleChanged(oldValue, newValue);
    };
    PropertyGroup.prototype.onPropertiesPropertyChanged = function (oldValue, newValue) {
        this.onPropertiesChanged(oldValue, newValue);
    };
    PropertyGroup.prototype.onLayoutPropertyChanged = function (oldValue, newValue) {
        this.onLayoutChanged(oldValue, newValue);
    };
    PropertyGroup.prototype.onNameChanged = function (oldValue, newValue) {
    };
    PropertyGroup.prototype.onHiddenChanged = function (oldValue, newValue) {
    };
    PropertyGroup.prototype.onTitleHiddenChanged = function (oldValue, newValue) {
    };
    PropertyGroup.prototype.onCollapsibleChanged = function (oldValue, newValue) {
    };
    PropertyGroup.prototype.onCollapsedChanged = function (oldValue, newValue) {
    };
    PropertyGroup.prototype.onTitleStyleChanged = function (oldValue, newValue) {
    };
    PropertyGroup.prototype.onPropertiesChanged = function (oldValue, newValue) {
    };
    PropertyGroup.prototype.onLayoutChanged = function (oldValue, newValue) {
    };
    PropertyGroup.nameProperty = new view_1.Property({
        name: "name",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onNamePropertyChanged(oldValue, newValue);
        },
    });
    PropertyGroup.hiddenProperty = new view_1.Property({
        name: "hidden",
        defaultValue: false,
        valueConverter: view_2.booleanConverter,
        valueChanged: function (target, oldValue, newValue) {
            target.onHiddenPropertyChanged(oldValue, newValue);
        },
    });
    PropertyGroup.titleHiddenProperty = new view_1.Property({
        name: "titleHidden",
        defaultValue: false,
        valueConverter: view_2.booleanConverter,
        valueChanged: function (target, oldValue, newValue) {
            target.onTitleHiddenPropertyChanged(oldValue, newValue);
        },
    });
    PropertyGroup.collapsibleProperty = new view_1.Property({
        name: "collapsible",
        defaultValue: false,
        valueConverter: view_2.booleanConverter,
        valueChanged: function (target, oldValue, newValue) {
            target.onCollapsiblePropertyChanged(oldValue, newValue);
        },
    });
    PropertyGroup.collapsedProperty = new view_1.Property({
        name: "collapsed",
        defaultValue: false,
        valueConverter: view_2.booleanConverter,
        valueChanged: function (target, oldValue, newValue) {
            target.onCollapsedPropertyChanged(oldValue, newValue);
        },
    });
    PropertyGroup.titleStyleProperty = new view_1.Property({
        name: "titleStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onTitleStylePropertyChanged(oldValue, newValue);
        },
    });
    PropertyGroup.propertiesProperty = new view_1.Property({
        name: "properties",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onPropertiesPropertyChanged(oldValue, newValue);
        },
    });
    PropertyGroup.layoutProperty = new view_1.Property({
        name: "layout",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onLayoutPropertyChanged(oldValue, newValue);
        },
    });
    return PropertyGroup;
}(view_1.ViewBase));
exports.PropertyGroup = PropertyGroup;
PropertyGroup.nameProperty.register(PropertyGroup);
PropertyGroup.hiddenProperty.register(PropertyGroup);
PropertyGroup.titleHiddenProperty.register(PropertyGroup);
PropertyGroup.collapsibleProperty.register(PropertyGroup);
PropertyGroup.collapsedProperty.register(PropertyGroup);
PropertyGroup.titleStyleProperty.register(PropertyGroup);
PropertyGroup.propertiesProperty.register(PropertyGroup);
PropertyGroup.layoutProperty.register(PropertyGroup);
///////////////////////////////////////////////////////////////////////////////
var PropertyEditorParams = /** @class */ (function (_super) {
    __extends(PropertyEditorParams, _super);
    function PropertyEditorParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropertyEditorParams.prototype.onMinimumPropertyChanged = function (oldValue, newValue) {
        this.onMinimumChanged(oldValue, newValue);
    };
    PropertyEditorParams.prototype.onMaximumPropertyChanged = function (oldValue, newValue) {
        this.onMaximumChanged(oldValue, newValue);
    };
    PropertyEditorParams.prototype.onStepPropertyChanged = function (oldValue, newValue) {
        this.onStepChanged(oldValue, newValue);
    };
    PropertyEditorParams.prototype.onMinimumChanged = function (oldValue, newValue) {
    };
    PropertyEditorParams.prototype.onMaximumChanged = function (oldValue, newValue) {
    };
    PropertyEditorParams.prototype.onStepChanged = function (oldValue, newValue) {
    };
    PropertyEditorParams.minimumProperty = new view_1.Property({
        name: "minimum",
        defaultValue: undefined,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onMinimumPropertyChanged(oldValue, newValue);
        },
    });
    PropertyEditorParams.maximumProperty = new view_1.Property({
        name: "maximum",
        defaultValue: undefined,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onMaximumPropertyChanged(oldValue, newValue);
        },
    });
    PropertyEditorParams.stepProperty = new view_1.Property({
        name: "step",
        defaultValue: undefined,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onStepPropertyChanged(oldValue, newValue);
        },
    });
    return PropertyEditorParams;
}(view_1.ViewBase));
exports.PropertyEditorParams = PropertyEditorParams;
PropertyEditorParams.minimumProperty.register(PropertyEditorParams);
PropertyEditorParams.maximumProperty.register(PropertyEditorParams);
PropertyEditorParams.stepProperty.register(PropertyEditorParams);
///////////////////////////////////////////////////////////////////////////////
var DataFormStyleBase = /** @class */ (function (_super) {
    __extends(DataFormStyleBase, _super);
    function DataFormStyleBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataFormStyleBase.prototype.onStrokeColorPropertyChanged = function (oldValue, newValue) {
        this.onStrokeColorChanged(oldValue, newValue);
    };
    DataFormStyleBase.prototype.onStrokeColorChanged = function (oldValue, newValue) {
    };
    DataFormStyleBase.prototype.onStrokeWidthPropertyChanged = function (oldValue, newValue) {
        this.onStrokeWidthChanged(oldValue, newValue);
    };
    DataFormStyleBase.prototype.onStrokeWidthChanged = function (oldValue, newValue) {
    };
    DataFormStyleBase.prototype.onFillColorPropertyChanged = function (oldValue, newValue) {
        this.onFillColorChanged(oldValue, newValue);
    };
    DataFormStyleBase.prototype.onFillColorChanged = function (oldValue, newValue) {
    };
    DataFormStyleBase.prototype.onSeparatorColorPropertyChanged = function (oldValue, newValue) {
        this.onSeparatorColorChanged(oldValue, newValue);
    };
    DataFormStyleBase.prototype.onSeparatorColorChanged = function (oldValue, newValue) {
    };
    DataFormStyleBase.prototype.onLabelTextColorPropertyChanged = function (oldValue, newValue) {
        this.onLabelTextColorChanged(oldValue, newValue);
    };
    DataFormStyleBase.prototype.onLabelTextColorChanged = function (oldValue, newValue) {
    };
    DataFormStyleBase.prototype.onLabelTextSizePropertyChanged = function (oldValue, newValue) {
        this.onLabelTextSizeChanged(oldValue, newValue);
    };
    DataFormStyleBase.prototype.onLabelTextSizeChanged = function (oldValue, newValue) {
    };
    DataFormStyleBase.prototype.onLabelFontNamePropertyChanged = function (oldValue, newValue) {
        this.onLabelFontNameChanged(oldValue, newValue);
    };
    DataFormStyleBase.prototype.onLabelFontNameChanged = function (oldValue, newValue) {
    };
    DataFormStyleBase.prototype.onLabelFontStylePropertyChanged = function (oldValue, newValue) {
        this.onLabelFontStyleChanged(oldValue, newValue);
    };
    DataFormStyleBase.prototype.onLabelFontStyleChanged = function (oldValue, newValue) {
    };
    DataFormStyleBase.strokeColorProperty = new view_1.Property({
        name: "strokeColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onStrokeColorPropertyChanged(oldValue, newValue);
        },
    });
    DataFormStyleBase.strokeWidthProperty = new view_1.Property({
        name: "strokeWidth",
        defaultValue: undefined,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onStrokeWidthPropertyChanged(oldValue, newValue);
        },
    });
    DataFormStyleBase.fillColorProperty = new view_1.Property({
        name: "fillColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onFillColorPropertyChanged(oldValue, newValue);
        },
    });
    DataFormStyleBase.separatorColorProperty = new view_1.Property({
        name: "separatorColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onSeparatorColorPropertyChanged(oldValue, newValue);
        },
    });
    DataFormStyleBase.labelTextColorProperty = new view_1.Property({
        name: "labelTextColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onLabelTextColorPropertyChanged(oldValue, newValue);
        },
    });
    DataFormStyleBase.labelTextSizeProperty = new view_1.Property({
        name: "labelTextSize",
        defaultValue: undefined,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onLabelTextSizePropertyChanged(oldValue, newValue);
        },
    });
    DataFormStyleBase.labelFontNameProperty = new view_1.Property({
        name: "labelFontName",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onLabelFontNamePropertyChanged(oldValue, newValue);
        },
    });
    DataFormStyleBase.labelFontStyleProperty = new view_1.Property({
        name: "labelFontStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onLabelFontStylePropertyChanged(oldValue, newValue);
        },
    });
    return DataFormStyleBase;
}(view_1.ViewBase));
exports.DataFormStyleBase = DataFormStyleBase;
DataFormStyleBase.strokeColorProperty.register(DataFormStyleBase);
DataFormStyleBase.strokeWidthProperty.register(DataFormStyleBase);
DataFormStyleBase.fillColorProperty.register(DataFormStyleBase);
DataFormStyleBase.separatorColorProperty.register(DataFormStyleBase);
DataFormStyleBase.labelTextColorProperty.register(DataFormStyleBase);
DataFormStyleBase.labelTextSizeProperty.register(DataFormStyleBase);
DataFormStyleBase.labelFontNameProperty.register(DataFormStyleBase);
DataFormStyleBase.labelFontStyleProperty.register(DataFormStyleBase);
// todo: add properties for separator Leading/Trailing Space , insets
var GroupTitleStyle = /** @class */ (function (_super) {
    __extends(GroupTitleStyle, _super);
    function GroupTitleStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GroupTitleStyle;
}(DataFormStyleBase));
exports.GroupTitleStyle = GroupTitleStyle;
// declare class TKDataFormEditorStyle extends NSObject {
// from base class:
// 	stroke: TKStroke;
// 	fill: TKFill;
// 	separatorColor: TKFill;
// implemented
// 	editorOffset: UIOffset;
// 	textLabelOffset: UIOffset;
// 	textLabelDisplayMode: TKDataFormEditorTextLabelDisplayMode;
// todo: add required properties
// 	accessoryArrowSize: CGSize; //ios specific
// 	accessoryArrowStroke: TKStroke; //ios specific
// 	feedbackImageViewOffset: UIOffset;
// 	feedbackLabelOffset: UIOffset;
// 	imageViewOffset: UIOffset; //add when image view is added as feature
// 	insets: UIEdgeInsets;
// 	separatorLeadingSpace: number; //iOS specific
// 	separatorTrailingSpace: number; //iOS specific
// }
var PropertyEditorStyle = /** @class */ (function (_super) {
    __extends(PropertyEditorStyle, _super);
    function PropertyEditorStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropertyEditorStyle.prototype.onEditorHorizontalOffsetPropertyChanged = function (oldValue, newValue) {
        this.onEditorHorizontalOffsetChanged(oldValue, newValue);
    };
    PropertyEditorStyle.prototype.onEditorHorizontalOffsetChanged = function (oldValue, newValue) {
    };
    PropertyEditorStyle.prototype.onEditorVerticalOffsetPropertyChanged = function (oldValue, newValue) {
        this.onEditorVerticalOffsetChanged(oldValue, newValue);
    };
    PropertyEditorStyle.prototype.onEditorVerticalOffsetChanged = function (oldValue, newValue) {
    };
    PropertyEditorStyle.prototype.onLabelHorizontalOffsetPropertyChanged = function (oldValue, newValue) {
        this.onLabelHorizontalOffsetChanged(oldValue, newValue);
    };
    PropertyEditorStyle.prototype.onLabelHorizontalOffsetChanged = function (oldValue, newValue) {
    };
    PropertyEditorStyle.prototype.onLabelVerticalOffsetPropertyChanged = function (oldValue, newValue) {
        this.onLabelVerticalOffsetChanged(oldValue, newValue);
    };
    PropertyEditorStyle.prototype.onLabelVerticalOffsetChanged = function (oldValue, newValue) {
    };
    PropertyEditorStyle.prototype.onLabelHiddenPropertyChanged = function (oldValue, newValue) {
        this.onLabelHiddenChanged(oldValue, newValue);
    };
    PropertyEditorStyle.prototype.onLabelHiddenChanged = function (oldValue, newValue) {
    };
    PropertyEditorStyle.prototype.onLabelPositionPropertyChanged = function (oldValue, newValue) {
        this.onLabelPositionChanged(oldValue, newValue);
    };
    PropertyEditorStyle.prototype.onLabelPositionChanged = function (oldValue, newValue) {
    };
    PropertyEditorStyle.prototype.onLabelWidthPropertyChanged = function (oldValue, newValue) {
        this.onLabelWidthChanged(oldValue, newValue);
    };
    PropertyEditorStyle.prototype.onLabelWidthChanged = function (oldValue, newValue) {
    };
    PropertyEditorStyle.editorHorizontalOffsetProperty = new view_1.Property({
        name: "editorHorizontalOffset",
        defaultValue: undefined,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onEditorHorizontalOffsetPropertyChanged(oldValue, newValue);
        },
    });
    PropertyEditorStyle.editorVerticalOffsetProperty = new view_1.Property({
        name: "editorVerticalOffset",
        defaultValue: undefined,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onEditorVerticalOffsetPropertyChanged(oldValue, newValue);
        },
    });
    PropertyEditorStyle.labelHorizontalOffsetProperty = new view_1.Property({
        name: "labelHorizontalOffset",
        defaultValue: undefined,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onLabelHorizontalOffsetPropertyChanged(oldValue, newValue);
        },
    });
    PropertyEditorStyle.labelVerticalOffsetProperty = new view_1.Property({
        name: "labelVerticalOffset",
        defaultValue: undefined,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onLabelVerticalOffsetPropertyChanged(oldValue, newValue);
        },
    });
    PropertyEditorStyle.labelHiddenProperty = new view_1.Property({
        name: "labelHidden",
        defaultValue: undefined,
        valueConverter: view_2.booleanConverter,
        valueChanged: function (target, oldValue, newValue) {
            target.onLabelHiddenPropertyChanged(oldValue, newValue);
        },
    });
    PropertyEditorStyle.labelPositionProperty = new view_1.Property({
        name: "labelPosition",
        defaultValue: view_1.isIOS ? DataFormLabelPosition.Left : DataFormLabelPosition.Top,
        valueChanged: function (target, oldValue, newValue) {
            target.onLabelPositionPropertyChanged(oldValue, newValue);
        },
    });
    PropertyEditorStyle.labelWidthProperty = new view_1.Property({
        name: "labelWidth",
        defaultValue: -1,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onLabelWidthPropertyChanged(oldValue, newValue);
        },
    });
    return PropertyEditorStyle;
}(DataFormStyleBase));
exports.PropertyEditorStyle = PropertyEditorStyle;
PropertyEditorStyle.editorHorizontalOffsetProperty.register(PropertyEditorStyle);
PropertyEditorStyle.editorVerticalOffsetProperty.register(PropertyEditorStyle);
PropertyEditorStyle.labelHorizontalOffsetProperty.register(PropertyEditorStyle);
PropertyEditorStyle.labelVerticalOffsetProperty.register(PropertyEditorStyle);
PropertyEditorStyle.labelHiddenProperty.register(PropertyEditorStyle);
PropertyEditorStyle.labelPositionProperty.register(PropertyEditorStyle);
PropertyEditorStyle.labelWidthProperty.register(PropertyEditorStyle);
////////////////////////////////////////////////////////////////////
// name : the name of bound entity property
// displayName  : the label to be shown for editor
// index : the index in group
// hidden : boolean for show/hide of editor
// readOnly : boolean , read only state
// required : boolean , if the value is required. Note: consider to move this to validator
// hintText : string, the gray text shown as hint in empty editor
// editor : PropertyEditor derived instance with specific properties for editors
// valuesProvider : an array or comma separated string with values used by some editors
// converter : PropertyConverter derived instance with specific properties for data conversion
// validator : PropertyValidator
///////////////////////////////////////////////////////////////////////////////
var EntityProperty = /** @class */ (function (_super) {
    __extends(EntityProperty, _super);
    function EntityProperty() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.namePropertySilentUpdate = false;
        _this.errorMessage = "This is not valid.";
        return _this;
    }
    Object.defineProperty(EntityProperty.prototype, "isValid", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityProperty.prototype, "value", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityProperty.prototype, "valueCandidate", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityProperty.prototype, "android", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityProperty.prototype, "ios", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    EntityProperty.prototype.onEditorPropertyChanged = function (oldValue, newValue) {
        if (oldValue) {
            oldValue.off('typeChange');
        }
        if (newValue) {
            var that_1 = new WeakRef(this);
            newValue.on('typeChange', function (propertyChangeData) {
                that_1.get().onEditorTypeChanged();
            });
        }
        this.onEditorChanged(oldValue, newValue);
    };
    EntityProperty.prototype.onEditorTypeChanged = function () {
        this.updateNativeEditor(this.editor);
    };
    EntityProperty.prototype.onValidatorsPropertyChanged = function (oldValue, newValue) {
        this.onValidatorsChanged(oldValue, newValue);
    };
    EntityProperty.prototype.onConverterPropertyChanged = function (oldValue, newValue) {
        this.onConverterChanged(oldValue, newValue);
    };
    EntityProperty.prototype.onValuesProviderPropertyChanged = function (oldValue, newValue) {
        this.onValuesProviderChanged(oldValue, newValue);
    };
    EntityProperty.prototype.onAutoCompleteDisplayModePropertyChanged = function (oldValue, newValue) {
        this.onAutoCompleteDisplayModeChanged(oldValue, newValue);
    };
    EntityProperty.prototype.onNamePropertyChanged = function (oldValue, newValue) {
        if (this.namePropertySilentUpdate) {
            this.namePropertySilentUpdate = false;
            return;
        }
        if (oldValue == null) {
            this.onNameChanged(oldValue, newValue);
        }
        else {
            this.namePropertySilentUpdate = true;
            this.name = oldValue;
            console.log("Warring: EntityProperty's name is already set and can't be changed.");
        }
    };
    EntityProperty.prototype.onDisplayNamePropertyChanged = function (oldValue, newValue) {
        this.onDisplayNameChanged(oldValue, newValue);
    };
    EntityProperty.prototype.onIndexPropertyChanged = function (oldValue, newValue) {
        this.onIndexChanged(oldValue, newValue);
    };
    EntityProperty.prototype.onColumnIndexPropertyChanged = function (oldValue, newValue) {
        this.onColumnIndexChanged(oldValue, newValue);
    };
    EntityProperty.prototype.onHiddenPropertyChanged = function (oldValue, newValue) {
        this.onHiddenChanged(oldValue, newValue);
    };
    EntityProperty.prototype.onReadOnlyPropertyChanged = function (oldValue, newValue) {
        this.onReadOnlyChanged(oldValue, newValue);
    };
    EntityProperty.prototype.onRequiredPropertyChanged = function (oldValue, newValue) {
        this.onRequiredChanged(oldValue, newValue);
    };
    EntityProperty.prototype.onHintTextPropertyChanged = function (oldValue, newValue) {
        this.onHintTextChanged(oldValue, newValue);
    };
    EntityProperty.prototype.onImageResourcePropertyChanged = function (oldValue, newValue) {
        this.onImageResourceChanged(oldValue, newValue);
    };
    EntityProperty.prototype._addArrayFromBuilder = function (name, value) {
        if (name === "validators") {
            this.validators = value;
        }
    };
    EntityProperty.prototype.onEditorChanged = function (oldValue, newValue) {
        if (newValue instanceof PropertyEditor) {
            this.updateNativeEditor(newValue);
        }
    };
    EntityProperty.prototype.onValidatorsChanged = function (oldValue, newValue) {
        if (newValue && newValue instanceof Array) {
            this.updateNativeValidators(newValue);
        }
    };
    EntityProperty.prototype.onConverterChanged = function (oldValue, newValue) {
        if (newValue) {
            this.updateNativeConverter(newValue);
        }
    };
    EntityProperty.prototype.onValuesProviderChanged = function (oldValue, newValue) {
        if (newValue) {
            var simplifiedArray = void 0;
            if (newValue instanceof Map) {
                simplifiedArray = Array.from(newValue.values());
                this._setupConverterWith(null, null, newValue);
            }
            else if (this._containsItemsArray(newValue)) {
                var keyProperty = this._getKeyProperty(this.valuesProvider);
                var labelProperty_1 = this._getLabelProperty(this.valuesProvider);
                simplifiedArray = newValue.items.map(function (item) { return item[labelProperty_1]; });
                this._setupConverterWith(keyProperty, labelProperty_1, newValue.items);
            }
            else if (this._isKeyLabelsArray(newValue)) {
                simplifiedArray = newValue.map(function (item) { return item["label"]; });
                this._setupConverterWith("key", "label", newValue);
            }
            else if (typeof newValue === "string") {
                simplifiedArray = newValue.split(',');
            }
            else {
                simplifiedArray = newValue;
            }
            this.valuesProviderArray = simplifiedArray;
            this.updateNativeValuesProvider(simplifiedArray);
        }
    };
    EntityProperty.prototype._setupConverterWith = function (key, label, items) {
        var converter;
        if (items instanceof Map) {
            converter = new ValuesProviderMapConverter(items);
        }
        else {
            converter = new ValuesProviderArrayConverter(key, label, items);
        }
        this.converter = converter;
    };
    EntityProperty.prototype._containsItemsArray = function (value) {
        if (value.hasOwnProperty("items")) {
            if (value["items"] instanceof Array) {
                return true;
            }
        }
        return false;
    };
    EntityProperty.prototype._isKeyLabelsArray = function (value) {
        if (value instanceof Array) {
            if (value.length > 0) {
                var item = value[0];
                if (item.hasOwnProperty("key") &&
                    (item.hasOwnProperty("label"))) {
                    return true;
                }
            }
        }
        return false;
    };
    EntityProperty.prototype._getKeyProperty = function (value) {
        if (value.hasOwnProperty("key")) {
            return value["key"];
        }
        if (value.hasOwnProperty("keyProperty")) {
            return value["keyProperty"];
        }
        return "key";
    };
    EntityProperty.prototype._getLabelProperty = function (value) {
        if (value.hasOwnProperty("label")) {
            return value["label"];
        }
        if (value.hasOwnProperty("labelProperty")) {
            return value["labelProperty"];
        }
        return "label";
    };
    EntityProperty.prototype.onAutoCompleteDisplayModeChanged = function (oldValue, newValue) {
        if (newValue) {
            this.updateNativeAutoCompleteDisplayMode(newValue);
        }
    };
    EntityProperty.prototype.onNameChanged = function (oldValue, newValue) {
    };
    EntityProperty.prototype.onDisplayNameChanged = function (oldValue, newValue) {
        if (newValue) {
            this.updateNativeDisplayName(newValue);
        }
    };
    EntityProperty.prototype.onIndexChanged = function (oldValue, newValue) {
        if (!isNaN(newValue)) {
            this.updateNativeIndex(newValue);
        }
    };
    EntityProperty.prototype.onColumnIndexChanged = function (oldValue, newValue) {
        if (!isNaN(newValue)) {
            this.updateNativeColumnIndex(newValue);
        }
    };
    EntityProperty.prototype.onHiddenChanged = function (oldValue, newValue) {
        this.updateNativeHidden(newValue);
    };
    EntityProperty.prototype.onReadOnlyChanged = function (oldValue, newValue) {
        this.updateNativeReadOnly(newValue);
    };
    EntityProperty.prototype.onRequiredChanged = function (oldValue, newValue) {
        this.updateNativeRequired(newValue);
    };
    EntityProperty.prototype.onHintTextChanged = function (oldValue, newValue) {
        this.updateNativeHintText(newValue);
    };
    EntityProperty.prototype.onImageResourceChanged = function (oldValue, newValue) {
        if (this.imageResource != null) {
            if (this.imageResource.indexOf(utils.RESOURCE_PREFIX) === 0) {
                this.imageResource = this.imageResource.substr(utils.RESOURCE_PREFIX.length);
                return;
            }
        }
        this.updateNativeImageResource(this.imageResource);
    };
    EntityProperty.prototype.updateNativeEditor = function (value) {
    };
    EntityProperty.prototype.updateNativeValidators = function (value) {
    };
    EntityProperty.prototype.updateNativeConverter = function (value) {
    };
    EntityProperty.prototype.updateNativeValuesProvider = function (value) {
    };
    EntityProperty.prototype.updateNativeAutoCompleteDisplayMode = function (value) {
    };
    EntityProperty.prototype.updateNativeDisplayName = function (value) {
    };
    EntityProperty.prototype.updateNativeIndex = function (value) {
    };
    EntityProperty.prototype.updateNativeColumnIndex = function (value) {
    };
    EntityProperty.prototype.updateNativeHidden = function (value) {
    };
    EntityProperty.prototype.updateNativeReadOnly = function (value) {
    };
    EntityProperty.prototype.updateNativeRequired = function (value) {
    };
    EntityProperty.prototype.updateNativeHintText = function (value) {
    };
    EntityProperty.prototype.updateNativeImageResource = function (value) {
    };
    EntityProperty.editorProperty = new view_1.Property({
        name: "editor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onEditorPropertyChanged(oldValue, newValue);
        },
    });
    EntityProperty.validatorsProperty = new view_1.Property({
        name: "validators",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onValidatorsPropertyChanged(oldValue, newValue);
        },
    });
    EntityProperty.converterProperty = new view_1.Property({
        name: "converter",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onConverterPropertyChanged(oldValue, newValue);
        },
    });
    EntityProperty.valuesProviderProperty = new view_1.Property({
        name: "valuesProvider",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onValuesProviderPropertyChanged(oldValue, newValue);
        },
    });
    EntityProperty.autoCompleteDisplayModeProperty = new view_1.Property({
        name: "autoCompleteDisplayMode",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onAutoCompleteDisplayModePropertyChanged(oldValue, newValue);
        },
    });
    EntityProperty.nameProperty = new view_1.Property({
        name: "name",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onNamePropertyChanged(oldValue, newValue);
        },
    });
    EntityProperty.displayNameProperty = new view_1.Property({
        name: "displayName",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onDisplayNamePropertyChanged(oldValue, newValue);
        },
    });
    EntityProperty.indexProperty = new view_1.Property({
        name: "index",
        defaultValue: undefined,
        valueConverter: parseInt,
        valueChanged: function (target, oldValue, newValue) {
            target.onIndexPropertyChanged(oldValue, newValue);
        },
    });
    EntityProperty.columnIndexProperty = new view_1.Property({
        name: "columnIndex",
        defaultValue: undefined,
        valueConverter: parseInt,
        valueChanged: function (target, oldValue, newValue) {
            target.onColumnIndexPropertyChanged(oldValue, newValue);
        },
    });
    EntityProperty.hiddenProperty = new view_1.Property({
        name: "hidden",
        defaultValue: undefined,
        valueConverter: view_2.booleanConverter,
        valueChanged: function (target, oldValue, newValue) {
            target.onHiddenPropertyChanged(oldValue, newValue);
        },
    });
    EntityProperty.readOnlyProperty = new view_1.Property({
        name: "readOnly",
        defaultValue: undefined,
        valueConverter: view_2.booleanConverter,
        valueChanged: function (target, oldValue, newValue) {
            target.onReadOnlyPropertyChanged(oldValue, newValue);
        },
    });
    EntityProperty.requiredProperty = new view_1.Property({
        name: "required",
        defaultValue: undefined,
        valueConverter: view_2.booleanConverter,
        valueChanged: function (target, oldValue, newValue) {
            target.onRequiredPropertyChanged(oldValue, newValue);
        },
    });
    EntityProperty.hintTextProperty = new view_1.Property({
        name: "hintText",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onHintTextPropertyChanged(oldValue, newValue);
        },
    });
    EntityProperty.imageResourceProperty = new view_1.Property({
        name: "imageResource",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onImageResourcePropertyChanged(oldValue, newValue);
        },
    });
    return EntityProperty;
}(view_1.ViewBase));
exports.EntityProperty = EntityProperty;
EntityProperty.editorProperty.register(EntityProperty);
EntityProperty.validatorsProperty.register(EntityProperty);
EntityProperty.converterProperty.register(EntityProperty);
EntityProperty.valuesProviderProperty.register(EntityProperty);
EntityProperty.autoCompleteDisplayModeProperty.register(EntityProperty);
EntityProperty.nameProperty.register(EntityProperty);
EntityProperty.displayNameProperty.register(EntityProperty);
EntityProperty.indexProperty.register(EntityProperty);
EntityProperty.columnIndexProperty.register(EntityProperty);
EntityProperty.hiddenProperty.register(EntityProperty);
EntityProperty.readOnlyProperty.register(EntityProperty);
EntityProperty.requiredProperty.register(EntityProperty);
EntityProperty.hintTextProperty.register(EntityProperty);
EntityProperty.imageResourceProperty.register(EntityProperty);
//////////////////////////////////////////////////////
// type : tye type of the editor to be used for this property
// style : EditorStyle instance
// todo: extend with common editor properties
var PropertyEditor = /** @class */ (function (_super) {
    __extends(PropertyEditor, _super);
    function PropertyEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PropertyEditor.prototype, "android", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyEditor.prototype, "ios", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    PropertyEditor.prototype.onTypePropertyChanged = function (oldValue, newValue) {
        this.onTypeChanged(oldValue, newValue);
    };
    PropertyEditor.prototype.onPropertyEditorStylePropertyChanged = function (oldValue, newValue) {
        if (oldValue) {
            oldValue.off('editorHorizontalOffsetChange');
            oldValue.off('editorVerticalOffsetChange');
            oldValue.off('labelHorizontalOffsetChange');
            oldValue.off('labelVerticalOffsetChange');
            oldValue.off('labelHiddenChange');
            oldValue.off('labelPositionChange');
            oldValue.off('labelWidthChange');
            oldValue.off('strokeColorChange');
            oldValue.off('strokeWidthChange');
            oldValue.off('fillColorChange');
            oldValue.off('separatorColorChange');
            oldValue.off('labelTextColorChange');
            oldValue.off('labelTextSizeChange');
            oldValue.off('labelFontNameChange');
            oldValue.off('labelFontStyleChange');
        }
        if (newValue) {
            var that_2 = new WeakRef(this);
            var changeHandler = function (propertyChangeData) {
                that_2.get().onStylePropertyChanged(propertyChangeData.propertyName);
            };
            newValue.on('editorHorizontalOffsetChange', changeHandler);
            newValue.on('editorVerticalOffsetChange', changeHandler);
            newValue.on('labelHorizontalOffsetChange', changeHandler);
            newValue.on('labelVerticalOffsetChange', changeHandler);
            newValue.on('labelHiddenChange', changeHandler);
            newValue.on('labelPositionChange', changeHandler);
            newValue.on('labelWidthChange', changeHandler);
            newValue.on('strokeColorChange', changeHandler);
            newValue.on('strokeWidthChange', changeHandler);
            newValue.on('fillColorChange', changeHandler);
            newValue.on('separatorColorChange', changeHandler);
            newValue.on('labelTextColorChange', changeHandler);
            newValue.on('labelTextSizeChange', changeHandler);
            newValue.on('labelFontNameChange', changeHandler);
            newValue.on('labelFontStyleChange', changeHandler);
        }
        this.onPropertyEditorStyleChanged(oldValue, newValue);
    };
    PropertyEditor.prototype.onParamsPropertyInternalChanged = function (oldValue, newValue) {
        if (oldValue) {
            oldValue.off('minimumChange');
            oldValue.off('maximumChange');
            oldValue.off('stepChange');
        }
        if (newValue) {
            var that = new WeakRef(this);
            var changeHandler = function (propertyChangeData) {
                this.onParamsPropertyChanged(propertyChangeData.propertyName);
            };
            newValue.on('minimumChange', changeHandler);
            newValue.on('maximumChange', changeHandler);
            newValue.on('stepChange', changeHandler);
        }
        this.onParamsChanged(oldValue, newValue);
    };
    PropertyEditor.prototype.onStylePropertyChanged = function (propertyName) {
    };
    PropertyEditor.prototype.onParamsPropertyChanged = function (propertyName) {
    };
    PropertyEditor.prototype.onTypeChanged = function (oldValue, newValue) {
    };
    PropertyEditor.prototype.onPropertyEditorStyleChanged = function (oldValue, newValue) {
    };
    PropertyEditor.prototype.onParamsChanged = function (oldValue, newValue) {
    };
    PropertyEditor.typeProperty = new view_1.Property({
        name: "type",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onTypePropertyChanged(oldValue, newValue);
        },
    });
    PropertyEditor.propertyEditorStyleProperty = new view_1.Property({
        name: "propertyEditorStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onPropertyEditorStylePropertyChanged(oldValue, newValue);
        },
    });
    PropertyEditor.paramsProperty = new view_1.Property({
        name: "params",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onParamsPropertyInternalChanged(oldValue, newValue);
        },
    });
    return PropertyEditor;
}(view_1.ViewBase));
exports.PropertyEditor = PropertyEditor;
PropertyEditor.typeProperty.register(PropertyEditor);
PropertyEditor.propertyEditorStyleProperty.register(PropertyEditor);
PropertyEditor.paramsProperty.register(PropertyEditor);
var CustomPropertyEditor = /** @class */ (function (_super) {
    __extends(CustomPropertyEditor, _super);
    function CustomPropertyEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CustomPropertyEditor.prototype, "android", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomPropertyEditor.prototype, "ios", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    CustomPropertyEditor.prototype.notifyValueChanged = function () {
    };
    CustomPropertyEditor.editorNeedsViewEvent = "editorNeedsView";
    CustomPropertyEditor.editorHasToApplyValueEvent = "editorHasToApplyValue";
    CustomPropertyEditor.editorNeedsValueEvent = "editorNeedsValue";
    return CustomPropertyEditor;
}(PropertyEditor));
exports.CustomPropertyEditor = CustomPropertyEditor;
//////////////////////////////////////////////////////
// errorMessage : message on error
// successMessage : message on success
var PropertyValidator = /** @class */ (function (_super) {
    __extends(PropertyValidator, _super);
    function PropertyValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PropertyValidator.prototype, "android", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyValidator.prototype, "ios", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    PropertyValidator.prototype.onErrorMessagePropertyChanged = function (oldValue, newValue) {
        this.onErrorMessageChanged(oldValue, newValue);
    };
    PropertyValidator.prototype.onSuccessMessagePropertyChanged = function (oldValue, newValue) {
        this.onSuccessMessageChanged(oldValue, newValue);
    };
    PropertyValidator.prototype.onErrorMessageChanged = function (oldValue, newValue) {
        if (newValue) {
            if (this.ios) {
                this.ios.errorMessage = newValue;
            }
            else {
                this.android.setNegativeMessage(newValue);
            }
        }
    };
    PropertyValidator.prototype.onSuccessMessageChanged = function (oldValue, newValue) {
        if (newValue) {
            if (this.ios) {
                this.ios.positiveMessage = newValue;
            }
            else {
                this.android.setPositiveMessage(newValue);
            }
        }
    };
    PropertyValidator.prototype.validate = function (value, propertyName) {
        return true;
    };
    PropertyValidator.errorMessageProperty = new view_1.Property({
        name: "errorMessage",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onErrorMessagePropertyChanged(oldValue, newValue);
        },
    });
    PropertyValidator.successMessageProperty = new view_1.Property({
        name: "successMessage",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onSuccessMessagePropertyChanged(oldValue, newValue);
        },
    });
    return PropertyValidator;
}(view_1.ViewBase));
exports.PropertyValidator = PropertyValidator;
PropertyValidator.errorMessageProperty.register(PropertyValidator);
PropertyValidator.successMessageProperty.register(PropertyValidator);
var LengthValidator = /** @class */ (function (_super) {
    __extends(LengthValidator, _super);
    function LengthValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LengthValidator.prototype.onLengthPropertyChanged = function (oldValue, newValue) {
        this.onLengthChanged(oldValue, newValue);
    };
    LengthValidator.prototype.onLengthChanged = function (oldValue, newValue) {
        console.log("Minimum/maximum setter in parent");
    };
    LengthValidator.lengthProperty = new view_1.Property({
        name: "length",
        defaultValue: undefined,
        valueConverter: parseInt,
        valueChanged: function (target, oldValue, newValue) {
            target.onLengthPropertyChanged(oldValue, newValue);
        },
    });
    return LengthValidator;
}(PropertyValidator));
exports.LengthValidator = LengthValidator;
LengthValidator.lengthProperty.register(LengthValidator);
var MinimumLengthValidator = /** @class */ (function (_super) {
    __extends(MinimumLengthValidator, _super);
    function MinimumLengthValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MinimumLengthValidator;
}(LengthValidator));
exports.MinimumLengthValidator = MinimumLengthValidator;
var MaximumLengthValidator = /** @class */ (function (_super) {
    __extends(MaximumLengthValidator, _super);
    function MaximumLengthValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MaximumLengthValidator;
}(LengthValidator));
exports.MaximumLengthValidator = MaximumLengthValidator;
var EmailValidator = /** @class */ (function (_super) {
    __extends(EmailValidator, _super);
    function EmailValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EmailValidator;
}(PropertyValidator));
exports.EmailValidator = EmailValidator;
var NonEmptyValidator = /** @class */ (function (_super) {
    __extends(NonEmptyValidator, _super);
    function NonEmptyValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NonEmptyValidator;
}(PropertyValidator));
exports.NonEmptyValidator = NonEmptyValidator;
var RangeValidator = /** @class */ (function (_super) {
    __extends(RangeValidator, _super);
    function RangeValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeValidator.prototype.onMinimumPropertyChanged = function (oldValue, newValue) {
        this.onMinimumChanged(oldValue, newValue);
    };
    RangeValidator.prototype.onMaximumPropertyChanged = function (oldValue, newValue) {
        this.onMaximumChanged(oldValue, newValue);
    };
    RangeValidator.prototype.onMinimumChanged = function (oldValue, newValue) {
    };
    RangeValidator.prototype.onMaximumChanged = function (oldValue, newValue) {
    };
    RangeValidator.minimumProperty = new view_1.Property({
        name: "minimum",
        defaultValue: undefined,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onMinimumPropertyChanged(oldValue, newValue);
        },
    });
    RangeValidator.maximumProperty = new view_1.Property({
        name: "maximum",
        defaultValue: undefined,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onMaximumPropertyChanged(oldValue, newValue);
        },
    });
    return RangeValidator;
}(PropertyValidator));
exports.RangeValidator = RangeValidator;
RangeValidator.minimumProperty.register(RangeValidator);
RangeValidator.maximumProperty.register(RangeValidator);
var PhoneValidator = /** @class */ (function (_super) {
    __extends(PhoneValidator, _super);
    function PhoneValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PhoneValidator;
}(PropertyValidator));
exports.PhoneValidator = PhoneValidator;
var RegExValidator = /** @class */ (function (_super) {
    __extends(RegExValidator, _super);
    function RegExValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegExValidator.prototype.onRegExPropertyChanged = function (oldValue, newValue) {
        this.onRegExChanged(oldValue, newValue);
    };
    RegExValidator.prototype.onRegExChanged = function (oldValue, newValue) {
    };
    RegExValidator.regExProperty = new view_1.Property({
        name: "regEx",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onRegExPropertyChanged(oldValue, newValue);
        },
    });
    return RegExValidator;
}(PropertyValidator));
exports.RegExValidator = RegExValidator;
RegExValidator.regExProperty.register(RegExValidator);
var IsTrueValidator = /** @class */ (function (_super) {
    __extends(IsTrueValidator, _super);
    function IsTrueValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IsTrueValidator;
}(PropertyValidator));
exports.IsTrueValidator = IsTrueValidator;
var StringToDateConverter = /** @class */ (function () {
    function StringToDateConverter() {
    }
    StringToDateConverter.prototype.convertFrom = function (value) { };
    StringToDateConverter.prototype.convertTo = function (value) { };
    return StringToDateConverter;
}());
exports.StringToDateConverter = StringToDateConverter;
var StringToTimeConverter = /** @class */ (function () {
    function StringToTimeConverter() {
    }
    StringToTimeConverter.prototype.convertFrom = function (value) { };
    StringToTimeConverter.prototype.convertTo = function (value) { };
    return StringToTimeConverter;
}());
exports.StringToTimeConverter = StringToTimeConverter;
var ValuesProviderArrayConverter = /** @class */ (function () {
    function ValuesProviderArrayConverter(key, label, items) {
        this._key = key;
        this._label = label;
        this._items = items;
    }
    ValuesProviderArrayConverter.prototype.convertFrom = function (source) {
        var key = this._key;
        var label = this._label;
        var returnValue = undefined;
        this._items.forEach(function (item) {
            if (item[key] === source) {
                returnValue = item[label];
            }
        });
        return returnValue;
    };
    ValuesProviderArrayConverter.prototype.convertTo = function (source) {
        var key = this._key;
        var label = this._label;
        var returnValue = -1;
        this._items.forEach(function (item) {
            if (item[label] === source) {
                returnValue = item[key];
            }
        });
        return returnValue;
    };
    return ValuesProviderArrayConverter;
}());
exports.ValuesProviderArrayConverter = ValuesProviderArrayConverter;
var ValuesProviderMapConverter = /** @class */ (function () {
    function ValuesProviderMapConverter(items) {
        this._items = items;
    }
    ValuesProviderMapConverter.prototype.convertFrom = function (source) {
        var returnValue = undefined;
        this._items.forEach(function (value, key) {
            if (key === source) {
                returnValue = value;
            }
        });
        return returnValue;
    };
    ValuesProviderMapConverter.prototype.convertTo = function (source) {
        var returnValue = -1;
        this._items.forEach(function (value, key) {
            if (value === source) {
                returnValue = key;
            }
        });
        return returnValue;
    };
    return ValuesProviderMapConverter;
}());
exports.ValuesProviderMapConverter = ValuesProviderMapConverter;
///////////////////////////////////////////////////////////////////////////////
var DataFormLayout = /** @class */ (function (_super) {
    __extends(DataFormLayout, _super);
    function DataFormLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DataFormLayout;
}(view_1.ViewBase));
exports.DataFormLayout = DataFormLayout;
var DataFormStackLayout = /** @class */ (function (_super) {
    __extends(DataFormStackLayout, _super);
    function DataFormStackLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataFormStackLayout.prototype.onOrientationPropertyChanged = function (oldValue, newValue) {
        this.onOrientationChanged(oldValue, newValue);
    };
    DataFormStackLayout.prototype.onOrientationChanged = function (oldValue, newValue) {
    };
    DataFormStackLayout.orientationProperty = new view_1.Property({
        name: "orientation",
        defaultValue: enums.Orientation.vertical,
        valueChanged: function (target, oldValue, newValue) {
            target.onOrientationPropertyChanged(oldValue, newValue);
        },
    });
    return DataFormStackLayout;
}(DataFormLayout));
exports.DataFormStackLayout = DataFormStackLayout;
var DataFormGridLayout = /** @class */ (function (_super) {
    __extends(DataFormGridLayout, _super);
    function DataFormGridLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DataFormGridLayout;
}(DataFormLayout));
exports.DataFormGridLayout = DataFormGridLayout;
