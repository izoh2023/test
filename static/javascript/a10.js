"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[55423], {
    635564: function(t, e, s) {
        s.d(e, {
            A: function() {
                return j
            }
        });
        var i = function t() {
            var e = this
              , s = e._self._c;
            return s("div", [s("b-modal", {
                ref: "HighlightsModal",
                attrs: {
                    id: "story-create-highlight-modal",
                    centered: "",
                    "dialog-class": "story-highlights-dialog",
                    "modal-class": {
                        "m-hidden": e.storyIsOpened
                    },
                    "body-class": "m-reset-body-paddings m-highlights-height d-flex flex-column",
                    "content-class": "story-highlights-content",
                    "header-class": {
                        "g-border-bottom": !e.isEditMode
                    },
                    size: "middle-md",
                    "footer-class": "g-border-top",
                    "no-enforce-focus": ""
                },
                on: {
                    hide: e.reset
                },
                scopedSlots: e._u([{
                    key: "modal-header",
                    fn: function() {
                        return [s("h4", {
                            staticClass: "modal-title"
                        }, [e._v(" " + e._s(e.modalTitle) + " ")]), e.isArchiveMode ? s("div", {
                            staticClass: "modal-header__btns-group m-move-right"
                        }, [s("button", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: {
                                    content: e.$t("message.add_story"),
                                    classes: "m-tooltip-higher"
                                },
                                expression: "{ content: $t('message.add_story'), classes: 'm-tooltip-higher' }"
                            }],
                            staticClass: "g-btn m-icon m-icon-only m-sm-size m-gray m-add-highlights m-with-round-hover",
                            on: {
                                click: e.goToCreateNewStory
                            }
                        }, [s("svg", {
                            directives: [{
                                name: "svg-sprite",
                                rawName: "v-svg-sprite:icon-add",
                                arg: "icon-add"
                            }]
                        })]), s("button", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: {
                                    content: e.$t("message.add_to_highlight"),
                                    classes: "m-tooltip-higher"
                                },
                                expression: "{ content: $t('message.add_to_highlight'), classes: 'm-tooltip-higher' }"
                            }],
                            staticClass: "g-btn m-icon m-icon-only m-sm-size m-gray m-with-round-hover",
                            on: {
                                click: e.goToHLCreation
                            }
                        }, [s("svg", {
                            directives: [{
                                name: "svg-sprite",
                                rawName: "v-svg-sprite:icon-highlights",
                                arg: "icon-highlights"
                            }]
                        })])]) : e._e()]
                    },
                    proxy: !0
                }, {
                    key: "modal-footer",
                    fn: function() {
                        return [s("button", {
                            staticClass: "g-btn m-flat m-btn-gaps m-reset-width",
                            on: {
                                click: e.cancel
                            }
                        }, [e._v(" " + e._s(e.$t(`message.${e.isArchiveMode ? "close" : "cancel"}_button`)) + " ")]), !e.isArchiveMode || e.isEditSelectedMode ? s("button", {
                            staticClass: "g-btn m-flat m-btn-gaps m-reset-width",
                            attrs: {
                                disabled: e.isNextDisabled
                            },
                            on: {
                                click: e.saveNextHandler
                            }
                        }, [e._v(" " + e._s(e.$t("message." + (e.isEditMode ? "save" : "next"))) + " ")]) : e._e()]
                    },
                    proxy: !0
                }]),
                model: {
                    value: e.show,
                    callback: function(t) {
                        e.show = t
                    },
                    expression: "show"
                }
            }, [e.isEditMode ? [s("cover-and-title", {
                staticClass: "g-sides-gaps",
                attrs: {
                    title: e.title,
                    "cover-id": e.coverId,
                    "stories-ids": e.coverStoriesIds,
                    cover: e.cover
                },
                on: {
                    "update:title": function(t) {
                        e.title = t
                    },
                    "update:coverId": function(t) {
                        e.coverId = t
                    },
                    "update:cover-id": function(t) {
                        e.coverId = t
                    },
                    setCover: e.updateCover,
                    isLoading: e.customCoverLoadingHandler
                }
            }), s("ul", {
                staticClass: "b-tabs__nav m-tabs-default m-nowrap m-size-md m-flex-width mb-0"
            }, e._l(["selected", "archive"], (function(t, i) {
                return s("li", {
                    key: t,
                    staticClass: "b-tabs__nav__item",
                    class: {
                        "m-current": 0 === i && e.isEditSelectedMode || 1 === i && !e.isEditSelectedMode
                    }
                }, [s("button", {
                    staticClass: "b-tabs__nav__link m-with-rectangle-hover",
                    on: {
                        click: function(t) {
                            return e.changeEditMode(i)
                        }
                    }
                }, [s("span", {
                    staticClass: "b-tabs__nav__text"
                }, [e._v(" " + e._s(e.$t(`message.${t}`)) + " ")])])])
            }
            )), 0)] : e._e(), e.isLoading ? s("spinner-loader", {
                staticClass: "m-screen-center"
            }) : e.isNoStories ? s("div", {
                staticClass: "spinner-container m-mall-auto"
            }, [s("span", {
                staticClass: "empty-message m-show"
            }, [e._v(" " + e._s(e.$t("message.no_stories")) + " ")])]) : s("div", {
                staticClass: "b-wrapper-highlights b-scrolled-modal-content m-stretched-negative m-native-custom-scrollbar m-invisible-scrollbar m-scrollbar-y",
                class: {
                    "m-after-tabs": e.isEditSelectedMode && e.isEditMode,
                    "m-edit-highlights-step m-after-tabs": !e.isEditSelectedMode && e.isEditMode,
                    "flex-wrap": !e.isEditSelectedMode && e.archiveStoriesLoading && e.archiveIds.length
                }
            }, [s("div", {
                staticClass: "b-photos m-highlights-wrapper mb-1"
            }, e._l(e.storiesList, (function(t) {
                return s("div", {
                    key: t,
                    staticClass: "b-photos__item m-square m-highlight m-checkbox-control m-default-bg",
                    class: {
                        selected: e.isSelected(t)
                    },
                    on: {
                        click: function(s) {
                            return e.storyClickHandler(t)
                        }
                    }
                }, [e.isEditSelectedMode ? s("div", {
                    staticClass: "timestamp"
                }, [e._v(" " + e._s(e.getDateValue(t)) + " ")]) : !e.isEditSelectedMode && e.archiveDates[t] ? s("div", {
                    staticClass: "timestamp"
                }, [e._v(" " + e._s(e.archiveDates[t]) + " ")]) : e._e(), e.isArchiveMode ? e._e() : s("div", {
                    staticClass: "checkbox-item m-pos-right-top"
                }, [s("div", {
                    staticClass: "checkbox-item__inside"
                }, [s("span", {
                    staticClass: "b-input-ripple"
                }), s("span", {
                    staticClass: "checkbox-item__num"
                }, [e._v(" " + e._s(e.getSelectedIndex(t)) + " ")])])]), s("img", {
                    staticClass: "b-photos__item__img",
                    attrs: {
                        src: e.getStoryPreview(t),
                        alt: ""
                    }
                })])
            }
            )), 0), e.isShowInfiniteLoading ? s("infinite-loading", {
                key: e.infiniteId,
                attrs: {
                    "loader-center": e.isLoading
                },
                on: {
                    infinite: e.infiniteHandler
                }
            }) : e._e()], 1)], 2), s("highlight-story-cover-and-title", {
                on: {
                    save: e.save
                }
            })], 1)
        }, o = [], r = s(763375), a = s.n(r), n = s(656625), l = s.n(n), d = s(407350), h = s.n(d), c = s(944114), u = s(842762), g = s(962953), m = s(974353), v = s.n(m), p = s(110908), f = s(252832), S = function t() {
            var e = this
              , s = e._self._c;
            return s("b-modal", {
                attrs: {
                    centered: "",
                    size: "middle-md",
                    "body-class": "m-reset-body-paddings-sides-v"
                },
                on: {
                    hidden: e.close
                },
                scopedSlots: e._u([{
                    key: "modal-header",
                    fn: function() {
                        return [s("h4", {
                            staticClass: "modal-title"
                        }, [e._v(" " + e._s(e.$t("message.cover_and_title")) + " ")])]
                    },
                    proxy: !0
                }, {
                    key: "modal-footer",
                    fn: function() {
                        return [s("button", {
                            staticClass: "g-btn m-flat m-btn-gaps m-reset-width",
                            attrs: {
                                type: "button"
                            },
                            on: {
                                click: e.close
                            }
                        }, [e._v(" " + e._s(e.$t("message.back_button")) + " ")]), s("button", {
                            staticClass: "g-btn m-flat m-btn-gaps m-reset-width",
                            attrs: {
                                disabled: e.isSaveDisabled
                            },
                            on: {
                                click: e.save
                            }
                        }, [e._v(" " + e._s(e.$t("message.save")) + " ")])]
                    },
                    proxy: !0
                }]),
                model: {
                    value: e.show,
                    callback: function(t) {
                        e.show = t
                    },
                    expression: "show"
                }
            }, [s("cover-and-title", {
                attrs: {
                    title: e.title,
                    "cover-id": e.coverId,
                    "stories-ids": e.selectedStoriesIds
                },
                on: {
                    "update:title": function(t) {
                        e.title = t
                    },
                    setCover: e.setCover,
                    isLoading: e.customCoverLoadingHandler
                }
            })], 1)
        }, y = [], C = s(619930), I = function t() {
            var e = this
              , s = e._self._c;
            return s("div", [s("drag-scroll", {
                ref: "dragContainer",
                staticClass: "m-mb-25 m-gaps-inside m-gaps-outside"
            }, [s("div", {
                staticClass: "b-dropzone__previews d-flex"
            }, [e._l(e.previewList, (function({id: t, thumb: i}) {
                return s("div", {
                    key: t,
                    staticClass: "b-dropzone__preview",
                    class: [t === e.coverId ? "selected" : "g-pointer-cursor"],
                    on: {
                        click: function(s) {
                            return e.selectCover(t)
                        }
                    }
                }, [s("img", {
                    staticClass: "b-dropzone__preview__media",
                    attrs: {
                        src: i || e.cover
                    }
                }), s("div", {
                    staticClass: "checkbox-item m-pos-right-top"
                }, [s("div", {
                    staticClass: "checkbox-item__inside"
                }, [s("span", {
                    staticClass: "b-input-ripple"
                }), s("svg", {
                    directives: [{
                        name: "svg-sprite",
                        rawName: "v-svg-sprite"
                    }],
                    staticClass: "icon-done",
                    attrs: {
                        "extra-class": "m-aligned-top"
                    }
                })])])])
            }
            )), e._l(e.uploadedFiles, (function(t, i) {
                return s("upload-preview", {
                    key: t.orderId,
                    class: [t.coverId === e.coverId ? "selected m-no-pointer" : "g-pointer-cursor m-not-selected"],
                    attrs: {
                        file: t,
                        index: i,
                        "show-editor": !1,
                        "is-cover": ""
                    },
                    on: {
                        selectCover: function(s) {
                            return e.selectCover(t.coverId, !0)
                        }
                    }
                })
            }
            ))], 2), s("button-add-media", {
                attrs: {
                    "md-size": ""
                },
                nativeOn: {
                    click: function(t) {
                        return e.fileUploadHandler.apply(null, arguments)
                    }
                }
            })], 1), s("input-o-f", {
                staticClass: "m-reset-bottom-gap",
                attrs: {
                    value: e.title,
                    label: e.$t("message.stripe_legal_title_title"),
                    autocomplete: "highlights-modal-input",
                    autofocus: "",
                    maxlength: 60,
                    counter: 60,
                    required: "",
                    name: "highlights-modal-input"
                },
                on: {
                    input: function(t) {
                        return e.$emit("update:title", t)
                    }
                }
            })], 1)
        }, _ = [], b = s(631797), x = s(317282), A = s(808139), w = s(639079), M = s(445948), k, $ = {
            name: "CoverAndTitle",
            components: {
                InputOF: w.A,
                DragScroll: A.A,
                ButtonAddMedia: x.A,
                UploadPreview: b.default
            },
            mixins: [C.A],
            props: {
                title: {
                    type: String,
                    required: !0
                },
                storiesIds: {
                    type: Array,
                    default: () => []
                },
                coverId: {
                    type: [String, Number, null],
                    default: null
                },
                cover: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                ...(0,
                p.WxR)(["getStory"]),
                previewList() {
                    return this.storiesIds.map((t => ({
                        ...this.getStory(t),
                        id: t
                    })))
                }
            },
            mounted() {
                this.uploaderMixin_isHighlightCover = !0,
                this.storiesIds.length > 2 && setTimeout(( () => {
                    const t = 136
                      , e = this.storiesIds.findIndex((t => t === this.coverId)) - 1;
                    if (e) {
                        const s = t * e;
                        this.$refs.dragContainer.$el.scroll({
                            left: s,
                            behavior: M.r0.SMOOTH
                        })
                    }
                }
                ), 500)
            },
            methods: {
                selectCover(t, e=!1) {
                    this.$emit("setCover", {
                        id: t,
                        isCustom: e
                    })
                },
                async fileUploadHandler() {
                    await this.handleInputFile({
                        accept: this.acceptFilesExtByType(["photo"], [".gif"]),
                        validateParamsType: "photo"
                    }, ( () => {
                        this.$emit("isLoading", !0)
                    }
                    ));
                    const t = this.uploadedFiles[this.uploadedFiles.length - 1]
                      , e = (null == t ? void 0 : t.processId) || (null == t ? void 0 : t.id);
                    e && (this.uploadedFiles = [{
                        ...t,
                        coverId: e
                    }],
                    this.selectCover(e, !0)),
                    this.$emit("isLoading", !1)
                }
            }
        }, H = s(281656), E, L = (0,
        H.A)($, I, _, !1, null, null, null).exports, T = {
            name: "HighlightStoryCoverAndTitle",
            components: {
                CoverAndTitle: L
            },
            mixins: [C.A],
            data() {
                return {
                    show: !1,
                    title: "",
                    coverId: null,
                    selectedStoriesIds: [],
                    isCustomUploadedImage: !1,
                    isCustomCoverLoading: !1
                }
            },
            computed: {
                isSaveDisabled() {
                    return !this.selectedStoriesIds.length && !this.uploadedFiles.length || !this.title.trim() || this.isCustomCoverLoading
                }
            },
            mounted() {
                this.$root.$on("ShowHighlightStoryCoverAndTitleModal", this.initData)
            },
            beforeDestroy() {
                this.$root.$off("ShowHighlightStoryCoverAndTitleModal", this.initData)
            },
            methods: {
                save() {
                    const t = {
                        title: this.title,
                        storyIds: this.selectedStoriesIds.concat(this.uploadedFiles.map(( ({id: t}) => t)))
                    };
                    this.isCustomUploadedImage ? t.thumbSourceId = this.coverId : t.coverStoryId = this.coverId,
                    this.$emit("save", t),
                    this.close()
                },
                initData(t) {
                    this.show = !0,
                    Object.keys(t).forEach((e => {
                        const s = t[e];
                        s && (this[e] = s)
                    }
                    ))
                },
                setCover({id: t, isCustom: e}) {
                    this.coverId = t,
                    this.isCustomUploadedImage = e
                },
                customCoverLoadingHandler(t) {
                    this.isCustomCoverLoading = t
                },
                close() {
                    this.show = !1,
                    this.title = "",
                    this.coverId = null,
                    this.selectedStoriesIds = [],
                    this.uploadedFiles = [],
                    this.uploads = {},
                    this.isCustomCoverLoading = !1
                }
            }
        }, B = T, U, D = (0,
        H.A)(B, S, y, !1, null, null, null).exports, N = s(815824), O = s(758987), P = s(919469);
        const z = {
            storyIsOpened: !1,
            isNewMode: !1,
            isEditMode: !1,
            isArchiveMode: !1,
            isArchiveStartMode: !1,
            isEditSelectedMode: !1,
            show: !1,
            highlightId: null,
            coverId: null,
            title: "",
            stories: [],
            cover: "",
            customCoverId: null,
            coverStoriesIds: [],
            selectedStoriesIds: [],
            infiniteId: +new Date,
            startEditValues: {},
            isCustomCover: !1,
            isCustomCoverLoading: !1,
            archiveDates: {}
        };
        var F = {
            name: "HighlightCreateModal",
            components: {
                CoverAndTitle: L,
                HighlightStoryCoverAndTitle: D,
                SpinnerLoader: f.default,
                InfiniteLoading: N.A
            },
            data() {
                return {
                    ...z
                }
            },
            computed: {
                ...(0,
                p.WxR)(["getStory", "getHighlights"]),
                ...(0,
                p.d7f)(["archiveStoriesLoading", "isArchiveStoriesLoaded", "archiveIds"]),
                ...(0,
                p.npG)(["authUserId"]),
                isNoStories() {
                    return !this.isEditSelectedMode && this.isArchiveStoriesLoaded && !this.archiveIds.length
                },
                isLoading() {
                    return this.archiveStoriesLoading && !this.archiveIds.length
                },
                isShowInfiniteLoading() {
                    return this.show && !this.isEditSelectedMode && !this.isArchiveStoriesLoaded
                },
                storiesList() {
                    const t = this.isEditSelectedMode ? this.stories : this.archiveIds;
                    return this.isEditMode ? t.sort(( (t, e) => v()(this.getStory(t).createdAt).isBefore(v()(this.getStory(e).createdAt)) ? 1 : -1)) : t
                },
                modalTitle() {
                    let t = "message.";
                    switch (!0) {
                    case this.isEditMode:
                        t += "edit_highlight";
                        break;
                    case this.isNewMode:
                        t += "create_highlight";
                        break;
                    case this.isArchiveMode:
                        t += "story_archive"
                    }
                    return this.$t(t)
                },
                isNoEditSelected() {
                    return Boolean(this.isEditMode && !this.selectedStoriesIds.length && this.title)
                },
                isNextDisabled() {
                    return this.isEditMode ? !this.isNoEditSelected && (!(this.selectedStoriesIds.length && this.title.trim() && !this.isCustomCoverLoading) || !Object.keys(this.startEditValues).some((t => {
                        const e = this.startEditValues[t];
                        return Array.isArray(this[t]) ? (0,
                        P.c)(this[t]).toString() !== (0,
                        P.c)(e).toString() : this[t] !== e
                    }
                    ))) : !this.selectedStoriesIds.length
                }
            },
            mounted() {
                this.$root.$on("show-create-highlight-modal", ( (t={}) => {
                    const {isNew: e=!1, isEdit: s=!1, isArchive: i=!1, highlightId: o} = t;
                    let r;
                    switch (this.show = !0,
                    !0) {
                    case s:
                        r = () => {
                            this.highlightId = o;
                            const {cover: t, coverStoryId: e, title: s, stories: i, coverMediaId: r} = this.getHighlights(this.highlightId);
                            this.coverId = r || e,
                            r && (this.customCoverId = r),
                            this.startEditValues = {
                                coverId: this.coverId,
                                title: s,
                                selectedStoriesIds: i
                            },
                            this.isEditMode = !0,
                            this.isEditSelectedMode = !0,
                            this.title = s,
                            this.stories = [...i],
                            this.coverStoriesIds = [...i],
                            r && (this.coverStoriesIds.push(r),
                            this.isCustomCover = !0),
                            this.cover = t,
                            this.selectedStoriesIds = [...i]
                        }
                        ;
                        break;
                    case i:
                        r = () => {
                            this.isArchiveMode = !0,
                            this.isArchiveStartMode = !0
                        }
                        ;
                        break;
                    case e:
                        r = () => {
                            this.isNewMode = !0
                        }
                    }
                    this.$nextTick(( () => {
                        r()
                    }
                    ))
                }
                )),
                this.$root.$on("component::story::close", ( () => {
                    this.storyIsOpened = !1
                }
                )),
                this.$root.$on("story::creation::upload::start", this.close)
            },
            beforeDestroy() {
                this.$root.$off("story::creation::upload::start", this.close)
            },
            methods: {
                ...(0,
                p.xon)(["fetchArchive", "saveHighlight", "removeHighlights", "fetchUserHighlights"]),
                ...(0,
                p.Cj8)(["setArchiveStories", "setArchiveLoading"]),
                reset() {
                    this.setArchiveStories(),
                    this.setArchiveLoading(!1),
                    Object.keys(z).forEach((t => {
                        this[t] = z[t]
                    }
                    ))
                },
                getDateValue(t) {
                    const {createdAt: e} = this.getStory(t);
                    return v()(e).format("MMM D")
                },
                prepareDateValue() {
                    this.archiveDates = {},
                    this.archiveIds.forEach((t => {
                        const e = this.getDateValue(t)
                          , s = undefined;
                        Object.values(this.archiveDates).includes(e) || (this.archiveDates[t] = e)
                    }
                    ))
                },
                changeEditMode(t) {
                    this.isEditSelectedMode = Boolean(!t)
                },
                goToHLCreation() {
                    this.isNewMode = !0,
                    this.isArchiveMode = !1,
                    this.isEditSelectedMode = !1
                },
                async save(t) {
                    var e, s;
                    this.$window.showPreloader();
                    const i = (null === (e = this.getHighlights(this.highlightId)) || void 0 === e ? void 0 : e.stories) || []
                      , o = null === (s = t.storyIds) || void 0 === s ? void 0 : s.some((t => !i.includes(t)));
                    let r;
                    this.highlightId && (t.id = this.highlightId);
                    try {
                        r = await this.saveHighlight({
                            id: this.highlightId,
                            ...t
                        })
                    } catch (a) {
                        (0,
                        O.r_)(a)
                    }
                    r && !this.isEditMode ? this.$bvToast.toast(this.$t("message.highlight_was_created"), {
                        toastClass: "b-toaster__only_msg settings-toast",
                        toaster: "b-toaster-bottom-left",
                        autoHideDelay: 1e3
                    }) : r && o && await this.fetchUserHighlights({
                        userId: this.authUserId
                    }),
                    this.show = !1,
                    this.$window.hidePreloader()
                },
                storyClickHandler(t) {
                    this.isArchiveMode ? this.runStoryThrottled(t) : this.select(t)
                },
                runStoryThrottled: h()((function(t) {
                    this.runStory(t)
                }
                ), 1500),
                select(t) {
                    if (this.selectedStoriesIds = l()(this.selectedStoriesIds, [t]),
                    this.isEditMode)
                        if (this.stories = a()([...this.stories, t]),
                        this.customCoverId) {
                            const e = this.coverStoriesIds.filter((t => t !== this.customCoverId));
                            this.coverStoriesIds = a()([...e, t, this.customCoverId])
                        } else
                            this.coverStoriesIds = a()([...this.coverStoriesIds, t])
                },
                runStory(t) {
                    this.$root.$emit("component::story::run", {
                        users: [this.authUserId],
                        story: t,
                        isArchived: !0
                    }),
                    this.storyIsOpened = !0
                },
                async infiniteHandler(t) {
                    const e = this.isEditMode ? 15 : 18;
                    await this.fetchArchive(e),
                    this.prepareDateValue(),
                    this.isArchiveStoriesLoaded ? t.complete() : t.loaded()
                },
                isSelected(t) {
                    return this.getSelectedIndex(t) > 0
                },
                getSelectedIndex(t) {
                    return this.selectedStoriesIds.indexOf(t) + 1
                },
                getStoryPreview(t) {
                    return this.getStory(t).thumb
                },
                isStoryHasQuestion(t) {
                    return !!this.getStory(t).question
                },
                goToCreateNewStory() {
                    this.close(),
                    this.$root.$emit("story::create::new")
                },
                cancel() {
                    this.isNewMode && this.selectedStoriesIds.length ? this.selectedStoriesIds = [] : this.isNewMode && this.isArchiveStartMode ? (this.isArchiveMode = !0,
                    this.isNewMode = !1,
                    this.selectedStoriesIds = []) : this.close()
                },
                saveNextHandler() {
                    if (this.isNoEditSelected)
                        this.deleteHighlight();
                    else if (this.isEditMode) {
                        const t = {
                            title: this.title,
                            storyIds: this.selectedStoriesIds
                        };
                        this.isCustomCover ? t.thumbSourceId = this.coverId : t.coverStoryId = this.coverId,
                        this.save(t)
                    } else {
                        this.coverId = this.selectedStoriesIds[this.selectedStoriesIds.length - 1];
                        const t = {
                            title: this.title,
                            coverId: this.coverId,
                            selectedStoriesIds: this.selectedStoriesIds
                        };
                        this.$root.$emit("ShowHighlightStoryCoverAndTitleModal", t)
                    }
                },
                async deleteHighlight() {
                    const t = undefined;
                    await window.interact(this.$t("message.confirm_remove_edit_highlight"), {
                        denyText: this.$t("message.back_button"),
                        confirmText: this.$t("message.delete"),
                        dangerConfirm: !0
                    }) && (this.removeHighlights(this.highlightId),
                    this.close())
                },
                updateCover({id: t, isCustom: e}) {
                    var s;
                    this.coverId = t,
                    this.isCustomCover = e || t === (null === (s = this.getHighlights(this.highlightId)) || void 0 === s ? void 0 : s.coverMediaId),
                    e && this.coverStoriesIds.includes(this.customCoverId) && (this.coverStoriesIds = this.coverStoriesIds.filter((t => t !== this.customCoverId)),
                    this.customCoverId = t)
                },
                customCoverLoadingHandler(t) {
                    this.isCustomCoverLoading = t
                },
                close() {
                    var t;
                    null === (t = this.$refs.HighlightsModal) || void 0 === t || t.hide()
                }
            }
        }, R = F, V, j = (0,
        H.A)(R, i, o, !1, null, "25eb7699", null).exports
    },
    262579: function(t, e, s) {
        s.d(e, {
            A: function() {
                return tt
            }
        });
        var i = function t() {
            var e = this
              , s = e._self._c;
            return e.items.length ? s("div", {
                staticClass: "stories-list-wrapper"
            }, [s("drag-scroll", {
                ref: "scroller",
                staticClass: "m-gaps-inside m-wrap-items-text"
            }, [e._l(e.items, (function(t) {
                return s("Highlight", {
                    key: t.id,
                    attrs: {
                        "data-index": t.index,
                        "data-context": t.dataContext,
                        type: t.type
                    }
                })
            }
            )), s("horizontal-infinite-loading", {
                staticClass: "m-mall-auto",
                on: {
                    infinite: e.infiniteHandler
                }
            })], 2)], 1) : e._e()
        }, o = [], r = s(944114), a = s(962953), n = s(110908), l = function t() {
            var e = this
              , s = e._self._c;
            return "Stream" === e.type ? s("stream", {
                attrs: {
                    value: e.dataContext
                }
            }) : "ScheduledStream" === e.type ? s("scheduled-stream", {
                attrs: {
                    value: e.dataContext,
                    "is-profile": ""
                }
            }) : "AddMemoriesBtn" === e.type ? s("add-memories-btn", {
                attrs: {
                    post: e.dataContext.post
                }
            }) : "AddHighlightsBtn" === e.type ? s("add-highlights-btn") : "RunStreamBtn" === e.type ? s("run-stream-btn") : "MyStories" === e.type ? s("my-stories", {
                attrs: {
                    value: e.dataContext.userStories,
                    author: e.dataContext.user
                }
            }) : "Highlight" === e.type ? s("item", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.dataContext && !e.dataContext.isReported,
                    expression: "dataContext && !dataContext.isReported"
                }],
                attrs: {
                    value: e.dataContext
                }
            }) : "StoryArchive" === e.type ? s("story-archive") : e._e()
        }, d = [], h = function t() {
            var e = this
              , s = e._self._c;
            return s("button-block", {
                staticClass: "m-story-archive",
                attrs: {
                    text: e.$t("message.story_archive"),
                    "is-nowrap-text": !1,
                    "is-gradient-overlay": "",
                    icon: "icon-story",
                    "with-bg": ""
                },
                nativeOn: {
                    click: function(t) {
                        return e.click.apply(null, arguments)
                    }
                }
            }, [s("image-thumb", {
                attrs: {
                    user: e.authUser,
                    size: "c144"
                }
            })], 1)
        }, c = [], u = s(797825), g = s(96737), m, v = {
            name: "StoryArchive",
            components: {
                ImageThumb: u.A,
                ButtonBlock: g.A
            },
            computed: {
                ...(0,
                n.npG)(["authUser"])
            },
            methods: {
                click() {
                    this.$root.$emit("show-create-highlight-modal", {
                        isArchive: !0
                    })
                }
            }
        }, p = s(281656), f, S = (0,
        p.A)(v, h, c, !1, null, null, null).exports, y = function t() {
            var e = this, s;
            return (0,
            e._self._c)("button-block", {
                attrs: {
                    text: e.$t("message.create_highlight"),
                    "is-nowrap-text": !1,
                    icon: "icon-highlights"
                },
                nativeOn: {
                    click: function(t) {
                        return e.click.apply(null, arguments)
                    }
                }
            })
        }, C = [], I, _ = {
            name: "AddHighlights",
            components: {
                ButtonBlock: g.A
            },
            methods: {
                click() {
                    this.$root.$emit("show-create-highlight-modal", {
                        isNew: !0
                    })
                }
            }
        }, b, x = (0,
        p.A)(_, y, C, !1, null, null, null).exports, A = function t() {
            var e = this, s;
            return (0,
            e._self._c)("button-block", {
                attrs: {
                    text: e.$t("message.make_post_streaming_button_title"),
                    "is-nowrap-text": !1,
                    icon: "icon-live"
                },
                nativeOn: {
                    click: function(t) {
                        return e.click.apply(null, arguments)
                    }
                }
            })
        }, w = [], M, k = {
            name: "RunStreamBtn",
            components: {
                ButtonBlock: g.A
            },
            methods: {
                click() {
                    this.$router.push({
                        name: "Streaming"
                    })
                }
            }
        }, $, H = (0,
        p.A)(k, A, w, !1, null, null, null).exports, E = s(45523), L = function t() {
            var e = this
              , s = e._self._c;
            return s("button-block", {
                attrs: {
                    "is-gradient-overlay": "",
                    "with-bg": "",
                    text: e._f("encodeHtml")(e.value.title)
                },
                nativeOn: {
                    click: function(t) {
                        return e.onStoryClick.apply(null, arguments)
                    }
                }
            }, [s("img", {
                staticClass: "img-responsive",
                attrs: {
                    src: e.value.cover,
                    draggable: "false",
                    alt: ""
                }
            })])
        }, T = [], B = s(407350), U = s.n(B), D = s(620514), N, O = {
            name: "HighlightItem",
            components: {
                ButtonBlock: g.A
            },
            mixins: [D.k],
            props: {
                value: {
                    type: Object,
                    required: !0
                }
            },
            data() {
                return {
                    scrollY: 0
                }
            },
            computed: {
                ...(0,
                n.npG)(["authUser"]),
                ...(0,
                n.ZOz)(["user"]),
                runStoryThrottled() {
                    return U()(this.runStory, 1500)
                }
            },
            methods: {
                ...(0,
                n.tSh)(["setModalUser"]),
                async runStory() {
                    this.scrollY = this.$window.scrollY,
                    this.$root.$emit("component::story::run", {
                        users: [this.user.id],
                        currentHighlight: this.value.id
                    })
                },
                onStoryClick() {
                    this.user.subscribedBy || this.isAuthUser ? this.runStoryThrottled() : this.openModalSubscribe()
                },
                async openModalSubscribe() {
                    await this.setModalUser({
                        userId: this.user.id
                    }),
                    this.$nextTick(( () => {
                        this.$root.$emit("bv::show::modal", "ModalSubscribe")
                    }
                    ))
                }
            }
        }, P, z = (0,
        p.A)(O, L, T, !1, null, null, null).exports, F = s(826266), R = s(404496), V = s(548341), j, G = {
            name: "HighlightWidget",
            components: {
                AddHighlightsBtn: x,
                RunStreamBtn: H,
                StoryArchive: S,
                Item: z,
                Stream: F.A,
                MyStories: V.A,
                ScheduledStream: R.A,
                AddMemoriesBtn: E.A
            },
            props: {
                dataContext: {
                    type: Object,
                    default: () => {}
                },
                type: {
                    type: String,
                    default: ""
                }
            }
        }, q, W = (0,
        p.A)(G, l, d, !1, null, null, null).exports, Y = s(808139), Q = s(118878), Z = s(445948), J, K = {
            name: "HighlightsWidgetIndex",
            components: {
                Highlight: W,
                DragScroll: Y.A,
                HorizontalInfiniteLoading: Q.A
            },
            mixins: [D.k],
            computed: {
                ...(0,
                n.kbi)(["hasThisDayPosts", "memoriesPostIds", "getPost"]),
                ...(0,
                n.d7f)(["profileHighlights", "profileHighlightsHasMore", "profileHighlightsLoading"]),
                ...(0,
                n.ZOz)(["user"]),
                ...(0,
                n.WxR)(["getHighlights", "getUserStories"]),
                ...(0,
                n.npG)(["authUser"]),
                ...(0,
                n.GF1)(["streams"]),
                ...(0,
                n.pPg)(["mainScheduledStream"]),
                userStreams() {
                    return this.streams.filter((t => t.user === this.user.id && t.isActive))
                },
                firstMemoriesTilePost() {
                    return this.hasThisDayPosts ? this.getPost(this.memoriesPostIds.thisDay[0])[0] : null
                },
                items() {
                    let t = []
                      , e = 0;
                    const {canAddStory: s, hasStories: i, canStreaming: o} = this.authUser || {};
                    if (this.user.hasStream) {
                        const s = this.userStreams.map((t => ({
                            id: t.id,
                            type: "Stream",
                            dataContext: t,
                            index: e++
                        })));
                        t = [...t, ...s]
                    }
                    if (this.mainScheduledStream && t.push({
                        id: `${this.mainScheduledStream.id}-scheduled`,
                        type: "ScheduledStream",
                        dataContext: this.mainScheduledStream,
                        index: e++
                    }),
                    this.isAuthUser && s && !i && t.push({
                        id: "StoryArchive",
                        type: "StoryArchive",
                        index: e++
                    }),
                    this.isAuthUser && this.hasThisDayPosts && s && t.push({
                        id: "AddMemoriesBtn",
                        type: "AddMemoriesBtn",
                        dataContext: {
                            post: this.firstMemoriesTilePost
                        },
                        index: e++
                    }),
                    this.isAuthUser && s && t.push({
                        id: "AddHighlightsBtn",
                        type: "AddHighlightsBtn",
                        index: e++
                    }),
                    this.isAuthUser && o && t.push({
                        id: "RunStreamBtn",
                        type: "RunStreamBtn",
                        index: e++
                    }),
                    (this.isAuthUser || this.user.hasStories) && t.push({
                        id: "MyStories",
                        type: "MyStories",
                        dataContext: {
                            user: this.user,
                            userStories: this.getUserStories(this.user.id)
                        },
                        index: e++
                    }),
                    this.profileHighlights.length) {
                        const s = this.profileHighlights.map((t => ({
                            id: t,
                            type: "Highlight",
                            dataContext: this.getHighlights(t),
                            index: e++
                        })));
                        t = [...t, ...s]
                    }
                    return t
                }
            },
            watch: {
                userStreams: {
                    handler(t) {
                        null != t && t.length && this.$nextTick(( () => {
                            const {$el: t} = this.$refs.scroller || {};
                            (null == t ? void 0 : t.scrollLeft) > 0 && (null == t || t.scrollTo({
                                left: 0,
                                behavior: Z.r0.SMOOTH
                            }))
                        }
                        ))
                    },
                    immediate: !0
                }
            },
            methods: {
                ...(0,
                n.xon)(["fetchUserHighlights"]),
                checkIfStoryIsOpen() {
                    return document.documentElement.classList.contains("story-ran")
                },
                async infiniteHandler(t) {
                    if (this.profileHighlightsLoading)
                        return t.loaded();
                    this.profileHighlightsHasMore && !this.checkIfStoryIsOpen() ? (await this.fetchUserHighlights({
                        userId: this.user.id,
                        additive: !0
                    }),
                    t.loaded()) : t.complete()
                }
            }
        }, X, tt = (0,
        p.A)(K, i, o, !1, null, "e198269a", null).exports
    },
    45523: function(t, e, s) {
        s.d(e, {
            A: function() {
                return g
            }
        });
        var i = function t() {
            var e = this
              , s = e._self._c;
            return s("button-block", {
                attrs: {
                    text: e.$t("message.memories_title"),
                    "is-gradient-overlay": "",
                    "with-bg": "",
                    icon: "icon-calendar"
                },
                nativeOn: {
                    click: function(t) {
                        return e.runStory.apply(null, arguments)
                    }
                }
            }, [e.listIconsConfigArray.length ? s("ul", {
                staticClass: "b-purchase__list m-mb-3 mw-100"
            }, e._l(e.listIconsConfigArray.slice(0, 4), (function(t, i) {
                return s("li", {
                    key: t.icon,
                    staticClass: "b-purchase__list-item"
                }, [i < 3 ? s("svg", {
                    directives: [{
                        name: "svg-sprite",
                        rawName: "v-svg-sprite:[listItem.icon]",
                        arg: t.icon
                    }]
                }) : s("span", {
                    staticClass: "g-text-ellipsis"
                }, [e._v("...")])])
            }
            )), 0) : e._e(), s("img", {
                staticClass: "img-responsive",
                attrs: {
                    src: e.tileBackgroundImageUrl,
                    draggable: "false",
                    alt: e.$t("message.memories_title")
                }
            })])
        }
          , o = []
          , r = s(178688)
          , a = s(110908)
          , n = s(96737);
        const l = s(475827);
        var d, h = {
            name: "AddMemoriesBtn",
            components: {
                ButtonBlock: n.A
            },
            mixins: [r.A],
            computed: {
                ...(0,
                a.npG)(["authUserId"]),
                listIconsConfigArray() {
                    return [this.hasPhoto && this.media.length > 1 && {
                        icon: "icon-media"
                    }, (this.hasVideo || this.hasGif) && {
                        icon: "icon-video"
                    }, this.hasAudio && {
                        icon: "icon-voice"
                    }, this.hasPoll && {
                        icon: "icon-poll"
                    }, this.hasQuiz && {
                        icon: "icon-quiz"
                    }, this.hasFundraising && {
                        icon: "icon-fundraising"
                    }, this.hasText && {
                        icon: "icon-text-frame-off"
                    }].filter(Boolean)
                },
                tileBackgroundImageUrl() {
                    return this.mediaThumbnailUrl || l
                }
            },
            methods: {
                runStory() {
                    var t;
                    const e = (null === (t = this.post) || void 0 === t ? void 0 : t.id) || -1;
                    this.$root.$emit("component::story::run", {
                        users: [this.authUserId],
                        currentMemories: e
                    })
                }
            }
        }, c, u, g = (0,
        s(281656).A)(h, i, o, !1, null, null, null).exports
    },
    683014: function(t, e, s) {
        s.r(e),
        s.d(e, {
            default: function() {
                return d
            }
        });
        var i = function t() {
            var e = this, s;
            return (0,
            e._self._c)("div", {
                staticClass: "stories-list",
                class: {
                    "g-negative-sides-gaps": e.negativeMargin
                }
            }, [e._t("default")], 2)
        }, o = [], r, a = {
            name: "StoriesWrapper",
            props: {
                negativeMargin: {
                    type: Boolean,
                    default: !0
                }
            }
        }, n, l, d = (0,
        s(281656).A)(a, i, o, !1, null, "5fdac214", null).exports
    }
}]);
