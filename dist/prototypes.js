"use strict";
var Genesis = require("./index");
String.prototype.plainTextToHtml = function () {
    if (!this)
        return "";
    return Genesis.plainTextToHtml(this.toString());
};
String.prototype.toDate = function (defaultDate) {
    return Genesis.toDate(this, defaultDate);
};
String.prototype.splitCamelCase = function (separator) {
    if (separator === void 0) { separator = " "; }
    return Genesis.splitCamelCase(this, separator);
};
String.prototype.digitGrouping = function () {
    return Genesis.digitGrouping(this);
};
String.prototype.toDecimal = function () {
    return Genesis.toDecimal(this);
};
String.prototype.toInt = function () {
    return Genesis.toInt(this);
};
String.prototype.toBoolean = function () {
    return Genesis.toBoolean(this);
};
String.prototype.cleanupNumber = function () {
    return Genesis.cleanupNumber(this);
};
String.prototype.cleanupMobile = function (defaultCountryCode) {
    if (defaultCountryCode === void 0) { defaultCountryCode = "+1"; }
    return Genesis.cleanupMobile(this, defaultCountryCode);
};
String.prototype.isValidMobile = function () {
    return Genesis.isValidMobile(this);
};
String.prototype.cleanupEmail = function () {
    return Genesis.cleanupEmail(this);
};
String.prototype.isValidEmail = function () {
    return Genesis.isValidEmail(this);
};
String.prototype.replaceNumbersToPersian = function () {
    return Genesis.replaceNumbersToPersian(this);
};
String.prototype.replaceNumbersToEnglish = function () {
    return Genesis.replaceNumbersToEnglish(this);
};
String.prototype.replaceNumbersToLocalized = function (cultureName) {
    return Genesis.replaceNumbersToLocalized(this, cultureName);
};
String.prototype.truncate = function (max, side) {
    if (max === void 0) { max = 256; }
    if (side === void 0) { side = "end"; }
    return Genesis.truncate(this, max, side);
};
String.prototype.padZero = function (pad) {
    if (pad === void 0) { pad = 2; }
    return Genesis.padZero(this, pad);
};
String.prototype.toPersianToomanString = function () {
    return Genesis.toPersianToomanString(this);
};
Number.prototype.toDate = function () {
    return Genesis.toDate(this);
};
Number.prototype.toBoolean = function () {
    return Genesis.toBoolean(this);
};
Number.prototype.cleanupNumber = function () {
    return Genesis.cleanupNumber(this);
};
Number.prototype.digitGrouping = function () {
    return Genesis.digitGrouping(this);
};
Number.prototype.toDecimal = function () {
    return Genesis.toDecimal(this);
};
Number.prototype.toInt = function () {
    return Genesis.toInt(this);
};
Number.prototype.replaceNumbersToPersian = function () {
    return Genesis.replaceNumbersToPersian(this);
};
Number.prototype.replaceNumbersToLocalized = function (cultureName) {
    return Genesis.replaceNumbersToLocalized(this, cultureName);
};
Number.prototype.padZero = function (pad) {
    if (pad === void 0) { pad = 2; }
    return Genesis.padZero(this, pad);
};
Number.prototype.hasFlag = function (flag) {
    return Genesis.hasFlag(this, flag);
};
Number.prototype.toPersianToomanString = function () {
    return Genesis.toPersianToomanString(this);
};
Date.prototype.calculateAge = function (dateOfBirth) {
    return Genesis.calculateAge(this, dateOfBirth);
};
Date.prototype.calculateAge = function (dateOfBirth, until) {
    return Genesis.calculateAge(this, dateOfBirth, until);
};
Date.prototype.toJalaliDate = function () {
    return Genesis.toJalaliDate(this);
};
Date.prototype.isSameDay = function (valueToCompare) {
    return Genesis.isSameDay(this, valueToCompare);
};
Date.prototype.removeTime = function () {
    return Genesis.removeTime(this);
};
Date.prototype.addDays = function (value) {
    return Genesis.addDays(this, value);
};
Date.prototype.addHours = function (value) {
    return Genesis.addHours(this, value);
};
Date.prototype.addMinutes = function (value) {
    return Genesis.addMinutes(this, value);
};
Date.prototype.addSeconds = function (value) {
    return Genesis.addSeconds(this, value);
};
Date.prototype.addMilliseconds = function (value) {
    return Genesis.addMilliseconds(this, value);
};
Date.prototype.toTimeAgo = function (culture) {
    if (culture === void 0) { culture = "en-US"; }
    return Genesis.toTimeAgo(this, culture);
};
Date.prototype.toCustomLocaleString = function (format, culture) {
    if (format === void 0) { format = "yyyy/MM/dd hh:mm"; }
    if (culture === void 0) { culture = "en-US"; }
    return Genesis.toCustomLocaleString(this, format, culture);
};
Boolean.prototype.toBoolean = function () {
    return Genesis.toBoolean(this);
};
Boolean.prototype.cleanupNumber = function () {
    return Genesis.cleanupNumber(this);
};
//#endregion
