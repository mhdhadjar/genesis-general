# Genesis

Genesis is a helper library that provides useful methods and prototypes for Javascript and TypeScript development.

## Installing
```
npm i @genesis/general@https://github.com/mhdhadjar/genesis-general.git
```

### Prototypes
Import prototypes to a top level file e.g. index.js or app.js to use prototypes.

```
import "@genesis/general/dist/prototypes";

const dateString = new Date().toCustomLocaleString("yyyy-MM-dd HH-mm-ss")
```

### Helper Functions
To get rid of null or undefined error, you can use helpers as functions.
```
import Genesis from "@genesis/general";

const dateString = Genesis.toCustomLocaleString(new Date(), "yyyy-MM-dd HH-mm-ss");

```

# Prototypes

## toDate
```
  const item = "2021-01-01".toDate(); // returns new Date("2021-01-01T00:00:00.000Z"));
  const item = (1612125000000).toDate(); // returns new Date("2021-01-31T20:30:00.000Z"));

  const defaultDate = new Date(2020, 1, 5);
  const item = "some string".toDate(defaultDate); // returns defaultDate);
```

## splitCamelCase
```
  const item = "thisIsACamelCaseName".splitCamelCase(); // returns "this Is A Camel Case Name");
  const item = "thisIsACamelCaseName".splitCamelCase("-"); // returns "this-Is-A-Camel-Case-Name");
  const item = "this_is_not_camel_case".splitCamelCase(); // returns "this_is_not_camel_case");
```

## digitGrouping
```
  const item = "12.1".digitGrouping(); // returns "12.1");
  const item = (1271.1).digitGrouping(); // returns "1,271.1");
  const item = "1271.1".digitGrouping(); // returns "1,271.1");
  const item = (2700000).digitGrouping(); // returns "2,700,000");
  const item = "2700000".digitGrouping(); // returns "2,700,000");
  const item = "2,700,000".digitGrouping(); // returns "2,700,000");
  const item = "۲۷۵۰۰۰۰".digitGrouping(); // returns "2,750,000");

  const item = "aaa".digitGrouping(); // returns "");
```

## toDecimal
```
  const item = "1200".toDecimal(); // returns 1200);
  const item = "۱۲۰۰٫۱۱".toDecimal(); // returns 1200.11);
  const item = "12.1".toDecimal(); // returns 12.1);
  const item = (12.1).toDecimal(); // returns 12.1);
  const item = "Some String".toDecimal(); // returns NaN);
```

## toBoolean
```
  const item = (1).toBoolean(); // returns true);
  const item = true.toBoolean(); // returns true);
  const item = "true".toBoolean(); // returns true);
  const item = "on".toBoolean(); // returns true);
  const item = "yes".toBoolean(); // returns true);
  const item = "True".toBoolean(); // returns true);
  const item = "On".toBoolean(); // returns true);
  const item = "Yes".toBoolean(); // returns true);

  const item = (22).toBoolean(); // returns false);
  const item = (0).toBoolean(); // returns false);
  const item = "Some String".toBoolean(); // returns false);
  const item = false.toBoolean(); // returns false);
  const item = "false".toBoolean(); // returns false);
  const item = "off".toBoolean(); // returns false);
  const item = "no".toBoolean(); // returns false);
```

## cleanupNumber
```
  const item = true.cleanupNumber(); // returns NaN);
  const item = (145).cleanupNumber(); // returns 145);
  const item = "120".cleanupNumber(); // returns 120);
  const item = "  73 ".cleanupNumber(); // returns 73);
  const item = "-125".cleanupNumber(); // returns -125);
  const item = "256,254.33".cleanupNumber(); // returns 256254.33);
  const item = ".33".cleanupNumber(); // returns 0.33);
  const item = "11.23".cleanupNumber(); // returns 11.23);
  const item = "۴۴٫۶۶".cleanupNumber(); // returns 44.66);
```

## cleanupMobile
```
  const item = "+19126725570".cleanupMobile(); // returns "+19126725570");
  const item = "09126725570".cleanupMobile(); // returns "+19126725570");
  const item = "+1912 672 5570".cleanupMobile(); // returns "+19126725570");
  const item = "+1912 672 5570".cleanupMobile(); // returns "+19126725570");
  const item = "001912 672 5570".cleanupMobile(); // returns "+19126725570");

  const item = "".cleanupMobile(); // returns "");
  const item = "Some String".cleanupMobile("Some String"); // returns "");
```

## isValidMobile
```
  const item = "+19126725570".isValidMobile(); // returns true);
  const item = "09126725570".isValidMobile(); // returns true);
  const item = "+1912(672)5570".isValidMobile(); // returns true);
  const item = "+1912 672 5570".isValidMobile(); // returns true);
  const item = "001912 672 5570".isValidMobile(); // returns true);

  const item = "".isValidMobile(); // returns false);
  const item = "Some String".isValidMobile(); // returns false);
```

## cleanupEmail
```
  const item = " Test@server.com ".cleanupEmail(); // returns "test@server.com");
  const item = "    test@server.com ".cleanupEmail(); // returns "test@server.com");
  const item = "".cleanupEmail(); // returns "");
```

## isValidEmail
```
  const item = " Test@server.com ".isValidEmail(); // returns true);
  const item = "    test@server.com ".isValidEmail(); // returns true);
  const item = "".isValidEmail(); // returns false);
```

## replaceNumbersToEnglish
```
  const item = "۱۲٫۳۳۶".replaceNumbersToEnglish(); // returns "12.336");
```

## replaceNumbersToPersian
```
  const item = "12.336".replaceNumbersToPersian(); // returns "۱۲.۳۳۶");
  const item = (12.336).replaceNumbersToPersian(); // returns "۱۲.۳۳۶");
  const item = (126).replaceNumbersToPersian(); // returns "۱۲۶");
```

## truncate
```
  const longString =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  
  const truncatedLongString =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has sur …";

  const item = longString.truncate(); // returns truncatedLongString);
  const item = "this text should be truncated".truncate(20); // returns "this text should be …");
  const item = "this text should be truncated".truncate(20, "start"); // returns "… should be truncated");
  const item = "this text should be truncated".truncate(20, "center"); // returns "this text … truncated");
```

## padZero
```
  const item = "1".padZero(); // returns "01");
  const item = "2.25".padZero(); // returns "02.25");
  const item = (1).padZero(); // returns "01");
  const item = (2.25).padZero(); // returns "02.25");
  const item = "Some String".padZero(); // returns "");
```

## hasFlag
```
  const item = (1).hasFlag(2); // returns false);
  const item = (1 | 1).hasFlag(2); // returns false);
  const item = (1 | 4).hasFlag(2); // returns false);

  const item = (1 | 2).hasFlag(2); // returns true);
  const item = (1 | 4).hasFlag(4); // returns true);
```

## toPersianToomanString
```
  const item = "120,000".toPersianToomanString(); // returns "۱۲ هزار تومان");
  const item = (120000).toPersianToomanString(); // returns "۱۲ هزار تومان");
  const item = (127761235).toPersianToomanString(); // returns "۱۲ میلیون و ۷۷۶ هزار و ۱۲۳ تومان و ۵ ریال");
```

## toJalaliDate
```
  const item = new Date(2020, 11, 11).toJalaliDate(); // returns { day: 21, month: 9, year: 1399 });
```

## isSameDay
```
  const item = new Date("2021/11/11 01:28:33").isSameDay(new Date("2021/11/11 07:22:00")); // returns true);
  const item = new Date("2021/11/11 11:11:00").isSameDay(new Date("2021/11/11 11:11:00")); // returns true);
  const item = new Date("2021/11/12 11:11:00").isSameDay(new Date("2021/11/11 11:11:00")); // returns false);
```

## addValuesToDate
```
  const item = new Date("2021/11/11 01:28:33").addDays(2); // returns new Date("2021/11/13 01:28:33"));
  const item = new Date("2021/11/11 01:28:33").addHours(2); // returns new Date("2021/11/11 03:28:33"));
  const item = new Date("2021/11/11 01:28:33").addMinutes(2); // returns new Date("2021/11/11 01:30:33"));
  const item = new Date("2021/11/11 01:28:33").addSeconds(2); // returns new Date("2021/11/11 01:28:35"));
  const item = new Date("2021/11/11 01:28:33.003").addMilliseconds(2); // returns new Date("2021/11/11 01:28:33.005"));
```

## toTimeAgo
```
  const now = new Date();
  const oneYearLater = now.addDays(365);
  const oneYearAgo = now.addDays(-365);
  const item = oneYearLater.toTimeAgo(); // returns "1 year later");
  const item = oneYearAgo.toTimeAgo(); // returns "1 year ago");
  const item = oneYearLater.toTimeAgo(); // returns "1 year later");

  // TODO: Should change to "Just Now"
  const item = now.toTimeAgo(); // returns "0 seconds ago");
```

## toCustomLocaleString
```
  const item = new Date(2021, 7, 7).toCustomLocaleString("yyyy/MM/dd"); // returns "2021/08/07");
  const item = new Date(2021, 7, 7).toCustomLocaleString("dddd d MMMM yyyy"); // returns "Saturday 7 August 2021");

  const item = new Date(2021, 7, 7).toCustomLocaleString("yyyy/MM/dd", "fa-IR"); // returns "۱۴۰۰/۰۵/۱۶");
  const item = new Date(2021, 7, 7).toCustomLocaleString("dddd d MMMM yyyy", "fa-IR"); // returns "شنبه ۱۶ مرداد ۱۴۰۰");
```