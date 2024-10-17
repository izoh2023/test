"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[13054, 10967, 28170, 2377, 24758, 47139], {
    279879: function(e, t, a) {
        var i = a(681559)
          , n = a(950162);
        function r() {
            return r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var i in a)
                        Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
                }
                return e
            }
            ,
            r.apply(this, arguments)
        }
        var s = {
            getRandomNumber: function e(t) {
                void 0 === t && (t = 16);
                var a = function e() {
                    return Math.round(16 * Math.random()).toString(16)
                };
                return "x".repeat(t).replace(/x/g, a)
            },
            makeElFocusable: function e(t) {
                return t.attr("tabIndex", "0"),
                t
            },
            makeElNotFocusable: function e(t) {
                return t.attr("tabIndex", "-1"),
                t
            },
            addElRole: function e(t, a) {
                return t.attr("role", a),
                t
            },
            addElRoleDescription: function e(t, a) {
                return t.attr("aria-roledescription", a),
                t
            },
            addElControls: function e(t, a) {
                return t.attr("aria-controls", a),
                t
            },
            addElLabel: function e(t, a) {
                return t.attr("aria-label", a),
                t
            },
            addElId: function e(t, a) {
                return t.attr("id", a),
                t
            },
            addElLive: function e(t, a) {
                return t.attr("aria-live", a),
                t
            },
            disableEl: function e(t) {
                return t.attr("aria-disabled", !0),
                t
            },
            enableEl: function e(t) {
                return t.attr("aria-disabled", !1),
                t
            },
            onEnterOrSpaceKey: function e(t) {
                if (13 === t.keyCode || 32 === t.keyCode) {
                    var a = this
                      , r = a.params.a11y
                      , s = (0,
                    i.A)(t.target);
                    a.navigation && a.navigation.$nextEl && s.is(a.navigation.$nextEl) && (a.isEnd && !a.params.loop || a.slideNext(),
                    a.isEnd ? a.a11y.notify(r.lastSlideMessage) : a.a11y.notify(r.nextSlideMessage)),
                    a.navigation && a.navigation.$prevEl && s.is(a.navigation.$prevEl) && (a.isBeginning && !a.params.loop || a.slidePrev(),
                    a.isBeginning ? a.a11y.notify(r.firstSlideMessage) : a.a11y.notify(r.prevSlideMessage)),
                    a.pagination && s.is((0,
                    n.fq)(a.params.pagination.bulletClass)) && s[0].click()
                }
            },
            notify: function e(t) {
                var a, i = this.a11y.liveRegion;
                0 !== i.length && (i.html(""),
                i.html(t))
            },
            updateNavigation: function e() {
                var t = this;
                if (!t.params.loop && t.navigation) {
                    var a = t.navigation
                      , i = a.$nextEl
                      , n = a.$prevEl;
                    n && n.length > 0 && (t.isBeginning ? (t.a11y.disableEl(n),
                    t.a11y.makeElNotFocusable(n)) : (t.a11y.enableEl(n),
                    t.a11y.makeElFocusable(n))),
                    i && i.length > 0 && (t.isEnd ? (t.a11y.disableEl(i),
                    t.a11y.makeElNotFocusable(i)) : (t.a11y.enableEl(i),
                    t.a11y.makeElFocusable(i)))
                }
            },
            updatePagination: function e() {
                var t = this
                  , a = t.params.a11y;
                t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each((function(e) {
                    var n = (0,
                    i.A)(e);
                    t.a11y.makeElFocusable(n),
                    t.params.pagination.renderBullet || (t.a11y.addElRole(n, "button"),
                    t.a11y.addElLabel(n, a.paginationBulletMessage.replace(/\{\{index\}\}/, n.index() + 1)))
                }
                ))
            },
            init: function e() {
                var t = this
                  , a = t.params.a11y;
                t.$el.append(t.a11y.liveRegion);
                var r = t.$el;
                a.containerRoleDescriptionMessage && t.a11y.addElRoleDescription(r, a.containerRoleDescriptionMessage),
                a.containerMessage && t.a11y.addElLabel(r, a.containerMessage);
                var s = t.$wrapperEl
                  , o = s.attr("id") || "swiper-wrapper-" + t.a11y.getRandomNumber(16)
                  , l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                t.a11y.addElId(s, o),
                t.a11y.addElLive(s, l),
                a.itemRoleDescriptionMessage && t.a11y.addElRoleDescription((0,
                i.A)(t.slides), a.itemRoleDescriptionMessage),
                t.a11y.addElRole((0,
                i.A)(t.slides), a.slideRole);
                var u = t.params.loop ? t.slides.filter((function(e) {
                    return !e.classList.contains(t.params.slideDuplicateClass)
                }
                )).length : t.slides.length, d, c;
                t.slides.each((function(e, n) {
                    var r = (0,
                    i.A)(e)
                      , s = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : n
                      , o = a.slideLabelMessage.replace(/\{\{index\}\}/, s + 1).replace(/\{\{slidesLength\}\}/, u);
                    t.a11y.addElLabel(r, o)
                }
                )),
                t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl),
                t.navigation && t.navigation.$prevEl && (c = t.navigation.$prevEl),
                d && d.length && (t.a11y.makeElFocusable(d),
                "BUTTON" !== d[0].tagName && (t.a11y.addElRole(d, "button"),
                d.on("keydown", t.a11y.onEnterOrSpaceKey)),
                t.a11y.addElLabel(d, a.nextSlideMessage),
                t.a11y.addElControls(d, o)),
                c && c.length && (t.a11y.makeElFocusable(c),
                "BUTTON" !== c[0].tagName && (t.a11y.addElRole(c, "button"),
                c.on("keydown", t.a11y.onEnterOrSpaceKey)),
                t.a11y.addElLabel(c, a.prevSlideMessage),
                t.a11y.addElControls(c, o)),
                t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.$el.on("keydown", (0,
                n.fq)(t.params.pagination.bulletClass), t.a11y.onEnterOrSpaceKey)
            },
            destroy: function e() {
                var t = this, a, i;
                t.a11y.liveRegion && t.a11y.liveRegion.length > 0 && t.a11y.liveRegion.remove(),
                t.navigation && t.navigation.$nextEl && (a = t.navigation.$nextEl),
                t.navigation && t.navigation.$prevEl && (i = t.navigation.$prevEl),
                a && a.off("keydown", t.a11y.onEnterOrSpaceKey),
                i && i.off("keydown", t.a11y.onEnterOrSpaceKey),
                t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.$el.off("keydown", (0,
                n.fq)(t.params.pagination.bulletClass), t.a11y.onEnterOrSpaceKey)
            }
        };
        t.A = {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group"
                }
            },
            create: function e() {
                var t = this;
                (0,
                n.wD)(t, {
                    a11y: r({}, s, {
                        liveRegion: (0,
                        i.A)('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    })
                })
            },
            on: {
                afterInit: function e(t) {
                    t.params.a11y.enabled && (t.a11y.init(),
                    t.a11y.updateNavigation())
                },
                toEdge: function e(t) {
                    t.params.a11y.enabled && t.a11y.updateNavigation()
                },
                fromEdge: function e(t) {
                    t.params.a11y.enabled && t.a11y.updateNavigation()
                },
                paginationUpdate: function e(t) {
                    t.params.a11y.enabled && t.a11y.updatePagination()
                },
                destroy: function e(t) {
                    t.params.a11y.enabled && t.a11y.destroy()
                }
            }
        }
    },
    471725: function(e, t, a) {
        var i = a(841430)
          , n = a(950162);
        function r() {
            return r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var i in a)
                        Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
                }
                return e
            }
            ,
            r.apply(this, arguments)
        }
        var s = {
            run: function e() {
                var t = this
                  , a = t.slides.eq(t.activeIndex)
                  , i = t.params.autoplay.delay;
                a.attr("data-swiper-autoplay") && (i = a.attr("data-swiper-autoplay") || t.params.autoplay.delay),
                clearTimeout(t.autoplay.timeout),
                t.autoplay.timeout = (0,
                n.dY)((function() {
                    var e;
                    t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(),
                    e = t.slidePrev(t.params.speed, !0, !0),
                    t.emit("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (e = t.slideTo(t.slides.length - 1, t.params.speed, !0, !0),
                    t.emit("autoplay")) : (e = t.slidePrev(t.params.speed, !0, !0),
                    t.emit("autoplay")) : t.params.loop ? (t.loopFix(),
                    e = t.slideNext(t.params.speed, !0, !0),
                    t.emit("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (e = t.slideTo(0, t.params.speed, !0, !0),
                    t.emit("autoplay")) : (e = t.slideNext(t.params.speed, !0, !0),
                    t.emit("autoplay")),
                    (t.params.cssMode && t.autoplay.running || !1 === e) && t.autoplay.run()
                }
                ), i)
            },
            start: function e() {
                var t = this;
                return void 0 === t.autoplay.timeout && (!t.autoplay.running && (t.autoplay.running = !0,
                t.emit("autoplayStart"),
                t.autoplay.run(),
                !0))
            },
            stop: function e() {
                var t = this;
                return !!t.autoplay.running && (void 0 !== t.autoplay.timeout && (t.autoplay.timeout && (clearTimeout(t.autoplay.timeout),
                t.autoplay.timeout = void 0),
                t.autoplay.running = !1,
                t.emit("autoplayStop"),
                !0))
            },
            pause: function e(t) {
                var a = this;
                a.autoplay.running && (a.autoplay.paused || (a.autoplay.timeout && clearTimeout(a.autoplay.timeout),
                a.autoplay.paused = !0,
                0 !== t && a.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((function(e) {
                    a.$wrapperEl[0].addEventListener(e, a.autoplay.onTransitionEnd)
                }
                )) : (a.autoplay.paused = !1,
                a.autoplay.run())))
            },
            onVisibilityChange: function e() {
                var t = this
                  , a = (0,
                i.YE)();
                "hidden" === a.visibilityState && t.autoplay.running && t.autoplay.pause(),
                "visible" === a.visibilityState && t.autoplay.paused && (t.autoplay.run(),
                t.autoplay.paused = !1)
            },
            onTransitionEnd: function e(t) {
                var a = this;
                a && !a.destroyed && a.$wrapperEl && t.target === a.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((function(e) {
                    a.$wrapperEl[0].removeEventListener(e, a.autoplay.onTransitionEnd)
                }
                )),
                a.autoplay.paused = !1,
                a.autoplay.running ? a.autoplay.run() : a.autoplay.stop())
            },
            onMouseEnter: function e() {
                var t = this;
                t.params.autoplay.disableOnInteraction ? t.autoplay.stop() : t.autoplay.pause(),
                ["transitionend", "webkitTransitionEnd"].forEach((function(e) {
                    t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd)
                }
                ))
            },
            onMouseLeave: function e() {
                var t = this;
                t.params.autoplay.disableOnInteraction || (t.autoplay.paused = !1,
                t.autoplay.run())
            },
            attachMouseEvents: function e() {
                var t = this;
                t.params.autoplay.pauseOnMouseEnter && (t.$el.on("mouseenter", t.autoplay.onMouseEnter),
                t.$el.on("mouseleave", t.autoplay.onMouseLeave))
            },
            detachMouseEvents: function e() {
                var t = this;
                t.$el.off("mouseenter", t.autoplay.onMouseEnter),
                t.$el.off("mouseleave", t.autoplay.onMouseLeave)
            }
        };
        t.A = {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            },
            create: function e() {
                var t = this;
                (0,
                n.wD)(t, {
                    autoplay: r({}, s, {
                        running: !1,
                        paused: !1
                    })
                })
            },
            on: {
                init: function e(t) {
                    var a;
                    t.params.autoplay.enabled && (t.autoplay.start(),
                    (0,
                    i.YE)().addEventListener("visibilitychange", t.autoplay.onVisibilityChange),
                    t.autoplay.attachMouseEvents())
                },
                beforeTransitionStart: function e(t, a, i) {
                    t.autoplay.running && (i || !t.params.autoplay.disableOnInteraction ? t.autoplay.pause(a) : t.autoplay.stop())
                },
                sliderFirstMove: function e(t) {
                    t.autoplay.running && (t.params.autoplay.disableOnInteraction ? t.autoplay.stop() : t.autoplay.pause())
                },
                touchEnd: function e(t) {
                    t.params.cssMode && t.autoplay.paused && !t.params.autoplay.disableOnInteraction && t.autoplay.run()
                },
                destroy: function e(t) {
                    var a;
                    t.autoplay.detachMouseEvents(),
                    t.autoplay.running && t.autoplay.stop(),
                    (0,
                    i.YE)().removeEventListener("visibilitychange", t.autoplay.onVisibilityChange)
                }
            }
        }
    },
    323763: function(e, t, a) {
        var i = a(950162);
        function n() {
            return n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var i in a)
                        Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
                }
                return e
            }
            ,
            n.apply(this, arguments)
        }
        var r = {
            LinearSpline: function e(t, a) {
                var i = function e() {
                    var t, a, i;
                    return function(e, n) {
                        for (a = -1,
                        t = e.length; t - a > 1; )
                            e[i = t + a >> 1] <= n ? a = i : t = i;
                        return t
                    }
                }(), n, r;
                return this.x = t,
                this.y = a,
                this.lastIndex = t.length - 1,
                this.interpolate = function e(t) {
                    return t ? (r = i(this.x, t),
                    n = r - 1,
                    (t - this.x[n]) * (this.y[r] - this.y[n]) / (this.x[r] - this.x[n]) + this.y[n]) : 0
                }
                ,
                this
            },
            getInterpolateFunction: function e(t) {
                var a = this;
                a.controller.spline || (a.controller.spline = a.params.loop ? new r.LinearSpline(a.slidesGrid,t.slidesGrid) : new r.LinearSpline(a.snapGrid,t.snapGrid))
            },
            setTranslate: function e(t, a) {
                var i = this, n = i.controller.control, r, s, o = i.constructor;
                function l(e) {
                    var t = i.rtlTranslate ? -i.translate : i.translate;
                    "slide" === i.params.controller.by && (i.controller.getInterpolateFunction(e),
                    s = -i.controller.spline.interpolate(-t)),
                    s && "container" !== i.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (i.maxTranslate() - i.minTranslate()),
                    s = (t - i.minTranslate()) * r + e.minTranslate()),
                    i.params.controller.inverse && (s = e.maxTranslate() - s),
                    e.updateProgress(s),
                    e.setTranslate(s, i),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
                }
                if (Array.isArray(n))
                    for (var u = 0; u < n.length; u += 1)
                        n[u] !== a && n[u]instanceof o && l(n[u]);
                else
                    n instanceof o && a !== n && l(n)
            },
            setTransition: function e(t, a) {
                var n = this, r = n.constructor, s = n.controller.control, o;
                function l(e) {
                    e.setTransition(t, n),
                    0 !== t && (e.transitionStart(),
                    e.params.autoHeight && (0,
                    i.dY)((function() {
                        e.updateAutoHeight()
                    }
                    )),
                    e.$wrapperEl.transitionEnd((function() {
                        s && (e.params.loop && "slide" === n.params.controller.by && e.loopFix(),
                        e.transitionEnd())
                    }
                    )))
                }
                if (Array.isArray(s))
                    for (o = 0; o < s.length; o += 1)
                        s[o] !== a && s[o]instanceof r && l(s[o]);
                else
                    s instanceof r && a !== s && l(s)
            }
        };
        t.A = {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function e() {
                var t = this;
                (0,
                i.wD)(t, {
                    controller: n({
                        control: t.params.controller.control
                    }, r)
                })
            },
            on: {
                update: function e(t) {
                    t.controller.control && t.controller.spline && (t.controller.spline = void 0,
                    delete t.controller.spline)
                },
                resize: function e(t) {
                    t.controller.control && t.controller.spline && (t.controller.spline = void 0,
                    delete t.controller.spline)
                },
                observerUpdate: function e(t) {
                    t.controller.control && t.controller.spline && (t.controller.spline = void 0,
                    delete t.controller.spline)
                },
                setTranslate: function e(t, a, i) {
                    t.controller.control && t.controller.setTranslate(a, i)
                },
                setTransition: function e(t, a, i) {
                    t.controller.control && t.controller.setTransition(a, i)
                }
            }
        }
    },
    869855: function(e, t, a) {
        a.d(t, {
            A: function() {
                return Q
            }
        });
        var i = a(841430)
          , n = a(681559)
          , r = a(950162)
          , s = a(283693)
          , o = a(677094)
          , l = a(641590)
          , u = a(279302)
          , d = a(747286)
          , c = a(613678)
          , p = {
            on: function e(t, a, i) {
                var n = this;
                if ("function" != typeof a)
                    return n;
                var r = i ? "unshift" : "push";
                return t.split(" ").forEach((function(e) {
                    n.eventsListeners[e] || (n.eventsListeners[e] = []),
                    n.eventsListeners[e][r](a)
                }
                )),
                n
            },
            once: function e(t, a, i) {
                var n = this;
                if ("function" != typeof a)
                    return n;
                function r() {
                    n.off(t, r),
                    r.__emitterProxy && delete r.__emitterProxy;
                    for (var e = arguments.length, i = new Array(e), s = 0; s < e; s++)
                        i[s] = arguments[s];
                    a.apply(n, i)
                }
                return r.__emitterProxy = a,
                n.on(t, r, i)
            },
            onAny: function e(t, a) {
                var i = this;
                if ("function" != typeof t)
                    return i;
                var n = a ? "unshift" : "push";
                return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[n](t),
                i
            },
            offAny: function e(t) {
                var a = this;
                if (!a.eventsAnyListeners)
                    return a;
                var i = a.eventsAnyListeners.indexOf(t);
                return i >= 0 && a.eventsAnyListeners.splice(i, 1),
                a
            },
            off: function e(t, a) {
                var i = this;
                return i.eventsListeners ? (t.split(" ").forEach((function(e) {
                    void 0 === a ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((function(t, n) {
                        (t === a || t.__emitterProxy && t.__emitterProxy === a) && i.eventsListeners[e].splice(n, 1)
                    }
                    ))
                }
                )),
                i) : i
            },
            emit: function e() {
                var t = this, a, i, n, r;
                if (!t.eventsListeners)
                    return t;
                for (var s = arguments.length, o = new Array(s), l = 0; l < s; l++)
                    o[l] = arguments[l];
                return "string" == typeof o[0] || Array.isArray(o[0]) ? (a = o[0],
                i = o.slice(1, o.length),
                n = t) : (a = o[0].events,
                i = o[0].data,
                n = o[0].context || t),
                i.unshift(n),
                (Array.isArray(a) ? a : a.split(" ")).forEach((function(e) {
                    t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((function(t) {
                        t.apply(n, [e].concat(i))
                    }
                    )),
                    t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((function(e) {
                        e.apply(n, i)
                    }
                    ))
                }
                )),
                t
            }
        }
          , v = a(434625)
          , m = a(757056)
          , f = a(216394)
          , h = a(281181)
          , g = a(393195);
        function y(e) {
            var t = this;
            if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
                var a = t.el;
                a.style.cursor = "move",
                a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                a.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                a.style.cursor = e ? "grabbing" : "grab"
            }
        }
        function w() {
            var e = this;
            e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
        }
        var T = {
            setGrabCursor: y,
            unsetGrabCursor: w
        }
          , E = a(7672);
        function b(e, t) {
            function a(t) {
                return t && t !== (0,
                i.YE)() && t !== (0,
                i.zk)() ? (t.assignedSlot && (t = t.assignedSlot),
                t.closest(e) || a(t.getRootNode().host)) : null;
                var n
            }
            return void 0 === t && (t = this),
            a(t)
        }
        function S(e) {
            var t = this, a = (0,
            i.YE)(), s = (0,
            i.zk)(), o = t.touchEventsData, l = t.params, u = t.touches, d;
            if (t.enabled && (!t.animating || !l.preventInteractionOnTransition)) {
                var c = e;
                c.originalEvent && (c = c.originalEvent);
                var p = (0,
                n.A)(c.target);
                if (("wrapper" !== l.touchEventsTarget || p.closest(t.wrapperEl).length) && (o.isTouchEvent = "touchstart" === c.type,
                (o.isTouchEvent || !("which"in c) || 3 !== c.which) && !(!o.isTouchEvent && "button"in c && c.button > 0 || o.isTouched && o.isMoved))) {
                    var v;
                    !!l.noSwipingClass && "" !== l.noSwipingClass && c.target && c.target.shadowRoot && e.path && e.path[0] && (p = (0,
                    n.A)(e.path[0]));
                    var m = l.noSwipingSelector ? l.noSwipingSelector : "." + l.noSwipingClass
                      , f = !(!c.target || !c.target.shadowRoot);
                    if (l.noSwiping && (f ? b(m, c.target) : p.closest(m)[0]))
                        t.allowClick = !0;
                    else if (!l.swipeHandler || p.closest(l.swipeHandler)[0]) {
                        u.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX,
                        u.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
                        var h = u.currentX
                          , g = u.currentY
                          , y = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection
                          , w = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
                        if (y && (h <= w || h >= s.innerWidth - w)) {
                            if ("prevent" !== y)
                                return;
                            e.preventDefault()
                        }
                        if ((0,
                        r.X$)(o, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }),
                        u.startX = h,
                        u.startY = g,
                        o.touchStartTime = (0,
                        r.tB)(),
                        t.allowClick = !0,
                        t.updateSize(),
                        t.swipeDirection = void 0,
                        l.threshold > 0 && (o.allowThresholdMove = !1),
                        "touchstart" !== c.type) {
                            var T = !0;
                            p.is(o.focusableElements) && (T = !1),
                            a.activeElement && (0,
                            n.A)(a.activeElement).is(o.focusableElements) && a.activeElement !== p[0] && a.activeElement.blur();
                            var E = T && t.allowTouchMove && l.touchStartPreventDefault;
                            !l.touchStartForcePreventDefault && !E || p[0].isContentEditable || c.preventDefault()
                        }
                        t.emit("touchStart", c)
                    }
                }
            }
        }
        function M(e) {
            var t = (0,
            i.YE)(), a = this, s = a.touchEventsData, o = a.params, l = a.touches, u = a.rtlTranslate, d;
            if (a.enabled) {
                var c = e;
                if (c.originalEvent && (c = c.originalEvent),
                s.isTouched) {
                    if (!s.isTouchEvent || "touchmove" === c.type) {
                        var p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0])
                          , v = "touchmove" === c.type ? p.pageX : c.pageX
                          , m = "touchmove" === c.type ? p.pageY : c.pageY;
                        if (c.preventedByNestedSwiper)
                            return l.startX = v,
                            void (l.startY = m);
                        if (!a.allowTouchMove)
                            return a.allowClick = !1,
                            void (s.isTouched && ((0,
                            r.X$)(l, {
                                startX: v,
                                startY: m,
                                currentX: v,
                                currentY: m
                            }),
                            s.touchStartTime = (0,
                            r.tB)()));
                        if (s.isTouchEvent && o.touchReleaseOnEdges && !o.loop)
                            if (a.isVertical()) {
                                if (m < l.startY && a.translate <= a.maxTranslate() || m > l.startY && a.translate >= a.minTranslate())
                                    return s.isTouched = !1,
                                    void (s.isMoved = !1)
                            } else if (v < l.startX && a.translate <= a.maxTranslate() || v > l.startX && a.translate >= a.minTranslate())
                                return;
                        if (s.isTouchEvent && t.activeElement && c.target === t.activeElement && (0,
                        n.A)(c.target).is(s.focusableElements))
                            return s.isMoved = !0,
                            void (a.allowClick = !1);
                        if (s.allowTouchCallbacks && a.emit("touchMove", c),
                        !(c.targetTouches && c.targetTouches.length > 1)) {
                            l.currentX = v,
                            l.currentY = m;
                            var f = l.currentX - l.startX
                              , h = l.currentY - l.startY;
                            if (!(a.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(h, 2)) < a.params.threshold)) {
                                var g;
                                if (void 0 === s.isScrolling)
                                    a.isHorizontal() && l.currentY === l.startY || a.isVertical() && l.currentX === l.startX ? s.isScrolling = !1 : f * f + h * h >= 25 && (g = 180 * Math.atan2(Math.abs(h), Math.abs(f)) / Math.PI,
                                    s.isScrolling = a.isHorizontal() ? g > o.touchAngle : 90 - g > o.touchAngle);
                                if (s.isScrolling && a.emit("touchMoveOpposite", c),
                                void 0 === s.startMoving && (l.currentX === l.startX && l.currentY === l.startY || (s.startMoving = !0)),
                                s.isScrolling)
                                    s.isTouched = !1;
                                else if (s.startMoving) {
                                    a.allowClick = !1,
                                    !o.cssMode && c.cancelable && c.preventDefault(),
                                    o.touchMoveStopPropagation && !o.nested && c.stopPropagation(),
                                    s.isMoved || (o.loop && a.loopFix(),
                                    s.startTranslate = a.getTranslate(),
                                    a.setTransition(0),
                                    a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                    s.allowMomentumBounce = !1,
                                    !o.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0),
                                    a.emit("sliderFirstMove", c)),
                                    a.emit("sliderMove", c),
                                    s.isMoved = !0;
                                    var y = a.isHorizontal() ? f : h;
                                    l.diff = y,
                                    y *= o.touchRatio,
                                    u && (y = -y),
                                    a.swipeDirection = y > 0 ? "prev" : "next",
                                    s.currentTranslate = y + s.startTranslate;
                                    var w = !0
                                      , T = o.resistanceRatio;
                                    if (o.touchReleaseOnEdges && (T = 0),
                                    y > 0 && s.currentTranslate > a.minTranslate() ? (w = !1,
                                    o.resistance && (s.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + s.startTranslate + y, T))) : y < 0 && s.currentTranslate < a.maxTranslate() && (w = !1,
                                    o.resistance && (s.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - s.startTranslate - y, T))),
                                    w && (c.preventedByNestedSwiper = !0),
                                    !a.allowSlideNext && "next" === a.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
                                    !a.allowSlidePrev && "prev" === a.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
                                    a.allowSlidePrev || a.allowSlideNext || (s.currentTranslate = s.startTranslate),
                                    o.threshold > 0) {
                                        if (!(Math.abs(y) > o.threshold || s.allowThresholdMove))
                                            return void (s.currentTranslate = s.startTranslate);
                                        if (!s.allowThresholdMove)
                                            return s.allowThresholdMove = !0,
                                            l.startX = l.currentX,
                                            l.startY = l.currentY,
                                            s.currentTranslate = s.startTranslate,
                                            void (l.diff = a.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY)
                                    }
                                    o.followFinger && !o.cssMode && ((o.freeMode || o.watchSlidesProgress || o.watchSlidesVisibility) && (a.updateActiveIndex(),
                                    a.updateSlidesClasses()),
                                    o.freeMode && (0 === s.velocities.length && s.velocities.push({
                                        position: l[a.isHorizontal() ? "startX" : "startY"],
                                        time: s.touchStartTime
                                    }),
                                    s.velocities.push({
                                        position: l[a.isHorizontal() ? "currentX" : "currentY"],
                                        time: (0,
                                        r.tB)()
                                    })),
                                    a.updateProgress(s.currentTranslate),
                                    a.setTranslate(s.currentTranslate))
                                }
                            }
                        }
                    }
                } else
                    s.startMoving && s.isScrolling && a.emit("touchMoveOpposite", c)
            }
        }
        function C(e) {
            var t = this, a = t.touchEventsData, i = t.params, n = t.touches, s = t.rtlTranslate, o = t.$wrapperEl, l = t.slidesGrid, u = t.snapGrid, d;
            if (t.enabled) {
                var c = e;
                if (c.originalEvent && (c = c.originalEvent),
                a.allowTouchCallbacks && t.emit("touchEnd", c),
                a.allowTouchCallbacks = !1,
                !a.isTouched)
                    return a.isMoved && i.grabCursor && t.setGrabCursor(!1),
                    a.isMoved = !1,
                    void (a.startMoving = !1);
                i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var p = (0,
                r.tB)(), v = p - a.touchStartTime, m;
                if (t.allowClick && (t.updateClickedSlide(c),
                t.emit("tap click", c),
                v < 300 && p - a.lastClickTime < 300 && t.emit("doubleTap doubleClick", c)),
                a.lastClickTime = (0,
                r.tB)(),
                (0,
                r.dY)((function() {
                    t.destroyed || (t.allowClick = !0)
                }
                )),
                !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === n.diff || a.currentTranslate === a.startTranslate)
                    return a.isTouched = !1,
                    a.isMoved = !1,
                    void (a.startMoving = !1);
                if (a.isTouched = !1,
                a.isMoved = !1,
                a.startMoving = !1,
                m = i.followFinger ? s ? t.translate : -t.translate : -a.currentTranslate,
                !i.cssMode)
                    if (i.freeMode) {
                        if (m < -t.minTranslate())
                            return void t.slideTo(t.activeIndex);
                        if (m > -t.maxTranslate())
                            return void (t.slides.length < u.length ? t.slideTo(u.length - 1) : t.slideTo(t.slides.length - 1));
                        if (i.freeModeMomentum) {
                            if (a.velocities.length > 1) {
                                var f = a.velocities.pop()
                                  , h = a.velocities.pop()
                                  , g = f.position - h.position
                                  , y = f.time - h.time;
                                t.velocity = g / y,
                                t.velocity /= 2,
                                Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                                (y > 150 || (0,
                                r.tB)() - f.time > 300) && (t.velocity = 0)
                            } else
                                t.velocity = 0;
                            t.velocity *= i.freeModeMomentumVelocityRatio,
                            a.velocities.length = 0;
                            var w = 1e3 * i.freeModeMomentumRatio
                              , T = t.velocity * w
                              , E = t.translate + T;
                            s && (E = -E);
                            var b = !1, S, M = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio, C;
                            if (E < t.maxTranslate())
                                i.freeModeMomentumBounce ? (E + t.maxTranslate() < -M && (E = t.maxTranslate() - M),
                                S = t.maxTranslate(),
                                b = !0,
                                a.allowMomentumBounce = !0) : E = t.maxTranslate(),
                                i.loop && i.centeredSlides && (C = !0);
                            else if (E > t.minTranslate())
                                i.freeModeMomentumBounce ? (E - t.minTranslate() > M && (E = t.minTranslate() + M),
                                S = t.minTranslate(),
                                b = !0,
                                a.allowMomentumBounce = !0) : E = t.minTranslate(),
                                i.loop && i.centeredSlides && (C = !0);
                            else if (i.freeModeSticky) {
                                for (var k, x = 0; x < u.length; x += 1)
                                    if (u[x] > -E) {
                                        k = x;
                                        break
                                    }
                                E = -(E = Math.abs(u[k] - E) < Math.abs(u[k - 1] - E) || "next" === t.swipeDirection ? u[k] : u[k - 1])
                            }
                            if (C && t.once("transitionEnd", (function() {
                                t.loopFix()
                            }
                            )),
                            0 !== t.velocity) {
                                if (w = s ? Math.abs((-E - t.translate) / t.velocity) : Math.abs((E - t.translate) / t.velocity),
                                i.freeModeSticky) {
                                    var L = Math.abs((s ? -E : E) - t.translate)
                                      , P = t.slidesSizesGrid[t.activeIndex];
                                    w = L < P ? i.speed : L < 2 * P ? 1.5 * i.speed : 2.5 * i.speed
                                }
                            } else if (i.freeModeSticky)
                                return void t.slideToClosest();
                            i.freeModeMomentumBounce && b ? (t.updateProgress(S),
                            t.setTransition(w),
                            t.setTranslate(E),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating = !0,
                            o.transitionEnd((function() {
                                t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"),
                                t.setTransition(i.speed),
                                setTimeout((function() {
                                    t.setTranslate(S),
                                    o.transitionEnd((function() {
                                        t && !t.destroyed && t.transitionEnd()
                                    }
                                    ))
                                }
                                ), 0))
                            }
                            ))) : t.velocity ? (t.updateProgress(E),
                            t.setTransition(w),
                            t.setTranslate(E),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating || (t.animating = !0,
                            o.transitionEnd((function() {
                                t && !t.destroyed && t.transitionEnd()
                            }
                            )))) : (t.emit("_freeModeNoMomentumRelease"),
                            t.updateProgress(E)),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses()
                        } else {
                            if (i.freeModeSticky)
                                return void t.slideToClosest();
                            i.freeMode && t.emit("_freeModeNoMomentumRelease")
                        }
                        (!i.freeModeMomentum || v >= i.longSwipesMs) && (t.updateProgress(),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses())
                    } else {
                        for (var A = 0, O = t.slidesSizesGrid[0], D = 0; D < l.length; D += D < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                            var I = D < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                            void 0 !== l[D + I] ? m >= l[D] && m < l[D + I] && (A = D,
                            O = l[D + I] - l[D]) : m >= l[D] && (A = D,
                            O = l[l.length - 1] - l[l.length - 2])
                        }
                        var R = (m - l[A]) / O
                          , $ = A < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                        if (v > i.longSwipesMs) {
                            if (!i.longSwipes)
                                return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && (R >= i.longSwipesRatio ? t.slideTo(A + $) : t.slideTo(A)),
                            "prev" === t.swipeDirection && (R > 1 - i.longSwipesRatio ? t.slideTo(A + $) : t.slideTo(A))
                        } else {
                            if (!i.shortSwipes)
                                return void t.slideTo(t.activeIndex);
                            var B;
                            t.navigation && (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl) ? c.target === t.navigation.nextEl ? t.slideTo(A + $) : t.slideTo(A) : ("next" === t.swipeDirection && t.slideTo(A + $),
                            "prev" === t.swipeDirection && t.slideTo(A))
                        }
                    }
            }
        }
        function k() {
            var e = this
              , t = e.params
              , a = e.el;
            if (!a || 0 !== a.offsetWidth) {
                t.breakpoints && e.setBreakpoint();
                var i = e.allowSlideNext
                  , n = e.allowSlidePrev
                  , r = e.snapGrid;
                e.allowSlideNext = !0,
                e.allowSlidePrev = !0,
                e.updateSize(),
                e.updateSlides(),
                e.updateSlidesClasses(),
                ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
                e.allowSlidePrev = n,
                e.allowSlideNext = i,
                e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
            }
        }
        function x(e) {
            var t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
            e.stopImmediatePropagation())))
        }
        function L() {
            var e = this, t = e.wrapperEl, a = e.rtlTranslate, i;
            if (e.enabled) {
                var n;
                e.previousTranslate = e.translate,
                e.isHorizontal() ? e.translate = a ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop,
                -0 === e.translate && (e.translate = 0),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
                var r = e.maxTranslate() - e.minTranslate();
                (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress && e.updateProgress(a ? -e.translate : e.translate),
                e.emit("setTranslate", e.translate, !1)
            }
        }
        var P = !1;
        function A() {}
        function O() {
            var e = this
              , t = (0,
            i.YE)()
              , a = e.params
              , n = e.touchEvents
              , r = e.el
              , s = e.wrapperEl
              , o = e.device
              , l = e.support;
            e.onTouchStart = S.bind(e),
            e.onTouchMove = M.bind(e),
            e.onTouchEnd = C.bind(e),
            a.cssMode && (e.onScroll = L.bind(e)),
            e.onClick = x.bind(e);
            var u = !!a.nested;
            if (!l.touch && l.pointerEvents)
                r.addEventListener(n.start, e.onTouchStart, !1),
                t.addEventListener(n.move, e.onTouchMove, u),
                t.addEventListener(n.end, e.onTouchEnd, !1);
            else {
                if (l.touch) {
                    var d = !("touchstart" !== n.start || !l.passiveListener || !a.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r.addEventListener(n.start, e.onTouchStart, d),
                    r.addEventListener(n.move, e.onTouchMove, l.passiveListener ? {
                        passive: !1,
                        capture: u
                    } : u),
                    r.addEventListener(n.end, e.onTouchEnd, d),
                    n.cancel && r.addEventListener(n.cancel, e.onTouchEnd, d),
                    P || (t.addEventListener("touchstart", A),
                    P = !0)
                }
                (a.simulateTouch && !o.ios && !o.android || a.simulateTouch && !l.touch && o.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1),
                t.addEventListener("mousemove", e.onTouchMove, u),
                t.addEventListener("mouseup", e.onTouchEnd, !1))
            }
            (a.preventClicks || a.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0),
            a.cssMode && s.addEventListener("scroll", e.onScroll),
            a.updateOnWindowResize ? e.on(o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", k, !0) : e.on("observerUpdate", k, !0)
        }
        function D() {
            var e = this
              , t = (0,
            i.YE)()
              , a = e.params
              , n = e.touchEvents
              , r = e.el
              , s = e.wrapperEl
              , o = e.device
              , l = e.support
              , u = !!a.nested;
            if (!l.touch && l.pointerEvents)
                r.removeEventListener(n.start, e.onTouchStart, !1),
                t.removeEventListener(n.move, e.onTouchMove, u),
                t.removeEventListener(n.end, e.onTouchEnd, !1);
            else {
                if (l.touch) {
                    var d = !("onTouchStart" !== n.start || !l.passiveListener || !a.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r.removeEventListener(n.start, e.onTouchStart, d),
                    r.removeEventListener(n.move, e.onTouchMove, u),
                    r.removeEventListener(n.end, e.onTouchEnd, d),
                    n.cancel && r.removeEventListener(n.cancel, e.onTouchEnd, d)
                }
                (a.simulateTouch && !o.ios && !o.android || a.simulateTouch && !l.touch && o.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1),
                t.removeEventListener("mousemove", e.onTouchMove, u),
                t.removeEventListener("mouseup", e.onTouchEnd, !1))
            }
            (a.preventClicks || a.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0),
            a.cssMode && s.removeEventListener("scroll", e.onScroll),
            e.off(o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", k)
        }
        var I = {
            attachEvents: O,
            detachEvents: D
        };
        function R() {
            var e = this
              , t = e.activeIndex
              , a = e.initialized
              , i = e.loopedSlides
              , n = void 0 === i ? 0 : i
              , s = e.params
              , o = e.$el
              , l = s.breakpoints;
            if (l && (!l || 0 !== Object.keys(l).length)) {
                var u = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
                if (u && e.currentBreakpoint !== u) {
                    var d = u in l ? l[u] : void 0;
                    d && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(e) {
                        var t = d[e];
                        void 0 !== t && (d[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                    }
                    ));
                    var c = d || e.originalParams
                      , p = s.slidesPerColumn > 1
                      , v = c.slidesPerColumn > 1
                      , m = s.enabled;
                    p && !v ? (o.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column"),
                    e.emitContainerClasses()) : !p && v && (o.addClass(s.containerModifierClass + "multirow"),
                    (c.slidesPerColumnFill && "column" === c.slidesPerColumnFill || !c.slidesPerColumnFill && "column" === s.slidesPerColumnFill) && o.addClass(s.containerModifierClass + "multirow-column"),
                    e.emitContainerClasses());
                    var f = c.direction && c.direction !== s.direction
                      , h = s.loop && (c.slidesPerView !== s.slidesPerView || f);
                    f && a && e.changeDirection(),
                    (0,
                    r.X$)(e.params, c);
                    var g = e.params.enabled;
                    (0,
                    r.X$)(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                    m && !g ? e.disable() : !m && g && e.enable(),
                    e.currentBreakpoint = u,
                    e.emit("_beforeBreakpoint", c),
                    h && a && (e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t - n + e.loopedSlides, 0, !1)),
                    e.emit("breakpoint", c)
                }
            }
        }
        function $(e, t, a) {
            if (void 0 === t && (t = "window"),
            e && ("container" !== t || a)) {
                var n = !1
                  , r = (0,
                i.zk)()
                  , s = "window" === t ? r.innerHeight : a.clientHeight
                  , o = Object.keys(e).map((function(e) {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        var t = parseFloat(e.substr(1)), a;
                        return {
                            value: s * t,
                            point: e
                        }
                    }
                    return {
                        value: e,
                        point: e
                    }
                }
                ));
                o.sort((function(e, t) {
                    return parseInt(e.value, 10) - parseInt(t.value, 10)
                }
                ));
                for (var l = 0; l < o.length; l += 1) {
                    var u = o[l]
                      , d = u.point
                      , c = u.value;
                    "window" === t ? r.matchMedia("(min-width: " + c + "px)").matches && (n = d) : c <= a.clientWidth && (n = d)
                }
                return n || "max"
            }
        }
        var B = {
            setBreakpoint: R,
            getBreakpoint: $
        };
        function z(e, t) {
            var a = [];
            return e.forEach((function(e) {
                "object" == typeof e ? Object.keys(e).forEach((function(i) {
                    e[i] && a.push(t + i)
                }
                )) : "string" == typeof e && a.push(t + e)
            }
            )),
            a
        }
        function N() {
            var e = this
              , t = e.classNames
              , a = e.params
              , i = e.rtl
              , n = e.$el
              , r = e.device
              , s = e.support
              , o = z(["initialized", a.direction, {
                "pointer-events": s.pointerEvents && !s.touch
            }, {
                "free-mode": a.freeMode
            }, {
                autoheight: a.autoHeight
            }, {
                rtl: i
            }, {
                multirow: a.slidesPerColumn > 1
            }, {
                "multirow-column": a.slidesPerColumn > 1 && "column" === a.slidesPerColumnFill
            }, {
                android: r.android
            }, {
                ios: r.ios
            }, {
                "css-mode": a.cssMode
            }], a.containerModifierClass);
            t.push.apply(t, o),
            n.addClass([].concat(t).join(" ")),
            e.emitContainerClasses()
        }
        function X() {
            var e = this
              , t = e.$el
              , a = e.classNames;
            t.removeClass(a.join(" ")),
            e.emitContainerClasses()
        }
        var Y = {
            addClasses: N,
            removeClasses: X
        };
        function G(e, t, a, r, s, o) {
            var l = (0,
            i.zk)(), u, d;
            function c() {
                o && o()
            }
            (0,
            n.A)(e).parent("picture")[0] || e.complete && s ? c() : t ? ((u = new l.Image).onload = c,
            u.onerror = c,
            r && (u.sizes = r),
            a && (u.srcset = a),
            t && (u.src = t)) : c()
        }
        function F() {
            var e = this;
            function t() {
                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")))
            }
            e.imagesToLoad = e.$el.find("img");
            for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                var i = e.imagesToLoad[a];
                e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
            }
        }
        var j = {
            loadImage: G,
            preloadImages: F
        };
        function _() {
            var e = this
              , t = e.params
              , a = e.isLocked
              , i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
            t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = 1 === e.snapGrid.length,
            e.allowSlideNext = !e.isLocked,
            e.allowSlidePrev = !e.isLocked,
            a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
            a && a !== e.isLocked && (e.isEnd = !1,
            e.navigation && e.navigation.update())
        }
        var V = {
            checkOverflow: _
        }
          , H = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !1,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };
        function U(e, t) {
            for (var a = 0; a < t.length; a++) {
                var i = t[a];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function W(e, t, a) {
            return t && U(e.prototype, t),
            a && U(e, a),
            e
        }
        var q = {
            modular: c.A,
            eventsEmitter: p,
            update: v.A,
            translate: m.A,
            transition: f.A,
            slide: h.A,
            loop: g.A,
            grabCursor: T,
            manipulation: E.A,
            events: I,
            breakpoints: B,
            checkOverflow: V,
            classes: Y,
            images: j
        }
          , K = {}
          , J = function() {
            function e() {
                for (var t, a, i = arguments.length, u = new Array(i), d = 0; d < i; d++)
                    u[d] = arguments[d];
                if (1 === u.length && u[0].constructor && "Object" === Object.prototype.toString.call(u[0]).slice(8, -1) ? a = u[0] : (t = u[0],
                a = u[1]),
                a || (a = {}),
                a = (0,
                r.X$)({}, a),
                t && !a.el && (a.el = t),
                a.el && (0,
                n.A)(a.el).length > 1) {
                    var c = [];
                    return (0,
                    n.A)(a.el).each((function(t) {
                        var i = (0,
                        r.X$)({}, a, {
                            el: t
                        });
                        c.push(new e(i))
                    }
                    )),
                    c
                }
                var p = this;
                p.__swiper__ = !0,
                p.support = (0,
                s.k)(),
                p.device = (0,
                o.P)({
                    userAgent: a.userAgent
                }),
                p.browser = (0,
                l.X)(),
                p.eventsListeners = {},
                p.eventsAnyListeners = [],
                void 0 === p.modules && (p.modules = {}),
                Object.keys(p.modules).forEach((function(e) {
                    var t = p.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0]
                          , n = t.params[i];
                        if ("object" != typeof n || null === n)
                            return;
                        if (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === a[i] && (a[i] = {
                            auto: !0
                        }),
                        !(i in a) || !("enabled"in n))
                            return;
                        !0 === a[i] && (a[i] = {
                            enabled: !0
                        }),
                        "object" != typeof a[i] || "enabled"in a[i] || (a[i].enabled = !0),
                        a[i] || (a[i] = {
                            enabled: !1
                        })
                    }
                }
                ));
                var v = (0,
                r.X$)({}, H);
                return p.useParams(v),
                p.params = (0,
                r.X$)({}, v, K, a),
                p.originalParams = (0,
                r.X$)({}, p.params),
                p.passedParams = (0,
                r.X$)({}, a),
                p.params && p.params.on && Object.keys(p.params.on).forEach((function(e) {
                    p.on(e, p.params.on[e])
                }
                )),
                p.params && p.params.onAny && p.onAny(p.params.onAny),
                p.$ = n.A,
                (0,
                r.X$)(p, {
                    enabled: p.params.enabled,
                    el: t,
                    classNames: [],
                    slides: (0,
                    n.A)(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function e() {
                        return "horizontal" === p.params.direction
                    },
                    isVertical: function e() {
                        return "vertical" === p.params.direction
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: p.params.allowSlideNext,
                    allowSlidePrev: p.params.allowSlidePrev,
                    touchEvents: function e() {
                        var t = ["touchstart", "touchmove", "touchend", "touchcancel"]
                          , a = ["mousedown", "mousemove", "mouseup"];
                        return p.support.pointerEvents && (a = ["pointerdown", "pointermove", "pointerup"]),
                        p.touchEventsTouch = {
                            start: t[0],
                            move: t[1],
                            end: t[2],
                            cancel: t[3]
                        },
                        p.touchEventsDesktop = {
                            start: a[0],
                            move: a[1],
                            end: a[2]
                        },
                        p.support.touch || !p.params.simulateTouch ? p.touchEventsTouch : p.touchEventsDesktop
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: p.params.focusableElements,
                        lastClickTime: (0,
                        r.tB)(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: p.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                p.useModules(),
                p.emit("_swiper"),
                p.params.init && p.init(),
                p
            }
            var t = e.prototype;
            return t.enable = function e() {
                var t = this;
                t.enabled || (t.enabled = !0,
                t.params.grabCursor && t.setGrabCursor(),
                t.emit("enable"))
            }
            ,
            t.disable = function e() {
                var t = this;
                t.enabled && (t.enabled = !1,
                t.params.grabCursor && t.unsetGrabCursor(),
                t.emit("disable"))
            }
            ,
            t.setProgress = function e(t, a) {
                var i = this;
                t = Math.min(Math.max(t, 0), 1);
                var n = i.minTranslate(), r, s = (i.maxTranslate() - n) * t + n;
                i.translateTo(s, void 0 === a ? 0 : a),
                i.updateActiveIndex(),
                i.updateSlidesClasses()
            }
            ,
            t.emitContainerClasses = function e() {
                var t = this;
                if (t.params._emitClasses && t.el) {
                    var a = t.el.className.split(" ").filter((function(e) {
                        return 0 === e.indexOf("swiper-container") || 0 === e.indexOf(t.params.containerModifierClass)
                    }
                    ));
                    t.emit("_containerClasses", a.join(" "))
                }
            }
            ,
            t.getSlideClasses = function e(t) {
                var a = this;
                return t.className.split(" ").filter((function(e) {
                    return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(a.params.slideClass)
                }
                )).join(" ")
            }
            ,
            t.emitSlidesClasses = function e() {
                var t = this;
                if (t.params._emitClasses && t.el) {
                    var a = [];
                    t.slides.each((function(e) {
                        var i = t.getSlideClasses(e);
                        a.push({
                            slideEl: e,
                            classNames: i
                        }),
                        t.emit("_slideClass", e, i)
                    }
                    )),
                    t.emit("_slideClasses", a)
                }
            }
            ,
            t.slidesPerViewDynamic = function e() {
                var t = this
                  , a = t.params
                  , i = t.slides
                  , n = t.slidesGrid
                  , r = t.size
                  , s = t.activeIndex
                  , o = 1;
                if (a.centeredSlides) {
                    for (var l = i[s].swiperSlideSize, u, d = s + 1; d < i.length; d += 1)
                        i[d] && !u && (o += 1,
                        (l += i[d].swiperSlideSize) > r && (u = !0));
                    for (var c = s - 1; c >= 0; c -= 1)
                        i[c] && !u && (o += 1,
                        (l += i[c].swiperSlideSize) > r && (u = !0))
                } else
                    for (var p = s + 1; p < i.length; p += 1)
                        n[p] - n[s] < r && (o += 1);
                return o
            }
            ,
            t.update = function e() {
                var t = this;
                if (t && !t.destroyed) {
                    var a = t.snapGrid, i = t.params, n;
                    i.breakpoints && t.setBreakpoint(),
                    t.updateSize(),
                    t.updateSlides(),
                    t.updateProgress(),
                    t.updateSlidesClasses(),
                    t.params.freeMode ? (r(),
                    t.params.autoHeight && t.updateAutoHeight()) : (n = ("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || r(),
                    i.watchOverflow && a !== t.snapGrid && t.checkOverflow(),
                    t.emit("update")
                }
                function r() {
                    var e = t.rtlTranslate ? -1 * t.translate : t.translate
                      , a = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                    t.setTranslate(a),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()
                }
            }
            ,
            t.changeDirection = function e(t, a) {
                void 0 === a && (a = !0);
                var i = this
                  , n = i.params.direction;
                return t || (t = "horizontal" === n ? "vertical" : "horizontal"),
                t === n || "horizontal" !== t && "vertical" !== t || (i.$el.removeClass("" + i.params.containerModifierClass + n).addClass("" + i.params.containerModifierClass + t),
                i.emitContainerClasses(),
                i.params.direction = t,
                i.slides.each((function(e) {
                    "vertical" === t ? e.style.width = "" : e.style.height = ""
                }
                )),
                i.emit("changeDirection"),
                a && i.update()),
                i
            }
            ,
            t.mount = function e(t) {
                var a = this;
                if (a.mounted)
                    return !0;
                var s = (0,
                n.A)(t || a.params.el);
                if (!(t = s[0]))
                    return !1;
                t.swiper = a;
                var o = function e() {
                    return "." + (a.params.wrapperClass || "").trim().split(" ").join(".")
                }, l, u = function e() {
                    if (t && t.shadowRoot && t.shadowRoot.querySelector) {
                        var a = (0,
                        n.A)(t.shadowRoot.querySelector(o()));
                        return a.children = function(e) {
                            return s.children(e)
                        }
                        ,
                        a
                    }
                    return s.children(o())
                }();
                if (0 === u.length && a.params.createElements) {
                    var d, c = (0,
                    i.YE)().createElement("div");
                    u = (0,
                    n.A)(c),
                    c.className = a.params.wrapperClass,
                    s.append(c),
                    s.children("." + a.params.slideClass).each((function(e) {
                        u.append(e)
                    }
                    ))
                }
                return (0,
                r.X$)(a, {
                    $el: s,
                    el: t,
                    $wrapperEl: u,
                    wrapperEl: u[0],
                    mounted: !0,
                    rtl: "rtl" === t.dir.toLowerCase() || "rtl" === s.css("direction"),
                    rtlTranslate: "horizontal" === a.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === s.css("direction")),
                    wrongRTL: "-webkit-box" === u.css("display")
                }),
                !0
            }
            ,
            t.init = function e(t) {
                var a = this, i;
                return a.initialized || !1 === a.mount(t) || (a.emit("beforeInit"),
                a.params.breakpoints && a.setBreakpoint(),
                a.addClasses(),
                a.params.loop && a.loopCreate(),
                a.updateSize(),
                a.updateSlides(),
                a.params.watchOverflow && a.checkOverflow(),
                a.params.grabCursor && a.enabled && a.setGrabCursor(),
                a.params.preloadImages && a.preloadImages(),
                a.params.loop ? a.slideTo(a.params.initialSlide + a.loopedSlides, 0, a.params.runCallbacksOnInit, !1, !0) : a.slideTo(a.params.initialSlide, 0, a.params.runCallbacksOnInit, !1, !0),
                a.attachEvents(),
                a.initialized = !0,
                a.emit("init"),
                a.emit("afterInit")),
                a
            }
            ,
            t.destroy = function e(t, a) {
                void 0 === t && (t = !0),
                void 0 === a && (a = !0);
                var i = this
                  , n = i.params
                  , s = i.$el
                  , o = i.$wrapperEl
                  , l = i.slides;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"),
                i.initialized = !1,
                i.detachEvents(),
                n.loop && i.loopDestroy(),
                a && (i.removeClasses(),
                s.removeAttr("style"),
                o.removeAttr("style"),
                l && l.length && l.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                i.emit("destroy"),
                Object.keys(i.eventsListeners).forEach((function(e) {
                    i.off(e)
                }
                )),
                !1 !== t && (i.$el[0].swiper = null,
                (0,
                r.oR)(i)),
                i.destroyed = !0),
                null
            }
            ,
            e.extendDefaults = function e(t) {
                (0,
                r.X$)(K, t)
            }
            ,
            e.installModule = function t(a) {
                e.prototype.modules || (e.prototype.modules = {});
                var i = a.name || Object.keys(e.prototype.modules).length + "_" + (0,
                r.tB)();
                e.prototype.modules[i] = a
            }
            ,
            e.use = function t(a) {
                return Array.isArray(a) ? (a.forEach((function(t) {
                    return e.installModule(t)
                }
                )),
                e) : (e.installModule(a),
                e)
            }
            ,
            W(e, null, [{
                key: "extendedDefaults",
                get: function e() {
                    return K
                }
            }, {
                key: "defaults",
                get: function e() {
                    return H
                }
            }]),
            e
        }();
        Object.keys(q).forEach((function(e) {
            Object.keys(q[e]).forEach((function(t) {
                J.prototype[t] = q[e][t]
            }
            ))
        }
        )),
        J.use([u.A, d.A]);
        var Q = J
    }
}]);
