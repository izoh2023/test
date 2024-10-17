(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[5693], {
    810275: function(e, t, n) {
        "use strict";
        n.d(t, {
            J1: function() {
                return a
            },
            XZ: function() {
                return s
            },
            bA: function() {
                return i
            },
            mo: function() {
                return r
            }
        });
        const s = "internalOnly"
          , a = {
            TIP: "tip",
            POST: "post",
            FRAUD: "fraud",
            CREDIT: "credit",
            STREAM: "stream",
            MESSAGE: "message",
            SUBSCRIBE: "subscribe",
            VERIFICATION: "verification"
        }
          , r = {
            SUCCESS: "success"
        }
          , i = {
            PENDING: "pending",
            VERIFIED: "verified",
            UNVERIFIED: "unverified",
            UNVERIFIABLE: "unverifiable"
        }
    },
    588545: function(e, t, n) {
        "use strict";
        var s = n(110908);
        t.A = {
            computed: {
                ...(0,
                s.RAO)(["paymentsLoaded"])
            },
            methods: {
                ...(0,
                s.vRh)(["fetchVendors"]),
                async getPaymentsJs() {
                    if (this.paymentsLoaded)
                        return Promise.resolve();
                    const e = undefined;
                    return await this.fetchVendors() ? void 0 : Promise.reject()
                }
            }
        }
    },
    305693: function(e, t, n) {
        "use strict";
        var s = n(590179)
          , a = n.n(s)
          , r = n(962193)
          , i = n.n(r)
          , o = n(858156)
          , c = n.n(o)
          , u = n(944114)
          , d = n.n(u)
          , m = n(725440)
          , l = n.n(m)
          , h = n(964979)
          , y = n.n(h)
          , P = n(414415)
          , f = n(381465)
          , p = n(547822)
          , v = n(110908)
          , I = n(588545)
          , A = n(191646)
          , E = n(758987)
          , T = n(980471)
          , S = n(810275);
        const {$emit: w, $off: R, $once: $, EVENTS: b} = (0,
        p.A)()
          , g = function(e, t=!0) {
            return P.A.$emit("payment::end", {
                success: !0
            }),
            t ? e.call(this) : e
        };
        t.A = {
            mixins: [I.A, A.wd],
            data() {
                return {
                    intentId: void 0,
                    token: "",
                    retryCount: 0,
                    is3DRequested: !1,
                    isAsyncPaymentResult: !1,
                    asyncPaymentResult: null,
                    cardPaymentParams: null
                }
            },
            computed: {
                ...(0,
                v.npG)(["authUser"]),
                ...(0,
                v.ZOz)(["getUser"]),
                ...(0,
                v.RAO)(["unavailablePaymentGates"])
            },
            methods: {
                ...(0,
                v.aPW)(["removeAlternativeMethod"]),
                ...(0,
                v.wTV)(["fetchAllTransactions"]),
                makePayments(e, t=null) {
                    return new Promise((async (n, s) => {
                        P.A.$emit("payment::start");
                        const {paymentType: r, amount: o, userId: u, modalTitle: d, skipPaymentMethodSelection: m} = e;
                        if (this.cardPaymentParams && (e = a()(e, ["cardId", "internalOnly"]),
                        Object.assign(e, this.cardPaymentParams)),
                        t) {
                            const s = !i()(this.cardPaymentParams);
                            if (!m && !s)
                                return w(b.PAYMENT_SELECTION_POPUP.INIT, {
                                    userId: u,
                                    amount: o,
                                    paymentType: r,
                                    title: d,
                                    onSubmit: e => {
                                        this.cardPaymentParams = (0,
                                        T.NE)(e),
                                        t()
                                    }
                                }),
                                n({
                                    success: !1
                                });
                            window.showPreloader(),
                            e.token = this.token,
                            this.intentId && (e.intentId = this.intentId)
                        }
                        try {
                            var l;
                            if (e.isPaymentService) {
                                const t = {
                                    ...e
                                };
                                delete t.isPaymentService;
                                const s = await (0,
                                f.dz)({
                                    ...t,
                                    unavailablePaymentGates: this.unavailablePaymentGates
                                })
                                  , {success: a, redirectUrl: r, intentId: i, message: o, deleted: c} = s;
                                if (a) {
                                    if (e.isRedirectToPaymentService && r)
                                        return window.location.href = r,
                                        n();
                                    if (r)
                                        return window.hidePreloader(),
                                        void w(b.PAYMENT_PAY_SERVICE_POPUP.INIT, {
                                            intentId: i,
                                            iframeUrl: r,
                                            onSuccessSubmit: () => {
                                                n({
                                                    success: !0
                                                }),
                                                this.resetPaymentData()
                                            }
                                            ,
                                            onFailSubmit: () => {
                                                n({
                                                    success: !1
                                                }),
                                                this.resetPaymentData()
                                            }
                                        });
                                    o && alert(o),
                                    c && this.removeAlternativeMethod(e.id)
                                }
                                return n({
                                    success: !1
                                })
                            }
                            const s = undefined;
                            if (!(0,
                            T.Kp)(null === (l = e) || void 0 === l ? void 0 : l[S.XZ]) && "complete" !== this.paymentsLoaded)
                                try {
                                    await this.getPaymentsJs()
                                } catch (p) {
                                    return window.hidePreloader(),
                                    n({
                                        success: !1
                                    })
                                }
                            ["modalTitle", "skipPaymentMethodSelection"].forEach((t => {
                                e[t] && delete e[t]
                            }
                            ));
                            const a = this.isAsyncPaymentResult ? this.asyncPaymentResult : await (0,
                            f.ox)({
                                ...e,
                                unavailablePaymentGates: this.unavailablePaymentGates
                            });
                            return t && (this.$window.hidePreloader(),
                            this.resetPaymentData(),
                            "PaymentsCreditsTransactions" === this.$route.name && this.fetchAllTransactions()),
                            P.A.$emit("payment::end"),
                            n(a)
                        } catch (p) {
                            if (t) {
                                var h;
                                window.hidePreloader();
                                const s = null == p || null === (h = p.data) || void 0 === h || null === (h = h.error) || void 0 === h ? void 0 : h.code;
                                if (203 === s)
                                    return this.resetPaymentData(),
                                    n({
                                        errorCode: s,
                                        success: !1
                                    });
                                if (201 === s) {
                                    const s = {
                                        subscribe: ["userId", "bundleId"],
                                        message: ["messageId"],
                                        templates: !1,
                                        credit: !1,
                                        post: ["postId"],
                                        stream: !1,
                                        tip: !1
                                    }
                                      , a = ( () => {
                                        switch (r) {
                                        case "subscribe":
                                            return "doSubscribe";
                                        case "message":
                                        case "templates":
                                            return "doPayChat";
                                        case "credit":
                                            return "doPayCredits";
                                        case "post":
                                            return "doPayPost";
                                        case "stream":
                                            return "doPayStream";
                                        case "tip":
                                            return "doTips";
                                        case "fraud":
                                            return "doPayFraud";
                                        default:
                                            return null
                                        }
                                    }
                                    )();
                                    if (!a)
                                        throw p;
                                    this.is3DRequested = !0,
                                    this.intentId = c()(p, "data.error.payload.intentId"),
                                    this.isAsyncPaymentResult = !!c()(p, "data.error.payload.isAsyncPaymentResult"),
                                    window[a] = "doTips" === a ? (e, n, s, a, r="") => {
                                        this.isAsyncPaymentResult ? this.asyncPaymentResult = r : this.token = r,
                                        g.call(this, t)
                                    }
                                    : (e, n="") => {
                                        this.isAsyncPaymentResult ? this.asyncPaymentResult = n : this.token = n,
                                        g.call(this, t)
                                    }
                                    ;
                                    const i = p.data.error.message.match("checkout3DSecure");
                                    let o = !1;
                                    const u = (new Date).getTime();
                                    if (i && (s[r] && (s[r].push("amount"),
                                    o = btoa(s[r].reduce(( (t, n) => (t.push(e[n] || "undefined"),
                                    t)), [r]).join("."))),
                                    o)) {
                                        "function" === c()(P.A, "$socket.sendObj") && P.A.$socket.sendObj({
                                            act: "me",
                                            paymentLocalUniqueId: o,
                                            timestamp: u
                                        }),
                                        p.data.error.message = p.data.error.message.replace("checkout3DSecure(", `checkout3DSecure.call({ id: "${o}" }, `);
                                        const e = `msg::paymentLocalUniqueId::${o}`
                                          , t = this
                                          , n = n => {
                                            n !== u && (alert(t.$t("message.3d_secure_another_tab")),
                                            document.dispatchEvent(new Event(e)))
                                        }
                                        ;
                                        P.A.$on(e, n);
                                        const s = () => {
                                            P.A.$off(e, n),
                                            document.removeEventListener(e, s),
                                            t.$nextTick(( () => {
                                                t.resetPaymentData()
                                            }
                                            ))
                                        }
                                        ;
                                        document.addEventListener(e, s)
                                    }
                                    window.showPreloader();
                                    const d = document.getElementsByTagName("head")[0]
                                      , m = document.createElement("script");
                                    return m.innerText = p.data.error.message,
                                    d.appendChild(m),
                                    n()
                                }
                                if (this.token = "",
                                this.intentId = void 0,
                                this.asyncPaymentResult = null,
                                this.isAsyncPaymentResult = !1,
                                "PaymentsCreditsTransactions" === P.A.$route.name && this.fetchAllTransactions(),
                                c()(p, "data.error.payload.canRetry")) {
                                    var y;
                                    if (this.retryCount += 1,
                                    "US" === c()(p, "data.error.payload.countryCode") && 1 === this.retryCount && !this.is3DRequested)
                                        return setTimeout(( () => {
                                            g.call(this, t)
                                        }
                                        ), 100),
                                        n();
                                    $(b.PAYMENT_SELECTION_POPUP.CLOSED, this.resetPaymentData),
                                    w(b.PAYMENT_SELECTION_POPUP.INIT, {
                                        userId: u,
                                        amount: o,
                                        paymentType: r,
                                        isRetry: !0,
                                        errorMessage: null == p || null === (y = p.data) || void 0 === y || null === (y = y.error) || void 0 === y ? void 0 : y.message,
                                        onSubmit: e => {
                                            R(b.PAYMENT_SELECTION_POPUP.CLOSED, this.resetPaymentData),
                                            this.cardPaymentParams = (0,
                                            T.NE)(e),
                                            g.call(this, t)
                                        }
                                    })
                                } else
                                    P.A.$once("alert:was:closed", this.resetPaymentData),
                                    (0,
                                    E.r_)(p);
                                P.A.$emit("payment::end", {
                                    success: !1
                                }),
                                n({
                                    success: !1
                                })
                            } else
                                P.A.$emit("payment::end", {
                                    success: !1
                                }),
                                s(p)
                        }
                    }
                    ))
                },
                resetPaymentData() {
                    this.token = "",
                    this.intentId = void 0,
                    this.retryCount = 0,
                    this.is3DRequested = !1,
                    this.asyncPaymentResult = null,
                    this.isAsyncPaymentResult = !1,
                    this.cardPaymentParams = null
                }
            }
        }
    },
    191646: function(e, t, n) {
        "use strict";
        n.d(t, {
            $g: function() {
                return l
            },
            NC: function() {
                return m
            },
            Sx: function() {
                return f
            },
            _g: function() {
                return h
            },
            ej: function() {
                return P
            },
            tD: function() {
                return d
            },
            wd: function() {
                return y
            }
        });
        var s = n(725440)
          , a = n.n(s)
          , r = n(464846)
          , i = n.n(r)
          , o = n(748977)
          , c = n(178863)
          , u = n(631126);
        const d = {
            methods: {
                priceHuman(e) {
                    const t = (0,
                    c.NM)(e);
                    return t ? `$${t.toFixed(2).replace(".00", "")}` : this.$t("message.free")
                }
            }
        }
          , m = {
            methods: {
                priceHumanLong(e) {
                    const t = (0,
                    c.NM)(e);
                    return t ? `$${t.toFixed(2)}` : this.$t("message.free")
                }
            }
        }
          , l = {
            methods: {
                formatPrice(e) {
                    return i()(e) && e > 0 ? `$${e}` : this.priceHuman(e)
                }
            }
        }
          , h = {
            methods: {
                amountHumanLong(e) {
                    const t = (0,
                    c.NM)(e);
                    return `$${(0,
                    u.Hi)(t.toFixed(2))}`
                }
            }
        }
          , y = {
            methods: {
                amountHumanShort: o.QM
            }
        }
          , P = {
            methods: {
                priceHumanMixinFormatAmount: o.x8
            }
        }
          , f = {
            methods: {
                formatCounter(e, t=9999) {
                    return e && +e > 0 ? e > t ? `${t}+` : `${e}` : ""
                }
            }
        }
    },
    464846: function(e, t, n) {
        var s = n(761489);
        function a(e) {
            return "number" == typeof e && e == s(e)
        }
        e.exports = a
    }
}]);
