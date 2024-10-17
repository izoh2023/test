"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[12986], {
    548341: function(e, t, s) {
        s.d(t, {
            A: function() {
                return g
            }
        });
        var r = function e() {
            var t = this
              , s = t._self._c;
            return t.storiesLength ? s("button-block", {
                class: {
                    "m-viewed": t.inProgress,
                    "m-blur-story-item": !t.isAuthUser && !t.user.subscribedBy
                },
                attrs: {
                    text: t._f("encodeHtml")(t.storyTitle),
                    "is-gradient-overlay": "",
                    "is-default-background": "",
                    "is-avatar": "",
                    "at-attr": "story_item"
                },
                nativeOn: {
                    click: function(e) {
                        return t.onStoryClick.apply(null, arguments)
                    }
                },
                scopedSlots: t._u([{
                    key: "avatar",
                    fn: function() {
                        return [s("avatar", {
                            staticClass: "m-border-line",
                            attrs: {
                                "user-id": t.user.id,
                                "is-link": !1,
                                "hide-online": "",
                                "disable-story-functionality": ""
                            }
                        })]
                    },
                    proxy: !0
                }], null, !1, 1779753866)
            }, [t.listIcons.length ? s("ul", {
                staticClass: "b-purchase__list m-mb-3 b-purchase__list--absolute"
            }, t._l(t.listIcons, (function(e) {
                return s("li", {
                    key: e.icon,
                    staticClass: "b-purchase__list-item"
                }, [s("svg", {
                    directives: [{
                        name: "svg-sprite",
                        rawName: "v-svg-sprite:[listIcon.icon]",
                        arg: e.icon
                    }]
                })])
            }
            )), 0) : t._e(), t.preview ? s("img", {
                staticClass: "img-responsive",
                attrs: {
                    src: t.preview,
                    draggable: "false",
                    alt: ""
                }
            }) : t._e(), t.lastStory.hasError || t.inProgress ? s("div", {
                staticClass: "b-story-item__loader"
            }, [t.lastStory.hasError ? s("div", {
                staticClass: "b-posts_preloader"
            }, [s("svg", {
                directives: [{
                    name: "svg-sprite",
                    rawName: "v-svg-sprite:icon-alert",
                    arg: "icon-alert"
                }]
            })]) : t.inProgress ? s("spinner-loader") : t._e()], 1) : t._e(), t.inProgress && t.progress > 0 ? s("span", {
                staticClass: "b-dropzone__preview__progress",
                style: {
                    "--progWidth": `${t.progress}%`
                },
                attrs: {
                    "at-attr": "image_loader"
                }
            }) : t._e()]) : t._e()
        }, i = [], a = s(407350), o = s.n(a), n = s(110908), l = s(252832), u = s(880805), c = s(96737), d = s(620514), m, h = {
            components: {
                SpinnerLoader: l.default,
                Avatar: u.default,
                ButtonBlock: c.A
            },
            mixins: [d.k],
            props: {
                author: {
                    type: Object,
                    default: null
                },
                value: {
                    type: Array,
                    required: !0
                }
            },
            computed: {
                ...(0,
                n.npG)(["authUser", "authUserId"]),
                ...(0,
                n.WxR)(["getStory"]),
                user() {
                    return this.author || this.authUser
                },
                myStories() {
                    return this.value.map(this.getStory)
                },
                progress() {
                    const e = this.myStories.find((e => !e.isReady && e.progress > 0 && e.progress < 100));
                    return (null == e ? void 0 : e.progress) || null
                },
                inProgress() {
                    return this.myStories.some((e => !e.hasError && !e.isReady))
                },
                storiesLength() {
                    return this.value.length
                },
                lastStory() {
                    if (!this.storiesLength)
                        return;
                    const e = this.value[this.storiesLength - 1];
                    return this.getStory(e)
                },
                preview() {
                    return this.lastStory.thumb || this.lastStory.locked
                },
                runStoryThrottled() {
                    return o()(this.runStory, 1500)
                },
                storyTitle() {
                    const {id: e, displayName: t, name: s} = this.user;
                    return e == this.authUserId ? this.$t("message.your_story_title") : t || s
                },
                hasPostInLatestStory() {
                    return !!this.lastStory.hasPost
                },
                listIcons() {
                    return [this.hasPostInLatestStory && {
                        icon: "icon-post2"
                    }].filter(Boolean)
                }
            },
            methods: {
                ...(0,
                n.tSh)(["setModalUser"]),
                ...(0,
                n.xon)(["fetchUserStories"]),
                async runStory() {
                    (this.isAuthUser || this.user.canLookStory) && (window.showPreloader(),
                    this.$nextTick(( () => {
                        window.hidePreloader(),
                        this.storiesLength && this.$root.$emit("component::story::run", {
                            users: [this.user.id]
                        })
                    }
                    )))
                },
                onStoryClick() {
                    this.user.subscribedBy || this.isAuthUser ? this.runStoryThrottled() : this.openModalSubscribe()
                },
                async openModalSubscribe() {
                    await this.setModalUser({
                        userId: this.user.id
                    }),
                    this.$nextTick(( () => {
                        this.$root.$emit("bv::show::modal", "ModalSubscribe")
                    }
                    ))
                }
            }
        }, v, p, g = (0,
        s(281656).A)(h, r, i, !1, null, null, null).exports
    },
    404496: function(e, t, s) {
        s.d(t, {
            A: function() {
                return b
            }
        });
        var r = function e() {
            var t = this
              , s = t._self._c;
            return s("button-block", {
                staticClass: "m-gradient-backward m-scheduled-story",
                attrs: {
                    "is-gradient-overlay": "",
                    "with-bg": "",
                    text: t.user.name,
                    "is-verified-user": t.user.isVerified,
                    "is-avatar": ""
                },
                nativeOn: {
                    click: function(e) {
                        return t.goToProfileAndScrollToStream.apply(null, arguments)
                    }
                },
                scopedSlots: t._u([{
                    key: "avatar",
                    fn: function() {
                        return [s("avatar", {
                            staticClass: "m-border-line",
                            attrs: {
                                user: t.user,
                                size: 36,
                                "is-link": !1,
                                "scheduled-stream": ""
                            }
                        })]
                    },
                    proxy: !0
                }, {
                    key: "verified-state",
                    fn: function() {
                        return [t.user.isVerified ? s("svg", {
                            directives: [{
                                name: "svg-sprite",
                                rawName: "v-svg-sprite:icon-verified",
                                arg: "icon-verified"
                            }],
                            staticClass: "m-verified"
                        }) : t._e()]
                    },
                    proxy: !0
                }])
            }, [!t.isOwnStream && t.showHideForNow ? s("dropdown-wrapper", {
                staticClass: "m-dropdown-position",
                attrs: {
                    "toggle-class": "m-round m-size-sm m-with-round-hover m-size-sm-hover m-reset-gaps m-light d-flex justify-content-center align-items-center"
                },
                scopedSlots: t._u([{
                    key: "button-content",
                    fn: function() {
                        return [s("svg", {
                            directives: [{
                                name: "svg-sprite",
                                rawName: "v-svg-sprite:icon-more",
                                arg: "icon-more"
                            }]
                        })]
                    },
                    proxy: !0
                }], null, !1, 268780839)
            }, [s("b-dropdown-item-button", {
                on: {
                    click: t.hideForNowHandler
                }
            }, [t._v(" " + t._s(t.$t("message.hide_for_now")) + " ")])], 1) : t._e(), s("span", {
                staticClass: "b-story-item__text-near-avatar g-sm-text g-semibold",
                class: {
                    "m-over-light-bg": !t.streamThumbSrc
                },
                attrs: {
                    id: `popover-${t.value.id}`
                }
            }, [s("utils-time", {
                attrs: {
                    html: "",
                    date: t.value.scheduledAt,
                    type: "scheduled-stream"
                }
            })], 1), s("div", {
                staticClass: "b-story-item__time-scheduled d-flex align-items-center g-md-text"
            }, [s("svg", {
                directives: [{
                    name: "svg-sprite",
                    rawName: "v-svg-sprite:icon-live",
                    arg: "icon-live"
                }]
            }), s("div", {
                staticClass: "g-text-ellipsis"
            }, [t.soon ? [t._v(" " + t._s(t.$t("message.soon_text")) + " ")] : s("utils-time", {
                attrs: {
                    date: t.value.scheduledAt,
                    type: "future"
                },
                on: {
                    time: function(e) {
                        return t.checkTime(t.value)
                    }
                }
            })], 2)]), s("img", {
                staticClass: "img-responsive m-stream-image",
                attrs: {
                    src: t.streamThumbSrc || t.backgroundImg,
                    draggable: "false",
                    alt: ""
                }
            })], 1)
        }, i = [], a = s(944114), o = s(96737), n = s(88878), l = s(880805), u = s(592535), c = s(41404), d = s(110908), m = s(932983), h, v = {
            name: "ScheduledStream",
            components: {
                ButtonBlock: o.A,
                UtilsTime: n.A,
                Avatar: l.default,
                DropdownWrapper: u.A
            },
            mixins: [c.A],
            props: {
                value: {
                    type: Object,
                    required: !0
                },
                isProfile: {
                    type: Boolean,
                    default: !1
                },
                showHideForNow: {
                    type: Boolean,
                    default: !1
                }
            },
            data() {
                return {
                    soon: !1
                }
            },
            computed: {
                ...(0,
                d.ZOz)(["getUser"]),
                ...(0,
                d.npG)(["authUser"]),
                user() {
                    var e;
                    return this.getUser((null === (e = this.value.user) || void 0 === e ? void 0 : e.id) || this.value.user)
                },
                streamThumbSrc() {
                    var e;
                    return (null === (e = this.value.media) || void 0 === e || null === (e = e.files) || void 0 === e || null === (e = e.thumb) || void 0 === e ? void 0 : e.url) || !1
                },
                isOwnStream() {
                    return this.user.id === this.authUser.id
                }
            },
            mounted() {
                this.checkTime(this.value)
            },
            methods: {
                ...(0,
                d.Xhk)(["hideStream"]),
                hideForNowHandler() {
                    this.hideStream(this.value.id)
                },
                goToProfileAndScrollToStream(e) {
                    if (this.isDropdownClick(e))
                        return;
                    const t = this.isProfile ? this.value.user : this.user
                      , {username: s, id: r} = t
                      , i = `stream${this.value.id}`;
                    if (this.isProfile) {
                        const e = document.getElementById(i);
                        e && ((0,
                        m.u3)({
                            top: e.offsetTop - 20
                        }),
                        history.replaceState(null, null, `#${i}`))
                    } else
                        this.$router.push({
                            path: `/${s || `u$${r}`}#${i}`
                        })
                },
                isDropdownClick(e) {
                    return e.target.closest(".m-dropdown-position") || e.target.closest(".dropdown-wrapper")
                },
                checkTime(e) {
                    const t = (new Date).getTime()
                      , s = new Date(e.scheduledAt).getTime();
                    this.soon = s - t <= 6e4
                }
            }
        }, p, g, b = (0,
        s(281656).A)(v, r, i, !1, null, null, null).exports
    },
    826266: function(e, t, s) {
        s.d(t, {
            A: function() {
                return _
            }
        });
        var r = function e() {
            var t = this
              , s = t._self._c;
            return s("div", t._g({}, t.eventSet), [s("button-block", {
                class: {
                    "m-costreaming": t.partner,
                    "m-paid-stream": t.paid,
                    "m-unlock-stream": t.clicked,
                    "m-blur-story-item": t.isBlurState
                },
                attrs: {
                    "is-default-background": "",
                    "is-gradient-overlay": "",
                    "is-avatar": "",
                    text: t._f("encodeHtml")(t.streamTitle)
                },
                scopedSlots: t._u([{
                    key: "avatar",
                    fn: function() {
                        return [s("avatar", {
                            staticClass: "m-border-line",
                            attrs: {
                                "user-id": t.user.id,
                                "is-link": !1,
                                "hide-online": !!t.partner,
                                "force-live": !t.partner
                            }
                        }), t.partner ? s("avatar", {
                            staticClass: "m-border-line",
                            attrs: {
                                "user-id": t.partner.user.id,
                                "is-link": !1,
                                "force-live": ""
                            }
                        }) : t._e()]
                    },
                    proxy: !0
                }, {
                    key: "user-counters",
                    fn: function() {
                        return [t.partner ? [t._v(" + " + t._s(t.partners.length) + " ")] : t._e()]
                    },
                    proxy: !0
                }])
            }, [!t.isOwnStream && t.showHideForNow ? s("dropdown-wrapper", {
                staticClass: "m-dropdown-position",
                attrs: {
                    "toggle-class": "m-round m-size-sm m-with-round-hover m-size-sm-hover m-reset-gaps m-light d-flex justify-content-center align-items-center"
                },
                scopedSlots: t._u([{
                    key: "button-content",
                    fn: function() {
                        return [s("svg", {
                            directives: [{
                                name: "svg-sprite",
                                rawName: "v-svg-sprite:icon-more",
                                arg: "icon-more"
                            }]
                        })]
                    },
                    proxy: !0
                }], null, !1, 268780839)
            }, [s("b-dropdown-item-button", {
                on: {
                    click: t.hideForNowHandler
                }
            }, [t._v(" " + t._s(t.$t("message.hide_for_now")) + " ")])], 1) : t._e(), t.isBlurState && t.value.price ? s("div", {
                staticClass: "b-story-item__cost g-md-text g-semibold"
            }, [t._v(" $" + t._s(t.value.price) + " ")]) : !t.isBlurState && t.paid ? [s("div", {
                staticClass: "b-story-item__price"
            }, [t._v(" " + t._s(t.$t("message.chat_paid_massage_pay_button", {
                PRICE: `$${t.value.price}`
            })) + " "), s("span", {
                staticClass: "b-story-item__hint g-md-text d-block"
            }, [t._v(t._s(t.$t("message.24_hours_pass")))])]), s("div", {
                staticClass: "b-story-item__cost g-md-text g-semibold"
            }, [t._v(" $" + t._s(t.value.price) + " ")])] : t.value.price ? s("div", {
                staticClass: "b-story-item__cost g-md-text g-semibold"
            }, [t._v(" $" + t._s(t.value.price) + " ")]) : t._e(), t.showDefaultCover ? s("img", {
                staticClass: "img-responsive m-stream-image",
                attrs: {
                    src: t.defaultCoverSrc,
                    draggable: "false",
                    alt: ""
                }
            }) : t._e(), s("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.streamThumbSrc && !t.showDefaultCover,
                    expression: "streamThumbSrc && !showDefaultCover"
                }, {
                    name: "observe-visibility",
                    rawName: "v-observe-visibility",
                    value: t.imgVisibilityChanged,
                    expression: "imgVisibilityChanged"
                }],
                ref: "streamThumb",
                staticClass: "img-responsive m-stream-image",
                attrs: {
                    src: t.streamThumbSrc,
                    draggable: "false",
                    alt: ""
                },
                on: {
                    load: t.checkStreamThumb,
                    error: t.checkStreamThumb
                }
            })], 2)], 1)
        }
          , i = []
          , a = s(944114)
          , o = s(826489)
          , n = s(110908)
          , l = s(571441)
          , u = s(620514)
          , c = s(880805)
          , d = s(96737)
          , m = s(592535)
          , h = s(531403);
        const v = 3
          , p = 10;
        var g, b = {
            name: "TheStream",
            components: {
                Avatar: c.default,
                ButtonBlock: d.A,
                DropdownWrapper: m.A
            },
            mixins: [u.k, l.A],
            props: {
                value: {
                    type: Object,
                    required: !0
                },
                showHideForNow: {
                    type: Boolean,
                    default: !1
                }
            },
            data() {
                return {
                    clicked: !1,
                    clickedOnPay: !1,
                    hover: !1,
                    timeout: void 0,
                    interval: 3,
                    streamThumbSrc: null,
                    showDefaultCover: !1,
                    imgVisibility: !0
                }
            },
            computed: {
                ...(0,
                n.ZOz)(["getUser"]),
                ...(0,
                n.npG)(["authUser"]),
                isOwnStream() {
                    return [this.user.id, this.partner].includes(this.authUser.id)
                },
                user() {
                    return this.getUser(this.value.user)
                },
                paid() {
                    return this.value.price > 0 && !this.value.isOpened
                },
                partners() {
                    return this.value.partners
                },
                partner() {
                    return this.value.partners[0]
                },
                defaultCoverSrc() {
                    return this.user.avatar
                },
                streamTitle() {
                    return this.authUserId === this.user.id ? this.$t("message.message_live_now") : this.user.name
                },
                eventSet() {
                    return this.isBlurState ? {
                        click: this.openModalSubscribe
                    } : this.paid && o.isMobile ? {
                        click: this.buy
                    } : this.paid ? {
                        mouseover: () => {
                            this.hover = !0
                        }
                        ,
                        mouseleave: () => {
                            this.hover = !1
                        }
                        ,
                        click: e => {
                            e.target.closest(".m-dropdown-position") || this.buy()
                        }
                    } : {
                        click: e => {
                            if (!e.target.closest(".m-dropdown-position"))
                                return this.user.id === this.authUserId && "obs" === this.value.streamingPlatform ? this.$router.push({
                                    name: "StreamingChat"
                                }) : void this.$router.push({
                                    name: "Live",
                                    params: {
                                        user: this.user.username
                                    }
                                })
                        }
                    }
                },
                isBlurState() {
                    return !this.user.subscribedBy && !this.isAuthUser
                }
            },
            watch: {
                clicked() {
                    o.isMobile && this.clicked && this.resetHoverByTimeout()
                },
                hover() {
                    o.isMobile || (this.hover ? s.g.clearTimeout(this.timeout) : this.clicked && this.resetHoverByTimeout())
                },
                imgVisibility(e) {
                    e && this.reloadStreamThumb()
                }
            },
            created() {
                this.reloadStreamThumb()
            },
            methods: {
                ...(0,
                n.tSh)(["setModalUser"]),
                ...(0,
                n.Xhk)(["hideStream"]),
                hideForNowHandler() {
                    this.hideStream(this.value.id)
                },
                buy() {
                    if (!this.clicked)
                        return this.clicked = !0;
                    this.clickedOnPay || (this.clickedOnPay = !0,
                    setTimeout(( () => {
                        this.payForStream(this.value, this.user)
                    }
                    )))
                },
                resetHoverByTimeout() {
                    this.timeout = setTimeout(( () => {
                        this.clicked = !1
                    }
                    ), 7e3)
                },
                async openModalSubscribe() {
                    await this.setModalUser({
                        userId: this.user.id
                    }),
                    this.$nextTick(( () => {
                        this.$root.$emit("bv::show::modal", "ModalSubscribe")
                    }
                    ))
                },
                checkStreamThumb({type: e}) {
                    if ("error" === e)
                        return this.showDefaultCover = !0,
                        this.interval = p,
                        void setTimeout(this.reloadStreamThumb, 1e3 * this.interval);
                    "load" === e && (this.showDefaultCover = !1,
                    this.interval = 3,
                    this.imgVisibility && setTimeout(this.reloadStreamThumb, 1e3 * this.interval))
                },
                reloadStreamThumb() {
                    this.streamThumbSrc = `${this.value.thumbUrl}?${(0,
                    h.A)()}`
                },
                imgVisibilityChanged(e) {
                    this.imgVisibility = e
                }
            }
        }, f, y, _ = (0,
        s(281656).A)(b, r, i, !1, null, null, null).exports
    },
    819697: function(e, t, s) {
        s.d(t, {
            A: function() {
                return m
            }
        });
        var r = function e() {
            var t = this
              , s = t._self._c;
            return s("button", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: t.buttonTooltip,
                    expression: "buttonTooltip"
                }],
                class: t.buttonClassName,
                attrs: {
                    disabled: t.isProcessingPinUser
                },
                on: {
                    click: t.onClick
                }
            }, [s("svg", {
                directives: [{
                    name: "svg-sprite",
                    rawName: "v-svg-sprite:[buttonIcon]",
                    arg: t.buttonIcon
                }],
                class: t.iconSizeClassName
            })])
        }
          , i = []
          , a = s(885471);
        const o = {
            XS: "xs",
            SM: "sm",
            LG: "lg",
            DEFAULT: "default"
        }
          , n = {
            GRAY: "gray",
            WHITE: "white"
        };
        var l, u = {
            name: "PinUserButton",
            props: {
                isPinnedUser: {
                    type: Boolean,
                    default: !1
                },
                isProcessingPinUser: {
                    type: Boolean,
                    default: !1
                },
                buttonTooltip: {
                    type: String,
                    default: ""
                },
                isHoverEffects: {
                    type: Boolean,
                    default: !0
                },
                size: {
                    type: String,
                    default: o.SM,
                    validator: e => Object.values(o).includes(e)
                },
                iconColor: {
                    type: String,
                    default: n.GRAY,
                    validator: e => Object.values(n).includes(e)
                }
            },
            setup(e, {emit: t}) {
                const {isPinnedUser: s, isProcessingPinUser: r, isHoverEffects: i, iconColor: o, size: l} = (0,
                a.toRefs)(e)
                  , u = (0,
                a.computed)(( () => o.value ? `m-${o.value}` : null))
                  , c = (0,
                a.computed)(( () => i.value ? "m-with-round-hover " + (o.value === n.WHITE ? "m-light" : "") : ""))
                  , d = (0,
                a.computed)(( () => l.value ? `m-${l.value}-size` : "m-default-size"))
                  , m = (0,
                a.computed)(( () => s.value ? "icon-pin-on" : "icon-pin"))
                  , h = (0,
                a.computed)(( () => r.value ? "icon-loading" : m.value))
                  , v = (0,
                a.computed)(( () => l.value ? `m-${l.value}-size` : "m-sm-size"))
                  , p = undefined
                  , g = undefined;
                return {
                    buttonIcon: h,
                    buttonClassName: (0,
                    a.computed)(( () => ["g-btn m-icon m-icon-only g-position-relative", `${v.value}`, `${u.value}`, `${c.value}`])),
                    iconSizeClassName: d,
                    onClick: () => t("onClick")
                }
            }
        }, c, d, m = (0,
        s(281656).A)(u, r, i, !1, null, null, null).exports
    }
}]);
