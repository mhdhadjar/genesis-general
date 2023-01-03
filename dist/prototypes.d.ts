declare const Genesis: any;
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
interface Date {
    /**
     * Check if two date objects are in a same day or not.
     * @param valueToCompare a Date value to compare with the original date.
     * */
    isSameDay(valueToCompare: Date): boolean;
    /**
     * Calculate age by date of birth.
     * @param dateOfBirth date to calculate.
     * @returns returns the actual age.
     * */
    calculateAge(dateOfBirth: Date): number;
    /**
     * Calculate age by date of birth.
     * @param dateOfBirth date to calculate.
     * @param until if you want to calculate age at the specific time e.g. age at the time someone graduated.
     * @returns returns the actual age.
     * */
    calculateAge(dateOfBirth: Date, until: Date): number;
    removeTime(): Date;
    toJalaliDate(): {
        year: number;
        month: number;
        day: number;
    };
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
