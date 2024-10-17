"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[5440], {
    138713: function(e, t, n) {
        n.d(t, {
            A: function() {
                return f
            }
        });
        var r = function e() {
            var t = this
              , n = t._self._c;
            return t.openCustomNamePopupMixin_canSetCustomName ? n("button", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: t.tooltip,
                    expression: "tooltip"
                }],
                staticClass: "g-btn m-flat m-gray b-user-name__btn-edit m-sm-icon-size m-reset-width",
                attrs: {
                    type: "button",
                    "at-attr": "name_edit"
                },
                on: {
                    click: function(e) {
                        return t.openCustomNamePopupMixin_doOpen(t.userId)
                    }
                }
            }, [t.hideEdit ? t._e() : n("svg", {
                directives: [{
                    name: "svg-sprite",
                    rawName: "v-svg-sprite:icon-edit",
                    arg: "icon-edit"
                }],
                staticClass: "m-block"
            })]) : t._e()
        }, i = [], o = n(110908), s, u, a = {
            name: "UserCustomName",
            mixins: [n(714358).A],
            props: {
                userId: {
                    type: [String, Number],
                    required: !0
                },
                tooltip: {
                    type: [String, Object],
                    default: function() {
                        return this.$t("message.edit")
                    }
                },
                hideEdit: {
                    type: Boolean,
                    default: !1
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
                isAuthUser() {
                    return this.userId === this.authUser.id
                }
            }
        }, d, c, f = (0,
        n(281656).A)(a, r, i, !1, null, "71658677", null).exports
    },
    667747: function(e, t, n) {
        var r = n(110908)
          , i = n(620514)
          , o = n(420635);
        t.A = {
            mixins: [i.k],
            computed: {
                ...(0,
                r.why)(["scenario"]),
                ...(0,
                r.npG)(["isAuth", "authUser"]),
                isMyFraudsterProfile() {
                    var e;
                    return this.isAuthUser && (null === (e = this.scenario) || void 0 === e ? void 0 : e.action) === o.Z.FRAUD_REPAYMENT
                },
                isMyProfileNeedIV() {
                    var e;
                    return this.isAuthUser && (null === (e = this.scenario) || void 0 === e ? void 0 : e.action) === o.Z.LOGIN_REQUIRES_WAIT_IV
                },
                isMyProfileNeedFaceId() {
                    var e;
                    return this.isAuthUser && (null === (e = this.scenario) || void 0 === e ? void 0 : e.action) === o.Z.FACE_ID
                },
                isHasScenario() {
                    return this.isAuth && this.authUser.hasScenario
                },
                isMyProfileHasScenario() {
                    return this.isMyFraudsterProfile || this.isMyProfileNeedIV || this.isMyProfileNeedFaceId
                }
            }
        }
    },
    620514: function(e, t, n) {
        n.d(t, {
            k: function() {
                return i
            }
        });
        var r = n(110908);
        const i = {
            computed: {
                ...(0,
                r.ZOz)(["userId"]),
                ...(0,
                r.npG)(["authUserId"]),
                isAuthUser() {
                    return !(!this.userId || !this.authUserId || this.userId !== this.authUserId)
                }
            }
        }
    },
    921914: function(e, t, n) {
        n.d(t, {
            HI: function() {
                return x
            },
            O: function() {
                return F
            },
            Rg: function() {
                return N
            },
            Z8: function() {
                return M
            },
            i7: function() {
                return O
            },
            tF: function() {
                return S
            }
        });
        var r = n(16280)
          , i = n.n(r)
          , o = n(711745)
          , s = n.n(o)
          , u = n(816573)
          , a = n.n(u)
          , d = n(878100)
          , c = n.n(d)
          , f = n(177936)
          , l = n.n(f)
          , h = n(962953)
          , m = n.n(h)
          , p = n(803296)
          , U = n.n(p)
          , v = n(527208)
          , g = n.n(v)
          , y = n(548408)
          , I = n.n(y)
          , w = n(814603)
          , b = n.n(w)
          , A = n(147566)
          , P = n.n(A)
          , _ = n(198721)
          , k = n.n(_)
          , C = n(826489)
          , E = n.n(C)
          , R = n(242302);
        const S = ({url: e, orientation: t, type: n}) => {
            const r = undefined;
            return new Promise((r => {
                if (void 0 === t || t <= 1)
                    return r(e),
                    !0;
                const i = new window.Image;
                return i.onload = () => {
                    const {width: e, height: o} = i
                      , s = document.createElement("canvas")
                      , u = s.getContext("2d");
                    switch (t > 4 && t < 9 ? (s.width = o,
                    s.height = e) : (s.width = e,
                    s.height = o),
                    t) {
                    case 2:
                        u.transform(-1, 0, 0, 1, e, 0);
                        break;
                    case 3:
                        u.transform(-1, 0, 0, -1, e, o);
                        break;
                    case 4:
                        u.transform(1, 0, 0, -1, 0, o);
                        break;
                    case 5:
                        u.transform(0, 1, 1, 0, 0, 0);
                        break;
                    case 6:
                        u.transform(0, 1, -1, 0, o, 0);
                        break;
                    case 7:
                        u.transform(0, -1, -1, 0, o, e);
                        break;
                    case 8:
                        u.transform(0, -1, 1, 0, 0, e)
                    }
                    u.drawImage(i, 0, 0),
                    s.toBlob((e => r(URL.createObjectURL(e))), n)
                }
                ,
                i.src = e,
                !0
            }
            ))
        }
          , M = e => {
            const t = C.isIOS && C.isSafari
              , n = undefined
              , r = C.isChrome && C.browserVersion >= 81 && C.isChrome && C.isIOS;
            if (!t && !r && !C.isMobile) {
                let t = 0;
                const n = new DataView(e);
                if (e.length < 2 || 65496 !== n.getUint16(t))
                    return {
                        result: e
                    };
                let r = 1
                  , i = n.byteLength;
                for (t += 2; t < i - 2; ) {
                    const e = n.getUint16(t);
                    switch (t += 2,
                    e) {
                    case 65505:
                        {
                            const e = undefined;
                            i = n.getUint16(t) - t,
                            t += 2;
                            break
                        }
                    case 274:
                        r = n.getUint16(t + 6, !1),
                        i = 0
                    }
                }
                const o = undefined;
                return {
                    result: e,
                    rotation: {
                        1: 0,
                        3: 180,
                        6: 90,
                        8: 270
                    }[r],
                    orientation: r
                }
            }
            return {
                result: e
            }
        }
          , N = e => new Promise(( (t, n) => {
            const r = new XMLHttpRequest;
            r.open("GET", URL.createObjectURL(e), !0),
            r.responseType = "arraybuffer",
            r.onload = () => {
                200 === r.status ? t(M(r.response)) : n(new Error(`Failed to load file (${r.status})`))
            }
            ,
            r.onerror = () => {
                n(new Error("Failed to load file"))
            }
            ,
            r.send()
        }
        ))
          , O = (e, t, n) => {
            const {secureUploadPath: r, uploadPath: i} = n
              , o = (0,
            R.A)()
              , s = encodeURIComponent(e.name.toLowerCase())
              , u = undefined
              , a = undefined;
            return `${t ? r : i}${o}/${(Math.random() * (new Date).getTime()).toFixed(0)}/${s}`
        }
          , D = e => {
            const t = undefined;
            return document.createElement("video").canPlayType(e)
        }
          , F = e => {
            var t;
            const {id: n, mediaType: r, type: i, progress: o, processId: s} = e
              , u = !!n
              , a = !(null === (t = e.files) || void 0 === t || !t.drm)
              , d = 100 === o
              , c = d ? s || n : void 0
              , f = undefined;
            return (["photo", "gif"].includes(r) || "video" === r && D(i) && !(C.isIOS && "video/mpeg" === i) || a || u) && d && !!c
        }
          , x = e => new Promise((t => {
            const n = new Image;
            n.src = e.url,
            n.onload = function() {
                t(!0)
            }
            ,
            n.onerror = function() {
                t(!1)
            }
        }
        ))
    },
    242302: function(e, t, n) {
        n.d(t, {
            A: function() {
                return h
            }
        });
        const r = undefined;
        var i = {
            randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
        };
        let o;
        const s = new Uint8Array(16);
        function u() {
            if (!o && (o = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
            !o))
                throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return o(s)
        }
        const a = [];
        for (let m = 0; m < 256; ++m)
            a.push((m + 256).toString(16).slice(1));
        function d(e, t=0) {
            return a[e[t + 0]] + a[e[t + 1]] + a[e[t + 2]] + a[e[t + 3]] + "-" + a[e[t + 4]] + a[e[t + 5]] + "-" + a[e[t + 6]] + a[e[t + 7]] + "-" + a[e[t + 8]] + a[e[t + 9]] + "-" + a[e[t + 10]] + a[e[t + 11]] + a[e[t + 12]] + a[e[t + 13]] + a[e[t + 14]] + a[e[t + 15]]
        }
        function c(e, t=0) {
            const n = d(e, t);
            if (!validate(n))
                throw TypeError("Stringified UUID is invalid");
            return n
        }
        var f = null;
        function l(e, t, n) {
            if (i.randomUUID && !t && !e)
                return i.randomUUID();
            const r = (e = e || {}).random || (e.rng || u)();
            if (r[6] = 15 & r[6] | 64,
            r[8] = 63 & r[8] | 128,
            t) {
                n = n || 0;
                for (let e = 0; e < 16; ++e)
                    t[n + e] = r[e];
                return t
            }
            return d(r)
        }
        var h = l
    }
}]);
