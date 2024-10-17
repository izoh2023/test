"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[59825], {
    657564: function(e, n, t) {
        t.d(n, {
            Gb: function() {
                return ce
            },
            Sq: function() {
                return H
            },
            sh: function() {
                return de
            }
        });
        var o = t(816341)
          , r = t(919766)
          , a = t(317412)
          , i = t(38114)
          , s = t(249475)
          , l = t(586641)
          , d = t(483741)
          , c = t(371392);
        const u = o.OW
          , m = "#ffffff"
          , h = "inherit"
          , f = "rgba(108, 95, 199, 1)"
          , p = {
            fontFamily: "system-ui, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "14px",
            background: m,
            backgroundHover: "#f6f6f7",
            foreground: "#2b2233",
            border: "1.5px solid rgba(41, 35, 47, 0.13)",
            borderRadius: "25px",
            boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
            success: "#268d75",
            error: "#df3338",
            submitBackground: "rgba(88, 74, 192, 1)",
            submitBackgroundHover: f,
            submitBorder: f,
            submitOutlineFocus: "#29232f",
            submitForeground: m,
            submitForegroundHover: m,
            cancelBackground: "transparent",
            cancelBackgroundHover: "var(--background-hover)",
            cancelBorder: "var(--border)",
            cancelOutlineFocus: "var(--input-outline-focus)",
            cancelForeground: "var(--foreground)",
            cancelForegroundHover: "var(--foreground)",
            inputBackground: h,
            inputForeground: h,
            inputBorder: "var(--border)",
            inputOutlineFocus: f,
            formBorderRadius: "20px",
            formContentBorderRadius: "6px"
        }
          , g = p
          , b = {
            ...p,
            background: "#29232f",
            backgroundHover: "#352f3b",
            foreground: "#ebe6ef",
            border: "1.5px solid rgba(235, 230, 239, 0.15)",
            success: "#2da98c",
            error: "#f55459"
        }
          , v = "Report a Bug"
          , _ = "Cancel"
          , w = "Send Bug Report"
          , C = "Report a Bug"
          , x = "your.email@example.org"
          , y = "Email"
          , k = "What's the bug? What did you expect?"
          , L = "Description"
          , E = "Your Name"
          , S = "Name"
          , N = "(required)"
          , F = "Thank you for your report!"
          , B = "widget"
          , $ = "api";
        async function R({client: e, scope: n, event: t}) {
            const o = {};
            e.emit && e.emit("preprocessEvent", t, o);
            const r = await (0,
            s.mG)(e.getOptions(), t, o, n, e, (0,
            l.rm)());
            return null === r ? (e.recordDroppedEvent("event_processor", "feedback", t),
            null) : (r.platform = r.platform || "javascript",
            r)
        }
        async function q({feedback: {message: e, email: n, name: t, source: o, url: r}}, {includeReplay: a=!0}={}) {
            const i = (0,
            d.KU)()
              , s = i && i.getTransport()
              , l = i && i.getDsn();
            if (!i || !s || !l)
                return;
            const u = {
                contexts: {
                    feedback: {
                        contact_email: n,
                        name: t,
                        message: e,
                        url: r,
                        source: o
                    }
                },
                type: "feedback"
            };
            return (0,
            d.v4)((async e => {
                e.clearBreadcrumbs(),
                [$, B].includes(String(o)) && e.setLevel("info");
                const n = await R({
                    scope: e,
                    client: i,
                    event: u
                });
                if (!n)
                    return;
                i.emit && i.emit("beforeSendFeedback", n, {
                    includeReplay: Boolean(a)
                });
                const t = (0,
                c.V)(n, l, i.getOptions()._metadata, i.getOptions().tunnel);
                let r;
                try {
                    r = await s.send(t)
                } catch (d) {
                    const e = new Error("Unable to send Feedback");
                    try {
                        e.cause = d
                    } catch (m) {}
                    throw e
                }
                if (r) {
                    if ("number" == typeof r.statusCode && (r.statusCode < 200 || r.statusCode >= 300))
                        throw new Error("Unable to send Feedback");
                    return r
                }
            }
            ))
        }
        function H({name: e, email: n, message: t, source: o=$, url: a=(0,
        r.$N)()}, i={}) {
            if (!t)
                throw new Error("Unable to submit feedback with empty message");
            return q({
                feedback: {
                    name: e,
                    email: n,
                    message: t,
                    url: a,
                    source: o
                }
            }, i)
        }
        const A = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        function T(e, n) {
            return {
                ...e,
                ...n,
                themeDark: {
                    ...e.themeDark,
                    ...n.themeDark
                },
                themeLight: {
                    ...e.themeLight,
                    ...n.themeLight
                }
            }
        }
        function z(e) {
            const n = e.createElement("style");
            return n.textContent = "\n.widget__actor {\n  position: fixed;\n  left: var(--left);\n  right: var(--right);\n  bottom: var(--bottom);\n  top: var(--top);\n  z-index: var(--z-index);\n\n  line-height: 16px;\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--font-size);\n  font-weight: 600;\n  padding: 16px;\n  text-decoration: none;\n  z-index: 9000;\n\n  color: var(--foreground);\n  background-color: var(--background);\n  border: var(--border);\n  box-shadow: var(--box-shadow);\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n}\n\n.widget__actor:hover {\n  background-color: var(--background-hover);\n}\n\n.widget__actor svg {\n  width: 16px;\n  height: 16px;\n}\n\n.widget__actor--hidden {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n\n.widget__actor__text {\n}\n\n@media (max-width: 600px) {\n  .widget__actor__text {\n    display: none;\n  }\n}\n\n.feedback-icon path {\n  fill: var(--foreground);\n}\n",
            n
        }
        function D(e) {
            const n = e.createElement("style");
            return n.textContent = "\n.dialog {\n  line-height: 25px;\n  background-color: rgba(0, 0, 0, 0.05);\n  border: none;\n  position: fixed;\n  inset: 0;\n  z-index: 10000;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.dialog:not([open]) {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n.dialog:not([open]) .dialog__content {\n  transform: translate(0, -16px) scale(0.98);\n}\n\n.dialog__content {\n  position: fixed;\n  left: var(--left);\n  right: var(--right);\n  bottom: var(--bottom);\n  top: var(--top);\n\n  border: var(--border);\n  border-radius: var(--form-border-radius);\n  background-color: var(--background);\n  color: var(--foreground);\n\n  width: 320px;\n  max-width: 100%;\n  max-height: calc(100% - 2rem);\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--box-shadow);\n  transition: transform 0.2s ease-in-out;\n  transform: translate(0, 0) scale(1);\n}\n\n.dialog__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 20px;\n  font-weight: 600;\n  padding: 24px 24px 0 24px;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.brand-link {\n  display: inline-flex;\n}\n\n.error {\n  color: var(--error);\n  margin-bottom: 16px;\n}\n\n.form {\n  display: grid;\n  overflow: auto;\n  flex-direction: column;\n  gap: 16px;\n  padding: 0 24px 24px;\n}\n\n.form__error-container {\n  color: var(--error);\n}\n\n.form__error-container--hidden {\n  display: none;\n}\n\n.form__label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin: 0px;\n}\n\n.form__label__text {\n  display: grid;\n  gap: 4px;\n  align-items: center;\n  grid-auto-flow: column;\n  grid-auto-columns: max-content;\n}\n\n.form__label__text--required {\n  font-size: 0.85em;\n}\n\n.form__input {\n  line-height: inherit;\n  background-color: var(--input-background);\n  box-sizing: border-box;\n  border: var(--input-border);\n  border-radius: var(--form-content-border-radius);\n  color: var(--input-foreground);\n  font-family: inherit;\n  font-size: var(--font-size);\n  font-weight: 500;\n  padding: 6px 12px;\n}\n\n.form__input::placeholder {\n  color: var(--input-foreground);\n  opacity: 0.65;\n}\n\n.form__input:focus-visible {\n  outline: 1px auto var(--input-outline-focus);\n}\n\n.form__input--textarea {\n  font-family: inherit;\n  resize: vertical;\n}\n\n.btn-group {\n  display: grid;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n.btn {\n  line-height: inherit;\n  border: var(--cancel-border);\n  border-radius: var(--form-content-border-radius);\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--font-size);\n  font-weight: 600;\n  padding: 6px 16px;\n}\n.btn[disabled] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.btn--primary {\n  background-color: var(--submit-background);\n  border-color: var(--submit-border);\n  color: var(--submit-foreground);\n}\n.btn--primary:hover {\n  background-color: var(--submit-background-hover);\n  color: var(--submit-foreground-hover);\n}\n.btn--primary:focus-visible {\n  outline: 1px auto var(--submit-outline-focus);\n}\n\n.btn--default {\n  background-color: var(--cancel-background);\n  color: var(--cancel-foreground);\n  font-weight: 500;\n}\n.btn--default:hover {\n  background-color: var(--cancel-background-hover);\n  color: var(--cancel-foreground-hover);\n}\n.btn--default:focus-visible {\n  outline: 1px auto var(--cancel-outline-focus);\n}\n\n.success-message {\n  background-color: var(--background);\n  border: var(--border);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  font-weight: 600;\n  color: var(--success);\n  padding: 12px 24px;\n  line-height: 25px;\n  display: grid;\n  align-items: center;\n  grid-auto-flow: column;\n  gap: 6px;\n  cursor: default;\n}\n\n.success-icon path {\n  fill: var(--success);\n}\n",
            n
        }
        function P(e) {
            return `\n  --background: ${e.background};\n  --background-hover: ${e.backgroundHover};\n  --foreground: ${e.foreground};\n  --error: ${e.error};\n  --success: ${e.success};\n  --border: ${e.border};\n  --border-radius: ${e.borderRadius};\n  --box-shadow: ${e.boxShadow};\n\n  --submit-background: ${e.submitBackground};\n  --submit-background-hover: ${e.submitBackgroundHover};\n  --submit-border: ${e.submitBorder};\n  --submit-outline-focus: ${e.submitOutlineFocus};\n  --submit-foreground: ${e.submitForeground};\n  --submit-foreground-hover: ${e.submitForegroundHover};\n\n  --cancel-background: ${e.cancelBackground};\n  --cancel-background-hover: ${e.cancelBackgroundHover};\n  --cancel-border: ${e.cancelBorder};\n  --cancel-outline-focus: ${e.cancelOutlineFocus};\n  --cancel-foreground: ${e.cancelForeground};\n  --cancel-foreground-hover: ${e.cancelForegroundHover};\n\n  --input-background: ${e.inputBackground};\n  --input-foreground: ${e.inputForeground};\n  --input-border: ${e.inputBorder};\n  --input-outline-focus: ${e.inputOutlineFocus};\n\n  --form-border-radius: ${e.formBorderRadius};\n  --form-content-border-radius: ${e.formContentBorderRadius};\n  `
        }
        function O(e, n, t) {
            const o = e.createElement("style");
            return o.textContent = `\n:host {\n  --bottom: 1rem;\n  --right: 1rem;\n  --top: auto;\n  --left: auto;\n  --z-index: 100000;\n  --font-family: ${t.light.fontFamily};\n  --font-size: ${t.light.fontSize};\n\n  position: fixed;\n  left: var(--left);\n  right: var(--right);\n  bottom: var(--bottom);\n  top: var(--top);\n  z-index: var(--z-index);\n\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n\n  ${P("dark" === n ? t.dark : t.light)}\n}\n\n${"system" === n ? `\n@media (prefers-color-scheme: dark) {\n  :host {\n    ${P(t.dark)}\n  }\n}` : ""}\n}`,
            o
        }
        function M({id: e, colorScheme: n, themeDark: t, themeLight: o}) {
            try {
                const r = u.document
                  , a = r.createElement("div");
                a.id = e;
                const i = a.attachShadow({
                    mode: "open"
                });
                return i.appendChild(O(r, n, {
                    dark: t,
                    light: o
                })),
                i.appendChild(D(r)),
                {
                    shadow: i,
                    host: a
                }
            } catch (r) {
                throw a.vF.warn("[Feedback] Browser does not support shadow DOM API"),
                new Error("Browser does not support shadow DOM API.")
            }
        }
        async function I(e, n, t) {
            if (!e)
                return;
            const o = () => {
                e && e.showError("There was a problem submitting feedback, please wait and try again.")
            }
            ;
            e.hideError();
            try {
                const e = undefined;
                return await H({
                    ...n,
                    source: B
                }, t)
            } catch (r) {
                A && a.vF.error(r),
                o()
            }
        }
        function U(e, n) {
            return Object.entries(n).forEach(( ([n,t]) => {
                e.setAttributeNS(null, n, t)
            }
            )),
            e
        }
        const W = 20
          , V = "http://www.w3.org/2000/svg";
        function j() {
            const e = e => u.document.createElementNS(V, e)
              , n = U(e("svg"), {
                class: "feedback-icon",
                width: `${W}`,
                height: `${W}`,
                viewBox: `0 0 ${W} ${W}`,
                fill: "none"
            })
              , t = U(e("g"), {
                clipPath: "url(#clip0_57_80)"
            })
              , o = U(e("path"), {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"
            });
            n.appendChild(t).appendChild(o);
            const r = e("defs")
              , a = U(e("clipPath"), {
                id: "clip0_57_80"
            })
              , i = U(e("rect"), {
                width: `${W}`,
                height: `${W}`,
                fill: "white"
            });
            return a.appendChild(i),
            r.appendChild(a),
            n.appendChild(r).appendChild(a).appendChild(i),
            {
                get el() {
                    return n
                }
            }
        }
        function Z(e, n, ...t) {
            const o = undefined
              , r = u.document.createElement(e);
            n && Object.entries(n).forEach(( ([e,n]) => {
                "className" === e && "string" == typeof n ? r.setAttribute("class", n) : "boolean" == typeof n && n ? r.setAttribute(e, "") : "string" == typeof n ? r.setAttribute(e, n) : e.startsWith("on") && "function" == typeof n && r.addEventListener(e.substring(2).toLowerCase(), n)
            }
            ));
            for (const a of t)
                G(r, a);
            return r
        }
        function G(e, n) {
            const t = u.document;
            if (null != n)
                if (Array.isArray(n))
                    for (const o of n)
                        G(e, o);
                else
                    !1 === n || ("string" == typeof n ? e.appendChild(t.createTextNode(n)) : n instanceof Node ? e.appendChild(n) : e.appendChild(t.createTextNode(String(n))))
        }
        function Y({buttonLabel: e, onClick: n}) {
            function t(e) {
                n && n(e)
            }
            const o = Z("button", {
                type: "button",
                className: "widget__actor",
                "aria-label": e,
                "aria-hidden": "false"
            }, j().el, e ? Z("span", {
                className: "widget__actor__text"
            }, e) : null);
            return o.addEventListener("click", t),
            {
                get el() {
                    return o
                },
                show: () => {
                    o.classList.remove("widget__actor--hidden"),
                    o.setAttribute("aria-hidden", "false")
                }
                ,
                hide: () => {
                    o.classList.add("widget__actor--hidden"),
                    o.setAttribute("aria-hidden", "true")
                }
            }
        }
        function K({label: e}) {
            const n = undefined;
            return {
                el: Z("button", {
                    type: "submit",
                    className: "btn btn--primary",
                    "aria-label": e
                }, e)
            }
        }
        function J(e, n) {
            const t = e.get(n);
            return "string" == typeof t ? t.trim() : ""
        }
        function Q({nameLabel: e, namePlaceholder: n, emailLabel: t, emailPlaceholder: o, messageLabel: r, messagePlaceholder: a, isRequiredLabel: i, cancelButtonLabel: s, submitButtonLabel: l, showName: d, showEmail: c, isNameRequired: u, isEmailRequired: m, defaultName: h, defaultEmail: f, onCancel: p, onSubmit: g}) {
            const {el: b} = K({
                label: l
            });
            function v(e) {
                if (e.preventDefault(),
                e.target instanceof HTMLFormElement)
                    try {
                        if (g) {
                            const n = new FormData(e.target)
                              , t = {
                                name: J(n, "name"),
                                email: J(n, "email"),
                                message: J(n, "message")
                            };
                            g(t)
                        }
                    } catch (n) {}
            }
            const _ = Z("div", {
                className: "form__error-container form__error-container--hidden",
                "aria-hidden": "true"
            });
            function w(e) {
                _.textContent = e,
                _.classList.remove("form__error-container--hidden"),
                _.setAttribute("aria-hidden", "false")
            }
            function C() {
                _.textContent = "",
                _.classList.add("form__error-container--hidden"),
                _.setAttribute("aria-hidden", "true")
            }
            const x = Z("input", {
                id: "name",
                type: d ? "text" : "hidden",
                "aria-hidden": d ? "false" : "true",
                name: "name",
                required: u,
                className: "form__input",
                placeholder: n,
                value: h
            })
              , y = Z("input", {
                id: "email",
                type: c ? "text" : "hidden",
                "aria-hidden": c ? "false" : "true",
                name: "email",
                required: m,
                className: "form__input",
                placeholder: o,
                value: f
            })
              , k = Z("textarea", {
                id: "message",
                autoFocus: "true",
                rows: "5",
                name: "message",
                required: !0,
                className: "form__input form__input--textarea",
                placeholder: a
            })
              , L = Z("button", {
                type: "button",
                className: "btn btn--default",
                "aria-label": s,
                onClick: e => {
                    p && p(e)
                }
            }, s)
              , E = Z("form", {
                className: "form",
                onSubmit: v
            }, [_, d && Z("label", {
                htmlFor: "name",
                className: "form__label"
            }, [Z("span", {
                className: "form__label__text"
            }, e, u && Z("span", {
                className: "form__label__text--required"
            }, ` ${i}`)), x]), !d && x, c && Z("label", {
                htmlFor: "email",
                className: "form__label"
            }, [Z("span", {
                className: "form__label__text"
            }, t, m && Z("span", {
                className: "form__label__text--required"
            }, ` ${i}`)), y]), !c && y, Z("label", {
                htmlFor: "message",
                className: "form__label"
            }, [Z("span", {
                className: "form__label__text"
            }, r, Z("span", {
                className: "form__label__text--required"
            }, ` ${i}`)), k]), Z("div", {
                className: "btn-group"
            }, [b, L])]);
            return {
                get el() {
                    return E
                },
                showError: w,
                hideError: C
            }
        }
        const X = "http://www.w3.org/2000/svg";
        function ee({colorScheme: e}) {
            const n = e => u.document.createElementNS(X, e)
              , t = U(n("svg"), {
                class: "sentry-logo",
                width: "32",
                height: "30",
                viewBox: "0 0 72 66",
                fill: "none"
            })
              , o = U(n("path"), {
                transform: "translate(11, 11)",
                d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"
            });
            t.append(o);
            const r = n("defs")
              , a = n("style");
            return a.textContent = `\n    path {\n      fill: ${"dark" === e ? "#fff" : "#362d59"};\n    }`,
            "system" === e && (a.textContent += "\n    @media (prefers-color-scheme: dark) {\n      path: {\n        fill: '#fff';\n      }\n    }\n    "),
            r.append(a),
            t.append(r),
            {
                get el() {
                    return t
                }
            }
        }
        function ne({formTitle: e, showBranding: n, showName: t, showEmail: o, isNameRequired: r, isEmailRequired: a, colorScheme: i, defaultName: s, defaultEmail: l, onClosed: d, onCancel: c, onSubmit: u, ...m}) {
            let h = null;
            function f() {
                p(),
                d && d()
            }
            function p() {
                h && (h.open = !1)
            }
            function g() {
                h && (h.open = !0)
            }
            function b() {
                return h && !0 === h.open || !1
            }
            const {el: v, showError: _, hideError: w} = Q({
                showEmail: o,
                showName: t,
                isEmailRequired: a,
                isNameRequired: r,
                defaultName: s,
                defaultEmail: l,
                onSubmit: u,
                onCancel: c,
                ...m
            });
            return h = Z("dialog", {
                className: "dialog",
                open: !0,
                onClick: f
            }, Z("div", {
                className: "dialog__content",
                onClick: e => {
                    e.stopPropagation()
                }
            }, Z("h2", {
                className: "dialog__header"
            }, e, n && Z("a", {
                className: "brand-link",
                target: "_blank",
                href: "https://sentry.io/welcome/",
                title: "Powered by Sentry",
                rel: "noopener noreferrer"
            }, ee({
                colorScheme: i
            }).el)), v)),
            {
                get el() {
                    return h
                },
                showError: _,
                hideError: w,
                open: g,
                close: p,
                checkIsOpen: b
            }
        }
        const te = 16
          , oe = 17
          , re = "http://www.w3.org/2000/svg";
        function ae() {
            const e = e => u.document.createElementNS(re, e)
              , n = U(e("svg"), {
                class: "success-icon",
                width: `${te}`,
                height: `${oe}`,
                viewBox: `0 0 ${te} ${oe}`,
                fill: "none"
            })
              , t = U(e("g"), {
                clipPath: "url(#clip0_57_156)"
            })
              , o = U(e("path"), {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"
            })
              , r = U(e("path"), {
                d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"
            });
            n.appendChild(t).append(r, o);
            const a = e("defs")
              , i = U(e("clipPath"), {
                id: "clip0_57_156"
            })
              , s = U(e("rect"), {
                width: `${te}`,
                height: `${te}`,
                fill: "white",
                transform: "translate(0 0.5)"
            });
            return i.appendChild(s),
            a.appendChild(i),
            n.appendChild(a).appendChild(i).appendChild(s),
            {
                get el() {
                    return n
                }
            }
        }
        function ie({message: e, onRemove: n}) {
            function t() {
                o && (o.remove(),
                n && n())
            }
            const o = Z("div", {
                className: "success-message",
                onClick: t
            }, ae().el, e);
            return {
                el: o,
                remove: t
            }
        }
        function se({shadow: e, options: {shouldCreateActor: n=!0, ...t}, attachTo: o}) {
            let r, i, s = !1;
            function l() {
                if (e)
                    try {
                        const n = ie({
                            message: t.successMessageText,
                            onRemove: () => {
                                o && clearTimeout(o),
                                m()
                            }
                        });
                        if (!n.el)
                            throw new Error("Unable to show success message");
                        e.appendChild(n.el);
                        const o = setTimeout(( () => {
                            n && n.remove()
                        }
                        ), 5e3)
                    } catch (n) {
                        a.vF.error(n)
                    }
            }
            async function c(e) {
                if (!i)
                    return;
                const n = [];
                if (t.isNameRequired && !e.name && n.push(t.nameLabel),
                t.isEmailRequired && !e.email && n.push(t.emailLabel),
                e.message || n.push(t.messageLabel),
                n.length > 0)
                    return void i.showError(`Please enter in the following required fields: ${n.join(", ")}`);
                const o = undefined;
                await I(i, e) ? (b(),
                l(),
                t.onSubmitSuccess && t.onSubmitSuccess()) : t.onSubmitError && t.onSubmitError()
            }
            function u() {
                const e = (0,
                d.KU)()
                  , n = e && e.getIntegrationByName && e.getIntegrationByName("Replay");
                n && n.flush().catch((e => {
                    A && a.vF.error(e)
                }
                ))
            }
            function m() {
                r && r.show()
            }
            function h() {
                r && r.hide()
            }
            function f() {
                r && r.el && r.el.remove()
            }
            function p() {
                try {
                    if (i)
                        return i.open(),
                        s = !0,
                        t.onFormOpen && t.onFormOpen(),
                        void u();
                    const n = t.useSentryUser
                      , o = (0,
                    d.o5)()
                      , r = o && o.getUser();
                    if (i = ne({
                        colorScheme: t.colorScheme,
                        showBranding: t.showBranding,
                        showName: t.showName || t.isNameRequired,
                        showEmail: t.showEmail || t.isEmailRequired,
                        isNameRequired: t.isNameRequired,
                        isEmailRequired: t.isEmailRequired,
                        formTitle: t.formTitle,
                        cancelButtonLabel: t.cancelButtonLabel,
                        submitButtonLabel: t.submitButtonLabel,
                        emailLabel: t.emailLabel,
                        emailPlaceholder: t.emailPlaceholder,
                        messageLabel: t.messageLabel,
                        messagePlaceholder: t.messagePlaceholder,
                        nameLabel: t.nameLabel,
                        namePlaceholder: t.namePlaceholder,
                        isRequiredLabel: t.isRequiredLabel,
                        defaultName: n && r && r[n.name] || "",
                        defaultEmail: n && r && r[n.email] || "",
                        onClosed: () => {
                            m(),
                            s = !1,
                            t.onFormClose && t.onFormClose()
                        }
                        ,
                        onCancel: () => {
                            g(),
                            m()
                        }
                        ,
                        onSubmit: c
                    }),
                    !i.el)
                        throw new Error("Unable to open Feedback dialog");
                    e.appendChild(i.el),
                    h(),
                    t.onFormOpen && t.onFormOpen(),
                    u()
                } catch (n) {
                    a.vF.error(n)
                }
            }
            function g() {
                i && (i.close(),
                s = !1,
                t.onFormClose && t.onFormClose())
            }
            function b() {
                if (i) {
                    g();
                    const e = i.el;
                    e && e.remove(),
                    i = void 0
                }
            }
            function v() {
                s || p(),
                h()
            }
            return o ? o.addEventListener("click", v) : n && (r = Y({
                buttonLabel: t.buttonLabel,
                onClick: v
            }),
            r.el && e.appendChild(r.el)),
            {
                get actor() {
                    return r
                },
                get dialog() {
                    return i
                },
                showActor: m,
                hideActor: h,
                removeActor: f,
                openDialog: p,
                closeDialog: g,
                removeDialog: b
            }
        }
        const le = u.document
          , de = e => new ce(e);
        class ce {
            static __initStatic() {
                this.id = "Feedback"
            }
            constructor({autoInject: e=!0, id: n="sentry-feedback", isEmailRequired: t=!1, isNameRequired: o=!1, showBranding: r=!0, showEmail: a=!0, showName: i=!0, useSentryUser: s={
                email: "email",
                name: "username"
            }, themeDark: l, themeLight: d, colorScheme: c="system", buttonLabel: u=v, cancelButtonLabel: m=_, submitButtonLabel: h=w, formTitle: f=C, emailPlaceholder: p=x, emailLabel: B=y, messagePlaceholder: $=k, messageLabel: R=L, namePlaceholder: q=E, nameLabel: H=S, isRequiredLabel: A=N, successMessageText: T=F, onFormClose: z, onFormOpen: D, onSubmitError: P, onSubmitSuccess: O}={}) {
                this.name = ce.id,
                this._host = null,
                this._shadow = null,
                this._widget = null,
                this._widgets = new Set,
                this._hasInsertedActorStyles = !1,
                this.options = {
                    autoInject: e,
                    showBranding: r,
                    id: n,
                    isEmailRequired: t,
                    isNameRequired: o,
                    showEmail: a,
                    showName: i,
                    useSentryUser: s,
                    colorScheme: c,
                    themeDark: {
                        ...b,
                        ...l
                    },
                    themeLight: {
                        ...g,
                        ...d
                    },
                    buttonLabel: u,
                    cancelButtonLabel: m,
                    submitButtonLabel: h,
                    formTitle: f,
                    emailLabel: B,
                    emailPlaceholder: p,
                    messageLabel: R,
                    messagePlaceholder: $,
                    nameLabel: H,
                    namePlaceholder: q,
                    isRequiredLabel: A,
                    successMessageText: T,
                    onFormClose: z,
                    onFormOpen: D,
                    onSubmitError: P,
                    onSubmitSuccess: O
                }
            }
            setupOnce() {
                if ((0,
                i.B)())
                    try {
                        this._cleanupWidgetIfExists();
                        const {autoInject: e} = this.options;
                        if (!e)
                            return;
                        this._createWidget(this.options)
                    } catch (e) {
                        A && a.vF.error(e)
                    }
            }
            openDialog() {
                this._widget || this._createWidget({
                    ...this.options,
                    shouldCreateActor: !1
                }),
                this._widget && this._widget.openDialog()
            }
            closeDialog() {
                this._widget && this._widget.closeDialog()
            }
            attachTo(e, n) {
                try {
                    const t = T(this.options, n || {});
                    return this._ensureShadowHost(t, ( ({shadow: n}) => {
                        const o = "string" == typeof e ? le.querySelector(e) : "function" == typeof e.addEventListener ? e : null;
                        if (!o)
                            return A && a.vF.error("[Feedback] Unable to attach to target element"),
                            null;
                        const r = se({
                            shadow: n,
                            options: t,
                            attachTo: o
                        });
                        return this._widgets.add(r),
                        this._widget || (this._widget = r),
                        r
                    }
                    ))
                } catch (t) {
                    return A && a.vF.error(t),
                    null
                }
            }
            createWidget(e) {
                try {
                    return this._createWidget(T(this.options, e || {}))
                } catch (n) {
                    return A && a.vF.error(n),
                    null
                }
            }
            removeWidget(e) {
                if (!e)
                    return !1;
                try {
                    if (this._widgets.has(e))
                        return e.removeActor(),
                        e.removeDialog(),
                        this._widgets.delete(e),
                        this._widget === e && (this._widget = null),
                        !0
                } catch (n) {
                    A && a.vF.error(n)
                }
                return !1
            }
            getWidget() {
                return this._widget
            }
            remove() {
                this._host && this._host.remove(),
                this._initialize()
            }
            _initialize() {
                this._host = null,
                this._shadow = null,
                this._widget = null,
                this._widgets = new Set,
                this._hasInsertedActorStyles = !1
            }
            _cleanupWidgetIfExists() {
                this._host && this.remove();
                const e = le.querySelector(`#${this.options.id}`);
                e && e.remove()
            }
            _createWidget(e) {
                return this._ensureShadowHost(e, ( ({shadow: n}) => {
                    const t = se({
                        shadow: n,
                        options: e
                    });
                    return !this._hasInsertedActorStyles && t.actor && (n.appendChild(z(le)),
                    this._hasInsertedActorStyles = !0),
                    this._widgets.add(t),
                    this._widget || (this._widget = t),
                    t
                }
                ))
            }
            _ensureShadowHost(e, n) {
                let t = !1;
                if (!this._shadow || !this._host) {
                    const {id: n, colorScheme: o, themeLight: r, themeDark: a} = e
                      , {shadow: i, host: s} = M({
                        id: n,
                        colorScheme: o,
                        themeLight: r,
                        themeDark: a
                    });
                    this._shadow = i,
                    this._host = s,
                    t = !0
                }
                this._host.dataset.sentryFeedbackColorscheme = e.colorScheme;
                const o = n({
                    shadow: this._shadow,
                    host: this._host
                });
                return t && le.body.appendChild(this._host),
                o
            }
        }
        ce.__initStatic()
    },
    969624: function(e, n, t) {
        if ("undefined" != typeof window && !("onscrollend"in window)) {
            const r = new Event("scrollend")
              , a = new Set;
            document.addEventListener("touchstart", (e => {
                for (let n of e.changedTouches)
                    a.add(n.identifier)
            }
            ), {
                passive: !0
            }),
            document.addEventListener("touchend", (e => {
                for (let n of e.changedTouches)
                    a.delete(n.identifier)
            }
            ), {
                passive: !0
            }),
            document.addEventListener("touchcancel", (e => {
                for (let n of e.changedTouches)
                    a.delete(n.identifier)
            }
            ), {
                passive: !0
            });
            let i = new WeakMap;
            function s(e, n, t) {
                let o = e[n];
                e[n] = function() {
                    let e = Array.prototype.slice.apply(arguments, [0]);
                    o.apply(this, e),
                    e.unshift(o),
                    t.apply(this, e)
                }
            }
            function l(e, n, t, o) {
                if ("scroll" != n && "scrollend" != n)
                    return;
                let s = this
                  , l = i.get(s);
                if (void 0 === l) {
                    let n = 0;
                    l = {
                        scrollListener: e => {
                            clearTimeout(n),
                            n = setTimeout(( () => {
                                a.size ? setTimeout(l.scrollListener, 100) : (s && s.dispatchEvent(r),
                                n = 0)
                            }
                            ), 100)
                        }
                        ,
                        listeners: 0
                    },
                    e.apply(s, ["scroll", l.scrollListener]),
                    i.set(s, l)
                }
                l.listeners++
            }
            function d(e, n, t) {
                if ("scroll" != n && "scrollend" != n)
                    return;
                let o = this
                  , r = i.get(o);
                void 0 !== r && (r[n]--,
                --r.listeners > 0 || (e.apply(o, ["scroll", r.scrollListener]),
                i.delete(o)))
            }
            s(Element.prototype, "addEventListener", l),
            s(window, "addEventListener", l),
            s(document, "addEventListener", l),
            s(Element.prototype, "removeEventListener", d),
            s(window, "removeEventListener", d),
            s(document, "removeEventListener", d)
        }
        var o = null
    }
}]);
