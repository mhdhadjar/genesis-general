/**
 * Remove dangerous characters and replace \n characters to html br tags to render as html.
 * @param input The input value to replace.
 */
export declare const plainTextToHtml: (input: any) => string;
/**
 * Converts anything to date.
 * @param input source object to convert.
 * @param defaultValue If conversion failed, then returns this value.
 */
export declare const toDate: (input: any, defaultValue?: Date) => Date | undefined;
/**
 * Split camel case string and return separated words.
 * @param input The camel cased string to split.
 * @param separator character to place between words.
 */
export declare const splitCamelCase: (input: any, separator?: string) => string;
/**
 * Split number by three digits.
 * @param input string or number to split.
 */
export declare const digitGrouping: (input: any) => string;
/**
 * Convert any convertible types to decimal.
 * @param input string or number to convert.
 * @returns number or NaN if fails.
 * */
export declare const toDecimal: (input: any) => number;
/**
 * Convert any convertible types such as "on", "yes", "true", "" to boolean.
 * @param input string such as "on", "yes", "true", "" or number.
 * */
export declare const toBoolean: (input: any) => boolean;
/**
 * Trim string and convert non-english numeral characters and return a number.
 * @param input value to convert.
 * */
export declare const cleanupNumber: (input: any) => number;
/**
 * Make email address lower also trim spaces to save in database or something.
 * @param input email address to cleanup.
 * */
export declare const cleanupEmail: (input: any) => string;
/**
 * Check the address is a valid email address or not.
 * @param input email address to check.
 * */
export declare const isValidEmail: (input: any) => boolean;
/**
 * Convert all mobile number types to generic format starting with +
 * @param input mobile address to format
 * @param defaultCountryCode if user does not provide the country code use this code as local country code.
 * */
export declare const cleanupMobile: (input: any, defaultCountryCode?: string) => string;
/**
 * Check if the number is a valid mobile number or not.
 * @param input mobile number to check.
 * */
export declare const isValidMobile: (input: any) => boolean;
/**
 * Replace all of arabic and persian numeral characters to english characters.
 * @param input value to convert.
 * */
export declare const replaceNumbersToEnglish: (input: any) => string;
/**
 * Replace all of numeral characters to persian numeral characters.
 * @param input value to convert.
 * */
export declare const replaceNumbersToPersian: (input: any) => string;
/**
 * Replace all of numeral characters to specific culture numeral characters.
 * @param input value to convert.
 * @param cultureName target number format.
 * */
export declare const replaceNumbersToLocalized: (input: any, cultureName?: string) => string;
/**
 * Get a suffix for ordinal values such as st, nd, rd & th.
 * @param input value to calculate.
 * */
export declare const getOrdinalSuffix: (input: any) => string;
/**
 * Convert number to ordinal values such as 1st, 32nd, 33rd & 35th.
 * @param input value to calculate.
 * */
export declare const toOrdinalString: (input: any) => string;
/**
 * If the length of the string is less than or equal to the given number, just return the string without truncating it. Otherwise, truncate the string.
 * @param input string value to truncate.
 * @param max given value as maximum length.
 * @param side string side to truncate "start" or "center" or "end" default is: "end".
 * */
export declare const truncate: (input: any, max?: number, side?: "start" | "center" | "end") => string;
/**
 * Add some zero before number to make number as long as you need.
 * @param input string or number to add zero.
 * @param pad expected number length default is 2.
 * */
export declare const padZero: (input: any, pad?: number) => string;
/**
 * Check the binary bitwise has specific flag or not.
 * @param input the source number.
 * @param flag flag to check.
 * */
export declare const hasFlag: (input: any, flag: number) => boolean;
/**
 * Convert persian rials value to a tooman string.
 * @param input value to convert.
 * */
export declare const toPersianToomanString: (input: any) => string;
/**
 * Calculate age by date of birth.
 * @param dateOfBirth date to calculate.
 * @param until if you want to calculate age at the specific time e.g. age at the time someone graduated.
 * @returns returns the actual age.
 * */
export declare const calculateAge: (dateOfBirth: Date, until?: Date | undefined) => number;
/**
 * Convert Georgian date to Jalali (persian) date.
 * @param input date to convert.
 * @returns returns an object with jalali year, month and day.
 * */
export declare const toJalaliDate: (input: Date) => {
    year: number;
    month: number;
    day: number;
};
/**
 * Check if two date objects are in a same day or not.
 * @param valueToCompare a Date value to compare with the original date.
 * */
export declare const isSameDay: (date1: Date, date2: Date) => boolean;
/**
 * Remove tome and returns date with 00:00:00.000 hours.
 * */
export declare const removeTime: (date: Date) => Date;
/**
 * Add some days to a date object.
 * */
export declare const addDays: (date: Date, value: number) => Date;
/**
 * Add some hours to a date object.
 * */
export declare const addHours: (date: Date, value: number) => Date;
/**
 * Add some minutes to a date object.
 * */
export declare const addMinutes: (date: Date, value: number) => Date;
/**
 * Add some seconds to a date object.
 * */
export declare const addSeconds: (date: Date, value: number) => Date;
/**
 * Add some milliseconds to a date object.
 * */
export declare const addMilliseconds: (date: Date, value: number) => Date;
/**
 * Convert date to string that indicate the distance from now.
 * */
export declare const toTimeAgo: (date: Date, culture?: string) => string;
/**
 * Convert date to custom date format supports English and Persian cultures.
 * @param format the format that you need e.g. yyyy/MM/dd HH:mm
 * @param culture culture to convert date and numeral characters
 * */
export declare const toCustomLocaleString: (date: Date, format?: string, culture?: string) => string;
declare const _default: {
    plainTextToHtml: (input: any) => string;
    toDate: (input: any, defaultValue?: Date) => Date;
    splitCamelCase: (input: any, separator?: string) => string;
    digitGrouping: (input: any) => string;
    toDecimal: (input: any) => number;
    toBoolean: (input: any) => boolean;
    cleanupNumber: (input: any) => number;
    cleanupMobile: (input: any, defaultCountryCode?: string) => string;
    isValidMobile: (input: any) => boolean;
    cleanupEmail: (input: any) => string;
    isValidEmail: (input: any) => boolean;
    replaceNumbersToEnglish: (input: any) => string;
    replaceNumbersToPersian: (input: any) => string;
    replaceNumbersToLocalized: (input: any, cultureName?: string) => string;
    truncate: (input: any, max?: number, side?: "start" | "center" | "end") => string;
    padZero: (input: any, pad?: number) => string;
    hasFlag: (input: any, flag: number) => boolean;
    toPersianToomanString: (input: any) => string;
    toJalaliDate: (input: Date) => {
        year: number;
        month: number;
        day: number;
    };
    isSameDay: (date1: Date, date2: Date) => boolean;
    removeTime: (date: Date) => Date;
    addDays: (date: Date, value: number) => Date;
    addHours: (date: Date, value: number) => Date;
    addMinutes: (date: Date, value: number) => Date;
    addSeconds: (date: Date, value: number) => Date;
    addMilliseconds: (date: Date, value: number) => Date;
    toTimeAgo: (date: Date, culture?: string) => string;
    toCustomLocaleString: (date: Date, format?: string, culture?: string) => string;
    getOrdinalSuffix: (input: any) => string;
    toOrdinalString: (input: any) => string;
};
export default _default;
