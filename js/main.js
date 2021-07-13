!(function (t, e) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? (exports.AOS = e()) : (t.AOS = e());
})(this, function () {
    return (function (t) {
        function e(s) {
            if (i[s]) return i[s].exports;
            var n = (i[s] = { exports: {}, id: s, loaded: !1 });
            return t[s].call(n.exports, n, n.exports, e), (n.loaded = !0), n.exports;
        }
        var i = {};
        return (e.m = t), (e.c = i), (e.p = "dist/"), e(0);
    })([
        function (t, e, i) {
            "use strict";
            function s(t) {
                return t && t.__esModule ? t : { default: t };
            }
            var n =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var i = arguments[e];
                            for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
                        }
                        return t;
                    },
                o = (s(i(1)), i(6)),
                a = s(o),
                r = s(i(7)),
                l = s(i(8)),
                c = s(i(9)),
                d = s(i(10)),
                h = s(i(11)),
                u = s(i(14)),
                p = [],
                f = !1,
                m = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 },
                g = function () {
                    if ((arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (f = !0), f)) return (p = (0, h.default)(p, m)), (0, d.default)(p, m.once), p;
                },
                v = function () {
                    (p = (0, u.default)()), g();
                };
            t.exports = {
                init: function (t) {
                    (m = n(m, t)), (p = (0, u.default)());
                    var e = document.all && !window.atob;
                    return (function (t) {
                        return !0 === t || ("mobile" === t && c.default.mobile()) || ("phone" === t && c.default.phone()) || ("tablet" === t && c.default.tablet()) || ("function" == typeof t && !0 === t());
                    })(m.disable) || e
                        ? void p.forEach(function (t, e) {
                              t.node.removeAttribute("data-aos"), t.node.removeAttribute("data-aos-easing"), t.node.removeAttribute("data-aos-duration"), t.node.removeAttribute("data-aos-delay");
                          })
                        : (document.querySelector("body").setAttribute("data-aos-easing", m.easing),
                          document.querySelector("body").setAttribute("data-aos-duration", m.duration),
                          document.querySelector("body").setAttribute("data-aos-delay", m.delay),
                          "DOMContentLoaded" === m.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1
                              ? g(!0)
                              : "load" === m.startEvent
                              ? window.addEventListener(m.startEvent, function () {
                                    g(!0);
                                })
                              : document.addEventListener(m.startEvent, function () {
                                    g(!0);
                                }),
                          window.addEventListener("resize", (0, r.default)(g, m.debounceDelay, !0)),
                          window.addEventListener("orientationchange", (0, r.default)(g, m.debounceDelay, !0)),
                          window.addEventListener(
                              "scroll",
                              (0, a.default)(function () {
                                  (0, d.default)(p, m.once);
                              }, m.throttleDelay)
                          ),
                          m.disableMutationObserver || (0, l.default)("[data-aos]", v),
                          p);
                },
                refresh: g,
                refreshHard: v,
            };
        },
        function (t, e) {},
        ,
        ,
        ,
        ,
        function (t, e) {
            (function (e) {
                "use strict";
                function i(t, e, i) {
                    function n(e) {
                        var i = h,
                            s = u;
                        return (h = u = void 0), (v = e), (f = t.apply(s, i));
                    }
                    function a(t) {
                        var i = t - g;
                        return void 0 === g || i >= e || i < 0 || (x && t - v >= p);
                    }
                    function l() {
                        var t = b();
                        return a(t)
                            ? c(t)
                            : void (m = setTimeout(
                                  l,
                                  (function (t) {
                                      var i = e - (t - g);
                                      return x ? w(i, p - (t - v)) : i;
                                  })(t)
                              ));
                    }
                    function c(t) {
                        return (m = void 0), C && h ? n(t) : ((h = u = void 0), f);
                    }
                    function d() {
                        var t = b(),
                            i = a(t);
                        if (((h = arguments), (u = this), (g = t), i)) {
                            if (void 0 === m)
                                return (function (t) {
                                    return (v = t), (m = setTimeout(l, e)), y ? n(t) : f;
                                })(g);
                            if (x) return (m = setTimeout(l, e)), n(g);
                        }
                        return void 0 === m && (m = setTimeout(l, e)), f;
                    }
                    var h,
                        u,
                        p,
                        f,
                        m,
                        g,
                        v = 0,
                        y = !1,
                        x = !1,
                        C = !0;
                    if ("function" != typeof t) throw new TypeError(r);
                    return (
                        (e = o(e) || 0),
                        s(i) && ((y = !!i.leading), (p = (x = "maxWait" in i) ? _(o(i.maxWait) || 0, e) : p), (C = "trailing" in i ? !!i.trailing : C)),
                        (d.cancel = function () {
                            void 0 !== m && clearTimeout(m), (v = 0), (h = g = u = m = void 0);
                        }),
                        (d.flush = function () {
                            return void 0 === m ? f : c(b());
                        }),
                        d
                    );
                }
                function s(t) {
                    var e = void 0 === t ? "undefined" : a(t);
                    return !!t && ("object" == e || "function" == e);
                }
                function n(t) {
                    return (
                        "symbol" == (void 0 === t ? "undefined" : a(t)) ||
                        ((function (t) {
                            return !!t && "object" == (void 0 === t ? "undefined" : a(t));
                        })(t) &&
                            y.call(t) == c)
                    );
                }
                function o(t) {
                    if ("number" == typeof t) return t;
                    if (n(t)) return l;
                    if (s(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = s(e) ? e + "" : e;
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(d, "");
                    var i = u.test(t);
                    return i || p.test(t) ? f(t.slice(2), i ? 2 : 8) : h.test(t) ? l : +t;
                }
                var a =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              },
                    r = "Expected a function",
                    l = NaN,
                    c = "[object Symbol]",
                    d = /^\s+|\s+$/g,
                    h = /^[-+]0x[0-9a-f]+$/i,
                    u = /^0b[01]+$/i,
                    p = /^0o[0-7]+$/i,
                    f = parseInt,
                    m = "object" == (void 0 === e ? "undefined" : a(e)) && e && e.Object === Object && e,
                    g = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
                    v = m || g || Function("return this")(),
                    y = Object.prototype.toString,
                    _ = Math.max,
                    w = Math.min,
                    b = function () {
                        return v.Date.now();
                    };
                t.exports = function (t, e, n) {
                    var o = !0,
                        a = !0;
                    if ("function" != typeof t) throw new TypeError(r);
                    return s(n) && ((o = "leading" in n ? !!n.leading : o), (a = "trailing" in n ? !!n.trailing : a)), i(t, e, { leading: o, maxWait: e, trailing: a });
                };
            }.call(
                e,
                (function () {
                    return this;
                })()
            ));
        },
        function (t, e) {
            (function (e) {
                "use strict";
                function i(t) {
                    var e = void 0 === t ? "undefined" : o(t);
                    return !!t && ("object" == e || "function" == e);
                }
                function s(t) {
                    return (
                        "symbol" == (void 0 === t ? "undefined" : o(t)) ||
                        ((function (t) {
                            return !!t && "object" == (void 0 === t ? "undefined" : o(t));
                        })(t) &&
                            v.call(t) == l)
                    );
                }
                function n(t) {
                    if ("number" == typeof t) return t;
                    if (s(t)) return r;
                    if (i(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = i(e) ? e + "" : e;
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(c, "");
                    var n = h.test(t);
                    return n || u.test(t) ? p(t.slice(2), n ? 2 : 8) : d.test(t) ? r : +t;
                }
                var o =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              },
                    a = "Expected a function",
                    r = NaN,
                    l = "[object Symbol]",
                    c = /^\s+|\s+$/g,
                    d = /^[-+]0x[0-9a-f]+$/i,
                    h = /^0b[01]+$/i,
                    u = /^0o[0-7]+$/i,
                    p = parseInt,
                    f = "object" == (void 0 === e ? "undefined" : o(e)) && e && e.Object === Object && e,
                    m = "object" == ("undefined" == typeof self ? "undefined" : o(self)) && self && self.Object === Object && self,
                    g = f || m || Function("return this")(),
                    v = Object.prototype.toString,
                    y = Math.max,
                    _ = Math.min,
                    w = function () {
                        return g.Date.now();
                    };
                t.exports = function (t, e, s) {
                    function o(e) {
                        var i = h,
                            s = u;
                        return (h = u = void 0), (v = e), (f = t.apply(s, i));
                    }
                    function r(t) {
                        var i = t - g;
                        return void 0 === g || i >= e || i < 0 || (x && t - v >= p);
                    }
                    function l() {
                        var t = w();
                        return r(t)
                            ? c(t)
                            : void (m = setTimeout(
                                  l,
                                  (function (t) {
                                      var i = e - (t - g);
                                      return x ? _(i, p - (t - v)) : i;
                                  })(t)
                              ));
                    }
                    function c(t) {
                        return (m = void 0), C && h ? o(t) : ((h = u = void 0), f);
                    }
                    function d() {
                        var t = w(),
                            i = r(t);
                        if (((h = arguments), (u = this), (g = t), i)) {
                            if (void 0 === m)
                                return (function (t) {
                                    return (v = t), (m = setTimeout(l, e)), b ? o(t) : f;
                                })(g);
                            if (x) return (m = setTimeout(l, e)), o(g);
                        }
                        return void 0 === m && (m = setTimeout(l, e)), f;
                    }
                    var h,
                        u,
                        p,
                        f,
                        m,
                        g,
                        v = 0,
                        b = !1,
                        x = !1,
                        C = !0;
                    if ("function" != typeof t) throw new TypeError(a);
                    return (
                        (e = n(e) || 0),
                        i(s) && ((b = !!s.leading), (p = (x = "maxWait" in s) ? y(n(s.maxWait) || 0, e) : p), (C = "trailing" in s ? !!s.trailing : C)),
                        (d.cancel = function () {
                            void 0 !== m && clearTimeout(m), (v = 0), (h = g = u = m = void 0);
                        }),
                        (d.flush = function () {
                            return void 0 === m ? f : c(w());
                        }),
                        d
                    );
                };
            }.call(
                e,
                (function () {
                    return this;
                })()
            ));
        },
        function (t, e) {
            "use strict";
            function i(t) {
                t &&
                    t.forEach(function (t) {
                        var e = Array.prototype.slice.call(t.addedNodes),
                            i = Array.prototype.slice.call(t.removedNodes);
                        e.concat(i).filter(function (t) {
                            return t.hasAttribute && t.hasAttribute("data-aos");
                        }).length && s();
                    });
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var s = function () {};
            e.default = function (t, e) {
                var n = window.document,
                    o = new (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver)(i);
                (s = e), o.observe(n.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
            };
        },
        function (t, e) {
            "use strict";
            function i() {
                return navigator.userAgent || navigator.vendor || window.opera || "";
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var s = (function () {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var s = e[i];
                            (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
                        }
                    }
                    return function (e, i, s) {
                        return i && t(e.prototype, i), s && t(e, s), e;
                    };
                })(),
                n = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                o = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                a = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                l = (function () {
                    function t() {
                        !(function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, t);
                    }
                    return (
                        s(t, [
                            {
                                key: "phone",
                                value: function () {
                                    var t = i();
                                    return !(!n.test(t) && !o.test(t.substr(0, 4)));
                                },
                            },
                            {
                                key: "mobile",
                                value: function () {
                                    var t = i();
                                    return !(!a.test(t) && !r.test(t.substr(0, 4)));
                                },
                            },
                            {
                                key: "tablet",
                                value: function () {
                                    return this.mobile() && !this.phone();
                                },
                            },
                        ]),
                        t
                    );
                })();
            e.default = new l();
        },
        function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            e.default = function (t, e) {
                var i = window.pageYOffset,
                    s = window.innerHeight;
                t.forEach(function (t, n) {
                    !(function (t, e, i) {
                        var s = t.node.getAttribute("data-aos-once");
                        e > t.position ? t.node.classList.add("aos-animate") : void 0 !== s && ("false" === s || (!i && "true" !== s)) && t.node.classList.remove("aos-animate");
                    })(t, s + i, e);
                });
            };
        },
        function (t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var s = (function (t) {
                return t && t.__esModule ? t : { default: t };
            })(i(12));
            e.default = function (t, e) {
                return (
                    t.forEach(function (t, i) {
                        t.node.classList.add("aos-init"), (t.position = (0, s.default)(t.node, e.offset));
                    }),
                    t
                );
            };
        },
        function (t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var s = (function (t) {
                return t && t.__esModule ? t : { default: t };
            })(i(13));
            e.default = function (t, e) {
                var i = 0,
                    n = 0,
                    o = window.innerHeight,
                    a = { offset: t.getAttribute("data-aos-offset"), anchor: t.getAttribute("data-aos-anchor"), anchorPlacement: t.getAttribute("data-aos-anchor-placement") };
                switch ((a.offset && !isNaN(a.offset) && (n = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (t = document.querySelectorAll(a.anchor)[0]), (i = (0, s.default)(t).top), a.anchorPlacement)) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        i += t.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        i += t.offsetHeight;
                        break;
                    case "top-center":
                        i += o / 2;
                        break;
                    case "bottom-center":
                        i += o / 2 + t.offsetHeight;
                        break;
                    case "center-center":
                        i += o / 2 + t.offsetHeight / 2;
                        break;
                    case "top-top":
                        i += o;
                        break;
                    case "bottom-top":
                        i += t.offsetHeight + o;
                        break;
                    case "center-top":
                        i += t.offsetHeight / 2 + o;
                }
                return a.anchorPlacement || a.offset || isNaN(e) || (n = e), i + n;
            };
        },
        function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            e.default = function (t) {
                for (var e = 0, i = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop); ) (e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0)), (i += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0)), (t = t.offsetParent);
                return { top: i, left: e };
            };
        },
        function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            e.default = function (t) {
                return (
                    (t = t || document.querySelectorAll("[data-aos]")),
                    Array.prototype.map.call(t, function (t) {
                        return { node: t };
                    })
                );
            };
        },
    ]);
}),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define([], function () {
                  return e();
              })
            : "object" == typeof exports
            ? (module.exports = e())
            : (t.Headhesive = e());
    })(this, function () {
        "use strict";
        var t = function (e, i) {
                for (var s in i) i.hasOwnProperty(s) && (e[s] = "object" == typeof i[s] ? t(e[s], i[s]) : i[s]);
                return e;
            },
            e = function (t, e) {
                var i,
                    s,
                    n,
                    o =
                        Date.now ||
                        function () {
                            return new Date().getTime();
                        },
                    a = null,
                    r = 0,
                    l = function () {
                        (r = o()), (a = null), (n = t.apply(i, s)), (i = s = null);
                    };
                return function () {
                    var c = o(),
                        d = e - (c - r);
                    return (i = this), (s = arguments), 0 >= d ? (clearTimeout(a), (a = null), (r = c), (n = t.apply(i, s)), (i = s = null)) : a || (a = setTimeout(l, d)), n;
                };
            },
            i = function (e, i) {
                "querySelector" in document &&
                    "addEventListener" in window &&
                    ((this.visible = !1),
                    (this.options = {
                        offset: 300,
                        offsetSide: "top",
                        classes: { clone: "headhesive", stick: "headhesive--stick", unstick: "headhesive--unstick" },
                        throttle: 250,
                        onInit: function () {},
                        onStick: function () {},
                        onUnstick: function () {},
                        onDestroy: function () {},
                    }),
                    (this.elem = "string" == typeof e ? document.querySelector(e) : e),
                    (this.options = t(this.options, i)),
                    this.init());
            };
        return (
            (i.prototype = {
                constructor: i,
                init: function () {
                    if (
                        ((this.clonedElem = this.elem.cloneNode(!0)),
                        (this.clonedElem.className += " " + this.options.classes.clone),
                        document.body.insertBefore(this.clonedElem, document.body.firstChild),
                        "number" == typeof this.options.offset)
                    )
                        this.scrollOffset = this.options.offset;
                    else {
                        if ("string" != typeof this.options.offset) throw new Error("Invalid offset: " + this.options.offset);
                        this._setScrollOffset();
                    }
                    (this._throttleUpdate = e(this.update.bind(this), this.options.throttle)),
                        (this._throttleScrollOffset = e(this._setScrollOffset.bind(this), this.options.throttle)),
                        window.addEventListener("scroll", this._throttleUpdate, !1),
                        window.addEventListener("resize", this._throttleScrollOffset, !1),
                        this.options.onInit.call(this);
                },
                _setScrollOffset: function () {
                    "string" == typeof this.options.offset &&
                        (this.scrollOffset = (function (t, e) {
                            for (var i = 0, s = t.offsetHeight; t; ) (i += t.offsetTop), (t = t.offsetParent);
                            return "bottom" === e && (i += s), i;
                        })(document.querySelector(this.options.offset), this.options.offsetSide));
                },
                destroy: function () {
                    document.body.removeChild(this.clonedElem), window.removeEventListener("scroll", this._throttleUpdate), window.removeEventListener("resize", this._throttleScrollOffset), this.options.onDestroy.call(this);
                },
                stick: function () {
                    this.visible ||
                        ((this.clonedElem.className = this.clonedElem.className.replace(new RegExp("(^|\\s)*" + this.options.classes.unstick + "(\\s|$)*", "g"), "")),
                        (this.clonedElem.className += " " + this.options.classes.stick),
                        (this.visible = !0),
                        this.options.onStick.call(this));
                },
                unstick: function () {
                    this.visible &&
                        ((this.clonedElem.className = this.clonedElem.className.replace(new RegExp("(^|\\s)*" + this.options.classes.stick + "(\\s|$)*", "g"), "")),
                        (this.clonedElem.className += " " + this.options.classes.unstick),
                        (this.visible = !1),
                        this.options.onUnstick.call(this));
                },
                update: function () {
                    (void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop) > this.scrollOffset ? this.stick() : this.unstick();
                },
            }),
            i
        );
    }),
    (function (t) {
        "use strict";
        var e = {
            defaults: {
                accessibility: !0,
                trigger: ".beefup__head",
                content: ".beefup__body",
                openClass: "is-open",
                animation: "slide",
                openSpeed: 200,
                closeSpeed: 200,
                scroll: !1,
                scrollSpeed: 400,
                scrollOffset: 0,
                openSingle: !1,
                stayOpen: null,
                selfBlock: !1,
                selfClose: !1,
                hash: !0,
                breakpoints: null,
                onInit: null,
                onOpen: null,
                onClose: null,
                onScroll: null,
            },
            id: 0,
        };
        (e.methods = {
            _getVars: function (i) {
                var s = t.extend(!0, {}, i.data("beefup"), i.data("beefup-options"));
                return s.breakpoints ? e.methods._getResponsiveVars(s) : s;
            },
            _getResponsiveVars: function (e) {
                var i = window.innerWidth || t(window).width();
                return (
                    e.breakpoints.sort(function (t, e) {
                        return t.breakpoint < e.breakpoint ? -1 : t.breakpoint > e.breakpoint ? 1 : 0;
                    }),
                    t.each(e.breakpoints, function (s, n) {
                        i >= n.breakpoint && (e = t.extend({}, e, n.settings));
                    }),
                    e
                );
            },
            _animation: function (t, e, i, s) {
                switch (t) {
                    case "slideDown":
                        e.slideDown(i, s);
                        break;
                    case "slideUp":
                        e.slideUp(i, s);
                        break;
                    case "fadeIn":
                        e.fadeIn(i, s);
                        break;
                    case "fadeOut":
                        e.fadeOut(i, s);
                        break;
                    case "show":
                        e.show(i, s);
                        break;
                    case "hide":
                        e.hide(i, s);
                }
            },
            _close: function (t, e) {
                var i = t.find(e.content + ":first"),
                    s = t.find(e.trigger + ":first");
                t.removeClass(e.openClass), i.hide().css("overflow", ""), e.accessibility && (i.attr("hidden", !0), s.attr("aria-expanded", !1).removeAttr("aria-disabled"));
            },
            _open: function (t, e) {
                var i = t.find(e.content + ":first"),
                    s = t.find(e.trigger + ":first");
                t.addClass(e.openClass), i.show().css("overflow", "hidden"), e.accessibility && (i.attr("hidden", !1), s.attr("aria-expanded", !0), e.selfBlock && s.attr("aria-disabled", !0));
            },
            _getStayOpen: function (t, e) {
                var i;
                if ("number" == typeof e) i = t.eq(e);
                else if ("string" == typeof e)
                    switch (e) {
                        case "first":
                            i = t.first();
                            break;
                        case "last":
                            i = t.last();
                            break;
                        default:
                            i = t.filter(e);
                    }
                return i;
            },
            _openSingle: function (i, s, n) {
                if (n.openSingle) {
                    var o = i.not(s);
                    null !== n.stayOpen && (o = o.not(e.methods._getStayOpen(i, n.stayOpen))),
                        i.close(
                            o.filter(function () {
                                return !t(this).find(s).length;
                            })
                        );
                }
            },
            _addSelfCloseEvent: function (i, s) {
                s.selfClose &&
                    t(document).on("click", function (n) {
                        if (!t(n.target).closest(i).length) {
                            var o = i.filter("." + s.openClass);
                            null !== s.stayOpen && (o = o.not(e.methods._getStayOpen(i, s.stayOpen))), o.length && i.close(o);
                        }
                    });
            },
            _addHashchangeEvent: function (e, i) {
                if (i.hash) {
                    var s = function () {
                        var t = e.filter(window.location.hash);
                        t.length && !t.hasClass(i.openClass) && e.click(t);
                    };
                    s(), t(window).on("hashchange", s);
                }
            },
            _initAccessibility: function (t, i) {
                var s = t.find(i.trigger + ":first"),
                    n = "acc" + e.id++,
                    o = n + "id",
                    a = s.children("button");
                return (
                    i.accessibility &&
                        (s.is("button") || s.is("a")
                            ? (a = s)
                            : (s.children("button").length || (s.wrapInner('<button type="button" aria-controls="' + n + '" aria-expanded="false" id="' + o + '"></button>'), (a = s.children("button"))), (i.trigger += " > button")),
                        a.attr("aria-controls", n).attr("aria-expanded", !1).attr("id", o),
                        t
                            .find(i.content + ":first")
                            .attr("aria-labelledby", o)
                            .attr("id", n)
                            .attr("role", "region")),
                    i
                );
            },
        }),
            (t.fn.beefup = function (i) {
                var s = this;
                return (
                    (this.open = function (i, n) {
                        return (
                            (i && i.length) || (i = s),
                            i.each(function () {
                                var o = t(this),
                                    a = e.methods._getVars(o),
                                    r = o.find(a.content + ":first"),
                                    l = "slide" === a.animation ? "slideDown" : "fade" === a.animation ? "fadeIn" : "show";
                                e.methods._openSingle(s, i, a),
                                    e.methods._animation(l, r, a.openSpeed, function () {
                                        e.methods._open(o, a), a.scroll && s.scroll(i), n && "function" == typeof n && n(o), a.onOpen && "function" == typeof a.onOpen && a.onOpen(o);
                                    });
                            }),
                            s
                        );
                    }),
                    (this.close = function (i, n) {
                        return (
                            (i && i.length) || (i = s),
                            i.each(function () {
                                var i = t(this),
                                    s = e.methods._getVars(i),
                                    o = i.find(s.content + ":first"),
                                    a = "slide" === s.animation ? "slideUp" : "fade" === s.animation ? "fadeOut" : "hide";
                                e.methods._animation(a, o, s.closeSpeed, function () {
                                    e.methods._close(i, s), n && "function" == typeof n && n(i), s.onClose && "function" == typeof s.onClose && s.onClose(i);
                                });
                            }),
                            s
                        );
                    }),
                    (this.scroll = function (i) {
                        var n = e.methods._getVars(i);
                        return (
                            t("html, body")
                                .animate({ scrollTop: i.offset().top + n.scrollOffset }, n.scrollSpeed)
                                .promise()
                                .done(function () {
                                    n.onScroll && "function" == typeof n.onScroll && n.onScroll(i);
                                }),
                            s
                        );
                    }),
                    (this.click = function (t) {
                        var i = e.methods._getVars(t);
                        return t.hasClass(i.openClass) ? i.selfBlock || s.close(t) : s.open(t), s;
                    }),
                    this.each(function (n, o) {
                        var a = t(o),
                            r = e.methods._initAccessibility(a, t.extend({}, e.defaults, i, a.data("beefup-options")));
                        a.data("beefup") ||
                            (a.data("beefup", r),
                            r.breakpoints && (r = e.methods._getResponsiveVars(r)),
                            (a.is("." + r.openClass) || (null !== r.stayOpen && a.is(e.methods._getStayOpen(s, r.stayOpen)))) && e.methods._open(a, r),
                            e.methods._close(a.not("." + r.openClass), r),
                            r.onInit && "function" == typeof r.onInit && r.onInit(a),
                            a.on("click", r.trigger + ":first", function (t) {
                                t.preventDefault(), s.click(a);
                            }),
                            n === s.length - 1 && (e.methods._addHashchangeEvent(s, r), e.methods._addSelfCloseEvent(s, r)));
                    })
                );
            });
    })(jQuery),
    (function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
    })(function (t) {
        var e,
            i,
            s,
            n,
            o,
            a,
            r = "Close",
            l = "BeforeClose",
            c = "MarkupParse",
            d = "Open",
            h = "Change",
            u = "mfp",
            p = "." + u,
            f = "mfp-ready",
            m = "mfp-removing",
            g = "mfp-prevent-close",
            v = function () {},
            y = !!window.jQuery,
            _ = t(window),
            w = function (t, i) {
                e.ev.on(u + t + p, i);
            },
            b = function (e, i, s, n) {
                var o = document.createElement("div");
                return (o.className = "mfp-" + e), s && (o.innerHTML = s), n ? i && i.appendChild(o) : ((o = t(o)), i && o.appendTo(i)), o;
            },
            x = function (i, s) {
                e.ev.triggerHandler(u + i, s), e.st.callbacks && ((i = i.charAt(0).toLowerCase() + i.slice(1)), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(s) ? s : [s]));
            },
            C = function (i) {
                return (i === a && e.currTemplate.closeBtn) || ((e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose))), (a = i)), e.currTemplate.closeBtn;
            },
            S = function () {
                t.magnificPopup.instance || ((e = new v()).init(), (t.magnificPopup.instance = e));
            };
        (v.prototype = {
            constructor: v,
            init: function () {
                var i = navigator.appVersion;
                (e.isLowIE = e.isIE8 = document.all && !document.addEventListener),
                    (e.isAndroid = /android/gi.test(i)),
                    (e.isIOS = /iphone|ipad|ipod/gi.test(i)),
                    (e.supportsTransition = (function () {
                        var t = document.createElement("p").style,
                            e = ["ms", "O", "Moz", "Webkit"];
                        if (void 0 !== t.transition) return !0;
                        for (; e.length; ) if (e.pop() + "Transition" in t) return !0;
                        return !1;
                    })()),
                    (e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
                    (s = t(document)),
                    (e.popupsCache = {});
            },
            open: function (i) {
                var n;
                if (!1 === i.isObj) {
                    (e.items = i.items.toArray()), (e.index = 0);
                    var a,
                        r = i.items;
                    for (n = 0; n < r.length; n++)
                        if (((a = r[n]).parsed && (a = a.el[0]), a === i.el[0])) {
                            e.index = n;
                            break;
                        }
                } else (e.items = t.isArray(i.items) ? i.items : [i.items]), (e.index = i.index || 0);
                if (!e.isOpen) {
                    (e.types = []),
                        (o = ""),
                        i.mainEl && i.mainEl.length ? (e.ev = i.mainEl.eq(0)) : (e.ev = s),
                        i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), (e.currTemplate = e.popupsCache[i.key])) : (e.currTemplate = {}),
                        (e.st = t.extend(!0, {}, t.magnificPopup.defaults, i)),
                        (e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos),
                        e.st.modal && ((e.st.closeOnContentClick = !1), (e.st.closeOnBgClick = !1), (e.st.showCloseBtn = !1), (e.st.enableEscapeKey = !1)),
                        e.bgOverlay ||
                            ((e.bgOverlay = b("bg").on("click" + p, function () {
                                e.close();
                            })),
                            (e.wrap = b("wrap")
                                .attr("tabindex", -1)
                                .on("click" + p, function (t) {
                                    e._checkIfClose(t.target) && e.close();
                                })),
                            (e.container = b("container", e.wrap))),
                        (e.contentContainer = b("content")),
                        e.st.preloader && (e.preloader = b("preloader", e.container, e.st.tLoading));
                    var l = t.magnificPopup.modules;
                    for (n = 0; n < l.length; n++) {
                        var h = l[n];
                        (h = h.charAt(0).toUpperCase() + h.slice(1)), e["init" + h].call(e);
                    }
                    x("BeforeOpen"),
                        e.st.showCloseBtn &&
                            (e.st.closeBtnInside
                                ? (w(c, function (t, e, i, s) {
                                      i.close_replaceWith = C(s.type);
                                  }),
                                  (o += " mfp-close-btn-in"))
                                : e.wrap.append(C())),
                        e.st.alignTop && (o += " mfp-align-top"),
                        e.fixedContentPos ? e.wrap.css({ overflow: e.st.overflowY, overflowX: "hidden", overflowY: e.st.overflowY }) : e.wrap.css({ top: _.scrollTop(), position: "absolute" }),
                        (!1 === e.st.fixedBgPos || ("auto" === e.st.fixedBgPos && !e.fixedContentPos)) && e.bgOverlay.css({ height: s.height(), position: "absolute" }),
                        e.st.enableEscapeKey &&
                            s.on("keyup" + p, function (t) {
                                27 === t.keyCode && e.close();
                            }),
                        _.on("resize" + p, function () {
                            e.updateSize();
                        }),
                        e.st.closeOnContentClick || (o += " mfp-auto-cursor"),
                        o && e.wrap.addClass(o);
                    var u = (e.wH = _.height()),
                        m = {};
                    if (e.fixedContentPos && e._hasScrollBar(u)) {
                        var g = e._getScrollbarSize();
                        g && (m.marginRight = g);
                    }
                    e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : (m.overflow = "hidden"));
                    var v = e.st.mainClass;
                    return (
                        e.isIE7 && (v += " mfp-ie7"),
                        v && e._addClassToMFP(v),
                        e.updateItemHTML(),
                        x("BuildControls"),
                        t("html").css(m),
                        e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)),
                        (e._lastFocusedEl = document.activeElement),
                        setTimeout(function () {
                            e.content ? (e._addClassToMFP(f), e._setFocus()) : e.bgOverlay.addClass(f), s.on("focusin" + p, e._onFocusIn);
                        }, 16),
                        (e.isOpen = !0),
                        e.updateSize(u),
                        x(d),
                        i
                    );
                }
                e.updateItemHTML();
            },
            close: function () {
                e.isOpen &&
                    (x(l),
                    (e.isOpen = !1),
                    e.st.removalDelay && !e.isLowIE && e.supportsTransition
                        ? (e._addClassToMFP(m),
                          setTimeout(function () {
                              e._close();
                          }, e.st.removalDelay))
                        : e._close());
            },
            _close: function () {
                x(r);
                var i = m + " " + f + " ";
                if ((e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos)) {
                    var n = { marginRight: "" };
                    e.isIE7 ? t("body, html").css("overflow", "") : (n.overflow = ""), t("html").css(n);
                }
                s.off("keyup.mfp focusin" + p),
                    e.ev.off(p),
                    e.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                    e.bgOverlay.attr("class", "mfp-bg"),
                    e.container.attr("class", "mfp-container"),
                    !e.st.showCloseBtn || (e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type]) || (e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach()),
                    e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(),
                    (e.currItem = null),
                    (e.content = null),
                    (e.currTemplate = null),
                    (e.prevHeight = 0),
                    x("AfterClose");
            },
            updateSize: function (t) {
                if (e.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        s = window.innerHeight * i;
                    e.wrap.css("height", s), (e.wH = s);
                } else e.wH = t || _.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), x("Resize");
            },
            updateItemHTML: function () {
                var i = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
                var s = i.type;
                if ((x("BeforeChange", [e.currItem ? e.currItem.type : "", s]), (e.currItem = i), !e.currTemplate[s])) {
                    var o = !!e.st[s] && e.st[s].markup;
                    x("FirstMarkupParse", o), (e.currTemplate[s] = !o || t(o));
                }
                n && n !== i.type && e.container.removeClass("mfp-" + n + "-holder");
                var a = e["get" + s.charAt(0).toUpperCase() + s.slice(1)](i, e.currTemplate[s]);
                e.appendContent(a, s), (i.preloaded = !0), x(h, i), (n = i.type), e.container.prepend(e.contentContainer), x("AfterChange");
            },
            appendContent: function (t, i) {
                (e.content = t),
                    t ? (e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i] ? e.content.find(".mfp-close").length || e.content.append(C()) : (e.content = t)) : (e.content = ""),
                    x("BeforeAppend"),
                    e.container.addClass("mfp-" + i + "-holder"),
                    e.contentContainer.append(e.content);
            },
            parseEl: function (i) {
                var s,
                    n = e.items[i];
                if ((n.tagName ? (n = { el: t(n) }) : ((s = n.type), (n = { data: n, src: n.src })), n.el)) {
                    for (var o = e.types, a = 0; a < o.length; a++)
                        if (n.el.hasClass("mfp-" + o[a])) {
                            s = o[a];
                            break;
                        }
                    (n.src = n.el.attr("data-mfp-src")), n.src || (n.src = n.el.attr("href"));
                }
                return (n.type = s || e.st.type || "inline"), (n.index = i), (n.parsed = !0), (e.items[i] = n), x("ElementParse", n), e.items[i];
            },
            addGroup: function (t, i) {
                var s = function (s) {
                    (s.mfpEl = this), e._openClick(s, t, i);
                };
                i || (i = {});
                var n = "click.magnificPopup";
                (i.mainEl = t), i.items ? ((i.isObj = !0), t.off(n).on(n, s)) : ((i.isObj = !1), i.delegate ? t.off(n).on(n, i.delegate, s) : ((i.items = t), t.off(n).on(n, s)));
            },
            _openClick: function (i, s, n) {
                if ((void 0 !== n.midClick ? n.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                    var o = void 0 !== n.disableOn ? n.disableOn : t.magnificPopup.defaults.disableOn;
                    if (o)
                        if (t.isFunction(o)) {
                            if (!o.call(e)) return !0;
                        } else if (_.width() < o) return !0;
                    i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), (n.el = t(i.mfpEl)), n.delegate && (n.items = s.find(n.delegate)), e.open(n);
                }
            },
            updateStatus: function (t, s) {
                if (e.preloader) {
                    i !== t && e.container.removeClass("mfp-s-" + i), s || "loading" !== t || (s = e.st.tLoading);
                    var n = { status: t, text: s };
                    x("UpdateStatus", n),
                        (t = n.status),
                        (s = n.text),
                        e.preloader.html(s),
                        e.preloader.find("a").on("click", function (t) {
                            t.stopImmediatePropagation();
                        }),
                        e.container.addClass("mfp-s-" + t),
                        (i = t);
                }
            },
            _checkIfClose: function (i) {
                if (!t(i).hasClass(g)) {
                    var s = e.st.closeOnContentClick,
                        n = e.st.closeOnBgClick;
                    if (s && n) return !0;
                    if (!e.content || t(i).hasClass("mfp-close") || (e.preloader && i === e.preloader[0])) return !0;
                    if (i === e.content[0] || t.contains(e.content[0], i)) {
                        if (s) return !0;
                    } else if (n && t.contains(document, i)) return !0;
                    return !1;
                }
            },
            _addClassToMFP: function (t) {
                e.bgOverlay.addClass(t), e.wrap.addClass(t);
            },
            _removeClassFromMFP: function (t) {
                this.bgOverlay.removeClass(t), e.wrap.removeClass(t);
            },
            _hasScrollBar: function (t) {
                return (e.isIE7 ? s.height() : document.body.scrollHeight) > (t || _.height());
            },
            _setFocus: function () {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus();
            },
            _onFocusIn: function (i) {
                return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1);
            },
            _parseMarkup: function (e, i, s) {
                var n;
                s.data && (i = t.extend(s.data, i)),
                    x(c, [e, i, s]),
                    t.each(i, function (i, s) {
                        if (void 0 === s || !1 === s) return !0;
                        if ((n = i.split("_")).length > 1) {
                            var o = e.find(p + "-" + n[0]);
                            if (o.length > 0) {
                                var a = n[1];
                                "replaceWith" === a ? o[0] !== s[0] && o.replaceWith(s) : "img" === a ? (o.is("img") ? o.attr("src", s) : o.replaceWith(t("<img>").attr("src", s).attr("class", o.attr("class")))) : o.attr(n[1], s);
                            }
                        } else e.find(p + "-" + i).html(s);
                    });
            },
            _getScrollbarSize: function () {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    (t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"), document.body.appendChild(t), (e.scrollbarSize = t.offsetWidth - t.clientWidth), document.body.removeChild(t);
                }
                return e.scrollbarSize;
            },
        }),
            (t.magnificPopup = {
                instance: null,
                proto: v.prototype,
                modules: [],
                open: function (e, i) {
                    return S(), ((e = e ? t.extend(!0, {}, e) : {}).isObj = !0), (e.index = i || 0), this.instance.open(e);
                },
                close: function () {
                    return t.magnificPopup.instance && t.magnificPopup.instance.close();
                },
                registerModule: function (e, i) {
                    i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e);
                },
                defaults: {
                    disableOn: 0,
                    key: null,
                    midClick: !1,
                    mainClass: "",
                    preloader: !0,
                    focus: "",
                    closeOnContentClick: !1,
                    closeOnBgClick: !0,
                    closeBtnInside: !0,
                    showCloseBtn: !0,
                    enableEscapeKey: !0,
                    modal: !1,
                    alignTop: !1,
                    removalDelay: 0,
                    prependTo: null,
                    fixedContentPos: "auto",
                    fixedBgPos: "auto",
                    overflowY: "auto",
                    closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                    tClose: "Close (Esc)",
                    tLoading: "Loading...",
                    autoFocusLast: !0,
                },
            }),
            (t.fn.magnificPopup = function (i) {
                S();
                var s = t(this);
                if ("string" == typeof i)
                    if ("open" === i) {
                        var n,
                            o = y ? s.data("magnificPopup") : s[0].magnificPopup,
                            a = parseInt(arguments[1], 10) || 0;
                        o.items ? (n = o.items[a]) : ((n = s), o.delegate && (n = n.find(o.delegate)), (n = n.eq(a))), e._openClick({ mfpEl: n }, s, o);
                    } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
                else (i = t.extend(!0, {}, i)), y ? s.data("magnificPopup", i) : (s[0].magnificPopup = i), e.addGroup(s, i);
                return s;
            });
        var k,
            O,
            P,
            I = "inline",
            T = function () {
                P && (O.after(P.addClass(k)).detach(), (P = null));
            };
        t.magnificPopup.registerModule(I, {
            options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
            proto: {
                initInline: function () {
                    e.types.push(I),
                        w(r + "." + I, function () {
                            T();
                        });
                },
                getInline: function (i, s) {
                    if ((T(), i.src)) {
                        var n = e.st.inline,
                            o = t(i.src);
                        if (o.length) {
                            var a = o[0].parentNode;
                            a && a.tagName && (O || ((k = n.hiddenClass), (O = b(k)), (k = "mfp-" + k)), (P = o.after(O).detach().removeClass(k))), e.updateStatus("ready");
                        } else e.updateStatus("error", n.tNotFound), (o = t("<div>"));
                        return (i.inlineElement = o), o;
                    }
                    return e.updateStatus("ready"), e._parseMarkup(s, {}, i), s;
                },
            },
        });
        var E,
            $ = "ajax",
            z = function () {
                E && t(document.body).removeClass(E);
            },
            M = function () {
                z(), e.req && e.req.abort();
            };
        t.magnificPopup.registerModule($, {
            options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
            proto: {
                initAjax: function () {
                    e.types.push($), (E = e.st.ajax.cursor), w(r + "." + $, M), w("BeforeChange." + $, M);
                },
                getAjax: function (i) {
                    E && t(document.body).addClass(E), e.updateStatus("loading");
                    var s = t.extend(
                        {
                            url: i.src,
                            success: function (s, n, o) {
                                var a = { data: s, xhr: o };
                                x("ParseAjax", a),
                                    e.appendContent(t(a.data), $),
                                    (i.finished = !0),
                                    z(),
                                    e._setFocus(),
                                    setTimeout(function () {
                                        e.wrap.addClass(f);
                                    }, 16),
                                    e.updateStatus("ready"),
                                    x("AjaxContentAdded");
                            },
                            error: function () {
                                z(), (i.finished = i.loadError = !0), e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src));
                            },
                        },
                        e.st.ajax.settings
                    );
                    return (e.req = t.ajax(s)), "";
                },
            },
        });
        var j,
            D = function (i) {
                if (i.data && void 0 !== i.data.title) return i.data.title;
                var s = e.st.image.titleSrc;
                if (s) {
                    if (t.isFunction(s)) return s.call(e, i);
                    if (i.el) return i.el.attr(s) || "";
                }
                return "";
            };
        t.magnificPopup.registerModule("image", {
            options: {
                markup:
                    '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.',
            },
            proto: {
                initImage: function () {
                    var i = e.st.image,
                        s = ".image";
                    e.types.push("image"),
                        w(d + s, function () {
                            "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor);
                        }),
                        w(r + s, function () {
                            i.cursor && t(document.body).removeClass(i.cursor), _.off("resize" + p);
                        }),
                        w("Resize" + s, e.resizeImage),
                        e.isLowIE && w("AfterChange", e.resizeImage);
                },
                resizeImage: function () {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var i = 0;
                        e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i);
                    }
                },
                _onImageHasSize: function (t) {
                    t.img && ((t.hasSize = !0), j && clearInterval(j), (t.isCheckingImgSize = !1), x("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), (t.imgHidden = !1)));
                },
                findImageSize: function (t) {
                    var i = 0,
                        s = t.img[0],
                        n = function (o) {
                            j && clearInterval(j),
                                (j = setInterval(function () {
                                    return s.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(j), void (3 === ++i ? n(10) : 40 === i ? n(50) : 100 === i && n(500)));
                                }, o));
                        };
                    n(1);
                },
                getImage: function (i, s) {
                    var n = 0,
                        o = function () {
                            i &&
                                (i.img[0].complete
                                    ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), (i.hasSize = !0), (i.loaded = !0), x("ImageLoadComplete"))
                                    : 200 > ++n
                                    ? setTimeout(o, 100)
                                    : a());
                        },
                        a = function () {
                            i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", r.tError.replace("%url%", i.src))), (i.hasSize = !0), (i.loaded = !0), (i.loadError = !0));
                        },
                        r = e.st.image,
                        l = s.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        (c.className = "mfp-img"),
                            i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")),
                            (i.img = t(c).on("load.mfploader", o).on("error.mfploader", a)),
                            (c.src = i.src),
                            l.is("img") && (i.img = i.img.clone()),
                            (c = i.img[0]).naturalWidth > 0 ? (i.hasSize = !0) : c.width || (i.hasSize = !1);
                    }
                    return (
                        e._parseMarkup(s, { title: D(i), img_replaceWith: i.img }, i),
                        e.resizeImage(),
                        i.hasSize
                            ? (j && clearInterval(j), i.loadError ? (s.addClass("mfp-loading"), e.updateStatus("error", r.tError.replace("%url%", i.src))) : (s.removeClass("mfp-loading"), e.updateStatus("ready")), s)
                            : (e.updateStatus("loading"), (i.loading = !0), i.hasSize || ((i.imgHidden = !0), s.addClass("mfp-loading"), e.findImageSize(i)), s)
                    );
                },
            },
        });
        var L;
        t.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function (t) {
                    return t.is("img") ? t : t.find("img");
                },
            },
            proto: {
                initZoom: function () {
                    var t,
                        i = e.st.zoom,
                        s = ".zoom";
                    if (i.enabled && e.supportsTransition) {
                        var n,
                            o,
                            a = i.duration,
                            c = function (t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    s = "all " + i.duration / 1e3 + "s " + i.easing,
                                    n = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                    o = "transition";
                                return (n["-webkit-" + o] = n["-moz-" + o] = n["-o-" + o] = n[o] = s), e.css(n), e;
                            },
                            d = function () {
                                e.content.css("visibility", "visible");
                            };
                        w("BuildControls" + s, function () {
                            if (e._allowZoom()) {
                                if ((clearTimeout(n), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom()))) return void d();
                                (o = c(t)).css(e._getOffset()),
                                    e.wrap.append(o),
                                    (n = setTimeout(function () {
                                        o.css(e._getOffset(!0)),
                                            (n = setTimeout(function () {
                                                d(),
                                                    setTimeout(function () {
                                                        o.remove(), (t = o = null), x("ZoomAnimationEnded");
                                                    }, 16);
                                            }, a));
                                    }, 16));
                            }
                        }),
                            w(l + s, function () {
                                if (e._allowZoom()) {
                                    if ((clearTimeout(n), (e.st.removalDelay = a), !t)) {
                                        if (!(t = e._getItemToZoom())) return;
                                        o = c(t);
                                    }
                                    o.css(e._getOffset(!0)),
                                        e.wrap.append(o),
                                        e.content.css("visibility", "hidden"),
                                        setTimeout(function () {
                                            o.css(e._getOffset());
                                        }, 16);
                                }
                            }),
                            w(r + s, function () {
                                e._allowZoom() && (d(), o && o.remove(), (t = null));
                            });
                    }
                },
                _allowZoom: function () {
                    return "image" === e.currItem.type;
                },
                _getItemToZoom: function () {
                    return !!e.currItem.hasSize && e.currItem.img;
                },
                _getOffset: function (i) {
                    var s,
                        n = (s = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
                        o = parseInt(s.css("padding-top"), 10),
                        a = parseInt(s.css("padding-bottom"), 10);
                    n.top -= t(window).scrollTop() - o;
                    var r = { width: s.width(), height: (y ? s.innerHeight() : s[0].offsetHeight) - a - o };
                    return void 0 === L && (L = void 0 !== document.createElement("p").style.MozTransform), L ? (r["-moz-transform"] = r.transform = "translate(" + n.left + "px," + n.top + "px)") : ((r.left = n.left), (r.top = n.top)), r;
                },
            },
        });
        var A = "iframe",
            B = function (t) {
                if (e.currTemplate[A]) {
                    var i = e.currTemplate[A].find("iframe");
                    i.length && (t || (i[0].src = "//about:blank"), e.isIE8 && i.css("display", t ? "block" : "none"));
                }
            };
        t.magnificPopup.registerModule(A, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" },
                    vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" },
                    gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
                },
            },
            proto: {
                initIframe: function () {
                    e.types.push(A),
                        w("BeforeChange", function (t, e, i) {
                            e !== i && (e === A ? B() : i === A && B(!0));
                        }),
                        w(r + "." + A, function () {
                            B();
                        });
                },
                getIframe: function (i, s) {
                    var n = i.src,
                        o = e.st.iframe;
                    t.each(o.patterns, function () {
                        return n.indexOf(this.index) > -1 ? (this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), (n = this.src.replace("%id%", n)), !1) : void 0;
                    });
                    var a = {};
                    return o.srcAction && (a[o.srcAction] = n), e._parseMarkup(s, a, i), e.updateStatus("ready"), s;
                },
            },
        });
        var H = function (t) {
                var i = e.items.length;
                return t > i - 1 ? t - i : 0 > t ? i + t : t;
            },
            N = function (t, e, i) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i);
            };
        t.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%",
            },
            proto: {
                initGallery: function () {
                    var i = e.st.gallery,
                        n = ".mfp-gallery";
                    return (
                        (e.direction = !0),
                        !(!i || !i.enabled) &&
                            ((o += " mfp-gallery"),
                            w(d + n, function () {
                                i.navigateByImgClick &&
                                    e.wrap.on("click" + n, ".mfp-img", function () {
                                        return e.items.length > 1 ? (e.next(), !1) : void 0;
                                    }),
                                    s.on("keydown" + n, function (t) {
                                        37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next();
                                    });
                            }),
                            w("UpdateStatus" + n, function (t, i) {
                                i.text && (i.text = N(i.text, e.currItem.index, e.items.length));
                            }),
                            w(c + n, function (t, s, n, o) {
                                var a = e.items.length;
                                n.counter = a > 1 ? N(i.tCounter, o.index, a) : "";
                            }),
                            w("BuildControls" + n, function () {
                                if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                                    var s = i.arrowMarkup,
                                        n = (e.arrowLeft = t(s.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(g)),
                                        o = (e.arrowRight = t(s.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(g));
                                    n.click(function () {
                                        e.prev();
                                    }),
                                        o.click(function () {
                                            e.next();
                                        }),
                                        e.container.append(n.add(o));
                                }
                            }),
                            w(h + n, function () {
                                e._preloadTimeout && clearTimeout(e._preloadTimeout),
                                    (e._preloadTimeout = setTimeout(function () {
                                        e.preloadNearbyImages(), (e._preloadTimeout = null);
                                    }, 16));
                            }),
                            void w(r + n, function () {
                                s.off(n), e.wrap.off("click" + n), (e.arrowRight = e.arrowLeft = null);
                            }))
                    );
                },
                next: function () {
                    (e.direction = !0), (e.index = H(e.index + 1)), e.updateItemHTML();
                },
                prev: function () {
                    (e.direction = !1), (e.index = H(e.index - 1)), e.updateItemHTML();
                },
                goTo: function (t) {
                    (e.direction = t >= e.index), (e.index = t), e.updateItemHTML();
                },
                preloadNearbyImages: function () {
                    var t,
                        i = e.st.gallery.preload,
                        s = Math.min(i[0], e.items.length),
                        n = Math.min(i[1], e.items.length);
                    for (t = 1; t <= (e.direction ? n : s); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? s : n); t++) e._preloadItem(e.index - t);
                },
                _preloadItem: function (i) {
                    if (((i = H(i)), !e.items[i].preloaded)) {
                        var s = e.items[i];
                        s.parsed || (s = e.parseEl(i)),
                            x("LazyLoad", s),
                            "image" === s.type &&
                                (s.img = t('<img class="mfp-img" />')
                                    .on("load.mfploader", function () {
                                        s.hasSize = !0;
                                    })
                                    .on("error.mfploader", function () {
                                        (s.hasSize = !0), (s.loadError = !0), x("LazyLoadError", s);
                                    })
                                    .attr("src", s.src)),
                            (s.preloaded = !0);
                    }
                },
            },
        });
        var W = "retina";
        t.magnificPopup.registerModule(W, {
            options: {
                replaceSrc: function (t) {
                    return t.src.replace(/\.\w+$/, function (t) {
                        return "@2x" + t;
                    });
                },
                ratio: 1,
            },
            proto: {
                initRetina: function () {
                    if (window.devicePixelRatio > 1) {
                        var t = e.st.retina,
                            i = t.ratio;
                        (i = isNaN(i) ? i() : i) > 1 &&
                            (w("ImageHasSize." + W, function (t, e) {
                                e.img.css({ "max-width": e.img[0].naturalWidth / i, width: "100%" });
                            }),
                            w("ElementParse." + W, function (e, s) {
                                s.src = t.replaceSrc(s, i);
                            }));
                    }
                },
            },
        }),
            S();
    }),
    (function (t, e, i, s) {
        var n,
            o,
            a,
            r,
            l,
            c,
            d,
            h,
            u,
            p,
            f,
            m,
            g = {
                scrollSpeed: 1e3,
                autoScrollSpeed: !0,
                scrollEasing: "easeInOutQuint",
                scrollingEasing: "easeOutQuint",
                pageEndSmoothScroll: !0,
                layout: "vertical",
                offset: 0,
                highlightSelector: !1,
                clickedClass: "mPS2id-clicked",
                targetClass: "mPS2id-target",
                highlightClass: "mPS2id-highlight",
                forceSingleHighlight: !1,
                keepHighlightUntilNext: !1,
                highlightByNextTarget: !1,
                disablePluginBelow: !1,
                clickEvents: !0,
                appendHash: !1,
                onStart: function () {},
                onComplete: function () {},
                defaultSelector: !1,
                live: !0,
                liveSelector: !1,
                excludeSelectors: !1,
                encodeLinks: !1,
            },
            v = 0,
            y = {
                init: function (s) {
                    s = t.extend(!0, {}, g, s);
                    if ((t(i).data("mPS2id", s), (o = t(i).data("mPS2id")), !this.selector)) {
                        this.each(function () {
                            var e = t(this);
                            e.hasClass("__mPS2id") || e.addClass("__mPS2id");
                        }),
                            (this.selector = ".__mPS2id");
                    }
                    o.liveSelector && (this.selector += "," + o.liveSelector),
                        (n = n ? n + "," + this.selector : this.selector),
                        o.defaultSelector && (("object" == typeof t(n) && 0 !== t(n).length) || (n = ".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id")),
                        o.clickEvents &&
                            t(i)
                                .undelegate(".mPS2id")
                                .delegate(n, "click.mPS2id", function (e) {
                                    if (_._isDisabled.call(null)) _._removeClasses.call(null);
                                    else {
                                        var i = t(this),
                                            s = i.attr("href"),
                                            n = i.prop("href").baseVal || i.prop("href");
                                        (o.excludeSelectors && i.is(o.excludeSelectors)) ||
                                            (s && -1 !== s.indexOf("#/")) ||
                                            (_._reset.call(null),
                                            (p = i.data("ps2id-offset") || 0),
                                            _._isValid.call(null, s, n) && _._findTarget.call(null, s) && (e.preventDefault(), (r = "selector"), (l = i), _._setClasses.call(null, !0), _._scrollTo.call(null)));
                                    }
                                }),
                        t(e)
                            .unbind(".mPS2id")
                            .bind("scroll.mPS2id resize.mPS2id", function () {
                                if (_._isDisabled.call(null)) _._removeClasses.call(null);
                                else {
                                    var e = t("._mPS2id-t");
                                    e.each(function (i) {
                                        var s = t(this),
                                            n = s.attr("id"),
                                            o = _._findHighlight.call(null, n);
                                        _._setClasses.call(null, !1, s, o), i == e.length - 1 && _._extendClasses.call(null);
                                    });
                                }
                            }),
                        (a = !0),
                        _._setup.call(null),
                        _._live.call(null);
                },
                scrollTo: function (e, i) {
                    if (_._isDisabled.call(null)) _._removeClasses.call(null);
                    else if (e && void 0 !== e) {
                        _._isInit.call(null);
                        var s = { layout: o.layout, offset: o.offset, clicked: !1 };
                        i = t.extend(!0, {}, s, i);
                        _._reset.call(null),
                            (h = i.layout),
                            (u = i.offset),
                            (e = -1 !== e.indexOf("#") ? e : "#" + e),
                            _._isValid.call(null, e) && _._findTarget.call(null, e) && ((r = "scrollTo"), (l = i.clicked) && _._setClasses.call(null, !0), _._scrollTo.call(null));
                    }
                },
                destroy: function () {
                    t(e).unbind(".mPS2id"), t(i).undelegate(".mPS2id").removeData("mPS2id"), t("._mPS2id-t").removeData("mPS2id"), _._removeClasses.call(null, !0);
                },
            },
            _ = {
                _isDisabled: function () {
                    var t = e,
                        s = "inner",
                        n = o.disablePluginBelow instanceof Array ? [o.disablePluginBelow[0] || 0, o.disablePluginBelow[1] || 0] : [o.disablePluginBelow || 0, 0];
                    return "innerWidth" in e || ((s = "client"), (t = i.documentElement || i.body)), t[s + "Width"] <= n[0] || t[s + "Height"] <= n[1];
                },
                _isValid: function (t, i) {
                    if (t) {
                        var s = -1 !== (i = i || t).indexOf("#/") ? i.split("#/")[0] : i.split("#")[0],
                            n = e.location.toString().split("#")[0];
                        return "#" !== t && -1 !== t.indexOf("#") && ("" === s || decodeURIComponent(s) === decodeURIComponent(n));
                    }
                },
                _setup: function () {
                    var e = _._highlightSelector(),
                        s = 1,
                        n = 0;
                    return t(e).each(function () {
                        var a = t(this),
                            r = a.attr("href"),
                            l = a.prop("href").baseVal || a.prop("href");
                        if (_._isValid.call(null, r, l)) {
                            if (o.excludeSelectors && a.is(o.excludeSelectors)) return;
                            var c = -1 !== r.indexOf("#/") ? r.split("#/")[1] : r.split("#")[1],
                                d = -1 !== c.indexOf("%") ? t(i.getElementById(c)) : t("#" + c);
                            if (d.length > 0) {
                                o.highlightByNextTarget && d !== n && (n ? n.data("mPS2id", { tn: d }) : d.data("mPS2id", { tn: "0" }), (n = d)),
                                    d.hasClass("_mPS2id-t") || d.addClass("_mPS2id-t"),
                                    d.data("mPS2id", { i: s }),
                                    a.hasClass("_mPS2id-h") || a.addClass("_mPS2id-h");
                                var h = _._findHighlight.call(null, c);
                                _._setClasses.call(null, !1, d, h), (v = s), ++s == t(e).length && _._extendClasses.call(null);
                            }
                        }
                    });
                },
                _highlightSelector: function () {
                    return o.highlightSelector && "" !== o.highlightSelector ? o.highlightSelector : n;
                },
                _findTarget: function (e) {
                    var s = -1 !== e.indexOf("#/") ? e.split("#/")[1] : e.split("#")[1],
                        n = -1 !== s.indexOf("%") ? t(i.getElementById(s)) : t("#" + s);
                    if (n.length < 1 || "fixed" === n.css("position")) {
                        if ("top" !== s) return;
                        n = t("body");
                    }
                    return (c = n), h || (h = o.layout), (u = _._setOffset.call(null)), ((d = [(n.offset().top - u[0]).toString(), (n.offset().left - u[1]).toString()])[0] = d[0] < 0 ? 0 : d[0]), (d[1] = d[1] < 0 ? 0 : d[1]), d;
                },
                _setOffset: function () {
                    var e, i, s, n;
                    switch ((u || (u = o.offset ? o.offset : 0), p && (u = p), typeof u)) {
                        case "object":
                        case "string":
                            (i = [(e = [u.y ? u.y : u, u.x ? u.x : u])[0] instanceof jQuery ? e[0] : t(e[0]), e[1] instanceof jQuery ? e[1] : t(e[1])])[0].length > 0
                                ? ((s = i[0].height()), "fixed" === i[0].css("position") && (s += i[0][0].offsetTop))
                                : (s = !isNaN(parseFloat(e[0])) && isFinite(e[0]) ? parseInt(e[0]) : 0),
                                i[1].length > 0 ? ((n = i[1].width()), "fixed" === i[1].css("position") && (n += i[1][0].offsetLeft)) : (n = !isNaN(parseFloat(e[1])) && isFinite(e[1]) ? parseInt(e[1]) : 0);
                            break;
                        case "function":
                            (e = u.call(null)) instanceof Array ? ((s = e[0]), (n = e[1])) : (s = n = e);
                            break;
                        default:
                            s = n = parseInt(u);
                    }
                    return [s, n];
                },
                _findHighlight: function (i) {
                    var s = e.location,
                        n = s.toString().split("#")[0],
                        a = s.pathname;
                    if ((-1 !== n.indexOf("'") && (n = n.replace("'", "\\'")), -1 !== a.indexOf("'") && (a = a.replace("'", "\\'")), (n = decodeURIComponent(n)), (a = decodeURIComponent(a)), o.encodeLinks)) {
                        var r = encodeURI(n).toLowerCase(),
                            l = encodeURI(a).toLowerCase();
                        return t(
                            "._mPS2id-h[href='#" +
                                i +
                                "'],._mPS2id-h[href='" +
                                n +
                                "#" +
                                i +
                                "'],._mPS2id-h[href='" +
                                a +
                                "#" +
                                i +
                                "'],._mPS2id-h[href='#/" +
                                i +
                                "'],._mPS2id-h[href='" +
                                n +
                                "#/" +
                                i +
                                "'],._mPS2id-h[href='" +
                                a +
                                "#/" +
                                i +
                                "'],._mPS2id-h[href='" +
                                r +
                                "#/" +
                                i +
                                "'],._mPS2id-h[href='" +
                                r +
                                "#" +
                                i +
                                "'],._mPS2id-h[href='" +
                                l +
                                "#/" +
                                i +
                                "'],._mPS2id-h[href='" +
                                l +
                                "#" +
                                i +
                                "']"
                        );
                    }
                    return t(
                        "._mPS2id-h[href='#" +
                            i +
                            "'],._mPS2id-h[href='" +
                            n +
                            "#" +
                            i +
                            "'],._mPS2id-h[href='" +
                            a +
                            "#" +
                            i +
                            "'],._mPS2id-h[href='#/" +
                            i +
                            "'],._mPS2id-h[href='" +
                            n +
                            "#/" +
                            i +
                            "'],._mPS2id-h[href='" +
                            a +
                            "#/" +
                            i +
                            "']"
                    );
                },
                _setClasses: function (e, i, s) {
                    var n = o.clickedClass,
                        a = o.targetClass,
                        r = o.highlightClass;
                    e && n && "" !== n
                        ? (t("." + n).removeClass(n), l.addClass(n))
                        : i && a && "" !== a && s && r && "" !== r && (_._currentTarget.call(null, i) ? (i.addClass(a), s.addClass(r)) : (!o.keepHighlightUntilNext || t("." + r).length > 1) && (i.removeClass(a), s.removeClass(r)));
                },
                _extendClasses: function () {
                    var e = o.targetClass,
                        i = o.highlightClass,
                        s = t("." + e),
                        n = t("." + i),
                        a = e + "-first",
                        r = e + "-last",
                        l = i + "-first",
                        c = i + "-last";
                    t("._mPS2id-t").removeClass(a + " " + r),
                        t("._mPS2id-h").removeClass(l + " " + c),
                        o.forceSingleHighlight
                            ? o.keepHighlightUntilNext && s.length > 1
                                ? (s.slice(0, 1).removeClass(e), n.slice(0, 1).removeClass(i))
                                : (s.slice(1).removeClass(e), n.slice(1).removeClass(i))
                            : (s.slice(0, 1).addClass(a).end().slice(-1).addClass(r), n.slice(0, 1).addClass(l).end().slice(-1).addClass(c));
                },
                _removeClasses: function (e) {
                    t("." + o.clickedClass).removeClass(o.clickedClass),
                        t("." + o.targetClass).removeClass(o.targetClass + " " + o.targetClass + "-first " + o.targetClass + "-last"),
                        t("." + o.highlightClass).removeClass(o.highlightClass + " " + o.highlightClass + "-first " + o.highlightClass + "-last"),
                        e && (t("._mPS2id-t").removeClass("_mPS2id-t"), t("._mPS2id-h").removeClass("_mPS2id-h"));
                },
                _currentTarget: function (i) {
                    var s = o["target_" + i.data("mPS2id").i],
                        n = i.data("ps2id-target"),
                        a = n && t(n)[0] ? t(n)[0].getBoundingClientRect() : i[0].getBoundingClientRect();
                    if (void 0 !== s) {
                        var r = i.offset().top,
                            l = i.offset().left,
                            c = s.from ? s.from + r : r,
                            d = s.to ? s.to + r : r,
                            h = s.fromX ? s.fromX + l : l,
                            u = s.toX ? s.toX + l : l;
                        return a.top >= d && a.top <= c && a.left >= u && a.left <= h;
                    }
                    var p = t(e).height(),
                        f = t(e).width(),
                        m = n ? t(n).height() : i.height(),
                        g = n ? t(n).width() : i.width(),
                        v = 1 + m / p,
                        y = v,
                        _ = m < p ? v * (p / m) : v,
                        w = 1 + g / f,
                        b = w,
                        x = g < f ? w * (f / g) : w,
                        C = [a.top <= p / y, a.bottom >= p / _, a.left <= f / b, a.right >= f / x];
                    if (o.highlightByNextTarget) {
                        var S = i.data("mPS2id").tn;
                        if (S) {
                            var k = S[0].getBoundingClientRect();
                            "vertical" === o.layout ? (C = [a.top <= p / 2, k.top > p / 2, 1, 1]) : "horizontal" === o.layout && (C = [1, 1, a.left <= f / 2, k.left > f / 2]);
                        }
                    }
                    return C[0] && C[1] && C[2] && C[3];
                },
                _scrollTo: function () {
                    (m = _._scrollSpeed.call(null)), (d = o.pageEndSmoothScroll ? _._pageEndSmoothScroll.call(null) : d);
                    var i = t("html,body"),
                        s = o.autoScrollSpeed ? _._autoScrollSpeed.call(null) : m,
                        n = i.is(":animated") ? o.scrollingEasing : o.scrollEasing,
                        a = t(e).scrollTop(),
                        r = t(e).scrollLeft();
                    switch (h) {
                        case "horizontal":
                            r != d[1] &&
                                (_._callbacks.call(null, "onStart"),
                                i
                                    .stop()
                                    .animate({ scrollLeft: d[1] }, s, n)
                                    .promise()
                                    .then(function () {
                                        _._callbacks.call(null, "onComplete");
                                    }));
                            break;
                        case "auto":
                            var l;
                            if (a != d[0] || r != d[1])
                                if ((_._callbacks.call(null, "onStart"), navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)))
                                    i.stop()
                                        .animate(
                                            { pageYOffset: d[0], pageXOffset: d[1] },
                                            {
                                                duration: s,
                                                easing: n,
                                                step: function (t, i) {
                                                    "pageXOffset" == i.prop ? (l = t) : "pageYOffset" == i.prop && e.scrollTo(l, t);
                                                },
                                            }
                                        )
                                        .promise()
                                        .then(function () {
                                            _._callbacks.call(null, "onComplete");
                                        });
                                else
                                    i.stop()
                                        .animate({ scrollTop: d[0], scrollLeft: d[1] }, s, n)
                                        .promise()
                                        .then(function () {
                                            _._callbacks.call(null, "onComplete");
                                        });
                            break;
                        default:
                            a != d[0] &&
                                (_._callbacks.call(null, "onStart"),
                                i
                                    .stop()
                                    .animate({ scrollTop: d[0] }, s, n)
                                    .promise()
                                    .then(function () {
                                        _._callbacks.call(null, "onComplete");
                                    }));
                    }
                },
                _pageEndSmoothScroll: function () {
                    var s = t(i).height(),
                        n = t(i).width(),
                        o = t(e).height(),
                        a = t(e).width();
                    return [s - d[0] < o ? s - o : d[0], n - d[1] < a ? n - a : d[1]];
                },
                _scrollSpeed: function () {
                    var e = o.scrollSpeed;
                    return (
                        l &&
                            l.length &&
                            l.add(l.parent()).each(function () {
                                var i = t(this);
                                if (i.attr("class")) {
                                    var s = i.attr("class").split(" ");
                                    for (var n in s)
                                        if (String(s[n]).match(/^ps2id-speed-\d+$/)) {
                                            e = s[n].split("ps2id-speed-")[1];
                                            break;
                                        }
                                }
                            }),
                        parseInt(e)
                    );
                },
                _autoScrollSpeed: function () {
                    var s = t(e).scrollTop(),
                        n = t(e).scrollLeft(),
                        o = t(i).height(),
                        a = t(i).width(),
                        r = [m + (m * Math.floor((Math.abs(d[0] - s) / o) * 100)) / 100, m + (m * Math.floor((Math.abs(d[1] - n) / a) * 100)) / 100];
                    return Math.max.apply(Math, r);
                },
                _callbacks: function (t) {
                    if (o)
                        switch (((this.mPS2id = { trigger: r, clicked: l, target: c, scrollTo: { y: d[0], x: d[1] } }), t)) {
                            case "onStart":
                                if (o.appendHash && e.history && e.history.pushState && l && l.length) {
                                    var i = "#" + l.attr("href").split("#")[1];
                                    i !== e.location.hash && history.pushState("", "", i);
                                }
                                o.onStart.call(null, this.mPS2id);
                                break;
                            case "onComplete":
                                o.onComplete.call(null, this.mPS2id);
                        }
                },
                _reset: function () {
                    h = u = p = !1;
                },
                _isInit: function () {
                    a || y.init.apply(this);
                },
                _live: function () {
                    f = setTimeout(function () {
                        o.live ? t(_._highlightSelector()).length !== v && _._setup.call(null) : f && clearTimeout(f), _._live.call(null);
                    }, 1e3);
                },
                _easing: function () {
                    function e(t) {
                        var e = 7.5625,
                            i = 2.75;
                        return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + 0.75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + 0.9375 : e * (t -= 2.625 / i) * t + 0.984375;
                    }
                    (t.easing.easeInQuad =
                        t.easing.easeInQuad ||
                        function (t) {
                            return t * t;
                        }),
                        (t.easing.easeOutQuad =
                            t.easing.easeOutQuad ||
                            function (t) {
                                return 1 - (1 - t) * (1 - t);
                            }),
                        (t.easing.easeInOutQuad =
                            t.easing.easeInOutQuad ||
                            function (t) {
                                return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
                            }),
                        (t.easing.easeInCubic =
                            t.easing.easeInCubic ||
                            function (t) {
                                return t * t * t;
                            }),
                        (t.easing.easeOutCubic =
                            t.easing.easeOutCubic ||
                            function (t) {
                                return 1 - Math.pow(1 - t, 3);
                            }),
                        (t.easing.easeInOutCubic =
                            t.easing.easeInOutCubic ||
                            function (t) {
                                return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                            }),
                        (t.easing.easeInQuart =
                            t.easing.easeInQuart ||
                            function (t) {
                                return t * t * t * t;
                            }),
                        (t.easing.easeOutQuart =
                            t.easing.easeOutQuart ||
                            function (t) {
                                return 1 - Math.pow(1 - t, 4);
                            }),
                        (t.easing.easeInOutQuart =
                            t.easing.easeInOutQuart ||
                            function (t) {
                                return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
                            }),
                        (t.easing.easeInQuint =
                            t.easing.easeInQuint ||
                            function (t) {
                                return t * t * t * t * t;
                            }),
                        (t.easing.easeOutQuint =
                            t.easing.easeOutQuint ||
                            function (t) {
                                return 1 - Math.pow(1 - t, 5);
                            }),
                        (t.easing.easeInOutQuint =
                            t.easing.easeInOutQuint ||
                            function (t) {
                                return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
                            }),
                        (t.easing.easeInExpo =
                            t.easing.easeInExpo ||
                            function (t) {
                                return 0 === t ? 0 : Math.pow(2, 10 * t - 10);
                            }),
                        (t.easing.easeOutExpo =
                            t.easing.easeOutExpo ||
                            function (t) {
                                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
                            }),
                        (t.easing.easeInOutExpo =
                            t.easing.easeInOutExpo ||
                            function (t) {
                                return 0 === t ? 0 : 1 === t ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;
                            }),
                        (t.easing.easeInSine =
                            t.easing.easeInSine ||
                            function (t) {
                                return 1 - Math.cos((t * Math.PI) / 2);
                            }),
                        (t.easing.easeOutSine =
                            t.easing.easeOutSine ||
                            function (t) {
                                return Math.sin((t * Math.PI) / 2);
                            }),
                        (t.easing.easeInOutSine =
                            t.easing.easeInOutSine ||
                            function (t) {
                                return -(Math.cos(Math.PI * t) - 1) / 2;
                            }),
                        (t.easing.easeInCirc =
                            t.easing.easeInCirc ||
                            function (t) {
                                return 1 - Math.sqrt(1 - Math.pow(t, 2));
                            }),
                        (t.easing.easeOutCirc =
                            t.easing.easeOutCirc ||
                            function (t) {
                                return Math.sqrt(1 - Math.pow(t - 1, 2));
                            }),
                        (t.easing.easeInOutCirc =
                            t.easing.easeInOutCirc ||
                            function (t) {
                                return t < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2;
                            }),
                        (t.easing.easeInElastic =
                            t.easing.easeInElastic ||
                            function (t) {
                                return 0 === t ? 0 : 1 === t ? 1 : -Math.pow(2, 10 * t - 10) * Math.sin((10 * t - 10.75) * ((2 * Math.PI) / 3));
                            }),
                        (t.easing.easeOutElastic =
                            t.easing.easeOutElastic ||
                            function (t) {
                                return 0 === t ? 0 : 1 === t ? 1 : Math.pow(2, -10 * t) * Math.sin((10 * t - 0.75) * ((2 * Math.PI) / 3)) + 1;
                            }),
                        (t.easing.easeInOutElastic =
                            t.easing.easeInOutElastic ||
                            function (t) {
                                return 0 === t
                                    ? 0
                                    : 1 === t
                                    ? 1
                                    : t < 0.5
                                    ? (-Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * ((2 * Math.PI) / 4.5))) / 2
                                    : (Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * ((2 * Math.PI) / 4.5))) / 2 + 1;
                            }),
                        (t.easing.easeInBack =
                            t.easing.easeInBack ||
                            function (t) {
                                return 2.70158 * t * t * t - 1.70158 * t * t;
                            }),
                        (t.easing.easeOutBack =
                            t.easing.easeOutBack ||
                            function (t) {
                                return 1 + 2.70158 * Math.pow(t - 1, 3) + 1.70158 * Math.pow(t - 1, 2);
                            }),
                        (t.easing.easeInOutBack =
                            t.easing.easeInOutBack ||
                            function (t) {
                                return t < 0.5 ? (Math.pow(2 * t, 2) * (7.189819 * t - 2.5949095)) / 2 : (Math.pow(2 * t - 2, 2) * (3.5949095 * (2 * t - 2) + 2.5949095) + 2) / 2;
                            }),
                        (t.easing.easeInBounce =
                            t.easing.easeInBounce ||
                            function (t) {
                                return 1 - e(1 - t);
                            }),
                        (t.easing.easeOutBounce = t.easing.easeOutBounce || e),
                        (t.easing.easeInOutBounce =
                            t.easing.easeInOutBounce ||
                            function (t) {
                                return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : (1 + e(2 * t - 1)) / 2;
                            });
                },
            };
        _._easing.call(),
            (t.fn.mPageScroll2id = function (e) {
                return y[e] ? y[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : y.init.apply(this, arguments);
            }),
            (t.mPageScroll2id = function (e) {
                return y[e] ? y[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : y.init.apply(this, arguments);
            }),
            (t.mPageScroll2id.defaults = g);
    })(jQuery, window, document),
    (function (t) {
        t.extend(t.easing, {
            spincrementEasing: function (t, e, i, s, n) {
                return e === n ? i + s : s * (1 - Math.pow(2, (-10 * e) / n)) + i;
            },
        }),
            (t.fn.spincrement = function (e) {
                var i = t.extend({ from: 0, to: null, decimalPlaces: null, decimalPoint: ".", thousandSeparator: ",", duration: 1e3, leeway: 50, easing: "spincrementEasing", fade: !0, complete: null }, e),
                    s = new RegExp(/^(-?[0-9]+)([0-9]{3})/);
                function n(t, e) {
                    if (((t = t.toFixed(e)), e > 0 && "." !== i.decimalPoint && (t = t.replace(".", i.decimalPoint)), i.thousandSeparator)) for (; s.test(t); ) t = t.replace(s, "$1" + i.thousandSeparator + "$2");
                    return t;
                }
                return this.each(function () {
                    var e,
                        s = t(this),
                        o = i.from;
                    if ((s.attr("data-from") && (o = parseFloat(s.attr("data-from"))), s.attr("data-to"))) e = parseFloat(s.attr("data-to"));
                    else if (null !== i.to) e = i.to;
                    else {
                        var a = t.inArray(i.thousandSeparator, ["\\", "^", "$", "*", "+", "?", "."]) > -1 ? "\\" + i.thousandSeparator : i.thousandSeparator,
                            r = new RegExp(a, "g");
                        e = parseFloat(s.text().replace(r, ""));
                    }
                    var l,
                        c = i.duration;
                    if ((i.leeway && (c += Math.round((i.duration * (2 * Math.random() - 1) * i.leeway) / 100)), s.attr("data-dp"))) l = parseInt(s.attr("data-dp"), 10);
                    else if (null !== i.decimalPlaces) l = i.decimalPlaces;
                    else {
                        var d = s.text().indexOf(i.decimalPoint);
                        l = d > -1 ? s.text().length - (d + 1) : 0;
                    }
                    s.css("counter", o),
                        i.fade && s.css("opacity", 0),
                        s.animate(
                            { counter: e, opacity: 1 },
                            {
                                easing: i.easing,
                                duration: c,
                                step: function (t) {
                                    s.html(n(t * e, l));
                                },
                                complete: function () {
                                    s.css("counter", null), s.html(n(e, l)), i.complete && i.complete(s);
                                },
                            }
                        );
                });
            });
    })(jQuery),
    $(document).ready(function () {
        !(function (t) {
            t(window).on("load", function () {
                t("#menu a, #menu__mobile a, a[href='#top'],a[rel='m_PageScroll2id'], .top").mPageScroll2id({ layout: "auto", offset: 10, highlightSelector: "#menu a" }),
                    t("a[rel='next']").click(function (e) {
                        e.preventDefault();
                        var i = t(this).parent().parent("section").next().attr("id");
                        t.mPageScroll2id("scrollTo", i);
                    });
            });
        })(jQuery),
            $(function () {
                $(".top").click(function () {
                    $("body,html").animate({ scrollTop: 0 }, 800);
                });
            });

        new Headhesive(".header__panel", { offset: 20 });

        const t = document.querySelector("#menu__togle"),
            e = document.querySelector("#mobile__nav");
        (t.onclick = function () {
            t.classList.toggle("menu-icon-active"), e.classList.toggle("mobile-nav--active");
        }),
        $(".mobile__link-close").click(function () {
            t.classList.toggle("menu-icon-active"), e.classList.toggle("mobile-nav--active");
        });
        $(t).on('click', function() {
            $('body').toggleClass('headhesive-active');
        });
    }),
    $(document).ready(function () {
        $(".header__carousel").slick({ autoplay:true, autoplaySpeed: 4e3, speed: 400, arrows: !1, dots: !0 }),
            $(".header__bottom-brends").slick({
                autoplay: !0,
                autoplaySpeed: 3e3,
                speed: 600,
                arrows: !0,
                dots: !1,
                infinite: !0,
                slidesToShow: 1,
                variableWidth: !0,
                responsive: [
                    { breakpoint: 590, settings: { arrows: !1 } },
                    { breakpoint: 425, settings: { slidesToShow: 2, arrows: !1 } },
                ],
            }),
            $(".block__services-mobile").slick({
                autoplaySpeed: 3e3,
                speed: 600,
                arrows: !1,
                dots: !0,
                infinite: !0,
                slidesToShow: 2,
                dotsClass: "slick-dots slider__dots",
                responsive: [{ breakpoint: 590, settings: { slidesToShow: 1, dotsClass: "slick-dots slider__dots" } }],
            }),
            $(".company__carousel").slick({ autoplay: !0, autoplaySpeed: 3e3, speed: 600, arrows: !0, dots: !1, infinite: !0, slidesToShow: 1, prevArrow: '<div class="prev"></div>', nextArrow: '<div class="next"></div>' }),
            $(".block__advantage-mobile").slick({
                autoplaySpeed: 3e3,
                speed: 600,
                arrows: !1,
                dots: true,
                infinite: !0,
                slidesToShow: 1,
                dotsClass: "slick-dots slider__dots-advantage",
                responsive: [{ breakpoint: 590, settings: { dotsClass: "slick-dots slider__dots-advantage" } }],
            }),
            $(".questions__accordion-mobile").slick({
                autoplay: false,
                autoplaySpeed: 3e3,
                speed: 600,
                arrows: !1,
                dots: !0,
                infinite: !0,
                slidesToShow: 1,
                dotsClass: "slick-dots slider__dots-accordion",
                responsive: [{ breakpoint: 590, settings: { dotsClass: "slick-dots slider__dots-accordion" } }],
            }),
            $(".block__partners-mobile").slick({
                // autoplay: !0,
                autoplay:false,
                autoplaySpeed: 3e3,
                speed: 600,
                arrows: !1,
                dots: !1,
                infinite: !0,
                slidesToShow: 4,
                responsive: [
                    { breakpoint: 650, settings: { slidesToShow: 3 } },
                    { breakpoint: 510, settings: { slidesToShow: 2 } },
                ],
            });
    }),
    $(document).ready(function () {
        var t = !0;
        $(window).on("scroll", function () {
            if (!t) return !1;
            var e = $(window).scrollTop(),
                i = $(".about").offset().top;
            console.log(e + 100 + " " + i), e + 100 >= i && ($(".number").spincrement({ thousandSeparator: "", duration: 3500 }), (t = !1));
        });
    }),
    $(document).ready(function () {
        $(".tab_item").not(":first").hide(),
            $(".prices__block-products .tab")
                .click(function () {
                    $(".prices__block-products .tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab"), $(".tab_item").hide().eq($(this).index()).fadeIn();
                })
                .eq(0)
                .addClass("active-tab");
    }),
    $(document).ready(function () {
        $(".beefup").beefup({ openSingle: !0 }), $(".owl-price").owlCarousel({ items: 1, loop: !0, autoplay: !1, autoplayTimeout: 5e3 });
    }),
    $(document).ready(function () {
        var t = $(".modal__overlay"),
            e = $(".open_modal"),
            i = $(".modal__close, .modal__overlay");
        $(".modal");
        e.click(function (e) {
            e.preventDefault();
            var i = $(this).attr("href"),
                s = $(this).attr("data-title"),
                n = $(this).attr("data-desc");
            $(".modal__title--target").empty(),
                $(".modal__desc--target").empty(),
                $(".modal__title--target").append(s),
                $(".modal__desc--target").append(n),
                t.fadeIn(100, function () {
                    $(i).css("display", "block").animate({ opacity: 1 }, 100);
                });
        }),
            i.click(function () {
                $(this)
                    .parents(".modal")
                    .animate({ opacity: 0 }, 100, function () {
                        $(this).css("display", "none"), t.fadeOut(100);
                    });
            });
    }),
    $(document).ready(function () {
        $("select").niceSelect();
    }),
    AOS.init(),
    AOS.init({
        disable: !1,
        startEvent: "DOMContentLoaded",
        initClassName: "aos-init",
        animatedClassName: "aos-animate",
        useClassNames: !1,
        disableMutationObserver: !1,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 110,
        delay: 0,
        duration: 500,
        easing: "ease",
        once: !0,
        mirror: !1,
        anchorPlacement: "top-bottom",
    }),
    (function (t, e, i, s) {
        function n(e, i) {
            (this.settings = null),
                (this.options = t.extend({}, n.Defaults, i)),
                (this.$element = t(e)),
                (this._handlers = {}),
                (this._plugins = {}),
                (this._supress = {}),
                (this._current = null),
                (this._speed = null),
                (this._coordinates = []),
                (this._breakpoint = null),
                (this._width = null),
                (this._items = []),
                (this._clones = []),
                (this._mergers = []),
                (this._widths = []),
                (this._invalidated = {}),
                (this._pipe = []),
                (this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }),
                (this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }),
                t.each(
                    ["onResize", "onThrottledResize"],
                    t.proxy(function (e, i) {
                        this._handlers[i] = t.proxy(this[i], this);
                    }, this)
                ),
                t.each(
                    n.Plugins,
                    t.proxy(function (t, e) {
                        this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
                    }, this)
                ),
                t.each(
                    n.Workers,
                    t.proxy(function (e, i) {
                        this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) });
                    }, this)
                ),
                this.setup(),
                this.initialize();
        }
        (n.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            checkVisibility: !0,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: e,
            fallbackEasing: "swing",
            slideTransition: "",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab",
        }),
            (n.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
            (n.Type = { Event: "event", State: "state" }),
            (n.Plugins = {}),
            (n.Workers = [
                {
                    filter: ["width", "settings"],
                    run: function () {
                        this._width = this.$element.width();
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        t.current = this._items && this._items[this.relative(this._current)];
                    },
                },
                {
                    filter: ["items", "settings"],
                    run: function () {
                        this.$stage.children(".cloned").remove();
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        var e = this.settings.margin || "",
                            i = !this.settings.autoWidth,
                            s = this.settings.rtl,
                            n = { width: "auto", "margin-left": s ? e : "", "margin-right": s ? "" : e };
                        !i && this.$stage.children().css(n), (t.css = n);
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                            i = null,
                            s = this._items.length,
                            n = !this.settings.autoWidth,
                            o = [];
                        for (t.items = { merge: !1, width: e }; s--; )
                            (i = this._mergers[s]), (i = (this.settings.mergeFit && Math.min(i, this.settings.items)) || i), (t.items.merge = i > 1 || t.items.merge), (o[s] = n ? e * i : this._items[s].width());
                        this._widths = o;
                    },
                },
                {
                    filter: ["items", "settings"],
                    run: function () {
                        var e = [],
                            i = this._items,
                            s = this.settings,
                            n = Math.max(2 * s.items, 4),
                            o = 2 * Math.ceil(i.length / 2),
                            a = s.loop && i.length ? (s.rewind ? n : Math.max(n, o)) : 0,
                            r = "",
                            l = "";
                        for (a /= 2; a > 0; )
                            e.push(this.normalize(e.length / 2, !0)), (r += i[e[e.length - 1]][0].outerHTML), e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), (l = i[e[e.length - 1]][0].outerHTML + l), (a -= 1);
                        (this._clones = e), t(r).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage);
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function () {
                        for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, s = 0, n = 0, o = []; ++i < e; )
                            (s = o[i - 1] || 0), (n = this._widths[this.relative(i)] + this.settings.margin), o.push(s + n * t);
                        this._coordinates = o;
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function () {
                        var t = this.settings.stagePadding,
                            e = this._coordinates,
                            i = { width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t, "padding-left": t || "", "padding-right": t || "" };
                        this.$stage.css(i);
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        var e = this._coordinates.length,
                            i = !this.settings.autoWidth,
                            s = this.$stage.children();
                        if (i && t.items.merge) for (; e--; ) (t.css.width = this._widths[this.relative(e)]), s.eq(e).css(t.css);
                        else i && ((t.css.width = t.items.width), s.css(t.css));
                    },
                },
                {
                    filter: ["items"],
                    run: function () {
                        this._coordinates.length < 1 && this.$stage.removeAttr("style");
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        (t.current = t.current ? this.$stage.children().index(t.current) : 0), (t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current))), this.reset(t.current);
                    },
                },
                {
                    filter: ["position"],
                    run: function () {
                        this.animate(this.coordinates(this._current));
                    },
                },
                {
                    filter: ["width", "position", "items", "settings"],
                    run: function () {
                        var t,
                            e,
                            i,
                            s,
                            n = this.settings.rtl ? 1 : -1,
                            o = 2 * this.settings.stagePadding,
                            a = this.coordinates(this.current()) + o,
                            r = a + this.width() * n,
                            l = [];
                        for (i = 0, s = this._coordinates.length; i < s; i++)
                            (t = this._coordinates[i - 1] || 0), (e = Math.abs(this._coordinates[i]) + o * n), ((this.op(t, "<=", a) && this.op(t, ">", r)) || (this.op(e, "<", a) && this.op(e, ">", r))) && l.push(i);
                        this.$stage.children(".active").removeClass("active"),
                            this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"),
                            this.$stage.children(".center").removeClass("center"),
                            this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
                    },
                },
            ]),
            (n.prototype.initializeStage = function () {
                (this.$stage = this.$element.find("." + this.settings.stageClass)),
                    this.$stage.length ||
                        (this.$element.addClass(this.options.loadingClass),
                        (this.$stage = t("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(t("<div/>", { class: this.settings.stageOuterClass }))),
                        this.$element.append(this.$stage.parent()));
            }),
            (n.prototype.initializeItems = function () {
                var e = this.$element.find(".owl-item");
                if (e.length)
                    return (
                        (this._items = e.get().map(function (e) {
                            return t(e);
                        })),
                        (this._mergers = this._items.map(function () {
                            return 1;
                        })),
                        void this.refresh()
                    );
                this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
            }),
            (n.prototype.initialize = function () {
                var t, e, i;
                (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) &&
                    ((t = this.$element.find("img")), (e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s), (i = this.$element.children(e).width()), t.length && i <= 0 && this.preloadAutoWidthImages(t));
                this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
            }),
            (n.prototype.isVisible = function () {
                return !this.settings.checkVisibility || this.$element.is(":visible");
            }),
            (n.prototype.setup = function () {
                var e = this.viewport(),
                    i = this.options.responsive,
                    s = -1,
                    n = null;
                i
                    ? (t.each(i, function (t) {
                          t <= e && t > s && (s = Number(t));
                      }),
                      "function" == typeof (n = t.extend({}, this.options, i[s])).stagePadding && (n.stagePadding = n.stagePadding()),
                      delete n.responsive,
                      n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + s)))
                    : (n = t.extend({}, this.options)),
                    this.trigger("change", { property: { name: "settings", value: n } }),
                    (this._breakpoint = s),
                    (this.settings = n),
                    this.invalidate("settings"),
                    this.trigger("changed", { property: { name: "settings", value: this.settings } });
            }),
            (n.prototype.optionsLogic = function () {
                this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
            }),
            (n.prototype.prepare = function (e) {
                var i = this.trigger("prepare", { content: e });
                return (
                    i.data ||
                        (i.data = t("<" + this.settings.itemElement + "/>")
                            .addClass(this.options.itemClass)
                            .append(e)),
                    this.trigger("prepared", { content: i.data }),
                    i.data
                );
            }),
            (n.prototype.update = function () {
                for (
                    var e = 0,
                        i = this._pipe.length,
                        s = t.proxy(function (t) {
                            return this[t];
                        }, this._invalidated),
                        n = {};
                    e < i;

                )
                    (this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
                (this._invalidated = {}), !this.is("valid") && this.enter("valid");
            }),
            (n.prototype.width = function (t) {
                switch ((t = t || n.Width.Default)) {
                    case n.Width.Inner:
                    case n.Width.Outer:
                        return this._width;
                    default:
                        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
                }
            }),
            (n.prototype.refresh = function () {
                this.enter("refreshing"),
                    this.trigger("refresh"),
                    this.setup(),
                    this.optionsLogic(),
                    this.$element.addClass(this.options.refreshClass),
                    this.update(),
                    this.$element.removeClass(this.options.refreshClass),
                    this.leave("refreshing"),
                    this.trigger("refreshed");
            }),
            (n.prototype.onThrottledResize = function () {
                e.clearTimeout(this.resizeTimer), (this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
            }),
            (n.prototype.onResize = function () {
                return (
                    !!this._items.length &&
                    this._width !== this.$element.width() &&
                    !!this.isVisible() &&
                    (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
                );
            }),
            (n.prototype.registerEventHandlers = function () {
                t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)),
                    !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize),
                    this.settings.mouseDrag &&
                        (this.$element.addClass(this.options.dragClass),
                        this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)),
                        this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                            return !1;
                        })),
                    this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)));
            }),
            (n.prototype.onDragStart = function (e) {
                var s = null;
                3 !== e.which &&
                    (t.support.transform
                        ? (s = {
                              x: (s = this.$stage
                                  .css("transform")
                                  .replace(/.*\(|\)| /g, "")
                                  .split(","))[16 === s.length ? 12 : 4],
                              y: s[16 === s.length ? 13 : 5],
                          })
                        : ((s = this.$stage.position()), (s = { x: this.settings.rtl ? s.left + this.$stage.width() - this.width() + this.settings.margin : s.left, y: s.top })),
                    this.is("animating") && (t.support.transform ? this.animate(s.x) : this.$stage.stop(), this.invalidate("position")),
                    this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type),
                    this.speed(0),
                    (this._drag.time = new Date().getTime()),
                    (this._drag.target = t(e.target)),
                    (this._drag.stage.start = s),
                    (this._drag.stage.current = s),
                    (this._drag.pointer = this.pointer(e)),
                    t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)),
                    t(i).one(
                        "mousemove.owl.core touchmove.owl.core",
                        t.proxy(function (e) {
                            var s = this.difference(this._drag.pointer, this.pointer(e));
                            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), (Math.abs(s.x) < Math.abs(s.y) && this.is("valid")) || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"));
                        }, this)
                    ));
            }),
            (n.prototype.onDragMove = function (t) {
                var e = null,
                    i = null,
                    s = null,
                    n = this.difference(this._drag.pointer, this.pointer(t)),
                    o = this.difference(this._drag.stage.start, n);
                this.is("dragging") &&
                    (t.preventDefault(),
                    this.settings.loop
                        ? ((e = this.coordinates(this.minimum())), (i = this.coordinates(this.maximum() + 1) - e), (o.x = ((((o.x - e) % i) + i) % i) + e))
                        : ((e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
                          (i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
                          (s = this.settings.pullDrag ? (-1 * n.x) / 5 : 0),
                          (o.x = Math.max(Math.min(o.x, e + s), i + s))),
                    (this._drag.stage.current = o),
                    this.animate(o.x));
            }),
            (n.prototype.onDragEnd = function (e) {
                var s = this.difference(this._drag.pointer, this.pointer(e)),
                    n = this._drag.stage.current,
                    o = (s.x > 0) ^ this.settings.rtl ? "left" : "right";
                t(i).off(".owl.core"),
                    this.$element.removeClass(this.options.grabClass),
                    ((0 !== s.x && this.is("dragging")) || !this.is("valid")) &&
                        (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                        this.current(this.closest(n.x, 0 !== s.x ? o : this._drag.direction)),
                        this.invalidate("position"),
                        this.update(),
                        (this._drag.direction = o),
                        (Math.abs(s.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
                            this._drag.target.one("click.owl.core", function () {
                                return !1;
                            })),
                    this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
            }),
            (n.prototype.closest = function (e, i) {
                var n = -1,
                    o = this.width(),
                    a = this.coordinates();
                return (
                    this.settings.freeDrag ||
                        t.each(
                            a,
                            t.proxy(function (t, r) {
                                return (
                                    "left" === i && e > r - 30 && e < r + 30
                                        ? (n = t)
                                        : "right" === i && e > r - o - 30 && e < r - o + 30
                                        ? (n = t + 1)
                                        : this.op(e, "<", r) && this.op(e, ">", a[t + 1] !== s ? a[t + 1] : r - o) && (n = "left" === i ? t + 1 : t),
                                    -1 === n
                                );
                            }, this)
                        ),
                    this.settings.loop || (this.op(e, ">", a[this.minimum()]) ? (n = e = this.minimum()) : this.op(e, "<", a[this.maximum()]) && (n = e = this.maximum())),
                    n
                );
            }),
            (n.prototype.animate = function (e) {
                var i = this.speed() > 0;
                this.is("animating") && this.onTransitionEnd(),
                    i && (this.enter("animating"), this.trigger("translate")),
                    t.support.transform3d && t.support.transition
                        ? this.$stage.css({ transform: "translate3d(" + e + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") })
                        : i
                        ? this.$stage.animate({ left: e + "px" }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this))
                        : this.$stage.css({ left: e + "px" });
            }),
            (n.prototype.is = function (t) {
                return this._states.current[t] && this._states.current[t] > 0;
            }),
            (n.prototype.current = function (t) {
                if (t === s) return this._current;
                if (0 === this._items.length) return s;
                if (((t = this.normalize(t)), this._current !== t)) {
                    var e = this.trigger("change", { property: { name: "position", value: t } });
                    e.data !== s && (t = this.normalize(e.data)), (this._current = t), this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
                }
                return this._current;
            }),
            (n.prototype.invalidate = function (e) {
                return (
                    "string" === t.type(e) && ((this._invalidated[e] = !0), this.is("valid") && this.leave("valid")),
                    t.map(this._invalidated, function (t, e) {
                        return e;
                    })
                );
            }),
            (n.prototype.reset = function (t) {
                (t = this.normalize(t)) !== s && ((this._speed = 0), (this._current = t), this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]));
            }),
            (n.prototype.normalize = function (t, e) {
                var i = this._items.length,
                    n = e ? 0 : this._clones.length;
                return !this.isNumeric(t) || i < 1 ? (t = s) : (t < 0 || t >= i + n) && (t = ((((t - n / 2) % i) + i) % i) + n / 2), t;
            }),
            (n.prototype.relative = function (t) {
                return (t -= this._clones.length / 2), this.normalize(t, !0);
            }),
            (n.prototype.maximum = function (t) {
                var e,
                    i,
                    s,
                    n = this.settings,
                    o = this._coordinates.length;
                if (n.loop) o = this._clones.length / 2 + this._items.length - 1;
                else if (n.autoWidth || n.merge) {
                    if ((e = this._items.length)) for (i = this._items[--e].width(), s = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > s); );
                    o = e + 1;
                } else o = n.center ? this._items.length - 1 : this._items.length - n.items;
                return t && (o -= this._clones.length / 2), Math.max(o, 0);
            }),
            (n.prototype.minimum = function (t) {
                return t ? 0 : this._clones.length / 2;
            }),
            (n.prototype.items = function (t) {
                return t === s ? this._items.slice() : ((t = this.normalize(t, !0)), this._items[t]);
            }),
            (n.prototype.mergers = function (t) {
                return t === s ? this._mergers.slice() : ((t = this.normalize(t, !0)), this._mergers[t]);
            }),
            (n.prototype.clones = function (e) {
                var i = this._clones.length / 2,
                    n = i + this._items.length,
                    o = function (t) {
                        return t % 2 == 0 ? n + t / 2 : i - (t + 1) / 2;
                    };
                return e === s
                    ? t.map(this._clones, function (t, e) {
                          return o(e);
                      })
                    : t.map(this._clones, function (t, i) {
                          return t === e ? o(i) : null;
                      });
            }),
            (n.prototype.speed = function (t) {
                return t !== s && (this._speed = t), this._speed;
            }),
            (n.prototype.coordinates = function (e) {
                var i,
                    n = 1,
                    o = e - 1;
                return e === s
                    ? t.map(
                          this._coordinates,
                          t.proxy(function (t, e) {
                              return this.coordinates(e);
                          }, this)
                      )
                    : (this.settings.center ? (this.settings.rtl && ((n = -1), (o = e + 1)), (i = this._coordinates[e]), (i += ((this.width() - i + (this._coordinates[o] || 0)) / 2) * n)) : (i = this._coordinates[o] || 0),
                      (i = Math.ceil(i)));
            }),
            (n.prototype.duration = function (t, e, i) {
                return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed);
            }),
            (n.prototype.to = function (t, e) {
                var i = this.current(),
                    s = null,
                    n = t - this.relative(i),
                    o = (n > 0) - (n < 0),
                    a = this._items.length,
                    r = this.minimum(),
                    l = this.maximum();
                this.settings.loop
                    ? (!this.settings.rewind && Math.abs(n) > a / 2 && (n += -1 * o * a), (s = (((((t = i + n) - r) % a) + a) % a) + r) !== t && s - n <= l && s - n > 0 && ((i = s - n), (t = s), this.reset(i)))
                    : this.settings.rewind
                    ? (t = ((t % (l += 1)) + l) % l)
                    : (t = Math.max(r, Math.min(l, t))),
                    this.speed(this.duration(i, t, e)),
                    this.current(t),
                    this.isVisible() && this.update();
            }),
            (n.prototype.next = function (t) {
                (t = t || !1), this.to(this.relative(this.current()) + 1, t);
            }),
            (n.prototype.prev = function (t) {
                (t = t || !1), this.to(this.relative(this.current()) - 1, t);
            }),
            (n.prototype.onTransitionEnd = function (t) {
                if (t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
                this.leave("animating"), this.trigger("translated");
            }),
            (n.prototype.viewport = function () {
                var s;
                return (
                    this.options.responsiveBaseElement !== e
                        ? (s = t(this.options.responsiveBaseElement).width())
                        : e.innerWidth
                        ? (s = e.innerWidth)
                        : i.documentElement && i.documentElement.clientWidth
                        ? (s = i.documentElement.clientWidth)
                        : console.warn("Can not detect viewport width."),
                    s
                );
            }),
            (n.prototype.replace = function (e) {
                this.$stage.empty(),
                    (this._items = []),
                    e && (e = e instanceof jQuery ? e : t(e)),
                    this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)),
                    e
                        .filter(function () {
                            return 1 === this.nodeType;
                        })
                        .each(
                            t.proxy(function (t, e) {
                                (e = this.prepare(e)), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
                            }, this)
                        ),
                    this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                    this.invalidate("items");
            }),
            (n.prototype.add = function (e, i) {
                var n = this.relative(this._current);
                (i = i === s ? this._items.length : this.normalize(i, !0)),
                    (e = e instanceof jQuery ? e : t(e)),
                    this.trigger("add", { content: e, position: i }),
                    (e = this.prepare(e)),
                    0 === this._items.length || i === this._items.length
                        ? (0 === this._items.length && this.$stage.append(e),
                          0 !== this._items.length && this._items[i - 1].after(e),
                          this._items.push(e),
                          this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1))
                        : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
                    this._items[n] && this.reset(this._items[n].index()),
                    this.invalidate("items"),
                    this.trigger("added", { content: e, position: i });
            }),
            (n.prototype.remove = function (t) {
                (t = this.normalize(t, !0)) !== s &&
                    (this.trigger("remove", { content: this._items[t], position: t }),
                    this._items[t].remove(),
                    this._items.splice(t, 1),
                    this._mergers.splice(t, 1),
                    this.invalidate("items"),
                    this.trigger("removed", { content: null, position: t }));
            }),
            (n.prototype.preloadAutoWidthImages = function (e) {
                e.each(
                    t.proxy(function (e, i) {
                        this.enter("pre-loading"),
                            (i = t(i)),
                            t(new Image())
                                .one(
                                    "load",
                                    t.proxy(function (t) {
                                        i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
                                    }, this)
                                )
                                .attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"));
                    }, this)
                );
            }),
            (n.prototype.destroy = function () {
                for (var s in (this.$element.off(".owl.core"),
                this.$stage.off(".owl.core"),
                t(i).off(".owl.core"),
                !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)),
                this._plugins))
                    this._plugins[s].destroy();
                this.$stage.children(".cloned").remove(),
                    this.$stage.unwrap(),
                    this.$stage.children().contents().unwrap(),
                    this.$stage.children().unwrap(),
                    this.$stage.remove(),
                    this.$element
                        .removeClass(this.options.refreshClass)
                        .removeClass(this.options.loadingClass)
                        .removeClass(this.options.loadedClass)
                        .removeClass(this.options.rtlClass)
                        .removeClass(this.options.dragClass)
                        .removeClass(this.options.grabClass)
                        .attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
                        .removeData("owl.carousel");
            }),
            (n.prototype.op = function (t, e, i) {
                var s = this.settings.rtl;
                switch (e) {
                    case "<":
                        return s ? t > i : t < i;
                    case ">":
                        return s ? t < i : t > i;
                    case ">=":
                        return s ? t <= i : t >= i;
                    case "<=":
                        return s ? t >= i : t <= i;
                }
            }),
            (n.prototype.on = function (t, e, i, s) {
                t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i);
            }),
            (n.prototype.off = function (t, e, i, s) {
                t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i);
            }),
            (n.prototype.trigger = function (e, i, s, o, a) {
                var r = { item: { count: this._items.length, index: this.current() } },
                    l = t.camelCase(
                        t
                            .grep(["on", e, s], function (t) {
                                return t;
                            })
                            .join("-")
                            .toLowerCase()
                    ),
                    c = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({ relatedTarget: this }, r, i));
                return (
                    this._supress[e] ||
                        (t.each(this._plugins, function (t, e) {
                            e.onTrigger && e.onTrigger(c);
                        }),
                        this.register({ type: n.Type.Event, name: e }),
                        this.$element.trigger(c),
                        this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)),
                    c
                );
            }),
            (n.prototype.enter = function (e) {
                t.each(
                    [e].concat(this._states.tags[e] || []),
                    t.proxy(function (t, e) {
                        this._states.current[e] === s && (this._states.current[e] = 0), this._states.current[e]++;
                    }, this)
                );
            }),
            (n.prototype.leave = function (e) {
                t.each(
                    [e].concat(this._states.tags[e] || []),
                    t.proxy(function (t, e) {
                        this._states.current[e]--;
                    }, this)
                );
            }),
            (n.prototype.register = function (e) {
                if (e.type === n.Type.Event) {
                    if ((t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl)) {
                        var i = t.event.special[e.name]._default;
                        (t.event.special[e.name]._default = function (t) {
                            return !i || !i.apply || (t.namespace && -1 !== t.namespace.indexOf("owl")) ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments);
                        }),
                            (t.event.special[e.name].owl = !0);
                    }
                } else
                    e.type === n.Type.State &&
                        (this._states.tags[e.name] ? (this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags)) : (this._states.tags[e.name] = e.tags),
                        (this._states.tags[e.name] = t.grep(
                            this._states.tags[e.name],
                            t.proxy(function (i, s) {
                                return t.inArray(i, this._states.tags[e.name]) === s;
                            }, this)
                        )));
            }),
            (n.prototype.suppress = function (e) {
                t.each(
                    e,
                    t.proxy(function (t, e) {
                        this._supress[e] = !0;
                    }, this)
                );
            }),
            (n.prototype.release = function (e) {
                t.each(
                    e,
                    t.proxy(function (t, e) {
                        delete this._supress[e];
                    }, this)
                );
            }),
            (n.prototype.pointer = function (t) {
                var i = { x: null, y: null };
                return (
                    (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX
                        ? ((i.x = t.pageX), (i.y = t.pageY))
                        : ((i.x = t.clientX), (i.y = t.clientY)),
                    i
                );
            }),
            (n.prototype.isNumeric = function (t) {
                return !isNaN(parseFloat(t));
            }),
            (n.prototype.difference = function (t, e) {
                return { x: t.x - e.x, y: t.y - e.y };
            }),
            (t.fn.owlCarousel = function (e) {
                var i = Array.prototype.slice.call(arguments, 1);
                return this.each(function () {
                    var s = t(this),
                        o = s.data("owl.carousel");
                    o ||
                        ((o = new n(this, "object" == typeof e && e)),
                        s.data("owl.carousel", o),
                        t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, i) {
                            o.register({ type: n.Type.Event, name: i }),
                                o.$element.on(
                                    i + ".owl.carousel.core",
                                    t.proxy(function (t) {
                                        t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]));
                                    }, o)
                                );
                        })),
                        "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i);
                });
            }),
            (t.fn.owlCarousel.Constructor = n);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, i, s) {
        var n = function (e) {
            (this._core = e),
                (this._interval = null),
                (this._visible = null),
                (this._handlers = {
                    "initialized.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoRefresh && this.watch();
                    }, this),
                }),
                (this._core.options = t.extend({}, n.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (n.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
            (n.prototype.watch = function () {
                this._interval || ((this._visible = this._core.isVisible()), (this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
            }),
            (n.prototype.refresh = function () {
                this._core.isVisible() !== this._visible && ((this._visible = !this._visible), this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
            }),
            (n.prototype.destroy = function () {
                var t, i;
                for (t in (e.clearInterval(this._interval), this._handlers)) this._core.$element.off(t, this._handlers[t]);
                for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, i, s) {
        var n = function (e) {
            (this._core = e),
                (this._loaded = []),
                (this._handlers = {
                    "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
                        if (e.namespace && this._core.settings && this._core.settings.lazyLoad && ((e.property && "position" == e.property.name) || "initialized" == e.type)) {
                            var i = this._core.settings,
                                s = (i.center && Math.ceil(i.items / 2)) || i.items,
                                n = (i.center && -1 * s) || 0,
                                o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + n,
                                a = this._core.clones().length,
                                r = t.proxy(function (t, e) {
                                    this.load(e);
                                }, this);
                            for (i.lazyLoadEager > 0 && ((s += i.lazyLoadEager), i.loop && ((o -= i.lazyLoadEager), s++)); n++ < s; ) this.load(a / 2 + this._core.relative(o)), a && t.each(this._core.clones(this._core.relative(o)), r), o++;
                        }
                    }, this),
                }),
                (this._core.options = t.extend({}, n.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (n.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
            (n.prototype.load = function (i) {
                var s = this._core.$stage.children().eq(i),
                    n = s && s.find(".owl-lazy");
                !n ||
                    t.inArray(s.get(0), this._loaded) > -1 ||
                    (n.each(
                        t.proxy(function (i, s) {
                            var n,
                                o = t(s),
                                a = (e.devicePixelRatio > 1 && o.attr("data-src-retina")) || o.attr("data-src") || o.attr("data-srcset");
                            this._core.trigger("load", { element: o, url: a }, "lazy"),
                                o.is("img")
                                    ? o
                                          .one(
                                              "load.owl.lazy",
                                              t.proxy(function () {
                                                  o.css("opacity", 1), this._core.trigger("loaded", { element: o, url: a }, "lazy");
                                              }, this)
                                          )
                                          .attr("src", a)
                                    : o.is("source")
                                    ? o
                                          .one(
                                              "load.owl.lazy",
                                              t.proxy(function () {
                                                  this._core.trigger("loaded", { element: o, url: a }, "lazy");
                                              }, this)
                                          )
                                          .attr("srcset", a)
                                    : (((n = new Image()).onload = t.proxy(function () {
                                          o.css({ "background-image": 'url("' + a + '")', opacity: "1" }), this._core.trigger("loaded", { element: o, url: a }, "lazy");
                                      }, this)),
                                      (n.src = a));
                        }, this)
                    ),
                    this._loaded.push(s.get(0)));
            }),
            (n.prototype.destroy = function () {
                var t, e;
                for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Lazy = n);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, i, s) {
        var n = function (i) {
            (this._core = i),
                (this._previousHeight = null),
                (this._handlers = {
                    "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoHeight && this.update();
                    }, this),
                    "changed.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update();
                    }, this),
                    "loaded.owl.lazy": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
                    }, this),
                }),
                (this._core.options = t.extend({}, n.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                (this._intervalId = null);
            var s = this;
            t(e).on("load", function () {
                s._core.settings.autoHeight && s.update();
            }),
                t(e).resize(function () {
                    s._core.settings.autoHeight &&
                        (null != s._intervalId && clearTimeout(s._intervalId),
                        (s._intervalId = setTimeout(function () {
                            s.update();
                        }, 250)));
                });
        };
        (n.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (n.prototype.update = function () {
                var e = this._core._current,
                    i = e + this._core.settings.items,
                    s = this._core.settings.lazyLoad,
                    n = this._core.$stage.children().toArray().slice(e, i),
                    o = [],
                    a = 0;
                t.each(n, function (e, i) {
                    o.push(t(i).height());
                }),
                    (a = Math.max.apply(null, o)) <= 1 && s && this._previousHeight && (a = this._previousHeight),
                    (this._previousHeight = a),
                    this._core.$stage.parent().height(a).addClass(this._core.settings.autoHeightClass);
            }),
            (n.prototype.destroy = function () {
                var t, e;
                for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, i, s) {
        var n = function (e) {
            (this._core = e),
                (this._videos = {}),
                (this._playing = null),
                (this._handlers = {
                    "initialized.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
                    }, this),
                    "resize.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault();
                    }, this),
                    "refreshed.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
                    }, this),
                    "changed.owl.carousel": t.proxy(function (t) {
                        t.namespace && "position" === t.property.name && this._playing && this.stop();
                    }, this),
                    "prepared.owl.carousel": t.proxy(function (e) {
                        if (e.namespace) {
                            var i = t(e.content).find(".owl-video");
                            i.length && (i.css("display", "none"), this.fetch(i, t(e.content)));
                        }
                    }, this),
                }),
                (this._core.options = t.extend({}, n.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                this._core.$element.on(
                    "click.owl.video",
                    ".owl-video-play-icon",
                    t.proxy(function (t) {
                        this.play(t);
                    }, this)
                );
        };
        (n.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (n.prototype.fetch = function (t, e) {
                var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                    s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                    n = t.attr("data-width") || this._core.settings.videoWidth,
                    o = t.attr("data-height") || this._core.settings.videoHeight,
                    a = t.attr("href");
                if (!a) throw new Error("Missing video URL.");
                if (
                    (s = a.match(
                        /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                    ))[3].indexOf("youtu") > -1
                )
                    i = "youtube";
                else if (s[3].indexOf("vimeo") > -1) i = "vimeo";
                else {
                    if (!(s[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                    i = "vzaar";
                }
                (s = s[6]), (this._videos[a] = { type: i, id: s, width: n, height: o }), e.attr("data-video", a), this.thumbnail(t, this._videos[a]);
            }),
            (n.prototype.thumbnail = function (e, i) {
                var s,
                    n,
                    o = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
                    a = e.find("img"),
                    r = "src",
                    l = "",
                    c = this._core.settings,
                    d = function (i) {
                        '<div class="owl-video-play-icon"></div>',
                            (s = c.lazyLoad ? t("<div/>", { class: "owl-video-tn " + l, srcType: i }) : t("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + i + ")" })),
                            e.after(s),
                            e.after('<div class="owl-video-play-icon"></div>');
                    };
                if ((e.wrap(t("<div/>", { class: "owl-video-wrapper", style: o })), this._core.settings.lazyLoad && ((r = "data-src"), (l = "owl-lazy")), a.length)) return d(a.attr(r)), a.remove(), !1;
                "youtube" === i.type
                    ? ((n = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg"), d(n))
                    : "vimeo" === i.type
                    ? t.ajax({
                          type: "GET",
                          url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (t) {
                              (n = t[0].thumbnail_large), d(n);
                          },
                      })
                    : "vzaar" === i.type &&
                      t.ajax({
                          type: "GET",
                          url: "//vzaar.com/api/videos/" + i.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (t) {
                              (n = t.framegrab_url), d(n);
                          },
                      });
            }),
            (n.prototype.stop = function () {
                this._core.trigger("stop", null, "video"),
                    this._playing.find(".owl-video-frame").remove(),
                    this._playing.removeClass("owl-video-playing"),
                    (this._playing = null),
                    this._core.leave("playing"),
                    this._core.trigger("stopped", null, "video");
            }),
            (n.prototype.play = function (e) {
                var i,
                    s = t(e.target).closest("." + this._core.settings.itemClass),
                    n = this._videos[s.attr("data-video")],
                    o = n.width || "100%",
                    a = n.height || this._core.$stage.height();
                this._playing ||
                    (this._core.enter("playing"),
                    this._core.trigger("play", null, "video"),
                    (s = this._core.items(this._core.relative(s.index()))),
                    this._core.reset(s.index()),
                    (i = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", a),
                    i.attr("width", o),
                    "youtube" === n.type
                        ? i.attr("src", "//www.youtube.com/embed/" + n.id + "?autoplay=1&rel=0&v=" + n.id)
                        : "vimeo" === n.type
                        ? i.attr("src", "//player.vimeo.com/video/" + n.id + "?autoplay=1")
                        : "vzaar" === n.type && i.attr("src", "//view.vzaar.com/" + n.id + "/player?autoplay=true"),
                    t(i).wrap('<div class="owl-video-frame" />').insertAfter(s.find(".owl-video")),
                    (this._playing = s.addClass("owl-video-playing")));
            }),
            (n.prototype.isInFullScreen = function () {
                var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
                return e && t(e).parent().hasClass("owl-video-frame");
            }),
            (n.prototype.destroy = function () {
                var t, e;
                for (t in (this._core.$element.off("click.owl.video"), this._handlers)) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Video = n);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, i, s) {
        var n = function (e) {
            (this.core = e),
                (this.core.options = t.extend({}, n.Defaults, this.core.options)),
                (this.swapping = !0),
                (this.previous = s),
                (this.next = s),
                (this.handlers = {
                    "change.owl.carousel": t.proxy(function (t) {
                        t.namespace && "position" == t.property.name && ((this.previous = this.core.current()), (this.next = t.property.value));
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                        t.namespace && (this.swapping = "translated" == t.type);
                    }, this),
                    "translate.owl.carousel": t.proxy(function (t) {
                        t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                    }, this),
                }),
                this.core.$element.on(this.handlers);
        };
        (n.Defaults = { animateOut: !1, animateIn: !1 }),
            (n.prototype.swap = function () {
                if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                    this.core.speed(0);
                    var e,
                        i = t.proxy(this.clear, this),
                        s = this.core.$stage.children().eq(this.previous),
                        n = this.core.$stage.children().eq(this.next),
                        o = this.core.settings.animateIn,
                        a = this.core.settings.animateOut;
                    this.core.current() !== this.previous &&
                        (a &&
                            ((e = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                            s
                                .one(t.support.animation.end, i)
                                .css({ left: e + "px" })
                                .addClass("animated owl-animated-out")
                                .addClass(a)),
                        o && n.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o));
                }
            }),
            (n.prototype.clear = function (e) {
                t(e.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
            }),
            (n.prototype.destroy = function () {
                var t, e;
                for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Animate = n);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, i, s) {
        var n = function (e) {
            (this._core = e),
                (this._call = null),
                (this._time = 0),
                (this._timeout = 0),
                (this._paused = !0),
                (this._handlers = {
                    "changed.owl.carousel": t.proxy(function (t) {
                        t.namespace && "settings" === t.property.name ? (this._core.settings.autoplay ? this.play() : this.stop()) : t.namespace && "position" === t.property.name && this._paused && (this._time = 0);
                    }, this),
                    "initialized.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoplay && this.play();
                    }, this),
                    "play.owl.autoplay": t.proxy(function (t, e, i) {
                        t.namespace && this.play(e, i);
                    }, this),
                    "stop.owl.autoplay": t.proxy(function (t) {
                        t.namespace && this.stop();
                    }, this),
                    "mouseover.owl.autoplay": t.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "mouseleave.owl.autoplay": t.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
                    }, this),
                    "touchstart.owl.core": t.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "touchend.owl.core": t.proxy(function () {
                        this._core.settings.autoplayHoverPause && this.play();
                    }, this),
                }),
                this._core.$element.on(this._handlers),
                (this._core.options = t.extend({}, n.Defaults, this._core.options));
        };
        (n.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
            (n.prototype._next = function (s) {
                (this._call = e.setTimeout(t.proxy(this._next, this, s), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read())),
                    this._core.is("interacting") || i.hidden || this._core.next(s || this._core.settings.autoplaySpeed);
            }),
            (n.prototype.read = function () {
                return new Date().getTime() - this._time;
            }),
            (n.prototype.play = function (i, s) {
                var n;
                this._core.is("rotating") || this._core.enter("rotating"),
                    (i = i || this._core.settings.autoplayTimeout),
                    (n = Math.min(this._time % (this._timeout || i), i)),
                    this._paused ? ((this._time = this.read()), (this._paused = !1)) : e.clearTimeout(this._call),
                    (this._time += (this.read() % i) - n),
                    (this._timeout = i),
                    (this._call = e.setTimeout(t.proxy(this._next, this, s), i - n));
            }),
            (n.prototype.stop = function () {
                this._core.is("rotating") && ((this._time = 0), (this._paused = !0), e.clearTimeout(this._call), this._core.leave("rotating"));
            }),
            (n.prototype.pause = function () {
                this._core.is("rotating") && !this._paused && ((this._time = this.read()), (this._paused = !0), e.clearTimeout(this._call));
            }),
            (n.prototype.destroy = function () {
                var t, e;
                for (t in (this.stop(), this._handlers)) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.autoplay = n);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, i, s) {
        "use strict";
        var n = function (e) {
            (this._core = e),
                (this._initialized = !1),
                (this._pages = []),
                (this._controls = {}),
                (this._templates = []),
                (this.$element = this._core.$element),
                (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
                (this._handlers = {
                    "prepared.owl.carousel": t.proxy(function (e) {
                        e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
                    }, this),
                    "added.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop());
                    }, this),
                    "remove.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1);
                    }, this),
                    "changed.owl.carousel": t.proxy(function (t) {
                        t.namespace && "position" == t.property.name && this.draw();
                    }, this),
                    "initialized.owl.carousel": t.proxy(function (t) {
                        t.namespace &&
                            !this._initialized &&
                            (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));
                    }, this),
                    "refreshed.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
                    }, this),
                }),
                (this._core.options = t.extend({}, n.Defaults, this._core.options)),
                this.$element.on(this._handlers);
        };
        (n.Defaults = {
            nav: !1,
            navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
        }),
            (n.prototype.initialize = function () {
                var e,
                    i = this._core.settings;
                for (e in ((this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled")),
                (this._controls.$previous = t("<" + i.navElement + ">")
                    .addClass(i.navClass[0])
                    .html(i.navText[0])
                    .prependTo(this._controls.$relative)
                    .on(
                        "click",
                        t.proxy(function (t) {
                            this.prev(i.navSpeed);
                        }, this)
                    )),
                (this._controls.$next = t("<" + i.navElement + ">")
                    .addClass(i.navClass[1])
                    .html(i.navText[1])
                    .appendTo(this._controls.$relative)
                    .on(
                        "click",
                        t.proxy(function (t) {
                            this.next(i.navSpeed);
                        }, this)
                    )),
                i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]),
                (this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled")),
                this._controls.$absolute.on(
                    "click",
                    "button",
                    t.proxy(function (e) {
                        var s = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                        e.preventDefault(), this.to(s, i.dotsSpeed);
                    }, this)
                ),
                this._overrides))
                    this._core[e] = t.proxy(this[e], this);
            }),
            (n.prototype.destroy = function () {
                var t, e, i, s, n;
                for (t in ((n = this._core.settings), this._handlers)) this.$element.off(t, this._handlers[t]);
                for (e in this._controls) "$relative" === e && n.navContainer ? this._controls[e].html("") : this._controls[e].remove();
                for (s in this.overides) this._core[s] = this._overrides[s];
                for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null);
            }),
            (n.prototype.update = function () {
                var t,
                    e,
                    i = this._core.clones().length / 2,
                    s = i + this._core.items().length,
                    n = this._core.maximum(!0),
                    o = this._core.settings,
                    a = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
                if (("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy))
                    for (this._pages = [], t = i, e = 0, 0; t < s; t++) {
                        if (e >= a || 0 === e) {
                            if ((this._pages.push({ start: Math.min(n, t - i), end: t - i + a - 1 }), Math.min(n, t - i) === n)) break;
                            (e = 0), 0;
                        }
                        e += this._core.mergers(this._core.relative(t));
                    }
            }),
            (n.prototype.draw = function () {
                var e,
                    i = this._core.settings,
                    s = this._core.items().length <= i.items,
                    n = this._core.relative(this._core.current()),
                    o = i.loop || i.rewind;
                this._controls.$relative.toggleClass("disabled", !i.nav || s),
                    i.nav && (this._controls.$previous.toggleClass("disabled", !o && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && n >= this._core.maximum(!0))),
                    this._controls.$absolute.toggleClass("disabled", !i.dots || s),
                    i.dots &&
                        ((e = this._pages.length - this._controls.$absolute.children().length),
                        i.dotsData && 0 !== e
                            ? this._controls.$absolute.html(this._templates.join(""))
                            : e > 0
                            ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0]))
                            : e < 0 && this._controls.$absolute.children().slice(e).remove(),
                        this._controls.$absolute.find(".active").removeClass("active"),
                        this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"));
            }),
            (n.prototype.onTrigger = function (e) {
                var i = this._core.settings;
                e.page = { index: t.inArray(this.current(), this._pages), count: this._pages.length, size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items) };
            }),
            (n.prototype.current = function () {
                var e = this._core.relative(this._core.current());
                return t
                    .grep(
                        this._pages,
                        t.proxy(function (t, i) {
                            return t.start <= e && t.end >= e;
                        }, this)
                    )
                    .pop();
            }),
            (n.prototype.getPosition = function (e) {
                var i,
                    s,
                    n = this._core.settings;
                return (
                    "page" == n.slideBy
                        ? ((i = t.inArray(this.current(), this._pages)), (s = this._pages.length), e ? ++i : --i, (i = this._pages[((i % s) + s) % s].start))
                        : ((i = this._core.relative(this._core.current())), (s = this._core.items().length), e ? (i += n.slideBy) : (i -= n.slideBy)),
                    i
                );
            }),
            (n.prototype.next = function (e) {
                t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
            }),
            (n.prototype.prev = function (e) {
                t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
            }),
            (n.prototype.to = function (e, i, s) {
                var n;
                !s && this._pages.length ? ((n = this._pages.length), t.proxy(this._overrides.to, this._core)(this._pages[((e % n) + n) % n].start, i)) : t.proxy(this._overrides.to, this._core)(e, i);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Navigation = n);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, i, s) {
        "use strict";
        var n = function (i) {
            (this._core = i),
                (this._hashes = {}),
                (this.$element = this._core.$element),
                (this._handlers = {
                    "initialized.owl.carousel": t.proxy(function (i) {
                        i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation");
                    }, this),
                    "prepared.owl.carousel": t.proxy(function (e) {
                        if (e.namespace) {
                            var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                            if (!i) return;
                            this._hashes[i] = e.content;
                        }
                    }, this),
                    "changed.owl.carousel": t.proxy(function (i) {
                        if (i.namespace && "position" === i.property.name) {
                            var s = this._core.items(this._core.relative(this._core.current())),
                                n = t
                                    .map(this._hashes, function (t, e) {
                                        return t === s ? e : null;
                                    })
                                    .join();
                            if (!n || e.location.hash.slice(1) === n) return;
                            e.location.hash = n;
                        }
                    }, this),
                }),
                (this._core.options = t.extend({}, n.Defaults, this._core.options)),
                this.$element.on(this._handlers),
                t(e).on(
                    "hashchange.owl.navigation",
                    t.proxy(function (t) {
                        var i = e.location.hash.substring(1),
                            s = this._core.$stage.children(),
                            n = this._hashes[i] && s.index(this._hashes[i]);
                        void 0 !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0);
                    }, this)
                );
        };
        (n.Defaults = { URLhashListener: !1 }),
            (n.prototype.destroy = function () {
                var i, s;
                for (i in (t(e).off("hashchange.owl.navigation"), this._handlers)) this._core.$element.off(i, this._handlers[i]);
                for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Hash = n);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, i, s) {
        function n(e, i) {
            var n = !1,
                o = e.charAt(0).toUpperCase() + e.slice(1);
            return (
                t.each((e + " " + r.join(o + " ") + o).split(" "), function (t, e) {
                    if (a[e] !== s) return (n = !i || e), !1;
                }),
                n
            );
        }
        function o(t) {
            return n(t, !0);
        }
        var a = t("<support>").get(0).style,
            r = "Webkit Moz O ms".split(" "),
            l = {
                transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } },
                animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } },
            },
            c = function () {
                return !!n("transform");
            },
            d = function () {
                return !!n("perspective");
            },
            h = function () {
                return !!n("animation");
            };
        (function () {
            return !!n("transition");
        })() && ((t.support.transition = new String(o("transition"))), (t.support.transition.end = l.transition.end[t.support.transition])),
            h() && ((t.support.animation = new String(o("animation"))), (t.support.animation.end = l.animation.end[t.support.animation])),
            c() && ((t.support.transform = new String(o("transform"))), (t.support.transform3d = d()));
    })(window.Zepto || window.jQuery, window, document);
