"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var border = [
    'borderTop',
    'borderRight',
    'borderBottom',
    'borderLeft',
    'borderWidth',
    'borderStyle',
    'borderColor',
    'border',
];
exports.longToShort = {
    fontStyle: 'font',
    fontVariant: 'font',
    fontWeight: 'font',
    fontStretch: 'font',
    fontSize: 'font',
    lineHeight: 'font',
    fontFamily: 'font',
    backgroundImage: 'background',
    backgroundPosition: 'background',
    backgroundSize: 'background',
    backgroundRepeat: 'background',
    backgroundOrigin: 'background',
    backgroundClip: 'background',
    backgroundAttachment: 'background',
    backgroundColor: 'background',
    marginTop: 'margin',
    marginRight: 'margin',
    marginBottom: 'margin',
    marginLeft: 'margin',
    paddingTop: 'padding',
    paddingRight: 'padding',
    paddingBottom: 'padding',
    paddingLeft: 'padding',
    borderTop: border,
    borderRight: border,
    borderBottom: border,
    borderLeft: border,
    borderWidth: border,
    borderStyle: border,
    borderColor: border,
    borderTopWidth: border,
    borderRightWidth: border,
    borderBottomWidth: border,
    borderLeftWidth: border,
    borderTopStyle: border,
    borderRightStyle: border,
    borderBottomStyle: border,
    borderLeftStyle: border,
    borderTopColor: border,
    borderRightColor: border,
    borderBottomColor: border,
    borderLeftColor: border,
    borderTopLeftRadius: 'borderRadius',
    borderTopRightRadius: 'borderRadius',
    borderBottomLeftRadius: 'borderRadius',
    borderBottomRightRadius: 'borderRadius',
};
exports.shortToLong = {
    font: [
        'fontStyle',
        'fontVariant',
        'fontWeight',
        'fontStretch',
        'fontSize',
        'lineHeight',
        'fontFamily',
    ],
    background: [
        'backgroundImage',
        'backgroundPosition',
        'backgroundSize',
        'backgroundRepeat',
        'backgroundOrigin',
        'backgroundClip',
        'backgroundAttachment',
        'backgroundColor',
    ],
    margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
    padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    border: [
        'borderWidth',
        'borderStyle',
        'borderColor',
        'borderTop',
        'borderRight',
        'borderBottom',
        'borderLeft',
        'borderTopWidth',
        'borderRightWidth',
        'borderBottomWidth',
        'borderLeftWidth',
        'borderTopStyle',
        'borderRightStyle',
        'borderBottomStyle',
        'borderLeftStyle',
        'borderTopColor',
        'borderRightColor',
        'borderBottomColor',
        'borderLeftColor',
    ],
    borderWidth: [
        'borderTopWidth',
        'borderRightWidth',
        'borderBottomWidth',
        'borderLeftWidth',
    ],
    borderStyle: [
        'borderTopStyle',
        'borderRightStyle',
        'borderBottomStyle',
        'borderLeftStyle',
    ],
    borderColor: [
        'borderTopColor',
        'borderRightColor',
        'borderBottomColor',
        'borderLeftColor',
    ],
    borderTop: ['borderTopWidth', 'borderTopStyle', 'borderTopColor'],
    borderRight: ['borderRightWidth', 'borderRightStyle', 'borderRightColor'],
    borderBottom: ['borderBottomWidth', 'borderBottomStyle', 'borderBottomColor'],
    borderLeft: ['borderLeftWidth', 'borderLeftStyle', 'borderLeftColor'],
    borderRadius: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
    ],
};
