"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[82272], {
    298442: function(e, t, n) {
        n.d(t, {
            J$: function() {
                return zo
            },
            fe: function() {
                return Wo
            },
            tn: function() {
                return $o
            }
        });
        var s = n(92460)
          , r = n(690853)
          , o = n(483741)
          , i = n(941351)
          , a = n(376482)
          , c = n(249475)
          , l = n(586641)
          , u = n(503445)
          , d = n(581869)
          , h = n(816341)
          , p = n(337498)
          , m = n(268411)
          , f = n(919766)
          , y = n(289297)
          , g = n(317412)
          , S = n(306936)
          , k = n(271540)
          , v = n(939653)
          , b = n(343650)
          , _ = n(690470)
          , w = n(550146)
          , I = n(728880)
          , C = n(259403)
          , E = n(38114)
          , T = n(52735);
        const x = h.OW
          , M = "sentryReplaySession"
          , R = "replay_event"
          , A = "Unable to send Replay"
          , O = 3e5
          , D = 9e5
          , L = 5e3
          , N = 5500
          , F = 6e4
          , B = 5e3
          , P = 3
          , U = 15e4
          , z = 5e3
          , W = 3e3
          , H = 300
          , j = 2e7
          , $ = 4999
          , q = 15e3
          , K = 36e5;
        function V(e, t) {
            return null != e ? e : t()
        }
        function J(e) {
            let t, n = e[0], s = 1;
            for (; s < e.length; ) {
                const r = e[s]
                  , o = e[s + 1];
                if (s += 2,
                ("optionalAccess" === r || "optionalCall" === r) && null == n)
                    return;
                "access" === r || "optionalAccess" === r ? (t = n,
                n = o(n)) : "call" !== r && "optionalCall" !== r || (n = o(( (...e) => n.call(t, ...e))),
                t = void 0)
            }
            return n
        }
        var Y;
        function G(e) {
            return e.nodeType === e.ELEMENT_NODE
        }
        function X(e) {
            const t = J([e, "optionalAccess", e => e.host]);
            return Boolean(J([t, "optionalAccess", e => e.shadowRoot]) === e)
        }
        function Q(e) {
            return "[object ShadowRoot]" === Object.prototype.toString.call(e)
        }
        function Z(e) {
            return e.includes(" background-clip: text;") && !e.includes(" -webkit-background-clip: text;") && (e = e.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")),
            e
        }
        function ee(e) {
            const {cssText: t} = e;
            if (t.split('"').length < 3)
                return t;
            const n = ["@import", `url(${JSON.stringify(e.href)})`];
            return "" === e.layerName ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`),
            e.supportsText && n.push(`supports(${e.supportsText})`),
            e.media.length && n.push(e.media.mediaText),
            n.join(" ") + ";"
        }
        function te(e) {
            try {
                const t = e.rules || e.cssRules;
                return t ? Z(Array.from(t, ne).join("")) : null
            } catch (t) {
                return null
            }
        }
        function ne(e) {
            let t;
            if (re(e))
                try {
                    t = te(e.styleSheet) || ee(e)
                } catch (n) {}
            else if (oe(e) && e.selectorText.includes(":"))
                return se(e.cssText);
            return t || e.cssText
        }
        function se(e) {
            const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
            return e.replace(t, "$1\\$2")
        }
        function re(e) {
            return "styleSheet"in e
        }
        function oe(e) {
            return "selectorText"in e
        }
        !function(e) {
            e[e.Document = 0] = "Document",
            e[e.DocumentType = 1] = "DocumentType",
            e[e.Element = 2] = "Element",
            e[e.Text = 3] = "Text",
            e[e.CDATA = 4] = "CDATA",
            e[e.Comment = 5] = "Comment"
        }(Y || (Y = {}));
        class ie {
            constructor() {
                this.idNodeMap = new Map,
                this.nodeMetaMap = new WeakMap
            }
            getId(e) {
                if (!e)
                    return -1;
                const t = undefined;
                return V(J([this, "access", e => e.getMeta, "call", t => t(e), "optionalAccess", e => e.id]), ( () => -1))
            }
            getNode(e) {
                return this.idNodeMap.get(e) || null
            }
            getIds() {
                return Array.from(this.idNodeMap.keys())
            }
            getMeta(e) {
                return this.nodeMetaMap.get(e) || null
            }
            removeNodeFromMap(e) {
                const t = this.getId(e);
                this.idNodeMap.delete(t),
                e.childNodes && e.childNodes.forEach((e => this.removeNodeFromMap(e)))
            }
            has(e) {
                return this.idNodeMap.has(e)
            }
            hasNode(e) {
                return this.nodeMetaMap.has(e)
            }
            add(e, t) {
                const n = t.id;
                this.idNodeMap.set(n, e),
                this.nodeMetaMap.set(e, t)
            }
            replace(e, t) {
                const n = this.getNode(e);
                if (n) {
                    const e = this.nodeMetaMap.get(n);
                    e && this.nodeMetaMap.set(t, e)
                }
                this.idNodeMap.set(e, t)
            }
            reset() {
                this.idNodeMap = new Map,
                this.nodeMetaMap = new WeakMap
            }
        }
        function ae() {
            return new ie
        }
        function ce({maskInputOptions: e, tagName: t, type: n}) {
            return "OPTION" === t && (t = "SELECT"),
            Boolean(e[t.toLowerCase()] || n && e[n] || "password" === n || "INPUT" === t && !n && e.text)
        }
        function le({isMasked: e, element: t, value: n, maskInputFn: s}) {
            let r = n || "";
            return e ? (s && (r = s(r, t)),
            "*".repeat(r.length)) : r
        }
        function ue(e) {
            return e.toLowerCase()
        }
        function de(e) {
            return e.toUpperCase()
        }
        const he = "__rrweb_original__";
        function pe(e) {
            const t = e.getContext("2d");
            if (!t)
                return !0;
            const n = 50;
            for (let s = 0; s < e.width; s += n)
                for (let r = 0; r < e.height; r += n) {
                    const o = t.getImageData
                      , i = he in o ? o[he] : o
                      , a = undefined;
                    if (new Uint32Array(i.call(t, s, r, Math.min(n, e.width - s), Math.min(n, e.height - r)).data.buffer).some((e => 0 !== e)))
                        return !1
                }
            return !0
        }
        function me(e) {
            const t = e.type;
            return e.hasAttribute("data-rr-is-password") ? "password" : t ? ue(t) : null
        }
        function fe(e, t, n) {
            return "INPUT" !== t || "radio" !== n && "checkbox" !== n ? e.value : e.getAttribute("value") || ""
        }
        let ye = 1;
        const ge = new RegExp("[^a-z0-9-_:]")
          , Se = -2;
        function ke() {
            return ye++
        }
        function ve(e) {
            if (e instanceof HTMLFormElement)
                return "form";
            const t = ue(e.tagName);
            return ge.test(t) ? "div" : t
        }
        function be(e) {
            let t = "";
            return t = e.indexOf("//") > -1 ? e.split("/").slice(0, 3).join("/") : e.split("/")[0],
            t = t.split("?")[0],
            t
        }
        let _e, we;
        const Ie = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm
          , Ce = /^(?:[a-z+]+:)?\/\//i
          , Ee = /^www\..*/i
          , Te = /^(data:)([^,]*),(.*)/i;
        function xe(e, t) {
            return (e || "").replace(Ie, ( (e, n, s, r, o, i) => {
                const a = s || o || i
                  , c = n || r || "";
                if (!a)
                    return e;
                if (Ce.test(a) || Ee.test(a))
                    return `url(${c}${a}${c})`;
                if (Te.test(a))
                    return `url(${c}${a}${c})`;
                if ("/" === a[0])
                    return `url(${c}${be(t) + a}${c})`;
                const l = t.split("/")
                  , u = a.split("/");
                l.pop();
                for (const t of u)
                    "." !== t && (".." === t ? l.pop() : l.push(t));
                return `url(${c}${l.join("/")}${c})`
            }
            ))
        }
        const Me = /^[^ \t\n\r\u000c]+/
          , Re = /^[, \t\n\r\u000c]+/;
        function Ae(e, t) {
            if ("" === t.trim())
                return t;
            let n = 0;
            function s(e) {
                let s;
                const r = e.exec(t.substring(n));
                return r ? (s = r[0],
                n += s.length,
                s) : ""
            }
            const r = [];
            for (; s(Re),
            !(n >= t.length); ) {
                let o = s(Me);
                if ("," === o.slice(-1))
                    o = Oe(e, o.substring(0, o.length - 1)),
                    r.push(o);
                else {
                    let s = "";
                    o = Oe(e, o);
                    let i = !1;
                    for (; ; ) {
                        const e = t.charAt(n);
                        if ("" === e) {
                            r.push((o + s).trim());
                            break
                        }
                        if (i)
                            ")" === e && (i = !1);
                        else {
                            if ("," === e) {
                                n += 1,
                                r.push((o + s).trim());
                                break
                            }
                            "(" === e && (i = !0)
                        }
                        s += e,
                        n += 1
                    }
                }
            }
            return r.join(", ")
        }
        function Oe(e, t) {
            if (!t || "" === t.trim())
                return t;
            const n = e.createElement("a");
            return n.href = t,
            n.href
        }
        function De(e) {
            return Boolean("svg" === e.tagName || e.ownerSVGElement)
        }
        function Le() {
            const e = document.createElement("a");
            return e.href = "",
            e.href
        }
        function Ne(e, t, n, s, r, o) {
            return s ? "src" === n || "href" === n && ("use" !== t || "#" !== s[0]) || "xlink:href" === n && "#" !== s[0] ? Oe(e, s) : "background" !== n || "table" !== t && "td" !== t && "th" !== t ? "srcset" === n ? Ae(e, s) : "style" === n ? xe(s, Le()) : "object" === t && "data" === n ? Oe(e, s) : "function" == typeof o ? o(n, s, r) : s : Oe(e, s) : s
        }
        function Fe(e, t, n) {
            return ("video" === e || "audio" === e) && "autoplay" === t
        }
        function Be(e, t, n, s) {
            try {
                if (s && e.matches(s))
                    return !1;
                if ("string" == typeof t) {
                    if (e.classList.contains(t))
                        return !0
                } else
                    for (let n = e.classList.length; n--; ) {
                        const s = e.classList[n];
                        if (t.test(s))
                            return !0
                    }
                if (n)
                    return e.matches(n)
            } catch (ws) {}
            return !1
        }
        function Pe(e, t) {
            for (let n = e.classList.length; n--; ) {
                const s = e.classList[n];
                if (t.test(s))
                    return !0
            }
            return !1
        }
        function Ue(e, t, n=1 / 0, s=0) {
            return e ? e.nodeType !== e.ELEMENT_NODE || s > n ? -1 : t(e) ? s : Ue(e.parentNode, t, n, s + 1) : -1
        }
        function ze(e, t) {
            return n => {
                const s = n;
                if (null === s)
                    return !1;
                try {
                    if (e)
                        if ("string" == typeof e) {
                            if (s.matches(`.${e}`))
                                return !0
                        } else if (Pe(s, e))
                            return !0;
                    return !(!t || !s.matches(t))
                } catch (r) {
                    return !1
                }
            }
        }
        function We(e, t, n, s, r, o) {
            try {
                const i = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
                if (null === i)
                    return !1;
                if ("INPUT" === i.tagName) {
                    const e = i.getAttribute("autocomplete")
                      , t = undefined;
                    if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(e))
                        return !0
                }
                let a = -1
                  , c = -1;
                if (o) {
                    if (c = Ue(i, ze(s, r)),
                    c < 0)
                        return !0;
                    a = Ue(i, ze(t, n), c >= 0 ? c : 1 / 0)
                } else {
                    if (a = Ue(i, ze(t, n)),
                    a < 0)
                        return !1;
                    c = Ue(i, ze(s, r), a >= 0 ? a : 1 / 0)
                }
                return a >= 0 ? !(c >= 0) || a <= c : !(c >= 0) && !!o
            } catch (ws) {}
            return !!o
        }
        function He(e, t, n) {
            const s = e.contentWindow;
            if (!s)
                return;
            let r = !1, o;
            try {
                o = s.document.readyState
            } catch (a) {
                return
            }
            if ("complete" !== o) {
                const s = setTimeout(( () => {
                    r || (t(),
                    r = !0)
                }
                ), n);
                return void e.addEventListener("load", ( () => {
                    clearTimeout(s),
                    r = !0,
                    t()
                }
                ))
            }
            const i = "about:blank";
            if (s.location.href !== i || e.src === i || "" === e.src)
                return setTimeout(t, 0),
                e.addEventListener("load", t);
            e.addEventListener("load", t)
        }
        function je(e, t, n) {
            let s = !1, r;
            try {
                r = e.sheet
            } catch (i) {
                return
            }
            if (r)
                return;
            const o = setTimeout(( () => {
                s || (t(),
                s = !0)
            }
            ), n);
            e.addEventListener("load", ( () => {
                clearTimeout(o),
                s = !0,
                t()
            }
            ))
        }
        function $e(e, t) {
            const {doc: n, mirror: s, blockClass: r, blockSelector: o, unblockSelector: i, maskAllText: a, maskAttributeFn: c, maskTextClass: l, unmaskTextClass: u, maskTextSelector: d, unmaskTextSelector: h, inlineStylesheet: p, maskInputOptions: m={}, maskTextFn: f, maskInputFn: y, dataURLOptions: g={}, inlineImages: S, recordCanvas: k, keepIframeSrcFn: v, newlyAddedElement: b=!1} = t
              , _ = qe(n, s);
            switch (e.nodeType) {
            case e.DOCUMENT_NODE:
                return "CSS1Compat" !== e.compatMode ? {
                    type: Y.Document,
                    childNodes: [],
                    compatMode: e.compatMode
                } : {
                    type: Y.Document,
                    childNodes: []
                };
            case e.DOCUMENT_TYPE_NODE:
                return {
                    type: Y.DocumentType,
                    name: e.name,
                    publicId: e.publicId,
                    systemId: e.systemId,
                    rootId: _
                };
            case e.ELEMENT_NODE:
                return Ve(e, {
                    doc: n,
                    blockClass: r,
                    blockSelector: o,
                    unblockSelector: i,
                    inlineStylesheet: p,
                    maskAttributeFn: c,
                    maskInputOptions: m,
                    maskInputFn: y,
                    dataURLOptions: g,
                    inlineImages: S,
                    recordCanvas: k,
                    keepIframeSrcFn: v,
                    newlyAddedElement: b,
                    rootId: _,
                    maskAllText: a,
                    maskTextClass: l,
                    unmaskTextClass: u,
                    maskTextSelector: d,
                    unmaskTextSelector: h
                });
            case e.TEXT_NODE:
                return Ke(e, {
                    maskAllText: a,
                    maskTextClass: l,
                    unmaskTextClass: u,
                    maskTextSelector: d,
                    unmaskTextSelector: h,
                    maskTextFn: f,
                    maskInputOptions: m,
                    maskInputFn: y,
                    rootId: _
                });
            case e.CDATA_SECTION_NODE:
                return {
                    type: Y.CDATA,
                    textContent: "",
                    rootId: _
                };
            case e.COMMENT_NODE:
                return {
                    type: Y.Comment,
                    textContent: e.textContent || "",
                    rootId: _
                };
            default:
                return !1
            }
        }
        function qe(e, t) {
            if (!t.hasNode(e))
                return;
            const n = t.getId(e);
            return 1 === n ? void 0 : n
        }
        function Ke(e, t) {
            const {maskAllText: n, maskTextClass: s, unmaskTextClass: r, maskTextSelector: o, unmaskTextSelector: i, maskTextFn: a, maskInputOptions: c, maskInputFn: l, rootId: u} = t
              , d = e.parentNode && e.parentNode.tagName;
            let h = e.textContent;
            const p = "STYLE" === d || void 0
              , m = "SCRIPT" === d || void 0
              , f = "TEXTAREA" === d || void 0;
            if (p && h) {
                try {
                    e.nextSibling || e.previousSibling || J([e, "access", e => e.parentNode, "access", e => e.sheet, "optionalAccess", e => e.cssRules]) && (h = te(e.parentNode.sheet))
                } catch (g) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${g}`, e)
                }
                h = xe(h, Le())
            }
            m && (h = "SCRIPT_PLACEHOLDER");
            const y = We(e, s, o, r, i, n);
            if (p || m || f || !h || !y || (h = a ? a(h, e.parentElement) : h.replace(/[\S]/g, "*")),
            f && h && (c.textarea || y) && (h = l ? l(h, e.parentNode) : h.replace(/[\S]/g, "*")),
            "OPTION" === d && h) {
                const t = undefined;
                h = le({
                    isMasked: We(e, s, o, r, i, ce({
                        type: null,
                        tagName: d,
                        maskInputOptions: c
                    })),
                    element: e,
                    value: h,
                    maskInputFn: l
                })
            }
            return {
                type: Y.Text,
                textContent: h || "",
                isStyle: p,
                rootId: u
            }
        }
        function Ve(e, t) {
            const {doc: n, blockClass: s, blockSelector: r, unblockSelector: o, inlineStylesheet: i, maskInputOptions: a={}, maskAttributeFn: c, maskInputFn: l, dataURLOptions: u={}, inlineImages: d, recordCanvas: h, keepIframeSrcFn: p, newlyAddedElement: m=!1, rootId: f, maskAllText: y, maskTextClass: g, unmaskTextClass: S, maskTextSelector: k, unmaskTextSelector: v} = t
              , b = Be(e, s, r, o)
              , _ = ve(e);
            let w = {};
            const I = e.attributes.length;
            for (let E = 0; E < I; E++) {
                const t = e.attributes[E];
                t.name && !Fe(_, t.name, t.value) && (w[t.name] = Ne(n, _, ue(t.name), t.value, e, c))
            }
            if ("link" === _ && i) {
                const t = Array.from(n.styleSheets).find((t => t.href === e.href));
                let s = null;
                t && (s = te(t)),
                s && (delete w.rel,
                delete w.href,
                w._cssText = xe(s, t.href))
            }
            if ("style" === _ && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                const t = te(e.sheet);
                t && (w._cssText = xe(t, Le()))
            }
            if ("input" === _ || "textarea" === _ || "select" === _ || "option" === _) {
                const t = e
                  , n = me(t)
                  , s = fe(t, de(_), n)
                  , r = t.checked;
                if ("submit" !== n && "button" !== n && s) {
                    const e = We(t, g, k, S, v, ce({
                        type: n,
                        tagName: de(_),
                        maskInputOptions: a
                    }));
                    w.value = le({
                        isMasked: e,
                        element: t,
                        value: s,
                        maskInputFn: l
                    })
                }
                r && (w.checked = r)
            }
            if ("option" === _ && (e.selected && !a.select ? w.selected = !0 : delete w.selected),
            "canvas" === _ && h)
                if ("2d" === e.__context)
                    pe(e) || (w.rr_dataURL = e.toDataURL(u.type, u.quality));
                else if (!("__context"in e)) {
                    const t = e.toDataURL(u.type, u.quality)
                      , n = document.createElement("canvas");
                    n.width = e.width,
                    n.height = e.height;
                    const s = undefined;
                    t !== n.toDataURL(u.type, u.quality) && (w.rr_dataURL = t)
                }
            if ("img" === _ && d) {
                _e || (_e = n.createElement("canvas"),
                we = _e.getContext("2d"));
                const t = e
                  , s = t.crossOrigin;
                t.crossOrigin = "anonymous";
                const r = () => {
                    t.removeEventListener("load", r);
                    try {
                        _e.width = t.naturalWidth,
                        _e.height = t.naturalHeight,
                        we.drawImage(t, 0, 0),
                        w.rr_dataURL = _e.toDataURL(u.type, u.quality)
                    } catch (e) {
                        console.warn(`Cannot inline img src=${t.currentSrc}! Error: ${e}`)
                    }
                    s ? w.crossOrigin = s : t.removeAttribute("crossorigin")
                }
                ;
                t.complete && 0 !== t.naturalWidth ? r() : t.addEventListener("load", r)
            }
            if ("audio" !== _ && "video" !== _ || (w.rr_mediaState = e.paused ? "paused" : "played",
            w.rr_mediaCurrentTime = e.currentTime),
            m || (e.scrollLeft && (w.rr_scrollLeft = e.scrollLeft),
            e.scrollTop && (w.rr_scrollTop = e.scrollTop)),
            b) {
                const {width: t, height: n} = e.getBoundingClientRect();
                w = {
                    class: w.class,
                    rr_width: `${t}px`,
                    rr_height: `${n}px`
                }
            }
            let C;
            "iframe" !== _ || p(w.src) || (e.contentDocument || (w.rr_src = w.src),
            delete w.src);
            try {
                customElements.get(_) && (C = !0)
            } catch (ws) {}
            return {
                type: Y.Element,
                tagName: _,
                attributes: w,
                childNodes: [],
                isSVG: De(e) || void 0,
                needBlock: b,
                rootId: f,
                isCustom: C
            }
        }
        function Je(e) {
            return null == e ? "" : e.toLowerCase()
        }
        function Ye(e, t) {
            if (t.comment && e.type === Y.Comment)
                return !0;
            if (e.type === Y.Element) {
                if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) && "script" === e.attributes.as || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && e.attributes.href.endsWith(".js")))
                    return !0;
                if (t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (Je(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === Je(e.attributes.name) || "icon" === Je(e.attributes.rel) || "apple-touch-icon" === Je(e.attributes.rel) || "shortcut icon" === Je(e.attributes.rel))))
                    return !0;
                if ("meta" === e.tagName) {
                    if (t.headMetaDescKeywords && Je(e.attributes.name).match(/^description|keywords$/))
                        return !0;
                    if (t.headMetaSocial && (Je(e.attributes.property).match(/^(og|twitter|fb):/) || Je(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === Je(e.attributes.name)))
                        return !0;
                    if (t.headMetaRobots && ("robots" === Je(e.attributes.name) || "googlebot" === Je(e.attributes.name) || "bingbot" === Je(e.attributes.name)))
                        return !0;
                    if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"])
                        return !0;
                    if (t.headMetaAuthorship && ("author" === Je(e.attributes.name) || "generator" === Je(e.attributes.name) || "framework" === Je(e.attributes.name) || "publisher" === Je(e.attributes.name) || "progid" === Je(e.attributes.name) || Je(e.attributes.property).match(/^article:/) || Je(e.attributes.property).match(/^product:/)))
                        return !0;
                    if (t.headMetaVerification && ("google-site-verification" === Je(e.attributes.name) || "yandex-verification" === Je(e.attributes.name) || "csrf-token" === Je(e.attributes.name) || "p:domain_verify" === Je(e.attributes.name) || "verify-v1" === Je(e.attributes.name) || "verification" === Je(e.attributes.name) || "shopify-checkout-api-token" === Je(e.attributes.name)))
                        return !0
                }
            }
            return !1
        }
        function Ge(e, t) {
            const {doc: n, mirror: s, blockClass: r, blockSelector: o, unblockSelector: i, maskAllText: a, maskTextClass: c, unmaskTextClass: l, maskTextSelector: u, unmaskTextSelector: d, skipChild: h=!1, inlineStylesheet: p=!0, maskInputOptions: m={}, maskAttributeFn: f, maskTextFn: y, maskInputFn: g, slimDOMOptions: S, dataURLOptions: k={}, inlineImages: v=!1, recordCanvas: b=!1, onSerialize: _, onIframeLoad: w, iframeLoadTimeout: I=5e3, onStylesheetLoad: C, stylesheetLoadTimeout: E=5e3, keepIframeSrcFn: T= () => !1, newlyAddedElement: x=!1} = t;
            let {preserveWhiteSpace: M=!0} = t;
            const R = $e(e, {
                doc: n,
                mirror: s,
                blockClass: r,
                blockSelector: o,
                maskAllText: a,
                unblockSelector: i,
                maskTextClass: c,
                unmaskTextClass: l,
                maskTextSelector: u,
                unmaskTextSelector: d,
                inlineStylesheet: p,
                maskInputOptions: m,
                maskAttributeFn: f,
                maskTextFn: y,
                maskInputFn: g,
                dataURLOptions: k,
                inlineImages: v,
                recordCanvas: b,
                keepIframeSrcFn: T,
                newlyAddedElement: x
            });
            if (!R)
                return console.warn(e, "not serialized"),
                null;
            let A;
            A = s.hasNode(e) ? s.getId(e) : Ye(R, S) || !M && R.type === Y.Text && !R.isStyle && !R.textContent.replace(/^\s+|\s+$/gm, "").length ? Se : ke();
            const O = Object.assign(R, {
                id: A
            });
            if (s.add(e, O),
            A === Se)
                return null;
            _ && _(e);
            let D = !h;
            if (O.type === Y.Element) {
                D = D && !O.needBlock,
                delete O.needBlock;
                const t = e.shadowRoot;
                t && Q(t) && (O.isShadowHost = !0)
            }
            if ((O.type === Y.Document || O.type === Y.Element) && D) {
                S.headWhitespace && O.type === Y.Element && "head" === O.tagName && (M = !1);
                const t = {
                    doc: n,
                    mirror: s,
                    blockClass: r,
                    blockSelector: o,
                    maskAllText: a,
                    unblockSelector: i,
                    maskTextClass: c,
                    unmaskTextClass: l,
                    maskTextSelector: u,
                    unmaskTextSelector: d,
                    skipChild: h,
                    inlineStylesheet: p,
                    maskInputOptions: m,
                    maskAttributeFn: f,
                    maskTextFn: y,
                    maskInputFn: g,
                    slimDOMOptions: S,
                    dataURLOptions: k,
                    inlineImages: v,
                    recordCanvas: b,
                    preserveWhiteSpace: M,
                    onSerialize: _,
                    onIframeLoad: w,
                    iframeLoadTimeout: I,
                    onStylesheetLoad: C,
                    stylesheetLoadTimeout: E,
                    keepIframeSrcFn: T
                };
                for (const n of Array.from(e.childNodes)) {
                    const e = Ge(n, t);
                    e && O.childNodes.push(e)
                }
                if (G(e) && e.shadowRoot)
                    for (const n of Array.from(e.shadowRoot.childNodes)) {
                        const s = Ge(n, t);
                        s && (Q(e.shadowRoot) && (s.isShadow = !0),
                        O.childNodes.push(s))
                    }
            }
            return e.parentNode && X(e.parentNode) && Q(e.parentNode) && (O.isShadow = !0),
            O.type === Y.Element && "iframe" === O.tagName && He(e, ( () => {
                const t = e.contentDocument;
                if (t && w) {
                    const n = Ge(t, {
                        doc: t,
                        mirror: s,
                        blockClass: r,
                        blockSelector: o,
                        unblockSelector: i,
                        maskAllText: a,
                        maskTextClass: c,
                        unmaskTextClass: l,
                        maskTextSelector: u,
                        unmaskTextSelector: d,
                        skipChild: !1,
                        inlineStylesheet: p,
                        maskInputOptions: m,
                        maskAttributeFn: f,
                        maskTextFn: y,
                        maskInputFn: g,
                        slimDOMOptions: S,
                        dataURLOptions: k,
                        inlineImages: v,
                        recordCanvas: b,
                        preserveWhiteSpace: M,
                        onSerialize: _,
                        onIframeLoad: w,
                        iframeLoadTimeout: I,
                        onStylesheetLoad: C,
                        stylesheetLoadTimeout: E,
                        keepIframeSrcFn: T
                    });
                    n && w(e, n)
                }
            }
            ), I),
            O.type === Y.Element && "link" === O.tagName && "stylesheet" === O.attributes.rel && je(e, ( () => {
                if (C) {
                    const t = Ge(e, {
                        doc: n,
                        mirror: s,
                        blockClass: r,
                        blockSelector: o,
                        unblockSelector: i,
                        maskAllText: a,
                        maskTextClass: c,
                        unmaskTextClass: l,
                        maskTextSelector: u,
                        unmaskTextSelector: d,
                        skipChild: !1,
                        inlineStylesheet: p,
                        maskInputOptions: m,
                        maskAttributeFn: f,
                        maskTextFn: y,
                        maskInputFn: g,
                        slimDOMOptions: S,
                        dataURLOptions: k,
                        inlineImages: v,
                        recordCanvas: b,
                        preserveWhiteSpace: M,
                        onSerialize: _,
                        onIframeLoad: w,
                        iframeLoadTimeout: I,
                        onStylesheetLoad: C,
                        stylesheetLoadTimeout: E,
                        keepIframeSrcFn: T
                    });
                    t && C(e, t)
                }
            }
            ), E),
            O
        }
        function Xe(e, t) {
            const {mirror: n=new ie, blockClass: s="rr-block", blockSelector: r=null, unblockSelector: o=null, maskAllText: i=!1, maskTextClass: a="rr-mask", unmaskTextClass: c=null, maskTextSelector: l=null, unmaskTextSelector: u=null, inlineStylesheet: d=!0, inlineImages: h=!1, recordCanvas: p=!1, maskAllInputs: m=!1, maskAttributeFn: f, maskTextFn: y, maskInputFn: g, slimDOM: S=!1, dataURLOptions: k, preserveWhiteSpace: v, onSerialize: b, onIframeLoad: _, iframeLoadTimeout: w, onStylesheetLoad: I, stylesheetLoadTimeout: C, keepIframeSrcFn: E= () => !1} = t || {}
              , T = undefined
              , x = undefined;
            return Ge(e, {
                doc: e,
                mirror: n,
                blockClass: s,
                blockSelector: r,
                unblockSelector: o,
                maskAllText: i,
                maskTextClass: a,
                unmaskTextClass: c,
                maskTextSelector: l,
                unmaskTextSelector: u,
                skipChild: !1,
                inlineStylesheet: d,
                maskInputOptions: !0 === m ? {
                    color: !0,
                    date: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0,
                    textarea: !0,
                    select: !0
                } : !1 === m ? {} : m,
                maskAttributeFn: f,
                maskTextFn: y,
                maskInputFn: g,
                slimDOMOptions: !0 === S || "all" === S ? {
                    script: !0,
                    comment: !0,
                    headFavicon: !0,
                    headWhitespace: !0,
                    headMetaDescKeywords: "all" === S,
                    headMetaSocial: !0,
                    headMetaRobots: !0,
                    headMetaHttpEquiv: !0,
                    headMetaAuthorship: !0,
                    headMetaVerification: !0
                } : !1 === S ? {} : S,
                dataURLOptions: k,
                inlineImages: h,
                recordCanvas: p,
                preserveWhiteSpace: v,
                onSerialize: b,
                onIframeLoad: _,
                iframeLoadTimeout: w,
                onStylesheetLoad: I,
                stylesheetLoadTimeout: C,
                keepIframeSrcFn: E,
                newlyAddedElement: !1
            })
        }
        function Qe(e) {
            let t, n = e[0], s = 1;
            for (; s < e.length; ) {
                const r = e[s]
                  , o = e[s + 1];
                if (s += 2,
                ("optionalAccess" === r || "optionalCall" === r) && null == n)
                    return;
                "access" === r || "optionalAccess" === r ? (t = n,
                n = o(n)) : "call" !== r && "optionalCall" !== r || (n = o(( (...e) => n.call(t, ...e))),
                t = void 0)
            }
            return n
        }
        function Ze(e, t, n=document) {
            const s = {
                capture: !0,
                passive: !0
            };
            return n.addEventListener(e, t, s),
            () => n.removeEventListener(e, t, s)
        }
        const et = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
        let tt = {
            map: {},
            getId() {
                return console.error(et),
                -1
            },
            getNode() {
                return console.error(et),
                null
            },
            removeNodeFromMap() {
                console.error(et)
            },
            has() {
                return console.error(et),
                !1
            },
            reset() {
                console.error(et)
            }
        };
        function nt(e, t, n={}) {
            let s = null
              , r = 0;
            return function(...o) {
                const i = Date.now();
                r || !1 !== n.leading || (r = i);
                const a = t - (i - r)
                  , c = this;
                a <= 0 || a > t ? (s && (xt(s),
                s = null),
                r = i,
                e.apply(c, o)) : s || !1 === n.trailing || (s = Tt(( () => {
                    r = !1 === n.leading ? 0 : Date.now(),
                    s = null,
                    e.apply(c, o)
                }
                ), a))
            }
        }
        function st(e, t, n, s, r=window) {
            const o = r.Object.getOwnPropertyDescriptor(e, t);
            return r.Object.defineProperty(e, t, s ? n : {
                set(e) {
                    Tt(( () => {
                        n.set.call(this, e)
                    }
                    ), 0),
                    o && o.set && o.set.call(this, e)
                }
            }),
            () => st(e, t, o || {}, !0)
        }
        function rt(e, t, n) {
            try {
                if (!(t in e))
                    return () => {}
                    ;
                const s = e[t]
                  , r = n(s);
                return "function" == typeof r && (r.prototype = r.prototype || {},
                Object.defineProperties(r, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: s
                    }
                })),
                e[t] = r,
                () => {
                    e[t] = s
                }
            } catch (s) {
                return () => {}
            }
        }
        "undefined" != typeof window && window.Proxy && window.Reflect && (tt = new Proxy(tt,{
            get(e, t, n) {
                return "map" === t && console.error(et),
                Reflect.get(e, t, n)
            }
        }));
        let ot = Date.now;
        function it(e) {
            const t = e.document;
            return {
                left: t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : Qe([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollLeft]) || Qe([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollLeft]) || Qe([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollLeft]) || 0,
                top: t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : Qe([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollTop]) || Qe([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollTop]) || Qe([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollTop]) || 0
            }
        }
        function at() {
            return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
        }
        function ct() {
            return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
        }
        function lt(e) {
            if (!e)
                return null;
            const t = undefined;
            return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
        }
        function ut(e, t, n, s, r) {
            if (!e)
                return !1;
            const o = lt(e);
            if (!o)
                return !1;
            const i = ze(t, n);
            if (!r) {
                const e = s && o.matches(s);
                return i(o) && !e
            }
            const a = Ue(o, i);
            let c = -1;
            return !(a < 0) && (s && (c = Ue(o, ze(null, s))),
            a > -1 && c < 0 || a < c)
        }
        function dt(e, t) {
            return -1 !== t.getId(e)
        }
        function ht(e, t) {
            return t.getId(e) === Se
        }
        function pt(e, t) {
            if (X(e))
                return !1;
            const n = t.getId(e);
            return !t.has(n) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || pt(e.parentNode, t))
        }
        function mt(e) {
            return Boolean(e.changedTouches)
        }
        function ft(e=window) {
            "NodeList"in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach),
            "DOMTokenList"in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
            Node.prototype.contains || (Node.prototype.contains = (...e) => {
                let t = e[0];
                if (!(0 in e))
                    throw new TypeError("1 argument is required");
                do {
                    if (this === t)
                        return !0
                } while (t = t && t.parentNode);
                return !1
            }
            )
        }
        function yt(e, t) {
            return Boolean("IFRAME" === e.nodeName && t.getMeta(e))
        }
        function gt(e, t) {
            return Boolean("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
        }
        function St(e) {
            return Boolean(Qe([e, "optionalAccess", e => e.shadowRoot]))
        }
        /[1-9][0-9]{12}/.test(Date.now().toString()) || (ot = () => (new Date).getTime());
        class kt {
            constructor() {
                this.id = 1,
                this.styleIDMap = new WeakMap,
                this.idStyleMap = new Map
            }
            getId(e) {
                return (0,
                s.S)(this.styleIDMap.get(e), ( () => -1))
            }
            has(e) {
                return this.styleIDMap.has(e)
            }
            add(e, t) {
                if (this.has(e))
                    return this.getId(e);
                let n;
                return n = void 0 === t ? this.id++ : t,
                this.styleIDMap.set(e, n),
                this.idStyleMap.set(n, e),
                n
            }
            getStyle(e) {
                return this.idStyleMap.get(e) || null
            }
            reset() {
                this.styleIDMap = new WeakMap,
                this.idStyleMap = new Map,
                this.id = 1
            }
            generateId() {
                return this.id++
            }
        }
        function vt(e) {
            let t = null;
            return Qe([e, "access", e => e.getRootNode, "optionalCall", e => e(), "optionalAccess", e => e.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host),
            t
        }
        function bt(e) {
            let t = e, n;
            for (; n = vt(t); )
                t = n;
            return t
        }
        function _t(e) {
            const t = e.ownerDocument;
            if (!t)
                return !1;
            const n = bt(e);
            return t.contains(n)
        }
        function wt(e) {
            const t = e.ownerDocument;
            return !!t && (t.contains(e) || _t(e))
        }
        const It = {};
        function Ct(e) {
            const t = It[e];
            if (t)
                return t;
            const n = window.document;
            let s = window[e];
            if (n && "function" == typeof n.createElement)
                try {
                    const t = n.createElement("iframe");
                    t.hidden = !0,
                    n.head.appendChild(t);
                    const r = t.contentWindow;
                    r && r[e] && (s = r[e]),
                    n.head.removeChild(t)
                } catch (ws) {}
            return It[e] = s.bind(window)
        }
        function Et(...e) {
            return Ct("requestAnimationFrame")(...e)
        }
        function Tt(...e) {
            return Ct("setTimeout")(...e)
        }
        function xt(...e) {
            return Ct("clearTimeout")(...e)
        }
        var Mt = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded",
        e[e.Load = 1] = "Load",
        e[e.FullSnapshot = 2] = "FullSnapshot",
        e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot",
        e[e.Meta = 4] = "Meta",
        e[e.Custom = 5] = "Custom",
        e[e.Plugin = 6] = "Plugin",
        e))(Mt || {})
          , Rt = (e => (e[e.Mutation = 0] = "Mutation",
        e[e.MouseMove = 1] = "MouseMove",
        e[e.MouseInteraction = 2] = "MouseInteraction",
        e[e.Scroll = 3] = "Scroll",
        e[e.ViewportResize = 4] = "ViewportResize",
        e[e.Input = 5] = "Input",
        e[e.TouchMove = 6] = "TouchMove",
        e[e.MediaInteraction = 7] = "MediaInteraction",
        e[e.StyleSheetRule = 8] = "StyleSheetRule",
        e[e.CanvasMutation = 9] = "CanvasMutation",
        e[e.Font = 10] = "Font",
        e[e.Log = 11] = "Log",
        e[e.Drag = 12] = "Drag",
        e[e.StyleDeclaration = 13] = "StyleDeclaration",
        e[e.Selection = 14] = "Selection",
        e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet",
        e[e.CustomElement = 16] = "CustomElement",
        e))(Rt || {})
          , At = (e => (e[e.MouseUp = 0] = "MouseUp",
        e[e.MouseDown = 1] = "MouseDown",
        e[e.Click = 2] = "Click",
        e[e.ContextMenu = 3] = "ContextMenu",
        e[e.DblClick = 4] = "DblClick",
        e[e.Focus = 5] = "Focus",
        e[e.Blur = 6] = "Blur",
        e[e.TouchStart = 7] = "TouchStart",
        e[e.TouchMove_Departed = 8] = "TouchMove_Departed",
        e[e.TouchEnd = 9] = "TouchEnd",
        e[e.TouchCancel = 10] = "TouchCancel",
        e))(At || {})
          , Ot = (e => (e[e.Mouse = 0] = "Mouse",
        e[e.Pen = 1] = "Pen",
        e[e.Touch = 2] = "Touch",
        e))(Ot || {});
        function Dt(e) {
            let t, n = e[0], s = 1;
            for (; s < e.length; ) {
                const r = e[s]
                  , o = e[s + 1];
                if (s += 2,
                ("optionalAccess" === r || "optionalCall" === r) && null == n)
                    return;
                "access" === r || "optionalAccess" === r ? (t = n,
                n = o(n)) : "call" !== r && "optionalCall" !== r || (n = o(( (...e) => n.call(t, ...e))),
                t = void 0)
            }
            return n
        }
        function Lt(e) {
            return "__ln"in e
        }
        class Nt {
            constructor() {
                this.length = 0,
                this.head = null,
                this.tail = null
            }
            get(e) {
                if (e >= this.length)
                    throw new Error("Position outside of list range");
                let t = this.head;
                for (let n = 0; n < e; n++)
                    t = Dt([t, "optionalAccess", e => e.next]) || null;
                return t
            }
            addNode(e) {
                const t = {
                    value: e,
                    previous: null,
                    next: null
                };
                if (e.__ln = t,
                e.previousSibling && Lt(e.previousSibling)) {
                    const n = e.previousSibling.__ln.next;
                    t.next = n,
                    t.previous = e.previousSibling.__ln,
                    e.previousSibling.__ln.next = t,
                    n && (n.previous = t)
                } else if (e.nextSibling && Lt(e.nextSibling) && e.nextSibling.__ln.previous) {
                    const n = e.nextSibling.__ln.previous;
                    t.previous = n,
                    t.next = e.nextSibling.__ln,
                    e.nextSibling.__ln.previous = t,
                    n && (n.next = t)
                } else
                    this.head && (this.head.previous = t),
                    t.next = this.head,
                    this.head = t;
                null === t.next && (this.tail = t),
                this.length++
            }
            removeNode(e) {
                const t = e.__ln;
                this.head && (t.previous ? (t.previous.next = t.next,
                t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next,
                this.head ? this.head.previous = null : this.tail = null),
                e.__ln && delete e.__ln,
                this.length--)
            }
        }
        const Ft = (e, t) => `${e}@${t}`;
        class Bt {
            constructor() {
                this.frozen = !1,
                this.locked = !1,
                this.texts = [],
                this.attributes = [],
                this.attributeMap = new WeakMap,
                this.removes = [],
                this.mapRemoves = [],
                this.movedMap = {},
                this.addedSet = new Set,
                this.movedSet = new Set,
                this.droppedSet = new Set,
                this.processMutations = e => {
                    e.forEach(this.processMutation),
                    this.emit()
                }
                ,
                this.emit = () => {
                    if (this.frozen || this.locked)
                        return;
                    const e = []
                      , t = new Set
                      , n = new Nt
                      , s = e => {
                        let t = e
                          , n = Se;
                        for (; n === Se; )
                            t = t && t.nextSibling,
                            n = t && this.mirror.getId(t);
                        return n
                    }
                      , r = r => {
                        if (!r.parentNode || !wt(r))
                            return;
                        const o = X(r.parentNode) ? this.mirror.getId(vt(r)) : this.mirror.getId(r.parentNode)
                          , i = s(r);
                        if (-1 === o || -1 === i)
                            return n.addNode(r);
                        const a = Ge(r, {
                            doc: this.doc,
                            mirror: this.mirror,
                            blockClass: this.blockClass,
                            blockSelector: this.blockSelector,
                            maskAllText: this.maskAllText,
                            unblockSelector: this.unblockSelector,
                            maskTextClass: this.maskTextClass,
                            unmaskTextClass: this.unmaskTextClass,
                            maskTextSelector: this.maskTextSelector,
                            unmaskTextSelector: this.unmaskTextSelector,
                            skipChild: !0,
                            newlyAddedElement: !0,
                            inlineStylesheet: this.inlineStylesheet,
                            maskInputOptions: this.maskInputOptions,
                            maskAttributeFn: this.maskAttributeFn,
                            maskTextFn: this.maskTextFn,
                            maskInputFn: this.maskInputFn,
                            slimDOMOptions: this.slimDOMOptions,
                            dataURLOptions: this.dataURLOptions,
                            recordCanvas: this.recordCanvas,
                            inlineImages: this.inlineImages,
                            onSerialize: e => {
                                yt(e, this.mirror) && this.iframeManager.addIframe(e),
                                gt(e, this.mirror) && this.stylesheetManager.trackLinkElement(e),
                                St(r) && this.shadowDomManager.addShadowRoot(r.shadowRoot, this.doc)
                            }
                            ,
                            onIframeLoad: (e, t) => {
                                this.iframeManager.attachIframe(e, t),
                                this.shadowDomManager.observeAttachShadow(e)
                            }
                            ,
                            onStylesheetLoad: (e, t) => {
                                this.stylesheetManager.attachLinkElement(e, t)
                            }
                        });
                        a && (e.push({
                            parentId: o,
                            nextId: i,
                            node: a
                        }),
                        t.add(a.id))
                    }
                    ;
                    for (; this.mapRemoves.length; )
                        this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                    for (const a of this.movedSet)
                        Ut(this.removes, a, this.mirror) && !this.movedSet.has(a.parentNode) || r(a);
                    for (const a of this.addedSet)
                        Wt(this.droppedSet, a) || Ut(this.removes, a, this.mirror) ? Wt(this.movedSet, a) ? r(a) : this.droppedSet.add(a) : r(a);
                    let o = null;
                    for (; n.length; ) {
                        let e = null;
                        if (o) {
                            const t = this.mirror.getId(o.value.parentNode)
                              , n = s(o.value);
                            -1 !== t && -1 !== n && (e = o)
                        }
                        if (!e) {
                            let t = n.tail;
                            for (; t; ) {
                                const n = t;
                                if (t = t.previous,
                                n) {
                                    const t = this.mirror.getId(n.value.parentNode)
                                      , r = undefined;
                                    if (-1 === s(n.value))
                                        continue;
                                    if (-1 !== t) {
                                        e = n;
                                        break
                                    }
                                    {
                                        const t = n.value;
                                        if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                            const s = t.parentNode.host
                                              , r = undefined;
                                            if (-1 !== this.mirror.getId(s)) {
                                                e = n;
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (!e) {
                            for (; n.head; )
                                n.removeNode(n.head.value);
                            break
                        }
                        o = e.previous,
                        n.removeNode(e.value),
                        r(e.value)
                    }
                    const i = {
                        texts: this.texts.map((e => ({
                            id: this.mirror.getId(e.node),
                            value: e.value
                        }))).filter((e => !t.has(e.id))).filter((e => this.mirror.has(e.id))),
                        attributes: this.attributes.map((e => {
                            const {attributes: t} = e;
                            if ("string" == typeof t.style) {
                                const n = JSON.stringify(e.styleDiff)
                                  , s = JSON.stringify(e._unchangedStyles);
                                n.length < t.style.length && (n + s).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                            }
                            return {
                                id: this.mirror.getId(e.node),
                                attributes: t
                            }
                        }
                        )).filter((e => !t.has(e.id))).filter((e => this.mirror.has(e.id))),
                        removes: this.removes,
                        adds: e
                    };
                    (i.texts.length || i.attributes.length || i.removes.length || i.adds.length) && (this.texts = [],
                    this.attributes = [],
                    this.attributeMap = new WeakMap,
                    this.removes = [],
                    this.addedSet = new Set,
                    this.movedSet = new Set,
                    this.droppedSet = new Set,
                    this.movedMap = {},
                    this.mutationCb(i))
                }
                ,
                this.processMutation = e => {
                    if (!ht(e.target, this.mirror))
                        switch (e.type) {
                        case "characterData":
                            {
                                const t = e.target.textContent;
                                ut(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || t === e.oldValue || this.texts.push({
                                    value: We(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t, lt(e.target)) : t.replace(/[\S]/g, "*") : t,
                                    node: e.target
                                });
                                break
                            }
                        case "attributes":
                            {
                                const t = e.target;
                                let n = e.attributeName
                                  , s = e.target.getAttribute(n);
                                if ("value" === n) {
                                    const n = me(t)
                                      , r = t.tagName;
                                    s = fe(t, r, n);
                                    const o = ce({
                                        maskInputOptions: this.maskInputOptions,
                                        tagName: r,
                                        type: n
                                    })
                                      , i = undefined;
                                    s = le({
                                        isMasked: We(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, o),
                                        element: t,
                                        value: s,
                                        maskInputFn: this.maskInputFn
                                    })
                                }
                                if (ut(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || s === e.oldValue)
                                    return;
                                let r = this.attributeMap.get(e.target);
                                if ("IFRAME" === t.tagName && "src" === n && !this.keepIframeSrcFn(s)) {
                                    if (t.contentDocument)
                                        return;
                                    n = "rr_src"
                                }
                                if (r || (r = {
                                    node: e.target,
                                    attributes: {},
                                    styleDiff: {},
                                    _unchangedStyles: {}
                                },
                                this.attributes.push(r),
                                this.attributeMap.set(e.target, r)),
                                "type" === n && "INPUT" === t.tagName && "password" === (e.oldValue || "").toLowerCase() && t.setAttribute("data-rr-is-password", "true"),
                                !Fe(t.tagName, n) && (r.attributes[n] = Ne(this.doc, ue(t.tagName), ue(n), s, t, this.maskAttributeFn),
                                "style" === n)) {
                                    if (!this.unattachedDoc)
                                        try {
                                            this.unattachedDoc = document.implementation.createHTMLDocument()
                                        } catch (ws) {
                                            this.unattachedDoc = this.doc
                                        }
                                    const n = this.unattachedDoc.createElement("span");
                                    e.oldValue && n.setAttribute("style", e.oldValue);
                                    for (const e of Array.from(t.style)) {
                                        const s = t.style.getPropertyValue(e)
                                          , o = t.style.getPropertyPriority(e);
                                        s !== n.style.getPropertyValue(e) || o !== n.style.getPropertyPriority(e) ? r.styleDiff[e] = "" === o ? s : [s, o] : r._unchangedStyles[e] = [s, o]
                                    }
                                    for (const e of Array.from(n.style))
                                        "" === t.style.getPropertyValue(e) && (r.styleDiff[e] = !1)
                                }
                                break
                            }
                        case "childList":
                            if (ut(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0))
                                return;
                            e.addedNodes.forEach((t => this.genAdds(t, e.target))),
                            e.removedNodes.forEach((t => {
                                const n = this.mirror.getId(t)
                                  , s = X(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                                ut(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || ht(t, this.mirror) || !dt(t, this.mirror) || (this.addedSet.has(t) ? (Pt(this.addedSet, t),
                                this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === n || pt(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[Ft(n, s)] ? Pt(this.movedSet, t) : this.removes.push({
                                    parentId: s,
                                    id: n,
                                    isShadow: !(!X(e.target) || !Q(e.target)) || void 0
                                })),
                                this.mapRemoves.push(t))
                            }
                            ))
                        }
                }
                ,
                this.genAdds = (e, t) => {
                    if (!this.processedNodeManager.inOtherBuffer(e, this) && !this.addedSet.has(e) && !this.movedSet.has(e)) {
                        if (this.mirror.hasNode(e)) {
                            if (ht(e, this.mirror))
                                return;
                            this.movedSet.add(e);
                            let n = null;
                            t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)),
                            n && -1 !== n && (this.movedMap[Ft(this.mirror.getId(e), n)] = !0)
                        } else
                            this.addedSet.add(e),
                            this.droppedSet.delete(e);
                        ut(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (e.childNodes.forEach((e => this.genAdds(e))),
                        St(e) && e.shadowRoot.childNodes.forEach((t => {
                            this.processedNodeManager.add(t, this),
                            this.genAdds(t, e)
                        }
                        )))
                    }
                }
            }
            init(e) {
                ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((t => {
                    this[t] = e[t]
                }
                ))
            }
            freeze() {
                this.frozen = !0,
                this.canvasManager.freeze()
            }
            unfreeze() {
                this.frozen = !1,
                this.canvasManager.unfreeze(),
                this.emit()
            }
            isFrozen() {
                return this.frozen
            }
            lock() {
                this.locked = !0,
                this.canvasManager.lock()
            }
            unlock() {
                this.locked = !1,
                this.canvasManager.unlock(),
                this.emit()
            }
            reset() {
                this.shadowDomManager.reset(),
                this.canvasManager.reset()
            }
        }
        function Pt(e, t) {
            e.delete(t),
            t.childNodes.forEach((t => Pt(e, t)))
        }
        function Ut(e, t, n) {
            return 0 !== e.length && zt(e, t, n)
        }
        function zt(e, t, n) {
            const {parentNode: s} = t;
            if (!s)
                return !1;
            const r = n.getId(s);
            return !!e.some((e => e.id === r)) || zt(e, s, n)
        }
        function Wt(e, t) {
            return 0 !== e.size && Ht(e, t)
        }
        function Ht(e, t) {
            const {parentNode: n} = t;
            return !!n && (!!e.has(n) || Ht(e, n))
        }
        let jt;
        function $t(e) {
            jt = e
        }
        function qt() {
            jt = void 0
        }
        const Kt = e => {
            if (!jt)
                return e;
            const t = undefined;
            return (...t) => {
                try {
                    return e(...t)
                } catch (n) {
                    if (jt && !0 === jt(n))
                        return () => {}
                        ;
                    throw n
                }
            }
        }
        ;
        function Vt(e) {
            let t, n = e[0], s = 1;
            for (; s < e.length; ) {
                const r = e[s]
                  , o = e[s + 1];
                if (s += 2,
                ("optionalAccess" === r || "optionalCall" === r) && null == n)
                    return;
                "access" === r || "optionalAccess" === r ? (t = n,
                n = o(n)) : "call" !== r && "optionalCall" !== r || (n = o(( (...e) => n.call(t, ...e))),
                t = void 0)
            }
            return n
        }
        const Jt = [];
        function Yt(e) {
            try {
                if ("composedPath"in e) {
                    const t = e.composedPath();
                    if (t.length)
                        return t[0]
                } else if ("path"in e && e.path.length)
                    return e.path[0]
            } catch (t) {}
            return e && e.target
        }
        function Gt(e, t) {
            const n = new Bt;
            Jt.push(n),
            n.init(e);
            let s = window.MutationObserver || window.__rrMutationObserver;
            const r = Vt([window, "optionalAccess", e => e.Zone, "optionalAccess", e => e.__symbol__, "optionalCall", e => e("MutationObserver")]);
            r && window[r] && (s = window[r]);
            const o = new s(Kt((t => {
                e.onMutation && !1 === e.onMutation(t) || n.processMutations.bind(n)(t)
            }
            )));
            return o.observe(t, {
                attributes: !0,
                attributeOldValue: !0,
                characterData: !0,
                characterDataOldValue: !0,
                childList: !0,
                subtree: !0
            }),
            o
        }
        function Xt({mousemoveCb: e, sampling: t, doc: n, mirror: s}) {
            if (!1 === t.mousemove)
                return () => {}
                ;
            const r = "number" == typeof t.mousemove ? t.mousemove : 50
              , o = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500;
            let i = [], a;
            const c = nt(Kt((t => {
                const n = Date.now() - a;
                e(i.map((e => (e.timeOffset -= n,
                e))), t),
                i = [],
                a = null
            }
            )), o)
              , l = Kt(nt(Kt((e => {
                const t = Yt(e)
                  , {clientX: n, clientY: r} = mt(e) ? e.changedTouches[0] : e;
                a || (a = ot()),
                i.push({
                    x: n,
                    y: r,
                    id: s.getId(t),
                    timeOffset: ot() - a
                }),
                c("undefined" != typeof DragEvent && e instanceof DragEvent ? Rt.Drag : e instanceof MouseEvent ? Rt.MouseMove : Rt.TouchMove)
            }
            )), r, {
                trailing: !1
            }))
              , u = [Ze("mousemove", l, n), Ze("touchmove", l, n), Ze("drag", l, n)];
            return Kt(( () => {
                u.forEach((e => e()))
            }
            ))
        }
        function Qt({mouseInteractionCb: e, doc: t, mirror: n, blockClass: s, blockSelector: r, unblockSelector: o, sampling: i}) {
            if (!1 === i.mouseInteraction)
                return () => {}
                ;
            const a = !0 === i.mouseInteraction || void 0 === i.mouseInteraction ? {} : i.mouseInteraction
              , c = [];
            let l = null;
            const u = t => i => {
                const a = Yt(i);
                if (ut(a, s, r, o, !0))
                    return;
                let c = null
                  , u = t;
                if ("pointerType"in i) {
                    switch (i.pointerType) {
                    case "mouse":
                        c = Ot.Mouse;
                        break;
                    case "touch":
                        c = Ot.Touch;
                        break;
                    case "pen":
                        c = Ot.Pen
                    }
                    c === Ot.Touch ? At[t] === At.MouseDown ? u = "TouchStart" : At[t] === At.MouseUp && (u = "TouchEnd") : Ot.Pen
                } else
                    mt(i) && (c = Ot.Touch);
                null !== c ? (l = c,
                (u.startsWith("Touch") && c === Ot.Touch || u.startsWith("Mouse") && c === Ot.Mouse) && (c = null)) : At[t] === At.Click && (c = l,
                l = null);
                const d = mt(i) ? i.changedTouches[0] : i;
                if (!d)
                    return;
                const h = n.getId(a)
                  , {clientX: p, clientY: m} = d;
                Kt(e)({
                    type: At[u],
                    id: h,
                    x: p,
                    y: m,
                    ...null !== c && {
                        pointerType: c
                    }
                })
            }
            ;
            return Object.keys(At).filter((e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== a[e])).forEach((e => {
                let n = ue(e);
                const s = u(e);
                if (window.PointerEvent)
                    switch (At[e]) {
                    case At.MouseDown:
                    case At.MouseUp:
                        n = n.replace("mouse", "pointer");
                        break;
                    case At.TouchStart:
                    case At.TouchEnd:
                        return
                    }
                c.push(Ze(n, s, t))
            }
            )),
            Kt(( () => {
                c.forEach((e => e()))
            }
            ))
        }
        function Zt({scrollCb: e, doc: t, mirror: n, blockClass: s, blockSelector: r, unblockSelector: o, sampling: i}) {
            const a = undefined;
            return Ze("scroll", Kt(nt(Kt((i => {
                const a = Yt(i);
                if (!a || ut(a, s, r, o, !0))
                    return;
                const c = n.getId(a);
                if (a === t && t.defaultView) {
                    const n = it(t.defaultView);
                    e({
                        id: c,
                        x: n.left,
                        y: n.top
                    })
                } else
                    e({
                        id: c,
                        x: a.scrollLeft,
                        y: a.scrollTop
                    })
            }
            )), i.scroll || 100)), t)
        }
        function en({viewportResizeCb: e}, {win: t}) {
            let n = -1
              , s = -1;
            const r = undefined;
            return Ze("resize", Kt(nt(Kt(( () => {
                const t = at()
                  , r = ct();
                n === t && s === r || (e({
                    width: Number(r),
                    height: Number(t)
                }),
                n = t,
                s = r)
            }
            )), 200)), t)
        }
        const tn = ["INPUT", "TEXTAREA", "SELECT"]
          , nn = new WeakMap;
        function sn({inputCb: e, doc: t, mirror: n, blockClass: s, blockSelector: r, unblockSelector: o, ignoreClass: i, ignoreSelector: a, maskInputOptions: c, maskInputFn: l, sampling: u, userTriggeredOnInput: d, maskTextClass: h, unmaskTextClass: p, maskTextSelector: m, unmaskTextSelector: f}) {
            function y(e) {
                let n = Yt(e);
                const u = e.isTrusted
                  , y = n && de(n.tagName);
                if ("OPTION" === y && (n = n.parentElement),
                !n || !y || tn.indexOf(y) < 0 || ut(n, s, r, o, !0))
                    return;
                const S = n;
                if (S.classList.contains(i) || a && S.matches(a))
                    return;
                const k = me(n);
                let v = fe(S, y, k)
                  , b = !1;
                const _ = ce({
                    maskInputOptions: c,
                    tagName: y,
                    type: k
                })
                  , w = We(n, h, m, p, f, _);
                "radio" !== k && "checkbox" !== k || (b = n.checked),
                v = le({
                    isMasked: w,
                    element: n,
                    value: v,
                    maskInputFn: l
                }),
                g(n, d ? {
                    text: v,
                    isChecked: b,
                    userTriggered: u
                } : {
                    text: v,
                    isChecked: b
                });
                const I = n.name;
                "radio" === k && I && b && t.querySelectorAll(`input[type="radio"][name="${I}"]`).forEach((e => {
                    if (e !== n) {
                        const t = le({
                            isMasked: w,
                            element: e,
                            value: fe(e, y, k),
                            maskInputFn: l
                        });
                        g(e, d ? {
                            text: t,
                            isChecked: !b,
                            userTriggered: !1
                        } : {
                            text: t,
                            isChecked: !b
                        })
                    }
                }
                ))
            }
            function g(t, s) {
                const r = nn.get(t);
                if (!r || r.text !== s.text || r.isChecked !== s.isChecked) {
                    nn.set(t, s);
                    const r = n.getId(t);
                    Kt(e)({
                        ...s,
                        id: r
                    })
                }
            }
            const S = undefined
              , k = ("last" === u.input ? ["change"] : ["input", "change"]).map((e => Ze(e, Kt(y), t)))
              , v = t.defaultView;
            if (!v)
                return () => {
                    k.forEach((e => e()))
                }
                ;
            const b = v.Object.getOwnPropertyDescriptor(v.HTMLInputElement.prototype, "value")
              , _ = [[v.HTMLInputElement.prototype, "value"], [v.HTMLInputElement.prototype, "checked"], [v.HTMLSelectElement.prototype, "value"], [v.HTMLTextAreaElement.prototype, "value"], [v.HTMLSelectElement.prototype, "selectedIndex"], [v.HTMLOptionElement.prototype, "selected"]];
            return b && b.set && k.push(..._.map((e => st(e[0], e[1], {
                set() {
                    Kt(y)({
                        target: this,
                        isTrusted: !1
                    })
                }
            }, !1, v)))),
            Kt(( () => {
                k.forEach((e => e()))
            }
            ))
        }
        function rn(e) {
            const t = undefined;
            function n(e, t) {
                if (fn("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || fn("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || fn("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || fn("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
                    const n = undefined
                      , s = Array.from(e.parentRule.cssRules).indexOf(e);
                    t.unshift(s)
                } else if (e.parentStyleSheet) {
                    const n = undefined
                      , s = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
                    t.unshift(s)
                }
                return t
            }
            return n(e, [])
        }
        function on(e, t, n) {
            let s, r;
            return e ? (e.ownerNode ? s = t.getId(e.ownerNode) : r = n.getId(e),
            {
                styleId: r,
                id: s
            }) : {}
        }
        function an({styleSheetRuleCb: e, mirror: t, stylesheetManager: n}, {win: s}) {
            if (!s.CSSStyleSheet || !s.CSSStyleSheet.prototype)
                return () => {}
                ;
            const r = s.CSSStyleSheet.prototype.insertRule;
            s.CSSStyleSheet.prototype.insertRule = new Proxy(r,{
                apply: Kt(( (s, r, o) => {
                    const [i,a] = o
                      , {id: c, styleId: l} = on(r, t, n.styleMirror);
                    return (c && -1 !== c || l && -1 !== l) && e({
                        id: c,
                        styleId: l,
                        adds: [{
                            rule: i,
                            index: a
                        }]
                    }),
                    s.apply(r, o)
                }
                ))
            });
            const o = s.CSSStyleSheet.prototype.deleteRule;
            let i, a;
            s.CSSStyleSheet.prototype.deleteRule = new Proxy(o,{
                apply: Kt(( (s, r, o) => {
                    const [i] = o
                      , {id: a, styleId: c} = on(r, t, n.styleMirror);
                    return (a && -1 !== a || c && -1 !== c) && e({
                        id: a,
                        styleId: c,
                        removes: [{
                            index: i
                        }]
                    }),
                    s.apply(r, o)
                }
                ))
            }),
            s.CSSStyleSheet.prototype.replace && (i = s.CSSStyleSheet.prototype.replace,
            s.CSSStyleSheet.prototype.replace = new Proxy(i,{
                apply: Kt(( (s, r, o) => {
                    const [i] = o
                      , {id: a, styleId: c} = on(r, t, n.styleMirror);
                    return (a && -1 !== a || c && -1 !== c) && e({
                        id: a,
                        styleId: c,
                        replace: i
                    }),
                    s.apply(r, o)
                }
                ))
            })),
            s.CSSStyleSheet.prototype.replaceSync && (a = s.CSSStyleSheet.prototype.replaceSync,
            s.CSSStyleSheet.prototype.replaceSync = new Proxy(a,{
                apply: Kt(( (s, r, o) => {
                    const [i] = o
                      , {id: a, styleId: c} = on(r, t, n.styleMirror);
                    return (a && -1 !== a || c && -1 !== c) && e({
                        id: a,
                        styleId: c,
                        replaceSync: i
                    }),
                    s.apply(r, o)
                }
                ))
            }));
            const c = {};
            yn("CSSGroupingRule") ? c.CSSGroupingRule = s.CSSGroupingRule : (yn("CSSMediaRule") && (c.CSSMediaRule = s.CSSMediaRule),
            yn("CSSConditionRule") && (c.CSSConditionRule = s.CSSConditionRule),
            yn("CSSSupportsRule") && (c.CSSSupportsRule = s.CSSSupportsRule));
            const l = {};
            return Object.entries(c).forEach(( ([s,r]) => {
                l[s] = {
                    insertRule: r.prototype.insertRule,
                    deleteRule: r.prototype.deleteRule
                },
                r.prototype.insertRule = new Proxy(l[s].insertRule,{
                    apply: Kt(( (s, r, o) => {
                        const [i,a] = o
                          , {id: c, styleId: l} = on(r.parentStyleSheet, t, n.styleMirror);
                        return (c && -1 !== c || l && -1 !== l) && e({
                            id: c,
                            styleId: l,
                            adds: [{
                                rule: i,
                                index: [...rn(r), a || 0]
                            }]
                        }),
                        s.apply(r, o)
                    }
                    ))
                }),
                r.prototype.deleteRule = new Proxy(l[s].deleteRule,{
                    apply: Kt(( (s, r, o) => {
                        const [i] = o
                          , {id: a, styleId: c} = on(r.parentStyleSheet, t, n.styleMirror);
                        return (a && -1 !== a || c && -1 !== c) && e({
                            id: a,
                            styleId: c,
                            removes: [{
                                index: [...rn(r), i]
                            }]
                        }),
                        s.apply(r, o)
                    }
                    ))
                })
            }
            )),
            Kt(( () => {
                s.CSSStyleSheet.prototype.insertRule = r,
                s.CSSStyleSheet.prototype.deleteRule = o,
                i && (s.CSSStyleSheet.prototype.replace = i),
                a && (s.CSSStyleSheet.prototype.replaceSync = a),
                Object.entries(c).forEach(( ([e,t]) => {
                    t.prototype.insertRule = l[e].insertRule,
                    t.prototype.deleteRule = l[e].deleteRule
                }
                ))
            }
            ))
        }
        function cn({mirror: e, stylesheetManager: t}, n) {
            let s = null;
            s = "#document" === n.nodeName ? e.getId(n) : e.getId(n.host);
            const r = "#document" === n.nodeName ? Vt([n, "access", e => e.defaultView, "optionalAccess", e => e.Document]) : Vt([n, "access", e => e.ownerDocument, "optionalAccess", e => e.defaultView, "optionalAccess", e => e.ShadowRoot])
              , o = Vt([r, "optionalAccess", e => e.prototype]) ? Object.getOwnPropertyDescriptor(Vt([r, "optionalAccess", e => e.prototype]), "adoptedStyleSheets") : void 0;
            return null !== s && -1 !== s && r && o ? (Object.defineProperty(n, "adoptedStyleSheets", {
                configurable: o.configurable,
                enumerable: o.enumerable,
                get() {
                    return Vt([o, "access", e => e.get, "optionalAccess", e => e.call, "call", e => e(this)])
                },
                set(e) {
                    const n = Vt([o, "access", e => e.set, "optionalAccess", e => e.call, "call", t => t(this, e)]);
                    if (null !== s && -1 !== s)
                        try {
                            t.adoptStyleSheets(e, s)
                        } catch (ws) {}
                    return n
                }
            }),
            Kt(( () => {
                Object.defineProperty(n, "adoptedStyleSheets", {
                    configurable: o.configurable,
                    enumerable: o.enumerable,
                    get: o.get,
                    set: o.set
                })
            }
            ))) : () => {}
        }
        function ln({styleDeclarationCb: e, mirror: t, ignoreCSSAttributes: n, stylesheetManager: s}, {win: r}) {
            const o = r.CSSStyleDeclaration.prototype.setProperty;
            r.CSSStyleDeclaration.prototype.setProperty = new Proxy(o,{
                apply: Kt(( (r, i, a) => {
                    const [c,l,u] = a;
                    if (n.has(c))
                        return o.apply(i, [c, l, u]);
                    const {id: d, styleId: h} = on(Vt([i, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), t, s.styleMirror);
                    return (d && -1 !== d || h && -1 !== h) && e({
                        id: d,
                        styleId: h,
                        set: {
                            property: c,
                            value: l,
                            priority: u
                        },
                        index: rn(i.parentRule)
                    }),
                    r.apply(i, a)
                }
                ))
            });
            const i = r.CSSStyleDeclaration.prototype.removeProperty;
            return r.CSSStyleDeclaration.prototype.removeProperty = new Proxy(i,{
                apply: Kt(( (r, o, a) => {
                    const [c] = a;
                    if (n.has(c))
                        return i.apply(o, [c]);
                    const {id: l, styleId: u} = on(Vt([o, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), t, s.styleMirror);
                    return (l && -1 !== l || u && -1 !== u) && e({
                        id: l,
                        styleId: u,
                        remove: {
                            property: c
                        },
                        index: rn(o.parentRule)
                    }),
                    r.apply(o, a)
                }
                ))
            }),
            Kt(( () => {
                r.CSSStyleDeclaration.prototype.setProperty = o,
                r.CSSStyleDeclaration.prototype.removeProperty = i
            }
            ))
        }
        function un({mediaInteractionCb: e, blockClass: t, blockSelector: n, unblockSelector: s, mirror: r, sampling: o, doc: i}) {
            const a = Kt((i => nt(Kt((o => {
                const a = Yt(o);
                if (!a || ut(a, t, n, s, !0))
                    return;
                const {currentTime: c, volume: l, muted: u, playbackRate: d} = a;
                e({
                    type: i,
                    id: r.getId(a),
                    currentTime: c,
                    volume: l,
                    muted: u,
                    playbackRate: d
                })
            }
            )), o.media || 500)))
              , c = [Ze("play", a(0), i), Ze("pause", a(1), i), Ze("seeked", a(2), i), Ze("volumechange", a(3), i), Ze("ratechange", a(4), i)];
            return Kt(( () => {
                c.forEach((e => e()))
            }
            ))
        }
        function dn({fontCb: e, doc: t}) {
            const n = t.defaultView;
            if (!n)
                return () => {}
                ;
            const s = []
              , r = new WeakMap
              , o = n.FontFace;
            n.FontFace = function e(t, n, s) {
                const i = new o(t,n,s);
                return r.set(i, {
                    family: t,
                    buffer: "string" != typeof n,
                    descriptors: s,
                    fontSource: "string" == typeof n ? n : JSON.stringify(Array.from(new Uint8Array(n)))
                }),
                i
            }
            ;
            const i = rt(t.fonts, "add", (function(t) {
                return function(n) {
                    return Tt(Kt(( () => {
                        const t = r.get(n);
                        t && (e(t),
                        r.delete(n))
                    }
                    )), 0),
                    t.apply(this, [n])
                }
            }
            ));
            return s.push(( () => {
                n.FontFace = o
            }
            )),
            s.push(i),
            Kt(( () => {
                s.forEach((e => e()))
            }
            ))
        }
        function hn(e) {
            const {doc: t, mirror: n, blockClass: s, blockSelector: r, unblockSelector: o, selectionCb: i} = e;
            let a = !0;
            const c = Kt(( () => {
                const e = t.getSelection();
                if (!e || a && Vt([e, "optionalAccess", e => e.isCollapsed]))
                    return;
                a = e.isCollapsed || !1;
                const c = []
                  , l = e.rangeCount || 0;
                for (let t = 0; t < l; t++) {
                    const i = e.getRangeAt(t)
                      , {startContainer: a, startOffset: l, endContainer: u, endOffset: d} = i
                      , h = undefined;
                    ut(a, s, r, o, !0) || ut(u, s, r, o, !0) || c.push({
                        start: n.getId(a),
                        startOffset: l,
                        end: n.getId(u),
                        endOffset: d
                    })
                }
                i({
                    ranges: c
                })
            }
            ));
            return c(),
            Ze("selectionchange", c)
        }
        function pn({doc: e, customElementCb: t}) {
            const n = e.defaultView;
            if (!n || !n.customElements)
                return () => {}
                ;
            const s = undefined;
            return rt(n.customElements, "define", (function(e) {
                return function(n, s, r) {
                    try {
                        t({
                            define: {
                                name: n
                            }
                        })
                    } catch (ws) {}
                    return e.apply(this, [n, s, r])
                }
            }
            ))
        }
        function mn(e, t={}) {
            const n = e.doc.defaultView;
            if (!n)
                return () => {}
                ;
            const s = Gt(e, e.doc)
              , r = Xt(e)
              , o = Qt(e)
              , i = Zt(e)
              , a = en(e, {
                win: n
            })
              , c = sn(e)
              , l = un(e)
              , u = an(e, {
                win: n
            })
              , d = cn(e, e.doc)
              , h = ln(e, {
                win: n
            })
              , p = e.collectFonts ? dn(e) : () => {}
              , m = hn(e)
              , f = pn(e)
              , y = [];
            for (const g of e.plugins)
                y.push(g.observer(g.callback, n, g.options));
            return Kt(( () => {
                Jt.forEach((e => e.reset())),
                s.disconnect(),
                r(),
                o(),
                i(),
                a(),
                c(),
                l(),
                u(),
                d(),
                h(),
                p(),
                m(),
                f(),
                y.forEach((e => e()))
            }
            ))
        }
        function fn(e) {
            return void 0 !== window[e]
        }
        function yn(e) {
            return Boolean(void 0 !== window[e] && window[e].prototype && "insertRule"in window[e].prototype && "deleteRule"in window[e].prototype)
        }
        class gn {
            constructor(e) {
                this.generateIdFn = e,
                this.iframeIdToRemoteIdMap = new WeakMap,
                this.iframeRemoteIdToIdMap = new WeakMap
            }
            getId(e, t, n, s) {
                const r = n || this.getIdToRemoteIdMap(e)
                  , o = s || this.getRemoteIdToIdMap(e);
                let i = r.get(t);
                return i || (i = this.generateIdFn(),
                r.set(t, i),
                o.set(i, t)),
                i
            }
            getIds(e, t) {
                const n = this.getIdToRemoteIdMap(e)
                  , s = this.getRemoteIdToIdMap(e);
                return t.map((t => this.getId(e, t, n, s)))
            }
            getRemoteId(e, t, n) {
                const s = n || this.getRemoteIdToIdMap(e);
                if ("number" != typeof t)
                    return t;
                const r = s.get(t);
                return r || -1
            }
            getRemoteIds(e, t) {
                const n = this.getRemoteIdToIdMap(e);
                return t.map((t => this.getRemoteId(e, t, n)))
            }
            reset(e) {
                if (!e)
                    return this.iframeIdToRemoteIdMap = new WeakMap,
                    void (this.iframeRemoteIdToIdMap = new WeakMap);
                this.iframeIdToRemoteIdMap.delete(e),
                this.iframeRemoteIdToIdMap.delete(e)
            }
            getIdToRemoteIdMap(e) {
                let t = this.iframeIdToRemoteIdMap.get(e);
                return t || (t = new Map,
                this.iframeIdToRemoteIdMap.set(e, t)),
                t
            }
            getRemoteIdToIdMap(e) {
                let t = this.iframeRemoteIdToIdMap.get(e);
                return t || (t = new Map,
                this.iframeRemoteIdToIdMap.set(e, t)),
                t
            }
        }
        function Sn(e) {
            let t, n = e[0], s = 1;
            for (; s < e.length; ) {
                const r = e[s]
                  , o = e[s + 1];
                if (s += 2,
                ("optionalAccess" === r || "optionalCall" === r) && null == n)
                    return;
                "access" === r || "optionalAccess" === r ? (t = n,
                n = o(n)) : "call" !== r && "optionalCall" !== r || (n = o(( (...e) => n.call(t, ...e))),
                t = void 0)
            }
            return n
        }
        class kn {
            constructor() {
                this.crossOriginIframeMirror = new gn(ke),
                this.crossOriginIframeRootIdMap = new WeakMap
            }
            addIframe() {}
            addLoadListener() {}
            attachIframe() {}
        }
        class vn {
            constructor(e) {
                this.iframes = new WeakMap,
                this.crossOriginIframeMap = new WeakMap,
                this.crossOriginIframeMirror = new gn(ke),
                this.crossOriginIframeRootIdMap = new WeakMap,
                this.mutationCb = e.mutationCb,
                this.wrappedEmit = e.wrappedEmit,
                this.stylesheetManager = e.stylesheetManager,
                this.recordCrossOriginIframes = e.recordCrossOriginIframes,
                this.crossOriginIframeStyleMirror = new gn(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)),
                this.mirror = e.mirror,
                this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
            }
            addIframe(e) {
                this.iframes.set(e, !0),
                e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
            }
            addLoadListener(e) {
                this.loadListener = e
            }
            attachIframe(e, t) {
                this.mutationCb({
                    adds: [{
                        parentId: this.mirror.getId(e),
                        nextId: null,
                        node: t
                    }],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                }),
                Sn([this, "access", e => e.loadListener, "optionalCall", t => t(e)]),
                e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument))
            }
            handleMessage(e) {
                const t = e;
                if ("rrweb" !== t.data.type || t.origin !== t.data.origin)
                    return;
                const n = undefined;
                if (!e.source)
                    return;
                const s = this.crossOriginIframeMap.get(e.source);
                if (!s)
                    return;
                const r = this.transformCrossOriginEvent(s, t.data.event);
                r && this.wrappedEmit(r, t.data.isCheckout)
            }
            transformCrossOriginEvent(e, t) {
                switch (t.type) {
                case Mt.FullSnapshot:
                    {
                        this.crossOriginIframeMirror.reset(e),
                        this.crossOriginIframeStyleMirror.reset(e),
                        this.replaceIdOnNode(t.data.node, e);
                        const n = t.data.node.id;
                        return this.crossOriginIframeRootIdMap.set(e, n),
                        this.patchRootIdOnNode(t.data.node, n),
                        {
                            timestamp: t.timestamp,
                            type: Mt.IncrementalSnapshot,
                            data: {
                                source: Rt.Mutation,
                                adds: [{
                                    parentId: this.mirror.getId(e),
                                    nextId: null,
                                    node: t.data.node
                                }],
                                removes: [],
                                texts: [],
                                attributes: [],
                                isAttachIframe: !0
                            }
                        }
                    }
                case Mt.Meta:
                case Mt.Load:
                case Mt.DomContentLoaded:
                    return !1;
                case Mt.Plugin:
                    return t;
                case Mt.Custom:
                    return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]),
                    t;
                case Mt.IncrementalSnapshot:
                    switch (t.data.source) {
                    case Rt.Mutation:
                        return t.data.adds.forEach((t => {
                            this.replaceIds(t, e, ["parentId", "nextId", "previousId"]),
                            this.replaceIdOnNode(t.node, e);
                            const n = this.crossOriginIframeRootIdMap.get(e);
                            n && this.patchRootIdOnNode(t.node, n)
                        }
                        )),
                        t.data.removes.forEach((t => {
                            this.replaceIds(t, e, ["parentId", "id"])
                        }
                        )),
                        t.data.attributes.forEach((t => {
                            this.replaceIds(t, e, ["id"])
                        }
                        )),
                        t.data.texts.forEach((t => {
                            this.replaceIds(t, e, ["id"])
                        }
                        )),
                        t;
                    case Rt.Drag:
                    case Rt.TouchMove:
                    case Rt.MouseMove:
                        return t.data.positions.forEach((t => {
                            this.replaceIds(t, e, ["id"])
                        }
                        )),
                        t;
                    case Rt.ViewportResize:
                        return !1;
                    case Rt.MediaInteraction:
                    case Rt.MouseInteraction:
                    case Rt.Scroll:
                    case Rt.CanvasMutation:
                    case Rt.Input:
                        return this.replaceIds(t.data, e, ["id"]),
                        t;
                    case Rt.StyleSheetRule:
                    case Rt.StyleDeclaration:
                        return this.replaceIds(t.data, e, ["id"]),
                        this.replaceStyleIds(t.data, e, ["styleId"]),
                        t;
                    case Rt.Font:
                        return t;
                    case Rt.Selection:
                        return t.data.ranges.forEach((t => {
                            this.replaceIds(t, e, ["start", "end"])
                        }
                        )),
                        t;
                    case Rt.AdoptedStyleSheet:
                        return this.replaceIds(t.data, e, ["id"]),
                        this.replaceStyleIds(t.data, e, ["styleIds"]),
                        Sn([t, "access", e => e.data, "access", e => e.styles, "optionalAccess", e => e.forEach, "call", t => t((t => {
                            this.replaceStyleIds(t, e, ["styleId"])
                        }
                        ))]),
                        t
                    }
                }
                return !1
            }
            replace(e, t, n, s) {
                for (const r of s)
                    (Array.isArray(t[r]) || "number" == typeof t[r]) && (Array.isArray(t[r]) ? t[r] = e.getIds(n, t[r]) : t[r] = e.getId(n, t[r]));
                return t
            }
            replaceIds(e, t, n) {
                return this.replace(this.crossOriginIframeMirror, e, t, n)
            }
            replaceStyleIds(e, t, n) {
                return this.replace(this.crossOriginIframeStyleMirror, e, t, n)
            }
            replaceIdOnNode(e, t) {
                this.replaceIds(e, t, ["id", "rootId"]),
                "childNodes"in e && e.childNodes.forEach((e => {
                    this.replaceIdOnNode(e, t)
                }
                ))
            }
            patchRootIdOnNode(e, t) {
                e.type === Y.Document || e.rootId || (e.rootId = t),
                "childNodes"in e && e.childNodes.forEach((e => {
                    this.patchRootIdOnNode(e, t)
                }
                ))
            }
        }
        class bn {
            init() {}
            addShadowRoot() {}
            observeAttachShadow() {}
            reset() {}
        }
        class _n {
            constructor(e) {
                this.shadowDoms = new WeakSet,
                this.restoreHandlers = [],
                this.mutationCb = e.mutationCb,
                this.scrollCb = e.scrollCb,
                this.bypassOptions = e.bypassOptions,
                this.mirror = e.mirror,
                this.init()
            }
            init() {
                this.reset(),
                this.patchAttachShadow(Element, document)
            }
            addShadowRoot(e, t) {
                if (!Q(e))
                    return;
                if (this.shadowDoms.has(e))
                    return;
                this.shadowDoms.add(e);
                const n = Gt({
                    ...this.bypassOptions,
                    doc: t,
                    mutationCb: this.mutationCb,
                    mirror: this.mirror,
                    shadowDomManager: this
                }, e);
                this.restoreHandlers.push(( () => n.disconnect())),
                this.restoreHandlers.push(Zt({
                    ...this.bypassOptions,
                    scrollCb: this.scrollCb,
                    doc: e,
                    mirror: this.mirror
                })),
                Tt(( () => {
                    e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)),
                    this.restoreHandlers.push(cn({
                        mirror: this.mirror,
                        stylesheetManager: this.bypassOptions.stylesheetManager
                    }, e))
                }
                ), 0)
            }
            observeAttachShadow(e) {
                e.contentWindow && e.contentDocument && this.patchAttachShadow(e.contentWindow.Element, e.contentDocument)
            }
            patchAttachShadow(e, t) {
                const n = this;
                this.restoreHandlers.push(rt(e.prototype, "attachShadow", (function(e) {
                    return function(s) {
                        const r = e.call(this, s);
                        return this.shadowRoot && wt(this) && n.addShadowRoot(this.shadowRoot, t),
                        r
                    }
                }
                )))
            }
            reset() {
                this.restoreHandlers.forEach((e => {
                    try {
                        e()
                    } catch (ws) {}
                }
                )),
                this.restoreHandlers = [],
                this.shadowDoms = new WeakSet
            }
        }
        class wn {
            reset() {}
            freeze() {}
            unfreeze() {}
            lock() {}
            unlock() {}
            snapshot() {}
        }
        class In {
            constructor(e) {
                this.trackedLinkElements = new WeakSet,
                this.styleMirror = new kt,
                this.mutationCb = e.mutationCb,
                this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
            }
            attachLinkElement(e, t) {
                "_cssText"in t.attributes && this.mutationCb({
                    adds: [],
                    removes: [],
                    texts: [],
                    attributes: [{
                        id: t.id,
                        attributes: t.attributes
                    }]
                }),
                this.trackLinkElement(e)
            }
            trackLinkElement(e) {
                this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e),
                this.trackStylesheetInLinkElement(e))
            }
            adoptStyleSheets(e, t) {
                if (0 === e.length)
                    return;
                const n = {
                    id: t,
                    styleIds: []
                }
                  , s = [];
                for (const r of e) {
                    let e;
                    this.styleMirror.has(r) ? e = this.styleMirror.getId(r) : (e = this.styleMirror.add(r),
                    s.push({
                        styleId: e,
                        rules: Array.from(r.rules || CSSRule, ( (e, t) => ({
                            rule: ne(e),
                            index: t
                        })))
                    })),
                    n.styleIds.push(e)
                }
                s.length > 0 && (n.styles = s),
                this.adoptedStyleSheetCb(n)
            }
            reset() {
                this.styleMirror.reset(),
                this.trackedLinkElements = new WeakSet
            }
            trackStylesheetInLinkElement(e) {}
        }
        class Cn {
            constructor() {
                this.nodeMap = new WeakMap,
                this.loop = !0,
                this.periodicallyClear()
            }
            periodicallyClear() {
                Et(( () => {
                    this.clear(),
                    this.loop && this.periodicallyClear()
                }
                ))
            }
            inOtherBuffer(e, t) {
                const n = this.nodeMap.get(e);
                return n && Array.from(n).some((e => e !== t))
            }
            add(e, t) {
                this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
            }
            clear() {
                this.nodeMap = new WeakMap
            }
            destroy() {
                this.loop = !1
            }
        }
        let En, Tn;
        const xn = ae();
        function Mn(e={}) {
            const {emit: t, checkoutEveryNms: n, checkoutEveryNth: s, blockClass: o="rr-block", blockSelector: i=null, unblockSelector: a=null, ignoreClass: c="rr-ignore", ignoreSelector: l=null, maskAllText: u=!1, maskTextClass: d="rr-mask", unmaskTextClass: h=null, maskTextSelector: p=null, unmaskTextSelector: m=null, inlineStylesheet: f=!0, maskAllInputs: y, maskInputOptions: g, slimDOMOptions: S, maskAttributeFn: k, maskInputFn: v, maskTextFn: b, maxCanvasSize: _=null, packFn: w, sampling: I={}, dataURLOptions: C={}, mousemoveWait: E, recordCanvas: T=!1, recordCrossOriginIframes: x=!1, recordAfter: M=("DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load"), userTriggeredOnInput: R=!1, collectFonts: A=!1, inlineImages: O=!1, plugins: D, keepIframeSrcFn: L= () => !1, ignoreCSSAttributes: N=new Set([]), errorHandler: F, onMutation: B, getCanvasManager: P} = e;
            $t(F);
            const U = !x || window.parent === window;
            let z = !1;
            if (!U)
                try {
                    window.parent.document && (z = !1)
                } catch (ws) {
                    z = !0
                }
            if (U && !t)
                throw new Error("emit function is required");
            void 0 !== E && void 0 === I.mousemove && (I.mousemove = E),
            xn.reset();
            const W = !0 === y ? {
                color: !0,
                date: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
                textarea: !0,
                select: !0,
                radio: !0,
                checkbox: !0
            } : void 0 !== g ? g : {}
              , H = !0 === S || "all" === S ? {
                script: !0,
                comment: !0,
                headFavicon: !0,
                headWhitespace: !0,
                headMetaSocial: !0,
                headMetaRobots: !0,
                headMetaHttpEquiv: !0,
                headMetaVerification: !0,
                headMetaAuthorship: "all" === S,
                headMetaDescKeywords: "all" === S
            } : S || {};
            let j;
            ft();
            let $ = 0;
            const q = e => {
                for (const t of D || [])
                    t.eventProcessor && (e = t.eventProcessor(e));
                return w && !z && (e = w(e)),
                e
            }
            ;
            En = (e, o) => {
                const i = e;
                if (i.timestamp = ot(),
                !(0,
                r.z)([Jt, "access", e => e[0], "optionalAccess", e => e.isFrozen, "call", e => e()]) || i.type === Mt.FullSnapshot || i.type === Mt.IncrementalSnapshot && i.data.source === Rt.Mutation || Jt.forEach((e => e.unfreeze())),
                U)
                    (0,
                    r.z)([t, "optionalCall", e => e(q(i), o)]);
                else if (z) {
                    const e = {
                        type: "rrweb",
                        event: q(i),
                        origin: window.location.origin,
                        isCheckout: o
                    };
                    window.parent.postMessage(e, "*")
                }
                if (i.type === Mt.FullSnapshot)
                    j = i,
                    $ = 0;
                else if (i.type === Mt.IncrementalSnapshot) {
                    if (i.data.source === Rt.Mutation && i.data.isAttachIframe)
                        return;
                    $++;
                    const e = s && $ >= s
                      , t = n && j && i.timestamp - j.timestamp > n;
                    (e || t) && te(!0)
                }
            }
            ;
            const K = e => {
                En({
                    type: Mt.IncrementalSnapshot,
                    data: {
                        source: Rt.Mutation,
                        ...e
                    }
                })
            }
              , V = e => En({
                type: Mt.IncrementalSnapshot,
                data: {
                    source: Rt.Scroll,
                    ...e
                }
            })
              , J = e => En({
                type: Mt.IncrementalSnapshot,
                data: {
                    source: Rt.CanvasMutation,
                    ...e
                }
            })
              , Y = undefined
              , G = new In({
                mutationCb: K,
                adoptedStyleSheetCb: e => En({
                    type: Mt.IncrementalSnapshot,
                    data: {
                        source: Rt.AdoptedStyleSheet,
                        ...e
                    }
                })
            })
              , X = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new kn : new vn({
                mirror: xn,
                mutationCb: K,
                stylesheetManager: G,
                recordCrossOriginIframes: x,
                wrappedEmit: En
            });
            for (const r of D || [])
                r.getMirror && r.getMirror({
                    nodeMirror: xn,
                    crossOriginIframeMirror: X.crossOriginIframeMirror,
                    crossOriginIframeStyleMirror: X.crossOriginIframeStyleMirror
                });
            const Q = new Cn
              , Z = An(P, {
                mirror: xn,
                win: window,
                mutationCb: e => En({
                    type: Mt.IncrementalSnapshot,
                    data: {
                        source: Rt.CanvasMutation,
                        ...e
                    }
                }),
                recordCanvas: T,
                blockClass: o,
                blockSelector: i,
                unblockSelector: a,
                maxCanvasSize: _,
                sampling: I.canvas,
                dataURLOptions: C,
                errorHandler: F
            })
              , ee = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new bn : new _n({
                mutationCb: K,
                scrollCb: V,
                bypassOptions: {
                    onMutation: B,
                    blockClass: o,
                    blockSelector: i,
                    unblockSelector: a,
                    maskAllText: u,
                    maskTextClass: d,
                    unmaskTextClass: h,
                    maskTextSelector: p,
                    unmaskTextSelector: m,
                    inlineStylesheet: f,
                    maskInputOptions: W,
                    dataURLOptions: C,
                    maskAttributeFn: k,
                    maskTextFn: b,
                    maskInputFn: v,
                    recordCanvas: T,
                    inlineImages: O,
                    sampling: I,
                    slimDOMOptions: H,
                    iframeManager: X,
                    stylesheetManager: G,
                    canvasManager: Z,
                    keepIframeSrcFn: L,
                    processedNodeManager: Q
                },
                mirror: xn
            })
              , te = (e=!1) => {
                En({
                    type: Mt.Meta,
                    data: {
                        href: window.location.href,
                        width: ct(),
                        height: at()
                    }
                }, e),
                G.reset(),
                ee.init(),
                Jt.forEach((e => e.lock()));
                const t = Xe(document, {
                    mirror: xn,
                    blockClass: o,
                    blockSelector: i,
                    unblockSelector: a,
                    maskAllText: u,
                    maskTextClass: d,
                    unmaskTextClass: h,
                    maskTextSelector: p,
                    unmaskTextSelector: m,
                    inlineStylesheet: f,
                    maskAllInputs: W,
                    maskAttributeFn: k,
                    maskInputFn: v,
                    maskTextFn: b,
                    slimDOM: H,
                    dataURLOptions: C,
                    recordCanvas: T,
                    inlineImages: O,
                    onSerialize: e => {
                        yt(e, xn) && X.addIframe(e),
                        gt(e, xn) && G.trackLinkElement(e),
                        St(e) && ee.addShadowRoot(e.shadowRoot, document)
                    }
                    ,
                    onIframeLoad: (e, t) => {
                        X.attachIframe(e, t),
                        ee.observeAttachShadow(e)
                    }
                    ,
                    onStylesheetLoad: (e, t) => {
                        G.attachLinkElement(e, t)
                    }
                    ,
                    keepIframeSrcFn: L
                });
                if (!t)
                    return console.warn("Failed to snapshot the document");
                En({
                    type: Mt.FullSnapshot,
                    data: {
                        node: t,
                        initialOffset: it(window)
                    }
                }),
                Jt.forEach((e => e.unlock())),
                document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && G.adoptStyleSheets(document.adoptedStyleSheets, xn.getId(document))
            }
            ;
            Tn = te;
            try {
                const e = []
                  , t = e => Kt(mn)({
                    onMutation: B,
                    mutationCb: K,
                    mousemoveCb: (e, t) => En({
                        type: Mt.IncrementalSnapshot,
                        data: {
                            source: t,
                            positions: e
                        }
                    }),
                    mouseInteractionCb: e => En({
                        type: Mt.IncrementalSnapshot,
                        data: {
                            source: Rt.MouseInteraction,
                            ...e
                        }
                    }),
                    scrollCb: V,
                    viewportResizeCb: e => En({
                        type: Mt.IncrementalSnapshot,
                        data: {
                            source: Rt.ViewportResize,
                            ...e
                        }
                    }),
                    inputCb: e => En({
                        type: Mt.IncrementalSnapshot,
                        data: {
                            source: Rt.Input,
                            ...e
                        }
                    }),
                    mediaInteractionCb: e => En({
                        type: Mt.IncrementalSnapshot,
                        data: {
                            source: Rt.MediaInteraction,
                            ...e
                        }
                    }),
                    styleSheetRuleCb: e => En({
                        type: Mt.IncrementalSnapshot,
                        data: {
                            source: Rt.StyleSheetRule,
                            ...e
                        }
                    }),
                    styleDeclarationCb: e => En({
                        type: Mt.IncrementalSnapshot,
                        data: {
                            source: Rt.StyleDeclaration,
                            ...e
                        }
                    }),
                    canvasMutationCb: J,
                    fontCb: e => En({
                        type: Mt.IncrementalSnapshot,
                        data: {
                            source: Rt.Font,
                            ...e
                        }
                    }),
                    selectionCb: e => {
                        En({
                            type: Mt.IncrementalSnapshot,
                            data: {
                                source: Rt.Selection,
                                ...e
                            }
                        })
                    }
                    ,
                    customElementCb: e => {
                        En({
                            type: Mt.IncrementalSnapshot,
                            data: {
                                source: Rt.CustomElement,
                                ...e
                            }
                        })
                    }
                    ,
                    blockClass: o,
                    ignoreClass: c,
                    ignoreSelector: l,
                    maskAllText: u,
                    maskTextClass: d,
                    unmaskTextClass: h,
                    maskTextSelector: p,
                    unmaskTextSelector: m,
                    maskInputOptions: W,
                    inlineStylesheet: f,
                    sampling: I,
                    recordCanvas: T,
                    inlineImages: O,
                    userTriggeredOnInput: R,
                    collectFonts: A,
                    doc: e,
                    maskAttributeFn: k,
                    maskInputFn: v,
                    maskTextFn: b,
                    keepIframeSrcFn: L,
                    blockSelector: i,
                    unblockSelector: a,
                    slimDOMOptions: H,
                    dataURLOptions: C,
                    mirror: xn,
                    iframeManager: X,
                    stylesheetManager: G,
                    shadowDomManager: ee,
                    processedNodeManager: Q,
                    canvasManager: Z,
                    ignoreCSSAttributes: N,
                    plugins: (0,
                    r.z)([D, "optionalAccess", e => e.filter, "call", e => e((e => e.observer)), "optionalAccess", e => e.map, "call", e => e((e => ({
                        observer: e.observer,
                        options: e.options,
                        callback: t => En({
                            type: Mt.Plugin,
                            data: {
                                plugin: e.name,
                                payload: t
                            }
                        })
                    })))]) || []
                }, {});
                X.addLoadListener((n => {
                    try {
                        e.push(t(n.contentDocument))
                    } catch (s) {
                        console.warn(s)
                    }
                }
                ));
                const n = () => {
                    te(),
                    e.push(t(document))
                }
                ;
                return "interactive" === document.readyState || "complete" === document.readyState ? n() : (e.push(Ze("DOMContentLoaded", ( () => {
                    En({
                        type: Mt.DomContentLoaded,
                        data: {}
                    }),
                    "DOMContentLoaded" === M && n()
                }
                ))),
                e.push(Ze("load", ( () => {
                    En({
                        type: Mt.Load,
                        data: {}
                    }),
                    "load" === M && n()
                }
                ), window))),
                () => {
                    e.forEach((e => e())),
                    Q.destroy(),
                    Tn = void 0,
                    qt()
                }
            } catch (ne) {
                console.warn(ne)
            }
        }
        function Rn(e) {
            if (!Tn)
                throw new Error("please take full snapshot after start recording");
            Tn(e)
        }
        function An(e, t) {
            try {
                return e ? e(t) : new wn
            } catch (n) {
                return console.warn("Unable to initialize CanvasManager"),
                new wn
            }
        }
        Mn.mirror = xn,
        Mn.takeFullSnapshot = Rn;
        const On = 3
          , Dn = 5;
        function Ln(e) {
            const t = undefined;
            return e > 9999999999 ? e : 1e3 * e
        }
        function Nn(e) {
            const t = undefined;
            return e > 9999999999 ? e / 1e3 : e
        }
        function Fn(e, t) {
            "sentry.transaction" !== t.category && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(),
            e.addUpdate(( () => (e.throttledAddEvent({
                type: Mt.Custom,
                timestamp: 1e3 * (t.timestamp || 0),
                data: {
                    tag: "breadcrumb",
                    payload: (0,
                    p.S8)(t, 10, 1e3)
                }
            }),
            "console" === t.category))))
        }
        const Bn = "button,a";
        function Pn(e) {
            const t = undefined;
            return e.closest(Bn) || e
        }
        function Un(e) {
            const t = zn(e);
            return t && t instanceof Element ? Pn(t) : t
        }
        function zn(e) {
            return Wn(e) ? e.target : e
        }
        function Wn(e) {
            return "object" == typeof e && !!e && "target"in e
        }
        let Hn;
        function jn(e) {
            return Hn || (Hn = [],
            $n()),
            Hn.push(e),
            () => {
                const t = Hn ? Hn.indexOf(e) : -1;
                t > -1 && Hn.splice(t, 1)
            }
        }
        function $n() {
            (0,
            m.GS)(x, "open", (function(e) {
                return function(...t) {
                    if (Hn)
                        try {
                            Hn.forEach((e => e()))
                        } catch (ws) {}
                    return e.apply(x, t)
                }
            }
            ))
        }
        function qn(e, t, n) {
            e.handleClick(t, n)
        }
        class Kn {
            constructor(e, t, n=Fn) {
                this._lastMutation = 0,
                this._lastScroll = 0,
                this._clicks = [],
                this._timeout = t.timeout / 1e3,
                this._threshold = t.threshold / 1e3,
                this._scollTimeout = t.scrollTimeout / 1e3,
                this._replay = e,
                this._ignoreSelector = t.ignoreSelector,
                this._addBreadcrumbEvent = n
            }
            addListeners() {
                const e = jn(( () => {
                    this._lastMutation = Gn()
                }
                ));
                this._teardown = () => {
                    e(),
                    this._clicks = [],
                    this._lastMutation = 0,
                    this._lastScroll = 0
                }
            }
            removeListeners() {
                this._teardown && this._teardown(),
                this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
            }
            handleClick(e, t) {
                if (Jn(t, this._ignoreSelector) || !Yn(e))
                    return;
                const n = {
                    timestamp: Nn(e.timestamp),
                    clickBreadcrumb: e,
                    clickCount: 0,
                    node: t
                };
                this._clicks.some((e => e.node === n.node && Math.abs(e.timestamp - n.timestamp) < 1)) || (this._clicks.push(n),
                1 === this._clicks.length && this._scheduleCheckClicks())
            }
            registerMutation(e=Date.now()) {
                this._lastMutation = Nn(e)
            }
            registerScroll(e=Date.now()) {
                this._lastScroll = Nn(e)
            }
            registerClick(e) {
                const t = Pn(e);
                this._handleMultiClick(t)
            }
            _handleMultiClick(e) {
                this._getClicks(e).forEach((e => {
                    e.clickCount++
                }
                ))
            }
            _getClicks(e) {
                return this._clicks.filter((t => t.node === e))
            }
            _checkClicks() {
                const e = []
                  , t = Gn();
                this._clicks.forEach((n => {
                    !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0),
                    !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0),
                    n.timestamp + this._timeout <= t && e.push(n)
                }
                ));
                for (const n of e) {
                    const e = this._clicks.indexOf(n);
                    e > -1 && (this._generateBreadcrumbs(n),
                    this._clicks.splice(e, 1))
                }
                this._clicks.length && this._scheduleCheckClicks()
            }
            _generateBreadcrumbs(e) {
                const t = this._replay
                  , n = e.scrollAfter && e.scrollAfter <= this._scollTimeout
                  , s = e.mutationAfter && e.mutationAfter <= this._threshold
                  , r = !n && !s
                  , {clickCount: o, clickBreadcrumb: i} = e;
                if (r) {
                    const n = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout)
                      , s = n < 1e3 * this._timeout ? "mutation" : "timeout"
                      , r = {
                        type: "default",
                        message: i.message,
                        timestamp: i.timestamp,
                        category: "ui.slowClickDetected",
                        data: {
                            ...i.data,
                            url: x.location.href,
                            route: t.getCurrentRoute(),
                            timeAfterClickMs: n,
                            endReason: s,
                            clickCount: o || 1
                        }
                    };
                    this._addBreadcrumbEvent(t, r)
                } else if (o > 1) {
                    const e = {
                        type: "default",
                        message: i.message,
                        timestamp: i.timestamp,
                        category: "ui.multiClick",
                        data: {
                            ...i.data,
                            url: x.location.href,
                            route: t.getCurrentRoute(),
                            clickCount: o,
                            metric: !0
                        }
                    };
                    this._addBreadcrumbEvent(t, e)
                }
            }
            _scheduleCheckClicks() {
                this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
                this._checkClickTimeout = setTimeout(( () => this._checkClicks()), 1e3)
            }
        }
        const Vn = ["A", "BUTTON", "INPUT"];
        function Jn(e, t) {
            return !Vn.includes(e.tagName) || ("INPUT" === e.tagName && !["submit", "button"].includes(e.getAttribute("type") || "") || (!("A" !== e.tagName || !(e.hasAttribute("download") || e.hasAttribute("target") && "_self" !== e.getAttribute("target"))) || !(!t || !e.matches(t))))
        }
        function Yn(e) {
            return !(!e.data || "number" != typeof e.data.nodeId || !e.timestamp)
        }
        function Gn() {
            return Date.now() / 1e3
        }
        function Xn(e, t) {
            try {
                if (!Qn(t))
                    return;
                const {source: n} = t.data;
                if (n === Rt.Mutation && e.registerMutation(t.timestamp),
                n === Rt.Scroll && e.registerScroll(t.timestamp),
                Zn(t)) {
                    const {type: n, id: s} = t.data
                      , r = Mn.mirror.getNode(s);
                    r instanceof HTMLElement && n === At.Click && e.registerClick(r)
                }
            } catch (ws) {}
        }
        function Qn(e) {
            return e.type === On
        }
        function Zn(e) {
            return e.data.source === Rt.MouseInteraction
        }
        function es(e) {
            return {
                timestamp: Date.now() / 1e3,
                type: "default",
                ...e
            }
        }
        var ts;
        !function(e) {
            e[e.Document = 0] = "Document",
            e[e.DocumentType = 1] = "DocumentType",
            e[e.Element = 2] = "Element",
            e[e.Text = 3] = "Text",
            e[e.CDATA = 4] = "CDATA",
            e[e.Comment = 5] = "Comment"
        }(ts || (ts = {}));
        const ns = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]);
        function ss(e) {
            const t = {};
            for (const n in e)
                if (ns.has(n)) {
                    let s = n;
                    "data-testid" !== n && "data-test-id" !== n || (s = "testId"),
                    t[s] = e[n]
                }
            return t
        }
        const rs = e => t => {
            if (!e.isEnabled())
                return;
            const n = is(t);
            if (!n)
                return;
            const s = "click" === t.name
              , r = s ? t.event : void 0;
            !(s && e.clickDetector && r && r.target) || r.altKey || r.metaKey || r.ctrlKey || r.shiftKey || qn(e.clickDetector, n, Un(t.event)),
            Fn(e, n)
        }
        ;
        function os(e, t) {
            const n = Mn.mirror.getId(e)
              , s = n && Mn.mirror.getNode(n)
              , r = s && Mn.mirror.getMeta(s)
              , o = r && cs(r) ? r : null;
            return {
                message: t,
                data: o ? {
                    nodeId: n,
                    node: {
                        id: n,
                        tagName: o.tagName,
                        textContent: Array.from(o.childNodes).map((e => e.type === ts.Text && e.textContent)).filter(Boolean).map((e => e.trim())).join(""),
                        attributes: ss(o.attributes)
                    }
                } : {}
            }
        }
        function is(e) {
            const {target: t, message: n} = as(e);
            return es({
                category: `ui.${e.name}`,
                ...os(t, n)
            })
        }
        function as(e) {
            const t = "click" === e.name;
            let n, s = null;
            try {
                s = t ? Un(e.event) : zn(e.event),
                n = (0,
                f.Hd)(s, {
                    maxStringLength: 200
                }) || "<unknown>"
            } catch (ws) {
                n = "<unknown>"
            }
            return {
                target: s,
                message: n
            }
        }
        function cs(e) {
            return e.type === ts.Element
        }
        function ls(e, t) {
            if (!e.isEnabled())
                return;
            e.updateUserActivity();
            const n = us(t);
            n && Fn(e, n)
        }
        function us(e) {
            const {metaKey: t, shiftKey: n, ctrlKey: s, altKey: r, key: o, target: i} = e;
            if (!i || ds(i) || !o)
                return null;
            const a = t || s || r
              , c = 1 === o.length;
            if (!a && c)
                return null;
            const l = (0,
            f.Hd)(i, {
                maxStringLength: 200
            }) || "<unknown>"
              , u = undefined;
            return es({
                category: "ui.keyDown",
                message: l,
                data: {
                    ...os(i, l).data,
                    metaKey: t,
                    shiftKey: n,
                    ctrlKey: s,
                    altKey: r,
                    key: o
                }
            })
        }
        function ds(e) {
            return "INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable
        }
        const hs = {
            resource: Ss,
            paint: ys,
            navigation: gs
        };
        function ps(e) {
            return e.map(ms).filter(Boolean)
        }
        function ms(e) {
            return hs[e.entryType] ? hs[e.entryType](e) : null
        }
        function fs(e) {
            return ((y.k3 || x.performance.timeOrigin) + e) / 1e3
        }
        function ys(e) {
            const {duration: t, entryType: n, name: s, startTime: r} = e
              , o = fs(r);
            return {
                type: n,
                name: s,
                start: o,
                end: o + t,
                data: void 0
            }
        }
        function gs(e) {
            const {entryType: t, name: n, decodedBodySize: s, duration: r, domComplete: o, encodedBodySize: i, domContentLoadedEventStart: a, domContentLoadedEventEnd: c, domInteractive: l, loadEventStart: u, loadEventEnd: d, redirectCount: h, startTime: p, transferSize: m, type: f} = e;
            return 0 === r ? null : {
                type: `${t}.${f}`,
                start: fs(p),
                end: fs(o),
                name: n,
                data: {
                    size: m,
                    decodedBodySize: s,
                    encodedBodySize: i,
                    duration: r,
                    domInteractive: l,
                    domContentLoadedEventStart: a,
                    domContentLoadedEventEnd: c,
                    loadEventStart: u,
                    loadEventEnd: d,
                    domComplete: o,
                    redirectCount: h
                }
            }
        }
        function Ss(e) {
            const {entryType: t, initiatorType: n, name: s, responseEnd: r, startTime: o, decodedBodySize: i, encodedBodySize: a, responseStatus: c, transferSize: l} = e;
            return ["fetch", "xmlhttprequest"].includes(n) ? null : {
                type: `${t}.${n}`,
                start: fs(o),
                end: fs(r),
                name: s,
                data: {
                    size: l,
                    statusCode: c,
                    decodedBodySize: i,
                    encodedBodySize: a
                }
            }
        }
        function ks(e) {
            const t = e.entries
              , n = t[t.length - 1]
              , s = n ? n.element : void 0
              , r = e.value
              , o = fs(r)
              , i = undefined;
            return {
                type: "largest-contentful-paint",
                name: "largest-contentful-paint",
                start: o,
                end: o,
                data: {
                    value: r,
                    size: r,
                    nodeId: s ? Mn.mirror.getId(s) : void 0
                }
            }
        }
        function vs(e) {
            function t(t) {
                e.performanceEntries.includes(t) || e.performanceEntries.push(t)
            }
            function n({entries: e}) {
                e.forEach(t)
            }
            const s = [];
            return ["navigation", "paint", "resource"].forEach((e => {
                s.push((0,
                T.wv)(e, n))
            }
            )),
            s.push((0,
            T.Pt)(( ({metric: t}) => {
                e.replayPerformanceEntries.push(ks(t))
            }
            ))),
            () => {
                s.forEach((e => e()))
            }
        }
        const bs = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
          , _s = 'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,a=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),s=a.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(a,n),O(a,s-8,r.d()),O(a,s-4,e),a}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(G)return G.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(let r=0,e=t.length;r<e;r++)n+=t[r].length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});';
        function ws() {
            const e = new Blob([_s]);
            return URL.createObjectURL(e)
        }
        function Is(e, t) {
            bs && (g.vF.info(e),
            t && Es(e))
        }
        function Cs(e, t) {
            bs && (g.vF.info(e),
            t && setTimeout(( () => {
                Es(e)
            }
            ), 0))
        }
        function Es(e) {
            (0,
            o.ZQ)({
                category: "console",
                data: {
                    logger: "replay"
                },
                level: "info",
                message: e
            }, {
                level: "info"
            })
        }
        class Ts extends Error {
            constructor() {
                super("Event buffer exceeded maximum size of 20000000.")
            }
        }
        class xs {
            constructor() {
                this.events = [],
                this._totalSize = 0,
                this.hasCheckout = !1
            }
            get hasEvents() {
                return this.events.length > 0
            }
            get type() {
                return "sync"
            }
            destroy() {
                this.events = []
            }
            async addEvent(e) {
                const t = JSON.stringify(e).length;
                if (this._totalSize += t,
                this._totalSize > j)
                    throw new Ts;
                this.events.push(e)
            }
            finish() {
                return new Promise((e => {
                    const t = this.events;
                    this.clear(),
                    e(JSON.stringify(t))
                }
                ))
            }
            clear() {
                this.events = [],
                this._totalSize = 0,
                this.hasCheckout = !1
            }
            getEarliestTimestamp() {
                const e = this.events.map((e => e.timestamp)).sort()[0];
                return e ? Ln(e) : null
            }
        }
        class Ms {
            constructor(e) {
                this._worker = e,
                this._id = 0
            }
            ensureReady() {
                return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise(( (e, t) => {
                    this._worker.addEventListener("message", ( ({data: n}) => {
                        n.success ? e() : t()
                    }
                    ), {
                        once: !0
                    }),
                    this._worker.addEventListener("error", (e => {
                        t(e)
                    }
                    ), {
                        once: !0
                    })
                }
                ))),
                this._ensureReadyPromise
            }
            destroy() {
                Is("[Replay] Destroying compression worker"),
                this._worker.terminate()
            }
            postMessage(e, t) {
                const n = this._getAndIncrementId();
                return new Promise(( (s, r) => {
                    const o = ({data: t}) => {
                        const i = t;
                        if (i.method === e && i.id === n) {
                            if (this._worker.removeEventListener("message", o),
                            !i.success)
                                return bs && g.vF.error("[Replay]", i.response),
                                void r(new Error("Error in compression worker"));
                            s(i.response)
                        }
                    }
                    ;
                    this._worker.addEventListener("message", o),
                    this._worker.postMessage({
                        id: n,
                        method: e,
                        arg: t
                    })
                }
                ))
            }
            _getAndIncrementId() {
                return this._id++
            }
        }
        class Rs {
            constructor(e) {
                this._worker = new Ms(e),
                this._earliestTimestamp = null,
                this._totalSize = 0,
                this.hasCheckout = !1
            }
            get hasEvents() {
                return !!this._earliestTimestamp
            }
            get type() {
                return "worker"
            }
            ensureReady() {
                return this._worker.ensureReady()
            }
            destroy() {
                this._worker.destroy()
            }
            addEvent(e) {
                const t = Ln(e.timestamp);
                (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
                const n = JSON.stringify(e);
                return this._totalSize += n.length,
                this._totalSize > j ? Promise.reject(new Ts) : this._sendEventToWorker(n)
            }
            finish() {
                return this._finishRequest()
            }
            clear() {
                this._earliestTimestamp = null,
                this._totalSize = 0,
                this.hasCheckout = !1,
                this._worker.postMessage("clear").then(null, (e => {
                    bs && g.vF.warn('[Replay] Sending "clear" message to worker failed', e)
                }
                ))
            }
            getEarliestTimestamp() {
                return this._earliestTimestamp
            }
            _sendEventToWorker(e) {
                return this._worker.postMessage("addEvent", e)
            }
            async _finishRequest() {
                const e = await this._worker.postMessage("finish");
                return this._earliestTimestamp = null,
                this._totalSize = 0,
                e
            }
        }
        class As {
            constructor(e) {
                this._fallback = new xs,
                this._compression = new Rs(e),
                this._used = this._fallback,
                this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
            }
            get type() {
                return this._used.type
            }
            get hasEvents() {
                return this._used.hasEvents
            }
            get hasCheckout() {
                return this._used.hasCheckout
            }
            set hasCheckout(e) {
                this._used.hasCheckout = e
            }
            destroy() {
                this._fallback.destroy(),
                this._compression.destroy()
            }
            clear() {
                return this._used.clear()
            }
            getEarliestTimestamp() {
                return this._used.getEarliestTimestamp()
            }
            addEvent(e) {
                return this._used.addEvent(e)
            }
            async finish() {
                return await this.ensureWorkerIsLoaded(),
                this._used.finish()
            }
            ensureWorkerIsLoaded() {
                return this._ensureWorkerIsLoadedPromise
            }
            async _ensureWorkerIsLoaded() {
                try {
                    await this._compression.ensureReady()
                } catch (e) {
                    return void Is("[Replay] Failed to load the compression worker, falling back to simple buffer")
                }
                await this._switchToCompressionWorker()
            }
            async _switchToCompressionWorker() {
                const {events: e, hasCheckout: t} = this._fallback
                  , n = [];
                for (const r of e)
                    n.push(this._compression.addEvent(r));
                this._compression.hasCheckout = t,
                this._used = this._compression;
                try {
                    await Promise.all(n)
                } catch (s) {
                    bs && g.vF.warn("[Replay] Failed to add events when switching buffers.", s)
                }
            }
        }
        function Os({useCompression: e, workerUrl: t}) {
            if (e && window.Worker) {
                const e = Ds(t);
                if (e)
                    return e
            }
            return Is("[Replay] Using simple buffer"),
            new xs
        }
        function Ds(e) {
            try {
                const t = e || Ls();
                if (!t)
                    return;
                Is("[Replay] Using compression worker" + (e ? ` from ${e}` : ""));
                const n = new Worker(t);
                return new As(n)
            } catch (t) {
                Is("[Replay] Failed to create compression worker")
            }
        }
        function Ls() {
            return "undefined" != typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ && __SENTRY_EXCLUDE_REPLAY_WORKER__ ? "" : ws()
        }
        function Ns() {
            try {
                return "sessionStorage"in x && !!x.sessionStorage
            } catch (ws) {
                return !1
            }
        }
        function Fs(e) {
            Bs(),
            e.session = void 0
        }
        function Bs() {
            if (Ns())
                try {
                    x.sessionStorage.removeItem(M)
                } catch (ws) {}
        }
        function Ps(e) {
            return void 0 !== e && Math.random() < e
        }
        function Us(e) {
            const t = Date.now()
              , n = undefined
              , s = undefined
              , r = undefined
              , o = undefined
              , i = undefined
              , a = undefined;
            return {
                id: e.id || (0,
                S.eJ)(),
                started: e.started || t,
                lastActivity: e.lastActivity || t,
                segmentId: e.segmentId || 0,
                sampled: e.sampled,
                previousSessionId: e.previousSessionId
            }
        }
        function zs(e) {
            if (Ns())
                try {
                    x.sessionStorage.setItem(M, JSON.stringify(e))
                } catch (ws) {}
        }
        function Ws(e, t) {
            return Ps(e) ? "session" : !!t && "buffer"
        }
        function Hs({sessionSampleRate: e, allowBuffering: t, stickySession: n=!1}, {previousSessionId: s}={}) {
            const r = undefined
              , o = Us({
                sampled: Ws(e, t),
                previousSessionId: s
            });
            return n && zs(o),
            o
        }
        function js(e) {
            if (!Ns())
                return null;
            try {
                const t = x.sessionStorage.getItem(M);
                if (!t)
                    return null;
                const n = JSON.parse(t);
                return Cs("[Replay] Loading existing session", e),
                Us(n)
            } catch (ws) {
                return null
            }
        }
        function $s(e, t, n=+new Date) {
            return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= n
        }
        function qs(e, {maxReplayDuration: t, sessionIdleExpire: n, targetTime: s=Date.now()}) {
            return $s(e.started, t, s) || $s(e.lastActivity, n, s)
        }
        function Ks(e, {sessionIdleExpire: t, maxReplayDuration: n}) {
            return !!qs(e, {
                sessionIdleExpire: t,
                maxReplayDuration: n
            }) && ("buffer" !== e.sampled || 0 !== e.segmentId)
        }
        function Vs({traceInternals: e, sessionIdleExpire: t, maxReplayDuration: n, previousSessionId: s}, r) {
            const o = r.stickySession && js(e);
            return o ? Ks(o, {
                sessionIdleExpire: t,
                maxReplayDuration: n
            }) ? (Cs("[Replay] Session in sessionStorage is expired, creating new one..."),
            Hs(r, {
                previousSessionId: o.id
            })) : o : (Cs("[Replay] Creating new session", e),
            Hs(r, {
                previousSessionId: s
            }))
        }
        function Js(e) {
            return e.type === Mt.Custom
        }
        function Ys(e, t, n) {
            return !!Qs(e, t) && (Xs(e, t, n),
            !0)
        }
        function Gs(e, t, n) {
            return Qs(e, t) ? Xs(e, t, n) : Promise.resolve(null)
        }
        async function Xs(e, t, n) {
            if (!e.eventBuffer)
                return null;
            try {
                n && "buffer" === e.recordingMode && e.eventBuffer.clear(),
                n && (e.eventBuffer.hasCheckout = !0);
                const s = undefined
                  , r = Zs(t, e.getOptions().beforeAddRecordingEvent);
                if (!r)
                    return;
                return await e.eventBuffer.addEvent(r)
            } catch (s) {
                const t = s && s instanceof Ts ? "addEventSizeExceeded" : "addEvent";
                bs && g.vF.error(s),
                await e.stop({
                    reason: t
                });
                const n = (0,
                o.KU)();
                n && n.recordDroppedEvent("internal_sdk_error", "replay")
            }
        }
        function Qs(e, t) {
            if (!e.eventBuffer || e.isPaused() || !e.isEnabled())
                return !1;
            const n = Ln(t.timestamp);
            return !(n + e.timeouts.sessionIdlePause < Date.now()) && (!(n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration) || (Is(`[Replay] Skipping event with timestamp ${n} because it is after maxReplayDuration`, e.getOptions()._experiments.traceInternals),
            !1))
        }
        function Zs(e, t) {
            try {
                if ("function" == typeof t && Js(e))
                    return t(e)
            } catch (n) {
                return bs && g.vF.error("[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...", n),
                null
            }
            return e
        }
        function er(e) {
            return !e.type
        }
        function tr(e) {
            return "transaction" === e.type
        }
        function nr(e) {
            return "replay_event" === e.type
        }
        function sr(e) {
            return "feedback" === e.type
        }
        function rr(e) {
            const t = ar();
            return (n, s) => {
                if (!e.isEnabled() || !er(n) && !tr(n))
                    return;
                const r = s && s.statusCode;
                t && (!r || r < 200 || r >= 300) || (tr(n) ? or(e, n) : ir(e, n))
            }
        }
        function or(e, t) {
            const n = e.getContext();
            t.contexts && t.contexts.trace && t.contexts.trace.trace_id && n.traceIds.size < 100 && n.traceIds.add(t.contexts.trace.trace_id)
        }
        function ir(e, t) {
            const n = e.getContext();
            if (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id),
            "buffer" !== e.recordingMode || !t.tags || !t.tags.replayId)
                return;
            const {beforeErrorSampling: s} = e.getOptions();
            ("function" != typeof s || s(t)) && setTimeout(( () => {
                e.sendBufferedReplayOrFlush()
            }
            ))
        }
        function ar() {
            const e = (0,
            o.KU)();
            if (!e)
                return !1;
            const t = e.getTransport();
            return t && t.send.__sentry__baseTransport__ || !1
        }
        function cr(e) {
            return t => {
                e.isEnabled() && er(t) && lr(e, t)
            }
        }
        function lr(e, t) {
            const n = t.exception && t.exception.values && t.exception.values[0].value;
            if ("string" == typeof n && (n.match(/reactjs\.org\/docs\/error-decoder\.html\?invariant=(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i))) {
                const t = undefined;
                Fn(e, es({
                    category: "replay.hydrate-error"
                }))
            }
        }
        function ur(e, t) {
            return !(e.type || !e.exception || !e.exception.values || !e.exception.values.length) && !(!t.originalException || !t.originalException.__rrweb__)
        }
        function dr(e, t) {
            e.triggerUserActivity(),
            e.addUpdate(( () => !t.timestamp || (e.throttledAddEvent({
                type: Mt.Custom,
                timestamp: 1e3 * t.timestamp,
                data: {
                    tag: "breadcrumb",
                    payload: {
                        timestamp: t.timestamp,
                        type: "default",
                        category: "sentry.feedback",
                        data: {
                            feedbackId: t.event_id
                        }
                    }
                }
            }),
            !1)))
        }
        function hr(e, t) {
            return "buffer" === e.recordingMode && (t.message !== A && (!(!t.exception || t.type) && Ps(e.getOptions().errorSampleRate)))
        }
        function pr(e, t=!1) {
            const n = t ? rr(e) : void 0;
            return Object.assign(( (t, s) => {
                if (!e.isEnabled())
                    return t;
                if (nr(t))
                    return delete t.breadcrumbs,
                    t;
                if (!er(t) && !tr(t) && !sr(t))
                    return t;
                const r = undefined;
                if (!e.checkAndHandleExpiredSession())
                    return t;
                if (sr(t))
                    return e.flush(),
                    t.contexts.feedback.replay_id = e.getSessionId(),
                    dr(e, t),
                    t;
                if (ur(t, s) && !e.getOptions()._experiments.captureExceptions)
                    return bs && g.vF.log("[Replay] Ignoring error from rrweb internals", t),
                    null;
                const o = undefined
                  , i = undefined;
                return (hr(e, t) || "session" === e.recordingMode) && (t.tags = {
                    ...t.tags,
                    replayId: e.getSessionId()
                }),
                n && n(t, {
                    statusCode: 200
                }),
                t
            }
            ), {
                id: "Replay"
            })
        }
        function mr(e, t) {
            return t.map(( ({type: t, start: n, end: s, name: r, data: o}) => {
                const i = e.throttledAddEvent({
                    type: Mt.Custom,
                    timestamp: n,
                    data: {
                        tag: "performanceSpan",
                        payload: {
                            op: t,
                            description: r,
                            startTimestamp: n,
                            endTimestamp: s,
                            data: o
                        }
                    }
                });
                return "string" == typeof i ? Promise.resolve(null) : i
            }
            ))
        }
        function fr(e) {
            const {from: t, to: n} = e
              , s = Date.now() / 1e3;
            return {
                type: "navigation.push",
                start: s,
                end: s,
                name: n,
                data: {
                    previous: t
                }
            }
        }
        function yr(e) {
            return t => {
                if (!e.isEnabled())
                    return;
                const n = fr(t);
                null !== n && (e.getContext().urls.push(n.name),
                e.triggerUserActivity(),
                e.addUpdate(( () => (mr(e, [n]),
                !1))))
            }
        }
        function gr(e, t) {
            return (!bs || !e.getOptions()._experiments.traceInternals) && (0,
            i.A)(t, (0,
            o.KU)())
        }
        function Sr(e, t) {
            e.isEnabled() && null !== t && (gr(e, t.name) || e.addUpdate(( () => (mr(e, [t]),
            !0))))
        }
        function kr(e) {
            const {startTimestamp: t, endTimestamp: n, fetchData: s, response: r} = e;
            if (!n)
                return null;
            const {method: o, url: i} = s;
            return {
                type: "resource.fetch",
                start: t / 1e3,
                end: n / 1e3,
                name: i,
                data: {
                    method: o,
                    statusCode: r ? r.status : void 0
                }
            }
        }
        function vr(e) {
            return t => {
                if (!e.isEnabled())
                    return;
                const n = kr(t);
                Sr(e, n)
            }
        }
        function br(e) {
            const {startTimestamp: t, endTimestamp: n, xhr: s} = e
              , r = s[k.Er];
            if (!t || !n || !r)
                return null;
            const {method: o, url: i, status_code: a} = r;
            return void 0 === i ? null : {
                type: "resource.xhr",
                name: i,
                start: t / 1e3,
                end: n / 1e3,
                data: {
                    method: o,
                    statusCode: a
                }
            }
        }
        function _r(e) {
            return t => {
                if (!e.isEnabled())
                    return;
                const n = br(t);
                Sr(e, n)
            }
        }
        function wr(e, t) {
            if (e)
                try {
                    if ("string" == typeof e)
                        return t.encode(e).length;
                    if (e instanceof URLSearchParams)
                        return t.encode(e.toString()).length;
                    if (e instanceof FormData) {
                        const n = Ar(e);
                        return t.encode(n).length
                    }
                    if (e instanceof Blob)
                        return e.size;
                    if (e instanceof ArrayBuffer)
                        return e.byteLength
                } catch (ws) {}
        }
        function Ir(e) {
            if (!e)
                return;
            const t = parseInt(e, 10);
            return isNaN(t) ? void 0 : t
        }
        function Cr(e) {
            try {
                if ("string" == typeof e)
                    return [e];
                if (e instanceof URLSearchParams)
                    return [e.toString()];
                if (e instanceof FormData)
                    return [Ar(e)];
                if (!e)
                    return [void 0]
            } catch (t) {
                return bs && g.vF.warn("[Replay] Failed to serialize body", e),
                [void 0, "BODY_PARSE_ERROR"]
            }
            return bs && g.vF.info("[Replay] Skipping network body because of body type", e),
            [void 0, "UNPARSEABLE_BODY_TYPE"]
        }
        function Er(e, t) {
            if (!e)
                return {
                    headers: {},
                    size: void 0,
                    _meta: {
                        warnings: [t]
                    }
                };
            const n = {
                ...e._meta
            }
              , s = n.warnings || [];
            return n.warnings = [...s, t],
            e._meta = n,
            e
        }
        function Tr(e, t) {
            if (!t)
                return null;
            const {startTimestamp: n, endTimestamp: s, url: r, method: o, statusCode: i, request: a, response: c} = t
              , l = undefined;
            return {
                type: e,
                start: n / 1e3,
                end: s / 1e3,
                name: r,
                data: (0,
                m.Ce)({
                    method: o,
                    statusCode: i,
                    request: a,
                    response: c
                })
            }
        }
        function xr(e) {
            return {
                headers: {},
                size: e,
                _meta: {
                    warnings: ["URL_SKIPPED"]
                }
            }
        }
        function Mr(e, t, n) {
            if (!t && 0 === Object.keys(e).length)
                return;
            if (!t)
                return {
                    headers: e
                };
            if (!n)
                return {
                    headers: e,
                    size: t
                };
            const s = {
                headers: e,
                size: t
            }
              , {body: r, warnings: o} = Or(n);
            return s.body = r,
            o && o.length > 0 && (s._meta = {
                warnings: o
            }),
            s
        }
        function Rr(e, t) {
            return Object.keys(e).reduce(( (n, s) => {
                const r = s.toLowerCase();
                return t.includes(r) && e[s] && (n[r] = e[s]),
                n
            }
            ), {})
        }
        function Ar(e) {
            return new URLSearchParams(e).toString()
        }
        function Or(e) {
            if (!e || "string" != typeof e)
                return {
                    body: e
                };
            const t = e.length > U
              , n = Dr(e);
            if (t) {
                const t = e.slice(0, U);
                return n ? {
                    body: t,
                    warnings: ["MAYBE_JSON_TRUNCATED"]
                } : {
                    body: `${t}…`,
                    warnings: ["TEXT_TRUNCATED"]
                }
            }
            if (n)
                try {
                    const t = undefined;
                    return {
                        body: JSON.parse(e)
                    }
                } catch (s) {}
            return {
                body: e
            }
        }
        function Dr(e) {
            const t = e[0]
              , n = e[e.length - 1];
            return "[" === t && "]" === n || "{" === t && "}" === n
        }
        function Lr(e, t) {
            const n = Nr(e);
            return (0,
            v.Xr)(n, t)
        }
        function Nr(e, t=x.document.baseURI) {
            if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(x.location.origin))
                return e;
            const n = new URL(e,t);
            if (n.origin !== new URL(t).origin)
                return e;
            const s = n.href;
            return !e.endsWith("/") && s.endsWith("/") ? s.slice(0, -1) : s
        }
        async function Fr(e, t, n) {
            try {
                const s = undefined
                  , r = Tr("resource.fetch", await Pr(e, t, n));
                Sr(n.replay, r)
            } catch (s) {
                bs && g.vF.error("[Replay] Failed to capture fetch breadcrumb", s)
            }
        }
        function Br(e, t, n) {
            const {input: s, response: r} = t
              , o = undefined
              , i = wr(s ? jr(s) : void 0, n.textEncoder)
              , a = r ? Ir(r.headers.get("content-length")) : void 0;
            void 0 !== i && (e.data.request_body_size = i),
            void 0 !== a && (e.data.response_body_size = a)
        }
        async function Pr(e, t, n) {
            const s = Date.now()
              , {startTimestamp: r=s, endTimestamp: o=s} = t
              , {url: i, method: a, status_code: c=0, request_body_size: l, response_body_size: u} = e.data
              , d = Lr(i, n.networkDetailAllowUrls) && !Lr(i, n.networkDetailDenyUrls)
              , h = undefined
              , p = undefined;
            return {
                startTimestamp: r,
                endTimestamp: o,
                url: i,
                method: a,
                statusCode: c,
                request: d ? Ur(n, t.input, l) : xr(l),
                response: await zr(d, n, t.response, u)
            }
        }
        function Ur({networkCaptureBodies: e, networkRequestHeaders: t}, n, s) {
            const r = n ? qr(n, t) : {};
            if (!e)
                return Mr(r, s, void 0);
            const o = jr(n)
              , [i,a] = Cr(o)
              , c = Mr(r, s, i);
            return a ? Er(c, a) : c
        }
        async function zr(e, {networkCaptureBodies: t, textEncoder: n, networkResponseHeaders: s}, r, o) {
            if (!e && void 0 !== o)
                return xr(o);
            const i = r ? $r(r.headers, s) : {};
            if (!r || !t && void 0 !== o)
                return Mr(i, o, void 0);
            const [a,c] = await Hr(r)
              , l = Wr(a, {
                networkCaptureBodies: t,
                textEncoder: n,
                responseBodySize: o,
                captureDetails: e,
                headers: i
            });
            return c ? Er(l, c) : l
        }
        function Wr(e, {networkCaptureBodies: t, textEncoder: n, responseBodySize: s, captureDetails: r, headers: o}) {
            try {
                const i = e && e.length && void 0 === s ? wr(e, n) : s;
                return r ? Mr(o, i, t ? e : void 0) : xr(i)
            } catch (i) {
                return bs && g.vF.warn("[Replay] Failed to serialize response body", i),
                Mr(o, s, void 0)
            }
        }
        async function Hr(e) {
            const t = Vr(e);
            if (!t)
                return [void 0, "BODY_PARSE_ERROR"];
            try {
                const e = undefined;
                return [await Jr(t)]
            } catch (n) {
                return bs && g.vF.warn("[Replay] Failed to get text body from response", n),
                [void 0, "BODY_PARSE_ERROR"]
            }
        }
        function jr(e=[]) {
            if (2 === e.length && "object" == typeof e[1])
                return e[1].body
        }
        function $r(e, t) {
            const n = {};
            return t.forEach((t => {
                e.get(t) && (n[t] = e.get(t))
            }
            )),
            n
        }
        function qr(e, t) {
            return 1 === e.length && "string" != typeof e[0] ? Kr(e[0], t) : 2 === e.length ? Kr(e[1], t) : {}
        }
        function Kr(e, t) {
            if (!e)
                return {};
            const n = e.headers;
            return n ? n instanceof Headers ? $r(n, t) : Array.isArray(n) ? {} : Rr(n, t) : {}
        }
        function Vr(e) {
            try {
                return e.clone()
            } catch (t) {
                bs && g.vF.warn("[Replay] Failed to clone response body", t)
            }
        }
        function Jr(e) {
            return new Promise(( (t, n) => {
                const s = setTimeout(( () => n(new Error("Timeout while trying to read response body"))), 500);
                Yr(e).then((e => t(e)), (e => n(e))).finally(( () => clearTimeout(s)))
            }
            ))
        }
        async function Yr(e) {
            return await e.text()
        }
        async function Gr(e, t, n) {
            try {
                const s = undefined
                  , r = Tr("resource.xhr", Qr(e, t, n));
                Sr(n.replay, r)
            } catch (s) {
                bs && g.vF.error("[Replay] Failed to capture xhr breadcrumb", s)
            }
        }
        function Xr(e, t, n) {
            const {xhr: s, input: r} = t;
            if (!s)
                return;
            const o = wr(r, n.textEncoder)
              , i = s.getResponseHeader("content-length") ? Ir(s.getResponseHeader("content-length")) : no(s.response, s.responseType, n.textEncoder);
            void 0 !== o && (e.data.request_body_size = o),
            void 0 !== i && (e.data.response_body_size = i)
        }
        function Qr(e, t, n) {
            const s = Date.now()
              , {startTimestamp: r=s, endTimestamp: o=s, input: i, xhr: a} = t
              , {url: c, method: l, status_code: u=0, request_body_size: d, response_body_size: h} = e.data;
            if (!c)
                return null;
            if (!a || !Lr(c, n.networkDetailAllowUrls) || Lr(c, n.networkDetailDenyUrls)) {
                const e = undefined
                  , t = undefined;
                return {
                    startTimestamp: r,
                    endTimestamp: o,
                    url: c,
                    method: l,
                    statusCode: u,
                    request: xr(d),
                    response: xr(h)
                }
            }
            const p = a[k.Er]
              , m = p ? Rr(p.request_headers, n.networkRequestHeaders) : {}
              , f = Rr(Zr(a), n.networkResponseHeaders)
              , [y,g] = n.networkCaptureBodies ? Cr(i) : [void 0]
              , [S,v] = n.networkCaptureBodies ? eo(a) : [void 0]
              , b = Mr(m, d, y)
              , _ = Mr(f, h, S);
            return {
                startTimestamp: r,
                endTimestamp: o,
                url: c,
                method: l,
                statusCode: u,
                request: g ? Er(b, g) : b,
                response: v ? Er(_, v) : _
            }
        }
        function Zr(e) {
            const t = e.getAllResponseHeaders();
            return t ? t.split("\r\n").reduce(( (e, t) => {
                const [n,s] = t.split(": ");
                return e[n.toLowerCase()] = s,
                e
            }
            ), {}) : {}
        }
        function eo(e) {
            const t = [];
            try {
                return [e.responseText]
            } catch (ws) {
                t.push(ws)
            }
            try {
                return to(e.response, e.responseType)
            } catch (ws) {
                t.push(ws)
            }
            return bs && g.vF.warn("[Replay] Failed to get xhr response body", ...t),
            [void 0]
        }
        function to(e, t) {
            try {
                if ("string" == typeof e)
                    return [e];
                if (e instanceof Document)
                    return [e.body.outerHTML];
                if ("json" === t && e && "object" == typeof e)
                    return [JSON.stringify(e)];
                if (!e)
                    return [void 0]
            } catch (n) {
                return bs && g.vF.warn("[Replay] Failed to serialize body", e),
                [void 0, "BODY_PARSE_ERROR"]
            }
            return bs && g.vF.info("[Replay] Skipping network body because of body type", e),
            [void 0, "UNPARSEABLE_BODY_TYPE"]
        }
        function no(e, t, n) {
            try {
                const s = undefined;
                return wr("json" === t && e && "object" == typeof e ? JSON.stringify(e) : e, n)
            } catch (s) {
                return
            }
        }
        function so(e) {
            const t = (0,
            o.KU)();
            try {
                const n = new TextEncoder
                  , {networkDetailAllowUrls: s, networkDetailDenyUrls: r, networkCaptureBodies: o, networkRequestHeaders: i, networkResponseHeaders: a} = e.getOptions()
                  , c = {
                    replay: e,
                    textEncoder: n,
                    networkDetailAllowUrls: s,
                    networkDetailDenyUrls: r,
                    networkCaptureBodies: o,
                    networkRequestHeaders: i,
                    networkResponseHeaders: a
                };
                t && t.on ? t.on("beforeAddBreadcrumb", ( (e, t) => ro(c, e, t))) : ((0,
                b.u)(vr(e)),
                (0,
                k.Mn)(_r(e)))
            } catch (n) {}
        }
        function ro(e, t, n) {
            if (t.data)
                try {
                    oo(t) && ao(n) && (Xr(t, n, e),
                    Gr(t, n, e)),
                    io(t) && co(n) && (Br(t, n, e),
                    Fr(t, n, e))
                } catch (ws) {
                    bs && g.vF.warn("Error when enriching network breadcrumb")
                }
        }
        function oo(e) {
            return "xhr" === e.category
        }
        function io(e) {
            return "fetch" === e.category
        }
        function ao(e) {
            return e && e.xhr
        }
        function co(e) {
            return e && e.response
        }
        let lo = null;
        function uo(e) {
            return !!e.category
        }
        const ho = e => t => {
            if (!e.isEnabled())
                return;
            const n = po(t);
            n && Fn(e, n)
        }
        ;
        function po(e) {
            const t = e.getLastBreadcrumb && e.getLastBreadcrumb();
            return lo !== t && t ? (lo = t,
            !uo(t) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(t.category) || t.category.startsWith("ui.") ? null : "console" === t.category ? mo(t) : es(t)) : null
        }
        function mo(e) {
            const t = e.data && e.data.arguments;
            if (!Array.isArray(t) || 0 === t.length)
                return es(e);
            let n = !1;
            const s = t.map((e => {
                if (!e)
                    return e;
                if ("string" == typeof e)
                    return e.length > z ? (n = !0,
                    `${e.slice(0, z)}…`) : e;
                if ("object" == typeof e)
                    try {
                        const t = (0,
                        p.S8)(e, 7)
                          , s = undefined;
                        return JSON.stringify(t).length > z ? (n = !0,
                        `${JSON.stringify(t, null, 2).slice(0, z)}…`) : t
                    } catch (ws) {}
                return e
            }
            ));
            return es({
                ...e,
                data: {
                    ...e.data,
                    arguments: s,
                    ...n ? {
                        _meta: {
                            warnings: ["CONSOLE_ARG_TRUNCATED"]
                        }
                    } : {}
                }
            })
        }
        function fo(e) {
            const t = (0,
            o.o5)()
              , n = (0,
            o.KU)();
            t.addScopeListener(ho(e)),
            (0,
            _.i)(rs(e)),
            (0,
            w._)(yr(e)),
            so(e);
            const s = pr(e, !yo(n));
            n && n.addEventProcessor ? n.addEventProcessor(s) : (0,
            a.S)(s),
            yo(n) && (n.on("beforeSendEvent", cr(e)),
            n.on("afterSendEvent", rr(e)),
            n.on("createDsc", (t => {
                const n = e.getSessionId();
                if (n && e.isEnabled() && "session" === e.recordingMode) {
                    const s = undefined;
                    e.checkAndHandleExpiredSession() && (t.replay_id = n)
                }
            }
            )),
            n.on("startTransaction", (t => {
                e.lastTransaction = t
            }
            )),
            n.on("finishTransaction", (t => {
                e.lastTransaction = t
            }
            )),
            n.on("beforeSendFeedback", ( (t, n) => {
                const s = e.getSessionId();
                n && n.includeReplay && e.isEnabled() && s && t.contexts && t.contexts.feedback && (t.contexts.feedback.replay_id = s)
            }
            )))
        }
        function yo(e) {
            return !(!e || !e.on)
        }
        async function go(e) {
            try {
                return Promise.all(mr(e, [So(x.performance.memory)]))
            } catch (t) {
                return []
            }
        }
        function So(e) {
            const {jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: s} = e
              , r = Date.now() / 1e3;
            return {
                type: "memory",
                name: "memory",
                start: r,
                end: r,
                data: {
                    memory: {
                        jsHeapSizeLimit: t,
                        totalJSHeapSize: n,
                        usedJSHeapSize: s
                    }
                }
            }
        }
        function ko(e, t, n) {
            let s, r, o;
            const i = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
            function a() {
                return c(),
                s = e(),
                s
            }
            function c() {
                void 0 !== r && clearTimeout(r),
                void 0 !== o && clearTimeout(o),
                r = o = void 0
            }
            function l() {
                return void 0 !== r || void 0 !== o ? a() : s
            }
            function u() {
                return r && clearTimeout(r),
                r = setTimeout(a, t),
                i && void 0 === o && (o = setTimeout(a, i)),
                s
            }
            return u.cancel = c,
            u.flush = l,
            u
        }
        function vo(e) {
            let t = !1;
            return (n, s) => {
                if (!e.checkAndHandleExpiredSession())
                    return void (bs && g.vF.warn("[Replay] Received replay event after session expired."));
                const r = s || !t;
                t = !0,
                e.clickDetector && Xn(e.clickDetector, n),
                e.addUpdate(( () => {
                    if ("buffer" === e.recordingMode && r && e.setInitialState(),
                    !Ys(e, n, r))
                        return !0;
                    if (!r)
                        return !1;
                    if (_o(e, r),
                    e.session && e.session.previousSessionId)
                        return !0;
                    if ("buffer" === e.recordingMode && e.session && e.eventBuffer) {
                        const t = e.eventBuffer.getEarliestTimestamp();
                        t && (Is(`[Replay] Updating session start time to earliest event in buffer to ${new Date(t)}`, e.getOptions()._experiments.traceInternals),
                        e.session.started = t,
                        e.getOptions().stickySession && zs(e.session))
                    }
                    return "session" === e.recordingMode && e.flush(),
                    !0
                }
                ))
            }
        }
        function bo(e) {
            const t = e.getOptions();
            return {
                type: Mt.Custom,
                timestamp: Date.now(),
                data: {
                    tag: "options",
                    payload: {
                        shouldRecordCanvas: e.isRecordingCanvas(),
                        sessionSampleRate: t.sessionSampleRate,
                        errorSampleRate: t.errorSampleRate,
                        useCompressionOption: t.useCompression,
                        blockAllMedia: t.blockAllMedia,
                        maskAllText: t.maskAllText,
                        maskAllInputs: t.maskAllInputs,
                        useCompression: !!e.eventBuffer && "worker" === e.eventBuffer.type,
                        networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                        networkCaptureBodies: t.networkCaptureBodies,
                        networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                        networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                    }
                }
            }
        }
        function _o(e, t) {
            t && e.session && 0 === e.session.segmentId && Ys(e, bo(e), !1)
        }
        function wo(e, t, n, s) {
            return (0,
            I.h4)((0,
            I.n2)(e, (0,
            I.Cj)(e), s, n), [[{
                type: "replay_event"
            }, e], [{
                type: "replay_recording",
                length: "string" == typeof t ? (new TextEncoder).encode(t).length : t.length
            }, t]])
        }
        function Io({recordingData: e, headers: t}) {
            let n;
            const s = `${JSON.stringify(t)}\n`;
            if ("string" == typeof e)
                n = `${s}${e}`;
            else {
                const t = undefined
                  , r = (new TextEncoder).encode(s);
                n = new Uint8Array(r.length + e.length),
                n.set(r),
                n.set(e, r.length)
            }
            return n
        }
        async function Co({client: e, scope: t, replayId: n, event: s}) {
            const r = undefined
              , o = {
                event_id: n,
                integrations: "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations)
            };
            e.emit && e.emit("preprocessEvent", s, o);
            const i = await (0,
            c.mG)(e.getOptions(), s, o, t, e, (0,
            l.rm)());
            if (!i)
                return null;
            i.platform = i.platform || "javascript";
            const a = e.getSdkMetadata && e.getSdkMetadata()
              , {name: u, version: d} = a && a.sdk || {};
            return i.sdk = {
                ...i.sdk,
                name: u || "sentry.javascript.unknown",
                version: d || "0.0.0"
            },
            i
        }
        async function Eo({recordingData: e, replayId: t, segmentId: n, eventContext: s, timestamp: r, session: i}) {
            const a = Io({
                recordingData: e,
                headers: {
                    segment_id: n
                }
            })
              , {urls: c, errorIds: l, traceIds: u, initialTimestamp: d} = s
              , h = (0,
            o.KU)()
              , p = (0,
            o.o5)()
              , m = h && h.getTransport()
              , f = h && h.getDsn();
            if (!(h && m && f && i.sampled))
                return;
            const y = {
                type: R,
                replay_start_timestamp: d / 1e3,
                timestamp: r / 1e3,
                error_ids: l,
                trace_ids: u,
                urls: c,
                replay_id: t,
                segment_id: n,
                replay_type: i.sampled
            }
              , g = await Co({
                scope: p,
                client: h,
                replayId: t,
                event: y
            });
            if (!g)
                return h.recordDroppedEvent("event_processor", "replay", y),
                void Is("An event processor returned `null`, will not send event.");
            delete g.sdkProcessingMetadata;
            const S = wo(g, a, f, h.getOptions().tunnel);
            let k;
            try {
                k = await m.send(S)
            } catch (b) {
                const e = new Error(A);
                try {
                    e.cause = b
                } catch (ws) {}
                throw e
            }
            if (!k)
                return k;
            if ("number" == typeof k.statusCode && (k.statusCode < 200 || k.statusCode >= 300))
                throw new To(k.statusCode);
            const v = (0,
            C.wq)({}, k);
            if ((0,
            C.Jz)(v, "replay"))
                throw new xo(v);
            return k
        }
        class To extends Error {
            constructor(e) {
                super(`Transport returned status code ${e}`)
            }
        }
        class xo extends Error {
            constructor(e) {
                super("Rate limit hit"),
                this.rateLimits = e
            }
        }
        async function Mo(e, t={
            count: 0,
            interval: B
        }) {
            const {recordingData: n, options: s} = e;
            if (n.length)
                try {
                    return await Eo(e),
                    !0
                } catch (r) {
                    if (r instanceof To || r instanceof xo)
                        throw r;
                    if ((0,
                    o.o)("Replays", {
                        _retryCount: t.count
                    }),
                    bs && s._experiments && s._experiments.captureExceptions && (0,
                    o.Cp)(r),
                    t.count >= 3) {
                        const e = new Error(`${A} - max retries exceeded`);
                        try {
                            e.cause = r
                        } catch (ws) {}
                        throw e
                    }
                    return t.interval *= ++t.count,
                    new Promise(( (n, s) => {
                        setTimeout((async () => {
                            try {
                                await Mo(e, t),
                                n(!0)
                            } catch (r) {
                                s(r)
                            }
                        }
                        ), t.interval)
                    }
                    ))
                }
        }
        const Ro = "__THROTTLED"
          , Ao = "__SKIPPED";
        function Oo(e, t, n) {
            const s = new Map
              , r = e => {
                const t = e - n;
                s.forEach(( (e, n) => {
                    n < t && s.delete(n)
                }
                ))
            }
              , o = () => [...s.values()].reduce(( (e, t) => e + t), 0);
            let i = !1;
            return (...n) => {
                const a = Math.floor(Date.now() / 1e3);
                if (r(a),
                o() >= t) {
                    const e = i;
                    return i = !0,
                    e ? Ao : Ro
                }
                i = !1;
                const c = s.get(a) || 0;
                return s.set(a, c + 1),
                e(...n)
            }
        }
        class Do {
            constructor({options: e, recordingOptions: t}) {
                Do.prototype.__init.call(this),
                Do.prototype.__init2.call(this),
                Do.prototype.__init3.call(this),
                Do.prototype.__init4.call(this),
                Do.prototype.__init5.call(this),
                Do.prototype.__init6.call(this),
                this.eventBuffer = null,
                this.performanceEntries = [],
                this.replayPerformanceEntries = [],
                this.recordingMode = "session",
                this.timeouts = {
                    sessionIdlePause: O,
                    sessionIdleExpire: D
                },
                this._lastActivity = Date.now(),
                this._isEnabled = !1,
                this._isPaused = !1,
                this._hasInitializedCoreListeners = !1,
                this._context = {
                    errorIds: new Set,
                    traceIds: new Set,
                    urls: [],
                    initialTimestamp: Date.now(),
                    initialUrl: ""
                },
                this._recordingOptions = t,
                this._options = e,
                this._debouncedFlush = ko(( () => this._flush()), this._options.flushMinDelay, {
                    maxWait: this._options.flushMaxDelay
                }),
                this._throttledAddEvent = Oo(( (e, t) => Gs(this, e, t)), 300, 5);
                const {slowClickTimeout: n, slowClickIgnoreSelectors: s} = this.getOptions()
                  , r = n ? {
                    threshold: Math.min(W, n),
                    timeout: n,
                    scrollTimeout: H,
                    ignoreSelector: s ? s.join(",") : ""
                } : void 0;
                r && (this.clickDetector = new Kn(this,r))
            }
            getContext() {
                return this._context
            }
            isEnabled() {
                return this._isEnabled
            }
            isPaused() {
                return this._isPaused
            }
            isRecordingCanvas() {
                return Boolean(this._canvas)
            }
            getOptions() {
                return this._options
            }
            initializeSampling(e) {
                const {errorSampleRate: t, sessionSampleRate: n} = this._options;
                t <= 0 && n <= 0 || (this._initializeSessionForSampling(e),
                this.session ? !1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session",
                Cs(`[Replay] Starting replay in ${this.recordingMode} mode`, this._options._experiments.traceInternals),
                this._initializeRecording()) : this._handleException(new Error("Unable to initialize and create session")))
            }
            start() {
                if (this._isEnabled && "session" === this.recordingMode)
                    throw new Error("Replay recording is already in progress");
                if (this._isEnabled && "buffer" === this.recordingMode)
                    throw new Error("Replay buffering is in progress, call `flush()` to save the replay");
                Cs("[Replay] Starting replay in session mode", this._options._experiments.traceInternals),
                this._updateUserActivity();
                const e = Vs({
                    maxReplayDuration: this._options.maxReplayDuration,
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    traceInternals: this._options._experiments.traceInternals
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: 1,
                    allowBuffering: !1
                });
                this.session = e,
                this._initializeRecording()
            }
            startBuffering() {
                if (this._isEnabled)
                    throw new Error("Replay recording is already in progress");
                Cs("[Replay] Starting replay in buffer mode", this._options._experiments.traceInternals);
                const e = Vs({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    traceInternals: this._options._experiments.traceInternals
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: 0,
                    allowBuffering: !0
                });
                this.session = e,
                this.recordingMode = "buffer",
                this._initializeRecording()
            }
            startRecording() {
                try {
                    const e = this._canvas;
                    this._stopRecording = Mn({
                        ...this._recordingOptions,
                        ..."buffer" === this.recordingMode && {
                            checkoutEveryNms: F
                        },
                        emit: vo(this),
                        onMutation: this._onMutationHandler,
                        ...e ? {
                            recordCanvas: e.recordCanvas,
                            getCanvasManager: e.getCanvasManager,
                            sampling: e.sampling,
                            dataURLOptions: e.dataURLOptions
                        } : {}
                    })
                } catch (e) {
                    this._handleException(e)
                }
            }
            stopRecording() {
                try {
                    return this._stopRecording && (this._stopRecording(),
                    this._stopRecording = void 0),
                    !0
                } catch (e) {
                    return this._handleException(e),
                    !1
                }
            }
            async stop({forceFlush: e=!1, reason: t}={}) {
                if (this._isEnabled) {
                    this._isEnabled = !1;
                    try {
                        Is("[Replay] Stopping Replay" + (t ? ` triggered by ${t}` : ""), this._options._experiments.traceInternals),
                        this._removeListeners(),
                        this.stopRecording(),
                        this._debouncedFlush.cancel(),
                        e && await this._flush({
                            force: !0
                        }),
                        this.eventBuffer && this.eventBuffer.destroy(),
                        this.eventBuffer = null,
                        Fs(this)
                    } catch (n) {
                        this._handleException(n)
                    }
                }
            }
            pause() {
                this._isPaused || (this._isPaused = !0,
                this.stopRecording(),
                Is("[Replay] Pausing replay", this._options._experiments.traceInternals))
            }
            resume() {
                this._isPaused && this._checkSession() && (this._isPaused = !1,
                this.startRecording(),
                Is("[Replay] Resuming replay", this._options._experiments.traceInternals))
            }
            async sendBufferedReplayOrFlush({continueRecording: e=!0}={}) {
                if ("session" === this.recordingMode)
                    return this.flushImmediate();
                const t = Date.now();
                Is("[Replay] Converting buffer to session", this._options._experiments.traceInternals),
                await this.flushImmediate();
                const n = this.stopRecording();
                e && n && "session" !== this.recordingMode && (this.recordingMode = "session",
                this.session && (this._updateUserActivity(t),
                this._updateSessionActivity(t),
                this._maybeSaveSession()),
                this.startRecording())
            }
            addUpdate(e) {
                const t = e();
                "buffer" !== this.recordingMode && !0 !== t && this._debouncedFlush()
            }
            triggerUserActivity() {
                if (this._updateUserActivity(),
                this._stopRecording)
                    this.checkAndHandleExpiredSession(),
                    this._updateSessionActivity();
                else {
                    if (!this._checkSession())
                        return;
                    this.resume()
                }
            }
            updateUserActivity() {
                this._updateUserActivity(),
                this._updateSessionActivity()
            }
            conditionalFlush() {
                return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
            }
            flush() {
                return this._debouncedFlush()
            }
            flushImmediate() {
                return this._debouncedFlush(),
                this._debouncedFlush.flush()
            }
            cancelFlush() {
                this._debouncedFlush.cancel()
            }
            getSessionId() {
                return this.session && this.session.id
            }
            checkAndHandleExpiredSession() {
                if (!(this._lastActivity && $s(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled))
                    return !!this._checkSession();
                this.pause()
            }
            setInitialState() {
                const e = `${x.location.pathname}${x.location.hash}${x.location.search}`
                  , t = `${x.location.origin}${e}`;
                this.performanceEntries = [],
                this.replayPerformanceEntries = [],
                this._clearContext(),
                this._context.initialUrl = t,
                this._context.initialTimestamp = Date.now(),
                this._context.urls.push(t)
            }
            throttledAddEvent(e, t) {
                const n = this._throttledAddEvent(e, t);
                if (n === Ro) {
                    const e = es({
                        category: "replay.throttled"
                    });
                    this.addUpdate(( () => !Ys(this, {
                        type: 5,
                        timestamp: e.timestamp || 0,
                        data: {
                            tag: "breadcrumb",
                            payload: e,
                            metric: !0
                        }
                    })))
                }
                return n
            }
            getCurrentRoute() {
                const e = this.lastTransaction || (0,
                o.o5)().getTransaction()
                  , t = undefined
                  , n = (e && (0,
                u.et)(e).data || {})[d.i_];
                if (e && n && ["route", "custom"].includes(n))
                    return (0,
                    u.et)(e).description
            }
            _initializeRecording() {
                this.setInitialState(),
                this._updateSessionActivity(),
                this.eventBuffer = Os({
                    useCompression: this._options.useCompression,
                    workerUrl: this._options.workerUrl
                }),
                this._removeListeners(),
                this._addListeners(),
                this._isEnabled = !0,
                this._isPaused = !1,
                this.startRecording()
            }
            _handleException(e) {
                bs && g.vF.error("[Replay]", e),
                bs && this._options._experiments && this._options._experiments.captureExceptions && (0,
                o.Cp)(e)
            }
            _initializeSessionForSampling(e) {
                const t = this._options.errorSampleRate > 0
                  , n = Vs({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    traceInternals: this._options._experiments.traceInternals,
                    previousSessionId: e
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: this._options.sessionSampleRate,
                    allowBuffering: t
                });
                this.session = n
            }
            _checkSession() {
                if (!this.session)
                    return !1;
                const e = this.session;
                return !Ks(e, {
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration
                }) || (this._refreshSession(e),
                !1)
            }
            async _refreshSession(e) {
                this._isEnabled && (await this.stop({
                    reason: "refresh session"
                }),
                this.initializeSampling(e.id))
            }
            _addListeners() {
                try {
                    x.document.addEventListener("visibilitychange", this._handleVisibilityChange),
                    x.addEventListener("blur", this._handleWindowBlur),
                    x.addEventListener("focus", this._handleWindowFocus),
                    x.addEventListener("keydown", this._handleKeyboardEvent),
                    this.clickDetector && this.clickDetector.addListeners(),
                    this._hasInitializedCoreListeners || (fo(this),
                    this._hasInitializedCoreListeners = !0)
                } catch (e) {
                    this._handleException(e)
                }
                this._performanceCleanupCallback = vs(this)
            }
            _removeListeners() {
                try {
                    x.document.removeEventListener("visibilitychange", this._handleVisibilityChange),
                    x.removeEventListener("blur", this._handleWindowBlur),
                    x.removeEventListener("focus", this._handleWindowFocus),
                    x.removeEventListener("keydown", this._handleKeyboardEvent),
                    this.clickDetector && this.clickDetector.removeListeners(),
                    this._performanceCleanupCallback && this._performanceCleanupCallback()
                } catch (e) {
                    this._handleException(e)
                }
            }
            __init() {
                this._handleVisibilityChange = () => {
                    "visible" === x.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
                }
            }
            __init2() {
                this._handleWindowBlur = () => {
                    const e = es({
                        category: "ui.blur"
                    });
                    this._doChangeToBackgroundTasks(e)
                }
            }
            __init3() {
                this._handleWindowFocus = () => {
                    const e = es({
                        category: "ui.focus"
                    });
                    this._doChangeToForegroundTasks(e)
                }
            }
            __init4() {
                this._handleKeyboardEvent = e => {
                    ls(this, e)
                }
            }
            _doChangeToBackgroundTasks(e) {
                if (!this.session)
                    return;
                const t = undefined;
                qs(this.session, {
                    maxReplayDuration: this._options.maxReplayDuration,
                    sessionIdleExpire: this.timeouts.sessionIdleExpire
                }) || (e && this._createCustomBreadcrumb(e),
                this.conditionalFlush())
            }
            _doChangeToForegroundTasks(e) {
                if (!this.session)
                    return;
                const t = undefined;
                this.checkAndHandleExpiredSession() ? e && this._createCustomBreadcrumb(e) : Is("[Replay] Document has become active, but session has expired")
            }
            _updateUserActivity(e=Date.now()) {
                this._lastActivity = e
            }
            _updateSessionActivity(e=Date.now()) {
                this.session && (this.session.lastActivity = e,
                this._maybeSaveSession())
            }
            _createCustomBreadcrumb(e) {
                this.addUpdate(( () => {
                    this.throttledAddEvent({
                        type: Mt.Custom,
                        timestamp: e.timestamp || 0,
                        data: {
                            tag: "breadcrumb",
                            payload: e
                        }
                    })
                }
                ))
            }
            _addPerformanceEntries() {
                const e = ps(this.performanceEntries).concat(this.replayPerformanceEntries);
                return this.performanceEntries = [],
                this.replayPerformanceEntries = [],
                Promise.all(mr(this, e))
            }
            _clearContext() {
                this._context.errorIds.clear(),
                this._context.traceIds.clear(),
                this._context.urls = []
            }
            _updateInitialTimestampFromEventBuffer() {
                const {session: e, eventBuffer: t} = this;
                if (!e || !t)
                    return;
                if (e.segmentId)
                    return;
                const n = t.getEarliestTimestamp();
                n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
            }
            _popEventContext() {
                const e = {
                    initialTimestamp: this._context.initialTimestamp,
                    initialUrl: this._context.initialUrl,
                    errorIds: Array.from(this._context.errorIds),
                    traceIds: Array.from(this._context.traceIds),
                    urls: this._context.urls
                };
                return this._clearContext(),
                e
            }
            async _runFlush() {
                const e = this.getSessionId();
                if (this.session && this.eventBuffer && e) {
                    if (await this._addPerformanceEntries(),
                    this.eventBuffer && this.eventBuffer.hasEvents && (await go(this),
                    this.eventBuffer && e === this.getSessionId()))
                        try {
                            this._updateInitialTimestampFromEventBuffer();
                            const t = Date.now();
                            if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4)
                                throw new Error("Session is too long, not sending replay");
                            const n = this._popEventContext()
                              , s = this.session.segmentId++;
                            this._maybeSaveSession();
                            const r = await this.eventBuffer.finish();
                            await Mo({
                                replayId: e,
                                recordingData: r,
                                segmentId: s,
                                eventContext: n,
                                session: this.session,
                                options: this.getOptions(),
                                timestamp: t
                            })
                        } catch (t) {
                            this._handleException(t),
                            this.stop({
                                reason: "sendReplay"
                            });
                            const e = (0,
                            o.KU)();
                            e && e.recordDroppedEvent("send_error", "replay")
                        }
                } else
                    bs && g.vF.error("[Replay] No session or eventBuffer found to flush.")
            }
            __init5() {
                this._flush = async ({force: e=!1}={}) => {
                    if (!this._isEnabled && !e)
                        return;
                    if (!this.checkAndHandleExpiredSession())
                        return void (bs && g.vF.error("[Replay] Attempting to finish replay event after session expired."));
                    if (!this.session)
                        return;
                    const t = this.session.started
                      , n = undefined
                      , s = Date.now() - t;
                    this._debouncedFlush.cancel();
                    const r = s < this._options.minReplayDuration
                      , o = s > this._options.maxReplayDuration + 5e3;
                    if (r || o)
                        return Is(`[Replay] Session duration (${Math.floor(s / 1e3)}s) is too ${r ? "short" : "long"}, not sending replay.`, this._options._experiments.traceInternals),
                        void (r && this._debouncedFlush());
                    const i = this.eventBuffer;
                    if (i && 0 === this.session.segmentId && !i.hasCheckout && Is("[Replay] Flushing initial segment without checkout.", this._options._experiments.traceInternals),
                    !this._flushLock)
                        return this._flushLock = this._runFlush(),
                        await this._flushLock,
                        void (this._flushLock = void 0);
                    try {
                        await this._flushLock
                    } catch (a) {
                        bs && g.vF.error(a)
                    } finally {
                        this._debouncedFlush()
                    }
                }
            }
            _maybeSaveSession() {
                this.session && this._options.stickySession && zs(this.session)
            }
            __init6() {
                this._onMutationHandler = e => {
                    const t = e.length
                      , n = this._options.mutationLimit
                      , s = undefined
                      , r = n && t > n;
                    if (t > this._options.mutationBreadcrumbLimit || r) {
                        const e = es({
                            category: "replay.mutations",
                            data: {
                                count: t,
                                limit: r
                            }
                        });
                        this._createCustomBreadcrumb(e)
                    }
                    return !r || (this.stop({
                        reason: "mutationLimit",
                        forceFlush: "session" === this.recordingMode
                    }),
                    !1)
                }
            }
        }
        function Lo(e, t, n, s) {
            const r = undefined
              , o = [...e, ..."string" == typeof s ? s.split(",") : [], ...t];
            return void 0 !== n && ("string" == typeof n && o.push(`.${n}`),
            (0,
            g.pq)(( () => {
                console.warn("[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.")
            }
            ))),
            o.join(",")
        }
        function No({mask: e, unmask: t, block: n, unblock: s, ignore: r, blockClass: o, blockSelector: i, maskTextClass: a, maskTextSelector: c, ignoreClass: l}) {
            const u = ['base[href="/"]']
              , d = undefined
              , h = undefined
              , p = {
                maskTextSelector: Lo(e, [".sentry-mask", "[data-sentry-mask]"], a, c),
                unmaskTextSelector: Lo(t, [".sentry-unmask", "[data-sentry-unmask]"]),
                blockSelector: Lo(n, [".sentry-block", "[data-sentry-block]", ...u], o, i),
                unblockSelector: Lo(s, [".sentry-unblock", "[data-sentry-unblock]"]),
                ignoreSelector: Lo(r, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'], l)
            };
            return o instanceof RegExp && (p.blockClass = o),
            a instanceof RegExp && (p.maskTextClass = a),
            p
        }
        function Fo({el: e, key: t, maskAttributes: n, maskAllText: s, privacyOptions: r, value: o}) {
            return s ? r.unmaskTextSelector && e.matches(r.unmaskTextSelector) ? o : n.includes(t) || "value" === t && "INPUT" === e.tagName && ["submit", "button"].includes(e.getAttribute("type") || "") ? o.replace(/[\S]/g, "*") : o : o
        }
        const Bo = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]'
          , Po = ["content-length", "content-type", "accept"];
        let Uo = !1;
        const zo = e => new Wo(e);
        class Wo {
            static __initStatic() {
                this.id = "Replay"
            }
            constructor({flushMinDelay: e=5e3, flushMaxDelay: t=5500, minReplayDuration: n=4999, maxReplayDuration: s=36e5, stickySession: r=!0, useCompression: o=!0, workerUrl: i, _experiments: a={}, sessionSampleRate: c, errorSampleRate: l, maskAllText: u=!0, maskAllInputs: d=!0, blockAllMedia: h=!0, mutationBreadcrumbLimit: p=750, mutationLimit: m=1e4, slowClickTimeout: f=7e3, slowClickIgnoreSelectors: y=[], networkDetailAllowUrls: g=[], networkDetailDenyUrls: S=[], networkCaptureBodies: k=!0, networkRequestHeaders: v=[], networkResponseHeaders: b=[], mask: _=[], maskAttributes: w=["title", "placeholder"], unmask: I=[], block: C=[], unblock: T=[], ignore: x=[], maskFn: M, beforeAddRecordingEvent: R, beforeErrorSampling: A, blockClass: O, blockSelector: D, maskInputOptions: L, maskTextClass: N, maskTextSelector: F, ignoreClass: B}={}) {
                this.name = Wo.id;
                const P = No({
                    mask: _,
                    unmask: I,
                    block: C,
                    unblock: T,
                    ignore: x,
                    blockClass: O,
                    blockSelector: D,
                    maskTextClass: N,
                    maskTextSelector: F,
                    ignoreClass: B
                });
                if (this._recordingOptions = {
                    maskAllInputs: d,
                    maskAllText: u,
                    maskInputOptions: {
                        ...L || {},
                        password: !0
                    },
                    maskTextFn: M,
                    maskInputFn: M,
                    maskAttributeFn: (e, t, n) => Fo({
                        maskAttributes: w,
                        maskAllText: u,
                        privacyOptions: P,
                        key: e,
                        value: t,
                        el: n
                    }),
                    ...P,
                    slimDOMOptions: "all",
                    inlineStylesheet: !0,
                    inlineImages: !1,
                    collectFonts: !0,
                    errorHandler: e => {
                        try {
                            e.__rrweb__ = !0
                        } catch (t) {}
                    }
                },
                this._initialOptions = {
                    flushMinDelay: e,
                    flushMaxDelay: t,
                    minReplayDuration: Math.min(n, q),
                    maxReplayDuration: Math.min(s, K),
                    stickySession: r,
                    sessionSampleRate: c,
                    errorSampleRate: l,
                    useCompression: o,
                    workerUrl: i,
                    blockAllMedia: h,
                    maskAllInputs: d,
                    maskAllText: u,
                    mutationBreadcrumbLimit: p,
                    mutationLimit: m,
                    slowClickTimeout: f,
                    slowClickIgnoreSelectors: y,
                    networkDetailAllowUrls: g,
                    networkDetailDenyUrls: S,
                    networkCaptureBodies: k,
                    networkRequestHeaders: jo(v),
                    networkResponseHeaders: jo(b),
                    beforeAddRecordingEvent: R,
                    beforeErrorSampling: A,
                    _experiments: a
                },
                "number" == typeof c && (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysSessionSampleRate: ${c} })`),
                this._initialOptions.sessionSampleRate = c),
                "number" == typeof l && (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysOnErrorSampleRate: ${l} })`),
                this._initialOptions.errorSampleRate = l),
                this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${Bo}` : Bo),
                this._isInitialized && (0,
                E.B)())
                    throw new Error("Multiple Sentry Session Replay instances are not supported");
                this._isInitialized = !0
            }
            get _isInitialized() {
                return Uo
            }
            set _isInitialized(e) {
                Uo = e
            }
            setupOnce() {
                (0,
                E.B)() && (this._setup(),
                setTimeout(( () => this._initialize())))
            }
            start() {
                this._replay && this._replay.start()
            }
            startBuffering() {
                this._replay && this._replay.startBuffering()
            }
            stop() {
                return this._replay ? this._replay.stop({
                    forceFlush: "session" === this._replay.recordingMode
                }) : Promise.resolve()
            }
            flush(e) {
                return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : Promise.resolve()
            }
            getReplayId() {
                if (this._replay && this._replay.isEnabled())
                    return this._replay.getSessionId()
            }
            _initialize() {
                this._replay && (this._maybeLoadFromReplayCanvasIntegration(),
                this._replay.initializeSampling())
            }
            _setup() {
                const e = Ho(this._initialOptions);
                this._replay = new Do({
                    options: e,
                    recordingOptions: this._recordingOptions
                })
            }
            _maybeLoadFromReplayCanvasIntegration() {
                try {
                    const e = undefined
                      , t = (0,
                    o.KU)().getIntegrationByName("ReplayCanvas");
                    if (!t)
                        return;
                    this._replay._canvas = t.getOptions()
                } catch (ws) {}
            }
        }
        function Ho(e) {
            const t = (0,
            o.KU)()
              , n = t && t.getOptions()
              , s = {
                sessionSampleRate: 0,
                errorSampleRate: 0,
                ...(0,
                m.Ce)(e)
            };
            return n ? (null == e.sessionSampleRate && null == e.errorSampleRate && null == n.replaysSessionSampleRate && null == n.replaysOnErrorSampleRate && (0,
            g.pq)(( () => {
                console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
            }
            )),
            "number" == typeof n.replaysSessionSampleRate && (s.sessionSampleRate = n.replaysSessionSampleRate),
            "number" == typeof n.replaysOnErrorSampleRate && (s.errorSampleRate = n.replaysOnErrorSampleRate),
            s) : ((0,
            g.pq)(( () => {
                console.warn("SDK client is not available.")
            }
            )),
            s)
        }
        function jo(e) {
            return [...Po, ...e.map((e => e.toLowerCase()))]
        }
        function $o() {
            const e = (0,
            o.KU)();
            return e && e.getIntegrationByName && e.getIntegrationByName("Replay")
        }
        Wo.__initStatic();
        const qo = null
          , Ko = null;
        class Vo extends (null) {
        }
    }
}]);
