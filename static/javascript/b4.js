"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[94220], {
    760837: function(t, e, r) {
        r.d(e, {
            n: function() {
                return f
            }
        });
        var n = r(402448)
          , o = r(458722)
          , i = r(849800)
          , s = r(180072)
          , a = r(94159)
          , c = r(787057)
          , l = r(46710)
          , u = r(901340)
          , p = r(933486);
        function d(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        var b = (0,
        u.sC)({
            ariaLabel: (0,
            u.Yg)(s.vq, "Close"),
            content: (0,
            u.Yg)(s.vq, "&times;"),
            disabled: (0,
            u.Yg)(s.Ye, !1),
            textVariant: (0,
            u.Yg)(s.vq)
        }, i.a8)
          , f = (0,
        n.X$)({
            name: i.a8,
            functional: !0,
            props: b,
            render: function t(e, r) {
                var n = r.props
                  , i = r.data
                  , s = r.slots
                  , u = r.scopedSlots
                  , b = s()
                  , f = u || {}
                  , g = {
                    staticClass: "close",
                    class: d({}, "text-".concat(n.textVariant), n.textVariant),
                    attrs: {
                        type: "button",
                        disabled: n.disabled,
                        "aria-label": n.ariaLabel ? String(n.ariaLabel) : null
                    },
                    on: {
                        click: function t(e) {
                            n.disabled && (0,
                            l.xH)(e) && (0,
                            c.jo)(e)
                        }
                    }
                };
                return (0,
                p.a)(a.x1, f, b) || (g.domProps = {
                    innerHTML: n.content
                }),
                e("button", (0,
                o.L)(i, g), (0,
                p.g)(a.x1, {}, f, b))
            }
        })
    },
    875532: function(t, e, r) {
        r.d(e, {
            P: function() {
                return B
            }
        });
        var n = r(402448)
          , o = r(458722)
          , i = r(849800)
          , s = r(436714)
          , a = r(180072)
          , c = r(117079)
          , l = r(671402)
          , u = r(787057)
          , p = r(46710)
          , d = r(191671)
          , b = r(901340)
          , f = r(681894)
          , g = r(466344);
        function v(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function h(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? v(Object(r), !0).forEach((function(e) {
                    O(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function O(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        var y = (0,
        d.cJ)(g.xk, ["event", "routerTag"]);
        delete y.href.default,
        delete y.to.default;
        var w = (0,
        b.sC)((0,
        d.di)(h(h({}, y), {}, {
            block: (0,
            b.Yg)(a.Ye, !1),
            disabled: (0,
            b.Yg)(a.Ye, !1),
            pill: (0,
            b.Yg)(a.Ye, !1),
            pressed: (0,
            b.Yg)(a.Ye, null),
            size: (0,
            b.Yg)(a.vq),
            squared: (0,
            b.Yg)(a.Ye, !1),
            tag: (0,
            b.Yg)(a.vq, "button"),
            type: (0,
            b.Yg)(a.vq, "button"),
            variant: (0,
            b.Yg)(a.vq, "secondary")
        })), i.hZ)
          , m = function t(e) {
            "focusin" === e.type ? (0,
            l.iQ)(e.target, "focus") : "focusout" === e.type && (0,
            l.vy)(e.target, "focus")
        }
          , j = function t(e) {
            return (0,
            f.PJ)(e) || (0,
            l.dz)(e.tag, "a")
        }
          , P = function t(e) {
            return (0,
            p.Lm)(e.pressed)
        }
          , D = function t(e) {
            return !(j(e) || e.tag && !(0,
            l.dz)(e.tag, "button"))
        }
          , Y = function t(e) {
            return !j(e) && !D(e)
        }
          , C = function t(e) {
            var r;
            return ["btn-".concat(e.variant || "secondary"), (r = {},
            O(r, "btn-".concat(e.size), e.size),
            O(r, "btn-block", e.block),
            O(r, "rounded-pill", e.pill),
            O(r, "rounded-0", e.squared && !e.pill),
            O(r, "disabled", e.disabled),
            O(r, "active", e.pressed),
            r)]
        }
          , k = function t(e) {
            return j(e) ? (0,
            b.YL)(y, e) : {}
        }
          , x = function t(e, r) {
            var n = D(e)
              , o = j(e)
              , i = P(e)
              , s = Y(e)
              , a = o && "#" === e.href
              , c = r.attrs && r.attrs.role ? r.attrs.role : null
              , l = r.attrs ? r.attrs.tabindex : null;
            return (s || a) && (l = "0"),
            {
                type: n && !o ? e.type : null,
                disabled: n ? e.disabled : null,
                role: s || a ? "button" : c,
                "aria-disabled": s ? String(e.disabled) : null,
                "aria-pressed": i ? String(e.pressed) : null,
                autocomplete: i ? "off" : null,
                tabindex: e.disabled && !n ? "-1" : l
            }
        }
          , B = (0,
        n.X$)({
            name: i.hZ,
            functional: !0,
            props: w,
            render: function t(e, r) {
                var n = r.props
                  , i = r.data
                  , a = r.listeners
                  , l = r.children
                  , d = P(n)
                  , b = j(n)
                  , f = Y(n)
                  , v = b && "#" === n.href
                  , O = {
                    keydown: function t(e) {
                        if (!n.disabled && (f || v)) {
                            var r = e.keyCode;
                            if (r === s.hY || r === s.zx && f) {
                                var o = e.currentTarget || e.target;
                                (0,
                                u.jo)(e, {
                                    propagation: !1
                                }),
                                o.click()
                            }
                        }
                    },
                    click: function t(e) {
                        n.disabled && (0,
                        p.xH)(e) ? (0,
                        u.jo)(e) : d && a && a["update:pressed"] && (0,
                        c.xW)(a["update:pressed"]).forEach((function(t) {
                            (0,
                            p.Tn)(t) && t(!n.pressed)
                        }
                        ))
                    }
                };
                d && (O.focusin = m,
                O.focusout = m);
                var y = {
                    staticClass: "btn",
                    class: C(n),
                    props: k(n),
                    attrs: x(n, i),
                    on: O
                };
                return e(b ? g.zJ : n.tag, (0,
                o.L)(h(h({}, i), {}, {
                    props: void 0
                }), y), l)
            }
        })
    },
    239168: function(t, e, r) {
        r.d(e, {
            zK: function() {
                return ut
            }
        });
        var n = r(402448)
          , o = r(849800)
          , i = r(180072)
          , s = r(94159)
          , a = r(117079)
          , c = r(441897)
          , l = r(901340)
          , u = r(659809)
          , p = r(234935)
          , d = r(381074)
          , b = r(948917)
          , f = r(875532)
          , g = r(191671);
        function v(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function h(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? v(Object(r), !0).forEach((function(e) {
                    O(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function O(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        var y = (0,
        l.sC)((0,
        g.di)(h(h(h({}, d.x), p.x), {}, {
            block: (0,
            l.Yg)(i.Ye, !1),
            html: (0,
            l.Yg)(i.vq),
            lazy: (0,
            l.Yg)(i.Ye, !1),
            menuClass: (0,
            l.Yg)(i.VE),
            noCaret: (0,
            l.Yg)(i.Ye, !1),
            role: (0,
            l.Yg)(i.vq, "menu"),
            size: (0,
            l.Yg)(i.vq),
            split: (0,
            l.Yg)(i.Ye, !1),
            splitButtonType: (0,
            l.Yg)(i.vq, "button", (function(t) {
                return (0,
                a.Xk)(["button", "submit", "reset"], t)
            }
            )),
            splitClass: (0,
            l.Yg)(i.VE),
            splitHref: (0,
            l.Yg)(i.vq),
            splitTo: (0,
            l.Yg)(i.RJ),
            splitVariant: (0,
            l.Yg)(i.vq),
            text: (0,
            l.Yg)(i.vq),
            toggleAttrs: (0,
            l.Yg)(i.bD, {}),
            toggleClass: (0,
            l.Yg)(i.VE),
            toggleTag: (0,
            l.Yg)(i.vq, "button"),
            toggleText: (0,
            l.Yg)(i.vq, "Toggle dropdown"),
            variant: (0,
            l.Yg)(i.vq, "secondary")
        })), o.eN)
          , w = (0,
        n.X$)({
            name: o.eN,
            mixins: [d.l, p.h, b.$],
            props: y,
            computed: {
                dropdownClasses: function t() {
                    var e = this.block
                      , r = this.split;
                    return [this.directionClass, this.boundaryClass, {
                        show: this.visible,
                        "btn-group": r || !e,
                        "d-flex": e && r
                    }]
                },
                menuClasses: function t() {
                    return [this.menuClass, {
                        "dropdown-menu-right": this.right,
                        show: this.visible
                    }]
                },
                toggleClasses: function t() {
                    var e = this.split;
                    return [this.toggleClass, {
                        "dropdown-toggle-split": e,
                        "dropdown-toggle-no-caret": this.noCaret && !e
                    }]
                }
            },
            render: function t(e) {
                var r = this.visible
                  , n = this.variant
                  , o = this.size
                  , i = this.block
                  , a = this.disabled
                  , l = this.split
                  , p = this.role
                  , d = this.hide
                  , b = this.toggle
                  , g = {
                    variant: n,
                    size: o,
                    block: i,
                    disabled: a
                }
                  , v = this.normalizeSlot(s.uk)
                  , O = this.hasNormalizedSlot(s.uk) ? {} : (0,
                c.A)(this.html, this.text)
                  , y = e();
                if (l) {
                    var w = this.splitTo
                      , m = this.splitHref
                      , j = this.splitButtonType
                      , P = h(h({}, g), {}, {
                        variant: this.splitVariant || n
                    });
                    w ? P.to = w : m ? P.href = m : j && (P.type = j),
                    y = e(f.P, {
                        class: this.splitClass,
                        attrs: {
                            id: this.safeId("_BV_button_")
                        },
                        props: P,
                        domProps: O,
                        on: {
                            click: this.onSplitClick
                        },
                        ref: "button"
                    }, v),
                    v = [e("span", {
                        class: ["sr-only"]
                    }, [this.toggleText])],
                    O = {}
                }
                var D = ["menu", "listbox", "tree", "grid", "dialog"]
                  , Y = e(f.P, {
                    staticClass: "dropdown-toggle",
                    class: this.toggleClasses,
                    attrs: h(h({}, this.toggleAttrs), {}, {
                        id: this.safeId("_BV_toggle_"),
                        "aria-haspopup": D.includes(p) ? p : "false",
                        "aria-expanded": (0,
                        u.dI)(r)
                    }),
                    props: h(h({}, g), {}, {
                        tag: this.toggleTag,
                        block: i && !l
                    }),
                    domProps: O,
                    on: {
                        mousedown: this.onMousedown,
                        click: b,
                        keydown: b
                    },
                    ref: "toggle"
                }, v)
                  , C = e("ul", {
                    staticClass: "dropdown-menu",
                    class: this.menuClasses,
                    attrs: {
                        role: p,
                        tabindex: "-1",
                        "aria-labelledby": this.safeId(l ? "_BV_button_" : "_BV_toggle_")
                    },
                    on: {
                        keydown: this.onKeydown
                    },
                    ref: "menu"
                }, [!this.lazy || r ? this.normalizeSlot(s.x1, {
                    hide: d
                }) : e()]);
                return e("div", {
                    staticClass: "dropdown b-dropdown",
                    class: this.dropdownClasses,
                    attrs: {
                        id: this.safeId()
                    }
                }, [y, Y, C])
            }
        })
          , m = r(387013)
          , j = r(671402)
          , P = r(664211)
          , D = r(466344);
        function Y(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function C(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Y(Object(r), !0).forEach((function(e) {
                    k(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Y(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function k(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        var x = (0,
        g.cJ)(D.xk, ["event", "routerTag"])
          , B = (0,
        l.sC)((0,
        g.di)(C(C({}, x), {}, {
            linkClass: (0,
            l.Yg)(i.VE),
            variant: (0,
            l.Yg)(i.vq)
        })), o.ae)
          , q = (0,
        n.X$)({
            name: o.ae,
            mixins: [P.C, b.$],
            inject: {
                getBvDropdown: {
                    default: function t() {
                        return function() {
                            return null
                        }
                    }
                }
            },
            inheritAttrs: !1,
            props: B,
            computed: {
                bvDropdown: function t() {
                    return this.getBvDropdown()
                },
                computedAttrs: function t() {
                    return C(C({}, this.bvAttrs), {}, {
                        role: "menuitem"
                    })
                }
            },
            methods: {
                closeDropdown: function t() {
                    var e = this;
                    (0,
                    j.Rc)((function() {
                        e.bvDropdown && e.bvDropdown.hide(!0)
                    }
                    ))
                },
                onClick: function t(e) {
                    this.$emit(m.m8, e),
                    this.closeDropdown()
                }
            },
            render: function t(e) {
                var r = this.linkClass
                  , n = this.variant
                  , o = this.active
                  , i = this.disabled
                  , s = this.onClick
                  , a = this.bvAttrs;
                return e("li", {
                    class: a.class,
                    style: a.style,
                    attrs: {
                        role: "presentation"
                    }
                }, [e(D.zJ, {
                    staticClass: "dropdown-item",
                    class: [r, k({}, "text-".concat(n), n && !(o || i))],
                    props: (0,
                    l.YL)(x, this.$props),
                    attrs: this.computedAttrs,
                    on: {
                        click: s
                    },
                    ref: "item"
                }, this.normalizeSlot())])
            }
        });
        function S(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function E(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? S(Object(r), !0).forEach((function(e) {
                    z(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function z(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        var T = (0,
        l.sC)({
            active: (0,
            l.Yg)(i.Ye, !1),
            activeClass: (0,
            l.Yg)(i.vq, "active"),
            buttonClass: (0,
            l.Yg)(i.VE),
            disabled: (0,
            l.Yg)(i.Ye, !1),
            variant: (0,
            l.Yg)(i.vq)
        }, o.T5)
          , _ = (0,
        n.X$)({
            name: o.T5,
            mixins: [P.C, b.$],
            inject: {
                getBvDropdown: {
                    default: function t() {
                        return function() {
                            return null
                        }
                    }
                }
            },
            inheritAttrs: !1,
            props: T,
            computed: {
                bvDropdown: function t() {
                    return this.getBvDropdown()
                },
                computedAttrs: function t() {
                    return E(E({}, this.bvAttrs), {}, {
                        role: "menuitem",
                        type: "button",
                        disabled: this.disabled
                    })
                }
            },
            methods: {
                closeDropdown: function t() {
                    this.bvDropdown && this.bvDropdown.hide(!0)
                },
                onClick: function t(e) {
                    this.$emit(m.m8, e),
                    this.closeDropdown()
                }
            },
            render: function t(e) {
                var r, n = this.active, o = this.variant, i = this.bvAttrs;
                return e("li", {
                    class: i.class,
                    style: i.style,
                    attrs: {
                        role: "presentation"
                    }
                }, [e("button", {
                    staticClass: "dropdown-item",
                    class: [this.buttonClass, (r = {},
                    z(r, this.activeClass, n),
                    z(r, "text-".concat(o), o && !(n || this.disabled)),
                    r)],
                    attrs: this.computedAttrs,
                    on: {
                        click: this.onClick
                    },
                    ref: "button"
                }, this.normalizeSlot())])
            }
        })
          , V = r(458722);
        function $(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function J(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? $(Object(r), !0).forEach((function(e) {
                    L(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : $(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function L(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        var A = (0,
        l.sC)({
            id: (0,
            l.Yg)(i.vq),
            tag: (0,
            l.Yg)(i.vq, "header"),
            variant: (0,
            l.Yg)(i.vq)
        }, o.k8)
          , I = (0,
        n.X$)({
            name: o.k8,
            functional: !0,
            props: A,
            render: function t(e, r) {
                var n = r.props
                  , o = r.data
                  , i = r.children
                  , s = n.tag
                  , a = n.variant;
                return e("li", (0,
                V.L)((0,
                g.cJ)(o, ["attrs"]), {
                    attrs: {
                        role: "presentation"
                    }
                }), [e(s, {
                    staticClass: "dropdown-header",
                    class: L({}, "text-".concat(a), a),
                    attrs: J(J({}, o.attrs || {}), {}, {
                        id: n.id || null,
                        role: (0,
                        j.dz)(s, "header") ? null : "heading"
                    }),
                    ref: "header"
                }, i)])
            }
        });
        function X(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function H(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? X(Object(r), !0).forEach((function(e) {
                    N(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : X(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function N(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        var Z = (0,
        l.sC)({
            tag: (0,
            l.Yg)(i.vq, "hr")
        }, o.cJ)
          , F = (0,
        n.X$)({
            name: o.cJ,
            functional: !0,
            props: Z,
            render: function t(e, r) {
                var n = r.props
                  , o = r.data;
                return e("li", (0,
                V.L)((0,
                g.cJ)(o, ["attrs"]), {
                    attrs: {
                        role: "presentation"
                    }
                }), [e(n.tag, {
                    staticClass: "dropdown-divider",
                    attrs: H(H({}, o.attrs || {}), {}, {
                        role: "separator",
                        "aria-orientation": "horizontal"
                    }),
                    ref: "divider"
                })])
            }
        })
          , G = r(466704);
        function K(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function M(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? K(Object(r), !0).forEach((function(e) {
                    R(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : K(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function R(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        var Q = (0,
        l.sC)((0,
        g.di)(M(M({}, G.x), {}, {
            disabled: (0,
            l.Yg)(i.Ye, !1),
            formClass: (0,
            l.Yg)(i.VE)
        })), o.nJ)
          , U = (0,
        n.X$)({
            name: o.nJ,
            functional: !0,
            props: Q,
            render: function t(e, r) {
                var n = r.props
                  , o = r.data
                  , i = r.listeners
                  , s = r.children;
                return e("li", (0,
                V.L)((0,
                g.cJ)(o, ["attrs", "on"]), {
                    attrs: {
                        role: "presentation"
                    }
                }), [e(G.Z, {
                    staticClass: "b-dropdown-form",
                    class: [n.formClass, {
                        disabled: n.disabled
                    }],
                    props: n,
                    attrs: M(M({}, o.attrs || {}), {}, {
                        disabled: n.disabled,
                        tabindex: n.disabled ? null : "-1"
                    }),
                    on: i,
                    ref: "form"
                }, s)])
            }
        });
        function W(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        var tt = (0,
        l.sC)({
            tag: (0,
            l.Yg)(i.vq, "p"),
            textClass: (0,
            l.Yg)(i.VE),
            variant: (0,
            l.Yg)(i.vq)
        }, o.gd)
          , et = (0,
        n.X$)({
            name: o.gd,
            functional: !0,
            props: tt,
            render: function t(e, r) {
                var n = r.props
                  , o = r.data
                  , i = r.children
                  , s = n.tag
                  , a = n.textClass
                  , c = n.variant;
                return e("li", (0,
                V.L)((0,
                g.cJ)(o, ["attrs"]), {
                    attrs: {
                        role: "presentation"
                    }
                }), [e(s, {
                    staticClass: "b-dropdown-text",
                    class: [a, W({}, "text-".concat(c), c)],
                    props: n,
                    attrs: o.attrs || {},
                    ref: "text"
                }, i)])
            }
        })
          , rt = r(358494)
          , nt = r(933486);
        function ot(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function it(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ot(Object(r), !0).forEach((function(e) {
                    st(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ot(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function st(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        var at = (0,
        l.sC)({
            ariaDescribedby: (0,
            l.Yg)(i.vq),
            header: (0,
            l.Yg)(i.vq),
            headerClasses: (0,
            l.Yg)(i.VE),
            headerTag: (0,
            l.Yg)(i.vq, "header"),
            headerVariant: (0,
            l.Yg)(i.vq),
            id: (0,
            l.Yg)(i.vq)
        }, o.sO), ct = (0,
        n.X$)({
            name: o.sO,
            functional: !0,
            props: at,
            render: function t(e, r) {
                var n = r.props
                  , o = r.data
                  , i = r.slots
                  , a = r.scopedSlots
                  , c = n.id
                  , l = n.variant
                  , u = n.header
                  , p = n.headerTag
                  , d = i()
                  , b = a || {}
                  , f = {}
                  , v = c ? "_bv_".concat(c, "_group_dd_header") : null
                  , h = e();
                return ((0,
                nt.a)(s.Bn, b, d) || u) && (h = e(p, {
                    staticClass: "dropdown-header",
                    class: [n.headerClasses, st({}, "text-".concat(l), l)],
                    attrs: {
                        id: v,
                        role: (0,
                        j.dz)(p, "header") ? null : "heading"
                    }
                }, (0,
                nt.g)(s.Bn, f, b, d) || u)),
                e("li", (0,
                V.L)((0,
                g.cJ)(o, ["attrs"]), {
                    attrs: {
                        role: "presentation"
                    }
                }), [h, e("ul", {
                    staticClass: "list-unstyled",
                    attrs: it(it({}, o.attrs || {}), {}, {
                        id: c,
                        role: "group",
                        "aria-describedby": [v, n.ariaDescribedBy].filter(rt.D).join(" ").trim() || null
                    })
                }, (0,
                nt.g)(s.x1, f, b, d))])
            }
        }), lt, ut = (0,
        r(703808).Ur)({
            components: {
                BDropdown: w,
                BDd: w,
                BDropdownItem: q,
                BDdItem: q,
                BDropdownItemButton: _,
                BDropdownItemBtn: _,
                BDdItemButton: _,
                BDdItemBtn: _,
                BDropdownHeader: I,
                BDdHeader: I,
                BDropdownDivider: F,
                BDdDivider: F,
                BDropdownForm: U,
                BDdForm: U,
                BDropdownText: et,
                BDdText: et,
                BDropdownGroup: ct,
                BDdGroup: ct
            }
        })
    }
}]);
