"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[10888], {
    246762: function(e, t, n) {
        n.d(t, {
            $f: function() {
                return R
            },
            G2: function() {
                return w
            },
            I$: function() {
                return C
            },
            Im: function() {
                return D
            },
            Qv: function() {
                return s
            },
            Sd: function() {
                return g
            },
            Z1: function() {
                return I
            },
            _G: function() {
                return a
            },
            _e: function() {
                return d
            },
            bh: function() {
                return $
            },
            eB: function() {
                return f
            },
            eT: function() {
                return y
            },
            ec: function() {
                return j
            },
            hy: function() {
                return z
            },
            ic: function() {
                return l
            },
            iz: function() {
                return M
            },
            pC: function() {
                return x
            },
            yY: function() {
                return b
            },
            y_: function() {
                return F
            }
        });
        var r = n(238262)
          , o = n(742225)
          , i = n(342845);
        const l = (e, t) => !e.selection.empty && (t && t(e.tr.deleteSelection().scrollIntoView()),
        !0);
        function c(e, t) {
            let {$cursor: n} = e.selection;
            return !n || (t ? !t.endOfTextblock("backward", e) : n.parentOffset > 0) ? null : n
        }
        const s = (e, t, n) => {
            let l = c(e, n);
            if (!l)
                return !1;
            let s = h(l);
            if (!s) {
                let n = l.blockRange()
                  , o = n && (0,
                r.jP)(n);
                return null != o && (t && t(e.tr.lift(n, o).scrollIntoView()),
                !0)
            }
            let f = s.nodeBefore;
            if (!f.type.spec.isolating && O(e, s, t))
                return !0;
            if (0 == l.parent.content.size && (u(f, "end") || i.nh.isSelectable(f))) {
                let n = (0,
                r.$L)(e.doc, l.before(), l.after(), o.Ji.empty);
                if (n && n.slice.size < n.to - n.from) {
                    if (t) {
                        let r = e.tr.step(n);
                        r.setSelection(u(f, "end") ? i.LN.findFrom(r.doc.resolve(r.mapping.map(s.pos, -1)), -1) : i.nh.create(r.doc, s.pos - f.nodeSize)),
                        t(r.scrollIntoView())
                    }
                    return !0
                }
            }
            return !(!f.isAtom || s.depth != l.depth - 1) && (t && t(e.tr.delete(s.pos - f.nodeSize, s.pos).scrollIntoView()),
            !0)
        }
          , f = (e, t, n) => {
            let r = c(e, n);
            if (!r)
                return !1;
            let o = h(r);
            return !!o && p(e, o, t)
        }
          , a = (e, t, n) => {
            let r = m(e, n);
            if (!r)
                return !1;
            let o = k(r);
            return !!o && p(e, o, t)
        }
        ;
        function p(e, t, n) {
            let l, c = t.nodeBefore, s = t.pos - 1;
            for (; !c.isTextblock; s--) {
                if (c.type.spec.isolating)
                    return !1;
                let e = c.lastChild;
                if (!e)
                    return !1;
                c = e
            }
            let f, a = t.nodeAfter, p = t.pos + 1;
            for (; !a.isTextblock; p++) {
                if (a.type.spec.isolating)
                    return !1;
                let e = a.firstChild;
                if (!e)
                    return !1;
                a = e
            }
            let u = (0,
            r.$L)(e.doc, s, p, o.Ji.empty);
            if (!u || u.from != s || u instanceof r.Ln && u.slice.size >= p - s)
                return !1;
            if (n) {
                let t = e.tr.step(u);
                t.setSelection(i.U3.create(t.doc, s)),
                n(t.scrollIntoView())
            }
            return !0
        }
        function u(e, t, n=!1) {
            for (let r = e; r; r = "start" == t ? r.firstChild : r.lastChild) {
                if (r.isTextblock)
                    return !0;
                if (n && 1 != r.childCount)
                    return !1
            }
            return !1
        }
        const d = (e, t, n) => {
            let {$head: r, empty: o} = e.selection
              , l = r;
            if (!o)
                return !1;
            if (r.parent.isTextblock) {
                if (n ? !n.endOfTextblock("backward", e) : r.parentOffset > 0)
                    return !1;
                l = h(r)
            }
            let c = l && l.nodeBefore;
            return !(!c || !i.nh.isSelectable(c)) && (t && t(e.tr.setSelection(i.nh.create(e.doc, l.pos - c.nodeSize)).scrollIntoView()),
            !0)
        }
        ;
        function h(e) {
            if (!e.parent.type.spec.isolating)
                for (let t = e.depth - 1; t >= 0; t--) {
                    if (e.index(t) > 0)
                        return e.doc.resolve(e.before(t + 1));
                    if (e.node(t).type.spec.isolating)
                        break
                }
            return null
        }
        function m(e, t) {
            let {$cursor: n} = e.selection;
            return !n || (t ? !t.endOfTextblock("forward", e) : n.parentOffset < n.parent.content.size) ? null : n
        }
        const y = (e, t, n) => {
            let l = m(e, n);
            if (!l)
                return !1;
            let c = k(l);
            if (!c)
                return !1;
            let s = c.nodeAfter;
            if (O(e, c, t))
                return !0;
            if (0 == l.parent.content.size && (u(s, "start") || i.nh.isSelectable(s))) {
                let n = (0,
                r.$L)(e.doc, l.before(), l.after(), o.Ji.empty);
                if (n && n.slice.size < n.to - n.from) {
                    if (t) {
                        let r = e.tr.step(n);
                        r.setSelection(u(s, "start") ? i.LN.findFrom(r.doc.resolve(r.mapping.map(c.pos)), 1) : i.nh.create(r.doc, r.mapping.map(c.pos))),
                        t(r.scrollIntoView())
                    }
                    return !0
                }
            }
            return !(!s.isAtom || c.depth != l.depth - 1) && (t && t(e.tr.delete(c.pos, c.pos + s.nodeSize).scrollIntoView()),
            !0)
        }
          , g = (e, t, n) => {
            let {$head: r, empty: o} = e.selection
              , l = r;
            if (!o)
                return !1;
            if (r.parent.isTextblock) {
                if (n ? !n.endOfTextblock("forward", e) : r.parentOffset < r.parent.content.size)
                    return !1;
                l = k(r)
            }
            let c = l && l.nodeAfter;
            return !(!c || !i.nh.isSelectable(c)) && (t && t(e.tr.setSelection(i.nh.create(e.doc, l.pos)).scrollIntoView()),
            !0)
        }
        ;
        function k(e) {
            if (!e.parent.type.spec.isolating)
                for (let t = e.depth - 1; t >= 0; t--) {
                    let n = e.node(t);
                    if (e.index(t) + 1 < n.childCount)
                        return e.doc.resolve(e.after(t + 1));
                    if (n.type.spec.isolating)
                        break
                }
            return null
        }
        const w = (e, t) => {
            let n = e.selection, o = n instanceof i.nh, l;
            if (o) {
                if (n.node.isTextblock || !(0,
                r.n9)(e.doc, n.from))
                    return !1;
                l = n.from
            } else if (l = (0,
            r.N0)(e.doc, n.from, -1),
            null == l)
                return !1;
            if (t) {
                let n = e.tr.join(l);
                o && n.setSelection(i.nh.create(n.doc, l - e.doc.resolve(l).nodeBefore.nodeSize)),
                t(n.scrollIntoView())
            }
            return !0
        }
          , $ = (e, t) => {
            let n = e.selection, o;
            if (n instanceof i.nh) {
                if (n.node.isTextblock || !(0,
                r.n9)(e.doc, n.to))
                    return !1;
                o = n.to
            } else if (o = (0,
            r.N0)(e.doc, n.to, 1),
            null == o)
                return !1;
            return t && t(e.tr.join(o).scrollIntoView()),
            !0
        }
          , b = (e, t) => {
            let {$from: n, $to: o} = e.selection
              , i = n.blockRange(o)
              , l = i && (0,
            r.jP)(i);
            return null != l && (t && t(e.tr.lift(i, l).scrollIntoView()),
            !0)
        }
          , x = (e, t) => {
            let {$head: n, $anchor: r} = e.selection;
            return !(!n.parent.type.spec.code || !n.sameParent(r)) && (t && t(e.tr.insertText("\n").scrollIntoView()),
            !0)
        }
        ;
        function S(e) {
            for (let t = 0; t < e.edgeCount; t++) {
                let {type: n} = e.edge(t);
                if (n.isTextblock && !n.hasRequiredAttrs())
                    return n
            }
            return null
        }
        const C = (e, t) => {
            let {$head: n, $anchor: r} = e.selection;
            if (!n.parent.type.spec.code || !n.sameParent(r))
                return !1;
            let o = n.node(-1)
              , l = n.indexAfter(-1)
              , c = S(o.contentMatchAt(l));
            if (!c || !o.canReplaceWith(l, l, c))
                return !1;
            if (t) {
                let r = n.after()
                  , o = e.tr.replaceWith(r, r, c.createAndFill());
                o.setSelection(i.LN.near(o.doc.resolve(r), 1)),
                t(o.scrollIntoView())
            }
            return !0
        }
          , I = (e, t) => {
            let n = e.selection
              , {$from: r, $to: o} = n;
            if (n instanceof i.i5 || r.parent.inlineContent || o.parent.inlineContent)
                return !1;
            let l = S(o.parent.contentMatchAt(o.indexAfter()));
            if (!l || !l.isTextblock)
                return !1;
            if (t) {
                let n = (!r.parentOffset && o.index() < o.parent.childCount ? r : o).pos
                  , c = e.tr.insert(n, l.createAndFill());
                c.setSelection(i.U3.create(c.doc, n + 1)),
                t(c.scrollIntoView())
            }
            return !0
        }
          , M = (e, t) => {
            let {$cursor: n} = e.selection;
            if (!n || n.parent.content.size)
                return !1;
            if (n.depth > 1 && n.after() != n.end(-1)) {
                let o = n.before();
                if ((0,
                r.zy)(e.doc, o))
                    return t && t(e.tr.split(o).scrollIntoView()),
                    !0
            }
            let o = n.blockRange()
              , i = o && (0,
            r.jP)(o);
            return null != i && (t && t(e.tr.lift(o, i).scrollIntoView()),
            !0)
        }
        ;
        function A(e) {
            return (t, n) => {
                let {$from: o, $to: l} = t.selection;
                if (t.selection instanceof i.nh && t.selection.node.isBlock)
                    return !(!o.parentOffset || !(0,
                    r.zy)(t.doc, o.pos)) && (n && n(t.tr.split(o.pos).scrollIntoView()),
                    !0);
                if (!o.parent.isBlock)
                    return !1;
                if (n) {
                    let c = l.parentOffset == l.parent.content.size
                      , s = t.tr;
                    (t.selection instanceof i.U3 || t.selection instanceof i.i5) && s.deleteSelection();
                    let f = 0 == o.depth ? null : S(o.node(-1).contentMatchAt(o.indexAfter(-1)))
                      , a = e && e(l.parent, c)
                      , p = a ? [a] : c && f ? [{
                        type: f
                    }] : void 0
                      , u = (0,
                    r.zy)(s.doc, s.mapping.map(o.pos), 1, p);
                    if (p || u || !(0,
                    r.zy)(s.doc, s.mapping.map(o.pos), 1, f ? [{
                        type: f
                    }] : void 0) || (f && (p = [{
                        type: f
                    }]),
                    u = !0),
                    u && (s.split(s.mapping.map(o.pos), 1, p),
                    !c && !o.parentOffset && o.parent.type != f)) {
                        let e = s.mapping.map(o.before())
                          , t = s.doc.resolve(e);
                        f && o.node(-1).canReplaceWith(t.index(), t.index() + 1, f) && s.setNodeMarkup(s.mapping.map(o.before()), f)
                    }
                    n(s.scrollIntoView())
                }
                return !0
            }
        }
        const T = A()
          , V = (e, t) => T(e, t && (n => {
            let r = e.storedMarks || e.selection.$to.parentOffset && e.selection.$from.marks();
            r && n.ensureMarks(r),
            t(n)
        }
        ))
          , z = (e, t) => {
            let {$from: n, to: r} = e.selection, o, l = n.sharedDepth(r);
            return 0 != l && (o = n.before(l),
            t && t(e.tr.setSelection(i.nh.create(e.doc, o))),
            !0)
        }
          , v = (e, t) => (t && t(e.tr.setSelection(new i.i5(e.doc))),
        !0);
        function B(e, t, n) {
            let o = t.nodeBefore
              , i = t.nodeAfter
              , l = t.index();
            return !!(o && i && o.type.compatibleContent(i.type)) && (!o.content.size && t.parent.canReplace(l - 1, l) ? (n && n(e.tr.delete(t.pos - o.nodeSize, t.pos).scrollIntoView()),
            !0) : !(!t.parent.canReplace(l, l + 1) || !i.isTextblock && !(0,
            r.n9)(e.doc, t.pos)) && (n && n(e.tr.clearIncompatible(t.pos, o.type, o.contentMatchAt(o.childCount)).join(t.pos).scrollIntoView()),
            !0))
        }
        function O(e, t, n) {
            let l = t.nodeBefore, c = t.nodeAfter, s, f;
            if (l.type.spec.isolating || c.type.spec.isolating)
                return !1;
            if (B(e, t, n))
                return !0;
            let a = t.parent.canReplace(t.index(), t.index() + 1);
            if (a && (s = (f = l.contentMatchAt(l.childCount)).findWrapping(c.type)) && f.matchType(s[0] || c.type).validEnd) {
                if (n) {
                    let i = t.pos + c.nodeSize
                      , f = o.FK.empty;
                    for (let e = s.length - 1; e >= 0; e--)
                        f = o.FK.from(s[e].create(null, f));
                    f = o.FK.from(l.copy(f));
                    let a = e.tr.step(new r.Wg(t.pos - 1,i,t.pos,i,new o.Ji(f,1,0),s.length,!0))
                      , p = i + 2 * s.length;
                    (0,
                    r.n9)(a.doc, p) && a.join(p),
                    n(a.scrollIntoView())
                }
                return !0
            }
            let p = i.LN.findFrom(t, 1)
              , d = p && p.$from.blockRange(p.$to)
              , h = d && (0,
            r.jP)(d);
            if (null != h && h >= t.depth)
                return n && n(e.tr.lift(d, h).scrollIntoView()),
                !0;
            if (a && u(c, "start", !0) && u(l, "end")) {
                let i = l
                  , s = [];
                for (; s.push(i),
                !i.isTextblock; )
                    i = i.lastChild;
                let f = c
                  , a = 1;
                for (; !f.isTextblock; f = f.firstChild)
                    a++;
                if (i.canReplace(i.childCount, i.childCount, f.content)) {
                    if (n) {
                        let i = o.FK.empty, l;
                        for (let e = s.length - 1; e >= 0; e--)
                            i = o.FK.from(s[e].copy(i));
                        n(e.tr.step(new r.Wg(t.pos - s.length,t.pos + c.nodeSize,t.pos + a,t.pos + c.nodeSize - a,new o.Ji(i,s.length,0),0,!0)).scrollIntoView())
                    }
                    return !0
                }
            }
            return !1
        }
        function K(e) {
            return function(t, n) {
                let r = t.selection
                  , o = e < 0 ? r.$from : r.$to
                  , l = o.depth;
                for (; o.node(l).isInline; ) {
                    if (!l)
                        return !1;
                    l--
                }
                return !!o.node(l).isTextblock && (n && n(t.tr.setSelection(i.U3.create(t.doc, e < 0 ? o.start(l) : o.end(l)))),
                !0)
            }
        }
        const R = K(-1)
          , j = K(1);
        function D(e, t=null) {
            return function(n, o) {
                let {$from: i, $to: l} = n.selection
                  , c = i.blockRange(l)
                  , s = c && (0,
                r.oM)(c, e, t);
                return !!s && (o && o(n.tr.wrap(c, s).scrollIntoView()),
                !0)
            }
        }
        function F(e, t=null) {
            return function(n, r) {
                let o = !1;
                for (let i = 0; i < n.selection.ranges.length && !o; i++) {
                    let {$from: {pos: r}, $to: {pos: l}} = n.selection.ranges[i];
                    n.doc.nodesBetween(r, l, ( (r, i) => {
                        if (o)
                            return !1;
                        if (r.isTextblock && !r.hasMarkup(e, t))
                            if (r.type == e)
                                o = !0;
                            else {
                                let t = n.doc.resolve(i)
                                  , r = t.index();
                                o = t.parent.canReplaceWith(r, r + 1, e)
                            }
                    }
                    ))
                }
                if (!o)
                    return !1;
                if (r) {
                    let o = n.tr;
                    for (let r = 0; r < n.selection.ranges.length; r++) {
                        let {$from: {pos: i}, $to: {pos: l}} = n.selection.ranges[r];
                        o.setBlockType(i, l, e, t)
                    }
                    r(o.scrollIntoView())
                }
                return !0
            }
        }
        function L(e, t, n) {
            for (let r = 0; r < t.length; r++) {
                let {$from: o, $to: i} = t[r]
                  , l = 0 == o.depth && (e.inlineContent && e.type.allowsMarkType(n));
                if (e.nodesBetween(o.pos, i.pos, (e => {
                    if (l)
                        return !1;
                    l = e.inlineContent && e.type.allowsMarkType(n)
                }
                )),
                l)
                    return !0
            }
            return !1
        }
        function P(e, t=null) {
            return function(n, r) {
                let {empty: o, $cursor: i, ranges: l} = n.selection;
                if (o && !i || !L(n.doc, l, e))
                    return !1;
                if (r)
                    if (i)
                        e.isInSet(n.storedMarks || i.marks()) ? r(n.tr.removeStoredMark(e)) : r(n.tr.addStoredMark(e.create(t)));
                    else {
                        let o = !1
                          , i = n.tr;
                        for (let t = 0; !o && t < l.length; t++) {
                            let {$from: r, $to: i} = l[t];
                            o = n.doc.rangeHasMark(r.pos, i.pos, e)
                        }
                        for (let n = 0; n < l.length; n++) {
                            let {$from: r, $to: c} = l[n];
                            if (o)
                                i.removeMark(r.pos, c.pos, e);
                            else {
                                let n = r.pos
                                  , o = c.pos
                                  , l = r.nodeAfter
                                  , s = c.nodeBefore
                                  , f = l && l.isText ? /^\s*/.exec(l.text)[0].length : 0
                                  , a = s && s.isText ? /\s*$/.exec(s.text)[0].length : 0;
                                n + f < o && (n += f,
                                o -= a),
                                i.addMark(n, o, e.create(t))
                            }
                        }
                        r(i.scrollIntoView())
                    }
                return !0
            }
        }
        function N(e, t) {
            return n => {
                if (!n.isGeneric)
                    return e(n);
                let r = [];
                for (let e = 0; e < n.mapping.maps.length; e++) {
                    let t = n.mapping.maps[e];
                    for (let e = 0; e < r.length; e++)
                        r[e] = t.map(r[e]);
                    t.forEach(( (e, t, n, o) => r.push(n, o)))
                }
                let o = [];
                for (let e = 0; e < r.length; e += 2) {
                    let i = r[e]
                      , l = r[e + 1]
                      , c = n.doc.resolve(i)
                      , s = c.sharedDepth(l)
                      , f = c.node(s);
                    for (let e = c.indexAfter(s), n = c.after(s + 1); n <= l; ++e) {
                        let r = f.maybeChild(e);
                        if (!r)
                            break;
                        if (e && -1 == o.indexOf(n)) {
                            let i = f.child(e - 1);
                            i.type == r.type && t(i, r) && o.push(n)
                        }
                        n += r.nodeSize
                    }
                }
                o.sort(( (e, t) => e - t));
                for (let e = o.length - 1; e >= 0; e--)
                    canJoin(n.doc, o[e]) && n.join(o[e]);
                e(n)
            }
        }
        function W(e, t) {
            let n = Array.isArray(t) ? e => t.indexOf(e.type.name) > -1 : t;
            return (t, r, o) => e(t, r && N(r, n), o)
        }
        function E(...e) {
            return function(t, n, r) {
                for (let o = 0; o < e.length; o++)
                    if (e[o](t, n, r))
                        return !0;
                return !1
            }
        }
        let J = E(l, s, d)
          , _ = E(l, y, g);
        const U = {
            Enter: E(x, I, M, T),
            "Mod-Enter": C,
            Backspace: J,
            "Mod-Backspace": J,
            "Shift-Backspace": J,
            Delete: _,
            "Mod-Delete": _,
            "Mod-a": v
        }
          , G = {
            "Ctrl-h": U.Backspace,
            "Alt-Backspace": U["Mod-Backspace"],
            "Ctrl-d": U.Delete,
            "Ctrl-Alt-Backspace": U["Mod-Delete"],
            "Alt-Delete": U["Mod-Delete"],
            "Alt-d": U["Mod-Delete"],
            "Ctrl-a": R,
            "Ctrl-e": j
        };
        for (let Q in U)
            G[Q] = U[Q];
        const q = "undefined" != typeof navigator ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !("undefined" == typeof os || !os.platform) && "darwin" == os.platform()
          , H = null
    },
    114413: function(e, t, n) {
        n.d(t, {
            w: function() {
                return f
            }
        });
        var r = n(462534)
          , o = n(342845);
        const i = "undefined" != typeof navigator && /Mac|iP(hone|[oa]d)/.test(navigator.platform);
        function l(e) {
            let t = e.split(/-(?!$)/), n = t[t.length - 1], r, o, l, c;
            "Space" == n && (n = " ");
            for (let s = 0; s < t.length - 1; s++) {
                let e = t[s];
                if (/^(cmd|meta|m)$/i.test(e))
                    c = !0;
                else if (/^a(lt)?$/i.test(e))
                    r = !0;
                else if (/^(c|ctrl|control)$/i.test(e))
                    o = !0;
                else if (/^s(hift)?$/i.test(e))
                    l = !0;
                else {
                    if (!/^mod$/i.test(e))
                        throw new Error("Unrecognized modifier name: " + e);
                    i ? c = !0 : o = !0
                }
            }
            return r && (n = "Alt-" + n),
            o && (n = "Ctrl-" + n),
            c && (n = "Meta-" + n),
            l && (n = "Shift-" + n),
            n
        }
        function c(e) {
            let t = Object.create(null);
            for (let n in e)
                t[l(n)] = e[n];
            return t
        }
        function s(e, t, n=!0) {
            return t.altKey && (e = "Alt-" + e),
            t.ctrlKey && (e = "Ctrl-" + e),
            t.metaKey && (e = "Meta-" + e),
            n && t.shiftKey && (e = "Shift-" + e),
            e
        }
        function f(e) {
            return new o.k_({
                props: {
                    handleKeyDown: a(e)
                }
            })
        }
        function a(e) {
            let t = c(e);
            return function(e, n) {
                let o = (0,
                r.xT)(n), i, l = t[s(o, n)];
                if (l && l(e.state, e.dispatch, e))
                    return !0;
                if (1 == o.length && " " != o) {
                    if (n.shiftKey) {
                        let r = t[s(o, n, !1)];
                        if (r && r(e.state, e.dispatch, e))
                            return !0
                    }
                    if ((n.shiftKey || n.altKey || n.metaKey || o.charCodeAt(0) > 127) && (i = r.E3[n.keyCode]) && i != o) {
                        let r = t[s(i, n)];
                        if (r && r(e.state, e.dispatch, e))
                            return !0
                    }
                }
                return !1
            }
        }
    }
}]);
