"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[23600], {
    747230: function(t, e, s) {
        s.d(e, {
            A: function() {
                return h
            }
        });
        var i = function t() {
            var e = this
              , s = e._self._c;
            return e.isLoading || e.itemIds.length ? s("div", {
                staticClass: "b-profile__content__item"
            }, [s("div", {
                staticClass: "b-section-title m-row g-text-uppercase g-gray-text"
            }, [e._v(" " + e._s(e.$t("message.section_title_recent")) + " ")]), e.isLoading ? s("spinner-loader", {
                staticClass: "m-last-posts__preloader m-mb-16"
            }) : e.itemIds.length ? s("div", {
                staticClass: "b-photos m-recent-list g-sides-gaps m-pb-16 mb-0 m-col-3"
            }, e._l(e.showingPosts, (function(t) {
                return s("users-post-grid", {
                    key: e.getKey(t),
                    staticClass: "m-square",
                    attrs: {
                        post: t.post,
                        "is-disabled-attachment-icons": !t.isLocked,
                        "show-play-btn": !1,
                        "is-last-posts": "",
                        "need-lightbox": !1
                    },
                    on: {
                        mediaDetails: e.setGalleryIndex
                    }
                })
            }
            )), 1) : e._e()], 1) : e._e()
        }, o = [], r = s(110908), a = s(545743), n = s(252832), l = s(561594), u = s(43253), d, m = {
            name: "ProfileLastPosts",
            components: {
                UsersPostGrid: a.A,
                SpinnerLoader: n.default
            },
            mixins: [l.A, u.A],
            data() {
                return {
                    isLoading: !0
                }
            },
            computed: {
                ...(0,
                r.wiF)(["itemIds", "lastSavedUserId"]),
                ...(0,
                r.kbi)(["getPostById"]),
                ...(0,
                r.ZOz)(["user"]),
                showingPosts() {
                    const t = 3
                      , e = undefined;
                    return this.getProcessedRecentPosts(this.itemIds.map((t => this.getPostById(t))).filter((t => !!t))).slice(0, 3)
                }
            },
            async mounted() {
                const t = undefined;
                !this.showingPosts.length && await this.fetchLastPosts({
                    id: this.user.id
                }),
                this.isLoading = !1
            },
            created() {
                const t = undefined;
                this.lastSavedUserId !== this.user.id && this.setItemIds()
            },
            methods: {
                ...(0,
                r.nen)(["setItemIds"]),
                ...(0,
                r.eIL)(["fetchLastPosts"]),
                setGalleryIndex({mediaId: t, postId: e}) {
                    const s = this.photoSwipeItems.findIndex((s => s.media.id === t && s.postId === e));
                    this.showPhotoSwipe({
                        index: s
                    })
                },
                getKey(t) {
                    var e, s;
                    let i = (null == t || null === (e = t.post) || void 0 === e ? void 0 : e.id) || "";
                    return null != t && null !== (s = t.post) && void 0 !== s && null !== (s = s.media) && void 0 !== s && s.length && t.post.media.forEach((t => {
                        i += `_${t.id || ""}`
                    }
                    )),
                    i
                }
            }
        }, c, p, h = (0,
        s(281656).A)(m, i, o, !1, null, "77db3695", null).exports
    },
    118687: function(t, e, s) {
        s.d(e, {
            A: function() {
                return c
            }
        });
        var i = function t() {
            var e = this
              , s = e._self._c;
            return s("alert-o-f", {
                attrs: {
                    variant: "danger",
                    "full-width": ""
                },
                scopedSlots: e._u([{
                    key: "content",
                    fn: function() {
                        return [s("p", {
                            staticClass: "alert-text-wrapper"
                        }, [e._v(" " + e._s(e.$t("message.title_fast_verify_by_ondato")) + " ")]), s("div", {
                            staticClass: "text-right"
                        }, [s("button", {
                            staticClass: "g-btn m-rounded m-sm-icon-size",
                            attrs: {
                                disabled: e.isIVPending
                            },
                            on: {
                                click: function(t) {
                                    return e.getIdentityVerifyUrl({
                                        type: "login"
                                    })
                                }
                            }
                        }, [e.isIVPending ? s("svg", {
                            directives: [{
                                name: "svg-sprite",
                                rawName: "v-svg-sprite:icon-loading",
                                arg: "icon-loading"
                            }]
                        }) : e._e(), e._v(" " + e._s(e.$t("message.verify_page_title")) + " ")])]), e.IVFailReason ? s("div", {
                            staticClass: "fast-verify-error m-mt-8"
                        }, [e._v(" " + e._s(e.IVFailReason) + " ")]) : e._e()]
                    },
                    proxy: !0
                }])
            })
        }, o = [], r = s(110908), a = s(373874), n = s(747127), l, u = {
            name: "ModalLoginIV",
            components: {
                AlertOF: a.default
            },
            mixins: [n.A],
            computed: {
                ...(0,
                r.why)(["scenario"]),
                ...(0,
                r.npG)(["isAuth"]),
                isIVPending() {
                    var t;
                    return "pending" === (null === (t = this.scenario) || void 0 === t || null === (t = t.data) || void 0 === t ? void 0 : t.ivStatus)
                },
                IVFailReason() {
                    var t;
                    return null === (t = this.scenario) || void 0 === t || null === (t = t.data) || void 0 === t ? void 0 : t.ivFailReason
                }
            },
            mounted() {
                this.$root.$on("msg", this.ivStatusUpdate)
            },
            beforeDestroy() {
                this.$root.$off("msg", this.ivStatusUpdate)
            },
            methods: {
                ...(0,
                r.I29)(["fetchUserMe"]),
                ...(0,
                r.peC)(["setScenario"]),
                async ivStatusUpdate(t={}) {
                    if (void 0 !== t.ivFailReason && this.setScenario({
                        ...this.scenario,
                        data: {
                            ...this.scenario.data,
                            ivFailReason: t.ivFailReason
                        }
                    }),
                    void 0 !== t.ivStatus)
                        if ("approved" === t.ivStatus) {
                            if (await this.fetchUserMe(),
                            !this.isAuth)
                                return;
                            this.setScenario()
                        } else
                            this.setScenario({
                                ...this.scenario,
                                data: {
                                    ...this.scenario.data,
                                    ivStatus: t.ivStatus
                                }
                            })
                }
            }
        }, d, m, c = (0,
        s(281656).A)(u, i, o, !1, null, null, null).exports
    },
    688905: function(t, e, s) {
        s.d(e, {
            A: function() {
                return m
            }
        });
        var i = function t() {
            var e = this
              , s = e._self._c;
            return s("button", {
                staticClass: "g-btn m-rounded m-flex m-space-between m-promotion",
                class: {
                    "m-lg": e.large
                },
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        return e.bundleClickHandler(e.bundle)
                    }
                }
            }, [s("span", {
                directives: [{
                    name: "safe-html",
                    rawName: "v-safe-html",
                    value: {
                        text: e.bundle.discount ? e.$t("message.bundle_label_modal", {
                            DURATION: e.bundle.duration,
                            DISCOUNT: e.bundle.discount
                        }) : e.$t("message.bundle_label_modal_without_discount", {
                            DURATION: e.bundle.duration
                        })
                    },
                    expression: "{ text: bundle.discount\n      ? $t('message.bundle_label_modal', { DURATION: bundle.duration, DISCOUNT: bundle.discount })\n      : $t('message.bundle_label_modal_without_discount', { DURATION: bundle.duration }) }"
                }],
                staticClass: "b-btn-text"
            }), s("span", {
                directives: [{
                    name: "safe-html",
                    rawName: "v-safe-html",
                    value: {
                        text: e.$t("message.bundle_total_modal", {
                            AMOUNT: e.amountHumanShort(e.bundle.price, "")
                        })
                    },
                    expression: "{ text: $t('message.bundle_total_modal', { AMOUNT: amountHumanShort(bundle.price, '') }) }"
                }],
                staticClass: "b-btn-text__small"
            })])
        }, o = [], r = s(191646), a = s(781894), n, l = {
            name: "BundleOffer",
            mixins: [r.wd, a.A],
            props: {
                bundle: {
                    type: Object,
                    required: !0
                },
                user: {
                    type: Object,
                    required: !0
                },
                large: {
                    type: Boolean,
                    default: !1
                }
            }
        }, u, d, m = (0,
        s(281656).A)(l, i, o, !1, null, null, null).exports
    },
    430685: function(t, e, s) {
        s.d(e, {
            A: function() {
                return L
            }
        });
        var i = function t() {
            var e = this
              , s = e._self._c;
            return s("div", {
                staticClass: "list-offers"
            }, [e.hasPromotion ? s("promotion", {
                attrs: {
                    id: e.id
                }
            }) : s("subscribe-block", {
                staticClass: "m-reset-mb",
                attrs: {
                    id: e.id
                }
            }), e.bundles.length && e.showBundles ? s("div", {
                staticClass: "b-bundles-group b-profile__content__item m-toggle-block",
                class: {
                    "m-active": e.isShowBundles
                }
            }, [s("div", {
                staticClass: "b-profile__content__item m-subscribe-item",
                class: {
                    active: e.isShowBundles
                }
            }, [s("button", {
                staticClass: "b-section-title m-row m-collapsible g-text-uppercase g-gray-text m-with-rectangle-hover m-tb-sm",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.toggleBundles.apply(null, arguments)
                    }
                }
            }, [e._v(" " + e._s(e.$t("message.bundles_block_title")) + " "), s("span", {
                staticClass: "b-section-title__arrow"
            }, [s("svg", {
                directives: [{
                    name: "svg-sprite",
                    rawName: "v-svg-sprite:icon-arrow-down",
                    arg: "icon-arrow-down"
                }],
                staticClass: "m-button-arrow"
            })])]), e.isShowBundles ? s("div", {
                staticClass: "b-tab-container"
            }, e._l(e.bundles, (function(t) {
                return s("div", {
                    key: t.id,
                    staticClass: "b-offer-wrapper m-promotion"
                }, [s("bundle", {
                    attrs: {
                        bundle: t,
                        user: e.user,
                        large: ""
                    }
                })], 1)
            }
            )), 0) : e._e()])]) : e._e()], 1)
        }, o = [], r = s(858156), a = s.n(r), n = s(533110), l = s(110908), u = s(437187), d = s(688905), m = function t() {
            var e = this
              , s = e._self._c;
            return s("div", {
                staticClass: "b-offer-wrapper",
                class: {
                    "m-start-campaign": !e.isAuth
                }
            }, [s("div", {
                staticClass: "b-section-title m-row g-text-uppercase g-gray-text"
            }, [e._v(" " + e._s(e.$t("message.subscription_title")) + " ")]), s("div", {
                staticClass: "b-offer-join"
            }, [s("subscribe-btn", {
                attrs: {
                    id: e.id,
                    "sm-size": e.isSmSizeBtn
                }
            }), s("subscription-info", {
                attrs: {
                    id: e.id
                }
            })], 1)])
        }, c = [], p = s(847799), h = s(546092), b = s(438896), _, f = {
            name: "SubscribeBlock",
            components: {
                SubscribeBtn: p.A,
                SubscriptionInfo: h.A
            },
            mixins: [b.A],
            computed: {
                ...(0,
                l.npG)(["isAuth"]),
                ...(0,
                l.ZOz)(["user"]),
                hasPromotion() {
                    return a()(this, "user.promotions", []).length
                },
                isSmSizeBtn() {
                    return "UserList" === this.$parent.$parent.$options.name
                }
            }
        }, g = s(281656), v, P = (0,
        g.A)(f, m, c, !1, null, null, null).exports, S = s(284419);
        const C = "showUserBundlesBlock";
        var y, w = {
            name: "ProfileOffers",
            components: {
                Promotion: u.A,
                Bundle: d.A,
                SubscribeBlock: P
            },
            props: {
                id: {
                    type: Number,
                    required: !0
                },
                showBundles: {
                    type: Boolean,
                    default: !0
                }
            },
            data() {
                const t = S.A.getItem(C)
                  , e = undefined
                  , s = undefined;
                return {
                    isShowBundles: !1 !== (t ? JSON.parse(t) : {})[this.id]
                }
            },
            computed: {
                ...(0,
                l.UQc)(["getBundles"]),
                ...(0,
                l.ZOz)(["userId", "user"]),
                bundles() {
                    return this.user.subscriptionBundles ? this.getBundles(this.user.subscriptionBundles) : []
                },
                hasPromotion() {
                    return a()(this, "user.promotions", []).length
                }
            },
            mounted() {
                this.$root.$on("bundle:was:bought", this.hideBundles)
            },
            beforeDestroy() {
                this.$root.$off("bundle:was:bought", this.hideBundles)
            },
            methods: {
                setShowBundles(t) {
                    this.isShowBundles = t;
                    const e = S.A.getItem(C)
                      , s = e ? JSON.parse(e) : {};
                    s[this.id] = t,
                    S.A.setItem(C, JSON.stringify(s))
                },
                hideBundles() {
                    this.setShowBundles(!1)
                },
                toggleBundles() {
                    this.setShowBundles(!this.isShowBundles)
                }
            }
        }, A, L = (0,
        g.A)(w, i, o, !1, null, "326179fd", null).exports
    },
    437187: function(t, e, s) {
        s.d(e, {
            A: function() {
                return Z
            }
        });
        var i = function t() {
            var e = this
              , s = e._self._c;
            return s("div", {
                staticClass: "b-offer-wrapper",
                class: {
                    "m-start-campaign": e.isStartCampaign,
                    "m-started-campaign": !e.promotionEnded,
                    "m-my-campaign": e.isStartCampaign && e.isAuthUser
                }
            }, [!e.hideTitle && e.promotions.length ? s("div", {
                staticClass: "b-section-title m-row g-text-uppercase g-gray-text"
            }, [e._v(" " + e._s(e.$t("message.subscription_title")) + " ")]) : e._e(), e.hasStartCampaign ? s("promotion-start-campaign", {
                staticClass: "m-only-start-btn",
                attrs: {
                    id: e.user.id
                }
            }) : e._e(), e._l(e.promotions, (function(t) {
                return s("promotion-item", {
                    key: t.id,
                    attrs: {
                        id: e.id,
                        promotion: t,
                        "is-collapse-mode": e.isCollapseMode,
                        "show-claims-count": e.showClaimsCount
                    },
                    on: {
                        onPromotionEnded: e.onPromotionEnded,
                        onStartCampaignChange: e.onStartCampaignChange
                    }
                })
            }
            ))], 2)
        }, o = [], r = s(858156), a = s.n(r), n = s(962953), l = s(110908), u = function t() {
            var e = this
              , s = e._self._c;
            return s("div", {
                staticClass: "b-offer-join"
            }, [s("button", {
                staticClass: "g-btn m-rounded m-border m-sm m-block",
                attrs: {
                    type: "button",
                    disabled: e.isDisableStartPromo
                },
                on: {
                    click: e.showModalPromotion
                }
            }, [e._v(" " + e._s(e.$t("message.start_promotion_btn")) + " ")])])
        }, d = [], m, c = {
            name: "PromotionStartCampaign",
            computed: {
                ...(0,
                l.npG)(["authUser"]),
                isDisableStartPromo() {
                    return this.authUser.subscribePrice <= 0 || !this.authUser.isPerformer || !this.authUser.canCreatePromotion || !this.authUser.canEarn
                }
            },
            methods: {
                async showModalPromotion() {
                    this.$root.$emit("bv::show::modal", "ModalPromotion")
                }
            }
        }, p = s(281656), h, b = (0,
        p.A)(c, u, d, !1, null, null, null).exports, _ = function t() {
            var e = this
              , s = e._self._c;
            return s("div", {
                staticClass: "b-offer-join"
            }, [e.isCollapseMode ? s("button", {
                staticClass: "b-menu-list__el m-with-rectangle-hover m-tb-sm",
                class: {
                    "m-opened": e.isCollapsePromo
                },
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.toggleCollapsePromo
                }
            }, [s("div", {
                staticClass: "b-menu-list__text g-semibold m-mb-2"
            }, [e.promotion ? [e.promotionEnded ? [e._v(" " + e._s(e.removeLastCharacter(e.promotionDetailsText)) + " " + e._s(e.$t("message.pretext_with")) + " " + e._s(e.promotion.claimsCount) + " promotion subscribers ")] : [e._v(" " + e._s(e.promotionDetailsText) + " ")]] : e._e()], 2), s("promotion-left-time", {
                staticClass: "b-menu-list__subtext",
                attrs: {
                    id: e.id,
                    promotion: e.promotion,
                    "promotion-ended": e.promotionEnded
                }
            }), s("span", {
                staticClass: "b-menu-list__icon"
            }, [s("svg", {
                directives: [{
                    name: "svg-sprite",
                    rawName: "v-svg-sprite:icon-arrow-down",
                    arg: "icon-arrow-down"
                }]
            })])], 1) : s("div", {
                staticClass: "b-offer-join__content"
            }, [s("div", {
                staticClass: "b-offer-join__details m-break-word"
            }, [e._v(" " + e._s(e.promotionDetailsText) + " ")]), s("promotion-left-time", {
                attrs: {
                    id: e.id,
                    promotion: e.promotion,
                    "promotion-ended": e.promotionEnded
                }
            })], 1), e.isCollapseMode && e.isCollapsePromo || !e.isCollapseMode ? [e.promotion.message ? s("promotion-message", {
                attrs: {
                    id: e.user.id,
                    message: e.promotion.message
                }
            }) : e._e(), e.isAuthUser && e.showClaimsCount ? s("div", {
                staticClass: "b-fans__item__list"
            }, [s("div", {
                staticClass: "b-fans__item__list__item"
            }, [s("span", {
                staticClass: "b-fans__item__list__label"
            }, [e._v(" " + e._s(e.$t("message.started_date_title")) + " ")]), s("span", [s("utils-time", {
                attrs: {
                    type: "date-only",
                    date: e.promotion.createdAt
                }
            })], 1)]), s("router-link", {
                staticClass: "b-fans__item__list__item m-orderable",
                attrs: {
                    to: {
                        name: "Subscribers",
                        params: {
                            type: "all"
                        },
                        query: {
                            promoId: e.promotion.id
                        }
                    }
                }
            }, [s("span", {
                staticClass: "b-fans__item__list__label"
            }, [e._v(" " + e._s(e.$t("message.claims_count")) + " ")]), s("span", [e._v(" " + e._s(e.promotion.claimsCount) + " ")])])], 1) : e._e(), s("div", {
                staticClass: "b-offer-join__btn"
            }, [e.promotionEnded ? s("button", {
                staticClass: "g-btn m-rounded m-border m-block m-uppercase m-sm",
                attrs: {
                    type: "button",
                    disabled: e.disabledDeletePromotion
                },
                on: {
                    click: e.doDeletePromotion
                }
            }, [e._v(" " + e._s(e.$t("message.campaign_finished_txt_btn")) + " ")]) : [e.isAuthUser ? [s("button", {
                staticClass: "g-btn m-flat m-btn-gaps",
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.doFinishPromotion
                }
            }, [e._v(" " + e._s(e.$t("message.promo_campaign_finish_btn_label")) + " ")]), s("button", {
                staticClass: "g-btn m-flat m-btn-gaps",
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.copyProfileLinkMixin_doCopy.apply(null, arguments)
                    }
                }
            }, [e._v(" " + e._s(e.copyProfileLinkMixin_title) + " ")])] : [s("subscribe-btn", {
                attrs: {
                    id: e.id,
                    "sm-size": e.isSmSizeBtn
                }
            }), s("subscription-info", {
                attrs: {
                    id: e.id
                }
            })]]], 2)] : e._e()], 2)
        }, f = [], g = s(533110), v = s(847799), P = s(546092), S = function t() {
            var e = this
              , s = e._self._c;
            return e.message ? s("div", {
                staticClass: "b-offer-join__bubble"
            }, [s("avatar", {
                staticClass: "m-border-line-theme m-absolute",
                attrs: {
                    "user-id": e.id,
                    size: 36,
                    "is-link": !1,
                    "hide-online": ""
                }
            }), s("truncated-text", {
                staticClass: "b-offer-join__bubble__text m-break-word",
                attrs: {
                    text: e.message,
                    "visible-lines": 3,
                    "collapse-limit": 4,
                    markdown: ""
                }
            })], 1) : e._e()
        }, C = [], y = s(880805), w = s(562797), A, L = {
            name: "PromotionMessage",
            components: {
                Avatar: y.default,
                TruncatedText: w.A
            },
            props: {
                id: {
                    type: Number,
                    required: !0
                },
                message: {
                    type: String,
                    required: !0
                }
            },
            data() {
                return {
                    showReadMoreButton: !1,
                    collapsedText: !0
                }
            },
            mounted() {
                try {
                    this.collapsed = null !== localStorage.getItem("collapsedPromotion") && "true" === localStorage.getItem("collapsedPromotion") && this.isAuthUser
                } catch (t) {}
                if (this.$refs.promotionMessage) {
                    const {clientHeight: t, scrollHeight: e} = this.$refs.promotionMessage;
                    this.showReadMoreButton = t !== e
                }
            },
            methods: {
                toggleCollapse() {
                    this.collapsedText = !this.collapsedText
                }
            }
        }, U, T = (0,
        p.A)(L, S, C, !1, null, null, null).exports, x = function t() {
            var e = this
              , s = e._self._c;
            return s("div", {
                staticClass: "b-offer-join__left-time"
            }, [e.isShowPromoDetails ? [s("div", {
                staticClass: "b-offer-join__left-time__el"
            }, [e.promotion.hasRelatedPromo ? [e._v(" " + e._s(e.$t("message.offer_for_new_and_expired_subscribers")) + " ")] : "expired" === e.promotion.type ? [e._v(" " + e._s(e.$t("message.offer_for_expired_subscribers")) + " ")] : [e._v(" " + e._s(e.$t("message.offer_for_new_subscribers")) + " ")]], 2), e.promotion.finishedAt && "0000-00-00 00:00:00" !== e.promotion.finishedAt ? s("div", {
                staticClass: "b-offer-join__left-time__el"
            }, [e.promotionEnded ? [e._v(" " + e._s(e.$t("message.count_no_offers_ended", {
                AMOUNT: e.promotionEnds
            })) + " ")] : [e._v(" " + e._s(e.$t("message.count_no_offers_ends", {
                AMOUNT: e.promotionEnds
            })) + " ")]], 2) : e._e(), e.promotion.subscribeCounts ? s("div", {
                staticClass: "b-offer-join__left-time__el"
            }, [e._v(" " + e._s(e.$t("message.count_no_offers_left", {
                AMOUNT: e.promotion.subscribeCounts
            })) + " ")]) : e._e()] : [e.promotion.finishedAt && "0000-00-00 00:00:00" !== e.promotion.finishedAt ? s("div", {
                staticClass: "b-offer-join__left-time__el"
            }, [e.promotionEnded ? [e._v(" " + e._s(e.$t("message.count_offers_ended", {
                AMOUNT: e.promotionEnds
            })) + " ")] : [e._v(" " + e._s(e.$t("message.count_offers_ends", {
                AMOUNT: e.promotionEnds
            })) + " ")]], 2) : e._e(), e.promotion.subscribeCounts ? s("div", {
                staticClass: "b-offer-join__left-time__el"
            }, [e._v(" " + e._s(e.$t("message.count_offers_left", {
                AMOUNT: e.promotion.subscribeCounts
            })) + " ")]) : e._e()]], 2)
        }, I = [], B = s(974353), $ = s.n(B), D, O = {
            name: "PromotionLeftTime",
            props: {
                id: {
                    type: Number,
                    required: !0
                },
                promotion: {
                    type: Object,
                    required: !0
                },
                promotionEnded: {
                    type: Boolean,
                    required: !0
                }
            },
            computed: {
                ...(0,
                l.ZOz)(["getUser"]),
                ...(0,
                l.npG)(["authUser", "authUserId"]),
                user() {
                    return this.getUser(this.id)
                },
                isAuthUser() {
                    return this.authUserId === this.user.id
                },
                isShowPromoDetails() {
                    return "SubscribersByType" === this.$route.name || "Promotions" === this.$route.name || this.isAuthUser
                },
                promotionEnds() {
                    return $()(this.promotion.finishedAt).format("MMM D")
                }
            }
        }, M, N = (0,
        p.A)(O, x, I, !1, null, null, null).exports, k = s(88878), E = s(59960), F = s(284419), R, G = {
            name: "PromotionItem",
            components: {
                SubscribeBtn: v.A,
                SubscriptionInfo: P.A,
                PromotionMessage: T,
                PromotionLeftTime: N,
                UtilsTime: k.A
            },
            mixins: [E.A],
            props: {
                id: {
                    type: Number,
                    required: !0
                },
                promotion: {
                    type: Object,
                    required: !0
                },
                isCollapseMode: {
                    type: Boolean,
                    default: !1
                },
                showClaimsCount: {
                    type: Boolean,
                    default: !0
                }
            },
            data() {
                return {
                    disabledDeletePromotion: !1,
                    showDeletePromotionConfirm: !1,
                    timer: null,
                    finishNow: !1,
                    isCollapsePromo: !0,
                    defaultSubscribeDays: 30
                }
            },
            computed: {
                ...(0,
                l.ZOz)(["getUser"]),
                ...(0,
                l.npG)(["authUserId", "isAuth"]),
                ...(0,
                l.WsE)(["currentDate"]),
                user() {
                    return this.getUser(this.id)
                },
                promotionEnded() {
                    const t = !this.promotion || !this.promotion.canClaim || this.finishNow;
                    return this.$emit("onPromotionEnded", t),
                    t
                },
                isPromotionFree() {
                    return this.promotion.price <= 0
                },
                isAuthUser() {
                    return this.authUserId === this.user.id
                },
                promotionDiscount() {
                    if (!this.isPromotionFree) {
                        const t = this.user.subscribePrice > this.promotion.price ? Math.round((this.user.subscribePrice - this.promotion.price) / this.user.subscribePrice * 100) : 0;
                        return this.promotion.discount || t
                    }
                    return ""
                },
                promotionDetailsText() {
                    if (this.isPromotionFree) {
                        const t = this.promotion.subscribeDays || this.defaultSubscribeDays;
                        return this.$tc("message.limited_offer_free_for_count_days_plural", t, {
                            COUNT: t
                        })
                    }
                    return this.$t("message.limited_offer_discount_for_count_days", {
                        DISCOUNT: this.promotionDiscount,
                        COUNT: this.promotion.subscribeDays || this.daysInCurrentMonth
                    })
                },
                isSmSizeBtn() {
                    return "UserList" === this.$parent.$parent.$parent.$options.name
                },
                isStartCampaign() {
                    const t = !this.isAuthUser && !this.promotionEnded && this.isAuth || this.promotionEnded || !this.isAuth || !this.user.subscribedByData;
                    return this.$emit("onStartCampaignChange", t),
                    t
                },
                hasPromotion() {
                    return a()(this, "user.promotions", []).length
                },
                daysInCurrentMonth() {
                    const t = new Date;
                    return new Date(t.getFullYear(),t.getMonth() + 1,0).getDate()
                },
                isPromotionCard() {
                    return this.isAuthUser && (this.user.canCreatePromotion || "SettingsSubscription" === this.$route.name)
                },
                storageKey() {
                    return `${this.user.id}${this.promotion.id}_collapsePromo`
                }
            },
            watch: {
                promotion: {
                    handler(t) {
                        t && t.canClaim ? this.startTimer() : this.stopTimer()
                    },
                    immediate: !0
                },
                currentDate() {
                    this.promotionEnded ? this.stopTimer() : this.startTimer()
                }
            },
            created() {
                this.getPromoCollapseState()
            },
            beforeDestroy() {
                this.stopTimer()
            },
            methods: {
                ...(0,
                l.CXg)(["finishPromotion", "deletePromotion"]),
                async doFinishPromotion() {
                    if (this.isAuthUser) {
                        const t = this.$t("message.stop_promotion_campaign")
                          , e = this.$t("message.button_label_stop_campaign")
                          , s = this.$t("message.title_stop_profile_promotion")
                          , i = undefined;
                        await window.interact(t, {
                            confirmText: e,
                            title: s
                        }) && (await this.finishPromotion(this.promotion.id),
                        this.stopTimer())
                    }
                },
                async doDeletePromotion() {
                    this.disabledDeletePromotion = !0,
                    await this.deletePromotion(this.promotion.id),
                    this.disabledDeletePromotion = !1
                },
                setFinishNow() {
                    this.finishNow = !0,
                    this.stopTimer()
                },
                startTimer() {
                    if (this.stopTimer(),
                    null !== this.promotion.finishedAt) {
                        const t = +new Date(this.promotion.finishedAt) - this.currentDate;
                        t > 0 ? t < 2147483647 && (this.timer = setTimeout(this.setFinishNow, t)) : this.setFinishNow()
                    }
                },
                stopTimer() {
                    clearTimeout(this.timer)
                },
                toggleCollapse() {
                    this.collapsedText = !this.collapsedText
                },
                toggleCollapsePromo() {
                    this.isCollapsePromo = !this.isCollapsePromo,
                    this.setPromoCollapseState()
                },
                setPromoCollapseState() {
                    F.A.setItem(this.storageKey, JSON.stringify(this.isCollapsePromo))
                },
                getPromoCollapseState() {
                    const t = JSON.parse(F.A.getItem(this.storageKey));
                    null != t && (this.isCollapsePromo = JSON.parse(F.A.getItem(this.storageKey)))
                },
                removeLastCharacter(t) {
                    return t.substring(0, t.length - 1)
                }
            }
        }, H, q, z, j = {
            name: "PromotionOffer",
            components: {
                PromotionStartCampaign: b,
                PromotionItem: (0,
                p.A)(G, _, f, !1, null, null, null).exports
            },
            props: {
                id: {
                    type: Number,
                    required: !0
                },
                hideTitle: {
                    type: Boolean,
                    default: !1
                },
                isCollapseMode: {
                    type: Boolean,
                    default: !1
                },
                showClaimsCount: {
                    type: Boolean,
                    default: !0
                },
                showStartCampaign: {
                    type: Boolean,
                    default: !0
                }
            },
            data() {
                return {
                    isStartCampaign: !0,
                    promotionEnded: null
                }
            },
            computed: {
                ...(0,
                l.ZOz)(["getUser"]),
                ...(0,
                l.npG)(["authUserId", "isAuth"]),
                user() {
                    return this.getUser(this.id)
                },
                isAuthUser() {
                    return this.isAuth && this.authUserId === this.user.id
                },
                promotionsExpired() {
                    return a()(this, "user.promotions", []).filter((t => "expired" === t.type))
                },
                hasRelatedPromos() {
                    return a()(this, "user.promotions", []).filter((t => t.hasRelatedPromo)).length > 1
                },
                isSubscribersExpired() {
                    return "expired" === this.$route.params.type && ["SubscribersByType", "SubscribesByType"].includes(this.$route.name)
                },
                promotions() {
                    let t;
                    return this.$route.query.promoId && "Subscribers" === this.$route.name ? t = a()(this, "user.promotions", []).filter((t => t.id === +this.$route.query.promoId)) : this.isSubscribersExpired ? t = this.promotionsExpired : ({promotions: t} = this.user),
                    Array.isArray(t) ? this.hasRelatedPromos ? [t[0]].filter((t => !!t && t.id)) : [...t].sort(( (t, e) => t.type > e.type ? 1 : -1)).filter((t => !!t && t.id)) : []
                },
                hasStartCampaign() {
                    return this.showStartCampaign && this.isAuthUser && (this.user.canCreatePromotion || "SettingsSubscription" === this.$route.name)
                }
            },
            methods: {
                onPromotionEnded(t) {
                    this.promotionEnded = t
                },
                onStartCampaignChange(t) {
                    this.isStartCampaign = t
                }
            }
        }, V, Z = (0,
        p.A)(j, i, o, !1, null, null, null).exports
    },
    697352: function(t, e, s) {
        s.d(e, {
            A: function() {
                return _
            }
        });
        var i = function t() {
            var e = this
              , s = e._self._c;
            return s("div", {
                class: {
                    "g-border-top": !e.$mq.includes("lg")
                }
            }, [s("div", {
                staticClass: "b-section-title m-row g-text-uppercase g-gray-text",
                class: {
                    "g-border-top-bold": !e.$mq.includes("lg")
                }
            }, [e._v(" " + e._s(e.$t("message.subscription_title")) + " ")]), s("router-link", {
                staticClass: "b-menu-list__el m-with-rectangle-hover m-tb-sm m-after-title",
                attrs: {
                    to: {
                        name: "SettingsSubscription"
                    }
                }
            }, [s("div", {
                staticClass: "b-menu-list__text"
            }, [e._v(" " + e._s(e.$t("message.profile_subscription_price_promotions")) + " ")]), s("div", {
                directives: [{
                    name: "safe-html",
                    rawName: "v-safe-html",
                    value: {
                        text: e.subscriptionBtnDesc
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
            })])]), e.hasPromotion ? s("promotion", {
                attrs: {
                    id: e.user.id,
                    "hide-title": "",
                    "is-collapse-mode": "",
                    "show-claims-count": !1,
                    "show-start-campaign": !1
                }
            }) : e._e()], 1)
        }, o = [], r = s(858156), a = s.n(r), n = s(110908), l = s(437187), u = s(620514), d = s(191646), m = s(235615), c, p = {
            name: "SubscriptionPromo",
            components: {
                Promotion: l.A
            },
            mixins: [u.k, d.tD, m.A],
            computed: {
                ...(0,
                n.ZOz)(["user", "hasUser"]),
                ...(0,
                n.npG)(["authUser"]),
                hasPromotion() {
                    return a()(this, "user.promotions", []).length
                },
                subscriptionBtnDesc() {
                    if (!this.authUser.subscribePrice || this.authUser.subscribePrice <= 0)
                        return this.$t("message.profile_free_subscription");
                    let t = this.$t("message.message_type_price_per_month", {
                        PRICE: this.priceHuman(this.authUser.subscribePrice)
                    });
                    return this.authUser.subscriptionBundles && this.authUser.subscriptionBundles.length && (t += `, ${this.$tc("message.bundles_count_plural", this.authUser.subscriptionBundles.length, {
                        COUNT: this.authUser.subscriptionBundles.length
                    })}`),
                    t
                }
            }
        }, h, b, _ = (0,
        s(281656).A)(p, i, o, !1, null, null, null).exports
    },
    281390: function(t, e, s) {
        s.d(e, {
            A: function() {
                return C
            }
        });
        var i = function t() {
            var e = this
              , s = e._self._c;
            return e.isLabelChipsVisible ? s("posts-labels-chips", {
                attrs: {
                    "user-labels": e.fullListUserLabels,
                    "selected-label-id": e.labelId,
                    "is-has-more": e.isLabelsHasMore,
                    "is-hide-posts-labels-counters": e.isHidePostsLabelsCounters
                },
                on: {
                    onInfiniteHandler: e.infiniteHandler,
                    onClickLabelChip: e.onClickLabelChip
                }
            }) : e._e()
        }
          , o = []
          , r = s(962953)
          , a = s(885471)
          , n = s(927317)
          , l = s(734155)
          , u = s(444962)
          , d = s(247377)
          , m = s(547822)
          , c = s(918765)
          , p = s(392499)
          , h = s(203852)
          , b = s(977434);
        function _(t) {
            if (!(0,
            a.isRef)(t))
                return;
            const {store: e} = (0,
            h.A)()
              , s = (0,
            a.ref)(0)
              , i = (0,
            a.ref)(!1)
              , o = (0,
            a.computed)(( () => {
                var t;
                return (null === (t = e.state) || void 0 === t || null === (t = t.postLabels) || void 0 === t ? void 0 : t.userLabelsIds) || []
            }
            ))
              , r = (0,
            a.computed)(( () => e.getters["postLabels/getPostLabel"]))
              , n = t => e.dispatch("postLabels/fetchUserPostLabels", t)
              , l = async () => {
                s.value = i.value ? s.value + b.Jg : 0,
                i.value = await n({
                    offset: s.value,
                    userId: t.value.id
                })
            }
              , u = async t => {
                await l(),
                i.value ? t.loaded() : t.complete()
            }
              , d = () => {
                i.value = !0,
                s.value = 0
            }
              , m = async () => {
                i.value = !1,
                await l()
            }
            ;
            return {
                offset: s,
                userLabelsIds: o,
                isLabelsHasMore: i,
                getDataPostLabelById: r,
                reset: m,
                getLabels: l,
                infiniteHandler: u,
                resetRequestOptions: d,
                fetchUserPostLabels: n
            }
        }
        var f = _, g, v = {
            name: "ProfileLabelsChips",
            components: {
                PostsLabelsChips: n.A
            },
            setup() {
                const {user: t} = (0,
                l.A)()
                  , {t: e} = (0,
                u.A)()
                  , {EVENTS: s, setEventListener: i} = (0,
                m.A)()
                  , {labelId: o, setLabelId: r} = (0,
                c.A)()
                  , {fetchUserPostsByType: n} = (0,
                p.A)()
                  , {isLabelChipsVisible: h, isHidePostsLabelsCounters: b} = (0,
                d.A)(t)
                  , {userLabelsIds: _, isLabelsHasMore: g, getDataPostLabelById: v, reset: P, getLabels: S, infiniteHandler: C, resetRequestOptions: y} = f(t)
                  , w = (0,
                a.computed)(( () => _.value.map((t => v.value(t))).filter((t => !(null == t || !t.postsCount)))))
                  , A = (0,
                a.computed)(( () => [{
                    id: "all",
                    name: e("message.all_button"),
                    postsCount: t.value.postsCount
                }, ...w.value]))
                  , L = ({id: t}={}) => {
                    r(t),
                    n()
                }
                  , U = undefined;
                return ( () => {
                    S(),
                    i(s.POST.LABEL.SORT.ON_CHANGE, P),
                    i(s.POST.LABEL.MODAL.HIDE, y)
                }
                )(),
                {
                    labelId: o,
                    isLabelsHasMore: g,
                    fullListUserLabels: A,
                    isLabelChipsVisible: h,
                    isHidePostsLabelsCounters: b,
                    setLabelId: r,
                    infiniteHandler: C,
                    onClickLabelChip: L,
                    fetchUserPostsByType: n
                }
            }
        }, P, S, C = (0,
        s(281656).A)(v, i, o, !1, null, null, null).exports
    },
    371771: function(t, e, s) {
        s.d(e, {
            A: function() {
                return E
            }
        });
        var i = function t() {
            var e = this
              , s = e._self._c;
            return s("div", {
                staticClass: "g-sides-gaps"
            }, [e.restricted ? s("post-restricted", {
                attrs: {
                    "user-id": e.user.id,
                    "posts-counter": ""
                }
            }) : [e.showFeedSearchHeader && !e.isUpcomingStreams ? s("profile-posts-header") : e._e(), e.showMediaPostFilter ? s("feed-media-post-filter") : e._e(), s("users-posts")]], 2)
        }, o = [], r = s(110908), a = s(430052), n = s(649752), l = s(22996), u = function t() {
            var e = this
              , s = e._self._c;
            return s("div", {
                staticClass: "b-content-filter-wrapper",
                class: {
                    "m-grid-mode": e.isGridLayout
                }
            }, [s("content-filter", {
                attrs: {
                    title: e.contentFilterTitle
                },
                scopedSlots: e._u([{
                    key: "btn-group",
                    fn: function() {
                        return [s("search-button", {
                            attrs: {
                                "is-disabled": e.isSearchShown
                            },
                            on: {
                                onClick: e.openSearch
                            }
                        }), e.isShowLayoutGrid ? s("div", {
                            staticClass: "b-content-filter__btn"
                        }, [s("toggle-grid", {
                            attrs: {
                                "is-grid": e.isGridLayout
                            },
                            on: {
                                onChange: e.onChangeGridLayout
                            }
                        })], 1) : e._e(), s("post-filter", {
                            staticClass: "b-content-filter__btn",
                            attrs: {
                                "disabled-state": e.isDisabledBtn,
                                "on-post-date-selected": e.onPostDateSelected
                            }
                        })]
                    },
                    proxy: !0
                }])
            }), e.isShowPostsLabels ? s("profile-search-labels-chips", {
                staticClass: "m-mb-16"
            }) : e._e()], 1)
        }, d = [], m = s(885471), c = s(487551), p = s(20497), h = s(269448), b = function t() {
            var e = this
              , s = e._self._c;
            return s("div", {
                staticClass: "b-content-filter__btn"
            }, [s("button", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.tooltipText,
                    expression: "tooltipText"
                }],
                staticClass: "g-btn m-gray m-with-round-hover m-icon m-icon-only m-default-color m-sm-size",
                attrs: {
                    disabled: e.isDisabled,
                    type: "button"
                },
                on: {
                    click: e.onClick
                }
            }, [s("svg", {
                directives: [{
                    name: "svg-sprite",
                    rawName: "v-svg-sprite:icon-search",
                    arg: "icon-search"
                }],
                staticClass: "m-default-size"
            })])])
        }, _ = [], f, g = {
            name: "ProfileSearchButton",
            props: {
                tooltipText: {
                    type: String,
                    default: ""
                },
                isDisabled: {
                    type: Boolean,
                    default: !1
                }
            },
            setup(t, {emit: e}) {
                const s = undefined;
                return {
                    onClick: () => {
                        t.isDisabled || e("onClick")
                    }
                }
            }
        }, v = s(281656), P, S = (0,
        v.A)(g, b, _, !1, null, null, null).exports, C = s(281390), y = s(911672), w = s(715698), A = s(932983), L = s(666361), U = s(441701), T, x = {
            name: "ProfilePostsHeader",
            components: {
                PostFilter: c.A,
                ToggleGrid: p.A,
                SearchButton: S,
                ContentFilter: h.A,
                ProfileSearchLabelsChips: C.A
            },
            props: {
                title: {
                    type: String,
                    default: ""
                },
                onPostDateSelected: {
                    type: Function,
                    default: null
                }
            },
            setup(t) {
                const {headerTitle: e, isGridLayout: s, isDisabledBtn: i, isShowLayoutGrid: o, isShowPostsLabels: r, onChangeGridLayout: a} = (0,
                w.A)()
                  , {postsFilter: n} = (0,
                U.A)()
                  , l = async () => {
                    const t = document.querySelector(".js-tabs-switchers");
                    await (0,
                    L.p)(t),
                    await (0,
                    A.PA)(t, {
                        desktopOffset: 0,
                        offset: A.PD
                    })
                }
                  , {isSearchShown: u, openSearch: d} = (0,
                y.A)({
                    onOpenSearch: l
                })
                  , c = undefined;
                return {
                    postsFilter: n,
                    isGridLayout: s,
                    isSearchShown: u,
                    isDisabledBtn: i,
                    isShowLayoutGrid: o,
                    isShowPostsLabels: r,
                    contentFilterTitle: (0,
                    m.computed)(( () => t.title || e.value)),
                    openSearch: d,
                    onChangeGridLayout: a
                }
            }
        }, I, B = (0,
        v.A)(x, u, d, !1, null, null, null).exports, $ = s(620514), D = s(358213), O = s(600958), M, N = {
            name: "ProfilePosts",
            components: {
                UsersPosts: n.A,
                PostRestricted: a.A,
                ProfilePostsHeader: B,
                FeedMediaPostFilter: l.A
            },
            mixins: [$.k, D.A],
            computed: {
                ...(0,
                r.ZOz)(["user"]),
                isUpcomingStreams() {
                    return "upcoming-streams" === this.$route.params.postType
                },
                showFeedSearchHeader() {
                    const {postsCount: t, archivedPostsCount: e, privateArchivedPostsCount: s} = this.user;
                    return !!t || !!e || !!s || this.hasPostsFilter
                },
                showMediaPostFilter() {
                    const {params: {postType: t}, name: e} = this.$route
                      , s = e === O.A.PROFILE_INNER && !["archived", "private_archived", "streams"].includes(t);
                    return this.showFeedSearchHeader && s && !this.isUpcomingStreams
                },
                restricted() {
                    return this.user.isPrivateRestriction && !this.isAuthUser && !this.user.subscribedBy
                }
            },
            created() {
                this.setGoToPostDate()
            },
            methods: {
                ...(0,
                r.yKE)(["setGoToPostDate"])
            }
        }, k, E = (0,
        v.A)(N, i, o, !1, null, null, null).exports
    },
    146944: function(t, e, s) {
        s.d(e, {
            A: function() {
                return c
            }
        });
        var i = function t() {
            var e = this
              , s = e._self._c;
            return s("div", {
                staticClass: "b-profile-status mw-100",
                class: {
                    "d-flex align-items-center justify-content-start": e.addFlexClasses
                }
            }, [e.isAuthUser && e.showStatusToggle ? s("users-status") : e._e(), e.isRestrictedState || e.isLiveState || e.isAvailableState || e.isLastSeenState ? s("div", {
                staticClass: "b-profile-status__states g-text-ellipsis"
            }, [e.isRestrictedState ? [s("span", {
                staticClass: "b-profile-status__icon"
            }, [s("svg", {
                directives: [{
                    name: "svg-sprite",
                    rawName: "v-svg-sprite:icon-mute",
                    arg: "icon-mute"
                }]
            })]), e._v(" " + e._s(e.$t("message.restricted_title")) + " ")] : e.isLiveState ? [e.showStreamingStatusIcon ? s("span", {
                staticClass: "g-avatar__icon m-live"
            }, [s("svg", {
                directives: [{
                    name: "svg-sprite",
                    rawName: "v-svg-sprite:icon-live",
                    arg: "icon-live"
                }]
            })]) : e._e(), e._v(" " + e._s(e.$t("message.message_live_now")) + " ")] : e.isAvailableState ? [e._v(" " + e._s(e.$t("message.profile_available_now_label")) + " ")] : e.isLastSeenState ? [e._v(" " + e._s(e.$t("message.profile_last_seen_label")) + " "), e.user.lastSeen ? s("utils-time", {
                attrs: {
                    date: e.user.lastSeen,
                    type: "feed"
                }
            }) : [e._v(" " + e._s(e.$t("message.days_ago")) + " ")]] : e._e()], 2) : e._e()], 1)
        }, o = [], r = s(110908), a = s(88878), n = s(70797), l, u = {
            name: "ProfileStatusWrapper",
            components: {
                UtilsTime: a.A,
                UsersStatus: n.A
            },
            props: {
                user: {
                    type: Object,
                    required: !0
                },
                showStatusToggle: {
                    type: Boolean,
                    default: !1
                },
                showStreamingStatus: {
                    type: Boolean,
                    default: !1
                },
                showStreamingStatusIcon: {
                    type: Boolean,
                    default: !1
                },
                showRestrictedStatus: {
                    type: Boolean,
                    default: !1
                },
                addFlexClasses: {
                    type: Boolean,
                    default: !0
                }
            },
            computed: {
                ...(0,
                r.npG)(["authUserId"]),
                isAuthUser() {
                    return this.authUserId === this.user.id
                },
                userIsStreamingNow() {
                    return this.user.hasStream && !this.user.isRestricted
                },
                isRestrictedState() {
                    return this.user.isRestricted && this.showRestrictedStatus
                },
                isLiveState() {
                    return this.userIsStreamingNow && this.showStreamingStatus
                },
                isAvailableState() {
                    return this.user.isOnline && (!this.isAuthUser || !this.showStatusToggle)
                },
                isLastSeenState() {
                    return null !== this.user.lastSeen && !this.isAuthUser
                }
            }
        }, d, m, c = (0,
        s(281656).A)(u, i, o, !1, null, "0070ae65", null).exports
    },
    715698: function(t, e, s) {
        var i = s(885471)
          , o = s(203852)
          , r = s(47452)
          , a = s(734155)
          , n = s(444962)
          , l = s(441701)
          , u = s(248806);
        function d() {
            const {t: t} = (0,
            n.A)()
              , {store: e} = (0,
            o.A)()
              , {user: s, userId: d} = (0,
            a.A)()
              , {routeQuery: m} = (0,
            r.A)()
              , {postsFilter: c, isPosts: p} = (0,
            l.A)()
              , h = (0,
            i.computed)(( () => e.getters["auth/authUserId"]))
              , b = (0,
            i.computed)(( () => {
                var t;
                return (null === (t = e.state.init) || void 0 === t ? void 0 : t.isAuth) || !1
            }
            ))
              , _ = (0,
            i.computed)(( () => d.value === h.value))
              , f = (0,
            i.computed)(( () => b.value && s.value.isPerformer && s.value.hasLabels && p.value))
              , g = (0,
            i.computed)(( () => {
                const {isPrivateRestriction: t, subscribedBy: e, postsCount: i, archivedPostsCount: o} = s.value;
                return !_.value && t && !e || !i && !o
            }
            ))
              , v = (0,
            i.computed)(( () => {
                const {order: e} = m.value;
                return null != e && e.includes(u.x2.FAVORITES_COUNT) ? t("message.sort_most_liked_label") : null != e && e.includes(u.x2.TIPS_SUM) ? t("message.sort_highest_tips_label") : t("message.section_title_recent")
            }
            ))
              , P = (0,
            i.computed)(( () => "archived" === c.postType))
              , S = (0,
            i.computed)(( () => !P.value))
              , C = (0,
            i.computed)(( () => e.getters["posts/isGridLayout"]))
              , y = (0,
            i.computed)(( () => e.getters["posts/isMediaGridLayout"]))
              , w = (0,
            i.computed)(( () => p.value ? C.value : y.value))
              , A = () => e.commit("posts/toggleLayout")
              , L = () => e.commit("posts/toggleMediaLayout")
              , U = () => p.value ? A() : L();
            return {
                isAuthUser: _,
                headerTitle: v,
                isGridLayout: w,
                isDisabledBtn: g,
                isArchivedPage: P,
                isShowLayoutGrid: S,
                isPostsGridLayout: C,
                isMediaGridLayout: y,
                isShowPostsLabels: f,
                togglePostsLayout: A,
                toggleMediaLayout: L,
                onChangeGridLayout: U
            }
        }
        e.A = d
    },
    392499: function(t, e, s) {
        var i = s(858156)
          , o = s.n(i)
          , r = s(962953)
          , a = s.n(r)
          , n = s(885471)
          , l = s(974353)
          , u = s.n(l)
          , d = s(203852)
          , m = s(47452)
          , c = s(734155)
          , p = s(441701)
          , h = s(918765)
          , b = s(743773)
          , _ = s(248806)
          , f = s(415748);
        function g() {
            const {store: t} = (0,
            d.A)()
              , {user: e} = (0,
            c.A)()
              , {preparedLabelId: s} = (0,
            h.A)()
              , {routeQuery: i} = (0,
            m.A)()
              , {isPosts: r, postsFilter: a} = (0,
            p.A)()
              , l = (0,
            n.ref)(!1)
              , g = (0,
            n.ref)(!1)
              , v = (0,
            n.computed)(( () => t.getters["auth/authUserId"] || {}))
              , P = (0,
            n.computed)(( () => t.getters["posts/posts"]))
              , S = (0,
            n.computed)(( () => t.getters["posts/hasMore"]))
              , C = (0,
            n.computed)(( () => t.state.posts.isPostsLoading))
              , y = (0,
            n.computed)(( () => t.getters["posts/isGridLayout"]))
              , w = (0,
            n.computed)(( () => t.getters["posts/isMediaGridLayout"]))
              , A = (0,
            n.computed)(( () => r.value ? y.value : w.value))
              , L = (0,
            n.computed)(( () => t.getters["posts/postsPinned"]))
              , U = (0,
            n.computed)(( () => t.getters["posts/filterReportedPosts"]))
              , T = (0,
            n.computed)(( () => t.state.posts.hasPrevUserPostsToLoad))
              , x = (0,
            n.computed)(( () => {
                const {order: t, filter: e} = i.value;
                return !(e || s.value || t && t !== `${_.x2.PUBLISH_DATE}_${b.F.ASC}`)
            }
            ))
              , I = e => t.commit("posts/setPrevUserPostsToLoad", e)
              , B = () => t.commit("posts/setPinnedIds")
              , $ = e => t.dispatch("posts/fetchPostsPinned", e)
              , D = e => t.dispatch("posts/fetchUserPosts", e)
              , O = async t => {
                const o = Boolean(null == t ? void 0 : t.selectedPostDate)
                  , {order: r, filter: n, q: l} = i.value
                  , u = {
                    query: l,
                    order: r,
                    filter: n,
                    counters: 0,
                    id: e.value.id,
                    type: a.postType,
                    label: s.value,
                    ...t
                };
                return B(),
                o ? (u.beforePublishTime = t.selectedPostDate,
                u.needFullResponse = !0) : I(o),
                await D(u)
            }
              , M = (0,
            n.computed)(( () => {
                var t;
                return null === (t = e.value) || void 0 === t ? void 0 : t.hasPinnedPosts
            }
            ))
              , N = (0,
            n.computed)(( () => S.value(a.postType)))
              , k = (0,
            n.computed)(( () => r.value ? [...L.value, ...U.value] : U.value))
              , E = (0,
            n.computed)(( () => g.value || C.value))
              , F = (0,
            n.computed)(( () => !(g.value || N.value || C.value || k.value.length)))
              , R = (0,
            n.computed)({
                get() {
                    return T.value
                },
                set(t) {
                    I(t)
                }
            })
              , G = async () => {
                g.value = !0,
                await $({
                    isPinnedPostRemove: x.value
                }),
                g.value = !1
            }
              , H = async t => {
                const e = {
                    selectedPostDate: t
                };
                !i.value.q && M.value && r.value && !s.value && (G(),
                e.pinned = 0),
                await O(e)
            }
              , q = async ({direction: t=f.z.BOTTOM, selectedDateOfPost: r=!1}={}) => {
                const n = e.value.id || v.value
                  , {q: l, order: d, filter: m} = i.value;
                let c = {}, p, h, b, _;
                P.value.length && (t === f.z.TOP ? [c] = P.value : c = P.value[P.value.length - 1]),
                Object.keys(c).length ? (b = o()(c, "postedAt"),
                _ = o()(c, "postedAtPrecise")) : r && (_ = u()(r).startOf("d").format("X.SSSSSS")),
                _ ? t === f.z.BOTTOM ? p = _ : h = _ : b && (t === f.z.BOTTOM ? p = u()(b).format("X.SSSSSS") : h = u()(b).format("X.SSSSSS"));
                const g = {
                    id: n,
                    query: l,
                    order: d,
                    filter: m,
                    direction: t,
                    afterPublishTime: h,
                    beforePublishTime: p,
                    needFullResponse: !0,
                    type: a.postType,
                    label: s.value,
                    addNew: t === f.z.TOP,
                    more: !(t === f.z.TOP || !N.value)
                };
                return x.value && !r && (g.pinned = 0),
                await D(g)
            }
              , z = async t => {
                l.value = !0;
                const e = await q({
                    direction: f.z.TOP,
                    selectedDateOfPost: t
                });
                e && (R.value = Boolean(e.hasMore)),
                l.value = !1
            }
              , j = async t => {
                if (t) {
                    const e = await O({
                        selectedPostDate: t
                    });
                    null != e && e.list.length ? R.value = !0 : await z()
                } else
                    await H(t),
                    R.value = !1
            }
            ;
            return {
                isHasMore: N,
                isLoading: E,
                showingPosts: k,
                isGridLayout: A,
                isEmptyCondition: F,
                hasPrevPostsToLoad: R,
                isDisabledLoadPrevPosts: l,
                setPinnedIds: B,
                loadPrevPosts: z,
                loadMorePosts: q,
                fetchPostsPinned: $,
                fetchProfilePosts: H,
                fetchUserPostsByType: O,
                setPrevUserPostsToLoad: I,
                onChangeSelectedPostDate: j
            }
        }
        e.A = g
    }
}]);
