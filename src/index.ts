/**
 * Remove dangerous characters and replace \n characters to html br tags to render as html.
 * @param input The input value to replace.
 */
export const plainTextToHtml = function (input: any): string {
  if (!input) return "";
  return input.toString().replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br />");
};

/**
 * Converts anything to date.
 * @param input source object to convert.
 * @param defaultValue If conversion failed, then returns this value.
 */
export const toDate = (input: any, defaultValue?: Date): Date | undefined => {
  if (input == null) return defaultValue;
  if (input instanceof Date && !isNaN(input.getDate())) return defaultValue;
  if (typeof input !== "string" && typeof input !== "number") return defaultValue;
  const dateObject = new Date(input);
  if (isNaN(dateObject.getTime())) return defaultValue;
  return dateObject;
};

/**
 * Split camel case string and return separated words.
 * @param input The camel cased string to split.
 * @param separator character to place between words.
 */
export const splitCamelCase = (input: any, separator: string = " "): string => {
  if (input == null) return "";

  input = input.trim();

  //Is not pascal case
  if (!/[a-z][A-Z]/.test(input)) return input;

  //If is null or abbreviation.
  if (!input || input.trim().toUpperCase() === input.trim()) return input;

  var array = input.split(/([A-Z][a-z]+)/).filter((e: string) => {
    return e;
  });

  return array.join(separator);
};

/**
 * Split number by three digits.
 * @param input string or number to split.
 */
export const digitGrouping = (input: any): string => {
  if (input == null) return "";

  if (typeof input !== "string") input = input.toString();

  input = input.trim();
  input = input.replace(/,/g, "");
  input = replaceNumbersToEnglish(input);

  if (!/^([0-9]+)(\.[0-9]+)?$/.test(input)) return "";

  var parts = input.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

/**
 * Convert any convertible types to decimal.
 * @param input string or number to convert.
 * @returns number or NaN if fails.
 * */
export const toDecimal = (input: any): number => {
  if (!input) return NaN;
  let s = input.toString().trim();
  if (!s) return 0;
  s = replaceNumbersToEnglish(s);
  s = s.replace(/[,()]/g, "");

  return parseFloat(s);
};

/**
 * Convert any convertible types such as "on", "yes", "true", "" to boolean.
 * @param input string such as "on", "yes", "true", "" or number.
 * */
export const toBoolean = (input: any): boolean => {
  if (!input) return false;
  const str = input.toString().toLowerCase();
  return str === "true" || str === "1" || str === "yes" || str === "on";
};

/**
 * Trim string and convert non-english numeral characters and return a number.
 * @param input value to convert.
 * */
export const cleanupNumber = (input: any): number => {
  if (!input) return NaN;
  let s = input.toString();
  s = s.replace(/[,\s]+/g, "");

  s = replaceNumbersToEnglish(s);
  return parseFloat(s);
};

/**
 * Make email address lower also trim spaces to save in database or something.
 * @param input email address to cleanup.
 * */
export const cleanupEmail = (input: any): string => {
  if (!input) return "";
  input = input.trim().toLowerCase();
  return input;
};

/**
 * Check the address is a valid email address or not.
 * @param input email address to check.
 * */
export const isValidEmail = (input: any): boolean => {
  if (!input) return false;
  let s = input.toString();
  if (!s) return false;
  s = cleanupEmail(s);
  return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(
    s
  );
};

/**
 * Convert all mobile number types to generic format starting with +
 * @param input mobile address to format
 * @param defaultCountryCode if user does not provide the country code use this code as local country code.
 * */
export const cleanupMobile = (input: any, defaultCountryCode: string = "+1"): string => {
  if (!input) return "";
  let s = input.toString();

  if (typeof s !== "string") s = (s as any).toString();

  s = s.replace(/[()\-_[\]]+/g, "");
  s = cleanupNumber(s.toString()).toString();

  if (s.length === 10) s = defaultCountryCode + s;
  if (!/^(00|\+)/.test(s)) s = `00${s}`;
  if (/^0[0-9]{10,10}$/.test(s)) s = `+1${s.substring(1)}`;
  if (/^00/.test(s)) s = `+${s.substring(2)}`;
  if (/^\+[0-9]{11,16}$/.test(s)) return s;

  return "";
};

/**
 * Check if the number is a valid mobile number or not.
 * @param input mobile number to check.
 * */
export const isValidMobile = (input: any): boolean => {
  if (!input) return false;
  let s = input.toString();
  if (!s) return false;
  s = cleanupMobile(s);
  return /^(00|\+)([0-9]{1,4}[0-9]{10,10})$/.test(s);
};

/**
 * Replace all of arabic and persian numeral characters to english characters.
 * @param input value to convert.
 * */
export const replaceNumbersToEnglish = (input: any): string => {
  if (input == null) return "";
  let s = input.toString();

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

/**
 * Replace all of numeral characters to persian numeral characters.
 * @param input value to convert.
 * */
export const replaceNumbersToPersian = (input: any): string => {
  if (input == null) return "";
  let s = input.toString();
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

/**
 * Replace all of numeral characters to specific culture numeral characters.
 * @param input value to convert.
 * @param cultureName target number format.
 * */
export const replaceNumbersToLocalized = (input: any, cultureName?: string): string => {
  if (input == null) return input;

  let s = input.toString();

  if (!cultureName) return s;
  cultureName = cultureName.toString().toLowerCase().trim();
  const parts = cultureName.split("-");
  if (parts.length !== 2) return s;

  const lang = parts[0];

  switch (lang) {
    case "fa":
      return replaceNumbersToPersian(s);
    case "en":
      return replaceNumbersToEnglish(s);
    default:
      return s;
  }
};

/**
 * If the length of the string is less than or equal to the given number, just return the string without truncating it. Otherwise, truncate the string.
 * @param input string value to truncate.
 * @param max given value as maximum length.
 * @param side string side to truncate "start" or "center" or "end" default is: "end".
 * */
export const truncate = (input: any, max: number = 256, side: "start" | "center" | "end" = "end"): string => {
  if (!input) return "s";
  const str = input.toString();
  if (input.length <= max) return str;
  const ellipsis = "…";
  switch (side) {
    case "start":
      return `${ellipsis} ${str.substring(str.length - max).trim()}`;
    case "end":
      return `${str.substring(0, max).trim()} ${ellipsis}`;
    case "center":
      const half = Math.floor(max / 2);
      return `${str.substring(0, half).trim()} ${ellipsis} ${str.substring(str.length - half).trim()}`;
  }
};

/**
 * Add some zero before number to make number as long as you need.
 * @param input string or number to add zero.
 * @param pad expected number length default is 2.
 * */
export const padZero = (input: any, pad: number = 2) => {
  if (input == null) return "";
  if (typeof input !== "number") input = parseFloat(input.toString().trim());
  if (isNaN(input)) return "";
  const num: string = input.toString();
  const parts = num.split(".");
  return parts[0].padStart(pad, "0") + (parts.length > 1 ? "." + parts[1] : "");
};

/**
 * Check the binary bitwise has specific flag or not.
 * @param input the source number.
 * @param flag flag to check.
 * */
export const hasFlag = (input: any, flag: number): boolean => {
  return (input & flag) == flag;
};

/**
 * Convert persian rials value to a tooman string.
 * @param input value to convert.
 * */
export const toPersianToomanString = (input: any): string => {
  if (!input) return "";

  if (typeof input !== "number") {
    input = input.toString().replace(/[,\s]+/g, "");
    input = parseInt(replaceNumbersToEnglish(input));
  }
  if (isNaN(input)) return "";

  let val = parseFloat(input.toFixed(0));

  if (!val) return "";

  let isNegative = val < 0;
  if (isNegative) val = val * -1;

  let numInToomans = Math.trunc(val / 10);

  const rialsPart = val % 10;

  const trillions = Math.trunc(numInToomans / 1000000000000);
  numInToomans = numInToomans % 1000000000000;

  const billions = Math.trunc(numInToomans / 1000000000);
  numInToomans = numInToomans % 1000000000;

  const millions = Math.trunc(numInToomans / 1000000);
  numInToomans = numInToomans % 1000000;

  const thousands = Math.trunc(numInToomans / 1000);
  numInToomans = numInToomans % 1000;

  const hundreds = numInToomans;
  let result = "";

  if (trillions > 0) result += `${trillions} هزار میلیارد و `;
  if (billions > 0) result += `${billions} میلیارد و `;
  if (millions > 0) result += `${millions} میلیون و `;
  if (thousands > 0) result += `${thousands} هزار و `;
  if (hundreds > 0) result += `${hundreds}`;

  if (result.endsWith(" و ")) result = result.substring(0, result.length - 3);

  if (result.length > 0) result += " تومان";

  if (rialsPart !== 0) {
    if (result.length > 0) result += ` و `;
    result += `${rialsPart} ریال`;
  }

  return replaceNumbersToPersian(result);
};

/**
 * Convert Georgian date to Jalali (persian) date.
 * @param input date to convert.
 * @returns returns an object with jalali year, month and day.
 * */
export const toJalaliDate = (input: Date): { year: number; month: number; day: number } => {
  const breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];

  const calculateJalaliLeap = (jalaliYear: number, withoutLeap: boolean) => {
    let bl = breaks.length;
    let gy = jalaliYear + 621;
    let leapJ = -14;
    let jp = breaks[0];
    let jm;
    let jump;
    let leap;
    let leapG;
    let march;
    let n;
    let i;

    if (jalaliYear < jp || jalaliYear >= breaks[bl - 1]) throw new Error("Invalid Jalali year " + jalaliYear);

    for (i = 1; i < bl; i += 1) {
      jm = breaks[i];
      jump = jm - jp;
      if (jalaliYear < jm) break;
      leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
      jp = jm;
    }
    n = jalaliYear - jp;

    leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
    if (jump && mod(jump, 33) === 4 && jump - n === 4) leapJ += 1;

    leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;

    march = 20 + leapJ - leapG;

    if (withoutLeap) return { gy: gy, march: march };

    if (jump && jump - n < 6) n = n - jump + div(jump + 4, 33) * 33;
    leap = mod(mod(n + 1, 33) - 1, 4);
    if (leap === -1) {
      leap = 4;
    }

    return { leap, gy, march };
  };

  const numericToJalali = (numeric: any): { year: number; month: number; day: number } => {
    let georgianYear = numericToGregorian(numeric).year; // Calculate Gregorian year (gy).
    let jalaliYear = georgianYear - 621;
    let r = calculateJalaliLeap(jalaliYear, false);
    let jdn1f = georgianToNumeric(georgianYear, 3, r.march);
    let jalaliDay;
    let jalaliMonth;
    let k;

    k = numeric - jdn1f;
    if (k >= 0) {
      if (k <= 185) {
        jalaliMonth = 1 + div(k, 31);
        jalaliDay = mod(k, 31) + 1;
        return { year: jalaliYear, month: jalaliMonth, day: jalaliDay };
      } else {
        k -= 186;
      }
    } else {
      jalaliYear -= 1;
      k += 179;
      if (r.leap === 1) k += 1;
    }
    jalaliMonth = 7 + div(k, 30);
    jalaliDay = mod(k, 30) + 1;
    return { year: jalaliYear, month: jalaliMonth, day: jalaliDay };
  };

  const georgianToNumeric = (year: number, month: number, day: number) => {
    let numeric = div((year + div(month - 8, 6) + 100100) * 1461, 4) + div(153 * mod(month + 9, 12) + 2, 5) + day - 34840408;
    numeric = numeric - div(div(year + 100100 + div(month - 8, 6), 100) * 3, 4) + 752;
    return numeric;
  };

  const numericToGregorian = (numeric: number) => {
    let j, i, day, month, year;
    j = 4 * numeric + 139361631;
    j = j + div(div(4 * numeric + 183187720, 146097) * 3, 4) * 4 - 3908;
    i = div(mod(j, 1461), 4) * 5 + 308;
    day = div(mod(i, 153), 5) + 1;
    month = mod(div(i, 153), 12) + 1;
    year = div(j, 1461) - 100100 + div(8 - month, 6);
    return { year, month, day };
  };

  const div = (a: number, b: number) => {
    return ~~(a / b);
  };

  const mod = (a: number, b: number) => {
    return a - ~~(a / b) * b;
  };

  return numericToJalali(georgianToNumeric(input.getFullYear(), input.getMonth() + 1, input.getDate()));
};

/**
 * Check if two date objects are in a same day or not.
 * @param valueToCompare a Date value to compare with the original date.
 * */
export const isSameDay = (date1: Date, date2: Date): boolean => {
  if (!date1 && !date2) return false;
  if (!date1 || !date2) return false;
  const time1 = date1.getTime();
  const time2 = date2.getTime();
  if (isNaN(time1) && isNaN(time2)) return true;
  if (isNaN(date1.getTime())) return false;
  if (isNaN(date2.getTime())) return false;
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);

  return date1.getTime() === date2.getTime();
};

/**
 * Remove tome and returns date with 00:00:00.000 hours.
 * */
export const removeTime = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

/**
 * Add some days to a date object.
 * */
export const addDays = (date: Date, value: number): Date => {
  if (isNaN(date.getTime())) return date;
  return new Date(date.getTime() + value * 1000 * 60 * 60 * 24);
};

/**
 * Add some hours to a date object.
 * */
export const addHours = (date: Date, value: number): Date => {
  if (isNaN(date.getTime())) return date;
  return new Date(date.getTime() + value * 1000 * 60 * 60);
};

/**
 * Add some minutes to a date object.
 * */
export const addMinutes = (date: Date, value: number): Date => {
  if (isNaN(date.getTime())) return date;
  return new Date(date.getTime() + value * 1000 * 60);
};

/**
 * Add some seconds to a date object.
 * */
export const addSeconds = (date: Date, value: number): Date => {
  if (isNaN(date.getTime())) return date;
  return new Date(date.getTime() + value * 1000);
};

/**
 * Add some milliseconds to a date object.
 * */
export const addMilliseconds = (date: Date, value: number): Date => {
  if (isNaN(date.getTime())) return date;
  return new Date(date.getTime() + value);
};

/**
 * Convert date to string that indicate the distance from now.
 * */
export const toTimeAgo = (date: Date, culture: string = "en-US"): string => {
  if (isNaN(date.getTime())) return "";
  const isPersian = culture === "fa-IR";
  const dic = {
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

  let seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  let unit = dic.second;
  let direction = dic.ago;
  if (seconds < 0) {
    seconds = -seconds;
    direction = dic.later;
  }
  let value = seconds;
  if (seconds >= 31536000) {
    value = Math.floor(seconds / 31536000);
    unit = dic.year;
  } else if (seconds >= 86400) {
    value = Math.floor(seconds / 86400);
    unit = dic.day;
  } else if (seconds >= 3600) {
    value = Math.floor(seconds / 3600);
    unit = dic.hour;
  } else if (seconds >= 60) {
    value = Math.floor(seconds / 60);
    unit = dic.minute;
  }
  if (value !== 1 && !isPersian) unit = unit + "s";
  const result = value + " " + unit + " " + direction;

  return isPersian ? replaceNumbersToPersian(result) : result;
};

/**
 * Convert date to custom date format supports English and Persian cultures.
 * @param format the format that you need e.g. yyyy/MM/dd HH:mm
 * @param culture culture to convert date and numeral characters
 * */
export const toCustomLocaleString = (date: Date, format: string = "yyyy/MM/dd hh:mm", culture: string = "en-US"): string => {
  if (isNaN(date.getTime())) return "";

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  const weekDay = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  let twelveHours = hours;
  if (twelveHours > 12) twelveHours = twelveHours - 12;

  let longMonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let shortMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let longWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let shortWeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let amPm = ["AM", "PM"];

  if ((culture || "").toLowerCase() === "fa-ir") {
    longMonthNames = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
    shortMonthNames = longMonthNames;

    longWeekDays = [
      "یکشنبه", //
      "دوشنبه", //
      "سه‌شنبه", //
      "چهارشنبه", //
      "پنج‌شنبه", //
      "جمعه", //
      "شنبه",
    ];
    shortWeekDays = longWeekDays;
    amPm = ["صبح", "عصر"];

    const jalali = toJalaliDate(date);
    year = jalali.year;
    month = jalali.month;
    day = jalali.day;
  }

  const formatParts = format.split(/\W+/);
  const formatSeparators = format.match(/\W+/g) || [];

  let result = "";

  for (let i = 0; i < formatParts.length; i++) {
    const isLast = i === formatParts.length - 1;
    const datePart = formatParts[i];

    let newVal = datePart;
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
        newVal = padZero(month, 2) || datePart;
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
        newVal = padZero(day, 2) || datePart;
        break;
      case "d":
      case "D":
        newVal = day.toString() || datePart;
        break;

      case "HH":
        newVal = padZero(hours, 2) || datePart;
        break;
      case "H":
        newVal = hours.toString() || datePart;
        break;

      case "hh":
        newVal = padZero(twelveHours, 2) || datePart;
        break;

      case "h":
        newVal = twelveHours.toString() || datePart;
        break;

      case "mm":
        newVal = padZero(minutes, 2) || datePart;
        break;

      case "m":
        newVal = minutes.toString() || datePart;
        break;

      case "SS":
      case "ss":
        newVal = padZero(seconds, 2) || datePart;
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

  if ((culture || "") === "fa-IR") return replaceNumbersToPersian(result);
  return result;
};

export default {
  plainTextToHtml,
  toDate,
  splitCamelCase,
  digitGrouping,
  toDecimal,
  toBoolean,
  cleanupNumber,
  cleanupMobile,
  isValidMobile,
  cleanupEmail,
  isValidEmail,
  replaceNumbersToEnglish,
  replaceNumbersToPersian,
  replaceNumbersToLocalized,
  truncate,
  padZero,
  hasFlag,
  toPersianToomanString,
  toJalaliDate,
  isSameDay,
  removeTime,
  addDays,
  addHours,
  addMinutes,
  addSeconds,
  addMilliseconds,
  toTimeAgo,
  toCustomLocaleString,
};
