"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[37145], {
    524925: function(e, t, n) {
        n.r(t),
        n.d(t, {
            default: function() {
                return u
            }
        });
        var s = n(489463), i = function e() {
            var t = this
              , n = t._self._c;
            return n("div", {
                staticClass: "b-wrapper-404 g-sides-gaps d-flex flex-column justify-content-center align-items-center text-center"
            }, [n("div", {
                staticClass: "b-404"
            }, [n("h1", {
                staticClass: "b-404__title g-semibold"
            }, [t._v(" " + t._s(t.$t("message.page_404_title")) + " ")]), t.subtitle ? n("h2", {
                staticClass: "b-404__subtitle g-semibold"
            }, [t._v(" " + t._s(t.subtitleComputed) + " ")]) : t._e(), t.description ? n("p", {
                staticClass: "b-404__description"
            }, [t._v(" " + t._s(t.descriptionComputed) + " ")]) : t._e(), t._t("default", (function() {
                return [n("router-link", {
                    staticClass: "g-btn m-flat m-no-uppercase m-reset-width m-default-font-weight",
                    attrs: {
                        to: {
                            name: "Feed"
                        },
                        replace: "",
                        custom: ""
                    },
                    scopedSlots: t._u([{
                        key: "default",
                        fn: function({href: e, navigate: s}) {
                            return [n("a", {
                                attrs: {
                                    href: e
                                },
                                on: {
                                    click: function(e) {
                                        return t.go(e, s)
                                    }
                                }
                            }, [t._v(t._s(t.$t("message.go_back_404_button")))])]
                        }
                    }])
                })]
            }
            ))], 2)])
        }, o = [], r, l = {
            name: "ErrorPage",
            props: {
                subtitle: {
                    type: [String, Boolean],
                    default: !0
                },
                description: {
                    type: [String, Boolean],
                    default: !0
                }
            },
            computed: {
                subtitleComputed() {
                    return !0 === this.subtitle ? this.$t("message.page_404_subtitle") : !1 === this.subtitle ? "" : this.subtitle
                },
                descriptionComputed() {
                    return !0 === this.description ? this.$t("message.page_404_description") : !1 === this.description ? "" : this.description
                }
            },
            methods: {
                go(e, t) {
                    "/" === this.$route.path ? window.location.reload() : t(e)
                }
            }
        }, c, a, u = (0,
        n(281656).A)(l, i, o, !1, null, "4ddce44c", null).exports
    },
    668786: function(e, t, n) {
        n.d(t, {
            A: function() {
                return m
            }
        });
        var s = function e() {
            var t = this
              , n = t._self._c;
            return n("div", {
                staticClass: "l-footer m-items-with-divider"
            }, [n("nav", {
                staticClass: "l-footer__menu"
            }, [t._l(t.footerLinks, (function(e, s) {
                return [e.isExtLink ? n("a", {
                    key: `link-${e.path}`,
                    staticClass: "l-footer__menu__item",
                    class: {
                        "m-bold": e.isBold
                    },
                    attrs: {
                        href: e.path,
                        target: e.target || "_self"
                    }
                }, [t._v(" " + t._s(e.name) + " ")]) : n("router-link", {
                    key: "link-" + s,
                    staticClass: "l-footer__menu__item",
                    class: {
                        "m-bold": e.isBold
                    },
                    attrs: {
                        to: `/${e.path}`,
                        target: e.target || "_self"
                    }
                }, [t._v(" " + t._s(e.name) + " ")])]
            }
            ))], 2)])
        }, i = [], o = n(738221), r = n.n(o), l, c, a = {
            name: "WebsiteFooter",
            mixins: [n(743751).A],
            data() {
                return {
                    isSidebarFooter: !0
                }
            },
            mounted() {
                this.$nextTick(this.updateDividers),
                this.$window.addEventListener("resize", this.updateDividers)
            },
            beforeDestroy() {
                this.$window.removeEventListener("resize", this.updateDividers)
            },
            methods: {
                updateDividers: r()(( () => {
                    let e;
                    document.querySelectorAll(".m-items-with-divider .l-footer__menu__item, .m-items-with-divider .l-footer-static__menu__group").forEach(( (t, n) => {
                        if (t.classList.remove("m-new-row"),
                        0 === n)
                            e = t.getBoundingClientRect().top;
                        else if (e < t.getBoundingClientRect().top) {
                            const {previousElementSibling: n} = t;
                            n && n.classList.add("m-new-row"),
                            e = t.getBoundingClientRect().top
                        }
                    }
                    ))
                }
                ), 500)
            }
        }, u, d, m = (0,
        n(281656).A)(a, s, i, !1, null, "6a4bed29", null).exports
    },
    415748: function(e, t, n) {
        n.d(t, {
            z: function() {
                return s
            }
        });
        const s = {
            TOP: "top",
            BOTTOM: "bottom"
        }
    },
    709306: function(e, t, n) {
        n.d(t, {
            V: function() {
                return s
            }
        });
        const s = "profileSearchRecentSearches"
    },
    654582: function(e, t, n) {
        n.d(t, {
            Ku: function() {
                return r.A
            },
            nM: function() {
                return l.A
            }
        });
        var s = n(991272)
          , i = n(17361)
          , o = n(603985)
          , r = n(850024)
          , l = n(819065);
        const {handleResize: c, handleScroll: a, handleVisibilityChange: u, updateVisibleItems: d, removeListeners: m} = o.A.methods;
        function p(e, t) {
            e.component(`${t}recycle-scroller`, o.A),
            e.component(`${t}RecycleScroller`, o.A),
            e.component(`${t}dynamic-scroller`, r.A),
            e.component(`${t}DynamicScroller`, r.A),
            e.component(`${t}dynamic-scroller-item`, l.A),
            e.component(`${t}DynamicScrollerItem`, l.A)
        }
        o.A.methods = Object.assign(o.A.methods, {
            onFullscreenChange() {
                const e = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
                e ? this.$nextTick(( () => {
                    this.isFullscreen = e
                }
                )) : window.requestAnimationFrame(( () => {
                    this.isFullscreen = e
                }
                ))
            },
            handleResize() {
                if (!this.isFullscreen)
                    return c.apply(this, arguments)
            },
            handleScroll() {
                if (!this.isFullscreen)
                    return a.apply(this, arguments)
            },
            handleVisibilityChange() {
                if (!this.isFullscreen)
                    return u.apply(this, arguments)
            },
            updateVisibleItems() {
                if (!this.isFullscreen)
                    return d.apply(this, arguments)
            },
            removeListeners() {
                return document.removeEventListener("webkitfullscreenchange", this.onFullscreenChange),
                m.apply(this, arguments)
            }
        }),
        o.A.watch = Object.assign(o.A.watch, {
            ready(e, t) {
                e && !t && document.addEventListener("webkitfullscreenchange", this.onFullscreenChange)
            }
        });
        const h = {
            version: s.VERSION,
            install(e, t) {
                const n = Object.assign({}, {
                    installComponents: !0,
                    componentsPrefix: ""
                }, t);
                for (const s in n)
                    void 0 !== n[s] && (i.A[s] = n[s]);
                n.installComponents && p(e, n.componentsPrefix)
            }
        };
        var f = null;
        let _ = null;
        "undefined" != typeof window ? _ = window.Vue : void 0 !== n.g && (_ = n.g.Vue),
        _ && _.use(h)
    }
}]);
