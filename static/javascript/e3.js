"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[38594], {
    322486: function(t, e, s) {
        s.d(e, {
            HG: function() {
                return p
            },
            m6: function() {
                return g
            }
        });
        var i = s(973816)
          , n = s(289297)
          , r = s(306936)
          , o = s(317412)
          , a = s(642531)
          , h = s(407058)
          , _ = s(341535);
        const c = 100;
        let u;
        class p {
            constructor() {
                this._notifyingListeners = !1,
                this._scopeListeners = [],
                this._eventProcessors = [],
                this._breadcrumbs = [],
                this._attachments = [],
                this._user = {},
                this._tags = {},
                this._extra = {},
                this._contexts = {},
                this._sdkProcessingMetadata = {},
                this._propagationContext = l()
            }
            static clone(t) {
                return t ? t.clone() : new p
            }
            clone() {
                const t = new p;
                return t._breadcrumbs = [...this._breadcrumbs],
                t._tags = {
                    ...this._tags
                },
                t._extra = {
                    ...this._extra
                },
                t._contexts = {
                    ...this._contexts
                },
                t._user = this._user,
                t._level = this._level,
                t._span = this._span,
                t._session = this._session,
                t._transactionName = this._transactionName,
                t._fingerprint = this._fingerprint,
                t._eventProcessors = [...this._eventProcessors],
                t._requestSession = this._requestSession,
                t._attachments = [...this._attachments],
                t._sdkProcessingMetadata = {
                    ...this._sdkProcessingMetadata
                },
                t._propagationContext = {
                    ...this._propagationContext
                },
                t._client = this._client,
                t
            }
            setClient(t) {
                this._client = t
            }
            getClient() {
                return this._client
            }
            addScopeListener(t) {
                this._scopeListeners.push(t)
            }
            addEventProcessor(t) {
                return this._eventProcessors.push(t),
                this
            }
            setUser(t) {
                return this._user = t || {
                    email: void 0,
                    id: void 0,
                    ip_address: void 0,
                    segment: void 0,
                    username: void 0
                },
                this._session && (0,
                h.qO)(this._session, {
                    user: t
                }),
                this._notifyScopeListeners(),
                this
            }
            getUser() {
                return this._user
            }
            getRequestSession() {
                return this._requestSession
            }
            setRequestSession(t) {
                return this._requestSession = t,
                this
            }
            setTags(t) {
                return this._tags = {
                    ...this._tags,
                    ...t
                },
                this._notifyScopeListeners(),
                this
            }
            setTag(t, e) {
                return this._tags = {
                    ...this._tags,
                    [t]: e
                },
                this._notifyScopeListeners(),
                this
            }
            setExtras(t) {
                return this._extra = {
                    ...this._extra,
                    ...t
                },
                this._notifyScopeListeners(),
                this
            }
            setExtra(t, e) {
                return this._extra = {
                    ...this._extra,
                    [t]: e
                },
                this._notifyScopeListeners(),
                this
            }
            setFingerprint(t) {
                return this._fingerprint = t,
                this._notifyScopeListeners(),
                this
            }
            setLevel(t) {
                return this._level = t,
                this._notifyScopeListeners(),
                this
            }
            setTransactionName(t) {
                return this._transactionName = t,
                this._notifyScopeListeners(),
                this
            }
            setContext(t, e) {
                return null === e ? delete this._contexts[t] : this._contexts[t] = e,
                this._notifyScopeListeners(),
                this
            }
            setSpan(t) {
                return this._span = t,
                this._notifyScopeListeners(),
                this
            }
            getSpan() {
                return this._span
            }
            getTransaction() {
                const t = this._span;
                return t && t.transaction
            }
            setSession(t) {
                return t ? this._session = t : delete this._session,
                this._notifyScopeListeners(),
                this
            }
            getSession() {
                return this._session
            }
            update(t) {
                if (!t)
                    return this;
                const e = "function" == typeof t ? t(this) : t;
                if (e instanceof p) {
                    const t = e.getScopeData();
                    this._tags = {
                        ...this._tags,
                        ...t.tags
                    },
                    this._extra = {
                        ...this._extra,
                        ...t.extra
                    },
                    this._contexts = {
                        ...this._contexts,
                        ...t.contexts
                    },
                    t.user && Object.keys(t.user).length && (this._user = t.user),
                    t.level && (this._level = t.level),
                    t.fingerprint.length && (this._fingerprint = t.fingerprint),
                    e.getRequestSession() && (this._requestSession = e.getRequestSession()),
                    t.propagationContext && (this._propagationContext = t.propagationContext)
                } else if ((0,
                i.Qd)(e)) {
                    const e = t;
                    this._tags = {
                        ...this._tags,
                        ...e.tags
                    },
                    this._extra = {
                        ...this._extra,
                        ...e.extra
                    },
                    this._contexts = {
                        ...this._contexts,
                        ...e.contexts
                    },
                    e.user && (this._user = e.user),
                    e.level && (this._level = e.level),
                    e.fingerprint && (this._fingerprint = e.fingerprint),
                    e.requestSession && (this._requestSession = e.requestSession),
                    e.propagationContext && (this._propagationContext = e.propagationContext)
                }
                return this
            }
            clear() {
                return this._breadcrumbs = [],
                this._tags = {},
                this._extra = {},
                this._user = {},
                this._contexts = {},
                this._level = void 0,
                this._transactionName = void 0,
                this._fingerprint = void 0,
                this._requestSession = void 0,
                this._span = void 0,
                this._session = void 0,
                this._notifyScopeListeners(),
                this._attachments = [],
                this._propagationContext = l(),
                this
            }
            addBreadcrumb(t, e) {
                const s = "number" == typeof e ? e : c;
                if (s <= 0)
                    return this;
                const i = {
                    timestamp: (0,
                    n.lu)(),
                    ...t
                }
                  , r = this._breadcrumbs;
                return r.push(i),
                this._breadcrumbs = r.length > s ? r.slice(-s) : r,
                this._notifyScopeListeners(),
                this
            }
            getLastBreadcrumb() {
                return this._breadcrumbs[this._breadcrumbs.length - 1]
            }
            clearBreadcrumbs() {
                return this._breadcrumbs = [],
                this._notifyScopeListeners(),
                this
            }
            addAttachment(t) {
                return this._attachments.push(t),
                this
            }
            getAttachments() {
                const t = undefined;
                return this.getScopeData().attachments
            }
            clearAttachments() {
                return this._attachments = [],
                this
            }
            getScopeData() {
                const {_breadcrumbs: t, _attachments: e, _contexts: s, _tags: i, _extra: n, _user: r, _level: o, _fingerprint: a, _eventProcessors: h, _propagationContext: _, _sdkProcessingMetadata: c, _transactionName: u, _span: p} = this;
                return {
                    breadcrumbs: t,
                    attachments: e,
                    contexts: s,
                    tags: i,
                    extra: n,
                    user: r,
                    level: o,
                    fingerprint: a || [],
                    eventProcessors: h,
                    propagationContext: _,
                    sdkProcessingMetadata: c,
                    transactionName: u,
                    span: p
                }
            }
            applyToEvent(t, e={}, s=[]) {
                (0,
                _.e2)(t, this.getScopeData());
                const i = [...s, ...(0,
                a.lG)(), ...this._eventProcessors];
                return (0,
                a.jB)(i, t, e)
            }
            setSDKProcessingMetadata(t) {
                return this._sdkProcessingMetadata = {
                    ...this._sdkProcessingMetadata,
                    ...t
                },
                this
            }
            setPropagationContext(t) {
                return this._propagationContext = t,
                this
            }
            getPropagationContext() {
                return this._propagationContext
            }
            captureException(t, e) {
                const s = e && e.event_id ? e.event_id : (0,
                r.eJ)();
                if (!this._client)
                    return o.vF.warn("No client configured on scope - will not capture exception!"),
                    s;
                const i = new Error("Sentry syntheticException");
                return this._client.captureException(t, {
                    originalException: t,
                    syntheticException: i,
                    ...e,
                    event_id: s
                }, this),
                s
            }
            captureMessage(t, e, s) {
                const i = s && s.event_id ? s.event_id : (0,
                r.eJ)();
                if (!this._client)
                    return o.vF.warn("No client configured on scope - will not capture message!"),
                    i;
                const n = new Error(t);
                return this._client.captureMessage(t, e, {
                    originalException: t,
                    syntheticException: n,
                    ...s,
                    event_id: i
                }, this),
                i
            }
            captureEvent(t, e) {
                const s = e && e.event_id ? e.event_id : (0,
                r.eJ)();
                return this._client ? (this._client.captureEvent(t, {
                    ...e,
                    event_id: s
                }, this),
                s) : (o.vF.warn("No client configured on scope - will not capture event!"),
                s)
            }
            _notifyScopeListeners() {
                this._notifyingListeners || (this._notifyingListeners = !0,
                this._scopeListeners.forEach((t => {
                    t(this)
                }
                )),
                this._notifyingListeners = !1)
            }
        }
        function g() {
            return u || (u = new p),
            u
        }
        function d(t) {
            u = t
        }
        function l() {
            return {
                traceId: (0,
                r.eJ)(),
                spanId: (0,
                r.eJ)().substring(16)
            }
        }
    }
}]);
