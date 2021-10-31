import Genesis from "./index";

it("plainTextToHtml", () => {
  expect(Genesis.plainTextToHtml("test")).toEqual("test");
  expect(Genesis.plainTextToHtml(null)).toEqual("");
  expect(Genesis.plainTextToHtml(undefined)).toEqual("");
  expect(Genesis.plainTextToHtml("")).toEqual("");
  expect(Genesis.plainTextToHtml("Hi,\nThis is me")).toEqual("Hi,<br />This is me");
  expect(Genesis.plainTextToHtml("Hi,\nThis is me\nMe too")).toEqual("Hi,<br />This is me<br />Me too");
});

it("toDate", () => {
  expect(Genesis.toDate("2021-01-01")).toEqual(new Date("2021-01-01T00:00:00.000Z"));
  expect(Genesis.toDate(1612125000000)).toEqual(new Date("2021-01-31T20:30:00.000Z"));

  const defaultDate = new Date(2020, 1, 5);
  expect(Genesis.toDate("some string", defaultDate)).toBe(defaultDate);
  expect(Genesis.toDate(null, defaultDate)).toBe(defaultDate);
  expect(Genesis.toDate(undefined, defaultDate)).toBe(defaultDate);
  expect(Genesis.toDate(true, defaultDate)).toBe(defaultDate);
});

it("splitCamelCase", () => {
  expect(Genesis.splitCamelCase("thisIsACamelCaseName")).toBe("this Is A Camel Case Name");
  expect(Genesis.splitCamelCase("this_is_not_camel_case")).toBe("this_is_not_camel_case");
  expect(Genesis.splitCamelCase(null)).toBe("");
  expect(Genesis.splitCamelCase(undefined)).toBe("");
});

it("digitGrouping", () => {
  expect(Genesis.digitGrouping("12.1")).toBe("12.1");
  expect(Genesis.digitGrouping(1271.1)).toBe("1,271.1");
  expect(Genesis.digitGrouping("1271.1")).toBe("1,271.1");
  expect(Genesis.digitGrouping(2700000)).toBe("2,700,000");
  expect(Genesis.digitGrouping("2700000")).toBe("2,700,000");
  expect(Genesis.digitGrouping("2,700,000")).toBe("2,700,000");
  expect(Genesis.digitGrouping("۲۷۵۰۰۰۰")).toBe("2,750,000");

  expect(Genesis.digitGrouping("aaa")).toBe("");
  expect(Genesis.digitGrouping(null)).toBe("");
  expect(Genesis.digitGrouping(undefined)).toBe("");
});

it("toDecimal", () => {
  expect(Genesis.toDecimal("1200")).toBe(1200);
  expect(Genesis.toDecimal("۱۲۰۰٫۱۱")).toBe(1200.11);
  expect(Genesis.toDecimal("12.1")).toBe(12.1);
  expect(Genesis.toDecimal(12.1)).toBe(12.1);
  expect(Genesis.toDecimal("Some String")).toBe(NaN);
  expect(Genesis.toDecimal(true)).toBe(NaN);
  expect(Genesis.toDecimal(null)).toBe(NaN);
  expect(Genesis.toDecimal(undefined)).toBe(NaN);
});

it("toBoolean", () => {
  expect(Genesis.toBoolean(1)).toBe(true);
  expect(Genesis.toBoolean(true)).toBe(true);
  expect(Genesis.toBoolean("true")).toBe(true);
  expect(Genesis.toBoolean("on")).toBe(true);
  expect(Genesis.toBoolean("yes")).toBe(true);
  expect(Genesis.toBoolean("True")).toBe(true);
  expect(Genesis.toBoolean("On")).toBe(true);
  expect(Genesis.toBoolean("Yes")).toBe(true);

  expect(Genesis.toBoolean(22)).toBe(false);
  expect(Genesis.toBoolean(0)).toBe(false);
  expect(Genesis.toBoolean("Some String")).toBe(false);
  expect(Genesis.toBoolean(false)).toBe(false);
  expect(Genesis.toBoolean("false")).toBe(false);
  expect(Genesis.toBoolean("off")).toBe(false);
  expect(Genesis.toBoolean("no")).toBe(false);
});

it("cleanupNumber", () => {
  expect(Genesis.cleanupNumber(true)).toBe(NaN);
  expect(Genesis.cleanupNumber(145)).toBe(145);
  expect(Genesis.cleanupNumber("120")).toBe(120);
  expect(Genesis.cleanupNumber("  73 ")).toBe(73);
  expect(Genesis.cleanupNumber("-125")).toBe(-125);
  expect(Genesis.cleanupNumber("256,254.33")).toBe(256254.33);
  expect(Genesis.cleanupNumber(".33")).toBe(0.33);
  expect(Genesis.cleanupNumber("11.23")).toBe(11.23);
  expect(Genesis.cleanupNumber("۴۴٫۶۶")).toBe(44.66);
});

it("cleanupMobile", () => {
  expect(Genesis.cleanupMobile("+19126725570")).toBe("+19126725570");
  expect(Genesis.cleanupMobile("09126725570")).toBe("+19126725570");
  expect(Genesis.cleanupMobile("+1912(672)5570")).toBe("+19126725570");
  expect(Genesis.cleanupMobile("+1912 672 5570")).toBe("+19126725570");
  expect(Genesis.cleanupMobile("001912 672 5570")).toBe("+19126725570");

  expect(Genesis.cleanupMobile("")).toBe("");
  expect(Genesis.cleanupMobile("Some String")).toBe("");
  expect(Genesis.cleanupMobile(null)).toBe("");
  expect(Genesis.cleanupMobile(undefined)).toBe("");
});

it("isValidMobile", () => {
  expect(Genesis.isValidMobile("+19126725570")).toBe(true);
  expect(Genesis.isValidMobile("09126725570")).toBe(true);
  expect(Genesis.isValidMobile("+1912(672)5570")).toBe(true);
  expect(Genesis.isValidMobile("+1912 672 5570")).toBe(true);
  expect(Genesis.isValidMobile("001912 672 5570")).toBe(true);

  expect(Genesis.isValidMobile("")).toBe(false);
  expect(Genesis.isValidMobile("Some String")).toBe(false);
  expect(Genesis.isValidMobile(null)).toBe(false);
  expect(Genesis.isValidMobile(undefined)).toBe(false);
});

it("cleanupEmail", () => {
  expect(Genesis.cleanupEmail(" Test@server.com ")).toBe("test@server.com");
  expect(Genesis.cleanupEmail("    test@server.com ")).toBe("test@server.com");
  expect(Genesis.cleanupEmail("")).toBe("");
  expect(Genesis.cleanupEmail(null)).toBe("");
  expect(Genesis.cleanupEmail(undefined)).toBe("");
});

it("isValidEmail", () => {
  expect(Genesis.isValidEmail(" Test@server.com ")).toBe(true);
  expect(Genesis.isValidEmail("    test@server.com ")).toBe(true);
  expect(Genesis.isValidEmail("")).toBe(false);
  expect(Genesis.isValidEmail(null)).toBe(false);
  expect(Genesis.isValidEmail(undefined)).toBe(false);
});

it("replaceNumbersToEnglish", () => {
  expect(Genesis.replaceNumbersToEnglish("۱۲٫۳۳۶ mins ago")).toBe("12.336 mins ago");
  expect(Genesis.replaceNumbersToEnglish("۱۲٫۳۳۶")).toBe("12.336");
  expect(Genesis.replaceNumbersToEnglish("۰")).toBe("0");
});

it("replaceNumbersToPersian", () => {
  expect(Genesis.replaceNumbersToPersian("12.336 mins ago")).toBe("۱۲.۳۳۶ mins ago");
  expect(Genesis.replaceNumbersToPersian("12.336")).toBe("۱۲.۳۳۶");
  expect(Genesis.replaceNumbersToPersian(12.336)).toBe("۱۲.۳۳۶");
  expect(Genesis.replaceNumbersToPersian(126)).toBe("۱۲۶");
  expect(Genesis.replaceNumbersToPersian(0)).toBe("۰");
});

it("replaceNumbersToLocalized", () => {
  expect(Genesis.replaceNumbersToLocalized("12.336", "fa-IR")).toBe("۱۲.۳۳۶");
  expect(Genesis.replaceNumbersToLocalized(12.336, "fa-IR")).toBe("۱۲.۳۳۶");
  expect(Genesis.replaceNumbersToLocalized(126, "fa-IR")).toBe("۱۲۶");
  expect(Genesis.replaceNumbersToLocalized(0, "fa-IR")).toBe("۰");

  expect(Genesis.replaceNumbersToLocalized("۱۲٫۳۳۶", "en-US")).toBe("12.336");
  expect(Genesis.replaceNumbersToLocalized("۱۲٫۳۳۶", "en-UK")).toBe("12.336");
  expect(Genesis.replaceNumbersToLocalized("۱۲٫۳۳۶", "en-AU")).toBe("12.336");
  expect(Genesis.replaceNumbersToLocalized("۰", "en-AU")).toBe("0");
});

it("truncate", () => {
  expect(Genesis.truncate("this text should be truncated", 20)).toBe("this text should be …");
  expect(Genesis.truncate("this text should be truncated", 20, "start")).toBe("… should be truncated");
  expect(Genesis.truncate("this text should be truncated", 20, "center")).toBe("this text … truncated");
});

it("padZero", () => {
  expect(Genesis.padZero(0)).toBe("00");
  expect(Genesis.padZero("1")).toBe("01");
  expect(Genesis.padZero("2.25")).toBe("02.25");
  expect(Genesis.padZero(1)).toBe("01");
  expect(Genesis.padZero(2.25)).toBe("02.25");
  expect(Genesis.padZero("Some String")).toBe("");
  expect(Genesis.padZero(null)).toBe("");
  expect(Genesis.padZero(undefined)).toBe("");
});

it("hasFlag", () => {
  expect(Genesis.hasFlag(1, 2)).toBe(false);
  expect(Genesis.hasFlag(1 | 1, 2)).toBe(false);
  expect(Genesis.hasFlag(1 | 4, 2)).toBe(false);

  expect(Genesis.hasFlag(1 | 2, 2)).toBe(true);
  expect(Genesis.hasFlag(1 | 4, 4)).toBe(true);
});

it("toPersianToomanString", () => {
  expect(Genesis.toPersianToomanString("120,000")).toBe("۱۲ هزار تومان");
  expect(Genesis.toPersianToomanString(120000)).toBe("۱۲ هزار تومان");
  expect(Genesis.toPersianToomanString(127761235)).toBe("۱۲ میلیون و ۷۷۶ هزار و ۱۲۳ تومان و ۵ ریال");
});

it("toJalaliDate", () => {
  expect(Genesis.toJalaliDate(new Date(2020, 11, 11))).toEqual({ day: 21, month: 9, year: 1399 });
});

it("isSameDay", () => {
  expect(Genesis.isSameDay(new Date("2021/11/11 01:28:33"), new Date("2021/11/11 07:22:00"))).toBe(true);
  expect(Genesis.isSameDay(new Date("2021/11/11 11:11:00"), new Date("2021/11/11 11:11:00"))).toBe(true);
  expect(Genesis.isSameDay(new Date("2021/11/12 11:11:00"), new Date("2021/11/11 11:11:00"))).toBe(false);
});

it("removeTime", () => {
  expect(Genesis.removeTime(new Date("2021/11/11 01:28:33")).getTime()).toBe(new Date("2021/11/11 00:00:00").getTime());
  expect(Genesis.removeTime(new Date("2021/11/11 00:00:00")).getTime()).toBe(new Date("2021/11/11 00:00:00").getTime());
});

it("addValuesToDate", () => {
  expect(Genesis.addDays(new Date("2021/11/11 01:28:33"), 2)).toEqual(new Date("2021/11/13 01:28:33"));
  expect(Genesis.addHours(new Date("2021/11/11 01:28:33"), 2)).toEqual(new Date("2021/11/11 03:28:33"));
  expect(Genesis.addMinutes(new Date("2021/11/11 01:28:33"), 2)).toEqual(new Date("2021/11/11 01:30:33"));
  expect(Genesis.addSeconds(new Date("2021/11/11 01:28:33"), 2)).toEqual(new Date("2021/11/11 01:28:35"));
  expect(Genesis.addMilliseconds(new Date("2021/11/11 01:28:33.003"), 2)).toEqual(new Date("2021/11/11 01:28:33.005"));
});

it("toTimeAgo", () => {
  const now = new Date();
  const oneYearLater = Genesis.addDays(now, 365);
  const oneYearAgo = Genesis.addDays(now, -365);
  expect(Genesis.toTimeAgo(oneYearLater)).toBe("1 year later");
  expect(Genesis.toTimeAgo(oneYearAgo)).toBe("1 year ago");
  expect(Genesis.toTimeAgo(oneYearLater)).toBe("1 year later");

  // TODO: Should change to "Just Now"
  expect(Genesis.toTimeAgo(now)).toBe("0 seconds ago");
});

it("toCustomLocaleString", () => {
  expect(Genesis.toCustomLocaleString(new Date(2021, 7, 7), "yyyy/MM/dd")).toBe("2021/08/07");
  expect(Genesis.toCustomLocaleString(new Date(2021, 7, 7), "dddd d MMMM yyyy")).toBe("Saturday 7 August 2021");

  expect(Genesis.toCustomLocaleString(new Date(2021, 7, 7), "yyyy/MM/dd", "fa-IR")).toBe("۱۴۰۰/۰۵/۱۶");
  expect(Genesis.toCustomLocaleString(new Date(2021, 7, 7), "dddd d MMMM yyyy", "fa-IR")).toBe("شنبه ۱۶ مرداد ۱۴۰۰");
});
