"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[10363], {
    166530: function(e, t, n) {
        function i(e, t, n) {
            if ("undefined" == typeof window || !("IntersectionObserver"in window))
                return;
            const i = t.modifiers || {}
              , s = t.value
              , {handler: o, options: a} = "object" == typeof s ? s : {
                handler: s,
                options: {}
            }
              , l = new IntersectionObserver(( (s=[], a) => {
                var l;
                const c = null === (l = e._observe) || void 0 === l ? void 0 : l[n.context._uid];
                if (!c)
                    return;
                const u = s.some((e => e.isIntersecting));
                !o || i.quiet && !c.init || i.once && !u && !c.init || o(s, a, u),
                u && i.once ? r(e, t, n) : c.init = !0
            }
            ),a);
            e._observe = Object(e._observe),
            e._observe[n.context._uid] = {
                init: !1,
                observer: l
            },
            l.observe(e)
        }
        function r(e, t, n) {
            var i;
            const r = null === (i = e._observe) || void 0 === i ? void 0 : i[n.context._uid];
            r && (r.observer.unobserve(e),
            delete e._observe[n.context._uid])
        }
        const s = {
            inserted: i,
            unbind: r
        };
        t.A = s
    },
    608177: function(e, t, n) {
        function i(e, t, n) {
            const i = t.value
              , r = t.options || {
                passive: !0
            };
            window.addEventListener("resize", i, r),
            e._onResize = Object(e._onResize),
            e._onResize[n.context._uid] = {
                callback: i,
                options: r
            },
            t.modifiers && t.modifiers.quiet || i()
        }
        function r(e, t, n) {
            var i;
            if (!(null === (i = e._onResize) || void 0 === i ? void 0 : i[n.context._uid]))
                return;
            const {callback: r, options: s} = e._onResize[n.context._uid];
            window.removeEventListener("resize", r, s),
            delete e._onResize[n.context._uid]
        }
        const s = {
            inserted: i,
            unbind: r
        };
        t.A = s
    },
    991584: function(e, t, n) {
        n.d(t, {
            A: function() {
                return L
            }
        });
        var i = n(769463);
        const r = 80;
        function s(e, t) {
            e.style.transform = t,
            e.style.webkitTransform = t
        }
        function o(e) {
            return "TouchEvent" === e.constructor.name
        }
        function a(e) {
            return "KeyboardEvent" === e.constructor.name
        }
        const l = (e, t, n={}) => {
            let i = 0
              , r = 0;
            if (!a(e)) {
                const n = t.getBoundingClientRect()
                  , s = o(e) ? e.touches[e.touches.length - 1] : e;
                i = s.clientX - n.left,
                r = s.clientY - n.top
            }
            let s = 0
              , l = .3;
            t._ripple && t._ripple.circle ? (l = .15,
            s = t.clientWidth / 2,
            s = n.center ? s : s + Math.sqrt((i - s) ** 2 + (r - s) ** 2) / 4) : s = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
            const c = (t.clientWidth - 2 * s) / 2 + "px"
              , u = (t.clientHeight - 2 * s) / 2 + "px"
              , d = undefined
              , p = undefined;
            return {
                radius: s,
                scale: l,
                x: n.center ? c : i - s + "px",
                y: n.center ? u : r - s + "px",
                centerX: c,
                centerY: u
            }
        }
          , c = {
            show(e, t, n={}) {
                if (!t._ripple || !t._ripple.enabled)
                    return;
                const i = document.createElement("span")
                  , r = document.createElement("span");
                i.appendChild(r),
                i.className = "v-ripple__container",
                n.class && (i.className += ` ${n.class}`);
                const {radius: o, scale: a, x: c, y: u, centerX: d, centerY: p} = l(e, t, n)
                  , m = 2 * o + "px";
                r.className = "v-ripple__animation",
                r.style.width = m,
                r.style.height = m,
                t.appendChild(i);
                const h = window.getComputedStyle(t);
                h && "static" === h.position && (t.style.position = "relative",
                t.dataset.previousPosition = "static"),
                r.classList.add("v-ripple__animation--enter"),
                r.classList.add("v-ripple__animation--visible"),
                s(r, `translate(${c}, ${u}) scale3d(${a},${a},${a})`),
                r.dataset.activated = String(performance.now()),
                setTimeout(( () => {
                    r.classList.remove("v-ripple__animation--enter"),
                    r.classList.add("v-ripple__animation--in"),
                    s(r, `translate(${d}, ${p}) scale3d(1,1,1)`)
                }
                ), 0)
            },
            hide(e) {
                if (!e || !e._ripple || !e._ripple.enabled)
                    return;
                const t = e.getElementsByClassName("v-ripple__animation");
                if (0 === t.length)
                    return;
                const n = t[t.length - 1];
                if (n.dataset.isHiding)
                    return;
                n.dataset.isHiding = "true";
                const i = performance.now() - Number(n.dataset.activated)
                  , r = Math.max(250 - i, 0);
                setTimeout(( () => {
                    n.classList.remove("v-ripple__animation--in"),
                    n.classList.add("v-ripple__animation--out"),
                    setTimeout(( () => {
                        var t;
                        const i = undefined;
                        1 === e.getElementsByClassName("v-ripple__animation").length && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition,
                        delete e.dataset.previousPosition),
                        (null === (t = n.parentNode) || void 0 === t ? void 0 : t.parentNode) === e && e.removeChild(n.parentNode)
                    }
                    ), 300)
                }
                ), r)
            }
        };
        function u(e) {
            return void 0 === e || !!e
        }
        function d(e) {
            const t = {}
              , n = e.currentTarget;
            if (n && n._ripple && !n._ripple.touched && !e.rippleStop) {
                if (e.rippleStop = !0,
                o(e))
                    n._ripple.touched = !0,
                    n._ripple.isTouch = !0;
                else if (n._ripple.isTouch)
                    return;
                if (t.center = n._ripple.centered || a(e),
                n._ripple.class && (t.class = n._ripple.class),
                o(e)) {
                    if (n._ripple.showTimerCommit)
                        return;
                    n._ripple.showTimerCommit = () => {
                        c.show(e, n, t)
                    }
                    ,
                    n._ripple.showTimer = window.setTimeout(( () => {
                        n && n._ripple && n._ripple.showTimerCommit && (n._ripple.showTimerCommit(),
                        n._ripple.showTimerCommit = null)
                    }
                    ), r)
                } else
                    c.show(e, n, t)
            }
        }
        function p(e) {
            const t = e.currentTarget;
            if (t && t._ripple) {
                if (window.clearTimeout(t._ripple.showTimer),
                "touchend" === e.type && t._ripple.showTimerCommit)
                    return t._ripple.showTimerCommit(),
                    t._ripple.showTimerCommit = null,
                    void (t._ripple.showTimer = setTimeout(( () => {
                        p(e)
                    }
                    )));
                window.setTimeout(( () => {
                    t._ripple && (t._ripple.touched = !1)
                }
                )),
                c.hide(t)
            }
        }
        function m(e) {
            const t = e.currentTarget;
            t && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null),
            window.clearTimeout(t._ripple.showTimer))
        }
        let h = !1;
        function v(e) {
            h || e.keyCode !== i.uP.enter && e.keyCode !== i.uP.space || (h = !0,
            d(e))
        }
        function f(e) {
            h = !1,
            p(e)
        }
        function _(e) {
            !0 === h && (h = !1,
            p(e))
        }
        function b(e, t, n) {
            const i = u(t.value);
            i || c.hide(e),
            e._ripple = e._ripple || {},
            e._ripple.enabled = i;
            const r = t.value || {};
            r.center && (e._ripple.centered = !0),
            r.class && (e._ripple.class = t.value.class),
            r.circle && (e._ripple.circle = r.circle),
            i && !n ? (e.addEventListener("touchstart", d, {
                passive: !0
            }),
            e.addEventListener("touchend", p, {
                passive: !0
            }),
            e.addEventListener("touchmove", m, {
                passive: !0
            }),
            e.addEventListener("touchcancel", p),
            e.addEventListener("mousedown", d),
            e.addEventListener("mouseup", p),
            e.addEventListener("mouseleave", p),
            e.addEventListener("keydown", v),
            e.addEventListener("keyup", f),
            e.addEventListener("blur", _),
            e.addEventListener("dragstart", p, {
                passive: !0
            })) : !i && n && g(e)
        }
        function g(e) {
            e.removeEventListener("mousedown", d),
            e.removeEventListener("touchstart", d),
            e.removeEventListener("touchend", p),
            e.removeEventListener("touchmove", m),
            e.removeEventListener("touchcancel", p),
            e.removeEventListener("mouseup", p),
            e.removeEventListener("mouseleave", p),
            e.removeEventListener("keydown", v),
            e.removeEventListener("keyup", f),
            e.removeEventListener("dragstart", p),
            e.removeEventListener("blur", _)
        }
        function w(e, t, n) {
            b(e, t, !1)
        }
        function y(e) {
            delete e._ripple,
            g(e)
        }
        function x(e, t) {
            if (t.value === t.oldValue)
                return;
            const n = undefined;
            b(e, t, u(t.oldValue))
        }
        const k = undefined;
        var L = {
            bind: w,
            unbind: y,
            update: x
        }
    },
    177402: function(e, t, n) {
        var i = n(885471);
        function r(e) {
            return function(t, n) {
                for (const i in n)
                    Object.prototype.hasOwnProperty.call(t, i) || this.$delete(this.$data[e], i);
                for (const i in t)
                    this.$set(this.$data[e], i, t[i])
            }
        }
        t.A = i.default.extend({
            data: () => ({
                attrs$: {},
                listeners$: {}
            }),
            created() {
                this.$watch("$attrs", r("attrs$"), {
                    immediate: !0
                }),
                this.$watch("$listeners", r("listeners$"), {
                    immediate: !0
                })
            }
        })
    },
    478956: function(e, t, n) {
        var i = n(885471)
          , r = n(273803)
          , s = n(276400);
        t.A = i.default.extend({
            name: "colorable",
            props: {
                color: String
            },
            methods: {
                setBackgroundColor(e, t={}) {
                    return "string" == typeof t.style ? ((0,
                    r.yA)("style must be an object", this),
                    t) : "string" == typeof t.class ? ((0,
                    r.yA)("class must be an object", this),
                    t) : ((0,
                    s.VP)(e) ? t.style = {
                        ...t.style,
                        "background-color": `${e}`,
                        "border-color": `${e}`
                    } : e && (t.class = {
                        ...t.class,
                        [e]: !0
                    }),
                    t)
                },
                setTextColor(e, t={}) {
                    if ("string" == typeof t.style)
                        return (0,
                        r.yA)("style must be an object", this),
                        t;
                    if ("string" == typeof t.class)
                        return (0,
                        r.yA)("class must be an object", this),
                        t;
                    if ((0,
                    s.VP)(e))
                        t.style = {
                            ...t.style,
                            color: `${e}`,
                            "caret-color": `${e}`
                        };
                    else if (e) {
                        const [n,i] = e.toString().trim().split(" ", 2);
                        t.class = {
                            ...t.class,
                            [n + "--text"]: !0
                        },
                        i && (t.class["text--" + i] = !0)
                    }
                    return t
                }
            }
        })
    },
    247222: function(e, t, n) {
        n.d(t, {
            P: function() {
                return o
            }
        });
        var i = n(885471)
          , r = n(769463);
        const s = {
            absolute: Boolean,
            bottom: Boolean,
            fixed: Boolean,
            left: Boolean,
            right: Boolean,
            top: Boolean
        };
        function o(e=[]) {
            return i.default.extend({
                name: "positionable",
                props: e.length ? (0,
                r.fF)(s, e) : s
            })
        }
        t.A = o()
    },
    121687: function(e, t, n) {
        n.d(t, {
            G: function() {
                return a
            },
            W: function() {
                return o
            }
        });
        var i = n(885471)
          , r = n(273803);
        function s(e, t) {
            return () => (0,
            r.OP)(`The ${e} component must be used inside a ${t}`)
        }
        function o(e, t, n) {
            const r = t && n ? {
                register: s(t, n),
                unregister: s(t, n)
            } : null;
            return i.default.extend({
                name: "registrable-inject",
                inject: {
                    [e]: {
                        default: r
                    }
                }
            })
        }
        function a(e, t=!1) {
            return i.default.extend({
                name: "registrable-provide",
                provide() {
                    return {
                        [e]: t ? this : {
                            register: this.register,
                            unregister: this.unregister
                        }
                    }
                }
            })
        }
    },
    433288: function(e, t, n) {
        var i = n(885471);
        t.A = i.default.extend({
            name: "sizeable",
            props: {
                large: Boolean,
                small: Boolean,
                xLarge: Boolean,
                xSmall: Boolean
            },
            computed: {
                medium() {
                    return Boolean(!(this.xSmall || this.small || this.large || this.xLarge))
                },
                sizeableClasses() {
                    return {
                        "v-size--x-small": this.xSmall,
                        "v-size--small": this.small,
                        "v-size--default": this.medium,
                        "v-size--large": this.large,
                        "v-size--x-large": this.xLarge
                    }
                }
            }
        })
    },
    781582: function(e, t, n) {
        var i;
        n.d(t, {
            H: function() {
                return s
            }
        });
        const r = n(885471).default.extend().extend({
            name: "themeable",
            provide() {
                return {
                    theme: this.themeableProvide
                }
            },
            inject: {
                theme: {
                    default: {
                        isDark: !1
                    }
                }
            },
            props: {
                dark: {
                    type: Boolean,
                    default: null
                },
                light: {
                    type: Boolean,
                    default: null
                }
            },
            data() {
                return {
                    themeableProvide: {
                        isDark: !1
                    }
                }
            },
            computed: {
                appIsDark() {
                    return this.$vuetify.theme.dark || !1
                },
                isDark() {
                    return !0 === this.dark || !0 !== this.light && this.theme.isDark
                },
                themeClasses() {
                    return {
                        "theme--dark": this.isDark,
                        "theme--light": !this.isDark
                    }
                },
                rootIsDark() {
                    return !0 === this.dark || !0 !== this.light && this.appIsDark
                },
                rootThemeClasses() {
                    return {
                        "theme--dark": this.rootIsDark,
                        "theme--light": !this.rootIsDark
                    }
                }
            },
            watch: {
                isDark: {
                    handler(e, t) {
                        e !== t && (this.themeableProvide.isDark = this.isDark)
                    },
                    immediate: !0
                }
            }
        });
        function s(e) {
            const t = {
                ...e.props,
                ...e.injections
            }
              , n = r.options.computed.isDark.call(t);
            return r.options.computed.themeClasses.call({
                isDark: n
            })
        }
        t.A = r
    },
    72006: function(e, t, n) {
        n.d(t, {
            A: function() {
                return r
            }
        });
        var i = n(885471);
        function r(...e) {
            return i.default.extend({
                mixins: e
            })
        }
    }
}]);
