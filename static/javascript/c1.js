"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[62592], {
    853494: function(e, s, t) {
        t.d(s, {
            A: function() {
                return A
            }
        });
        var r = function e() {
            var s = this
              , t = s._self._c;
            return s.user.username ? t("info-card-wrapper", [t("router-link", {
                staticClass: "b-profile-info-card__link",
                attrs: {
                    to: {
                        name: "Profile",
                        params: {
                            userId: s.user.username,
                            profileStatSource: s.profileStatSource
                        }
                    }
                }
            }, [t("div", {
                staticClass: "b-users__item__cover__wrapper"
            }, [t("img", {
                staticClass: "b-users__item__cover",
                attrs: {
                    src: s.thumbSrcLink(s.user.header, s.user.headerThumbs, "w480", "header"),
                    alt: s.user.name,
                    loading: "lazy"
                },
                on: {
                    error: function(e) {
                        return s.errorCover(e)
                    }
                }
            })]), s.user.isFree || s.user.hasPromotion ? t("div", {
                staticClass: "b-free-label m-capitalize g-semibold"
            }, [s.user.isFree ? [s._v(" " + s._s(s.$t("message.free")) + " ")] : s._e(), s.user.hasPromotion ? t("svg", {
                directives: [{
                    name: "svg-sprite",
                    rawName: "v-svg-sprite:icon-discount",
                    arg: "icon-discount"
                }],
                staticClass: "m-has-promo"
            }) : s._e()], 2) : s._e(), t("div", {
                staticClass: "b-friend__content d-flex justify-content-center flex-wrap"
            }, [t("div", {
                staticClass: "b-friend__avatar g-position-relative"
            }, [t("avatar", {
                attrs: {
                    user: s.user,
                    size: 100,
                    "is-link": !1
                }
            })], 1), t("div", {
                staticClass: "b-username-row m-gap-clear"
            }, [t("username-block", {
                attrs: {
                    user: s.user
                }
            }, [s._v(" " + s._s(s.sanitizedUserName) + " ")])], 1), t("div", {
                staticClass: "b-username-row m-gap-clear"
            }, [t("div", {
                staticClass: "b-username"
            }, [t("div", {
                staticClass: "g-user-username"
            }, [s._v(" @" + s._s(s.user.username) + " ")])])])])]), t("div", {
                staticClass: "b-users__item__controls"
            }, [s.isListable ? t("button", {
                staticClass: "g-btn m-with-round-hover m-light m-icon-only m-icon m-white m-reset-width m-sm-size",
                on: {
                    click: s.openListsModal
                }
            }, [t("svg", {
                directives: [{
                    name: "svg-sprite",
                    rawName: "v-svg-sprite"
                }],
                class: "icon-list-add" + (s.addedLists.length ? "ed" : "")
            })]) : s._e(), s.isPinnedUser ? t("pin-user-button", {
                attrs: {
                    "button-tooltip": s.$t("message.tooltip_pinned_user"),
                    "is-hover-effects": !1,
                    size: "xs",
                    "icon-color": "white",
                    "is-pinned-user": ""
                }
            }) : s._e(), s.isHasUserActions ? t("users-action", {
                staticClass: "m-center m-reset-gaps m-light m-not-width-limit m-radial-gradient-btn",
                attrs: {
                    user: s.user,
                    "menu-class": ["friend-actions", {
                        "m-not-fixed-dropdown": s.isNotFixedPositionDropdown
                    }],
                    "has-remove-action": s.hasRemoveAction,
                    "icon-more-default": !1,
                    "default-hover-color": !1,
                    "is-friend-widget": "",
                    "can-remove-from-friends": s.canRemoveFromFriends
                },
                on: {
                    remove: s.userActionRemove
                }
            }) : s._e()], 1)], 1) : t("spinner-loader")
        }, n = [], i = t(885471), a = t(953181), o = t(880805), u = t(241975), d = t(839697), l = t(893310), c = t(819697), m = t(252832), v = t(777978), p = t(279589), f = t(203852), g = t(957903), h, _ = {
            name: "ProfileFriend",
            components: {
                Avatar: o.default,
                UsersAction: u.A,
                UsernameBlock: d.A,
                InfoCardWrapper: l.A,
                PinUserButton: c.A,
                SpinnerLoader: m.default
            },
            mixins: [v.A, p.A],
            props: {
                userId: {
                    type: Number,
                    required: !0
                },
                isPinnedUser: {
                    type: Boolean,
                    default: !1
                },
                isNotFixedPositionDropdown: {
                    type: Boolean,
                    default: !1
                },
                userProp: {
                    type: Object,
                    default: null
                },
                isRecentlySubscribedBlock: {
                    type: Boolean,
                    default: !1
                },
                hasRemoveAction: {
                    type: Boolean,
                    default: !1
                },
                profileStatSource: {
                    type: String,
                    default: "offer"
                },
                canRemoveFromFriends: {
                    type: Boolean,
                    default: !1
                },
                isListable: {
                    type: Boolean,
                    default: !1
                }
            },
            setup(e, {emit: s}) {
                const {proxy: t} = (0,
                i.getCurrentInstance)()
                  , {userId: r, userProp: n, isRecentlySubscribedBlock: o} = (0,
                i.toRefs)(e)
                  , {store: u} = (0,
                f.A)()
                  , d = e => u.getters["users/getUser"](e)
                  , l = e => u.commit("users/setModalUser", e)
                  , c = e => u.dispatch("users/getUsersIfNeeded", e)
                  , m = (0,
                i.computed)(( () => n.value ? n.value : d(r.value)));
                m.value.username || c({
                    entities: {
                        users: {
                            [r.value]: {
                                _views: ["r2"]
                            }
                        }
                    }
                });
                const v = (0,
                i.computed)(( () => (0,
                g.o4)(m.value.name)))
                  , p = (0,
                i.computed)(( () => u.getters["auth/authUserId"]))
                  , h = (0,
                i.computed)(( () => m.value.id !== p.value && !o.value))
                  , _ = (0,
                i.computed)(( () => m.value.listsStates ? m.value.listsStates.filter(( ({type: e, hasUser: s}) => !Object.values(a.k).includes(e) && s)) : []))
                  , b = undefined
                  , F = undefined;
                return {
                    user: m,
                    isHasUserActions: h,
                    sanitizedUserName: v,
                    addedLists: _,
                    userActionRemove: () => s("userActionRemove", r.value),
                    openListsModal: () => {
                        l({
                            userId: m.value.id
                        }),
                        t.$root.$emit("bv::show::modal", "ModalUsersLists")
                    }
                }
            }
        }, b, F, A = (0,
        t(281656).A)(_, r, n, !1, null, "9f11bf40", null).exports
    },
    21527: function(e, s, t) {
        t.d(s, {
            A: function() {
                return h
            }
        });
        var r = function e() {
            var s = this
              , t = s._self._c;
            return t("div", {
                staticClass: "b-profile__friends__list"
            }, [t("div", {
                staticClass: "b-tab-container",
                class: {
                    "m-loading-content": s.isLoadingFriends
                }
            }, [s.isLoadingFriends ? t("div", {
                staticClass: "b-posts_preloader_container"
            }, [t("spinner-loader")], 1) : t("drag-scroll", {
                staticClass: "g-nowrap m-gaps-inside"
            }, [s._l(s.preparedUserFriendsIds, (function(e) {
                return t("friend", {
                    key: e,
                    staticClass: "m-friend-card",
                    attrs: {
                        "user-id": e,
                        "can-remove-from-friends": s.isAuthUser,
                        "profile-stat-source": "friends_widget"
                    }
                })
            }
            )), s.isShowAllFriendsButton ? t("router-link", {
                staticClass: "b-profile-info-card align-self-stretch",
                attrs: {
                    to: s.allFriendsRoute
                }
            }, [t("button-block", {
                attrs: {
                    text: s.$t("message.view_all_btn"),
                    icon: "icon-friends"
                }
            })], 1) : s._e()], 2)], 1)])
        }, n = [], i = t(885471), a = t(853494), o = t(252832), u = t(96737), d = t(808139), l = t(203852), c = t(358887), m = t(734155), v, p = {
            name: "FriendsWidget",
            components: {
                Friend: a.A,
                SpinnerLoader: o.default,
                ButtonBlock: u.A,
                DragScroll: d.A
            },
            props: {
                friendsCount: {
                    type: Number,
                    default: 10
                }
            },
            setup(e) {
                const {store: s} = (0,
                l.A)()
                  , {user: t, userId: r} = (0,
                m.A)()
                  , {hasMoreFriends: n, userFriendsIds: a, isLoadingFriends: o, reset: u, fetchFriends: d, fetchPinnedFriends: v} = (0,
                c.A)()
                  , p = (0,
                i.computed)(( () => s.getters["auth/authUser"] || {}))
                  , f = (0,
                i.computed)(( () => s.getters["auth/authUserId"] || {}))
                  , g = (0,
                i.computed)(( () => a.value.slice(0, e.friendsCount)))
                  , h = (0,
                i.computed)(( () => (a.value.length > e.friendsCount || n.value) && !o.value))
                  , _ = (0,
                i.computed)(( () => r.value === f.value))
                  , b = (0,
                i.computed)(( () => _.value && p.value.isPerformer ? {
                    name: "MyFriends",
                    params: {
                        list: "friends"
                    }
                } : {
                    name: "ProfileFriends",
                    params: {
                        userId: t.value.username
                    }
                }));
                async function F() {
                    const {hasMore: s=!1} = await d();
                    s && g.value.length < e.friendsCount && n.value && await F()
                }
                const A = undefined;
                return ( () => {
                    u(),
                    v(),
                    F()
                }
                )(),
                (0,
                i.watch)(a, ( (s, t) => {
                    t.length > s.length && s.length < e.friendsCount && n.value && F()
                }
                )),
                {
                    isLoadingFriends: o,
                    allFriendsRoute: b,
                    preparedUserFriendsIds: g,
                    isShowAllFriendsButton: h,
                    isAuthUser: _
                }
            }
        }, f, g, h = (0,
        t(281656).A)(p, r, n, !1, null, null, null).exports
    },
    345231: function(e, s, t) {
        t.d(s, {
            A: function() {
                return c
            }
        });
        var r = function e() {
            var s = this
              , t = s._self._c;
            return t("suggestion-wrapper", {
                staticClass: "m-selected-bg"
            }, s._l(s.guestFanSuggestionIds, (function(e) {
                return t("friend", {
                    key: e,
                    staticClass: "m-friend-recommended",
                    attrs: {
                        "user-id": e
                    }
                })
            }
            )), 1)
        }, n = [], i = t(622255), a = t(853494), o, u = {
            name: "GuestFanSuggestions",
            components: {
                SuggestionWrapper: i.A,
                Friend: a.A
            },
            data() {
                return {
                    guestFanSuggestionIds: [15585607, 82517634]
                }
            }
        }, d, l, c = (0,
        t(281656).A)(u, r, n, !1, null, null, null).exports
    },
    358887: function(e, s, t) {
        var r = t(517642)
          , n = t.n(r)
          , i = t(658004)
          , a = t.n(i)
          , o = t(733853)
          , u = t.n(o)
          , d = t(845876)
          , l = t.n(d)
          , c = t(432475)
          , m = t.n(c)
          , v = t(515024)
          , p = t.n(v)
          , f = t(731698)
          , g = t.n(f)
          , h = t(842762)
          , _ = t.n(h)
          , b = t(962953)
          , F = t.n(b)
          , A = t(885471)
          , w = t(203852)
          , C = t(47452)
          , y = t(734155)
          , I = t(714174)
          , S = t(977434);
        const U = 3;
        function k() {
            const {checkIsBlockedUser: e} = (0,
            I.A)()
              , {store: s} = (0,
            w.A)()
              , {userId: t} = (0,
            y.A)()
              , {routeQuery: r} = (0,
            C.A)()
              , n = (0,
            A.ref)(0)
              , i = (0,
            A.computed)(( () => s.state.users.friendsLoading))
              , a = (0,
            A.computed)(( () => {
                var e;
                return (null === (e = s.state.users.friends) || void 0 === e ? void 0 : e[t.value]) || []
            }
            ))
              , o = (0,
            A.computed)(( () => a.value.filter((s => !e(s)))))
              , u = (0,
            A.computed)(( () => {
                var e;
                return (null === (e = s.state.users.pinnedFriends) || void 0 === e ? void 0 : e[t.value]) || []
            }
            ))
              , d = (0,
            A.computed)(( () => u.value.filter((s => !e(s)))))
              , l = (0,
            A.computed)(( () => {
                var e;
                return (null === (e = r.value) || void 0 === e || null === (e = e.query) || void 0 === e ? void 0 : e.trim()) || ""
            }
            ))
              , c = (0,
            A.computed)(( () => {
                var e;
                return (null === (e = l.value) || void 0 === e ? void 0 : e.length) >= 3
            }
            ))
              , m = (0,
            A.computed)(( () => c.value ? o.value : [...new Set([...d.value, ...o.value])]))
              , v = e => s.dispatch("users/fetchFriendsList", e)
              , p = () => s.dispatch("users/fetchPinnedFriends", {
                userId: t.value
            })
              , f = e => s.commit("users/setHasMoreFriends", e)
              , g = () => s.commit("users/setFriendsList", {
                userId: t.value,
                friends: []
            })
              , h = () => {
                n.value = 0,
                g(),
                f(!1)
            }
              , _ = (0,
            A.computed)(( () => s.state.users.hasMoreFriends))
              , b = async () => {
                const e = await v({
                    more: _.value,
                    userId: t.value,
                    offset: n.value,
                    query: c.value ? l.value : ""
                });
                return n.value += S.Jg,
                e
            }
            ;
            return (0,
            A.watch)(o, ( (e, s) => {
                e.length < s.length && (n.value = e.length)
            }
            )),
            {
                hasMoreFriends: _,
                userFriendsIds: m,
                isLoadingFriends: i,
                pinnedFriendsIds: u,
                reset: h,
                fetchFriends: b,
                fetchPinnedFriends: p
            }
        }
        s.A = k
    }
}]);
