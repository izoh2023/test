"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[7155], {
    57523: function(e, t, s) {
        s.d(t, {
            A: function() {
                return d
            }
        });
        var i = function e() {
            var t = this
              , s = t._self._c;
            return t.banners.length ? s("div", {
                staticClass: "banner_place",
                class: {
                    "m-pagination-under-swiper": t.banners.length > 1
                }
            }, [t.banners.length > 1 ? [s("swiper", {
                staticClass: "banner_place_border",
                attrs: {
                    options: t.swiperOptions
                }
            }, t._l(t.banners, (function(e, i) {
                return s("swiper-slide", {
                    key: i
                }, [s(e.url ? "a" : "span", t._b({
                    tag: "component"
                }, "component", e.url ? {
                    href: e.url
                } : {}, !1), [s("image-o-f", {
                    staticClass: "m-no-pointer img-responsive w-100",
                    attrs: {
                        src: e.imageSrc,
                        alt: ""
                    }
                })], 1)], 1)
            }
            )), 1), s("div", {
                staticClass: "swiper-pagination b-banners__pagination",
                attrs: {
                    id: t.uid
                }
            })] : s("div", {
                staticClass: "banner_place_border g-overflow-hidden"
            }, [s(t.banners[0].url ? "a" : "span", t._b({
                tag: "component"
            }, "component", t.banners[0].url ? {
                href: t.banners[0].url
            } : {}, !1), [s("image-o-f", {
                staticClass: "m-no-pointer img-responsive w-100",
                attrs: {
                    src: t.banners[0].imageSrc,
                    alt: ""
                }
            })], 1)], 1)], 2) : t._e()
        }, r = [], n = s(110908), o = s(951498), a = s(765624), l, u = {
            name: "BannerPlace",
            components: {
                ImageOF: o.A
            },
            mixins: [a.A],
            data() {
                return {
                    swiperOptions: {
                        speed: 1500,
                        autoplay: {
                            delay: 5e3
                        },
                        pagination: {
                            el: `#${this.uid}`,
                            clickable: !0
                        }
                    }
                }
            },
            computed: {
                ...(0,
                n._84)(["banners"])
            },
            mounted() {
                this.banners.length || this.fetchBanners()
            },
            methods: {
                ...(0,
                n.CXg)(["fetchBanners"])
            }
        }, h, c, d = (0,
        s(281656).A)(u, i, r, !1, null, "1536e892", null).exports
    },
    622255: function(e, t, s) {
        s.d(t, {
            A: function() {
                return u
            }
        });
        var i = function e() {
            var t = this, s;
            return (0,
            t._self._c)("div", {
                staticClass: "b-recommended"
            }, [t._t("default")], 2)
        }, r = [], n, o = {
            name: "SuggestionsWrapper"
        }, a, l, u = (0,
        s(281656).A)(o, i, r, !1, null, "5b955fb5", null).exports
    },
    697352: function(e, t, s) {
        s.d(t, {
            A: function() {
                return g
            }
        });
        var i = function e() {
            var t = this
              , s = t._self._c;
            return s("div", {
                class: {
                    "g-border-top": !t.$mq.includes("lg")
                }
            }, [s("div", {
                staticClass: "b-section-title m-row g-text-uppercase g-gray-text",
                class: {
                    "g-border-top-bold": !t.$mq.includes("lg")
                }
            }, [t._v(" " + t._s(t.$t("message.subscription_title")) + " ")]), s("router-link", {
                staticClass: "b-menu-list__el m-with-rectangle-hover m-tb-sm m-after-title",
                attrs: {
                    to: {
                        name: "SettingsSubscription"
                    }
                }
            }, [s("div", {
                staticClass: "b-menu-list__text"
            }, [t._v(" " + t._s(t.$t("message.profile_subscription_price_promotions")) + " ")]), s("div", {
                directives: [{
                    name: "safe-html",
                    rawName: "v-safe-html",
                    value: {
                        text: t.subscriptionBtnDesc
                    },
                    expression: "{ text: subscriptionBtnDesc }"
                }],
                staticClass: "b-menu-list__subtext"
            }), s("div", {
                staticClass: "b-menu-list__icon"
            }, [s("svg", {
                directives: [{
                    name: "svg-sprite",
                    rawName: "v-svg-sprite:icon-arrow-right",
                    arg: "icon-arrow-right"
                }]
            })])]), t.hasPromotion ? s("promotion", {
                attrs: {
                    id: t.user.id,
                    "hide-title": "",
                    "is-collapse-mode": "",
                    "show-claims-count": !1,
                    "show-start-campaign": !1
                }
            }) : t._e()], 1)
        }, r = [], n = s(858156), o = s.n(n), a = s(110908), l = s(437187), u = s(620514), h = s(191646), c = s(235615), d, m = {
            name: "SubscriptionPromo",
            components: {
                Promotion: l.A
            },
            mixins: [u.k, h.tD, c.A],
            computed: {
                ...(0,
                a.ZOz)(["user", "hasUser"]),
                ...(0,
                a.npG)(["authUser"]),
                hasPromotion() {
                    return o()(this, "user.promotions", []).length
                },
                subscriptionBtnDesc() {
                    if (!this.authUser.subscribePrice || this.authUser.subscribePrice <= 0)
                        return this.$t("message.profile_free_subscription");
                    let e = this.$t("message.message_type_price_per_month", {
                        PRICE: this.priceHuman(this.authUser.subscribePrice)
                    });
                    return this.authUser.subscriptionBundles && this.authUser.subscriptionBundles.length && (e += `, ${this.$tc("message.bundles_count_plural", this.authUser.subscriptionBundles.length, {
                        COUNT: this.authUser.subscriptionBundles.length
                    })}`),
                    e
                }
            }
        }, p, b, g = (0,
        s(281656).A)(m, i, r, !1, null, null, null).exports
    },
    951498: function(e, t, s) {
        s.d(t, {
            A: function() {
                return c
            }
        });
        var i = function e() {
            var t = this, s;
            return (0,
            t._self._c)("img", t._g({
                directives: [{
                    name: "double-click",
                    rawName: "v-double-click",
                    value: t.handlerDoubleClick,
                    expression: "handlerDoubleClick"
                }],
                attrs: {
                    src: t.localSrc,
                    width: t.imgWidth,
                    height: t.imgHeight,
                    loading: "lazy",
                    alt: ""
                }
            }, t.$listeners))
        }, r = [], n = s(447836), o = s(41404), a, l = {
            name: "ImageOF",
            directives: {
                doubleClick: n.Ay
            },
            mixins: [o.A],
            props: {
                src: {
                    type: String,
                    default: ""
                },
                width: {
                    type: [Number, String],
                    default: 0
                },
                height: {
                    type: [Number, String],
                    default: 0
                }
            },
            computed: {
                localSrc() {
                    return !this.src || this.src.toLowerCase().endsWith(`${s.p}img/background.png`) ? this.backgroundImg : this.src
                },
                imgWidth() {
                    return this.width || null
                },
                imgHeight() {
                    return this.height || null
                }
            },
            methods: {
                handlerDoubleClick(e, t) {
                    t === n.Nl.DOUBLE_CLICK && this.$emit("doubleClick", e),
                    t === n.Nl.CLICK && this.$emit("singleClick", e)
                }
            }
        }, u, h, c = (0,
        s(281656).A)(l, i, r, !1, null, null, null).exports
    },
    668786: function(e, t, s) {
        s.d(t, {
            A: function() {
                return d
            }
        });
        var i = function e() {
            var t = this
              , s = t._self._c;
            return s("div", {
                staticClass: "l-footer m-items-with-divider"
            }, [s("nav", {
                staticClass: "l-footer__menu"
            }, [t._l(t.footerLinks, (function(e, i) {
                return [e.isExtLink ? s("a", {
                    key: `link-${e.path}`,
                    staticClass: "l-footer__menu__item",
                    class: {
                        "m-bold": e.isBold
                    },
                    attrs: {
                        href: e.path,
                        target: e.target || "_self"
                    }
                }, [t._v(" " + t._s(e.name) + " ")]) : s("router-link", {
                    key: "link-" + i,
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
        }, r = [], n = s(738221), o = s.n(n), a, l, u = {
            name: "WebsiteFooter",
            mixins: [s(743751).A],
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
                updateDividers: o()(( () => {
                    let e;
                    document.querySelectorAll(".m-items-with-divider .l-footer__menu__item, .m-items-with-divider .l-footer-static__menu__group").forEach(( (t, s) => {
                        if (t.classList.remove("m-new-row"),
                        0 === s)
                            e = t.getBoundingClientRect().top;
                        else if (e < t.getBoundingClientRect().top) {
                            const {previousElementSibling: s} = t;
                            s && s.classList.add("m-new-row"),
                            e = t.getBoundingClientRect().top
                        }
                    }
                    ))
                }
                ), 500)
            }
        }, h, c, d = (0,
        s(281656).A)(u, i, r, !1, null, "6a4bed29", null).exports
    },
    447836: function(e, t, s) {
        s.d(t, {
            Nl: function() {
                return n
            },
            T1: function() {
                return o
            }
        });
        var i = s(826489)
          , r = s.n(i);
        const n = {
            CLICK: "CLICK",
            DOUBLE_CLICK: "DOUBLE_CLICK"
        };
        function o() {
            let e = null;
            return (t, s, i) => {
                var r;
                null === (r = t.preventDefault) || void 0 === r || r.call(t),
                null == e ? e = setTimeout(( () => {
                    e = null,
                    s(t, n.CLICK)
                }
                ), i) : (clearTimeout(e),
                e = null,
                s(t, n.DOUBLE_CLICK))
            }
        }
        t.Ay = {
            bind(e, t) {
                const s = o()
                  , r = t.arg || 400
                  , n = t.value || ( () => {}
                );
                if (i.isMobile) {
                    const t = 10;
                    let i = 0
                      , o = 0
                      , a = 0
                      , l = 0;
                    e.addEventListener("touchstart", (e => {
                        var t, s;
                        i = e.clientX || (null === (t = e.touches[0]) || void 0 === t ? void 0 : t.clientX),
                        o = e.clientY || (null === (s = e.touches[0]) || void 0 === s ? void 0 : s.clientY),
                        a = i,
                        l = o
                    }
                    )),
                    e.addEventListener("touchmove", (e => {
                        var t, s;
                        a = e.clientX || (null === (t = e.touches[0]) || void 0 === t ? void 0 : t.clientX),
                        l = e.clientY || (null === (s = e.touches[0]) || void 0 === s ? void 0 : s.clientY)
                    }
                    )),
                    e.addEventListener("touchend", (e => {
                        const u = undefined;
                        Math.abs(i - a) > t || Math.abs(o - l) > t || s(e, n, r)
                    }
                    ))
                } else
                    e.addEventListener("click", (e => {
                        s(e, n, r)
                    }
                    ))
            }
        }
    },
    743751: function(e, t, s) {
        var i = s(962953)
          , r = s.n(i);
        const n = () => Promise.all([s.e(92535), s.e(88647), s.e(55763), s.e(51486)]).then(s.bind(s, 655763));
        t.A = {
            components: {
                LangSelector: n
            },
            computed: {
                currentYear() {
                    return (new Date).getFullYear()
                },
                footerLinks() {
                    const e = undefined;
                    return (window.STATIC_PAGES || []).filter((e => e[this.isSidebarFooter ? "inSidebarFooter" : "inFooter"])).reduce(( (e, t) => [...e, {
                        path: t.url,
                        name: "object" == typeof t.name ? t.name.en : t.name,
                        type: t.type,
                        target: t.target,
                        isBold: t.isBold,
                        isExtLink: t.isExtLink
                    }]), [])
                }
            }
        }
    },
    235615: function(e, t, s) {
        var i = s(110908)
          , r = s(600958)
          , n = s(667747);
        t.A = {
            mixins: [n.A],
            computed: {
                ...(0,
                i.ZOz)(["user"]),
                ...(0,
                i.npG)(["isAuth", "authUser"]),
                ...(0,
                i.RAO)(["spotifyBio"]),
                ...(0,
                i.d7f)(["profileHighlights"]),
                ...(0,
                i.GQs)(["getSubscriber"]),
                showStoryBlock() {
                    return this.user.canLookStory && (this.user.hasStories || this.user.hasStream || this.user.hasScheduledStream || this.profileHighlights && this.profileHighlights.length) || this.isAuthUser && this.user.canAddStory
                },
                showUserLinks() {
                    return !this.isProfileUserPrivate && this.user.hasLinks
                },
                showShopify() {
                    return !this.isProfileUserPrivate && this.user.hasShopifyStores
                },
                showSpringStore() {
                    return !this.isProfileUserPrivate && !!this.user.isPerformer && !!this.user.isSpringConnected
                },
                showSpotify() {
                    var e;
                    return this.isAuthUser || !this.isProfileUserPrivate && this.user.isSpotifyConnected && !!(this.spotifyBio.anthem || null !== (e = this.spotifyBio.topArtists) && void 0 !== e && e.length)
                },
                showFriendBlock() {
                    return !(!this.user.hasFriends || !this.user.isPerformer)
                },
                isProfileRoute() {
                    return [r.A.PROFILE, r.A.PROFILE_INNER, r.A.PROFILE_LABEL].includes(this.$route.name)
                },
                showGuestFanSuggestionsBlock() {
                    return this.isProfileRoute && !this.isAuth && !this.user.isPerformer && "lg" === this.$mq
                },
                isShowLastsPhotosBlock() {
                    return "lg" === this.$mq && !!this.user.photosCount && this.user.isPerformer && !this.user.isBlocked && !this.isMyProfileHasScenario && (this.isAuthUser || this.user.subscribedBy)
                },
                hasSidebarContent() {
                    return this.isAuthUser || this.showFriendBlock || this.showSpotify || this.showUserLinks || this.showShopify || this.showStoryBlock || this.showSpringStore || this.isShowLastsPhotosBlock || this.isSubscriber || this.user.canAddSubscriber || this.showGuestFanSuggestionsBlock
                },
                isShowSidebar() {
                    return !this.isProfileUserBlocked && (!this.isHasScenario && (this.hasSidebarContent || this.hasSidebarBanner))
                },
                hasSidebarBanner() {
                    var e;
                    return !(null === (e = this.authUser) || void 0 === e || null === (e = e.advBlock) || void 0 === e || !e.includes("banners"))
                },
                subscriber() {
                    return this.getSubscriber(this.user.id) || {}
                },
                isSubscriber() {
                    return this.subscriber && Object.keys(this.subscriber).length
                },
                isProfileUserBlocked() {
                    return this.user && !this.isAuthUser && this.user.isBlocked
                },
                isProfileUserPrivate() {
                    return !this.isAuthUser && this.user && this.user.isPrivateRestriction && !this.user.subscribedBy
                }
            },
            methods: {
                ...(0,
                i.CXg)(["fetchUserLinks", "fetchNfts"]),
                ...(0,
                i.drY)(["fetchSpotifyBio"]),
                ...(0,
                i.sxm)(["resetSpotifyBio", "clearOpenSeaAssets"]),
                ...(0,
                i.tSh)(["resetUserLinks"])
            }
        }
    }
}]);
