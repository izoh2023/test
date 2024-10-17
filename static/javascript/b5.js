(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[11261], {
    974353: function(t) {
        var e, n;
        e = this,
        n = function() {
            "use strict";
            var t = 1e3
              , e = 6e4
              , n = 36e5
              , r = "millisecond"
              , i = "second"
              , o = "minute"
              , s = "hour"
              , a = "day"
              , u = "week"
              , c = "month"
              , l = "quarter"
              , f = "year"
              , d = "date"
              , m = "Invalid Date"
              , h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
              , p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
              , g = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                ordinal: function(t) {
                    var e = ["th", "st", "nd", "rd"]
                      , n = t % 100;
                    return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]"
                }
            }
              , y = function(t, e, n) {
                var r = String(t);
                return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t
            }
              , v = {
                s: y,
                z: function(t) {
                    var e = -t.utcOffset()
                      , n = Math.abs(e)
                      , r = Math.floor(n / 60)
                      , i = n % 60;
                    return (e <= 0 ? "+" : "-") + y(r, 2, "0") + ":" + y(i, 2, "0")
                },
                m: function t(e, n) {
                    if (e.date() < n.date())
                        return -t(n, e);
                    var r = 12 * (n.year() - e.year()) + (n.month() - e.month())
                      , i = e.clone().add(r, c)
                      , o = n - i < 0
                      , s = e.clone().add(r + (o ? -1 : 1), c);
                    return +(-(r + (n - i) / (o ? i - s : s - i)) || 0)
                },
                a: function(t) {
                    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                },
                p: function(t) {
                    return {
                        M: c,
                        y: f,
                        w: u,
                        d: a,
                        D: d,
                        h: s,
                        m: o,
                        s: i,
                        ms: r,
                        Q: l
                    }[t] || String(t || "").toLowerCase().replace(/s$/, "")
                },
                u: function(t) {
                    return void 0 === t
                }
            }
              , T = "en"
              , $ = {};
            $[T] = g;
            var S = "$isDayjsObject"
              , b = function(t) {
                return t instanceof _ || !(!t || !t[S])
            }
              , M = function t(e, n, r) {
                var i;
                if (!e)
                    return T;
                if ("string" == typeof e) {
                    var o = e.toLowerCase();
                    $[o] && (i = o),
                    n && ($[o] = n,
                    i = o);
                    var s = e.split("-");
                    if (!i && s.length > 1)
                        return t(s[0])
                } else {
                    var a = e.name;
                    $[a] = e,
                    i = a
                }
                return !r && i && (T = i),
                i || !r && T
            }
              , D = function(t, e) {
                if (b(t))
                    return t.clone();
                var n = "object" == typeof e ? e : {};
                return n.date = t,
                n.args = arguments,
                new _(n)
            }
              , E = v;
            E.l = M,
            E.i = b,
            E.w = function(t, e) {
                return D(t, {
                    locale: e.$L,
                    utc: e.$u,
                    x: e.$x,
                    $offset: e.$offset
                })
            }
            ;
            var _ = function() {
                function g(t) {
                    this.$L = M(t.locale, null, !0),
                    this.parse(t),
                    this.$x = this.$x || t.x || {},
                    this[S] = !0
                }
                var y = g.prototype;
                return y.parse = function(t) {
                    this.$d = function(t) {
                        var e = t.date
                          , n = t.utc;
                        if (null === e)
                            return new Date(NaN);
                        if (E.u(e))
                            return new Date;
                        if (e instanceof Date)
                            return new Date(e);
                        if ("string" == typeof e && !/Z$/i.test(e)) {
                            var r = e.match(h);
                            if (r) {
                                var i = r[2] - 1 || 0
                                  , o = (r[7] || "0").substring(0, 3);
                                return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, o)) : new Date(r[1],i,r[3] || 1,r[4] || 0,r[5] || 0,r[6] || 0,o)
                            }
                        }
                        return new Date(e)
                    }(t),
                    this.init()
                }
                ,
                y.init = function() {
                    var t = this.$d;
                    this.$y = t.getFullYear(),
                    this.$M = t.getMonth(),
                    this.$D = t.getDate(),
                    this.$W = t.getDay(),
                    this.$H = t.getHours(),
                    this.$m = t.getMinutes(),
                    this.$s = t.getSeconds(),
                    this.$ms = t.getMilliseconds()
                }
                ,
                y.$utils = function() {
                    return E
                }
                ,
                y.isValid = function() {
                    return !(this.$d.toString() === m)
                }
                ,
                y.isSame = function(t, e) {
                    var n = D(t);
                    return this.startOf(e) <= n && n <= this.endOf(e)
                }
                ,
                y.isAfter = function(t, e) {
                    return D(t) < this.startOf(e)
                }
                ,
                y.isBefore = function(t, e) {
                    return this.endOf(e) < D(t)
                }
                ,
                y.$g = function(t, e, n) {
                    return E.u(t) ? this[e] : this.set(n, t)
                }
                ,
                y.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }
                ,
                y.valueOf = function() {
                    return this.$d.getTime()
                }
                ,
                y.startOf = function(t, e) {
                    var n = this
                      , r = !!E.u(e) || e
                      , l = E.p(t)
                      , m = function(t, e) {
                        var i = E.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y,e,t), n);
                        return r ? i : i.endOf(a)
                    }
                      , h = function(t, e) {
                        return E.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n)
                    }
                      , p = this.$W
                      , g = this.$M
                      , y = this.$D
                      , v = "set" + (this.$u ? "UTC" : "");
                    switch (l) {
                    case f:
                        return r ? m(1, 0) : m(31, 11);
                    case c:
                        return r ? m(1, g) : m(0, g + 1);
                    case u:
                        var T = this.$locale().weekStart || 0
                          , $ = (p < T ? p + 7 : p) - T;
                        return m(r ? y - $ : y + (6 - $), g);
                    case a:
                    case d:
                        return h(v + "Hours", 0);
                    case s:
                        return h(v + "Minutes", 1);
                    case o:
                        return h(v + "Seconds", 2);
                    case i:
                        return h(v + "Milliseconds", 3);
                    default:
                        return this.clone()
                    }
                }
                ,
                y.endOf = function(t) {
                    return this.startOf(t, !1)
                }
                ,
                y.$set = function(t, e) {
                    var n, u = E.p(t), l = "set" + (this.$u ? "UTC" : ""), m = (n = {},
                    n[a] = l + "Date",
                    n[d] = l + "Date",
                    n[c] = l + "Month",
                    n[f] = l + "FullYear",
                    n[s] = l + "Hours",
                    n[o] = l + "Minutes",
                    n[i] = l + "Seconds",
                    n[r] = l + "Milliseconds",
                    n)[u], h = u === a ? this.$D + (e - this.$W) : e;
                    if (u === c || u === f) {
                        var p = this.clone().set(d, 1);
                        p.$d[m](h),
                        p.init(),
                        this.$d = p.set(d, Math.min(this.$D, p.daysInMonth())).$d
                    } else
                        m && this.$d[m](h);
                    return this.init(),
                    this
                }
                ,
                y.set = function(t, e) {
                    return this.clone().$set(t, e)
                }
                ,
                y.get = function(t) {
                    return this[E.p(t)]()
                }
                ,
                y.add = function(r, l) {
                    var d, m = this;
                    r = Number(r);
                    var h = E.p(l)
                      , p = function(t) {
                        var e = D(m);
                        return E.w(e.date(e.date() + Math.round(t * r)), m)
                    };
                    if (h === c)
                        return this.set(c, this.$M + r);
                    if (h === f)
                        return this.set(f, this.$y + r);
                    if (h === a)
                        return p(1);
                    if (h === u)
                        return p(7);
                    var g = (d = {},
                    d[o] = e,
                    d[s] = n,
                    d[i] = t,
                    d)[h] || 1
                      , y = this.$d.getTime() + r * g;
                    return E.w(y, this)
                }
                ,
                y.subtract = function(t, e) {
                    return this.add(-1 * t, e)
                }
                ,
                y.format = function(t) {
                    var e = this
                      , n = this.$locale();
                    if (!this.isValid())
                        return n.invalidDate || m;
                    var r = t || "YYYY-MM-DDTHH:mm:ssZ"
                      , i = E.z(this)
                      , o = this.$H
                      , s = this.$m
                      , a = this.$M
                      , u = n.weekdays
                      , c = n.months
                      , l = n.meridiem
                      , f = function(t, n, i, o) {
                        return t && (t[n] || t(e, r)) || i[n].slice(0, o)
                    }
                      , d = function(t) {
                        return E.s(o % 12 || 12, t, "0")
                    }
                      , h = l || function(t, e, n) {
                        var r = t < 12 ? "AM" : "PM";
                        return n ? r.toLowerCase() : r
                    }
                    ;
                    return r.replace(p, (function(t, r) {
                        return r || function(t) {
                            switch (t) {
                            case "YY":
                                return String(e.$y).slice(-2);
                            case "YYYY":
                                return E.s(e.$y, 4, "0");
                            case "M":
                                return a + 1;
                            case "MM":
                                return E.s(a + 1, 2, "0");
                            case "MMM":
                                return f(n.monthsShort, a, c, 3);
                            case "MMMM":
                                return f(c, a);
                            case "D":
                                return e.$D;
                            case "DD":
                                return E.s(e.$D, 2, "0");
                            case "d":
                                return String(e.$W);
                            case "dd":
                                return f(n.weekdaysMin, e.$W, u, 2);
                            case "ddd":
                                return f(n.weekdaysShort, e.$W, u, 3);
                            case "dddd":
                                return u[e.$W];
                            case "H":
                                return String(o);
                            case "HH":
                                return E.s(o, 2, "0");
                            case "h":
                                return d(1);
                            case "hh":
                                return d(2);
                            case "a":
                                return h(o, s, !0);
                            case "A":
                                return h(o, s, !1);
                            case "m":
                                return String(s);
                            case "mm":
                                return E.s(s, 2, "0");
                            case "s":
                                return String(e.$s);
                            case "ss":
                                return E.s(e.$s, 2, "0");
                            case "SSS":
                                return E.s(e.$ms, 3, "0");
                            case "Z":
                                return i
                            }
                            return null
                        }(t) || i.replace(":", "")
                    }
                    ))
                }
                ,
                y.utcOffset = function() {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                }
                ,
                y.diff = function(r, d, m) {
                    var h, p = this, g = E.p(d), y = D(r), v = (y.utcOffset() - this.utcOffset()) * e, T = this - y, $ = function() {
                        return E.m(p, y)
                    };
                    switch (g) {
                    case f:
                        h = $() / 12;
                        break;
                    case c:
                        h = $();
                        break;
                    case l:
                        h = $() / 3;
                        break;
                    case u:
                        h = (T - v) / 6048e5;
                        break;
                    case a:
                        h = (T - v) / 864e5;
                        break;
                    case s:
                        h = T / n;
                        break;
                    case o:
                        h = T / e;
                        break;
                    case i:
                        h = T / t;
                        break;
                    default:
                        h = T
                    }
                    return m ? h : E.a(h)
                }
                ,
                y.daysInMonth = function() {
                    return this.endOf(c).$D
                }
                ,
                y.$locale = function() {
                    return $[this.$L]
                }
                ,
                y.locale = function(t, e) {
                    if (!t)
                        return this.$L;
                    var n = this.clone()
                      , r = M(t, e, !0);
                    return r && (n.$L = r),
                    n
                }
                ,
                y.clone = function() {
                    return E.w(this.$d, this)
                }
                ,
                y.toDate = function() {
                    return new Date(this.valueOf())
                }
                ,
                y.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }
                ,
                y.toISOString = function() {
                    return this.$d.toISOString()
                }
                ,
                y.toString = function() {
                    return this.$d.toUTCString()
                }
                ,
                g
            }()
              , O = _.prototype;
            return D.prototype = O,
            [["$ms", r], ["$s", i], ["$m", o], ["$H", s], ["$W", a], ["$M", c], ["$y", f], ["$D", d]].forEach((function(t) {
                O[t[1]] = function(e) {
                    return this.$g(e, t[0], t[1])
                }
            }
            )),
            D.extend = function(t, e) {
                return t.$i || (t(e, _, D),
                t.$i = !0),
                D
            }
            ,
            D.locale = M,
            D.isDayjs = b,
            D.unix = function(t) {
                return D(1e3 * t)
            }
            ,
            D.en = $[T],
            D.Ls = $,
            D.p = {},
            D
        }
        ,
        t.exports = n()
    },
    343522: function(t) {
        var e, n;
        e = this,
        n = function() {
            "use strict";
            var t, e, n = 1e3, r = 6e4, i = 36e5, o = 864e5, s = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, u = 2628e6, c = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, l = {
                years: a,
                months: u,
                days: o,
                hours: i,
                minutes: r,
                seconds: n,
                milliseconds: 1,
                weeks: 6048e5
            }, f = function(t) {
                return t instanceof v
            }, d = function(t, e, n) {
                return new v(t,n,e.$l)
            }, m = function(t) {
                return e.p(t) + "s"
            }, h = function(t) {
                return t < 0
            }, p = function(t) {
                return h(t) ? Math.ceil(t) : Math.floor(t)
            }, g = function(t) {
                return Math.abs(t)
            }, y = function(t, e) {
                return t ? h(t) ? {
                    negative: !0,
                    format: "" + g(t) + e
                } : {
                    negative: !1,
                    format: "" + t + e
                } : {
                    negative: !1,
                    format: ""
                }
            }, v = function() {
                function h(t, e, n) {
                    var r = this;
                    if (this.$d = {},
                    this.$l = n,
                    void 0 === t && (this.$ms = 0,
                    this.parseFromMilliseconds()),
                    e)
                        return d(t * l[m(e)], this);
                    if ("number" == typeof t)
                        return this.$ms = t,
                        this.parseFromMilliseconds(),
                        this;
                    if ("object" == typeof t)
                        return Object.keys(t).forEach((function(e) {
                            r.$d[m(e)] = t[e]
                        }
                        )),
                        this.calMilliseconds(),
                        this;
                    if ("string" == typeof t) {
                        var i = t.match(c);
                        if (i) {
                            var o = i.slice(2).map((function(t) {
                                return null != t ? Number(t) : 0
                            }
                            ));
                            return this.$d.years = o[0],
                            this.$d.months = o[1],
                            this.$d.weeks = o[2],
                            this.$d.days = o[3],
                            this.$d.hours = o[4],
                            this.$d.minutes = o[5],
                            this.$d.seconds = o[6],
                            this.calMilliseconds(),
                            this
                        }
                    }
                    return this
                }
                var g = h.prototype;
                return g.calMilliseconds = function() {
                    var t = this;
                    this.$ms = Object.keys(this.$d).reduce((function(e, n) {
                        return e + (t.$d[n] || 0) * l[n]
                    }
                    ), 0)
                }
                ,
                g.parseFromMilliseconds = function() {
                    var t = this.$ms;
                    this.$d.years = p(t / a),
                    t %= a,
                    this.$d.months = p(t / u),
                    t %= u,
                    this.$d.days = p(t / o),
                    t %= o,
                    this.$d.hours = p(t / i),
                    t %= i,
                    this.$d.minutes = p(t / r),
                    t %= r,
                    this.$d.seconds = p(t / n),
                    t %= n,
                    this.$d.milliseconds = t
                }
                ,
                g.toISOString = function() {
                    var t = y(this.$d.years, "Y")
                      , e = y(this.$d.months, "M")
                      , n = +this.$d.days || 0;
                    this.$d.weeks && (n += 7 * this.$d.weeks);
                    var r = y(n, "D")
                      , i = y(this.$d.hours, "H")
                      , o = y(this.$d.minutes, "M")
                      , s = this.$d.seconds || 0;
                    this.$d.milliseconds && (s += this.$d.milliseconds / 1e3,
                    s = Math.round(1e3 * s) / 1e3);
                    var a = y(s, "S")
                      , u = t.negative || e.negative || r.negative || i.negative || o.negative || a.negative
                      , c = i.format || o.format || a.format ? "T" : ""
                      , l = (u ? "-" : "") + "P" + t.format + e.format + r.format + c + i.format + o.format + a.format;
                    return "P" === l || "-P" === l ? "P0D" : l
                }
                ,
                g.toJSON = function() {
                    return this.toISOString()
                }
                ,
                g.format = function(t) {
                    var n = t || "YYYY-MM-DDTHH:mm:ss"
                      , r = {
                        Y: this.$d.years,
                        YY: e.s(this.$d.years, 2, "0"),
                        YYYY: e.s(this.$d.years, 4, "0"),
                        M: this.$d.months,
                        MM: e.s(this.$d.months, 2, "0"),
                        D: this.$d.days,
                        DD: e.s(this.$d.days, 2, "0"),
                        H: this.$d.hours,
                        HH: e.s(this.$d.hours, 2, "0"),
                        m: this.$d.minutes,
                        mm: e.s(this.$d.minutes, 2, "0"),
                        s: this.$d.seconds,
                        ss: e.s(this.$d.seconds, 2, "0"),
                        SSS: e.s(this.$d.milliseconds, 3, "0")
                    };
                    return n.replace(s, (function(t, e) {
                        return e || String(r[t])
                    }
                    ))
                }
                ,
                g.as = function(t) {
                    return this.$ms / l[m(t)]
                }
                ,
                g.get = function(t) {
                    var e = this.$ms
                      , n = m(t);
                    return "milliseconds" === n ? e %= 1e3 : e = "weeks" === n ? p(e / l[n]) : this.$d[n],
                    e || 0
                }
                ,
                g.add = function(t, e, n) {
                    var r;
                    return r = e ? t * l[m(e)] : f(t) ? t.$ms : d(t, this).$ms,
                    d(this.$ms + r * (n ? -1 : 1), this)
                }
                ,
                g.subtract = function(t, e) {
                    return this.add(t, e, !0)
                }
                ,
                g.locale = function(t) {
                    var e = this.clone();
                    return e.$l = t,
                    e
                }
                ,
                g.clone = function() {
                    return d(this.$ms, this)
                }
                ,
                g.humanize = function(e) {
                    return t().add(this.$ms, "ms").locale(this.$l).fromNow(!e)
                }
                ,
                g.valueOf = function() {
                    return this.asMilliseconds()
                }
                ,
                g.milliseconds = function() {
                    return this.get("milliseconds")
                }
                ,
                g.asMilliseconds = function() {
                    return this.as("milliseconds")
                }
                ,
                g.seconds = function() {
                    return this.get("seconds")
                }
                ,
                g.asSeconds = function() {
                    return this.as("seconds")
                }
                ,
                g.minutes = function() {
                    return this.get("minutes")
                }
                ,
                g.asMinutes = function() {
                    return this.as("minutes")
                }
                ,
                g.hours = function() {
                    return this.get("hours")
                }
                ,
                g.asHours = function() {
                    return this.as("hours")
                }
                ,
                g.days = function() {
                    return this.get("days")
                }
                ,
                g.asDays = function() {
                    return this.as("days")
                }
                ,
                g.weeks = function() {
                    return this.get("weeks")
                }
                ,
                g.asWeeks = function() {
                    return this.as("weeks")
                }
                ,
                g.months = function() {
                    return this.get("months")
                }
                ,
                g.asMonths = function() {
                    return this.as("months")
                }
                ,
                g.years = function() {
                    return this.get("years")
                }
                ,
                g.asYears = function() {
                    return this.as("years")
                }
                ,
                h
            }(), T = function(t, e, n) {
                return t.add(e.years() * n, "y").add(e.months() * n, "M").add(e.days() * n, "d").add(e.hours() * n, "h").add(e.minutes() * n, "m").add(e.seconds() * n, "s").add(e.milliseconds() * n, "ms")
            };
            return function(n, r, i) {
                t = i,
                e = i().$utils(),
                i.duration = function(t, e) {
                    var n = i.locale();
                    return d(t, {
                        $l: n
                    }, e)
                }
                ,
                i.isDuration = f;
                var o = r.prototype.add
                  , s = r.prototype.subtract;
                r.prototype.add = function(t, e) {
                    return f(t) ? T(this, t, 1) : o.bind(this)(t, e)
                }
                ,
                r.prototype.subtract = function(t, e) {
                    return f(t) ? T(this, t, -1) : s.bind(this)(t, e)
                }
            }
        }
        ,
        t.exports = n()
    },
    947581: function(t) {
        var e, n;
        e = this,
        n = function() {
            "use strict";
            return function(t, e, n) {
                e.prototype.isToday = function() {
                    var t = "YYYY-MM-DD"
                      , e = n();
                    return this.format(t) === e.format(t)
                }
            }
        }
        ,
        t.exports = n()
    },
    149400: function(t) {
        var e, n;
        e = this,
        n = function() {
            "use strict";
            return function(t, e, n) {
                e.prototype.isYesterday = function() {
                    var t = "YYYY-MM-DD"
                      , e = n().subtract(1, "day");
                    return this.format(t) === e.format(t)
                }
            }
        }
        ,
        t.exports = n()
    },
    788569: function(t) {
        var e, n;
        e = this,
        n = function() {
            "use strict";
            var t = {
                year: 0,
                month: 1,
                day: 2,
                hour: 3,
                minute: 4,
                second: 5
            }
              , e = {};
            return function(n, r, i) {
                var o, s = function(t, n, r) {
                    void 0 === r && (r = {});
                    var i = new Date(t)
                      , o = function(t, n) {
                        void 0 === n && (n = {});
                        var r = n.timeZoneName || "short"
                          , i = t + "|" + r
                          , o = e[i];
                        return o || (o = new Intl.DateTimeFormat("en-US",{
                            hour12: !1,
                            timeZone: t,
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                            timeZoneName: r
                        }),
                        e[i] = o),
                        o
                    }(n, r);
                    return o.formatToParts(i)
                }, a = function(e, n) {
                    for (var r = s(e, n), o = [], a = 0; a < r.length; a += 1) {
                        var u = r[a]
                          , c = u.type
                          , l = u.value
                          , f = t[c];
                        f >= 0 && (o[f] = parseInt(l, 10))
                    }
                    var d = o[3]
                      , m = 24 === d ? 0 : d
                      , h = o[0] + "-" + o[1] + "-" + o[2] + " " + m + ":" + o[4] + ":" + o[5] + ":000"
                      , p = +e;
                    return (i.utc(h).valueOf() - (p -= p % 1e3)) / 6e4
                }, u = r.prototype;
                u.tz = function(t, e) {
                    void 0 === t && (t = o);
                    var n, r = this.utcOffset(), s = this.toDate(), a = s.toLocaleString("en-US", {
                        timeZone: t
                    }), u = Math.round((s - new Date(a)) / 1e3 / 60), c = 15 * -Math.round(s.getTimezoneOffset() / 15) - u;
                    if (Number(c)) {
                        if (n = i(a, {
                            locale: this.$L
                        }).$set("millisecond", this.$ms).utcOffset(c, !0),
                        e) {
                            var l = n.utcOffset();
                            n = n.add(r - l, "minute")
                        }
                    } else
                        n = this.utcOffset(0, e);
                    return n.$x.$timezone = t,
                    n
                }
                ,
                u.offsetName = function(t) {
                    var e = this.$x.$timezone || i.tz.guess()
                      , n = s(this.valueOf(), e, {
                        timeZoneName: t
                    }).find((function(t) {
                        return "timezonename" === t.type.toLowerCase()
                    }
                    ));
                    return n && n.value
                }
                ;
                var c = u.startOf;
                u.startOf = function(t, e) {
                    if (!this.$x || !this.$x.$timezone)
                        return c.call(this, t, e);
                    var n = i(this.format("YYYY-MM-DD HH:mm:ss:SSS"), {
                        locale: this.$L
                    });
                    return c.call(n, t, e).tz(this.$x.$timezone, !0)
                }
                ,
                i.tz = function(t, e, n) {
                    var r = n && e
                      , s = n || e || o
                      , u = a(+i(), s);
                    if ("string" != typeof t)
                        return i(t).tz(s);
                    var c = function(t, e, n) {
                        var r = t - 60 * e * 1e3
                          , i = a(r, n);
                        if (e === i)
                            return [r, e];
                        var o = a(r -= 60 * (i - e) * 1e3, n);
                        return i === o ? [r, i] : [t - 60 * Math.min(i, o) * 1e3, Math.max(i, o)]
                    }(i.utc(t, r).valueOf(), u, s)
                      , l = c[0]
                      , f = c[1]
                      , d = i(l).utcOffset(f);
                    return d.$x.$timezone = s,
                    d
                }
                ,
                i.tz.guess = function() {
                    return Intl.DateTimeFormat().resolvedOptions().timeZone
                }
                ,
                i.tz.setDefault = function(t) {
                    o = t
                }
            }
        }
        ,
        t.exports = n()
    },
    683826: function(t) {
        var e, n;
        e = this,
        n = function() {
            "use strict";
            var t = "minute"
              , e = /[+-]\d\d(?::?\d\d)?/g
              , n = /([+-]|\d\d)/g;
            return function(r, i, o) {
                var s = i.prototype;
                o.utc = function(t) {
                    var e;
                    return new i({
                        date: t,
                        utc: !0,
                        args: arguments
                    })
                }
                ,
                s.utc = function(e) {
                    var n = o(this.toDate(), {
                        locale: this.$L,
                        utc: !0
                    });
                    return e ? n.add(this.utcOffset(), t) : n
                }
                ,
                s.local = function() {
                    return o(this.toDate(), {
                        locale: this.$L,
                        utc: !1
                    })
                }
                ;
                var a = s.parse;
                s.parse = function(t) {
                    t.utc && (this.$u = !0),
                    this.$utils().u(t.$offset) || (this.$offset = t.$offset),
                    a.call(this, t)
                }
                ;
                var u = s.init;
                s.init = function() {
                    if (this.$u) {
                        var t = this.$d;
                        this.$y = t.getUTCFullYear(),
                        this.$M = t.getUTCMonth(),
                        this.$D = t.getUTCDate(),
                        this.$W = t.getUTCDay(),
                        this.$H = t.getUTCHours(),
                        this.$m = t.getUTCMinutes(),
                        this.$s = t.getUTCSeconds(),
                        this.$ms = t.getUTCMilliseconds()
                    } else
                        u.call(this)
                }
                ;
                var c = s.utcOffset;
                s.utcOffset = function(r, i) {
                    var o = this.$utils().u;
                    if (o(r))
                        return this.$u ? 0 : o(this.$offset) ? c.call(this) : this.$offset;
                    if ("string" == typeof r && (r = function(t) {
                        void 0 === t && (t = "");
                        var r = t.match(e);
                        if (!r)
                            return null;
                        var i = ("" + r[0]).match(n) || ["-", 0, 0]
                          , o = i[0]
                          , s = 60 * +i[1] + +i[2];
                        return 0 === s ? 0 : "+" === o ? s : -s
                    }(r),
                    null === r))
                        return this;
                    var s = Math.abs(r) <= 16 ? 60 * r : r
                      , a = this;
                    if (i)
                        return a.$offset = s,
                        a.$u = 0 === r,
                        a;
                    if (0 !== r) {
                        var u = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                        (a = this.local().add(s + u, t)).$offset = s,
                        a.$x.$localOffset = u
                    } else
                        a = this.utc();
                    return a
                }
                ;
                var l = s.format;
                s.format = function(t) {
                    var e = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                    return l.call(this, e)
                }
                ,
                s.valueOf = function() {
                    var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
                    return this.$d.valueOf() - 6e4 * t
                }
                ,
                s.isUTC = function() {
                    return !!this.$u
                }
                ,
                s.toISOString = function() {
                    return this.toDate().toISOString()
                }
                ,
                s.toString = function() {
                    return this.toDate().toUTCString()
                }
                ;
                var f = s.toDate;
                s.toDate = function(t) {
                    return "s" === t && this.$offset ? o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : f.call(this)
                }
                ;
                var d = s.diff;
                s.diff = function(t, e, n) {
                    if (t && this.$u === t.$u)
                        return d.call(this, t, e, n);
                    var r = this.local()
                      , i = o(t).local();
                    return d.call(r, i, e, n)
                }
            }
        }
        ,
        t.exports = n()
    },
    914744: function(t) {
        "use strict";
        var e = function t(e) {
            return n(e) && !r(e)
        };
        function n(t) {
            return !!t && "object" == typeof t
        }
        function r(t) {
            var e = Object.prototype.toString.call(t);
            return "[object RegExp]" === e || "[object Date]" === e || s(t)
        }
        var i, o = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
        function s(t) {
            return t.$$typeof === o
        }
        function a(t) {
            return Array.isArray(t) ? [] : {}
        }
        function u(t, e) {
            return !1 !== e.clone && e.isMergeableObject(t) ? g(a(t), t, e) : t
        }
        function c(t, e, n) {
            return t.concat(e).map((function(t) {
                return u(t, n)
            }
            ))
        }
        function l(t, e) {
            if (!e.customMerge)
                return g;
            var n = e.customMerge(t);
            return "function" == typeof n ? n : g
        }
        function f(t) {
            return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter((function(e) {
                return Object.propertyIsEnumerable.call(t, e)
            }
            )) : []
        }
        function d(t) {
            return Object.keys(t).concat(f(t))
        }
        function m(t, e) {
            try {
                return e in t
            } catch (n) {
                return !1
            }
        }
        function h(t, e) {
            return m(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e))
        }
        function p(t, e, n) {
            var r = {};
            return n.isMergeableObject(t) && d(t).forEach((function(e) {
                r[e] = u(t[e], n)
            }
            )),
            d(e).forEach((function(i) {
                h(t, i) || (m(t, i) && n.isMergeableObject(e[i]) ? r[i] = l(i, n)(t[i], e[i], n) : r[i] = u(e[i], n))
            }
            )),
            r
        }
        function g(t, n, r) {
            (r = r || {}).arrayMerge = r.arrayMerge || c,
            r.isMergeableObject = r.isMergeableObject || e,
            r.cloneUnlessOtherwiseSpecified = u;
            var i = Array.isArray(n), o, s;
            return i === Array.isArray(t) ? i ? r.arrayMerge(t, n, r) : p(t, n, r) : u(n, r)
        }
        g.all = function t(e, n) {
            if (!Array.isArray(e))
                throw new Error("first argument should be an array");
            return e.reduce((function(t, e) {
                return g(t, e, n)
            }
            ), {})
        }
        ;
        var y = g;
        t.exports = y
    },
    842838: function(t) {
        /*! @license DOMPurify 3.1.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.6/LICENSE */
        var e, n;
        e = this,
        n = function() {
            "use strict";
            const {entries: t, setPrototypeOf: e, isFrozen: n, getPrototypeOf: r, getOwnPropertyDescriptor: i} = Object;
            let {freeze: o, seal: s, create: a} = Object
              , {apply: u, construct: c} = "undefined" != typeof Reflect && Reflect;
            o || (o = function t(e) {
                return e
            }
            ),
            s || (s = function t(e) {
                return e
            }
            ),
            u || (u = function t(e, n, r) {
                return e.apply(n, r)
            }
            ),
            c || (c = function t(e, n) {
                return new e(...n)
            }
            );
            const l = b(Array.prototype.forEach)
              , f = b(Array.prototype.pop)
              , d = b(Array.prototype.push)
              , m = b(String.prototype.toLowerCase)
              , h = b(String.prototype.toString)
              , p = b(String.prototype.match)
              , g = b(String.prototype.replace)
              , y = b(String.prototype.indexOf)
              , v = b(String.prototype.trim)
              , T = b(Object.prototype.hasOwnProperty)
              , $ = b(RegExp.prototype.test)
              , S = M(TypeError);
            function b(t) {
                return function(e) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                        r[i - 1] = arguments[i];
                    return u(t, e, r)
                }
            }
            function M(t) {
                return function() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                        n[r] = arguments[r];
                    return c(t, n)
                }
            }
            function D(t, r) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m;
                e && e(t, null);
                let o = r.length;
                for (; o--; ) {
                    let e = r[o];
                    if ("string" == typeof e) {
                        const t = i(e);
                        t !== e && (n(r) || (r[o] = t),
                        e = t)
                    }
                    t[e] = !0
                }
                return t
            }
            function E(t) {
                for (let e = 0; e < t.length; e++) {
                    const n = void 0;
                    T(t, e) || (t[e] = null)
                }
                return t
            }
            function _(e) {
                const n = a(null);
                for (const [r,i] of t(e)) {
                    const t = void 0;
                    T(e, r) && (Array.isArray(i) ? n[r] = E(i) : i && "object" == typeof i && i.constructor === Object ? n[r] = _(i) : n[r] = i)
                }
                return n
            }
            function O(t, e) {
                for (; null !== t; ) {
                    const n = i(t, e);
                    if (n) {
                        if (n.get)
                            return b(n.get);
                        if ("function" == typeof n.value)
                            return b(n.value)
                    }
                    t = r(t)
                }
                function n() {
                    return null
                }
                return n
            }
            const A = o(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"])
              , w = o(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"])
              , N = o(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"])
              , k = o(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"])
              , C = o(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"])
              , x = o(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"])
              , L = o(["#text"])
              , R = o(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"])
              , I = o(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"])
              , U = o(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"])
              , H = o(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"])
              , Y = s(/\{\{[\w\W]*|[\w\W]*\}\}/gm)
              , P = s(/<%[\w\W]*|[\w\W]*%>/gm)
              , z = s(/\${[\w\W]*}/gm)
              , F = s(/^data-[\-\w.\u00B7-\uFFFF]/)
              , j = s(/^aria-[\-\w]+$/)
              , W = s(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i)
              , B = s(/^(?:\w+script|data):/i)
              , G = s(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g)
              , Z = s(/^html$/i)
              , q = s(/^[a-z][.\w]*(-[.\w]+)+$/i);
            var X = Object.freeze({
                __proto__: null,
                MUSTACHE_EXPR: Y,
                ERB_EXPR: P,
                TMPLIT_EXPR: z,
                DATA_ATTR: F,
                ARIA_ATTR: j,
                IS_ALLOWED_URI: W,
                IS_SCRIPT_OR_DATA: B,
                ATTR_WHITESPACE: G,
                DOCTYPE_NAME: Z,
                CUSTOM_ELEMENT: q
            });
            const V = 1
              , J = 2
              , K = 3
              , Q = 4
              , tt = 5
              , et = 6
              , nt = 7
              , rt = 8
              , it = 9
              , ot = 10
              , st = 11
              , at = 12
              , ut = function t() {
                return "undefined" == typeof window ? null : window
            }
              , ct = function t(e, n) {
                if ("object" != typeof e || "function" != typeof e.createPolicy)
                    return null;
                let r = null;
                const i = "data-tt-policy-suffix";
                n && n.hasAttribute(i) && (r = n.getAttribute(i));
                const o = "dompurify" + (r ? "#" + r : "");
                try {
                    return e.createPolicy(o, {
                        createHTML(t) {
                            return t
                        },
                        createScriptURL(t) {
                            return t
                        }
                    })
                } catch (s) {
                    return console.warn("TrustedTypes policy " + o + " could not be created."),
                    null
                }
            };
            function lt() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut();
                const n = t => lt(t);
                if (n.version = "3.1.6",
                n.removed = [],
                !e || !e.document || e.document.nodeType !== it)
                    return n.isSupported = !1,
                    n;
                let {document: r} = e;
                const i = r
                  , s = i.currentScript
                  , {DocumentFragment: u, HTMLTemplateElement: c, Node: b, Element: M, NodeFilter: E, NamedNodeMap: Y=e.NamedNodeMap || e.MozNamedAttrMap, HTMLFormElement: P, DOMParser: z, trustedTypes: F} = e
                  , j = M.prototype
                  , B = O(j, "cloneNode")
                  , G = O(j, "remove")
                  , q = O(j, "nextSibling")
                  , J = O(j, "childNodes")
                  , Q = O(j, "parentNode");
                if ("function" == typeof c) {
                    const t = r.createElement("template");
                    t.content && t.content.ownerDocument && (r = t.content.ownerDocument)
                }
                let tt, et = "";
                const {implementation: ot, createNodeIterator: st, createDocumentFragment: at, getElementsByTagName: ft} = r
                  , {importNode: dt} = i;
                let mt = {};
                n.isSupported = "function" == typeof t && "function" == typeof Q && ot && void 0 !== ot.createHTMLDocument;
                const {MUSTACHE_EXPR: ht, ERB_EXPR: pt, TMPLIT_EXPR: gt, DATA_ATTR: yt, ARIA_ATTR: vt, IS_SCRIPT_OR_DATA: Tt, ATTR_WHITESPACE: $t, CUSTOM_ELEMENT: St} = X;
                let {IS_ALLOWED_URI: bt} = X
                  , Mt = null;
                const Dt = D({}, [...A, ...w, ...N, ...C, ...L]);
                let Et = null;
                const _t = D({}, [...R, ...I, ...U, ...H]);
                let Ot = Object.seal(a(null, {
                    tagNameCheck: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: null
                    },
                    attributeNameCheck: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: null
                    },
                    allowCustomizedBuiltInElements: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: !1
                    }
                }))
                  , At = null
                  , wt = null
                  , Nt = !0
                  , kt = !0
                  , Ct = !1
                  , xt = !0
                  , Lt = !1
                  , Rt = !0
                  , It = !1
                  , Ut = !1
                  , Ht = !1
                  , Yt = !1
                  , Pt = !1
                  , zt = !1
                  , Ft = !0
                  , jt = !1;
                const Wt = "user-content-";
                let Bt = !0
                  , Gt = !1
                  , Zt = {}
                  , qt = null;
                const Xt = D({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
                let Vt = null;
                const Jt = D({}, ["audio", "video", "img", "source", "image", "track"]);
                let Kt = null;
                const Qt = D({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"])
                  , te = "http://www.w3.org/1998/Math/MathML"
                  , ee = "http://www.w3.org/2000/svg"
                  , ne = "http://www.w3.org/1999/xhtml";
                let re = ne
                  , ie = !1
                  , oe = null;
                const se = D({}, [te, ee, ne], h);
                let ae = null;
                const ue = ["application/xhtml+xml", "text/html"]
                  , ce = "text/html";
                let le = null
                  , fe = null;
                const de = r.createElement("form")
                  , me = function t(e) {
                    return e instanceof RegExp || e instanceof Function
                }
                  , he = function t() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!fe || fe !== e) {
                        if (e && "object" == typeof e || (e = {}),
                        e = _(e),
                        ae = -1 === ue.indexOf(e.PARSER_MEDIA_TYPE) ? ce : e.PARSER_MEDIA_TYPE,
                        le = "application/xhtml+xml" === ae ? h : m,
                        Mt = T(e, "ALLOWED_TAGS") ? D({}, e.ALLOWED_TAGS, le) : Dt,
                        Et = T(e, "ALLOWED_ATTR") ? D({}, e.ALLOWED_ATTR, le) : _t,
                        oe = T(e, "ALLOWED_NAMESPACES") ? D({}, e.ALLOWED_NAMESPACES, h) : se,
                        Kt = T(e, "ADD_URI_SAFE_ATTR") ? D(_(Qt), e.ADD_URI_SAFE_ATTR, le) : Qt,
                        Vt = T(e, "ADD_DATA_URI_TAGS") ? D(_(Jt), e.ADD_DATA_URI_TAGS, le) : Jt,
                        qt = T(e, "FORBID_CONTENTS") ? D({}, e.FORBID_CONTENTS, le) : Xt,
                        At = T(e, "FORBID_TAGS") ? D({}, e.FORBID_TAGS, le) : {},
                        wt = T(e, "FORBID_ATTR") ? D({}, e.FORBID_ATTR, le) : {},
                        Zt = !!T(e, "USE_PROFILES") && e.USE_PROFILES,
                        Nt = !1 !== e.ALLOW_ARIA_ATTR,
                        kt = !1 !== e.ALLOW_DATA_ATTR,
                        Ct = e.ALLOW_UNKNOWN_PROTOCOLS || !1,
                        xt = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR,
                        Lt = e.SAFE_FOR_TEMPLATES || !1,
                        Rt = !1 !== e.SAFE_FOR_XML,
                        It = e.WHOLE_DOCUMENT || !1,
                        Yt = e.RETURN_DOM || !1,
                        Pt = e.RETURN_DOM_FRAGMENT || !1,
                        zt = e.RETURN_TRUSTED_TYPE || !1,
                        Ht = e.FORCE_BODY || !1,
                        Ft = !1 !== e.SANITIZE_DOM,
                        jt = e.SANITIZE_NAMED_PROPS || !1,
                        Bt = !1 !== e.KEEP_CONTENT,
                        Gt = e.IN_PLACE || !1,
                        bt = e.ALLOWED_URI_REGEXP || W,
                        re = e.NAMESPACE || ne,
                        Ot = e.CUSTOM_ELEMENT_HANDLING || {},
                        e.CUSTOM_ELEMENT_HANDLING && me(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ot.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                        e.CUSTOM_ELEMENT_HANDLING && me(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ot.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                        e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Ot.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                        Lt && (kt = !1),
                        Pt && (Yt = !0),
                        Zt && (Mt = D({}, L),
                        Et = [],
                        !0 === Zt.html && (D(Mt, A),
                        D(Et, R)),
                        !0 === Zt.svg && (D(Mt, w),
                        D(Et, I),
                        D(Et, H)),
                        !0 === Zt.svgFilters && (D(Mt, N),
                        D(Et, I),
                        D(Et, H)),
                        !0 === Zt.mathMl && (D(Mt, C),
                        D(Et, U),
                        D(Et, H))),
                        e.ADD_TAGS && (Mt === Dt && (Mt = _(Mt)),
                        D(Mt, e.ADD_TAGS, le)),
                        e.ADD_ATTR && (Et === _t && (Et = _(Et)),
                        D(Et, e.ADD_ATTR, le)),
                        e.ADD_URI_SAFE_ATTR && D(Kt, e.ADD_URI_SAFE_ATTR, le),
                        e.FORBID_CONTENTS && (qt === Xt && (qt = _(qt)),
                        D(qt, e.FORBID_CONTENTS, le)),
                        Bt && (Mt["#text"] = !0),
                        It && D(Mt, ["html", "head", "body"]),
                        Mt.table && (D(Mt, ["tbody"]),
                        delete At.tbody),
                        e.TRUSTED_TYPES_POLICY) {
                            if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML)
                                throw S('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                            if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
                                throw S('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                            tt = e.TRUSTED_TYPES_POLICY,
                            et = tt.createHTML("")
                        } else
                            void 0 === tt && (tt = ct(F, s)),
                            null !== tt && "string" == typeof et && (et = tt.createHTML(""));
                        o && o(e),
                        fe = e
                    }
                }
                  , pe = D({}, ["mi", "mo", "mn", "ms", "mtext"])
                  , ge = D({}, ["foreignobject", "annotation-xml"])
                  , ye = D({}, ["title", "style", "font", "a", "script"])
                  , ve = D({}, [...w, ...N, ...k])
                  , Te = D({}, [...C, ...x])
                  , $e = function t(e) {
                    let n = Q(e);
                    n && n.tagName || (n = {
                        namespaceURI: re,
                        tagName: "template"
                    });
                    const r = m(e.tagName)
                      , i = m(n.tagName);
                    return !!oe[e.namespaceURI] && (e.namespaceURI === ee ? n.namespaceURI === ne ? "svg" === r : n.namespaceURI === te ? "svg" === r && ("annotation-xml" === i || pe[i]) : Boolean(ve[r]) : e.namespaceURI === te ? n.namespaceURI === ne ? "math" === r : n.namespaceURI === ee ? "math" === r && ge[i] : Boolean(Te[r]) : e.namespaceURI === ne ? !(n.namespaceURI === ee && !ge[i]) && !(n.namespaceURI === te && !pe[i]) && !Te[r] && (ye[r] || !ve[r]) : !("application/xhtml+xml" !== ae || !oe[e.namespaceURI]))
                }
                  , Se = function t(e) {
                    d(n.removed, {
                        element: e
                    });
                    try {
                        Q(e).removeChild(e)
                    } catch (r) {
                        G(e)
                    }
                }
                  , be = function t(e, r) {
                    try {
                        d(n.removed, {
                            attribute: r.getAttributeNode(e),
                            from: r
                        })
                    } catch (i) {
                        d(n.removed, {
                            attribute: null,
                            from: r
                        })
                    }
                    if (r.removeAttribute(e),
                    "is" === e && !Et[e])
                        if (Yt || Pt)
                            try {
                                Se(r)
                            } catch (i) {}
                        else
                            try {
                                r.setAttribute(e, "")
                            } catch (i) {}
                }
                  , Me = function t(e) {
                    let n = null
                      , i = null;
                    if (Ht)
                        e = "<remove></remove>" + e;
                    else {
                        const t = p(e, /^[\r\n\t ]+/);
                        i = t && t[0]
                    }
                    "application/xhtml+xml" === ae && re === ne && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                    const o = tt ? tt.createHTML(e) : e;
                    if (re === ne)
                        try {
                            n = (new z).parseFromString(o, ae)
                        } catch (a) {}
                    if (!n || !n.documentElement) {
                        n = ot.createDocument(re, "template", null);
                        try {
                            n.documentElement.innerHTML = ie ? et : o
                        } catch (a) {}
                    }
                    const s = n.body || n.documentElement;
                    return e && i && s.insertBefore(r.createTextNode(i), s.childNodes[0] || null),
                    re === ne ? ft.call(n, It ? "html" : "body")[0] : It ? n.documentElement : s
                }
                  , De = function t(e) {
                    return st.call(e.ownerDocument || e, e, E.SHOW_ELEMENT | E.SHOW_COMMENT | E.SHOW_TEXT | E.SHOW_PROCESSING_INSTRUCTION | E.SHOW_CDATA_SECTION, null)
                }
                  , Ee = function t(e) {
                    return e instanceof P && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof Y) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
                }
                  , _e = function t(e) {
                    return "function" == typeof b && e instanceof b
                }
                  , Oe = function t(e, r, i) {
                    mt[e] && l(mt[e], (t => {
                        t.call(n, r, i, fe)
                    }
                    ))
                }
                  , Ae = function t(e) {
                    let r = null;
                    if (Oe("beforeSanitizeElements", e, null),
                    Ee(e))
                        return Se(e),
                        !0;
                    const i = le(e.nodeName);
                    if (Oe("uponSanitizeElement", e, {
                        tagName: i,
                        allowedTags: Mt
                    }),
                    e.hasChildNodes() && !_e(e.firstElementChild) && $(/<[/\w]/g, e.innerHTML) && $(/<[/\w]/g, e.textContent))
                        return Se(e),
                        !0;
                    if (e.nodeType === nt)
                        return Se(e),
                        !0;
                    if (Rt && e.nodeType === rt && $(/<[/\w]/g, e.data))
                        return Se(e),
                        !0;
                    if (!Mt[i] || At[i]) {
                        if (!At[i] && Ne(i)) {
                            if (Ot.tagNameCheck instanceof RegExp && $(Ot.tagNameCheck, i))
                                return !1;
                            if (Ot.tagNameCheck instanceof Function && Ot.tagNameCheck(i))
                                return !1
                        }
                        if (Bt && !qt[i]) {
                            const t = Q(e) || e.parentNode
                              , n = J(e) || e.childNodes;
                            if (n && t) {
                                const r = void 0;
                                for (let i = n.length - 1; i >= 0; --i) {
                                    const r = B(n[i], !0);
                                    r.__removalCount = (e.__removalCount || 0) + 1,
                                    t.insertBefore(r, q(e))
                                }
                            }
                        }
                        return Se(e),
                        !0
                    }
                    return e instanceof M && !$e(e) ? (Se(e),
                    !0) : "noscript" !== i && "noembed" !== i && "noframes" !== i || !$(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Lt && e.nodeType === K && (r = e.textContent,
                    l([ht, pt, gt], (t => {
                        r = g(r, t, " ")
                    }
                    )),
                    e.textContent !== r && (d(n.removed, {
                        element: e.cloneNode()
                    }),
                    e.textContent = r)),
                    Oe("afterSanitizeElements", e, null),
                    !1) : (Se(e),
                    !0)
                }
                  , we = function t(e, n, i) {
                    if (Ft && ("id" === n || "name" === n) && (i in r || i in de))
                        return !1;
                    if (kt && !wt[n] && $(yt, n))
                        ;
                    else if (Nt && $(vt, n))
                        ;
                    else if (!Et[n] || wt[n]) {
                        if (!(Ne(e) && (Ot.tagNameCheck instanceof RegExp && $(Ot.tagNameCheck, e) || Ot.tagNameCheck instanceof Function && Ot.tagNameCheck(e)) && (Ot.attributeNameCheck instanceof RegExp && $(Ot.attributeNameCheck, n) || Ot.attributeNameCheck instanceof Function && Ot.attributeNameCheck(n)) || "is" === n && Ot.allowCustomizedBuiltInElements && (Ot.tagNameCheck instanceof RegExp && $(Ot.tagNameCheck, i) || Ot.tagNameCheck instanceof Function && Ot.tagNameCheck(i))))
                            return !1
                    } else if (Kt[n])
                        ;
                    else if ($(bt, g(i, $t, "")))
                        ;
                    else if ("src" !== n && "xlink:href" !== n && "href" !== n || "script" === e || 0 !== y(i, "data:") || !Vt[e])
                        if (Ct && !$(Tt, g(i, $t, "")))
                            ;
                        else if (i)
                            return !1;
                    return !0
                }
                  , Ne = function t(e) {
                    return "annotation-xml" !== e && p(e, St)
                }
                  , ke = function t(e) {
                    Oe("beforeSanitizeAttributes", e, null);
                    const {attributes: r} = e;
                    if (!r)
                        return;
                    const i = {
                        attrName: "",
                        attrValue: "",
                        keepAttr: !0,
                        allowedAttributes: Et
                    };
                    let o = r.length;
                    for (; o--; ) {
                        const t = r[o]
                          , {name: a, namespaceURI: u, value: c} = t
                          , d = le(a);
                        let m = "value" === a ? c : v(c);
                        if (i.attrName = d,
                        i.attrValue = m,
                        i.keepAttr = !0,
                        i.forceKeepAttr = void 0,
                        Oe("uponSanitizeAttribute", e, i),
                        m = i.attrValue,
                        Rt && $(/((--!?|])>)|<\/(style|title)/i, m)) {
                            be(a, e);
                            continue
                        }
                        if (i.forceKeepAttr)
                            continue;
                        if (be(a, e),
                        !i.keepAttr)
                            continue;
                        if (!xt && $(/\/>/i, m)) {
                            be(a, e);
                            continue
                        }
                        Lt && l([ht, pt, gt], (t => {
                            m = g(m, t, " ")
                        }
                        ));
                        const h = le(e.nodeName);
                        if (we(h, d, m)) {
                            if (!jt || "id" !== d && "name" !== d || (be(a, e),
                            m = Wt + m),
                            tt && "object" == typeof F && "function" == typeof F.getAttributeType)
                                if (u)
                                    ;
                                else
                                    switch (F.getAttributeType(h, d)) {
                                    case "TrustedHTML":
                                        m = tt.createHTML(m);
                                        break;
                                    case "TrustedScriptURL":
                                        m = tt.createScriptURL(m)
                                    }
                            try {
                                u ? e.setAttributeNS(u, a, m) : e.setAttribute(a, m),
                                Ee(e) ? Se(e) : f(n.removed)
                            } catch (s) {}
                        }
                    }
                    Oe("afterSanitizeAttributes", e, null)
                }
                  , Ce = function t(e) {
                    let n = null;
                    const r = De(e);
                    for (Oe("beforeSanitizeShadowDOM", e, null); n = r.nextNode(); )
                        Oe("uponSanitizeShadowNode", n, null),
                        Ae(n) || (n.content instanceof u && t(n.content),
                        ke(n));
                    Oe("afterSanitizeShadowDOM", e, null)
                };
                return n.sanitize = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , r = null
                      , o = null
                      , s = null
                      , a = null;
                    if (ie = !t,
                    ie && (t = "\x3c!--\x3e"),
                    "string" != typeof t && !_e(t)) {
                        if ("function" != typeof t.toString)
                            throw S("toString is not a function");
                        if ("string" != typeof (t = t.toString()))
                            throw S("dirty is not a string, aborting")
                    }
                    if (!n.isSupported)
                        return t;
                    if (Ut || he(e),
                    n.removed = [],
                    "string" == typeof t && (Gt = !1),
                    Gt) {
                        if (t.nodeName) {
                            const e = le(t.nodeName);
                            if (!Mt[e] || At[e])
                                throw S("root node is forbidden and cannot be sanitized in-place")
                        }
                    } else if (t instanceof b)
                        r = Me("\x3c!----\x3e"),
                        o = r.ownerDocument.importNode(t, !0),
                        o.nodeType === V && "BODY" === o.nodeName || "HTML" === o.nodeName ? r = o : r.appendChild(o);
                    else {
                        if (!Yt && !Lt && !It && -1 === t.indexOf("<"))
                            return tt && zt ? tt.createHTML(t) : t;
                        if (r = Me(t),
                        !r)
                            return Yt ? null : zt ? et : ""
                    }
                    r && Ht && Se(r.firstChild);
                    const c = De(Gt ? t : r);
                    for (; s = c.nextNode(); )
                        Ae(s) || (s.content instanceof u && Ce(s.content),
                        ke(s));
                    if (Gt)
                        return t;
                    if (Yt) {
                        if (Pt)
                            for (a = at.call(r.ownerDocument); r.firstChild; )
                                a.appendChild(r.firstChild);
                        else
                            a = r;
                        return (Et.shadowroot || Et.shadowrootmode) && (a = dt.call(i, a, !0)),
                        a
                    }
                    let f = It ? r.outerHTML : r.innerHTML;
                    return It && Mt["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && $(Z, r.ownerDocument.doctype.name) && (f = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + f),
                    Lt && l([ht, pt, gt], (t => {
                        f = g(f, t, " ")
                    }
                    )),
                    tt && zt ? tt.createHTML(f) : f
                }
                ,
                n.setConfig = function() {
                    let t;
                    he(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                    Ut = !0
                }
                ,
                n.clearConfig = function() {
                    fe = null,
                    Ut = !1
                }
                ,
                n.isValidAttribute = function(t, e, n) {
                    fe || he({});
                    const r = le(t)
                      , i = le(e);
                    return we(r, i, n)
                }
                ,
                n.addHook = function(t, e) {
                    "function" == typeof e && (mt[t] = mt[t] || [],
                    d(mt[t], e))
                }
                ,
                n.removeHook = function(t) {
                    if (mt[t])
                        return f(mt[t])
                }
                ,
                n.removeHooks = function(t) {
                    mt[t] && (mt[t] = [])
                }
                ,
                n.removeAllHooks = function() {
                    mt = {}
                }
                ,
                n
            }
            var ft;
            return lt()
        }
        ,
        t.exports = n()
    }
}]);
