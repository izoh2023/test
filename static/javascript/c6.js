"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[12081, 88268, 2542], {
    28778: function(t, s, e) {
        e.d(s, {
            A: function() {
                return ct
            }
        });
        var i = function t() {
            var s = this
              , e = s._self._c;
            return e("div", {
                ref: "lWrapperSidebar",
                staticClass: "l-wrapper__sidebar",
                class: {
                    "m-native-custom-scrollbar m-scrollbar-y m-scrollbar-always m-disable-autoscroll m-invisible-scrollbar": s.disableAutoScroll
                },
                style: {
                    height: `${s.sidebarHeight}`,
                    position: "auto" === s.sidebarHeight ? "relative" : "sticky"
                }
            }, [s.hasProfileSearchInput && !s.isProfilePage ? e("feed-search", {
                staticClass: "m-autocomplete-search m-default-form m-field-height-lg",
                attrs: {
                    "is-back-button": !1
                }
            }) : s._e(), s.isVisiblePostsSearchInput ? e("search-input", {
                staticClass: "m-autocomplete-search m-default-form",
                attrs: {
                    "recent-storage-name": s.RECENT_SEARCH_STORAGE_NAME,
                    placeholder: s.searchPlaceholder,
                    "no-result-message": s.searchNoResultMessage,
                    "query-mode": !1,
                    "with-tabs": !1,
                    "is-back-button": !1,
                    "search-height-size": "lg",
                    "is-show": ""
                },
                on: {
                    change: function(t) {
                        return s.submitSearch(t, !0)
                    }
                }
            }) : s._e(), s.hasSidebarContent ? e("div", {
                staticClass: "b-profile-list",
                class: {
                    "m-separate-line": s.hasSidebarBanner && s.isDesktop
                }
            }, [s.showGuestFanSuggestionsBlock ? e("guest-fan-suggestions") : s._e(), s.isShowLastsPhotosBlock ? e("last-posts", {
                key: s.user.id
            }) : s._e(), e("ul", {
                staticClass: "b-profile__content__list m-end",
                class: {
                    "m-my-profile": s.isAuthUser
                }
            }, [s.authUser.isPerformer && s.isSubscriber ? e("widget-wrapper", {
                attrs: {
                    title: s.$t("message.fan_statistics"),
                    name: "isShowFanStats"
                }
            }, [e("ul", {
                staticClass: "b-fans__item__list m-fan-stats"
            }, [e("li", {
                staticClass: "b-fans__item__list__item"
            }, [e("span", {
                staticClass: "b-fans__item__list__label"
            }, [s._v(" " + s._s(s.isExpired ? s.$t("message.expired_title") : `${s.$t("message.subscribed_btn")}${s.$t("message.for")}`) + " ")]), e("span", [s._v(" " + s._s(s.isExpired ? s.humanDate(s.subscriber.expiredAt) : s.subscriber.duration) + " ")])]), e("li", {
                staticClass: "b-fans__item__list__item"
            }, [e("span", {
                staticClass: "b-fans__item__list__label"
            }, [s._v(" " + s._s(s.$t("message.fan_spent")) + " ")]), s._v(" " + s._s(s.totalSumm) + " ")]), e("li", {
                staticClass: "b-fans__item__list__item m-reset-pb"
            }, [e("span", {
                staticClass: "g-btn m-flat m-link m-no-uppercase m-reset-width m-default-font-weight",
                on: {
                    click: s.openSubscriberPopup
                }
            }, [s._v(" " + s._s(s.$t("message.profile_more_info_button")) + " ")])])])]) : s._e(), s.isUserLinks ? e("widget-wrapper", {
                attrs: {
                    title: s.$t("message.things_i_like"),
                    name: "isShowLinks"
                }
            }, [e("things-i-like-widget")], 1) : s._e(), s.isUserNfts ? e("widget-wrapper", {
                attrs: {
                    title: s.nftTitle,
                    name: "isShowNfts",
                    "btn-class": "m-no-text-transform"
                }
            }, [e("nft-assets-widget")], 1) : s._e(), s.showShopify ? e("widget-wrapper", {
                attrs: {
                    title: s.$t("message.shopify_products"),
                    name: "isShowShopify",
                    "container-class": "b-profile__bio__content"
                }
            }, [e("shopify-products-widget")], 1) : s._e(), s.showSpringStore ? e("widget-wrapper", {
                attrs: {
                    title: s.$t("message.settings_spring_store_account"),
                    name: "isShowSpringStore",
                    "container-class": "b-profile__bio__content"
                }
            }, [e("spring-store-widget", {
                attrs: {
                    "user-id": s.user.id,
                    widget: ""
                }
            })], 1) : s._e(), s.showFriendBlock ? e("widget-wrapper", {
                attrs: {
                    title: s.$t("message.profile_show_friends_button"),
                    name: "isShowFriends",
                    "container-class": "b-profile__friends__list"
                }
            }, [e("friends-widget")], 1) : s._e(), s.showSpotify ? e("widget-wrapper", {
                attrs: {
                    title: s.$t("message.profile_show_spotify_button"),
                    name: "isShowSpotify",
                    "container-class": "b-profile__bio__content"
                }
            }, [s.user.isSpotifyConnected ? e("spotify-widget") : s.isAuthUser ? e("spotify-settings") : s._e()], 1) : s._e(), s.isOffersBlock ? e("li", {
                staticClass: "b-profile__content__item"
            }, [e("offers-block", {
                staticClass: "m-offer-bottom-gap-reset mb-0",
                attrs: {
                    id: s.user.id,
                    "show-bundles": !1
                }
            })], 1) : s._e(), s.hasSubscriptionPromo ? e("li", {
                staticClass: "b-profile__content__item"
            }, [e("subscription-promo")], 1) : s._e()], 1)], 1) : s._e(), s.hasSidebarBanner && s.isDesktop ? e("banner-place") : s._e(), "lg" === s.$mq ? e("website-footer") : s._e()], 1)
        }, r = [], a = e(885471), o = e(974353), n = e.n(o), l = e(110908), c = e(747230), p = e(57523), d = e(697352), u = e(851884), m = e(668786), h = e(430685), f = function t() {
            var s = this
              , e = s._self._c;
            return e("li", {
                staticClass: "b-profile__content__item",
                class: {
                    active: s.isShow
                }
            }, [e("button", {
                class: `b-section-title m-row m-collapsible g-gray-text m-with-rectangle-hover m-tb-sm ${s.btnClass}`,
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        s.toggleWidgetState.apply(null, arguments)
                    }
                }
            }, [s._v(" " + s._s(s.title) + " "), e("span", {
                staticClass: "b-section-title__arrow"
            }, [e("svg", {
                directives: [{
                    name: "svg-sprite",
                    rawName: "v-svg-sprite:icon-arrow-down",
                    arg: "icon-arrow-down"
                }],
                staticClass: "m-button-arrow"
            })])]), e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: s.isShow,
                    expression: "isShow"
                }],
                class: s.containerClass
            }, [s._t("default")], 2)])
        }, g = [], _ = e(284419), b, y = {
            props: {
                title: {
                    type: String,
                    required: !0
                },
                name: {
                    type: String,
                    required: !0
                },
                btnClass: {
                    type: String,
                    default: "g-text-uppercase"
                },
                containerClass: {
                    type: String,
                    default: "b-tab-container"
                }
            },
            data() {
                return {
                    isShow: !0
                }
            },
            computed: {
                ...(0,
                l.ZOz)(["user"]),
                localStorageKey() {
                    return `${this.user.id}_${this.name}`
                }
            },
            created() {
                this.isShow = "false" !== _.A.getItem(this.localStorageKey)
            },
            methods: {
                toggleWidgetState() {
                    this.isShow = !this.isShow,
                    _.A.setItem(this.localStorageKey, this.isShow)
                }
            }
        }, S = e(281656), v, w = (0,
        S.A)(y, f, g, !1, null, null, null).exports, A = e(489463), C = function t() {
            var s = this
              , e = s._self._c;
            return e("div", {
                staticClass: "b-things"
            }, [e("drag-scroll", {
                staticClass: "m-gaps-inside m-wrap-items-text"
            }, [s._l(s.userLinks, (function(t) {
                return [t.url ? e("info-card", {
                    key: t.id,
                    attrs: {
                        url: t.url,
                        title: t.title,
                        description: t.description,
                        name: s.getLinkType(t.url),
                        text: s.getLinkType(t.url).substring(0, 1),
                        image: s.getImage(t)
                    }
                }) : s._e()]
            }
            ))], 2)], 1)
        }, k = [], $ = e(73300), P = e(808139), x = e(600097), B, T = {
            name: "ThingsILikeWidget",
            components: {
                InfoCard: $.A,
                DragScroll: P.A
            },
            mixins: [x.e],
            computed: {
                ...(0,
                l._84)(["userLinks"])
            }
        }, L, H = (0,
        S.A)(T, C, k, !1, null, null, null).exports, U = function t() {
            var s = this
              , e = s._self._c;
            return e("div", {
                staticClass: "b-things"
            }, [e("drag-scroll", {
                staticClass: "m-gaps-inside m-wrap-items-text"
            }, [s._l(s.nfts, (function(t) {
                return [t.permalink ? e("info-card-wrapper", {
                    key: t.id,
                    attrs: {
                        href: t.permalink,
                        title: t.name || ""
                    }
                }, [e("div", {
                    staticClass: "b-profile-info-card__preview",
                    style: s.getStyle(t)
                }), e("div", {
                    staticClass: "b-profile-info-card__section"
                }, [e("span", {
                    staticClass: "b-profile-info-card__section-icon"
                }, [e("svg", {
                    directives: [{
                        name: "svg-sprite",
                        rawName: "v-svg-sprite:icon-link",
                        arg: "icon-link"
                    }]
                })]), e("span", {
                    staticClass: "b-profile-info-card__section-name m-few-lines m-break-word-default"
                }, [s._v(s._s(t.name))])])]) : s._e()]
            }
            ))], 2)], 1)
        }, I = [], W, E, N = {
            name: "NftAssetsWidget",
            components: {
                InfoCardWrapper: e(893310).A,
                DragScroll: P.A
            },
            computed: {
                ...(0,
                l._84)(["nfts"]),
                getStyle: () => t => t.imagePreviewUrl ? `background-image: url(${t.imagePreviewUrl})` : ""
            }
        }, R, D = (0,
        S.A)(N, U, I, !1, null, null, null).exports, O = e(21527), M = function t() {
            var s = this
              , e = s._self._c;
            return e("div", {
                staticClass: "b-tab-container"
            }, [s.spotifyBioAnthem || s.spotifyBioTopArtists.length ? e("div", {
                staticClass: "b-spotify d-flex align-items-start"
            }, [e("drag-scroll", {
                staticClass: "m-with-scrollbar m-reset-center m-gaps-inside"
            }, [s.isAnthemFilled ? e("div", {
                staticClass: "b-spotify__item"
            }, [e("div", {
                staticClass: "b-spotify__title g-semibold g-sm-text m-mb-8 mw-100"
            }, [s._v(" " + s._s(s.$t("message.spotify_anthem_title")) + " ")]), e("a", {
                staticClass: "b-spotify__preview",
                style: "background-image: url(" + s.spotifyBioAnthem.album.images[1].url + ")",
                attrs: {
                    href: s.spotifyBioAnthem.external_urls.spotify,
                    target: "_blank"
                }
            }, [e("div", {
                staticClass: "b-spotify__name g-semibold g-md-text"
            }, [s._v(s._s(s.spotifyBioAnthem.name))])]), e("div", {
                staticClass: "b-spotify__desc g-md-text d-flex align-items-center m-mt-8 g-gray-text"
            }, [e("svg", {
                directives: [{
                    name: "svg-sprite",
                    rawName: "v-svg-sprite:icon-logo-spotify",
                    arg: "icon-logo-spotify"
                }],
                staticClass: "b-spotify__logo"
            }), s._v(" " + s._s(s.spotifyBioAnthem.artists.map(( ({name: t}) => t)).join(", ")) + " ")])]) : s._e(), s.spotifyBioTopArtists.length ? e("div", {
                staticClass: "b-spotify__section"
            }, [e("span", {
                staticClass: "b-spotify__title g-semibold g-sm-text m-mb-8 mw-100"
            }, [s._v(" " + s._s(s.$t("message.spotify_top_title")) + " ")]), e("div", {
                staticClass: "b-spotify__group-items m-reset-center m-gaps-inside m-gaps-outside d-flex"
            }, s._l(s.spotifyBioTopArtists, (function(t) {
                return e("div", {
                    key: t.id,
                    staticClass: "b-spotify__item"
                }, [e("a", {
                    staticClass: "b-spotify__preview",
                    class: {
                        "m-default-bg": !s.artistsBackgroundStyles[t.id]
                    },
                    style: s.artistsBackgroundStyles[t.id],
                    attrs: {
                        href: t.external_urls.spotify,
                        target: "_blank"
                    }
                }, [e("div", {
                    staticClass: "b-spotify__name g-semibold g-md-text"
                }, [s._v(s._s(t.name))])])])
            }
            )), 0)]) : s._e()])], 1) : e("div", {
                staticClass: "g-section__header g-sides-gaps pt-0"
            }, [e("h2", {
                staticClass: "g-section-title"
            }, [s._v(" " + s._s(s.$t("message.settings_spotify_account")) + " ")]), e("router-link", {
                staticClass: "g-btn m-border m-rounded m-sm m-lg-gaps-sides",
                attrs: {
                    to: {
                        name: "SettingsSpotify"
                    }
                }
            }, [s._v(" " + s._s(s.$t("message.name_section_settings")) + " ")])], 1)])
        }, F = [], z = e(858156), G = e.n(z), q, V = {
            name: "SpotifyWidget",
            components: {
                DragScroll: P.A
            },
            computed: {
                ...(0,
                l._q5)(["spotifyBioTopArtists", "spotifyBioAnthem"]),
                isAnthemFilled() {
                    return !!(G()(this.spotifyBioAnthem, "external_urls.spotify") && G()(this.spotifyBioAnthem, "album.images[1].url") && this.spotifyBioAnthem.name && Array.isArray(this.spotifyBioAnthem.artists))
                },
                artistsBackgroundStyles() {
                    var t;
                    return null !== (t = this.spotifyBioTopArtists) && void 0 !== t && t.length ? this.spotifyBioTopArtists.reduce(( (t, {id: s, images: e}) => {
                        if (!e.length)
                            return {
                                ...t,
                                [s]: ""
                            };
                        const {url: i} = e[1] || e[0];
                        return {
                            ...t,
                            [s]: `background-image: url(${i})`
                        }
                    }
                    ), {}) : {}
                }
            }
        }, Y, K = (0,
        S.A)(V, M, F, !1, null, "5d6dae11", null).exports, Z = e(775099), j = e(128211), X = e(807647), Q = e(668567), J = e(345231), tt = e(620514), st = e(571441), et = e(235615), it = e(708075), rt = e(600958), at = e(709306), ot, nt = {
            name: "UserList",
            components: {
                SearchInput: Z.A,
                LastPosts: c.A,
                FeedSearch: u.default,
                BannerPlace: p.A,
                OffersBlock: h.A,
                SpotifyWidget: K,
                FriendsWidget: O.A,
                WebsiteFooter: m.A,
                WidgetWrapper: w,
                NftAssetsWidget: D,
                SpotifySettings: X.A,
                ThingsILikeWidget: H,
                SubscriptionPromo: d.A,
                SpringStoreWidget: j.A,
                ShopifyProductsWidget: Q.A,
                GuestFanSuggestions: J.A
            },
            mixins: [tt.k, st.A, et.A],
            props: {
                disableAutoScroll: {
                    type: Boolean,
                    default: !1
                }
            },
            setup() {
                const {isRestrictedPosts: t, searchPlaceholder: s, searchNoResultMessage: e, submitSearch: i} = (0,
                it.A)()
                  , {proxy: r} = (0,
                a.getCurrentInstance)()
                  , o = undefined;
                return {
                    searchPlaceholder: s,
                    searchNoResultMessage: e,
                    isVisiblePostsSearchInput: (0,
                    a.computed)(( () => r.hasProfileSearchInput && r.isProfilePage && !t.value)),
                    RECENT_SEARCH_STORAGE_NAME: at.V,
                    submitSearch: i
                }
            },
            data() {
                return {
                    lastScrollTop: 0,
                    sidebarHeight: this.disableAutoScroll ? "sticky" : "auto"
                }
            },
            computed: {
                ...(0,
                l._84)(["nfts", "userLinks"]),
                ...(0,
                l.ZOz)(["user"]),
                ...(0,
                l.npG)(["isAuth", "authUser"]),
                ...(0,
                l.GF1)(["streams"]),
                ...(0,
                l.RAO)(["spotifyBio"]),
                ...(0,
                l.B4G)(["route"]),
                isUserLinks() {
                    return this.userLinks && !!this.userLinks.length
                },
                isUserNfts() {
                    return this.user.openseaInfo.hasNft && !!this.nfts.length
                },
                userStream() {
                    return (this.streams || []).find((t => t.user === this.user.id))
                },
                isExpired() {
                    return !!this.subscriber && (!this.subscriber.renewedAt && this.subscriber.expiredAt && +new Date(this.subscriber.expiredAt) - +new Date <= 0)
                },
                totalSumm() {
                    return this.subscriber ? this.amountHumanShort(this.subscriber.totalSumm) : "$0"
                },
                isDesktop() {
                    return "lg" === this.$mq
                },
                isOffersBlock() {
                    return !(!this.isDesktop || this.isAuthUser) && (!!this.user.subscribedBy || this.user.canAddSubscriber)
                },
                hasProfileSearchInput() {
                    return this.isDesktop && this.isAuth && !["Post", rt.A.PROFILE_SEARCH].includes(this.$route.name)
                },
                isProfilePage() {
                    return this.isDesktop && this.isAuth && this.isProfileRoute
                },
                hasSubscriptionPromo() {
                    return this.isDesktop && this.isAuthUser && this.authUser.isPerformer
                },
                nftTitle() {
                    return this.isAuthUser ? this.$t("message.my_nfts") : this.$t("message.nfts")
                }
            },
            async mounted() {
                this.disableAutoScroll || (this.isDesktop && window.addEventListener("scroll", this.windowScrollHandler),
                window.addEventListener("resize", this.windowResizeHandler))
            },
            beforeDestroy() {
                window.removeEventListener("scroll", this.windowScrollHandler),
                window.addEventListener("resize", this.windowResizeHandler)
            },
            methods: {
                ...(0,
                l.tSh)(["setModalUser", "setForceFriendsReload"]),
                ...(0,
                l.QW3)(["setModalOffer"]),
                openSubscriberPopup() {
                    this.setModalUser({
                        userId: this.user.id
                    }),
                    this.setModalOffer(this.offerId),
                    this.$nextTick(( () => {
                        this.$root.$emit("bv::show::modal", "ModalSubscribersItem")
                    }
                    ))
                },
                windowScrollHandler(t) {
                    var s;
                    if (!this.$refs.lWrapperSidebar)
                        return this.sidebarHeight = "auto",
                        void window.removeEventListener("scroll", this.windowScrollHandler);
                    if (this.isDesktop && null !== (s = t.target) && void 0 !== s && s.documentElement && this.$refs.lWrapperSidebar && this.$refs.lWrapperSidebar.scrollHeight < document.body.scrollHeight) {
                        const s = t.target.documentElement.scrollTop <= 0 ? 0 : t.target.documentElement.scrollTop
                          , e = this.$refs.lWrapperSidebar.scrollHeight - this.$refs.lWrapperSidebar.clientHeight
                          , i = s - this.lastScrollTop;
                        this.sidebarHeight = `${window.innerHeight}px`,
                        (e > this.$refs.lWrapperSidebar.scrollTop || i < 0 && 0 !== this.$refs.lWrapperSidebar.scrollTop) && this.$refs.lWrapperSidebar.scroll(0, this.$refs.lWrapperSidebar.scrollTop + i),
                        this.lastScrollTop = s
                    } else
                        this.sidebarHeight = "auto"
                },
                windowResizeHandler() {
                    this.isDesktop && this.$refs.lWrapperSidebar && this.$refs.lWrapperSidebar.scrollHeight < document.body.scrollHeight ? window.addEventListener("scroll", this.windowScrollHandler) : (window.removeEventListener("scroll", this.windowScrollHandler),
                    this.sidebarHeight = "auto")
                },
                humanDate(t) {
                    return n()(t).format("MMM D, YYYY")
                }
            }
        }, lt, ct = (0,
        S.A)(nt, i, r, !1, null, "39a6a486", null).exports
    },
    480263: function(t, s, e) {
        e.d(s, {
            A: function() {
                return c
            }
        });
        var i = function t() {
            var s = this, e;
            return (0,
            s._self._c)("div", {
                staticClass: "b-settings"
            }, [s._t("default")], 2)
        }, r = [], a, o = {
            name: "SettingsWrapper"
        }, n, l, c = (0,
        e(281656).A)(o, i, r, !1, null, "0affd44c", null).exports
    },
    668567: function(t, s, e) {
        e.d(s, {
            A: function() {
                return _
            }
        });
        var i = function t() {
            var s = this
              , e = s._self._c;
            return e("div", {
                staticClass: "b-tab-container"
            }, [e("div", {
                staticClass: "b-things"
            }, [s.isLoading ? e("spinner-loader", {
                staticClass: "m-shopify-products__preloader"
            }) : s.shopifyProducts.length ? e("drag-scroll", {
                staticClass: "m-gaps-inside m-wrap-items-text"
            }, [s._l(s.shopifyProducts, (function(t) {
                return e("info-card-wrapper", {
                    key: t.id,
                    attrs: {
                        href: s.isAdmin && t.url ? t.url : t.publicUrl
                    }
                }, [s.isAdmin && t.status ? e("span", {
                    staticClass: "b-dropzone__preview__badge"
                }, [s._v(" " + s._s(t.status) + " ")]) : s._e(), e("div", {
                    staticClass: "b-profile-info-card__preview"
                }, [e("img", {
                    attrs: {
                        src: s.getImage(t),
                        alt: "",
                        loading: "lazy"
                    }
                }), e("div", {
                    staticClass: "b-profile-info-card__title"
                }, [s._v(" " + s._s(t.title) + " ")])]), e("div", {
                    staticClass: "b-profile-info-card__section"
                }, [e("span", {
                    directives: [{
                        name: "safe-html",
                        rawName: "v-safe-html",
                        value: {
                            text: s.getDiapString(t)
                        },
                        expression: "{ text: getDiapString(product) }"
                    }],
                    staticClass: "b-profile-info-card__section-name g-text-ellipsis"
                })])])
            }
            )), s.hasMore ? e("horizontal-infinite-loading", {
                on: {
                    infinite: s.infiniteHandler
                }
            }) : s._e()], 2) : e("div", {
                staticClass: "empty-message"
            }, [s._v(" " + s._s(s.$t("message.no_shopify_products")) + " ")]), s.isAdmin ? s._e() : e("div", {
                staticClass: "b-link-more text-center"
            }, [e("a", {
                staticClass: "g-btn m-flat m-btn-gaps",
                class: {
                    disabled: !s.storeUrl
                },
                attrs: {
                    target: "_blank",
                    rel: "nofollow noopener noreferrer",
                    href: s.storeUrl || "#"
                }
            }, [s._v(" " + s._s(s.$t("message.see_more_products")) + " ")])])], 1)])
        }
          , r = []
          , a = e(962953)
          , o = e(110908)
          , n = e(893310)
          , l = e(252832)
          , c = e(808139)
          , p = e(118878)
          , d = e(191646);
        const u = Math.ceil(128 * window.devicePixelRatio);
        var m, h = {
            name: "ShopifyProductsWidget",
            components: {
                InfoCardWrapper: n.A,
                SpinnerLoader: l.default,
                DragScroll: c.A,
                HorizontalInfiniteLoading: p.A
            },
            mixins: [d.wd],
            props: {
                isAdmin: {
                    type: Boolean,
                    default: !1
                }
            },
            data() {
                return {
                    isLoading: !0,
                    hasMore: !1,
                    marker: null
                }
            },
            computed: {
                ...(0,
                o.KlM)(["stores"]),
                ...(0,
                o.pnk)(["shopifyProducts"]),
                ...(0,
                o.ZOz)(["user"]),
                storeUrl() {
                    const {domain: t} = this.stores[0] || {};
                    return t && `https://${t}`
                }
            },
            async mounted() {
                this.isAdmin || this.fetchShopifyStores({
                    userId: this.user.id
                }),
                await this.getProducts(),
                this.isLoading = !1
            },
            methods: {
                ...(0,
                o.OeC)(["fetchShopifyStores", "fetchShopifyProducts"]),
                getDiapString(t) {
                    let s = 0
                      , e = 0;
                    const i = undefined
                      , r = [...t.variants].sort(( (t, s) => +t.price > +s.price ? 1 : -1))
                      , a = r[0];
                    return s = a.price,
                    e = r[r.length - 1].price,
                    s === e ? this.currencyHardcode(a.comparePrice ? `<span class="text-line-through">${this.amountHumanShort(a.comparePrice, "")}</span> ${this.amountHumanShort(s, "")}` : this.amountHumanShort(s, ""), a.currency) : this.currencyHardcode(`${this.amountHumanShort(s, "")} - ${this.amountHumanShort(e, "")}`, a.currency)
                },
                currencyHardcode(t, s) {
                    switch (s) {
                    case "USD":
                        return `$${t}`;
                    case "GBP":
                        return `£${t}`;
                    default:
                        return `${t} ${s}`
                    }
                },
                getImage(t) {
                    return `${t.image}&width=${u}&height=${u}&crop=center`
                },
                async getProducts() {
                    const {hasMore: t, marker: s} = await this.fetchShopifyProducts({
                        userId: !this.isAdmin && this.user.id,
                        marker: this.marker,
                        limit: 10
                    });
                    return this.hasMore = t,
                    this.marker = s,
                    t
                },
                async infiniteHandler(t) {
                    const s = undefined;
                    await this.getProducts() ? t.loaded() : t.complete()
                }
            }
        }, f, g, _ = (0,
        e(281656).A)(h, i, r, !1, null, "132b30a5", null).exports
    },
    807647: function(t, s, e) {
        e.d(s, {
            A: function() {
                return _
            }
        });
        var i = function t() {
            var s = this
              , e = s._self._c;
            return e("div", {
                class: {
                    "b-settings__content": s.$route.meta.isPage
                }
            }, [e("div", {
                staticClass: "b-wrapper-spotify",
                class: {
                    "b-menu-list": s.$route.meta.isPage,
                    "g-overflow-hidden": !s.authUser.isSpotifyConnected
                }
            }, [s.authUser.isSpotifyConnected ? [e("div", {
                staticClass: "b-settings__block w-100 g-border-bottom"
            }, [e("div", {
                staticClass: "g-input__wrapper b-settings__spacer"
            }, [e("div", {
                staticClass: "b-field-like"
            }, [e("svg", {
                directives: [{
                    name: "svg-sprite",
                    rawName: "v-svg-sprite:icon-logo-spotify",
                    arg: "icon-logo-spotify"
                }],
                staticClass: "m-malachite-color"
            }), e("span", {
                staticClass: "g-blue"
            }, [s._v(" @" + s._s(s.spotifyBio.displayName) + " ")])])]), e("div", {
                staticClass: "b-settings__row g-btn__wrapper"
            }, [e("button", {
                staticClass: "g-btn m-border m-rounded m-sm",
                attrs: {
                    type: "button",
                    disabled: s.disabledSpotify
                },
                on: {
                    click: s.disableSpotify
                }
            }, [s._v(" " + s._s(s.$t("message.disconnect_twitter_account_button")) + " ")])])]), e("div", {
                staticClass: "b-menu-list"
            }, [e("h2", {
                staticClass: "b-menu-list__el mb-0"
            }, [e("span", {
                staticClass: "b-menu-list__text g-semibold"
            }, [s._v(" " + s._s(s.$t("message.settings_spotify_anthem")) + " ")])]), e("router-link", {
                staticClass: "b-menu-list__el m-with-rectangle-hover m-tb-sm",
                class: {
                    "no-padding": s.spotifyBioAnthem
                },
                attrs: {
                    to: {
                        name: "SpotifyAnthem"
                    },
                    custom: ""
                }
            }, [s.spotifyBioAnthem ? e("div", {
                staticClass: "b-available-users__item m-place-for-media"
            }, [e("span", {
                staticClass: "b-available-users__round-img"
            }, [e("img", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: s.spotifyBioAnthem.name,
                    expression: "spotifyBioAnthem.name"
                }],
                attrs: {
                    src: s.albumImage(s.spotifyBioAnthem.album),
                    alt: s.spotifyBioAnthem.name,
                    loading: "lazy"
                }
            })]), e("span", {
                staticClass: "b-username-row m-gap-clear m-width-limit"
            }, [e("span", {
                staticClass: "b-username m-flex"
            }, [e("span", {
                staticClass: "g-user-name"
            }, [s._v(" " + s._s(s.spotifyBioAnthem.name) + " ")])])]), e("span", {
                staticClass: "b-username-row m-gap-clear m-width-limit"
            }, [e("span", {
                staticClass: "b-username"
            }, [e("span", {
                staticClass: "g-user-username"
            }, [s._v(" " + s._s(s.userAnthemArtist) + " ")])])])]) : e("div", [s._v(" " + s._s(s.userAnthemArtist) + " ")]), e("span", {
                staticClass: "b-menu-list__icon"
            }, [e("svg", {
                directives: [{
                    name: "svg-sprite",
                    rawName: "v-svg-sprite:icon-edit",
                    arg: "icon-edit"
                }]
            })])])], 1), e("div", {
                staticClass: "b-menu-list"
            }, [e("h2", {
                staticClass: "b-menu-list__el mb-0"
            }, [e("span", {
                staticClass: "b-menu-list__text g-semibold"
            }, [s._v(" " + s._s(s.$t("message.settings_spotify_top_artists")) + " ")])]), e("router-link", {
                staticClass: "b-menu-list__el m-with-rectangle-hover m-tb-sm",
                attrs: {
                    to: {
                        name: "SpotifyArtists"
                    },
                    disabled: !s.hasSpotifyTopArtists
                }
            }, [e("span", {
                staticClass: "b-menu-list__text"
            }, [s._v(" " + s._s(s.listOfTopSpotifyArtists) + " ")]), e("span", {
                staticClass: "b-menu-list__icon"
            }, [e("svg", {
                directives: [{
                    name: "svg-sprite",
                    rawName: "v-svg-sprite:icon-edit",
                    arg: "icon-edit"
                }]
            })])])], 1)] : e("div", {
                class: {
                    "b-settings__row g-btn__wrapper": s.$route.meta.isPage,
                    "g-sides-gaps": !s.$route.meta.isPage
                }
            }, [e("a", {
                staticClass: "g-btn m-rounded m-block m-spotify m-lg m-social-btn",
                class: {
                    "mt-1": s.$route.meta.isPage,
                    "m-mb-16": !s.$route.meta.isPage && !s.$mq.includes("sm")
                },
                attrs: {
                    href: s.connectLink
                }
            }, [e("span", {
                staticClass: "b-btn-social-icon"
            }, [e("svg", {
                directives: [{
                    name: "svg-sprite",
                    rawName: "v-svg-sprite:icon-logo-spotify",
                    arg: "icon-logo-spotify"
                }]
            })]), s._v(" " + s._s(s.$t("message.connect_spotify_button")) + " ")])])], 2)])
        }, r = [], a = e(725440), o = e(962953), n = e(548408), l = e(814603), c = e(147566), p = e(198721), d = e(110908), u = e(977434), m, h = {
            name: "SpotifySettings",
            props: {
                isValid: {
                    type: Boolean,
                    default: !0
                },
                allDataSaved: {
                    type: Boolean,
                    default: !0
                }
            },
            data() {
                return {
                    disabledSpotify: !1
                }
            },
            computed: {
                ...(0,
                d.npG)(["authUser"]),
                ...(0,
                d.why)(["csrf"]),
                ...(0,
                d.RAO)(["spotifyBio"]),
                ...(0,
                d._q5)(["spotifyTopArtists", "spotifyTopTracks", "spotifyBioTopArtists", "spotifyBioAnthem"]),
                connectLink() {
                    const {origin: t, pathname: s} = window.location
                      , e = new URLSearchParams({
                        "app-token": u.Sh,
                        return_url: `${t}${s}`,
                        csrf: this.csrf
                    }).toString();
                    return `${u.y0}${u.XV}/proxy/spotify?${e}`
                },
                hasSpotifyTopArtists() {
                    return !!this.spotifyTopArtists.length
                },
                listOfTopSpotifyArtists() {
                    return this.spotifyBioTopArtists.length ? this.spotifyBioTopArtists.map(( ({name: t}) => t)).join(", ") : this.hasSpotifyTopArtists ? this.$t("message.settings_spotify_select_artists") : this.$t("message.settings_spotify_no_artists")
                },
                userAnthemArtist() {
                    return this.spotifyBioAnthem ? this.spotifyBioAnthem.artists.map(( ({name: t}) => t)).join(", ") : this.spotifyTopTracks.length ? this.$t("message.settings_spotify_select_anthem") : this.$t("message.settings_spotify_no_anthem")
                }
            },
            watch: {
                authUser(t, s) {
                    t.isSpotifyConnected && !s.isSpotifyConnected && (this.fetchSpotifyBio(),
                    this.fetchSpotifyTop())
                }
            },
            mounted() {
                this.checkSpotifyTokens(),
                this.authUser.isSpotifyConnected && (this.fetchSpotifyBio(),
                this.fetchSpotifyTop())
            },
            methods: {
                ...(0,
                d.CXg)(["connectSpotify", "disconnectSpotify"]),
                ...(0,
                d.drY)(["fetchSpotifyBio", "fetchSpotifyTop", "fetchSpotifyTopArtists"]),
                checkSpotifyTokens() {
                    const {access_token: t, refresh_token: s, token_expiration: e} = this.$route.query;
                    t && s && e && (this.$router.replace(this.$route.path),
                    this.connectSpotify({
                        accessToken: t,
                        tokenExpiration: e,
                        refreshToken: s
                    }))
                },
                async disableSpotify() {
                    this.disabledSpotify = !0,
                    await this.disconnectSpotify(),
                    this.disabledSpotify = !1
                },
                albumImage(t) {
                    return null == t ? void 0 : t.images[t.images.length - 1].url
                }
            }
        }, f, g, _ = (0,
        e(281656).A)(h, i, r, !1, null, null, null).exports
    },
    128211: function(t, s, e) {
        e.d(s, {
            A: function() {
                return d
            }
        });
        var i = function t() {
            var s = this
              , e = s._self._c;
            return s.isLoading ? e("spinner-loader", {
                staticClass: "pb-2 pt-2",
                style: {
                    height: `${s.widgetHeight}px`
                }
            }) : s.springUrl ? e("div", {
                staticClass: "g-input__wrapper",
                class: {
                    "m-reset-bottom-gap": s.widget
                }
            }, [e("iframe", {
                staticClass: "w-100",
                attrs: {
                    src: s.springUrl,
                    height: s.widgetHeight,
                    width: s.widgetWidth,
                    title: "Merch store powered by Spring"
                }
            })]) : s._e()
        }, r = [], a = e(252832), o = e(110908), n, l = {
            name: "SpringStoreWidget",
            components: {
                SpinnerLoader: a.default
            },
            props: {
                userId: {
                    type: Number,
                    default: 0
                },
                widget: {
                    type: Boolean,
                    default: !1
                },
                widgetHeight: {
                    type: Number,
                    default: 440
                },
                widgetWidth: {
                    type: Number,
                    default: 676
                }
            },
            data() {
                return {
                    isLoading: !1
                }
            },
            computed: {
                ...(0,
                o.ZOz)(["getUser"]),
                ...(0,
                o.npG)(["authUser"]),
                user() {
                    return this.getUser(this.userId)
                },
                isSpringConnected() {
                    return this.user.isSpringConnected
                },
                springUrl() {
                    return this.user.springStoreUrl
                }
            },
            watch: {
                isSpringConnected(t, s) {
                    t && !s && this.fetch()
                }
            },
            async mounted() {
                this.isSpringConnected && this.fetch()
            },
            methods: {
                ...(0,
                o.CXg)(["fetchSpringStoreUrl"]),
                async fetch() {
                    this.isLoading = !0,
                    await this.fetchSpringStoreUrl({
                        userId: this.userId
                    }),
                    this.isLoading = !1
                }
            }
        }, c, p, d = (0,
        e(281656).A)(l, i, r, !1, null, null, null).exports
    },
    247377: function(t, s, e) {
        var i = e(885471)
          , r = e(203852)
          , a = e(47452)
          , o = e(600958)
          , n = e(893109);
        function l(t) {
            if (!(0,
            i.isRef)(t))
                return;
            const {store: s} = (0,
            r.A)()
              , {routeName: e} = (0,
            a.A)()
              , l = (0,
            i.computed)(( () => s.getters["auth/isAuth"]))
              , c = (0,
            i.computed)(( () => e.value === o.A.PROFILE))
              , p = (0,
            i.computed)(( () => e.value === o.A.PROFILE_INNER))
              , d = (0,
            i.computed)(( () => e.value === n.A.POST_LABEL))
              , u = (0,
            i.computed)(( () => e.value === o.A.PROFILE_SEARCH))
              , m = (0,
            i.computed)(( () => u.value))
              , h = (0,
            i.computed)(( () => l.value && t.value.isPerformer && t.value.hasLabels && !p.value && !d.value));
            return {
                isProfilePage: c,
                isPostLabelPage: d,
                isProfileInnerPage: p,
                isProfileSearchPage: u,
                isLabelChipsVisible: h,
                isHidePostsLabelsCounters: m
            }
        }
        s.A = l
    }
}]);
