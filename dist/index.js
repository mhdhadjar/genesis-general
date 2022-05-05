"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCustomLocaleString = exports.toTimeAgo = exports.addMilliseconds = exports.addSeconds = exports.addMinutes = exports.addHours = exports.addDays = exports.removeTime = exports.isSameDay = exports.toJalaliDate = exports.toPersianToomanString = exports.hasFlag = exports.padZero = exports.truncate = exports.replaceNumbersToLocalized = exports.replaceNumbersToPersian = exports.replaceNumbersToEnglish = exports.isValidMobile = exports.cleanupMobile = exports.isValidEmail = exports.cleanupEmail = exports.cleanupNumber = exports.toBoolean = exports.toDecimal = exports.digitGrouping = exports.splitCamelCase = exports.toDate = exports.plainTextToHtml = void 0;
/**
 * Remove dangerous characters and replace \n characters to html br tags to render as html.
 * @param input The input value to replace.
 */
var plainTextToHtml = function (input) {
    if (!input)
        return "";
    return input.toString().replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br />");
};
exports.plainTextToHtml = plainTextToHtml;
/**
 * Converts anything to date.
 * @param input source object to convert.
 * @param defaultValue If conversion failed, then returns this value.
 */
var toDate = function (input, defaultValue) {
    if (input == null)
        return defaultValue;
    if (input instanceof Date && !isNaN(input.getDate()))
        return defaultValue;
    if (typeof input !== "string" && typeof input !== "number")
        return defaultValue;
    var dateObject = new Date(input);
    if (isNaN(dateObject.getTime()))
        return defaultValue;
    return dateObject;
};
exports.toDate = toDate;
/**
 * Split camel case string and return separated words.
 * @param input The camel cased string to split.
 * @param separator character to place between words.
 */
var splitCamelCase = function (input, separator) {
    if (separator === void 0) { separator = " "; }
    if (input == null)
        return "";
    input = input.trim();
    //Is not pascal case
    if (!/[a-z][A-Z]/.test(input))
        return input;
    //If is null or abbreviation.
    if (!input || input.trim().toUpperCase() === input.trim())
        return input;
    var array = input.split(/([A-Z][a-z]+)/).filter(function (e) {
        return e;
    });
    return array.join(separator);
};
exports.splitCamelCase = splitCamelCase;
/**
 * Split number by three digits.
 * @param input string or number to split.
 */
var digitGrouping = function (input) {
    if (input == null)
        return "";
    if (typeof input !== "string")
        input = input.toString();
    input = input.trim();
    input = input.replace(/,/g, "");
    input = exports.replaceNumbersToEnglish(input);
    if (!/^([0-9]+)(\.[0-9]+)?$/.test(input))
        return "";
    var parts = input.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
};
exports.digitGrouping = digitGrouping;
/**
 * Convert any convertible types to decimal.
 * @param input string or number to convert.
 * @returns number or NaN if fails.
 * */
var toDecimal = function (input) {
    if (!input)
        return NaN;
    var s = input.toString().trim();
    if (!s)
        return 0;
    s = exports.replaceNumbersToEnglish(s);
    s = s.replace(/[,()]/g, "");
    return parseFloat(s);
};
exports.toDecimal = toDecimal;
/**
 * Convert any convertible types such as "on", "yes", "true", "" to boolean.
 * @param input string such as "on", "yes", "true", "" or number.
 * */
var toBoolean = function (input) {
    if (!input)
        return false;
    var str = input.toString().toLowerCase();
    return str === "true" || str === "1" || str === "yes" || str === "on";
};
exports.toBoolean = toBoolean;
/**
 * Trim string and convert non-english numeral characters and return a number.
 * @param input value to convert.
 * */
var cleanupNumber = function (input) {
    if (!input)
        return NaN;
    var s = input.toString();
    s = s.replace(/[,\s]+/g, "");
    s = exports.replaceNumbersToEnglish(s);
    return parseFloat(s);
};
exports.cleanupNumber = cleanupNumber;
/**
 * Make email address lower also trim spaces to save in database or something.
 * @param input email address to cleanup.
 * */
var cleanupEmail = function (input) {
    if (!input)
        return "";
    input = input.trim().toLowerCase();
    return input;
};
exports.cleanupEmail = cleanupEmail;
/**
 * Check the address is a valid email address or not.
 * @param input email address to check.
 * */
var isValidEmail = function (input) {
    if (!input)
        return false;
    var s = input.toString();
    if (!s)
        return false;
    s = exports.cleanupEmail(s);
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(s);
};
exports.isValidEmail = isValidEmail;
/**
 * Convert all mobile number types to generic format starting with +
 * @param input mobile address to format
 * @param defaultCountryCode if user does not provide the country code use this code as local country code.
 * */
var cleanupMobile = function (input, defaultCountryCode) {
    if (defaultCountryCode === void 0) { defaultCountryCode = "+1"; }
    if (!input)
        return "";
    var s = input.toString();
    if (typeof s !== "string")
        s = s.toString();
    s = s.replace(/[()\-_[\]]+/g, "");
    s = exports.cleanupNumber(s.toString()).toString();
    if (s.length === 10)
        s = defaultCountryCode + s;
    if (!/^(00|\+)/.test(s))
        s = "00" + s;
    if (/^0[0-9]{10,10}$/.test(s))
        s = "+1" + s.substring(1);
    if (/^00/.test(s))
        s = "+" + s.substring(2);
    if (/^\+[0-9]{11,16}$/.test(s))
        return s;
    return "";
};
exports.cleanupMobile = cleanupMobile;
/**
 * Check if the number is a valid mobile number or not.
 * @param input mobile number to check.
 * */
var isValidMobile = function (input) {
    if (!input)
        return false;
    var s = input.toString();
    if (!s)
        return false;
    s = exports.cleanupMobile(s);
    return /^(00|\+)([0-9]{1,4}[0-9]{10,10})$/.test(s);
};
exports.isValidMobile = isValidMobile;
/**
 * Replace all of arabic and persian numeral characters to english characters.
 * @param input value to convert.
 * */
var replaceNumbersToEnglish = function (input) {
    if (input == null)
        return "";
    var s = input.toString();
    // Persian standard decimal separator
    // ##### THE CHARACTER IS NOT COMMA ######
    s = s.replace(/٫/g, ".");
    s = s.replace(/۰|٠/g, "0");
    s = s.replace(/۱|١/g, "1");
    s = s.replace(/۲|٢/g, "2");
    s = s.replace(/۳|٣/g, "3");
    s = s.replace(/۴|٤/g, "4");
    s = s.replace(/۵|٥/g, "5");
    s = s.replace(/۶|٦/g, "6");
    s = s.replace(/۷|٧/g, "7");
    s = s.replace(/۸|٨/g, "8");
    s = s.replace(/۹|٩/g, "9");
    return s;
};
exports.replaceNumbersToEnglish = replaceNumbersToEnglish;
/**
 * Replace all of numeral characters to persian numeral characters.
 * @param input value to convert.
 * */
var replaceNumbersToPersian = function (input) {
    if (input == null)
        return "";
    var s = input.toString();
    s = s.replace(/0/g, "۰");
    s = s.replace(/1/g, "۱");
    s = s.replace(/2/g, "۲");
    s = s.replace(/3/g, "۳");
    s = s.replace(/4/g, "۴");
    s = s.replace(/5/g, "۵");
    s = s.replace(/6/g, "۶");
    s = s.replace(/7/g, "۷");
    s = s.replace(/8/g, "۸");
    s = s.replace(/9/g, "۹");
    return s;
};
exports.replaceNumbersToPersian = replaceNumbersToPersian;
/**
 * Replace all of numeral characters to specific culture numeral characters.
 * @param input value to convert.
 * @param cultureName target number format.
 * */
var replaceNumbersToLocalized = function (input, cultureName) {
    if (input == null)
        return input;
    var s = input.toString();
    if (!cultureName)
        return s;
    cultureName = cultureName.toString().toLowerCase().trim();
    var parts = cultureName.split("-");
    if (parts.length !== 2)
        return s;
    var lang = parts[0];
    switch (lang) {
        case "fa":
            return exports.replaceNumbersToPersian(s);
        case "en":
            return exports.replaceNumbersToEnglish(s);
        default:
            return s;
    }
};
exports.replaceNumbersToLocalized = replaceNumbersToLocalized;
/**
 * If the length of the string is less than or equal to the given number, just return the string without truncating it. Otherwise, truncate the string.
 * @param input string value to truncate.
 * @param max given value as maximum length.
 * @param side string side to truncate "start" or "center" or "end" default is: "end".
 * */
var truncate = function (input, max, side) {
    if (max === void 0) { max = 256; }
    if (side === void 0) { side = "end"; }
    if (!input)
        return "s";
    var str = input.toString();
    if (input.length <= max)
        return str;
    var ellipsis = "…";
    switch (side) {
        case "start":
            return ellipsis + " " + str.substring(str.length - max).trim();
        case "end":
            return str.substring(0, max).trim() + " " + ellipsis;
        case "center":
            var half = Math.floor(max / 2);
            return str.substring(0, half).trim() + " " + ellipsis + " " + str.substring(str.length - half).trim();
    }
};
exports.truncate = truncate;
/**
 * Add some zero before number to make number as long as you need.
 * @param input string or number to add zero.
 * @param pad expected number length default is 2.
 * */
var padZero = function (input, pad) {
    if (pad === void 0) { pad = 2; }
    if (input == null)
        return "";
    if (typeof input !== "number")
        input = parseFloat(input.toString().trim());
    if (isNaN(input))
        return "";
    var num = input.toString();
    var parts = num.split(".");
    return parts[0].padStart(pad, "0") + (parts.length > 1 ? "." + parts[1] : "");
};
exports.padZero = padZero;
/**
 * Check the binary bitwise has specific flag or not.
 * @param input the source number.
 * @param flag flag to check.
 * */
var hasFlag = function (input, flag) {
    return (input & flag) == flag;
};
exports.hasFlag = hasFlag;
/**
 * Convert persian rials value to a tooman string.
 * @param input value to convert.
 * */
var toPersianToomanString = function (input) {
    if (!input)
        return "";
    if (typeof input !== "number") {
        input = input.toString().replace(/[,\s]+/g, "");
        input = parseInt(exports.replaceNumbersToEnglish(input));
    }
    if (isNaN(input))
        return "";
    var val = parseFloat(input.toFixed(0));
    if (!val)
        return "";
    var isNegative = val < 0;
    if (isNegative)
        val = val * -1;
    var numInToomans = Math.trunc(val / 10);
    var rialsPart = val % 10;
    var trillions = Math.trunc(numInToomans / 1000000000000);
    numInToomans = numInToomans % 1000000000000;
    var billions = Math.trunc(numInToomans / 1000000000);
    numInToomans = numInToomans % 1000000000;
    var millions = Math.trunc(numInToomans / 1000000);
    numInToomans = numInToomans % 1000000;
    var thousands = Math.trunc(numInToomans / 1000);
    numInToomans = numInToomans % 1000;
    var hundreds = numInToomans;
    var result = "";
    if (trillions > 0)
        result += trillions + " \u0647\u0632\u0627\u0631 \u0645\u06CC\u0644\u06CC\u0627\u0631\u062F \u0648 ";
    if (billions > 0)
        result += billions + " \u0645\u06CC\u0644\u06CC\u0627\u0631\u062F \u0648 ";
    if (millions > 0)
        result += millions + " \u0645\u06CC\u0644\u06CC\u0648\u0646 \u0648 ";
    if (thousands > 0)
        result += thousands + " \u0647\u0632\u0627\u0631 \u0648 ";
    if (hundreds > 0)
        result += "" + hundreds;
    if (result.endsWith(" و "))
        result = result.substring(0, result.length - 3);
    if (result.length > 0)
        result += " تومان";
    if (rialsPart !== 0) {
        if (result.length > 0)
            result += " \u0648 ";
        result += rialsPart + " \u0631\u06CC\u0627\u0644";
    }
    return exports.replaceNumbersToPersian(result);
};
exports.toPersianToomanString = toPersianToomanString;
/**
 * Convert Georgian date to Jalali (persian) date.
 * @param input date to convert.
 * @returns returns an object with jalali year, month and day.
 * */
var toJalaliDate = function (input) {
    var breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
    var calculateJalaliLeap = function (jalaliYear, withoutLeap) {
        var bl = breaks.length;
        var gy = jalaliYear + 621;
        var leapJ = -14;
        var jp = breaks[0];
        var jm;
        var jump;
        var leap;
        var leapG;
        var march;
        var n;
        var i;
        if (jalaliYear < jp || jalaliYear >= breaks[bl - 1])
            throw new Error("Invalid Jalali year " + jalaliYear);
        for (i = 1; i < bl; i += 1) {
            jm = breaks[i];
            jump = jm - jp;
            if (jalaliYear < jm)
                break;
            leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
            jp = jm;
        }
        n = jalaliYear - jp;
        leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
        if (jump && mod(jump, 33) === 4 && jump - n === 4)
            leapJ += 1;
        leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;
        march = 20 + leapJ - leapG;
        if (withoutLeap)
            return { gy: gy, march: march };
        if (jump && jump - n < 6)
            n = n - jump + div(jump + 4, 33) * 33;
        leap = mod(mod(n + 1, 33) - 1, 4);
        if (leap === -1) {
            leap = 4;
        }
        return { leap: leap, gy: gy, march: march };
    };
    var numericToJalali = function (numeric) {
        var georgianYear = numericToGregorian(numeric).year; // Calculate Gregorian year (gy).
        var jalaliYear = georgianYear - 621;
        var r = calculateJalaliLeap(jalaliYear, false);
        var jdn1f = georgianToNumeric(georgianYear, 3, r.march);
        var jalaliDay;
        var jalaliMonth;
        var k;
        k = numeric - jdn1f;
        if (k >= 0) {
            if (k <= 185) {
                jalaliMonth = 1 + div(k, 31);
                jalaliDay = mod(k, 31) + 1;
                return { year: jalaliYear, month: jalaliMonth, day: jalaliDay };
            }
            else {
                k -= 186;
            }
        }
        else {
            jalaliYear -= 1;
            k += 179;
            if (r.leap === 1)
                k += 1;
        }
        jalaliMonth = 7 + div(k, 30);
        jalaliDay = mod(k, 30) + 1;
        return { year: jalaliYear, month: jalaliMonth, day: jalaliDay };
    };
    var georgianToNumeric = function (year, month, day) {
        var numeric = div((year + div(month - 8, 6) + 100100) * 1461, 4) + div(153 * mod(month + 9, 12) + 2, 5) + day - 34840408;
        numeric = numeric - div(div(year + 100100 + div(month - 8, 6), 100) * 3, 4) + 752;
        return numeric;
    };
    var numericToGregorian = function (numeric) {
        var j, i, day, month, year;
        j = 4 * numeric + 139361631;
        j = j + div(div(4 * numeric + 183187720, 146097) * 3, 4) * 4 - 3908;
        i = div(mod(j, 1461), 4) * 5 + 308;
        day = div(mod(i, 153), 5) + 1;
        month = mod(div(i, 153), 12) + 1;
        year = div(j, 1461) - 100100 + div(8 - month, 6);
        return { year: year, month: month, day: day };
    };
    var div = function (a, b) {
        return ~~(a / b);
    };
    var mod = function (a, b) {
        return a - ~~(a / b) * b;
    };
    return numericToJalali(georgianToNumeric(input.getFullYear(), input.getMonth() + 1, input.getDate()));
};
exports.toJalaliDate = toJalaliDate;
/**
 * Check if two date objects are in a same day or not.
 * @param valueToCompare a Date value to compare with the original date.
 * */
var isSameDay = function (date1, date2) {
    if (!date1 && !date2)
        return false;
    if (!date1 || !date2)
        return false;
    var time1 = date1.getTime();
    var time2 = date2.getTime();
    if (isNaN(time1) && isNaN(time2))
        return true;
    if (isNaN(date1.getTime()))
        return false;
    if (isNaN(date2.getTime()))
        return false;
    date1.setHours(0, 0, 0, 0);
    date2.setHours(0, 0, 0, 0);
    return date1.getTime() === date2.getTime();
};
exports.isSameDay = isSameDay;
/**
 * Remove tome and returns date with 00:00:00.000 hours.
 * */
var removeTime = function (date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};
exports.removeTime = removeTime;
/**
 * Add some days to a date object.
 * */
var addDays = function (date, value) {
    if (isNaN(date.getTime()))
        return date;
    return new Date(date.getTime() + value * 1000 * 60 * 60 * 24);
};
exports.addDays = addDays;
/**
 * Add some hours to a date object.
 * */
var addHours = function (date, value) {
    if (isNaN(date.getTime()))
        return date;
    return new Date(date.getTime() + value * 1000 * 60 * 60);
};
exports.addHours = addHours;
/**
 * Add some minutes to a date object.
 * */
var addMinutes = function (date, value) {
    if (isNaN(date.getTime()))
        return date;
    return new Date(date.getTime() + value * 1000 * 60);
};
exports.addMinutes = addMinutes;
/**
 * Add some seconds to a date object.
 * */
var addSeconds = function (date, value) {
    if (isNaN(date.getTime()))
        return date;
    return new Date(date.getTime() + value * 1000);
};
exports.addSeconds = addSeconds;
/**
 * Add some milliseconds to a date object.
 * */
var addMilliseconds = function (date, value) {
    if (isNaN(date.getTime()))
        return date;
    return new Date(date.getTime() + value);
};
exports.addMilliseconds = addMilliseconds;
/**
 * Convert date to string that indicate the distance from now.
 * */
var toTimeAgo = function (date, culture) {
    if (culture === void 0) { culture = "en-US"; }
    if (isNaN(date.getTime()))
        return "";
    var isPersian = culture === "fa-IR";
    var dic = {
        second: "ثانیه",
        ago: "قبل",
        later: "بعد",
        year: "سال",
        day: "روز",
        hour: "ساعت",
        minute: "دقیقه",
    };
    if (!isPersian) {
        dic.second = "second";
        dic.ago = "ago";
        dic.later = "later";
        dic.year = "year";
        dic.day = "day";
        dic.hour = "hour";
        dic.minute = "minute";
    }
    var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    var unit = dic.second;
    var direction = dic.ago;
    if (seconds < 0) {
        seconds = -seconds;
        direction = dic.later;
    }
    var value = seconds;
    if (seconds >= 31536000) {
        value = Math.floor(seconds / 31536000);
        unit = dic.year;
    }
    else if (seconds >= 86400) {
        value = Math.floor(seconds / 86400);
        unit = dic.day;
    }
    else if (seconds >= 3600) {
        value = Math.floor(seconds / 3600);
        unit = dic.hour;
    }
    else if (seconds >= 60) {
        value = Math.floor(seconds / 60);
        unit = dic.minute;
    }
    if (value !== 1 && !isPersian)
        unit = unit + "s";
    var result = value + " " + unit + " " + direction;
    return isPersian ? exports.replaceNumbersToPersian(result) : result;
};
exports.toTimeAgo = toTimeAgo;
/**
 * Convert date to custom date format supports English and Persian cultures.
 * @param format the format that you need e.g. yyyy/MM/dd HH:mm
 * @param culture culture to convert date and numeral characters
 * */
var toCustomLocaleString = function (date, format, culture) {
    if (format === void 0) { format = "yyyy/MM/dd hh:mm"; }
    if (culture === void 0) { culture = "en-US"; }
    if (isNaN(date.getTime()))
        return "";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var weekDay = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();
    var twelveHours = hours;
    if (twelveHours > 12)
        twelveHours = twelveHours - 12;
    var longMonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var shortMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var longWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var shortWeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var amPm = ["AM", "PM"];
    if ((culture || "").toLowerCase() === "fa-ir") {
        longMonthNames = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
        shortMonthNames = longMonthNames;
        longWeekDays = [
            "یکشنبه",
            "دوشنبه",
            "سه‌شنبه",
            "چهارشنبه",
            "پنج‌شنبه",
            "جمعه",
            "شنبه",
        ];
        shortWeekDays = longWeekDays;
        amPm = ["صبح", "عصر"];
        var jalali = exports.toJalaliDate(date);
        year = jalali.year;
        month = jalali.month;
        day = jalali.day;
    }
    var formatParts = format.split(/\W+/);
    var formatSeparators = format.match(/\W+/g) || [];
    var result = "";
    for (var i = 0; i < formatParts.length; i++) {
        var isLast = i === formatParts.length - 1;
        var datePart = formatParts[i];
        var newVal = datePart;
        switch (datePart) {
            case "yyyy":
            case "YYYY":
                newVal = year.toString() || datePart;
                break;
            case "yy":
            case "YY":
                newVal = year.toString().substring(2) || datePart;
                break;
            case "MMMM":
                newVal = longMonthNames[month - 1] || datePart;
                break;
            case "MMM":
                newVal = shortMonthNames[month - 1] || datePart;
                break;
            case "MM":
                newVal = exports.padZero(month, 2) || datePart;
                break;
            case "M":
                newVal = month.toString() || datePart;
                break;
            case "dddd":
            case "DDDD":
                newVal = longWeekDays[weekDay] || datePart;
                break;
            case "ddd":
            case "DDD":
                newVal = shortWeekDays[weekDay] || datePart;
                break;
            case "dd":
            case "DD":
                newVal = exports.padZero(day, 2) || datePart;
                break;
            case "d":
            case "D":
                newVal = day.toString() || datePart;
                break;
            case "HH":
                newVal = exports.padZero(hours, 2) || datePart;
                break;
            case "H":
                newVal = hours.toString() || datePart;
                break;
            case "hh":
                newVal = exports.padZero(twelveHours, 2) || datePart;
                break;
            case "h":
                newVal = twelveHours.toString() || datePart;
                break;
            case "mm":
                newVal = exports.padZero(minutes, 2) || datePart;
                break;
            case "m":
                newVal = minutes.toString() || datePart;
                break;
            case "SS":
            case "ss":
                newVal = exports.padZero(seconds, 2) || datePart;
                break;
            case "S":
            case "s":
                newVal = seconds.toString() || datePart;
                break;
            case "SSS":
            case "sss":
                newVal = milliseconds.toString() || datePart;
                break;
            case "aa":
            case "a":
            case "AA":
            case "A":
                newVal = (hours < 12 ? amPm[0] : amPm[1]) || datePart;
                break;
        }
        result += newVal + (isLast ? "" : formatSeparators[i]);
    }
    if ((culture || "") === "fa-IR")
        return exports.replaceNumbersToPersian(result);
    return result;
};
exports.toCustomLocaleString = toCustomLocaleString;
exports.default = {
    plainTextToHtml: exports.plainTextToHtml,
    toDate: exports.toDate,
    splitCamelCase: exports.splitCamelCase,
    digitGrouping: exports.digitGrouping,
    toDecimal: exports.toDecimal,
    toBoolean: exports.toBoolean,
    cleanupNumber: exports.cleanupNumber,
    cleanupMobile: exports.cleanupMobile,
    isValidMobile: exports.isValidMobile,
    cleanupEmail: exports.cleanupEmail,
    isValidEmail: exports.isValidEmail,
    replaceNumbersToEnglish: exports.replaceNumbersToEnglish,
    replaceNumbersToPersian: exports.replaceNumbersToPersian,
    replaceNumbersToLocalized: exports.replaceNumbersToLocalized,
    truncate: exports.truncate,
    padZero: exports.padZero,
    hasFlag: exports.hasFlag,
    toPersianToomanString: exports.toPersianToomanString,
    toJalaliDate: exports.toJalaliDate,
    isSameDay: exports.isSameDay,
    removeTime: exports.removeTime,
    addDays: exports.addDays,
    addHours: exports.addHours,
    addMinutes: exports.addMinutes,
    addSeconds: exports.addSeconds,
    addMilliseconds: exports.addMilliseconds,
    toTimeAgo: exports.toTimeAgo,
    toCustomLocaleString: exports.toCustomLocaleString,
};
