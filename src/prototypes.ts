const Genesis = require("./index");

//#region String Prototypes ##############################################################
interface String {
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

  digitGrouping(): string;
  toDecimal(): number;
  toInt(): number;
  toBoolean(): boolean;
  cleanupNumber(): number;
  cleanupMobile(defaultCountryCode: string): string;
  cleanupMobile(): string;
  isValidMobile(): boolean;

  cleanupEmail(): string;
  isValidEmail(): boolean;

  replaceNumbersToPersian(): string;
  replaceNumbersToEnglish(): string;

  truncate(): string;
  truncate(max: number): string;
  truncate(max: number, side: "start" | "center" | "end"): string;
  padZero(): string;
  padZero(pad: number): string;
  toPersianToomanString(): string;
}

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
  toDate(): Date | undefined;
  toBoolean(): boolean;
  cleanupNumber(): number;
  digitGrouping(): string;
  toDecimal(): number;
  toInt(): number;
  replaceNumbersToPersian(): string;
  padZero(pad: number): string;
  padZero(): string;
  hasFlag(flag: number): boolean;
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
  isSameDay(valueToCompare: Date): boolean;
  toJalaliDate(): { year: number; month: number; day: number };
  addDays(value: number): Date;
  addHours(value: number): Date;
  addMinutes(value: number): Date;
  addSeconds(value: number): Date;
  addMilliseconds(value: number): Date;
  toTimeAgo(culture?: string): string;
  toCustomLocaleString(): string;
  toCustomLocaleString(format?: string): string;
  toCustomLocaleString(format?: string, culture?: string): string;
}

Date.prototype.toJalaliDate = function (): { year: number; month: number; day: number } {
  return Genesis.toJalaliDate(this);
};

Date.prototype.isSameDay = function (valueToCompare: Date): boolean {
  return Genesis.isSameDay(this, valueToCompare);
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
  toBoolean(): boolean;
  cleanupNumber(): number;
}

Boolean.prototype.toBoolean = function (): boolean {
  return Genesis.toBoolean(this);
};

Boolean.prototype.cleanupNumber = function (): number {
  return Genesis.cleanupNumber(this);
};

//#endregion
