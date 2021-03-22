import "./prototypes";

it("toDate", () => {
  expect("2021-01-01".toDate()).toEqual(new Date("2021-01-01T00:00:00.000Z"));
  expect((1612125000000).toDate()).toEqual(new Date("2021-01-31T20:30:00.000Z"));

  const defaultDate = new Date(2020, 1, 5);
  expect("some string".toDate(defaultDate)).toBe(defaultDate);
});

it("splitCamelCase", () => {
  expect("thisIsACamelCaseName".splitCamelCase()).toBe("this Is A Camel Case Name");
  expect("thisIsACamelCaseName".splitCamelCase("-")).toBe("this-Is-A-Camel-Case-Name");
  expect("this_is_not_camel_case".splitCamelCase()).toBe("this_is_not_camel_case");
});

it("digitGrouping", () => {
  expect("12.1".digitGrouping()).toBe("12.1");
  expect((1271.1).digitGrouping()).toBe("1,271.1");
  expect("1271.1".digitGrouping()).toBe("1,271.1");
  expect((2700000).digitGrouping()).toBe("2,700,000");
  expect("2700000".digitGrouping()).toBe("2,700,000");
  expect("2,700,000".digitGrouping()).toBe("2,700,000");
  expect("۲۷۵۰۰۰۰".digitGrouping()).toBe("2,750,000");

  expect("aaa".digitGrouping()).toBe("");
});

it("toDecimal", () => {
  expect("1200".toDecimal()).toBe(1200);
  expect("۱۲۰۰٫۱۱".toDecimal()).toBe(1200.11);
  expect("12.1".toDecimal()).toBe(12.1);
  expect((12.1).toDecimal()).toBe(12.1);
  expect("Some String".toDecimal()).toBe(NaN);
});

it("toBoolean", () => {
  expect((1).toBoolean()).toBe(true);
  expect(true.toBoolean()).toBe(true);
  expect("true".toBoolean()).toBe(true);
  expect("on".toBoolean()).toBe(true);
  expect("yes".toBoolean()).toBe(true);
  expect("True".toBoolean()).toBe(true);
  expect("On".toBoolean()).toBe(true);
  expect("Yes".toBoolean()).toBe(true);

  expect((22).toBoolean()).toBe(false);
  expect((0).toBoolean()).toBe(false);
  expect("Some String".toBoolean()).toBe(false);
  expect(false.toBoolean()).toBe(false);
  expect("false".toBoolean()).toBe(false);
  expect("off".toBoolean()).toBe(false);
  expect("no".toBoolean()).toBe(false);
});

it("cleanupNumber", () => {
  expect(true.cleanupNumber()).toBe(NaN);
  expect((145).cleanupNumber()).toBe(145);
  expect("120".cleanupNumber()).toBe(120);
  expect("  73 ".cleanupNumber()).toBe(73);
  expect("-125".cleanupNumber()).toBe(-125);
  expect("256,254.33".cleanupNumber()).toBe(256254.33);
  expect(".33".cleanupNumber()).toBe(0.33);
  expect("11.23".cleanupNumber()).toBe(11.23);
  expect("۴۴٫۶۶".cleanupNumber()).toBe(44.66);
});

it("cleanupMobile", () => {
  expect("+19126725570".cleanupMobile()).toBe("+19126725570");
  expect("09126725570".cleanupMobile()).toBe("+19126725570");
  expect("+1912 672 5570".cleanupMobile()).toBe("+19126725570");
  expect("+1912 672 5570".cleanupMobile()).toBe("+19126725570");
  expect("001912 672 5570".cleanupMobile()).toBe("+19126725570");

  expect("".cleanupMobile()).toBe("");
  expect("Some String".cleanupMobile("Some String")).toBe("");
});

it("isValidMobile", () => {
  expect("+19126725570".isValidMobile()).toBe(true);
  expect("09126725570".isValidMobile()).toBe(true);
  expect("+1912(672)5570".isValidMobile()).toBe(true);
  expect("+1912 672 5570".isValidMobile()).toBe(true);
  expect("001912 672 5570".isValidMobile()).toBe(true);

  expect("".isValidMobile()).toBe(false);
  expect("Some String".isValidMobile()).toBe(false);
});

it("cleanupEmail", () => {
  expect(" Test@server.com ".cleanupEmail()).toBe("test@server.com");
  expect("    test@server.com ".cleanupEmail()).toBe("test@server.com");
  expect("".cleanupEmail()).toBe("");
});

it("isValidEmail", () => {
  expect(" Test@server.com ".isValidEmail()).toBe(true);
  expect("    test@server.com ".isValidEmail()).toBe(true);
  expect("".isValidEmail()).toBe(false);
});

it("replaceNumbersToEnglish", () => {
  expect("۱۲٫۳۳۶".replaceNumbersToEnglish()).toBe("12.336");
});

it("replaceNumbersToPersian", () => {
  expect("12.336".replaceNumbersToPersian()).toBe("۱۲.۳۳۶");
  expect((12.336).replaceNumbersToPersian()).toBe("۱۲.۳۳۶");
  expect((126).replaceNumbersToPersian()).toBe("۱۲۶");
});

it("truncate", () => {
  const longString =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const truncatedLongString =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has sur …";
  expect(longString.truncate()).toBe(truncatedLongString);
  expect("this text should be truncated".truncate(20)).toBe("this text should be …");
  expect("this text should be truncated".truncate(20, "start")).toBe("… should be truncated");
  expect("this text should be truncated".truncate(20, "center")).toBe("this text … truncated");
});

it("padZero", () => {
  expect("1".padZero()).toBe("01");
  expect("2.25".padZero()).toBe("02.25");
  expect((1).padZero()).toBe("01");
  expect((2.25).padZero()).toBe("02.25");
  expect("Some String".padZero()).toBe("");
});

it("hasFlag", () => {
  expect((1).hasFlag(2)).toBe(false);
  expect((1 | 1).hasFlag(2)).toBe(false);
  expect((1 | 4).hasFlag(2)).toBe(false);

  expect((1 | 2).hasFlag(2)).toBe(true);
  expect((1 | 4).hasFlag(4)).toBe(true);
});

it("toPersianToomanString", () => {
  expect("120,000".toPersianToomanString()).toBe("۱۲ هزار تومان");
  expect((120000).toPersianToomanString()).toBe("۱۲ هزار تومان");
  expect((127761235).toPersianToomanString()).toBe("۱۲ میلیون و ۷۷۶ هزار و ۱۲۳ تومان و ۵ ریال");
});

it("toJalaliDate", () => {
  expect(new Date(2020, 11, 11).toJalaliDate()).toEqual({ day: 21, month: 9, year: 1399 });
});

it("isSameDay", () => {
  expect(new Date("2021/11/11 01:28:33").isSameDay(new Date("2021/11/11 07:22:00"))).toBe(true);
  expect(new Date("2021/11/11 11:11:00").isSameDay(new Date("2021/11/11 11:11:00"))).toBe(true);
  expect(new Date("2021/11/12 11:11:00").isSameDay(new Date("2021/11/11 11:11:00"))).toBe(false);
});

it("addValuesToDate", () => {
  expect(new Date("2021/11/11 01:28:33").addDays(2)).toEqual(new Date("2021/11/13 01:28:33"));
  expect(new Date("2021/11/11 01:28:33").addHours(2)).toEqual(new Date("2021/11/11 03:28:33"));
  expect(new Date("2021/11/11 01:28:33").addMinutes(2)).toEqual(new Date("2021/11/11 01:30:33"));
  expect(new Date("2021/11/11 01:28:33").addSeconds(2)).toEqual(new Date("2021/11/11 01:28:35"));
  expect(new Date("2021/11/11 01:28:33.003").addMilliseconds(2)).toEqual(new Date("2021/11/11 01:28:33.005"));
});

it("toTimeAgo", () => {
  const now = new Date();
  const oneYearLater = now.addDays(365);
  const oneYearAgo = now.addDays(-365);
  expect(oneYearLater.toTimeAgo()).toBe("1 year later");
  expect(oneYearAgo.toTimeAgo()).toBe("1 year ago");
  expect(oneYearLater.toTimeAgo()).toBe("1 year later");

  // TODO: Should change to "Just Now"
  expect(now.toTimeAgo()).toBe("0 seconds ago");
});

it("toCustomLocaleString", () => {
  expect(new Date(2021, 7, 7).toCustomLocaleString("yyyy/MM/dd")).toBe("2021/08/07");
  expect(new Date(2021, 7, 7).toCustomLocaleString("dddd d MMMM yyyy")).toBe("Saturday 7 August 2021");

  expect(new Date(2021, 7, 7).toCustomLocaleString("yyyy/MM/dd", "fa-IR")).toBe("۱۴۰۰/۰۵/۱۶");
  expect(new Date(2021, 7, 7).toCustomLocaleString("dddd d MMMM yyyy", "fa-IR")).toBe("شنبه ۱۶ مرداد ۱۴۰۰");
});
