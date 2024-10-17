"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[27777], {
    48059: function(e, t, s) {
        s.d(t, {
            A: function() {
                return y
            }
        });
        var a = function e() {
            var t = this
              , s = t._self._c;
            return t.authUser.username ? s("settings-wrapper", [t.count ? s("p", {
                staticClass: "text-center"
            }, [t._v(" " + t._s(t.$t("message.qrcode_scans")) + ": " + t._s(t.count) + " ")]) : t._e(), s("div", {
                staticClass: "b-qrcode"
            }, [t.isQRExists ? s("img", {
                attrs: {
                    src: t.QRCode,
                    alt: t.authUser.username
                }
            }) : s("spinner-loader")], 1), s("div", {
                class: {
                    "g-negative-sides-gaps": t.isModal
                }
            }, [s("checkbox-o-f", {
                staticClass: "b-menu-list__el",
                attrs: {
                    type: "toggle",
                    name: "add-url",
                    disabled: t.disabledSettings,
                    label: t.$t("message.add_url_to_qrcode")
                },
                model: {
                    value: t.isShowURL,
                    callback: function(e) {
                        t.isShowURL = e
                    },
                    expression: "isShowURL"
                }
            }), s("checkbox-o-f", {
                staticClass: "b-menu-list__el",
                attrs: {
                    type: "toggle",
                    name: "add-avatar",
                    disabled: t.disabledSettings || !t.authUser.avatar || t.avatarError,
                    label: t.$t("message.add_avatar_to_qrcode")
                },
                model: {
                    value: t.isShowAvatar,
                    callback: function(e) {
                        t.isShowAvatar = e
                    },
                    expression: "isShowAvatar"
                }
            })], 1)]) : t._e()
        }, i = [], r = s(962953), o = s(964979), n = s(803296), h = s(527208), l = s(548408), d = s(814603), c = s(147566), u = s(198721), g = s(490997), v = s(758684), f = s.n(v), m = s(202600), b = s(684912), w = s(110908), p = s(446991), S = s(252832), R = s(480263), z = s(284419), C, x = {
            name: "SettingsQRCode",
            components: {
                CheckboxOF: p.A,
                SpinnerLoader: S.default,
                SettingsWrapper: R.A
            },
            props: {
                isModal: {
                    type: Boolean,
                    default: !1
                }
            },
            data() {
                return {
                    options: {
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        },
                        observer: !0,
                        observeParents: !0
                    },
                    size: 246,
                    dotSize: 6,
                    code: "",
                    isShowURL: "true" === z.A.getItem("qrcodeURL"),
                    isShowAvatar: "true" === z.A.getItem("qrcodeAvatar"),
                    disabledSettings: !1,
                    avatarError: !1,
                    count: null,
                    host: "onlyfans.com",
                    hostFull: "https://onlyfans.com"
                }
            },
            computed: {
                ...(0,
                w.npG)(["authUser"]),
                ...(0,
                w.why)(["QRCode"]),
                isQRExists() {
                    return this.QRCode.length
                }
            },
            watch: {
                isShowURL(e) {
                    z.A.setItem("qrcodeURL", e),
                    this.createCode()
                },
                isShowAvatar(e) {
                    z.A.setItem("qrcodeAvatar", e),
                    this.createCode()
                }
            },
            async mounted() {
                this.isQRExists || this.createCode();
                try {
                    const {count: e} = await (0,
                    m.Ps)();
                    this.count = e
                } catch (e) {}
            },
            methods: {
                ...(0,
                w.peC)(["setQRCode", "setQRCodeSize"]),
                createCode() {
                    if (!this.authUser.username)
                        return;
                    this.disabledSettings = !0;
                    const e = new (f())({
                        content: `${this.hostFull}/${this.authUser.username}?qr=1`,
                        ecl: "H",
                        width: this.size,
                        height: this.size,
                        join: !0
                    })
                      , t = (e.qrcode.modules.length + 8) * this.dotSize;
                    if (t !== this.size)
                        return this.size = t,
                        void this.createCode();
                    const s = 66
                      , a = 54
                      , i = document.createElement("DIV");
                    i.innerHTML = "";
                    const r = (0,
                    g.t4)().addTo(i).size(t, t)
                      , o = r.rect(t, t).fill("#fff");
                    let n;
                    if (r.svg(e.svg()),
                    r.rect(s, s).center(t / 2, t / 2).attr({
                        fill: "#fff",
                        "shape-rendering": "crispEdges"
                    }),
                    this.isShowAvatar && this.authUser.avatar && !this.avatarError) {
                        const e = r.circle(a).fill("#fff").center(t / 2, t / 2);
                        n = r.clip().add(e)
                    }
                    if (this.isShowURL) {
                        const e = r.text(`${this.host}/${this.authUser.username}`).fill("#000");
                        e.font({
                            family: "Roboto, sans-serif",
                            size: 16 * this.size / 246
                        }),
                        e.bbox().w > t - 48 && e.font({
                            size: e.font("size") * (t - 48) / e.bbox().w
                        }),
                        e.move(t / 2, t - 12),
                        e.font({
                            anchor: "middle"
                        }),
                        r.size(t, t + e.bbox().h),
                        o.size(t, t + e.bbox().h),
                        this.setQRCodeSize({
                            width: t,
                            height: t + e.bbox().h
                        });
                        let s = i.querySelector("svg").querySelector("defs");
                        s || (s = document.createElement("defs"),
                        i.querySelector("svg").prepend(s)),
                        s.insertAdjacentHTML("afterbegin", "<style>@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap)</style>")
                    } else
                        this.setQRCodeSize({
                            width: t,
                            height: t
                        });
                    if (this.isShowAvatar && this.authUser.avatar && !this.avatarError)
                        this.toDataURL(this.authUser.avatar).then((e => {
                            const s = undefined;
                            r.image(e).size(a, a).center(t / 2, t / 2).clipWith(n);
                            const o = (new XMLSerializer).serializeToString(i.querySelector("svg"));
                            this.setQRCode(`data:image/svg+xml;base64,${btoa(o)}`),
                            this.disabledSettings = !1
                        }
                        )).catch(( () => {
                            this.disabledSettings = !1,
                            this.isShowAvatar = !1,
                            this.avatarError = !0
                        }
                        ));
                    else {
                        r.svg(`<svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 400 400" x="${(this.size - a) / 2}" y="${(this.size - a) / 2}">\n            <path fill="#00aeef" d="M137.5 75a125 125 0 10125 125 125 125 0 00-125-125zm0 162.5A37.5 37.5 0 11175 200a37.45 37.45 0 01-37.5 37.5z"/>\n            <path fill="#008ccf" d="M278 168.75c31.76 9.14 69.25 0 69.25 0-10.88 47.5-45.38 77.25-95.13 80.87A124.73 124.73 0 01137.5 325L175 205.81C213.55 83.3 233.31 75 324.73 75h62.77c-10.5 46.25-46.69 81.58-109.5 93.75z"/>\n        </svg>`);
                        const e = (new XMLSerializer).serializeToString(i.querySelector("svg"));
                        this.setQRCode(`data:image/svg+xml;base64,${btoa(e)}`),
                        this.disabledSettings = !1
                    }
                },
                toDataURL(e) {
                    return new Promise(( (t, s) => {
                        (0,
                        b.l)(e).then((e => {
                            const a = window.URL.createObjectURL(new Blob([e]))
                              , i = new Image;
                            i.onload = () => {
                                const e = document.createElement("canvas")
                                  , a = e.getContext("2d")
                                  , r = Math.min(i.naturalWidth, i.naturalHeight)
                                  , o = Math.min(r, 162);
                                e.height = o,
                                e.width = o,
                                a.drawImage(i, -(i.naturalWidth - r) * o / (2 * r), -(i.naturalHeight - r) * o / (2 * r), i.naturalWidth * o / r, i.naturalHeight * o / r);
                                try {
                                    t(e.toDataURL())
                                } catch (n) {
                                    s()
                                }
                            }
                            ,
                            i.onerror = () => {
                                s()
                            }
                            ,
                            i.src = a
                        }
                        ))
                    }
                    ))
                }
            }
        }, U, A, y = (0,
        s(281656).A)(x, a, i, !1, null, "722060bf", null).exports
    }
}]);
