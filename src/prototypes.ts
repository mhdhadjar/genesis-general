const Genesis = require("./index");

//#region String Prototypes ##############################################################
interface String {
  /**
   * Replace \n characters to <br /> to render as html.
   */
  plainTextToHtml(): string;

  /**
   * Converts string to date.
   * @param defaultValue If conversion failed, then returns this value.
   */
  toDate(): Date | undefined;

  /**
   * Converts string to date.
   * @param defaultValue If conversion failed, then returns this value.
   */
  toDate(defaultDate: Date): Date | undefined;

  /**
   * Split camel case string and return separated words.
   * @param separator character to place between words.
   */
  splitCamelCase(separator: string): string;

  /**
   * Split camel case string and return separated words.
   */
  splitCamelCase(): string;

  /**
   * Split number by three digits.
   */
  digitGrouping(): string;

  /**
   * Convert any convertible types to decimal.
   * @returns number or NaN if fails.
   * */
  toDecimal(): number;

  /**
   * Convert any convertible types to integer.
   * @returns number or NaN if fails.
   * */
  toInt(): number;

  /**
   * Convert any convertible types such as "on", "yes", "true", "" to boolean.
   * */
  toBoolean(): boolean;

  /**
   * Trim string and convert non-english numeral characters and return a number.
   * */
  cleanupNumber(): number;

  /**
   * Convert all mobile number types to generic format starting with +
   * @param defaultCountryCode if user does not provide the country code use this code as local country code.
   * */
  cleanupMobile(defaultCountryCode: string): string;

  /**
   * Convert all mobile number types to generic format starting with +
   * */
  cleanupMobile(): string;

  /**
   * Check if the number is a valid mobile number or not.
   * */
  isValidMobile(): boolean;

  /**
   * Make email address lower also trim spaces to save in database or something.
   * */
  cleanupEmail(): string;

  /**
   * Check the address is a valid email address or not.
   * */
  isValidEmail(): boolean;

  /**
   * Replace all of numeral characters to persian numeral characters.
   * */
  replaceNumbersToPersian(): string;

  /**
   * Replace all of arabic and persian numeral characters to english characters.
   * */
  replaceNumbersToEnglish(): string;

  /**
   * Replace all of numeral characters to specific culture numeral characters.
   * */
  replaceNumbersToLocalized(cultureName?: string): string;

  /**
   * If the length of the string is less than or equal to the given number, just return the string without truncating it. Otherwise, truncate the string.
   * */
  truncate(): string;

  /**
   * If the length of the string is less than or equal to the given number, just return the string without truncating it. Otherwise, truncate the string.
   * @param max given value as maximum length.
   * */
  truncate(max: number): string;

  /**
   * If the length of the string is less than or equal to the given number, just return the string without truncating it. Otherwise, truncate the string.
   * @param max given value as maximum length.
   * @param side string side to truncate "start" or "center" or "end" default is: "end".
   * */
  truncate(max: number, side: "start" | "center" | "end"): string;

  /**
   * Add some zero before number to make number as long as you need.
   * */
  padZero(): string;

  /**
   * Add some zero before number to make number as long as you need.
   * @param pad expected number length default is 2.
   * */
  padZero(pad: number): string;

  /**
   * Convert persian rials value to a tooman string.
   * */
  toPersianToomanString(): string;
}

String.prototype.plainTextToHtml = function (): string {
  if (!this) return "";
  return Genesis.plainTextToHtml(this.toString());
};

String.prototype.toDate = function (defaultDate?: Date): Date | undefined {
  return Genesis.toDate(this, defaultDate);
};

String.prototype.splitCamelCase = function (separator: string = " "): string {
  return Genesis.splitCamelCase(this, separator);
};

String.prototype.digitGrouping = function (): string {
  return Genesis.digitGrouping(this);
};

String.prototype.toDecimal = function (): number {
  return Genesis.toDecimal(this);
};

String.prototype.toInt = function (): number {
  return Genesis.toInt(this);
};

String.prototype.toBoolean = function (): boolean {
  return Genesis.toBoolean(this);
};

String.prototype.cleanupNumber = function (): number {
  return Genesis.cleanupNumber(this);
};

String.prototype.cleanupMobile = function (defaultCountryCode: string = "+1"): string {
  return Genesis.cleanupMobile(this, defaultCountryCode);
};

String.prototype.isValidMobile = function (): boolean {
  return Genesis.isValidMobile(this);
};

String.prototype.cleanupEmail = function (): string {
  return Genesis.cleanupEmail(this);
};

String.prototype.isValidEmail = function (): boolean {
  return Genesis.isValidEmail(this);
};

String.prototype.replaceNumbersToPersian = function (): string {
  return Genesis.replaceNumbersToPersian(this);
};

String.prototype.replaceNumbersToEnglish = function (): string {
  return Genesis.replaceNumbersToEnglish(this);
};

String.prototype.replaceNumbersToLocalized = function (cultureName?: string): string {
  return Genesis.replaceNumbersToLocalized(this, cultureName);
};

String.prototype.truncate = function (max: number = 256, side: "start" | "center" | "end" = "end"): string {
  return Genesis.truncate(this, max, side);
};

String.prototype.padZero = function (pad: number = 2): string {
  return Genesis.padZero(this, pad);
};

String.prototype.toPersianToomanString = function (): string {
  return Genesis.toPersianToomanString(this);
};

//#endregion

//#region Number Prototypes ###############################################################

interface Number {
  /**
   * Converts number to date.
   */
  toDate(): Date | undefined;

  /**
   * Converts 0 or 1 numbers to boolean.
   */
  toBoolean(): boolean;

  /**
   * Convert any convertible types to number.
   * */
  cleanupNumber(): number;

  /**
   * Split any convertible types by three digits.
   */
  digitGrouping(): string;

  /**
   * Convert any convertible types to decimal.
   * @returns number or NaN if fails.
   * */
  toDecimal(): number;

  /**
   * Convert any convertible types to integer.
   * @returns number or NaN if fails.
   * */
  toInt(): number;

  /**
   * Replace all of numeral characters to persian numeral characters.
   * */
  replaceNumbersToPersian(): string;

  /**
   * Replace all of numeral characters to specific culture numeral characters.
   * */
  replaceNumbersToLocalized(cultureName?: string): string;

  /**
   * Add some zero before number to make number as long as you need.
   * @param pad expected number length default is 2.
   * */
  padZero(pad: number): string;

  /**
   * Add some zero before number to make number two characters long.
   * */
  padZero(): string;

  /**
   * Check the binary bitwise has specific flag or not.
   * @param flag flag to check.
   * */
  hasFlag(flag: number): boolean;

  /**
   * Convert persian rials value to a tooman string.
   * */
  toPersianToomanString(): string;
}

Number.prototype.toDate = function (): Date | undefined {
  return Genesis.toDate(this);
};

Number.prototype.toBoolean = function (): boolean {
  return Genesis.toBoolean(this);
};

Number.prototype.cleanupNumber = function (): number {
  return Genesis.cleanupNumber(this);
};

Number.prototype.digitGrouping = function (): string {
  return Genesis.digitGrouping(this);
};

Number.prototype.toDecimal = function (): number {
  return Genesis.toDecimal(this);
};

Number.prototype.toInt = function (): number {
  return Genesis.toInt(this);
};

Number.prototype.replaceNumbersToPersian = function (): string {
  return Genesis.replaceNumbersToPersian(this);
};

Number.prototype.replaceNumbersToLocalized = function (cultureName?: string): string {
  return Genesis.replaceNumbersToLocalized(this, cultureName);
};

Number.prototype.padZero = function (pad: number = 2) {
  return Genesis.padZero(this, pad);
};

Number.prototype.hasFlag = function (flag: number): boolean {
  return Genesis.hasFlag(this, flag);
};

Number.prototype.toPersianToomanString = function (): string {
  return Genesis.toPersianToomanString(this);
};

//#endregion

//#region Date Prototypes ###############################################################

interface Date {
  /**
   * Check if two date objects are in a same day or not.
   * @param valueToCompare a Date value to compare with the original date.
   * */
  isSameDay(valueToCompare: Date): boolean;

  removeTime(): Date;

  toJalaliDate(): { year: number; month: number; day: number };

  /**
   * Add some days to a date object.
   * */
  addDays(value: number): Date;

  /**
   * Add some hours to a date object.
   * */
  addHours(value: number): Date;

  /**
   * Add some minutes to a date object.
   * */
  addMinutes(value: number): Date;

  /**
   * Add some seconds to a date object.
   * */
  addSeconds(value: number): Date;

  /**
   * Add some milliseconds to a date object.
   * */
  addMilliseconds(value: number): Date;

  /**
   * Convert date to string that indicate the distance from now.
   * */
  toTimeAgo(culture?: string): string;

  /**
   * Convert date to custom date format supports English and Persian cultures.
   * */
  toCustomLocaleString(): string;

  /**
   * Convert date to custom date format supports English and Persian cultures.
   * @param format the format that you need e.g. yyyy/MM/dd HH:mm
   * */
  toCustomLocaleString(format?: string): string;

  /**
   * Convert date to custom date format supports English and Persian cultures.
   * @param format the format that you need e.g. yyyy/MM/dd HH:mm
   * @param culture culture to convert date and numeral characters
   * */
  toCustomLocaleString(format?: string, culture?: string): string;
}

Date.prototype.toJalaliDate = function (): { year: number; month: number; day: number } {
  return Genesis.toJalaliDate(this);
};

Date.prototype.isSameDay = function (valueToCompare: Date): boolean {
  return Genesis.isSameDay(this, valueToCompare);
};

Date.prototype.removeTime = function (): Date {
  return Genesis.removeTime(this);
};

Date.prototype.addDays = function (value: number): Date {
  return Genesis.addDays(this, value);
};

Date.prototype.addHours = function (value: number): Date {
  return Genesis.addHours(this, value);
};

Date.prototype.addMinutes = function (value: number): Date {
  return Genesis.addMinutes(this, value);
};

Date.prototype.addSeconds = function (value: number): Date {
  return Genesis.addSeconds(this, value);
};

Date.prototype.addMilliseconds = function (value: number): Date {
  return Genesis.addMilliseconds(this, value);
};

Date.prototype.toTimeAgo = function (culture: string = "en-US"): string {
  return Genesis.toTimeAgo(this, culture);
};

Date.prototype.toCustomLocaleString = function (format: string = "yyyy/MM/dd hh:mm", culture: string = "en-US"): string {
  return Genesis.toCustomLocaleString(this, format, culture);
};

//#endregion

//#region Boolean Prototypes ###############################################################

interface Boolean {
  /**
   * Convert any convertible types such as "on", "yes", "true", "" to boolean.
   * */
  toBoolean(): boolean;

  /**
   * Trim string and convert non-english numeral characters and return a number.
   * */
  cleanupNumber(): number;
}

Boolean.prototype.toBoolean = function (): boolean {
  return Genesis.toBoolean(this);
};

Boolean.prototype.cleanupNumber = function (): number {
  return Genesis.cleanupNumber(this);
};

//#endregion
