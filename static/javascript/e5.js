"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[57355], {
    415261: function(e, t, r) {
        r.d(t, {
            Ce: function() {
                return No
            },
            LW: function() {
                return ho
            }
        });
        /**
  * vee-validate v2.2.15
  * (c) 2019 Abdelrahman Awad
  * @license MIT
  */
        var n = function(e) {
            return Y(["text", "password", "search", "email", "tel", "url", "textarea", "number"], e.type)
        }
          , i = function(e) {
            return Y(["radio", "checkbox"], e.type)
        }
          , a = function(e) {
            return Y(["date", "week", "month", "datetime-local", "time"], e.type)
        }
          , o = function(e, t) {
            return e.getAttribute("data-vv-" + t)
        }
          , s = function(e) {
            return "isNaN"in Number ? Number.isNaN(e) : "number" == typeof e && e != e
        }
          , u = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            return e.every((function(e) {
                return null == e
            }
            ))
        }
          , l = function() {
            return {
                untouched: !0,
                touched: !1,
                dirty: !1,
                pristine: !0,
                valid: null,
                invalid: null,
                validated: !1,
                pending: !1,
                required: !1,
                changed: !1
            }
        }
          , c = function(e, t) {
            if (e instanceof RegExp && t instanceof RegExp)
                return c(e.source, t.source) && c(e.flags, t.flags);
            if (Array.isArray(e) && Array.isArray(t)) {
                if (e.length !== t.length)
                    return !1;
                for (var r = 0; r < e.length; r++)
                    if (!c(e[r], t[r]))
                        return !1;
                return !0
            }
            return _(e) && _(t) ? Object.keys(e).every((function(r) {
                return c(e[r], t[r])
            }
            )) && Object.keys(t).every((function(r) {
                return c(e[r], t[r])
            }
            )) : !(!s(e) || !s(t)) || e === t
        }
          , d = function(e) {
            var t = o(e, "scope");
            if (u(t)) {
                var r = f(e);
                r && (t = o(r, "scope"))
            }
            return u(t) ? null : t
        }
          , f = function(e) {
            return u(e) ? null : "FORM" === e.tagName ? e : u(e.form) ? u(e.parentNode) ? null : f(e.parentNode) : e.form
        }
          , h = function(e, t, r) {
            if (void 0 === r && (r = void 0),
            !e || !t)
                return r;
            var n = t;
            return e.split(".").every((function(e) {
                return e in n ? (n = n[e],
                !0) : (n = r,
                !1)
            }
            )),
            n
        }
          , v = function(e, t) {
            var r = t, n = null, i = !1, a;
            return e.split(".").reduce((function(e, t) {
                return null == r || "object" != typeof r ? (i = !0,
                e && !1) : t in r ? (r = r[t],
                n = null === n ? t : n + "." + t,
                e && !0) : e && !1
            }
            ), !0)
        }
          , m = function(e) {
            var t = []
              , r = e.split(":")[0];
            return Y(e, ":") && (t = e.split(":").slice(1).join(":").split(",")),
            {
                name: r,
                params: t
            }
        }
          , p = function(e, t, r) {
            return void 0 === t && (t = 0),
            void 0 === r && (r = {
                cancelled: !1
            }),
            0 === t ? e : function() {
                for (var i = [], a = arguments.length; a--; )
                    i[a] = arguments[a];
                var o = function() {
                    n = null,
                    r.cancelled || e.apply(void 0, i)
                };
                clearTimeout(n),
                (n = setTimeout(o, t)) || e.apply(void 0, i)
            }
            ;
            var n
        }
          , g = function(e, t) {
            return t ? e ? ("string" == typeof t && (t = y(t)),
            I({}, t, y(e))) : y(t) : y(e)
        }
          , y = function(e) {
            return e ? _(e) ? Object.keys(e).reduce((function(t, r) {
                var n = [];
                return n = !0 === e[r] ? [] : Array.isArray(e[r]) || _(e[r]) ? e[r] : [e[r]],
                !1 !== e[r] && (t[r] = n),
                t
            }
            ), {}) : "string" != typeof e ? (b("rules must be either a string or an object."),
            {}) : e.split("|").reduce((function(e, t) {
                var r = m(t);
                return r.name ? (e[r.name] = r.params,
                e) : e
            }
            ), {}) : {}
        }
          , b = function(e) {
            console.warn("[vee-validate] " + e)
        }
          , w = function(e) {
            return new Error("[vee-validate] " + e)
        }
          , _ = function(e) {
            return null !== e && e && "object" == typeof e && !Array.isArray(e)
        }
          , x = function(e) {
            return "function" == typeof e
        }
          , $ = function(e, t) {
            return e.classList ? e.classList.contains(t) : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
        }
          , T = function(e, t) {
            e.classList ? e.classList.add(t) : $(e, t) || (e.className += " " + t)
        }
          , C = function(e, t) {
            if (e.classList)
                e.classList.remove(t);
            else if ($(e, t)) {
                var r = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(r, " ")
            }
        }
          , D = function(e, t, r) {
            if (e && t) {
                if (!Array.isArray(t))
                    return r ? T(e, t) : void C(e, t);
                t.forEach((function(t) {
                    return D(e, t, r)
                }
                ))
            }
        }
          , A = function(e) {
            if (x(Array.from))
                return Array.from(e);
            for (var t = [], r = e.length, n = 0; n < r; n++)
                t.push(e[n]);
            return t
        }
          , N = function(e) {
            if (Array.isArray(e))
                return [].concat(e);
            var t = A(e);
            return Z(t) ? [e] : t
        }
          , I = function(e) {
            for (var t = [], r = arguments.length - 1; r-- > 0; )
                t[r] = arguments[r + 1];
            if (x(Object.assign))
                return Object.assign.apply(Object, [e].concat(t));
            if (null == e)
                throw new TypeError("Cannot convert undefined or null to object");
            var n = Object(e);
            return t.forEach((function(e) {
                null != e && Object.keys(e).forEach((function(t) {
                    n[t] = e[t]
                }
                ))
            }
            )),
            n
        }
          , O = 0
          , M = "{id}"
          , E = function() {
            var e;
            return O >= 9999 && (O = 0,
            M = M.replace("{id}", "_{id}")),
            O++,
            M.replace("{id}", String(O))
        }
          , F = function(e, t) {
            for (var r = Array.isArray(e) ? e : A(e), n = 0; n < r.length; n++)
                if (t(r[n]))
                    return n;
            return -1
        }
          , k = function(e, t) {
            var r = Array.isArray(e) ? e : A(e)
              , n = F(r, t);
            return -1 === n ? void 0 : r[n]
        }
          , S = function(e) {
            if (!e)
                return !1;
            var t = e.componentOptions.tag;
            return /^(keep-alive|transition|transition-group)$/.test(t)
        }
          , q = function(e, t, r) {
            return "number" == typeof t ? e.reduce((function(e, r) {
                return e[r] = t,
                e
            }
            ), {}) : e.reduce((function(e, n) {
                return "object" == typeof t && n in t ? (e[n] = t[n],
                e) : "number" == typeof r ? (e[n] = r,
                e) : (e[n] = r && r[n] || 0,
                e)
            }
            ), {})
        }
          , P = function(e) {
            if ("number" == typeof e)
                return e;
            if ("string" == typeof e)
                return parseInt(e);
            var t = {};
            for (var r in e)
                t[r] = parseInt(e[r]);
            return t
        }
          , j = function(e, t) {
            return _(e) && _(t) ? (Object.keys(t).forEach((function(r) {
                var n, i;
                if (_(t[r]))
                    return e[r] || I(e, ((n = {})[r] = {},
                    n)),
                    void j(e[r], t[r]);
                I(e, ((i = {})[r] = t[r],
                i))
            }
            )),
            e) : e
        }
          , U = function(e, t) {
            if (e.required && (t = g("required", t)),
            n(e))
                return "email" === e.type && (t = g("email" + (e.multiple ? ":multiple" : ""), t)),
                e.pattern && (t = g({
                    regex: e.pattern
                }, t)),
                e.maxLength >= 0 && e.maxLength < 524288 && (t = g("max:" + e.maxLength, t)),
                e.minLength > 0 && (t = g("min:" + e.minLength, t)),
                "number" === e.type && (t = g("decimal", t),
                "" !== e.min && (t = g("min_value:" + e.min, t)),
                "" !== e.max && (t = g("max_value:" + e.max, t))),
                t;
            if (a(e)) {
                var r = e.step && Number(e.step) < 60 ? "HH:mm:ss" : "HH:mm";
                if ("date" === e.type)
                    return g("date_format:yyyy-MM-dd", t);
                if ("datetime-local" === e.type)
                    return g("date_format:yyyy-MM-ddT" + r, t);
                if ("month" === e.type)
                    return g("date_format:yyyy-MM", t);
                if ("week" === e.type)
                    return g("date_format:yyyy-[W]WW", t);
                if ("time" === e.type)
                    return g("date_format:" + r, t)
            }
            return t
        }
          , R = function(e) {
            return x(Object.values) ? Object.values(e) : Object.keys(e).map((function(t) {
                return e[t]
            }
            ))
        }
          , H = function(e) {
            var t = null;
            if (Y(e, ":") && (t = e.split(":").pop(),
            e = e.replace(":" + t, "")),
            "#" === e[0])
                return {
                    id: e.slice(1),
                    rule: t,
                    name: null,
                    scope: null
                };
            var r = null
              , n = e;
            if (Y(e, ".")) {
                var i = e.split(".");
                r = i[0],
                n = i.slice(1).join(".")
            }
            return {
                id: null,
                scope: r,
                name: n,
                rule: t
            }
        }
          , Y = function(e, t) {
            return -1 !== e.indexOf(t)
        }
          , Z = function(e) {
            return Array.isArray(e) && 0 === e.length
        }
          , L = function(e, t, r) {
            Object.defineProperty(e, t, {
                configurable: !1,
                writable: !0,
                value: r
            })
        }
          , V = "en"
          , z = function e(t) {
            void 0 === t && (t = {}),
            this.container = {},
            this.merge(t)
        }
          , W = {
            locale: {
                configurable: !0
            }
        };
        W.locale.get = function() {
            return V
        }
        ,
        W.locale.set = function(e) {
            V = e || "en"
        }
        ,
        z.prototype.hasLocale = function e(t) {
            return !!this.container[t]
        }
        ,
        z.prototype.setDateFormat = function e(t, r) {
            this.container[t] || (this.container[t] = {}),
            this.container[t].dateFormat = r
        }
        ,
        z.prototype.getDateFormat = function e(t) {
            return this.container[t] && this.container[t].dateFormat ? this.container[t].dateFormat : null
        }
        ,
        z.prototype.getMessage = function e(t, r, n) {
            var i = null;
            return i = this.hasMessage(t, r) ? this.container[t].messages[r] : this._getDefaultMessage(t),
            x(i) ? i.apply(void 0, n) : i
        }
        ,
        z.prototype.getFieldMessage = function e(t, r, n, i) {
            if (!this.hasLocale(t))
                return this.getMessage(t, n, i);
            var a = this.container[t].custom && this.container[t].custom[r];
            if (!a || !a[n])
                return this.getMessage(t, n, i);
            var o = a[n];
            return x(o) ? o.apply(void 0, i) : o
        }
        ,
        z.prototype._getDefaultMessage = function e(t) {
            return this.hasMessage(t, "_default") ? this.container[t].messages._default : this.container.en.messages._default
        }
        ,
        z.prototype.getAttribute = function e(t, r, n) {
            return void 0 === n && (n = ""),
            this.hasAttribute(t, r) ? this.container[t].attributes[r] : n
        }
        ,
        z.prototype.hasMessage = function e(t, r) {
            return !!(this.hasLocale(t) && this.container[t].messages && this.container[t].messages[r])
        }
        ,
        z.prototype.hasAttribute = function e(t, r) {
            return !!(this.hasLocale(t) && this.container[t].attributes && this.container[t].attributes[r])
        }
        ,
        z.prototype.merge = function e(t) {
            j(this.container, t)
        }
        ,
        z.prototype.setMessage = function e(t, r, n) {
            this.hasLocale(t) || (this.container[t] = {
                messages: {},
                attributes: {}
            }),
            this.container[t].messages || (this.container[t].messages = {}),
            this.container[t].messages[r] = n
        }
        ,
        z.prototype.setAttribute = function e(t, r, n) {
            this.hasLocale(t) || (this.container[t] = {
                messages: {},
                attributes: {}
            }),
            this.container[t].attributes[r] = n
        }
        ,
        Object.defineProperties(z.prototype, W);
        var B = {
            default: new z({
                en: {
                    messages: {},
                    attributes: {},
                    custom: {}
                }
            })
        }
          , G = "default"
          , Q = function e() {};
        Q._checkDriverName = function e(t) {
            if (!t)
                throw w("you must provide a name to the dictionary driver")
        }
        ,
        Q.setDriver = function e(t, r) {
            void 0 === r && (r = null),
            this._checkDriverName(t),
            r && (B[t] = r),
            G = t
        }
        ,
        Q.getDriver = function e() {
            return B[G]
        }
        ;
        var X = function e(t, r) {
            void 0 === t && (t = null),
            void 0 === r && (r = null),
            this.vmId = r || null,
            this.items = t && t instanceof e ? t.items : []
        };
        X.prototype["function" == typeof Symbol ? Symbol.iterator : "@@iterator"] = function() {
            var e = this
              , t = 0;
            return {
                next: function() {
                    return {
                        value: e.items[t++],
                        done: t > e.items.length
                    }
                }
            }
        }
        ,
        X.prototype.add = function e(t) {
            var r;
            (r = this.items).push.apply(r, this._normalizeError(t))
        }
        ,
        X.prototype._normalizeError = function e(t) {
            var r = this;
            return Array.isArray(t) ? t.map((function(e) {
                return e.scope = u(e.scope) ? null : e.scope,
                e.vmId = u(e.vmId) ? r.vmId || null : e.vmId,
                e
            }
            )) : (t.scope = u(t.scope) ? null : t.scope,
            t.vmId = u(t.vmId) ? this.vmId || null : t.vmId,
            [t])
        }
        ,
        X.prototype.regenerate = function e() {
            this.items.forEach((function(e) {
                e.msg = x(e.regenerate) ? e.regenerate() : e.msg
            }
            ))
        }
        ,
        X.prototype.update = function e(t, r) {
            var n = k(this.items, (function(e) {
                return e.id === t
            }
            ));
            if (n) {
                var i = this.items.indexOf(n);
                this.items.splice(i, 1),
                n.scope = r.scope,
                this.items.push(n)
            }
        }
        ,
        X.prototype.all = function e(t) {
            var r = this
              , n = function(e) {
                var n = !0
                  , i = !0;
                return u(t) || (n = e.scope === t),
                u(r.vmId) || (i = e.vmId === r.vmId),
                i && n
            };
            return this.items.filter(n).map((function(e) {
                return e.msg
            }
            ))
        }
        ,
        X.prototype.any = function e(t) {
            var r = this
              , n = function(e) {
                var n = !0
                  , i = !0;
                return u(t) || (n = e.scope === t),
                u(r.vmId) || (i = e.vmId === r.vmId),
                i && n
            };
            return !!this.items.filter(n).length
        }
        ,
        X.prototype.clear = function e(t) {
            var r = this
              , n = u(this.vmId) ? function() {
                return !0
            }
            : function(e) {
                return e.vmId === r.vmId
            }
              , i = function(e) {
                return e.scope === t
            };
            0 === arguments.length ? i = function() {
                return !0
            }
            : u(t) && (t = null);
            for (var a = 0; a < this.items.length; ++a)
                n(this.items[a]) && i(this.items[a]) && (this.items.splice(a, 1),
                --a)
        }
        ,
        X.prototype.collect = function e(t, r, n) {
            var i = this;
            void 0 === n && (n = !0);
            var a = !u(t) && !t.includes("*")
              , o = function(e) {
                var t = e.reduce((function(e, t) {
                    return u(i.vmId) || t.vmId === i.vmId ? (e[t.field] || (e[t.field] = []),
                    e[t.field].push(n ? t.msg : t),
                    e) : e
                }
                ), {});
                return a ? R(t)[0] || [] : t
            };
            if (u(t))
                return o(this.items);
            var s = u(r) ? String(t) : r + "." + t
              , l = this._makeCandidateFilters(s)
              , c = l.isPrimary
              , d = l.isAlt
              , f = this.items.reduce((function(e, t) {
                return c(t) && e.primary.push(t),
                d(t) && e.alt.push(t),
                e
            }
            ), {
                primary: [],
                alt: []
            });
            return o(f = f.primary.length ? f.primary : f.alt)
        }
        ,
        X.prototype.count = function e() {
            var t = this;
            return this.vmId ? this.items.filter((function(e) {
                return e.vmId === t.vmId
            }
            )).length : this.items.length
        }
        ,
        X.prototype.firstById = function e(t) {
            var r = k(this.items, (function(e) {
                return e.id === t
            }
            ));
            return r ? r.msg : void 0
        }
        ,
        X.prototype.first = function e(t, r) {
            void 0 === r && (r = null);
            var n = u(r) ? t : r + "." + t
              , i = this._match(n);
            return i && i.msg
        }
        ,
        X.prototype.firstRule = function e(t, r) {
            var n = this.collect(t, r, !1);
            return n.length && n[0].rule || void 0
        }
        ,
        X.prototype.has = function e(t, r) {
            return void 0 === r && (r = null),
            !!this.first(t, r)
        }
        ,
        X.prototype.firstByRule = function e(t, r, n) {
            void 0 === n && (n = null);
            var i = this.collect(t, n, !1).filter((function(e) {
                return e.rule === r
            }
            ))[0];
            return i && i.msg || void 0
        }
        ,
        X.prototype.firstNot = function e(t, r, n) {
            void 0 === r && (r = "required"),
            void 0 === n && (n = null);
            var i = this.collect(t, n, !1).filter((function(e) {
                return e.rule !== r
            }
            ))[0];
            return i && i.msg || void 0
        }
        ,
        X.prototype.removeById = function e(t) {
            var r = function(e) {
                return e.id === t
            };
            Array.isArray(t) && (r = function(e) {
                return -1 !== t.indexOf(e.id)
            }
            );
            for (var n = 0; n < this.items.length; ++n)
                r(this.items[n]) && (this.items.splice(n, 1),
                --n)
        }
        ,
        X.prototype.remove = function e(t, r, n) {
            if (!u(t))
                for (var i = u(r) ? String(t) : r + "." + t, a = this._makeCandidateFilters(i), o = a.isPrimary, s = a.isAlt, l = function(e) {
                    return o(e) || s(e)
                }, c = function(e) {
                    return u(n) ? l(e) : l(e) && e.vmId === n
                }, d = 0; d < this.items.length; ++d)
                    c(this.items[d]) && (this.items.splice(d, 1),
                    --d)
        }
        ,
        X.prototype._makeCandidateFilters = function e(t) {
            var r = this, n = function() {
                return !0
            }, i = function() {
                return !0
            }, a = function() {
                return !0
            }, o = function() {
                return !0
            }, s = H(t), l = s.id, c = s.rule, d = s.scope, f = s.name, h, v;
            return c && (n = function(e) {
                return e.rule === c
            }
            ),
            l ? {
                isPrimary: function(e) {
                    return n(e) && function(e) {
                        return l === e.id
                    }
                },
                isAlt: function() {
                    return !1
                }
            } : (i = u(d) ? function(e) {
                return u(e.scope)
            }
            : function(e) {
                return e.scope === d
            }
            ,
            u(f) || "*" === f || (a = function(e) {
                return e.field === f
            }
            ),
            u(this.vmId) || (o = function(e) {
                return e.vmId === r.vmId
            }
            ),
            {
                isPrimary: function(e) {
                    return o(e) && a(e) && n(e) && i(e)
                },
                isAlt: function(e) {
                    return o(e) && n(e) && e.field === d + "." + f
                }
            })
        }
        ,
        X.prototype._match = function e(t) {
            if (!u(t)) {
                var r = this._makeCandidateFilters(t)
                  , n = r.isPrimary
                  , i = r.isAlt;
                return this.items.reduce((function(e, t, r, a) {
                    var o = r === a.length - 1;
                    return e.primary ? o ? e.primary : e : (n(t) && (e.primary = t),
                    i(t) && (e.alt = t),
                    o ? e.primary || e.alt : e)
                }
                ), {})
            }
        }
        ;
        var K, J = I({}, {
            locale: "en",
            delay: 0,
            errorBagName: "errors",
            dictionary: null,
            fieldsBagName: "fields",
            classes: !1,
            classNames: null,
            events: "input",
            inject: !0,
            fastExit: !0,
            aria: !0,
            validity: !1,
            mode: "aggressive",
            useConstraintAttrs: !0,
            i18n: null,
            i18nRootKey: "validation"
        }), ee = function(e) {
            var t = h("$options.$_veeValidate", e, {});
            return I({}, J, t)
        }, te = function() {
            return J
        }, re = function(e) {
            J = I({}, J, e)
        };
        function ne(e) {
            return e.data ? e.data.model ? e.data.model : !!e.data.directives && k(e.data.directives, (function(e) {
                return "model" === e.name
            }
            )) : null
        }
        function ie(e) {
            return Array.isArray(e) ? e : Array.isArray(e.children) ? e.children : e.componentOptions && Array.isArray(e.componentOptions.children) ? e.componentOptions.children : []
        }
        function ae(e) {
            return ne(e) ? [e] : ie(e).reduce((function(e, t) {
                var r = ae(t);
                return r.length && e.push.apply(e, r),
                e
            }
            ), []);
            var t
        }
        function oe(e) {
            return e.componentOptions ? e.componentOptions.Ctor.options.model : null
        }
        function se(e, t, r) {
            if (x(e[t])) {
                var n = e[t];
                e[t] = [n]
            }
            u(e[t]) && (e[t] = []),
            e[t].push(r)
        }
        function ue(e, t, r) {
            u(e.data.on) && (e.data.on = {}),
            se(e.data.on, t, r)
        }
        function le(e, t, r) {
            e.componentOptions.listeners || (e.componentOptions.listeners = {}),
            se(e.componentOptions.listeners, t, r)
        }
        function ce(e, t, r) {
            e.componentOptions ? le(e, t, r) : ue(e, t, r)
        }
        function de(e, t) {
            var r, i;
            return e.componentOptions ? (oe(e) || {
                event: "input"
            }).event : t && t.modifiers && t.modifiers.lazy || "select" === e.tag ? "change" : e.data.attrs && n({
                type: e.data.attrs.type || "text"
            }) ? "input" : "change"
        }
        function fe(e, t) {
            return Object.keys(e).reduce((function(r, n) {
                return e[n].forEach((function(r) {
                    r.context || (e[n].context = t,
                    r.data || (r.data = {}),
                    r.data.slot = n)
                }
                )),
                r.concat(e[n])
            }
            ), [])
        }
        function he(e, t) {
            return Array.isArray(t) && t[0] ? t[0] : t || e()
        }
        var ve = function e() {};
        ve.generate = function e(t, r, n) {
            var i = ve.resolveModel(r, n)
              , a = ee(n.context);
            return {
                name: ve.resolveName(t, n),
                el: t,
                listen: !r.modifiers.disable,
                bails: !!r.modifiers.bails || !0 !== r.modifiers.continues && void 0,
                scope: ve.resolveScope(t, r, n),
                vm: n.context,
                expression: r.value,
                component: n.componentInstance,
                classes: a.classes,
                classNames: a.classNames,
                getter: ve.resolveGetter(t, n, i),
                events: ve.resolveEvents(t, n) || a.events,
                model: i,
                delay: ve.resolveDelay(t, n, a),
                rules: ve.resolveRules(t, r, n),
                immediate: !!r.modifiers.initial || !!r.modifiers.immediate,
                persist: !!r.modifiers.persist,
                validity: a.validity && !n.componentInstance,
                aria: a.aria && !n.componentInstance,
                initialValue: ve.resolveInitialValue(n)
            }
        }
        ,
        ve.getCtorConfig = function e(t) {
            return t.componentInstance ? h("componentInstance.$options.$_veeValidate", t) : null;
            var r
        }
        ,
        ve.resolveRules = function e(t, r, n) {
            var i = "";
            if (r.value || r && r.expression || (i = o(t, "rules")),
            r.value && Y(["string", "object"], typeof r.value.rules) ? i = r.value.rules : r.value && (i = r.value),
            n.componentInstance)
                return i;
            var a = y(i);
            return te().useConstraintAttrs ? I({}, U(t, {}), a) : a
        }
        ,
        ve.resolveInitialValue = function e(t) {
            var r = t.data.model || k(t.data.directives, (function(e) {
                return "model" === e.name
            }
            ));
            return r && r.value
        }
        ,
        ve.resolveDelay = function e(t, r, n) {
            var i = o(t, "delay")
              , a = n && "delay"in n ? n.delay : 0;
            return !i && r.componentInstance && r.componentInstance.$attrs && (i = r.componentInstance.$attrs["data-vv-delay"]),
            _(a) ? (u(i) || (a.input = i),
            P(a)) : P(i || a)
        }
        ,
        ve.resolveEvents = function e(t, r) {
            var n = o(t, "validate-on");
            if (!n && r.componentInstance && r.componentInstance.$attrs && (n = r.componentInstance.$attrs["data-vv-validate-on"]),
            !n && r.componentInstance) {
                var i = ve.getCtorConfig(r);
                n = i && i.events
            }
            if (!n && te().events && (n = te().events),
            n && r.componentInstance && Y(n, "input")) {
                var a, s = (r.componentInstance.$options.model || {
                    event: "input"
                }).event;
                if (!s)
                    return n;
                n = n.replace("input", s)
            }
            return n
        }
        ,
        ve.resolveScope = function e(t, r, n) {
            void 0 === n && (n = {});
            var i = null;
            return n.componentInstance && u(i) && (i = n.componentInstance.$attrs && n.componentInstance.$attrs["data-vv-scope"]),
            u(i) ? d(t) : i
        }
        ,
        ve.resolveModel = function e(t, r) {
            if (t.arg)
                return {
                    expression: t.arg
                };
            var n = ne(r);
            if (!n)
                return null;
            var i = !/[^\w.$]/.test(n.expression) && v(n.expression, r.context)
              , a = !(!n.modifiers || !n.modifiers.lazy);
            return i ? {
                expression: n.expression,
                lazy: a
            } : {
                expression: null,
                lazy: a
            }
        }
        ,
        ve.resolveName = function e(t, r) {
            var n = o(t, "name");
            if (!n && !r.componentInstance)
                return t.name;
            if (!n && r.componentInstance && r.componentInstance.$attrs && (n = r.componentInstance.$attrs["data-vv-name"] || r.componentInstance.$attrs.name),
            !n && r.componentInstance) {
                var i = ve.getCtorConfig(r), a;
                return i && x(i.name) ? i.name.bind(r.componentInstance)() : r.componentInstance.name
            }
            return n
        }
        ,
        ve.resolveGetter = function e(t, r, n) {
            if (n && n.expression)
                return function() {
                    return h(n.expression, r.context)
                }
                ;
            if (r.componentInstance) {
                var i = o(t, "value-path") || r.componentInstance.$attrs && r.componentInstance.$attrs["data-vv-value-path"];
                if (i)
                    return function() {
                        return h(i, r.componentInstance)
                    }
                    ;
                var a = ve.getCtorConfig(r);
                if (a && x(a.value)) {
                    var s = a.value.bind(r.componentInstance);
                    return function() {
                        return s()
                    }
                }
                var u, l = (r.componentInstance.$options.model || {
                    prop: "value"
                }).prop;
                return function() {
                    return r.componentInstance[l]
                }
            }
            switch (t.type) {
            case "checkbox":
                return function() {
                    var e = document.querySelectorAll('input[name="' + t.name + '"]');
                    if (e = A(e).filter((function(e) {
                        return e.checked
                    }
                    )),
                    e.length)
                        return e.map((function(e) {
                            return e.value
                        }
                        ))
                }
                ;
            case "radio":
                return function() {
                    var e = document.querySelectorAll('input[name="' + t.name + '"]')
                      , r = k(e, (function(e) {
                        return e.checked
                    }
                    ));
                    return r && r.value
                }
                ;
            case "file":
                return function(e) {
                    return A(t.files)
                }
                ;
            case "select-multiple":
                return function() {
                    return A(t.options).filter((function(e) {
                        return e.selected
                    }
                    )).map((function(e) {
                        return e.value
                    }
                    ))
                }
                ;
            default:
                return function() {
                    return t && t.value
                }
            }
        }
        ;
        var me = {}
          , pe = function e() {}
          , ge = {
            rules: {
                configurable: !0
            }
        };
        pe.add = function e(t, r) {
            var n = r.validate
              , i = r.options
              , a = r.paramNames;
            me[t] = {
                validate: n,
                options: i,
                paramNames: a
            }
        }
        ,
        ge.rules.get = function() {
            return me
        }
        ,
        pe.has = function e(t) {
            return !!me[t]
        }
        ,
        pe.isImmediate = function e(t) {
            return !(!me[t] || !me[t].options.immediate)
        }
        ,
        pe.isRequireRule = function e(t) {
            return !(!me[t] || !me[t].options.computesRequired)
        }
        ,
        pe.isTargetRule = function e(t) {
            return !(!me[t] || !me[t].options.hasTarget)
        }
        ,
        pe.remove = function e(t) {
            delete me[t]
        }
        ,
        pe.getParamNames = function e(t) {
            return me[t] && me[t].paramNames
        }
        ,
        pe.getOptions = function e(t) {
            return me[t] && me[t].options
        }
        ,
        pe.getValidatorMethod = function e(t) {
            return me[t] ? me[t].validate : null
        }
        ,
        Object.defineProperties(pe, ge);
        var ye = function(e) {
            return "undefined" != typeof Event && x(Event) && e instanceof Event || e && e.srcElement
        }
          , be = function(e) {
            return e ? "string" == typeof e ? e.split("|") : e : []
        }
          , we = !0
          , _e = function() {
            try {
                var e = Object.defineProperty({}, "passive", {
                    get: function e() {
                        we = !0
                    }
                });
                window.addEventListener("testPassive", null, e),
                window.removeEventListener("testPassive", null, e)
            } catch (t) {
                we = !1
            }
            return we
        }
          , xe = function(e, t, r) {
            e.addEventListener(t, r, !!we && {
                passive: !0
            })
        }
          , $e = {
            targetOf: null,
            immediate: !1,
            persist: !1,
            scope: null,
            listen: !0,
            name: null,
            rules: {},
            vm: null,
            classes: !1,
            validity: !0,
            aria: !0,
            events: "input|blur",
            delay: 0,
            classNames: {
                touched: "touched",
                untouched: "untouched",
                valid: "valid",
                invalid: "invalid",
                pristine: "pristine",
                dirty: "dirty"
            }
        }
          , Te = function e(t) {
            void 0 === t && (t = {}),
            this.id = E(),
            this.el = t.el,
            this.updated = !1,
            this.vmId = t.vmId,
            L(this, "dependencies", []),
            L(this, "watchers", []),
            L(this, "events", []),
            this.delay = 0,
            this.rules = {},
            this.forceRequired = !1,
            this._cacheId(t),
            this.classNames = I({}, $e.classNames),
            t = I({}, $e, t),
            this._delay = u(t.delay) ? 0 : t.delay,
            this.validity = t.validity,
            this.aria = t.aria,
            this.flags = t.flags || {
                untouched: !0,
                touched: !1,
                dirty: !1,
                pristine: !0,
                valid: null,
                invalid: null,
                validated: !1,
                pending: !1,
                required: !1,
                changed: !1
            },
            L(this, "vm", t.vm),
            L(this, "componentInstance", t.component),
            this.ctorConfig = this.componentInstance ? h("$options.$_veeValidate", this.componentInstance) : void 0,
            this.update(t),
            this.initialValue = this.value,
            this.updated = !1
        }
          , Ce = {
            validator: {
                configurable: !0
            },
            isRequired: {
                configurable: !0
            },
            isDisabled: {
                configurable: !0
            },
            alias: {
                configurable: !0
            },
            value: {
                configurable: !0
            },
            bails: {
                configurable: !0
            },
            rejectsFalse: {
                configurable: !0
            }
        };
        Ce.validator.get = function() {
            return this.vm && this.vm.$validator ? this.vm.$validator : {
                validate: function() {
                    return Promise.resolve(!0)
                }
            }
        }
        ,
        Ce.isRequired.get = function() {
            return !!this.rules.required || this.forceRequired
        }
        ,
        Ce.isDisabled.get = function() {
            return !(!this.el || !this.el.disabled)
        }
        ,
        Ce.alias.get = function() {
            if (this._alias)
                return this._alias;
            var e = null;
            return this.ctorConfig && this.ctorConfig.alias && (e = x(this.ctorConfig.alias) ? this.ctorConfig.alias.call(this.componentInstance) : this.ctorConfig.alias),
            !e && this.el && (e = o(this.el, "as")),
            !e && this.componentInstance ? this.componentInstance.$attrs && this.componentInstance.$attrs["data-vv-as"] : e
        }
        ,
        Ce.value.get = function() {
            if (x(this.getter))
                return this.getter()
        }
        ,
        Ce.bails.get = function() {
            return this._bails
        }
        ,
        Ce.rejectsFalse.get = function() {
            return this.componentInstance && this.ctorConfig ? !!this.ctorConfig.rejectsFalse : !!this.el && "checkbox" === this.el.type
        }
        ,
        Te.prototype.matches = function e(t) {
            var r = this;
            if (!t)
                return !0;
            if (t.id)
                return this.id === t.id;
            var n = u(t.vmId) ? function() {
                return !0
            }
            : function(e) {
                return e === r.vmId
            }
            ;
            return !!n(t.vmId) && (void 0 === t.name && void 0 === t.scope || (void 0 === t.scope ? this.name === t.name : void 0 === t.name ? this.scope === t.scope : t.name === this.name && t.scope === this.scope))
        }
        ,
        Te.prototype._cacheId = function e(t) {
            this.el && !t.targetOf && (this.el._veeValidateId = this.id)
        }
        ,
        Te.prototype.waitFor = function e(t) {
            this._waitingFor = t
        }
        ,
        Te.prototype.isWaitingFor = function e(t) {
            return this._waitingFor === t
        }
        ,
        Te.prototype.update = function e(t) {
            var r = this;
            if (this.targetOf = t.targetOf || null,
            this.immediate = t.immediate || this.immediate || !1,
            this.persist = t.persist || this.persist || !1,
            !u(t.scope) && t.scope !== this.scope && x(this.validator.update) && this.validator.update(this.id, {
                scope: t.scope
            }),
            this.scope = u(t.scope) ? u(this.scope) ? null : this.scope : t.scope,
            this.name = (u(t.name) ? t.name : String(t.name)) || this.name || null,
            this.rules = void 0 !== t.rules ? y(t.rules) : this.rules,
            this._bails = void 0 !== t.bails ? t.bails : this._bails,
            this.model = t.model || this.model,
            this.listen = void 0 !== t.listen ? t.listen : this.listen,
            this.classes = !(!t.classes && !this.classes) && !this.componentInstance,
            this.classNames = _(t.classNames) ? j(this.classNames, t.classNames) : this.classNames,
            this.getter = x(t.getter) ? t.getter : this.getter,
            this._alias = t.alias || this._alias,
            this.events = t.events ? be(t.events) : this.events,
            this.delay = q(this.events, t.delay || this.delay, this._delay),
            this.updateDependencies(),
            this.addActionListeners(),
            void 0 !== t.rules && (this.flags.required = this.isRequired),
            0 === Object.keys(t.rules || {}).length && this.updated) {
                var n = this.flags.validated;
                this.validator.validate("#" + this.id).then((function() {
                    r.flags.validated = n
                }
                ))
            }
            this.flags.validated && void 0 !== t.rules && this.updated && this.validator.validate("#" + this.id),
            this.updated = !0,
            this.addValueListeners(),
            this.el && (this.updateClasses(),
            this.updateAriaAttrs())
        }
        ,
        Te.prototype.reset = function e() {
            var t = this;
            this._cancellationToken && (this._cancellationToken.cancelled = !0,
            delete this._cancellationToken);
            var r = {
                untouched: !0,
                touched: !1,
                dirty: !1,
                pristine: !0,
                valid: null,
                invalid: null,
                validated: !1,
                pending: !1,
                required: !1,
                changed: !1
            };
            Object.keys(this.flags).filter((function(e) {
                return "required" !== e
            }
            )).forEach((function(e) {
                t.flags[e] = r[e]
            }
            )),
            this.initialValue = this.value,
            this.flags.changed = !1,
            this.addValueListeners(),
            this.addActionListeners(),
            this.updateClasses(!0),
            this.updateAriaAttrs(),
            this.updateCustomValidity()
        }
        ,
        Te.prototype.setFlags = function e(t) {
            var r = this
              , n = {
                pristine: "dirty",
                dirty: "pristine",
                valid: "invalid",
                invalid: "valid",
                touched: "untouched",
                untouched: "touched"
            };
            Object.keys(t).forEach((function(e) {
                r.flags[e] = t[e],
                n[e] && void 0 === t[n[e]] && (r.flags[n[e]] = !t[e])
            }
            )),
            void 0 === t.untouched && void 0 === t.touched && void 0 === t.dirty && void 0 === t.pristine || this.addActionListeners(),
            this.updateClasses(),
            this.updateAriaAttrs(),
            this.updateCustomValidity()
        }
        ,
        Te.prototype.updateDependencies = function e() {
            var t = this;
            this.dependencies.forEach((function(e) {
                return e.field.destroy()
            }
            )),
            this.dependencies = [];
            var r = Object.keys(this.rules).reduce((function(e, r) {
                return pe.isTargetRule(r) && e.push({
                    selector: t.rules[r][0],
                    name: r
                }),
                e
            }
            ), []);
            r.length && this.vm && this.vm.$el && r.forEach((function(e) {
                var r = e.selector
                  , n = e.name
                  , i = t.vm.$refs[r]
                  , a = Array.isArray(i) ? i[0] : i;
                if (a) {
                    var o = {
                        vm: t.vm,
                        classes: t.classes,
                        classNames: t.classNames,
                        delay: t.delay,
                        scope: t.scope,
                        events: t.events.join("|"),
                        immediate: t.immediate,
                        targetOf: t.id
                    };
                    x(a.$watch) ? (o.component = a,
                    o.el = a.$el,
                    o.getter = ve.resolveGetter(a.$el, a.$vnode)) : (o.el = a,
                    o.getter = ve.resolveGetter(a, {})),
                    t.dependencies.push({
                        name: n,
                        field: new Te(o)
                    })
                }
            }
            ))
        }
        ,
        Te.prototype.unwatch = function e(t) {
            if (void 0 === t && (t = null),
            !t)
                return this.watchers.forEach((function(e) {
                    return e.unwatch()
                }
                )),
                void (this.watchers = []);
            this.watchers.filter((function(e) {
                return t.test(e.tag)
            }
            )).forEach((function(e) {
                return e.unwatch()
            }
            )),
            this.watchers = this.watchers.filter((function(e) {
                return !t.test(e.tag)
            }
            ))
        }
        ,
        Te.prototype.updateClasses = function e(t) {
            var r = this;
            if (void 0 === t && (t = !1),
            this.classes && !this.isDisabled) {
                var n = function(e) {
                    D(e, r.classNames.dirty, r.flags.dirty),
                    D(e, r.classNames.pristine, r.flags.pristine),
                    D(e, r.classNames.touched, r.flags.touched),
                    D(e, r.classNames.untouched, r.flags.untouched),
                    t && (D(e, r.classNames.valid, !1),
                    D(e, r.classNames.invalid, !1)),
                    !u(r.flags.valid) && r.flags.validated && D(e, r.classNames.valid, r.flags.valid),
                    !u(r.flags.invalid) && r.flags.validated && D(e, r.classNames.invalid, r.flags.invalid)
                };
                if (i(this.el)) {
                    var a = document.querySelectorAll('input[name="' + this.el.name + '"]');
                    A(a).forEach(n)
                } else
                    n(this.el)
            }
        }
        ,
        Te.prototype.addActionListeners = function e() {
            var t = this;
            if (this.unwatch(/class/),
            this.el) {
                var r = function() {
                    t.flags.touched = !0,
                    t.flags.untouched = !1,
                    t.classes && (D(t.el, t.classNames.touched, !0),
                    D(t.el, t.classNames.untouched, !1)),
                    t.unwatch(/^class_blur$/)
                }
                  , a = n(this.el) ? "input" : "change"
                  , o = function() {
                    t.flags.dirty = !0,
                    t.flags.pristine = !1,
                    t.classes && (D(t.el, t.classNames.pristine, !1),
                    D(t.el, t.classNames.dirty, !0)),
                    t.unwatch(/^class_input$/)
                };
                if (this.componentInstance && x(this.componentInstance.$once))
                    return this.componentInstance.$once("input", o),
                    this.componentInstance.$once("blur", r),
                    this.watchers.push({
                        tag: "class_input",
                        unwatch: function() {
                            t.componentInstance.$off("input", o)
                        }
                    }),
                    void this.watchers.push({
                        tag: "class_blur",
                        unwatch: function() {
                            t.componentInstance.$off("blur", r)
                        }
                    });
                if (this.el) {
                    xe(this.el, a, o);
                    var s = i(this.el) ? "change" : "blur";
                    xe(this.el, s, r),
                    this.watchers.push({
                        tag: "class_input",
                        unwatch: function() {
                            t.el.removeEventListener(a, o)
                        }
                    }),
                    this.watchers.push({
                        tag: "class_blur",
                        unwatch: function() {
                            t.el.removeEventListener(s, r)
                        }
                    })
                }
            }
        }
        ,
        Te.prototype.checkValueChanged = function e() {
            return (null !== this.initialValue || "" !== this.value || !n(this.el)) && this.value !== this.initialValue
        }
        ,
        Te.prototype._determineInputEvent = function e() {
            return this.componentInstance ? this.componentInstance.$options.model && this.componentInstance.$options.model.event || "input" : this.model && this.model.lazy ? "change" : n(this.el) ? "input" : "change"
        }
        ,
        Te.prototype._determineEventList = function e(t) {
            var r = this;
            return !this.events.length || this.componentInstance || n(this.el) ? [].concat(this.events).map((function(e) {
                return "input" === e && r.model && r.model.lazy ? "change" : e
            }
            )) : this.events.map((function(e) {
                return "input" === e ? t : e
            }
            ))
        }
        ,
        Te.prototype.addValueListeners = function e() {
            var t = this;
            if (this.unwatch(/^input_.+/),
            this.listen && this.el) {
                var r = {
                    cancelled: !1
                }
                  , n = this.targetOf ? function() {
                    var e = t.validator._resolveField("#" + t.targetOf);
                    e && e.flags.validated && t.validator.validate("#" + t.targetOf)
                }
                : function() {
                    for (var e = [], n = arguments.length; n--; )
                        e[n] = arguments[n];
                    (0 === e.length || ye(e[0])) && (e[0] = t.value),
                    t.flags.pending = !0,
                    t._cancellationToken = r,
                    t.validator.validate("#" + t.id, e[0])
                }
                  , i = this._determineInputEvent()
                  , a = this._determineEventList(i);
                if (Y(a, i)) {
                    var o = null
                      , s = null
                      , u = !1;
                    if (this.model && this.model.expression && (o = this.vm,
                    s = this.model.expression,
                    u = !0),
                    !s && this.componentInstance && this.componentInstance.$options.model && (o = this.componentInstance,
                    s = this.componentInstance.$options.model.prop || "value"),
                    o && s) {
                        var l = p(n, this.delay[i], r)
                          , c = o.$watch(s, l);
                        this.watchers.push({
                            tag: "input_model",
                            unwatch: function() {
                                t.vm.$nextTick((function() {
                                    c()
                                }
                                ))
                            }
                        }),
                        u && (a = a.filter((function(e) {
                            return e !== i
                        }
                        )))
                    }
                }
                a.forEach((function(e) {
                    var i = p(n, t.delay[e], r);
                    t._addComponentEventListener(e, i),
                    t._addHTMLEventListener(e, i)
                }
                ))
            }
        }
        ,
        Te.prototype._addComponentEventListener = function e(t, r) {
            var n = this;
            this.componentInstance && (this.componentInstance.$on(t, r),
            this.watchers.push({
                tag: "input_vue",
                unwatch: function() {
                    n.componentInstance.$off(t, r)
                }
            }))
        }
        ,
        Te.prototype._addHTMLEventListener = function e(t, r) {
            var n = this;
            if (this.el && !this.componentInstance) {
                var a = function(e) {
                    xe(e, t, r),
                    n.watchers.push({
                        tag: "input_native",
                        unwatch: function() {
                            e.removeEventListener(t, r)
                        }
                    })
                };
                if (a(this.el),
                i(this.el)) {
                    var o = document.querySelectorAll('input[name="' + this.el.name + '"]');
                    A(o).forEach((function(e) {
                        e._veeValidateId && e !== n.el || a(e)
                    }
                    ))
                }
            }
        }
        ,
        Te.prototype.updateAriaAttrs = function e() {
            var t = this;
            if (this.aria && this.el && x(this.el.setAttribute)) {
                var r = function(e) {
                    e.setAttribute("aria-required", t.isRequired ? "true" : "false"),
                    e.setAttribute("aria-invalid", t.flags.invalid ? "true" : "false")
                };
                if (i(this.el)) {
                    var n = document.querySelectorAll('input[name="' + this.el.name + '"]');
                    A(n).forEach(r)
                } else
                    r(this.el)
            }
        }
        ,
        Te.prototype.updateCustomValidity = function e() {
            this.validity && this.el && x(this.el.setCustomValidity) && this.validator.errors && this.el.setCustomValidity(this.flags.valid ? "" : this.validator.errors.firstById(this.id) || "")
        }
        ,
        Te.prototype.destroy = function e() {
            this._cancellationToken && (this._cancellationToken.cancelled = !0),
            this.unwatch(),
            this.dependencies.forEach((function(e) {
                return e.field.destroy()
            }
            )),
            this.dependencies = []
        }
        ,
        Object.defineProperties(Te.prototype, Ce);
        var De = function e(t) {
            void 0 === t && (t = []),
            this.items = t || [],
            this.itemsById = this.items.reduce((function(e, t) {
                return e[t.id] = t,
                e
            }
            ), {})
        }
          , Ae = {
            length: {
                configurable: !0
            }
        };
        De.prototype["function" == typeof Symbol ? Symbol.iterator : "@@iterator"] = function() {
            var e = this
              , t = 0;
            return {
                next: function() {
                    return {
                        value: e.items[t++],
                        done: t > e.items.length
                    }
                }
            }
        }
        ,
        Ae.length.get = function() {
            return this.items.length
        }
        ,
        De.prototype.find = function e(t) {
            return k(this.items, (function(e) {
                return e.matches(t)
            }
            ))
        }
        ,
        De.prototype.findById = function e(t) {
            return this.itemsById[t] || null
        }
        ,
        De.prototype.filter = function e(t) {
            return Array.isArray(t) ? this.items.filter((function(e) {
                return t.some((function(t) {
                    return e.matches(t)
                }
                ))
            }
            )) : this.items.filter((function(e) {
                return e.matches(t)
            }
            ))
        }
        ,
        De.prototype.map = function e(t) {
            return this.items.map(t)
        }
        ,
        De.prototype.remove = function e(t) {
            var r = null;
            if (!(r = t instanceof Te ? t : this.find(t)))
                return null;
            var n = this.items.indexOf(r);
            return this.items.splice(n, 1),
            delete this.itemsById[r.id],
            r
        }
        ,
        De.prototype.push = function e(t) {
            if (!(t instanceof Te))
                throw w("FieldBag only accepts instances of Field that has an id defined.");
            if (!t.id)
                throw w("Field id must be defined.");
            if (this.findById(t.id))
                throw w("Field with id " + t.id + " is already added.");
            this.items.push(t),
            this.itemsById[t.id] = t
        }
        ,
        Object.defineProperties(De.prototype, Ae);
        var Ne = function e(t, r) {
            this.id = r._uid,
            this._base = t,
            this._paused = !1,
            this.errors = new X(t.errors,this.id)
        }
          , Ie = {
            flags: {
                configurable: !0
            },
            rules: {
                configurable: !0
            },
            fields: {
                configurable: !0
            },
            dictionary: {
                configurable: !0
            },
            locale: {
                configurable: !0
            }
        };
        Ie.flags.get = function() {
            var e = this;
            return this._base.fields.items.filter((function(t) {
                return t.vmId === e.id
            }
            )).reduce((function(e, t) {
                return t.scope && (e["$" + t.scope] || (e["$" + t.scope] = {}),
                e["$" + t.scope][t.name] = t.flags),
                e[t.name] = t.flags,
                e
            }
            ), {})
        }
        ,
        Ie.rules.get = function() {
            return this._base.rules
        }
        ,
        Ie.fields.get = function() {
            return new De(this._base.fields.filter({
                vmId: this.id
            }))
        }
        ,
        Ie.dictionary.get = function() {
            return this._base.dictionary
        }
        ,
        Ie.locale.get = function() {
            return this._base.locale
        }
        ,
        Ie.locale.set = function(e) {
            this._base.locale = e
        }
        ,
        Ne.prototype.localize = function e() {
            for (var t, r = [], n = arguments.length; n--; )
                r[n] = arguments[n];
            return (t = this._base).localize.apply(t, r)
        }
        ,
        Ne.prototype.update = function e() {
            for (var t, r = [], n = arguments.length; n--; )
                r[n] = arguments[n];
            return (t = this._base).update.apply(t, r)
        }
        ,
        Ne.prototype.attach = function e(t) {
            var r = I({}, t, {
                vmId: this.id
            });
            return this._base.attach(r)
        }
        ,
        Ne.prototype.pause = function e() {
            this._paused = !0
        }
        ,
        Ne.prototype.resume = function e() {
            this._paused = !1
        }
        ,
        Ne.prototype.remove = function e(t) {
            return this._base.remove(t)
        }
        ,
        Ne.prototype.detach = function e(t, r) {
            return this._base.detach(t, r, this.id)
        }
        ,
        Ne.prototype.extend = function e() {
            for (var t, r = [], n = arguments.length; n--; )
                r[n] = arguments[n];
            return (t = this._base).extend.apply(t, r)
        }
        ,
        Ne.prototype.validate = function e(t, r, n) {
            return void 0 === n && (n = {}),
            this._paused ? Promise.resolve(!0) : this._base.validate(t, r, I({}, {
                vmId: this.id
            }, n || {}))
        }
        ,
        Ne.prototype.verify = function e() {
            for (var t, r = [], n = arguments.length; n--; )
                r[n] = arguments[n];
            return (t = this._base).verify.apply(t, r)
        }
        ,
        Ne.prototype.validateAll = function e(t, r) {
            return void 0 === r && (r = {}),
            this._paused ? Promise.resolve(!0) : this._base.validateAll(t, I({}, {
                vmId: this.id
            }, r || {}))
        }
        ,
        Ne.prototype.validateScopes = function e(t) {
            return void 0 === t && (t = {}),
            this._paused ? Promise.resolve(!0) : this._base.validateScopes(I({}, {
                vmId: this.id
            }, t || {}))
        }
        ,
        Ne.prototype.destroy = function e() {
            delete this.id,
            delete this._base
        }
        ,
        Ne.prototype.reset = function e(t) {
            return this._base.reset(Object.assign({}, t || {}, {
                vmId: this.id
            }))
        }
        ,
        Ne.prototype.flag = function e() {
            for (var t, r = [], n = arguments.length; n--; )
                r[n] = arguments[n];
            return (t = this._base).flag.apply(t, r.concat([this.id]))
        }
        ,
        Ne.prototype._resolveField = function e() {
            for (var t, r = [], n = arguments.length; n--; )
                r[n] = arguments[n];
            return (t = this._base)._resolveField.apply(t, r)
        }
        ,
        Object.defineProperties(Ne.prototype, Ie);
        var Oe = null
          , Me = function() {
            return Oe
        }
          , Ee = function(e) {
            return Oe = e,
            e
        }
          , Fe = function(e) {
            return !(!_(e) || !e.$validator)
        }
          , ke = {
            provide: function e() {
                return this.$validator && !S(this.$vnode) ? {
                    $validator: this.$validator
                } : {}
            },
            beforeCreate: function e() {
                if (!S(this.$vnode) && !1 !== this.$options.$__veeInject) {
                    this.$parent || re(this.$options.$_veeValidate || {});
                    var t = ee(this);
                    (!this.$parent || this.$options.$_veeValidate && /new/.test(this.$options.$_veeValidate.validator)) && (this.$validator = new Ne(Me(),this));
                    var r = Fe(this.$options.inject);
                    if (this.$validator || !t.inject || r || (this.$validator = new Ne(Me(),this)),
                    r || this.$validator) {
                        var n;
                        if (!r && this.$validator)
                            this.$options._base.util.defineReactive(this.$validator, "errors", this.$validator.errors);
                        this.$options.computed || (this.$options.computed = {}),
                        this.$options.computed[t.errorBagName || "errors"] = function e() {
                            return this.$validator.errors
                        }
                        ,
                        this.$options.computed[t.fieldsBagName || "fields"] = function e() {
                            return this.$validator.fields.items.reduce((function(e, t) {
                                return t.scope ? (e["$" + t.scope] || (e["$" + t.scope] = {}),
                                e["$" + t.scope][t.name] = t.flags,
                                e) : (e[t.name] = t.flags,
                                e)
                            }
                            ), {})
                        }
                    }
                }
            },
            beforeDestroy: function e() {
                this.$validator && this._uid === this.$validator.id && this.$validator.errors.clear()
            }
        };
        function Se(e, t) {
            return t && t.$validator ? t.$validator.fields.findById(e._veeValidateId) : null
        }
        var qe = {
            bind: function e(t, r, n) {
                var i = n.context.$validator;
                if (i) {
                    var a = ve.generate(t, r, n);
                    i.attach(a)
                }
            },
            inserted: function e(t, r, n) {
                var i = Se(t, n.context)
                  , a = ve.resolveScope(t, r, n);
                i && a !== i.scope && (i.update({
                    scope: a
                }),
                i.updated = !1)
            },
            update: function e(t, r, n) {
                var i = Se(t, n.context);
                if (!(!i || i.updated && c(r.value, r.oldValue))) {
                    var a = ve.resolveScope(t, r, n)
                      , o = ve.resolveRules(t, r, n);
                    i.update({
                        scope: a,
                        rules: o
                    })
                }
            },
            unbind: function e(t, r, n) {
                var i = n.context
                  , a = Se(t, i);
                a && i.$validator.detach(a)
            }
        }
          , Pe = function e(t, r, n) {
            void 0 === r && (r = {
                fastExit: !0
            }),
            void 0 === n && (n = null),
            this.errors = new X,
            this.fields = new De,
            this._createFields(t),
            this.paused = !1,
            this.fastExit = !!u(r && r.fastExit) || r.fastExit,
            this.$vee = n || {
                _vm: {
                    $nextTick: function(e) {
                        return x(e) ? e() : Promise.resolve()
                    },
                    $emit: function() {},
                    $off: function() {}
                }
            }
        }
          , je = {
            rules: {
                configurable: !0
            },
            dictionary: {
                configurable: !0
            },
            flags: {
                configurable: !0
            },
            locale: {
                configurable: !0
            }
        }
          , Ue = {
            rules: {
                configurable: !0
            },
            dictionary: {
                configurable: !0
            },
            locale: {
                configurable: !0
            }
        };
        Ue.rules.get = function() {
            return pe.rules
        }
        ,
        je.rules.get = function() {
            return pe.rules
        }
        ,
        je.dictionary.get = function() {
            return Q.getDriver()
        }
        ,
        Ue.dictionary.get = function() {
            return Q.getDriver()
        }
        ,
        je.flags.get = function() {
            return this.fields.items.reduce((function(e, t) {
                var r;
                return t.scope ? (e["$" + t.scope] = ((r = {})[t.name] = t.flags,
                r),
                e) : (e[t.name] = t.flags,
                e)
            }
            ), {})
        }
        ,
        je.locale.get = function() {
            return Pe.locale
        }
        ,
        je.locale.set = function(e) {
            Pe.locale = e
        }
        ,
        Ue.locale.get = function() {
            return Q.getDriver().locale
        }
        ,
        Ue.locale.set = function(e) {
            var t = e !== Q.getDriver().locale;
            Q.getDriver().locale = e,
            t && Pe.$vee && Pe.$vee._vm && Pe.$vee._vm.$emit("localeChanged")
        }
        ,
        Pe.create = function e(t, r) {
            return new Pe(t,r)
        }
        ,
        Pe.extend = function e(t, r, n) {
            void 0 === n && (n = {}),
            Pe._guardExtend(t, r);
            var i = r.options || {};
            Pe._merge(t, {
                validator: r,
                paramNames: n && n.paramNames || r.paramNames,
                options: I({
                    hasTarget: !1,
                    immediate: !0
                }, i, n || {})
            })
        }
        ,
        Pe.remove = function e(t) {
            pe.remove(t)
        }
        ,
        Pe.prototype.localize = function e(t, r) {
            Pe.localize(t, r)
        }
        ,
        Pe.localize = function e(t, r) {
            var n;
            if (_(t))
                Q.getDriver().merge(t);
            else {
                if (r) {
                    var i = t || r.name;
                    r = I({}, r),
                    Q.getDriver().merge(((n = {})[i] = r,
                    n))
                }
                t && (Pe.locale = t)
            }
        }
        ,
        Pe.prototype.attach = function e(t) {
            var r = this
              , n = {
                name: t.name,
                scope: t.scope,
                persist: !0
            }
              , i = t.persist ? this.fields.find(n) : null;
            i && (t.flags = i.flags,
            i.destroy(),
            this.fields.remove(i));
            var a = t.initialValue
              , o = new Te(t);
            return this.fields.push(o),
            o.immediate ? this.$vee._vm.$nextTick((function() {
                return r.validate("#" + o.id, a || o.value, {
                    vmId: t.vmId
                })
            }
            )) : this._validate(o, a || o.value, {
                initial: !0
            }).then((function(e) {
                o.flags.valid = e.valid,
                o.flags.invalid = !e.valid
            }
            )),
            o
        }
        ,
        Pe.prototype.flag = function e(t, r, n) {
            void 0 === n && (n = null);
            var i = this._resolveField(t, void 0, n);
            i && r && i.setFlags(r)
        }
        ,
        Pe.prototype.detach = function e(t, r, n) {
            var i = x(t.destroy) ? t : this._resolveField(t, r, n);
            i && (i.persist || (i.destroy(),
            this.errors.remove(i.name, i.scope, i.vmId),
            this.fields.remove(i)))
        }
        ,
        Pe.prototype.extend = function e(t, r, n) {
            void 0 === n && (n = {}),
            Pe.extend(t, r, n)
        }
        ,
        Pe.prototype.reset = function e(t) {
            var r = this;
            return this.$vee._vm.$nextTick().then((function() {
                return r.$vee._vm.$nextTick()
            }
            )).then((function() {
                r.fields.filter(t).forEach((function(e) {
                    e.waitFor(null),
                    e.reset(),
                    r.errors.remove(e.name, e.scope, t && t.vmId)
                }
                ))
            }
            ))
        }
        ,
        Pe.prototype.update = function e(t, r) {
            var n = r.scope, i;
            this._resolveField("#" + t) && this.errors.update(t, {
                scope: n
            })
        }
        ,
        Pe.prototype.remove = function e(t) {
            Pe.remove(t)
        }
        ,
        Pe.prototype.validate = function e(t, r, n) {
            var i = this;
            void 0 === n && (n = {});
            var a = n.silent
              , o = n.vmId;
            if (this.paused)
                return Promise.resolve(!0);
            if (u(t))
                return this.validateScopes({
                    silent: a,
                    vmId: o
                });
            if ("*" === t)
                return this.validateAll(void 0, {
                    silent: a,
                    vmId: o
                });
            if (/^(.+)\.\*$/.test(t)) {
                var s = t.match(/^(.+)\.\*$/)[1];
                return this.validateAll(s)
            }
            var l = this._resolveField(t);
            if (!l)
                return this._handleFieldNotFound(t);
            a || (l.flags.pending = !0),
            void 0 === r && (r = l.value);
            var c = this._validate(l, r);
            return l.waitFor(c),
            c.then((function(e) {
                return !a && l.isWaitingFor(c) && (l.waitFor(null),
                i._handleValidationResults([e], o)),
                e.valid
            }
            ))
        }
        ,
        Pe.prototype.pause = function e() {
            return this.paused = !0,
            this
        }
        ,
        Pe.prototype.resume = function e() {
            return this.paused = !1,
            this
        }
        ,
        Pe.prototype.validateAll = function e(t, r) {
            var n = this;
            void 0 === r && (r = {});
            var i = r.silent
              , a = r.vmId;
            if (this.paused)
                return Promise.resolve(!0);
            var o = null
              , s = !1;
            return "string" == typeof t ? o = {
                scope: t,
                vmId: a
            } : _(t) ? (o = Object.keys(t).map((function(e) {
                return {
                    name: e,
                    vmId: a,
                    scope: null
                }
            }
            )),
            s = !0) : o = Array.isArray(t) ? t.map((function(e) {
                return "object" == typeof e ? Object.assign({
                    vmId: a
                }, e) : {
                    name: e,
                    vmId: a
                }
            }
            )) : {
                scope: null,
                vmId: a
            },
            Promise.all(this.fields.filter(o).map((function(e) {
                return n._validate(e, s ? t[e.name] : e.value)
            }
            ))).then((function(e) {
                return i || n._handleValidationResults(e, a),
                e.every((function(e) {
                    return e.valid
                }
                ))
            }
            ))
        }
        ,
        Pe.prototype.validateScopes = function e(t) {
            var r = this;
            void 0 === t && (t = {});
            var n = t.silent
              , i = t.vmId;
            return this.paused ? Promise.resolve(!0) : Promise.all(this.fields.filter({
                vmId: i
            }).map((function(e) {
                return r._validate(e, e.value)
            }
            ))).then((function(e) {
                return n || r._handleValidationResults(e, i),
                e.every((function(e) {
                    return e.valid
                }
                ))
            }
            ))
        }
        ,
        Pe.prototype.verify = function e(t, r, n) {
            void 0 === n && (n = {});
            var i = {
                name: n && n.name || "{field}",
                rules: y(r),
                bails: h("bails", n, !0),
                forceRequired: !1,
                get isRequired() {
                    return !!this.rules.required || this.forceRequired
                }
            }
              , a = Object.keys(i.rules).filter(pe.isTargetRule);
            return a.length && n && _(n.values) && (i.dependencies = a.map((function(e) {
                var t, r = i.rules[e][0];
                return {
                    name: e,
                    field: {
                        value: n.values[r]
                    }
                }
            }
            ))),
            this._validate(i, t).then((function(e) {
                var t = []
                  , r = {};
                return e.errors.forEach((function(e) {
                    t.push(e.msg),
                    r[e.rule] = e.msg
                }
                )),
                {
                    valid: e.valid,
                    errors: t,
                    failedRules: r
                }
            }
            ))
        }
        ,
        Pe.prototype.destroy = function e() {
            this.$vee._vm.$off("localeChanged")
        }
        ,
        Pe.prototype._createFields = function e(t) {
            var r = this;
            t && Object.keys(t).forEach((function(e) {
                var n = I({}, {
                    name: e,
                    rules: t[e]
                });
                r.attach(n)
            }
            ))
        }
        ,
        Pe.prototype._getDateFormat = function e(t) {
            var r = null;
            return t.date_format && Array.isArray(t.date_format) && (r = t.date_format[0]),
            r || Q.getDriver().getDateFormat(this.locale)
        }
        ,
        Pe.prototype._formatErrorMessage = function e(t, r, n, i) {
            void 0 === n && (n = {}),
            void 0 === i && (i = null);
            var a = this._getFieldDisplayName(t)
              , o = this._getLocalizedParams(r, i);
            return Q.getDriver().getFieldMessage(this.locale, t.name, r.name, [a, o, n])
        }
        ,
        Pe.prototype._convertParamObjectToArray = function e(t, r) {
            if (Array.isArray(t))
                return t;
            var n = pe.getParamNames(r);
            return n && _(t) ? n.reduce((function(e, r) {
                return r in t && e.push(t[r]),
                e
            }
            ), []) : t
        }
        ,
        Pe.prototype._getLocalizedParams = function e(t, r) {
            void 0 === r && (r = null);
            var n = this._convertParamObjectToArray(t.params, t.name), i;
            return t.options.hasTarget && n && n[0] ? [r || Q.getDriver().getAttribute(this.locale, n[0], n[0])].concat(n.slice(1)) : n
        }
        ,
        Pe.prototype._getFieldDisplayName = function e(t) {
            return t.alias || Q.getDriver().getAttribute(this.locale, t.name, t.name)
        }
        ,
        Pe.prototype._convertParamArrayToObj = function e(t, r) {
            var n = pe.getParamNames(r);
            if (!n)
                return t;
            if (_(t)) {
                var i;
                if (n.some((function(e) {
                    return -1 !== Object.keys(t).indexOf(e)
                }
                )))
                    return t;
                t = [t]
            }
            return t.reduce((function(e, t, r) {
                return e[n[r]] = t,
                e
            }
            ), {})
        }
        ,
        Pe.prototype._test = function e(t, r, n) {
            var i = this
              , a = pe.getValidatorMethod(n.name)
              , o = Array.isArray(n.params) ? A(n.params) : n.params;
            o || (o = []);
            var s = null;
            if (!a || "function" != typeof a)
                return Promise.reject(w("No such validator '" + n.name + "' exists."));
            if (n.options.hasTarget && t.dependencies) {
                var u = k(t.dependencies, (function(e) {
                    return e.name === n.name
                }
                ));
                u && (s = u.field.alias,
                o = [u.field.value].concat(o.slice(1)))
            } else
                "required" === n.name && t.rejectsFalse && (o = o.length ? o : [!0]);
            if (n.options.isDate) {
                var l = this._getDateFormat(t.rules);
                "date_format" !== n.name && o.push(l)
            }
            var c = a(r, this._convertParamArrayToObj(o, n.name));
            return x(c.then) ? c.then((function(e) {
                var r = !0
                  , a = {};
                return Array.isArray(e) ? r = e.every((function(e) {
                    return _(e) ? e.valid : e
                }
                )) : (r = _(e) ? e.valid : e,
                a = e.data),
                {
                    valid: r,
                    data: c.data,
                    errors: r ? [] : [i._createFieldError(t, n, a, s)]
                }
            }
            )) : (_(c) || (c = {
                valid: c,
                data: {}
            }),
            {
                valid: c.valid,
                data: c.data,
                errors: c.valid ? [] : [this._createFieldError(t, n, c.data, s)]
            })
        }
        ,
        Pe._merge = function e(t, r) {
            var n = r.validator
              , i = r.options
              , a = r.paramNames
              , o = x(n) ? n : n.validate;
            n.getMessage && Q.getDriver().setMessage(Pe.locale, t, n.getMessage),
            pe.add(t, {
                validate: o,
                options: i,
                paramNames: a
            })
        }
        ,
        Pe._guardExtend = function e(t, r) {
            if (!x(r) && !x(r.validate))
                throw w("Extension Error: The validator '" + t + "' must be a function or have a 'validate' method.")
        }
        ,
        Pe.prototype._createFieldError = function e(t, r, n, i) {
            var a = this;
            return {
                id: t.id,
                vmId: t.vmId,
                field: t.name,
                msg: this._formatErrorMessage(t, r, n, i),
                rule: r.name,
                scope: t.scope,
                regenerate: function() {
                    return a._formatErrorMessage(t, r, n, i)
                }
            }
        }
        ,
        Pe.prototype._resolveField = function e(t, r, n) {
            if ("#" === t[0])
                return this.fields.findById(t.slice(1));
            if (!u(r))
                return this.fields.find({
                    name: t,
                    scope: r,
                    vmId: n
                });
            if (Y(t, ".")) {
                var i = t.split(".")
                  , a = i[0]
                  , o = i.slice(1)
                  , s = this.fields.find({
                    name: o.join("."),
                    scope: a,
                    vmId: n
                });
                if (s)
                    return s
            }
            return this.fields.find({
                name: t,
                scope: null,
                vmId: n
            })
        }
        ,
        Pe.prototype._handleFieldNotFound = function e(t, r) {
            var n = u(r) ? t : (u(r) ? "" : r + ".") + t;
            return Promise.reject(w('Validating a non-existent field: "' + n + '". Use "attach()" first.'))
        }
        ,
        Pe.prototype._handleValidationResults = function e(t, r) {
            var n = this
              , i = t.map((function(e) {
                return {
                    id: e.id
                }
            }
            ));
            this.errors.removeById(i.map((function(e) {
                return e.id
            }
            ))),
            t.forEach((function(e) {
                n.errors.remove(e.field, e.scope, r)
            }
            ));
            var a = t.reduce((function(e, t) {
                return e.push.apply(e, t.errors),
                e
            }
            ), []);
            this.errors.add(a),
            this.fields.filter(i).forEach((function(e) {
                var r = k(t, (function(t) {
                    return t.id === e.id
                }
                ));
                e.setFlags({
                    pending: !1,
                    valid: r.valid,
                    validated: !0
                })
            }
            ))
        }
        ,
        Pe.prototype._shouldSkip = function e(t, r) {
            return !1 !== t.bails && (!(!t.isDisabled || !te().useConstraintAttrs) || !t.isRequired && (u(r) || "" === r || Z(r)))
        }
        ,
        Pe.prototype._shouldBail = function e(t) {
            return void 0 !== t.bails ? t.bails : this.fastExit
        }
        ,
        Pe.prototype._validate = function e(t, r, n) {
            var i = this;
            void 0 === n && (n = {});
            var a = n.initial
              , o = Object.keys(t.rules).filter(pe.isRequireRule);
            if (t.forceRequired = !1,
            o.forEach((function(e) {
                var n = pe.getOptions(e)
                  , a = i._test(t, r, {
                    name: e,
                    params: t.rules[e],
                    options: n
                });
                if (x(a.then))
                    throw w("Require rules cannot be async");
                if (!_(a))
                    throw w("Require rules has to return an object (see docs)");
                !0 === a.data.required && (t.forceRequired = !0)
            }
            )),
            this._shouldSkip(t, r))
                return Promise.resolve({
                    valid: !0,
                    id: t.id,
                    field: t.name,
                    scope: t.scope,
                    errors: []
                });
            var s = []
              , u = []
              , l = !1;
            return x(t.checkValueChanged) && (t.flags.changed = t.checkValueChanged()),
            Object.keys(t.rules).filter((function(e) {
                return !a || !pe.has(e) || pe.isImmediate(e)
            }
            )).some((function(e) {
                var n = pe.getOptions(e)
                  , a = i._test(t, r, {
                    name: e,
                    params: t.rules[e],
                    options: n
                });
                return x(a.then) ? s.push(a) : !a.valid && i._shouldBail(t) ? (u.push.apply(u, a.errors),
                l = !0) : s.push(new Promise((function(e) {
                    return e(a)
                }
                ))),
                l
            }
            )),
            l ? Promise.resolve({
                valid: !1,
                errors: u,
                id: t.id,
                field: t.name,
                scope: t.scope
            }) : Promise.all(s).then((function(e) {
                return e.reduce((function(e, t) {
                    var r;
                    return t.valid || (r = e.errors).push.apply(r, t.errors),
                    e.valid = e.valid && t.valid,
                    e
                }
                ), {
                    valid: !0,
                    errors: u,
                    id: t.id,
                    field: t.name,
                    scope: t.scope
                })
            }
            ))
        }
        ,
        Object.defineProperties(Pe.prototype, je),
        Object.defineProperties(Pe, Ue);
        var Re = function(e) {
            return _(e) ? Object.keys(e).reduce((function(t, r) {
                return t[r] = Re(e[r]),
                t
            }
            ), {}) : x(e) ? e("{0}", ["{1}", "{2}", "{3}"]) : e
        }
          , He = function(e) {
            var t = {};
            return e.messages && (t.messages = Re(e.messages)),
            e.custom && (t.custom = Re(e.custom)),
            e.attributes && (t.attributes = e.attributes),
            u(e.dateFormat) || (t.dateFormat = e.dateFormat),
            t
        }
          , Ye = function e(t, r) {
            this.i18n = t,
            this.rootKey = r
        }
          , Ze = {
            locale: {
                configurable: !0
            }
        };
        Ze.locale.get = function() {
            return this.i18n.locale
        }
        ,
        Ze.locale.set = function(e) {
            b("Cannot set locale from the validator when using vue-i18n, use i18n.locale setter instead")
        }
        ,
        Ye.prototype.getDateFormat = function e(t) {
            return this.i18n.getDateTimeFormat(t || this.locale)
        }
        ,
        Ye.prototype.setDateFormat = function e(t, r) {
            this.i18n.setDateTimeFormat(t || this.locale, r)
        }
        ,
        Ye.prototype.getMessage = function e(t, r, n) {
            var i = this.rootKey + ".messages." + r
              , a = n;
            return Array.isArray(n) && (a = [].concat.apply([], n)),
            this.i18n.te(i) ? this.i18n.t(i, a) : this.i18n.te(i, this.i18n.fallbackLocale) ? this.i18n.t(i, this.i18n.fallbackLocale, a) : this.i18n.t(this.rootKey + ".messages._default", a)
        }
        ,
        Ye.prototype.getAttribute = function e(t, r, n) {
            void 0 === n && (n = "");
            var i = this.rootKey + ".attributes." + r;
            return this.i18n.te(i) ? this.i18n.t(i) : n
        }
        ,
        Ye.prototype.getFieldMessage = function e(t, r, n, i) {
            var a = this.rootKey + ".custom." + r + "." + n;
            return this.i18n.te(a) ? this.i18n.t(a, i) : this.getMessage(t, n, i)
        }
        ,
        Ye.prototype.merge = function e(t) {
            var r = this;
            Object.keys(t).forEach((function(e) {
                var n, i = j({}, h(e + "." + r.rootKey, r.i18n.messages, {})), a = j(i, He(t[e]));
                r.i18n.mergeLocaleMessage(e, ((n = {})[r.rootKey] = a,
                n)),
                a.dateFormat && r.i18n.setDateTimeFormat(e, a.dateFormat)
            }
            ))
        }
        ,
        Ye.prototype.setMessage = function e(t, r, n) {
            var i, a;
            this.merge(((a = {})[t] = {
                messages: (i = {},
                i[r] = n,
                i)
            },
            a))
        }
        ,
        Ye.prototype.setAttribute = function e(t, r, n) {
            var i, a;
            this.merge(((a = {})[t] = {
                attributes: (i = {},
                i[r] = n,
                i)
            },
            a))
        }
        ,
        Object.defineProperties(Ye.prototype, Ze);
        var Le, Ve, ze, We, Be = {
            aggressive: function() {
                return {
                    on: ["input"]
                }
            },
            eager: function(e) {
                var t;
                return e.errors.length ? {
                    on: ["input"]
                } : {
                    on: ["change", "blur"]
                }
            },
            passive: function() {
                return {
                    on: []
                }
            },
            lazy: function() {
                return {
                    on: ["change"]
                }
            }
        }, Ge, Qe, Xe, Ke = function e(t, r) {
            this.configure(t),
            Xe = this,
            r && (Ge = r),
            this._validator = Ee(new Pe(null,{
                fastExit: t && t.fastExit
            },this)),
            this._initVM(this.config),
            this._initI18n(this.config)
        }, Je = {
            i18nDriver: {
                configurable: !0
            },
            config: {
                configurable: !0
            }
        }, et = {
            i18nDriver: {
                configurable: !0
            },
            config: {
                configurable: !0
            }
        };
        Ke.setI18nDriver = function e(t, r) {
            Q.setDriver(t, r)
        }
        ,
        Ke.configure = function e(t) {
            re(t)
        }
        ,
        Ke.setMode = function e(t, r) {
            if (re({
                mode: t
            }),
            r) {
                if (!x(r))
                    throw new Error("A mode implementation must be a function");
                Be[t] = r
            }
        }
        ,
        Ke.use = function e(t, r) {
            return void 0 === r && (r = {}),
            x(t) ? Xe ? void t({
                Validator: Pe,
                ErrorBag: X,
                Rules: Pe.rules
            }, r) : (Qe || (Qe = []),
            void Qe.push({
                plugin: t,
                options: r
            })) : b("The plugin must be a callable function")
        }
        ,
        Ke.install = function e(t, r) {
            Ge && t === Ge || (Ge = t,
            Xe = new Ke(r),
            Pe.$vee = Xe,
            _e(),
            Ge.mixin(ke),
            Ge.directive("validate", qe),
            Qe && (Qe.forEach((function(e) {
                var t = e.plugin
                  , r = e.options;
                Ke.use(t, r)
            }
            )),
            Qe = null))
        }
        ,
        Je.i18nDriver.get = function() {
            return Q.getDriver()
        }
        ,
        et.i18nDriver.get = function() {
            return Q.getDriver()
        }
        ,
        Je.config.get = function() {
            return te()
        }
        ,
        et.config.get = function() {
            return te()
        }
        ,
        Ke.prototype._initVM = function e(t) {
            var r = this;
            this._vm = new Ge({
                data: function() {
                    return {
                        errors: r._validator.errors,
                        fields: r._validator.fields
                    }
                }
            })
        }
        ,
        Ke.prototype._initI18n = function e(t) {
            var r = this
              , n = t.dictionary
              , i = t.i18n
              , a = t.i18nRootKey
              , o = t.locale
              , s = function() {
                n && r.i18nDriver.merge(n),
                r._validator.errors.regenerate()
            };
            i ? (Ke.setI18nDriver("i18n", new Ye(i,a)),
            i._vm.$watch("locale", s)) : "undefined" != typeof window && this._vm.$on("localeChanged", s),
            n && this.i18nDriver.merge(n),
            o && !i && this._validator.localize(o)
        }
        ,
        Ke.prototype.configure = function e(t) {
            re(t)
        }
        ,
        Object.defineProperties(Ke.prototype, Je),
        Object.defineProperties(Ke, et),
        Ke.mixin = ke,
        Ke.directive = qe,
        Ke.Validator = Pe,
        Ke.ErrorBag = X;
        var tt = function(e) {
            var t = ["Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
              , r = 1024
              , n = 0 === (e = Number(e) * r) ? 0 : Math.floor(Math.log(e) / Math.log(r));
            return 1 * (e / Math.pow(r, n)).toFixed(2) + " " + t[n]
        }, rt, nt, it = {
            _default: function(e) {
                return "The " + e + " value is not valid"
            },
            after: function(e, t) {
                var r = t[0], n;
                return "The " + e + " must be after " + (t[1] ? "or equal to " : "") + r
            },
            alpha: function(e) {
                return "The " + e + " field may only contain alphabetic characters"
            },
            alpha_dash: function(e) {
                return "The " + e + " field may contain alpha-numeric characters as well as dashes and underscores"
            },
            alpha_num: function(e) {
                return "The " + e + " field may only contain alpha-numeric characters"
            },
            alpha_spaces: function(e) {
                return "The " + e + " field may only contain alphabetic characters as well as spaces"
            },
            before: function(e, t) {
                var r = t[0], n;
                return "The " + e + " must be before " + (t[1] ? "or equal to " : "") + r
            },
            between: function(e, t) {
                var r, n;
                return "The " + e + " field must be between " + t[0] + " and " + t[1]
            },
            confirmed: function(e) {
                return "The " + e + " confirmation does not match"
            },
            credit_card: function(e) {
                return "The " + e + " field is invalid"
            },
            date_between: function(e, t) {
                var r, n;
                return "The " + e + " must be between " + t[0] + " and " + t[1]
            },
            date_format: function(e, t) {
                var r;
                return "The " + e + " must be in the format " + t[0]
            },
            decimal: function(e, t) {
                void 0 === t && (t = []);
                var r = t[0];
                return void 0 === r && (r = "*"),
                "The " + e + " field must be numeric and may contain" + (r && "*" !== r ? " " + r : "") + " decimal points"
            },
            digits: function(e, t) {
                var r;
                return "The " + e + " field must be numeric and contains exactly " + t[0] + " digits"
            },
            dimensions: function(e, t) {
                var r, n;
                return "The " + e + " field must be " + t[0] + " pixels by " + t[1] + " pixels"
            },
            email: function(e) {
                return "The " + e + " field must be a valid email"
            },
            excluded: function(e) {
                return "The " + e + " field must be a valid value"
            },
            ext: function(e) {
                return "The " + e + " field must be a valid file"
            },
            image: function(e) {
                return "The " + e + " field must be an image"
            },
            included: function(e) {
                return "The " + e + " field must be a valid value"
            },
            integer: function(e) {
                return "The " + e + " field must be an integer"
            },
            ip: function(e) {
                return "The " + e + " field must be a valid ip address"
            },
            ip_or_fqdn: function(e) {
                return "The " + e + " field must be a valid ip address or FQDN"
            },
            length: function(e, t) {
                var r = t[0]
                  , n = t[1];
                return n ? "The " + e + " length must be between " + r + " and " + n : "The " + e + " length must be " + r
            },
            max: function(e, t) {
                var r;
                return "The " + e + " field may not be greater than " + t[0] + " characters"
            },
            max_value: function(e, t) {
                var r;
                return "The " + e + " field must be " + t[0] + " or less"
            },
            mimes: function(e) {
                return "The " + e + " field must have a valid file type"
            },
            min: function(e, t) {
                var r;
                return "The " + e + " field must be at least " + t[0] + " characters"
            },
            min_value: function(e, t) {
                var r;
                return "The " + e + " field must be " + t[0] + " or more"
            },
            numeric: function(e) {
                return "The " + e + " field may only contain numeric characters"
            },
            regex: function(e) {
                return "The " + e + " field format is invalid"
            },
            required: function(e) {
                return "The " + e + " field is required"
            },
            required_if: function(e, t) {
                var r;
                return "The " + e + " field is required when the " + t[0] + " field has this value"
            },
            size: function(e, t) {
                var r = t[0];
                return "The " + e + " size must be less than " + tt(r)
            },
            url: function(e) {
                return "The " + e + " field is not a valid URL"
            }
        }, at = {
            name: "en",
            messages: it,
            attributes: {}
        };
        function ot(e) {
            if (null === e || !0 === e || !1 === e)
                return NaN;
            var t = Number(e);
            return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
        }
        (function() {
            return "undefined" != typeof VeeValidate
        }
        )() && VeeValidate.Validator.localize(((nt = {})[at.name] = at,
        nt));
        var st = 6e4;
        function ut(e) {
            var t = new Date(e.getTime())
              , r = t.getTimezoneOffset();
            t.setSeconds(0, 0);
            var n = t.getTime() % st;
            return r * st + n
        }
        var lt = 36e5
          , ct = 6e4
          , dt = 2
          , ft = {
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
        function ht(e, t) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            if (null === e)
                return new Date(NaN);
            var r = t || {}
              , n = null == r.additionalDigits ? dt : ot(r.additionalDigits);
            if (2 !== n && 1 !== n && 0 !== n)
                throw new RangeError("additionalDigits must be 0, 1 or 2");
            if (e instanceof Date || "object" == typeof e && "[object Date]" === Object.prototype.toString.call(e))
                return new Date(e.getTime());
            if ("number" == typeof e || "[object Number]" === Object.prototype.toString.call(e))
                return new Date(e);
            if ("string" != typeof e && "[object String]" !== Object.prototype.toString.call(e))
                return new Date(NaN);
            var i = vt(e), a = mt(i.date, n), o = a.year, s, u = pt(a.restDateString, o);
            if (isNaN(u))
                return new Date(NaN);
            if (u) {
                var l = u.getTime(), c = 0, d;
                if (i.time && (c = gt(i.time),
                isNaN(c)))
                    return new Date(NaN);
                if (i.timezone) {
                    if (d = yt(i.timezone),
                    isNaN(d))
                        return new Date(NaN)
                } else
                    d = ut(new Date(l + c)),
                    d = ut(new Date(l + c + d));
                return new Date(l + c + d)
            }
            return new Date(NaN)
        }
        function vt(e) {
            var t = {}, r = e.split(ft.dateTimeDelimeter), n;
            if (ft.plainTime.test(r[0]) ? (t.date = null,
            n = r[0]) : (t.date = r[0],
            n = r[1],
            ft.timeZoneDelimeter.test(t.date) && (t.date = e.split(ft.timeZoneDelimeter)[0],
            n = e.substr(t.date.length, e.length))),
            n) {
                var i = ft.timezone.exec(n);
                i ? (t.time = n.replace(i[1], ""),
                t.timezone = i[1]) : t.time = n
            }
            return t
        }
        function mt(e, t) {
            var r = ft.YYY[t], n = ft.YYYYY[t], i;
            if (i = ft.YYYY.exec(e) || n.exec(e)) {
                var a = i[1];
                return {
                    year: parseInt(a, 10),
                    restDateString: e.slice(a.length)
                }
            }
            if (i = ft.YY.exec(e) || r.exec(e)) {
                var o = i[1];
                return {
                    year: 100 * parseInt(o, 10),
                    restDateString: e.slice(o.length)
                }
            }
            return {
                year: null
            }
        }
        function pt(e, t) {
            if (null === t)
                return null;
            var r, n, i, a;
            if (0 === e.length)
                return (n = new Date(0)).setUTCFullYear(t),
                n;
            if (r = ft.MM.exec(e))
                return n = new Date(0),
                $t(t, i = parseInt(r[1], 10) - 1) ? (n.setUTCFullYear(t, i),
                n) : new Date(NaN);
            if (r = ft.DDD.exec(e)) {
                n = new Date(0);
                var o = parseInt(r[1], 10);
                return Tt(t, o) ? (n.setUTCFullYear(t, 0, o),
                n) : new Date(NaN)
            }
            if (r = ft.MMDD.exec(e)) {
                n = new Date(0),
                i = parseInt(r[1], 10) - 1;
                var s = parseInt(r[2], 10);
                return $t(t, i, s) ? (n.setUTCFullYear(t, i, s),
                n) : new Date(NaN)
            }
            if (r = ft.Www.exec(e))
                return Ct(t, a = parseInt(r[1], 10) - 1) ? bt(t, a) : new Date(NaN);
            if (r = ft.WwwD.exec(e)) {
                a = parseInt(r[1], 10) - 1;
                var u = parseInt(r[2], 10) - 1;
                return Ct(t, a, u) ? bt(t, a, u) : new Date(NaN)
            }
            return null
        }
        function gt(e) {
            var t, r, n;
            if (t = ft.HH.exec(e))
                return Dt(r = parseFloat(t[1].replace(",", "."))) ? r % 24 * lt : NaN;
            if (t = ft.HHMM.exec(e))
                return Dt(r = parseInt(t[1], 10), n = parseFloat(t[2].replace(",", "."))) ? r % 24 * lt + n * ct : NaN;
            if (t = ft.HHMMSS.exec(e)) {
                r = parseInt(t[1], 10),
                n = parseInt(t[2], 10);
                var i = parseFloat(t[3].replace(",", "."));
                return Dt(r, n, i) ? r % 24 * lt + n * ct + 1e3 * i : NaN
            }
            return null
        }
        function yt(e) {
            var t, r, n;
            if (t = ft.timezoneZ.exec(e))
                return 0;
            if (t = ft.timezoneHH.exec(e))
                return n = parseInt(t[2], 10),
                At() ? (r = n * lt,
                "+" === t[1] ? -r : r) : NaN;
            if (t = ft.timezoneHHMM.exec(e)) {
                n = parseInt(t[2], 10);
                var i = parseInt(t[3], 10);
                return At(n, i) ? (r = n * lt + i * ct,
                "+" === t[1] ? -r : r) : NaN
            }
            return 0
        }
        function bt(e, t, r) {
            t = t || 0,
            r = r || 0;
            var n = new Date(0);
            n.setUTCFullYear(e, 0, 4);
            var i, a = 7 * t + r + 1 - (n.getUTCDay() || 7);
            return n.setUTCDate(n.getUTCDate() + a),
            n
        }
        var wt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
          , _t = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        function xt(e) {
            return e % 400 == 0 || e % 4 == 0 && e % 100 != 0
        }
        function $t(e, t, r) {
            if (t < 0 || t > 11)
                return !1;
            if (null != r) {
                if (r < 1)
                    return !1;
                var n = xt(e);
                if (n && r > _t[t])
                    return !1;
                if (!n && r > wt[t])
                    return !1
            }
            return !0
        }
        function Tt(e, t) {
            if (t < 1)
                return !1;
            var r = xt(e);
            return !(r && t > 366) && !(!r && t > 365)
        }
        function Ct(e, t, r) {
            return !(t < 0 || t > 52) && (null == r || !(r < 0 || r > 6))
        }
        function Dt(e, t, r) {
            return (null == e || !(e < 0 || e >= 25)) && ((null == t || !(t < 0 || t >= 60)) && (null == r || !(r < 0 || r >= 60)))
        }
        function At(e, t) {
            return null == t || !(t < 0 || t > 59)
        }
        function Nt(e, t, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var n = ht(e, r).getTime()
              , i = ot(t);
            return new Date(n + i)
        }
        function It(e, t) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = ht(e, t);
            return !isNaN(r)
        }
        var Ot = {
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
        function Mt(e, t, r) {
            var n;
            return r = r || {},
            n = "string" == typeof Ot[e] ? Ot[e] : 1 === t ? Ot[e].one : Ot[e].other.replace("{{count}}", t),
            r.addSuffix ? r.comparison > 0 ? "in " + n : n + " ago" : n
        }
        function Et(e) {
            return function(t) {
                var r = t || {}, n = r.width ? String(r.width) : e.defaultWidth, i;
                return e.formats[n] || e.formats[e.defaultWidth]
            }
        }
        var Ft, kt = {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a"
        }, St = {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}"
        }, qt = {
            date: Et({
                formats: {
                    full: "EEEE, MMMM do, y",
                    long: "MMMM do, y",
                    medium: "MMM d, y",
                    short: "MM/dd/yyyy"
                },
                defaultWidth: "full"
            }),
            time: Et({
                formats: kt,
                defaultWidth: "full"
            }),
            dateTime: Et({
                formats: St,
                defaultWidth: "full"
            })
        }, Pt = {
            lastWeek: "'last' eeee 'at' p",
            yesterday: "'yesterday at' p",
            today: "'today at' p",
            tomorrow: "'tomorrow at' p",
            nextWeek: "eeee 'at' p",
            other: "P"
        };
        function jt(e, t, r, n) {
            return Pt[e]
        }
        function Ut(e) {
            return function(t, r) {
                var n = r || {}, i = n.width ? String(n.width) : e.defaultWidth, a, o, s;
                return (o = "formatting" === (n.context ? String(n.context) : "standalone") && e.formattingValues ? e.formattingValues[i] || e.formattingValues[e.defaultFormattingWidth] : e.values[i] || e.values[e.defaultWidth])[e.argumentCallback ? e.argumentCallback(t) : t]
            }
        }
        var Rt, Ht = {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
        }, Yt = {
            narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        }, Zt = {
            narrow: ["S", "M", "T", "W", "T", "F", "S"],
            short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        }, Lt = {
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
        }, Vt = {
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
        }, zt;
        function Wt(e, t) {
            var r = Number(e)
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
        function Bt(e) {
            return function(t, r) {
                var n = String(t)
                  , i = r || {}
                  , a = n.match(e.matchPattern);
                if (!a)
                    return null;
                var o = a[0]
                  , s = n.match(e.parsePattern);
                if (!s)
                    return null;
                var u = e.valueCallback ? e.valueCallback(s[0]) : s[0];
                return {
                    value: u = i.valueCallback ? i.valueCallback(u) : u,
                    rest: n.slice(o.length)
                }
            }
        }
        function Gt(e) {
            return function(t, r) {
                var n = String(t)
                  , i = r || {}
                  , a = i.width
                  , o = a && e.matchPatterns[a] || e.matchPatterns[e.defaultMatchWidth]
                  , s = n.match(o);
                if (!s)
                    return null;
                var u = s[0], l = a && e.parsePatterns[a] || e.parsePatterns[e.defaultParseWidth], c;
                return c = "[object Array]" === Object.prototype.toString.call(l) ? l.findIndex((function(e) {
                    return e.test(n)
                }
                )) : Qt(l, (function(e) {
                    return e.test(n)
                }
                )),
                c = e.valueCallback ? e.valueCallback(c) : c,
                {
                    value: c = i.valueCallback ? i.valueCallback(c) : c,
                    rest: n.slice(u.length)
                }
            }
        }
        function Qt(e, t) {
            for (var r in e)
                if (e.hasOwnProperty(r) && t(e[r]))
                    return r
        }
        var Xt, Kt, Jt = {
            narrow: /^(b|a)/i,
            abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
            wide: /^(before christ|before common era|anno domini|common era)/i
        }, er = {
            any: [/^b/i, /^(a|c)/i]
        }, tr = {
            narrow: /^[1234]/i,
            abbreviated: /^q[1234]/i,
            wide: /^[1234](th|st|nd|rd)? quarter/i
        }, rr = {
            any: [/1/i, /2/i, /3/i, /4/i]
        }, nr = {
            narrow: /^[jfmasond]/i,
            abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
            wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
        }, ir = {
            narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
            any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
        }, ar = {
            narrow: /^[smtwf]/i,
            short: /^(su|mo|tu|we|th|fr|sa)/i,
            abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
            wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
        }, or = {
            narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
            any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
        }, sr = {
            narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
            any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
        }, ur = {
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
        }, lr, cr = {
            formatDistance: Mt,
            formatLong: qt,
            formatRelative: jt,
            localize: {
                ordinalNumber: Wt,
                era: Ut({
                    values: {
                        narrow: ["B", "A"],
                        abbreviated: ["BC", "AD"],
                        wide: ["Before Christ", "Anno Domini"]
                    },
                    defaultWidth: "wide"
                }),
                quarter: Ut({
                    values: Ht,
                    defaultWidth: "wide",
                    argumentCallback: function(e) {
                        return Number(e) - 1
                    }
                }),
                month: Ut({
                    values: Yt,
                    defaultWidth: "wide"
                }),
                day: Ut({
                    values: Zt,
                    defaultWidth: "wide"
                }),
                dayPeriod: Ut({
                    values: Lt,
                    defaultWidth: "wide",
                    formattingValues: Vt,
                    defaulFormattingWidth: "wide"
                })
            },
            match: {
                ordinalNumber: Bt({
                    matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                    parsePattern: /\d+/i,
                    valueCallback: function(e) {
                        return parseInt(e, 10)
                    }
                }),
                era: Gt({
                    matchPatterns: Jt,
                    defaultMatchWidth: "wide",
                    parsePatterns: er,
                    defaultParseWidth: "any"
                }),
                quarter: Gt({
                    matchPatterns: tr,
                    defaultMatchWidth: "wide",
                    parsePatterns: rr,
                    defaultParseWidth: "any",
                    valueCallback: function(e) {
                        return e + 1
                    }
                }),
                month: Gt({
                    matchPatterns: nr,
                    defaultMatchWidth: "wide",
                    parsePatterns: ir,
                    defaultParseWidth: "any"
                }),
                day: Gt({
                    matchPatterns: ar,
                    defaultMatchWidth: "wide",
                    parsePatterns: or,
                    defaultParseWidth: "any"
                }),
                dayPeriod: Gt({
                    matchPatterns: sr,
                    defaultMatchWidth: "any",
                    parsePatterns: ur,
                    defaultParseWidth: "any"
                })
            },
            options: {
                weekStartsOn: 0,
                firstWeekContainsDate: 1
            }
        }, dr = 864e5;
        function fr(e, t) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = ht(e, t)
              , n = r.getTime();
            r.setUTCMonth(0, 1),
            r.setUTCHours(0, 0, 0, 0);
            var i, a = n - r.getTime();
            return Math.floor(a / dr) + 1
        }
        function hr(e, t) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = 1
              , n = ht(e, t)
              , i = n.getUTCDay()
              , a = (i < 1 ? 7 : 0) + i - 1;
            return n.setUTCDate(n.getUTCDate() - a),
            n.setUTCHours(0, 0, 0, 0),
            n
        }
        function vr(e, t) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = ht(e, t)
              , n = r.getUTCFullYear()
              , i = new Date(0);
            i.setUTCFullYear(n + 1, 0, 4),
            i.setUTCHours(0, 0, 0, 0);
            var a = hr(i, t)
              , o = new Date(0);
            o.setUTCFullYear(n, 0, 4),
            o.setUTCHours(0, 0, 0, 0);
            var s = hr(o, t);
            return r.getTime() >= a.getTime() ? n + 1 : r.getTime() >= s.getTime() ? n : n - 1
        }
        function mr(e, t) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = vr(e, t), n = new Date(0), i;
            return n.setUTCFullYear(r, 0, 4),
            n.setUTCHours(0, 0, 0, 0),
            hr(n, t)
        }
        var pr = 6048e5;
        function gr(e, t) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = ht(e, t)
              , n = hr(r, t).getTime() - mr(r, t).getTime();
            return Math.round(n / pr) + 1
        }
        function yr(e, t) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = t || {}
              , n = r.locale
              , i = n && n.options && n.options.weekStartsOn
              , a = null == i ? 0 : ot(i)
              , o = null == r.weekStartsOn ? a : ot(r.weekStartsOn);
            if (!(o >= 0 && o <= 6))
                throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            var s = ht(e, r)
              , u = s.getUTCDay()
              , l = (u < o ? 7 : 0) + u - o;
            return s.setUTCDate(s.getUTCDate() - l),
            s.setUTCHours(0, 0, 0, 0),
            s
        }
        function br(e, t) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = ht(e, t)
              , n = r.getUTCFullYear()
              , i = t || {}
              , a = i.locale
              , o = a && a.options && a.options.firstWeekContainsDate
              , s = null == o ? 1 : ot(o)
              , u = null == i.firstWeekContainsDate ? s : ot(i.firstWeekContainsDate);
            if (!(u >= 1 && u <= 7))
                throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
            var l = new Date(0);
            l.setUTCFullYear(n + 1, 0, u),
            l.setUTCHours(0, 0, 0, 0);
            var c = yr(l, t)
              , d = new Date(0);
            d.setUTCFullYear(n, 0, u),
            d.setUTCHours(0, 0, 0, 0);
            var f = yr(d, t);
            return r.getTime() >= c.getTime() ? n + 1 : r.getTime() >= f.getTime() ? n : n - 1
        }
        function wr(e, t) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = t || {}, n = r.locale, i = n && n.options && n.options.firstWeekContainsDate, a = null == i ? 1 : ot(i), o = null == r.firstWeekContainsDate ? a : ot(r.firstWeekContainsDate), s = br(e, t), u = new Date(0), l;
            return u.setUTCFullYear(s, 0, o),
            u.setUTCHours(0, 0, 0, 0),
            yr(u, t)
        }
        var _r = 6048e5;
        function xr(e, t) {
            if (arguments.length < 1)
                throw new TypeError("1 argument required, but only " + arguments.length + " present");
            var r = ht(e, t)
              , n = yr(r, t).getTime() - wr(r, t).getTime();
            return Math.round(n / _r) + 1
        }
        var $r = "am"
          , Tr = "pm"
          , Cr = "midnight"
          , Dr = "noon"
          , Ar = "morning"
          , Nr = "afternoon"
          , Ir = "evening"
          , Or = "night"
          , Mr = {
            G: function(e, t, r) {
                var n = e.getUTCFullYear() > 0 ? 1 : 0;
                switch (t) {
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
            y: function(e, t, r, n) {
                var i = e.getUTCFullYear(), a = i > 0 ? i : 1 - i, o;
                return "yy" === t ? Er(a % 100, 2) : "yo" === t ? r.ordinalNumber(a, {
                    unit: "year"
                }) : Er(a, t.length)
            },
            Y: function(e, t, r, n) {
                var i = br(e, n), a = i > 0 ? i : 1 - i, o;
                return "YY" === t ? Er(a % 100, 2) : "Yo" === t ? r.ordinalNumber(a, {
                    unit: "year"
                }) : Er(a, t.length)
            },
            R: function(e, t, r, n) {
                var i;
                return Er(vr(e, n), t.length)
            },
            u: function(e, t, r, n) {
                var i;
                return Er(e.getUTCFullYear(), t.length)
            },
            Q: function(e, t, r, n) {
                var i = Math.ceil((e.getUTCMonth() + 1) / 3);
                switch (t) {
                case "Q":
                    return String(i);
                case "QQ":
                    return Er(i, 2);
                case "Qo":
                    return r.ordinalNumber(i, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return r.quarter(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return r.quarter(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return r.quarter(i, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            q: function(e, t, r, n) {
                var i = Math.ceil((e.getUTCMonth() + 1) / 3);
                switch (t) {
                case "q":
                    return String(i);
                case "qq":
                    return Er(i, 2);
                case "qo":
                    return r.ordinalNumber(i, {
                        unit: "quarter"
                    });
                case "qqq":
                    return r.quarter(i, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "qqqqq":
                    return r.quarter(i, {
                        width: "narrow",
                        context: "standalone"
                    });
                default:
                    return r.quarter(i, {
                        width: "wide",
                        context: "standalone"
                    })
                }
            },
            M: function(e, t, r, n) {
                var i = e.getUTCMonth();
                switch (t) {
                case "M":
                    return String(i + 1);
                case "MM":
                    return Er(i + 1, 2);
                case "Mo":
                    return r.ordinalNumber(i + 1, {
                        unit: "month"
                    });
                case "MMM":
                    return r.month(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "MMMMM":
                    return r.month(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return r.month(i, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            L: function(e, t, r, n) {
                var i = e.getUTCMonth();
                switch (t) {
                case "L":
                    return String(i + 1);
                case "LL":
                    return Er(i + 1, 2);
                case "Lo":
                    return r.ordinalNumber(i + 1, {
                        unit: "month"
                    });
                case "LLL":
                    return r.month(i, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "LLLLL":
                    return r.month(i, {
                        width: "narrow",
                        context: "standalone"
                    });
                default:
                    return r.month(i, {
                        width: "wide",
                        context: "standalone"
                    })
                }
            },
            w: function(e, t, r, n) {
                var i = xr(e, n);
                return "wo" === t ? r.ordinalNumber(i, {
                    unit: "week"
                }) : Er(i, t.length)
            },
            I: function(e, t, r, n) {
                var i = gr(e, n);
                return "Io" === t ? r.ordinalNumber(i, {
                    unit: "week"
                }) : Er(i, t.length)
            },
            d: function(e, t, r, n) {
                var i = e.getUTCDate();
                return "do" === t ? r.ordinalNumber(i, {
                    unit: "date"
                }) : Er(i, t.length)
            },
            D: function(e, t, r, n) {
                var i = fr(e, n);
                return "Do" === t ? r.ordinalNumber(i, {
                    unit: "dayOfYear"
                }) : Er(i, t.length)
            },
            E: function(e, t, r, n) {
                var i = e.getUTCDay();
                switch (t) {
                case "E":
                case "EE":
                case "EEE":
                    return r.day(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "EEEEE":
                    return r.day(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return r.day(i, {
                        width: "short",
                        context: "formatting"
                    });
                default:
                    return r.day(i, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            e: function(e, t, r, n) {
                var i = e.getUTCDay()
                  , a = (i - n.weekStartsOn + 8) % 7 || 7;
                switch (t) {
                case "e":
                    return String(a);
                case "ee":
                    return Er(a, 2);
                case "eo":
                    return r.ordinalNumber(a, {
                        unit: "day"
                    });
                case "eee":
                    return r.day(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "eeeee":
                    return r.day(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return r.day(i, {
                        width: "short",
                        context: "formatting"
                    });
                default:
                    return r.day(i, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            c: function(e, t, r, n) {
                var i = e.getUTCDay()
                  , a = (i - n.weekStartsOn + 8) % 7 || 7;
                switch (t) {
                case "c":
                    return String(a);
                case "cc":
                    return Er(a, t.length);
                case "co":
                    return r.ordinalNumber(a, {
                        unit: "day"
                    });
                case "ccc":
                    return r.day(i, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "ccccc":
                    return r.day(i, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return r.day(i, {
                        width: "short",
                        context: "standalone"
                    });
                default:
                    return r.day(i, {
                        width: "wide",
                        context: "standalone"
                    })
                }
            },
            i: function(e, t, r, n) {
                var i = e.getUTCDay()
                  , a = 0 === i ? 7 : i;
                switch (t) {
                case "i":
                    return String(a);
                case "ii":
                    return Er(a, t.length);
                case "io":
                    return r.ordinalNumber(a, {
                        unit: "day"
                    });
                case "iii":
                    return r.day(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "iiiii":
                    return r.day(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "iiiiii":
                    return r.day(i, {
                        width: "short",
                        context: "formatting"
                    });
                default:
                    return r.day(i, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            a: function(e, t, r) {
                var n, i = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
                switch (t) {
                case "a":
                case "aa":
                case "aaa":
                    return r.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "aaaaa":
                    return r.dayPeriod(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return r.dayPeriod(i, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            b: function(e, t, r) {
                var n = e.getUTCHours(), i;
                switch (i = 12 === n ? Dr : 0 === n ? Cr : n / 12 >= 1 ? "pm" : "am",
                t) {
                case "b":
                case "bb":
                case "bbb":
                    return r.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "bbbbb":
                    return r.dayPeriod(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return r.dayPeriod(i, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            B: function(e, t, r) {
                var n = e.getUTCHours(), i;
                switch (i = n >= 17 ? Ir : n >= 12 ? Nr : n >= 4 ? Ar : Or,
                t) {
                case "B":
                case "BB":
                case "BBB":
                    return r.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "BBBBB":
                    return r.dayPeriod(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return r.dayPeriod(i, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            h: function(e, t, r, n) {
                var i = e.getUTCHours() % 12;
                return 0 === i && (i = 12),
                "ho" === t ? r.ordinalNumber(i, {
                    unit: "hour"
                }) : Er(i, t.length)
            },
            H: function(e, t, r, n) {
                var i = e.getUTCHours();
                return "Ho" === t ? r.ordinalNumber(i, {
                    unit: "hour"
                }) : Er(i, t.length)
            },
            K: function(e, t, r, n) {
                var i = e.getUTCHours() % 12;
                return "Ko" === t ? r.ordinalNumber(i, {
                    unit: "hour"
                }) : Er(i, t.length)
            },
            k: function(e, t, r, n) {
                var i = e.getUTCHours();
                return 0 === i && (i = 24),
                "ko" === t ? r.ordinalNumber(i, {
                    unit: "hour"
                }) : Er(i, t.length)
            },
            m: function(e, t, r, n) {
                var i = e.getUTCMinutes();
                return "mo" === t ? r.ordinalNumber(i, {
                    unit: "minute"
                }) : Er(i, t.length)
            },
            s: function(e, t, r, n) {
                var i = e.getUTCSeconds();
                return "so" === t ? r.ordinalNumber(i, {
                    unit: "second"
                }) : Er(i, t.length)
            },
            S: function(e, t, r, n) {
                var i = t.length, a = e.getUTCMilliseconds(), o;
                return Er(Math.floor(a * Math.pow(10, i - 3)), i)
            },
            X: function(e, t, r, n) {
                var i, a = (n._originalDate || e).getTimezoneOffset();
                if (0 === a)
                    return "Z";
                switch (t) {
                case "X":
                    return kr(a);
                case "XXXX":
                case "XX":
                    return Fr(a);
                default:
                    return Fr(a, ":")
                }
            },
            x: function(e, t, r, n) {
                var i, a = (n._originalDate || e).getTimezoneOffset();
                switch (t) {
                case "x":
                    return kr(a);
                case "xxxx":
                case "xx":
                    return Fr(a);
                default:
                    return Fr(a, ":")
                }
            },
            O: function(e, t, r, n) {
                var i, a = (n._originalDate || e).getTimezoneOffset();
                switch (t) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + Sr(a, ":");
                default:
                    return "GMT" + Fr(a, ":")
                }
            },
            z: function(e, t, r, n) {
                var i, a = (n._originalDate || e).getTimezoneOffset();
                switch (t) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + Sr(a, ":");
                default:
                    return "GMT" + Fr(a, ":")
                }
            },
            t: function(e, t, r, n) {
                var i = n._originalDate || e, a;
                return Er(Math.floor(i.getTime() / 1e3), t.length)
            },
            T: function(e, t, r, n) {
                var i, a;
                return Er((n._originalDate || e).getTime(), t.length)
            }
        };
        function Er(e, t) {
            for (var r = e < 0 ? "-" : "", n = Math.abs(e).toString(); n.length < t; )
                n = "0" + n;
            return r + n
        }
        function Fr(e, t) {
            var r = t || "", n = e > 0 ? "-" : "+", i = Math.abs(e), a, o;
            return n + Er(Math.floor(i / 60), 2) + r + Er(i % 60, 2)
        }
        function kr(e, t) {
            var r;
            return e % 60 == 0 ? (e > 0 ? "-" : "+") + Er(Math.abs(e) / 60, 2) : Fr(e, t)
        }
        function Sr(e, t) {
            var r = e > 0 ? "-" : "+"
              , n = Math.abs(e)
              , i = Math.floor(n / 60)
              , a = n % 60;
            if (0 === a)
                return r + String(i);
            var o = t || "";
            return r + String(i) + o + Er(a, 2)
        }
        function qr(e, t, r) {
            switch (e) {
            case "P":
                return t.date({
                    width: "short"
                });
            case "PP":
                return t.date({
                    width: "medium"
                });
            case "PPP":
                return t.date({
                    width: "long"
                });
            default:
                return t.date({
                    width: "full"
                })
            }
        }
        function Pr(e, t, r) {
            switch (e) {
            case "p":
                return t.time({
                    width: "short"
                });
            case "pp":
                return t.time({
                    width: "medium"
                });
            case "ppp":
                return t.time({
                    width: "long"
                });
            default:
                return t.time({
                    width: "full"
                })
            }
        }
        function jr(e, t, r) {
            var n = e.match(/(P+)(p+)?/), i = n[1], a = n[2], o;
            if (!a)
                return qr(e, t);
            switch (i) {
            case "P":
                o = t.dateTime({
                    width: "short"
                });
                break;
            case "PP":
                o = t.dateTime({
                    width: "medium"
                });
                break;
            case "PPP":
                o = t.dateTime({
                    width: "long"
                });
                break;
            default:
                o = t.dateTime({
                    width: "full"
                })
            }
            return o.replace("{{date}}", qr(i, t)).replace("{{time}}", Pr(a, t))
        }
        var Ur = {
            p: Pr,
            P: jr
        };
        function Rr(e, t, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var n;
            return Nt(e, -ot(t), r)
        }
        var Hr = ["D", "DD", "YY", "YYYY"];
        function Yr(e) {
            return -1 !== Hr.indexOf(e)
        }
        function Zr(e) {
            throw new RangeError("`options.awareOfUnicodeTokens` must be set to `true` to use `" + e + "` token; see: https://git.io/fxCyr")
        }
        var Lr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
          , Vr = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
          , zr = /^'(.*?)'?$/
          , Wr = /''/g;
        function Br(e, t, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var n = String(t)
              , i = r || {}
              , a = i.locale || cr
              , o = a.options && a.options.firstWeekContainsDate
              , s = null == o ? 1 : ot(o)
              , u = null == i.firstWeekContainsDate ? s : ot(i.firstWeekContainsDate);
            if (!(u >= 1 && u <= 7))
                throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
            var l = a.options && a.options.weekStartsOn
              , c = null == l ? 0 : ot(l)
              , d = null == i.weekStartsOn ? c : ot(i.weekStartsOn);
            if (!(d >= 0 && d <= 6))
                throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            if (!a.localize)
                throw new RangeError("locale must contain localize property");
            if (!a.formatLong)
                throw new RangeError("locale must contain formatLong property");
            var f = ht(e, i);
            if (!It(f, i))
                return "Invalid Date";
            var h, v = Rr(f, ut(f), i), m = {
                firstWeekContainsDate: u,
                weekStartsOn: d,
                locale: a,
                _originalDate: f
            }, p;
            return n.match(Vr).map((function(e) {
                var t = e[0], r;
                return "p" === t || "P" === t ? (0,
                Ur[t])(e, a.formatLong, m) : e
            }
            )).join("").match(Lr).map((function(e) {
                if ("''" === e)
                    return "'";
                var t = e[0];
                if ("'" === t)
                    return Gr(e);
                var r = Mr[t];
                return r ? (!i.awareOfUnicodeTokens && Yr(e) && Zr(e),
                r(v, e, a.localize, m)) : e
            }
            )).join("")
        }
        function Gr(e) {
            return e.match(zr)[1].replace(Wr, "'")
        }
        function Qr(e, t, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var n = ht(e, r)
              , i = ht(t, r);
            return n.getTime() > i.getTime()
        }
        function Xr(e, t, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var n = ht(e, r)
              , i = ht(t, r);
            return n.getTime() < i.getTime()
        }
        function Kr(e, t, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var n = ht(e, r)
              , i = ht(t, r);
            return n.getTime() === i.getTime()
        }
        function Jr(e, t, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var n = r || {}
              , i = n.locale
              , a = i && i.options && i.options.weekStartsOn
              , o = null == a ? 0 : ot(a)
              , s = null == n.weekStartsOn ? o : ot(n.weekStartsOn);
            if (!(s >= 0 && s <= 6))
                throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            var u = ht(e, r), l = ot(t), c, d, f, h = ((l % 7 + 7) % 7 < s ? 7 : 0) + l - u.getUTCDay();
            return u.setUTCDate(u.getUTCDate() + h),
            u
        }
        function en(e, t, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var n = ht(e, r)
              , i = ot(t)
              , a = xr(n, r) - i;
            return n.setUTCDate(n.getUTCDate() - 7 * a),
            n
        }
        function tn(e, t, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var n = ot(t);
            n % 7 == 0 && (n -= 7);
            var i = 1, a = ht(e, r), o, s, u, l = ((n % 7 + 7) % 7 < 1 ? 7 : 0) + n - a.getUTCDay();
            return a.setUTCDate(a.getUTCDate() + l),
            a
        }
        function rn(e, t, r) {
            if (arguments.length < 2)
                throw new TypeError("2 arguments required, but only " + arguments.length + " present");
            var n = ht(e, r)
              , i = ot(t)
              , a = gr(n, r) - i;
            return n.setUTCDate(n.getUTCDate() - 7 * a),
            n
        }
        var nn = 36e5
          , an = 6e4
          , on = 1e3
          , sn = /^(1[0-2]|0?\d)/
          , un = /^(3[0-1]|[0-2]?\d)/
          , ln = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/
          , cn = /^(5[0-3]|[0-4]?\d)/
          , dn = /^(2[0-3]|[0-1]?\d)/
          , fn = /^(2[0-4]|[0-1]?\d)/
          , hn = /^(1[0-1]|0?\d)/
          , vn = /^(1[0-2]|0?\d)/
          , mn = /^[0-5]?\d/
          , pn = /^[0-5]?\d/
          , gn = /^\d/
          , yn = /^\d{1,2}/
          , bn = /^\d{1,3}/
          , wn = /^\d{1,4}/
          , _n = /^-?\d+/
          , xn = /^-?\d/
          , $n = /^-?\d{1,2}/
          , Tn = /^-?\d{1,3}/
          , Cn = /^-?\d{1,4}/
          , Dn = /^([+-])(\d{2})(\d{2})?|Z/
          , An = /^([+-])(\d{2})(\d{2})|Z/
          , Nn = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/
          , In = /^([+-])(\d{2}):(\d{2})|Z/
          , On = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
        function Mn(e, t, r) {
            var n = t.match(e);
            if (!n)
                return null;
            var i = parseInt(n[0], 10);
            return {
                value: r ? r(i) : i,
                rest: t.slice(n[0].length)
            }
        }
        function En(e, t) {
            var r = t.match(e);
            if (!r)
                return null;
            if ("Z" === r[0])
                return {
                    value: 0,
                    rest: t.slice(1)
                };
            var n = "+" === r[1] ? 1 : -1
              , i = r[2] ? parseInt(r[2], 10) : 0
              , a = r[3] ? parseInt(r[3], 10) : 0
              , o = r[5] ? parseInt(r[5], 10) : 0;
            return {
                value: n * (i * nn + a * an + o * on),
                rest: t.slice(r[0].length)
            }
        }
        function Fn(e, t) {
            return Mn(_n, e, t)
        }
        function kn(e, t, r) {
            switch (e) {
            case 1:
                return Mn(gn, t, r);
            case 2:
                return Mn(yn, t, r);
            case 3:
                return Mn(bn, t, r);
            case 4:
                return Mn(wn, t, r);
            default:
                return Mn(new RegExp("^\\d{1," + e + "}"), t, r)
            }
        }
        function Sn(e, t, r) {
            switch (e) {
            case 1:
                return Mn(xn, t, r);
            case 2:
                return Mn($n, t, r);
            case 3:
                return Mn(Tn, t, r);
            case 4:
                return Mn(Cn, t, r);
            default:
                return Mn(new RegExp("^-?\\d{1," + e + "}"), t, r)
            }
        }
        function qn(e) {
            switch (e) {
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
        function Pn(e, t) {
            var r = t > 0, n = r ? t : 1 - t, i;
            if (n <= 50)
                i = e || 100;
            else {
                var a = n + 50, o, s;
                i = e + 100 * Math.floor(a / 100) - (e >= a % 100 ? 100 : 0)
            }
            return r ? i : 1 - i
        }
        var jn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
          , Un = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        function Rn(e) {
            return e % 400 == 0 || e % 4 == 0 && e % 100 != 0
        }
        var Hn = {
            G: {
                priority: 140,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "G":
                    case "GG":
                    case "GGG":
                        return r.era(e, {
                            width: "abbreviated"
                        }) || r.era(e, {
                            width: "narrow"
                        });
                    case "GGGGG":
                        return r.era(e, {
                            width: "narrow"
                        });
                    default:
                        return r.era(e, {
                            width: "wide"
                        }) || r.era(e, {
                            width: "abbreviated"
                        }) || r.era(e, {
                            width: "narrow"
                        })
                    }
                },
                set: function(e, t, r) {
                    return e.setUTCFullYear(1 === t ? 10 : -9, 0, 1),
                    e.setUTCHours(0, 0, 0, 0),
                    e
                }
            },
            y: {
                priority: 130,
                parse: function(e, t, r, n) {
                    var i = function(e) {
                        return {
                            year: e,
                            isTwoDigitYear: "yy" === t
                        }
                    };
                    switch (t) {
                    case "y":
                        return kn(4, e, i);
                    case "yo":
                        return r.ordinalNumber(e, {
                            unit: "year",
                            valueCallback: i
                        });
                    default:
                        return kn(t.length, e, i)
                    }
                },
                validate: function(e, t, r) {
                    return t.isTwoDigitYear || t.year > 0
                },
                set: function(e, t, r) {
                    var n = br(e, r);
                    if (t.isTwoDigitYear) {
                        var i = Pn(t.year, n);
                        return e.setUTCFullYear(i, 0, 1),
                        e.setUTCHours(0, 0, 0, 0),
                        e
                    }
                    var a = n > 0 ? t.year : 1 - t.year;
                    return e.setUTCFullYear(a, 0, 1),
                    e.setUTCHours(0, 0, 0, 0),
                    e
                }
            },
            Y: {
                priority: 130,
                parse: function(e, t, r, n) {
                    var i = function(e) {
                        return {
                            year: e,
                            isTwoDigitYear: "YY" === t
                        }
                    };
                    switch (t) {
                    case "Y":
                        return kn(4, e, i);
                    case "Yo":
                        return r.ordinalNumber(e, {
                            unit: "year",
                            valueCallback: i
                        });
                    default:
                        return kn(t.length, e, i)
                    }
                },
                validate: function(e, t, r) {
                    return t.isTwoDigitYear || t.year > 0
                },
                set: function(e, t, r) {
                    var n = e.getUTCFullYear();
                    if (t.isTwoDigitYear) {
                        var i = Pn(t.year, n);
                        return e.setUTCFullYear(i, 0, r.firstWeekContainsDate),
                        e.setUTCHours(0, 0, 0, 0),
                        yr(e, r)
                    }
                    var a = n > 0 ? t.year : 1 - t.year;
                    return e.setUTCFullYear(a, 0, r.firstWeekContainsDate),
                    e.setUTCHours(0, 0, 0, 0),
                    yr(e, r)
                }
            },
            R: {
                priority: 130,
                parse: function(e, t, r, n) {
                    return Sn("R" === t ? 4 : t.length, e)
                },
                set: function(e, t, r) {
                    var n = new Date(0);
                    return n.setUTCFullYear(t, 0, 4),
                    n.setUTCHours(0, 0, 0, 0),
                    hr(n)
                }
            },
            u: {
                priority: 130,
                parse: function(e, t, r, n) {
                    return Sn("u" === t ? 4 : t.length, e)
                },
                set: function(e, t, r) {
                    return e.setUTCFullYear(t, 0, 1),
                    e.setUTCHours(0, 0, 0, 0),
                    e
                }
            },
            Q: {
                priority: 120,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "Q":
                    case "QQ":
                        return kn(t.length, e);
                    case "Qo":
                        return r.ordinalNumber(e, {
                            unit: "quarter"
                        });
                    case "QQQ":
                        return r.quarter(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.quarter(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "QQQQQ":
                        return r.quarter(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    default:
                        return r.quarter(e, {
                            width: "wide",
                            context: "formatting"
                        }) || r.quarter(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.quarter(e, {
                            width: "narrow",
                            context: "formatting"
                        })
                    }
                },
                validate: function(e, t, r) {
                    return t >= 1 && t <= 4
                },
                set: function(e, t, r) {
                    return e.setUTCMonth(3 * (t - 1), 1),
                    e.setUTCHours(0, 0, 0, 0),
                    e
                }
            },
            q: {
                priority: 120,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "q":
                    case "qq":
                        return kn(t.length, e);
                    case "qo":
                        return r.ordinalNumber(e, {
                            unit: "quarter"
                        });
                    case "qqq":
                        return r.quarter(e, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || r.quarter(e, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "qqqqq":
                        return r.quarter(e, {
                            width: "narrow",
                            context: "standalone"
                        });
                    default:
                        return r.quarter(e, {
                            width: "wide",
                            context: "standalone"
                        }) || r.quarter(e, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || r.quarter(e, {
                            width: "narrow",
                            context: "standalone"
                        })
                    }
                },
                validate: function(e, t, r) {
                    return t >= 1 && t <= 4
                },
                set: function(e, t, r) {
                    return e.setUTCMonth(3 * (t - 1), 1),
                    e.setUTCHours(0, 0, 0, 0),
                    e
                }
            },
            M: {
                priority: 110,
                parse: function(e, t, r, n) {
                    var i = function(e) {
                        return e - 1
                    };
                    switch (t) {
                    case "M":
                        return Mn(sn, e, i);
                    case "MM":
                        return kn(2, e, i);
                    case "Mo":
                        return r.ordinalNumber(e, {
                            unit: "month",
                            valueCallback: i
                        });
                    case "MMM":
                        return r.month(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.month(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "MMMMM":
                        return r.month(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    default:
                        return r.month(e, {
                            width: "wide",
                            context: "formatting"
                        }) || r.month(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.month(e, {
                            width: "narrow",
                            context: "formatting"
                        })
                    }
                },
                validate: function(e, t, r) {
                    return t >= 0 && t <= 11
                },
                set: function(e, t, r) {
                    return e.setUTCMonth(t, 1),
                    e.setUTCHours(0, 0, 0, 0),
                    e
                }
            },
            L: {
                priority: 110,
                parse: function(e, t, r, n) {
                    var i = function(e) {
                        return e - 1
                    };
                    switch (t) {
                    case "L":
                        return Mn(sn, e, i);
                    case "LL":
                        return kn(2, e, i);
                    case "Lo":
                        return r.ordinalNumber(e, {
                            unit: "month",
                            valueCallback: i
                        });
                    case "LLL":
                        return r.month(e, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || r.month(e, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "LLLLL":
                        return r.month(e, {
                            width: "narrow",
                            context: "standalone"
                        });
                    default:
                        return r.month(e, {
                            width: "wide",
                            context: "standalone"
                        }) || r.month(e, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || r.month(e, {
                            width: "narrow",
                            context: "standalone"
                        })
                    }
                },
                validate: function(e, t, r) {
                    return t >= 0 && t <= 11
                },
                set: function(e, t, r) {
                    return e.setUTCMonth(t, 1),
                    e.setUTCHours(0, 0, 0, 0),
                    e
                }
            },
            w: {
                priority: 100,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "w":
                        return Mn(cn, e);
                    case "wo":
                        return r.ordinalNumber(e, {
                            unit: "week"
                        });
                    default:
                        return kn(t.length, e)
                    }
                },
                validate: function(e, t, r) {
                    return t >= 1 && t <= 53
                },
                set: function(e, t, r) {
                    return yr(en(e, t, r), r)
                }
            },
            I: {
                priority: 100,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "I":
                        return Mn(cn, e);
                    case "Io":
                        return r.ordinalNumber(e, {
                            unit: "week"
                        });
                    default:
                        return kn(t.length, e)
                    }
                },
                validate: function(e, t, r) {
                    return t >= 1 && t <= 53
                },
                set: function(e, t, r) {
                    return hr(rn(e, t, r), r)
                }
            },
            d: {
                priority: 90,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "d":
                        return Mn(un, e);
                    case "do":
                        return r.ordinalNumber(e, {
                            unit: "date"
                        });
                    default:
                        return kn(t.length, e)
                    }
                },
                validate: function(e, t, r) {
                    var n, i = Rn(e.getUTCFullYear()), a = e.getUTCMonth();
                    return i ? t >= 1 && t <= Un[a] : t >= 1 && t <= jn[a]
                },
                set: function(e, t, r) {
                    return e.setUTCDate(t),
                    e.setUTCHours(0, 0, 0, 0),
                    e
                }
            },
            D: {
                priority: 90,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "D":
                    case "DD":
                        return Mn(ln, e);
                    case "Do":
                        return r.ordinalNumber(e, {
                            unit: "date"
                        });
                    default:
                        return kn(t.length, e)
                    }
                },
                validate: function(e, t, r) {
                    var n, i;
                    return Rn(e.getUTCFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365
                },
                set: function(e, t, r) {
                    return e.setUTCMonth(0, t),
                    e.setUTCHours(0, 0, 0, 0),
                    e
                }
            },
            E: {
                priority: 90,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "E":
                    case "EE":
                    case "EEE":
                        return r.day(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.day(e, {
                            width: "short",
                            context: "formatting"
                        }) || r.day(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "EEEEE":
                        return r.day(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "EEEEEE":
                        return r.day(e, {
                            width: "short",
                            context: "formatting"
                        }) || r.day(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    default:
                        return r.day(e, {
                            width: "wide",
                            context: "formatting"
                        }) || r.day(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.day(e, {
                            width: "short",
                            context: "formatting"
                        }) || r.day(e, {
                            width: "narrow",
                            context: "formatting"
                        })
                    }
                },
                validate: function(e, t, r) {
                    return t >= 0 && t <= 6
                },
                set: function(e, t, r) {
                    return (e = Jr(e, t, r)).setUTCHours(0, 0, 0, 0),
                    e
                }
            },
            e: {
                priority: 90,
                parse: function(e, t, r, n) {
                    var i = function(e) {
                        var t = 7 * Math.floor((e - 1) / 7);
                        return (e + n.weekStartsOn + 6) % 7 + t
                    };
                    switch (t) {
                    case "e":
                    case "ee":
                        return kn(t.length, e, i);
                    case "eo":
                        return r.ordinalNumber(e, {
                            unit: "day",
                            valueCallback: i
                        });
                    case "eee":
                        return r.day(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.day(e, {
                            width: "short",
                            context: "formatting"
                        }) || r.day(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "eeeee":
                        return r.day(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "eeeeee":
                        return r.day(e, {
                            width: "short",
                            context: "formatting"
                        }) || r.day(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    default:
                        return r.day(e, {
                            width: "wide",
                            context: "formatting"
                        }) || r.day(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.day(e, {
                            width: "short",
                            context: "formatting"
                        }) || r.day(e, {
                            width: "narrow",
                            context: "formatting"
                        })
                    }
                },
                validate: function(e, t, r) {
                    return t >= 0 && t <= 6
                },
                set: function(e, t, r) {
                    return (e = Jr(e, t, r)).setUTCHours(0, 0, 0, 0),
                    e
                }
            },
            c: {
                priority: 90,
                parse: function(e, t, r, n) {
                    var i = function(e) {
                        var t = 7 * Math.floor((e - 1) / 7);
                        return (e + n.weekStartsOn + 6) % 7 + t
                    };
                    switch (t) {
                    case "c":
                    case "cc":
                        return kn(t.length, e, i);
                    case "co":
                        return r.ordinalNumber(e, {
                            unit: "day",
                            valueCallback: i
                        });
                    case "ccc":
                        return r.day(e, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || r.day(e, {
                            width: "short",
                            context: "standalone"
                        }) || r.day(e, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "ccccc":
                        return r.day(e, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "cccccc":
                        return r.day(e, {
                            width: "short",
                            context: "standalone"
                        }) || r.day(e, {
                            width: "narrow",
                            context: "standalone"
                        });
                    default:
                        return r.day(e, {
                            width: "wide",
                            context: "standalone"
                        }) || r.day(e, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || r.day(e, {
                            width: "short",
                            context: "standalone"
                        }) || r.day(e, {
                            width: "narrow",
                            context: "standalone"
                        })
                    }
                },
                validate: function(e, t, r) {
                    return t >= 0 && t <= 6
                },
                set: function(e, t, r) {
                    return (e = Jr(e, t, r)).setUTCHours(0, 0, 0, 0),
                    e
                }
            },
            i: {
                priority: 90,
                parse: function(e, t, r, n) {
                    var i = function(e) {
                        return 0 === e ? 7 : e
                    };
                    switch (t) {
                    case "i":
                    case "ii":
                        return kn(t.length, e);
                    case "io":
                        return r.ordinalNumber(e, {
                            unit: "day"
                        });
                    case "iii":
                        return r.day(e, {
                            width: "abbreviated",
                            context: "formatting",
                            valueCallback: i
                        }) || r.day(e, {
                            width: "short",
                            context: "formatting",
                            valueCallback: i
                        }) || r.day(e, {
                            width: "narrow",
                            context: "formatting",
                            valueCallback: i
                        });
                    case "iiiii":
                        return r.day(e, {
                            width: "narrow",
                            context: "formatting",
                            valueCallback: i
                        });
                    case "iiiiii":
                        return r.day(e, {
                            width: "short",
                            context: "formatting",
                            valueCallback: i
                        }) || r.day(e, {
                            width: "narrow",
                            context: "formatting",
                            valueCallback: i
                        });
                    default:
                        return r.day(e, {
                            width: "wide",
                            context: "formatting",
                            valueCallback: i
                        }) || r.day(e, {
                            width: "abbreviated",
                            context: "formatting",
                            valueCallback: i
                        }) || r.day(e, {
                            width: "short",
                            context: "formatting",
                            valueCallback: i
                        }) || r.day(e, {
                            width: "narrow",
                            context: "formatting",
                            valueCallback: i
                        })
                    }
                },
                validate: function(e, t, r) {
                    return t >= 1 && t <= 7
                },
                set: function(e, t, r) {
                    return (e = tn(e, t, r)).setUTCHours(0, 0, 0, 0),
                    e
                }
            },
            a: {
                priority: 80,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "a":
                    case "aa":
                    case "aaa":
                        return r.dayPeriod(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.dayPeriod(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "aaaaa":
                        return r.dayPeriod(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    default:
                        return r.dayPeriod(e, {
                            width: "wide",
                            context: "formatting"
                        }) || r.dayPeriod(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.dayPeriod(e, {
                            width: "narrow",
                            context: "formatting"
                        })
                    }
                },
                set: function(e, t, r) {
                    return e.setUTCHours(qn(t), 0, 0, 0),
                    e
                }
            },
            b: {
                priority: 80,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "b":
                    case "bb":
                    case "bbb":
                        return r.dayPeriod(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.dayPeriod(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "bbbbb":
                        return r.dayPeriod(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    default:
                        return r.dayPeriod(e, {
                            width: "wide",
                            context: "formatting"
                        }) || r.dayPeriod(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.dayPeriod(e, {
                            width: "narrow",
                            context: "formatting"
                        })
                    }
                },
                set: function(e, t, r) {
                    return e.setUTCHours(qn(t), 0, 0, 0),
                    e
                }
            },
            B: {
                priority: 80,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "B":
                    case "BB":
                    case "BBB":
                        return r.dayPeriod(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.dayPeriod(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "BBBBB":
                        return r.dayPeriod(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    default:
                        return r.dayPeriod(e, {
                            width: "wide",
                            context: "formatting"
                        }) || r.dayPeriod(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || r.dayPeriod(e, {
                            width: "narrow",
                            context: "formatting"
                        })
                    }
                },
                set: function(e, t, r) {
                    return e.setUTCHours(qn(t), 0, 0, 0),
                    e
                }
            },
            h: {
                priority: 70,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "h":
                        return Mn(vn, e);
                    case "ho":
                        return r.ordinalNumber(e, {
                            unit: "hour"
                        });
                    default:
                        return kn(t.length, e)
                    }
                },
                validate: function(e, t, r) {
                    return t >= 1 && t <= 12
                },
                set: function(e, t, r) {
                    var n = e.getUTCHours() >= 12;
                    return n && t < 12 ? e.setUTCHours(t + 12, 0, 0, 0) : n || 12 !== t ? e.setUTCHours(t, 0, 0, 0) : e.setUTCHours(0, 0, 0, 0),
                    e
                }
            },
            H: {
                priority: 70,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "H":
                        return Mn(dn, e);
                    case "Ho":
                        return r.ordinalNumber(e, {
                            unit: "hour"
                        });
                    default:
                        return kn(t.length, e)
                    }
                },
                validate: function(e, t, r) {
                    return t >= 0 && t <= 23
                },
                set: function(e, t, r) {
                    return e.setUTCHours(t, 0, 0, 0),
                    e
                }
            },
            K: {
                priority: 70,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "K":
                        return Mn(hn, e);
                    case "Ko":
                        return r.ordinalNumber(e, {
                            unit: "hour"
                        });
                    default:
                        return kn(t.length, e)
                    }
                },
                validate: function(e, t, r) {
                    return t >= 0 && t <= 11
                },
                set: function(e, t, r) {
                    var n;
                    return e.getUTCHours() >= 12 && t < 12 ? e.setUTCHours(t + 12, 0, 0, 0) : e.setUTCHours(t, 0, 0, 0),
                    e
                }
            },
            k: {
                priority: 70,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "k":
                        return Mn(fn, e);
                    case "ko":
                        return r.ordinalNumber(e, {
                            unit: "hour"
                        });
                    default:
                        return kn(t.length, e)
                    }
                },
                validate: function(e, t, r) {
                    return t >= 1 && t <= 24
                },
                set: function(e, t, r) {
                    var n = t <= 24 ? t % 24 : t;
                    return e.setUTCHours(n, 0, 0, 0),
                    e
                }
            },
            m: {
                priority: 60,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "m":
                        return Mn(mn, e);
                    case "mo":
                        return r.ordinalNumber(e, {
                            unit: "minute"
                        });
                    default:
                        return kn(t.length, e)
                    }
                },
                validate: function(e, t, r) {
                    return t >= 0 && t <= 59
                },
                set: function(e, t, r) {
                    return e.setUTCMinutes(t, 0, 0),
                    e
                }
            },
            s: {
                priority: 50,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "s":
                        return Mn(pn, e);
                    case "so":
                        return r.ordinalNumber(e, {
                            unit: "second"
                        });
                    default:
                        return kn(t.length, e)
                    }
                },
                validate: function(e, t, r) {
                    return t >= 0 && t <= 59
                },
                set: function(e, t, r) {
                    return e.setUTCSeconds(t, 0),
                    e
                }
            },
            S: {
                priority: 40,
                parse: function(e, t, r, n) {
                    var i = function(e) {
                        return Math.floor(e * Math.pow(10, 3 - t.length))
                    };
                    return kn(t.length, e, i)
                },
                set: function(e, t, r) {
                    return e.setUTCMilliseconds(t),
                    e
                }
            },
            X: {
                priority: 20,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "X":
                        return En(Dn, e);
                    case "XX":
                        return En(An, e);
                    case "XXXX":
                        return En(Nn, e);
                    case "XXXXX":
                        return En(On, e);
                    default:
                        return En(In, e)
                    }
                },
                set: function(e, t, r) {
                    return new Date(e.getTime() - t)
                }
            },
            x: {
                priority: 20,
                parse: function(e, t, r, n) {
                    switch (t) {
                    case "x":
                        return En(Dn, e);
                    case "xx":
                        return En(An, e);
                    case "xxxx":
                        return En(Nn, e);
                    case "xxxxx":
                        return En(On, e);
                    default:
                        return En(In, e)
                    }
                },
                set: function(e, t, r) {
                    return new Date(e.getTime() - t)
                }
            },
            t: {
                priority: 10,
                parse: function(e, t, r, n) {
                    return Fn(e)
                },
                set: function(e, t, r) {
                    return new Date(1e3 * t)
                }
            },
            T: {
                priority: 10,
                parse: function(e, t, r, n) {
                    return Fn(e)
                },
                set: function(e, t, r) {
                    return new Date(t)
                }
            }
        }
          , Yn = 20
          , Zn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
          , Ln = /^'(.*?)'?$/
          , Vn = /''/g
          , zn = /\S/;
        function Wn(e, t, r, n) {
            if (arguments.length < 3)
                throw new TypeError("3 arguments required, but only " + arguments.length + " present");
            var i = String(e)
              , a = String(t)
              , o = n || {}
              , s = o.locale || cr;
            if (!s.match)
                throw new RangeError("locale must contain match property");
            var u = s.options && s.options.firstWeekContainsDate
              , l = null == u ? 1 : ot(u)
              , c = null == o.firstWeekContainsDate ? l : ot(o.firstWeekContainsDate);
            if (!(c >= 1 && c <= 7))
                throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
            var d = s.options && s.options.weekStartsOn
              , f = null == d ? 0 : ot(d)
              , h = null == o.weekStartsOn ? f : ot(o.weekStartsOn);
            if (!(h >= 0 && h <= 6))
                throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            if ("" === a)
                return "" === i ? ht(r, o) : new Date(NaN);
            var v = {
                firstWeekContainsDate: c,
                weekStartsOn: h,
                locale: s
            }, m = [{
                priority: Yn,
                set: Bn,
                index: 0
            }], p, g = a.match(Zn);
            for (p = 0; p < g.length; p++) {
                var y = g[p];
                !o.awareOfUnicodeTokens && Yr(y) && Zr(y);
                var b = y[0]
                  , w = Hn[b];
                if (w) {
                    var _ = w.parse(i, y, s.match, v);
                    if (!_)
                        return new Date(NaN);
                    m.push({
                        priority: w.priority,
                        set: w.set,
                        validate: w.validate,
                        value: _.value,
                        index: m.length
                    }),
                    i = _.rest
                } else {
                    if ("''" === y ? y = "'" : "'" === b && (y = Gn(y)),
                    0 !== i.indexOf(y))
                        return new Date(NaN);
                    i = i.slice(y.length)
                }
            }
            if (i.length > 0 && zn.test(i))
                return new Date(NaN);
            var x = m.map((function(e) {
                return e.priority
            }
            )).sort((function(e, t) {
                return t - e
            }
            )).filter((function(e, t, r) {
                return r.indexOf(e) === t
            }
            )).map((function(e) {
                return m.filter((function(t) {
                    return t.priority === e
                }
                )).reverse()
            }
            )).map((function(e) {
                return e[0]
            }
            ))
              , $ = ht(r, o);
            if (isNaN($))
                return new Date(NaN);
            var T = Rr($, ut($));
            for (p = 0; p < x.length; p++) {
                var C = x[p];
                if (C.validate && !C.validate(T, C.value, v))
                    return new Date(NaN);
                T = C.set(T, C.value, v)
            }
            return T
        }
        function Bn(e) {
            var t = new Date(0);
            return t.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
            t.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()),
            t
        }
        function Gn(e) {
            return e.match(Ln)[1].replace(Vn, "'")
        }
        function Qn(e, t) {
            if ("string" != typeof e)
                return It(e) ? e : null;
            var r = Wn(e, t, new Date);
            return It(r) && Br(r, t) === e ? r : null
        }
        var Xn = function(e, t) {
            void 0 === t && (t = {});
            var r = t.targetValue
              , n = t.inclusion;
            void 0 === n && (n = !1);
            var i = t.format;
            return void 0 === i && (i = n,
            n = !1),
            e = Qn(e, i),
            r = Qn(r, i),
            !(!e || !r) && (Qr(e, r) || n && Kr(e, r))
        }, Kn, Jn, ei = {
            validate: Xn,
            options: {
                hasTarget: !0,
                isDate: !0
            },
            paramNames: ["targetValue", "inclusion", "format"]
        }, ti = {
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
        }, ri = {
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
        }, ni = {
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
        }, ii = {
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
        }, ai = function(e, t) {
            void 0 === t && (t = {});
            var r = t.locale;
            return Array.isArray(e) ? e.every((function(e) {
                return ai(e, [r])
            }
            )) : r ? (ti[r] || ti.en).test(e) : Object.keys(ti).some((function(t) {
                return ti[t].test(e)
            }
            ))
        }, oi, si = {
            validate: ai,
            paramNames: ["locale"]
        }, ui = function(e, t) {
            void 0 === t && (t = {});
            var r = t.locale;
            return Array.isArray(e) ? e.every((function(e) {
                return ui(e, [r])
            }
            )) : r ? (ii[r] || ii.en).test(e) : Object.keys(ii).some((function(t) {
                return ii[t].test(e)
            }
            ))
        }, li, ci = {
            validate: ui,
            paramNames: ["locale"]
        }, di = function(e, t) {
            void 0 === t && (t = {});
            var r = t.locale;
            return Array.isArray(e) ? e.every((function(e) {
                return di(e, [r])
            }
            )) : r ? (ni[r] || ni.en).test(e) : Object.keys(ni).some((function(t) {
                return ni[t].test(e)
            }
            ))
        }, fi, hi = {
            validate: di,
            paramNames: ["locale"]
        }, vi = function(e, t) {
            void 0 === t && (t = {});
            var r = t.locale;
            return Array.isArray(e) ? e.every((function(e) {
                return vi(e, [r])
            }
            )) : r ? (ri[r] || ri.en).test(e) : Object.keys(ri).some((function(t) {
                return ri[t].test(e)
            }
            ))
        }, mi, pi = {
            validate: vi,
            paramNames: ["locale"]
        }, gi = function(e, t) {
            void 0 === t && (t = {});
            var r = t.targetValue
              , n = t.inclusion;
            void 0 === n && (n = !1);
            var i = t.format;
            return void 0 === i && (i = n,
            n = !1),
            e = Qn(e, i),
            r = Qn(r, i),
            !(!e || !r) && (Xr(e, r) || n && Kr(e, r))
        }, yi, bi, wi = {
            validate: gi,
            options: {
                hasTarget: !0,
                isDate: !0
            },
            paramNames: ["targetValue", "inclusion", "format"]
        }, _i = function(e, t) {
            void 0 === t && (t = {});
            var r = t.min
              , n = t.max;
            return Array.isArray(e) ? e.every((function(e) {
                return _i(e, {
                    min: r,
                    max: n
                })
            }
            )) : Number(r) <= e && Number(n) >= e
        }, xi, $i = {
            validate: _i,
            paramNames: ["min", "max"]
        }, Ti, Ci, Di, Ai = {
            validate: function(e, t) {
                var r = t.targetValue;
                return String(e) === String(r)
            },
            options: {
                hasTarget: !0
            },
            paramNames: ["targetValue"]
        };
        function Ni(e) {
            return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
        }
        function Ii(e, t) {
            return e(t = {
                exports: {}
            }, t.exports),
            t.exports
        }
        var Oi = Ii((function(e, t) {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                }
                : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                r(e)
            }
            function n(e) {
                var t, n;
                if (!("string" == typeof e || e instanceof String))
                    throw n = null === e ? "null" : "object" === (n = r(e)) && e.constructor && e.constructor.hasOwnProperty("name") ? e.constructor.name : "a ".concat(n),
                    new TypeError("Expected string but received ".concat(n, "."))
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = n,
            e.exports = t.default,
            e.exports.default = t.default
        }
        ));
        Ni(Oi);
        var Mi = Ii((function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = a;
            var r = n(Oi);
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
            function a(e) {
                (0,
                r.default)(e);
                var t = e.replace(/[- ]+/g, "");
                if (!i.test(t))
                    return !1;
                for (var n = 0, a, o, s, u = t.length - 1; u >= 0; u--)
                    a = t.substring(u, u + 1),
                    o = parseInt(a, 10),
                    n += s && (o *= 2) >= 10 ? o % 10 + 1 : o,
                    s = !s;
                return !(n % 10 != 0 || !t)
            }
            e.exports = t.default,
            e.exports.default = t.default
        }
        )), Ei = Ni(Mi), Fi, ki = {
            validate: function(e) {
                return Ei(String(e))
            }
        }, Si = function(e, t) {
            void 0 === t && (t = {});
            var r = t.min
              , n = t.max
              , i = t.inclusivity;
            void 0 === i && (i = "()");
            var a = t.format;
            void 0 === a && (a = i,
            i = "()");
            var o = Qn(String(r), a)
              , s = Qn(String(n), a)
              , u = Qn(String(e), a);
            return !!(o && s && u) && ("()" === i ? Qr(u, o) && Xr(u, s) : "(]" === i ? Qr(u, o) && (Kr(u, s) || Xr(u, s)) : "[)" === i ? Xr(u, s) && (Kr(u, o) || Qr(u, o)) : Kr(u, s) || Kr(u, o) || Xr(u, s) && Qr(u, o))
        }, qi, Pi, ji = {
            validate: Si,
            options: {
                isDate: !0
            },
            paramNames: ["min", "max", "inclusivity", "format"]
        }, Ui, Ri, Hi, Yi = {
            validate: function(e, t) {
                var r;
                return !!Qn(e, t.format)
            },
            options: {
                isDate: !0
            },
            paramNames: ["format"]
        }, Zi = function(e, t) {
            void 0 === t && (t = {});
            var r = t.decimals;
            void 0 === r && (r = "*");
            var n = t.separator, i, a;
            if (void 0 === n && (n = "."),
            u(e) || "" === e)
                return !1;
            if (Array.isArray(e))
                return e.every((function(e) {
                    return Zi(e, {
                        decimals: r,
                        separator: n
                    })
                }
                ));
            if (0 === Number(r))
                return /^-?\d*$/.test(e);
            if (!new RegExp("^[-+]?\\d*(\\" + n + "\\d" + ("*" === r ? "+" : "{1," + r + "}") + ")?([eE]{1}[-]?\\d+)?$").test(e))
                return !1;
            var o = parseFloat(e);
            return o == o
        }, Li, Vi = {
            validate: Zi,
            paramNames: ["decimals", "separator"]
        }, zi = function(e, t) {
            var r = t[0];
            if (Array.isArray(e))
                return e.every((function(e) {
                    return zi(e, [r])
                }
                ));
            var n = String(e);
            return /^[0-9]*$/.test(n) && n.length === Number(r)
        }, Wi = {
            validate: zi
        }, Bi = /\.(jpg|svg|jpeg|png|bmp|gif)$/i, Gi = function(e, t, r) {
            var n = window.URL || window.webkitURL;
            return new Promise((function(i) {
                var a = new Image;
                a.onerror = function() {
                    return i({
                        valid: !1
                    })
                }
                ,
                a.onload = function() {
                    return i({
                        valid: a.width === Number(t) && a.height === Number(r)
                    })
                }
                ,
                a.src = n.createObjectURL(e)
            }
            ))
        }, Qi = function(e, t) {
            var r = t[0]
              , n = t[1]
              , i = N(e).filter((function(e) {
                return Bi.test(e.name)
            }
            ));
            return 0 !== i.length && Promise.all(i.map((function(e) {
                return Gi(e, r, n)
            }
            )))
        }, Xi = {
            validate: Qi
        }, Ki = Ii((function(e, t) {
            function r() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                for (var r in t)
                    void 0 === e[r] && (e[r] = t[r]);
                return e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = r,
            e.exports = t.default,
            e.exports.default = t.default
        }
        ));
        Ni(Ki);
        var Ji = Ii((function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = a;
            var r = n(Oi);
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function i(e) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                }
                : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                i(e)
            }
            function a(e, t) {
                var n, a;
                (0,
                r.default)(e),
                "object" === i(t) ? (n = t.min || 0,
                a = t.max) : (n = arguments[1],
                a = arguments[2]);
                var o = encodeURI(e).split(/%..|./).length - 1;
                return o >= n && (void 0 === a || o <= a)
            }
            e.exports = t.default,
            e.exports.default = t.default
        }
        ));
        Ni(Ji);
        var ea = Ii((function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = o;
            var r = i(Oi)
              , n = i(Ki);
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var a = {
                require_tld: !0,
                allow_underscores: !1,
                allow_trailing_dot: !1
            };
            function o(e, t) {
                (0,
                r.default)(e),
                (t = (0,
                n.default)(t, a)).allow_trailing_dot && "." === e[e.length - 1] && (e = e.substring(0, e.length - 1));
                for (var i = e.split("."), o = 0; o < i.length; o++)
                    if (i[o].length > 63)
                        return !1;
                if (t.require_tld) {
                    var s = i.pop();
                    if (!i.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(s))
                        return !1;
                    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(s))
                        return !1
                }
                for (var u, l = 0; l < i.length; l++) {
                    if (u = i[l],
                    t.allow_underscores && (u = u.replace(/_/g, "")),
                    !/^[a-z\u00a1-\uffff0-9-]+$/i.test(u))
                        return !1;
                    if (/[\uff01-\uff5e]/.test(u))
                        return !1;
                    if ("-" === u[0] || "-" === u[u.length - 1])
                        return !1
                }
                return !0
            }
            e.exports = t.default,
            e.exports.default = t.default
        }
        ))
          , ta = Ni(ea)
          , ra = Ii((function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = o;
            var r = n(Oi);
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/
              , a = /^[0-9A-F]{1,4}$/i;
            function o(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n;
                if ((0,
                r.default)(e),
                !(t = String(t)))
                    return o(e, 4) || o(e, 6);
                if ("4" === t)
                    return !!i.test(e) && e.split(".").sort((function(e, t) {
                        return e - t
                    }
                    ))[3] <= 255;
                if ("6" === t) {
                    var s = e.split(":")
                      , u = !1
                      , l = o(s[s.length - 1], 4)
                      , c = l ? 7 : 8;
                    if (s.length > c)
                        return !1;
                    if ("::" === e)
                        return !0;
                    "::" === e.substr(0, 2) ? (s.shift(),
                    s.shift(),
                    u = !0) : "::" === e.substr(e.length - 2) && (s.pop(),
                    s.pop(),
                    u = !0);
                    for (var d = 0; d < s.length; ++d)
                        if ("" === s[d] && d > 0 && d < s.length - 1) {
                            if (u)
                                return !1;
                            u = !0
                        } else if (l && d === s.length - 1)
                            ;
                        else if (!a.test(s[d]))
                            return !1;
                    return u ? s.length >= 1 : s.length === c
                }
                return !1
            }
            e.exports = t.default,
            e.exports.default = t.default
        }
        ))
          , na = Ni(ra)
          , ia = Ii((function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = m;
            var r = s(Oi)
              , n = s(Ki)
              , i = s(Ji)
              , a = s(ea)
              , o = s(ra);
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = {
                allow_display_name: !1,
                require_display_name: !1,
                allow_utf8_local_part: !0,
                require_tld: !0
            }
              , l = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i
              , c = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i
              , d = /^[a-z\d]+$/
              , f = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i
              , h = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i
              , v = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
            function m(e, t) {
                if ((0,
                r.default)(e),
                (t = (0,
                n.default)(t, u)).require_display_name || t.allow_display_name) {
                    var s = e.match(l);
                    if (s)
                        e = s[1];
                    else if (t.require_display_name)
                        return !1
                }
                var m = e.split("@")
                  , p = m.pop()
                  , g = m.join("@")
                  , y = p.toLowerCase();
                if (t.domain_specific_validation && ("gmail.com" === y || "googlemail.com" === y)) {
                    var b = (g = g.toLowerCase()).split("+")[0];
                    if (!(0,
                    i.default)(b.replace(".", ""), {
                        min: 6,
                        max: 30
                    }))
                        return !1;
                    for (var w = b.split("."), _ = 0; _ < w.length; _++)
                        if (!d.test(w[_]))
                            return !1
                }
                if (!(0,
                i.default)(g, {
                    max: 64
                }) || !(0,
                i.default)(p, {
                    max: 254
                }))
                    return !1;
                if (!(0,
                a.default)(p, {
                    require_tld: t.require_tld
                })) {
                    if (!t.allow_ip_domain)
                        return !1;
                    if (!(0,
                    o.default)(p)) {
                        if (!p.startsWith("[") || !p.endsWith("]"))
                            return !1;
                        var x = p.substr(1, p.length - 2);
                        if (0 === x.length || !(0,
                        o.default)(x))
                            return !1
                    }
                }
                if ('"' === g[0])
                    return g = g.slice(1, g.length - 1),
                    t.allow_utf8_local_part ? v.test(g) : f.test(g);
                for (var $ = t.allow_utf8_local_part ? h : c, T = g.split("."), C = 0; C < T.length; C++)
                    if (!$.test(T[C]))
                        return !1;
                return !0
            }
            e.exports = t.default,
            e.exports.default = t.default
        }
        ))
          , aa = Ni(ia);
        function oa(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && -1 === t.indexOf(n) && (r[n] = e[n]);
            return r
        }
        var sa = function(e, t) {
            void 0 === t && (t = {});
            var r = t.multiple;
            void 0 === r && (r = !1);
            var n, i = oa(t, ["multiple"]);
            r && !Array.isArray(e) && (e = String(e).split(",").map((function(e) {
                return e.trim()
            }
            )));
            var a = I({}, i);
            return Array.isArray(e) ? e.every((function(e) {
                return aa(String(e), a)
            }
            )) : aa(String(e), a)
        }, ua = {
            validate: sa
        }, la = function(e, t) {
            return Array.isArray(e) ? e.every((function(e) {
                return la(e, t)
            }
            )) : A(t).some((function(t) {
                return t == e
            }
            ))
        }, ca = {
            validate: la
        }, da = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            return !la.apply(void 0, e)
        }, fa = {
            validate: da
        }, ha = function(e, t) {
            var r = new RegExp(".(" + t.join("|") + ")$","i");
            return N(e).every((function(e) {
                return r.test(e.name)
            }
            ))
        }, va = {
            validate: ha
        }, ma, pa = {
            validate: function(e) {
                return (Array.isArray(e) ? e : [e]).every((function(e) {
                    return /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(e.name)
                }
                ))
            }
        }, ga, ya = {
            validate: function(e) {
                return Array.isArray(e) ? e.every((function(e) {
                    return /^-?[0-9]+$/.test(String(e))
                }
                )) : /^-?[0-9]+$/.test(String(e))
            }
        }, ba = function(e, t) {
            void 0 === t && (t = {});
            var r = t.version;
            return void 0 === r && (r = 4),
            u(e) && (e = ""),
            Array.isArray(e) ? e.every((function(e) {
                return na(e, r)
            }
            )) : na(e, r)
        }, wa, _a = {
            validate: ba,
            paramNames: ["version"]
        }, xa, $a = {
            validate: function(e) {
                return u(e) && (e = ""),
                Array.isArray(e) ? e.every((function(e) {
                    return na(e, "") || ta(e)
                }
                )) : na(e, "") || ta(e)
            }
        }, Ta, Ca = {
            validate: function(e, t) {
                var r;
                return void 0 === t && (t = []),
                e === t[0]
            }
        }, Da, Aa = {
            validate: function(e, t) {
                var r;
                return void 0 === t && (t = []),
                e !== t[0]
            }
        }, Na = function(e, t, r) {
            return void 0 === r ? e.length === t : (r = Number(r),
            e.length >= t && e.length <= r)
        }, Ia = function(e, t) {
            var r = t[0]
              , n = t[1];
            return void 0 === n && (n = void 0),
            !u(e) && (r = Number(r),
            "number" == typeof e && (e = String(e)),
            e.length || (e = A(e)),
            Na(e, r, n))
        }, Oa = {
            validate: Ia
        }, Ma = function(e, t) {
            var r = t[0];
            return u(e) ? r >= 0 : Array.isArray(e) ? e.every((function(e) {
                return Ma(e, [r])
            }
            )) : String(e).length <= r
        }, Ea = {
            validate: Ma
        }, Fa = function(e, t) {
            var r = t[0];
            return !u(e) && "" !== e && (Array.isArray(e) ? e.length > 0 && e.every((function(e) {
                return Fa(e, [r])
            }
            )) : Number(e) <= r)
        }, ka = {
            validate: Fa
        }, Sa = function(e, t) {
            var r = new RegExp(t.join("|").replace("*", ".+") + "$","i");
            return N(e).every((function(e) {
                return r.test(e.type)
            }
            ))
        }, qa = {
            validate: Sa
        }, Pa = function(e, t) {
            var r = t[0];
            return !u(e) && (Array.isArray(e) ? e.every((function(e) {
                return Pa(e, [r])
            }
            )) : String(e).length >= r)
        }, ja = {
            validate: Pa
        }, Ua = function(e, t) {
            var r = t[0];
            return !u(e) && "" !== e && (Array.isArray(e) ? e.length > 0 && e.every((function(e) {
                return Ua(e, [r])
            }
            )) : Number(e) >= r)
        }, Ra = {
            validate: Ua
        }, Ha = /^[٠١٢٣٤٥٦٧٨٩]+$/, Ya = /^[0-9]+$/, Za, La = {
            validate: function(e) {
                var t = function(e) {
                    var t = String(e);
                    return Ya.test(t) || Ha.test(t)
                };
                return Array.isArray(e) ? e.every(t) : t(e)
            }
        }, Va = function(e, t) {
            var r = t.expression;
            return "string" == typeof r && (r = new RegExp(r)),
            Array.isArray(e) ? e.every((function(e) {
                return Va(e, {
                    expression: r
                })
            }
            )) : r.test(String(e))
        }, za, Wa = {
            validate: Va,
            paramNames: ["expression"]
        }, Ba, Ga = {
            validate: function(e, t) {
                void 0 === t && (t = []);
                var r = t[0];
                return void 0 === r && (r = !1),
                !u(e) && !Z(e) && ((!1 !== e || !r) && !!String(e).trim().length)
            }
        }, Qa = function(e, t) {
            void 0 === t && (t = []);
            var r = t[0], n, i = t.slice(1).includes(String(r).trim());
            if (!i)
                return {
                    valid: !0,
                    data: {
                        required: i
                    }
                };
            var a = Z(e) || [!1, null, void 0].includes(e);
            return {
                valid: !(a = a || !String(e).trim().length),
                data: {
                    required: i
                }
            }
        }, Xa, Ka = {
            validate: Qa,
            options: {
                hasTarget: !0,
                computesRequired: !0
            }
        }, Ja = function(e, t) {
            var r = t[0];
            if (isNaN(r))
                return !1;
            var n = 1024 * Number(r);
            return N(e).every((function(e) {
                return e.size <= n
            }
            ))
        }, eo = {
            validate: Ja
        }, to = Ii((function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = d;
            var r = o(Oi)
              , n = o(ea)
              , i = o(ra)
              , a = o(Ki);
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = {
                protocols: ["http", "https", "ftp"],
                require_tld: !0,
                require_protocol: !1,
                require_host: !0,
                require_valid_protocol: !0,
                allow_underscores: !1,
                allow_trailing_dot: !1,
                allow_protocol_relative_urls: !1
            }
              , u = /^\[([^\]]+)\](?::([0-9]+))?$/;
            function l(e) {
                return "[object RegExp]" === Object.prototype.toString.call(e)
            }
            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    if (e === n || l(n) && n.test(e))
                        return !0
                }
                return !1
            }
            function d(e, t) {
                if ((0,
                r.default)(e),
                !e || e.length >= 2083 || /[\s<>]/.test(e))
                    return !1;
                if (0 === e.indexOf("mailto:"))
                    return !1;
                var o, l, d, f, h, v, m, p;
                if (t = (0,
                a.default)(t, s),
                m = e.split("#"),
                e = m.shift(),
                m = e.split("?"),
                e = m.shift(),
                (m = e.split("://")).length > 1) {
                    if (o = m.shift().toLowerCase(),
                    t.require_valid_protocol && -1 === t.protocols.indexOf(o))
                        return !1
                } else {
                    if (t.require_protocol)
                        return !1;
                    if ("//" === e.substr(0, 2)) {
                        if (!t.allow_protocol_relative_urls)
                            return !1;
                        m[0] = e.substr(2)
                    }
                }
                if ("" === (e = m.join("://")))
                    return !1;
                if (m = e.split("/"),
                "" === (e = m.shift()) && !t.require_host)
                    return !0;
                if ((m = e.split("@")).length > 1) {
                    if (t.disallow_auth)
                        return !1;
                    if ((l = m.shift()).indexOf(":") >= 0 && l.split(":").length > 2)
                        return !1
                }
                v = null,
                p = null;
                var g = (f = m.join("@")).match(u);
                return g ? (d = "",
                p = g[1],
                v = g[2] || null) : (d = (m = f.split(":")).shift(),
                m.length && (v = m.join(":"))),
                !(null !== v && (h = parseInt(v, 10),
                !/^[0-9]+$/.test(v) || h <= 0 || h > 65535)) && (!!((0,
                i.default)(d) || (0,
                n.default)(d, t) || p && (0,
                i.default)(p, 6)) && (d = d || p,
                !(t.host_whitelist && !c(d, t.host_whitelist)) && (!t.host_blacklist || !c(d, t.host_blacklist))))
            }
            e.exports = t.default,
            e.exports.default = t.default
        }
        )), ro = Ni(to), no = function(e, t) {
            void 0 === t && (t = {}),
            u(e) && (e = "");
            var r = I({}, t);
            return Array.isArray(e) ? e.every((function(e) {
                return ro(e, r)
            }
            )) : ro(e, r)
        }, io = {
            validate: no
        }, ao = Object.freeze({
            after: ei,
            alpha_dash: ci,
            alpha_num: hi,
            alpha_spaces: pi,
            alpha: si,
            before: wi,
            between: $i,
            confirmed: Ai,
            credit_card: ki,
            date_between: ji,
            date_format: Yi,
            decimal: Vi,
            digits: Wi,
            dimensions: Xi,
            email: ua,
            ext: va,
            image: pa,
            included: ca,
            integer: ya,
            length: Oa,
            ip: _a,
            ip_or_fqdn: $a,
            is_not: Aa,
            is: Ca,
            max: Ea,
            max_value: ka,
            mimes: qa,
            min: ja,
            min_value: Ra,
            excluded: fa,
            numeric: La,
            regex: Wa,
            required: Ga,
            required_if: Ka,
            size: eo,
            url: io
        }), oo = function(e) {
            return Array.isArray(e) ? e.reduce((function(e, t) {
                return Y(t, ".") ? e[t.split(".")[1]] = t : e[t] = t,
                e
            }
            ), {}) : e
        }, so = function(e, t) {
            var r = {
                pristine: function(e, t) {
                    return e && t
                },
                dirty: function(e, t) {
                    return e || t
                },
                touched: function(e, t) {
                    return e || t
                },
                untouched: function(e, t) {
                    return e && t
                },
                valid: function(e, t) {
                    return e && t
                },
                invalid: function(e, t) {
                    return e || t
                },
                pending: function(e, t) {
                    return e || t
                },
                required: function(e, t) {
                    return e || t
                },
                validated: function(e, t) {
                    return e && t
                }
            };
            return Object.keys(r).reduce((function(n, i) {
                return n[i] = r[i](e[i], t[i]),
                n
            }
            ), {})
        }, uo = function(e, t) {
            return void 0 === t && (t = !0),
            Object.keys(e).reduce((function(r, n) {
                if (!r)
                    return r = I({}, e[n]);
                var i = 0 === n.indexOf("$");
                return t && i ? so(uo(e[n]), r) : !t && i ? r : r = so(r, e[n])
            }
            ), null)
        }, lo = function(e) {
            if (!e)
                return function() {
                    return uo(this.$validator.flags)
                }
                ;
            var t = oo(e);
            return Object.keys(t).reduce((function(e, r) {
                var n = t[r];
                return e[r] = function e() {
                    if (this.$validator.flags[n])
                        return this.$validator.flags[n];
                    if ("*" === t[r])
                        return uo(this.$validator.flags, !1);
                    var i;
                    if (n.indexOf(".") <= 0)
                        return {};
                    var a = n.split(".")
                      , o = a[0]
                      , s = a.slice(1);
                    return o = this.$validator.flags["$" + o],
                    "*" === (s = s.join(".")) && o ? uo(o) : o && o[s] ? o[s] : {}
                }
                ,
                e
            }
            ), {})
        }, co = null, fo = 0, ho = {
            $__veeInject: !1,
            inject: {
                $_veeObserver: {
                    from: "$_veeObserver",
                    default: function e() {
                        return this.$vnode.context.$_veeObserver || (this.$vnode.context.$_veeObserver = {
                            refs: {},
                            subscribe: function e(t) {
                                this.refs[t.vid] = t
                            },
                            unsubscribe: function e(t) {
                                delete this.refs[t.vid]
                            }
                        }),
                        this.$vnode.context.$_veeObserver
                    }
                }
            },
            props: {
                vid: {
                    type: [String, Number],
                    default: function() {
                        return "_vee_" + ++fo
                    }
                },
                name: {
                    type: String,
                    default: null
                },
                mode: {
                    type: [String, Function],
                    default: function() {
                        return te().mode
                    }
                },
                events: {
                    type: Array,
                    validate: function() {
                        return !0
                    },
                    default: function() {
                        var e = te().events;
                        return "string" == typeof e ? e.split("|") : e
                    }
                },
                rules: {
                    type: [Object, String],
                    default: null
                },
                immediate: {
                    type: Boolean,
                    default: !1
                },
                persist: {
                    type: Boolean,
                    default: !1
                },
                bails: {
                    type: Boolean,
                    default: function() {
                        return te().fastExit
                    }
                },
                debounce: {
                    type: Number,
                    default: function() {
                        return te().delay || 0
                    }
                },
                tag: {
                    type: String,
                    default: "span"
                },
                slim: {
                    type: Boolean,
                    default: !1
                }
            },
            watch: {
                rules: {
                    deep: !0,
                    handler: function e(t, r) {
                        this._needsValidation = !c(t, r)
                    }
                }
            },
            data: function() {
                return {
                    messages: [],
                    value: void 0,
                    initialized: !1,
                    initialValue: void 0,
                    flags: {
                        untouched: !0,
                        touched: !1,
                        dirty: !1,
                        pristine: !0,
                        valid: null,
                        invalid: null,
                        validated: !1,
                        pending: !1,
                        required: !1,
                        changed: !1
                    },
                    failedRules: {},
                    forceRequired: !1,
                    isDeactivated: !1,
                    id: null
                }
            },
            computed: {
                isValid: function e() {
                    return this.flags.valid
                },
                fieldDeps: function e() {
                    var t = this
                      , r = y(this.rules);
                    return Object.keys(r).filter(pe.isTargetRule).map((function(e) {
                        var n = r[e][0];
                        return To(t, n),
                        n
                    }
                    ))
                },
                normalizedEvents: function e() {
                    var t = this, r, n = go(this).on;
                    return be(n || this.events || []).map((function(e) {
                        return "input" === e ? t._inputEventName : e
                    }
                    ))
                },
                isRequired: function e() {
                    var t = y(this.rules)
                      , r = this.forceRequired
                      , e = t.required || r;
                    return this.flags.required = e,
                    e
                },
                classes: function e() {
                    var t = this
                      , r = te().classNames;
                    return Object.keys(this.flags).reduce((function(e, n) {
                        var i = r && r[n] || n;
                        return u(t.flags[n]) || i && (e[i] = t.flags[n]),
                        e
                    }
                    ), {})
                }
            },
            render: function e(t) {
                var r = this;
                this.registerField();
                var n = vo(this)
                  , i = this.$scopedSlots.default;
                if (!x(i))
                    return t(this.tag, this.$slots.default);
                var a = i(n);
                return ae(a).forEach((function(e) {
                    wo.call(r, e)
                }
                )),
                this.slim ? he(t, a) : t(this.tag, a)
            },
            beforeDestroy: function e() {
                this.$_veeObserver.unsubscribe(this)
            },
            activated: function e() {
                this.$_veeObserver.subscribe(this),
                this.isDeactivated = !1
            },
            deactivated: function e() {
                this.$_veeObserver.unsubscribe(this),
                this.isDeactivated = !0
            },
            methods: {
                setFlags: function e(t) {
                    var r = this;
                    Object.keys(t).forEach((function(e) {
                        r.flags[e] = t[e]
                    }
                    ))
                },
                syncValue: function e(t) {
                    var r = mo(t);
                    this.value = r,
                    this.flags.changed = this.initialValue !== r
                },
                reset: function e() {
                    this.messages = [],
                    this._pendingValidation = null,
                    this.initialValue = this.value;
                    var t = {
                        untouched: !0,
                        touched: !1,
                        dirty: !1,
                        pristine: !0,
                        valid: null,
                        invalid: null,
                        validated: !1,
                        pending: !1,
                        required: !1,
                        changed: !1
                    };
                    this.setFlags(t)
                },
                validate: function e() {
                    for (var t = this, r = [], n = arguments.length; n--; )
                        r[n] = arguments[n];
                    return r.length > 0 && this.syncValue(r[0]),
                    this.validateSilent().then((function(e) {
                        return t.applyResult(e),
                        e
                    }
                    ))
                },
                validateSilent: function e() {
                    var t = this;
                    return this.setFlags({
                        pending: !0
                    }),
                    co.verify(this.value, this.rules, {
                        name: this.name,
                        values: _o(this),
                        bails: this.bails
                    }).then((function(e) {
                        return t.setFlags({
                            pending: !1
                        }),
                        t.isRequired || t.setFlags({
                            valid: e.valid,
                            invalid: !e.valid
                        }),
                        e
                    }
                    ))
                },
                applyResult: function e(t) {
                    var r = t.errors
                      , n = t.failedRules;
                    this.messages = r,
                    this.failedRules = I({}, n),
                    this.setFlags({
                        valid: !r.length,
                        changed: this.value !== this.initialValue,
                        invalid: !!r.length,
                        validated: !0
                    })
                },
                registerField: function e() {
                    co || (co = Me() || new Pe(null,{
                        fastExit: te().fastExit
                    })),
                    xo(this)
                }
            }
        };
        function vo(e) {
            return {
                errors: e.messages,
                flags: e.flags,
                classes: e.classes,
                valid: e.isValid,
                failedRules: e.failedRules,
                reset: function() {
                    return e.reset()
                },
                validate: function() {
                    for (var t = [], r = arguments.length; r--; )
                        t[r] = arguments[r];
                    return e.validate.apply(e, t)
                },
                aria: {
                    "aria-invalid": e.flags.invalid ? "true" : "false",
                    "aria-required": e.isRequired ? "true" : "false"
                }
            }
        }
        function mo(e) {
            return ye(e) ? "file" === e.target.type ? A(e.target.files) : e.target.value : e
        }
        function po(e, t) {
            return !(e._ignoreImmediate || !e.immediate) || (e.value !== t.value || (!!e._needsValidation || !e.initialized && void 0 === t.value))
        }
        function go(e) {
            var t;
            return (x(e.mode) ? e.mode : Be[e.mode])({
                errors: e.messages,
                value: e.value,
                flags: e.flags
            })
        }
        function yo(e) {
            this.initialized || (this.initialValue = e.value);
            var t = po(this, e);
            this._needsValidation = !1,
            this.value = e.value,
            this._ignoreImmediate = !0,
            t && this.validateSilent().then(this.immediate || this.flags.validated ? this.applyResult : function(e) {
                return e
            }
            )
        }
        function bo(e) {
            var t = function(t) {
                e.syncValue(t),
                e.setFlags({
                    dirty: !0,
                    pristine: !1
                })
            }
              , r = function() {
                e.setFlags({
                    touched: !0,
                    untouched: !1
                })
            }
              , n = e.$veeHandler
              , i = go(e);
            return n && e.$veeDebounce === e.debounce || (n = p((function() {
                e.$nextTick((function() {
                    var t = e.validateSilent();
                    e._pendingValidation = t,
                    t.then((function(r) {
                        t === e._pendingValidation && (e.applyResult(r),
                        e._pendingValidation = null)
                    }
                    ))
                }
                ))
            }
            ), i.debounce || e.debounce),
            e.$veeHandler = n,
            e.$veeDebounce = e.debounce),
            {
                onInput: t,
                onBlur: r,
                onValidate: n
            }
        }
        function wo(e) {
            var t = ne(e);
            this._inputEventName = this._inputEventName || de(e, t),
            yo.call(this, t);
            var r = bo(this)
              , n = r.onInput
              , i = r.onBlur
              , a = r.onValidate;
            ce(e, this._inputEventName, n),
            ce(e, "blur", i),
            this.normalizedEvents.forEach((function(t) {
                ce(e, t, a)
            }
            )),
            this.initialized = !0
        }
        function _o(e) {
            var t = e.$_veeObserver.refs;
            return e.fieldDeps.reduce((function(e, r) {
                return t[r] ? (e[r] = t[r].value,
                e) : e
            }
            ), {})
        }
        function xo(e) {
            u(e.id) && e.id === e.vid && (e.id = fo,
            fo++);
            var t = e.id
              , r = e.vid;
            e.isDeactivated || t === r && e.$_veeObserver.refs[t] || (t !== r && e.$_veeObserver.refs[t] === e && e.$_veeObserver.unsubscribe({
                vid: t
            }),
            e.$_veeObserver.subscribe(e),
            e.id = r)
        }
        function $o() {
            return {
                refs: {},
                subscribe: function e(t) {
                    this.refs[t.vid] = t
                },
                unsubscribe: function e(t) {
                    delete this.refs[t.vid]
                }
            }
        }
        function To(e, t, r) {
            void 0 === r && (r = !0);
            var n = e.$_veeObserver.refs;
            if (e._veeWatchers || (e._veeWatchers = {}),
            !n[t] && r)
                return e.$once("hook:mounted", (function() {
                    To(e, t, !1)
                }
                ));
            !x(e._veeWatchers[t]) && n[t] && (e._veeWatchers[t] = n[t].$watch("value", (function() {
                e.flags.validated && (e._needsValidation = !0,
                e.validate())
            }
            )))
        }
        var Co = {
            pristine: "every",
            dirty: "some",
            touched: "some",
            untouched: "every",
            valid: "every",
            invalid: "some",
            pending: "some",
            validated: "every"
        };
        function Do(e, t, r) {
            var n;
            return [e, t][Co[r]]((function(e) {
                return e
            }
            ))
        }
        var Ao = 0
          , No = {
            name: "ValidationObserver",
            provide: function e() {
                return {
                    $_veeObserver: this
                }
            },
            inject: {
                $_veeObserver: {
                    from: "$_veeObserver",
                    default: function e() {
                        return this.$vnode.context.$_veeObserver ? this.$vnode.context.$_veeObserver : null
                    }
                }
            },
            props: {
                tag: {
                    type: String,
                    default: "span"
                },
                slim: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    vid: "obs_" + Ao++,
                    refs: {},
                    observers: [],
                    persistedStore: {}
                }
            },
            computed: {
                ctx: function e() {
                    var t = this
                      , e = {
                        errors: {},
                        validate: function(e) {
                            var r = t.validate(e);
                            return {
                                then: function e(t) {
                                    return r.then((function(e) {
                                        return e && x(t) ? Promise.resolve(t()) : Promise.resolve(e)
                                    }
                                    ))
                                }
                            }
                        },
                        reset: function() {
                            return t.reset()
                        }
                    };
                    return R(this.refs).concat(Object.keys(this.persistedStore).map((function(e) {
                        return {
                            vid: e,
                            flags: t.persistedStore[e].flags,
                            messages: t.persistedStore[e].errors
                        }
                    }
                    )), this.observers).reduce((function(e, t) {
                        return Object.keys(Co).forEach((function(r) {
                            var n = t.flags || t.ctx;
                            e[r] = r in e ? Do(e[r], n[r], r) : n[r]
                        }
                        )),
                        e.errors[t.vid] = t.messages || R(t.ctx.errors).reduce((function(e, t) {
                            return e.concat(t)
                        }
                        ), []),
                        e
                    }
                    ), e)
                }
            },
            created: function e() {
                this.$_veeObserver && this.$_veeObserver.subscribe(this, "observer")
            },
            activated: function e() {
                this.$_veeObserver && this.$_veeObserver.subscribe(this, "observer")
            },
            deactivated: function e() {
                this.$_veeObserver && this.$_veeObserver.unsubscribe(this, "observer")
            },
            beforeDestroy: function e() {
                this.$_veeObserver && this.$_veeObserver.unsubscribe(this, "observer")
            },
            render: function e(t) {
                var r = this.$slots.default || this.$scopedSlots.default || [];
                return x(r) && (r = r(this.ctx)),
                this.slim ? he(t, r) : t(this.tag, {
                    on: this.$listeners,
                    attrs: this.$attrs
                }, r)
            },
            methods: {
                subscribe: function e(t, r) {
                    var n;
                    void 0 === r && (r = "provider"),
                    "observer" !== r ? (this.refs = Object.assign({}, this.refs, ((n = {})[t.vid] = t,
                    n)),
                    t.persist && this.persistedStore[t.vid] && this.restoreProviderState(t)) : this.observers.push(t)
                },
                unsubscribe: function e(t, r) {
                    var n = t.vid;
                    void 0 === r && (r = "provider"),
                    "provider" === r && this.removeProvider(n);
                    var i = F(this.observers, (function(e) {
                        return e.vid === n
                    }
                    ));
                    -1 !== i && this.observers.splice(i, 1)
                },
                validate: function e(t) {
                    void 0 === t && (t = {
                        silent: !1
                    });
                    var r = t.silent;
                    return Promise.all(R(this.refs).map((function(e) {
                        return e[r ? "validateSilent" : "validate"]().then((function(e) {
                            return e.valid
                        }
                        ))
                    }
                    )).concat(this.observers.map((function(e) {
                        return e.validate({
                            silent: r
                        })
                    }
                    )))).then((function(e) {
                        return e.every((function(e) {
                            return e
                        }
                        ))
                    }
                    ))
                },
                reset: function e() {
                    var t = this;
                    return Object.keys(this.persistedStore).forEach((function(e) {
                        t.$delete(t.persistedStore, e)
                    }
                    )),
                    R(this.refs).concat(this.observers).forEach((function(e) {
                        return e.reset()
                    }
                    ))
                },
                restoreProviderState: function e(t) {
                    var r = this.persistedStore[t.vid];
                    t.setFlags(r.flags),
                    t.applyResult(r),
                    this.$delete(this.persistedStore, t.vid)
                },
                removeProvider: function e(t) {
                    var r, n = this.refs[t];
                    n && n.persist && (this.persistedStore = I({}, this.persistedStore, ((r = {})[t] = {
                        flags: n.flags,
                        errors: n.messages,
                        failedRules: n.failedRules
                    },
                    r))),
                    this.$delete(this.refs, t)
                }
            }
        };
        function Io(e, t) {
            void 0 === t && (t = null);
            var r = x(e) ? e.options : e;
            r.$__veeInject = !1;
            var n = {
                name: (r.name || "AnonymousHoc") + "WithValidation",
                props: I({}, ho.props),
                data: ho.data,
                computed: I({}, ho.computed),
                methods: I({}, ho.methods),
                $__veeInject: !1,
                beforeDestroy: ho.beforeDestroy,
                inject: ho.inject
            };
            t || (t = function(e) {
                return e
            }
            );
            var i = r.model && r.model.event || "input";
            return n.render = function(e) {
                var n;
                this.registerField();
                var a = vo(this)
                  , o = I({}, this.$listeners)
                  , s = ne(this.$vnode);
                this._inputEventName = this._inputEventName || de(this.$vnode, s),
                yo.call(this, s);
                var u = bo(this)
                  , l = u.onInput
                  , c = u.onBlur
                  , d = u.onValidate;
                se(o, i, l),
                se(o, "blur", c),
                this.normalizedEvents.forEach((function(e, t) {
                    se(o, e, d)
                }
                ));
                var f, h = (oe(this.$vnode) || {
                    prop: "value"
                }).prop, v = I({}, this.$attrs, ((n = {})[h] = s.value,
                n), t(a));
                return e(r, {
                    attrs: this.$attrs,
                    props: v,
                    on: o
                }, fe(this.$slots, this.$vnode.context))
            }
            ,
            n
        }
        var Oo = "2.2.15";
        Object.keys(ao).forEach((function(e) {
            Pe.extend(e, ao[e].validate, I({}, ao[e].options, {
                paramNames: ao[e].paramNames
            }))
        }
        )),
        Pe.localize({
            en: at
        });
        var Mo = Ke.install;
        Ke.version = Oo,
        Ke.mapFields = lo,
        Ke.ValidationProvider = ho,
        Ke.ValidationObserver = No,
        Ke.withValidation = Io,
        t.Ay = Ke
    }
}]);
