"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[74089, 68772, 78005, 85747, 8128, 40985], {
    285747: function(a, e, l) {
        var t = l(841430)
          , s = l(681559)
          , r = l(950162);
        function i() {
            return i = Object.assign || function(a) {
                for (var e = 1; e < arguments.length; e++) {
                    var l = arguments[e];
                    for (var t in l)
                        Object.prototype.hasOwnProperty.call(l, t) && (a[t] = l[t])
                }
                return a
            }
            ,
            i.apply(this, arguments)
        }
        var n = {
            loadInSlide: function a(e, l) {
                void 0 === l && (l = !0);
                var t = this
                  , r = t.params.lazy;
                if (void 0 !== e && 0 !== t.slides.length) {
                    var i, n = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children("." + t.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : t.slides.eq(e), d = n.find("." + r.elementClass + ":not(." + r.loadedClass + "):not(." + r.loadingClass + ")");
                    !n.hasClass(r.elementClass) || n.hasClass(r.loadedClass) || n.hasClass(r.loadingClass) || d.push(n[0]),
                    0 !== d.length && d.each((function(a) {
                        var e = (0,
                        s.A)(a);
                        e.addClass(r.loadingClass);
                        var i = e.attr("data-background")
                          , d = e.attr("data-src")
                          , o = e.attr("data-srcset")
                          , c = e.attr("data-sizes")
                          , p = e.parent("picture");
                        t.loadImage(e[0], d || i, o, c, !1, (function() {
                            if (null != t && t && (!t || t.params) && !t.destroyed) {
                                if (i ? (e.css("background-image", 'url("' + i + '")'),
                                e.removeAttr("data-background")) : (o && (e.attr("srcset", o),
                                e.removeAttr("data-srcset")),
                                c && (e.attr("sizes", c),
                                e.removeAttr("data-sizes")),
                                p.length && p.children("source").each((function(a) {
                                    var e = (0,
                                    s.A)(a);
                                    e.attr("data-srcset") && (e.attr("srcset", e.attr("data-srcset")),
                                    e.removeAttr("data-srcset"))
                                }
                                )),
                                d && (e.attr("src", d),
                                e.removeAttr("data-src"))),
                                e.addClass(r.loadedClass).removeClass(r.loadingClass),
                                n.find("." + r.preloaderClass).remove(),
                                t.params.loop && l) {
                                    var a = n.attr("data-swiper-slide-index");
                                    if (n.hasClass(t.params.slideDuplicateClass)) {
                                        var m = t.$wrapperEl.children('[data-swiper-slide-index="' + a + '"]:not(.' + t.params.slideDuplicateClass + ")");
                                        t.lazy.loadInSlide(m.index(), !1)
                                    } else {
                                        var h = t.$wrapperEl.children("." + t.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');
                                        t.lazy.loadInSlide(h.index(), !1)
                                    }
                                }
                                t.emit("lazyImageReady", n[0], e[0]),
                                t.params.autoHeight && t.updateAutoHeight()
                            }
                        }
                        )),
                        t.emit("lazyImageLoad", n[0], e[0])
                    }
                    ))
                }
            },
            load: function a() {
                var e = this
                  , l = e.$wrapperEl
                  , t = e.params
                  , r = e.slides
                  , i = e.activeIndex
                  , n = e.virtual && t.virtual.enabled
                  , d = t.lazy
                  , o = t.slidesPerView;
                function c(a) {
                    if (n) {
                        if (l.children("." + t.slideClass + '[data-swiper-slide-index="' + a + '"]').length)
                            return !0
                    } else if (r[a])
                        return !0;
                    return !1
                }
                function p(a) {
                    return n ? (0,
                    s.A)(a).attr("data-swiper-slide-index") : (0,
                    s.A)(a).index()
                }
                if ("auto" === o && (o = 0),
                e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
                e.params.watchSlidesVisibility)
                    l.children("." + t.slideVisibleClass).each((function(a) {
                        var l = n ? (0,
                        s.A)(a).attr("data-swiper-slide-index") : (0,
                        s.A)(a).index();
                        e.lazy.loadInSlide(l)
                    }
                    ));
                else if (o > 1)
                    for (var m = i; m < i + o; m += 1)
                        c(m) && e.lazy.loadInSlide(m);
                else
                    e.lazy.loadInSlide(i);
                if (d.loadPrevNext)
                    if (o > 1 || d.loadPrevNextAmount && d.loadPrevNextAmount > 1) {
                        for (var h = d.loadPrevNextAmount, f = o, u = Math.min(i + f + Math.max(h, f), r.length), y = Math.max(i - Math.max(f, h), 0), v = i + o; v < u; v += 1)
                            c(v) && e.lazy.loadInSlide(v);
                        for (var z = y; z < i; z += 1)
                            c(z) && e.lazy.loadInSlide(z)
                    } else {
                        var g = l.children("." + t.slideNextClass);
                        g.length > 0 && e.lazy.loadInSlide(p(g));
                        var C = l.children("." + t.slidePrevClass);
                        C.length > 0 && e.lazy.loadInSlide(p(C))
                    }
            },
            checkInViewOnLoad: function a() {
                var e = (0,
                t.zk)()
                  , l = this;
                if (l && !l.destroyed) {
                    var r = l.params.lazy.scrollingElement ? (0,
                    s.A)(l.params.lazy.scrollingElement) : (0,
                    s.A)(e), i = r[0] === e, n = i ? e.innerWidth : r[0].offsetWidth, d = i ? e.innerHeight : r[0].offsetHeight, o = l.$el.offset(), c, p = !1;
                    l.rtlTranslate && (o.left -= l.$el[0].scrollLeft);
                    for (var m = [[o.left, o.top], [o.left + l.width, o.top], [o.left, o.top + l.height], [o.left + l.width, o.top + l.height]], h = 0; h < m.length; h += 1) {
                        var f = m[h];
                        if (f[0] >= 0 && f[0] <= n && f[1] >= 0 && f[1] <= d) {
                            if (0 === f[0] && 0 === f[1])
                                continue;
                            p = !0
                        }
                    }
                    var u = !("touchstart" !== l.touchEvents.start || !l.support.passiveListener || !l.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    p ? (l.lazy.load(),
                    r.off("scroll", l.lazy.checkInViewOnLoad, u)) : l.lazy.scrollHandlerAttached || (l.lazy.scrollHandlerAttached = !0,
                    r.on("scroll", l.lazy.checkInViewOnLoad, u))
                }
            }
        };
        e.A = {
            name: "lazy",
            params: {
                lazy: {
                    checkInView: !1,
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    scrollingElement: "",
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function a() {
                var e = this;
                (0,
                r.wD)(e, {
                    lazy: i({
                        initialImageLoaded: !1
                    }, n)
                })
            },
            on: {
                beforeInit: function a(e) {
                    e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                },
                init: function a(e) {
                    e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load())
                },
                scroll: function a(e) {
                    e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                },
                "scrollbarDragMove resize _freeModeNoMomentumRelease": function a(e) {
                    e.params.lazy.enabled && e.lazy.load()
                },
                transitionStart: function a(e) {
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                },
                transitionEnd: function a(e) {
                    e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                },
                slideChange: function a(e) {
                    var l = e.params
                      , t = l.lazy
                      , s = l.cssMode
                      , r = l.watchSlidesVisibility
                      , i = l.watchSlidesProgress
                      , n = l.touchReleaseOnEdges
                      , d = l.resistanceRatio;
                    t.enabled && (s || (r || i) && (n || 0 === d)) && e.lazy.load()
                }
            }
        }
    }
}]);
