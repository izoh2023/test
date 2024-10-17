(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[10881], {
    910881: function(e, t, s) {
        "use strict";
        var r = s(305287)
          , i = s.n(r)
          , o = s(858156)
          , n = s.n(o)
          , a = s(725440)
          , u = s.n(a)
          , h = s(962953)
          , l = s.n(h)
          , c = s(803296)
          , f = s.n(c)
          , d = s(527208)
          , P = s.n(d)
          , m = s(548408)
          , p = s.n(m)
          , v = s(814603)
          , g = s.n(v)
          , I = s(147566)
          , y = s.n(I)
          , b = s(198721)
          , L = s.n(b)
          , w = s(974353)
          , U = s.n(w)
          , S = s(497375)
          , T = s.n(S)
          , $ = s(110908)
          , O = s(667747)
          , k = s(124444)
          , M = s(932983);
        U().extend(T()),
        t.A = {
            data() {
                return {
                    userLoaded: null
                }
            },
            mixins: [O.A, k.A],
            computed: {
                ...(0,
                $.kbi)(["getLastProfileItemIds", "getPost", "getTempItemIds"]),
                ...(0,
                $.npG)(["authUser", "authUserId", "isAuth"]),
                ...(0,
                $.ZOz)(["findUserByUserName", "getUser", "userId"]),
                ...(0,
                $.B4G)(["route"]),
                ...(0,
                $.Hdj)(["getInit"]),
                ...(0,
                $.vrn)(["activePostLabel"]),
                isProfileAlias() {
                    return "ProfileAlias" === this.$route.name
                },
                isProfile() {
                    return "Profile" === this.$route.name || this.isProfileAlias
                },
                isProfileOrInner() {
                    return this.isProfile || "ProfileInner" === this.$route.name
                },
                isLabelPage() {
                    return !!this.activePostLabel
                },
                isPostPage() {
                    return "Post" === this.$route.name
                },
                isProfileOrInnerOrPost() {
                    return this.isProfileOrInner || ["Post", "MessagePage"].includes(this.$route.name)
                },
                isOwnProfileOrPostFirstLoad() {
                    return !this.route.from.name && this.isAuthUser && this.isProfileOrInnerOrPost
                }
            },
            methods: {
                ...(0,
                $.xon)(["fetchUserStories", "fetchUserHighlights"]),
                ...(0,
                $.Cj8)(["resetProfileHighlights", "setUserStories"]),
                ...(0,
                $.tSh)(["setCurrentUser", "resetUserLinks", "setProfileDataLoadingError", "resetNfts"]),
                ...(0,
                $.sxm)(["resetSpotifyBio"]),
                ...(0,
                $.CXg)(["fetchCurrentUser", "socialButtonsGetByUser"]),
                ...(0,
                $.yKE)(["setItemIds", "setLastProfileItemId", "setPrevUserPostsToLoad", "setPinnedIds", "resetPosts", "resetPostsFiltersCounter", "deletePost"]),
                ...(0,
                $.$GZ)(["fetchUserPosts", "fetchPost", "fetchPostsPinned"]),
                ...(0,
                $.bKs)(["fetchMessageToPost", "fetchChatsMessages"]),
                ...(0,
                $.Zp1)(["resetScheduledStreams"]),
                async fetchProfileData(e, t) {
                    if (this.setProfileDataLoadingError(!1),
                    !e)
                        return void this.setProfileDataLoadingError(!0);
                    let s;
                    if (this.setPrevUserPostsToLoad(!1),
                    this.userLoaded)
                        s = this.userLoaded,
                        this.userLoaded = null;
                    else {
                        this.isAfterUnblock || this.$route.params.noLoadUser || this.isOwnProfileOrPostFirstLoad || this.setCurrentUser(null);
                        try {
                            if ((this.$route.params.noLoadUser || this.isOwnProfileOrPostFirstLoad) && (s = Number.isNaN(+e) ? this.findUserByUserName(e) : this.getUser(e)),
                            !s || !s.id) {
                                let t;
                                if (this.getUserWithRef && this.referrer)
                                    try {
                                        const {host: e, pathname: s} = new URL(this.referrer);
                                        t = this.$window.encodeURIComponent(`${e.replace("www.", "")}${"/" !== s ? s : ""}`)
                                    } catch (a) {}
                                s = await this.fetchCurrentUser({
                                    id: e,
                                    httpreferrer: t
                                })
                            }
                        } catch (a) {
                            this.setProfileDataLoadingError(!0)
                        }
                    }
                    if (s) {
                        if (!s.isPerformer && this.isProfileOrInner && "archived" === this.$route.params.postType)
                            return void this.$router.replace({
                                name: "Profile",
                                params: {
                                    userId: s.username
                                }
                            });
                        if (this.isProfileOrInnerOrPost && s.username !== this.$route.params.userId)
                            return this.userLoaded = s,
                            void this.changeRoute(s);
                        if (this.isMyProfileHasScenario)
                            return;
                        if (this.isProfileOrInner && s.isBlocked)
                            return void ("ProfileInner" === this.$route.name && this.$router.replace({
                                name: "Profile",
                                params: {
                                    userId: s.username
                                }
                            }));
                        if (this.isProfileOrInner && s.isPerformer && this.socialButtonsGetByUser(s.id),
                        !s.isPrivateRestriction || s.isPrivateRestriction && this.isAuthUser || s.subscribedBy) {
                            var r, o;
                            const {id: e} = s
                              , {name: a, params: {postId: u, noLoadPostData: h, postType: l}, query: {q: c, order: f, filter: d}} = this.$route;
                            if (s.isPerformer && this.isProfileOrInner && (this.isAuth && this.fetchUserHighlights({
                                userId: e
                            }),
                            s.hasStories && s.canLookStory && this.fetchUserStories(e),
                            "function" == typeof this.onReadySendProfileStatHandler && this.onReadySendProfileStatHandler()),
                            ["Post", "MessagePage"].includes(a) && u && !h)
                                return void await this.setPostData(t);
                            const P = this.getLastProfileItemIds(s.username, l);
                            let m, p, v, g, I, y, b;
                            if (P.length) {
                                var n;
                                if (({pinnedPostsIds: v, userPostItemIds: g} = this.getTempItemIds(s.username)),
                                ["Post", "PostsEdit", "MessagePage"].includes(null === (n = this.route) || void 0 === n || null === (n = n.from) || void 0 === n ? void 0 : n.name) ? I = [+this.route.from.params.postId] : (I = i()(v, P),
                                I.length || (I = i()(g, P))),
                                m = g.indexOf(I[0]),
                                v.length ? p = v.indexOf(I[0]) : this.setPinnedIds(),
                                -1 === p && m > 0) {
                                    if (this.setPinnedIds(),
                                    this.isPostPage)
                                        return;
                                    this.setPrevUserPostsToLoad(!0)
                                }
                                this.isProfile && (-1 === p && -1 === m ? this.fetchPostsPinned({
                                    isPinnedPostRemove: this.isPinnedPostRemove
                                }) : (m > 0 || s.hasPinnedPosts && !v.length) && this.setPrevUserPostsToLoad(!0)),
                                (m >= 0 || p >= 0) && (p >= 0 && this.setPinnedIds(v),
                                this.setItemIds(I))
                            }
                            if (m > -1) {
                                const [e] = this.getPost(g[m]);
                                null != e && e.isPinned ? (b = !0,
                                this.setPrevUserPostsToLoad(!1)) : y = this.getTimeMarker(e)
                            }
                            const L = {
                                id: e,
                                type: l,
                                query: c,
                                order: f,
                                filter: d,
                                beforePublishTime: y,
                                more: !!y,
                                label: this.activePostLabel
                            };
                            this.isPostPage || (s.isPerformer ? await this.getProfileDataPosts(L, b) : this.resetPosts(),
                            this.setLastProfileItemId({
                                username: s.username,
                                arr: []
                            }));
                            const w = null === (r = this.route) || void 0 === r || null === (r = r.from) || void 0 === r ? void 0 : r.params.postId;
                            null !== (o = I) && void 0 !== o && o.length && !w && this.hasPrevUserPostsToLoad && setTimeout(( () => {
                                const e = this.$refs.loadPrevPostsButton;
                                (0,
                                M.PA)(e, {
                                    offset: 65
                                })
                            }
                            ), 1e3)
                        } else
                            s.isPrivateRestriction && ["Post", "MessagePage"].includes(this.$route.name) && this.$router.replace({
                                name: "Profile",
                                params: {
                                    userId: s.username,
                                    noLoadUser: !0
                                }
                            })
                    }
                },
                async getProfileDataPosts(e, t) {
                    const {filter: s, order: r} = this.$route.query
                      , i = undefined;
                    this.isProfile && !s && !this.activePostLabel && (!r || "publish_date_asc" === r) && (e.pinned = 0);
                    try {
                        t ? await Promise.all([this.fetchPostsPinned({
                            isPinnedPostRemove: this.isPinnedPostRemove
                        }), this.fetchUserPosts(e)]) : await this.fetchUserPosts(e)
                    } catch (o) {}
                },
                getTimeMarker(e) {
                    const t = n()(e, "postedAt")
                      , s = n()(e, "postedAtPrecise");
                    return s ? U().unix(s).format("X.SSSSSS") : U()(t).format("X.SSSSSS")
                },
                changeRoute(e) {
                    this.isProfileAlias ? this.$router.replace({
                        name: "Profile",
                        params: {
                            userId: e.username
                        }
                    }) : this.$router.replace({
                        ...this.$route,
                        params: {
                            userId: e.username
                        }
                    })
                },
                async setPostData(e) {
                    const {params: {postId: t}} = this.$route;
                    let s;
                    if ("MessagePage" === this.$route.name && (s = await this.fetchMessageToPost({
                        groupId: t,
                        userId: e,
                        limit: 1,
                        id: t
                    })),
                    this.isPostPage && (s = await this.fetchPost({
                        id: t,
                        active: !0
                    })),
                    Array.isArray(s) && !s.length)
                        this.setProfileDataLoadingError(!0);
                    else if (s.author) {
                        const {author: {id: e, username: t}} = s
                          , {params: {userId: r}} = this.$route;
                        let i;
                        if (t)
                            i = t;
                        else if (e) {
                            const t = this.getUser(e);
                            i = n()(t, "username", !1)
                        }
                        i !== r && await this.$router.replace({
                            ...this.$route,
                            params: {
                                userId: i
                            }
                        })
                    }
                },
                resetProfileData(e) {
                    this.resetPostsFiltersCounter(),
                    this.setUserStories({
                        userId: e,
                        stories: []
                    }),
                    this.resetProfileHighlights(),
                    this.resetSpotifyBio(),
                    this.resetUserLinks(),
                    this.resetNfts(),
                    this.resetScheduledStreams()
                }
            }
        }
    },
    124444: function(e, t, s) {
        "use strict";
        var r = s(110908);
        t.A = {
            computed: {
                ...(0,
                r.vrn)(["activePostLabel"]),
                isPinnedPostRemove() {
                    const {query: {filter: e, order: t}} = this.$route
                      , s = e || t;
                    return !s || "publish_date_asc" === s
                }
            },
            methods: {
                postsByTypeParams() {
                    const {name: e, query: {filter: t, order: s, q: r}, params: {labelId: i, postType: o}} = this.$route;
                    return {
                        isHidePinnedPosts: !("Profile" !== e || t || this.activePostLabel || s && "publish_date_asc" !== s),
                        routeParams: {
                            type: o,
                            query: r,
                            order: s,
                            filter: t,
                            label: i || this.activePostLabel
                        }
                    }
                }
            }
        }
    },
    932983: function(e, t, s) {
        "use strict";
        s.d(t, {
            PA: function() {
                return P
            },
            PD: function() {
                return l
            },
            cs: function() {
                return d
            },
            dy: function() {
                return m
            },
            eG: function() {
                return f
            },
            u3: function() {
                return c
            }
        });
        var r = s(185015)
          , i = s.n(r)
          , o = s(16280)
          , n = s.n(o)
          , a = s(178863)
          , u = s(445948)
          , h = s(480343);
        const l = 48;
        function c({top: e, offset: t, desktopOffset: s, behavior: r, container: i}={}) {
            const o = isNaN(e) ? 0 : Number(e)
              , n = isNaN(t) ? 0 : Number(t)
              , c = isNaN(s) ? l : Number(s)
              , f = Object.values(u.r0).includes(r) ? r : u.r0.SMOOTH
              , d = (0,
            a._P)(i)
              , P = (0,
            a.Y9)(d) ? document : d;
            let m = Math.max(o - n, 0);
            return window.innerWidth >= h.i.SM && (m = Math.max(m - c, 0)),
            new Promise((e => {
                const t = () => {
                    P.removeEventListener("scrollend", t),
                    e()
                }
                  , s = d.scrollTop;
                try {
                    d.scrollTo({
                        top: m,
                        behavior: f
                    })
                } catch (r) {
                    if (!(r instanceof TypeError))
                        throw t(),
                        r;
                    d.scrollTo(0, o)
                }
                P.addEventListener("scrollend", t),
                setTimeout(( () => {
                    s === d.scrollTop && t()
                }
                ), 100)
            }
            ))
        }
        async function f({behavior: e, container: t}={}) {
            const s = (0,
            a._P)(t);
            s.scrollTop <= 0 || await c({
                behavior: e,
                top: 0,
                desktopOffset: 0,
                container: s
            })
        }
        async function d({behavior: e, container: t}={}) {
            const s = (0,
            a._P)(t)
              , {scrollHeight: r, scrollTop: i} = s;
            i >= r || await c({
                behavior: e,
                desktopOffset: 0,
                top: r,
                container: s
            })
        }
        async function P(e, {behavior: t, offset: s, desktopOffset: r}={}) {
            const o = i()(e) ? document.querySelector(e) : e;
            if (!(o instanceof HTMLElement))
                return;
            const n = (0,
            a._P)(o);
            let {top: u} = (0,
            a.PP)(o, n);
            await c({
                top: u,
                offset: s,
                behavior: t,
                desktopOffset: r,
                container: n
            })
        }
        async function m(e, {behavior: t, block: s, inline: r}={}) {
            const o = i()(e) ? document.querySelector(e) : e;
            if (!(o instanceof HTMLElement))
                return;
            const n = (0,
            a._P)(o)
              , h = (0,
            a.Y9)(n) ? document : n
              , l = Object.values(u.r0).includes(t) ? t : u.r0.SMOOTH
              , c = Object.values(u.m9).includes(s) ? s : u.m9.START
              , f = Object.values(u.Cc).includes(r) ? r : u.Cc.NEAREST;
            return new Promise((e => {
                const t = () => {
                    h.removeEventListener("scrollend", t),
                    e()
                }
                  , s = n.scrollTop;
                try {
                    o.scrollIntoView({
                        block: c,
                        behavior: l,
                        inline: f
                    })
                } catch (r) {
                    throw t(),
                    r
                }
                h.addEventListener("scrollend", t),
                setTimeout(( () => {
                    s === n.scrollTop && t()
                }
                ), 100)
            }
            ))
        }
    },
    497375: function(e) {
        var t, s;
        t = this,
        s = function() {
            "use strict";
            return function(e, t) {
                var s = t.prototype
                  , r = s.format;
                s.format = function(e) {
                    var t = this
                      , s = this.$locale();
                    if (!this.isValid())
                        return r.bind(this)(e);
                    var i = this.$utils()
                      , o = (e || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(e) {
                        switch (e) {
                        case "Q":
                            return Math.ceil((t.$M + 1) / 3);
                        case "Do":
                            return s.ordinal(t.$D);
                        case "gggg":
                            return t.weekYear();
                        case "GGGG":
                            return t.isoWeekYear();
                        case "wo":
                            return s.ordinal(t.week(), "W");
                        case "w":
                        case "ww":
                            return i.s(t.week(), "w" === e ? 1 : 2, "0");
                        case "W":
                        case "WW":
                            return i.s(t.isoWeek(), "W" === e ? 1 : 2, "0");
                        case "k":
                        case "kk":
                            return i.s(String(0 === t.$H ? 24 : t.$H), "k" === e ? 1 : 2, "0");
                        case "X":
                            return Math.floor(t.$d.getTime() / 1e3);
                        case "x":
                            return t.$d.getTime();
                        case "z":
                            return "[" + t.offsetName() + "]";
                        case "zzz":
                            return "[" + t.offsetName("long") + "]";
                        default:
                            return e
                        }
                    }
                    ));
                    return r.bind(this)(o)
                }
            }
        }
        ,
        e.exports = s()
    },
    827185: function(e, t, s) {
        var r = s(138859)
          , i = s(415325)
          , o = s(729905)
          , n = s(634932)
          , a = s(827301)
          , u = s(19219)
          , h = Math.min;
        function l(e, t, s) {
            for (var l = s ? o : i, c = e[0].length, f = e.length, d = f, P = Array(f), m = 1 / 0, p = []; d--; ) {
                var v = e[d];
                d && t && (v = n(v, a(t))),
                m = h(v.length, m),
                P[d] = !s && (t || c >= 120 && v.length >= 120) ? new r(d && v) : void 0
            }
            v = e[0];
            var g = -1
              , I = P[0];
            e: for (; ++g < c && p.length < m; ) {
                var y = v[g]
                  , b = t ? t(y) : y;
                if (y = s || 0 !== y ? y : 0,
                !(I ? u(I, b) : l(p, b, s))) {
                    for (d = f; --d; ) {
                        var L = P[d];
                        if (!(L ? u(L, b) : l(e[d], b, s)))
                            continue e
                    }
                    I && I.push(b),
                    p.push(y)
                }
            }
            return p
        }
        e.exports = l
    },
    980741: function(e, t, s) {
        var r = s(683693);
        function i(e) {
            return r(e) ? e : []
        }
        e.exports = i
    },
    305287: function(e, t, s) {
        var r = s(634932)
          , i = s(827185)
          , o = s(269302)
          , n = s(980741)
          , a = o((function(e) {
            var t = r(e, n);
            return t.length && t[0] === e[0] ? i(t) : []
        }
        ));
        e.exports = a
    }
}]);
