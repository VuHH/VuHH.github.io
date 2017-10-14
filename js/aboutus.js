/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundsize-cssvhunit-cssvwunit-flexbox-svg-addtest-load-printshiv-setclasses !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function o() {
        var e, t, n, o, i, a, s;
        for (var l in E)
            if (E.hasOwnProperty(l)) {
                if (e = [], t = E[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) a = e[i], s = a.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), C.push((o ? "" : "no-") + s.join("-"))
            }
    }

    function i(e) {
        var t = _.className,
            n = Modernizr._config.classPrefix || "";
        if (x && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), x ? _.className.baseVal = t : _.className = t)
    }

    function a(e, t) {
        if ("object" == typeof e)
            for (var n in e) w(e, n) && a(n, e[n]);
        else {
            e = e.toLowerCase();
            var r = e.split("."),
                o = Modernizr[r[0]];
            if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), i([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
        }
        return Modernizr
    }

    function s(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function l() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : x ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function u() {
        var e = t.body;
        return e || (e = l(x ? "svg" : "body"), e.fake = !0), e
    }

    function c(e, n, r, o) {
        var i, a, s, c, f = "modernizr",
            d = l("div"),
            p = u();
        if (parseInt(r, 10))
            for (; r--;) s = l("div"), s.id = o ? o[r] : f + (r + 1), d.appendChild(s);
        return i = l("style"), i.type = "text/css", i.id = "s" + f, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), d.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = _.style.overflow, _.style.overflow = "hidden", _.appendChild(p)), a = n(d, e), p.fake ? (p.parentNode.removeChild(p), _.style.overflow = c, _.offsetHeight) : d.parentNode.removeChild(d), !!a
    }

    function f(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function d(t, n, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, t, n);
            var i = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (i) {
                var a = i.error ? "error" : "log";
                i[a].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else o = !n && t.currentStyle && t.currentStyle[r];
        return o
    }

    function p(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(f(t[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; o--;) i.push("(" + f(t[o]) + ":" + r + ")");
            return i = i.join(" or "), c("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == d(e, null, "position")
            })
        }
        return n
    }

    function m(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function h(e, t, o, i) {
        function a() {
            c && (delete k.style, delete k.modElem)
        }
        if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
            var u = p(e, o);
            if (!r(u, "undefined")) return u
        }
        for (var c, f, d, h, g, v = ["modernizr", "tspan", "samp"]; !k.style && v.length;) c = !0, k.modElem = l(v.shift()), k.style = k.modElem.style;
        for (d = e.length, f = 0; d > f; f++)
            if (h = e[f], g = k.style[h], s(h, "-") && (h = m(h)), k.style[h] !== n) {
                if (i || r(o, "undefined")) return a(), "pfx" == t ? h : !0;
                try {
                    k.style[h] = o
                } catch (y) {}
                if (k.style[h] != g) return a(), "pfx" == t ? h : !0
            }
        return a(), !1
    }

    function g(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function v(e, t, n) {
        var o;
        for (var i in e)
            if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? g(o, n || t) : o);
        return !1
    }

    function y(e, t, n, o, i) {
        var a = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + j.join(a + " ") + a).split(" ");
        return r(t, "string") || r(t, "undefined") ? h(s, t, o, i) : (s = (e + " " + P.join(a + " ") + a).split(" "), v(s, t, n))
    }

    function S(e, t, r) {
        return y(e, n, n, t, r)
    }
    var E = [],
        b = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                E.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                E.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = b, Modernizr = new Modernizr;
    var w, C = [],
        _ = t.documentElement,
        x = "svg" === _.nodeName.toLowerCase();
    ! function() {
        var e = {}.hasOwnProperty;
        w = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function(t, n) {
            return e.call(t, n)
        }
    }(), b._l = {}, b.on = function(e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }, b._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e, r;
                for (e = 0; e < n.length; e++)(r = n[e])(t)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function() {
        b.addTest = a
    });
    x || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = _.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e, t) {
            var n = _.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), _.elements = n + " " + e, u(t)
        }

        function i(e) {
            var t = C[e[b]];
            return t || (t = {}, w++, e[b] = w, C[w] = t), t
        }

        function a(e, n, r) {
            if (n || (n = t), g) return n.createElement(e);
            r || (r = i(n));
            var o;
            return o = r.cache[e] ? r.cache[e].cloneNode() : E.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || S.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
        }

        function s(e, n) {
            if (e || (e = t), g) return e.createDocumentFragment();
            n = n || i(e);
            for (var o = n.frag.cloneNode(), a = 0, s = r(), l = s.length; l > a; a++) o.createElement(s[a]);
            return o
        }

        function l(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return _.shivMethods ? a(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(_, t.frag)
        }

        function u(e) {
            e || (e = t);
            var r = i(e);
            return !_.shivCSS || h || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), g || l(e, r), e
        }

        function c(e) {
            for (var t, n = e.getElementsByTagName("*"), o = n.length, i = RegExp("^(?:" + r().join("|") + ")$", "i"), a = []; o--;) t = n[o], i.test(t.nodeName) && a.push(t.applyElement(f(t)));
            return a
        }

        function f(e) {
            for (var t, n = e.attributes, r = n.length, o = e.ownerDocument.createElement(T + ":" + e.nodeName); r--;) t = n[r], t.specified && o.setAttribute(t.nodeName, t.nodeValue);
            return o.style.cssText = e.style.cssText, o
        }

        function d(e) {
            for (var t, n = e.split("{"), o = n.length, i = RegExp("(^|[\\s,>+~])(" + r().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), a = "$1" + T + "\\:$2"; o--;) t = n[o] = n[o].split("}"), t[t.length - 1] = t[t.length - 1].replace(i, a), n[o] = t.join("}");
            return n.join("{")
        }

        function p(e) {
            for (var t = e.length; t--;) e[t].removeNode()
        }

        function m(e) {
            function t() {
                clearTimeout(a._removeSheetTimer), r && r.removeNode(!0), r = null
            }
            var r, o, a = i(e),
                s = e.namespaces,
                l = e.parentWindow;
            return !z || e.printShived ? e : ("undefined" == typeof s[T] && s.add(T), l.attachEvent("onbeforeprint", function() {
                t();
                for (var i, a, s, l = e.styleSheets, u = [], f = l.length, p = Array(f); f--;) p[f] = l[f];
                for (; s = p.pop();)
                    if (!s.disabled && x.test(s.media)) {
                        try {
                            i = s.imports, a = i.length
                        } catch (m) {
                            a = 0
                        }
                        for (f = 0; a > f; f++) p.push(i[f]);
                        try {
                            u.push(s.cssText)
                        } catch (m) {}
                    }
                u = d(u.reverse().join("")), o = c(e), r = n(e, u)
            }), l.attachEvent("onafterprint", function() {
                p(o), clearTimeout(a._removeSheetTimer), a._removeSheetTimer = setTimeout(t, 500)
            }), e.printShived = !0, e)
        }
        var h, g, v = "3.7.3",
            y = e.html5 || {},
            S = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            E = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            b = "_html5shiv",
            w = 0,
            C = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", h = "hidden" in e, g = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                h = !0, g = !0
            }
        }();
        var _ = {
            elements: y.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: v,
            shivCSS: y.shivCSS !== !1,
            supportsUnknownElements: g,
            shivMethods: y.shivMethods !== !1,
            type: "default",
            shivDocument: u,
            createElement: a,
            createDocumentFragment: s,
            addElements: o
        };
        e.html5 = _, u(t);
        var x = /^$|\b(?:all|print)\b/,
            T = "html5shiv",
            z = !g && function() {
                var n = t.documentElement;
                return !("undefined" == typeof t.namespaces || "undefined" == typeof t.parentWindow || "undefined" == typeof n.applyElement || "undefined" == typeof n.removeNode || "undefined" == typeof e.attachEvent)
            }();
        _.type += " print", _.shivPrint = m, m(t), "object" == typeof module && module.exports && (module.exports = _)
    }("undefined" != typeof e ? e : this, t);
    var T = function() {},
        z = function() {};
    e.console && (T = function() {
        var t = console.error ? "error" : "log";
        e.console[t].apply(e.console, Array.prototype.slice.call(arguments))
    }, z = function() {
        var t = console.warn ? "warn" : "log";
        e.console[t].apply(e.console, Array.prototype.slice.call(arguments))
    }), b.load = function() {
        "yepnope" in e ? (z("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. yepnope appears to be available on the page, so we’ll use it to handle this call to Modernizr.load, but please update your code to use yepnope directly.\n See http://github.com/Modernizr/Modernizr/issues/1182 for more information."), e.yepnope.apply(e, [].slice.call(arguments, 0))) : T("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. Get it from http://yepnopejs.com. See http://github.com/Modernizr/Modernizr/issues/1182 for more information.")
    }, Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var N = "Moz O ms Webkit",
        j = b._config.usePrefixes ? N.split(" ") : [];
    b._cssomPrefixes = j;
    var M = {
        elem: l("modernizr")
    };
    Modernizr._q.push(function() {
        delete M.elem
    });
    var k = {
        style: M.elem.style
    };
    Modernizr._q.unshift(function() {
        delete k.style
    });
    var P = b._config.usePrefixes ? N.toLowerCase().split(" ") : [];
    b._domPrefixes = P, b.testAllProps = y, b.testAllProps = S, Modernizr.addTest("flexbox", S("flexBasis", "1px", !0));
    var F = b.testStyles = c;
    F("#modernizr { height: 50vh; }", function(t) {
        var n = parseInt(e.innerHeight / 2, 10),
            r = parseInt(d(t, null, "height"), 10);
        Modernizr.addTest("cssvhunit", r == n)
    }), Modernizr.addTest("backgroundsize", S("backgroundSize", "100%", !0)), F("#modernizr { width: 50vw; }", function(t) {
        var n = parseInt(e.innerWidth / 2, 10),
            r = parseInt(d(t, null, "width"), 10);
        Modernizr.addTest("cssvwunit", r == n)
    }), o(), i(C), delete b.addTest, delete b.addAsyncTest;
    for (var A = 0; A < Modernizr._q.length; A++) Modernizr._q[A]();
    e.Modernizr = Modernizr
}(window, document);