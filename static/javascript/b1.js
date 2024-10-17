"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[40120], {
    56419: function(t, e, r) {
        /**
  * vee-validate v2.2.15
  * (c) 2019 Abdelrahman Awad
  * @license MIT
  */
        function n(t) {
            if (null === t || !0 === t || !1 === t)
                return NaN;
            var e = Number(t);
            return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e)
        }
        r.d(e, {
            OZ: function() {
                return Aa
            },
            Rp: function() {
                return $n
            },
            T9: function() {
                return Jn
            },
            jk: function() {
                return aa
            }
        });
        var a = 6e4;
        function i(t) {
            var e = new Date(t.getTime())
              , r = e.getTimezoneOffset();
            e.setSeconds(0, 0);
            var n = e.getTime() % a;
            return r * a + n
        }
        var o = 36e5
          , u = 6e4
          , s = 2
          , c = {
            dateTimeDelimeter: /[T ]/,
            plainTime: /:/,
            timeZoneDelimeter: /[Z ]/i,
            YY: /^(\d{2})$/,
            YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
            YYYY: /^(\d{4})/,
            YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
            MM: /^-(\d{2})$/,
            DDD: /^-?(\d{3})$/,
            MMDD: /^-?(\d{2})-?(\d{2})$/,
            Www: /^-?W(\d{2})$/,
            WwwD: /^-?W(\d{2})-?(\d{1})$/,
            HH: /^(\d{2}([.,]\d*)?)$/,
            HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
            HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
            timezone: /([Z+-].*)$/,
            timezoneZ: /^(Z)$/,
            timezoneHH: /^([+-])(\d{2})$/,
            timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
        };
        function l(t, e) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            if (null === t)
                return new Date(NaN);
            var r = e || {}
              , a = null == r.additionalDigits ? s : n(r.additionalDigits);
            if (2 !== a && 1 !== a && 0 !== a)
                throw new RangeError("additionalDigits must be 0, 1 or 2");
            if (t instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t))
                return new Date(t.getTime());
            if ("number" == typeof t || "[object Number]" === Object.prototype.toString.call(t))
                return new Date(t);
            if ("string" != typeof t && "[object String]" !== Object.prototype.toString.call(t))
                return new Date(NaN);
            var o = d(t), u = f(o.date, a), c = u.year, l, w = h(u.restDateString, c);
            if (isNaN(w))
                return new Date(NaN);
            if (w) {
                var v = w.getTime(), y = 0, p;
                if (o.time && (y = g(o.time),
                isNaN(y)))
                    return new Date(NaN);
                if (o.timezone) {
                    if (p = m(o.timezone),
                    isNaN(p))
                        return new Date(NaN)
                } else
                    p = i(new Date(v + y)),
                    p = i(new Date(v + y + p));
                return new Date(v + y + p)
            }
            return new Date(NaN)
        }
        function d(t) {
            var e = {}, r = t.split(c.dateTimeDelimeter), n;
            if (c.plainTime.test(r[0]) ? (e.date = null,
            n = r[0]) : (e.date = r[0],
            n = r[1],
            c.timeZoneDelimeter.test(e.date) && (e.date = t.split(c.timeZoneDelimeter)[0],
            n = t.substr(e.date.length, t.length))),
            n) {
                var a = c.timezone.exec(n);
                a ? (e.time = n.replace(a[1], ""),
                e.timezone = a[1]) : e.time = n
            }
            return e
        }
        function f(t, e) {
            var r = c.YYY[e], n = c.YYYYY[e], a;
            if (a = c.YYYY.exec(t) || n.exec(t)) {
                var i = a[1];
                return {
                    year: parseInt(i, 10),
                    restDateString: t.slice(i.length)
                }
            }
            if (a = c.YY.exec(t) || r.exec(t)) {
                var o = a[1];
                return {
                    year: 100 * parseInt(o, 10),
                    restDateString: t.slice(o.length)
                }
            }
            return {
                year: null
            }
        }
        function h(t, e) {
            if (null === e)
                return null;
            var r, n, a, i;
            if (0 === t.length)
                return (n = new Date(0)).setUTCFullYear(e),
                n;
            if (r = c.MM.exec(t))
                return n = new Date(0),
                b(e, a = parseInt(r[1], 10) - 1) ? (n.setUTCFullYear(e, a),
                n) : new Date(NaN);
            if (r = c.DDD.exec(t)) {
                n = new Date(0);
                var o = parseInt(r[1], 10);
                return x(e, o) ? (n.setUTCFullYear(e, 0, o),
                n) : new Date(NaN)
            }
            if (r = c.MMDD.exec(t)) {
                n = new Date(0),
                a = parseInt(r[1], 10) - 1;
                var u = parseInt(r[2], 10);
                return b(e, a, u) ? (n.setUTCFullYear(e, a, u),
                n) : new Date(NaN)
            }
            if (r = c.Www.exec(t))
                return T(e, i = parseInt(r[1], 10) - 1) ? w(e, i) : new Date(NaN);
            if (r = c.WwwD.exec(t)) {
                i = parseInt(r[1], 10) - 1;
                var s = parseInt(r[2], 10) - 1;
                return T(e, i, s) ? w(e, i, s) : new Date(NaN)
            }
            return null
        }
        function g(t) {
            var e, r, n;
            if (e = c.HH.exec(t))
                return C(r = parseFloat(e[1].replace(",", "."))) ? r % 24 * o : NaN;
            if (e = c.HHMM.exec(t))
                return C(r = parseInt(e[1], 10), n = parseFloat(e[2].replace(",", "."))) ? r % 24 * o + n * u : NaN;
            if (e = c.HHMMSS.exec(t)) {
                r = parseInt(e[1], 10),
                n = parseInt(e[2], 10);
                var a = parseFloat(e[3].replace(",", "."));
                return C(r, n, a) ? r % 24 * o + n * u + 1e3 * a : NaN
            }
            return null
        }
        function m(t) {
            var e, r, n;
            if (e = c.timezoneZ.exec(t))
                return 0;
            if (e = c.timezoneHH.exec(t))
                return n = parseInt(e[2], 10),
                D() ? (r = n * o,
                "+" === e[1] ? -r : r) : NaN;
            if (e = c.timezoneHHMM.exec(t)) {
                n = parseInt(e[2], 10);
                var a = parseInt(e[3], 10);
                return D(n, a) ? (r = n * o + a * u,
                "+" === e[1] ? -r : r) : NaN
            }
            return 0
        }
        function w(t, e, r) {
            e = e || 0,
            r = r || 0;
            var n = new Date(0);
            n.setUTCFullYear(t, 0, 4);
            var a, i = 7 * e + r + 1 - (n.getUTCDay() || 7);
            return n.setUTCDate(n.getUTCDate() + i),
            n
        }
        var v = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
          , y = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        function p(t) {
            return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
        }
        function b(t, e, r) {
            if (e < 0 || e > 11)
                return !1;
            if (null != r) {
                if (r < 1)
                    return !1;
                var n = p(t);
                if (n && r > y[e])
                    return !1;
                if (!n && r > v[e])
                    return !1
            }
            return !0
        }
        function x(t, e) {
            if (e < 1)
                return !1;
            var r = p(t);
            return !(r && e > 366) && !(!r && e > 365)
        }
        function T(t, e, r) {
            return !(e < 0 || e > 52) && (null == r || !(r < 0 || r > 6))
        }
        function C(t, e, r) {
            return (null == t || !(t < 0 || t >= 25)) && ((null == e || !(e < 0 || e >= 60)) && (null == r || !(r < 0 || r >= 60)))
        }
        function D(t, e) {
            return null == e || !(e < 0 || e > 59)
        }
        function M(t, e, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var a = l(t, r).getTime()
              , i = n(e);
            return new Date(a + i)
        }
        function A(t, e) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = l(t, e);
            return !isNaN(r)
        }
        var $ = {
            lessThanXSeconds: {
                one: "less than a second",
                other: "less than {{count}} seconds"
            },
            xSeconds: {
                one: "1 second",
                other: "{{count}} seconds"
            },
            halfAMinute: "half a minute",
            lessThanXMinutes: {
                one: "less than a minute",
                other: "less than {{count}} minutes"
            },
            xMinutes: {
                one: "1 minute",
                other: "{{count}} minutes"
            },
            aboutXHours: {
                one: "about 1 hour",
                other: "about {{count}} hours"
            },
            xHours: {
                one: "1 hour",
                other: "{{count}} hours"
            },
            xDays: {
                one: "1 day",
                other: "{{count}} days"
            },
            aboutXMonths: {
                one: "about 1 month",
                other: "about {{count}} months"
            },
            xMonths: {
                one: "1 month",
                other: "{{count}} months"
            },
            aboutXYears: {
                one: "about 1 year",
                other: "about {{count}} years"
            },
            xYears: {
                one: "1 year",
                other: "{{count}} years"
            },
            overXYears: {
                one: "over 1 year",
                other: "over {{count}} years"
            },
            almostXYears: {
                one: "almost 1 year",
                other: "almost {{count}} years"
            }
        };
        function U(t, e, r) {
            var n;
            return r = r || {},
            n = "string" == typeof $[t] ? $[t] : 1 === e ? $[t].one : $[t].other.replace("{{count}}", e),
            r.addSuffix ? r.comparison > 0 ? "in " + n : n + " ago" : n
        }
        function _(t) {
            return function(e) {
                var r = e || {}, n = r.width ? String(r.width) : t.defaultWidth, a;
                return t.formats[n] || t.formats[t.defaultWidth]
            }
        }
        var N, k = {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a"
        }, S = {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}"
        }, F = {
            date: _({
                formats: {
                    full: "EEEE, MMMM do, y",
                    long: "MMMM do, y",
                    medium: "MMM d, y",
                    short: "MM/dd/yyyy"
                },
                defaultWidth: "full"
            }),
            time: _({
                formats: k,
                defaultWidth: "full"
            }),
            dateTime: _({
                formats: S,
                defaultWidth: "full"
            })
        }, q = {
            lastWeek: "'last' eeee 'at' p",
            yesterday: "'yesterday at' p",
            today: "'today at' p",
            tomorrow: "'tomorrow at' p",
            nextWeek: "eeee 'at' p",
            other: "P"
        };
        function E(t, e, r, n) {
            return q[t]
        }
        function P(t) {
            return function(e, r) {
                var n = r || {}, a = n.width ? String(n.width) : t.defaultWidth, i, o, u;
                return (o = "formatting" === (n.context ? String(n.context) : "standalone") && t.formattingValues ? t.formattingValues[a] || t.formattingValues[t.defaultFormattingWidth] : t.values[a] || t.values[t.defaultWidth])[t.argumentCallback ? t.argumentCallback(e) : e]
            }
        }
        var Y, Z = {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
        }, O = {
            narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        }, H = {
            narrow: ["S", "M", "T", "W", "T", "F", "S"],
            short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        }, j = {
            narrow: {
                am: "a",
                pm: "p",
                midnight: "mi",
                noon: "n",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night"
            },
            abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night"
            },
            wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night"
            }
        }, W = {
            narrow: {
                am: "a",
                pm: "p",
                midnight: "mi",
                noon: "n",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night"
            },
            abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnight",
                noon: "noon",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night"
            },
            wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnight",
                noon: "noon",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night"
            }
        }, z;
        function L(t, e) {
            var r = Number(t)
              , n = r % 100;
            if (n > 20 || n < 10)
                switch (n % 10) {
                case 1:
                    return r + "st";
                case 2:
                    return r + "nd";
                case 3:
                    return r + "rd"
                }
            return r + "th"
        }
        function I(t) {
            return function(e, r) {
                var n = String(e)
                  , a = r || {}
                  , i = n.match(t.matchPattern);
                if (!i)
                    return null;
                var o = i[0]
                  , u = n.match(t.parsePattern);
                if (!u)
                    return null;
                var s = t.valueCallback ? t.valueCallback(u[0]) : u[0];
                return {
                    value: s = a.valueCallback ? a.valueCallback(s) : s,
                    rest: n.slice(o.length)
                }
            }
        }
        function Q(t) {
            return function(e, r) {
                var n = String(e)
                  , a = r || {}
                  , i = a.width
                  , o = i && t.matchPatterns[i] || t.matchPatterns[t.defaultMatchWidth]
                  , u = n.match(o);
                if (!u)
                    return null;
                var s = u[0], c = i && t.parsePatterns[i] || t.parsePatterns[t.defaultParseWidth], l;
                return l = "[object Array]" === Object.prototype.toString.call(c) ? c.findIndex((function(t) {
                    return t.test(n)
                }
                )) : B(c, (function(t) {
                    return t.test(n)
                }
                )),
                l = t.valueCallback ? t.valueCallback(l) : l,
                {
                    value: l = a.valueCallback ? a.valueCallback(l) : l,
                    rest: n.slice(s.length)
                }
            }
        }
        function B(t, e) {
            for (var r in t)
                if (t.hasOwnProperty(r) && e(t[r]))
                    return r
        }
        var R, G, X = {
            narrow: /^(b|a)/i,
            abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
            wide: /^(before christ|before common era|anno domini|common era)/i
        }, V = {
            any: [/^b/i, /^(a|c)/i]
        }, J = {
            narrow: /^[1234]/i,
            abbreviated: /^q[1234]/i,
            wide: /^[1234](th|st|nd|rd)? quarter/i
        }, K = {
            any: [/1/i, /2/i, /3/i, /4/i]
        }, tt = {
            narrow: /^[jfmasond]/i,
            abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
            wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
        }, et = {
            narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
            any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
        }, rt = {
            narrow: /^[smtwf]/i,
            short: /^(su|mo|tu|we|th|fr|sa)/i,
            abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
            wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
        }, nt = {
            narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
            any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
        }, at = {
            narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
            any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
        }, it = {
            any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i
            }
        }, ot, ut = {
            formatDistance: U,
            formatLong: F,
            formatRelative: E,
            localize: {
                ordinalNumber: L,
                era: P({
                    values: {
                        narrow: ["B", "A"],
                        abbreviated: ["BC", "AD"],
                        wide: ["Before Christ", "Anno Domini"]
                    },
                    defaultWidth: "wide"
                }),
                quarter: P({
                    values: Z,
                    defaultWidth: "wide",
                    argumentCallback: function(t) {
                        return Number(t) - 1
                    }
                }),
                month: P({
                    values: O,
                    defaultWidth: "wide"
                }),
                day: P({
                    values: H,
                    defaultWidth: "wide"
                }),
                dayPeriod: P({
                    values: j,
                    defaultWidth: "wide",
                    formattingValues: W,
                    defaulFormattingWidth: "wide"
                })
            },
            match: {
                ordinalNumber: I({
                    matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                    parsePattern: /\d+/i,
                    valueCallback: function(t) {
                        return parseInt(t, 10)
                    }
                }),
                era: Q({
                    matchPatterns: X,
                    defaultMatchWidth: "wide",
                    parsePatterns: V,
                    defaultParseWidth: "any"
                }),
                quarter: Q({
                    matchPatterns: J,
                    defaultMatchWidth: "wide",
                    parsePatterns: K,
                    defaultParseWidth: "any",
                    valueCallback: function(t) {
                        return t + 1
                    }
                }),
                month: Q({
                    matchPatterns: tt,
                    defaultMatchWidth: "wide",
                    parsePatterns: et,
                    defaultParseWidth: "any"
                }),
                day: Q({
                    matchPatterns: rt,
                    defaultMatchWidth: "wide",
                    parsePatterns: nt,
                    defaultParseWidth: "any"
                }),
                dayPeriod: Q({
                    matchPatterns: at,
                    defaultMatchWidth: "any",
                    parsePatterns: it,
                    defaultParseWidth: "any"
                })
            },
            options: {
                weekStartsOn: 0,
                firstWeekContainsDate: 1
            }
        }, st = 864e5;
        function ct(t, e) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = l(t, e)
              , n = r.getTime();
            r.setUTCMonth(0, 1),
            r.setUTCHours(0, 0, 0, 0);
            var a, i = n - r.getTime();
            return Math.floor(i / st) + 1
        }
        function lt(t, e) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = 1
              , n = l(t, e)
              , a = n.getUTCDay()
              , i = (a < 1 ? 7 : 0) + a - 1;
            return n.setUTCDate(n.getUTCDate() - i),
            n.setUTCHours(0, 0, 0, 0),
            n
        }
        function dt(t, e) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = l(t, e)
              , n = r.getUTCFullYear()
              , a = new Date(0);
            a.setUTCFullYear(n + 1, 0, 4),
            a.setUTCHours(0, 0, 0, 0);
            var i = lt(a, e)
              , o = new Date(0);
            o.setUTCFullYear(n, 0, 4),
            o.setUTCHours(0, 0, 0, 0);
            var u = lt(o, e);
            return r.getTime() >= i.getTime() ? n + 1 : r.getTime() >= u.getTime() ? n : n - 1
        }
        function ft(t, e) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = dt(t, e), n = new Date(0), a;
            return n.setUTCFullYear(r, 0, 4),
            n.setUTCHours(0, 0, 0, 0),
            lt(n, e)
        }
        var ht = 6048e5;
        function gt(t, e) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = l(t, e)
              , n = lt(r, e).getTime() - ft(r, e).getTime();
            return Math.round(n / ht) + 1
        }
        function mt(t, e) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = e || {}
              , a = r.locale
              , i = a && a.options && a.options.weekStartsOn
              , o = null == i ? 0 : n(i)
              , u = null == r.weekStartsOn ? o : n(r.weekStartsOn);
            if (!(u >= 0 && u <= 6))
                throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            var s = l(t, r)
              , c = s.getUTCDay()
              , d = (c < u ? 7 : 0) + c - u;
            return s.setUTCDate(s.getUTCDate() - d),
            s.setUTCHours(0, 0, 0, 0),
            s
        }
        function wt(t, e) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = l(t, e)
              , a = r.getUTCFullYear()
              , i = e || {}
              , o = i.locale
              , u = o && o.options && o.options.firstWeekContainsDate
              , s = null == u ? 1 : n(u)
              , c = null == i.firstWeekContainsDate ? s : n(i.firstWeekContainsDate);
            if (!(c >= 1 && c <= 7))
                throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
            var d = new Date(0);
            d.setUTCFullYear(a + 1, 0, c),
            d.setUTCHours(0, 0, 0, 0);
            var f = mt(d, e)
              , h = new Date(0);
            h.setUTCFullYear(a, 0, c),
            h.setUTCHours(0, 0, 0, 0);
            var g = mt(h, e);
            return r.getTime() >= f.getTime() ? a + 1 : r.getTime() >= g.getTime() ? a : a - 1
        }
        function vt(t, e) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = e || {}, a = r.locale, i = a && a.options && a.options.firstWeekContainsDate, o = null == i ? 1 : n(i), u = null == r.firstWeekContainsDate ? o : n(r.firstWeekContainsDate), s = wt(t, e), c = new Date(0), l;
            return c.setUTCFullYear(s, 0, u),
            c.setUTCHours(0, 0, 0, 0),
            mt(c, e)
        }
        var yt = 6048e5;
        function pt(t, e) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = l(t, e)
              , n = mt(r, e).getTime() - vt(r, e).getTime();
            return Math.round(n / yt) + 1
        }
        var bt = "am"
          , xt = "pm"
          , Tt = "midnight"
          , Ct = "noon"
          , Dt = "morning"
          , Mt = "afternoon"
          , At = "evening"
          , $t = "night"
          , Ut = {
            G: function(t, e, r) {
                var n = t.getUTCFullYear() > 0 ? 1 : 0;
                switch (e) {
                case "G":
                case "GG":
                case "GGG":
                    return r.era(n, {
                        width: "abbreviated"
                    });
                case "GGGGG":
                    return r.era(n, {
                        width: "narrow"
                    });
                default:
                    return r.era(n, {
                        width: "wide"
                    })
                }
            },
            y: function(t, e, r, n) {
                var a = t.getUTCFullYear(), i = a > 0 ? a : 1 - a, o;
                return "yy" === e ? _t(i % 100, 2) : "yo" === e ? r.ordinalNumber(i, {
                    unit: "year"
                }) : _t(i, e.length)
            },
            Y: function(t, e, r, n) {
                var a = wt(t, n), i = a > 0 ? a : 1 - a, o;
                return "YY" === e ? _t(i % 100, 2) : "Yo" === e ? r.ordinalNumber(i, {
                    unit: "year"
                }) : _t(i, e.length)
            },
            R: function(t, e, r, n) {
                var a;
                return _t(dt(t, n), e.length)
            },
            u: function(t, e, r, n) {
                var a;
                return _t(t.getUTCFullYear(), e.length)
            },
            Q: function(t, e, r, n) {
                var a = Math.ceil((t.getUTCMonth() + 1) / 3);
                switch (e) {
                case "Q":
                    return String(a);
                case "QQ":
                    return _t(a, 2);
                case "Qo":
                    return r.ordinalNumber(a, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return r.quarter(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return r.quarter(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return r.quarter(a, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            q: function(t, e, r, n) {
                var a = Math.ceil((t.getUTCMonth() + 1) / 3);
                switch (e) {
                case "q":
                    return String(a);
                case "qq":
                    return _t(a, 2);
                case "qo":
                    return r.ordinalNumber(a, {
                        unit: "quarter"
                    });
                case "qqq":
                    return r.quarter(a, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "qqqqq":
                    return r.quarter(a, {
                        width: "narrow",
                        context: "standalone"
                    });
                default:
                    return r.quarter(a, {
                        width: "wide",
                        context: "standalone"
                    })
                }
            },
            M: function(t, e, r, n) {
                var a = t.getUTCMonth();
                switch (e) {
                case "M":
                    return String(a + 1);
                case "MM":
                    return _t(a + 1, 2);
                case "Mo":
                    return r.ordinalNumber(a + 1, {
                        unit: "month"
                    });
                case "MMM":
                    return r.month(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "MMMMM":
                    return r.month(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return r.month(a, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            L: function(t, e, r, n) {
                var a = t.getUTCMonth();
                switch (e) {
                case "L":
                    return String(a + 1);
                case "LL":
                    return _t(a + 1, 2);
                case "Lo":
                    return r.ordinalNumber(a + 1, {
                        unit: "month"
                    });
                case "LLL":
                    return r.month(a, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "LLLLL":
                    return r.month(a, {
                        width: "narrow",
                        context: "standalone"
                    });
                default:
                    return r.month(a, {
                        width: "wide",
                        context: "standalone"
                    })
                }
            },
            w: function(t, e, r, n) {
                var a = pt(t, n);
                return "wo" === e ? r.ordinalNumber(a, {
                    unit: "week"
                }) : _t(a, e.length)
            },
            I: function(t, e, r, n) {
                var a = gt(t, n);
                return "Io" === e ? r.ordinalNumber(a, {
                    unit: "week"
                }) : _t(a, e.length)
            },
            d: function(t, e, r, n) {
                var a = t.getUTCDate();
                return "do" === e ? r.ordinalNumber(a, {
                    unit: "date"
                }) : _t(a, e.length)
            },
            D: function(t, e, r, n) {
                var a = ct(t, n);
                return "Do" === e ? r.ordinalNumber(a, {
                    unit: "dayOfYear"
                }) : _t(a, e.length)
            },
            E: function(t, e, r, n) {
                var a = t.getUTCDay();
                switch (e) {
                case "E":
                case "EE":
                case "EEE":
                    return r.day(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "EEEEE":
                    return r.day(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return r.day(a, {
                        width: "short",
                        context: "formatting"
                    });
                default:
                    return r.day(a, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            e: function(t, e, r, n) {
                var a = t.getUTCDay()
                  , i = (a - n.weekStartsOn + 8) % 7 || 7;
                switch (e) {
                case "e":
                    return String(i);
                case "ee":
                    return _t(i, 2);
                case "eo":
                    return r.ordinalNumber(i, {
                        unit: "day"
                    });
                case "eee":
                    return r.day(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "eeeee":
                    return r.day(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return r.day(a, {
                        width: "short",
                        context: "formatting"
                    });
                default:
                    return r.day(a, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            c: function(t, e, r, n) {
                var a = t.getUTCDay()
                  , i = (a - n.weekStartsOn + 8) % 7 || 7;
                switch (e) {
                case "c":
                    return String(i);
                case "cc":
                    return _t(i, e.length);
                case "co":
                    return r.ordinalNumber(i, {
                        unit: "day"
                    });
                case "ccc":
                    return r.day(a, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "ccccc":
                    return r.day(a, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return r.day(a, {
                        width: "short",
                        context: "standalone"
                    });
                default:
                    return r.day(a, {
                        width: "wide",
                        context: "standalone"
                    })
                }
            },
            i: function(t, e, r, n) {
                var a = t.getUTCDay()
                  , i = 0 === a ? 7 : a;
                switch (e) {
                case "i":
                    return String(i);
                case "ii":
                    return _t(i, e.length);
                case "io":
                    return r.ordinalNumber(i, {
                        unit: "day"
                    });
                case "iii":
                    return r.day(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "iiiii":
                    return r.day(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "iiiiii":
                    return r.day(a, {
                        width: "short",
                        context: "formatting"
                    });
                default:
                    return r.day(a, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            a: function(t, e, r) {
                var n, a = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
                switch (e) {
                case "a":
                case "aa":
                case "aaa":
                    return r.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "aaaaa":
                    return r.dayPeriod(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return r.dayPeriod(a, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            b: function(t, e, r) {
                var n = t.getUTCHours(), a;
                switch (a = 12 === n ? Ct : 0 === n ? Tt : n / 12 >= 1 ? "pm" : "am",
                e) {
                case "b":
                case "bb":
                case "bbb":
                    return r.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "bbbbb":
                    return r.dayPeriod(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return r.dayPeriod(a, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            B: function(t, e, r) {
                var n = t.getUTCHours(), a;
                switch (a = n >= 17 ? At : n >= 12 ? Mt : n >= 4 ? Dt : $t,
                e) {
                case "B":
                case "BB":
                case "BBB":
                    return r.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "BBBBB":
                    return r.dayPeriod(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return r.dayPeriod(a, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            h: function(t, e, r, n) {
                var a = t.getUTCHours() % 12;
                return 0 === a && (a = 12),
                "ho" === e ? r.ordinalNumber(a, {
                    unit: "hour"
                }) : _t(a, e.length)
            },
            H: function(t, e, r, n) {
                var a = t.getUTCHours();
                return "Ho" === e ? r.ordinalNumber(a, {
                    unit: "hour"
                }) : _t(a, e.length)
            },
            K: function(t, e, r, n) {
                var a = t.getUTCHours() % 12;
                return "Ko" === e ? r.ordinalNumber(a, {
                    unit: "hour"
                }) : _t(a, e.length)
            },
            k: function(t, e, r, n) {
                var a = t.getUTCHours();
                return 0 === a && (a = 24),
                "ko" === e ? r.ordinalNumber(a, {
                    unit: "hour"
                }) : _t(a, e.length)
            },
            m: function(t, e, r, n) {
                var a = t.getUTCMinutes();
                return "mo" === e ? r.ordinalNumber(a, {
                    unit: "minute"
                }) : _t(a, e.length)
            },
            s: function(t, e, r, n) {
                var a = t.getUTCSeconds();
                return "so" === e ? r.ordinalNumber(a, {
                    unit: "second"
                }) : _t(a, e.length)
            },
            S: function(t, e, r, n) {
                var a = e.length, i = t.getUTCMilliseconds(), o;
                return _t(Math.floor(i * Math.pow(10, a - 3)), a)
            },
            X: function(t, e, r, n) {
                var a, i = (n._originalDate || t).getTimezoneOffset();
                if (0 === i)
                    return "Z";
                switch (e) {
                case "X":
                    return kt(i);
                case "XXXX":
                case "XX":
                    return Nt(i);
                default:
                    return Nt(i, ":")
                }
            },
            x: function(t, e, r, n) {
                var a, i = (n._originalDate || t).getTimezoneOffset();
                switch (e) {
                case "x":
                    return kt(i);
                case "xxxx":
                case "xx":
                    return Nt(i);
                default:
                    return Nt(i, ":")
                }
            },
            O: function(t, e, r, n) {
                var a, i = (n._originalDate || t).getTimezoneOffset();
                switch (e) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + St(i, ":");
                default:
                    return "GMT" + Nt(i, ":")
                }
            },
            z: function(t, e, r, n) {
                var a, i = (n._originalDate || t).getTimezoneOffset();
                switch (e) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + St(i, ":");
                default:
                    return "GMT" + Nt(i, ":")
                }
            },
            t: function(t, e, r, n) {
                var a = n._originalDate || t, i;
                return _t(Math.floor(a.getTime() / 1e3), e.length)
            },
            T: function(t, e, r, n) {
                var a, i;
                return _t((n._originalDate || t).getTime(), e.length)
            }
        };
        function _t(t, e) {
            for (var r = t < 0 ? "-" : "", n = Math.abs(t).toString(); n.length < e; )
                n = "0" + n;
            return r + n
        }
        function Nt(t, e) {
            var r = e || "", n = t > 0 ? "-" : "+", a = Math.abs(t), i, o;
            return n + _t(Math.floor(a / 60), 2) + r + _t(a % 60, 2)
        }
        function kt(t, e) {
            var r;
            return t % 60 == 0 ? (t > 0 ? "-" : "+") + _t(Math.abs(t) / 60, 2) : Nt(t, e)
        }
        function St(t, e) {
            var r = t > 0 ? "-" : "+"
              , n = Math.abs(t)
              , a = Math.floor(n / 60)
              , i = n % 60;
            if (0 === i)
                return r + String(a);
            var o = e || "";
            return r + String(a) + o + _t(i, 2)
        }
        function Ft(t, e, r) {
            switch (t) {
            case "P":
                return e.date({
                    width: "short"
                });
            case "PP":
                return e.date({
                    width: "medium"
                });
            case "PPP":
                return e.date({
                    width: "long"
                });
            default:
                return e.date({
                    width: "full"
                })
            }
        }
        function qt(t, e, r) {
            switch (t) {
            case "p":
                return e.time({
                    width: "short"
                });
            case "pp":
                return e.time({
                    width: "medium"
                });
            case "ppp":
                return e.time({
                    width: "long"
                });
            default:
                return e.time({
                    width: "full"
                })
            }
        }
        function Et(t, e, r) {
            var n = t.match(/(P+)(p+)?/), a = n[1], i = n[2], o;
            if (!i)
                return Ft(t, e);
            switch (a) {
            case "P":
                o = e.dateTime({
                    width: "short"
                });
                break;
            case "PP":
                o = e.dateTime({
                    width: "medium"
                });
                break;
            case "PPP":
                o = e.dateTime({
                    width: "long"
                });
                break;
            default:
                o = e.dateTime({
                    width: "full"
                })
            }
            return o.replace("{{date}}", Ft(a, e)).replace("{{time}}", qt(i, e))
        }
        var Pt = {
            p: qt,
            P: Et
        };
        function Yt(t, e, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var a;
            return M(t, -n(e), r)
        }
        var Zt = ["D", "DD", "YY", "YYYY"];
        function Ot(t) {
            return -1 !== Zt.indexOf(t)
        }
        function Ht(t) {
            throw new RangeError("`options.awareOfUnicodeTokens` must be set to `true` to use `" + t + "` token; see: https://git.io/fxCyr")
        }
        var jt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
          , Wt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
          , zt = /^'(.*?)'?$/
          , Lt = /''/g;
        function It(t, e, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var a = String(e)
              , o = r || {}
              , u = o.locale || ut
              , s = u.options && u.options.firstWeekContainsDate
              , c = null == s ? 1 : n(s)
              , d = null == o.firstWeekContainsDate ? c : n(o.firstWeekContainsDate);
            if (!(d >= 1 && d <= 7))
                throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
            var f = u.options && u.options.weekStartsOn
              , h = null == f ? 0 : n(f)
              , g = null == o.weekStartsOn ? h : n(o.weekStartsOn);
            if (!(g >= 0 && g <= 6))
                throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            if (!u.localize)
                throw new RangeError("locale must contain localize property");
            if (!u.formatLong)
                throw new RangeError("locale must contain formatLong property");
            var m = l(t, o);
            if (!A(m, o))
                return "Invalid Date";
            var w, v = Yt(m, i(m), o), y = {
                firstWeekContainsDate: d,
                weekStartsOn: g,
                locale: u,
                _originalDate: m
            }, p;
            return a.match(Wt).map((function(t) {
                var e = t[0], r;
                return "p" === e || "P" === e ? (0,
                Pt[e])(t, u.formatLong, y) : t
            }
            )).join("").match(jt).map((function(t) {
                if ("''" === t)
                    return "'";
                var e = t[0];
                if ("'" === e)
                    return Qt(t);
                var r = Ut[e];
                return r ? (!o.awareOfUnicodeTokens && Ot(t) && Ht(t),
                r(v, t, u.localize, y)) : t
            }
            )).join("")
        }
        function Qt(t) {
            return t.match(zt)[1].replace(Lt, "'")
        }
        function Bt(t, e, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var n = l(t, r)
              , a = l(e, r);
            return n.getTime() > a.getTime()
        }
        function Rt(t, e, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var n = l(t, r)
              , a = l(e, r);
            return n.getTime() < a.getTime()
        }
        function Gt(t, e, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var n = l(t, r)
              , a = l(e, r);
            return n.getTime() === a.getTime()
        }
        function Xt(t, e, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var a = r || {}
              , i = a.locale
              , o = i && i.options && i.options.weekStartsOn
              , u = null == o ? 0 : n(o)
              , s = null == a.weekStartsOn ? u : n(a.weekStartsOn);
            if (!(s >= 0 && s <= 6))
                throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            var c = l(t, r), d = n(e), f, h, g, m = ((d % 7 + 7) % 7 < s ? 7 : 0) + d - c.getUTCDay();
            return c.setUTCDate(c.getUTCDate() + m),
            c
        }
        function Vt(t, e, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var a = l(t, r)
              , i = n(e)
              , o = pt(a, r) - i;
            return a.setUTCDate(a.getUTCDate() - 7 * o),
            a
        }
        function Jt(t, e, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var a = n(e);
            a % 7 == 0 && (a -= 7);
            var i = 1, o = l(t, r), u, s, c, d = ((a % 7 + 7) % 7 < 1 ? 7 : 0) + a - o.getUTCDay();
            return o.setUTCDate(o.getUTCDate() + d),
            o
        }
        function Kt(t, e, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var a = l(t, r)
              , i = n(e)
              , o = gt(a, r) - i;
            return a.setUTCDate(a.getUTCDate() - 7 * o),
            a
        }
        var te = 36e5
          , ee = 6e4
          , re = 1e3
          , ne = /^(1[0-2]|0?\d)/
          , ae = /^(3[0-1]|[0-2]?\d)/
          , ie = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/
          , oe = /^(5[0-3]|[0-4]?\d)/
          , ue = /^(2[0-3]|[0-1]?\d)/
          , se = /^(2[0-4]|[0-1]?\d)/
          , ce = /^(1[0-1]|0?\d)/
          , le = /^(1[0-2]|0?\d)/
          , de = /^[0-5]?\d/
          , fe = /^[0-5]?\d/
          , he = /^\d/
          , ge = /^\d{1,2}/
          , me = /^\d{1,3}/
          , we = /^\d{1,4}/
          , ve = /^-?\d+/
          , ye = /^-?\d/
          , pe = /^-?\d{1,2}/
          , be = /^-?\d{1,3}/
          , xe = /^-?\d{1,4}/
          , Te = /^([+-])(\d{2})(\d{2})?|Z/
          , Ce = /^([+-])(\d{2})(\d{2})|Z/
          , De = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/
          , Me = /^([+-])(\d{2}):(\d{2})|Z/
          , Ae = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
        function $e(t, e, r) {
            var n = e.match(t);
            if (!n)
                return null;
            var a = parseInt(n[0], 10);
            return {
                value: r ? r(a) : a,
                rest: e.slice(n[0].length)
            }
        }
        function Ue(t, e) {
            var r = e.match(t);
            if (!r)
                return null;
            if ("Z" === r[0])
                return {
                    value: 0,
                    rest: e.slice(1)
                };
            var n = "+" === r[1] ? 1 : -1
              , a = r[2] ? parseInt(r[2], 10) : 0
              , i = r[3] ? parseInt(r[3], 10) : 0
              , o = r[5] ? parseInt(r[5], 10) : 0;
            return {
                value: n * (a * te + i * ee + o * re),
                rest: e.slice(r[0].length)
            }
        }
        function _e(t, e) {
            return $e(ve, t, e)
        }
        function Ne(t, e, r) {
            switch (t) {
            case 1:
                return $e(he, e, r);
            case 2:
                return $e(ge, e, r);
            case 3:
                return $e(me, e, r);
            case 4:
                return $e(we, e, r);
            default:
                return $e(new RegExp("^\\d{1," + t + "}"), e, r)
            }
        }
        function ke(t, e, r) {
            switch (t) {
            case 1:
                return $e(ye, e, r);
            case 2:
                return $e(pe, e, r);
            case 3:
                return $e(be, e, r);
            case 4:
                return $e(xe, e, r);
            default:
                return $e(new RegExp("^-?\\d{1," + t + "}"), e, r)
            }
        }
        function Se(t) {
            switch (t) {
            case "morning":
                return 4;
            case "evening":
                return 17;
            case "pm":
            case "noon":
            case "afternoon":
                return 12;
            default:
                return 0
            }
        }
        function Fe(t, e) {
            var r = e > 0, n = r ? e : 1 - e, a;
            if (n <= 50)
                a = t || 100;
            else {
                var i = n + 50, o, u;
                a = t + 100 * Math.floor(i / 100) - (t >= i % 100 ? 100 : 0)
            }
            return r ? a : 1 - a
        }
        var qe = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
          , Ee = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        function Pe(t) {
            return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
        }
        var Ye = {
            G: {
                priority: 140,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "G":
                    case "GG":
                    case "GGG":
                        return r.era(t, {
                            width: "abbreviated"
                        }) || r.era(t, {
                            width: "narrow"
                        });
                    case "GGGGG":
                        return r.era(t, {
                            width: "narrow"
                        });
                    default:
                        return r.era(t, {
                            width: "wide"
                        }) || r.era(t, {
                            width: "abbreviated"
                        }) || r.era(t, {
                            width: "narrow"
                        })
                    }
                },
                set: function(t, e, r) {
                    return t.setUTCFullYear(1 === e ? 10 : -9, 0, 1),
                    t.setUTCHours(0, 0, 0, 0),
                    t
                }
            },
            y: {
                priority: 130,
                parse: function(t, e, r, n) {
                    var a = function(t) {
                        return {
                            year: t,
                            isTwoDigitYear: "yy" === e
                        }
                    };
                    switch (e) {
                    case "y":
                        return Ne(4, t, a);
                    case "yo":
                        return r.ordinalNumber(t, {
                            unit: "year",
                            valueCallback: a
                        });
                    default:
                        return Ne(e.length, t, a)
                    }
                },
                validate: function(t, e, r) {
                    return e.isTwoDigitYear || e.year > 0
                },
                set: function(t, e, r) {
                    var n = wt(t, r);
                    if (e.isTwoDigitYear) {
                        var a = Fe(e.year, n);
                        return t.setUTCFullYear(a, 0, 1),
                        t.setUTCHours(0, 0, 0, 0),
                        t
                    }
                    var i = n > 0 ? e.year : 1 - e.year;
                    return t.setUTCFullYear(i, 0, 1),
                    t.setUTCHours(0, 0, 0, 0),
                    t
                }
            },
            Y: {
                priority: 130,
                parse: function(t, e, r, n) {
                    var a = function(t) {
                        return {
                            year: t,
                            isTwoDigitYear: "YY" === e
                        }
                    };
                    switch (e) {
                    case "Y":
                        return Ne(4, t, a);
                    case "Yo":
                        return r.ordinalNumber(t, {
                            unit: "year",
                            valueCallback: a
                        });
                    default:
                        return Ne(e.length, t, a)
                    }
                },
                validate: function(t, e, r) {
                    return e.isTwoDigitYear || e.year > 0
                },
                set: function(t, e, r) {
                    var n = t.getUTCFullYear();
                    if (e.isTwoDigitYear) {
                        var a = Fe(e.year, n);
                        return t.setUTCFullYear(a, 0, r.firstWeekContainsDate),
                        t.setUTCHours(0, 0, 0, 0),
                        mt(t, r)
                    }
                    var i = n > 0 ? e.year : 1 - e.year;
                    return t.setUTCFullYear(i, 0, r.firstWeekContainsDate),
                    t.setUTCHours(0, 0, 0, 0),
                    mt(t, r)
                }
            },
            R: {
                priority: 130,
                parse: function(t, e, r, n) {
                    return ke("R" === e ? 4 : e.length, t)
                },
                set: function(t, e, r) {
                    var n = new Date(0);
                    return n.setUTCFullYear(e, 0, 4),
                    n.setUTCHours(0, 0, 0, 0),
                    lt(n)
                }
            },
            u: {
                priority: 130,
                parse: function(t, e, r, n) {
                    return ke("u" === e ? 4 : e.length, t)
                },
                set: function(t, e, r) {
                    return t.setUTCFullYear(e, 0, 1),
                    t.setUTCHours(0, 0, 0, 0),
                    t
                }
            },
            Q: {
                priority: 120,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "Q":
                    case "QQ":
                        return Ne(e.length, t);
                    case "Qo":
                        return r.ordinalNumber(t, {
                            unit: "quarter"
                        });
                    case "QQQ":
                        return r.quarter(t, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.quarter(t, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "QQQQQ":
                        return r.quarter(t, {
                            width: "narrow",
                            context: "formatting"
                        });
                    default:
                        return r.quarter(t, {
                            width: "wide",
                            context: "formatting"
                        }) || r.quarter(t, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.quarter(t, {
                            width: "narrow",
                            context: "formatting"
                        })
                    }
                },
                validate: function(t, e, r) {
                    return e >= 1 && e <= 4
                },
                set: function(t, e, r) {
                    return t.setUTCMonth(3 * (e - 1), 1),
                    t.setUTCHours(0, 0, 0, 0),
                    t
                }
            },
            q: {
                priority: 120,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "q":
                    case "qq":
                        return Ne(e.length, t);
                    case "qo":
                        return r.ordinalNumber(t, {
                            unit: "quarter"
                        });
                    case "qqq":
                        return r.quarter(t, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || r.quarter(t, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "qqqqq":
                        return r.quarter(t, {
                            width: "narrow",
                            context: "standalone"
                        });
                    default:
                        return r.quarter(t, {
                            width: "wide",
                            context: "standalone"
                        }) || r.quarter(t, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || r.quarter(t, {
                            width: "narrow",
                            context: "standalone"
                        })
                    }
                },
                validate: function(t, e, r) {
                    return e >= 1 && e <= 4
                },
                set: function(t, e, r) {
                    return t.setUTCMonth(3 * (e - 1), 1),
                    t.setUTCHours(0, 0, 0, 0),
                    t
                }
            },
            M: {
                priority: 110,
                parse: function(t, e, r, n) {
                    var a = function(t) {
                        return t - 1
                    };
                    switch (e) {
                    case "M":
                        return $e(ne, t, a);
                    case "MM":
                        return Ne(2, t, a);
                    case "Mo":
                        return r.ordinalNumber(t, {
                            unit: "month",
                            valueCallback: a
                        });
                    case "MMM":
                        return r.month(t, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.month(t, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "MMMMM":
                        return r.month(t, {
                            width: "narrow",
                            context: "formatting"
                        });
                    default:
                        return r.month(t, {
                            width: "wide",
                            context: "formatting"
                        }) || r.month(t, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.month(t, {
                            width: "narrow",
                            context: "formatting"
                        })
                    }
                },
                validate: function(t, e, r) {
                    return e >= 0 && e <= 11
                },
                set: function(t, e, r) {
                    return t.setUTCMonth(e, 1),
                    t.setUTCHours(0, 0, 0, 0),
                    t
                }
            },
            L: {
                priority: 110,
                parse: function(t, e, r, n) {
                    var a = function(t) {
                        return t - 1
                    };
                    switch (e) {
                    case "L":
                        return $e(ne, t, a);
                    case "LL":
                        return Ne(2, t, a);
                    case "Lo":
                        return r.ordinalNumber(t, {
                            unit: "month",
                            valueCallback: a
                        });
                    case "LLL":
                        return r.month(t, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || r.month(t, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "LLLLL":
                        return r.month(t, {
                            width: "narrow",
                            context: "standalone"
                        });
                    default:
                        return r.month(t, {
                            width: "wide",
                            context: "standalone"
                        }) || r.month(t, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || r.month(t, {
                            width: "narrow",
                            context: "standalone"
                        })
                    }
                },
                validate: function(t, e, r) {
                    return e >= 0 && e <= 11
                },
                set: function(t, e, r) {
                    return t.setUTCMonth(e, 1),
                    t.setUTCHours(0, 0, 0, 0),
                    t
                }
            },
            w: {
                priority: 100,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "w":
                        return $e(oe, t);
                    case "wo":
                        return r.ordinalNumber(t, {
                            unit: "week"
                        });
                    default:
                        return Ne(e.length, t)
                    }
                },
                validate: function(t, e, r) {
                    return e >= 1 && e <= 53
                },
                set: function(t, e, r) {
                    return mt(Vt(t, e, r), r)
                }
            },
            I: {
                priority: 100,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "I":
                        return $e(oe, t);
                    case "Io":
                        return r.ordinalNumber(t, {
                            unit: "week"
                        });
                    default:
                        return Ne(e.length, t)
                    }
                },
                validate: function(t, e, r) {
                    return e >= 1 && e <= 53
                },
                set: function(t, e, r) {
                    return lt(Kt(t, e, r), r)
                }
            },
            d: {
                priority: 90,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "d":
                        return $e(ae, t);
                    case "do":
                        return r.ordinalNumber(t, {
                            unit: "date"
                        });
                    default:
                        return Ne(e.length, t)
                    }
                },
                validate: function(t, e, r) {
                    var n, a = Pe(t.getUTCFullYear()), i = t.getUTCMonth();
                    return a ? e >= 1 && e <= Ee[i] : e >= 1 && e <= qe[i]
                },
                set: function(t, e, r) {
                    return t.setUTCDate(e),
                    t.setUTCHours(0, 0, 0, 0),
                    t
                }
            },
            D: {
                priority: 90,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "D":
                    case "DD":
                        return $e(ie, t);
                    case "Do":
                        return r.ordinalNumber(t, {
                            unit: "date"
                        });
                    default:
                        return Ne(e.length, t)
                    }
                },
                validate: function(t, e, r) {
                    var n, a;
                    return Pe(t.getUTCFullYear()) ? e >= 1 && e <= 366 : e >= 1 && e <= 365
                },
                set: function(t, e, r) {
                    return t.setUTCMonth(0, e),
                    t.setUTCHours(0, 0, 0, 0),
                    t
                }
            },
            E: {
                priority: 90,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "E":
                    case "EE":
                    case "EEE":
                        return r.day(t, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.day(t, {
                            width: "short",
                            context: "formatting"
                        }) || r.day(t, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "EEEEE":
                        return r.day(t, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "EEEEEE":
                        return r.day(t, {
                            width: "short",
                            context: "formatting"
                        }) || r.day(t, {
                            width: "narrow",
                            context: "formatting"
                        });
                    default:
                        return r.day(t, {
                            width: "wide",
                            context: "formatting"
                        }) || r.day(t, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.day(t, {
                            width: "short",
                            context: "formatting"
                        }) || r.day(t, {
                            width: "narrow",
                            context: "formatting"
                        })
                    }
                },
                validate: function(t, e, r) {
                    return e >= 0 && e <= 6
                },
                set: function(t, e, r) {
                    return (t = Xt(t, e, r)).setUTCHours(0, 0, 0, 0),
                    t
                }
            },
            e: {
                priority: 90,
                parse: function(t, e, r, n) {
                    var a = function(t) {
                        var e = 7 * Math.floor((t - 1) / 7);
                        return (t + n.weekStartsOn + 6) % 7 + e
                    };
                    switch (e) {
                    case "e":
                    case "ee":
                        return Ne(e.length, t, a);
                    case "eo":
                        return r.ordinalNumber(t, {
                            unit: "day",
                            valueCallback: a
                        });
                    case "eee":
                        return r.day(t, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.day(t, {
                            width: "short",
                            context: "formatting"
                        }) || r.day(t, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "eeeee":
                        return r.day(t, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "eeeeee":
                        return r.day(t, {
                            width: "short",
                            context: "formatting"
                        }) || r.day(t, {
                            width: "narrow",
                            context: "formatting"
                        });
                    default:
                        return r.day(t, {
                            width: "wide",
                            context: "formatting"
                        }) || r.day(t, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.day(t, {
                            width: "short",
                            context: "formatting"
                        }) || r.day(t, {
                            width: "narrow",
                            context: "formatting"
                        })
                    }
                },
                validate: function(t, e, r) {
                    return e >= 0 && e <= 6
                },
                set: function(t, e, r) {
                    return (t = Xt(t, e, r)).setUTCHours(0, 0, 0, 0),
                    t
                }
            },
            c: {
                priority: 90,
                parse: function(t, e, r, n) {
                    var a = function(t) {
                        var e = 7 * Math.floor((t - 1) / 7);
                        return (t + n.weekStartsOn + 6) % 7 + e
                    };
                    switch (e) {
                    case "c":
                    case "cc":
                        return Ne(e.length, t, a);
                    case "co":
                        return r.ordinalNumber(t, {
                            unit: "day",
                            valueCallback: a
                        });
                    case "ccc":
                        return r.day(t, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || r.day(t, {
                            width: "short",
                            context: "standalone"
                        }) || r.day(t, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "ccccc":
                        return r.day(t, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "cccccc":
                        return r.day(t, {
                            width: "short",
                            context: "standalone"
                        }) || r.day(t, {
                            width: "narrow",
                            context: "standalone"
                        });
                    default:
                        return r.day(t, {
                            width: "wide",
                            context: "standalone"
                        }) || r.day(t, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || r.day(t, {
                            width: "short",
                            context: "standalone"
                        }) || r.day(t, {
                            width: "narrow",
                            context: "standalone"
                        })
                    }
                },
                validate: function(t, e, r) {
                    return e >= 0 && e <= 6
                },
                set: function(t, e, r) {
                    return (t = Xt(t, e, r)).setUTCHours(0, 0, 0, 0),
                    t
                }
            },
            i: {
                priority: 90,
                parse: function(t, e, r, n) {
                    var a = function(t) {
                        return 0 === t ? 7 : t
                    };
                    switch (e) {
                    case "i":
                    case "ii":
                        return Ne(e.length, t);
                    case "io":
                        return r.ordinalNumber(t, {
                            unit: "day"
                        });
                    case "iii":
                        return r.day(t, {
                            width: "abbreviated",
                            context: "formatting",
                            valueCallback: a
                        }) || r.day(t, {
                            width: "short",
                            context: "formatting",
                            valueCallback: a
                        }) || r.day(t, {
                            width: "narrow",
                            context: "formatting",
                            valueCallback: a
                        });
                    case "iiiii":
                        return r.day(t, {
                            width: "narrow",
                            context: "formatting",
                            valueCallback: a
                        });
                    case "iiiiii":
                        return r.day(t, {
                            width: "short",
                            context: "formatting",
                            valueCallback: a
                        }) || r.day(t, {
                            width: "narrow",
                            context: "formatting",
                            valueCallback: a
                        });
                    default:
                        return r.day(t, {
                            width: "wide",
                            context: "formatting",
                            valueCallback: a
                        }) || r.day(t, {
                            width: "abbreviated",
                            context: "formatting",
                            valueCallback: a
                        }) || r.day(t, {
                            width: "short",
                            context: "formatting",
                            valueCallback: a
                        }) || r.day(t, {
                            width: "narrow",
                            context: "formatting",
                            valueCallback: a
                        })
                    }
                },
                validate: function(t, e, r) {
                    return e >= 1 && e <= 7
                },
                set: function(t, e, r) {
                    return (t = Jt(t, e, r)).setUTCHours(0, 0, 0, 0),
                    t
                }
            },
            a: {
                priority: 80,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "a":
                    case "aa":
                    case "aaa":
                        return r.dayPeriod(t, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.dayPeriod(t, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "aaaaa":
                        return r.dayPeriod(t, {
                            width: "narrow",
                            context: "formatting"
                        });
                    default:
                        return r.dayPeriod(t, {
                            width: "wide",
                            context: "formatting"
                        }) || r.dayPeriod(t, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.dayPeriod(t, {
                            width: "narrow",
                            context: "formatting"
                        })
                    }
                },
                set: function(t, e, r) {
                    return t.setUTCHours(Se(e), 0, 0, 0),
                    t
                }
            },
            b: {
                priority: 80,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "b":
                    case "bb":
                    case "bbb":
                        return r.dayPeriod(t, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.dayPeriod(t, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "bbbbb":
                        return r.dayPeriod(t, {
                            width: "narrow",
                            context: "formatting"
                        });
                    default:
                        return r.dayPeriod(t, {
                            width: "wide",
                            context: "formatting"
                        }) || r.dayPeriod(t, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.dayPeriod(t, {
                            width: "narrow",
                            context: "formatting"
                        })
                    }
                },
                set: function(t, e, r) {
                    return t.setUTCHours(Se(e), 0, 0, 0),
                    t
                }
            },
            B: {
                priority: 80,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "B":
                    case "BB":
                    case "BBB":
                        return r.dayPeriod(t, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.dayPeriod(t, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "BBBBB":
                        return r.dayPeriod(t, {
                            width: "narrow",
                            context: "formatting"
                        });
                    default:
                        return r.dayPeriod(t, {
                            width: "wide",
                            context: "formatting"
                        }) || r.dayPeriod(t, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.dayPeriod(t, {
                            width: "narrow",
                            context: "formatting"
                        })
                    }
                },
                set: function(t, e, r) {
                    return t.setUTCHours(Se(e), 0, 0, 0),
                    t
                }
            },
            h: {
                priority: 70,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "h":
                        return $e(le, t);
                    case "ho":
                        return r.ordinalNumber(t, {
                            unit: "hour"
                        });
                    default:
                        return Ne(e.length, t)
                    }
                },
                validate: function(t, e, r) {
                    return e >= 1 && e <= 12
                },
                set: function(t, e, r) {
                    var n = t.getUTCHours() >= 12;
                    return n && e < 12 ? t.setUTCHours(e + 12, 0, 0, 0) : n || 12 !== e ? t.setUTCHours(e, 0, 0, 0) : t.setUTCHours(0, 0, 0, 0),
                    t
                }
            },
            H: {
                priority: 70,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "H":
                        return $e(ue, t);
                    case "Ho":
                        return r.ordinalNumber(t, {
                            unit: "hour"
                        });
                    default:
                        return Ne(e.length, t)
                    }
                },
                validate: function(t, e, r) {
                    return e >= 0 && e <= 23
                },
                set: function(t, e, r) {
                    return t.setUTCHours(e, 0, 0, 0),
                    t
                }
            },
            K: {
                priority: 70,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "K":
                        return $e(ce, t);
                    case "Ko":
                        return r.ordinalNumber(t, {
                            unit: "hour"
                        });
                    default:
                        return Ne(e.length, t)
                    }
                },
                validate: function(t, e, r) {
                    return e >= 0 && e <= 11
                },
                set: function(t, e, r) {
                    var n;
                    return t.getUTCHours() >= 12 && e < 12 ? t.setUTCHours(e + 12, 0, 0, 0) : t.setUTCHours(e, 0, 0, 0),
                    t
                }
            },
            k: {
                priority: 70,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "k":
                        return $e(se, t);
                    case "ko":
                        return r.ordinalNumber(t, {
                            unit: "hour"
                        });
                    default:
                        return Ne(e.length, t)
                    }
                },
                validate: function(t, e, r) {
                    return e >= 1 && e <= 24
                },
                set: function(t, e, r) {
                    var n = e <= 24 ? e % 24 : e;
                    return t.setUTCHours(n, 0, 0, 0),
                    t
                }
            },
            m: {
                priority: 60,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "m":
                        return $e(de, t);
                    case "mo":
                        return r.ordinalNumber(t, {
                            unit: "minute"
                        });
                    default:
                        return Ne(e.length, t)
                    }
                },
                validate: function(t, e, r) {
                    return e >= 0 && e <= 59
                },
                set: function(t, e, r) {
                    return t.setUTCMinutes(e, 0, 0),
                    t
                }
            },
            s: {
                priority: 50,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "s":
                        return $e(fe, t);
                    case "so":
                        return r.ordinalNumber(t, {
                            unit: "second"
                        });
                    default:
                        return Ne(e.length, t)
                    }
                },
                validate: function(t, e, r) {
                    return e >= 0 && e <= 59
                },
                set: function(t, e, r) {
                    return t.setUTCSeconds(e, 0),
                    t
                }
            },
            S: {
                priority: 40,
                parse: function(t, e, r, n) {
                    var a = function(t) {
                        return Math.floor(t * Math.pow(10, 3 - e.length))
                    };
                    return Ne(e.length, t, a)
                },
                set: function(t, e, r) {
                    return t.setUTCMilliseconds(e),
                    t
                }
            },
            X: {
                priority: 20,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "X":
                        return Ue(Te, t);
                    case "XX":
                        return Ue(Ce, t);
                    case "XXXX":
                        return Ue(De, t);
                    case "XXXXX":
                        return Ue(Ae, t);
                    default:
                        return Ue(Me, t)
                    }
                },
                set: function(t, e, r) {
                    return new Date(t.getTime() - e)
                }
            },
            x: {
                priority: 20,
                parse: function(t, e, r, n) {
                    switch (e) {
                    case "x":
                        return Ue(Te, t);
                    case "xx":
                        return Ue(Ce, t);
                    case "xxxx":
                        return Ue(De, t);
                    case "xxxxx":
                        return Ue(Ae, t);
                    default:
                        return Ue(Me, t)
                    }
                },
                set: function(t, e, r) {
                    return new Date(t.getTime() - e)
                }
            },
            t: {
                priority: 10,
                parse: function(t, e, r, n) {
                    return _e(t)
                },
                set: function(t, e, r) {
                    return new Date(1e3 * e)
                }
            },
            T: {
                priority: 10,
                parse: function(t, e, r, n) {
                    return _e(t)
                },
                set: function(t, e, r) {
                    return new Date(e)
                }
            }
        }
          , Ze = 20
          , Oe = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
          , He = /^'(.*?)'?$/
          , je = /''/g
          , We = /\S/;
        function ze(t, e, r, a) {
            if (arguments.length < 3)
                throw new TypeError("3 arguments required, but only " + arguments.length + " present");
            var o = String(t)
              , u = String(e)
              , s = a || {}
              , c = s.locale || ut;
            if (!c.match)
                throw new RangeError("locale must contain match property");
            var d = c.options && c.options.firstWeekContainsDate
              , f = null == d ? 1 : n(d)
              , h = null == s.firstWeekContainsDate ? f : n(s.firstWeekContainsDate);
            if (!(h >= 1 && h <= 7))
                throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
            var g = c.options && c.options.weekStartsOn
              , m = null == g ? 0 : n(g)
              , w = null == s.weekStartsOn ? m : n(s.weekStartsOn);
            if (!(w >= 0 && w <= 6))
                throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            if ("" === u)
                return "" === o ? l(r, s) : new Date(NaN);
            var v = {
                firstWeekContainsDate: h,
                weekStartsOn: w,
                locale: c
            }, y = [{
                priority: Ze,
                set: Le,
                index: 0
            }], p, b = u.match(Oe);
            for (p = 0; p < b.length; p++) {
                var x = b[p];
                !s.awareOfUnicodeTokens && Ot(x) && Ht(x);
                var T = x[0]
                  , C = Ye[T];
                if (C) {
                    var D = C.parse(o, x, c.match, v);
                    if (!D)
                        return new Date(NaN);
                    y.push({
                        priority: C.priority,
                        set: C.set,
                        validate: C.validate,
                        value: D.value,
                        index: y.length
                    }),
                    o = D.rest
                } else {
                    if ("''" === x ? x = "'" : "'" === T && (x = Ie(x)),
                    0 !== o.indexOf(x))
                        return new Date(NaN);
                    o = o.slice(x.length)
                }
            }
            if (o.length > 0 && We.test(o))
                return new Date(NaN);
            var M = y.map((function(t) {
                return t.priority
            }
            )).sort((function(t, e) {
                return e - t
            }
            )).filter((function(t, e, r) {
                return r.indexOf(t) === e
            }
            )).map((function(t) {
                return y.filter((function(e) {
                    return e.priority === t
                }
                )).reverse()
            }
            )).map((function(t) {
                return t[0]
            }
            ))
              , A = l(r, s);
            if (isNaN(A))
                return new Date(NaN);
            var $ = Yt(A, i(A));
            for (p = 0; p < M.length; p++) {
                var U = M[p];
                if (U.validate && !U.validate($, U.value, v))
                    return new Date(NaN);
                $ = U.set($, U.value, v)
            }
            return $
        }
        function Le(t) {
            var e = new Date(0);
            return e.setFullYear(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()),
            e.setHours(t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), t.getUTCMilliseconds()),
            e
        }
        function Ie(t) {
            return t.match(He)[1].replace(je, "'")
        }
        function Qe(t, e) {
            if ("string" != typeof t)
                return A(t) ? t : null;
            var r = ze(t, e, new Date);
            return A(r) && It(r, e) === t ? r : null
        }
        var Be = function(t, e) {
            void 0 === e && (e = {});
            var r = e.targetValue
              , n = e.inclusion;
            void 0 === n && (n = !1);
            var a = e.format;
            return void 0 === a && (a = n,
            n = !1),
            t = Qe(t, a),
            r = Qe(r, a),
            !(!t || !r) && (Bt(t, r) || n && Gt(t, r))
        }, Re, Ge, Xe = Be, Ve = {
            hasTarget: !0,
            isDate: !0
        }, Je = ["targetValue", "inclusion", "format"], Ke = {
            en: /^[A-Z]*$/i,
            cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
            da: /^[A-ZÆØÅ]*$/i,
            de: /^[A-ZÄÖÜß]*$/i,
            es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
            fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
            fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
            it: /^[A-Z\xC0-\xFF]*$/i,
            lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
            nl: /^[A-ZÉËÏÓÖÜ]*$/i,
            hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
            pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
            pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
            ru: /^[А-ЯЁ]*$/i,
            sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
            sr: /^[A-ZČĆŽŠĐ]*$/i,
            sv: /^[A-ZÅÄÖ]*$/i,
            tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
            uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
            ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
            az: /^[A-ZÇƏĞİıÖŞÜ]*$/i
        }, tr = {
            en: /^[A-Z\s]*$/i,
            cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
            da: /^[A-ZÆØÅ\s]*$/i,
            de: /^[A-ZÄÖÜß\s]*$/i,
            es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
            fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی\s]*$/,
            fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
            it: /^[A-Z\xC0-\xFF\s]*$/i,
            lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
            nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
            hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
            pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
            pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
            ru: /^[А-ЯЁ\s]*$/i,
            sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
            sr: /^[A-ZČĆŽŠĐ\s]*$/i,
            sv: /^[A-ZÅÄÖ\s]*$/i,
            tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
            uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
            ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
            az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i
        }, er = {
            en: /^[0-9A-Z]*$/i,
            cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
            da: /^[0-9A-ZÆØÅ]$/i,
            de: /^[0-9A-ZÄÖÜß]*$/i,
            es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
            fa: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
            fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
            it: /^[0-9A-Z\xC0-\xFF]*$/i,
            lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
            hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
            nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
            pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
            pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
            ru: /^[0-9А-ЯЁ]*$/i,
            sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
            sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
            sv: /^[0-9A-ZÅÄÖ]*$/i,
            tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
            uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
            ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
            az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i
        }, rr = {
            en: /^[0-9A-Z_-]*$/i,
            cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
            da: /^[0-9A-ZÆØÅ_-]*$/i,
            de: /^[0-9A-ZÄÖÜß_-]*$/i,
            es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
            fa: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی_-]*$/,
            fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
            it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
            lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
            nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
            hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
            pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
            pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
            ru: /^[0-9А-ЯЁ_-]*$/i,
            sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
            sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
            sv: /^[0-9A-ZÅÄÖ_-]*$/i,
            tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
            uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
            ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
            az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i
        }, nr = function(t, e) {
            void 0 === e && (e = {});
            var r = e.locale;
            return Array.isArray(t) ? t.every((function(t) {
                return nr(t, [r])
            }
            )) : r ? (Ke[r] || Ke.en).test(t) : Object.keys(Ke).some((function(e) {
                return Ke[e].test(t)
            }
            ))
        }, ar, ir = nr, or = ["locale"], ur = function(t, e) {
            void 0 === e && (e = {});
            var r = e.locale;
            return Array.isArray(t) ? t.every((function(t) {
                return ur(t, [r])
            }
            )) : r ? (rr[r] || rr.en).test(t) : Object.keys(rr).some((function(e) {
                return rr[e].test(t)
            }
            ))
        }, sr, cr = ur, lr = ["locale"], dr = function(t, e) {
            void 0 === e && (e = {});
            var r = e.locale;
            return Array.isArray(t) ? t.every((function(t) {
                return dr(t, [r])
            }
            )) : r ? (er[r] || er.en).test(t) : Object.keys(er).some((function(e) {
                return er[e].test(t)
            }
            ))
        }, fr, hr = dr, gr = ["locale"], mr = function(t, e) {
            void 0 === e && (e = {});
            var r = e.locale;
            return Array.isArray(t) ? t.every((function(t) {
                return mr(t, [r])
            }
            )) : r ? (tr[r] || tr.en).test(t) : Object.keys(tr).some((function(e) {
                return tr[e].test(t)
            }
            ))
        }, wr, vr = mr, yr = ["locale"], pr = function(t, e) {
            void 0 === e && (e = {});
            var r = e.targetValue
              , n = e.inclusion;
            void 0 === n && (n = !1);
            var a = e.format;
            return void 0 === a && (a = n,
            n = !1),
            t = Qe(t, a),
            r = Qe(r, a),
            !(!t || !r) && (Rt(t, r) || n && Gt(t, r))
        }, br, xr, Tr = pr, Cr = {
            hasTarget: !0,
            isDate: !0
        }, Dr = ["targetValue", "inclusion", "format"], Mr = function(t, e) {
            void 0 === e && (e = {});
            var r = e.min
              , n = e.max;
            return Array.isArray(t) ? t.every((function(t) {
                return Mr(t, {
                    min: r,
                    max: n
                })
            }
            )) : Number(r) <= t && Number(n) >= t
        }, Ar, $r = Mr, Ur = ["min", "max"], _r, Nr, kr, Sr = function(t, e) {
            var r = e.targetValue;
            return String(t) === String(r)
        }, Fr = {
            hasTarget: !0
        }, qr = ["targetValue"];
        function Er(t) {
            return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
        }
        function Pr(t, e) {
            return t(e = {
                exports: {}
            }, e.exports),
            e.exports
        }
        var Yr = Pr((function(t, e) {
            function r(t) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function t(e) {
                    return typeof e
                }
                : function t(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                r(t)
            }
            function n(t) {
                var e, n;
                if (!("string" == typeof t || t instanceof String))
                    throw n = null === t ? "null" : "object" === (n = r(t)) && t.constructor && t.constructor.hasOwnProperty("name") ? t.constructor.name : "a ".concat(n),
                    new TypeError("Expected string but received ".concat(n, "."))
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.default = n,
            t.exports = e.default,
            t.exports.default = e.default
        }
        ));
        Er(Yr);
        var Zr = Pr((function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.default = i;
            var r = n(Yr);
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var a = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
            function i(t) {
                (0,
                r.default)(t);
                var e = t.replace(/[- ]+/g, "");
                if (!a.test(e))
                    return !1;
                for (var n = 0, i, o, u, s = e.length - 1; s >= 0; s--)
                    i = e.substring(s, s + 1),
                    o = parseInt(i, 10),
                    n += u && (o *= 2) >= 10 ? o % 10 + 1 : o,
                    u = !u;
                return !(n % 10 != 0 || !e)
            }
            t.exports = e.default,
            t.exports.default = e.default
        }
        )), Or = Er(Zr), Hr, jr = function(t) {
            return Or(String(t))
        }, Wr = function(t, e) {
            void 0 === e && (e = {});
            var r = e.min
              , n = e.max
              , a = e.inclusivity;
            void 0 === a && (a = "()");
            var i = e.format;
            void 0 === i && (i = a,
            a = "()");
            var o = Qe(String(r), i)
              , u = Qe(String(n), i)
              , s = Qe(String(t), i);
            return !!(o && u && s) && ("()" === a ? Bt(s, o) && Rt(s, u) : "(]" === a ? Bt(s, o) && (Gt(s, u) || Rt(s, u)) : "[)" === a ? Rt(s, u) && (Gt(s, o) || Bt(s, o)) : Gt(s, u) || Gt(s, o) || Rt(s, u) && Bt(s, o))
        }, zr, Lr, Ir = Wr, Qr = {
            isDate: !0
        }, Br = ["min", "max", "inclusivity", "format"], Rr, Gr, Xr, Vr = function(t, e) {
            var r;
            return !!Qe(t, e.format)
        }, Jr = {
            isDate: !0
        }, Kr = ["format"], tn = function() {
            for (var t = [], e = arguments.length; e--; )
                t[e] = arguments[e];
            return t.every((function(t) {
                return null == t
            }
            ))
        }, en = function(t) {
            return "function" == typeof t
        }, rn = function(t) {
            if (en(Array.from))
                return Array.from(t);
            for (var e = [], r = t.length, n = 0; n < r; n++)
                e.push(t[n]);
            return e
        }, nn = function(t) {
            if (Array.isArray(t))
                return [].concat(t);
            var e = rn(t);
            return on(e) ? [t] : e
        }, an = function(t) {
            for (var e = [], r = arguments.length - 1; r-- > 0; )
                e[r] = arguments[r + 1];
            if (en(Object.assign))
                return Object.assign.apply(Object, [t].concat(e));
            if (null == t)
                throw new TypeError("Cannot convert undefined or null to object");
            var n = Object(t);
            return e.forEach((function(t) {
                null != t && Object.keys(t).forEach((function(e) {
                    n[e] = t[e]
                }
                ))
            }
            )),
            n
        }, on = function(t) {
            return Array.isArray(t) && 0 === t.length
        }, un = function(t, e) {
            void 0 === e && (e = {});
            var r = e.decimals;
            void 0 === r && (r = "*");
            var n = e.separator, a, i;
            if (void 0 === n && (n = "."),
            tn(t) || "" === t)
                return !1;
            if (Array.isArray(t))
                return t.every((function(t) {
                    return un(t, {
                        decimals: r,
                        separator: n
                    })
                }
                ));
            if (0 === Number(r))
                return /^-?\d*$/.test(t);
            if (!new RegExp("^[-+]?\\d*(\\" + n + "\\d" + ("*" === r ? "+" : "{1," + r + "}") + ")?([eE]{1}[-]?\\d+)?$").test(t))
                return !1;
            var o = parseFloat(t);
            return o == o
        }, sn, cn = un, ln = ["decimals", "separator"], dn = function(t, e) {
            var r = e[0];
            if (Array.isArray(t))
                return t.every((function(t) {
                    return dn(t, [r])
                }
                ));
            var n = String(t);
            return /^[0-9]*$/.test(n) && n.length === Number(r)
        }, fn = dn, hn = /\.(jpg|svg|jpeg|png|bmp|gif)$/i, gn = function(t, e, r) {
            var n = window.URL || window.webkitURL;
            return new Promise((function(a) {
                var i = new Image;
                i.onerror = function() {
                    return a({
                        valid: !1
                    })
                }
                ,
                i.onload = function() {
                    return a({
                        valid: i.width === Number(e) && i.height === Number(r)
                    })
                }
                ,
                i.src = n.createObjectURL(t)
            }
            ))
        }, mn = function(t, e) {
            var r = e[0]
              , n = e[1]
              , a = nn(t).filter((function(t) {
                return hn.test(t.name)
            }
            ));
            return 0 !== a.length && Promise.all(a.map((function(t) {
                return gn(t, r, n)
            }
            )))
        }, wn = mn, vn = Pr((function(t, e) {
            function r() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = arguments.length > 1 ? arguments[1] : void 0;
                for (var r in e)
                    void 0 === t[r] && (t[r] = e[r]);
                return t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.default = r,
            t.exports = e.default,
            t.exports.default = e.default
        }
        ));
        Er(vn);
        var yn = Pr((function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.default = i;
            var r = n(Yr);
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function a(t) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function t(e) {
                    return typeof e
                }
                : function t(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                a(t)
            }
            function i(t, e) {
                var n, i;
                (0,
                r.default)(t),
                "object" === a(e) ? (n = e.min || 0,
                i = e.max) : (n = arguments[1],
                i = arguments[2]);
                var o = encodeURI(t).split(/%..|./).length - 1;
                return o >= n && (void 0 === i || o <= i)
            }
            t.exports = e.default,
            t.exports.default = e.default
        }
        ));
        Er(yn);
        var pn = Pr((function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.default = o;
            var r = a(Yr)
              , n = a(vn);
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var i = {
                require_tld: !0,
                allow_underscores: !1,
                allow_trailing_dot: !1
            };
            function o(t, e) {
                (0,
                r.default)(t),
                (e = (0,
                n.default)(e, i)).allow_trailing_dot && "." === t[t.length - 1] && (t = t.substring(0, t.length - 1));
                for (var a = t.split("."), o = 0; o < a.length; o++)
                    if (a[o].length > 63)
                        return !1;
                if (e.require_tld) {
                    var u = a.pop();
                    if (!a.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(u))
                        return !1;
                    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(u))
                        return !1
                }
                for (var s, c = 0; c < a.length; c++) {
                    if (s = a[c],
                    e.allow_underscores && (s = s.replace(/_/g, "")),
                    !/^[a-z\u00a1-\uffff0-9-]+$/i.test(s))
                        return !1;
                    if (/[\uff01-\uff5e]/.test(s))
                        return !1;
                    if ("-" === s[0] || "-" === s[s.length - 1])
                        return !1
                }
                return !0
            }
            t.exports = e.default,
            t.exports.default = e.default
        }
        ))
          , bn = Er(pn)
          , xn = Pr((function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.default = o;
            var r = n(Yr);
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var a = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/
              , i = /^[0-9A-F]{1,4}$/i;
            function o(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n;
                if ((0,
                r.default)(t),
                !(e = String(e)))
                    return o(t, 4) || o(t, 6);
                if ("4" === e)
                    return !!a.test(t) && t.split(".").sort((function(t, e) {
                        return t - e
                    }
                    ))[3] <= 255;
                if ("6" === e) {
                    var u = t.split(":")
                      , s = !1
                      , c = o(u[u.length - 1], 4)
                      , l = c ? 7 : 8;
                    if (u.length > l)
                        return !1;
                    if ("::" === t)
                        return !0;
                    "::" === t.substr(0, 2) ? (u.shift(),
                    u.shift(),
                    s = !0) : "::" === t.substr(t.length - 2) && (u.pop(),
                    u.pop(),
                    s = !0);
                    for (var d = 0; d < u.length; ++d)
                        if ("" === u[d] && d > 0 && d < u.length - 1) {
                            if (s)
                                return !1;
                            s = !0
                        } else if (c && d === u.length - 1)
                            ;
                        else if (!i.test(u[d]))
                            return !1;
                    return s ? u.length >= 1 : u.length === l
                }
                return !1
            }
            t.exports = e.default,
            t.exports.default = e.default
        }
        ))
          , Tn = Er(xn)
          , Cn = Pr((function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.default = m;
            var r = u(Yr)
              , n = u(vn)
              , a = u(yn)
              , i = u(pn)
              , o = u(xn);
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var s = {
                allow_display_name: !1,
                require_display_name: !1,
                allow_utf8_local_part: !0,
                require_tld: !0
            }
              , c = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i
              , l = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i
              , d = /^[a-z\d]+$/
              , f = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i
              , h = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i
              , g = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
            function m(t, e) {
                if ((0,
                r.default)(t),
                (e = (0,
                n.default)(e, s)).require_display_name || e.allow_display_name) {
                    var u = t.match(c);
                    if (u)
                        t = u[1];
                    else if (e.require_display_name)
                        return !1
                }
                var m = t.split("@")
                  , w = m.pop()
                  , v = m.join("@")
                  , y = w.toLowerCase();
                if (e.domain_specific_validation && ("gmail.com" === y || "googlemail.com" === y)) {
                    var p = (v = v.toLowerCase()).split("+")[0];
                    if (!(0,
                    a.default)(p.replace(".", ""), {
                        min: 6,
                        max: 30
                    }))
                        return !1;
                    for (var b = p.split("."), x = 0; x < b.length; x++)
                        if (!d.test(b[x]))
                            return !1
                }
                if (!(0,
                a.default)(v, {
                    max: 64
                }) || !(0,
                a.default)(w, {
                    max: 254
                }))
                    return !1;
                if (!(0,
                i.default)(w, {
                    require_tld: e.require_tld
                })) {
                    if (!e.allow_ip_domain)
                        return !1;
                    if (!(0,
                    o.default)(w)) {
                        if (!w.startsWith("[") || !w.endsWith("]"))
                            return !1;
                        var T = w.substr(1, w.length - 2);
                        if (0 === T.length || !(0,
                        o.default)(T))
                            return !1
                    }
                }
                if ('"' === v[0])
                    return v = v.slice(1, v.length - 1),
                    e.allow_utf8_local_part ? g.test(v) : f.test(v);
                for (var C = e.allow_utf8_local_part ? h : l, D = v.split("."), M = 0; M < D.length; M++)
                    if (!C.test(D[M]))
                        return !1;
                return !0
            }
            t.exports = e.default,
            t.exports.default = e.default
        }
        ))
          , Dn = Er(Cn);
        function Mn(t, e) {
            var r = {};
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && -1 === e.indexOf(n) && (r[n] = t[n]);
            return r
        }
        var An = function(t, e) {
            void 0 === e && (e = {});
            var r = e.multiple;
            void 0 === r && (r = !1);
            var n, a = Mn(e, ["multiple"]);
            r && !Array.isArray(t) && (t = String(t).split(",").map((function(t) {
                return t.trim()
            }
            )));
            var i = an({}, a);
            return Array.isArray(t) ? t.every((function(t) {
                return Dn(String(t), i)
            }
            )) : Dn(String(t), i)
        }, $n = {
            validate: An
        }, Un = function(t, e) {
            return Array.isArray(t) ? t.every((function(t) {
                return Un(t, e)
            }
            )) : rn(e).some((function(e) {
                return e == t
            }
            ))
        }, _n = Un, Nn = function() {
            for (var t = [], e = arguments.length; e--; )
                t[e] = arguments[e];
            return !Un.apply(void 0, t)
        }, kn = Nn, Sn = function(t, e) {
            var r = new RegExp(".(" + e.join("|") + ")$","i");
            return nn(t).every((function(t) {
                return r.test(t.name)
            }
            ))
        }, Fn = Sn, qn, En = function(t) {
            return (Array.isArray(t) ? t : [t]).every((function(t) {
                return /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(t.name)
            }
            ))
        }, Pn, Yn = function(t) {
            return Array.isArray(t) ? t.every((function(t) {
                return /^-?[0-9]+$/.test(String(t))
            }
            )) : /^-?[0-9]+$/.test(String(t))
        }, Zn, On, Hn = function(t, e) {
            void 0 === e && (e = {});
            var r = e.version;
            return void 0 === r && (r = 4),
            tn(t) && (t = ""),
            Array.isArray(t) ? t.every((function(t) {
                return Tn(t, r)
            }
            )) : Tn(t, r)
        }, jn = ["version"], Wn, zn = function(t) {
            return tn(t) && (t = ""),
            Array.isArray(t) ? t.every((function(t) {
                return Tn(t, "") || bn(t)
            }
            )) : Tn(t, "") || bn(t)
        }, Ln, In = function(t, e) {
            var r;
            return void 0 === e && (e = []),
            t === e[0]
        }, Qn, Bn = function(t, e) {
            var r;
            return void 0 === e && (e = []),
            t !== e[0]
        }, Rn = function(t, e, r) {
            return void 0 === r ? t.length === e : (r = Number(r),
            t.length >= e && t.length <= r)
        }, Gn = function(t, e) {
            var r = e[0]
              , n = e[1];
            return void 0 === n && (n = void 0),
            !tn(t) && (r = Number(r),
            "number" == typeof t && (t = String(t)),
            t.length || (t = rn(t)),
            Rn(t, r, n))
        }, Xn = Gn, Vn = function(t, e) {
            var r = e[0];
            return tn(t) ? r >= 0 : Array.isArray(t) ? t.every((function(t) {
                return Vn(t, [r])
            }
            )) : String(t).length <= r
        }, Jn = {
            validate: Vn
        }, Kn = function(t, e) {
            var r = e[0];
            return !tn(t) && "" !== t && (Array.isArray(t) ? t.length > 0 && t.every((function(t) {
                return Kn(t, [r])
            }
            )) : Number(t) <= r)
        }, ta = Kn, ea = function(t, e) {
            var r = new RegExp(e.join("|").replace("*", ".+") + "$","i");
            return nn(t).every((function(t) {
                return r.test(t.type)
            }
            ))
        }, ra = ea, na = function(t, e) {
            var r = e[0];
            return !tn(t) && (Array.isArray(t) ? t.every((function(t) {
                return na(t, [r])
            }
            )) : String(t).length >= r)
        }, aa = {
            validate: na
        }, ia = function(t, e) {
            var r = e[0];
            return !tn(t) && "" !== t && (Array.isArray(t) ? t.length > 0 && t.every((function(t) {
                return ia(t, [r])
            }
            )) : Number(t) >= r)
        }, oa = ia, ua = /^[٠١٢٣٤٥٦٧٨٩]+$/, sa = /^[0-9]+$/, ca, la = function(t) {
            var e = function(t) {
                var e = String(t);
                return sa.test(e) || ua.test(e)
            };
            return Array.isArray(t) ? t.every(e) : e(t)
        }, da = function(t, e) {
            var r = e.expression;
            return "string" == typeof r && (r = new RegExp(r)),
            Array.isArray(t) ? t.every((function(t) {
                return da(t, {
                    expression: r
                })
            }
            )) : r.test(String(t))
        }, fa, ha = da, ga = ["expression"], ma, wa = function(t, e) {
            void 0 === e && (e = []);
            var r = e[0];
            return void 0 === r && (r = !1),
            !tn(t) && !on(t) && ((!1 !== t || !r) && !!String(t).trim().length)
        }, va = function(t, e) {
            void 0 === e && (e = []);
            var r = e[0], n, a = e.slice(1).includes(String(r).trim());
            if (!a)
                return {
                    valid: !0,
                    data: {
                        required: a
                    }
                };
            var i = on(t) || [!1, null, void 0].includes(t);
            return {
                valid: !(i = i || !String(t).trim().length),
                data: {
                    required: a
                }
            }
        }, ya, pa = va, ba = {
            hasTarget: !0,
            computesRequired: !0
        }, xa = function(t, e) {
            var r = e[0];
            if (isNaN(r))
                return !1;
            var n = 1024 * Number(r);
            return nn(t).every((function(t) {
                return t.size <= n
            }
            ))
        }, Ta = xa, Ca = Pr((function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.default = d;
            var r = o(Yr)
              , n = o(pn)
              , a = o(xn)
              , i = o(vn);
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var u = {
                protocols: ["http", "https", "ftp"],
                require_tld: !0,
                require_protocol: !1,
                require_host: !0,
                require_valid_protocol: !0,
                allow_underscores: !1,
                allow_trailing_dot: !1,
                allow_protocol_relative_urls: !1
            }
              , s = /^\[([^\]]+)\](?::([0-9]+))?$/;
            function c(t) {
                return "[object RegExp]" === Object.prototype.toString.call(t)
            }
            function l(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    if (t === n || c(n) && n.test(t))
                        return !0
                }
                return !1
            }
            function d(t, e) {
                if ((0,
                r.default)(t),
                !t || t.length >= 2083 || /[\s<>]/.test(t))
                    return !1;
                if (0 === t.indexOf("mailto:"))
                    return !1;
                var o, c, d, f, h, g, m, w;
                if (e = (0,
                i.default)(e, u),
                m = t.split("#"),
                t = m.shift(),
                m = t.split("?"),
                t = m.shift(),
                (m = t.split("://")).length > 1) {
                    if (o = m.shift().toLowerCase(),
                    e.require_valid_protocol && -1 === e.protocols.indexOf(o))
                        return !1
                } else {
                    if (e.require_protocol)
                        return !1;
                    if ("//" === t.substr(0, 2)) {
                        if (!e.allow_protocol_relative_urls)
                            return !1;
                        m[0] = t.substr(2)
                    }
                }
                if ("" === (t = m.join("://")))
                    return !1;
                if (m = t.split("/"),
                "" === (t = m.shift()) && !e.require_host)
                    return !0;
                if ((m = t.split("@")).length > 1) {
                    if (e.disallow_auth)
                        return !1;
                    if ((c = m.shift()).indexOf(":") >= 0 && c.split(":").length > 2)
                        return !1
                }
                g = null,
                w = null;
                var v = (f = m.join("@")).match(s);
                return v ? (d = "",
                w = v[1],
                g = v[2] || null) : (d = (m = f.split(":")).shift(),
                m.length && (g = m.join(":"))),
                !(null !== g && (h = parseInt(g, 10),
                !/^[0-9]+$/.test(g) || h <= 0 || h > 65535)) && (!!((0,
                a.default)(d) || (0,
                n.default)(d, e) || w && (0,
                a.default)(w, 6)) && (d = d || w,
                !(e.host_whitelist && !l(d, e.host_whitelist)) && (!e.host_blacklist || !l(d, e.host_blacklist))))
            }
            t.exports = e.default,
            t.exports.default = e.default
        }
        )), Da = Er(Ca), Ma = function(t, e) {
            void 0 === e && (e = {}),
            tn(t) && (t = "");
            var r = an({}, e);
            return Array.isArray(t) ? t.every((function(t) {
                return Da(t, r)
            }
            )) : Da(t, r)
        }, Aa = {
            validate: Ma
        }
    }
}]);
