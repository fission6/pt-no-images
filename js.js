function s4() {
    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
}

function test() {
    return "test"
}

function guid() {
    return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4()
}

function memoize(n) {
    return function() {
        for (var r = Array.prototype.slice.call(arguments), i = "", u = r.length, t = null; u--;) t = r[u], i += t === Object(t) ? JSON.stringify(t) : t, n.memoize || (n.memoize = {});
        return i in n.memoize ? n.memoize[i] : n.memoize[i] = n.apply(this, r)
    }
}

function linkify(n, t) {
    var r = /(\()((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\))|(\[)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\])|(\{)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\})|(<|&(?:lt|#60|#x3c);)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(>|&(?:gt|#62|#x3e);)|((?:^|[^=\s'"\]])\s*['"]?|[^=\s]\s+)(\b(?:ht|f)tps?:\/\/[a-z0-9\-._~!$'()*+,;=:\/?#[\]@%]+(?:(?!&(?:gt|#0*62|#x0*3e);|&(?:amp|apos|quot|#0*3[49]|#x0*2[27]);[.!&',:?;]?(?:[^a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]|$))&[a-z0-9\-._~!$'()*+,;=:\/?#[\]@%]*)*[a-z0-9\-_~$()*+=\/#[\]@%])/img,
        i = '$1$4$7$10$13<a href="$2$5$8$11$14"';
    return t && t.target && (i += ' target="' + t.target + '"'), i += ">$2$5$8$11$14<\/a>$3$6$9$12", n.replace(r, i)
}

function linkify_html(n) {
    return n = n.replace(/&amp;apos;/g, "&#39;"), section_html_pattern = /([^<]+(?:(?!<a\b)<[^<]*)*|(?:(?!<a\b)<[^<]*)+)|(<a\b[^>]*>[^<]*(?:(?!<\/a\b)<[^<]*)*<\/a\s*>)/ig, n.replace(section_html_pattern, _linkify_html_callback)
}

function _linkify_html_callback(n, t, i) {
    return i ? i : linkify(t)
}

function prepare_linkification() {
    var n, t;
    if (document.getElementsByTagName) {
        for (n = document.getElementsByTagName("*"), t = 0; t < n.length; t++) n[t].className && /\blinkify\b/.test(n[t].className) && (n[t].onclick = onclick_linkify, n[t].title = "Click to linkify URLs in this element.");
        n = null
    }
}

function onclick_linkify() {
    return this.onclick = null, this.innerHTML = linkify_html(this.innerHTML), this.className = this.className.replace(/\blinkify\b/, "linkified"), this.setAttribute("title", "All matching URLs here have been linkified."), analyse_links(this), !1
}

function analyse_links(n) {
    var i, u;
    if (!document.getElementsByTagName) return !1;
    var t, f = /\([^()[\]]*\)/g,
        e = /\[[^()[\]]*\]/g,
        r = n.getElementsByTagName("a");
    for (i = 0; i < r.length; i++) {
        for (r[i].onclick = onclick_dummylink, t = r[i].getAttribute("href"), t = t.replace(/%28/g, "("), t = t.replace(/%29/g, ")"), t = t.replace(/%5B/ig, "["), t = t.replace(/%5D/ig, "]"), u = !1; !u;) {
            for (u = !0; t.search(f) != -1;) t = t.replace(f, "", t), u = !1;
            while (t.search(e) != -1) t = t.replace(e, "", t), u = !1
        }
        /[()[\]]/.test(t) ? (r[i].title = "This link has unbalanced parentheses or square brackets.", r[i].className = "unbalanced") : (r[i].title = "This link has no unbalanced parentheses or square brackets.", r[i].className = "balanced")
    }
    return r = null, !1
}

function onclick_dummylink() {
    return alert("This is a dummy link."), !1
}
var jscolor, XBBCODE;
if (function(n, t) {
        function dt(n) {
            var t = n.length,
                r = i.type(n);
            return i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || "function" !== r && (0 === t || "number" == typeof t && t > 0 && t - 1 in n)
        }

        function kf(n) {
            var t = gt[n] = {};
            return i.each(n.match(s) || [], function(n, i) {
                t[i] = !0
            }), t
        }

        function ir(n, r, u, f) {
            if (i.acceptData(n)) {
                var s, h, c = i.expando,
                    a = "string" == typeof r,
                    l = n.nodeType,
                    o = l ? i.cache : n,
                    e = l ? n[c] : n[c] && c;
                if (e && o[e] && (f || o[e].data) || !a || u !== t) return e || (l ? n[c] = e = b.pop() || i.guid++ : e = c), o[e] || (o[e] = {}, l || (o[e].toJSON = i.noop)), ("object" == typeof r || "function" == typeof r) && (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)), s = o[e], f || (s.data || (s.data = {}), s = s.data), u !== t && (s[i.camelCase(r)] = u), a ? (h = s[r], null == h && (h = s[i.camelCase(r)])) : h = s, h
            }
        }

        function rr(n, t, r) {
            if (i.acceptData(n)) {
                var o, h, e, s = n.nodeType,
                    u = s ? i.cache : n,
                    f = s ? n[i.expando] : i.expando;
                if (u[f]) {
                    if (t && (e = r ? u[f] : u[f].data)) {
                        for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in e) ? t = [t] : (t = i.camelCase(t), t = t in e ? [t] : t.split(" ")), o = 0, h = t.length; h > o; o++) delete e[t[o]];
                        if (!(r ? ni : i.isEmptyObject)(e)) return
                    }(r || (delete u[f].data, ni(u[f]))) && (s ? i.cleanData([n], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null)
                }
            }
        }

        function ur(n, r, u) {
            if (u === t && 1 === n.nodeType) {
                var f = "data-" + r.replace(tr, "-$1").toLowerCase();
                if (u = n.getAttribute(f), "string" == typeof u) {
                    try {
                        u = "true" === u ? !0 : "false" === u ? !1 : "null" === u ? null : +u + "" === u ? +u : nr.test(u) ? i.parseJSON(u) : u
                    } catch (e) {}
                    i.data(n, r, u)
                } else u = t
            }
            return u
        }

        function ni(n) {
            var t;
            for (t in n)
                if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function ht() {
            return !0
        }

        function d() {
            return !1
        }

        function cr(n, t) {
            do n = n[t]; while (n && 1 !== n.nodeType);
            return n
        }

        function lr(n, t, r) {
            if (t = t || 0, i.isFunction(t)) return i.grep(n, function(n, i) {
                var u = !!t.call(n, i, n);
                return u === r
            });
            if (t.nodeType) return i.grep(n, function(n) {
                return n === t === r
            });
            if ("string" == typeof t) {
                var u = i.grep(n, function(n) {
                    return 1 === n.nodeType
                });
                if (fe.test(t)) return i.filter(t, u, !r);
                t = i.filter(t, u)
            }
            return i.grep(n, function(n) {
                return i.inArray(n, t) >= 0 === r
            })
        }

        function ar(n) {
            var i = vr.split("|"),
                t = n.createDocumentFragment();
            if (t.createElement)
                while (i.length) t.createElement(i.pop());
            return t
        }

        function ye(n, t) {
            return n.getElementsByTagName(t)[0] || n.appendChild(n.ownerDocument.createElement(t))
        }

        function dr(n) {
            var t = n.getAttributeNode("type");
            return n.type = (t && t.specified) + "/" + n.type, n
        }

        function gr(n) {
            var t = le.exec(n.type);
            return t ? n.type = t[1] : n.removeAttribute("type"), n
        }

        function si(n, t) {
            for (var u, r = 0; null != (u = n[r]); r++) i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
        }

        function nu(n, t) {
            if (1 === t.nodeType && i.hasData(n)) {
                var u, f, o, s = i._data(n),
                    r = i._data(t, s),
                    e = s.events;
                if (e) {
                    delete r.handle, r.events = {};
                    for (u in e)
                        for (f = 0, o = e[u].length; o > f; f++) i.event.add(t, u, e[u][f])
                }
                r.data && (r.data = i.extend({}, r.data))
            }
        }

        function pe(n, t) {
            var r, f, u;
            if (1 === t.nodeType) {
                if (r = t.nodeName.toLowerCase(), !i.support.noCloneEvent && t[i.expando]) {
                    u = i._data(t);
                    for (f in u.events) i.removeEvent(t, f, u.handle);
                    t.removeAttribute(i.expando)
                }
                "script" === r && t.text !== n.text ? (dr(t).text = n.text, gr(t)) : "object" === r ? (t.parentNode && (t.outerHTML = n.outerHTML), i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : "input" === r && ei.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : "option" === r ? t.defaultSelected = t.selected = n.defaultSelected : ("input" === r || "textarea" === r) && (t.defaultValue = n.defaultValue)
            }
        }

        function u(n, r) {
            var s, e, h = 0,
                f = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(r || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(r || "*") : t;
            if (!f)
                for (f = [], s = n.childNodes || n; null != (e = s[h]); h++) !r || i.nodeName(e, r) ? f.push(e) : i.merge(f, u(e, r));
            return r === t || r && i.nodeName(n, r) ? i.merge([n], f) : f
        }

        function we(n) {
            ei.test(n.type) && (n.defaultChecked = n.checked)
        }

        function fu(n, t) {
            if (t in n) return t;
            for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = uu.length; i--;)
                if (t = uu[i] + r, t in n) return t;
            return u
        }

        function ut(n, t) {
            return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
        }

        function eu(n, t) {
            for (var f, r, o, e = [], u = 0, s = n.length; s > u; u++) r = n[u], r.style && (e[u] = i._data(r, "olddisplay"), f = r.style.display, t ? (e[u] || "none" !== f || (r.style.display = ""), "" === r.style.display && ut(r) && (e[u] = i._data(r, "olddisplay", cu(r.nodeName)))) : e[u] || (o = ut(r), (f && "none" !== f || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
            for (u = 0; s > u; u++) r = n[u], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? e[u] || "" : "none"));
            return n
        }

        function ou(n, t, i) {
            var r = ge.exec(t);
            return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
        }

        function su(n, t, r, u, f) {
            for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2) "margin" === r && (o += i.css(n, r + p[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + p[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + p[e] + "Width", !0, f))) : (o += i.css(n, "padding" + p[e], !0, f), "padding" !== r && (o += i.css(n, "border" + p[e] + "Width", !0, f)));
            return o
        }

        function hu(n, t, r) {
            var e = !0,
                u = "width" === t ? n.offsetWidth : n.offsetHeight,
                f = v(n),
                o = i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f);
            if (0 >= u || null == u) {
                if (u = y(n, t, f), (0 > u || null == u) && (u = n.style[t]), ct.test(u)) return u;
                e = o && (i.support.boxSizingReliable || u === n.style[t]), u = parseFloat(u) || 0
            }
            return u + su(n, t, r || (o ? "border" : "content"), e, f) + "px"
        }

        function cu(n) {
            var u = r,
                t = iu[n];
            return t || (t = lu(n, u), "none" !== t && t || (rt = (rt || i("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(u.documentElement), u = (rt[0].contentWindow || rt[0].contentDocument).document, u.write("<!doctype html><html><body>"), u.close(), t = lu(n, u), rt.detach()), iu[n] = t), t
        }

        function lu(n, t) {
            var r = i(t.createElement(n)).appendTo(t.body),
                u = i.css(r[0], "display");
            return r.remove(), u
        }

        function ci(n, t, r, u) {
            var f;
            if (i.isArray(t)) i.each(t, function(t, i) {
                r || ro.test(n) ? u(n, i) : ci(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
            });
            else if (r || "object" !== i.type(t)) u(n, t);
            else
                for (f in t) ci(n + "[" + f + "]", t[f], r, u)
        }

        function ku(n) {
            return function(t, r) {
                "string" != typeof t && (r = t, t = "*");
                var u, f = 0,
                    e = t.toLowerCase().match(s) || [];
                if (i.isFunction(r))
                    while (u = e[f++]) "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
            }
        }

        function du(n, r, u, f) {
            function o(h) {
                var c;
                return e[h] = !0, i.each(n[h] || [], function(n, i) {
                    var h = i(r, u, f);
                    return "string" != typeof h || s || e[h] ? s ? !(c = h) : t : (r.dataTypes.unshift(h), o(h), !1)
                }), c
            }
            var e = {},
                s = n === vi;
            return o(r.dataTypes[0]) || !e["*"] && o("*")
        }

        function yi(n, r) {
            var f, u, e = i.ajaxSettings.flatOptions || {};
            for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
            return f && i.extend(!0, n, f), n
        }

        function lo(n, i, r) {
            var s, o, e, u, h = n.contents,
                f = n.dataTypes,
                c = n.responseFields;
            for (u in c) u in r && (i[c[u]] = r[u]);
            while ("*" === f[0]) f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("Content-Type"));
            if (o)
                for (u in h)
                    if (h[u] && h[u].test(o)) {
                        f.unshift(u);
                        break
                    }
            if (f[0] in r) e = f[0];
            else {
                for (u in r) {
                    if (!f[0] || n.converters[u + " " + f[0]]) {
                        e = u;
                        break
                    }
                    s || (s = u)
                }
                e = e || s
            }
            return e ? (e !== f[0] && f.unshift(e), r[e]) : t
        }

        function ao(n, t) {
            var o, r, i, e, u = {},
                h = 0,
                s = n.dataTypes.slice(),
                f = s[0];
            if (n.dataFilter && (t = n.dataFilter(t, n.dataType)), s[1])
                for (i in n.converters) u[i.toLowerCase()] = n.converters[i];
            for (; r = s[++h];)
                if ("*" !== r) {
                    if ("*" !== f && f !== r) {
                        if (i = u[f + " " + r] || u["* " + r], !i)
                            for (o in u)
                                if (e = o.split(" "), e[1] === r && (i = u[f + " " + e[0]] || u["* " + e[0]])) {
                                    i === !0 ? i = u[o] : u[o] !== !0 && (r = e[0], s.splice(h--, 0, r));
                                    break
                                }
                        if (i !== !0)
                            if (i && n.throws) t = i(t);
                            else try {
                                t = i(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: i ? c : "No conversion from " + f + " to " + r
                                }
                            }
                    }
                    f = r
                }
            return {
                state: "success",
                data: t
            }
        }

        function nf() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        }

        function vo() {
            try {
                return new n.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function tf() {
            return setTimeout(function() {
                tt = t
            }), tt = i.now()
        }

        function bo(n, t) {
            i.each(t, function(t, i) {
                for (var u = (ft[t] || []).concat(ft["*"]), r = 0, f = u.length; f > r; r++)
                    if (u[r].call(n, t, i)) return
            })
        }

        function rf(n, t, r) {
            var h, e, o = 0,
                l = yt.length,
                f = i.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (e) return !1;
                    for (var s = tt || tf(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++) u.tweens[r].run(i);
                    return f.notifyWith(n, [u, i, t]), 1 > i && o ? t : (f.resolveWith(n, [u]), !1)
                },
                u = f.promise({
                    elem: n,
                    props: i.extend({}, t),
                    opts: i.extend(!0, {
                        specialEasing: {}
                    }, r),
                    originalProperties: t,
                    originalOptions: r,
                    startTime: tt || tf(),
                    duration: r.duration,
                    tweens: [],
                    createTween: function(t, r) {
                        var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(f), f
                    },
                    stop: function(t) {
                        var i = 0,
                            r = t ? u.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; r > i; i++) u.tweens[i].run(1);
                        return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                    }
                }),
                s = u.props;
            for (ko(s, u.opts.specialEasing); l > o; o++)
                if (h = yt[o].call(u, n, s, u.opts)) return h;
            return bo(u, s), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
                elem: n,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function ko(n, t) {
            var u, f, r, e, o;
            for (r in n)
                if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                    u = o.expand(u), delete n[f];
                    for (r in u) r in n || (n[r] = u[r], t[r] = e)
                } else t[f] = e
        }

        function go(n, t, r) {
            var u, o, w, a, s, v, l, f, b, h = this,
                e = n.style,
                y = {},
                p = [],
                c = n.nodeType && ut(n);
            r.queue || (f = i._queueHooks(n, "fx"), null == f.unqueued && (f.unqueued = 0, b = f.empty.fire, f.empty.fire = function() {
                f.unqueued || b()
            }), f.unqueued++, h.always(function() {
                h.always(function() {
                    f.unqueued--, i.queue(n, "fx").length || f.empty.fire()
                })
            })), 1 === n.nodeType && ("height" in t || "width" in t) && (r.overflow = [e.overflow, e.overflowX, e.overflowY], "inline" === i.css(n, "display") && "none" === i.css(n, "float") && (i.support.inlineBlockNeedsLayout && "inline" !== cu(n.nodeName) ? e.zoom = 1 : e.display = "inline-block")), r.overflow && (e.overflow = "hidden", i.support.shrinkWrapBlocks || h.always(function() {
                e.overflow = r.overflow[0], e.overflowX = r.overflow[1], e.overflowY = r.overflow[2]
            }));
            for (o in t)
                if (a = t[o], yo.exec(a)) {
                    if (delete t[o], v = v || "toggle" === a, a === (c ? "hide" : "show")) continue;
                    p.push(o)
                }
            if (w = p.length)
                for (s = i._data(n, "fxshow") || i._data(n, "fxshow", {}), ("hidden" in s) && (c = s.hidden), v && (s.hidden = !c), c ? i(n).show() : h.done(function() {
                        i(n).hide()
                    }), h.done(function() {
                        var t;
                        i._removeData(n, "fxshow");
                        for (t in y) i.style(n, t, y[t])
                    }), o = 0; w > o; o++) u = p[o], l = h.createTween(u, c ? s[u] : 0), y[u] = s[u] || i.style(n, u), u in s || (s[u] = l.start, c && (l.end = l.start, l.start = "width" === u || "height" === u ? 1 : 0))
        }

        function f(n, t, i, r, u) {
            return new f.prototype.init(n, t, i, r, u)
        }

        function pt(n, t) {
            var r, i = {
                    height: n
                },
                u = 0;
            for (t = t ? 1 : 0; 4 > u; u += 2 - t) r = p[u], i["margin" + r] = i["padding" + r] = n;
            return t && (i.opacity = i.width = n), i
        }

        function uf(n) {
            return i.isWindow(n) ? n : 9 === n.nodeType ? n.defaultView || n.parentWindow : !1
        }
        var et, wi, o = typeof t,
            r = n.document,
            ff = n.location,
            ef = n.jQuery,
            of = n.$,
            ot = {},
            b = [],
            wt = "1.9.1",
            bi = b.concat,
            bt = b.push,
            l = b.slice,
            ki = b.indexOf,
            sf = ot.toString,
            it = ot.hasOwnProperty,
            kt = wt.trim,
            i = function(n, t) {
                return new i.fn.init(n, t, wi)
            },
            st = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            s = /\S+/g,
            hf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            cf = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            di = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            lf = /^[\],:{}\s]*$/,
            af = /(?:^|:|,)(?:\s*\[)+/g,
            vf = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            yf = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            pf = /^-ms-/,
            wf = /-([\da-z])/gi,
            bf = function(n, t) {
                return t.toUpperCase()
            },
            h = function(n) {
                (r.addEventListener || "load" === n.type || "complete" === r.readyState) && (gi(), i.ready())
            },
            gi = function() {
                r.addEventListener ? (r.removeEventListener("DOMContentLoaded", h, !1), n.removeEventListener("load", h, !1)) : (r.detachEvent("onreadystatechange", h), n.detachEvent("onload", h))
            },
            gt, nr, tr, pi, lt, g, nt, gu, at;
        i.fn = i.prototype = {
            jquery: wt,
            constructor: i,
            init: function(n, u, f) {
                var e, o;
                if (!n) return this;
                if ("string" == typeof n) {
                    if (e = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null, n, null] : cf.exec(n), !e || !e[1] && u) return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n);
                    if (e[1]) {
                        if (u = u instanceof i ? u[0] : u, i.merge(this, i.parseHTML(e[1], u && u.nodeType ? u.ownerDocument || u : r, !0)), di.test(e[1]) && i.isPlainObject(u))
                            for (e in u) i.isFunction(this[e]) ? this[e](u[e]) : this.attr(e, u[e]);
                        return this
                    }
                    if (o = r.getElementById(e[2]), o && o.parentNode) {
                        if (o.id !== e[2]) return f.find(n);
                        this.length = 1, this[0] = o
                    }
                    return this.context = r, this.selector = n, this
                }
                return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
            },
            selector: "",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return l.call(this)
            },
            get: function(n) {
                return null == n ? this.toArray() : 0 > n ? this[this.length + n] : this[n]
            },
            pushStack: function(n) {
                var t = i.merge(this.constructor(), n);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(n, t) {
                return i.each(this, n, t)
            },
            ready: function(n) {
                return i.ready.promise().done(n), this
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(n) {
                var i = this.length,
                    t = +n + (0 > n ? i : 0);
                return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
            },
            map: function(n) {
                return this.pushStack(i.map(this, function(t, i) {
                    return n.call(t, i, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: bt,
            sort: [].sort,
            splice: [].splice
        }, i.fn.init.prototype = i.fn, i.extend = i.fn.extend = function() {
            var u, o, r, e, s, h, n = arguments[0] || {},
                f = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof n && (c = n, n = arguments[1] || {}, f = 2), "object" == typeof n || i.isFunction(n) || (n = {}), l === f && (n = this, --f); l > f; f++)
                if (null != (s = arguments[f]))
                    for (e in s) u = n[e], r = s[e], n !== r && (c && r && (i.isPlainObject(r) || (o = i.isArray(r))) ? (o ? (o = !1, h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
            return n
        }, i.extend({
            noConflict: function(t) {
                return n.$ === i && (n.$ = of), t && n.jQuery === i && (n.jQuery = ef), i
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(n) {
                n ? i.readyWait++ : i.ready(!0)
            },
            ready: function(n) {
                if (n === !0 ? !--i.readyWait : !i.isReady) {
                    if (!r.body) return setTimeout(i.ready);
                    i.isReady = !0, n !== !0 && --i.readyWait > 0 || (et.resolveWith(r, [i]), i.fn.trigger && i(r).trigger("ready").off("ready"))
                }
            },
            isFunction: function(n) {
                return "function" === i.type(n)
            },
            isArray: Array.isArray || function(n) {
                return "array" === i.type(n)
            },
            isWindow: function(n) {
                return null != n && n == n.window
            },
            isNumeric: function(n) {
                return !isNaN(parseFloat(n)) && isFinite(n)
            },
            type: function(n) {
                return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ot[sf.call(n)] || "object" : typeof n
            },
            isPlainObject: function(n) {
                if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n)) return !1;
                try {
                    if (n.constructor && !it.call(n, "constructor") && !it.call(n.constructor.prototype, "isPrototypeOf")) return !1
                } catch (u) {
                    return !1
                }
                var r;
                for (r in n);
                return r === t || it.call(n, r)
            },
            isEmptyObject: function(n) {
                var t;
                for (t in n) return !1;
                return !0
            },
            error: function(n) {
                throw Error(n);
            },
            parseHTML: function(n, t, u) {
                if (!n || "string" != typeof n) return null;
                "boolean" == typeof t && (u = t, t = !1), t = t || r;
                var f = di.exec(n),
                    e = !u && [];
                return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && i(e).remove(), i.merge([], f.childNodes))
            },
            parseJSON: function(r) {
                return n.JSON && n.JSON.parse ? n.JSON.parse(r) : null === r ? r : "string" == typeof r && (r = i.trim(r), r && lf.test(r.replace(vf, "@").replace(yf, "]").replace(af, ""))) ? Function("return " + r)() : (i.error("Invalid JSON: " + r), t)
            },
            parseXML: function(r) {
                var u, f;
                if (!r || "string" != typeof r) return null;
                try {
                    n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r))
                } catch (e) {
                    u = t
                }
                return u && u.documentElement && !u.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + r), u
            },
            noop: function() {},
            globalEval: function(t) {
                t && i.trim(t) && (n.execScript || function(t) {
                    n.eval.call(n, t)
                })(t)
            },
            camelCase: function(n) {
                return n.replace(pf, "ms-").replace(wf, bf)
            },
            nodeName: function(n, t) {
                return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(n, t, i) {
                var u, r = 0,
                    f = n.length,
                    e = dt(n);
                if (i) {
                    if (e) {
                        for (; f > r; r++)
                            if (u = t.apply(n[r], i), u === !1) break
                    } else
                        for (r in n)
                            if (u = t.apply(n[r], i), u === !1) break
                } else if (e) {
                    for (; f > r; r++)
                        if (u = t.call(n[r], r, n[r]), u === !1) break
                } else
                    for (r in n)
                        if (u = t.call(n[r], r, n[r]), u === !1) break; return n
            },
            trim: kt && !kt.call("﻿ ") ? function(n) {
                return null == n ? "" : kt.call(n)
            } : function(n) {
                return null == n ? "" : (n + "").replace(hf, "")
            },
            makeArray: function(n, t) {
                var r = t || [];
                return null != n && (dt(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : bt.call(r, n)), r
            },
            inArray: function(n, t, i) {
                var r;
                if (t) {
                    if (ki) return ki.call(t, n, i);
                    for (r = t.length, i = i ? 0 > i ? Math.max(0, r + i) : i : 0; r > i; i++)
                        if (i in t && t[i] === n) return i
                }
                return -1
            },
            merge: function(n, i) {
                var f = i.length,
                    u = n.length,
                    r = 0;
                if ("number" == typeof f)
                    for (; f > r; r++) n[u++] = i[r];
                else
                    while (i[r] !== t) n[u++] = i[r++];
                return n.length = u, n
            },
            grep: function(n, t, i) {
                var u, f = [],
                    r = 0,
                    e = n.length;
                for (i = !!i; e > r; r++) u = !!t(n[r], r), i !== u && f.push(n[r]);
                return f
            },
            map: function(n, t, i) {
                var u, r = 0,
                    e = n.length,
                    o = dt(n),
                    f = [];
                if (o)
                    for (; e > r; r++) u = t(n[r], r, i), null != u && (f[f.length] = u);
                else
                    for (r in n) u = t(n[r], r, i), null != u && (f[f.length] = u);
                return bi.apply([], f)
            },
            guid: 1,
            proxy: function(n, r) {
                var f, u, e;
                return "string" == typeof r && (e = n[r], r = n, n = e), i.isFunction(n) ? (f = l.call(arguments, 2), u = function() {
                    return n.apply(r || this, f.concat(l.call(arguments)))
                }, u.guid = n.guid = n.guid || i.guid++, u) : t
            },
            access: function(n, r, u, f, e, o, s) {
                var h = 0,
                    l = n.length,
                    c = null == u;
                if ("object" === i.type(u)) {
                    e = !0;
                    for (h in u) i.access(n, r, h, u[h], !0, o, s)
                } else if (f !== t && (e = !0, i.isFunction(f) || (s = !0), c && (s ? (r.call(n, f), r = null) : (c = r, r = function(n, t, r) {
                        return c.call(i(n), r)
                    })), r))
                    for (; l > h; h++) r(n[h], u, s ? f : f.call(n[h], h, r(n[h], u)));
                return e ? n : c ? r.call(n) : l ? r(n[0], u) : o
            },
            now: function() {
                return +new Date
            }
        }), i.ready.promise = function(t) {
            if (!et)
                if (et = i.Deferred(), "complete" === r.readyState) setTimeout(i.ready);
                else if (r.addEventListener) r.addEventListener("DOMContentLoaded", h, !1), n.addEventListener("load", h, !1);
            else {
                r.attachEvent("onreadystatechange", h), n.attachEvent("onload", h);
                var u = !1;
                try {
                    u = null == n.frameElement && r.documentElement
                } catch (e) {}
                u && u.doScroll && function f() {
                    if (!i.isReady) {
                        try {
                            u.doScroll("left")
                        } catch (n) {
                            return setTimeout(f, 50)
                        }
                        gi(), i.ready()
                    }
                }()
            }
            return et.promise(t)
        }, i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
            ot["[object " + t + "]"] = t.toLowerCase()
        }), wi = i(r), gt = {}, i.Callbacks = function(n) {
            n = "string" == typeof n ? gt[n] || kf(n) : i.extend({}, n);
            var o, f, c, s, e, l, r = [],
                u = !n.once && [],
                a = function(t) {
                    for (f = n.memory && t, c = !0, e = l || 0, l = 0, s = r.length, o = !0; r && s > e; e++)
                        if (r[e].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                            f = !1;
                            break
                        }
                    o = !1, r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable())
                },
                h = {
                    add: function() {
                        if (r) {
                            var t = r.length;
                            (function u(t) {
                                i.each(t, function(t, f) {
                                    var e = i.type(f);
                                    "function" === e ? n.unique && h.has(f) || r.push(f) : f && f.length && "string" !== e && u(f)
                                })
                            })(arguments), o ? s = r.length : f && (l = t, a(f))
                        }
                        return this
                    },
                    remove: function() {
                        return r && i.each(arguments, function(n, t) {
                            for (var u;
                                (u = i.inArray(t, r, u)) > -1;) r.splice(u, 1), o && (s >= u && s--, e >= u && e--)
                        }), this
                    },
                    has: function(n) {
                        return n ? i.inArray(n, r) > -1 : !(!r || !r.length)
                    },
                    empty: function() {
                        return r = [], this
                    },
                    disable: function() {
                        return r = u = f = t, this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return u = t, f || h.disable(), this
                    },
                    locked: function() {
                        return !u
                    },
                    fireWith: function(n, t) {
                        return t = t || [], t = [n, t.slice ? t.slice() : t], !r || c && !u || (o ? u.push(t) : a(t)), this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!c
                    }
                };
            return h
        }, i.extend({
            Deferred: function(n) {
                var u = [
                        ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", i.Callbacks("memory")]
                    ],
                    f = "pending",
                    r = {
                        state: function() {
                            return f
                        },
                        always: function() {
                            return t.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var n = arguments;
                            return i.Deferred(function(f) {
                                i.each(u, function(u, e) {
                                    var s = e[0],
                                        o = i.isFunction(n[u]) && n[u];
                                    t[e[1]](function() {
                                        var n = o && o.apply(this, arguments);
                                        n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[s + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                    })
                                }), n = null
                            }).promise()
                        },
                        promise: function(n) {
                            return null != n ? i.extend(n, r) : r
                        }
                    },
                    t = {};
                return r.pipe = r.then, i.each(u, function(n, i) {
                    var e = i[2],
                        o = i[3];
                    r[i[1]] = e.add, o && e.add(function() {
                        f = o
                    }, u[1 ^ n][2].disable, u[2][2].lock), t[i[0]] = function() {
                        return t[i[0] + "With"](this === t ? r : this, arguments), this
                    }, t[i[0] + "With"] = e.fireWith
                }), r.promise(t), n && n.call(t, t), t
            },
            when: function(n) {
                var t = 0,
                    u = l.call(arguments),
                    r = u.length,
                    e = 1 !== r || n && i.isFunction(n.promise) ? r : 0,
                    f = 1 === e ? n : i.Deferred(),
                    h = function(n, t, i) {
                        return function(r) {
                            t[n] = this, i[n] = arguments.length > 1 ? l.call(arguments) : r, i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                        }
                    },
                    o, c, s;
                if (r > 1)
                    for (o = Array(r), c = Array(r), s = Array(r); r > t; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
                return e || f.resolveWith(s, u), f.promise()
            }
        }), i.support = function() {
            var u, s, e, f, h, c, l, a, y, v, t = r.createElement("div");
            if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", s = t.getElementsByTagName("*"), e = t.getElementsByTagName("a")[0], !s || !e || !s.length) return {};
            h = r.createElement("select"), l = h.appendChild(r.createElement("option")), f = t.getElementsByTagName("input")[0], e.style.cssText = "top:1px;float:left;opacity:.5", u = {
                getSetAttribute: "t" !== t.className,
                leadingWhitespace: 3 === t.firstChild.nodeType,
                tbody: !t.getElementsByTagName("tbody").length,
                htmlSerialize: !!t.getElementsByTagName("link").length,
                style: /top/.test(e.getAttribute("style")),
                hrefNormalized: "/a" === e.getAttribute("href"),
                opacity: /^0.5/.test(e.style.opacity),
                cssFloat: !!e.style.cssFloat,
                checkOn: !!f.value,
                optSelected: l.selected,
                enctype: !!r.createElement("form").enctype,
                html5Clone: "<:nav><\/:nav>" !== r.createElement("nav").cloneNode(!0).outerHTML,
                boxModel: "CSS1Compat" === r.compatMode,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            }, f.checked = !0, u.noCloneChecked = f.cloneNode(!0).checked, h.disabled = !0, u.optDisabled = !l.disabled;
            try {
                delete t.test
            } catch (p) {
                u.deleteExpando = !1
            }
            f = r.createElement("input"), f.setAttribute("value", ""), u.input = "" === f.getAttribute("value"), f.value = "t", f.setAttribute("type", "radio"), u.radioValue = "t" === f.value, f.setAttribute("checked", "t"), f.setAttribute("name", "t"), c = r.createDocumentFragment(), c.appendChild(f), u.appendChecked = f.checked, u.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked, t.attachEvent && (t.attachEvent("onclick", function() {
                u.noCloneEvent = !1
            }), t.cloneNode(!0).click());
            for (v in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) t.setAttribute(a = "on" + v, "t"), u[v + "Bubbles"] = a in n || t.attributes[a].expando === !1;
            return t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = "content-box" === t.style.backgroundClip, i(function() {
                var e, f, i, h = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    s = r.getElementsByTagName("body")[0];
                s && (e = r.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(e).appendChild(t), t.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", y = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", u.reliableHiddenOffsets = y && 0 === i[0].offsetHeight, t.innerHTML = "", t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", u.boxSizing = 4 === t.offsetWidth, u.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, n.getComputedStyle && (u.pixelPosition = "1%" !== (n.getComputedStyle(t, null) || {}).top, u.boxSizingReliable = "4px" === (n.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, f = t.appendChild(r.createElement("div")), f.style.cssText = t.style.cssText = h, f.style.marginRight = f.style.width = "0", t.style.width = "1px", u.reliableMarginRight = !parseFloat((n.getComputedStyle(f, null) || {}).marginRight)), typeof t.style.zoom !== o && (t.innerHTML = "", t.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", u.inlineBlockNeedsLayout = 3 === t.offsetWidth, t.style.display = "block", t.innerHTML = "<div><\/div>", t.firstChild.style.width = "5px", u.shrinkWrapBlocks = 3 !== t.offsetWidth, u.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(e), e = t = i = f = null)
            }), s = h = c = l = e = f = null, u
        }(), nr = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, tr = /([A-Z])/g, i.extend({
            cache: {},
            expando: "jQuery" + (wt + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(n) {
                return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ni(n)
            },
            data: function(n, t, i) {
                return ir(n, t, i)
            },
            removeData: function(n, t) {
                return rr(n, t)
            },
            _data: function(n, t, i) {
                return ir(n, t, i, !0)
            },
            _removeData: function(n, t) {
                return rr(n, t, !0)
            },
            acceptData: function(n) {
                if (n.nodeType && 1 !== n.nodeType && 9 !== n.nodeType) return !1;
                var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
                return !t || t !== !0 && n.getAttribute("classid") === t
            }
        }), i.fn.extend({
            data: function(n, r) {
                var e, f, u = this[0],
                    o = 0,
                    s = null;
                if (n === t) {
                    if (this.length && (s = i.data(u), 1 === u.nodeType && !i._data(u, "parsedAttrs"))) {
                        for (e = u.attributes; e.length > o; o++) f = e[o].name, f.indexOf("data-") || (f = i.camelCase(f.slice(5)), ur(u, f, s[f]));
                        i._data(u, "parsedAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof n ? this.each(function() {
                    i.data(this, n)
                }) : i.access(this, function(r) {
                    return r === t ? u ? ur(u, n, i.data(u, n)) : null : (this.each(function() {
                        i.data(this, n, r)
                    }), t)
                }, null, r, arguments.length > 1, null, !0)
            },
            removeData: function(n) {
                return this.each(function() {
                    i.removeData(this, n)
                })
            }
        }), i.extend({
            queue: function(n, r, u) {
                var f;
                return n ? (r = (r || "fx") + "queue", f = i._data(n, r), u && (!f || i.isArray(u) ? f = i._data(n, r, i.makeArray(u)) : f.push(u)), f || []) : t
            },
            dequeue: function(n, t) {
                t = t || "fx";
                var f = i.queue(n, t),
                    e = f.length,
                    r = f.shift(),
                    u = i._queueHooks(n, t),
                    o = function() {
                        i.dequeue(n, t)
                    };
                "inprogress" === r && (r = f.shift(), e--), u.cur = r, r && ("fx" === t && f.unshift("inprogress"), delete u.stop, r.call(n, o, u)), !e && u && u.empty.fire()
            },
            _queueHooks: function(n, t) {
                var r = t + "queueHooks";
                return i._data(n, r) || i._data(n, r, {
                    empty: i.Callbacks("once memory").add(function() {
                        i._removeData(n, t + "queue"), i._removeData(n, r)
                    })
                })
            }
        }), i.fn.extend({
            queue: function(n, r) {
                var u = 2;
                return "string" != typeof n && (r = n, n = "fx", u--), u > arguments.length ? i.queue(this[0], n) : r === t ? this : this.each(function() {
                    var t = i.queue(this, n, r);
                    i._queueHooks(this, n), "fx" === n && "inprogress" !== t[0] && i.dequeue(this, n)
                })
            },
            dequeue: function(n) {
                return this.each(function() {
                    i.dequeue(this, n)
                })
            },
            delay: function(n, t) {
                return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
                    var r = setTimeout(t, n);
                    i.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            clearQueue: function(n) {
                return this.queue(n || "fx", [])
            },
            promise: function(n, r) {
                var u, e = 1,
                    o = i.Deferred(),
                    f = this,
                    s = this.length,
                    h = function() {
                        --e || o.resolveWith(f, [f])
                    };
                for ("string" != typeof n && (r = n, n = t), n = n || "fx"; s--;) u = i._data(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
                return h(), o.promise(r)
            }
        });
        var k, fr, ti = /[\t\r\n]/g,
            df = /\r/g,
            gf = /^(?:input|select|textarea|button|object)$/i,
            ne = /^(?:a|area)$/i,
            er = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
            ii = /^(?:checked|selected)$/i,
            a = i.support.getSetAttribute,
            ri = i.support.input;
        i.fn.extend({
            attr: function(n, t) {
                return i.access(this, i.attr, n, t, arguments.length > 1)
            },
            removeAttr: function(n) {
                return this.each(function() {
                    i.removeAttr(this, n)
                })
            },
            prop: function(n, t) {
                return i.access(this, i.prop, n, t, arguments.length > 1)
            },
            removeProp: function(n) {
                return n = i.propFix[n] || n, this.each(function() {
                    try {
                        this[n] = t, delete this[n]
                    } catch (i) {}
                })
            },
            addClass: function(n) {
                var e, t, r, u, o, f = 0,
                    h = this.length,
                    c = "string" == typeof n && n;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).addClass(n.call(this, t, this.className))
                });
                if (c)
                    for (e = (n || "").match(s) || []; h > f; f++)
                        if (t = this[f], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(ti, " ") : " ")) {
                            for (o = 0; u = e[o++];) 0 > r.indexOf(" " + u + " ") && (r += u + " ");
                            t.className = i.trim(r)
                        }
                return this
            },
            removeClass: function(n) {
                var e, t, r, u, o, f = 0,
                    h = this.length,
                    c = 0 === arguments.length || "string" == typeof n && n;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, this.className))
                });
                if (c)
                    for (e = (n || "").match(s) || []; h > f; f++)
                        if (t = this[f], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(ti, " ") : "")) {
                            for (o = 0; u = e[o++];)
                                while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
                            t.className = n ? i.trim(r) : ""
                        }
                return this
            },
            toggleClass: function(n, t) {
                var r = typeof n,
                    u = "boolean" == typeof t;
                return i.isFunction(n) ? this.each(function(r) {
                    i(this).toggleClass(n.call(this, r, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === r)
                        for (var f, c = 0, h = i(this), e = t, l = n.match(s) || []; f = l[c++];) e = u ? e : !h.hasClass(f), h[e ? "addClass" : "removeClass"](f);
                    else(r === o || "boolean" === r) && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
                })
            },
            hasClass: function(n) {
                for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
                    if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(ti, " ").indexOf(i) >= 0) return !0;
                return !1
            },
            val: function(n) {
                var u, r, e, f = this[0];
                return arguments.length ? (e = i.isFunction(n), this.each(function(u) {
                    var f, o = i(this);
                    1 === this.nodeType && (f = e ? n.call(this, u, o.val()) : n, null == f ? f = "" : "number" == typeof f ? f += "" : i.isArray(f) && (f = i.map(f, function(n) {
                        return null == n ? "" : n + ""
                    })), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
                })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t ? u : (u = f.value, "string" == typeof u ? u.replace(df, "") : null == u ? "" : u)) : void 0
            }
        }), i.extend({
            valHooks: {
                option: {
                    get: function(n) {
                        var t = n.attributes.value;
                        return !t || t.specified ? n.value : n.text
                    }
                },
                select: {
                    get: function(n) {
                        for (var e, t, o = n.options, r = n.selectedIndex, u = "select-one" === n.type || 0 > r, s = u ? null : [], h = u ? r + 1 : o.length, f = 0 > r ? h : u ? r : 0; h > f; f++)
                            if (t = o[f], !(!t.selected && f !== r || (i.support.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                                if (e = i(t).val(), u) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(n, t) {
                        var r = i.makeArray(t);
                        return i(n).find("option").each(function() {
                            this.selected = i.inArray(i(this).val(), r) >= 0
                        }), r.length || (n.selectedIndex = -1), r
                    }
                }
            },
            attr: function(n, r, u) {
                var f, s, e, h = n.nodeType;
                if (n && 3 !== h && 8 !== h && 2 !== h) return typeof n.getAttribute === o ? i.prop(n, r, u) : (s = 1 !== h || !i.isXMLDoc(n), s && (r = r.toLowerCase(), f = i.attrHooks[r] || (er.test(r) ? fr : k)), u === t ? f && s && "get" in f && null !== (e = f.get(n, r)) ? e : (typeof n.getAttribute !== o && (e = n.getAttribute(r)), null == e ? t : e) : null !== u ? f && s && "set" in f && (e = f.set(n, u, r)) !== t ? e : (n.setAttribute(r, u + ""), u) : (i.removeAttr(n, r), t))
            },
            removeAttr: function(n, t) {
                var r, u, e = 0,
                    f = t && t.match(s);
                if (f && 1 === n.nodeType)
                    while (r = f[e++]) u = i.propFix[r] || r, er.test(r) ? !a && ii.test(r) ? n[i.camelCase("default-" + r)] = n[u] = !1 : n[u] = !1 : i.attr(n, r, ""), n.removeAttribute(a ? r : u)
            },
            attrHooks: {
                type: {
                    set: function(n, t) {
                        if (!i.support.radioValue && "radio" === t && i.nodeName(n, "input")) {
                            var r = n.value;
                            return n.setAttribute("type", t), r && (n.value = r), t
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(n, r, u) {
                var e, f, s, o = n.nodeType;
                if (n && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get" in f && null !== (e = f.get(n, r)) ? e : n[r]
            },
            propHooks: {
                tabIndex: {
                    get: function(n) {
                        var i = n.getAttributeNode("tabindex");
                        return i && i.specified ? parseInt(i.value, 10) : gf.test(n.nodeName) || ne.test(n.nodeName) && n.href ? 0 : t
                    }
                }
            }
        }), fr = {
            get: function(n, r) {
                var u = i.prop(n, r),
                    f = "boolean" == typeof u && n.getAttribute(r),
                    e = "boolean" == typeof u ? ri && a ? null != f : ii.test(r) ? n[i.camelCase("default-" + r)] : !!f : n.getAttributeNode(r);
                return e && e.value !== !1 ? r.toLowerCase() : t
            },
            set: function(n, t, r) {
                return t === !1 ? i.removeAttr(n, r) : ri && a || !ii.test(r) ? n.setAttribute(!a && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0, r
            }
        }, ri && a || (i.attrHooks.value = {
            get: function(n, r) {
                var u = n.getAttributeNode(r);
                return i.nodeName(n, "input") ? n.defaultValue : u && u.specified ? u.value : t
            },
            set: function(n, r, u) {
                return i.nodeName(n, "input") ? (n.defaultValue = r, t) : k && k.set(n, r, u)
            }
        }), a || (k = i.valHooks.button = {
            get: function(n, i) {
                var r = n.getAttributeNode(i);
                return r && ("id" === i || "name" === i || "coords" === i ? "" !== r.value : r.specified) ? r.value : t
            },
            set: function(n, i, r) {
                var u = n.getAttributeNode(r);
                return u || n.setAttributeNode(u = n.ownerDocument.createAttribute(r)), u.value = i += "", "value" === r || i === n.getAttribute(r) ? i : t
            }
        }, i.attrHooks.contenteditable = {
            get: k.get,
            set: function(n, t, i) {
                k.set(n, "" === t ? !1 : t, i)
            }
        }, i.each(["width", "height"], function(n, r) {
            i.attrHooks[r] = i.extend(i.attrHooks[r], {
                set: function(n, i) {
                    return "" === i ? (n.setAttribute(r, "auto"), i) : t
                }
            })
        })), i.support.hrefNormalized || (i.each(["href", "src", "width", "height"], function(n, r) {
            i.attrHooks[r] = i.extend(i.attrHooks[r], {
                get: function(n) {
                    var i = n.getAttribute(r, 2);
                    return null == i ? t : i
                }
            })
        }), i.each(["href", "src"], function(n, t) {
            i.propHooks[t] = {
                get: function(n) {
                    return n.getAttribute(t, 4)
                }
            }
        })), i.support.style || (i.attrHooks.style = {
            get: function(n) {
                return n.style.cssText || t
            },
            set: function(n, t) {
                return n.style.cssText = t + ""
            }
        }), i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
            get: function(n) {
                var t = n.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        })), i.support.enctype || (i.propFix.enctype = "encoding"), i.support.checkOn || i.each(["radio", "checkbox"], function() {
            i.valHooks[this] = {
                get: function(n) {
                    return null === n.getAttribute("value") ? "on" : n.value
                }
            }
        }), i.each(["radio", "checkbox"], function() {
            i.valHooks[this] = i.extend(i.valHooks[this], {
                set: function(n, r) {
                    return i.isArray(r) ? n.checked = i.inArray(i(n).val(), r) >= 0 : t
                }
            })
        });
        var ui = /^(?:input|select|textarea)$/i,
            te = /^key/,
            ie = /^(?:mouse|contextmenu)|click/,
            or = /^(?:focusinfocus|focusoutblur)$/,
            sr = /^([^.]*)(?:\.(.+)|)$/;
        i.event = {
                global: {},
                add: function(n, r, u, f, e) {
                    var b, p, k, w, c, l, a, v, h, d, g, y = i._data(n);
                    if (y) {
                        for (u.handler && (w = u, u = w.handler, e = w.selector), u.guid || (u.guid = i.guid++), (p = y.events) || (p = y.events = {}), (l = y.handle) || (l = y.handle = function(n) {
                                return typeof i === o || n && i.event.triggered === n.type ? t : i.event.dispatch.apply(l.elem, arguments)
                            }, l.elem = n), r = (r || "").match(s) || [""], k = r.length; k--;) b = sr.exec(r[k]) || [], h = g = b[1], d = (b[2] || "").split(".").sort(), c = i.event.special[h] || {}, h = (e ? c.delegateType : c.bindType) || h, c = i.event.special[h] || {}, a = i.extend({
                            type: h,
                            origType: g,
                            data: f,
                            handler: u,
                            guid: u.guid,
                            selector: e,
                            needsContext: e && i.expr.match.needsContext.test(e),
                            namespace: d.join(".")
                        }, w), (v = p[h]) || (v = p[h] = [], v.delegateCount = 0, c.setup && c.setup.call(n, f, d, l) !== !1 || (n.addEventListener ? n.addEventListener(h, l, !1) : n.attachEvent && n.attachEvent("on" + h, l))), c.add && (c.add.call(n, a), a.handler.guid || (a.handler.guid = u.guid)), e ? v.splice(v.delegateCount++, 0, a) : v.push(a), i.event.global[h] = !0;
                        n = null
                    }
                },
                remove: function(n, t, r, u, f) {
                    var y, o, h, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
                    if (v && (a = v.events)) {
                        for (t = (t || "").match(s) || [""], p = t.length; p--;)
                            if (h = sr.exec(t[p]) || [], e = k = h[1], w = (h[2] || "").split(".").sort(), e) {
                                for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, l = a[e] || [], h = h[2] && RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = y = l.length; y--;) o = l[y], !f && k !== o.origType || r && r.guid !== o.guid || h && !h.test(o.namespace) || u && u !== o.selector && ("**" !== u || !o.selector) || (l.splice(y, 1), o.selector && l.delegateCount--, c.remove && c.remove.call(n, o));
                                b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle), delete a[e])
                            } else
                                for (e in a) i.event.remove(n, e + t[p], r, u, !0);
                        i.isEmptyObject(a) && (delete v.handle, i._removeData(n, "events"))
                    }
                },
                trigger: function(u, f, e, o) {
                    var a, v, h, p, l, c, w, b = [e || r],
                        s = it.call(u, "type") ? u.type : u,
                        y = it.call(u, "namespace") ? u.namespace.split(".") : [];
                    if (h = c = e = e || r, 3 !== e.nodeType && 8 !== e.nodeType && !or.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (y = s.split("."), s = y.shift(), y.sort()), v = 0 > s.indexOf(":") && "on" + s, u = u[i.expando] ? u : new i.Event(s, "object" == typeof u && u), u.isTrigger = !0, u.namespace = y.join("."), u.namespace_re = u.namespace ? RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, u.result = t, u.target || (u.target = e), f = null == f ? [u] : i.makeArray(f, [u]), l = i.event.special[s] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                        if (!o && !l.noBubble && !i.isWindow(e)) {
                            for (p = l.delegateType || s, or.test(p + s) || (h = h.parentNode); h; h = h.parentNode) b.push(h), c = h;
                            c === (e.ownerDocument || r) && b.push(c.defaultView || c.parentWindow || n)
                        }
                        for (w = 0;
                            (h = b[w++]) && !u.isPropagationStopped();) u.type = w > 1 ? p : l.bindType || s, a = (i._data(h, "events") || {})[u.type] && i._data(h, "handle"), a && a.apply(h, f), a = v && h[v], a && i.acceptData(h) && a.apply && a.apply(h, f) === !1 && u.preventDefault();
                        if (u.type = s, !(o || u.isDefaultPrevented() || l._default && l._default.apply(e.ownerDocument, f) !== !1 || "click" === s && i.nodeName(e, "a") || !i.acceptData(e) || !v || !e[s] || i.isWindow(e))) {
                            c = e[v], c && (e[v] = null), i.event.triggered = s;
                            try {
                                e[s]()
                            } catch (k) {}
                            i.event.triggered = t, c && (e[v] = c)
                        }
                        return u.result
                    }
                },
                dispatch: function(n) {
                    n = i.event.fix(n);
                    var o, e, r, u, s, h = [],
                        c = l.call(arguments),
                        a = (i._data(this, "events") || {})[n.type] || [],
                        f = i.event.special[n.type] || {};
                    if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
                        for (h = i.event.handlers.call(this, n, a), o = 0;
                            (u = h[o++]) && !n.isPropagationStopped();)
                            for (n.currentTarget = u.elem, s = 0;
                                (r = u.handlers[s++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(r.namespace)) && (n.handleObj = r, n.data = r.data, e = ((i.event.special[r.origType] || {}).handle || r.handler).apply(u.elem, c), e !== t && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation()));
                        return f.postDispatch && f.postDispatch.call(this, n), n.result
                    }
                },
                handlers: function(n, r) {
                    var e, o, f, s, c = [],
                        h = r.delegateCount,
                        u = n.target;
                    if (h && u.nodeType && (!n.button || "click" !== n.type))
                        for (; u != this; u = u.parentNode || this)
                            if (1 === u.nodeType && (u.disabled !== !0 || "click" !== n.type)) {
                                for (f = [], s = 0; h > s; s++) o = r[s], e = o.selector + " ", f[e] === t && (f[e] = o.needsContext ? i(e, this).index(u) >= 0 : i.find(e, this, null, [u]).length), f[e] && f.push(o);
                                f.length && c.push({
                                    elem: u,
                                    handlers: f
                                })
                            }
                    return r.length > h && c.push({
                        elem: this,
                        handlers: r.slice(h)
                    }), c
                },
                fix: function(n) {
                    if (n[i.expando]) return n;
                    var e, o, s, u = n.type,
                        f = n,
                        t = this.fixHooks[u];
                    for (t || (this.fixHooks[u] = t = ie.test(u) ? this.mouseHooks : te.test(u) ? this.keyHooks : {}), s = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(f), e = s.length; e--;) o = s[e], n[o] = f[o];
                    return n.target || (n.target = f.srcElement || r), 3 === n.target.nodeType && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, t.filter ? t.filter(n, f) : n
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(n, t) {
                        return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(n, i) {
                        var u, o, f, e = i.button,
                            s = i.fromElement;
                        return null == n.pageX && null != i.clientX && (o = n.target.ownerDocument || r, f = o.documentElement, u = o.body, n.pageX = i.clientX + (f && f.scrollLeft || u && u.scrollLeft || 0) - (f && f.clientLeft || u && u.clientLeft || 0), n.pageY = i.clientY + (f && f.scrollTop || u && u.scrollTop || 0) - (f && f.clientTop || u && u.clientTop || 0)), !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s), n.which || e === t || (n.which = 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0), n
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        trigger: function() {
                            return i.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                        }
                    },
                    focus: {
                        trigger: function() {
                            if (this !== r.activeElement && this.focus) try {
                                return this.focus(), !1
                            } catch (n) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === r.activeElement && this.blur ? (this.blur(), !1) : t
                        },
                        delegateType: "focusout"
                    },
                    beforeunload: {
                        postDispatch: function(n) {
                            n.result !== t && (n.originalEvent.returnValue = n.result)
                        }
                    }
                },
                simulate: function(n, t, r, u) {
                    var f = i.extend(new i.Event, r, {
                        type: n,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f), f.isDefaultPrevented() && r.preventDefault()
                }
            }, i.removeEvent = r.removeEventListener ? function(n, t, i) {
                n.removeEventListener && n.removeEventListener(t, i, !1)
            } : function(n, t, i) {
                var r = "on" + t;
                n.detachEvent && (typeof n[r] === o && (n[r] = null), n.detachEvent(r, i))
            }, i.Event = function(n, r) {
                return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? ht : d) : this.type = n, r && i.extend(this, r), this.timeStamp = n && n.timeStamp || i.now(), this[i.expando] = !0, t) : new i.Event(n, r)
            }, i.Event.prototype = {
                isDefaultPrevented: d,
                isPropagationStopped: d,
                isImmediatePropagationStopped: d,
                preventDefault: function() {
                    var n = this.originalEvent;
                    this.isDefaultPrevented = ht, n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
                },
                stopPropagation: function() {
                    var n = this.originalEvent;
                    this.isPropagationStopped = ht, n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = ht, this.stopPropagation()
                }
            }, i.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(n, t) {
                i.event.special[n] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(n) {
                        var u, f = this,
                            r = n.relatedTarget,
                            e = n.handleObj;
                        return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
                    }
                }
            }), i.support.submitBubbles || (i.event.special.submit = {
                setup: function() {
                    return i.nodeName(this, "form") ? !1 : (i.event.add(this, "click._submit keypress._submit", function(n) {
                        var u = n.target,
                            r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                        r && !i._data(r, "submitBubbles") && (i.event.add(r, "submit._submit", function(n) {
                            n._submit_bubble = !0
                        }), i._data(r, "submitBubbles", !0))
                    }), t)
                },
                postDispatch: function(n) {
                    n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
                },
                teardown: function() {
                    return i.nodeName(this, "form") ? !1 : (i.event.remove(this, "._submit"), t)
                }
            }), i.support.changeBubbles || (i.event.special.change = {
                setup: function() {
                    return ui.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (i.event.add(this, "propertychange._change", function(n) {
                        "checked" === n.originalEvent.propertyName && (this._just_changed = !0)
                    }), i.event.add(this, "click._change", function(n) {
                        this._just_changed && !n.isTrigger && (this._just_changed = !1), i.event.simulate("change", this, n, !0)
                    })), !1) : (i.event.add(this, "beforeactivate._change", function(n) {
                        var t = n.target;
                        ui.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
                            !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                        }), i._data(t, "changeBubbles", !0))
                    }), t)
                },
                handle: function(n) {
                    var i = n.target;
                    return this !== i || n.isSimulated || n.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? n.handleObj.handler.apply(this, arguments) : t
                },
                teardown: function() {
                    return i.event.remove(this, "._change"), !ui.test(this.nodeName)
                }
            }), i.support.focusinBubbles || i.each({
                focus: "focusin",
                blur: "focusout"
            }, function(n, t) {
                var u = 0,
                    f = function(n) {
                        i.event.simulate(t, n.target, i.event.fix(n), !0)
                    };
                i.event.special[t] = {
                    setup: function() {
                        0 == u++ && r.addEventListener(n, f, !0)
                    },
                    teardown: function() {
                        0 == --u && r.removeEventListener(n, f, !0)
                    }
                }
            }), i.fn.extend({
                on: function(n, r, u, f, e) {
                    var s, o;
                    if ("object" == typeof n) {
                        "string" != typeof r && (u = u || r, r = t);
                        for (s in n) this.on(s, r, u, n[s], e);
                        return this
                    }
                    if (null == u && null == f ? (f = r, u = r = t) : null == f && ("string" == typeof r ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = d;
                    else if (!f) return this;
                    return 1 === e && (o = f, f = function(n) {
                        return i().off(n), o.apply(this, arguments)
                    }, f.guid = o.guid || (o.guid = i.guid++)), this.each(function() {
                        i.event.add(this, n, f, u, r)
                    })
                },
                one: function(n, t, i, r) {
                    return this.on(n, t, i, r, 1)
                },
                off: function(n, r, u) {
                    var f, e;
                    if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
                    if ("object" == typeof n) {
                        for (e in n) this.off(e, r, n[e]);
                        return this
                    }
                    return (r === !1 || "function" == typeof r) && (u = r, r = t), u === !1 && (u = d), this.each(function() {
                        i.event.remove(this, n, u, r)
                    })
                },
                bind: function(n, t, i) {
                    return this.on(n, null, t, i)
                },
                unbind: function(n, t) {
                    return this.off(n, null, t)
                },
                delegate: function(n, t, i, r) {
                    return this.on(t, n, i, r)
                },
                undelegate: function(n, t, i) {
                    return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
                },
                trigger: function(n, t) {
                    return this.each(function() {
                        i.event.trigger(n, t, this)
                    })
                },
                triggerHandler: function(n, r) {
                    var u = this[0];
                    return u ? i.event.trigger(n, r, u, !0) : t
                }
            }),
            function(n, t) {
                function ti(n) {
                    return ir.test(n + "")
                }

                function ii() {
                    var n, t = [];
                    return n = function(i, u) {
                        return t.push(i += " ") > r.cacheLength && delete n[t.shift()], n[i] = u
                    }
                }

                function l(n) {
                    return n[f] = !0, n
                }

                function b(n) {
                    var t = s.createElement("div");
                    try {
                        return n(t)
                    } catch (i) {
                        return !1
                    } finally {
                        t = null
                    }
                }

                function u(n, t, i, r) {
                    var y, u, e, l, p, v, w, h, d, b;
                    if ((t ? t.ownerDocument || t : k) !== s && it(t), t = t || s, i = i || [], !n || "string" != typeof n) return i;
                    if (1 !== (l = t.nodeType) && 9 !== l) return [];
                    if (!c && !r) {
                        if (y = rr.exec(n))
                            if (e = y[1]) {
                                if (9 === l) {
                                    if (u = t.getElementById(e), !u || !u.parentNode) return i;
                                    if (u.id === e) return i.push(u), i
                                } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(e)) && et(t, u) && u.id === e) return i.push(u), i
                            } else {
                                if (y[2]) return ut.apply(i, ft.call(t.getElementsByTagName(n), 0)), i;
                                if ((e = y[3]) && o.getByClassName && t.getElementsByClassName) return ut.apply(i, ft.call(t.getElementsByClassName(e), 0)), i
                            }
                        if (o.qsa && !a.test(n)) {
                            if (w = !0, h = f, d = t, b = 9 === l && n, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                                for (v = yt(n), (w = t.getAttribute("id")) ? h = w.replace(er, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", p = v.length; p--;) v[p] = h + pt(v[p]);
                                d = ni.test(n) && t.parentNode || t, b = v.join(",")
                            }
                            if (b) try {
                                return ut.apply(i, ft.call(d.querySelectorAll(b), 0)), i
                            } catch (g) {} finally {
                                w || t.removeAttribute("id")
                            }
                        }
                    }
                    return ar(n.replace(at, "$1"), t, i, r)
                }

                function yi(n, t) {
                    var i = t && n,
                        r = i && (~t.sourceIndex || li) - (~n.sourceIndex || li);
                    if (r) return r;
                    if (i)
                        while (i = i.nextSibling)
                            if (i === t) return -1;
                    return n ? 1 : -1
                }

                function sr(n) {
                    return function(t) {
                        var i = t.nodeName.toLowerCase();
                        return "input" === i && t.type === n
                    }
                }

                function hr(n) {
                    return function(t) {
                        var i = t.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && t.type === n
                    }
                }

                function g(n) {
                    return l(function(t) {
                        return t = +t, l(function(i, r) {
                            for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                        })
                    })
                }

                function yt(n, t) {
                    var e, f, s, o, i, h, c, l = hi[n + " "];
                    if (l) return t ? 0 : l.slice(0);
                    for (i = n, h = [], c = r.preFilter; i;) {
                        (!e || (f = di.exec(i))) && (f && (i = i.slice(f[0].length) || i), h.push(s = [])), e = !1, (f = gi.exec(i)) && (e = f.shift(), s.push({
                            value: e,
                            type: f[0].replace(at, " ")
                        }), i = i.slice(e.length));
                        for (o in r.filter)(f = vt[o].exec(i)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                            value: e,
                            type: o,
                            matches: f
                        }), i = i.slice(e.length));
                        if (!e) break
                    }
                    return t ? i.length : i ? u.error(n) : hi(n, h).slice(0)
                }

                function pt(n) {
                    for (var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value;
                    return i
                }

                function ri(n, t, i) {
                    var r = t.dir,
                        u = i && "parentNode" === r,
                        e = wi++;
                    return t.first ? function(t, i, f) {
                        while (t = t[r])
                            if (1 === t.nodeType || u) return n(t, i, f)
                    } : function(t, i, o) {
                        var h, s, c, l = v + " " + e;
                        if (o) {
                            while (t = t[r])
                                if ((1 === t.nodeType || u) && n(t, i, o)) return !0
                        } else
                            while (t = t[r])
                                if (1 === t.nodeType || u)
                                    if (c = t[f] || (t[f] = {}), (s = c[r]) && s[0] === l) {
                                        if ((h = s[1]) === !0 || h === ot) return h === !0
                                    } else if (s = c[r] = [l], s[1] = n(t, i, o) || ot, s[1] === !0) return !0
                    }
                }

                function ui(n) {
                    return n.length > 1 ? function(t, i, r) {
                        for (var u = n.length; u--;)
                            if (!n[u](t, i, r)) return !1;
                        return !0
                    } : n[0]
                }

                function wt(n, t, i, r, u) {
                    for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
                    return o
                }

                function fi(n, t, i, r, u, e) {
                    return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), l(function(f, e, o, s) {
                        var l, c, a, p = [],
                            y = [],
                            w = e.length,
                            b = f || lr(t || "*", o.nodeType ? [o] : o, []),
                            v = !n || !f && t ? b : wt(b, p, n, o, s),
                            h = i ? u || (f ? n : w || r) ? [] : e : v;
                        if (i && i(v, h, o, s), r)
                            for (l = wt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                        if (f) {
                            if (u || n) {
                                if (u) {
                                    for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                                    u(null, h = [], l, s)
                                }
                                for (c = h.length; c--;)(a = h[c]) && (l = u ? dt.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                            }
                        } else h = wt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : ut.apply(e, h)
                    })
                }

                function ei(n) {
                    for (var s, u, i, o = n.length, h = r.relative[n[0].type], c = h || r.relative[" "], t = h ? 1 : 0, l = ri(function(n) {
                            return n === s
                        }, c, !0), a = ri(function(n) {
                            return dt.call(s, n) > -1
                        }, c, !0), e = [function(n, t, i) {
                            return !h && (i || t !== ht) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
                        }]; o > t; t++)
                        if (u = r.relative[n[t].type]) e = [ri(ui(e), u)];
                        else {
                            if (u = r.filter[n[t].type].apply(null, n[t].matches), u[f]) {
                                for (i = ++t; o > i; i++)
                                    if (r.relative[n[i].type]) break;
                                return fi(t > 1 && ui(e), t > 1 && pt(n.slice(0, t - 1)).replace(at, "$1"), u, i > t && ei(n.slice(t, i)), o > i && ei(n = n.slice(i)), o > i && pt(n))
                            }
                            e.push(u)
                        }
                    return ui(e)
                }

                function cr(n, t) {
                    var f = 0,
                        i = t.length > 0,
                        e = n.length > 0,
                        o = function(o, h, c, l, a) {
                            var p, d, b, w = [],
                                k = 0,
                                y = "0",
                                g = o && [],
                                nt = null != a,
                                tt = ht,
                                rt = o || e && r.find.TAG("*", a && h.parentNode || h),
                                it = v += null == tt ? 1 : Math.random() || .1;
                            for (nt && (ht = h !== s && h, ot = f); null != (p = rt[y]); y++) {
                                if (e && p) {
                                    for (d = 0; b = n[d++];)
                                        if (b(p, h, c)) {
                                            l.push(p);
                                            break
                                        }
                                    nt && (v = it, ot = ++f)
                                }
                                i && ((p = !b && p) && k--, o && g.push(p))
                            }
                            if (k += y, i && y !== k) {
                                for (d = 0; b = t[d++];) b(g, w, h, c);
                                if (o) {
                                    if (k > 0)
                                        while (y--) g[y] || w[y] || (w[y] = bi.call(l));
                                    w = wt(w)
                                }
                                ut.apply(l, w), nt && !o && w.length > 0 && k + t.length > 1 && u.uniqueSort(l)
                            }
                            return nt && (v = it, ht = tt), g
                        };
                    return i ? l(o) : o
                }

                function lr(n, t, i) {
                    for (var r = 0, f = t.length; f > r; r++) u(n, t[r], i);
                    return i
                }

                function ar(n, t, i, u) {
                    var o, f, e, h, l, s = yt(n);
                    if (!u && 1 === s.length) {
                        if (f = s[0] = s[0].slice(0), f.length > 2 && "ID" === (e = f[0]).type && 9 === t.nodeType && !c && r.relative[f[1].type]) {
                            if (t = r.find.ID(e.matches[0].replace(p, w), t)[0], !t) return i;
                            n = n.slice(f.shift().value.length)
                        }
                        for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) {
                            if (e = f[o], r.relative[h = e.type]) break;
                            if ((l = r.find[h]) && (u = l(e.matches[0].replace(p, w), ni.test(f[0].type) && t.parentNode || t))) {
                                if (f.splice(o, 1), n = u.length && pt(f), !n) return ut.apply(i, ft.call(u, 0)), i;
                                break
                            }
                        }
                    }
                    return bt(n, s)(u, t, c, i, ni.test(n)), i
                }

                function pi() {}
                var nt, ot, r, st, oi, bt, tt, ht, it, s, h, c, a, rt, ct, et, kt, f = "sizzle" + -new Date,
                    k = n.document,
                    o = {},
                    v = 0,
                    wi = 0,
                    si = ii(),
                    hi = ii(),
                    ci = ii(),
                    y = typeof t,
                    li = -2147483648,
                    lt = [],
                    bi = lt.pop,
                    ut = lt.push,
                    ft = lt.slice,
                    dt = lt.indexOf || function(n) {
                        for (var t = 0, i = this.length; i > t; t++)
                            if (this[t] === n) return t;
                        return -1
                    },
                    e = "[\\x20\\t\\r\\n\\f]",
                    d = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ai = d.replace("w", "w#"),
                    ki = "([*^$|!~]?=)",
                    vi = "\\[" + e + "*(" + d + ")" + e + "*(?:" + ki + e + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ai + ")|)|)" + e + "*\\]",
                    gt = ":(" + d + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + vi.replace(3, 8) + ")*)|.*)\\)|)",
                    at = RegExp("^" + e + "+|((?:^|[^\\\\])(?:\\\\.)*)" + e + "+$", "g"),
                    di = RegExp("^" + e + "*," + e + "*"),
                    gi = RegExp("^" + e + "*([\\x20\\t\\r\\n\\f>+~])" + e + "*"),
                    nr = RegExp(gt),
                    tr = RegExp("^" + ai + "$"),
                    vt = {
                        ID: RegExp("^#(" + d + ")"),
                        CLASS: RegExp("^\\.(" + d + ")"),
                        NAME: RegExp("^\\[name=['\"]?(" + d + ")['\"]?\\]"),
                        TAG: RegExp("^(" + d.replace("w", "w*") + ")"),
                        ATTR: RegExp("^" + vi),
                        PSEUDO: RegExp("^" + gt),
                        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + e + "*(even|odd|(([+-]|)(\\d*)n|)" + e + "*(?:([+-]|)" + e + "*(\\d+)|))" + e + "*\\)|)", "i"),
                        needsContext: RegExp("^" + e + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + e + "*((?:-\\d)?\\d*)" + e + "*\\)|)(?=[^-]|$)", "i")
                    },
                    ni = /[\x20\t\r\n\f]*[+~]/,
                    ir = /^[^{]+\{\s*\[native code/,
                    rr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ur = /^(?:input|select|textarea|button)$/i,
                    fr = /^h\d$/i,
                    er = /'|\\/g,
                    or = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    p = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                    w = function(n, t) {
                        var i = "0x" + t - 65536;
                        return i !== i ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                    };
                try {
                    ft.call(k.documentElement.childNodes, 0)[0].nodeType
                } catch (vr) {
                    ft = function(n) {
                        for (var t, i = []; t = this[n++];) i.push(t);
                        return i
                    }
                }
                oi = u.isXML = function(n) {
                    var t = n && (n.ownerDocument || n).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, it = u.setDocument = function(n) {
                    var i = n ? n.ownerDocument || n : k;
                    return i !== s && 9 === i.nodeType && i.documentElement ? (s = i, h = i.documentElement, c = oi(i), o.tagNameNoComments = b(function(n) {
                        return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
                    }), o.attributes = b(function(n) {
                        n.innerHTML = "<select><\/select>";
                        var t = typeof n.lastChild.getAttribute("multiple");
                        return "boolean" !== t && "string" !== t
                    }), o.getByClassName = b(function(n) {
                        return n.innerHTML = "<div class='hidden e'><\/div><div class='hidden'><\/div>", n.getElementsByClassName && n.getElementsByClassName("e").length ? (n.lastChild.className = "e", 2 === n.getElementsByClassName("e").length) : !1
                    }), o.getByName = b(function(n) {
                        n.id = f + 0, n.innerHTML = "<a name='" + f + "'><\/a><div name='" + f + "'><\/div>", h.insertBefore(n, h.firstChild);
                        var t = i.getElementsByName && i.getElementsByName(f).length === 2 + i.getElementsByName(f + 0).length;
                        return o.getIdNotName = !i.getElementById(f), h.removeChild(n), t
                    }), r.attrHandle = b(function(n) {
                        return n.innerHTML = "<a href='#'><\/a>", n.firstChild && typeof n.firstChild.getAttribute !== y && "#" === n.firstChild.getAttribute("href")
                    }) ? {} : {
                        href: function(n) {
                            return n.getAttribute("href", 2)
                        },
                        type: function(n) {
                            return n.getAttribute("type")
                        }
                    }, o.getIdNotName ? (r.find.ID = function(n, t) {
                        if (typeof t.getElementById !== y && !c) {
                            var i = t.getElementById(n);
                            return i && i.parentNode ? [i] : []
                        }
                    }, r.filter.ID = function(n) {
                        var t = n.replace(p, w);
                        return function(n) {
                            return n.getAttribute("id") === t
                        }
                    }) : (r.find.ID = function(n, i) {
                        if (typeof i.getElementById !== y && !c) {
                            var r = i.getElementById(n);
                            return r ? r.id === n || typeof r.getAttributeNode !== y && r.getAttributeNode("id").value === n ? [r] : t : []
                        }
                    }, r.filter.ID = function(n) {
                        var t = n.replace(p, w);
                        return function(n) {
                            var i = typeof n.getAttributeNode !== y && n.getAttributeNode("id");
                            return i && i.value === t
                        }
                    }), r.find.TAG = o.tagNameNoComments ? function(n, i) {
                        return typeof i.getElementsByTagName !== y ? i.getElementsByTagName(n) : t
                    } : function(n, t) {
                        var i, r = [],
                            f = 0,
                            u = t.getElementsByTagName(n);
                        if ("*" === n) {
                            while (i = u[f++]) 1 === i.nodeType && r.push(i);
                            return r
                        }
                        return u
                    }, r.find.NAME = o.getByName && function(n, i) {
                        return typeof i.getElementsByName !== y ? i.getElementsByName(name) : t
                    }, r.find.CLASS = o.getByClassName && function(n, i) {
                        return typeof i.getElementsByClassName === y || c ? t : i.getElementsByClassName(n)
                    }, rt = [], a = [":focus"], (o.qsa = ti(i.querySelectorAll)) && (b(function(n) {
                        n.innerHTML = "<select><option selected=''><\/option><\/select>", n.querySelectorAll("[selected]").length || a.push("\\[" + e + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), n.querySelectorAll(":checked").length || a.push(":checked")
                    }), b(function(n) {
                        n.innerHTML = "<input type='hidden' i=''/>", n.querySelectorAll("[i^='']").length && a.push("[*^$]=" + e + "*(?:\"\"|'')"), n.querySelectorAll(":enabled").length || a.push(":enabled", ":disabled"), n.querySelectorAll("*,:x"), a.push(",.*:")
                    })), (o.matchesSelector = ti(ct = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && b(function(n) {
                        o.disconnectedMatch = ct.call(n, "div"), ct.call(n, "[s!='']:x"), rt.push("!=", gt)
                    }), a = RegExp(a.join("|")), rt = RegExp(rt.join("|")), et = ti(h.contains) || h.compareDocumentPosition ? function(n, t) {
                        var r = 9 === n.nodeType ? n.documentElement : n,
                            i = t && t.parentNode;
                        return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
                    } : function(n, t) {
                        if (t)
                            while (t = t.parentNode)
                                if (t === n) return !0;
                        return !1
                    }, kt = h.compareDocumentPosition ? function(n, t) {
                        var r;
                        return n === t ? (tt = !0, 0) : (r = t.compareDocumentPosition && n.compareDocumentPosition && n.compareDocumentPosition(t)) ? 1 & r || n.parentNode && 11 === n.parentNode.nodeType ? n === i || et(k, n) ? -1 : t === i || et(k, t) ? 1 : 0 : 4 & r ? -1 : 1 : n.compareDocumentPosition ? -1 : 1
                    } : function(n, t) {
                        var r, u = 0,
                            o = n.parentNode,
                            s = t.parentNode,
                            f = [n],
                            e = [t];
                        if (n === t) return tt = !0, 0;
                        if (!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : 0;
                        if (o === s) return yi(n, t);
                        for (r = n; r = r.parentNode;) f.unshift(r);
                        for (r = t; r = r.parentNode;) e.unshift(r);
                        while (f[u] === e[u]) u++;
                        return u ? yi(f[u], e[u]) : f[u] === k ? -1 : e[u] === k ? 1 : 0
                    }, tt = !1, [0, 0].sort(kt), o.detectDuplicates = tt, s) : s
                }, u.matches = function(n, t) {
                    return u(n, null, null, t)
                }, u.matchesSelector = function(n, t) {
                    if ((n.ownerDocument || n) !== s && it(n), t = t.replace(or, "='$1']"), !(!o.matchesSelector || c || rt && rt.test(t) || a.test(t))) try {
                        var i = ct.call(n, t);
                        if (i || o.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i
                    } catch (r) {}
                    return u(t, s, null, [n]).length > 0
                }, u.contains = function(n, t) {
                    return (n.ownerDocument || n) !== s && it(n), et(n, t)
                }, u.attr = function(n, t) {
                    var i;
                    return (n.ownerDocument || n) !== s && it(n), c || (t = t.toLowerCase()), (i = r.attrHandle[t]) ? i(n) : c || o.attributes ? n.getAttribute(t) : ((i = n.getAttributeNode(t)) || n.getAttribute(t)) && n[t] === !0 ? t : i && i.specified ? i.value : null
                }, u.error = function(n) {
                    throw Error("Syntax error, unrecognized expression: " + n);
                }, u.uniqueSort = function(n) {
                    var r, u = [],
                        t = 1,
                        i = 0;
                    if (tt = !o.detectDuplicates, n.sort(kt), tt) {
                        for (; r = n[t]; t++) r === n[t - 1] && (i = u.push(t));
                        while (i--) n.splice(u[i], 1)
                    }
                    return n
                }, st = u.getText = function(n) {
                    var r, i = "",
                        u = 0,
                        t = n.nodeType;
                    if (t) {
                        if (1 === t || 9 === t || 11 === t) {
                            if ("string" == typeof n.textContent) return n.textContent;
                            for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                        } else if (3 === t || 4 === t) return n.nodeValue
                    } else
                        for (; r = n[u]; u++) i += st(r);
                    return i
                }, r = u.selectors = {
                    cacheLength: 50,
                    createPseudo: l,
                    match: vt,
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(n) {
                            return n[1] = n[1].replace(p, w), n[3] = (n[4] || n[5] || "").replace(p, w), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                        },
                        CHILD: function(n) {
                            return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
                        },
                        PSEUDO: function(n) {
                            var i, t = !n[5] && n[2];
                            return vt.CHILD.test(n[0]) ? null : (n[4] ? n[2] = n[4] : t && nr.test(t) && (i = yt(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(n) {
                            return "*" === n ? function() {
                                return !0
                            } : (n = n.replace(p, w).toLowerCase(), function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === n
                            })
                        },
                        CLASS: function(n) {
                            var t = si[n + " "];
                            return t || (t = RegExp("(^|" + e + ")" + n + "(" + e + "|$)")) && si(n, function(n) {
                                return t.test(n.className || typeof n.getAttribute !== y && n.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(n, t, i) {
                            return function(r) {
                                var f = u.attr(r, n);
                                return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function(n, t, i, r, u) {
                            var s = "nth" !== n.slice(0, 3),
                                o = "last" !== n.slice(-4),
                                e = "of-type" === t;
                            return 1 === r && 0 === u ? function(n) {
                                return !!n.parentNode
                            } : function(t, i, h) {
                                var a, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling",
                                    p = t.parentNode,
                                    g = e && t.nodeName.toLowerCase(),
                                    d = !h && !e;
                                if (p) {
                                    if (s) {
                                        while (b) {
                                            for (c = t; c = c[b];)
                                                if (e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                            w = b = "only" === n && !w && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (w = [o ? p.firstChild : p.lastChild], o && d) {
                                        for (k = p[f] || (p[f] = {}), a = k[n] || [], y = a[0] === v && a[1], l = a[0] === v && a[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();)
                                            if (1 === c.nodeType && ++l && c === t) {
                                                k[n] = [v, y, l];
                                                break
                                            }
                                    } else if (d && (a = (t[f] || (t[f] = {}))[n]) && a[0] === v) l = a[1];
                                    else
                                        while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                                            if ((e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [v, l]), c === t)) break; return l -= u, l === r || 0 == l % r && l / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(n, t) {
                            var e, i = r.pseudos[n] || r.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                            return i[f] ? i(t) : i.length > 1 ? (e = [n, n, "", t], r.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, r) {
                                for (var u, f = i(n, t), e = f.length; e--;) u = dt.call(n, f[e]), n[u] = !(r[u] = f[e])
                            }) : function(n) {
                                return i(n, 0, e)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: l(function(n) {
                            var i = [],
                                r = [],
                                t = bt(n.replace(at, "$1"));
                            return t[f] ? l(function(n, i, r, u) {
                                for (var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e))
                            }) : function(n, u, f) {
                                return i[0] = n, t(i, null, f, r), !r.pop()
                            }
                        }),
                        has: l(function(n) {
                            return function(t) {
                                return u(n, t).length > 0
                            }
                        }),
                        contains: l(function(n) {
                            return function(t) {
                                return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                            }
                        }),
                        lang: l(function(n) {
                            return tr.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(p, w).toLowerCase(),
                                function(t) {
                                    var i;
                                    do
                                        if (i = c ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var i = n.location && n.location.hash;
                            return i && i.slice(1) === t.id
                        },
                        root: function(n) {
                            return n === h
                        },
                        focus: function(n) {
                            return n === s.activeElement && (!s.hasFocus || s.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                        },
                        enabled: function(n) {
                            return n.disabled === !1
                        },
                        disabled: function(n) {
                            return n.disabled === !0
                        },
                        checked: function(n) {
                            var t = n.nodeName.toLowerCase();
                            return "input" === t && !!n.checked || "option" === t && !!n.selected
                        },
                        selected: function(n) {
                            return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                        },
                        empty: function(n) {
                            for (n = n.firstChild; n; n = n.nextSibling)
                                if (n.nodeName > "@" || 3 === n.nodeType || 4 === n.nodeType) return !1;
                            return !0
                        },
                        parent: function(n) {
                            return !r.pseudos.empty(n)
                        },
                        header: function(n) {
                            return fr.test(n.nodeName)
                        },
                        input: function(n) {
                            return ur.test(n.nodeName)
                        },
                        button: function(n) {
                            var t = n.nodeName.toLowerCase();
                            return "input" === t && "button" === n.type || "button" === t
                        },
                        text: function(n) {
                            var t;
                            return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || t.toLowerCase() === n.type)
                        },
                        first: g(function() {
                            return [0]
                        }),
                        last: g(function(n, t) {
                            return [t - 1]
                        }),
                        eq: g(function(n, t, i) {
                            return [0 > i ? i + t : i]
                        }),
                        even: g(function(n, t) {
                            for (var i = 0; t > i; i += 2) n.push(i);
                            return n
                        }),
                        odd: g(function(n, t) {
                            for (var i = 1; t > i; i += 2) n.push(i);
                            return n
                        }),
                        lt: g(function(n, t, i) {
                            for (var r = 0 > i ? i + t : i; --r >= 0;) n.push(r);
                            return n
                        }),
                        gt: g(function(n, t, i) {
                            for (var r = 0 > i ? i + t : i; t > ++r;) n.push(r);
                            return n
                        })
                    }
                };
                for (nt in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[nt] = sr(nt);
                for (nt in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[nt] = hr(nt);
                bt = u.compile = function(n, t) {
                    var r, u = [],
                        e = [],
                        i = ci[n + " "];
                    if (!i) {
                        for (t || (t = yt(n)), r = t.length; r--;) i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
                        i = ci(n, cr(e, u))
                    }
                    return i
                }, r.pseudos.nth = r.pseudos.eq, r.filters = pi.prototype = r.pseudos, r.setFilters = new pi, it(), u.attr = i.attr, i.find = u, i.expr = u.selectors, i.expr[":"] = i.expr.pseudos, i.unique = u.uniqueSort, i.text = u.getText, i.isXMLDoc = u.isXML, i.contains = u.contains
            }(n);
        var re = /Until$/,
            ue = /^(?:parents|prev(?:Until|All))/,
            fe = /^.[^:#\[\.,]*$/,
            hr = i.expr.match.needsContext,
            ee = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        i.fn.extend({
            find: function(n) {
                var t, r, f, u = this.length;
                if ("string" != typeof n) return f = this, this.pushStack(i(n).filter(function() {
                    for (t = 0; u > t; t++)
                        if (i.contains(f[t], this)) return !0
                }));
                for (r = [], t = 0; u > t; t++) i.find(n, this[t], r);
                return r = this.pushStack(u > 1 ? i.unique(r) : r), r.selector = (this.selector ? this.selector + " " : "") + n, r
            },
            has: function(n) {
                var t, r = i(n, this),
                    u = r.length;
                return this.filter(function() {
                    for (t = 0; u > t; t++)
                        if (i.contains(this, r[t])) return !0
                })
            },
            not: function(n) {
                return this.pushStack(lr(this, n, !1))
            },
            filter: function(n) {
                return this.pushStack(lr(this, n, !0))
            },
            is: function(n) {
                return !!n && ("string" == typeof n ? hr.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
            },
            closest: function(n, t) {
                for (var r, f = 0, o = this.length, u = [], e = hr.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                    for (r = this[f]; r && r.ownerDocument && r !== t && 11 !== r.nodeType;) {
                        if (e ? e.index(r) > -1 : i.find.matchesSelector(r, n)) {
                            u.push(r);
                            break
                        }
                        r = r.parentNode
                    }
                return this.pushStack(u.length > 1 ? i.unique(u) : u)
            },
            index: function(n) {
                return n ? "string" == typeof n ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(n, t) {
                var r = "string" == typeof n ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
                    u = i.merge(this.get(), r);
                return this.pushStack(i.unique(u))
            },
            addBack: function(n) {
                return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
            }
        }), i.fn.andSelf = i.fn.addBack, i.each({
            parent: function(n) {
                var t = n.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(n) {
                return i.dir(n, "parentNode")
            },
            parentsUntil: function(n, t, r) {
                return i.dir(n, "parentNode", r)
            },
            next: function(n) {
                return cr(n, "nextSibling")
            },
            prev: function(n) {
                return cr(n, "previousSibling")
            },
            nextAll: function(n) {
                return i.dir(n, "nextSibling")
            },
            prevAll: function(n) {
                return i.dir(n, "previousSibling")
            },
            nextUntil: function(n, t, r) {
                return i.dir(n, "nextSibling", r)
            },
            prevUntil: function(n, t, r) {
                return i.dir(n, "previousSibling", r)
            },
            siblings: function(n) {
                return i.sibling((n.parentNode || {}).firstChild, n)
            },
            children: function(n) {
                return i.sibling(n.firstChild)
            },
            contents: function(n) {
                return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
            }
        }, function(n, t) {
            i.fn[n] = function(r, u) {
                var f = i.map(this, t, r);
                return re.test(n) || (u = r), u && "string" == typeof u && (f = i.filter(u, f)), f = this.length > 1 && !ee[n] ? i.unique(f) : f, this.length > 1 && ue.test(n) && (f = f.reverse()), this.pushStack(f)
            }
        }), i.extend({
            filter: function(n, t, r) {
                return r && (n = ":not(" + n + ")"), 1 === t.length ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
            },
            dir: function(n, r, u) {
                for (var e = [], f = n[r]; f && 9 !== f.nodeType && (u === t || 1 !== f.nodeType || !i(f).is(u));) 1 === f.nodeType && e.push(f), f = f[r];
                return e
            },
            sibling: function(n, t) {
                for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
                return i
            }
        });
        var vr = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            oe = / jQuery\d+="(?:null|\d+)"/g,
            yr = RegExp("<(?:" + vr + ")[\\s/>]", "i"),
            fi = /^\s+/,
            pr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            wr = /<([\w:]+)/,
            br = /<tbody/i,
            se = /<|&#?\w+;/,
            he = /<(?:script|style|link)/i,
            ei = /^(?:checkbox|radio)$/i,
            ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
            kr = /^$|\/(?:java|ecma)script/i,
            le = /^true\/(.*)/,
            ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            e = {
                option: [1, "<select multiple='multiple'>", "<\/select>"],
                legend: [1, "<fieldset>", "<\/fieldset>"],
                area: [1, "<map>", "<\/map>"],
                param: [1, "<object>", "<\/object>"],
                thead: [1, "<table>", "<\/table>"],
                tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
                col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
                td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
                _default: i.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
            },
            ve = ar(r),
            oi = ve.appendChild(r.createElement("div"));
        e.optgroup = e.option, e.tbody = e.tfoot = e.colgroup = e.caption = e.thead, e.th = e.td, i.fn.extend({
            text: function(n) {
                return i.access(this, function(n) {
                    return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
                }, null, n, arguments.length)
            },
            wrapAll: function(n) {
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                });
                if (this[0]) {
                    var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var n = this; n.firstChild && 1 === n.firstChild.nodeType;) n = n.firstChild;
                        return n
                    }).append(this)
                }
                return this
            },
            wrapInner: function(n) {
                return i.isFunction(n) ? this.each(function(t) {
                    i(this).wrapInner(n.call(this, t))
                }) : this.each(function() {
                    var t = i(this),
                        r = t.contents();
                    r.length ? r.wrapAll(n) : t.append(n)
                })
            },
            wrap: function(n) {
                var t = i.isFunction(n);
                return this.each(function(r) {
                    i(this).wrapAll(t ? n.call(this, r) : n)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(n) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(n)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(n) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(n, this.firstChild)
                })
            },
            before: function() {
                return this.domManip(arguments, !1, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this)
                })
            },
            after: function() {
                return this.domManip(arguments, !1, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
                })
            },
            remove: function(n, t) {
                for (var r, f = 0; null != (r = this[f]); f++)(!n || i.filter(n, [r]).length > 0) && (t || 1 !== r.nodeType || i.cleanData(u(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && si(u(r, "script")), r.parentNode.removeChild(r)));
                return this
            },
            empty: function() {
                for (var n, t = 0; null != (n = this[t]); t++) {
                    for (1 === n.nodeType && i.cleanData(u(n, !1)); n.firstChild;) n.removeChild(n.firstChild);
                    n.options && i.nodeName(n, "select") && (n.options.length = 0)
                }
                return this
            },
            clone: function(n, t) {
                return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function() {
                    return i.clone(this, n, t)
                })
            },
            html: function(n) {
                return i.access(this, function(n) {
                    var r = this[0] || {},
                        f = 0,
                        o = this.length;
                    if (n === t) return 1 === r.nodeType ? r.innerHTML.replace(oe, "") : t;
                    if (!("string" != typeof n || he.test(n) || !i.support.htmlSerialize && yr.test(n) || !i.support.leadingWhitespace && fi.test(n) || e[(wr.exec(n) || ["", ""])[1].toLowerCase()])) {
                        n = n.replace(pr, "<$1><\/$2>");
                        try {
                            for (; o > f; f++) r = this[f] || {}, 1 === r.nodeType && (i.cleanData(u(r, !1)), r.innerHTML = n);
                            r = 0
                        } catch (s) {}
                    }
                    r && this.empty().append(n)
                }, null, n, arguments.length)
            },
            replaceWith: function(n) {
                var t = i.isFunction(n);
                return t || "string" == typeof n || (n = i(n).not(this).detach()), this.domManip([n], !0, function(n) {
                    var r = this.nextSibling,
                        t = this.parentNode;
                    t && (i(this).remove(), t.insertBefore(n, r))
                })
            },
            detach: function(n) {
                return this.remove(n, !0)
            },
            domManip: function(n, r, f) {
                n = bi.apply([], n);
                var c, e, l, s, y, h, o = 0,
                    a = this.length,
                    w = this,
                    b = a - 1,
                    v = n[0],
                    p = i.isFunction(v);
                if (p || !(1 >= a || "string" != typeof v || i.support.checkClone) && ce.test(v)) return this.each(function(i) {
                    var u = w.eq(i);
                    p && (n[0] = v.call(this, i, r ? u.html() : t)), u.domManip(n, r, f)
                });
                if (a && (h = i.buildFragment(n, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
                    for (r = r && i.nodeName(c, "tr"), s = i.map(u(h, "script"), dr), l = s.length; a > o; o++) e = h, o !== b && (e = i.clone(e, !0, !0), l && i.merge(s, u(e, "script"))), f.call(r && i.nodeName(this[o], "table") ? ye(this[o], "tbody") : this[o], e, o);
                    if (l)
                        for (y = s[s.length - 1].ownerDocument, i.map(s, gr), o = 0; l > o; o++) e = s[o], kr.test(e.type || "") && !i._data(e, "globalEval") && i.contains(y, e) && (e.src ? i.ajax({
                            url: e.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            throws: !0
                        }) : i.globalEval((e.text || e.textContent || e.innerHTML || "").replace(ae, "")));
                    h = c = null
                }
                return this
            }
        }), i.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(n, t) {
            i.fn[n] = function(n) {
                for (var u, r = 0, f = [], e = i(n), o = e.length - 1; o >= r; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), bt.apply(f, u.get());
                return this.pushStack(f)
            }
        }), i.extend({
            clone: function(n, t, r) {
                var f, h, o, e, s, c = i.contains(n.ownerDocument, n);
                if (i.support.html5Clone || i.isXMLDoc(n) || !yr.test("<" + n.nodeName + ">") ? o = n.cloneNode(!0) : (oi.innerHTML = n.outerHTML, oi.removeChild(o = oi.firstChild)), !(i.support.noCloneEvent && i.support.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                    for (f = u(o), s = u(n), e = 0; null != (h = s[e]); ++e) f[e] && pe(h, f[e]);
                if (t)
                    if (r)
                        for (s = s || u(n), f = f || u(o), e = 0; null != (h = s[e]); e++) nu(h, f[e]);
                    else nu(n, o);
                return f = u(o, "script"), f.length > 0 && si(f, !c && u(n, "script")), f = s = h = null, o
            },
            buildFragment: function(n, t, r, f) {
                for (var h, o, w, s, y, p, l, b = n.length, a = ar(t), c = [], v = 0; b > v; v++)
                    if (o = n[v], o || 0 === o)
                        if ("object" === i.type(o)) i.merge(c, o.nodeType ? [o] : o);
                        else if (se.test(o)) {
                    for (s = s || a.appendChild(t.createElement("div")), y = (wr.exec(o) || ["", ""])[1].toLowerCase(), l = e[y] || e._default, s.innerHTML = l[1] + o.replace(pr, "<$1><\/$2>") + l[2], h = l[0]; h--;) s = s.lastChild;
                    if (!i.support.leadingWhitespace && fi.test(o) && c.push(t.createTextNode(fi.exec(o)[0])), !i.support.tbody)
                        for (o = "table" !== y || br.test(o) ? "<table>" !== l[1] || br.test(o) ? 0 : s : s.firstChild, h = o && o.childNodes.length; h--;) i.nodeName(p = o.childNodes[h], "tbody") && !p.childNodes.length && o.removeChild(p);
                    for (i.merge(c, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = a.lastChild
                } else c.push(t.createTextNode(o));
                for (s && a.removeChild(s), i.support.appendChecked || i.grep(u(c, "input"), we), v = 0; o = c[v++];)
                    if ((!f || -1 === i.inArray(o, f)) && (w = i.contains(o.ownerDocument, o), s = u(a.appendChild(o), "script"), w && si(s), r))
                        for (h = 0; o = s[h++];) kr.test(o.type || "") && r.push(o);
                return s = null, a
            },
            cleanData: function(n, t) {
                for (var r, f, u, e, c = 0, s = i.expando, h = i.cache, l = i.support.deleteExpando, a = i.event.special; null != (r = n[c]); c++)
                    if ((t || i.acceptData(r)) && (u = r[s], e = u && h[u])) {
                        if (e.events)
                            for (f in e.events) a[f] ? i.event.remove(r, f) : i.removeEvent(r, f, e.handle);
                        h[u] && (delete h[u], l ? delete r[s] : typeof r.removeAttribute !== o ? r.removeAttribute(s) : r[s] = null, b.push(u))
                    }
            }
        });
        var rt, v, y, hi = /alpha\([^)]*\)/i,
            be = /opacity\s*=\s*([^)]*)/,
            ke = /^(top|right|bottom|left)$/,
            de = /^(none|table(?!-c[ea]).+)/,
            tu = /^margin/,
            ge = RegExp("^(" + st + ")(.*)$", "i"),
            ct = RegExp("^(" + st + ")(?!px)[a-z%]+$", "i"),
            no = RegExp("^([+-])=(" + st + ")", "i"),
            iu = {
                BODY: "block"
            },
            to = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ru = {
                letterSpacing: 0,
                fontWeight: 400
            },
            p = ["Top", "Right", "Bottom", "Left"],
            uu = ["Webkit", "O", "Moz", "ms"];
        i.fn.extend({
            css: function(n, r) {
                return i.access(this, function(n, r, u) {
                    var e, o, s = {},
                        f = 0;
                    if (i.isArray(r)) {
                        for (o = v(n), e = r.length; e > f; f++) s[r[f]] = i.css(n, r[f], !1, o);
                        return s
                    }
                    return u !== t ? i.style(n, r, u) : i.css(n, r)
                }, n, r, arguments.length > 1)
            },
            show: function() {
                return eu(this, !0)
            },
            hide: function() {
                return eu(this)
            },
            toggle: function(n) {
                var t = "boolean" == typeof n;
                return this.each(function() {
                    (t ? n : ut(this)) ? i(this).show(): i(this).hide()
                })
            }
        }), i.extend({
            cssHooks: {
                opacity: {
                    get: function(n, t) {
                        if (t) {
                            var i = y(n, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: i.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(n, r, u, f) {
                if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                    var o, s, e, h = i.camelCase(r),
                        c = n.style;
                    if (r = i.cssProps[h] || (i.cssProps[h] = fu(c, h)), e = i.cssHooks[r] || i.cssHooks[h], u === t) return e && "get" in e && (o = e.get(n, !1, f)) !== t ? o : c[r];
                    if (s = typeof u, "string" === s && (o = no.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r)), s = "number"), !(null == u || "number" === s && isNaN(u) || ("number" !== s || i.cssNumber[h] || (u += "px"), i.support.clearCloneStyle || "" !== u || 0 !== r.indexOf("background") || (c[r] = "inherit"), e && "set" in e && (u = e.set(n, u, f)) === t))) try {
                        c[r] = u
                    } catch (l) {}
                }
            },
            css: function(n, r, u, f) {
                var h, e, o, s = i.camelCase(r);
                return r = i.cssProps[s] || (i.cssProps[s] = fu(n.style, s)), o = i.cssHooks[r] || i.cssHooks[s], o && "get" in o && (e = o.get(n, !0, u)), e === t && (e = y(n, r, f)), "normal" === e && r in ru && (e = ru[r]), "" === u || u ? (h = parseFloat(e), u === !0 || i.isNumeric(h) ? h || 0 : e) : e
            },
            swap: function(n, t, i, r) {
                var f, u, e = {};
                for (u in t) e[u] = n.style[u], n.style[u] = t[u];
                f = i.apply(n, r || []);
                for (u in t) n.style[u] = e[u];
                return f
            }
        }), n.getComputedStyle ? (v = function(t) {
            return n.getComputedStyle(t, null)
        }, y = function(n, r, u) {
            var s, h, c, o = u || v(n),
                e = o ? o.getPropertyValue(r) || o[r] : t,
                f = n.style;
            return o && ("" !== e || i.contains(n.ownerDocument, n) || (e = i.style(n, r)), ct.test(e) && tu.test(r) && (s = f.width, h = f.minWidth, c = f.maxWidth, f.minWidth = f.maxWidth = f.width = e, e = o.width, f.width = s, f.minWidth = h, f.maxWidth = c)), e
        }) : r.documentElement.currentStyle && (v = function(n) {
            return n.currentStyle
        }, y = function(n, i, r) {
            var s, e, o, h = r || v(n),
                u = h ? h[i] : t,
                f = n.style;
            return null == u && f && f[i] && (u = f[i]), ct.test(u) && !ke.test(i) && (s = f.left, e = n.runtimeStyle, o = e && e.left, o && (e.left = n.currentStyle.left), f.left = "fontSize" === i ? "1em" : u, u = f.pixelLeft + "px", f.left = s, o && (e.left = o)), "" === u ? "auto" : u
        }), i.each(["height", "width"], function(n, r) {
            i.cssHooks[r] = {
                get: function(n, u, f) {
                    return u ? 0 === n.offsetWidth && de.test(i.css(n, "display")) ? i.swap(n, to, function() {
                        return hu(n, r, f)
                    }) : hu(n, r, f) : t
                },
                set: function(n, t, u) {
                    var f = u && v(n);
                    return ou(n, t, u ? su(n, r, u, i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f), f) : 0)
                }
            }
        }), i.support.opacity || (i.cssHooks.opacity = {
            get: function(n, t) {
                return be.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(n, t) {
                var r = n.style,
                    u = n.currentStyle,
                    e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    f = u && u.filter || r.filter || "";
                r.zoom = 1, (t >= 1 || "" === t) && "" === i.trim(f.replace(hi, "")) && r.removeAttribute && (r.removeAttribute("filter"), "" === t || u && !u.filter) || (r.filter = hi.test(f) ? f.replace(hi, e) : f + " " + e)
            }
        }), i(function() {
            i.support.reliableMarginRight || (i.cssHooks.marginRight = {
                get: function(n, r) {
                    return r ? i.swap(n, {
                        display: "inline-block"
                    }, y, [n, "marginRight"]) : t
                }
            }), !i.support.pixelPosition && i.fn.position && i.each(["top", "left"], function(n, r) {
                i.cssHooks[r] = {
                    get: function(n, u) {
                        return u ? (u = y(n, r), ct.test(u) ? i(n).position()[r] + "px" : u) : t
                    }
                }
            })
        }), i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
            return 0 >= n.offsetWidth && 0 >= n.offsetHeight || !i.support.reliableHiddenOffsets && "none" === (n.style && n.style.display || i.css(n, "display"))
        }, i.expr.filters.visible = function(n) {
            return !i.expr.filters.hidden(n)
        }), i.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(n, t) {
            i.cssHooks[n + t] = {
                expand: function(i) {
                    for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++) f[n + p[r] + t] = u[r] || u[r - 2] || u[0];
                    return f
                }
            }, tu.test(n) || (i.cssHooks[n + t].set = ou)
        });
        var io = /%20/g,
            ro = /\[\]$/,
            au = /\r?\n/g,
            uo = /^(?:submit|button|image|reset|file)$/i,
            fo = /^(?:input|select|textarea|keygen)/i;
        i.fn.extend({
            serialize: function() {
                return i.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var n = i.prop(this, "elements");
                    return n ? i.makeArray(n) : this
                }).filter(function() {
                    var n = this.type;
                    return this.name && !i(this).is(":disabled") && fo.test(this.nodeName) && !uo.test(n) && (this.checked || !ei.test(n))
                }).map(function(n, t) {
                    var r = i(this).val();
                    return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
                        return {
                            name: t.name,
                            value: n.replace(au, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: r.replace(au, "\r\n")
                    }
                }).get()
            }
        }), i.param = function(n, r) {
            var u, f = [],
                e = function(n, t) {
                    t = i.isFunction(t) ? t() : null == t ? "" : t, f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
                };
            if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
                e(this.name, this.value)
            });
            else
                for (u in n) ci(u, n[u], r, e);
            return f.join("&").replace(io, "+")
        }, i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
            i.fn[t] = function(n, i) {
                return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
            }
        }), i.fn.hover = function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        };
        var w, c, li = i.now(),
            ai = /\?/,
            eo = /#.*$/,
            vu = /([?&])_=[^&]*/,
            oo = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            so = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            ho = /^(?:GET|HEAD)$/,
            co = /^\/\//,
            yu = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            pu = i.fn.load,
            wu = {},
            vi = {},
            bu = "*/".concat("*");
        try {
            c = ff.href
        } catch (ns) {
            c = r.createElement("a"), c.href = "", c = c.href
        }
        w = yu.exec(c.toLowerCase()) || [], i.fn.load = function(n, r, u) {
            if ("string" != typeof n && pu) return pu.apply(this, arguments);
            var f, s, h, e = this,
                o = n.indexOf(" ");
            return o >= 0 && (f = n.slice(o, n.length), n = n.slice(0, o)), i.isFunction(r) ? (u = r, r = t) : r && "object" == typeof r && (h = "POST"), e.length > 0 && i.ajax({
                url: n,
                type: h,
                dataType: "html",
                data: r
            }).done(function(n) {
                s = arguments, e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
            }).complete(u && function(n, t) {
                e.each(u, s || [n.responseText, t, n])
            }), this
        }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
            i.fn[t] = function(n) {
                return this.on(t, n)
            }
        }), i.each(["get", "post"], function(n, r) {
            i[r] = function(n, u, f, e) {
                return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({
                    url: n,
                    type: r,
                    dataType: e,
                    data: u,
                    success: f
                })
            }
        }), i.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: c,
                type: "GET",
                isLocal: so.test(w[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": bu,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": n.String,
                    "text html": !0,
                    "text json": i.parseJSON,
                    "text xml": i.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(n, t) {
                return t ? yi(yi(n, i.ajaxSettings), t) : yi(i.ajaxSettings, n)
            },
            ajaxPrefilter: ku(wu),
            ajaxTransport: ku(vi),
            ajax: function(n, r) {
                function k(n, r, s, c) {
                    var l, k, w, rt, p, a = r;
                    2 !== o && (o = 2, g && clearTimeout(g), y = t, d = c || "", f.readyState = n > 0 ? 4 : 0, s && (rt = lo(u, f, s)), n >= 200 && 300 > n || 304 === n ? (u.ifModified && (p = f.getResponseHeader("Last-Modified"), p && (i.lastModified[e] = p), p = f.getResponseHeader("etag"), p && (i.etag[e] = p)), 204 === n ? (l = !0, a = "nocontent") : 304 === n ? (l = !0, a = "notmodified") : (l = ao(u, rt), a = l.state, k = l.data, w = l.error, l = !w)) : (w = a, (n || !a) && (a = "error", 0 > n && (n = 0))), f.status = n, f.statusText = (r || a) + "", l ? tt.resolveWith(h, [k, a, f]) : tt.rejectWith(h, [f, a, w]), f.statusCode(b), b = t, v && nt.trigger(l ? "ajaxSuccess" : "ajaxError", [f, u, l ? k : w]), it.fireWith(h, [f, a]), v && (nt.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop")))
                }
                "object" == typeof n && (r = n, n = t), r = r || {};
                var l, a, e, d, g, v, y, p, u = i.ajaxSetup({}, r),
                    h = u.context || u,
                    nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
                    tt = i.Deferred(),
                    it = i.Callbacks("once memory"),
                    b = u.statusCode || {},
                    rt = {},
                    ut = {},
                    o = 0,
                    ft = "canceled",
                    f = {
                        readyState: 0,
                        getResponseHeader: function(n) {
                            var t;
                            if (2 === o) {
                                if (!p)
                                    for (p = {}; t = oo.exec(d);) p[t[1].toLowerCase()] = t[2];
                                t = p[n.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === o ? d : null
                        },
                        setRequestHeader: function(n, t) {
                            var i = n.toLowerCase();
                            return o || (n = ut[i] = ut[i] || n, rt[n] = t), this
                        },
                        overrideMimeType: function(n) {
                            return o || (u.mimeType = n), this
                        },
                        statusCode: function(n) {
                            var t;
                            if (n)
                                if (2 > o)
                                    for (t in n) b[t] = [b[t], n[t]];
                                else f.always(n[f.status]);
                            return this
                        },
                        abort: function(n) {
                            var t = n || ft;
                            return y && y.abort(t), k(0, t), this
                        }
                    };
                if (tt.promise(f).complete = it.add, f.success = f.done, f.error = f.fail, u.url = ((n || u.url || c) + "").replace(eo, "").replace(co, w[1] + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = i.trim(u.dataType || "*").toLowerCase().match(s) || [""], null == u.crossDomain && (l = yu.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === w[1] && l[2] === w[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (w[3] || ("http:" === w[1] ? 80 : 443)))), u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), du(wu, u, r, f), 2 === o) return f;
                v = u.global, v && 0 == i.active++ && i.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !ho.test(u.type), e = u.url, u.hasContent || (u.data && (e = u.url += (ai.test(e) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = vu.test(e) ? e.replace(vu, "$1_=" + li++) : e + (ai.test(e) ? "&" : "?") + "_=" + li++)), u.ifModified && (i.lastModified[e] && f.setRequestHeader("If-Modified-Since", i.lastModified[e]), i.etag[e] && f.setRequestHeader("If-None-Match", i.etag[e])), (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType), f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + bu + "; q=0.01" : "") : u.accepts["*"]);
                for (a in u.headers) f.setRequestHeader(a, u.headers[a]);
                if (u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || 2 === o)) return f.abort();
                ft = "abort";
                for (a in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) f[a](u[a]);
                if (y = du(vi, u, r, f)) {
                    f.readyState = 1, v && nt.trigger("ajaxSend", [f, u]), u.async && u.timeout > 0 && (g = setTimeout(function() {
                        f.abort("timeout")
                    }, u.timeout));
                    try {
                        o = 1, y.send(rt, k)
                    } catch (et) {
                        if (!(2 > o)) throw et;
                        k(-1, et)
                    }
                } else k(-1, "No Transport");
                return f
            },
            getScript: function(n, r) {
                return i.get(n, t, r, "script")
            },
            getJSON: function(n, t, r) {
                return i.get(n, t, r, "json")
            }
        }), i.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(n) {
                    return i.globalEval(n), n
                }
            }
        }), i.ajaxPrefilter("script", function(n) {
            n.cache === t && (n.cache = !1), n.crossDomain && (n.type = "GET", n.global = !1)
        }), i.ajaxTransport("script", function(n) {
            if (n.crossDomain) {
                var u, f = r.head || i("head")[0] || r.documentElement;
                return {
                    send: function(t, i) {
                        u = r.createElement("script"), u.async = !0, n.scriptCharset && (u.charset = n.scriptCharset), u.src = n.url, u.onload = u.onreadystatechange = function(n, t) {
                            (t || !u.readyState || /loaded|complete/.test(u.readyState)) && (u.onload = u.onreadystatechange = null, u.parentNode && u.parentNode.removeChild(u), u = null, t || i(200, "success"))
                        }, f.insertBefore(u, f.firstChild)
                    },
                    abort: function() {
                        u && u.onload(t, !0)
                    }
                }
            }
        }), pi = [], lt = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var n = pi.pop() || i.expando + "_" + li++;
                return this[n] = !0, n
            }
        }), i.ajaxPrefilter("json jsonp", function(r, u, f) {
            var e, s, o, h = r.jsonp !== !1 && (lt.test(r.url) ? "url" : "string" == typeof r.data && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && lt.test(r.data) && "data");
            return h || "jsonp" === r.dataTypes[0] ? (e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, h ? r[h] = r[h].replace(lt, "$1" + e) : r.jsonp !== !1 && (r.url += (ai.test(r.url) ? "&" : "?") + r.jsonp + "=" + e), r.converters["script json"] = function() {
                return o || i.error(e + " was not called"), o[0]
            }, r.dataTypes[0] = "json", s = n[e], n[e] = function() {
                o = arguments
            }, f.always(function() {
                n[e] = s, r[e] && (r.jsonpCallback = u.jsonpCallback, pi.push(e)), o && i.isFunction(s) && s(o[0]), o = s = t
            }), "script") : t
        }), gu = 0, at = n.ActiveXObject && function() {
            var n;
            for (n in g) g[n](t, !0)
        }, i.ajaxSettings.xhr = n.ActiveXObject ? function() {
            return !this.isLocal && nf() || vo()
        } : nf, nt = i.ajaxSettings.xhr(), i.support.cors = !!nt && "withCredentials" in nt, nt = i.support.ajax = !!nt, nt && i.ajaxTransport(function(r) {
            if (!r.crossDomain || i.support.cors) {
                var u;
                return {
                    send: function(f, e) {
                        var h, s, o = r.xhr();
                        if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields)
                            for (s in r.xhrFields) o[s] = r.xhrFields[s];
                        r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType), r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in f) o.setRequestHeader(s, f[s])
                        } catch (c) {}
                        o.send(r.hasContent && r.data || null), u = function(n, f) {
                            var s, a, l, c;
                            try {
                                if (u && (f || 4 === o.readyState))
                                    if (u = t, h && (o.onreadystatechange = i.noop, at && delete g[h]), f) 4 !== o.readyState && o.abort();
                                    else {
                                        c = {}, s = o.status, a = o.getAllResponseHeaders(), "string" == typeof o.responseText && (c.text = o.responseText);
                                        try {
                                            l = o.statusText
                                        } catch (v) {
                                            l = ""
                                        }
                                        s || !r.isLocal || r.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                                    }
                            } catch (y) {
                                f || e(-1, y)
                            }
                            c && e(s, l, c, a)
                        }, r.async ? 4 === o.readyState ? setTimeout(u) : (h = ++gu, at && (g || (g = {}, i(n).unload(at)), g[h] = u), o.onreadystatechange = u) : u()
                    },
                    abort: function() {
                        u && u(t, !0)
                    }
                }
            }
        });
        var tt, vt, yo = /^(?:toggle|show|hide)$/,
            po = RegExp("^(?:([+-])=|)(" + st + ")([a-z%]*)$", "i"),
            wo = /queueHooks$/,
            yt = [go],
            ft = {
                "*": [function(n, t) {
                    var o, s, r = this.createTween(n, t),
                        e = po.exec(t),
                        h = r.cur(),
                        u = +h || 0,
                        f = 1,
                        c = 20;
                    if (e) {
                        if (o = +e[2], s = e[3] || (i.cssNumber[n] ? "" : "px"), "px" !== s && u) {
                            u = i.css(r.elem, n, !0) || o || 1;
                            do f = f || ".5", u /= f, i.style(r.elem, n, u + s); while (f !== (f = r.cur() / h) && 1 !== f && --c)
                        }
                        r.unit = s, r.start = u, r.end = e[1] ? u + (e[1] + 1) * o : o
                    }
                    return r
                }]
            };
        i.Animation = i.extend(rf, {
            tweener: function(n, t) {
                i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
                for (var r, u = 0, f = n.length; f > u; u++) r = n[u], ft[r] = ft[r] || [], ft[r].unshift(t)
            },
            prefilter: function(n, t) {
                t ? yt.unshift(n) : yt.push(n)
            }
        }), i.Tween = f, f.prototype = {
            constructor: f,
            init: function(n, t, r, u, f, e) {
                this.elem = n, this.prop = r, this.easing = f || "swing", this.options = t, this.start = this.now = this.cur(), this.end = u, this.unit = e || (i.cssNumber[r] ? "" : "px")
            },
            cur: function() {
                var n = f.propHooks[this.prop];
                return n && n.get ? n.get(this) : f.propHooks._default.get(this)
            },
            run: function(n) {
                var r, t = f.propHooks[this.prop];
                return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : f.propHooks._default.set(this), this
            }
        }, f.prototype.init.prototype = f.prototype, f.propHooks = {
            _default: {
                get: function(n) {
                    var t;
                    return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0) : n.elem[n.prop]
                },
                set: function(n) {
                    i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
                }
            }
        }, f.propHooks.scrollTop = f.propHooks.scrollLeft = {
            set: function(n) {
                n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
            }
        }, i.each(["toggle", "show", "hide"], function(n, t) {
            var r = i.fn[t];
            i.fn[t] = function(n, i, u) {
                return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(pt(t, !0), n, i, u)
            }
        }), i.fn.extend({
            fadeTo: function(n, t, i, r) {
                return this.filter(ut).css("opacity", 0).show().end().animate({
                    opacity: t
                }, n, i, r)
            },
            animate: function(n, t, r, u) {
                var o = i.isEmptyObject(n),
                    e = i.speed(t, r, u),
                    f = function() {
                        var t = rf(this, i.extend({}, n), e);
                        f.finish = function() {
                            t.stop(!0)
                        }, (o || i._data(this, "finish")) && t.stop(!0)
                    };
                return f.finish = f, o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
            },
            stop: function(n, r, u) {
                var f = function(n) {
                    var t = n.stop;
                    delete n.stop, t(u)
                };
                return "string" != typeof n && (u = r, r = n, n = t), r && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                    var o = !0,
                        t = null != n && n + "queueHooks",
                        e = i.timers,
                        r = i._data(this);
                    if (t) r[t] && r[t].stop && f(r[t]);
                    else
                        for (t in r) r[t] && r[t].stop && wo.test(t) && f(r[t]);
                    for (t = e.length; t--;) e[t].elem !== this || null != n && e[t].queue !== n || (e[t].anim.stop(u), o = !1, e.splice(t, 1));
                    (o || !u) && i.dequeue(this, n)
                })
            },
            finish: function(n) {
                return n !== !1 && (n = n || "fx"), this.each(function() {
                    var t, f = i._data(this),
                        r = f[n + "queue"],
                        e = f[n + "queueHooks"],
                        u = i.timers,
                        o = r ? r.length : 0;
                    for (f.finish = !0, i.queue(this, n, []), e && e.cur && e.cur.finish && e.cur.finish.call(this), t = u.length; t--;) u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0), u.splice(t, 1));
                    for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete f.finish
                })
            }
        }), i.each({
            slideDown: pt("show"),
            slideUp: pt("hide"),
            slideToggle: pt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(n, t) {
            i.fn[n] = function(n, i, r) {
                return this.animate(t, n, i, r)
            }
        }), i.speed = function(n, t, r) {
            var u = n && "object" == typeof n ? i.extend({}, n) : {
                complete: r || !r && t || i.isFunction(n) && n,
                duration: n,
                easing: r && t || t && !i.isFunction(t) && t
            };
            return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (null == u.queue || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
                i.isFunction(u.old) && u.old.call(this), u.queue && i.dequeue(this, u.queue)
            }, u
        }, i.easing = {
            linear: function(n) {
                return n
            },
            swing: function(n) {
                return .5 - Math.cos(n * Math.PI) / 2
            }
        }, i.timers = [], i.fx = f.prototype.init, i.fx.tick = function() {
            var u, n = i.timers,
                r = 0;
            for (tt = i.now(); n.length > r; r++) u = n[r], u() || n[r] !== u || n.splice(r--, 1);
            n.length || i.fx.stop(), tt = t
        }, i.fx.timer = function(n) {
            n() && i.timers.push(n) && i.fx.start()
        }, i.fx.interval = 13, i.fx.start = function() {
            vt || (vt = setInterval(i.fx.tick, i.fx.interval))
        }, i.fx.stop = function() {
            clearInterval(vt), vt = null
        }, i.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, i.fx.step = {}, i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
            return i.grep(i.timers, function(t) {
                return n === t.elem
            }).length
        }), i.fn.offset = function(n) {
            if (arguments.length) return n === t ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var r, e, f = {
                    top: 0,
                    left: 0
                },
                u = this[0],
                s = u && u.ownerDocument;
            if (s) return r = s.documentElement, i.contains(r, u) ? (typeof u.getBoundingClientRect !== o && (f = u.getBoundingClientRect()), e = uf(s), {
                top: f.top + (e.pageYOffset || r.scrollTop) - (r.clientTop || 0),
                left: f.left + (e.pageXOffset || r.scrollLeft) - (r.clientLeft || 0)
            }) : f
        }, i.offset = {
            setOffset: function(n, t, r) {
                var f = i.css(n, "position");
                "static" === f && (n.style.position = "relative");
                var e = i(n),
                    o = e.offset(),
                    l = i.css(n, "top"),
                    a = i.css(n, "left"),
                    v = ("absolute" === f || "fixed" === f) && i.inArray("auto", [l, a]) > -1,
                    u = {},
                    s = {},
                    h, c;
                v ? (s = e.position(), h = s.top, c = s.left) : (h = parseFloat(l) || 0, c = parseFloat(a) || 0), i.isFunction(t) && (t = t.call(n, r, o)), null != t.top && (u.top = t.top - o.top + h), null != t.left && (u.left = t.left - o.left + c), "using" in t ? t.using.call(n, u) : e.css(u)
            }
        }, i.fn.extend({
            position: function() {
                if (this[0]) {
                    var n, r, t = {
                            top: 0,
                            left: 0
                        },
                        u = this[0];
                    return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                        top: r.top - t.top - i.css(u, "marginTop", !0),
                        left: r.left - t.left - i.css(u, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var n = this.offsetParent || r.documentElement; n && !i.nodeName(n, "html") && "static" === i.css(n, "position");) n = n.offsetParent;
                    return n || r.documentElement
                })
            }
        }), i.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(n, r) {
            var u = /Y/.test(r);
            i.fn[n] = function(f) {
                return i.access(this, function(n, f, e) {
                    var o = uf(n);
                    return e === t ? o ? r in o ? o[r] : o.document.documentElement[f] : n[f] : (o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e, t)
                }, n, f, arguments.length, null)
            }
        }), i.each({
            Height: "height",
            Width: "width"
        }, function(n, r) {
            i.each({
                padding: "inner" + n,
                content: r,
                "": "outer" + n
            }, function(u, f) {
                i.fn[f] = function(f, e) {
                    var o = arguments.length && (u || "boolean" != typeof f),
                        s = u || (f === !0 || e === !0 ? "margin" : "border");
                    return i.access(this, function(r, u, f) {
                        var e;
                        return i.isWindow(r) ? r.document.documentElement["client" + n] : 9 === r.nodeType ? (e = r.documentElement, Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, s) : i.style(r, u, f, s)
                    }, r, o ? f : t, o, null)
                }
            })
        }), n.jQuery = n.$ = i, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return i
        })
    }(window), function(n, t) {
        function i(t, i) {
            var u, f, e, o = t.nodeName.toLowerCase();
            return "area" === o ? (u = t.parentNode, f = u.name, t.href && f && "map" === u.nodeName.toLowerCase() ? (e = n("img[usemap=#" + f + "]")[0], !!e && r(e)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && r(t)
        }

        function r(t) {
            return n.expr.filters.visible(t) && !n(t).parents().addBack().filter(function() {
                return "hidden" === n.css(this, "visibility")
            }).length
        }
        var u = 0,
            f = /^ui-id-\d+$/;
        n.ui = n.ui || {}, n.extend(n.ui, {
            version: "1.10.2",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), n.fn.extend({
            focus: function(t) {
                return function(i, r) {
                    return "number" == typeof i ? this.each(function() {
                        var t = this;
                        setTimeout(function() {
                            n(t).focus(), r && r.call(t)
                        }, i)
                    }) : t.apply(this, arguments)
                }
            }(n.fn.focus),
            scrollParent: function() {
                var t;
                return t = n.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(n.css(this, "position")) && /(auto|scroll)/.test(n.css(this, "overflow") + n.css(this, "overflow-y") + n.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(n.css(this, "overflow") + n.css(this, "overflow-y") + n.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !t.length ? n(document) : t
            },
            zIndex: function(i) {
                if (i !== t) return this.css("zIndex", i);
                if (this.length)
                    for (var u, f, r = n(this[0]); r.length && r[0] !== document;) {
                        if (u = r.css("position"), ("absolute" === u || "relative" === u || "fixed" === u) && (f = parseInt(r.css("zIndex"), 10), !isNaN(f) && 0 !== f)) return f;
                        r = r.parent()
                    }
                return 0
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++u)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    f.test(this.id) && n(this).removeAttr("id")
                })
            }
        }), n.extend(n.expr[":"], {
            data: n.expr.createPseudo ? n.expr.createPseudo(function(t) {
                return function(i) {
                    return !!n.data(i, t)
                }
            }) : function(t, i, r) {
                return !!n.data(t, r[3])
            },
            focusable: function(t) {
                return i(t, !isNaN(n.attr(t, "tabindex")))
            },
            tabbable: function(t) {
                var r = n.attr(t, "tabindex"),
                    u = isNaN(r);
                return (u || r >= 0) && i(t, !u)
            }
        }), n("<a>").outerWidth(1).jquery || n.each(["Width", "Height"], function(i, r) {
            function u(t, i, r, u) {
                return n.each(o, function() {
                    i -= parseFloat(n.css(t, "padding" + this)) || 0, r && (i -= parseFloat(n.css(t, "border" + this + "Width")) || 0), u && (i -= parseFloat(n.css(t, "margin" + this)) || 0)
                }), i
            }
            var o = "Width" === r ? ["Left", "Right"] : ["Top", "Bottom"],
                f = r.toLowerCase(),
                e = {
                    innerWidth: n.fn.innerWidth,
                    innerHeight: n.fn.innerHeight,
                    outerWidth: n.fn.outerWidth,
                    outerHeight: n.fn.outerHeight
                };
            n.fn["inner" + r] = function(i) {
                return i === t ? e["inner" + r].call(this) : this.each(function() {
                    n(this).css(f, u(this, i) + "px")
                })
            }, n.fn["outer" + r] = function(t, i) {
                return "number" != typeof t ? e["outer" + r].call(this, t) : this.each(function() {
                    n(this).css(f, u(this, t, !0, i) + "px")
                })
            }
        }), n.fn.addBack || (n.fn.addBack = function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }), n("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (n.fn.removeData = function(t) {
            return function(i) {
                return arguments.length ? t.call(this, n.camelCase(i)) : t.call(this)
            }
        }(n.fn.removeData)), n.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), n.support.selectstart = "onselectstart" in document.createElement("div"), n.fn.extend({
            disableSelection: function() {
                return this.bind((n.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(n) {
                    n.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        }), n.extend(n.ui, {
            plugin: {
                add: function(t, i, r) {
                    var u, f = n.ui[t].prototype;
                    for (u in r) f.plugins[u] = f.plugins[u] || [], f.plugins[u].push([i, r[u]])
                },
                call: function(n, t, i) {
                    var r, u = n.plugins[t];
                    if (u && n.element[0].parentNode && 11 !== n.element[0].parentNode.nodeType)
                        for (r = 0; u.length > r; r++) n.options[u[r][0]] && u[r][1].apply(n.element, i)
                }
            },
            hasScroll: function(t, i) {
                if ("hidden" === n(t).css("overflow")) return !1;
                var r = i && "left" === i ? "scrollLeft" : "scrollTop",
                    u = !1;
                return t[r] > 0 ? !0 : (t[r] = 1, u = t[r] > 0, t[r] = 0, u)
            }
        })
    }(jQuery), function(n, t) {
        var r = 0,
            i = Array.prototype.slice,
            u = n.cleanData;
        n.cleanData = function(t) {
            for (var i, r = 0; null != (i = t[r]); r++) try {
                n(i).triggerHandler("remove")
            } catch (f) {}
            u(t)
        }, n.widget = function(i, r, u) {
            var h, e, f, s, c = {},
                o = i.split(".")[0];
            i = i.split(".")[1], h = o + "-" + i, u || (u = r, r = n.Widget), n.expr[":"][h.toLowerCase()] = function(t) {
                return !!n.data(t, h)
            }, n[o] = n[o] || {}, e = n[o][i], f = n[o][i] = function(n, i) {
                return this._createWidget ? (arguments.length && this._createWidget(n, i), t) : new f(n, i)
            }, n.extend(f, e, {
                version: u.version,
                _proto: n.extend({}, u),
                _childConstructors: []
            }), s = new r, s.options = n.widget.extend({}, s.options), n.each(u, function(i, u) {
                return n.isFunction(u) ? (c[i] = function() {
                    var n = function() {
                            return r.prototype[i].apply(this, arguments)
                        },
                        t = function(n) {
                            return r.prototype[i].apply(this, n)
                        };
                    return function() {
                        var i, r = this._super,
                            f = this._superApply;
                        return this._super = n, this._superApply = t, i = u.apply(this, arguments), this._super = r, this._superApply = f, i
                    }
                }(), t) : (c[i] = u, t)
            }), f.prototype = n.widget.extend(s, {
                widgetEventPrefix: e ? s.widgetEventPrefix : i
            }, c, {
                constructor: f,
                namespace: o,
                widgetName: i,
                widgetFullName: h
            }), e ? (n.each(e._childConstructors, function(t, i) {
                var r = i.prototype;
                n.widget(r.namespace + "." + r.widgetName, f, i._proto)
            }), delete e._childConstructors) : r._childConstructors.push(f), n.widget.bridge(i, f)
        }, n.widget.extend = function(r) {
            for (var u, f, o = i.call(arguments, 1), e = 0, s = o.length; s > e; e++)
                for (u in o[e]) f = o[e][u], o[e].hasOwnProperty(u) && f !== t && (r[u] = n.isPlainObject(f) ? n.isPlainObject(r[u]) ? n.widget.extend({}, r[u], f) : n.widget.extend({}, f) : f);
            return r
        }, n.widget.bridge = function(r, u) {
            var f = u.prototype.widgetFullName || r;
            n.fn[r] = function(e) {
                var h = "string" == typeof e,
                    o = i.call(arguments, 1),
                    s = this;
                return e = !h && o.length ? n.widget.extend.apply(null, [e].concat(o)) : e, h ? this.each(function() {
                    var i, u = n.data(this, f);
                    return u ? n.isFunction(u[e]) && "_" !== e.charAt(0) ? (i = u[e].apply(u, o), i !== u && i !== t ? (s = i && i.jquery ? s.pushStack(i.get()) : i, !1) : t) : n.error("no such method '" + e + "' for " + r + " widget instance") : n.error("cannot call methods on " + r + " prior to initialization; attempted to call method '" + e + "'")
                }) : this.each(function() {
                    var t = n.data(this, f);
                    t ? t.option(e || {})._init() : n.data(this, f, new u(e, this))
                }), s
            }
        }, n.Widget = function() {}, n.Widget._childConstructors = [], n.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(t, i) {
                i = n(i || this.defaultElement || this)[0], this.element = n(i), this.uuid = r++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = n(), this.hoverable = n(), this.focusable = n(), i !== this && (n.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(n) {
                        n.target === i && this.destroy()
                    }
                }), this.document = n(i.style ? i.ownerDocument : i.document || i), this.window = n(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: n.noop,
            _getCreateEventData: n.noop,
            _create: n.noop,
            _init: n.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: n.noop,
            widget: function() {
                return this.element
            },
            option: function(i, r) {
                var u, f, e, o = i;
                if (0 === arguments.length) return n.widget.extend({}, this.options);
                if ("string" == typeof i)
                    if (o = {}, u = i.split("."), i = u.shift(), u.length) {
                        for (f = o[i] = n.widget.extend({}, this.options[i]), e = 0; u.length - 1 > e; e++) f[u[e]] = f[u[e]] || {}, f = f[u[e]];
                        if (i = u.pop(), r === t) return f[i] === t ? null : f[i];
                        f[i] = r
                    } else {
                        if (r === t) return this.options[i] === t ? null : this.options[i];
                        o[i] = r
                    }
                return this._setOptions(o), this
            },
            _setOptions: function(n) {
                var t;
                for (t in n) this._setOption(t, n[t]);
                return this
            },
            _setOption: function(n, t) {
                return this.options[n] = t, "disabled" === n && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function() {
                return this._setOption("disabled", !1)
            },
            disable: function() {
                return this._setOption("disabled", !0)
            },
            _on: function(i, r, u) {
                var e, f = this;
                "boolean" != typeof i && (u = r, r = i, i = !1), u ? (r = e = n(r), this.bindings = this.bindings.add(r)) : (u = r, r = this.element, e = this.widget()), n.each(u, function(u, o) {
                    function s() {
                        return i || f.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? f[o] : o).apply(f, arguments) : t
                    }
                    "string" != typeof o && (s.guid = o.guid = o.guid || s.guid || n.guid++);
                    var h = u.match(/^(\w+)\s*(.*)$/),
                        c = h[1] + f.eventNamespace,
                        l = h[2];
                    l ? e.delegate(l, c, s) : r.bind(c, s)
                })
            },
            _off: function(n, t) {
                t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, n.unbind(t).undelegate(t)
            },
            _delay: function(n, t) {
                function r() {
                    return ("string" == typeof n ? i[n] : n).apply(i, arguments)
                }
                var i = this;
                return setTimeout(r, t || 0)
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function(t) {
                        n(t.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(t) {
                        n(t.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function(t) {
                        n(t.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(t) {
                        n(t.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(t, i, r) {
                var u, f, e = this.options[t];
                if (r = r || {}, i = n.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], f = i.originalEvent)
                    for (u in f) u in i || (i[u] = f[u]);
                return this.element.trigger(i, r), !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
            }
        }, n.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(t, i) {
            n.Widget.prototype["_" + t] = function(r, u, f) {
                "string" == typeof u && (u = {
                    effect: u
                });
                var o, e = u ? u === !0 || "number" == typeof u ? i : u.effect || i : t;
                u = u || {}, "number" == typeof u && (u = {
                    duration: u
                }), o = !n.isEmptyObject(u), u.complete = f, u.delay && r.delay(u.delay), o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function(i) {
                    n(this)[t](), f && f.call(r[0]), i()
                })
            }
        })
    }(jQuery), function(n) {
        var t = !1;
        n(document).mouseup(function() {
            t = !1
        }), n.widget("ui.mouse", {
            version: "1.10.2",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var t = this;
                this.element.bind("mousedown." + this.widgetName, function(n) {
                    return t._mouseDown(n)
                }).bind("click." + this.widgetName, function(i) {
                    return !0 === n.data(i.target, t.widgetName + ".preventClickEvent") ? (n.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(i) {
                if (!t) {
                    this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                    var r = this,
                        u = 1 === i.which,
                        f = "string" == typeof this.options.cancel && i.target.nodeName ? n(i.target).closest(this.options.cancel).length : !1;
                    return u && !f && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        r.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === n.data(i.target, this.widgetName + ".preventClickEvent") && n.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(n) {
                        return r._mouseMove(n)
                    }, this._mouseUpDelegate = function(n) {
                        return r._mouseUp(n)
                    }, n(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
                }
            },
            _mouseMove: function(t) {
                return n.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
            },
            _mouseUp: function(t) {
                return n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
            },
            _mouseDistanceMet: function(n) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        })
    }(jQuery), function(n) {
        n.widget("ui.draggable", n.ui.mouse, {
            version: "1.10.2",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
            },
            _destroy: function() {
                this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
            },
            _mouseCapture: function(t) {
                var i = this.options;
                return this.helper || i.disabled || n(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (n(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                    n("<div class='ui-draggable-iframeFix' style='background: #fff;'><\/div>").css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1e3
                    }).css(n(this).offset()).appendTo("body")
                }), !0) : !1)
            },
            _mouseStart: function(t) {
                var i = this.options;
                return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), n.ui.ddmanager && (n.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, n.extend(this.offset, {
                    click: {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), i.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t), !0)
            },
            _mouseDrag: function(t, i) {
                if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                    var r = this._uiHash();
                    if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                    this.position = r.position
                }
                return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), n.ui.ddmanager && n.ui.ddmanager.drag(this, t), !1
            },
            _mouseStop: function(t) {
                var i, u = this,
                    f = !1,
                    r = !1;
                for (n.ui.ddmanager && !this.options.dropBehaviour && (r = n.ui.ddmanager.drop(this, t)), this.dropped && (r = this.dropped, this.dropped = !1), i = this.element[0]; i && (i = i.parentNode);) i === document && (f = !0);
                return f || "original" !== this.options.helper ? ("invalid" === this.options.revert && !r || "valid" === this.options.revert && r || this.options.revert === !0 || n.isFunction(this.options.revert) && this.options.revert.call(this.element, r) ? n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    u._trigger("stop", t) !== !1 && u._clear()
                }) : this._trigger("stop", t) !== !1 && this._clear(), !1) : !1
            },
            _mouseUp: function(t) {
                return n("div.ui-draggable-iframeFix").each(function() {
                    this.parentNode.removeChild(this)
                }), n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t), n.ui.mouse.prototype._mouseUp.call(this, t)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(t) {
                return this.options.handle ? !!n(t.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _createHelper: function(t) {
                var r = this.options,
                    i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t])) : "clone" === r.helper ? this.element.clone().removeAttr("id") : this.element;
                return i.parents("body").length || i.appendTo("parent" === r.appendTo ? this.element[0].parentNode : r.appendTo), i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), i
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), n.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var t = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && n.ui.ie) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var n = this.element.position();
                    return {
                        top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var r, u, t, i = this.options;
                if ("parent" === i.containment && (i.containment = this.helper[0].parentNode), ("document" === i.containment || "window" === i.containment) && (this.containment = ["document" === i.containment ? 0 : n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" === i.containment ? 0 : n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" === i.containment ? 0 : n(window).scrollLeft()) + n("document" === i.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" === i.containment ? 0 : n(window).scrollTop()) + (n("document" === i.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(i.containment) || i.containment.constructor === Array) i.containment.constructor === Array && (this.containment = i.containment);
                else {
                    if (u = n(i.containment), t = u[0], !t) return;
                    r = "hidden" !== n(t).css("overflow"), this.containment = [(parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0), (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0), (r ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderRightWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (r ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderBottomWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = u
                }
            },
            _convertPositionTo: function(t, i) {
                i || (i = this.position);
                var r = "absolute" === t ? 1 : -1,
                    u = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    f = /(html|body)/i.test(u[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r,
                    left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r
                }
            },
            _generatePosition: function(t) {
                var i, e, u, f, r = this.options,
                    h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    c = /(html|body)/i.test(h[0].tagName),
                    o = t.pageX,
                    s = t.pageY;
                return this.originalPosition && (this.containment && (this.relative_container ? (e = this.relative_container.offset(), i = [this.containment[0] + e.left, this.containment[1] + e.top, this.containment[2] + e.left, this.containment[3] + e.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (o = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (s = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (o = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (s = i[3] + this.offset.click.top)), r.grid && (u = r.grid[1] ? this.originalPageY + Math.round((s - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, s = i ? u - this.offset.click.top >= i[1] || u - this.offset.click.top > i[3] ? u : u - this.offset.click.top >= i[1] ? u - r.grid[1] : u + r.grid[1] : u, f = r.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, o = i ? f - this.offset.click.left >= i[0] || f - this.offset.click.left > i[2] ? f : f - this.offset.click.left >= i[0] ? f - r.grid[0] : f + r.grid[0] : f)), {
                    top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : c ? 0 : h.scrollTop()),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : c ? 0 : h.scrollLeft())
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
            },
            _trigger: function(t, i, r) {
                return r = r || this._uiHash(), n.ui.plugin.call(this, t, [i, r]), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), n.Widget.prototype._trigger.call(this, t, i, r)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), n.ui.plugin.add("draggable", "connectToSortable", {
            start: function(t, i) {
                var r = n(this).data("ui-draggable"),
                    u = r.options,
                    f = n.extend({}, i, {
                        item: r.element
                    });
                r.sortables = [], n(u.connectToSortable).each(function() {
                    var i = n.data(this, "ui-sortable");
                    i && !i.options.disabled && (r.sortables.push({
                        instance: i,
                        shouldRevert: i.options.revert
                    }), i.refreshPositions(), i._trigger("activate", t, f))
                })
            },
            stop: function(t, i) {
                var r = n(this).data("ui-draggable"),
                    u = n.extend({}, i, {
                        item: r.element
                    });
                n.each(r.sortables, function() {
                    this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === r.options.helper && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, u))
                })
            },
            drag: function(t, i) {
                var r = n(this).data("ui-draggable"),
                    u = this;
                n.each(r.sortables, function() {
                    var f = !1,
                        e = this;
                    this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (f = !0, n.each(r.sortables, function() {
                        return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this !== e && this.instance._intersectsWith(this.instance.containerCache) && n.contains(e.instance.element[0], this.instance.element[0]) && (f = !1), f
                    })), f ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = n(u).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                        return i.helper[0]
                    }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
                })
            }
        }), n.ui.plugin.add("draggable", "cursor", {
            start: function() {
                var t = n("body"),
                    i = n(this).data("ui-draggable").options;
                t.css("cursor") && (i._cursor = t.css("cursor")), t.css("cursor", i.cursor)
            },
            stop: function() {
                var t = n(this).data("ui-draggable").options;
                t._cursor && n("body").css("cursor", t._cursor)
            }
        }), n.ui.plugin.add("draggable", "opacity", {
            start: function(t, i) {
                var r = n(i.helper),
                    u = n(this).data("ui-draggable").options;
                r.css("opacity") && (u._opacity = r.css("opacity")), r.css("opacity", u.opacity)
            },
            stop: function(t, i) {
                var r = n(this).data("ui-draggable").options;
                r._opacity && n(i.helper).css("opacity", r._opacity)
            }
        }), n.ui.plugin.add("draggable", "scroll", {
            start: function() {
                var t = n(this).data("ui-draggable");
                t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
            },
            drag: function(t) {
                var r = n(this).data("ui-draggable"),
                    i = r.options,
                    u = !1;
                r.scrollParent[0] !== document && "HTML" !== r.scrollParent[0].tagName ? (i.axis && "x" === i.axis || (r.overflowOffset.top + r.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? r.scrollParent[0].scrollTop = u = r.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (r.scrollParent[0].scrollTop = u = r.scrollParent[0].scrollTop - i.scrollSpeed)), i.axis && "y" === i.axis || (r.overflowOffset.left + r.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? r.scrollParent[0].scrollLeft = u = r.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (r.scrollParent[0].scrollLeft = u = r.scrollParent[0].scrollLeft - i.scrollSpeed))) : (i.axis && "x" === i.axis || (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? u = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (u = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed))), i.axis && "y" === i.axis || (t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? u = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (u = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed)))), u !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(r, t)
            }
        }), n.ui.plugin.add("draggable", "snap", {
            start: function() {
                var t = n(this).data("ui-draggable"),
                    i = t.options;
                t.snapElements = [], n(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                    var i = n(this),
                        r = i.offset();
                    this !== t.element[0] && t.snapElements.push({
                        item: this,
                        width: i.outerWidth(),
                        height: i.outerHeight(),
                        top: r.top,
                        left: r.left
                    })
                })
            },
            drag: function(t, i) {
                for (var c, l, a, v, e, s, o, h, k, r = n(this).data("ui-draggable"), d = r.options, u = d.snapTolerance, y = i.offset.left, w = y + r.helperProportions.width, p = i.offset.top, b = p + r.helperProportions.height, f = r.snapElements.length - 1; f >= 0; f--) e = r.snapElements[f].left, s = e + r.snapElements[f].width, o = r.snapElements[f].top, h = o + r.snapElements[f].height, y > e - u && s + u > y && p > o - u && h + u > p || y > e - u && s + u > y && b > o - u && h + u > b || w > e - u && s + u > w && p > o - u && h + u > p || w > e - u && s + u > w && b > o - u && h + u > b ? ("inner" !== d.snapMode && (c = u >= Math.abs(o - b), l = u >= Math.abs(h - p), a = u >= Math.abs(e - w), v = u >= Math.abs(s - y), c && (i.position.top = r._convertPositionTo("relative", {
                    top: o - r.helperProportions.height,
                    left: 0
                }).top - r.margins.top), l && (i.position.top = r._convertPositionTo("relative", {
                    top: h,
                    left: 0
                }).top - r.margins.top), a && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: e - r.helperProportions.width
                }).left - r.margins.left), v && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: s
                }).left - r.margins.left)), k = c || l || a || v, "outer" !== d.snapMode && (c = u >= Math.abs(o - p), l = u >= Math.abs(h - b), a = u >= Math.abs(e - y), v = u >= Math.abs(s - w), c && (i.position.top = r._convertPositionTo("relative", {
                    top: o,
                    left: 0
                }).top - r.margins.top), l && (i.position.top = r._convertPositionTo("relative", {
                    top: h - r.helperProportions.height,
                    left: 0
                }).top - r.margins.top), a && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: e
                }).left - r.margins.left), v && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: s - r.helperProportions.width
                }).left - r.margins.left)), !r.snapElements[f].snapping && (c || l || a || v || k) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, n.extend(r._uiHash(), {
                    snapItem: r.snapElements[f].item
                })), r.snapElements[f].snapping = c || l || a || v || k) : (r.snapElements[f].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, n.extend(r._uiHash(), {
                    snapItem: r.snapElements[f].item
                })), r.snapElements[f].snapping = !1)
            }
        }), n.ui.plugin.add("draggable", "stack", {
            start: function() {
                var i, r = this.data("ui-draggable").options,
                    t = n.makeArray(n(r.stack)).sort(function(t, i) {
                        return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0)
                    });
                t.length && (i = parseInt(n(t[0]).css("zIndex"), 10) || 0, n(t).each(function(t) {
                    n(this).css("zIndex", i + t)
                }), this.css("zIndex", i + t.length))
            }
        }), n.ui.plugin.add("draggable", "zIndex", {
            start: function(t, i) {
                var r = n(i.helper),
                    u = n(this).data("ui-draggable").options;
                r.css("zIndex") && (u._zIndex = r.css("zIndex")), r.css("zIndex", u.zIndex)
            },
            stop: function(t, i) {
                var r = n(this).data("ui-draggable").options;
                r._zIndex && n(i.helper).css("zIndex", r._zIndex)
            }
        })
    }(jQuery), function(n) {
        function t(n, t, i) {
            return n > t && t + i > n
        }
        n.widget("ui.droppable", {
            version: "1.10.2",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function() {
                var t = this.options,
                    i = t.accept;
                this.isover = !1, this.isout = !0, this.accept = n.isFunction(i) ? i : function(n) {
                    return n.is(i)
                }, this.proportions = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }, n.ui.ddmanager.droppables[t.scope] = n.ui.ddmanager.droppables[t.scope] || [], n.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
            },
            _destroy: function() {
                for (var t = 0, i = n.ui.ddmanager.droppables[this.options.scope]; i.length > t; t++) i[t] === this && i.splice(t, 1);
                this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function(t, i) {
                "accept" === t && (this.accept = n.isFunction(i) ? i : function(n) {
                    return n.is(i)
                }), n.Widget.prototype._setOption.apply(this, arguments)
            },
            _activate: function(t) {
                var i = n.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
            },
            _deactivate: function(t) {
                var i = n.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
            },
            _over: function(t) {
                var i = n.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
            },
            _out: function(t) {
                var i = n.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
            },
            _drop: function(t, i) {
                var r = i || n.ui.ddmanager.current,
                    u = !1;
                return r && (r.currentItem || r.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var t = n.data(this, "ui-droppable");
                    return t.options.greedy && !t.options.disabled && t.options.scope === r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && n.ui.intersect(r, n.extend(t, {
                        offset: t.element.offset()
                    }), t.options.tolerance) ? (u = !0, !1) : undefined
                }), u ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1) : !1
            },
            ui: function(n) {
                return {
                    draggable: n.currentItem || n.element,
                    helper: n.helper,
                    position: n.position,
                    offset: n.positionAbs
                }
            }
        }), n.ui.intersect = function(n, i, r) {
            if (!i.offset) return !1;
            var a, v, e = (n.positionAbs || n.position.absolute).left,
                s = e + n.helperProportions.width,
                o = (n.positionAbs || n.position.absolute).top,
                h = o + n.helperProportions.height,
                u = i.offset.left,
                c = u + i.proportions.width,
                f = i.offset.top,
                l = f + i.proportions.height;
            switch (r) {
                case "fit":
                    return e >= u && c >= s && o >= f && l >= h;
                case "intersect":
                    return e + n.helperProportions.width / 2 > u && c > s - n.helperProportions.width / 2 && o + n.helperProportions.height / 2 > f && l > h - n.helperProportions.height / 2;
                case "pointer":
                    return a = (n.positionAbs || n.position.absolute).left + (n.clickOffset || n.offset.click).left, v = (n.positionAbs || n.position.absolute).top + (n.clickOffset || n.offset.click).top, t(v, f, i.proportions.height) && t(a, u, i.proportions.width);
                case "touch":
                    return (o >= f && l >= o || h >= f && l >= h || f > o && h > l) && (e >= u && c >= e || s >= u && c >= s || u > e && s > c);
                default:
                    return !1
            }
        }, n.ui.ddmanager = {
            current: null,
            droppables: {
                "default": []
            },
            prepareOffsets: function(t, i) {
                var r, f, u = n.ui.ddmanager.droppables[t.options.scope] || [],
                    o = i ? i.type : null,
                    e = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                n: for (r = 0; u.length > r; r++)
                    if (!(u[r].options.disabled || t && !u[r].accept.call(u[r].element[0], t.currentItem || t.element))) {
                        for (f = 0; e.length > f; f++)
                            if (e[f] === u[r].element[0]) {
                                u[r].proportions.height = 0;
                                continue n
                            }
                        u[r].visible = "none" !== u[r].element.css("display"), u[r].visible && ("mousedown" === o && u[r]._activate.call(u[r], i), u[r].offset = u[r].element.offset(), u[r].proportions = {
                            width: u[r].element[0].offsetWidth,
                            height: u[r].element[0].offsetHeight
                        })
                    }
            },
            drop: function(t, i) {
                var r = !1;
                return n.each((n.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                    this.options && (!this.options.disabled && this.visible && n.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, i) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
                }), r
            },
            dragStart: function(t, i) {
                t.element.parentsUntil("body").bind("scroll.droppable", function() {
                    t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
                })
            },
            drag: function(t, i) {
                t.options.refreshPositions && n.ui.ddmanager.prepareOffsets(t, i), n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var r, e, f, o = n.ui.intersect(t, this, this.options.tolerance),
                            u = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                        u && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                            return n.data(this, "ui-droppable").options.scope === e
                        }), f.length && (r = n.data(f[0], "ui-droppable"), r.greedyChild = "isover" === u)), r && "isover" === u && (r.isover = !1, r.isout = !0, r._out.call(r, i)), this[u] = !0, this["isout" === u ? "isover" : "isout"] = !1, this["isover" === u ? "_over" : "_out"].call(this, i), r && "isout" === u && (r.isout = !1, r.isover = !0, r._over.call(r, i)))
                    }
                })
            },
            dragStop: function(t, i) {
                t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
            }
        }
    }(jQuery), function(n) {
        function i(n) {
            return parseInt(n, 10) || 0
        }

        function t(n) {
            return !isNaN(parseInt(n, 10))
        }
        n.widget("ui.resizable", n.ui.mouse, {
            version: "1.10.2",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _create: function() {
                var e, f, r, i, o, u = this,
                    t = this.options;
                if (this.element.addClass("ui-resizable"), n.extend(this, {
                        _aspectRatio: !!t.aspectRatio,
                        aspectRatio: t.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(n("<div class='ui-wrapper' style='overflow: hidden;'><\/div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = t.handles || (n(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, f = 0; e.length > f; f++) r = n.trim(e[f]), o = "ui-resizable-" + r, i = n("<div class='ui-resizable-handle " + o + "'><\/div>"), i.css({
                        zIndex: t.zIndex
                    }), "se" === r && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[r] = ".ui-resizable-" + r, this.element.append(i);
                this._renderAxis = function(t) {
                    var i, r, u, f;
                    t = t || this.element;
                    for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = n(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = n(this.handles[i], this.element), f = /sw|ne|nw|se|n|s/.test(i) ? r.outerHeight() : r.outerWidth(), u = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(u, f), this._proportionallyResize()), n(this.handles[i]).length
                }, this._renderAxis(this.element), this._handles = n(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                    u.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), u.axis = i && i[1] ? i[1] : "se")
                }), t.autoHide && (this._handles.hide(), n(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    t.disabled || (n(this).removeClass("ui-resizable-autohide"), u._handles.show())
                }).mouseleave(function() {
                    t.disabled || u.resizing || (n(this).addClass("ui-resizable-autohide"), u._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var t, i = function(t) {
                    n(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                    position: t.css("position"),
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: t.css("top"),
                    left: t.css("left")
                }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
            },
            _mouseCapture: function(t) {
                var r, i, u = !1;
                for (r in this.handles) i = n(this.handles[r])[0], (i === t.target || n.contains(i, t.target)) && (u = !0);
                return !this.options.disabled && u
            },
            _mouseStart: function(t) {
                var f, e, o, u = this.options,
                    s = this.element.position(),
                    r = this.element;
                return this.resizing = !0, /absolute/.test(r.css("position")) ? r.css({
                    position: "absolute",
                    top: r.css("top"),
                    left: r.css("left")
                }) : r.is(".ui-draggable") && r.css({
                    position: "absolute",
                    top: s.top,
                    left: s.left
                }), this._renderProxy(), f = i(this.helper.css("left")), e = i(this.helper.css("top")), u.containment && (f += n(u.containment).scrollLeft() || 0, e += n(u.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: f,
                    top: e
                }, this.size = this._helper ? {
                    width: r.outerWidth(),
                    height: r.outerHeight()
                } : {
                    width: r.width(),
                    height: r.height()
                }, this.originalSize = this._helper ? {
                    width: r.outerWidth(),
                    height: r.outerHeight()
                } : {
                    width: r.width(),
                    height: r.height()
                }, this.originalPosition = {
                    left: f,
                    top: e
                }, this.sizeDiff = {
                    width: r.outerWidth() - r.width(),
                    height: r.outerHeight() - r.height()
                }, this.originalMousePosition = {
                    left: t.pageX,
                    top: t.pageY
                }, this.aspectRatio = "number" == typeof u.aspectRatio ? u.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = n(".ui-resizable-" + this.axis).css("cursor"), n("body").css("cursor", "auto" === o ? this.axis + "-resize" : o), r.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
            },
            _mouseDrag: function(t) {
                var i, e = this.helper,
                    r = {},
                    u = this.originalMousePosition,
                    o = this.axis,
                    s = this.position.top,
                    h = this.position.left,
                    c = this.size.width,
                    l = this.size.height,
                    a = t.pageX - u.left || 0,
                    v = t.pageY - u.top || 0,
                    f = this._change[o];
                return f ? (i = f.apply(this, [t, a, v]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), this.position.top !== s && (r.top = this.position.top + "px"), this.position.left !== h && (r.left = this.position.left + "px"), this.size.width !== c && (r.width = this.size.width + "px"), this.size.height !== l && (r.height = this.size.height + "px"), e.css(r), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), n.isEmptyObject(r) || this._trigger("resize", t, this.ui()), !1) : !1
            },
            _mouseStop: function(t) {
                this.resizing = !1;
                var r, u, f, e, o, s, h, c = this.options,
                    i = this;
                return this._helper && (r = this._proportionallyResizeElements, u = r.length && /textarea/i.test(r[0].nodeName), f = u && n.ui.hasScroll(r[0], "left") ? 0 : i.sizeDiff.height, e = u ? 0 : i.sizeDiff.width, o = {
                    width: i.helper.width() - e,
                    height: i.helper.height() - f
                }, s = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, h = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null, c.animate || this.element.css(n.extend(o, {
                    top: h,
                    left: s
                })), i.helper.height(i.size.height), i.helper.width(i.size.width), this._helper && !c.animate && this._proportionallyResize()), n("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
            },
            _updateVirtualBoundaries: function(n) {
                var u, f, e, o, i, r = this.options;
                i = {
                    minWidth: t(r.minWidth) ? r.minWidth : 0,
                    maxWidth: t(r.maxWidth) ? r.maxWidth : 1 / 0,
                    minHeight: t(r.minHeight) ? r.minHeight : 0,
                    maxHeight: t(r.maxHeight) ? r.maxHeight : 1 / 0
                }, (this._aspectRatio || n) && (u = i.minHeight * this.aspectRatio, e = i.minWidth / this.aspectRatio, f = i.maxHeight * this.aspectRatio, o = i.maxWidth / this.aspectRatio, u > i.minWidth && (i.minWidth = u), e > i.minHeight && (i.minHeight = e), i.maxWidth > f && (i.maxWidth = f), i.maxHeight > o && (i.maxHeight = o)), this._vBoundaries = i
            },
            _updateCache: function(n) {
                this.offset = this.helper.offset(), t(n.left) && (this.position.left = n.left), t(n.top) && (this.position.top = n.top), t(n.height) && (this.size.height = n.height), t(n.width) && (this.size.width = n.width)
            },
            _updateRatio: function(n) {
                var i = this.position,
                    r = this.size,
                    u = this.axis;
                return t(n.height) ? n.width = n.height * this.aspectRatio : t(n.width) && (n.height = n.width / this.aspectRatio), "sw" === u && (n.left = i.left + (r.width - n.width), n.top = null), "nw" === u && (n.top = i.top + (r.height - n.height), n.left = i.left + (r.width - n.width)), n
            },
            _respectSize: function(n) {
                var i = this._vBoundaries,
                    r = this.axis,
                    u = t(n.width) && i.maxWidth && i.maxWidth < n.width,
                    f = t(n.height) && i.maxHeight && i.maxHeight < n.height,
                    e = t(n.width) && i.minWidth && i.minWidth > n.width,
                    o = t(n.height) && i.minHeight && i.minHeight > n.height,
                    s = this.originalPosition.left + this.originalSize.width,
                    h = this.position.top + this.size.height,
                    c = /sw|nw|w/.test(r),
                    l = /nw|ne|n/.test(r);
                return e && (n.width = i.minWidth), o && (n.height = i.minHeight), u && (n.width = i.maxWidth), f && (n.height = i.maxHeight), e && c && (n.left = s - i.minWidth), u && c && (n.left = s - i.maxWidth), o && l && (n.top = h - i.minHeight), f && l && (n.top = h - i.maxHeight), n.width || n.height || n.left || !n.top ? n.width || n.height || n.top || !n.left || (n.left = null) : n.top = null, n
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var t, r, u, n, f = this.helper || this.element, i = 0; this._proportionallyResizeElements.length > i; i++) {
                        if (n = this._proportionallyResizeElements[i], !this.borderDif)
                            for (this.borderDif = [], r = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], u = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], t = 0; r.length > t; t++) this.borderDif[t] = (parseInt(r[t], 10) || 0) + (parseInt(u[t], 10) || 0);
                        n.css({
                            height: f.height() - this.borderDif[0] - this.borderDif[2] || 0,
                            width: f.width() - this.borderDif[1] - this.borderDif[3] || 0
                        })
                    }
            },
            _renderProxy: function() {
                var t = this.element,
                    i = this.options;
                this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || n("<div style='overflow:hidden;'><\/div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(n, t) {
                    return {
                        width: this.originalSize.width + t
                    }
                },
                w: function(n, t) {
                    var i = this.originalSize,
                        r = this.originalPosition;
                    return {
                        left: r.left + t,
                        width: i.width - t
                    }
                },
                n: function(n, t, i) {
                    var r = this.originalSize,
                        u = this.originalPosition;
                    return {
                        top: u.top + i,
                        height: r.height - i
                    }
                },
                s: function(n, t, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function(t, i, r) {
                    return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
                },
                sw: function(t, i, r) {
                    return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
                },
                ne: function(t, i, r) {
                    return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
                },
                nw: function(t, i, r) {
                    return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
                }
            },
            _propagate: function(t, i) {
                n.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), n.ui.plugin.add("resizable", "animate", {
            stop: function(t) {
                var i = n(this).data("ui-resizable"),
                    u = i.options,
                    r = i._proportionallyResizeElements,
                    f = r.length && /textarea/i.test(r[0].nodeName),
                    s = f && n.ui.hasScroll(r[0], "left") ? 0 : i.sizeDiff.height,
                    h = f ? 0 : i.sizeDiff.width,
                    c = {
                        width: i.size.width - h,
                        height: i.size.height - s
                    },
                    e = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                    o = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(n.extend(c, o && e ? {
                    top: o,
                    left: e
                } : {}), {
                    duration: u.animateDuration,
                    easing: u.animateEasing,
                    step: function() {
                        var u = {
                            width: parseInt(i.element.css("width"), 10),
                            height: parseInt(i.element.css("height"), 10),
                            top: parseInt(i.element.css("top"), 10),
                            left: parseInt(i.element.css("left"), 10)
                        };
                        r && r.length && n(r[0]).css({
                            width: u.width,
                            height: u.height
                        }), i._updateCache(u), i._propagate("resize", t)
                    }
                })
            }
        }), n.ui.plugin.add("resizable", "containment", {
            start: function() {
                var u, e, o, s, h, c, l, t = n(this).data("ui-resizable"),
                    a = t.options,
                    v = t.element,
                    f = a.containment,
                    r = f instanceof n ? f.get(0) : /parent/.test(f) ? v.parent().get(0) : f;
                r && (t.containerElement = n(r), /document/.test(f) || f === document ? (t.containerOffset = {
                    left: 0,
                    top: 0
                }, t.containerPosition = {
                    left: 0,
                    top: 0
                }, t.parentData = {
                    element: n(document),
                    left: 0,
                    top: 0,
                    width: n(document).width(),
                    height: n(document).height() || document.body.parentNode.scrollHeight
                }) : (u = n(r), e = [], n(["Top", "Right", "Left", "Bottom"]).each(function(n, t) {
                    e[n] = i(u.css("padding" + t))
                }), t.containerOffset = u.offset(), t.containerPosition = u.position(), t.containerSize = {
                    height: u.innerHeight() - e[3],
                    width: u.innerWidth() - e[1]
                }, o = t.containerOffset, s = t.containerSize.height, h = t.containerSize.width, c = n.ui.hasScroll(r, "left") ? r.scrollWidth : h, l = n.ui.hasScroll(r) ? r.scrollHeight : s, t.parentData = {
                    element: r,
                    left: o.left,
                    top: o.top,
                    width: c,
                    height: l
                }))
            },
            resize: function(t) {
                var f, o, s, h, i = n(this).data("ui-resizable"),
                    a = i.options,
                    r = i.containerOffset,
                    c = i.position,
                    e = i._aspectRatio || t.shiftKey,
                    u = {
                        top: 0,
                        left: 0
                    },
                    l = i.containerElement;
                l[0] !== document && /static/.test(l.css("position")) && (u = r), c.left < (i._helper ? r.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - r.left : i.position.left - u.left), e && (i.size.height = i.size.width / i.aspectRatio), i.position.left = a.helper ? r.left : 0), c.top < (i._helper ? r.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - r.top : i.position.top), e && (i.size.width = i.size.height * i.aspectRatio), i.position.top = i._helper ? r.top : 0), i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top, f = Math.abs((i._helper ? i.offset.left - u.left : i.offset.left - u.left) + i.sizeDiff.width), o = Math.abs((i._helper ? i.offset.top - u.top : i.offset.top - r.top) + i.sizeDiff.height), s = i.containerElement.get(0) === i.element.parent().get(0), h = /relative|absolute/.test(i.containerElement.css("position")), s && h && (f -= i.parentData.left), f + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - f, e && (i.size.height = i.size.width / i.aspectRatio)), o + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - o, e && (i.size.width = i.size.height * i.aspectRatio))
            },
            stop: function() {
                var t = n(this).data("ui-resizable"),
                    r = t.options,
                    u = t.containerOffset,
                    f = t.containerPosition,
                    e = t.containerElement,
                    i = n(t.helper),
                    o = i.offset(),
                    s = i.outerWidth() - t.sizeDiff.width,
                    h = i.outerHeight() - t.sizeDiff.height;
                t._helper && !r.animate && /relative/.test(e.css("position")) && n(this).css({
                    left: o.left - f.left - u.left,
                    width: s,
                    height: h
                }), t._helper && !r.animate && /static/.test(e.css("position")) && n(this).css({
                    left: o.left - f.left - u.left,
                    width: s,
                    height: h
                })
            }
        }), n.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var r = n(this).data("ui-resizable"),
                    t = r.options,
                    i = function(t) {
                        n(t).each(function() {
                            var t = n(this);
                            t.data("ui-resizable-alsoresize", {
                                width: parseInt(t.width(), 10),
                                height: parseInt(t.height(), 10),
                                left: parseInt(t.css("left"), 10),
                                top: parseInt(t.css("top"), 10)
                            })
                        })
                    };
                "object" != typeof t.alsoResize || t.alsoResize.parentNode ? i(t.alsoResize) : t.alsoResize.length ? (t.alsoResize = t.alsoResize[0], i(t.alsoResize)) : n.each(t.alsoResize, function(n) {
                    i(n)
                })
            },
            resize: function(t, i) {
                var r = n(this).data("ui-resizable"),
                    u = r.options,
                    f = r.originalSize,
                    e = r.originalPosition,
                    s = {
                        height: r.size.height - f.height || 0,
                        width: r.size.width - f.width || 0,
                        top: r.position.top - e.top || 0,
                        left: r.position.left - e.left || 0
                    },
                    o = function(t, r) {
                        n(t).each(function() {
                            var t = n(this),
                                f = n(this).data("ui-resizable-alsoresize"),
                                u = {},
                                e = r && r.length ? r : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            n.each(e, function(n, t) {
                                var i = (f[t] || 0) + (s[t] || 0);
                                i && i >= 0 && (u[t] = i || null)
                            }), t.css(u)
                        })
                    };
                "object" != typeof u.alsoResize || u.alsoResize.nodeType ? o(u.alsoResize) : n.each(u.alsoResize, function(n, t) {
                    o(n, t)
                })
            },
            stop: function() {
                n(this).removeData("resizable-alsoresize")
            }
        }), n.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var t = n(this).data("ui-resizable"),
                    i = t.options,
                    r = t.size;
                t.ghost = t.originalElement.clone(), t.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: r.height,
                    width: r.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
            },
            resize: function() {
                var t = n(this).data("ui-resizable");
                t.ghost && t.ghost.css({
                    position: "relative",
                    height: t.size.height,
                    width: t.size.width
                })
            },
            stop: function() {
                var t = n(this).data("ui-resizable");
                t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
            }
        }), n.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var t = n(this).data("ui-resizable"),
                    i = t.options,
                    v = t.size,
                    f = t.originalSize,
                    e = t.originalPosition,
                    h = t.axis,
                    c = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                    o = c[0] || 1,
                    s = c[1] || 1,
                    l = Math.round((v.width - f.width) / o) * o,
                    a = Math.round((v.height - f.height) / s) * s,
                    r = f.width + l,
                    u = f.height + a,
                    y = i.maxWidth && r > i.maxWidth,
                    p = i.maxHeight && u > i.maxHeight,
                    w = i.minWidth && i.minWidth > r,
                    b = i.minHeight && i.minHeight > u;
                i.grid = c, w && (r += o), b && (u += s), y && (r -= o), p && (u -= s), /^(se|s|e)$/.test(h) ? (t.size.width = r, t.size.height = u) : /^(ne)$/.test(h) ? (t.size.width = r, t.size.height = u, t.position.top = e.top - a) : /^(sw)$/.test(h) ? (t.size.width = r, t.size.height = u, t.position.left = e.left - l) : (t.size.width = r, t.size.height = u, t.position.top = e.top - a, t.position.left = e.left - l)
            }
        })
    }(jQuery), function(n) {
        n.widget("ui.selectable", n.ui.mouse, {
            version: "1.10.2",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function() {
                var t, i = this;
                this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                    t = n(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function() {
                        var t = n(this),
                            i = t.offset();
                        n.data(this, "selectable-item", {
                            element: this,
                            $element: t,
                            left: i.left,
                            top: i.top,
                            right: i.left + t.outerWidth(),
                            bottom: i.top + t.outerHeight(),
                            startselected: !1,
                            selected: t.hasClass("ui-selected"),
                            selecting: t.hasClass("ui-selecting"),
                            unselecting: t.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = n("<div class='ui-selectable-helper'><\/div>")
            },
            _destroy: function() {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
            },
            _mouseStart: function(t) {
                var i = this,
                    r = this.options;
                this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = n(r.filter, this.element[0]), this._trigger("start", t), n(r.appendTo).append(this.helper), this.helper.css({
                    left: t.pageX,
                    top: t.pageY,
                    width: 0,
                    height: 0
                }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var r = n.data(this, "selectable-item");
                    r.startselected = !0, t.metaKey || t.ctrlKey || (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, i._trigger("unselecting", t, {
                        unselecting: r.element
                    }))
                }), n(t.target).parents().addBack().each(function() {
                    var u, r = n.data(this, "selectable-item");
                    return r ? (u = !t.metaKey && !t.ctrlKey || !r.$element.hasClass("ui-selected"), r.$element.removeClass(u ? "ui-unselecting" : "ui-selected").addClass(u ? "ui-selecting" : "ui-unselecting"), r.unselecting = !u, r.selecting = u, r.selected = u, u ? i._trigger("selecting", t, {
                        selecting: r.element
                    }) : i._trigger("unselecting", t, {
                        unselecting: r.element
                    }), !1) : undefined
                }))
            },
            _mouseDrag: function(t) {
                if (this.dragged = !0, !this.options.disabled) {
                    var e, o = this,
                        s = this.options,
                        i = this.opos[0],
                        r = this.opos[1],
                        u = t.pageX,
                        f = t.pageY;
                    return i > u && (e = u, u = i, i = e), r > f && (e = f, f = r, r = e), this.helper.css({
                        left: i,
                        top: r,
                        width: u - i,
                        height: f - r
                    }), this.selectees.each(function() {
                        var e = n.data(this, "selectable-item"),
                            h = !1;
                        e && e.element !== o.element[0] && ("touch" === s.tolerance ? h = !(e.left > u || i > e.right || e.top > f || r > e.bottom) : "fit" === s.tolerance && (h = e.left > i && u > e.right && e.top > r && f > e.bottom), h ? (e.selected && (e.$element.removeClass("ui-selected"), e.selected = !1), e.unselecting && (e.$element.removeClass("ui-unselecting"), e.unselecting = !1), e.selecting || (e.$element.addClass("ui-selecting"), e.selecting = !0, o._trigger("selecting", t, {
                            selecting: e.element
                        }))) : (e.selecting && ((t.metaKey || t.ctrlKey) && e.startselected ? (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.$element.addClass("ui-selected"), e.selected = !0) : (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.startselected && (e.$element.addClass("ui-unselecting"), e.unselecting = !0), o._trigger("unselecting", t, {
                            unselecting: e.element
                        }))), e.selected && (t.metaKey || t.ctrlKey || e.startselected || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, o._trigger("unselecting", t, {
                            unselecting: e.element
                        })))))
                    }), !1
                }
            },
            _mouseStop: function(t) {
                var i = this;
                return this.dragged = !1, n(".ui-unselecting", this.element[0]).each(function() {
                    var r = n.data(this, "selectable-item");
                    r.$element.removeClass("ui-unselecting"), r.unselecting = !1, r.startselected = !1, i._trigger("unselected", t, {
                        unselected: r.element
                    })
                }), n(".ui-selecting", this.element[0]).each(function() {
                    var r = n.data(this, "selectable-item");
                    r.$element.removeClass("ui-selecting").addClass("ui-selected"), r.selecting = !1, r.selected = !0, r.startselected = !0, i._trigger("selected", t, {
                        selected: r.element
                    })
                }), this._trigger("stop", t), this.helper.remove(), !1
            }
        })
    }(jQuery), function(n) {
        function t(n, t, i) {
            return n > t && t + i > n
        }

        function i(n) {
            return /left|right/.test(n.css("float")) || /inline|table-cell/.test(n.css("display"))
        }
        n.widget("ui.sortable", n.ui.mouse, {
            version: "1.10.2",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _create: function() {
                var n = this.options;
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === n.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
            },
            _destroy: function() {
                this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
                for (var n = this.items.length - 1; n >= 0; n--) this.items[n].item.removeData(this.widgetName + "-item");
                return this
            },
            _setOption: function(t, i) {
                "disabled" === t ? (this.options[t] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : n.Widget.prototype._setOption.apply(this, arguments)
            },
            _mouseCapture: function(t, i) {
                var r = null,
                    f = !1,
                    u = this;
                return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), n(t.target).parents().each(function() {
                    return n.data(this, u.widgetName + "-item") === u ? (r = n(this), !1) : undefined
                }), n.data(t.target, u.widgetName + "-item") === u && (r = n(t.target)), r ? !this.options.handle || i || (n(this.options.handle, r).find("*").addBack().each(function() {
                    this === t.target && (f = !0)
                }), f) ? (this.currentItem = r, this._removeCurrentsFromItems(), !0) : !1 : !1)
            },
            _mouseStart: function(t, i, r) {
                var f, e, u = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, n.extend(this.offset, {
                        click: {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, u.cursorAt && this._adjustOffsetFromHelper(u.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), u.containment && this._setContainment(), u.cursor && "auto" !== u.cursor && (e = this.document.find("body"), this.storedCursor = e.css("cursor"), e.css("cursor", u.cursor), this.storedStylesheet = n("<style>*{ cursor: " + u.cursor + " !important; }<\/style>").appendTo(e)), u.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", u.opacity)), u.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", u.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !r)
                    for (f = this.containers.length - 1; f >= 0; f--) this.containers[f]._trigger("activate", t, this._uiHash(this));
                return n.ui.ddmanager && (n.ui.ddmanager.current = this), n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
            },
            _mouseDrag: function(t) {
                var e, u, f, o, i = this.options,
                    r = !1;
                for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? r = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (r = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed)), t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? r = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (r = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed))), r !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; e >= 0; e--)
                    if (u = this.items[e], f = u.item[0], o = this._intersectsWithPointer(u), o && u.instance === this.currentContainer && f !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== f && !n.contains(this.placeholder[0], f) && ("semi-dynamic" === this.options.type ? !n.contains(this.element[0], f) : !0)) {
                        if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(u)) break;
                        this._rearrange(t, u), this._trigger("change", t, this._uiHash());
                        break
                    }
                return this._contactContainers(t), n.ui.ddmanager && n.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(t, i) {
                if (t) {
                    if (n.ui.ddmanager && !this.options.dropBehaviour && n.ui.ddmanager.drop(this, t), this.options.revert) {
                        var e = this,
                            f = this.placeholder.offset(),
                            r = this.options.axis,
                            u = {};
                        r && "x" !== r || (u.left = f.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), r && "y" !== r || (u.top = f.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, n(this.helper).animate(u, parseInt(this.options.revert, 10) || 500, function() {
                            e._clear(t)
                        })
                    } else this._clear(t, i);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), n.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? n(this.domPosition.prev).after(this.currentItem) : n(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(t) {
                var r = this._getItemsAsjQuery(t && t.connected),
                    i = [];
                return t = t || {}, n(r).each(function() {
                    var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                    r && i.push((t.key || r[1] + "[]") + "=" + (t.key && t.expression ? r[1] : r[2]))
                }), !i.length && t.key && i.push(t.key + "="), i.join("&")
            },
            toArray: function(t) {
                var r = this._getItemsAsjQuery(t && t.connected),
                    i = [];
                return t = t || {}, r.each(function() {
                    i.push(n(t.item || this).attr(t.attribute || "id") || "")
                }), i
            },
            _intersectsWith: function(n) {
                var t = this.positionAbs.left,
                    h = t + this.helperProportions.width,
                    i = this.positionAbs.top,
                    c = i + this.helperProportions.height,
                    r = n.left,
                    f = r + n.width,
                    u = n.top,
                    e = u + n.height,
                    o = this.offset.click.top,
                    s = this.offset.click.left,
                    l = i + o > u && e > i + o && t + s > r && f > t + s;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > n[this.floating ? "width" : "height"] ? l : t + this.helperProportions.width / 2 > r && f > h - this.helperProportions.width / 2 && i + this.helperProportions.height / 2 > u && e > c - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function(n) {
                var u = "x" === this.options.axis || t(this.positionAbs.top + this.offset.click.top, n.top, n.height),
                    f = "y" === this.options.axis || t(this.positionAbs.left + this.offset.click.left, n.left, n.width),
                    e = u && f,
                    i = this._getDragVerticalDirection(),
                    r = this._getDragHorizontalDirection();
                return e ? this.floating ? r && "right" === r || "down" === i ? 2 : 1 : i && ("down" === i ? 2 : 1) : !1
            },
            _intersectsWithSides: function(n) {
                var u = t(this.positionAbs.top + this.offset.click.top, n.top + n.height / 2, n.height),
                    f = t(this.positionAbs.left + this.offset.click.left, n.left + n.width / 2, n.width),
                    i = this._getDragVerticalDirection(),
                    r = this._getDragHorizontalDirection();
                return this.floating && r ? "right" === r && f || "left" === r && !f : i && ("down" === i && u || "up" === i && !u)
            },
            _getDragVerticalDirection: function() {
                var n = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== n && (n > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var n = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== n && (n > 0 ? "right" : "left")
            },
            refresh: function(n) {
                return this._refreshItems(n), this.refreshPositions(), this
            },
            _connectWith: function() {
                var n = this.options;
                return n.connectWith.constructor === String ? [n.connectWith] : n.connectWith
            },
            _getItemsAsjQuery: function(t) {
                var r, u, e, i, s = [],
                    f = [],
                    o = this._connectWith();
                if (o && t)
                    for (r = o.length - 1; r >= 0; r--)
                        for (e = n(o[r]), u = e.length - 1; u >= 0; u--) i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element) : n(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i]);
                for (f.push([n.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : n(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), r = f.length - 1; r >= 0; r--) f[r][0].each(function() {
                    s.push(this)
                });
                return n(s)
            },
            _removeCurrentsFromItems: function() {
                var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = n.grep(this.items, function(n) {
                    for (var i = 0; t.length > i; i++)
                        if (t[i] === n.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(t) {
                this.items = [], this.containers = [this];
                var r, u, e, i, o, s, h, l, a = this.items,
                    f = [
                        [n.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                            item: this.currentItem
                        }) : n(this.options.items, this.element), this]
                    ],
                    c = this._connectWith();
                if (c && this.ready)
                    for (r = c.length - 1; r >= 0; r--)
                        for (e = n(c[r]), u = e.length - 1; u >= 0; u--) i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && (f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element[0], t, {
                            item: this.currentItem
                        }) : n(i.options.items, i.element), i]), this.containers.push(i));
                for (r = f.length - 1; r >= 0; r--)
                    for (o = f[r][1], s = f[r][0], u = 0, l = s.length; l > u; u++) h = n(s[u]), h.data(this.widgetName + "-item", o), a.push({
                        item: h,
                        instance: o,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(t) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                for (var r, f, u, i = this.items.length - 1; i >= 0; i--) r = this.items[i], r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0] || (f = this.options.toleranceElement ? n(this.options.toleranceElement, r.item) : r.item, t || (r.width = f.outerWidth(), r.height = f.outerHeight()), u = f.offset(), r.left = u.left, r.top = u.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--) u = this.containers[i].element.offset(), this.containers[i].containerCache.left = u.left, this.containers[i].containerCache.top = u.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function(t) {
                t = t || this;
                var r, i = t.options;
                i.placeholder && i.placeholder.constructor !== String || (r = i.placeholder, i.placeholder = {
                    element: function() {
                        var u = t.currentItem[0].nodeName.toLowerCase(),
                            i = n(t.document[0].createElement(u)).addClass(r || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        return "tr" === u ? i.append("<td colspan='99'>&#160;<\/td>") : "img" === u && i.attr("src", t.currentItem.attr("src")), r || i.css("visibility", "hidden"), i
                    },
                    update: function(n, u) {
                        (!r || i.forcePlaceholderSize) && (u.height() || u.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), u.width() || u.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), t.placeholder = n(i.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), i.placeholder.update(t, t.placeholder)
            },
            _contactContainers: function(r) {
                for (var u, v, s, l, y, h, o, p, a, c = null, f = null, e = this.containers.length - 1; e >= 0; e--)
                    if (!n.contains(this.currentItem[0], this.containers[e].element[0]))
                        if (this._intersectsWith(this.containers[e].containerCache)) {
                            if (c && n.contains(this.containers[e].element[0], c.element[0])) continue;
                            c = this.containers[e], f = e
                        } else this.containers[e].containerCache.over && (this.containers[e]._trigger("out", r, this._uiHash(this)), this.containers[e].containerCache.over = 0);
                if (c)
                    if (1 === this.containers.length) this.containers[f].containerCache.over || (this.containers[f]._trigger("over", r, this._uiHash(this)), this.containers[f].containerCache.over = 1);
                    else {
                        for (v = 1e4, s = null, a = c.floating || i(this.currentItem), l = a ? "left" : "top", y = a ? "width" : "height", h = this.positionAbs[l] + this.offset.click[l], u = this.items.length - 1; u >= 0; u--) n.contains(this.containers[f].element[0], this.items[u].item[0]) && this.items[u].item[0] !== this.currentItem[0] && (!a || t(this.positionAbs.top + this.offset.click.top, this.items[u].top, this.items[u].height)) && (o = this.items[u].item.offset()[l], p = !1, Math.abs(o - h) > Math.abs(o + this.items[u][y] - h) && (p = !0, o += this.items[u][y]), v > Math.abs(o - h) && (v = Math.abs(o - h), s = this.items[u], this.direction = p ? "up" : "down"));
                        if (!s && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[f]) return;
                        s ? this._rearrange(r, s, null, !0) : this._rearrange(r, null, this.containers[f].element, !0), this._trigger("change", r, this._uiHash()), this.containers[f]._trigger("change", r, this._uiHash(this)), this.currentContainer = this.containers[f], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[f]._trigger("over", r, this._uiHash(this)), this.containers[f].containerCache.over = 1
                    }
            },
            _createHelper: function(t) {
                var r = this.options,
                    i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === r.helper ? this.currentItem.clone() : this.currentItem;
                return i.parents("body").length || n("parent" !== r.appendTo ? r.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!i[0].style.width || r.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || r.forceHelperSize) && i.height(this.currentItem.height()), i
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), n.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var t = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && n.ui.ie) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var n = this.currentItem.position();
                    return {
                        top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var t, r, u, i = this.options;
                "parent" === i.containment && (i.containment = this.helper[0].parentNode), ("document" === i.containment || "window" === i.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, n("document" === i.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (n("document" === i.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(i.containment) || (t = n(i.containment)[0], r = n(i.containment).offset(), u = "hidden" !== n(t).css("overflow"), this.containment = [r.left + (parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(t, i) {
                i || (i = this.position);
                var r = "absolute" === t ? 1 : -1,
                    u = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    f = /(html|body)/i.test(u[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r,
                    left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r
                }
            },
            _generatePosition: function(t) {
                var r, u, i = this.options,
                    f = t.pageX,
                    e = t.pageY,
                    o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    s = /(html|body)/i.test(o[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)), i.grid && (r = this.originalPageY + Math.round((e - this.originalPageY) / i.grid[1]) * i.grid[1], e = this.containment ? r - this.offset.click.top >= this.containment[1] && r - this.offset.click.top <= this.containment[3] ? r : r - this.offset.click.top >= this.containment[1] ? r - i.grid[1] : r + i.grid[1] : r, u = this.originalPageX + Math.round((f - this.originalPageX) / i.grid[0]) * i.grid[0], f = this.containment ? u - this.offset.click.left >= this.containment[0] && u - this.offset.click.left <= this.containment[2] ? u : u - this.offset.click.left >= this.containment[0] ? u - i.grid[0] : u + i.grid[0] : u)), {
                    top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()),
                    left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft())
                }
            },
            _rearrange: function(n, t, i, r) {
                i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var u = this.counter;
                this._delay(function() {
                    u === this.counter && this.refreshPositions(!r)
                })
            },
            _clear: function(n, t) {
                this.reverting = !1;
                var i, r = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !t && r.push(function(n) {
                        this._trigger("receive", n, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || r.push(function(n) {
                        this._trigger("update", n, this._uiHash())
                    }), this !== this.currentContainer && (t || (r.push(function(n) {
                        this._trigger("remove", n, this._uiHash())
                    }), r.push(function(n) {
                        return function(t) {
                            n._trigger("receive", t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), r.push(function(n) {
                        return function(t) {
                            n._trigger("update", t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) t || r.push(function(n) {
                    return function(t) {
                        n._trigger("deactivate", t, this._uiHash(this))
                    }
                }.call(this, this.containers[i])), this.containers[i].containerCache.over && (r.push(function(n) {
                    return function(t) {
                        n._trigger("out", t, this._uiHash(this))
                    }
                }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                    if (!t) {
                        for (this._trigger("beforeStop", n, this._uiHash()), i = 0; r.length > i; i++) r[i].call(this, n);
                        this._trigger("stop", n, this._uiHash())
                    }
                    return this.fromOutside = !1, !1
                }
                if (t || this._trigger("beforeStop", n, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !t) {
                    for (i = 0; r.length > i; i++) r[i].call(this, n);
                    this._trigger("stop", n, this._uiHash())
                }
                return this.fromOutside = !1, !0
            },
            _trigger: function() {
                n.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function(t) {
                var i = t || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || n([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: t ? t.element : null
                }
            }
        })
    }(jQuery), function(n, t) {
        var i = "ui-effects-";
        n.effects = {
                effect: {}
            },
            function(n, t) {
                function f(n, t, i) {
                    var r = h[t.type] || {};
                    return null == n ? i || !t.def ? null : t.def : (n = r.floor ? ~~n : parseFloat(n), isNaN(n) ? t.def : r.mod ? (n + r.mod) % r.mod : 0 > n ? 0 : n > r.max ? r.max : n)
                }

                function s(f) {
                    var o = i(),
                        s = o._rgba = [];
                    return f = f.toLowerCase(), r(y, function(n, i) {
                        var r, h = i.re.exec(f),
                            c = h && i.parse(h),
                            e = i.space || "rgba";
                        return c ? (r = o[e](c), o[u[e].cache] = r[u[e].cache], s = o._rgba = r._rgba, !1) : t
                    }), s.length ? ("0,0,0,0" === s.join() && n.extend(s, e.transparent), o) : e[f]
                }

                function o(n, t, i) {
                    return i = (i + 1) % 1, 1 > 6 * i ? n + 6 * (t - n) * i : 1 > 2 * i ? t : 2 > 3 * i ? n + 6 * (t - n) * (2 / 3 - i) : n
                }
                var e, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                    v = /^([\-+])=\s*(\d+\.?\d*)/,
                    y = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(n) {
                            return [n[1], n[2], n[3], n[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(n) {
                            return [2.55 * n[1], 2.55 * n[2], 2.55 * n[3], n[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(n) {
                            return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(n) {
                            return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(n) {
                            return [n[1], n[2] / 100, n[3] / 100, n[4]]
                        }
                    }],
                    i = n.Color = function(t, i, r, u) {
                        return new n.Color.fn.parse(t, i, r, u)
                    },
                    u = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    h = {
                        byte: {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    c = i.support = {},
                    l = n("<p>")[0],
                    r = n.each;
                l.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = l.style.backgroundColor.indexOf("rgba") > -1, r(u, function(n, t) {
                    t.cache = "_" + n, t.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), i.fn = n.extend(i.prototype, {
                    parse: function(o, h, c, l) {
                        if (o === t) return this._rgba = [null, null, null, null], this;
                        (o.jquery || o.nodeType) && (o = n(o).css(h), h = t);
                        var a = this,
                            v = n.type(o),
                            y = this._rgba = [];
                        return h !== t && (o = [o, h, c, l], v = "array"), "string" === v ? this.parse(s(o) || e._default) : "array" === v ? (r(u.rgba.props, function(n, t) {
                            y[t.idx] = f(o[t.idx], t)
                        }), this) : "object" === v ? (o instanceof i ? r(u, function(n, t) {
                            o[t.cache] && (a[t.cache] = o[t.cache].slice())
                        }) : r(u, function(t, i) {
                            var u = i.cache;
                            r(i.props, function(n, t) {
                                if (!a[u] && i.to) {
                                    if ("alpha" === n || null == o[n]) return;
                                    a[u] = i.to(a._rgba)
                                }
                                a[u][t.idx] = f(o[n], t, !0)
                            }), a[u] && 0 > n.inArray(null, a[u].slice(0, 3)) && (a[u][3] = 1, i.from && (a._rgba = i.from(a[u])))
                        }), this) : t
                    },
                    is: function(n) {
                        var o = i(n),
                            f = !0,
                            e = this;
                        return r(u, function(n, i) {
                            var s, u = o[i.cache];
                            return u && (s = e[i.cache] || i.to && i.to(e._rgba) || [], r(i.props, function(n, i) {
                                return null != u[i.idx] ? f = u[i.idx] === s[i.idx] : t
                            })), f
                        }), f
                    },
                    _space: function() {
                        var n = [],
                            t = this;
                        return r(u, function(i, r) {
                            t[r.cache] && n.push(i)
                        }), n.pop()
                    },
                    transition: function(n, t) {
                        var e = i(n),
                            c = e._space(),
                            o = u[c],
                            l = 0 === this.alpha() ? i("transparent") : this,
                            a = l[o.cache] || o.to(l._rgba),
                            s = a.slice();
                        return e = e[o.cache], r(o.props, function(n, i) {
                            var c = i.idx,
                                r = a[c],
                                u = e[c],
                                o = h[i.type] || {};
                            null !== u && (null === r ? s[c] = u : (o.mod && (u - r > o.mod / 2 ? r += o.mod : r - u > o.mod / 2 && (r -= o.mod)), s[c] = f((u - r) * t + r, i)))
                        }), this[c](s)
                    },
                    blend: function(t) {
                        if (1 === this._rgba[3]) return this;
                        var r = this._rgba.slice(),
                            u = r.pop(),
                            f = i(t)._rgba;
                        return i(n.map(r, function(n, t) {
                            return (1 - u) * f[t] + u * n
                        }))
                    },
                    toRgbaString: function() {
                        var i = "rgba(",
                            t = n.map(this._rgba, function(n, t) {
                                return null == n ? t > 2 ? 1 : 0 : n
                            });
                        return 1 === t[3] && (t.pop(), i = "rgb("), i + t.join() + ")"
                    },
                    toHslaString: function() {
                        var i = "hsla(",
                            t = n.map(this.hsla(), function(n, t) {
                                return null == n && (n = t > 2 ? 1 : 0), t && 3 > t && (n = Math.round(100 * n) + "%"), n
                            });
                        return 1 === t[3] && (t.pop(), i = "hsl("), i + t.join() + ")"
                    },
                    toHexString: function(t) {
                        var i = this._rgba.slice(),
                            r = i.pop();
                        return t && i.push(~~(255 * r)), "#" + n.map(i, function(n) {
                            return n = (n || 0).toString(16), 1 === n.length ? "0" + n : n
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), i.fn.parse.prototype = i.fn, u.hsla.to = function(n) {
                    if (null == n[0] || null == n[1] || null == n[2]) return [null, null, null, n[3]];
                    var s, h, i = n[0] / 255,
                        r = n[1] / 255,
                        f = n[2] / 255,
                        c = n[3],
                        u = Math.max(i, r, f),
                        e = Math.min(i, r, f),
                        t = u - e,
                        o = u + e,
                        l = .5 * o;
                    return s = e === u ? 0 : i === u ? 60 * (r - f) / t + 360 : r === u ? 60 * (f - i) / t + 120 : 60 * (i - r) / t + 240, h = 0 === t ? 0 : .5 >= l ? t / o : t / (2 - o), [Math.round(s) % 360, h, l, null == c ? 1 : c]
                }, u.hsla.from = function(n) {
                    if (null == n[0] || null == n[1] || null == n[2]) return [null, null, null, n[3]];
                    var r = n[0] / 360,
                        u = n[1],
                        t = n[2],
                        e = n[3],
                        i = .5 >= t ? t * (1 + u) : t + u - t * u,
                        f = 2 * t - i;
                    return [Math.round(255 * o(f, i, r + 1 / 3)), Math.round(255 * o(f, i, r)), Math.round(255 * o(f, i, r - 1 / 3)), e]
                }, r(u, function(u, e) {
                    var s = e.props,
                        o = e.cache,
                        h = e.to,
                        c = e.from;
                    i.fn[u] = function(u) {
                        if (h && !this[o] && (this[o] = h(this._rgba)), u === t) return this[o].slice();
                        var l, a = n.type(u),
                            v = "array" === a || "object" === a ? u : arguments,
                            e = this[o].slice();
                        return r(s, function(n, t) {
                            var i = v["object" === a ? n : t.idx];
                            null == i && (i = e[t.idx]), e[t.idx] = f(i, t)
                        }), c ? (l = i(c(e)), l[o] = e, l) : i(e)
                    }, r(s, function(t, r) {
                        i.fn[t] || (i.fn[t] = function(i) {
                            var f, e = n.type(i),
                                h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : u,
                                o = this[h](),
                                s = o[r.idx];
                            return "undefined" === e ? s : ("function" === e && (i = i.call(this, s), e = n.type(i)), null == i && r.empty ? this : ("string" === e && (f = v.exec(i), f && (i = s + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), o[r.idx] = i, this[h](o)))
                        })
                    })
                }), i.hook = function(t) {
                    var u = t.split(" ");
                    r(u, function(t, r) {
                        n.cssHooks[r] = {
                            set: function(t, u) {
                                var o, f, e = "";
                                if ("transparent" !== u && ("string" !== n.type(u) || (o = s(u)))) {
                                    if (u = i(o || u), !c.rgba && 1 !== u._rgba[3]) {
                                        for (f = "backgroundColor" === r ? t.parentNode : t;
                                            ("" === e || "transparent" === e) && f && f.style;) try {
                                            e = n.css(f, "backgroundColor"), f = f.parentNode
                                        } catch (h) {}
                                        u = u.blend(e && "transparent" !== e ? e : "_default")
                                    }
                                    u = u.toRgbaString()
                                }
                                try {
                                    t.style[r] = u
                                } catch (h) {}
                            }
                        }, n.fx.step[r] = function(t) {
                            t.colorInit || (t.start = i(t.elem, r), t.end = i(t.end), t.colorInit = !0), n.cssHooks[r].set(t.elem, t.start.transition(t.end, t.pos))
                        }
                    })
                }, i.hook(a), n.cssHooks.borderColor = {
                    expand: function(n) {
                        var t = {};
                        return r(["Top", "Right", "Bottom", "Left"], function(i, r) {
                            t["border" + r + "Color"] = n
                        }), t
                    }
                }, e = n.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(jQuery),
            function() {
                function i(t) {
                    var r, u, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                        f = {};
                    if (i && i.length && i[0] && i[i[0]])
                        for (u = i.length; u--;) r = i[u], "string" == typeof i[r] && (f[n.camelCase(r)] = i[r]);
                    else
                        for (r in i) "string" == typeof i[r] && (f[r] = i[r]);
                    return f
                }

                function r(t, i) {
                    var r, u, e = {};
                    for (r in i) u = i[r], t[r] !== u && (f[r] || (n.fx.step[r] || !isNaN(parseFloat(u))) && (e[r] = u));
                    return e
                }
                var u = ["add", "remove", "toggle"],
                    f = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                n.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
                    n.fx.step[i] = function(n) {
                        ("none" === n.end || n.setAttr) && (1 !== n.pos || n.setAttr) || (jQuery.style(n.elem, i, n.end), n.setAttr = !0)
                    }
                }), n.fn.addBack || (n.fn.addBack = function(n) {
                    return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
                }), n.effects.animateClass = function(t, f, e, o) {
                    var s = n.speed(f, e, o);
                    return this.queue(function() {
                        var o, e = n(this),
                            h = e.attr("class") || "",
                            f = s.children ? e.find("*").addBack() : e;
                        f = f.map(function() {
                            var t = n(this);
                            return {
                                el: t,
                                start: i(this)
                            }
                        }), o = function() {
                            n.each(u, function(n, i) {
                                t[i] && e[i + "Class"](t[i])
                            })
                        }, o(), f = f.map(function() {
                            return this.end = i(this.el[0]), this.diff = r(this.start, this.end), this
                        }), e.attr("class", h), f = f.map(function() {
                            var i = this,
                                t = n.Deferred(),
                                r = n.extend({}, s, {
                                    queue: !1,
                                    complete: function() {
                                        t.resolve(i)
                                    }
                                });
                            return this.el.animate(this.diff, r), t.promise()
                        }), n.when.apply(n, f.get()).done(function() {
                            o(), n.each(arguments, function() {
                                var t = this.el;
                                n.each(this.diff, function(n) {
                                    t.css(n, "")
                                })
                            }), s.complete.call(e[0])
                        })
                    })
                }, n.fn.extend({
                    addClass: function(t) {
                        return function(i, r, u, f) {
                            return r ? n.effects.animateClass.call(this, {
                                add: i
                            }, r, u, f) : t.apply(this, arguments)
                        }
                    }(n.fn.addClass),
                    removeClass: function(t) {
                        return function(i, r, u, f) {
                            return arguments.length > 1 ? n.effects.animateClass.call(this, {
                                remove: i
                            }, r, u, f) : t.apply(this, arguments)
                        }
                    }(n.fn.removeClass),
                    toggleClass: function(i) {
                        return function(r, u, f, e, o) {
                            return "boolean" == typeof u || u === t ? f ? n.effects.animateClass.call(this, u ? {
                                add: r
                            } : {
                                remove: r
                            }, f, e, o) : i.apply(this, arguments) : n.effects.animateClass.call(this, {
                                toggle: r
                            }, u, f, e)
                        }
                    }(n.fn.toggleClass),
                    switchClass: function(t, i, r, u, f) {
                        return n.effects.animateClass.call(this, {
                            add: i,
                            remove: t
                        }, r, u, f)
                    }
                })
            }(),
            function() {
                function r(t, i, r, u) {
                    return n.isPlainObject(t) && (i = t, t = t.effect), t = {
                        effect: t
                    }, null == i && (i = {}), n.isFunction(i) && (u = i, r = null, i = {}), ("number" == typeof i || n.fx.speeds[i]) && (u = r, r = i, i = {}), n.isFunction(r) && (u = r, r = null), i && n.extend(t, i), r = r || i.duration, t.duration = n.fx.off ? 0 : "number" == typeof r ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default, t.complete = u || i.complete, t
                }

                function u(t) {
                    return !t || "number" == typeof t || n.fx.speeds[t] ? !0 : "string" != typeof t || n.effects.effect[t] ? n.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
                }
                n.extend(n.effects, {
                    version: "1.10.2",
                    save: function(n, t) {
                        for (var r = 0; t.length > r; r++) null !== t[r] && n.data(i + t[r], n[0].style[t[r]])
                    },
                    restore: function(n, r) {
                        for (var f, u = 0; r.length > u; u++) null !== r[u] && (f = n.data(i + r[u]), f === t && (f = ""), n.css(r[u], f))
                    },
                    setMode: function(n, t) {
                        return "toggle" === t && (t = n.is(":hidden") ? "show" : "hide"), t
                    },
                    getBaseline: function(n, t) {
                        var i, r;
                        switch (n[0]) {
                            case "top":
                                i = 0;
                                break;
                            case "middle":
                                i = .5;
                                break;
                            case "bottom":
                                i = 1;
                                break;
                            default:
                                i = n[0] / t.height
                        }
                        switch (n[1]) {
                            case "left":
                                r = 0;
                                break;
                            case "center":
                                r = .5;
                                break;
                            case "right":
                                r = 1;
                                break;
                            default:
                                r = n[1] / t.width
                        }
                        return {
                            x: r,
                            y: i
                        }
                    },
                    createWrapper: function(t) {
                        if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                        var i = {
                                width: t.outerWidth(!0),
                                height: t.outerHeight(!0),
                                float: t.css("float")
                            },
                            u = n("<div><\/div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            f = {
                                width: t.width(),
                                height: t.height()
                            },
                            r = document.activeElement;
                        try {
                            r.id
                        } catch (e) {
                            r = document.body
                        }
                        return t.wrap(u), (t[0] === r || n.contains(t[0], r)) && n(r).focus(), u = t.parent(), "static" === t.css("position") ? (u.css({
                            position: "relative"
                        }), t.css({
                            position: "relative"
                        })) : (n.extend(i, {
                            position: t.css("position"),
                            zIndex: t.css("z-index")
                        }), n.each(["top", "left", "bottom", "right"], function(n, r) {
                            i[r] = t.css(r), isNaN(parseInt(i[r], 10)) && (i[r] = "auto")
                        }), t.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), t.css(f), u.css(i).show()
                    },
                    removeWrapper: function(t) {
                        var i = document.activeElement;
                        return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || n.contains(t[0], i)) && n(i).focus()), t
                    },
                    setTransition: function(t, i, r, u) {
                        return u = u || {}, n.each(i, function(n, i) {
                            var f = t.cssUnit(i);
                            f[0] > 0 && (u[i] = f[0] * r + f[1])
                        }), u
                    }
                }), n.fn.extend({
                    effect: function() {
                        function i(i) {
                            function f() {
                                n.isFunction(o) && o.call(r[0]), n.isFunction(i) && i()
                            }
                            var r = n(this),
                                o = t.complete,
                                u = t.mode;
                            (r.is(":hidden") ? "hide" === u : "show" === u) ? (r[u](), f()) : e.call(r[0], t, f)
                        }
                        var t = r.apply(this, arguments),
                            u = t.mode,
                            f = t.queue,
                            e = n.effects.effect[t.effect];
                        return n.fx.off || !e ? u ? this[u](t.duration, t.complete) : this.each(function() {
                            t.complete && t.complete.call(this)
                        }) : f === !1 ? this.each(i) : this.queue(f || "fx", i)
                    },
                    show: function(n) {
                        return function(t) {
                            if (u(t)) return n.apply(this, arguments);
                            var i = r.apply(this, arguments);
                            return i.mode = "show", this.effect.call(this, i)
                        }
                    }(n.fn.show),
                    hide: function(n) {
                        return function(t) {
                            if (u(t)) return n.apply(this, arguments);
                            var i = r.apply(this, arguments);
                            return i.mode = "hide", this.effect.call(this, i)
                        }
                    }(n.fn.hide),
                    toggle: function(n) {
                        return function(t) {
                            if (u(t) || "boolean" == typeof t) return n.apply(this, arguments);
                            var i = r.apply(this, arguments);
                            return i.mode = "toggle", this.effect.call(this, i)
                        }
                    }(n.fn.toggle),
                    cssUnit: function(t) {
                        var i = this.css(t),
                            r = [];
                        return n.each(["em", "px", "%", "pt"], function(n, t) {
                            i.indexOf(t) > 0 && (r = [parseFloat(i), t])
                        }), r
                    }
                })
            }(),
            function() {
                var t = {};
                n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(n, i) {
                    t[i] = function(t) {
                        return Math.pow(t, n + 2)
                    }
                }), n.extend(t, {
                    Sine: function(n) {
                        return 1 - Math.cos(n * Math.PI / 2)
                    },
                    Circ: function(n) {
                        return 1 - Math.sqrt(1 - n * n)
                    },
                    Elastic: function(n) {
                        return 0 === n || 1 === n ? n : -Math.pow(2, 8 * (n - 1)) * Math.sin((80 * (n - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function(n) {
                        return n * n * (3 * n - 2)
                    },
                    Bounce: function(n) {
                        for (var t, i = 4;
                            ((t = Math.pow(2, --i)) - 1) / 11 > n;);
                        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - n, 2)
                    }
                }), n.each(t, function(t, i) {
                    n.easing["easeIn" + t] = i, n.easing["easeOut" + t] = function(n) {
                        return 1 - i(1 - n)
                    }, n.easing["easeInOut" + t] = function(n) {
                        return .5 > n ? i(2 * n) / 2 : 1 - i(-2 * n + 2) / 2
                    }
                })
            }()
    }(jQuery), function(n) {
        var r = 0,
            t = {},
            i = {};
        t.height = t.paddingTop = t.paddingBottom = t.borderTopWidth = t.borderBottomWidth = "hide", i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "show", n.widget("ui.accordion", {
            version: "1.10.2",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            _create: function() {
                var t = this.options;
                this.prevShow = this.prevHide = n(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : n(),
                    content: this.active.length ? this.active.next() : n()
                }
            },
            _createIcons: function() {
                var t = this.options.icons;
                t && (n("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var n;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }), this._destroyIcons(), n = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }), "content" !== this.options.heightStyle && n.css("height", "")
            },
            _setOption: function(n, t) {
                return "active" === n ? (this._activate(t), undefined) : ("event" === n && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(n, t), "collapsible" !== n || t || this.options.active !== !1 || this._activate(0), "icons" === n && (this._destroyIcons(), t && this._createIcons()), "disabled" === n && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t), undefined)
            },
            _keydown: function(t) {
                if (!t.altKey && !t.ctrlKey) {
                    var i = n.ui.keyCode,
                        u = this.headers.length,
                        f = this.headers.index(t.target),
                        r = !1;
                    switch (t.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            r = this.headers[(f + 1) % u];
                            break;
                        case i.LEFT:
                        case i.UP:
                            r = this.headers[(f - 1 + u) % u];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(t);
                            break;
                        case i.HOME:
                            r = this.headers[0];
                            break;
                        case i.END:
                            r = this.headers[u - 1]
                    }
                    r && (n(t.target).attr("tabIndex", -1), n(r).attr("tabIndex", 0), r.focus(), t.preventDefault())
                }
            },
            _panelKeyDown: function(t) {
                t.keyCode === n.ui.keyCode.UP && t.ctrlKey && n(t.currentTarget).prev().focus()
            },
            refresh: function() {
                var t = this.options;
                this._processPanels(), (t.active === !1 && t.collapsible === !0 || !this.headers.length) && (t.active = !1, this.active = n()), t.active === !1 ? this._activate(0) : this.active.length && !n.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = n()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function() {
                this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
            },
            _refresh: function() {
                var t, i = this.options,
                    u = i.heightStyle,
                    e = this.element.parent(),
                    f = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++r);
                this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(t) {
                    var i = n(this),
                        r = i.attr("id"),
                        e = i.next(),
                        u = e.attr("id");
                    r || (r = f + "-header-" + t, i.attr("id", r)), u || (u = f + "-panel-" + t, e.attr("id", u)), i.attr("aria-controls", u), e.attr("aria-labelledby", r)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === u ? (t = e.height(), this.element.siblings(":visible").each(function() {
                    var i = n(this),
                        r = i.css("position");
                    "absolute" !== r && "fixed" !== r && (t -= i.outerHeight(!0))
                }), this.headers.each(function() {
                    t -= n(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height()))
                }).css("overflow", "auto")) : "auto" === u && (t = 0, this.headers.next().each(function() {
                    t = Math.max(t, n(this).css("height", "").height())
                }).height(t))
            },
            _activate: function(t) {
                var i = this._findActive(t)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: n.noop
                }))
            },
            _findActive: function(t) {
                return "number" == typeof t ? this.headers.eq(t) : n()
            },
            _setupEvents: function(t) {
                var i = {
                    keydown: "_keydown"
                };
                t && n.each(t.split(" "), function(n, t) {
                    i[t] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function(t) {
                var i = this.options,
                    u = this.active,
                    r = n(t.currentTarget),
                    f = r[0] === u[0],
                    e = f && i.collapsible,
                    s = e ? n() : r.next(),
                    h = u.next(),
                    o = {
                        oldHeader: u,
                        oldPanel: h,
                        newHeader: e ? n() : r,
                        newPanel: s
                    };
                t.preventDefault(), f && !i.collapsible || this._trigger("beforeActivate", t, o) === !1 || (i.active = e ? !1 : this.headers.index(r), this.active = f ? n() : r, this._toggle(o), u.removeClass("ui-accordion-header-active ui-state-active"), i.icons && u.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), f || (r.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && r.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), r.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function(t) {
                var r = t.newPanel,
                    i = this.prevShow.length ? this.prevShow : t.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = r, this.prevHide = i, this.options.animate ? this._animate(r, i, t) : (i.hide(), r.show(), this._toggleComplete(t)), i.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), i.prev().attr("aria-selected", "false"), r.length && i.length ? i.prev().attr("tabIndex", -1) : r.length && this.headers.filter(function() {
                    return 0 === n(this).attr("tabIndex")
                }).attr("tabIndex", -1), r.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }).prev().attr({
                    "aria-selected": "true",
                    tabIndex: 0
                })
            },
            _animate: function(n, r, u) {
                var l, f, e, a = this,
                    h = 0,
                    v = n.length && (!r.length || n.index() < r.index()),
                    s = this.options.animate || {},
                    o = v && s.down || s,
                    c = function() {
                        a._toggleComplete(u)
                    };
                return "number" == typeof o && (e = o), "string" == typeof o && (f = o), f = f || o.easing || s.easing, e = e || o.duration || s.duration, r.length ? n.length ? (l = n.show().outerHeight(), r.animate(t, {
                    duration: e,
                    easing: f,
                    step: function(n, t) {
                        t.now = Math.round(n)
                    }
                }), n.hide().animate(i, {
                    duration: e,
                    easing: f,
                    complete: c,
                    step: function(n, t) {
                        t.now = Math.round(n), "height" !== t.prop ? h += t.now : "content" !== a.options.heightStyle && (t.now = Math.round(l - r.outerHeight() - h), h = 0)
                    }
                }), undefined) : r.animate(t, e, f, c) : n.animate(i, e, f, c)
            },
            _toggleComplete: function(n) {
                var t = n.oldPanel;
                t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, n)
            }
        })
    }(jQuery), function(n) {
        var t = 0;
        n.widget("ui.autocomplete", {
            version: "1.10.2",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            pending: 0,
            _create: function() {
                var t, i, r, u = this.element[0].nodeName.toLowerCase(),
                    f = "textarea" === u,
                    e = "input" === u;
                this.isMultiLine = f ? !0 : e ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[f || e ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(u) {
                        if (this.element.prop("readOnly")) return t = !0, r = !0, i = !0, undefined;
                        t = !1, r = !1, i = !1;
                        var f = n.ui.keyCode;
                        switch (u.keyCode) {
                            case f.PAGE_UP:
                                t = !0, this._move("previousPage", u);
                                break;
                            case f.PAGE_DOWN:
                                t = !0, this._move("nextPage", u);
                                break;
                            case f.UP:
                                t = !0, this._keyEvent("previous", u);
                                break;
                            case f.DOWN:
                                t = !0, this._keyEvent("next", u);
                                break;
                            case f.ENTER:
                            case f.NUMPAD_ENTER:
                                this.menu.active && (t = !0, u.preventDefault(), this.menu.select(u));
                                break;
                            case f.TAB:
                                this.menu.active && this.menu.select(u);
                                break;
                            case f.ESCAPE:
                                this.menu.element.is(":visible") && (this._value(this.term), this.close(u), u.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(u)
                        }
                    },
                    keypress: function(r) {
                        if (t) return t = !1, r.preventDefault(), undefined;
                        if (!i) {
                            var u = n.ui.keyCode;
                            switch (r.keyCode) {
                                case u.PAGE_UP:
                                    this._move("previousPage", r);
                                    break;
                                case u.PAGE_DOWN:
                                    this._move("nextPage", r);
                                    break;
                                case u.UP:
                                    this._keyEvent("previous", r);
                                    break;
                                case u.DOWN:
                                    this._keyEvent("next", r)
                            }
                        }
                    },
                    input: function(n) {
                        return r ? (r = !1, n.preventDefault(), undefined) : (this._searchTimeout(n), undefined)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(n) {
                        return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(n), this._change(n), undefined)
                    }
                }), this._initSource(), this.menu = n("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                    input: n(),
                    role: null
                }).hide().data("ui-menu"), this._on(this.menu.element, {
                    mousedown: function(t) {
                        t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur
                        });
                        var i = this.menu.element[0];
                        n(t.target).closest(".ui-menu-item").length || this._delay(function() {
                            var t = this;
                            this.document.one("mousedown", function(r) {
                                r.target === t.element[0] || r.target === i || n.contains(i, r.target) || t.close()
                            })
                        })
                    },
                    menufocus: function(t, i) {
                        if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), this.document.one("mousemove", function() {
                            n(t.target).trigger(t.originalEvent)
                        }), undefined;
                        var r = i.item.data("ui-autocomplete-item");
                        !1 !== this._trigger("focus", t, {
                            item: r
                        }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(r.value) : this.liveRegion.text(r.value)
                    },
                    menuselect: function(n, t) {
                        var i = t.item.data("ui-autocomplete-item"),
                            r = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function() {
                            this.previous = r, this.selectedItem = i
                        })), !1 !== this._trigger("select", n, {
                            item: i
                        }) && this._value(i.value), this.term = this._value(), this.close(n), this.selectedItem = i
                    }
                }), this.liveRegion = n("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(n, t) {
                this._super(n, t), "source" === n && this._initSource(), "appendTo" === n && this.menu.element.appendTo(this._appendTo()), "disabled" === n && t && this.xhr && this.xhr.abort()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
            },
            _initSource: function() {
                var i, r, t = this;
                n.isArray(this.options.source) ? (i = this.options.source, this.source = function(t, r) {
                    r(n.ui.autocomplete.filter(i, t.term))
                }) : "string" == typeof this.options.source ? (r = this.options.source, this.source = function(i, u) {
                    t.xhr && t.xhr.abort(), t.xhr = n.ajax({
                        url: r,
                        data: i,
                        dataType: "json",
                        success: function(n) {
                            u(n)
                        },
                        error: function() {
                            u([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(n) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    this.term !== this._value() && (this.selectedItem = null, this.search(null, n))
                }, this.options.delay)
            },
            search: function(n, t) {
                return n = null != n ? n : this._value(), this.term = this._value(), n.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(n) : undefined
            },
            _search: function(n) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: n
                }, this._response())
            },
            _response: function() {
                var n = this,
                    i = ++t;
                return function(r) {
                    i === t && n.__response(r), n.pending--, n.pending || n.element.removeClass("ui-autocomplete-loading")
                }
            },
            __response: function(n) {
                n && (n = this._normalize(n)), this._trigger("response", null, {
                    content: n
                }), !this.options.disabled && n && n.length && !this.cancelSearch ? (this._suggest(n), this._trigger("open")) : this._close()
            },
            close: function(n) {
                this.cancelSearch = !0, this._close(n)
            },
            _close: function(n) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", n))
            },
            _change: function(n) {
                this.previous !== this._value() && this._trigger("change", n, {
                    item: this.selectedItem
                })
            },
            _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : n.map(t, function(t) {
                    return "string" == typeof t ? {
                        label: t,
                        value: t
                    } : n.extend({
                        label: t.label || t.value,
                        value: t.value || t.label
                    }, t)
                })
            },
            _suggest: function(t) {
                var i = this.menu.element.empty();
                this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(n.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var n = this.menu.element;
                n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(t, i) {
                var r = this;
                n.each(i, function(n, i) {
                    r._renderItemData(t, i)
                })
            },
            _renderItemData: function(n, t) {
                return this._renderItem(n, t).data("ui-autocomplete-item", t)
            },
            _renderItem: function(t, i) {
                return n("<li>").append(n("<a>").text(i.label)).appendTo(t)
            },
            _move: function(n, t) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(n) || this.menu.isLastItem() && /^next/.test(n) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[n](t), undefined) : (this.search(null, t), undefined)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(n, t) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t), t.preventDefault())
            }
        }), n.extend(n.ui.autocomplete, {
            escapeRegex: function(n) {
                return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(t, i) {
                var r = RegExp(n.ui.autocomplete.escapeRegex(i), "i");
                return n.grep(t, function(n) {
                    return r.test(n.label || n.value || n)
                })
            }
        }), n.widget("ui.autocomplete", n.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(n) {
                        return n + (n > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(n) {
                var t;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = n && n.length ? this.options.messages.results(n.length) : this.options.messages.noResults, this.liveRegion.text(t))
            }
        })
    }(jQuery), function(n) {
        var i, r, u, t, f = "ui-button ui-widget ui-state-default ui-corner-all",
            s = "ui-state-hover ui-state-active ",
            e = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
            h = function() {
                var t = n(this).find(":ui-button");
                setTimeout(function() {
                    t.button("refresh")
                }, 1)
            },
            o = function(t) {
                var i = t.name,
                    r = t.form,
                    u = n([]);
                return i && (i = i.replace(/'/g, "\\'"), u = r ? n(r).find("[name='" + i + "']") : n("[name='" + i + "']", t.ownerDocument).filter(function() {
                    return !this.form
                })), u
            };
        n.widget("ui.button", {
            version: "1.10.2",
            defaultElement: "<button>",
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, h), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                var s = this,
                    e = this.options,
                    c = "checkbox" === this.type || "radio" === this.type,
                    a = c ? "" : "ui-state-active",
                    l = "ui-state-focus";
                null === e.label && (e.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(f).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                    e.disabled || this === i && n(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function() {
                    e.disabled || n(this).removeClass(a)
                }).bind("click" + this.eventNamespace, function(n) {
                    e.disabled && (n.preventDefault(), n.stopImmediatePropagation())
                }), this.element.bind("focus" + this.eventNamespace, function() {
                    s.buttonElement.addClass(l)
                }).bind("blur" + this.eventNamespace, function() {
                    s.buttonElement.removeClass(l)
                }), c && (this.element.bind("change" + this.eventNamespace, function() {
                    t || s.refresh()
                }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(n) {
                    e.disabled || (t = !1, r = n.pageX, u = n.pageY)
                }).bind("mouseup" + this.eventNamespace, function(n) {
                    e.disabled || (r !== n.pageX || u !== n.pageY) && (t = !0)
                })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    return e.disabled || t ? !1 : undefined
                }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (e.disabled || t) return !1;
                    n(this).addClass("ui-state-active"), s.buttonElement.attr("aria-pressed", "true");
                    var i = s.element[0];
                    o(i).not(i).map(function() {
                        return n(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                    return e.disabled ? !1 : (n(this).addClass("ui-state-active"), i = this, s.document.one("mouseup", function() {
                        i = null
                    }), undefined)
                }).bind("mouseup" + this.eventNamespace, function() {
                    return e.disabled ? !1 : (n(this).removeClass("ui-state-active"), undefined)
                }).bind("keydown" + this.eventNamespace, function(t) {
                    return e.disabled ? !1 : ((t.keyCode === n.ui.keyCode.SPACE || t.keyCode === n.ui.keyCode.ENTER) && n(this).addClass("ui-state-active"), undefined)
                }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                    n(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                    t.keyCode === n.ui.keyCode.SPACE && n(this).click()
                })), this._setOption("disabled", e.disabled), this._resetButton()
            },
            _determineButtonType: function() {
                var n, t, i;
                this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (n = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = n.find(t), this.buttonElement.length || (n = n.length ? n.siblings() : this.element.siblings(), this.buttonElement = n.filter(t), this.buttonElement.length || (this.buttonElement = n.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            _destroy: function() {
                this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(f + " " + s + " " + e).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function(n, t) {
                return this._super(n, t), "disabled" === n ? (t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1), undefined) : (this._resetButton(), undefined)
            },
            refresh: function() {
                var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? o(this.element[0]).each(function() {
                    n(this).is(":checked") ? n(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function() {
                if ("input" === this.type) return this.options.label && this.element.val(this.options.label), undefined;
                var i = this.buttonElement.removeClass(e),
                    f = n("<span><\/span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text(),
                    t = this.options.icons,
                    u = t.primary && t.secondary,
                    r = [];
                t.primary || t.secondary ? (this.options.text && r.push("ui-button-text-icon" + (u ? "s" : t.primary ? "-primary" : "-secondary")), t.primary && i.prepend("<span class='ui-button-icon-primary ui-icon " + t.primary + "'><\/span>"), t.secondary && i.append("<span class='ui-button-icon-secondary ui-icon " + t.secondary + "'><\/span>"), this.options.text || (r.push(u ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || i.attr("title", n.trim(f)))) : r.push("ui-button-text-only"), i.addClass(r.join(" "))
            }
        }), n.widget("ui.buttonset", {
            version: "1.10.2",
            options: {
                items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
            },
            _create: function() {
                this.element.addClass("ui-buttonset")
            },
            _init: function() {
                this.refresh()
            },
            _setOption: function(n, t) {
                "disabled" === n && this.buttons.button("option", n, t), this._super(n, t)
            },
            refresh: function() {
                var t = "rtl" === this.element.css("direction");
                this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                    return n(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function() {
                this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                    return n(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        })
    }(jQuery), function(n, t) {
        function e() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, n.extend(this._defaults, this.regional[""]), this.dpDiv = o(n("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>"))
        }

        function o(t) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.delegate(i, "mouseout", function() {
                n(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && n(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && n(this).removeClass("ui-datepicker-next-hover")
            }).delegate(i, "mouseover", function() {
                n.datepicker._isDisabledDatepicker(f.inline ? t.parent()[0] : f.input[0]) || (n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), n(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && n(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && n(this).addClass("ui-datepicker-next-hover"))
            })
        }

        function u(t, i) {
            n.extend(t, i);
            for (var r in i) null == i[r] && (t[r] = i[r]);
            return t
        }
        n.extend(n.ui, {
            datepicker: {
                version: "1.10.2"
            }
        });
        var f, i = "datepicker",
            r = +new Date;
        n.extend(e.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(n) {
                return u(this._defaults, n || {}), this
            },
            _attachDatepicker: function(t, i) {
                var r, f, u;
                r = t.nodeName.toLowerCase(), f = "div" === r || "span" === r, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), u = this._newInst(n(t), f), u.settings = n.extend({}, i || {}), "input" === r ? this._connectDatepicker(t, u) : f && this._inlineDatepicker(t, u)
            },
            _newInst: function(t, i) {
                var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: r,
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: i,
                    dpDiv: i ? o(n("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(t, r) {
                var u = n(t);
                r.append = n([]), r.trigger = n([]), u.hasClass(this.markerClassName) || (this._attachments(u, r), u.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(r), n.data(t, i, r), r.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function(t, i) {
                var u, r, f, e = this._get(i, "appendText"),
                    o = this._get(i, "isRTL");
                i.append && i.append.remove(), e && (i.append = n("<span class='" + this._appendClass + "'>" + e + "<\/span>"), t[o ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), u = this._get(i, "showOn"), ("focus" === u || "both" === u) && t.focus(this._showDatepicker), ("button" === u || "both" === u) && (r = this._get(i, "buttonText"), f = this._get(i, "buttonImage"), i.trigger = n(this._get(i, "buttonImageOnly") ? n("<img/>").addClass(this._triggerClass).attr({
                    src: f,
                    alt: r,
                    title: r
                }) : n("<button type='button'><\/button>").addClass(this._triggerClass).html(f ? n("<img/>").attr({
                    src: f,
                    alt: r,
                    title: r
                }) : r)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function() {
                    return n.datepicker._datepickerShowing && n.datepicker._lastInput === t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput !== t[0] ? (n.datepicker._hideDatepicker(), n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]), !1
                }))
            },
            _autoSize: function(n) {
                if (this._get(n, "autoSize") && !n.inline) {
                    var r, u, f, t, i = new Date(2009, 11, 20),
                        e = this._get(n, "dateFormat");
                    e.match(/[DM]/) && (r = function(n) {
                        for (u = 0, f = 0, t = 0; n.length > t; t++) n[t].length > u && (u = n[t].length, f = t);
                        return f
                    }, i.setMonth(r(this._get(n, e.match(/MM/) ? "monthNames" : "monthNamesShort"))), i.setDate(r(this._get(n, e.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - i.getDay())), n.input.attr("size", this._formatDate(n, i).length)
                }
            },
            _inlineDatepicker: function(t, r) {
                var u = n(t);
                u.hasClass(this.markerClassName) || (u.addClass(this.markerClassName).append(r.dpDiv), n.data(t, i, r), this._setDate(r, this._getDefaultDate(r), !0), this._updateDatepicker(r), this._updateAlternate(r), r.settings.disabled && this._disableDatepicker(t), r.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(t, r, f, e, o) {
                var h, c, l, a, v, s = this._dialogInst;
                return s || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = n("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), n("body").append(this._dialogInput), s = this._dialogInst = this._newInst(this._dialogInput, !1), s.settings = {}, n.data(this._dialogInput[0], i, s)), u(s.settings, e || {}), r = r && r.constructor === Date ? this._formatDate(s, r) : r, this._dialogInput.val(r), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (c = document.documentElement.clientWidth, l = document.documentElement.clientHeight, a = document.documentElement.scrollLeft || document.body.scrollLeft, v = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + a, l / 2 - 150 + v]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), s.settings.onSelect = f, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), n.blockUI && n.blockUI(this.dpDiv), n.data(this._dialogInput[0], i, s), this
            },
            _destroyDatepicker: function(t) {
                var r, u = n(t),
                    f = n.data(t, i);
                u.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), n.removeData(t, i), "input" === r ? (f.append.remove(), f.trigger.remove(), u.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === r || "span" === r) && u.removeClass(this.markerClassName).empty())
            },
            _enableDatepicker: function(t) {
                var r, u, f = n(t),
                    e = n.data(t, i);
                f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), "input" === r ? (t.disabled = !1, e.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === r || "span" === r) && (u = f.children("." + this._inlineClass), u.children().removeClass("ui-state-disabled"), u.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = n.map(this._disabledInputs, function(n) {
                    return n === t ? null : n
                }))
            },
            _disableDatepicker: function(t) {
                var r, u, f = n(t),
                    e = n.data(t, i);
                f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), "input" === r ? (t.disabled = !0, e.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === r || "span" === r) && (u = f.children("." + this._inlineClass), u.children().addClass("ui-state-disabled"), u.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = n.map(this._disabledInputs, function(n) {
                    return n === t ? null : n
                }), this._disabledInputs[this._disabledInputs.length] = t)
            },
            _isDisabledDatepicker: function(n) {
                if (!n) return !1;
                for (var t = 0; this._disabledInputs.length > t; t++)
                    if (this._disabledInputs[t] === n) return !0;
                return !1
            },
            _getInst: function(t) {
                try {
                    return n.data(t, i)
                } catch (r) {
                    throw "Missing instance data for this datepicker";
                }
            },
            _optionDatepicker: function(i, r, f) {
                var o, c, s, h, e = this._getInst(i);
                return 2 === arguments.length && "string" == typeof r ? "defaults" === r ? n.extend({}, n.datepicker._defaults) : e ? "all" === r ? n.extend({}, e.settings) : this._get(e, r) : null : (o = r || {}, "string" == typeof r && (o = {}, o[r] = f), e && (this._curInst === e && this._hideDatepicker(), c = this._getDateDatepicker(i, !0), s = this._getMinMaxDate(e, "min"), h = this._getMinMaxDate(e, "max"), u(e.settings, o), null !== s && o.dateFormat !== t && o.minDate === t && (e.settings.minDate = this._formatDate(e, s)), null !== h && o.dateFormat !== t && o.maxDate === t && (e.settings.maxDate = this._formatDate(e, h)), "disabled" in o && (o.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(n(i), e), this._autoSize(e), this._setDate(e, c), this._updateAlternate(e), this._updateDatepicker(e)), t)
            },
            _changeDatepicker: function(n, t, i) {
                this._optionDatepicker(n, t, i)
            },
            _refreshDatepicker: function(n) {
                var t = this._getInst(n);
                t && this._updateDatepicker(t)
            },
            _setDateDatepicker: function(n, t) {
                var i = this._getInst(n);
                i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function(n, t) {
                var i = this._getInst(n);
                return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
            },
            _doKeyDown: function(t) {
                var u, e, f, i = n.datepicker._getInst(t.target),
                    r = !0,
                    o = i.dpDiv.is(".ui-datepicker-rtl");
                if (i._keyEvent = !0, n.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        n.datepicker._hideDatepicker(), r = !1;
                        break;
                    case 13:
                        return f = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv), f[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, f[0]), u = n.datepicker._get(i, "onSelect"), u ? (e = n.datepicker._formatDate(i), u.apply(i.input ? i.input[0] : null, [e, i])) : n.datepicker._hideDatepicker(), !1;
                    case 27:
                        n.datepicker._hideDatepicker();
                        break;
                    case 33:
                        n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 34:
                        n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        r = !1
                } else 36 === t.keyCode && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
                r && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function(i) {
                var r, u, f = n.datepicker._getInst(i.target);
                return n.datepicker._get(f, "constrainInput") ? (r = n.datepicker._possibleChars(n.datepicker._get(f, "dateFormat")), u = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > u || !r || r.indexOf(u) > -1) : t
            },
            _doKeyUp: function(t) {
                var r, i = n.datepicker._getInst(t.target);
                if (i.input.val() !== i.lastVal) try {
                    r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i)), r && (n.datepicker._setDateFromField(i), n.datepicker._updateAlternate(i), n.datepicker._updateDatepicker(i))
                } catch (u) {}
                return !0
            },
            _showDatepicker: function(t) {
                if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = n("input", t.parentNode)[0]), !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput !== t) {
                    var i, o, s, r, f, e, h;
                    i = n.datepicker._getInst(t), n.datepicker._curInst && n.datepicker._curInst !== i && (n.datepicker._curInst.dpDiv.stop(!0, !0), i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0])), o = n.datepicker._get(i, "beforeShow"), s = o ? o.apply(t, [t, i]) : {}, s !== !1 && (u(i.settings, s), i.lastVal = null, n.datepicker._lastInput = t, n.datepicker._setDateFromField(i), n.datepicker._inDialog && (t.value = ""), n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t), n.datepicker._pos[1] += t.offsetHeight), r = !1, n(t).parents().each(function() {
                        return r |= "fixed" === n(this).css("position"), !r
                    }), f = {
                        left: n.datepicker._pos[0],
                        top: n.datepicker._pos[1]
                    }, n.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), n.datepicker._updateDatepicker(i), f = n.datepicker._checkOffset(i, f, r), i.dpDiv.css({
                        position: n.datepicker._inDialog && n.blockUI ? "static" : r ? "fixed" : "absolute",
                        display: "none",
                        left: f.left + "px",
                        top: f.top + "px"
                    }), i.inline || (e = n.datepicker._get(i, "showAnim"), h = n.datepicker._get(i, "duration"), i.dpDiv.zIndex(n(t).zIndex() + 1), n.datepicker._datepickerShowing = !0, n.effects && n.effects.effect[e] ? i.dpDiv.show(e, n.datepicker._get(i, "showOptions"), h) : i.dpDiv[e || "show"](e ? h : null), i.input.is(":visible") && !i.input.is(":disabled") && i.input.focus(), n.datepicker._curInst = i))
                }
            },
            _updateDatepicker: function(t) {
                this.maxRows = 4, f = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var i, r = this._getNumberOfMonths(t),
                    u = r[1],
                    e = 17;
                t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), u > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + u).css("width", e * u + "em"), t.dpDiv[(1 !== r[0] || 1 !== r[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === n.datepicker._curInst && n.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] !== document.activeElement && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function() {
                    i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
                }, 0))
            },
            _getBorders: function(n) {
                var t = function(n) {
                    return {
                        thin: 1,
                        medium: 2,
                        thick: 3
                    }[n] || n
                };
                return [parseFloat(t(n.css("border-left-width"))), parseFloat(t(n.css("border-top-width")))]
            },
            _checkOffset: function(t, i, r) {
                var u = t.dpDiv.outerWidth(),
                    f = t.dpDiv.outerHeight(),
                    h = t.input ? t.input.outerWidth() : 0,
                    o = t.input ? t.input.outerHeight() : 0,
                    e = document.documentElement.clientWidth + (r ? 0 : n(document).scrollLeft()),
                    s = document.documentElement.clientHeight + (r ? 0 : n(document).scrollTop());
                return i.left -= this._get(t, "isRTL") ? u - h : 0, i.left -= r && i.left === t.input.offset().left ? n(document).scrollLeft() : 0, i.top -= r && i.top === t.input.offset().top + o ? n(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + u > e && e > u ? Math.abs(i.left + u - e) : 0), i.top -= Math.min(i.top, i.top + f > s && s > f ? Math.abs(f + o) : 0), i
            },
            _findPos: function(t) {
                for (var i, r = this._getInst(t), u = this._get(r, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || n.expr.filters.hidden(t));) t = t[u ? "previousSibling" : "nextSibling"];
                return i = n(t).offset(), [i.left, i.top]
            },
            _hideDatepicker: function(t) {
                var u, e, f, o, r = this._curInst;
                !r || t && r !== n.data(t, i) || this._datepickerShowing && (u = this._get(r, "showAnim"), e = this._get(r, "duration"), f = function() {
                    n.datepicker._tidyDialog(r)
                }, n.effects && (n.effects.effect[u] || n.effects[u]) ? r.dpDiv.hide(u, n.datepicker._get(r, "showOptions"), e, f) : r.dpDiv["slideDown" === u ? "slideUp" : "fadeIn" === u ? "fadeOut" : "hide"](u ? e : null, f), u || f(), this._datepickerShowing = !1, o = this._get(r, "onClose"), o && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), n.blockUI && (n.unblockUI(), n("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(n) {
                n.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(t) {
                if (n.datepicker._curInst) {
                    var i = n(t.target),
                        r = n.datepicker._getInst(i[0]);
                    (i[0].id === n.datepicker._mainDivId || 0 !== i.parents("#" + n.datepicker._mainDivId).length || i.hasClass(n.datepicker.markerClassName) || i.closest("." + n.datepicker._triggerClass).length || !n.datepicker._datepickerShowing || n.datepicker._inDialog && n.blockUI) && (!i.hasClass(n.datepicker.markerClassName) || n.datepicker._curInst === r) || n.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(t, i, r) {
                var f = n(t),
                    u = this._getInst(f[0]);
                this._isDisabledDatepicker(f[0]) || (this._adjustInstDate(u, i + ("M" === r ? this._get(u, "showCurrentAtPos") : 0), r), this._updateDatepicker(u))
            },
            _gotoToday: function(t) {
                var r, u = n(t),
                    i = this._getInst(u[0]);
                this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (r = new Date, i.selectedDay = r.getDate(), i.drawMonth = i.selectedMonth = r.getMonth(), i.drawYear = i.selectedYear = r.getFullYear()), this._notifyChange(i), this._adjustDate(u)
            },
            _selectMonthYear: function(t, i, r) {
                var f = n(t),
                    u = this._getInst(f[0]);
                u["selected" + ("M" === r ? "Month" : "Year")] = u["draw" + ("M" === r ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(u), this._adjustDate(f)
            },
            _selectDay: function(t, i, r, u) {
                var f, e = n(t);
                n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]), f.selectedDay = f.currentDay = n("a", u).html(), f.selectedMonth = f.currentMonth = i, f.selectedYear = f.currentYear = r, this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
            },
            _clearDate: function(t) {
                var i = n(t);
                this._selectDate(i, "")
            },
            _selectDate: function(t, i) {
                var u, f = n(t),
                    r = this._getInst(f[0]);
                i = null != i ? i : this._formatDate(r), r.input && r.input.val(i), this._updateAlternate(r), u = this._get(r, "onSelect"), u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change"), r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], "object" != typeof r.input[0] && r.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(t) {
                var i, r, u, f = this._get(t, "altField");
                f && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), u = this.formatDate(i, r, this._getFormatConfig(t)), n(f).each(function() {
                    n(this).val(u)
                }))
            },
            noWeekends: function(n) {
                var t = n.getDay();
                return [t > 0 && 6 > t, ""]
            },
            iso8601Week: function(n) {
                var i, t = new Date(n.getTime());
                return t.setDate(t.getDate() + 4 - (t.getDay() || 7)), i = t.getTime(), t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1
            },
            parseDate: function(i, r, u) {
                if (null == i || null == r) throw "Invalid arguments";
                if (r = "object" == typeof r ? "" + r : r + "", "" === r) return null;
                for (var v, y, f, e = 0, p = (u ? u.shortYearCutoff : null) || this._defaults.shortYearCutoff, g = "string" != typeof p ? p : (new Date).getFullYear() % 100 + parseInt(p, 10), nt = (u ? u.dayNamesShort : null) || this._defaults.dayNamesShort, tt = (u ? u.dayNames : null) || this._defaults.dayNames, it = (u ? u.monthNamesShort : null) || this._defaults.monthNamesShort, rt = (u ? u.monthNames : null) || this._defaults.monthNames, o = -1, s = -1, c = -1, w = -1, b = !1, a = function(n) {
                        var t = i.length > h + 1 && i.charAt(h + 1) === n;
                        return t && h++, t
                    }, l = function(n) {
                        var i = a(n),
                            u = "@" === n ? 14 : "!" === n ? 20 : "y" === n && i ? 4 : "o" === n ? 3 : 2,
                            f = RegExp("^\\d{1," + u + "}"),
                            t = r.substring(e).match(f);
                        if (!t) throw "Missing number at position " + e;
                        return e += t[0].length, parseInt(t[0], 10)
                    }, d = function(i, u, f) {
                        var o = -1,
                            s = n.map(a(i) ? f : u, function(n, t) {
                                return [
                                    [t, n]
                                ]
                            }).sort(function(n, t) {
                                return -(n[1].length - t[1].length)
                            });
                        if (n.each(s, function(n, i) {
                                var u = i[1];
                                return r.substr(e, u.length).toLowerCase() === u.toLowerCase() ? (o = i[0], e += u.length, !1) : t
                            }), -1 !== o) return o + 1;
                        throw "Unknown name at position " + e;
                    }, k = function() {
                        if (r.charAt(e) !== i.charAt(h)) throw "Unexpected literal at position " + e;
                        e++
                    }, h = 0; i.length > h; h++)
                    if (b) "'" !== i.charAt(h) || a("'") ? k() : b = !1;
                    else switch (i.charAt(h)) {
                        case "d":
                            c = l("d");
                            break;
                        case "D":
                            d("D", nt, tt);
                            break;
                        case "o":
                            w = l("o");
                            break;
                        case "m":
                            s = l("m");
                            break;
                        case "M":
                            s = d("M", it, rt);
                            break;
                        case "y":
                            o = l("y");
                            break;
                        case "@":
                            f = new Date(l("@")), o = f.getFullYear(), s = f.getMonth() + 1, c = f.getDate();
                            break;
                        case "!":
                            f = new Date((l("!") - this._ticksTo1970) / 1e4), o = f.getFullYear(), s = f.getMonth() + 1, c = f.getDate();
                            break;
                        case "'":
                            a("'") ? k() : b = !0;
                            break;
                        default:
                            k()
                    }
                    if (r.length > e && (y = r.substr(e), !/^\s+/.test(y))) throw "Extra/unparsed characters found in date: " + y;
                if (-1 === o ? o = (new Date).getFullYear() : 100 > o && (o += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (g >= o ? 0 : -100)), w > -1)
                    for (s = 1, c = w;;) {
                        if (v = this._getDaysInMonth(o, s - 1), v >= c) break;
                        s++, c -= v
                    }
                if (f = this._daylightSavingAdjust(new Date(o, s - 1, c)), f.getFullYear() !== o || f.getMonth() + 1 !== s || f.getDate() !== c) throw "Invalid date";
                return f
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
            formatDate: function(n, t, i) {
                if (!t) return "";
                var u, h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    c = (i ? i.dayNames : null) || this._defaults.dayNames,
                    l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    a = (i ? i.monthNames : null) || this._defaults.monthNames,
                    f = function(t) {
                        var i = n.length > u + 1 && n.charAt(u + 1) === t;
                        return i && u++, i
                    },
                    e = function(n, t, i) {
                        var r = "" + t;
                        if (f(n))
                            for (; i > r.length;) r = "0" + r;
                        return r
                    },
                    s = function(n, t, i, r) {
                        return f(n) ? r[t] : i[t]
                    },
                    r = "",
                    o = !1;
                if (t)
                    for (u = 0; n.length > u; u++)
                        if (o) "'" !== n.charAt(u) || f("'") ? r += n.charAt(u) : o = !1;
                        else switch (n.charAt(u)) {
                            case "d":
                                r += e("d", t.getDate(), 2);
                                break;
                            case "D":
                                r += s("D", t.getDay(), h, c);
                                break;
                            case "o":
                                r += e("o", Math.round((+new Date(t.getFullYear(), t.getMonth(), t.getDate()) - +new Date(t.getFullYear(), 0, 0)) / 864e5), 3);
                                break;
                            case "m":
                                r += e("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                r += s("M", t.getMonth(), l, a);
                                break;
                            case "y":
                                r += f("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                                break;
                            case "@":
                                r += t.getTime();
                                break;
                            case "!":
                                r += 1e4 * t.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                f("'") ? r += "'" : o = !0;
                                break;
                            default:
                                r += n.charAt(u)
                        }
                        return r
            },
            _possibleChars: function(n) {
                for (var i = "", r = !1, u = function(i) {
                        var r = n.length > t + 1 && n.charAt(t + 1) === i;
                        return r && t++, r
                    }, t = 0; n.length > t; t++)
                    if (r) "'" !== n.charAt(t) || u("'") ? i += n.charAt(t) : r = !1;
                    else switch (n.charAt(t)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            u("'") ? i += "'" : r = !0;
                            break;
                        default:
                            i += n.charAt(t)
                    }
                    return i
            },
            _get: function(n, i) {
                return n.settings[i] !== t ? n.settings[i] : this._defaults[i]
            },
            _setDateFromField: function(n, t) {
                if (n.input.val() !== n.lastVal) {
                    var f = this._get(n, "dateFormat"),
                        r = n.lastVal = n.input ? n.input.val() : null,
                        u = this._getDefaultDate(n),
                        i = u,
                        e = this._getFormatConfig(n);
                    try {
                        i = this.parseDate(f, r, e) || u
                    } catch (o) {
                        r = t ? "" : r
                    }
                    n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear(), n.currentDay = r ? i.getDate() : 0, n.currentMonth = r ? i.getMonth() : 0, n.currentYear = r ? i.getFullYear() : 0, this._adjustInstDate(n)
                }
            },
            _getDefaultDate: function(n) {
                return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date))
            },
            _determineDate: function(t, i, r) {
                var f = function(n) {
                        var t = new Date;
                        return t.setDate(t.getDate() + n), t
                    },
                    e = function(i) {
                        try {
                            return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t))
                        } catch (h) {}
                        for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date, f = o.getFullYear(), e = o.getMonth(), r = o.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u;) {
                            switch (u[2] || "d") {
                                case "d":
                                case "D":
                                    r += parseInt(u[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    r += 7 * parseInt(u[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    e += parseInt(u[1], 10), r = Math.min(r, n.datepicker._getDaysInMonth(f, e));
                                    break;
                                case "y":
                                case "Y":
                                    f += parseInt(u[1], 10), r = Math.min(r, n.datepicker._getDaysInMonth(f, e))
                            }
                            u = s.exec(i)
                        }
                        return new Date(f, e, r)
                    },
                    u = null == i || "" === i ? r : "string" == typeof i ? e(i) : "number" == typeof i ? isNaN(i) ? r : f(i) : new Date(i.getTime());
                return u = u && "Invalid Date" == "" + u ? r : u, u && (u.setHours(0), u.setMinutes(0), u.setSeconds(0), u.setMilliseconds(0)), this._daylightSavingAdjust(u)
            },
            _daylightSavingAdjust: function(n) {
                return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0), n) : null
            },
            _setDate: function(n, t, i) {
                var u = !t,
                    f = n.selectedMonth,
                    e = n.selectedYear,
                    r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
                n.selectedDay = n.currentDay = r.getDate(), n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth(), n.drawYear = n.selectedYear = n.currentYear = r.getFullYear(), f === n.selectedMonth && e === n.selectedYear || i || this._notifyChange(n), this._adjustInstDate(n), n.input && n.input.val(u ? "" : this._formatDate(n))
            },
            _getDate: function(n) {
                return !n.currentYear || n.input && "" === n.input.val() ? null : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay))
            },
            _attachHandlers: function(t) {
                var u = this._get(t, "stepMonths"),
                    i = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function() {
                    var t = {
                        prev: function() {
                            window["DP_jQuery_" + r].datepicker._adjustDate(i, -u, "M")
                        },
                        next: function() {
                            window["DP_jQuery_" + r].datepicker._adjustDate(i, +u, "M")
                        },
                        hide: function() {
                            window["DP_jQuery_" + r].datepicker._hideDatepicker()
                        },
                        today: function() {
                            window["DP_jQuery_" + r].datepicker._gotoToday(i)
                        },
                        selectDay: function() {
                            return window["DP_jQuery_" + r].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "M"), !1
                        },
                        selectYear: function() {
                            return window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "Y"), !1
                        }
                    };
                    n(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(n) {
                var b, s, rt, h, ut, k, ft, et, ri, c, ot, ui, fi, ei, oi, st, g, si, ht, nt, o, y, ct, p, lt, l, u, at, vt, yt, pt, tt, wt, i, bt, kt, d, a, it, dt = new Date,
                    gt = this._daylightSavingAdjust(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())),
                    f = this._get(n, "isRTL"),
                    li = this._get(n, "showButtonPanel"),
                    hi = this._get(n, "hideIfNoPrevNext"),
                    ni = this._get(n, "navigationAsDateFormat"),
                    e = this._getNumberOfMonths(n),
                    ai = this._get(n, "showCurrentAtPos"),
                    ci = this._get(n, "stepMonths"),
                    ti = 1 !== e[0] || 1 !== e[1],
                    ii = this._daylightSavingAdjust(n.currentDay ? new Date(n.currentYear, n.currentMonth, n.currentDay) : new Date(9999, 9, 9)),
                    w = this._getMinMaxDate(n, "min"),
                    v = this._getMinMaxDate(n, "max"),
                    t = n.drawMonth - ai,
                    r = n.drawYear;
                if (0 > t && (t += 12, r--), v)
                    for (b = this._daylightSavingAdjust(new Date(v.getFullYear(), v.getMonth() - e[0] * e[1] + 1, v.getDate())), b = w && w > b ? w : b; this._daylightSavingAdjust(new Date(r, t, 1)) > b;) t--, 0 > t && (t = 11, r--);
                for (n.drawMonth = t, n.drawYear = r, s = this._get(n, "prevText"), s = ni ? this.formatDate(s, this._daylightSavingAdjust(new Date(r, t - ci, 1)), this._getFormatConfig(n)) : s, rt = this._canAdjustMonth(n, -1, r, t) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "e" : "w") + "'>" + s + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "e" : "w") + "'>" + s + "<\/span><\/a>", h = this._get(n, "nextText"), h = ni ? this.formatDate(h, this._daylightSavingAdjust(new Date(r, t + ci, 1)), this._getFormatConfig(n)) : h, ut = this._canAdjustMonth(n, 1, r, t) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "w" : "e") + "'>" + h + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "w" : "e") + "'>" + h + "<\/span><\/a>", k = this._get(n, "currentText"), ft = this._get(n, "gotoCurrent") && n.currentDay ? ii : gt, k = ni ? this.formatDate(k, ft, this._getFormatConfig(n)) : k, et = n.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(n, "closeText") + "<\/button>", ri = li ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (f ? et : "") + (this._isInRange(n, ft) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + k + "<\/button>" : "") + (f ? "" : et) + "<\/div>" : "", c = parseInt(this._get(n, "firstDay"), 10), c = isNaN(c) ? 0 : c, ot = this._get(n, "showWeek"), ui = this._get(n, "dayNames"), fi = this._get(n, "dayNamesMin"), ei = this._get(n, "monthNames"), oi = this._get(n, "monthNamesShort"), st = this._get(n, "beforeShowDay"), g = this._get(n, "showOtherMonths"), si = this._get(n, "selectOtherMonths"), ht = this._getDefaultDate(n), nt = "", y = 0; e[0] > y; y++) {
                    for (ct = "", this.maxRows = 4, p = 0; e[1] > p; p++) {
                        if (lt = this._daylightSavingAdjust(new Date(r, t, n.selectedDay)), l = " ui-corner-all", u = "", ti) {
                            if (u += "<div class='ui-datepicker-group", e[1] > 1) switch (p) {
                                case 0:
                                    u += " ui-datepicker-group-first", l = " ui-corner-" + (f ? "right" : "left");
                                    break;
                                case e[1] - 1:
                                    u += " ui-datepicker-group-last", l = " ui-corner-" + (f ? "left" : "right");
                                    break;
                                default:
                                    u += " ui-datepicker-group-middle", l = ""
                            }
                            u += "'>"
                        }
                        for (u += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + l + "'>" + (/all|left/.test(l) && 0 === y ? f ? ut : rt : "") + (/all|right/.test(l) && 0 === y ? f ? rt : ut : "") + this._generateMonthYearHeader(n, t, r, w, v, y > 0 || p > 0, ei, oi) + "<\/div><table class='ui-datepicker-calendar'><thead><tr>", at = ot ? "<th class='ui-datepicker-week-col'>" + this._get(n, "weekHeader") + "<\/th>" : "", o = 0; 7 > o; o++) vt = (o + c) % 7, at += "<th" + ((o + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + ui[vt] + "'>" + fi[vt] + "<\/span><\/th>";
                        for (u += at + "<\/tr><\/thead><tbody>", yt = this._getDaysInMonth(r, t), r === n.selectedYear && t === n.selectedMonth && (n.selectedDay = Math.min(n.selectedDay, yt)), pt = (this._getFirstDayOfMonth(r, t) - c + 7) % 7, tt = Math.ceil((pt + yt) / 7), wt = ti ? this.maxRows > tt ? this.maxRows : tt : tt, this.maxRows = wt, i = this._daylightSavingAdjust(new Date(r, t, 1 - pt)), bt = 0; wt > bt; bt++) {
                            for (u += "<tr>", kt = ot ? "<td class='ui-datepicker-week-col'>" + this._get(n, "calculateWeek")(i) + "<\/td>" : "", o = 0; 7 > o; o++) d = st ? st.apply(n.input ? n.input[0] : null, [i]) : [!0, ""], a = i.getMonth() !== t, it = a && !si || !d[0] || w && w > i || v && i > v, kt += "<td class='" + ((o + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (a ? " ui-datepicker-other-month" : "") + (i.getTime() === lt.getTime() && t === n.selectedMonth && n._keyEvent || ht.getTime() === i.getTime() && ht.getTime() === lt.getTime() ? " " + this._dayOverClass : "") + (it ? " " + this._unselectableClass + " ui-state-disabled" : "") + (a && !g ? "" : " " + d[1] + (i.getTime() === ii.getTime() ? " " + this._currentClass : "") + (i.getTime() === gt.getTime() ? " ui-datepicker-today" : "")) + "'" + (a && !g || !d[2] ? "" : " title='" + d[2].replace(/'/g, "&#39;") + "'") + (it ? "" : " data-handler='selectDay' data-event='click' data-month='" + i.getMonth() + "' data-year='" + i.getFullYear() + "'") + ">" + (a && !g ? "&#xa0;" : it ? "<span class='ui-state-default'>" + i.getDate() + "<\/span>" : "<a class='ui-state-default" + (i.getTime() === gt.getTime() ? " ui-state-highlight" : "") + (i.getTime() === ii.getTime() ? " ui-state-active" : "") + (a ? " ui-priority-secondary" : "") + "' href='#'>" + i.getDate() + "<\/a>") + "<\/td>", i.setDate(i.getDate() + 1), i = this._daylightSavingAdjust(i);
                            u += kt + "<\/tr>"
                        }
                        t++, t > 11 && (t = 0, r++), u += "<\/tbody><\/table>" + (ti ? "<\/div>" + (e[0] > 0 && p === e[1] - 1 ? "<div class='ui-datepicker-row-break'><\/div>" : "") : ""), ct += u
                    }
                    nt += ct
                }
                return nt += ri, n._keyEvent = !1, nt
            },
            _generateMonthYearHeader: function(n, t, i, r, u, f, e, o) {
                var k, d, h, v, y, p, s, a, w = this._get(n, "changeMonth"),
                    b = this._get(n, "changeYear"),
                    g = this._get(n, "showMonthAfterYear"),
                    c = "<div class='ui-datepicker-title'>",
                    l = "";
                if (f || !w) l += "<span class='ui-datepicker-month'>" + e[t] + "<\/span>";
                else {
                    for (k = r && r.getFullYear() === i, d = u && u.getFullYear() === i, l += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; 12 > h; h++)(!k || h >= r.getMonth()) && (!d || u.getMonth() >= h) && (l += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "<\/option>");
                    l += "<\/select>"
                }
                if (g || (c += l + (!f && w && b ? "" : "&#xa0;")), !n.yearshtml)
                    if (n.yearshtml = "", f || !b) c += "<span class='ui-datepicker-year'>" + i + "<\/span>";
                    else {
                        for (v = this._get(n, "yearRange").split(":"), y = (new Date).getFullYear(), p = function(n) {
                                var t = n.match(/c[+\-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+\-].*/) ? y + parseInt(n, 10) : parseInt(n, 10);
                                return isNaN(t) ? y : t
                            }, s = p(v[0]), a = Math.max(s, p(v[1] || "")), s = r ? Math.max(s, r.getFullYear()) : s, a = u ? Math.min(a, u.getFullYear()) : a, n.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; a >= s; s++) n.yearshtml += "<option value='" + s + "'" + (s === i ? " selected='selected'" : "") + ">" + s + "<\/option>";
                        n.yearshtml += "<\/select>", c += n.yearshtml, n.yearshtml = null
                    }
                return c += this._get(n, "yearSuffix"), g && (c += (!f && w && b ? "" : "&#xa0;") + l), c += "<\/div>"
            },
            _adjustInstDate: function(n, t, i) {
                var u = n.drawYear + ("Y" === i ? t : 0),
                    f = n.drawMonth + ("M" === i ? t : 0),
                    e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + ("D" === i ? t : 0),
                    r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u, f, e)));
                n.selectedDay = r.getDate(), n.drawMonth = n.selectedMonth = r.getMonth(), n.drawYear = n.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(n)
            },
            _restrictMinMax: function(n, t) {
                var i = this._getMinMaxDate(n, "min"),
                    r = this._getMinMaxDate(n, "max"),
                    u = i && i > t ? i : t;
                return r && u > r ? r : u
            },
            _notifyChange: function(n) {
                var t = this._get(n, "onChangeMonthYear");
                t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n])
            },
            _getNumberOfMonths: function(n) {
                var t = this._get(n, "numberOfMonths");
                return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
            },
            _getMinMaxDate: function(n, t) {
                return this._determineDate(n, this._get(n, t + "Date"), null)
            },
            _getDaysInMonth: function(n, t) {
                return 32 - this._daylightSavingAdjust(new Date(n, t, 32)).getDate()
            },
            _getFirstDayOfMonth: function(n, t) {
                return new Date(n, t, 1).getDay()
            },
            _canAdjustMonth: function(n, t, i, r) {
                var f = this._getNumberOfMonths(n),
                    u = this._daylightSavingAdjust(new Date(i, r + (0 > t ? t : f[0] * f[1]), 1));
                return 0 > t && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())), this._isInRange(n, u)
            },
            _isInRange: function(n, t) {
                var i, f, e = this._getMinMaxDate(n, "min"),
                    o = this._getMinMaxDate(n, "max"),
                    r = null,
                    u = null,
                    s = this._get(n, "yearRange");
                return s && (i = s.split(":"), f = (new Date).getFullYear(), r = parseInt(i[0], 10), u = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += f), i[1].match(/[+\-].*/) && (u += f)), (!e || t.getTime() >= e.getTime()) && (!o || t.getTime() <= o.getTime()) && (!r || t.getFullYear() >= r) && (!u || u >= t.getFullYear())
            },
            _getFormatConfig: function(n) {
                var t = this._get(n, "shortYearCutoff");
                return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                    shortYearCutoff: t,
                    dayNamesShort: this._get(n, "dayNamesShort"),
                    dayNames: this._get(n, "dayNames"),
                    monthNamesShort: this._get(n, "monthNamesShort"),
                    monthNames: this._get(n, "monthNames")
                }
            },
            _formatDate: function(n, t, i, r) {
                t || (n.currentDay = n.selectedDay, n.currentMonth = n.selectedMonth, n.currentYear = n.selectedYear);
                var u = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(r, i, t)) : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay));
                return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n))
            }
        }), n.fn.datepicker = function(t) {
            if (!this.length) return this;
            n.datepicker.initialized || (n(document).mousedown(n.datepicker._checkExternalClick), n.datepicker.initialized = !0), 0 === n("#" + n.datepicker._mainDivId).length && n("body").append(n.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function() {
                "string" == typeof t ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t)
            }) : n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i))
        }, n.datepicker = new e, n.datepicker.initialized = !1, n.datepicker.uuid = +new Date, n.datepicker.version = "1.10.2", window["DP_jQuery_" + r] = n
    }(jQuery), function(n) {
        var t = {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            i = {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            };
        n.widget("ui.dialog", {
            version: "1.10.2",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                closeOnEscape: !0,
                closeText: "close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function(t) {
                        var i = n(this).css(t).offset().top;
                        0 > i && n(this).css("top", t.top - i)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            _create: function() {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                }, this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && n.fn.draggable && this._makeDraggable(), this.options.resizable && n.fn.resizable && this._makeResizable(), this._isOpen = !1
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t.jquery || t.nodeType) ? n(t) : this.document.find(t || "body").eq(0)
            },
            _destroy: function() {
                var n, t = this.originalPosition;
                this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), n = t.parent.children().eq(t.index), n.length && n[0] !== this.element[0] ? n.before(this.element) : t.parent.append(this.element)
            },
            widget: function() {
                return this.uiDialog
            },
            disable: n.noop,
            enable: n.noop,
            close: function(t) {
                var i = this;
                this._isOpen && this._trigger("beforeClose", t) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || n(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function() {
                    i._trigger("close", t)
                }))
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function() {
                this._moveToTop()
            },
            _moveToTop: function(n, t) {
                var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
                return i && !t && this._trigger("focus", n), i
            },
            open: function() {
                var t = this;
                return this._isOpen ? (this._moveToTop() && this._focusTabbable(), undefined) : (this._isOpen = !0, this.opener = n(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                    t._focusTabbable(), t._trigger("focus")
                }), this._trigger("open"), undefined)
            },
            _focusTabbable: function() {
                var n = this.element.find("[autofocus]");
                n.length || (n = this.element.find(":tabbable")), n.length || (n = this.uiDialogButtonPane.find(":tabbable")), n.length || (n = this.uiDialogTitlebarClose.filter(":tabbable")), n.length || (n = this.uiDialog), n.eq(0).focus()
            },
            _keepFocus: function(t) {
                function i() {
                    var t = this.document[0].activeElement,
                        i = this.uiDialog[0] === t || n.contains(this.uiDialog[0], t);
                    i || this._focusTabbable()
                }
                t.preventDefault(), i.call(this), this._delay(i)
            },
            _createWrapper: function() {
                this.uiDialog = n("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                    keydown: function(t) {
                        if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === n.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), undefined;
                        if (t.keyCode === n.ui.keyCode.TAB) {
                            var i = this.uiDialog.find(":tabbable"),
                                r = i.filter(":first"),
                                u = i.filter(":last");
                            t.target !== u[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== r[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (u.focus(1), t.preventDefault()) : (r.focus(1), t.preventDefault())
                        }
                    },
                    mousedown: function(n) {
                        this._moveToTop(n) && this._focusTabbable()
                    }
                }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            },
            _createTitlebar: function() {
                var t;
                this.uiDialogTitlebar = n("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                    mousedown: function(t) {
                        n(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                    }
                }), this.uiDialogTitlebarClose = n("<button><\/button>").button({
                    label: this.options.closeText,
                    icons: {
                        primary: "ui-icon-closethick"
                    },
                    text: !1
                }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                    click: function(n) {
                        n.preventDefault(), this.close(n)
                    }
                }), t = n("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
                    "aria-labelledby": t.attr("id")
                })
            },
            _title: function(n) {
                this.options.title || n.html("&#160;"), n.text(this.options.title)
            },
            _createButtonPane: function() {
                this.uiDialogButtonPane = n("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = n("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
            },
            _createButtons: function() {
                var i = this,
                    t = this.options.buttons;
                return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), n.isEmptyObject(t) || n.isArray(t) && !t.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), undefined) : (n.each(t, function(t, r) {
                    var u, f;
                    r = n.isFunction(r) ? {
                        click: r,
                        text: t
                    } : r, r = n.extend({
                        type: "button"
                    }, r), u = r.click, r.click = function() {
                        u.apply(i.element[0], arguments)
                    }, f = {
                        icons: r.icons,
                        text: r.showText
                    }, delete r.icons, delete r.showText, n("<button><\/button>", r).button(f).appendTo(i.uiButtonSet)
                }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), undefined)
            },
            _makeDraggable: function() {
                function i(n) {
                    return {
                        position: n.position,
                        offset: n.offset
                    }
                }
                var t = this,
                    r = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(r, u) {
                        n(this).addClass("ui-dialog-dragging"), t._blockFrames(), t._trigger("dragStart", r, i(u))
                    },
                    drag: function(n, r) {
                        t._trigger("drag", n, i(r))
                    },
                    stop: function(u, f) {
                        r.position = [f.position.left - t.document.scrollLeft(), f.position.top - t.document.scrollTop()], n(this).removeClass("ui-dialog-dragging"), t._unblockFrames(), t._trigger("dragStop", u, i(f))
                    }
                })
            },
            _makeResizable: function() {
                function r(n) {
                    return {
                        originalPosition: n.originalPosition,
                        originalSize: n.originalSize,
                        position: n.position,
                        size: n.size
                    }
                }
                var i = this,
                    t = this.options,
                    u = t.resizable,
                    f = this.uiDialog.css("position"),
                    e = "string" == typeof u ? u : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: t.maxWidth,
                    maxHeight: t.maxHeight,
                    minWidth: t.minWidth,
                    minHeight: this._minHeight(),
                    handles: e,
                    start: function(t, u) {
                        n(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", t, r(u))
                    },
                    resize: function(n, t) {
                        i._trigger("resize", n, r(t))
                    },
                    stop: function(u, f) {
                        t.height = n(this).height(), t.width = n(this).width(), n(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", u, r(f))
                    }
                }).css("position", f)
            },
            _minHeight: function() {
                var n = this.options;
                return "auto" === n.height ? n.minHeight : Math.min(n.minHeight, n.height)
            },
            _position: function() {
                var n = this.uiDialog.is(":visible");
                n || this.uiDialog.show(), this.uiDialog.position(this.options.position), n || this.uiDialog.hide()
            },
            _setOptions: function(r) {
                var e = this,
                    u = !1,
                    f = {};
                n.each(r, function(n, r) {
                    e._setOption(n, r), n in t && (u = !0), n in i && (f[n] = r)
                }), u && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", f)
            },
            _setOption: function(n, t) {
                var u, r, i = this.uiDialog;
                "dialogClass" === n && i.removeClass(this.options.dialogClass).addClass(t), "disabled" !== n && (this._super(n, t), "appendTo" === n && this.uiDialog.appendTo(this._appendTo()), "buttons" === n && this._createButtons(), "closeText" === n && this.uiDialogTitlebarClose.button({
                    label: "" + t
                }), "draggable" === n && (u = i.is(":data(ui-draggable)"), u && !t && i.draggable("destroy"), !u && t && this._makeDraggable()), "position" === n && this._position(), "resizable" === n && (r = i.is(":data(ui-resizable)"), r && !t && i.resizable("destroy"), r && "string" == typeof t && i.resizable("option", "handles", t), r || t === !1 || this._makeResizable()), "title" === n && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function() {
                var t, i, r, n = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                    height: "auto",
                    width: n.width
                }).outerHeight(), i = Math.max(0, n.minHeight - t), r = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                    minHeight: i,
                    maxHeight: r,
                    height: "auto"
                }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function() {
                this.iframeBlocks = this.document.find("iframe").map(function() {
                    var t = n(this);
                    return n("<div>").css({
                        position: "absolute",
                        width: t.outerWidth(),
                        height: t.outerHeight()
                    }).appendTo(t.parent()).offset(t.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function(t) {
                return n(t.target).closest(".ui-dialog").length ? !0 : !!n(t.target).closest(".ui-datepicker").length
            },
            _createOverlay: function() {
                if (this.options.modal) {
                    var t = this,
                        i = this.widgetFullName;
                    n.ui.dialog.overlayInstances || this._delay(function() {
                        n.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(r) {
                            t._allowInteraction(r) || (r.preventDefault(), n(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                        })
                    }), this.overlay = n("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                        mousedown: "_keepFocus"
                    }), n.ui.dialog.overlayInstances++
                }
            },
            _destroyOverlay: function() {
                this.options.modal && this.overlay && (n.ui.dialog.overlayInstances--, n.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
            }
        }), n.ui.dialog.overlayInstances = 0, n.uiBackCompat !== !1 && n.widget("ui.dialog", n.ui.dialog, {
            _position: function() {
                var u, t = this.options.position,
                    i = [],
                    r = [0, 0];
                t ? (("string" == typeof t || "object" == typeof t && "0" in t) && (i = t.split ? t.split(" ") : [t[0], t[1]], 1 === i.length && (i[1] = i[0]), n.each(["left", "top"], function(n, t) {
                    +i[n] === i[n] && (r[n] = i[n], i[n] = t)
                }), t = {
                    my: i[0] + (0 > r[0] ? r[0] : "+" + r[0]) + " " + i[1] + (0 > r[1] ? r[1] : "+" + r[1]),
                    at: i.join(" ")
                }), t = n.extend({}, n.ui.dialog.prototype.options.position, t)) : t = n.ui.dialog.prototype.options.position, u = this.uiDialog.is(":visible"), u || this.uiDialog.show(), this.uiDialog.position(t), u || this.uiDialog.hide()
            }
        })
    }(jQuery), function(n) {
        var t = /up|down|vertical/,
            i = /up|left|vertical|horizontal/;
        n.effects.effect.blind = function(r, u) {
            var e, o, s, f = n(this),
                c = ["position", "top", "bottom", "left", "right", "height", "width"],
                p = n.effects.setMode(f, r.mode || "hide"),
                w = r.direction || "up",
                h = t.test(w),
                l = h ? "height" : "width",
                a = h ? "top" : "left",
                b = i.test(w),
                v = {},
                y = "show" === p;
            f.parent().is(".ui-effects-wrapper") ? n.effects.save(f.parent(), c) : n.effects.save(f, c), f.show(), e = n.effects.createWrapper(f).css({
                overflow: "hidden"
            }), o = e[l](), s = parseFloat(e.css(a)) || 0, v[l] = y ? o : 0, b || (f.css(h ? "bottom" : "right", 0).css(h ? "top" : "left", "auto").css({
                position: "absolute"
            }), v[a] = y ? s : o + s), y && (e.css(l, 0), b || e.css(a, s + o)), e.animate(v, {
                duration: r.duration,
                easing: r.easing,
                queue: !1,
                complete: function() {
                    "hide" === p && f.hide(), n.effects.restore(f, c), n.effects.removeWrapper(f), u()
                }
            })
        }
    }(jQuery), function(n) {
        n.effects.effect.bounce = function(t, i) {
            var v, f, e, r = n(this),
                y = ["position", "top", "bottom", "left", "right", "height", "width"],
                k = n.effects.setMode(r, t.mode || "effect"),
                o = "hide" === k,
                p = "show" === k,
                h = t.direction || "up",
                u = t.distance,
                w = t.times || 5,
                d = 2 * w + (p || o ? 1 : 0),
                c = t.duration / d,
                l = t.easing,
                s = "up" === h || "down" === h ? "top" : "left",
                b = "up" === h || "left" === h,
                a = r.queue(),
                g = a.length;
            for ((p || o) && y.push("opacity"), n.effects.save(r, y), r.show(), n.effects.createWrapper(r), u || (u = r["top" === s ? "outerHeight" : "outerWidth"]() / 3), p && (e = {
                    opacity: 1
                }, e[s] = 0, r.css("opacity", 0).css(s, b ? 2 * -u : 2 * u).animate(e, c, l)), o && (u /= Math.pow(2, w - 1)), e = {}, e[s] = 0, v = 0; w > v; v++) f = {}, f[s] = (b ? "-=" : "+=") + u, r.animate(f, c, l).animate(e, c, l), u = o ? 2 * u : u / 2;
            o && (f = {
                opacity: 0
            }, f[s] = (b ? "-=" : "+=") + u, r.animate(f, c, l)), r.queue(function() {
                o && r.hide(), n.effects.restore(r, y), n.effects.removeWrapper(r), i()
            }), g > 1 && a.splice.apply(a, [1, 0].concat(a.splice(g, d + 1))), r.dequeue()
        }
    }(jQuery), function(n) {
        n.effects.effect.clip = function(t, i) {
            var h, u, f, r = n(this),
                c = ["position", "top", "bottom", "left", "right", "height", "width"],
                v = n.effects.setMode(r, t.mode || "hide"),
                e = "show" === v,
                y = t.direction || "vertical",
                l = "vertical" === y,
                o = l ? "height" : "width",
                a = l ? "top" : "left",
                s = {};
            n.effects.save(r, c), r.show(), h = n.effects.createWrapper(r).css({
                overflow: "hidden"
            }), u = "IMG" === r[0].tagName ? h : r, f = u[o](), e && (u.css(o, 0), u.css(a, f / 2)), s[o] = e ? f : 0, s[a] = e ? 0 : f / 2, u.animate(s, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    e || r.hide(), n.effects.restore(r, c), n.effects.removeWrapper(r), i()
                }
            })
        }
    }(jQuery), function(n) {
        n.effects.effect.drop = function(t, i) {
            var u, r = n(this),
                h = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                c = n.effects.setMode(r, t.mode || "hide"),
                e = "show" === c,
                f = t.direction || "left",
                o = "up" === f || "down" === f ? "top" : "left",
                s = "up" === f || "left" === f ? "pos" : "neg",
                l = {
                    opacity: e ? 1 : 0
                };
            n.effects.save(r, h), r.show(), n.effects.createWrapper(r), u = t.distance || r["top" === o ? "outerHeight" : "outerWidth"](!0) / 2, e && r.css("opacity", 0).css(o, "pos" === s ? -u : u), l[o] = (e ? "pos" === s ? "+=" : "-=" : "pos" === s ? "-=" : "+=") + u, r.animate(l, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === c && r.hide(), n.effects.restore(r, h), n.effects.removeWrapper(r), i()
                }
            })
        }
    }(jQuery), function(n) {
        n.effects.effect.explode = function(t, i) {
            function b() {
                p.push(this), p.length === o * c && k()
            }

            function k() {
                r.css({
                    visibility: "visible"
                }), n(p).remove(), u || r.hide(), i()
            }
            for (var f, l, a, v, y, o = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = o, r = n(this), d = n.effects.setMode(r, t.mode || "hide"), u = "show" === d, w = r.show().css("visibility", "hidden").offset(), s = Math.ceil(r.outerWidth() / c), h = Math.ceil(r.outerHeight() / o), p = [], e = 0; o > e; e++)
                for (a = w.top + e * h, y = e - (o - 1) / 2, f = 0; c > f; f++) l = w.left + f * s, v = f - (c - 1) / 2, r.clone().appendTo("body").wrap("<div><\/div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -f * s,
                    top: -e * h
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: s,
                    height: h,
                    left: l + (u ? v * s : 0),
                    top: a + (u ? y * h : 0),
                    opacity: u ? 0 : 1
                }).animate({
                    left: l + (u ? 0 : v * s),
                    top: a + (u ? 0 : y * h),
                    opacity: u ? 1 : 0
                }, t.duration || 500, t.easing, b)
        }
    }(jQuery), function(n) {
        n.effects.effect.fade = function(t, i) {
            var r = n(this),
                u = n.effects.setMode(r, t.mode || "toggle");
            r.animate({
                opacity: u
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: i
            })
        }
    }(jQuery), function(n) {
        n.effects.effect.fold = function(t, i) {
            var r, e, u = n(this),
                s = ["position", "top", "bottom", "left", "right", "height", "width"],
                h = n.effects.setMode(u, t.mode || "hide"),
                o = "show" === h,
                c = "hide" === h,
                f = t.size || 15,
                l = /([0-9]+)%/.exec(f),
                a = !!t.horizFirst,
                v = o !== a,
                y = v ? ["width", "height"] : ["height", "width"],
                p = t.duration / 2,
                w = {},
                b = {};
            n.effects.save(u, s), u.show(), r = n.effects.createWrapper(u).css({
                overflow: "hidden"
            }), e = v ? [r.width(), r.height()] : [r.height(), r.width()], l && (f = parseInt(l[1], 10) / 100 * e[c ? 0 : 1]), o && r.css(a ? {
                height: 0,
                width: f
            } : {
                height: f,
                width: 0
            }), w[y[0]] = o ? e[0] : f, b[y[1]] = o ? e[1] : 0, r.animate(w, p, t.easing).animate(b, p, t.easing, function() {
                c && u.hide(), n.effects.restore(u, s), n.effects.removeWrapper(u), i()
            })
        }
    }(jQuery), function(n) {
        n.effects.effect.highlight = function(t, i) {
            var r = n(this),
                u = ["backgroundImage", "backgroundColor", "opacity"],
                f = n.effects.setMode(r, t.mode || "show"),
                e = {
                    backgroundColor: r.css("backgroundColor")
                };
            "hide" === f && (e.opacity = 0), n.effects.save(r, u), r.show().css({
                backgroundImage: "none",
                backgroundColor: t.color || "#ffff99"
            }).animate(e, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === f && r.hide(), n.effects.restore(r, u), i()
                }
            })
        }
    }(jQuery), function(n) {
        n.effects.effect.pulsate = function(t, i) {
            var e, r = n(this),
                o = n.effects.setMode(r, t.mode || "show"),
                h = "show" === o,
                a = "hide" === o,
                v = h || "hide" === o,
                s = 2 * (t.times || 5) + (v ? 1 : 0),
                c = t.duration / s,
                u = 0,
                f = r.queue(),
                l = f.length;
            for ((h || !r.is(":visible")) && (r.css("opacity", 0).show(), u = 1), e = 1; s > e; e++) r.animate({
                opacity: u
            }, c, t.easing), u = 1 - u;
            r.animate({
                opacity: u
            }, c, t.easing), r.queue(function() {
                a && r.hide(), i()
            }), l > 1 && f.splice.apply(f, [1, 0].concat(f.splice(l, s + 1))), r.dequeue()
        }
    }(jQuery), function(n) {
        n.effects.effect.puff = function(t, i) {
            var r = n(this),
                e = n.effects.setMode(r, t.mode || "hide"),
                o = "hide" === e,
                s = parseInt(t.percent, 10) || 150,
                f = s / 100,
                u = {
                    height: r.height(),
                    width: r.width(),
                    outerHeight: r.outerHeight(),
                    outerWidth: r.outerWidth()
                };
            n.extend(t, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: e,
                complete: i,
                percent: o ? s : 100,
                from: o ? u : {
                    height: u.height * f,
                    width: u.width * f,
                    outerHeight: u.outerHeight * f,
                    outerWidth: u.outerWidth * f
                }
            }), r.effect(t)
        }, n.effects.effect.scale = function(t, i) {
            var u = n(this),
                r = n.extend(!0, {}, t),
                f = n.effects.setMode(u, t.mode || "effect"),
                s = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === f ? 0 : 100),
                h = t.direction || "both",
                c = t.origin,
                e = {
                    height: u.height(),
                    width: u.width(),
                    outerHeight: u.outerHeight(),
                    outerWidth: u.outerWidth()
                },
                o = {
                    y: "horizontal" !== h ? s / 100 : 1,
                    x: "vertical" !== h ? s / 100 : 1
                };
            r.effect = "size", r.queue = !1, r.complete = i, "effect" !== f && (r.origin = c || ["middle", "center"], r.restore = !0), r.from = t.from || ("show" === f ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : e), r.to = {
                height: e.height * o.y,
                width: e.width * o.x,
                outerHeight: e.outerHeight * o.y,
                outerWidth: e.outerWidth * o.x
            }, r.fade && ("show" === f && (r.from.opacity = 0, r.to.opacity = 1), "hide" === f && (r.from.opacity = 1, r.to.opacity = 0)), u.effect(r)
        }, n.effects.effect.size = function(t, i) {
            var f, l, u, r = n(this),
                w = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                k = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                a = ["width", "height", "overflow"],
                v = ["fontSize"],
                e = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                o = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                h = n.effects.setMode(r, t.mode || "effect"),
                y = t.restore || "effect" !== h,
                c = t.scale || "both",
                b = t.origin || ["middle", "center"],
                d = r.css("position"),
                s = y ? w : k,
                p = {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            "show" === h && r.show(), f = {
                height: r.height(),
                width: r.width(),
                outerHeight: r.outerHeight(),
                outerWidth: r.outerWidth()
            }, "toggle" === t.mode && "show" === h ? (r.from = t.to || p, r.to = t.from || f) : (r.from = t.from || ("show" === h ? p : f), r.to = t.to || ("hide" === h ? p : f)), u = {
                from: {
                    y: r.from.height / f.height,
                    x: r.from.width / f.width
                },
                to: {
                    y: r.to.height / f.height,
                    x: r.to.width / f.width
                }
            }, ("box" === c || "both" === c) && (u.from.y !== u.to.y && (s = s.concat(e), r.from = n.effects.setTransition(r, e, u.from.y, r.from), r.to = n.effects.setTransition(r, e, u.to.y, r.to)), u.from.x !== u.to.x && (s = s.concat(o), r.from = n.effects.setTransition(r, o, u.from.x, r.from), r.to = n.effects.setTransition(r, o, u.to.x, r.to))), ("content" === c || "both" === c) && u.from.y !== u.to.y && (s = s.concat(v).concat(a), r.from = n.effects.setTransition(r, v, u.from.y, r.from), r.to = n.effects.setTransition(r, v, u.to.y, r.to)), n.effects.save(r, s), r.show(), n.effects.createWrapper(r), r.css("overflow", "hidden").css(r.from), b && (l = n.effects.getBaseline(b, f), r.from.top = (f.outerHeight - r.outerHeight()) * l.y, r.from.left = (f.outerWidth - r.outerWidth()) * l.x, r.to.top = (f.outerHeight - r.to.outerHeight) * l.y, r.to.left = (f.outerWidth - r.to.outerWidth) * l.x), r.css(r.from), ("content" === c || "both" === c) && (e = e.concat(["marginTop", "marginBottom"]).concat(v), o = o.concat(["marginLeft", "marginRight"]), a = w.concat(e).concat(o), r.find("*[width]").each(function() {
                var i = n(this),
                    r = {
                        height: i.height(),
                        width: i.width(),
                        outerHeight: i.outerHeight(),
                        outerWidth: i.outerWidth()
                    };
                y && n.effects.save(i, a), i.from = {
                    height: r.height * u.from.y,
                    width: r.width * u.from.x,
                    outerHeight: r.outerHeight * u.from.y,
                    outerWidth: r.outerWidth * u.from.x
                }, i.to = {
                    height: r.height * u.to.y,
                    width: r.width * u.to.x,
                    outerHeight: r.height * u.to.y,
                    outerWidth: r.width * u.to.x
                }, u.from.y !== u.to.y && (i.from = n.effects.setTransition(i, e, u.from.y, i.from), i.to = n.effects.setTransition(i, e, u.to.y, i.to)), u.from.x !== u.to.x && (i.from = n.effects.setTransition(i, o, u.from.x, i.from), i.to = n.effects.setTransition(i, o, u.to.x, i.to)), i.css(i.from), i.animate(i.to, t.duration, t.easing, function() {
                    y && n.effects.restore(i, a)
                })
            })), r.animate(r.to, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    0 === r.to.opacity && r.css("opacity", r.from.opacity), "hide" === h && r.hide(), n.effects.restore(r, s), y || ("static" === d ? r.css({
                        position: "relative",
                        top: r.to.top,
                        left: r.to.left
                    }) : n.each(["top", "left"], function(n, t) {
                        r.css(t, function(t, i) {
                            var f = parseInt(i, 10),
                                u = n ? r.to.left : r.to.top;
                            return "auto" === i ? u + "px" : f + u + "px"
                        })
                    })), n.effects.removeWrapper(r), i()
                }
            })
        }
    }(jQuery), function(n) {
        n.effects.effect.shake = function(t, i) {
            var o, r = n(this),
                v = ["position", "top", "bottom", "left", "right", "height", "width"],
                k = n.effects.setMode(r, t.mode || "effect"),
                f = t.direction || "left",
                s = t.distance || 20,
                y = t.times || 3,
                p = 2 * y + 1,
                u = Math.round(t.duration / p),
                h = "up" === f || "down" === f ? "top" : "left",
                c = "up" === f || "left" === f,
                l = {},
                a = {},
                w = {},
                e = r.queue(),
                b = e.length;
            for (n.effects.save(r, v), r.show(), n.effects.createWrapper(r), l[h] = (c ? "-=" : "+=") + s, a[h] = (c ? "+=" : "-=") + 2 * s, w[h] = (c ? "-=" : "+=") + 2 * s, r.animate(l, u, t.easing), o = 1; y > o; o++) r.animate(a, u, t.easing).animate(w, u, t.easing);
            r.animate(a, u, t.easing).animate(l, u / 2, t.easing).queue(function() {
                "hide" === k && r.hide(), n.effects.restore(r, v), n.effects.removeWrapper(r), i()
            }), b > 1 && e.splice.apply(e, [1, 0].concat(e.splice(b, p + 1))), r.dequeue()
        }
    }(jQuery), function(n) {
        n.effects.effect.slide = function(t, i) {
            var u, r = n(this),
                s = ["position", "top", "bottom", "left", "right", "width", "height"],
                h = n.effects.setMode(r, t.mode || "show"),
                c = "show" === h,
                f = t.direction || "left",
                e = "up" === f || "down" === f ? "top" : "left",
                o = "up" === f || "left" === f,
                l = {};
            n.effects.save(r, s), r.show(), u = t.distance || r["top" === e ? "outerHeight" : "outerWidth"](!0), n.effects.createWrapper(r).css({
                overflow: "hidden"
            }), c && r.css(e, o ? isNaN(u) ? "-" + u : -u : u), l[e] = (c ? o ? "+=" : "-=" : o ? "-=" : "+=") + u, r.animate(l, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === h && r.hide(), n.effects.restore(r, s), n.effects.removeWrapper(r), i()
                }
            })
        }
    }(jQuery), function(n) {
        n.effects.effect.transfer = function(t, i) {
            var u = n(this),
                r = n(t.to),
                f = "fixed" === r.css("position"),
                e = n("body"),
                o = f ? e.scrollTop() : 0,
                s = f ? e.scrollLeft() : 0,
                h = r.offset(),
                l = {
                    top: h.top - o,
                    left: h.left - s,
                    height: r.innerHeight(),
                    width: r.innerWidth()
                },
                c = u.offset(),
                a = n("<div class='ui-effects-transfer'><\/div>").appendTo(document.body).addClass(t.className).css({
                    top: c.top - o,
                    left: c.left - s,
                    height: u.innerHeight(),
                    width: u.innerWidth(),
                    position: f ? "fixed" : "absolute"
                }).animate(l, t.duration, t.easing, function() {
                    a.remove(), i()
                })
        }
    }(jQuery), function(n) {
        n.widget("ui.menu", {
            version: "1.10.2",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }).bind("click" + this.eventNamespace, n.proxy(function(n) {
                    this.options.disabled && n.preventDefault()
                }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item > a": function(n) {
                        n.preventDefault()
                    },
                    "click .ui-state-disabled > a": function(n) {
                        n.preventDefault()
                    },
                    "click .ui-menu-item:has(a)": function(t) {
                        var i = n(t.target).closest(".ui-menu-item");
                        !this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(t), i.has(".ui-menu").length ? this.expand(t) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(t) {
                        var i = n(t.currentTarget);
                        i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i)
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(n, t) {
                        var i = this.active || this.element.children(".ui-menu-item").eq(0);
                        t || this.focus(n, i)
                    },
                    blur: function(t) {
                        this._delay(function() {
                            n.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(t) {
                        n(t.target).closest(".ui-menu").length || this.collapseAll(t), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var t = n(this);
                    t.data("ui-menu-submenu-carat") && t.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(t) {
                function o(n) {
                    return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }
                var i, f, r, e, u, s = !0;
                switch (t.keyCode) {
                    case n.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case n.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case n.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case n.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case n.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case n.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case n.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case n.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case n.ui.keyCode.ENTER:
                    case n.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case n.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        s = !1, f = this.previousFilter || "", r = String.fromCharCode(t.keyCode), e = !1, clearTimeout(this.filterTimer), r === f ? e = !0 : r = f + r, u = RegExp("^" + o(r), "i"), i = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return u.test(n(this).children("a").text())
                        }), i = e && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (r = String.fromCharCode(t.keyCode), u = RegExp("^" + o(r), "i"), i = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return u.test(n(this).children("a").text())
                        })), i.length ? (this.focus(t, i), i.length > 1 ? (this.previousFilter = r, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                }
                s && t.preventDefault()
            },
            _activate: function(n) {
                this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(n) : this.select(n))
            },
            refresh: function() {
                var t, r = this.options.icons.submenu,
                    i = this.element.find(this.options.menus);
                i.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var t = n(this),
                        i = t.prev("a"),
                        u = n("<span>").addClass("ui-menu-icon ui-icon " + r).data("ui-menu-submenu-carat", !0);
                    i.attr("aria-haspopup", "true").prepend(u), t.attr("aria-labelledby", i.attr("id"))
                }), t = i.add(this.element), t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), t.children(":not(.ui-menu-item)").each(function() {
                    var t = n(this);
                    /[^\-\u2014\u2013\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
                }), t.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !n.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(n, t) {
                "icons" === n && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), this._super(n, t)
            },
            focus: function(n, t) {
                var i, r;
                this.blur(n, n && "focus" === n.type), this._scrollIntoView(t), this.active = t.first(), r = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", r.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), n && "keydown" === n.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), i = t.children(".ui-menu"), i.length && /^mouse/.test(n.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", n, {
                    item: t
                })
            },
            _scrollIntoView: function(t) {
                var e, o, i, r, u, f;
                this._hasScroll() && (e = parseFloat(n.css(this.activeMenu[0], "borderTopWidth")) || 0, o = parseFloat(n.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - e - o, r = this.activeMenu.scrollTop(), u = this.activeMenu.height(), f = t.height(), 0 > i ? this.activeMenu.scrollTop(r + i) : i + f > u && this.activeMenu.scrollTop(r + i - u + f))
            },
            blur: function(n, t) {
                t || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", n, {
                    item: this.active
                }))
            },
            _startOpening: function(n) {
                clearTimeout(this.timer), "true" === n.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(n)
                }, this.delay))
            },
            _open: function(t) {
                var i = n.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function(t, i) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var r = i ? this.element : n(t && t.target).closest(this.element.find(".ui-menu"));
                    r.length || (r = this.element), this._close(r), this.blur(t), this.activeMenu = r
                }, this.delay)
            },
            _close: function(n) {
                n || (n = this.active ? this.active.parent() : this.element), n.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
            },
            collapse: function(n) {
                var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                t && t.length && (this._close(), this.focus(n, t))
            },
            expand: function(n) {
                var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                t && t.length && (this._open(t.parent()), this._delay(function() {
                    this.focus(n, t)
                }))
            },
            next: function(n) {
                this._move("next", "first", n)
            },
            previous: function(n) {
                this._move("prev", "last", n)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(n, t, i) {
                var r;
                this.active && (r = "first" === n || "last" === n ? this.active["first" === n ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[n + "All"](".ui-menu-item").eq(0)), r && r.length && this.active || (r = this.activeMenu.children(".ui-menu-item")[t]()), this.focus(i, r)
            },
            nextPage: function(t) {
                var i, r, u;
                return this.active ? (this.isLastItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return i = n(this), 0 > i.offset().top - r - u
                }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(t), undefined)
            },
            previousPage: function(t) {
                var i, r, u;
                return this.active ? (this.isFirstItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return i = n(this), i.offset().top - r + u > 0
                }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(t), undefined)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(t) {
                this.active = this.active || n(t.target).closest(".ui-menu-item");
                var i = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
            }
        })
    }(jQuery), function(n, t) {
        function e(n, t, i) {
            return [parseFloat(n[0]) * (a.test(n[0]) ? t / 100 : 1), parseFloat(n[1]) * (a.test(n[1]) ? i / 100 : 1)]
        }

        function r(t, i) {
            return parseInt(n.css(t, i), 10) || 0
        }

        function v(t) {
            var i = t[0];
            return 9 === i.nodeType ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : n.isWindow(i) ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
            }
        }
        n.ui = n.ui || {};
        var f, u = Math.max,
            i = Math.abs,
            o = Math.round,
            s = /left|center|right/,
            h = /top|center|bottom/,
            c = /[\+\-]\d+(\.[\d]+)?%?/,
            l = /^\w+/,
            a = /%$/,
            y = n.fn.position;
        n.position = {
                scrollbarWidth: function() {
                    if (f !== t) return f;
                    var u, r, i = n("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"),
                        e = i.children()[0];
                    return n("body").append(i), u = e.offsetWidth, i.css("overflow", "scroll"), r = e.offsetWidth, u === r && (r = i[0].clientWidth), i.remove(), f = u - r
                },
                getScrollInfo: function(t) {
                    var i = t.isWindow ? "" : t.element.css("overflow-x"),
                        r = t.isWindow ? "" : t.element.css("overflow-y"),
                        u = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                        f = "scroll" === r || "auto" === r && t.height < t.element[0].scrollHeight;
                    return {
                        width: f ? n.position.scrollbarWidth() : 0,
                        height: u ? n.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(t) {
                    var i = n(t || window),
                        r = n.isWindow(i[0]);
                    return {
                        element: i,
                        isWindow: r,
                        offset: i.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: r ? i.width() : i.outerWidth(),
                        height: r ? i.height() : i.outerHeight()
                    }
                }
            }, n.fn.position = function(t) {
                if (!t || !t.of) return y.apply(this, arguments);
                t = n.extend({}, t);
                var b, f, a, w, p, d, g = n(t.of),
                    tt = n.position.getWithinInfo(t.within),
                    it = n.position.getScrollInfo(tt),
                    k = (t.collision || "flip").split(" "),
                    nt = {};
                return d = v(g), g[0].preventDefault && (t.at = "left top"), f = d.width, a = d.height, w = d.offset, p = n.extend({}, w), n.each(["my", "at"], function() {
                    var i, r, n = (t[this] || "").split(" ");
                    1 === n.length && (n = s.test(n[0]) ? n.concat(["center"]) : h.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = s.test(n[0]) ? n[0] : "center", n[1] = h.test(n[1]) ? n[1] : "center", i = c.exec(n[0]), r = c.exec(n[1]), nt[this] = [i ? i[0] : 0, r ? r[0] : 0], t[this] = [l.exec(n[0])[0], l.exec(n[1])[0]]
                }), 1 === k.length && (k[1] = k[0]), "right" === t.at[0] ? p.left += f : "center" === t.at[0] && (p.left += f / 2), "bottom" === t.at[1] ? p.top += a : "center" === t.at[1] && (p.top += a / 2), b = e(nt.at, f, a), p.left += b[0], p.top += b[1], this.each(function() {
                    var y, d, h = n(this),
                        c = h.outerWidth(),
                        l = h.outerHeight(),
                        rt = r(this, "marginLeft"),
                        ut = r(this, "marginTop"),
                        ft = c + rt + r(this, "marginRight") + it.width,
                        et = l + ut + r(this, "marginBottom") + it.height,
                        s = n.extend({}, p),
                        v = e(nt.my, h.outerWidth(), h.outerHeight());
                    "right" === t.my[0] ? s.left -= c : "center" === t.my[0] && (s.left -= c / 2), "bottom" === t.my[1] ? s.top -= l : "center" === t.my[1] && (s.top -= l / 2), s.left += v[0], s.top += v[1], n.support.offsetFractions || (s.left = o(s.left), s.top = o(s.top)), y = {
                        marginLeft: rt,
                        marginTop: ut
                    }, n.each(["left", "top"], function(i, r) {
                        n.ui.position[k[i]] && n.ui.position[k[i]][r](s, {
                            targetWidth: f,
                            targetHeight: a,
                            elemWidth: c,
                            elemHeight: l,
                            collisionPosition: y,
                            collisionWidth: ft,
                            collisionHeight: et,
                            offset: [b[0] + v[0], b[1] + v[1]],
                            my: t.my,
                            at: t.at,
                            within: tt,
                            elem: h
                        })
                    }), t.using && (d = function(n) {
                        var r = w.left - s.left,
                            v = r + f - c,
                            e = w.top - s.top,
                            y = e + a - l,
                            o = {
                                target: {
                                    element: g,
                                    left: w.left,
                                    top: w.top,
                                    width: f,
                                    height: a
                                },
                                element: {
                                    element: h,
                                    left: s.left,
                                    top: s.top,
                                    width: c,
                                    height: l
                                },
                                horizontal: 0 > v ? "left" : r > 0 ? "right" : "center",
                                vertical: 0 > y ? "top" : e > 0 ? "bottom" : "middle"
                            };
                        c > f && f > i(r + v) && (o.horizontal = "center"), l > a && a > i(e + y) && (o.vertical = "middle"), o.important = u(i(r), i(v)) > u(i(e), i(y)) ? "horizontal" : "vertical", t.using.call(this, n, o)
                    }), h.offset(n.extend(s, {
                        using: d
                    }))
                })
            }, n.ui.position = {
                fit: {
                    left: function(n, t) {
                        var h, e = t.within,
                            r = e.isWindow ? e.scrollLeft : e.offset.left,
                            o = e.width,
                            s = n.left - t.collisionPosition.marginLeft,
                            i = r - s,
                            f = s + t.collisionWidth - o - r;
                        t.collisionWidth > o ? i > 0 && 0 >= f ? (h = n.left + i + t.collisionWidth - o - r, n.left += i - h) : n.left = f > 0 && 0 >= i ? r : i > f ? r + o - t.collisionWidth : r : i > 0 ? n.left += i : f > 0 ? n.left -= f : n.left = u(n.left - s, n.left)
                    },
                    top: function(n, t) {
                        var h, o = t.within,
                            r = o.isWindow ? o.scrollTop : o.offset.top,
                            e = t.within.height,
                            s = n.top - t.collisionPosition.marginTop,
                            i = r - s,
                            f = s + t.collisionHeight - e - r;
                        t.collisionHeight > e ? i > 0 && 0 >= f ? (h = n.top + i + t.collisionHeight - e - r, n.top += i - h) : n.top = f > 0 && 0 >= i ? r : i > f ? r + e - t.collisionHeight : r : i > 0 ? n.top += i : f > 0 ? n.top -= f : n.top = u(n.top - s, n.top)
                    }
                },
                flip: {
                    left: function(n, t) {
                        var o, s, r = t.within,
                            y = r.offset.left + r.scrollLeft,
                            c = r.width,
                            h = r.isWindow ? r.scrollLeft : r.offset.left,
                            l = n.left - t.collisionPosition.marginLeft,
                            a = l - h,
                            v = l + t.collisionWidth - c - h,
                            u = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                            f = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                            e = -2 * t.offset[0];
                        0 > a ? (o = n.left + u + f + e + t.collisionWidth - c - y, (0 > o || i(a) > o) && (n.left += u + f + e)) : v > 0 && (s = n.left - t.collisionPosition.marginLeft + u + f + e - h, (s > 0 || v > i(s)) && (n.left += u + f + e))
                    },
                    top: function(n, t) {
                        var o, s, r = t.within,
                            y = r.offset.top + r.scrollTop,
                            a = r.height,
                            h = r.isWindow ? r.scrollTop : r.offset.top,
                            v = n.top - t.collisionPosition.marginTop,
                            c = v - h,
                            l = v + t.collisionHeight - a - h,
                            p = "top" === t.my[1],
                            u = p ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                            f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                            e = -2 * t.offset[1];
                        0 > c ? (s = n.top + u + f + e + t.collisionHeight - a - y, n.top + u + f + e > c && (0 > s || i(c) > s) && (n.top += u + f + e)) : l > 0 && (o = n.top - t.collisionPosition.marginTop + u + f + e - h, n.top + u + f + e > l && (o > 0 || l > i(o)) && (n.top += u + f + e))
                    }
                },
                flipfit: {
                    left: function() {
                        n.ui.position.flip.left.apply(this, arguments), n.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        n.ui.position.flip.top.apply(this, arguments), n.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var t, i, r, u, f, e = document.getElementsByTagName("body")[0],
                    o = document.createElement("div");
                t = document.createElement(e ? "div" : "body"), r = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                }, e && n.extend(r, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
                for (f in r) t.style[f] = r[f];
                t.appendChild(o), i = e || document.documentElement, i.insertBefore(t, i.firstChild), o.style.cssText = "position: absolute; left: 10.7432222px;", u = n(o).offset().left, n.support.offsetFractions = u > 10 && 11 > u, t.innerHTML = "", i.removeChild(t)
            }()
    }(jQuery), function(n, t) {
        n.widget("ui.progressbar", {
            version: "1.10.2",
            options: {
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function() {
                this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                }), this.valueDiv = n("<div class='ui-progressbar-value ui-widget-header ui-corner-left'><\/div>").appendTo(this.element), this._refreshValue()
            },
            _destroy: function() {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
            },
            value: function(n) {
                return n === t ? this.options.value : (this.options.value = this._constrainedValue(n), this._refreshValue(), t)
            },
            _constrainedValue: function(n) {
                return n === t && (n = this.options.value), this.indeterminate = n === !1, "number" != typeof n && (n = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, n))
            },
            _setOptions: function(n) {
                var t = n.value;
                delete n.value, this._super(n), this.options.value = this._constrainedValue(t), this._refreshValue()
            },
            _setOption: function(n, t) {
                "max" === n && (t = Math.max(this.min, t)), this._super(n, t)
            },
            _percentage: function() {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function() {
                var t = this.options.value,
                    i = this._percentage();
                this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = n("<div class='ui-progressbar-overlay'><\/div>").appendTo(this.valueDiv))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": t
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
            }
        })
    }(jQuery), function(n) {
        var t = 5;
        n.widget("ui.slider", n.ui.mouse, {
            version: "1.10.2",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
            },
            _refresh: function() {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function() {
                var r, i, u = this.options,
                    t = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    e = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'><\/a>",
                    f = [];
                for (i = u.values && u.values.length || 1, t.length > i && (t.slice(i).remove(), t = t.slice(0, i)), r = t.length; i > r; r++) f.push(e);
                this.handles = t.add(n(f.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                    n(this).data("ui-slider-handle-index", t)
                })
            },
            _createRange: function() {
                var t = this.options,
                    i = "";
                t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : n.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                    left: "",
                    bottom: ""
                }) : (this.range = n("<div><\/div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : this.range = n([])
            },
            _setupEvents: function() {
                var n = this.handles.add(this.range).filter("a");
                this._off(n), this._on(n, this._handleEvents), this._hoverable(n), this._focusable(n)
            },
            _destroy: function() {
                this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
            },
            _mouseCapture: function(t) {
                var s, f, r, i, u, h, e, c, o = this,
                    l = this.options;
                return l.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), s = {
                    x: t.pageX,
                    y: t.pageY
                }, f = this._normValueFromMouse(s), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                    var e = Math.abs(f - o.values(t));
                    (r > e || r === e && (t === o._lastChangedValue || o.values(t) === l.min)) && (r = e, i = n(this), u = t)
                }), h = this._start(t, u), h === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = u, i.addClass("ui-state-active").focus(), e = i.offset(), c = !n(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = c ? {
                    left: 0,
                    top: 0
                } : {
                    left: t.pageX - e.left - i.width() / 2,
                    top: t.pageY - e.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(t, u, f), this._animateOff = !0, !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(n) {
                var t = {
                        x: n.pageX,
                        y: n.pageY
                    },
                    i = this._normValueFromMouse(t);
                return this._slide(n, this._handleIndex, i), !1
            },
            _mouseStop: function(n) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(n, this._handleIndex), this._change(n, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(n) {
                var i, r, t, u, f;
                return "horizontal" === this.orientation ? (i = this.elementSize.width, r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height, r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t = r / i, t > 1 && (t = 1), 0 > t && (t = 0), "vertical" === this.orientation && (t = 1 - t), u = this._valueMax() - this._valueMin(), f = this._valueMin() + t * u, this._trimAlignValue(f)
            },
            _start: function(n, t) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", n, i)
            },
            _slide: function(n, t, i) {
                var r, f, u;
                this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > r || 1 === t && r > i) && (i = r), i !== this.values(t) && (f = this.values(), f[t] = i, u = this._trigger("slide", n, {
                    handle: this.handles[t],
                    value: i,
                    values: f
                }), r = this.values(t ? 0 : 1), u !== !1 && this.values(t, i, !0))) : i !== this.value() && (u = this._trigger("slide", n, {
                    handle: this.handles[t],
                    value: i
                }), u !== !1 && this.value(i))
            },
            _stop: function(n, t) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", n, i)
            },
            _change: function(n, t) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = {
                        handle: this.handles[t],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", n, i)
                }
            },
            value: function(n) {
                return arguments.length ? (this.options.value = this._trimAlignValue(n), this._refreshValue(), this._change(null, 0), undefined) : this._value()
            },
            values: function(t, i) {
                var u, f, r;
                if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), undefined;
                if (!arguments.length) return this._values();
                if (!n.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                for (u = this.options.values, f = arguments[0], r = 0; u.length > r; r += 1) u[r] = this._trimAlignValue(f[r]), this._change(null, r);
                this._refreshValue()
            },
            _setOption: function(t, i) {
                var r, u = 0;
                switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), n.isArray(this.options.values) && (u = this.options.values.length), n.Widget.prototype._setOption.apply(this, arguments), t) {
                    case "orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), r = 0; u > r; r += 1) this._change(null, r);
                        this._animateOff = !1;
                        break;
                    case "min":
                    case "max":
                        this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _value: function() {
                var n = this.options.value;
                return n = this._trimAlignValue(n)
            },
            _values: function(n) {
                var r, t, i;
                if (arguments.length) return r = this.options.values[n], r = this._trimAlignValue(r);
                if (this.options.values && this.options.values.length) {
                    for (t = this.options.values.slice(), i = 0; t.length > i; i += 1) t[i] = this._trimAlignValue(t[i]);
                    return t
                }
                return []
            },
            _trimAlignValue: function(n) {
                if (this._valueMin() >= n) return this._valueMin();
                if (n >= this._valueMax()) return this._valueMax();
                var t = this.options.step > 0 ? this.options.step : 1,
                    i = (n - this._valueMin()) % t,
                    r = n - i;
                return 2 * Math.abs(i) >= t && (r += i > 0 ? t : -t), parseFloat(r.toFixed(5))
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.options.max
            },
            _refreshValue: function() {
                var s, t, c, f, h, e = this.options.range,
                    i = this.options,
                    r = this,
                    u = this._animateOff ? !1 : i.animate,
                    o = {};
                this.options.values && this.options.values.length ? this.handles.each(function(f) {
                    t = 100 * ((r.values(f) - r._valueMin()) / (r._valueMax() - r._valueMin())), o["horizontal" === r.orientation ? "left" : "bottom"] = t + "%", n(this).stop(1, 1)[u ? "animate" : "css"](o, i.animate), r.options.range === !0 && ("horizontal" === r.orientation ? (0 === f && r.range.stop(1, 1)[u ? "animate" : "css"]({
                        left: t + "%"
                    }, i.animate), 1 === f && r.range[u ? "animate" : "css"]({
                        width: t - s + "%"
                    }, {
                        queue: !1,
                        duration: i.animate
                    })) : (0 === f && r.range.stop(1, 1)[u ? "animate" : "css"]({
                        bottom: t + "%"
                    }, i.animate), 1 === f && r.range[u ? "animate" : "css"]({
                        height: t - s + "%"
                    }, {
                        queue: !1,
                        duration: i.animate
                    }))), s = t
                }) : (c = this.value(), f = this._valueMin(), h = this._valueMax(), t = h !== f ? 100 * ((c - f) / (h - f)) : 0, o["horizontal" === this.orientation ? "left" : "bottom"] = t + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](o, i.animate), "min" === e && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                    width: t + "%"
                }, i.animate), "max" === e && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({
                    width: 100 - t + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                }), "min" === e && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                    height: t + "%"
                }, i.animate), "max" === e && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({
                    height: 100 - t + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                }))
            },
            _handleEvents: {
                keydown: function(i) {
                    var o, u, r, f, e = n(i.target).data("ui-slider-handle-index");
                    switch (i.keyCode) {
                        case n.ui.keyCode.HOME:
                        case n.ui.keyCode.END:
                        case n.ui.keyCode.PAGE_UP:
                        case n.ui.keyCode.PAGE_DOWN:
                        case n.ui.keyCode.UP:
                        case n.ui.keyCode.RIGHT:
                        case n.ui.keyCode.DOWN:
                        case n.ui.keyCode.LEFT:
                            if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, n(i.target).addClass("ui-state-active"), o = this._start(i, e), o === !1)) return
                    }
                    switch (f = this.options.step, u = r = this.options.values && this.options.values.length ? this.values(e) : this.value(), i.keyCode) {
                        case n.ui.keyCode.HOME:
                            r = this._valueMin();
                            break;
                        case n.ui.keyCode.END:
                            r = this._valueMax();
                            break;
                        case n.ui.keyCode.PAGE_UP:
                            r = this._trimAlignValue(u + (this._valueMax() - this._valueMin()) / t);
                            break;
                        case n.ui.keyCode.PAGE_DOWN:
                            r = this._trimAlignValue(u - (this._valueMax() - this._valueMin()) / t);
                            break;
                        case n.ui.keyCode.UP:
                        case n.ui.keyCode.RIGHT:
                            if (u === this._valueMax()) return;
                            r = this._trimAlignValue(u + f);
                            break;
                        case n.ui.keyCode.DOWN:
                        case n.ui.keyCode.LEFT:
                            if (u === this._valueMin()) return;
                            r = this._trimAlignValue(u - f)
                    }
                    this._slide(i, e, r)
                },
                click: function(n) {
                    n.preventDefault()
                },
                keyup: function(t) {
                    var i = n(t.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), n(t.target).removeClass("ui-state-active"))
                }
            }
        })
    }(jQuery), function(n) {
        function t(n) {
            return function() {
                var t = this.element.val();
                n.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
            }
        }
        n.widget("ui.spinner", {
            version: "1.10.2",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function() {
                var t = {},
                    i = this.element;
                return n.each(["min", "max", "step"], function(n, r) {
                    var u = i.attr(r);
                    void 0 !== u && u.length && (t[r] = u)
                }), t
            },
            _events: {
                keydown: function(n) {
                    this._start(n) && this._keydown(n) && n.preventDefault()
                },
                keyup: "_stop",
                focus: function() {
                    this.previous = this.element.val()
                },
                blur: function(n) {
                    return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", n), void 0)
                },
                mousewheel: function(n, t) {
                    if (t) {
                        if (!this.spinning && !this._start(n)) return !1;
                        this._spin((t > 0 ? 1 : -1) * this.options.step, n), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                            this.spinning && this._stop(n)
                        }, 100), n.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function(t) {
                    function r() {
                        var n = this.element[0] === this.document[0].activeElement;
                        n || (this.element.focus(), this.previous = i, this._delay(function() {
                            this.previous = i
                        }))
                    }
                    var i;
                    i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), r.call(this), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, r.call(this)
                    }), this._start(t) !== !1 && this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function(t) {
                    if (n(t.currentTarget).hasClass("ui-state-active")) return this._start(t) === !1 ? !1 : (this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0)
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _draw: function() {
                var n = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                this.element.attr("role", "spinbutton"), this.buttons = n.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * n.height()) && n.height() > 0 && n.height(n.height()), this.options.disabled && this.disable()
            },
            _keydown: function(t) {
                var r = this.options,
                    i = n.ui.keyCode;
                switch (t.keyCode) {
                    case i.UP:
                        return this._repeat(null, 1, t), !0;
                    case i.DOWN:
                        return this._repeat(null, -1, t), !0;
                    case i.PAGE_UP:
                        return this._repeat(null, r.page, t), !0;
                    case i.PAGE_DOWN:
                        return this._repeat(null, -r.page, t), !0
                }
                return !1
            },
            _uiSpinnerHtml: function() {
                return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'><\/span>"
            },
            _buttonHtml: function() {
                return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;<\/span><\/a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;<\/span><\/a>"
            },
            _start: function(n) {
                return this.spinning || this._trigger("start", n) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
            },
            _repeat: function(n, t, i) {
                n = n || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                    this._repeat(40, t, i)
                }, n), this._spin(t * this.options.step, i)
            },
            _spin: function(n, t) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1), i = this._adjustValue(i + n * this._increment(this.counter)), this.spinning && this._trigger("spin", t, {
                    value: i
                }) === !1 || (this._value(i), this.counter++)
            },
            _increment: function(t) {
                var i = this.options.incremental;
                return i ? n.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
            },
            _precision: function() {
                var n = this._precisionOf(this.options.step);
                return null !== this.options.min && (n = Math.max(n, this._precisionOf(this.options.min))), n
            },
            _precisionOf: function(n) {
                var t = "" + n,
                    i = t.indexOf(".");
                return -1 === i ? 0 : t.length - i - 1
            },
            _adjustValue: function(n) {
                var r, i, t = this.options;
                return r = null !== t.min ? t.min : 0, i = n - r, i = Math.round(i / t.step) * t.step, n = r + i, n = parseFloat(n.toFixed(this._precision())), null !== t.max && n > t.max ? t.max : null !== t.min && t.min > n ? t.min : n
            },
            _stop: function(n) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", n))
            },
            _setOption: function(n, t) {
                if ("culture" === n || "numberFormat" === n) {
                    var i = this._parse(this.element.val());
                    return this.options[n] = t, this.element.val(this._format(i)), void 0
                }("max" === n || "min" === n || "step" === n) && "string" == typeof t && (t = this._parse(t)), "icons" === n && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)), this._super(n, t), "disabled" === n && (t ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
            },
            _setOptions: t(function(n) {
                this._super(n), this._value(this.element.val())
            }),
            _parse: function(n) {
                return "string" == typeof n && "" !== n && (n = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(n, 10, this.options.culture) : +n), "" === n || isNaN(n) ? null : n
            },
            _format: function(n) {
                return "" === n ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(n, this.options.numberFormat, this.options.culture) : n
            },
            _refresh: function() {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            _value: function(n, t) {
                var i;
                "" !== n && (i = this._parse(n), null !== i && (t || (i = this._adjustValue(i)), n = this._format(i))), this.element.val(n), this._refresh()
            },
            _destroy: function() {
                this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: t(function(n) {
                this._stepUp(n)
            }),
            _stepUp: function(n) {
                this._start() && (this._spin((n || 1) * this.options.step), this._stop())
            },
            stepDown: t(function(n) {
                this._stepDown(n)
            }),
            _stepDown: function(n) {
                this._start() && (this._spin((n || 1) * -this.options.step), this._stop())
            },
            pageUp: t(function(n) {
                this._stepUp((n || 1) * this.options.page)
            }),
            pageDown: t(function(n) {
                this._stepDown((n || 1) * this.options.page)
            }),
            value: function(n) {
                return arguments.length ? (t(this._value).call(this, n), void 0) : this._parse(this.element.val())
            },
            widget: function() {
                return this.uiSpinner
            }
        })
    }(jQuery), function(n, t) {
        function u() {
            return ++f
        }

        function i(n) {
            return n.hash.length > 1 && decodeURIComponent(n.href.replace(r, "")) === decodeURIComponent(location.href.replace(r, ""))
        }
        var f = 0,
            r = /#.*$/;
        n.widget("ui.tabs", {
            version: "1.10.2",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _create: function() {
                var i = this,
                    t = this.options;
                this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", t.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(t) {
                    n(this).is(".ui-state-disabled") && t.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                    n(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this._processTabs(), t.active = this._initialActive(), n.isArray(t.disabled) && (t.disabled = n.unique(t.disabled.concat(n.map(this.tabs.filter(".ui-state-disabled"), function(n) {
                    return i.tabs.index(n)
                }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(t.active) : n(), this._refresh(), this.active.length && this.load(t.active)
            },
            _initialActive: function() {
                var i = this.options.active,
                    r = this.options.collapsible,
                    u = location.hash.substring(1);
                return null === i && (u && this.tabs.each(function(r, f) {
                    return n(f).attr("aria-controls") === u ? (i = r, !1) : t
                }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = r ? !1 : 0)), !r && i === !1 && this.anchors.length && (i = 0), i
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : n()
                }
            },
            _tabKeydown: function(i) {
                var u = n(this.document[0].activeElement).closest("li"),
                    r = this.tabs.index(u),
                    f = !0;
                if (!this._handlePageNav(i)) {
                    switch (i.keyCode) {
                        case n.ui.keyCode.RIGHT:
                        case n.ui.keyCode.DOWN:
                            r++;
                            break;
                        case n.ui.keyCode.UP:
                        case n.ui.keyCode.LEFT:
                            f = !1, r--;
                            break;
                        case n.ui.keyCode.END:
                            r = this.anchors.length - 1;
                            break;
                        case n.ui.keyCode.HOME:
                            r = 0;
                            break;
                        case n.ui.keyCode.SPACE:
                            return i.preventDefault(), clearTimeout(this.activating), this._activate(r), t;
                        case n.ui.keyCode.ENTER:
                            return i.preventDefault(), clearTimeout(this.activating), this._activate(r === this.options.active ? !1 : r), t;
                        default:
                            return
                    }
                    i.preventDefault(), clearTimeout(this.activating), r = this._focusNextTab(r, f), i.ctrlKey || (u.attr("aria-selected", "false"), this.tabs.eq(r).attr("aria-selected", "true"), this.activating = this._delay(function() {
                        this.option("active", r)
                    }, this.delay))
                }
            },
            _panelKeydown: function(t) {
                this._handlePageNav(t) || t.ctrlKey && t.keyCode === n.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
            },
            _handlePageNav: function(i) {
                return i.altKey && i.keyCode === n.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === n.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : t
            },
            _findNextTab: function(t, i) {
                function u() {
                    return t > r && (t = 0), 0 > t && (t = r), t
                }
                for (var r = this.tabs.length - 1; - 1 !== n.inArray(u(), this.options.disabled);) t = i ? t + 1 : t - 1;
                return t
            },
            _focusNextTab: function(n, t) {
                return n = this._findNextTab(n, t), this.tabs.eq(n).focus(), n
            },
            _setOption: function(n, i) {
                return "active" === n ? (this._activate(i), t) : "disabled" === n ? (this._setupDisabled(i), t) : (this._super(n, i), "collapsible" === n && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === n && this._setupEvents(i), "heightStyle" === n && this._setupHeightStyle(i), t)
            },
            _tabId: function(n) {
                return n.attr("aria-controls") || "ui-tabs-" + u()
            },
            _sanitizeSelector: function(n) {
                return n ? n.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var t = this.options,
                    i = this.tablist.children(":has(a[href])");
                t.disabled = n.map(i.filter(".ui-state-disabled"), function(n) {
                    return i.index(n)
                }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !n.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = n()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = n()), this._refresh()
            },
            _refresh: function() {
                this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var t = this;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                }), this.anchors = this.tabs.map(function() {
                    return n("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                }), this.panels = n(), this.anchors.each(function(r, u) {
                    var e, f, s, h = n(u).uniqueId().attr("id"),
                        o = n(u).closest("li"),
                        c = o.attr("aria-controls");
                    i(u) ? (e = u.hash, f = t.element.find(t._sanitizeSelector(e))) : (s = t._tabId(o), e = "#" + s, f = t.element.find(e), f.length || (f = t._createPanel(s), f.insertAfter(t.panels[r - 1] || t.tablist)), f.attr("aria-live", "polite")), f.length && (t.panels = t.panels.add(f)), c && o.data("ui-tabs-aria-controls", c), o.attr({
                        "aria-controls": e.substring(1),
                        "aria-labelledby": h
                    }), f.attr("aria-labelledby", h)
                }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
            },
            _getList: function() {
                return this.element.find("ol,ul").eq(0)
            },
            _createPanel: function(t) {
                return n("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function(t) {
                n.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
                for (var i, r = 0; i = this.tabs[r]; r++) t === !0 || -1 !== n.inArray(r, t) ? n(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : n(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = t
            },
            _setupEvents: function(t) {
                var i = {
                    click: function(n) {
                        n.preventDefault()
                    }
                };
                t && n.each(t.split(" "), function(n, t) {
                    i[t] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(t) {
                var i, r = this.element.parent();
                "fill" === t ? (i = r.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                    var t = n(this),
                        r = t.css("position");
                    "absolute" !== r && "fixed" !== r && (i -= t.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function() {
                    i -= n(this).outerHeight(!0)
                }), this.panels.each(function() {
                    n(this).height(Math.max(0, i - n(this).innerHeight() + n(this).height()))
                }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function() {
                    i = Math.max(i, n(this).height("").height())
                }).height(i))
            },
            _eventHandler: function(t) {
                var u = this.options,
                    r = this.active,
                    c = n(t.currentTarget),
                    i = c.closest("li"),
                    f = i[0] === r[0],
                    e = f && u.collapsible,
                    o = e ? n() : this._getPanelForTab(i),
                    s = r.length ? this._getPanelForTab(r) : n(),
                    h = {
                        oldTab: r,
                        oldPanel: s,
                        newTab: e ? n() : i,
                        newPanel: o
                    };
                t.preventDefault(), i.hasClass("ui-state-disabled") || i.hasClass("ui-tabs-loading") || this.running || f && !u.collapsible || this._trigger("beforeActivate", t, h) === !1 || (u.active = e ? !1 : this.tabs.index(i), this.active = f ? n() : i, this.xhr && this.xhr.abort(), s.length || o.length || n.error("jQuery UI Tabs: Mismatching fragment identifier."), o.length && this.load(this.tabs.index(i), t), this._toggle(t, h))
            },
            _toggle: function(t, i) {
                function e() {
                    u.running = !1, u._trigger("activate", t, i)
                }

                function o() {
                    i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), r.length && u.options.show ? u._show(r, u.options.show, e) : (r.show(), e())
                }
                var u = this,
                    r = i.newPanel,
                    f = i.oldPanel;
                this.running = !0, f.length && this.options.hide ? this._hide(f, this.options.hide, function() {
                    i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), o()
                }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), f.hide(), o()), f.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), i.oldTab.attr("aria-selected", "false"), r.length && f.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() {
                    return 0 === n(this).attr("tabIndex")
                }).attr("tabIndex", -1), r.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }), i.newTab.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                })
            },
            _activate: function(t) {
                var r, i = this._findActive(t);
                i[0] !== this.active[0] && (i.length || (i = this.active), r = i.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: r,
                    currentTarget: r,
                    preventDefault: n.noop
                }))
            },
            _findActive: function(t) {
                return t === !1 ? n() : this.tabs.eq(t)
            },
            _getIndex: function(n) {
                return "string" == typeof n && (n = this.anchors.index(this.anchors.filter("[href$='" + n + "']"))), n
            },
            _destroy: function() {
                this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                    n.data(this, "ui-tabs-destroy") ? n(this).remove() : n(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }), this.tabs.each(function() {
                    var t = n(this),
                        i = t.data("ui-tabs-aria-controls");
                    i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(i) {
                var r = this.options.disabled;
                r !== !1 && (i === t ? r = !1 : (i = this._getIndex(i), r = n.isArray(r) ? n.map(r, function(n) {
                    return n !== i ? n : null
                }) : n.map(this.tabs, function(n, t) {
                    return t !== i ? t : null
                })), this._setupDisabled(r))
            },
            disable: function(i) {
                var r = this.options.disabled;
                if (r !== !0) {
                    if (i === t) r = !0;
                    else {
                        if (i = this._getIndex(i), -1 !== n.inArray(i, r)) return;
                        r = n.isArray(r) ? n.merge([i], r).sort() : [i]
                    }
                    this._setupDisabled(r)
                }
            },
            load: function(t, r) {
                t = this._getIndex(t);
                var f = this,
                    u = this.tabs.eq(t),
                    o = u.find(".ui-tabs-anchor"),
                    e = this._getPanelForTab(u),
                    s = {
                        tab: u,
                        panel: e
                    };
                i(o[0]) || (this.xhr = n.ajax(this._ajaxSettings(o, r, s)), this.xhr && "canceled" !== this.xhr.statusText && (u.addClass("ui-tabs-loading"), e.attr("aria-busy", "true"), this.xhr.success(function(n) {
                    setTimeout(function() {
                        e.html(n), f._trigger("load", r, s)
                    }, 1)
                }).complete(function(n, t) {
                    setTimeout(function() {
                        "abort" === t && f.panels.stop(!1, !0), u.removeClass("ui-tabs-loading"), e.removeAttr("aria-busy"), n === f.xhr && delete f.xhr
                    }, 1)
                })))
            },
            _ajaxSettings: function(t, i, r) {
                var u = this;
                return {
                    url: t.attr("href"),
                    beforeSend: function(t, f) {
                        return u._trigger("beforeLoad", i, n.extend({
                            jqXHR: t,
                            ajaxSettings: f
                        }, r))
                    }
                }
            },
            _getPanelForTab: function(t) {
                var i = n(t).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        })
    }(jQuery), function(n) {
        function t(t, i) {
            var r = (t.attr("aria-describedby") || "").split(/\s+/);
            r.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", n.trim(r.join(" ")))
        }

        function i(t) {
            var u = t.data("ui-tooltip-id"),
                i = (t.attr("aria-describedby") || "").split(/\s+/),
                r = n.inArray(u, i); - 1 !== r && i.splice(r, 1), t.removeData("ui-tooltip-id"), i = n.trim(i.join(" ")), i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
        }
        var r = 0;
        n.widget("ui.tooltip", {
            version: "1.10.2",
            options: {
                content: function() {
                    var t = n(this).attr("title") || "";
                    return n("<a>").text(t).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
            },
            _setOption: function(t, i) {
                var r = this;
                return "disabled" === t ? (this[i ? "_disable" : "_enable"](), this.options[t] = i, void 0) : (this._super(t, i), "content" === t && n.each(this.tooltips, function(n, t) {
                    r._updateContent(t)
                }), void 0)
            },
            _disable: function() {
                var t = this;
                n.each(this.tooltips, function(i, r) {
                    var u = n.Event("blur");
                    u.target = u.currentTarget = r[0], t.close(u, !0)
                }), this.element.find(this.options.items).addBack().each(function() {
                    var t = n(this);
                    t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
                })
            },
            _enable: function() {
                this.element.find(this.options.items).addBack().each(function() {
                    var t = n(this);
                    t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                })
            },
            open: function(t) {
                var r = this,
                    i = n(t ? t.target : this.element).closest(this.options.items);
                i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), t && "mouseover" === t.type && i.parents().each(function() {
                    var i, t = n(this);
                    t.data("ui-tooltip-open") && (i = n.Event("blur"), i.target = i.currentTarget = this, r.close(i, !0)), t.attr("title") && (t.uniqueId(), r.parents[this.id] = {
                        element: this,
                        title: t.attr("title")
                    }, t.attr("title", ""))
                }), this._updateContent(i, t))
            },
            _updateContent: function(n, t) {
                var i, r = this.options.content,
                    u = this,
                    f = t ? t.type : null;
                return "string" == typeof r ? this._open(t, n, r) : (i = r.call(n[0], function(i) {
                    n.data("ui-tooltip-open") && u._delay(function() {
                        t && (t.type = f), this._open(t, n, i)
                    })
                }), i && this._open(t, n, i), void 0)
            },
            _open: function(i, r, u) {
                function o(n) {
                    s.of = n, f.is(":hidden") || f.position(s)
                }
                var f, e, h, s = n.extend({}, this.options.position);
                if (u) {
                    if (f = this._find(r), f.length) return f.find(".ui-tooltip-content").html(u), void 0;
                    r.is("[title]") && (i && "mouseover" === i.type ? r.attr("title", "") : r.removeAttr("title")), f = this._tooltip(r), t(r, f.attr("id")), f.find(".ui-tooltip-content").html(u), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
                        mousemove: o
                    }), o(i)) : f.position(n.extend({
                        of: r
                    }, this.options.position)), f.hide(), this._show(f, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
                        f.is(":visible") && (o(s.of), clearInterval(h))
                    }, n.fx.interval)), this._trigger("open", i, {
                        tooltip: f
                    }), e = {
                        keyup: function(t) {
                            if (t.keyCode === n.ui.keyCode.ESCAPE) {
                                var i = n.Event(t);
                                i.currentTarget = r[0], this.close(i, !0)
                            }
                        },
                        remove: function() {
                            this._removeTooltip(f)
                        }
                    }, i && "mouseover" !== i.type || (e.mouseleave = "close"), i && "focusin" !== i.type || (e.focusout = "close"), this._on(!0, r, e)
                }
            },
            close: function(t) {
                var f = this,
                    r = n(t ? t.currentTarget : this.element),
                    u = this._find(r);
                this.closing || (clearInterval(this.delayedShow), r.data("ui-tooltip-title") && r.attr("title", r.data("ui-tooltip-title")), i(r), u.stop(!0), this._hide(u, this.options.hide, function() {
                    f._removeTooltip(n(this))
                }), r.removeData("ui-tooltip-open"), this._off(r, "mouseleave focusout keyup"), r[0] !== this.element[0] && this._off(r, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && n.each(this.parents, function(t, i) {
                    n(i.element).attr("title", i.title), delete f.parents[t]
                }), this.closing = !0, this._trigger("close", t, {
                    tooltip: u
                }), this.closing = !1)
            },
            _tooltip: function(t) {
                var u = "ui-tooltip-" + r++,
                    i = n("<div>").attr({
                        id: u,
                        role: "tooltip"
                    }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
                return n("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[u] = t, i
            },
            _find: function(t) {
                var i = t.data("ui-tooltip-id");
                return i ? n("#" + i) : n()
            },
            _removeTooltip: function(n) {
                n.remove(), delete this.tooltips[n.attr("id")]
            },
            _destroy: function() {
                var t = this;
                n.each(this.tooltips, function(i, r) {
                    var u = n.Event("blur");
                    u.target = u.currentTarget = r[0], t.close(u, !0), n("#" + i).remove(), r.data("ui-tooltip-title") && (r.attr("title", r.data("ui-tooltip-title")), r.removeData("ui-tooltip-title"))
                })
            }
        })
    }(jQuery), $.widget("custom.mcautocomplete", $.ui.autocomplete, {
        _renderMenu: function(n, t) {
            var r = this,
                u, i;
            this.options.showHeader && (i = $('<div class="ui-widget-header" style="width:100%"><\/div>'), $.each(this.options.columns, function(n, t) {
                t.hidden || i.append('<span style="padding:0 4px;float:left;width:' + t.width + ';">' + t.name + "<\/span>")
            }), i.append('<div style="clear: both;"><\/div>'), n.append(i)), $.each(t, function(t, i) {
                r._renderItem(n, i)
            })
        },
        _renderItem: function(n, t) {
            var i = "",
                r = "";
            return $.each(this.options.columns, function(n, r) {
                r.hidden || (i += '<span style="padding:0 4px;float:left;width:' + r.width + ';">' + t[r.valueField ? r.valueField : n] + "<\/span>")
            }), r = $("<li><\/li>").data("ui-autocomplete-item", t).append('<a class="mcacAnchor">' + i + '<div style="clear: both;"><\/div><\/a>').appendTo(n)
        }
    }), function(n) {
        function i(n, t) {
            for (var i = window, r = (n || "").split("."); i && r.length;) i = i[r.shift()];
            return typeof i == "function" ? i : (t.push(n), Function.constructor.apply(null, t))
        }

        function r(n) {
            return n === "GET" || n === "POST"
        }

        function e(n, t) {
            r(t) || n.setRequestHeader("X-HTTP-Method-Override", t)
        }

        function o(t, i, r) {
            var u;
            r.indexOf("application/x-javascript") === -1 && (u = (t.getAttribute("data-ajax-mode") || "").toUpperCase(), n(t.getAttribute("data-ajax-update")).each(function(t, r) {
                var f;
                switch (u) {
                    case "BEFORE":
                        f = r.firstChild, n("<div />").html(i).contents().each(function() {
                            r.insertBefore(this, f)
                        });
                        break;
                    case "AFTER":
                        n("<div />").html(i).contents().each(function() {
                            r.appendChild(this)
                        });
                        break;
                    default:
                        n(r).html(i)
                }
            }))
        }

        function u(t, u) {
            var s, h, f, c;
            (s = t.getAttribute("data-ajax-confirm"), !s || window.confirm(s)) && (h = n(t.getAttribute("data-ajax-loading")), c = t.getAttribute("data-ajax-loading-duration") || 0, n.extend(u, {
                type: t.getAttribute("data-ajax-method") || undefined,
                url: t.getAttribute("data-ajax-url") || undefined,
                beforeSend: function(n) {
                    var r;
                    return e(n, f), r = i(t.getAttribute("data-ajax-begin"), ["xhr"]).apply(this, arguments), r !== !1 && h.show(c), r
                },
                complete: function() {
                    h.hide(c), i(t.getAttribute("data-ajax-complete"), ["xhr", "status"]).apply(this, arguments)
                },
                success: function(n, r, u) {
                    o(t, n, u.getResponseHeader("Content-Type") || "text/html"), i(t.getAttribute("data-ajax-success"), ["data", "status", "xhr"]).apply(this, arguments)
                },
                error: i(t.getAttribute("data-ajax-failure"), ["xhr", "status", "error"])
            }), u.data.push({
                name: "X-Requested-With",
                value: "XMLHttpRequest"
            }), f = u.type.toUpperCase(), r(f) || (u.type = "POST", u.data.push({
                name: "X-HTTP-Method-Override",
                value: f
            })), n.ajax(u))
        }

        function s(t) {
            var i = n(t).data(f);
            return !i || !i.validate || i.validate()
        }
        var t = "unobtrusiveAjaxClick",
            f = "unobtrusiveValidation";
        n(document).on("click", "a[data-ajax=true]", function(n) {
            n.preventDefault(), u(this, {
                url: this.href,
                type: "GET",
                data: []
            })
        });
        n(document).on("click", "form[data-ajax=true] input[type=image]", function(i) {
            var r = i.target.name,
                u = n(i.target),
                f = u.parents("form")[0],
                e = u.offset();
            n(f).data(t, [{
                name: r + ".x",
                value: Math.round(i.pageX - e.left)
            }, {
                name: r + ".y",
                value: Math.round(i.pageY - e.top)
            }]), setTimeout(function() {
                n(f).removeData(t)
            }, 0)
        });
        n(document).on("click", "form[data-ajax=true] :submit", function(i) {
            var r = i.target.name,
                u = n(i.target).parents("form")[0];
            n(u).data(t, r ? [{
                name: r,
                value: i.target.value
            }] : []), setTimeout(function() {
                n(u).removeData(t)
            }, 0)
        });
        n(document).on("submit", "form[data-ajax=true]", function(i) {
            var r = n(this).data(t) || [];
            (i.preventDefault(), s(this)) && u(this, {
                url: this.action,
                type: this.method || "GET",
                data: r.concat(n(this).serializeArray())
            })
        })
    }(jQuery), function(n) {
        n.extend(n.fn, {
            validate: function(t) {
                if (!this.length) {
                    t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
                    return
                }
                var i = n.data(this[0], "validator");
                return i ? i : (this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
                    i.settings.submitHandler && (i.submitButton = t.target), n(t.target).hasClass("cancel") && (i.cancelSubmit = !0)
                }), this.submit(function(t) {
                    function r() {
                        var r;
                        return i.settings.submitHandler ? (i.submitButton && (r = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && r.remove(), !1) : !0
                    }
                    return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
                })), i)
            },
            valid: function() {
                if (n(this[0]).is("form")) return this.validate().form();
                var t = !0,
                    i = n(this[0].form).validate();
                return this.each(function() {
                    t &= i.element(this)
                }), t
            },
            removeAttrs: function(t) {
                var i = {},
                    r = this;
                return n.each(t.split(/\s/), function(n, t) {
                    i[t] = r.attr(t), r.removeAttr(t)
                }), i
            },
            rules: function(t, i) {
                var r = this[0],
                    o, u, h;
                if (t) {
                    var e = n.data(r.form, "validator").settings,
                        s = e.rules,
                        f = n.validator.staticRules(r);
                    switch (t) {
                        case "add":
                            n.extend(f, n.validator.normalizeRule(i)), s[r.name] = f, i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                            break;
                        case "remove":
                            return i ? (o = {}, n.each(i.split(/\s/), function(n, t) {
                                o[t] = f[t], delete f[t]
                            }), o) : (delete s[r.name], f)
                    }
                }
                return u = n.validator.normalizeRules(n.extend({}, n.validator.classRules(r), n.validator.attributeRules(r), n.validator.dataRules(r), n.validator.staticRules(r)), r), u.required && (h = u.required, delete u.required, u = n.extend({
                    required: h
                }, u)), u
            }
        }), n.extend(n.expr[":"], {
            blank: function(t) {
                return !n.trim("" + t.value)
            },
            filled: function(t) {
                return !!n.trim("" + t.value)
            },
            unchecked: function(n) {
                return !n.checked
            }
        }), n.validator = function(t, i) {
            this.settings = n.extend(!0, {}, n.validator.defaults, t), this.currentForm = i, this.init()
        }, n.validator.format = function(t, i) {
            return arguments.length === 1 ? function() {
                var i = n.makeArray(arguments);
                return i.unshift(t), n.validator.format.apply(this, i)
            } : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), n.each(i, function(n, i) {
                t = t.replace(new RegExp("\\{" + n + "\\}", "g"), function() {
                    return i
                })
            }), t)
        }, n.extend(n.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: n([]),
                errorLabelContainer: n([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(n) {
                    this.lastActive = n, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(n)).hide())
                },
                onfocusout: function(n) {
                    !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
                },
                onkeyup: function(n, t) {
                    (t.which !== 9 || this.elementValue(n) !== "") && (n.name in this.submitted || n === this.lastElement) && this.element(n)
                },
                onclick: function(n) {
                    n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
                },
                highlight: function(t, i, r) {
                    t.type === "radio" ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
                },
                unhighlight: function(t, i, r) {
                    t.type === "radio" ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
                }
            },
            setDefaults: function(t) {
                n.extend(n.validator.defaults, t)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: n.validator.format("Please enter no more than {0} characters."),
                minlength: n.validator.format("Please enter at least {0} characters."),
                rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
                range: n.validator.format("Please enter a value between {0} and {1}."),
                max: n.validator.format("Please enter a value less than or equal to {0}."),
                min: n.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function i(t) {
                        var i = n.data(this[0].form, "validator"),
                            r = "on" + t.type.replace(/^validate/, "");
                        i.settings[r] && i.settings[r].call(i, this[0], t)
                    }
                    var r, t;
                    this.labelContainer = n(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm), this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset(), r = this.groups = {}, n.each(this.settings.groups, function(t, i) {
                        typeof i == "string" && (i = i.split(/\s/)), n.each(i, function(n, i) {
                            r[i] = t
                        })
                    }), t = this.settings.rules, n.each(t, function(i, r) {
                        t[i] = n.validator.normalizeRule(r)
                    }), n(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", i).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", i), this.settings.invalidHandler && n(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), n.extend(this.submitted, this.errorMap), this.invalid = n.extend({}, this.errorMap), this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++) this.check(t[n]);
                    return this.valid()
                },
                element: function(t) {
                    t = this.validationTargetFor(this.clean(t)), this.lastElement = t, this.prepareElement(t), this.currentElements = n(t);
                    var i = this.check(t) !== !1;
                    return i ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
                },
                showErrors: function(t) {
                    if (t) {
                        n.extend(this.errorMap, t), this.errorList = [];
                        for (var i in t) this.errorList.push({
                            message: t[i],
                            element: this.findByName(i)[0]
                        });
                        this.successList = n.grep(this.successList, function(n) {
                            return !(n.name in t)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    n.fn.resetForm && n(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(n) {
                    var t = 0,
                        i;
                    for (i in n) t++;
                    return t
                },
                hideErrors: function() {
                    this.addWrapper(this.toHide).hide()
                },
                valid: function() {
                    return this.size() === 0
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
                },
                findLastActive: function() {
                    var t = this.lastActive;
                    return t && n.grep(this.errorList, function(n) {
                        return n.element.name === t.name
                    }).length === 1 && t
                },
                elements: function() {
                    var t = this,
                        i = {};
                    return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                        return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !t.objectLength(n(this).rules()) ? !1 : (i[this.name] = !0, !0)
                    })
                },
                clean: function(t) {
                    return n(t)[0]
                },
                errors: function() {
                    var t = this.settings.errorClass.replace(" ", ".");
                    return n(this.settings.errorElement + "." + t, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = n([]), this.toHide = n([]), this.currentElements = n([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(n) {
                    this.reset(), this.toHide = this.errorsFor(n)
                },
                elementValue: function(t) {
                    var r = n(t).attr("type"),
                        i = n(t).val();
                    return r === "radio" || r === "checkbox" ? n("input[name='" + n(t).attr("name") + "']:checked").val() : typeof i == "string" ? i.replace(/\r/g, "") : i
                },
                check: function(t) {
                    var r, u;
                    t = this.validationTargetFor(this.clean(t));
                    var f = n(t).rules(),
                        e = !1,
                        o = this.elementValue(t),
                        i;
                    for (r in f) {
                        u = {
                            method: r,
                            parameters: f[r]
                        };
                        try {
                            if (i = n.validator.methods[r].call(this, o, t, u.parameters), i === "dependency-mismatch") {
                                e = !0;
                                continue
                            }
                            if (e = !1, i === "pending") {
                                this.toHide = this.toHide.not(this.errorsFor(t));
                                return
                            }
                            if (!i) return this.formatAndAdd(t, u), !1
                        } catch (s) {
                            throw this.settings.debug && window.console && console.log("Exception occured when checking element " + t.id + ", check the '" + u.method + "' method.", s), s;
                        }
                    }
                    if (!e) return this.objectLength(f) && this.successList.push(t), !0
                },
                customDataMessage: function(t, i) {
                    return n(t).data("msg-" + i.toLowerCase()) || t.attributes && n(t).attr("data-msg-" + i.toLowerCase())
                },
                customMessage: function(n, t) {
                    var i = this.settings.messages[n];
                    return i && (i.constructor === String ? i : i[t])
                },
                findDefined: function() {
                    for (var n = 0; n < arguments.length; n++)
                        if (arguments[n] !== undefined) return arguments[n];
                    return undefined
                },
                defaultMessage: function(t, i) {
                    return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), !this.settings.ignoreTitle && t.title || undefined, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
                },
                formatAndAdd: function(t, i) {
                    var r = this.defaultMessage(t, i.method),
                        u = /\$?\{(\d+)\}/g;
                    typeof r == "function" ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters)), this.errorList.push({
                        message: r,
                        element: t
                    }), this.errorMap[t.name] = r, this.submitted[t.name] = r
                },
                addWrapper: function(n) {
                    return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))), n
                },
                defaultShowErrors: function() {
                    for (var i, t, n = 0; this.errorList[n]; n++) t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                    if (this.settings.unhighlight)
                        for (n = 0, i = this.validElements(); i[n]; n++) this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return n(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(t, i) {
                    var r = this.errorsFor(t);
                    r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = n("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, n(t)) : r.insertAfter(t))), !i && this.settings.success && (r.text(""), typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r, t)), this.toShow = this.toShow.add(r)
                },
                errorsFor: function(t) {
                    var i = this.idOrName(t);
                    return this.errors().filter(function() {
                        return n(this).attr("for") === i
                    })
                },
                idOrName: function(n) {
                    return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
                },
                validationTargetFor: function(n) {
                    return this.checkable(n) && (n = this.findByName(n.name).not(this.settings.ignore)[0]), n
                },
                checkable: function(n) {
                    return /radio|checkbox/i.test(n.type)
                },
                findByName: function(t) {
                    return n(this.currentForm).find("[name='" + t + "']")
                },
                getLength: function(t, i) {
                    switch (i.nodeName.toLowerCase()) {
                        case "select":
                            return n("option:selected", i).length;
                        case "input":
                            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                    }
                    return t.length
                },
                depend: function(n, t) {
                    return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
                },
                dependTypes: {
                    boolean: function(n) {
                        return n
                    },
                    string: function(t, i) {
                        return !!n(t, i.form).length
                    },
                    "function": function(n, t) {
                        return n(t)
                    }
                },
                optional: function(t) {
                    var i = this.elementValue(t);
                    return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
                },
                startRequest: function(n) {
                    this.pending[n.name] || (this.pendingRequest++, this.pending[n.name] = !0)
                },
                stopRequest: function(t, i) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], i && this.pendingRequest === 0 && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && this.pendingRequest === 0 && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(t) {
                    return n.data(t, "previousValue") || n.data(t, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(t, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(t, i) {
                t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
            },
            classRules: function(t) {
                var i = {},
                    r = n(t).attr("class");
                return r && n.each(r.split(" "), function() {
                    this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
                }), i
            },
            attributeRules: function(t) {
                var u = {},
                    f = n(t),
                    r, i;
                for (r in n.validator.methods) r === "required" ? (i = f.get(0).getAttribute(r), i === "" && (i = !0), i = !!i) : i = f.attr(r), i ? u[r] = i : f[0].getAttribute("type") === r && (u[r] = !0);
                return u.maxlength && /-1|2147483647|524288/.test(u.maxlength) && delete u.maxlength, u
            },
            dataRules: function(t) {
                var i, r, u = {},
                    f = n(t);
                for (i in n.validator.methods) r = f.data("rule-" + i.toLowerCase()), r !== undefined && (u[i] = r);
                return u
            },
            staticRules: function(t) {
                var i = {},
                    r = n.data(t.form, "validator");
                return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}), i
            },
            normalizeRules: function(t, i) {
                return n.each(t, function(r, u) {
                    if (u === !1) {
                        delete t[r];
                        return
                    }
                    if (u.param || u.depends) {
                        var f = !0;
                        switch (typeof u.depends) {
                            case "string":
                                f = !!n(u.depends, i.form).length;
                                break;
                            case "function":
                                f = u.depends.call(i, i)
                        }
                        f ? t[r] = u.param !== undefined ? u.param : !0 : delete t[r]
                    }
                }), n.each(t, function(r, u) {
                    t[r] = n.isFunction(u) ? u(i) : u
                }), n.each(["minlength", "maxlength"], function() {
                    t[this] && (t[this] = Number(t[this]))
                }), n.each(["rangelength"], function() {
                    var i;
                    t[this] && (n.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : typeof t[this] == "string" && (i = t[this].split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
                }), n.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
            },
            normalizeRule: function(t) {
                if (typeof t == "string") {
                    var i = {};
                    n.each(t.split(/\s/), function() {
                        i[this] = !0
                    }), t = i
                }
                return t
            },
            addMethod: function(t, i, r) {
                n.validator.methods[t] = i, n.validator.messages[t] = r !== undefined ? r : n.validator.messages[t], i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
            },
            methods: {
                required: function(t, i, r) {
                    if (!this.depend(r, i)) return "dependency-mismatch";
                    if (i.nodeName.toLowerCase() === "select") {
                        var u = n(i).val();
                        return u && u.length > 0
                    }
                    return this.checkable(i) ? this.getLength(t, i) > 0 : n.trim(t).length > 0
                },
                remote: function(t, i, r) {
                    var f, u, e;
                    return this.optional(i) ? "dependency-mismatch" : (f = this.previousValue(i), this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), f.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = f.message, r = typeof r == "string" && {
                        url: r
                    } || r, f.old === t) ? f.valid : (f.old = t, u = this, this.startRequest(i), e = {}, e[i.name] = t, n.ajax(n.extend(!0, {
                        url: r,
                        mode: "abort",
                        port: "validate" + i.name,
                        dataType: "json",
                        data: e,
                        success: function(r) {
                            var e, h, s, o;
                            u.settings.messages[i.name].remote = f.originalMessage, e = r === !0 || r === "true", e ? (h = u.formSubmitted, u.prepareElement(i), u.formSubmitted = h, u.successList.push(i), delete u.invalid[i.name], u.showErrors()) : (s = {}, o = r || u.defaultMessage(i, "remote"), s[i.name] = f.message = n.isFunction(o) ? o(t) : o, u.invalid[i.name] = !0, u.showErrors(s)), f.valid = e, u.stopRequest(i, e)
                        }
                    }, r)), "pending")
                },
                minlength: function(t, i, r) {
                    var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                    return this.optional(i) || u >= r
                },
                maxlength: function(t, i, r) {
                    var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                    return this.optional(i) || u <= r
                },
                rangelength: function(t, i, r) {
                    var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                    return this.optional(i) || u >= r[0] && u <= r[1]
                },
                min: function(n, t, i) {
                    return this.optional(t) || n >= i
                },
                max: function(n, t, i) {
                    return this.optional(t) || n <= i
                },
                range: function(n, t, i) {
                    return this.optional(t) || n >= i[0] && n <= i[1]
                },
                email: function(n, t) {
                    return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(n)
                },
                url: function(n, t) {
                    return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
                },
                date: function(n, t) {
                    return this.optional(t) || !/Invalid|NaN/.test(new Date(n).toString())
                },
                dateISO: function(n, t) {
                    return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(n)
                },
                number: function(n, t) {
                    return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
                },
                digits: function(n, t) {
                    return this.optional(t) || /^\d+$/.test(n)
                },
                creditcard: function(n, t) {
                    var r, e;
                    if (this.optional(t)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(n)) return !1;
                    var f = 0,
                        i = 0,
                        u = !1;
                    for (n = n.replace(/\D/g, ""), r = n.length - 1; r >= 0; r--) e = n.charAt(r), i = parseInt(e, 10), u && (i *= 2) > 9 && (i -= 9), f += i, u = !u;
                    return f % 10 == 0
                },
                equalTo: function(t, i, r) {
                    var u = n(r);
                    return this.settings.onfocusout && u.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        n(i).valid()
                    }), t === u.val()
                }
            }
        }), n.format = n.validator.format
    }(jQuery), function(n) {
        var t = {},
            i;
        n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
            var u = n.port;
            n.mode === "abort" && (t[u] && t[u].abort(), t[u] = r)
        }) : (i = n.ajax, n.ajax = function(r) {
            var f = ("mode" in r ? r : n.ajaxSettings).mode,
                u = ("port" in r ? r : n.ajaxSettings).port;
            return f === "abort" ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments)) : i.apply(this, arguments)
        })
    }(jQuery), function(n) {
        n.extend(n.fn, {
            validateDelegate: function(t, i, r) {
                return this.bind(i, function(i) {
                    var u = n(i.target);
                    if (u.is(t)) return r.apply(u, arguments)
                })
            }
        })
    }(jQuery), function(n) {
        function i(n, t, i) {
            n.rules[t] = i, n.message && (n.messages[t] = n.message)
        }

        function h(n) {
            return n.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
        }

        function f(n) {
            return n.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
        }

        function e(n) {
            return n.substr(0, n.lastIndexOf(".") + 1)
        }

        function o(n, t) {
            return n.indexOf("*.") === 0 && (n = n.replace("*.", t)), n
        }

        function c(t, i) {
            var r = n(this).find("[data-valmsg-for='" + f(i[0].name) + "']"),
                u = r.attr("data-valmsg-replace"),
                e = u ? n.parseJSON(u) !== !1 : null;
            r.removeClass("field-validation-valid").addClass("field-validation-error"), t.data("unobtrusiveContainer", r), e ? (r.empty(), t.removeClass("input-validation-error").appendTo(r)) : t.hide()
        }

        function l(t, i) {
            var u = n(this).find("[data-valmsg-summary=true]"),
                r = u.find("ul");
            r && r.length && i.errorList.length && (r.empty(), u.addClass("validation-summary-errors").removeClass("validation-summary-valid"), n.each(i.errorList, function() {
                n("<li />").html(this.message).appendTo(r)
            }))
        }

        function a(t) {
            var i = t.data("unobtrusiveContainer"),
                r = i.attr("data-valmsg-replace"),
                u = r ? n.parseJSON(r) : null;
            i && (i.addClass("field-validation-valid").removeClass("field-validation-error"), t.removeData("unobtrusiveContainer"), u && i.empty())
        }

        function v() {
            var t = n(this);
            t.data("validator").resetForm(), t.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors"), t.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
        }

        function s(t) {
            var i = n(t),
                r = i.data(u),
                f = n.proxy(v, t);
            return r || (r = {
                options: {
                    errorClass: "input-validation-error",
                    errorElement: "span",
                    errorPlacement: n.proxy(c, t),
                    invalidHandler: n.proxy(l, t),
                    messages: {},
                    rules: {},
                    success: n.proxy(a, t)
                },
                attachValidation: function() {
                    i.unbind("reset." + u, f).bind("reset." + u, f).validate(this.options)
                },
                validate: function() {
                    return i.validate(), i.valid()
                }
            }, i.data(u, r)), r
        }
        var r = n.validator,
            t, u = "unobtrusiveValidation";
        r.unobtrusive = {
            adapters: [],
            parseElement: function(t, i) {
                var u = n(t),
                    f = u.parents("form")[0],
                    r, e, o;
                f && (r = s(f), r.options.rules[t.name] = e = {}, r.options.messages[t.name] = o = {}, n.each(this.adapters, function() {
                    var i = "data-val-" + this.name,
                        r = u.attr(i),
                        s = {};
                    r !== undefined && (i += "-", n.each(this.params, function() {
                        s[this] = u.attr(i + this)
                    }), this.adapt({
                        element: t,
                        form: f,
                        message: r,
                        params: s,
                        rules: e,
                        messages: o
                    }))
                }), n.extend(e, {
                    __dummy__: !0
                }), i || r.attachValidation())
            },
            parse: function(t) {
                var i = n(t).parents("form").andSelf().add(n(t).find("form")).filter("form");
                n(t).find(":input[data-val=true]").each(function() {
                    r.unobtrusive.parseElement(this, !0)
                }), i.each(function() {
                    var n = s(this);
                    n && n.attachValidation()
                })
            }
        }, t = r.unobtrusive.adapters, t.add = function(n, t, i) {
            return i || (i = t, t = []), this.push({
                name: n,
                params: t,
                adapt: i
            }), this
        }, t.addBool = function(n, t) {
            return this.add(n, function(r) {
                i(r, t || n, !0)
            })
        }, t.addMinMax = function(n, t, r, u, f, e) {
            return this.add(n, [f || "min", e || "max"], function(n) {
                var f = n.params.min,
                    e = n.params.max;
                f && e ? i(n, u, [f, e]) : f ? i(n, t, f) : e && i(n, r, e)
            })
        }, t.addSingleVal = function(n, t, r) {
            return this.add(n, [t || "val"], function(u) {
                i(u, r || n, u.params[t])
            })
        }, r.addMethod("__dummy__", function() {
            return !0
        }), r.addMethod("regex", function(n, t, i) {
            var r;
            return this.optional(t) ? !0 : (r = new RegExp(i).exec(n), r && r.index === 0 && r[0].length === n.length)
        }), r.addMethod("nonalphamin", function(n, t, i) {
            var r;
            return i && (r = n.match(/\W/g), r = r && r.length >= i), r
        }), t.addSingleVal("accept", "exts").addSingleVal("regex", "pattern"), t.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url"), t.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range"), t.add("equalto", ["other"], function(t) {
            var r = e(t.element.name),
                u = t.params.other,
                s = o(u, r),
                h = n(t.form).find(":input[name='" + f(s) + "']")[0];
            i(t, "equalTo", h)
        }), t.add("required", function(n) {
            (n.element.tagName.toUpperCase() !== "INPUT" || n.element.type.toUpperCase() !== "CHECKBOX") && i(n, "required", !0)
        }), t.add("remote", ["url", "type", "additionalfields"], function(t) {
            var r = {
                    url: t.params.url,
                    type: t.params.type || "GET",
                    data: {}
                },
                u = e(t.element.name);
            n.each(h(t.params.additionalfields || t.element.name), function(i, e) {
                var s = o(e, u);
                r.data[s] = function() {
                    return n(t.form).find(":input[name='" + f(s) + "']").val()
                }
            }), i(t, "remote", r)
        }), t.add("password", ["min", "nonalphamin", "regex"], function(n) {
            n.params.min && i(n, "minlength", n.params.min), n.params.nonalphamin && i(n, "nonalphamin", n.params.nonalphamin), n.params.regex && i(n, "regex", n.params.regex)
        }), n(function() {
            r.unobtrusive.parse(document)
        })
    }(jQuery), function(n) {
        function nt() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function dt(n, t) {
            return function(i) {
                return u(n.call(this, i), t)
            }
        }

        function tr(n, t) {
            return function(i) {
                return this.lang().ordinal(n.call(this, i), t)
            }
        }

        function gt() {}

        function tt(n) {
            fi(n), s(this, n)
        }

        function it(n) {
            var t = ti(n),
                i = t.year || 0,
                r = t.month || 0,
                u = t.week || 0,
                f = t.day || 0,
                e = t.hour || 0,
                o = t.minute || 0,
                s = t.second || 0,
                h = t.millisecond || 0;
            this._milliseconds = +h + 1e3 * s + 6e4 * o + 36e5 * e, this._days = +f + 7 * u, this._months = +r + 12 * i, this._data = {}, this._bubble()
        }

        function s(n, t) {
            for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
            return t.hasOwnProperty("toString") && (n.toString = t.toString), t.hasOwnProperty("valueOf") && (n.valueOf = t.valueOf), n
        }

        function ir(n) {
            var t, i = {};
            for (t in n) n.hasOwnProperty(t) && iu.hasOwnProperty(t) && (i[t] = n[t]);
            return i
        }

        function a(n) {
            return 0 > n ? Math.ceil(n) : Math.floor(n)
        }

        function u(n, t, i) {
            for (var r = "" + Math.abs(n), u = n >= 0; r.length < t;) r = "0" + r;
            return (u ? i ? "+" : "" : "-") + r
        }

        function rt(n, i, r, u) {
            var s, h, o = i._milliseconds,
                f = i._days,
                e = i._months;
            o && n._d.setTime(+n._d + o * r), (f || e) && (s = n.minute(), h = n.hour()), f && n.date(n.date() + f * r), e && n.month(n.month() + e * r), o && !u && t.updateOffset(n), (f || e) && (n.minute(s), n.hour(h))
        }

        function ut(n) {
            return "[object Array]" === Object.prototype.toString.call(n)
        }

        function rr(n) {
            return "[object Date]" === Object.prototype.toString.call(n) || n instanceof Date
        }

        function ni(n, t, r) {
            for (var e = Math.min(n.length, t.length), o = Math.abs(n.length - t.length), f = 0, u = 0; e > u; u++)(r && n[u] !== t[u] || !r && i(n[u]) !== i(t[u])) && f++;
            return f + o
        }

        function h(n) {
            if (n) {
                var t = n.toLowerCase().replace(/(.)s$/, "$1");
                n = gu[n] || nf[t] || t
            }
            return n
        }

        function ti(n) {
            var i, t, r = {};
            for (t in n) n.hasOwnProperty(t) && (i = h(t), i && (r[i] = n[t]));
            return r
        }

        function ur(i) {
            var r, u;
            if (0 === i.indexOf("week")) r = 7, u = "day";
            else {
                if (0 !== i.indexOf("month")) return;
                r = 12, u = "month"
            }
            t[i] = function(f, e) {
                var o, s, c = t.fn._lang[i],
                    h = [];
                if ("number" == typeof f && (e = f, f = n), s = function(n) {
                        var i = t().utc().set(u, n);
                        return c.call(t.fn._lang, i, f || "")
                    }, null != e) return s(e);
                for (o = 0; r > o; o++) h.push(s(o));
                return h
            }
        }

        function i(n) {
            var t = +n,
                i = 0;
            return 0 !== t && isFinite(t) && (i = t >= 0 ? Math.floor(t) : Math.ceil(t)), i
        }

        function ii(n, t) {
            return new Date(Date.UTC(n, t + 1, 0)).getUTCDate()
        }

        function ri(n) {
            return ui(n) ? 366 : 365
        }

        function ui(n) {
            return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
        }

        function fi(n) {
            var t;
            n._a && -2 === n._pf.overflow && (t = n._a[v] < 0 || n._a[v] > 11 ? v : n._a[c] < 1 || n._a[c] > ii(n._a[e], n._a[v]) ? c : n._a[o] < 0 || n._a[o] > 23 ? o : n._a[w] < 0 || n._a[w] > 59 ? w : n._a[b] < 0 || n._a[b] > 59 ? b : n._a[k] < 0 || n._a[k] > 999 ? k : -1, n._pf._overflowDayOfYear && (e > t || t > c) && (t = c), n._pf.overflow = t)
        }

        function ei(n) {
            return null == n._isValid && (n._isValid = !isNaN(n._d.getTime()) && n._pf.overflow < 0 && !n._pf.empty && !n._pf.invalidMonth && !n._pf.nullInput && !n._pf.invalidFormat && !n._pf.userInvalidated, n._strict && (n._isValid = n._isValid && 0 === n._pf.charsLeftOver && 0 === n._pf.unusedTokens.length)), n._isValid
        }

        function ft(n) {
            return n ? n.toLowerCase().replace("_", "-") : n
        }

        function et(n, i) {
            return i._isUTC ? t(n).zone(i._offset || 0) : t(n).local()
        }

        function fr(n, t) {
            return t.abbr = n, y[n] || (y[n] = new gt), y[n].set(t), y[n]
        }

        function er(n) {
            delete y[n]
        }

        function f(n) {
            var r, u, i, f, e = 0,
                o = function(n) {
                    if (!y[n] && yi) try {
                        require("./lang/" + n)
                    } catch (t) {}
                    return y[n]
                };
            if (!n) return t.fn._lang;
            if (!ut(n)) {
                if (u = o(n)) return u;
                n = [n]
            }
            for (; e < n.length;) {
                for (f = ft(n[e]).split("-"), r = f.length, i = ft(n[e + 1]), i = i ? i.split("-") : null; r > 0;) {
                    if (u = o(f.slice(0, r).join("-"))) return u;
                    if (i && i.length >= r && ni(f, i, !0) >= r - 1) break;
                    r--
                }
                e++
            }
            return t.fn._lang
        }

        function or(n) {
            return n.match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "")
        }

        function sr(n) {
            for (var i = n.match(pi), t = 0, r = i.length; r > t; t++) i[t] = l[i[t]] ? l[i[t]] : or(i[t]);
            return function(u) {
                var f = "";
                for (t = 0; r > t; t++) f += i[t] instanceof Function ? i[t].call(u, n) : i[t];
                return f
            }
        }

        function ot(n, t) {
            return n.isValid() ? (t = oi(t, n.lang()), kt[t] || (kt[t] = sr(t)), kt[t](n)) : n.lang().invalidDate()
        }

        function oi(n, t) {
            function r(n) {
                return t.longDateFormat(n) || n
            }
            var i = 5;
            for (g.lastIndex = 0; i >= 0 && g.test(n);) n = n.replace(g, r), g.lastIndex = 0, i -= 1;
            return n
        }

        function hr(n, t) {
            var r, i = t._strict;
            switch (n) {
                case "DDDD":
                    return ki;
                case "YYYY":
                case "GGGG":
                case "gggg":
                    return i ? yu : ou;
                case "Y":
                case "G":
                case "g":
                    return wu;
                case "YYYYYY":
                case "YYYYY":
                case "GGGGG":
                case "ggggg":
                    return i ? pu : su;
                case "S":
                    if (i) return vu;
                case "SS":
                    if (i) return bi;
                case "SSS":
                    if (i) return ki;
                case "DDD":
                    return eu;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                    return cu;
                case "a":
                case "A":
                    return f(t._l)._meridiemParse;
                case "X":
                    return au;
                case "Z":
                case "ZZ":
                    return vt;
                case "T":
                    return lu;
                case "SSSS":
                    return hu;
                case "MM":
                case "DD":
                case "YY":
                case "GG":
                case "gg":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "ww":
                case "WW":
                    return i ? bi : wi;
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                case "w":
                case "W":
                case "e":
                case "E":
                    return wi;
                default:
                    return r = new RegExp(yr(vr(n.replace("\\", "")), "i"))
            }
        }

        function si(n) {
            n = n || "";
            var r = n.match(vt) || [],
                f = r[r.length - 1] || [],
                t = (f + "").match(du) || ["-", 0, 0],
                u = +(60 * t[1]) + i(t[2]);
            return "+" === t[0] ? -u : u
        }

        function cr(n, t, r) {
            var s, u = r._a;
            switch (n) {
                case "M":
                case "MM":
                    null != t && (u[v] = i(t) - 1);
                    break;
                case "MMM":
                case "MMMM":
                    s = f(r._l).monthsParse(t), null != s ? u[v] = s : r._pf.invalidMonth = t;
                    break;
                case "D":
                case "DD":
                    null != t && (u[c] = i(t));
                    break;
                case "DDD":
                case "DDDD":
                    null != t && (r._dayOfYear = i(t));
                    break;
                case "YY":
                    u[e] = i(t) + (i(t) > 68 ? 1900 : 2e3);
                    break;
                case "YYYY":
                case "YYYYY":
                case "YYYYYY":
                    u[e] = i(t);
                    break;
                case "a":
                case "A":
                    r._isPm = f(r._l).isPM(t);
                    break;
                case "H":
                case "HH":
                case "h":
                case "hh":
                    u[o] = i(t);
                    break;
                case "m":
                case "mm":
                    u[w] = i(t);
                    break;
                case "s":
                case "ss":
                    u[b] = i(t);
                    break;
                case "S":
                case "SS":
                case "SSS":
                case "SSSS":
                    u[k] = i(1e3 * ("0." + t));
                    break;
                case "X":
                    r._d = new Date(1e3 * parseFloat(t));
                    break;
                case "Z":
                case "ZZ":
                    r._useUTC = !0, r._tzm = si(t);
                    break;
                case "w":
                case "ww":
                case "W":
                case "WW":
                case "d":
                case "dd":
                case "ddd":
                case "dddd":
                case "e":
                case "E":
                    n = n.substr(0, 1);
                case "gg":
                case "gggg":
                case "GG":
                case "GGGG":
                case "GGGGG":
                    n = n.substr(0, 2), t && (r._w = r._w || {}, r._w[n] = t)
            }
        }

        function st(n) {
            var r, a, y, p, b, u, l, s, k, d, h = [];
            if (!n._d) {
                for (y = ar(n), n._w && null == n._a[c] && null == n._a[v] && (b = function(i) {
                        var r = parseInt(i, 10);
                        return i ? i.length < 3 ? r > 68 ? 1900 + r : 2e3 + r : r : null == n._a[e] ? t().weekYear() : n._a[e]
                    }, u = n._w, null != u.GG || null != u.W || null != u.E ? l = ci(b(u.GG), u.W || 1, u.E, 4, 1) : (s = f(n._l), k = null != u.d ? hi(u.d, s) : null != u.e ? parseInt(u.e, 10) + s._week.dow : 0, d = parseInt(u.w, 10) || 1, null != u.d && k < s._week.dow && d++, l = ci(b(u.gg), d, k, s._week.doy, s._week.dow)), n._a[e] = l.year, n._dayOfYear = l.dayOfYear), n._dayOfYear && (p = null == n._a[e] ? y[e] : n._a[e], n._dayOfYear > ri(p) && (n._pf._overflowDayOfYear = !0), a = ct(p, 0, n._dayOfYear), n._a[v] = a.getUTCMonth(), n._a[c] = a.getUTCDate()), r = 0; 3 > r && null == n._a[r]; ++r) n._a[r] = h[r] = y[r];
                for (; 7 > r; r++) n._a[r] = h[r] = null == n._a[r] ? 2 === r ? 1 : 0 : n._a[r];
                h[o] += i((n._tzm || 0) / 60), h[w] += i((n._tzm || 0) % 60), n._d = (n._useUTC ? ct : kr).apply(null, h)
            }
        }

        function lr(n) {
            var t;
            n._d || (t = ti(n._i), n._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond], st(n))
        }

        function ar(n) {
            var t = new Date;
            return n._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
        }

        function ht(n) {
            n._a = [], n._pf.empty = !0;
            for (var t, r, e, c = f(n._l), i = "" + n._i, a = i.length, h = 0, s = oi(n._f, c).match(pi) || [], u = 0; u < s.length; u++) r = s[u], t = (i.match(hr(r, n)) || [])[0], t && (e = i.substr(0, i.indexOf(t)), e.length > 0 && n._pf.unusedInput.push(e), i = i.slice(i.indexOf(t) + t.length), h += t.length), l[r] ? (t ? n._pf.empty = !1 : n._pf.unusedTokens.push(r), cr(r, t, n)) : n._strict && !t && n._pf.unusedTokens.push(r);
            n._pf.charsLeftOver = a - h, i.length > 0 && n._pf.unusedInput.push(i), n._isPm && n._a[o] < 12 && (n._a[o] += 12), n._isPm === !1 && 12 === n._a[o] && (n._a[o] = 0), st(n), fi(n)
        }

        function vr(n) {
            return n.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(n, t, i, r, u) {
                return t || i || r || u
            })
        }

        function yr(n) {
            return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function pr(n) {
            var t, f, u, r, i;
            if (0 === n._f.length) return n._pf.invalidFormat = !0, n._d = new Date(NaN), void 0;
            for (r = 0; r < n._f.length; r++) i = 0, t = s({}, n), t._pf = nt(), t._f = n._f[r], ht(t), ei(t) && (i += t._pf.charsLeftOver, i += 10 * t._pf.unusedTokens.length, t._pf.score = i, (null == u || u > i) && (u = i, f = t));
            s(n, f || t)
        }

        function wr(n) {
            var t, r, i = n._i,
                u = bu.exec(i);
            if (u) {
                for (n._pf.iso = !0, t = 0, r = yt.length; r > t; t++)
                    if (yt[t][1].exec(i)) {
                        n._f = yt[t][0] + (u[6] || " ");
                        break
                    }
                for (t = 0, r = pt.length; r > t; t++)
                    if (pt[t][1].exec(i)) {
                        n._f += pt[t][0];
                        break
                    }
                i.match(vt) && (n._f += "Z"), ht(n)
            } else n._d = new Date(i)
        }

        function br(t) {
            var i = t._i,
                r = ru.exec(i);
            i === n ? t._d = new Date : r ? t._d = new Date(+r[1]) : "string" == typeof i ? wr(t) : ut(i) ? (t._a = i.slice(0), st(t)) : rr(i) ? t._d = new Date(+i) : "object" == typeof i ? lr(t) : t._d = new Date(i)
        }

        function kr(n, t, i, r, u, f, e) {
            var o = new Date(n, t, i, r, u, f, e);
            return 1970 > n && o.setFullYear(n), o
        }

        function ct(n) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return 1970 > n && t.setUTCFullYear(n), t
        }

        function hi(n, t) {
            if ("string" == typeof n)
                if (isNaN(n)) {
                    if (n = t.weekdaysParse(n), "number" != typeof n) return null
                } else n = parseInt(n, 10);
            return n
        }

        function dr(n, t, i, r, u) {
            return u.relativeTime(t || 1, !!i, n, r)
        }

        function gr(n, t, i) {
            var o = p(Math.abs(n) / 1e3),
                u = p(o / 60),
                f = p(u / 60),
                r = p(f / 24),
                s = p(r / 365),
                e = 45 > o && ["s", o] || 1 === u && ["m"] || 45 > u && ["mm", u] || 1 === f && ["h"] || 22 > f && ["hh", f] || 1 === r && ["d"] || 25 >= r && ["dd", r] || 45 >= r && ["M"] || 345 > r && ["MM", p(r / 30)] || 1 === s && ["y"] || ["yy", s];
            return e[2] = t, e[3] = n > 0, e[4] = i, dr.apply({}, e)
        }

        function d(n, i, r) {
            var f, e = r - i,
                u = r - n.day();
            return u > e && (u -= 7), e - 7 > u && (u += 7), f = t(n).add("d", u), {
                week: Math.ceil(f.dayOfYear() / 7),
                year: f.year()
            }
        }

        function ci(n, t, i, r, u) {
            var o, f, e = ct(n, 0, 1).getUTCDay();
            return i = null != i ? i : u, o = u - e + (e > r ? 7 : 0) - (u > e ? 7 : 0), f = 7 * (t - 1) + (i - u) + o + 1, {
                year: f > 0 ? n : n - 1,
                dayOfYear: f > 0 ? f : ri(n - 1) + f
            }
        }

        function li(n) {
            var i = n._i,
                r = n._f;
            return null === i ? t.invalid({
                nullInput: !0
            }) : ("string" == typeof i && (n._i = i = f().preparse(i)), t.isMoment(i) ? (n = ir(i), n._d = new Date(+i._d)) : r ? ut(r) ? pr(n) : ht(n) : br(n), new tt(n))
        }

        function ai(n, i) {
            t.fn[n] = t.fn[n + "s"] = function(n) {
                var r = this._isUTC ? "UTC" : "";
                return null != n ? (this._d["set" + r + i](n), t.updateOffset(this), this) : this._d["get" + r + i]()
            }
        }

        function nu(n) {
            t.duration.fn[n] = function() {
                return this._data[n]
            }
        }

        function vi(n, i) {
            t.duration.fn["as" + n] = function() {
                return +this / i
            }
        }

        function lt(n) {
            var i = !1,
                r = t;
            "undefined" == typeof ender && (n ? (at.moment = function() {
                return !i && console && console.warn && (i = !0, console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")), r.apply(null, arguments)
            }, s(at.moment, r)) : at.moment = t)
        }
        for (var t, r, tu = "2.5.1", at = this, p = Math.round, e = 0, v = 1, c = 2, o = 3, w = 4, b = 5, k = 6, y = {}, iu = {
                _isAMomentObject: null,
                _i: null,
                _f: null,
                _l: null,
                _strict: null,
                _isUTC: null,
                _offset: null,
                _pf: null,
                _lang: null
            }, yi = "undefined" != typeof module && module.exports && "undefined" != typeof require, ru = /^\/?Date\((\-?\d+)/i, uu = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, fu = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, pi = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, g = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, wi = /\d\d?/, eu = /\d{1,3}/, ou = /\d{1,4}/, su = /[+\-]?\d{1,6}/, hu = /\d+/, cu = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, vt = /Z|[\+\-]\d\d:?\d\d/gi, lu = /T/i, au = /[\+\-]?\d+(\.\d{1,3})?/, vu = /\d/, bi = /\d\d/, ki = /\d{3}/, yu = /\d{4}/, pu = /[+-]?\d{6}/, wu = /[+-]?\d+/, bu = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ku = "YYYY-MM-DDTHH:mm:ssZ", yt = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                ["YYYY-DDD", /\d{4}-\d{3}/]
            ], pt = [
                ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
            ], du = /([\+\-]|\d\d)/gi, wt = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), bt = {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            }, gu = {
                ms: "millisecond",
                s: "second",
                m: "minute",
                h: "hour",
                d: "day",
                D: "date",
                w: "week",
                W: "isoWeek",
                M: "month",
                y: "year",
                DDD: "dayOfYear",
                e: "weekday",
                E: "isoWeekday",
                gg: "weekYear",
                GG: "isoWeekYear"
            }, nf = {
                dayofyear: "dayOfYear",
                isoweekday: "isoWeekday",
                isoweek: "isoWeek",
                weekyear: "weekYear",
                isoweekyear: "isoWeekYear"
            }, kt = {}, di = "DDD w W M D d".split(" "), gi = "M D H h m s w W".split(" "), l = {
                M: function() {
                    return this.month() + 1
                },
                MMM: function(n) {
                    return this.lang().monthsShort(this, n)
                },
                MMMM: function(n) {
                    return this.lang().months(this, n)
                },
                D: function() {
                    return this.date()
                },
                DDD: function() {
                    return this.dayOfYear()
                },
                d: function() {
                    return this.day()
                },
                dd: function(n) {
                    return this.lang().weekdaysMin(this, n)
                },
                ddd: function(n) {
                    return this.lang().weekdaysShort(this, n)
                },
                dddd: function(n) {
                    return this.lang().weekdays(this, n)
                },
                w: function() {
                    return this.week()
                },
                W: function() {
                    return this.isoWeek()
                },
                YY: function() {
                    return u(this.year() % 100, 2)
                },
                YYYY: function() {
                    return u(this.year(), 4)
                },
                YYYYY: function() {
                    return u(this.year(), 5)
                },
                YYYYYY: function() {
                    var n = this.year(),
                        t = n >= 0 ? "+" : "-";
                    return t + u(Math.abs(n), 6)
                },
                gg: function() {
                    return u(this.weekYear() % 100, 2)
                },
                gggg: function() {
                    return u(this.weekYear(), 4)
                },
                ggggg: function() {
                    return u(this.weekYear(), 5)
                },
                GG: function() {
                    return u(this.isoWeekYear() % 100, 2)
                },
                GGGG: function() {
                    return u(this.isoWeekYear(), 4)
                },
                GGGGG: function() {
                    return u(this.isoWeekYear(), 5)
                },
                e: function() {
                    return this.weekday()
                },
                E: function() {
                    return this.isoWeekday()
                },
                a: function() {
                    return this.lang().meridiem(this.hours(), this.minutes(), !0)
                },
                A: function() {
                    return this.lang().meridiem(this.hours(), this.minutes(), !1)
                },
                H: function() {
                    return this.hours()
                },
                h: function() {
                    return this.hours() % 12 || 12
                },
                m: function() {
                    return this.minutes()
                },
                s: function() {
                    return this.seconds()
                },
                S: function() {
                    return i(this.milliseconds() / 100)
                },
                SS: function() {
                    return u(i(this.milliseconds() / 10), 2)
                },
                SSS: function() {
                    return u(this.milliseconds(), 3)
                },
                SSSS: function() {
                    return u(this.milliseconds(), 3)
                },
                Z: function() {
                    var n = -this.zone(),
                        t = "+";
                    return 0 > n && (n = -n, t = "-"), t + u(i(n / 60), 2) + ":" + u(i(n) % 60, 2)
                },
                ZZ: function() {
                    var n = -this.zone(),
                        t = "+";
                    return 0 > n && (n = -n, t = "-"), t + u(i(n / 60), 2) + u(i(n) % 60, 2)
                },
                z: function() {
                    return this.zoneAbbr()
                },
                zz: function() {
                    return this.zoneName()
                },
                X: function() {
                    return this.unix()
                },
                Q: function() {
                    return this.quarter()
                }
            }, nr = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; di.length;) r = di.pop(), l[r + "o"] = tr(l[r], r);
        for (; gi.length;) r = gi.pop(), l[r + r] = dt(l[r], 2);
        for (l.DDDD = dt(l.DDD, 3), s(gt.prototype, {
                set: function(n) {
                    var t, i;
                    for (i in n) t = n[i], "function" == typeof t ? this[i] = t : this["_" + i] = t
                },
                _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                months: function(n) {
                    return this._months[n.month()]
                },
                _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                monthsShort: function(n) {
                    return this._monthsShort[n.month()]
                },
                monthsParse: function(n) {
                    var i, r, u;
                    for (this._monthsParse || (this._monthsParse = []), i = 0; 12 > i; i++)
                        if (this._monthsParse[i] || (r = t.utc([2e3, i]), u = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(u.replace(".", ""), "i")), this._monthsParse[i].test(n)) return i
                },
                _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdays: function(n) {
                    return this._weekdays[n.day()]
                },
                _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysShort: function(n) {
                    return this._weekdaysShort[n.day()]
                },
                _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                weekdaysMin: function(n) {
                    return this._weekdaysMin[n.day()]
                },
                weekdaysParse: function(n) {
                    var i, r, u;
                    for (this._weekdaysParse || (this._weekdaysParse = []), i = 0; 7 > i; i++)
                        if (this._weekdaysParse[i] || (r = t([2e3, 1]).day(i), u = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(u.replace(".", ""), "i")), this._weekdaysParse[i].test(n)) return i
                },
                _longDateFormat: {
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D YYYY",
                    LLL: "MMMM D YYYY LT",
                    LLLL: "dddd, MMMM D YYYY LT"
                },
                longDateFormat: function(n) {
                    var t = this._longDateFormat[n];
                    return !t && this._longDateFormat[n.toUpperCase()] && (t = this._longDateFormat[n.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(n) {
                        return n.slice(1)
                    }), this._longDateFormat[n] = t), t
                },
                isPM: function(n) {
                    return "p" === (n + "").toLowerCase().charAt(0)
                },
                _meridiemParse: /[ap]\.?m?\.?/i,
                meridiem: function(n, t, i) {
                    return n > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
                },
                _calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                calendar: function(n, t) {
                    var i = this._calendar[n];
                    return "function" == typeof i ? i.apply(t) : i
                },
                _relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                relativeTime: function(n, t, i, r) {
                    var u = this._relativeTime[i];
                    return "function" == typeof u ? u(n, t, i, r) : u.replace(/%d/i, n)
                },
                pastFuture: function(n, t) {
                    var i = this._relativeTime[n > 0 ? "future" : "past"];
                    return "function" == typeof i ? i(t) : i.replace(/%s/i, t)
                },
                ordinal: function(n) {
                    return this._ordinal.replace("%d", n)
                },
                _ordinal: "%d",
                preparse: function(n) {
                    return n
                },
                postformat: function(n) {
                    return n
                },
                week: function(n) {
                    return d(n, this._week.dow, this._week.doy).week
                },
                _week: {
                    dow: 0,
                    doy: 6
                },
                _invalidDate: "Invalid date",
                invalidDate: function() {
                    return this._invalidDate
                }
            }), t = function(t, i, r, u) {
                var f;
                return "boolean" == typeof r && (u = r, r = n), f = {}, f._isAMomentObject = !0, f._i = t, f._f = i, f._l = r, f._strict = u, f._isUTC = !1, f._pf = nt(), li(f)
            }, t.utc = function(t, i, r, u) {
                var f;
                return "boolean" == typeof r && (u = r, r = n), f = {}, f._isAMomentObject = !0, f._useUTC = !0, f._isUTC = !0, f._l = r, f._i = t, f._f = i, f._strict = u, f._pf = nt(), li(f).utc()
            }, t.unix = function(n) {
                return t(1e3 * n)
            }, t.duration = function(n, r) {
                var f, h, e, s = n,
                    u = null;
                return t.isDuration(n) ? s = {
                    ms: n._milliseconds,
                    d: n._days,
                    M: n._months
                } : "number" == typeof n ? (s = {}, r ? s[r] = n : s.milliseconds = n) : (u = uu.exec(n)) ? (f = "-" === u[1] ? -1 : 1, s = {
                    y: 0,
                    d: i(u[c]) * f,
                    h: i(u[o]) * f,
                    m: i(u[w]) * f,
                    s: i(u[b]) * f,
                    ms: i(u[k]) * f
                }) : (u = fu.exec(n)) && (f = "-" === u[1] ? -1 : 1, e = function(n) {
                    var t = n && parseFloat(n.replace(",", "."));
                    return (isNaN(t) ? 0 : t) * f
                }, s = {
                    y: e(u[2]),
                    M: e(u[3]),
                    d: e(u[4]),
                    h: e(u[5]),
                    m: e(u[6]),
                    s: e(u[7]),
                    w: e(u[8])
                }), h = new it(s), t.isDuration(n) && n.hasOwnProperty("_lang") && (h._lang = n._lang), h
            }, t.version = tu, t.defaultFormat = ku, t.updateOffset = function() {}, t.lang = function(n, i) {
                var r;
                return n ? (i ? fr(ft(n), i) : null === i ? (er(n), n = "en") : y[n] || f(n), r = t.duration.fn._lang = t.fn._lang = f(n), r._abbr) : t.fn._lang._abbr
            }, t.langData = function(n) {
                return n && n._lang && n._lang._abbr && (n = n._lang._abbr), f(n)
            }, t.isMoment = function(n) {
                return n instanceof tt || null != n && n.hasOwnProperty("_isAMomentObject")
            }, t.isDuration = function(n) {
                return n instanceof it
            }, r = nr.length - 1; r >= 0; --r) ur(nr[r]);
        for (t.normalizeUnits = function(n) {
                return h(n)
            }, t.invalid = function(n) {
                var i = t.utc(NaN);
                return null != n ? s(i._pf, n) : i._pf.userInvalidated = !0, i
            }, t.parseZone = function(n) {
                return t(n).parseZone()
            }, s(t.fn = tt.prototype, {
                clone: function() {
                    return t(this)
                },
                valueOf: function() {
                    return +this._d + 6e4 * (this._offset || 0)
                },
                unix: function() {
                    return Math.floor(+this / 1e3)
                },
                toString: function() {
                    return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                },
                toDate: function() {
                    return this._offset ? new Date(+this) : this._d
                },
                toISOString: function() {
                    var n = t(this).utc();
                    return 0 < n.year() && n.year() <= 9999 ? ot(n, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : ot(n, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                },
                toArray: function() {
                    var n = this;
                    return [n.year(), n.month(), n.date(), n.hours(), n.minutes(), n.seconds(), n.milliseconds()]
                },
                isValid: function() {
                    return ei(this)
                },
                isDSTShifted: function() {
                    return this._a ? this.isValid() && ni(this._a, (this._isUTC ? t.utc(this._a) : t(this._a)).toArray()) > 0 : !1
                },
                parsingFlags: function() {
                    return s({}, this._pf)
                },
                invalidAt: function() {
                    return this._pf.overflow
                },
                utc: function() {
                    return this.zone(0)
                },
                local: function() {
                    return this.zone(0), this._isUTC = !1, this
                },
                format: function(n) {
                    var i = ot(this, n || t.defaultFormat);
                    return this.lang().postformat(i)
                },
                add: function(n, i) {
                    var r;
                    return r = "string" == typeof n ? t.duration(+i, n) : t.duration(n, i), rt(this, r, 1), this
                },
                subtract: function(n, i) {
                    var r;
                    return r = "string" == typeof n ? t.duration(+i, n) : t.duration(n, i), rt(this, r, -1), this
                },
                diff: function(n, i, r) {
                    var u, e, f = et(n, this),
                        o = 6e4 * (this.zone() - f.zone());
                    return i = h(i), "year" === i || "month" === i ? (u = 432e5 * (this.daysInMonth() + f.daysInMonth()), e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - t(this).startOf("month") - (f - t(f).startOf("month"))) / u, e -= 6e4 * (this.zone() - t(this).startOf("month").zone() - (f.zone() - t(f).startOf("month").zone())) / u, "year" === i && (e /= 12)) : (u = this - f, e = "second" === i ? u / 1e3 : "minute" === i ? u / 6e4 : "hour" === i ? u / 36e5 : "day" === i ? (u - o) / 864e5 : "week" === i ? (u - o) / 6048e5 : u), r ? e : a(e)
                },
                from: function(n, i) {
                    return t.duration(this.diff(n)).lang(this.lang()._abbr).humanize(!i)
                },
                fromNow: function(n) {
                    return this.from(t(), n)
                },
                calendar: function() {
                    var i = et(t(), this).startOf("day"),
                        n = this.diff(i, "days", !0),
                        r = -6 > n ? "sameElse" : -1 > n ? "lastWeek" : 0 > n ? "lastDay" : 1 > n ? "sameDay" : 2 > n ? "nextDay" : 7 > n ? "nextWeek" : "sameElse";
                    return this.format(this.lang().calendar(r, this))
                },
                isLeapYear: function() {
                    return ui(this.year())
                },
                isDST: function() {
                    return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
                },
                day: function(n) {
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != n ? (n = hi(n, this.lang()), this.add({
                        d: n - t
                    })) : t
                },
                month: function(n) {
                    var i, r = this._isUTC ? "UTC" : "";
                    return null != n ? "string" == typeof n && (n = this.lang().monthsParse(n), "number" != typeof n) ? this : (i = this.date(), this.date(1), this._d["set" + r + "Month"](n), this.date(Math.min(i, this.daysInMonth())), t.updateOffset(this), this) : this._d["get" + r + "Month"]()
                },
                startOf: function(n) {
                    switch (n = h(n)) {
                        case "year":
                            this.month(0);
                        case "month":
                            this.date(1);
                        case "week":
                        case "isoWeek":
                        case "day":
                            this.hours(0);
                        case "hour":
                            this.minutes(0);
                        case "minute":
                            this.seconds(0);
                        case "second":
                            this.milliseconds(0)
                    }
                    return "week" === n ? this.weekday(0) : "isoWeek" === n && this.isoWeekday(1), this
                },
                endOf: function(n) {
                    return n = h(n), this.startOf(n).add("isoWeek" === n ? "week" : n, 1).subtract("ms", 1)
                },
                isAfter: function(n, i) {
                    return i = "undefined" != typeof i ? i : "millisecond", +this.clone().startOf(i) > +t(n).startOf(i)
                },
                isBefore: function(n, i) {
                    return i = "undefined" != typeof i ? i : "millisecond", +this.clone().startOf(i) < +t(n).startOf(i)
                },
                isSame: function(n, t) {
                    return t = t || "ms", +this.clone().startOf(t) == +et(n, this).startOf(t)
                },
                min: function(n) {
                    return n = t.apply(null, arguments), this > n ? this : n
                },
                max: function(n) {
                    return n = t.apply(null, arguments), n > this ? this : n
                },
                zone: function(n) {
                    var i = this._offset || 0;
                    return null == n ? this._isUTC ? i : this._d.getTimezoneOffset() : ("string" == typeof n && (n = si(n)), Math.abs(n) < 16 && (n = 60 * n), this._offset = n, this._isUTC = !0, i !== n && rt(this, t.duration(i - n, "m"), 1, !0), this)
                },
                zoneAbbr: function() {
                    return this._isUTC ? "UTC" : ""
                },
                zoneName: function() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                },
                parseZone: function() {
                    return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
                },
                hasAlignedHourOffset: function(n) {
                    return n = n ? t(n).zone() : 0, (this.zone() - n) % 60 == 0
                },
                daysInMonth: function() {
                    return ii(this.year(), this.month())
                },
                dayOfYear: function(n) {
                    var i = p((t(this).startOf("day") - t(this).startOf("year")) / 864e5) + 1;
                    return null == n ? i : this.add("d", n - i)
                },
                quarter: function() {
                    return Math.ceil((this.month() + 1) / 3)
                },
                weekYear: function(n) {
                    var t = d(this, this.lang()._week.dow, this.lang()._week.doy).year;
                    return null == n ? t : this.add("y", n - t)
                },
                isoWeekYear: function(n) {
                    var t = d(this, 1, 4).year;
                    return null == n ? t : this.add("y", n - t)
                },
                week: function(n) {
                    var t = this.lang().week(this);
                    return null == n ? t : this.add("d", 7 * (n - t))
                },
                isoWeek: function(n) {
                    var t = d(this, 1, 4).week;
                    return null == n ? t : this.add("d", 7 * (n - t))
                },
                weekday: function(n) {
                    var t = (this.day() + 7 - this.lang()._week.dow) % 7;
                    return null == n ? t : this.add("d", n - t)
                },
                isoWeekday: function(n) {
                    return null == n ? this.day() || 7 : this.day(this.day() % 7 ? n : n - 7)
                },
                get: function(n) {
                    return n = h(n), this[n]()
                },
                set: function(n, t) {
                    return n = h(n), "function" == typeof this[n] && this[n](t), this
                },
                lang: function(t) {
                    return t === n ? this._lang : (this._lang = f(t), this)
                }
            }), r = 0; r < wt.length; r++) ai(wt[r].toLowerCase().replace(/s$/, ""), wt[r]);
        ai("year", "FullYear"), t.fn.days = t.fn.day, t.fn.months = t.fn.month, t.fn.weeks = t.fn.week, t.fn.isoWeeks = t.fn.isoWeek, t.fn.toJSON = t.fn.toISOString, s(t.duration.fn = it.prototype, {
            _bubble: function() {
                var t, i, r, e, o = this._milliseconds,
                    u = this._days,
                    f = this._months,
                    n = this._data;
                n.milliseconds = o % 1e3, t = a(o / 1e3), n.seconds = t % 60, i = a(t / 60), n.minutes = i % 60, r = a(i / 60), n.hours = r % 24, u += a(r / 24), n.days = u % 30, f += a(u / 30), n.months = f % 12, e = a(f / 12), n.years = e
            },
            weeks: function() {
                return a(this.days() / 7)
            },
            valueOf: function() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * i(this._months / 12)
            },
            humanize: function(n) {
                var i = +this,
                    t = gr(i, !n, this.lang());
                return n && (t = this.lang().pastFuture(i, t)), this.lang().postformat(t)
            },
            add: function(n, i) {
                var r = t.duration(n, i);
                return this._milliseconds += r._milliseconds, this._days += r._days, this._months += r._months, this._bubble(), this
            },
            subtract: function(n, i) {
                var r = t.duration(n, i);
                return this._milliseconds -= r._milliseconds, this._days -= r._days, this._months -= r._months, this._bubble(), this
            },
            get: function(n) {
                return n = h(n), this[n.toLowerCase() + "s"]()
            },
            as: function(n) {
                return n = h(n), this["as" + n.charAt(0).toUpperCase() + n.slice(1) + "s"]()
            },
            lang: t.fn.lang,
            toIsoString: function() {
                var r = Math.abs(this.years()),
                    u = Math.abs(this.months()),
                    f = Math.abs(this.days()),
                    n = Math.abs(this.hours()),
                    t = Math.abs(this.minutes()),
                    i = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (r ? r + "Y" : "") + (u ? u + "M" : "") + (f ? f + "D" : "") + (n || t || i ? "T" : "") + (n ? n + "H" : "") + (t ? t + "M" : "") + (i ? i + "S" : "") : "P0D"
            }
        });
        for (r in bt) bt.hasOwnProperty(r) && (vi(r, bt[r]), nu(r.toLowerCase()));
        vi("Weeks", 6048e5), t.duration.fn.asMonths = function() {
            return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
        }, t.lang("en", {
            ordinal: function(n) {
                var t = n % 10,
                    r = 1 === i(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return n + r
            }
        }), yi ? (module.exports = t, lt(!0)) : "function" == typeof define && define.amd ? define("moment", function(i, r, u) {
            return u.config && u.config() && u.config().noGlobal !== !0 && lt(u.config().noGlobal === n), t
        }) : lt()
    }.call(this), function() {
        function n(n) {
            return function() {
                return n
            }
        }(function(t) {
            var u = this || eval("this"),
                r = u.document,
                e = u.navigator,
                i = u.jQuery,
                f = u.JSON;
            (function(n) {
                "function" == typeof require && "object" == typeof exports && "object" == typeof module ? n(module.exports || exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n(u.ko = {})
            })(function(o) {
                function c(n, t, i, r) {
                    s.d[n] = {
                        init: function(n) {
                            return s.a.f.set(n, a, {}), {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(n, u, f, e, o) {
                            f = s.a.f.get(n, a), u = s.a.c(u()), e = !i != !u;
                            var h = !f.fb;
                            (h || t || e !== f.vb) && (h && (f.fb = s.a.Oa(s.e.childNodes(n), !0)), e ? (h || s.e.P(n, s.a.Oa(f.fb)), s.Ja(r ? r(o, u) : o, n)) : s.e.ba(n), f.vb = e)
                        }
                    }, s.g.S[n] = !1, s.e.L[n] = !0
                }

                function v(n, t, i) {
                    i && t !== s.h.n(n) && s.h.W(n, t), t !== s.h.n(n) && s.q.I(s.a.Ga, null, [n, "change"])
                }
                var s = "undefined" != typeof o ? o : {},
                    y, h, l, a;
                s.b = function(n, t) {
                        for (var i = n.split("."), r = s, u = 0; u < i.length - 1; u++) r = r[i[u]];
                        r[i[i.length - 1]] = t
                    }, s.r = function(n, t, i) {
                        n[t] = i
                    }, s.version = "2.3.0", s.b("version", s.version), s.a = function() {
                        function o(n, t) {
                            for (var i in n) n.hasOwnProperty(i) && t(i, n[i])
                        }

                        function h(n, t) {
                            if ("input" !== s.a.u(n) || !n.type || "click" != t.toLowerCase()) return !1;
                            var i = n.type;
                            return "checkbox" == i || "radio" == i
                        }
                        var c = {},
                            l = {},
                            a, n;
                        return c[e && /Firefox\/2/i.test(e.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"], c.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "), o(c, function(n, t) {
                            if (t.length)
                                for (var i = 0, r = t.length; i < r; i++) l[t[i]] = n
                        }), a = {
                            propertychange: !0
                        }, n = r && function() {
                            for (var n = 3, i = r.createElement("div"), u = i.getElementsByTagName("i"); i.innerHTML = "<!--[if gt IE " + ++n + "]><i><\/i><![endif]-->", u[0];);
                            return 4 < n ? n : t
                        }(), {
                            Ta: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                            p: function(n, t) {
                                for (var i = 0, r = n.length; i < r; i++) t(n[i])
                            },
                            k: function(n, t) {
                                if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(n, t);
                                for (var i = 0, r = n.length; i < r; i++)
                                    if (n[i] === t) return i;
                                return -1
                            },
                            La: function(n, t, i) {
                                for (var r = 0, u = n.length; r < u; r++)
                                    if (t.call(i, n[r])) return n[r];
                                return null
                            },
                            ka: function(n, t) {
                                var i = s.a.k(n, t);
                                0 <= i && n.splice(i, 1)
                            },
                            Ma: function(n) {
                                n = n || [];
                                for (var i = [], t = 0, r = n.length; t < r; t++) 0 > s.a.k(i, n[t]) && i.push(n[t]);
                                return i
                            },
                            Z: function(n, t) {
                                n = n || [];
                                for (var r = [], i = 0, u = n.length; i < u; i++) r.push(t(n[i]));
                                return r
                            },
                            Y: function(n, t) {
                                n = n || [];
                                for (var r = [], i = 0, u = n.length; i < u; i++) t(n[i]) && r.push(n[i]);
                                return r
                            },
                            R: function(n, t) {
                                if (t instanceof Array) n.push.apply(n, t);
                                else
                                    for (var i = 0, r = t.length; i < r; i++) n.push(t[i]);
                                return n
                            },
                            ja: function(n, t, i) {
                                var r = n.indexOf ? n.indexOf(t) : s.a.k(n, t);
                                0 > r ? i && n.push(t) : i || n.splice(r, 1)
                            },
                            extend: function(n, t) {
                                if (t)
                                    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                                return n
                            },
                            w: o,
                            oa: function(n) {
                                for (; n.firstChild;) s.removeNode(n.firstChild)
                            },
                            Mb: function(n) {
                                n = s.a.N(n);
                                for (var i = r.createElement("div"), t = 0, u = n.length; t < u; t++) i.appendChild(s.H(n[t]));
                                return i
                            },
                            Oa: function(n, t) {
                                for (var r, i = 0, f = n.length, u = []; i < f; i++) r = n[i].cloneNode(!0), u.push(t ? s.H(r) : r);
                                return u
                            },
                            P: function(n, t) {
                                if (s.a.oa(n), t)
                                    for (var i = 0, r = t.length; i < r; i++) n.appendChild(t[i])
                            },
                            eb: function(n, t) {
                                var r = n.nodeType ? [n] : n;
                                if (0 < r.length) {
                                    for (var f = r[0], e = f.parentNode, i = 0, u = t.length; i < u; i++) e.insertBefore(t[i], f);
                                    for (i = 0, u = r.length; i < u; i++) s.removeNode(r[i])
                                }
                            },
                            hb: function(t, i) {
                                7 > n ? t.setAttribute("selected", i) : t.selected = i
                            },
                            F: function(n) {
                                return null === n || n === t ? "" : n.trim ? n.trim() : n.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                            },
                            Wb: function(n, t) {
                                for (var r, u = [], f = (n || "").split(t), i = 0, e = f.length; i < e; i++) r = s.a.F(f[i]), "" !== r && u.push(r);
                                return u
                            },
                            Tb: function(n, t) {
                                return n = n || "", t.length > n.length ? !1 : n.substring(0, t.length) === t
                            },
                            yb: function(n, t) {
                                if (t.compareDocumentPosition) return 16 == (t.compareDocumentPosition(n) & 16);
                                for (; null != n;) {
                                    if (n == t) return !0;
                                    n = n.parentNode
                                }
                                return !1
                            },
                            aa: function(n) {
                                return s.a.yb(n, n.ownerDocument)
                            },
                            pb: function(n) {
                                return !!s.a.La(n, s.a.aa)
                            },
                            u: function(n) {
                                return n && n.tagName && n.tagName.toLowerCase()
                            },
                            o: function(t, r, u) {
                                var o = n && a[r],
                                    f, e, c;
                                if (o || "undefined" == typeof i)
                                    if (o || "function" != typeof t.addEventListener)
                                        if ("undefined" != typeof t.attachEvent) f = function(n) {
                                            u.call(t, n)
                                        }, e = "on" + r, t.attachEvent(e, f), s.a.C.ia(t, function() {
                                            t.detachEvent(e, f)
                                        });
                                        else throw Error("Browser doesn't support addEventListener or attachEvent");
                                else t.addEventListener(r, u, !1);
                                else h(t, r) && (c = u, u = function(n, t) {
                                    var i = this.checked;
                                    t && (this.checked = !0 !== t.sb), c.call(this, n), this.checked = i
                                }), i(t).bind(r, u)
                            },
                            Ga: function(n, t) {
                                if (!n || !n.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                                if ("undefined" != typeof i) {
                                    var f = [];
                                    h(n, t) && f.push({
                                        sb: n.checked
                                    }), i(n).trigger(t, f)
                                } else if ("function" == typeof r.createEvent)
                                    if ("function" == typeof n.dispatchEvent) f = r.createEvent(l[t] || "HTMLEvents"), f.initEvent(t, !0, !0, u, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, n), n.dispatchEvent(f);
                                    else throw Error("The supplied element doesn't support dispatchEvent");
                                else if ("undefined" != typeof n.fireEvent) h(n, t) && (n.checked = !0 !== n.checked), n.fireEvent("on" + t);
                                else throw Error("Browser doesn't support triggering events");
                            },
                            c: function(n) {
                                return s.T(n) ? n() : n
                            },
                            ya: function(n) {
                                return s.T(n) ? n.t() : n
                            },
                            ga: function(n, t, i) {
                                if (t) {
                                    var r = /\S+/g,
                                        u = n.className.match(r) || [];
                                    s.a.p(t.match(r), function(n) {
                                        s.a.ja(u, n, i)
                                    }), n.className = u.join(" ")
                                }
                            },
                            ib: function(n, i) {
                                var u = s.a.c(i),
                                    f;
                                (null === u || u === t) && (u = ""), f = s.e.firstChild(n), !f || 3 != f.nodeType || s.e.nextSibling(f) ? s.e.P(n, [r.createTextNode(u)]) : f.data = u, s.a.Bb(n)
                            },
                            gb: function(t, i) {
                                if (t.name = i, 7 >= n) try {
                                    t.mergeAttributes(r.createElement("<input name='" + t.name + "'/>"), !1)
                                } catch (u) {}
                            },
                            Bb: function(t) {
                                9 <= n && (t = 1 == t.nodeType ? t : t.parentNode, t.style && (t.style.zoom = t.style.zoom))
                            },
                            zb: function(t) {
                                if (n) {
                                    var i = t.style.width;
                                    t.style.width = 0, t.style.width = i
                                }
                            },
                            Qb: function(n, t) {
                                n = s.a.c(n), t = s.a.c(t);
                                for (var r = [], i = n; i <= t; i++) r.push(i);
                                return r
                            },
                            N: function(n) {
                                for (var i = [], t = 0, r = n.length; t < r; t++) i.push(n[t]);
                                return i
                            },
                            Ub: 6 === n,
                            Vb: 7 === n,
                            ca: n,
                            Ua: function(n, t) {
                                for (var r = s.a.N(n.getElementsByTagName("input")).concat(s.a.N(n.getElementsByTagName("textarea"))), f = "string" == typeof t ? function(n) {
                                        return n.name === t
                                    } : function(n) {
                                        return t.test(n.name)
                                    }, u = [], i = r.length - 1; 0 <= i; i--) f(r[i]) && u.push(r[i]);
                                return u
                            },
                            Nb: function(n) {
                                return "string" == typeof n && (n = s.a.F(n)) ? f && f.parse ? f.parse(n) : new Function("return " + n)() : null
                            },
                            Ca: function(n, t, i) {
                                if (!f || !f.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                                return f.stringify(s.a.c(n), t, i)
                            },
                            Ob: function(n, t, i) {
                                var v, e, h, f, u, c;
                                i = i || {};
                                var l = i.params || {},
                                    a = i.includeFields || this.Ta,
                                    v = n;
                                if ("object" == typeof n && "form" === s.a.u(n))
                                    for (v = n.action, e = a.length - 1; 0 <= e; e--)
                                        for (h = s.a.Ua(n, a[e]), f = h.length - 1; 0 <= f; f--) l[h[f].name] = h[f].value;
                                t = s.a.c(t), u = r.createElement("form"), u.style.display = "none", u.action = v, u.method = "post";
                                for (c in t) n = r.createElement("input"), n.name = c, n.value = s.a.Ca(s.a.c(t[c])), u.appendChild(n);
                                o(l, function(n, t) {
                                    var i = r.createElement("input");
                                    i.name = n, i.value = t, u.appendChild(i)
                                }), r.body.appendChild(u), i.submitter ? i.submitter(u) : u.submit(), setTimeout(function() {
                                    u.parentNode.removeChild(u)
                                }, 0)
                            }
                        }
                    }(), s.b("utils", s.a), s.b("utils.arrayForEach", s.a.p), s.b("utils.arrayFirst", s.a.La), s.b("utils.arrayFilter", s.a.Y), s.b("utils.arrayGetDistinctValues", s.a.Ma), s.b("utils.arrayIndexOf", s.a.k), s.b("utils.arrayMap", s.a.Z), s.b("utils.arrayPushAll", s.a.R), s.b("utils.arrayRemoveItem", s.a.ka), s.b("utils.extend", s.a.extend), s.b("utils.fieldsIncludedWithJsonPost", s.a.Ta), s.b("utils.getFormFields", s.a.Ua), s.b("utils.peekObservable", s.a.ya), s.b("utils.postJson", s.a.Ob), s.b("utils.parseJson", s.a.Nb), s.b("utils.registerEventHandler", s.a.o), s.b("utils.stringifyJson", s.a.Ca), s.b("utils.range", s.a.Qb), s.b("utils.toggleDomNodeCssClass", s.a.ga), s.b("utils.triggerEvent", s.a.Ga), s.b("utils.unwrapObservable", s.a.c), s.b("utils.objectForEach", s.a.w), s.b("utils.addOrRemoveItem", s.a.ja), s.b("unwrap", s.a.c), Function.prototype.bind || (Function.prototype.bind = function(n) {
                        var i = this,
                            t = Array.prototype.slice.call(arguments);
                        return n = t.shift(),
                            function() {
                                return i.apply(n, t.concat(Array.prototype.slice.call(arguments)))
                            }
                    }), s.a.f = new function() {
                        var r = 0,
                            n = "__ko__" + +new Date,
                            i = {};
                        return {
                            get: function(n, i) {
                                var r = s.a.f.pa(n, !1);
                                return r === t ? t : r[i]
                            },
                            set: function(n, i, r) {
                                (r !== t || s.a.f.pa(n, !1) !== t) && (s.a.f.pa(n, !0)[i] = r)
                            },
                            pa: function(u, f) {
                                var e = u[n];
                                if (!e || "null" === e || !i[e]) {
                                    if (!f) return t;
                                    e = u[n] = "ko" + r++, i[e] = {}
                                }
                                return i[e]
                            },
                            clear: function(t) {
                                var r = t[n];
                                return r ? (delete i[r], t[n] = null, !0) : !1
                            }
                        }
                    }, s.b("utils.domData", s.a.f), s.b("utils.domData.clear", s.a.f.clear), s.a.C = new function() {
                        function n(n, i) {
                            var r = s.a.f.get(n, u);
                            return r === t && i && (r = [], s.a.f.set(n, u, r)), r
                        }

                        function r(t) {
                            var u = n(t, !1),
                                e;
                            if (u)
                                for (u = u.slice(0), e = 0; e < u.length; e++) u[e](t);
                            if (s.a.f.clear(t), "function" == typeof i && "function" == typeof i.cleanData && i.cleanData([t]), f[t.nodeType])
                                for (u = t.firstChild; t = u;) u = t.nextSibling, 8 === t.nodeType && r(t)
                        }
                        var u = "__ko_domNodeDisposal__" + +new Date,
                            e = {
                                1: !0,
                                8: !0,
                                9: !0
                            },
                            f = {
                                1: !0,
                                9: !0
                            };
                        return {
                            ia: function(t, i) {
                                if ("function" != typeof i) throw Error("Callback must be a function");
                                n(t, !0).push(i)
                            },
                            cb: function(i, r) {
                                var f = n(i, !1);
                                f && (s.a.ka(f, r), 0 == f.length && s.a.f.set(i, u, t))
                            },
                            H: function(n) {
                                var t, i, u;
                                if (e[n.nodeType] && (r(n), f[n.nodeType]))
                                    for (t = [], s.a.R(t, n.getElementsByTagName("*")), i = 0, u = t.length; i < u; i++) r(t[i]);
                                return n
                            },
                            removeNode: function(n) {
                                s.H(n), n.parentNode && n.parentNode.removeChild(n)
                            }
                        }
                    }, s.H = s.a.C.H, s.removeNode = s.a.C.removeNode, s.b("cleanNode", s.H), s.b("removeNode", s.removeNode), s.b("utils.domNodeDisposal", s.a.C), s.b("utils.domNodeDisposal.addDisposeCallback", s.a.C.ia), s.b("utils.domNodeDisposal.removeDisposeCallback", s.a.C.cb),
                    function() {
                        s.a.xa = function(n) {
                            var t, f;
                            if ("undefined" != typeof i) {
                                if (i.parseHTML) t = i.parseHTML(n) || [];
                                else if ((t = i.clean([n])) && t[0]) {
                                    for (n = t[0]; n.parentNode && 11 !== n.parentNode.nodeType;) n = n.parentNode;
                                    n.parentNode && n.parentNode.removeChild(n)
                                }
                            } else {
                                for (f = s.a.F(n).toLowerCase(), t = r.createElement("div"), f = f.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "<\/table>"] || !f.indexOf("<tr") && [2, "<table><tbody>", "<\/tbody><\/table>"] || (!f.indexOf("<td") || !f.indexOf("<th")) && [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"] || [0, "", ""], n = "ignored<div>" + f[1] + n + f[2] + "<\/div>", "function" == typeof u.innerShiv ? t.appendChild(u.innerShiv(n)) : t.innerHTML = n; f[0] --;) t = t.lastChild;
                                t = s.a.N(t.lastChild.childNodes)
                            }
                            return t
                        }, s.a.fa = function(n, r) {
                            if (s.a.oa(n), r = s.a.c(r), null !== r && r !== t)
                                if ("string" != typeof r && (r = r.toString()), "undefined" != typeof i) i(n).html(r);
                                else
                                    for (var f = s.a.xa(r), u = 0; u < f.length; u++) n.appendChild(f[u])
                        }
                    }(), s.b("utils.parseHtmlFragment", s.a.xa), s.b("utils.setHtml", s.a.fa), s.s = function() {
                        function i(n, t) {
                            var r;
                            if (n)
                                if (8 == n.nodeType) r = s.s.$a(n.nodeValue), null != r && t.push({
                                    xb: n,
                                    Kb: r
                                });
                                else if (1 == n.nodeType)
                                for (var r = 0, u = n.childNodes, f = u.length; r < f; r++) i(u[r], t)
                        }
                        var n = {};
                        return {
                            va: function(t) {
                                if ("function" != typeof t) throw Error("You can only pass a function to ko.memoization.memoize()");
                                var i = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                                return n[i] = t, "<!--[ko_memo:" + i + "]-->"
                            },
                            mb: function(i, r) {
                                var u = n[i];
                                if (u === t) throw Error("Couldn't find any memo with ID " + i + ". Perhaps it's already been unmemoized.");
                                try {
                                    return u.apply(null, r || []), !0
                                } finally {
                                    delete n[i]
                                }
                            },
                            nb: function(n, t) {
                                var f = [],
                                    u, o, r, e;
                                for (i(n, f), u = 0, o = f.length; u < o; u++) r = f[u].xb, e = [r], t && s.a.R(e, t), s.s.mb(f[u].Kb, e), r.nodeValue = "", r.parentNode && r.parentNode.removeChild(r)
                            },
                            $a: function(n) {
                                return (n = n.match(/^\[ko_memo\:(.*?)\]$/)) ? n[1] : null
                            }
                        }
                    }(), s.b("memoization", s.s), s.b("memoization.memoize", s.s.va), s.b("memoization.unmemoize", s.s.mb), s.b("memoization.parseMemoText", s.s.$a), s.b("memoization.unmemoizeDomNodeAndDescendants", s.s.nb), s.Sa = {
                        throttle: function(n, t) {
                            n.throttleEvaluation = t;
                            var i = null;
                            return s.j({
                                read: n,
                                write: function(r) {
                                    clearTimeout(i), i = setTimeout(function() {
                                        n(r)
                                    }, t)
                                }
                            })
                        },
                        notify: function(t, i) {
                            return t.equalityComparer = "always" == i ? n(!1) : s.m.fn.equalityComparer, t
                        }
                    }, s.b("extenders", s.Sa), s.kb = function(n, t, i) {
                        this.target = n, this.la = t, this.wb = i, s.r(this, "dispose", this.B)
                    }, s.kb.prototype.B = function() {
                        this.Hb = !0, this.wb()
                    }, s.V = function() {
                        this.G = {}, s.a.extend(this, s.V.fn), s.r(this, "subscribe", this.Da), s.r(this, "extend", this.extend), s.r(this, "getSubscriptionsCount", this.Db)
                    }, s.V.fn = {
                        Da: function(n, t, i) {
                            i = i || "change";
                            var r = new s.kb(this, t ? n.bind(t) : n, function() {
                                s.a.ka(this.G[i], r)
                            }.bind(this));
                            return this.G[i] || (this.G[i] = []), this.G[i].push(r), r
                        },
                        notifySubscribers: function(n, t) {
                            t = t || "change", this.G[t] && s.q.I(function() {
                                s.a.p(this.G[t].slice(0), function(t) {
                                    t && !0 !== t.Hb && t.la(n)
                                })
                            }, this)
                        },
                        Db: function() {
                            var n = 0;
                            return s.a.w(this.G, function(t, i) {
                                n += i.length
                            }), n
                        },
                        extend: function(n) {
                            var t = this;
                            return n && s.a.w(n, function(n, i) {
                                var r = s.Sa[n];
                                "function" == typeof r && (t = r(t, i))
                            }), t
                        }
                    }, s.Wa = function(n) {
                        return null != n && "function" == typeof n.Da && "function" == typeof n.notifySubscribers
                    }, s.b("subscribable", s.V), s.b("isSubscribable", s.Wa), s.q = function() {
                        var n = [];
                        return {
                            rb: function(t) {
                                n.push({
                                    la: t,
                                    Ra: []
                                })
                            },
                            end: function() {
                                n.pop()
                            },
                            bb: function(t) {
                                if (!s.Wa(t)) throw Error("Only subscribable things can act as dependencies");
                                if (0 < n.length) {
                                    var i = n[n.length - 1];
                                    !i || 0 <= s.a.k(i.Ra, t) || (i.Ra.push(t), i.la(t))
                                }
                            },
                            I: function(t, i, r) {
                                try {
                                    return n.push(null), t.apply(i, r || [])
                                } finally {
                                    n.pop()
                                }
                            }
                        }
                    }(), y = {
                        undefined: !0,
                        boolean: !0,
                        number: !0,
                        string: !0
                    }, s.m = function(n) {
                        function t() {
                            return 0 < arguments.length ? (t.equalityComparer && t.equalityComparer(i, arguments[0]) || (t.K(), i = arguments[0], t.J()), this) : (s.q.bb(t), i)
                        }
                        var i = n;
                        return s.V.call(t), t.t = function() {
                            return i
                        }, t.J = function() {
                            t.notifySubscribers(i)
                        }, t.K = function() {
                            t.notifySubscribers(i, "beforeChange")
                        }, s.a.extend(t, s.m.fn), s.r(t, "peek", t.t), s.r(t, "valueHasMutated", t.J), s.r(t, "valueWillMutate", t.K), t
                    }, s.m.fn = {
                        equalityComparer: function(n, t) {
                            return null === n || typeof n in y ? n === t : !1
                        }
                    }, h = s.m.Pb = "__ko_proto__", s.m.fn[h] = s.m, s.qa = function(n, i) {
                        return null === n || n === t || n[h] === t ? !1 : n[h] === i ? !0 : s.qa(n[h], i)
                    }, s.T = function(n) {
                        return s.qa(n, s.m)
                    }, s.Xa = function(n) {
                        return "function" == typeof n && n[h] === s.m || "function" == typeof n && n[h] === s.j && n.Eb ? !0 : !1
                    }, s.b("observable", s.m), s.b("isObservable", s.T), s.b("isWriteableObservable", s.Xa), s.U = function(n) {
                        if (n = n || [], "object" != typeof n || !("length" in n)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                        return n = s.m(n), s.a.extend(n, s.U.fn), n
                    }, s.U.fn = {
                        remove: function(n) {
                            for (var u, r = this.t(), i = [], f = "function" == typeof n ? n : function(t) {
                                    return t === n
                                }, t = 0; t < r.length; t++) u = r[t], f(u) && (0 === i.length && this.K(), i.push(u), r.splice(t, 1), t--);
                            return i.length && this.J(), i
                        },
                        removeAll: function(n) {
                            if (n === t) {
                                var i = this.t(),
                                    r = i.slice(0);
                                return this.K(), i.splice(0, i.length), this.J(), r
                            }
                            return n ? this.remove(function(t) {
                                return 0 <= s.a.k(n, t)
                            }) : []
                        },
                        destroy: function(n) {
                            var i = this.t(),
                                r = "function" == typeof n ? n : function(t) {
                                    return t === n
                                },
                                t;
                            for (this.K(), t = i.length - 1; 0 <= t; t--) r(i[t]) && (i[t]._destroy = !0);
                            this.J()
                        },
                        destroyAll: function(i) {
                            return i === t ? this.destroy(n(!0)) : i ? this.destroy(function(n) {
                                return 0 <= s.a.k(i, n)
                            }) : []
                        },
                        indexOf: function(n) {
                            var t = this();
                            return s.a.k(t, n)
                        },
                        replace: function(n, t) {
                            var i = this.indexOf(n);
                            0 <= i && (this.K(), this.t()[i] = t, this.J())
                        }
                    }, s.a.p("pop push reverse shift sort splice unshift".split(" "), function(n) {
                        s.U.fn[n] = function() {
                            var t = this.t();
                            return this.K(), t = t[n].apply(t, arguments), this.J(), t
                        }
                    }), s.a.p(["slice"], function(n) {
                        s.U.fn[n] = function() {
                            var t = this();
                            return t[n].apply(t, arguments)
                        }
                    }), s.b("observableArray", s.U), s.j = function(i, r, u) {
                        function w() {
                            s.a.p(o, function(n) {
                                n.B()
                            }), o = []
                        }

                        function nt() {
                            var n = f.throttleEvaluation;
                            n && 0 <= n ? (clearTimeout(d), d = setTimeout(c, n)) : c()
                        }

                        function c() {
                            var n, u, i;
                            if (!y)
                                if (a && p()) h();
                                else {
                                    y = !0;
                                    try {
                                        for (n = s.a.Z(o, function(n) {
                                                return n.target
                                            }), s.q.rb(function(i) {
                                                var r;
                                                0 <= (r = s.a.k(n, i)) ? n[r] = t : o.push(i.Da(nt))
                                            }), u = e.call(r), i = n.length - 1; 0 <= i; i--) n[i] && o.splice(i, 1)[0].B();
                                        a = !0, f.notifySubscribers(l, "beforeChange"), l = u, f.notifySubscribers(l)
                                    } finally {
                                        s.q.end(), y = !1
                                    }
                                    o.length || h()
                                }
                        }

                        function f() {
                            if (0 < arguments.length) {
                                if ("function" == typeof k) k.apply(r, arguments);
                                else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                                return this
                            }
                            return a || c(), s.q.bb(f), l
                        }

                        function b() {
                            return !a || 0 < o.length
                        }
                        var l, a = !1,
                            y = !1,
                            e = i,
                            g, p;
                        if (e && "object" == typeof e ? (u = e, e = u.read) : (u = u || {}, e || (e = u.read)), "function" != typeof e) throw Error("Pass a function that returns the value of the ko.computed");
                        var k = u.write,
                            v = u.disposeWhenNodeIsRemoved || u.$ || null,
                            p = u.disposeWhen || u.Qa || n(!1),
                            h = w,
                            o = [],
                            d = null;
                        return r || (r = u.owner), f.t = function() {
                            return a || c(), l
                        }, f.Cb = function() {
                            return o.length
                        }, f.Eb = "function" == typeof u.write, f.B = function() {
                            h()
                        }, f.ta = b, s.V.call(f), s.a.extend(f, s.j.fn), s.r(f, "peek", f.t), s.r(f, "dispose", f.B), s.r(f, "isActive", f.ta), s.r(f, "getDependenciesCount", f.Cb), !0 !== u.deferEvaluation && c(), v && b() && (h = function() {
                            s.a.C.cb(v, h), w()
                        }, s.a.C.ia(v, h), g = p, p = function() {
                            return !s.a.aa(v) || g()
                        }), f
                    }, s.Gb = function(n) {
                        return s.qa(n, s.j)
                    }, o = s.m.Pb, s.j[o] = s.m, s.j.fn = {}, s.j.fn[o] = s.j, s.b("dependentObservable", s.j), s.b("computed", s.j), s.b("isComputed", s.Gb),
                    function() {
                        function n(u, f, e) {
                            if (e = e || new i, u = f(u), "object" != typeof u || null === u || u === t || u instanceof Date || u instanceof String || u instanceof Number || u instanceof Boolean) return u;
                            var o = u instanceof Array ? [] : {};
                            return e.save(u, o), r(u, function(i) {
                                var r = f(u[i]),
                                    s;
                                switch (typeof r) {
                                    case "boolean":
                                    case "number":
                                    case "string":
                                    case "function":
                                        o[i] = r;
                                        break;
                                    case "object":
                                    case "undefined":
                                        s = e.get(r), o[i] = s !== t ? s : n(r, f, e)
                                }
                            }), o
                        }

                        function r(n, t) {
                            if (n instanceof Array) {
                                for (var i = 0; i < n.length; i++) t(i);
                                "function" == typeof n.toJSON && t("toJSON")
                            } else
                                for (i in n) t(i)
                        }

                        function i() {
                            this.keys = [], this.Ha = []
                        }
                        s.lb = function(t) {
                            if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
                            return n(t, function(n) {
                                for (var t = 0; s.T(n) && 10 > t; t++) n = n();
                                return n
                            })
                        }, s.toJSON = function(n, t, i) {
                            return n = s.lb(n), s.a.Ca(n, t, i)
                        }, i.prototype = {
                            save: function(n, t) {
                                var i = s.a.k(this.keys, n);
                                0 <= i ? this.Ha[i] = t : (this.keys.push(n), this.Ha.push(t))
                            },
                            get: function(n) {
                                return n = s.a.k(this.keys, n), 0 <= n ? this.Ha[n] : t
                            }
                        }
                    }(), s.b("toJS", s.lb), s.b("toJSON", s.toJSON),
                    function() {
                        s.h = {
                            n: function(n) {
                                switch (s.a.u(n)) {
                                    case "option":
                                        return !0 === n.__ko__hasDomDataOptionValue__ ? s.a.f.get(n, s.d.options.wa) : 7 >= s.a.ca ? n.getAttributeNode("value") && n.getAttributeNode("value").specified ? n.value : n.text : n.value;
                                    case "select":
                                        return 0 <= n.selectedIndex ? s.h.n(n.options[n.selectedIndex]) : t;
                                    default:
                                        return n.value
                                }
                            },
                            W: function(n, i) {
                                switch (s.a.u(n)) {
                                    case "option":
                                        switch (typeof i) {
                                            case "string":
                                                s.a.f.set(n, s.d.options.wa, t), "__ko__hasDomDataOptionValue__" in n && delete n.__ko__hasDomDataOptionValue__, n.value = i;
                                                break;
                                            default:
                                                s.a.f.set(n, s.d.options.wa, i), n.__ko__hasDomDataOptionValue__ = !0, n.value = "number" == typeof i ? i : ""
                                        }
                                        break;
                                    case "select":
                                        "" === i && (i = t), (null === i || i === t) && (n.selectedIndex = -1);
                                        for (var r = n.options.length - 1; 0 <= r; r--)
                                            if (s.h.n(n.options[r]) == i) {
                                                n.selectedIndex = r;
                                                break
                                            }
                                        1 < n.size || -1 !== n.selectedIndex || (n.selectedIndex = 0);
                                        break;
                                    default:
                                        (null === i || i === t) && (i = ""), n.value = i
                                }
                            }
                        }
                    }(), s.b("selectExtensions", s.h), s.b("selectExtensions.readValue", s.h.n), s.b("selectExtensions.writeValue", s.h.W), s.g = function() {
                        function n(n, i) {
                            for (var r = null; n != r;) r = n, n = n.replace(t, function(n, t) {
                                return i[t]
                            });
                            return n
                        }
                        var t = /\@ko_token_(\d+)\@/g,
                            i = ["true", "false", "null", "undefined"],
                            r = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;
                        return {
                            S: [],
                            da: function(t) {
                                var i = s.a.F(t),
                                    f, e, r, u;
                                if (3 > i.length) return [];
                                for ("{" === i.charAt(0) && (i = i.substring(1, i.length - 1)), t = [], f = null, r = 0; r < i.length; r++)
                                    if (u = i.charAt(r), null === f) switch (u) {
                                        case '"':
                                        case "'":
                                        case "/":
                                            f = r, e = u
                                    } else if (u == e && "\\" !== i.charAt(r - 1)) {
                                        u = i.substring(f, r + 1), t.push(u);
                                        var c = "@ko_token_" + (t.length - 1) + "@",
                                            i = i.substring(0, f) + c + i.substring(r + 1),
                                            r = r - (u.length - c.length),
                                            f = null
                                    }
                                e = f = null;
                                for (var o = 0, h = null, r = 0; r < i.length; r++) {
                                    if (u = i.charAt(r), null === f) switch (u) {
                                        case "{":
                                            f = r, h = u, e = "}";
                                            break;
                                        case "(":
                                            f = r, h = u, e = ")";
                                            break;
                                        case "[":
                                            f = r, h = u, e = "]"
                                    }
                                    u === h ? o++ : u === e && (o--, 0 === o && (u = i.substring(f, r + 1), t.push(u), c = "@ko_token_" + (t.length - 1) + "@", i = i.substring(0, f) + c + i.substring(r + 1), r -= u.length - c.length, f = null))
                                }
                                for (e = [], i = i.split(","), f = 0, r = i.length; f < r; f++) o = i[f], h = o.indexOf(":"), 0 < h && h < o.length - 1 ? (u = o.substring(h + 1), e.push({
                                    key: n(o.substring(0, h), t),
                                    value: n(u, t)
                                })) : e.push({
                                    unknown: n(o, t)
                                });
                                return e
                            },
                            ea: function(n) {
                                var e = "string" == typeof n ? s.g.da(n) : n,
                                    f = [],
                                    t, h, o, u;
                                for (n = [], h = 0; t = e[h]; h++)
                                    if (0 < f.length && f.push(","), t.key) {
                                        n: {
                                            o = t.key, u = s.a.F(o);
                                            switch (u.length && u.charAt(0)) {
                                                case "'":
                                                case '"':
                                                    break n;
                                                default:
                                                    o = "'" + u + "'"
                                            }
                                        }
                                        t = t.value,
                                        f.push(o),
                                        f.push(":"),
                                        f.push(t),
                                        t = s.a.F(t),
                                        0 <= s.a.k(i, s.a.F(t).toLowerCase()) ? t = !1 : (u = t.match(r), t = null === u ? !1 : u[1] ? "Object(" + u[1] + ")" + u[2] : t),
                                        t && (0 < n.length && n.push(", "), n.push(o + " : function(__ko_value) { " + t + " = __ko_value; }"))
                                    } else t.unknown && f.push(t.unknown);
                                return e = f.join(""), 0 < n.length && (e = e + ", '_ko_property_writers' : { " + n.join("") + " } "), e
                            },
                            Jb: function(n, t) {
                                for (var i = 0; i < n.length; i++)
                                    if (s.a.F(n[i].key) == t) return !0;
                                return !1
                            },
                            ha: function(n, t, i, r, u) {
                                n && s.T(n) ? !s.Xa(n) || u && n.t() === r || n(r) : (n = t()._ko_property_writers) && n[i] && n[i](r)
                            }
                        }
                    }(), s.b("expressionRewriting", s.g), s.b("expressionRewriting.bindingRewriteValidators", s.g.S), s.b("expressionRewriting.parseObjectLiteral", s.g.da), s.b("expressionRewriting.preProcessBindings", s.g.ea), s.b("jsonExpressionRewriting", s.g), s.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", s.g.ea),
                    function() {
                        function n(n) {
                            return 8 == n.nodeType && (i ? n.text : n.nodeValue).match(e)
                        }

                        function t(n) {
                            return 8 == n.nodeType && (i ? n.text : n.nodeValue).match(o)
                        }

                        function u(i, r) {
                            for (var u = i, f = 1, e = []; u = u.nextSibling;) {
                                if (t(u) && (f--, 0 === f)) return e;
                                e.push(u), n(u) && f++
                            }
                            if (!r) throw Error("Cannot find closing comment tag to match: " + i.nodeValue);
                            return null
                        }

                        function f(n, t) {
                            var i = u(n, t);
                            return i ? 0 < i.length ? i[i.length - 1].nextSibling : n.nextSibling : null
                        }
                        var i = r && "<!--test-->" === r.createComment("test").text,
                            e = i ? /^\x3c!--\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*--\x3e$/ : /^\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*$/,
                            o = i ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
                            h = {
                                ul: !0,
                                ol: !0
                            };
                        s.e = {
                            L: {},
                            childNodes: function(t) {
                                return n(t) ? u(t) : t.childNodes
                            },
                            ba: function(t) {
                                if (n(t)) {
                                    t = s.e.childNodes(t);
                                    for (var i = 0, r = t.length; i < r; i++) s.removeNode(t[i])
                                } else s.a.oa(t)
                            },
                            P: function(t, i) {
                                if (n(t)) {
                                    s.e.ba(t);
                                    for (var u = t.nextSibling, r = 0, f = i.length; r < f; r++) u.parentNode.insertBefore(i[r], u)
                                } else s.a.P(t, i)
                            },
                            ab: function(t, i) {
                                n(t) ? t.parentNode.insertBefore(i, t.nextSibling) : t.firstChild ? t.insertBefore(i, t.firstChild) : t.appendChild(i)
                            },
                            Va: function(t, i, r) {
                                r ? n(t) ? t.parentNode.insertBefore(i, r.nextSibling) : r.nextSibling ? t.insertBefore(i, r.nextSibling) : t.appendChild(i) : s.e.ab(t, i)
                            },
                            firstChild: function(i) {
                                return n(i) ? !i.nextSibling || t(i.nextSibling) ? null : i.nextSibling : i.firstChild
                            },
                            nextSibling: function(i) {
                                return n(i) && (i = f(i)), i.nextSibling && t(i.nextSibling) ? null : i.nextSibling
                            },
                            ob: function(t) {
                                return (t = n(t)) ? t[1] : null
                            },
                            Za: function(i) {
                                var o, r, u, e;
                                if (h[s.a.u(i)] && (o = i.firstChild, o))
                                    do
                                        if (1 === o.nodeType) {
                                            if (r = o.firstChild, u = null, r)
                                                do u ? u.push(r) : n(r) ? (e = f(r, !0), e ? r = e : u = [r]) : t(r) && (u = [r]); while (r = r.nextSibling);
                                            if (r = u)
                                                for (u = o.nextSibling, e = 0; e < r.length; e++) u ? i.insertBefore(r[e], u) : i.appendChild(r[e])
                                        }
                                while (o = o.nextSibling)
                            }
                        }
                    }(), s.b("virtualElements", s.e), s.b("virtualElements.allowedBindings", s.e.L), s.b("virtualElements.emptyNode", s.e.ba), s.b("virtualElements.insertAfter", s.e.Va), s.b("virtualElements.prepend", s.e.ab), s.b("virtualElements.setDomNodeChildren", s.e.P),
                    function() {
                        s.M = function() {
                            this.Na = {}
                        }, s.a.extend(s.M.prototype, {
                            nodeHasBindings: function(n) {
                                switch (n.nodeType) {
                                    case 1:
                                        return null != n.getAttribute("data-bind");
                                    case 8:
                                        return null != s.e.ob(n);
                                    default:
                                        return !1
                                }
                            },
                            getBindings: function(n, t) {
                                var i = this.getBindingsString(n, t);
                                return i ? this.parseBindingsString(i, t, n) : null
                            },
                            getBindingsString: function(n) {
                                switch (n.nodeType) {
                                    case 1:
                                        return n.getAttribute("data-bind");
                                    case 8:
                                        return s.e.ob(n);
                                    default:
                                        return null
                                }
                            },
                            parseBindingsString: function(n, t, i) {
                                var r, u, f, e;
                                try {
                                    return (r = this.Na[n]) || (u = this.Na, e = "with($context){with($data||{}){return{" + s.g.ea(n) + "}}}", f = new Function("$context", "$element", e), r = u[n] = f), r(t, i)
                                } catch (o) {
                                    throw o.message = "Unable to parse bindings.\nBindings value: " + n + "\nMessage: " + o.message, o;
                                }
                            }
                        }), s.M.instance = new s.M
                    }(), s.b("bindingProvider", s.M),
                    function() {
                        function n(n, t, r) {
                            for (var u = s.e.firstChild(t); t = u;) u = s.e.nextSibling(t), i(n, t, r)
                        }

                        function i(t, i, u) {
                            var e = !0,
                                f = 1 === i.nodeType;
                            f && s.e.Za(i), (f && u || s.M.instance.nodeHasBindings(i)) && (e = r(i, null, t, u).Sb), e && n(t, i, !f)
                        }

                        function r(n, i, r, u) {
                            function c(n) {
                                return function() {
                                    return e[n]
                                }
                            }

                            function l() {
                                return e
                            }
                            var o = 0,
                                e, h, a = s.a.f.get(n, f);
                            if (!i) {
                                if (a) throw Error("You cannot apply bindings multiple times to the same element.");
                                s.a.f.set(n, f, !0)
                            }
                            return s.j(function() {
                                var f = r && r instanceof s.A ? r : new s.A(s.a.c(r)),
                                    v = f.$data;
                                !a && u && s.jb(n, f), (e = ("function" == typeof i ? i(f, n) : i) || s.M.instance.getBindings(n, f)) && (0 === o && (o = 1, s.a.w(e, function(i) {
                                    var r = s.d[i];
                                    if (r && 8 === n.nodeType && !s.e.L[i]) throw Error("The binding '" + i + "' cannot be used with virtual elements");
                                    if (r && "function" == typeof r.init && (r = r.init(n, c(i), l, v, f)) && r.controlsDescendantBindings) {
                                        if (h !== t) throw Error("Multiple bindings (" + h + " and " + i + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                        h = i
                                    }
                                }), o = 2), 2 === o && s.a.w(e, function(t) {
                                    var i = s.d[t];
                                    i && "function" == typeof i.update && i.update(n, c(t), l, v, f)
                                }))
                            }, null, {
                                $: n
                            }), {
                                Sb: h === t
                            }
                        }
                        s.d = {}, s.A = function(n, t, i) {
                            t ? (s.a.extend(this, t), this.$parentContext = t, this.$parent = t.$data, this.$parents = (t.$parents || []).slice(0), this.$parents.unshift(this.$parent)) : (this.$parents = [], this.$root = n, this.ko = s), this.$data = n, i && (this[i] = n)
                        }, s.A.prototype.createChildContext = function(n, t) {
                            return new s.A(n, this, t)
                        }, s.A.prototype.extend = function(n) {
                            var t = s.a.extend(new s.A, this);
                            return s.a.extend(t, n)
                        };
                        var f = "__ko_boundElement";
                        s.jb = function(n, t) {
                            if (2 == arguments.length) s.a.f.set(n, "__ko_bindingContext__", t);
                            else return s.a.f.get(n, "__ko_bindingContext__")
                        }, s.Ka = function(n, t, i) {
                            return 1 === n.nodeType && s.e.Za(n), r(n, t, i, !0)
                        }, s.Ja = function(t, i) {
                            1 !== i.nodeType && 8 !== i.nodeType || n(t, i, !0)
                        }, s.Ia = function(n, t) {
                            if (t && 1 !== t.nodeType && 8 !== t.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                            t = t || u.document.body, i(n, t, !0)
                        }, s.na = function(n) {
                            switch (n.nodeType) {
                                case 1:
                                case 8:
                                    var i = s.jb(n);
                                    if (i) return i;
                                    if (n.parentNode) return s.na(n.parentNode)
                            }
                            return t
                        }, s.ub = function(n) {
                            return (n = s.na(n)) ? n.$data : t
                        }, s.b("bindingHandlers", s.d), s.b("applyBindings", s.Ia), s.b("applyBindingsToDescendants", s.Ja), s.b("applyBindingsToNode", s.Ka), s.b("contextFor", s.na), s.b("dataFor", s.ub)
                    }(), l = {
                        "class": "className",
                        "for": "htmlFor"
                    }, s.d.attr = {
                        update: function(n, i) {
                            var r = s.a.c(i()) || {};
                            s.a.w(r, function(i, r) {
                                r = s.a.c(r);
                                var u = !1 === r || null === r || r === t;
                                u && n.removeAttribute(i), 8 >= s.a.ca && i in l ? (i = l[i], u ? n.removeAttribute(i) : n[i] = r) : u || n.setAttribute(i, r.toString()), "name" === i && s.a.gb(n, u ? "" : r.toString())
                            })
                        }
                    }, s.d.checked = {
                        init: function(t, i, r) {
                            s.a.o(t, "click", function() {
                                var u, n, f;
                                if ("checkbox" == t.type) u = t.checked;
                                else if ("radio" == t.type && t.checked) u = t.value;
                                else return;
                                n = i(), f = s.a.c(n), "checkbox" == t.type && f instanceof Array ? s.a.ja(n, t.value, t.checked) : s.g.ha(n, r, "checked", u, !0)
                            }), "radio" != t.type || t.name || s.d.uniqueName.init(t, n(!0))
                        },
                        update: function(n, t) {
                            var i = s.a.c(t());
                            "checkbox" == n.type ? n.checked = i instanceof Array ? 0 <= s.a.k(i, n.value) : i : "radio" == n.type && (n.checked = n.value == i)
                        }
                    }, s.d.css = {
                        update: function(n, t) {
                            var i = s.a.c(t());
                            "object" == typeof i ? s.a.w(i, function(t, i) {
                                i = s.a.c(i), s.a.ga(n, t, i)
                            }) : (i = String(i || ""), s.a.ga(n, n.__ko__cssValue, !1), n.__ko__cssValue = i, s.a.ga(n, i, !0))
                        }
                    }, s.d.enable = {
                        update: function(n, t) {
                            var i = s.a.c(t());
                            i && n.disabled ? n.removeAttribute("disabled") : i || n.disabled || (n.disabled = !0)
                        }
                    }, s.d.disable = {
                        update: function(n, t) {
                            s.d.enable.update(n, function() {
                                return !s.a.c(t())
                            })
                        }
                    }, s.d.event = {
                        init: function(n, t, i, r) {
                            var u = t() || {};
                            s.a.w(u, function(u) {
                                "string" == typeof u && s.a.o(n, u, function(n) {
                                    var e, o = t()[u],
                                        h, f;
                                    if (o) {
                                        h = i();
                                        try {
                                            f = s.a.N(arguments), f.unshift(r), e = o.apply(r, f)
                                        } finally {
                                            !0 !== e && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
                                        }!1 === h[u + "Bubble"] && (n.cancelBubble = !0, n.stopPropagation && n.stopPropagation())
                                    }
                                })
                            })
                        }
                    }, s.d.foreach = {
                        Ya: function(n) {
                            return function() {
                                var i = n(),
                                    t = s.a.ya(i);
                                return !t || "number" == typeof t.length ? {
                                    foreach: i,
                                    templateEngine: s.D.sa
                                } : (s.a.c(i), {
                                    foreach: t.data,
                                    as: t.as,
                                    includeDestroyed: t.includeDestroyed,
                                    afterAdd: t.afterAdd,
                                    beforeRemove: t.beforeRemove,
                                    afterRender: t.afterRender,
                                    beforeMove: t.beforeMove,
                                    afterMove: t.afterMove,
                                    templateEngine: s.D.sa
                                })
                            }
                        },
                        init: function(n, t) {
                            return s.d.template.init(n, s.d.foreach.Ya(t))
                        },
                        update: function(n, t, i, r, u) {
                            return s.d.template.update(n, s.d.foreach.Ya(t), i, r, u)
                        }
                    }, s.g.S.foreach = !1, s.e.L.foreach = !0, s.d.hasfocus = {
                        init: function(n, t, i) {
                            function r(r) {
                                var u, f;
                                if (n.__ko_hasfocusUpdating = !0, u = n.ownerDocument, "activeElement" in u) {
                                    try {
                                        f = u.activeElement
                                    } catch (e) {
                                        f = u.body
                                    }
                                    r = f === n
                                }
                                u = t(), s.g.ha(u, i, "hasfocus", r, !0), n.__ko_hasfocusLastValue = r, n.__ko_hasfocusUpdating = !1
                            }
                            var u = r.bind(null, !0),
                                f = r.bind(null, !1);
                            s.a.o(n, "focus", u), s.a.o(n, "focusin", u), s.a.o(n, "blur", f), s.a.o(n, "focusout", f)
                        },
                        update: function(n, t) {
                            var i = !!s.a.c(t());
                            n.__ko_hasfocusUpdating || n.__ko_hasfocusLastValue === i || (i ? n.focus() : n.blur(), s.q.I(s.a.Ga, null, [n, i ? "focusin" : "focusout"]))
                        }
                    }, s.d.hasFocus = s.d.hasfocus, s.d.html = {
                        init: function() {
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(n, t) {
                            s.a.fa(n, t())
                        }
                    }, a = "__ko_withIfBindingData", c("if"), c("ifnot", !1, !0), c("with", !0, !1, function(n, t) {
                        return n.createChildContext(t)
                    }), s.d.options = {
                        init: function(n) {
                            if ("select" !== s.a.u(n)) throw Error("options binding applies only to SELECT elements");
                            for (; 0 < n.length;) n.remove(0);
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(n, i, u) {
                            function a(n, t, i) {
                                var r = typeof t;
                                return "function" == r ? t(n) : "string" == r ? n[t] : i
                            }

                            function y(n, t) {
                                if (e) {
                                    var i = 0 <= s.a.k(e, s.h.n(t[0]));
                                    s.a.hb(t[0], i)
                                }
                            }
                            var p = 0 == n.length,
                                h = !p && n.multiple ? n.scrollTop : null,
                                l;
                            i = s.a.c(i());
                            var f = u(),
                                w = f.optionsIncludeDestroyed,
                                c = {},
                                o, e;
                            n.multiple ? e = s.a.Z(n.selectedOptions || s.a.Y(n.childNodes, function(n) {
                                return n.tagName && "option" === s.a.u(n) && n.selected
                            }), function(n) {
                                return s.h.n(n)
                            }) : 0 <= n.selectedIndex && (e = [s.h.n(n.options[n.selectedIndex])]), i ? ("undefined" == typeof i.length && (i = [i]), l = s.a.Y(i, function(n) {
                                return w || n === t || null === n || !s.a.c(n._destroy)
                            }), "optionsCaption" in f && (o = s.a.c(f.optionsCaption), null !== o && o !== t && l.unshift(c))) : i = [], u = y, f.optionsAfterRender && (u = function(n, i) {
                                y(0, i), s.q.I(f.optionsAfterRender, null, [i[0], n !== c ? n : t])
                            }), s.a.Aa(n, l, function(n, i, u) {
                                return u.length && (e = u[0].selected && [s.h.n(u[0])]), i = r.createElement("option"), n === c ? (s.a.fa(i, o), s.h.W(i, t)) : (u = a(n, f.optionsValue, n), s.h.W(i, s.a.c(u)), n = a(n, f.optionsText, u), s.a.ib(i, n)), [i]
                            }, null, u), e = null, p && "value" in f && v(n, s.a.ya(f.value), !0), s.a.zb(n), h && 20 < Math.abs(h - n.scrollTop) && (n.scrollTop = h)
                        }
                    }, s.d.options.wa = "__ko.optionValueDomData__", s.d.selectedOptions = {
                        init: function(n, t, i) {
                            s.a.o(n, "change", function() {
                                var u = t(),
                                    r = [];
                                s.a.p(n.getElementsByTagName("option"), function(n) {
                                    n.selected && r.push(s.h.n(n))
                                }), s.g.ha(u, i, "selectedOptions", r)
                            })
                        },
                        update: function(n, t) {
                            if ("select" != s.a.u(n)) throw Error("values binding applies only to SELECT elements");
                            var i = s.a.c(t());
                            i && "number" == typeof i.length && s.a.p(n.getElementsByTagName("option"), function(n) {
                                var t = 0 <= s.a.k(i, s.h.n(n));
                                s.a.hb(n, t)
                            })
                        }
                    }, s.d.style = {
                        update: function(n, t) {
                            var i = s.a.c(t() || {});
                            s.a.w(i, function(t, i) {
                                i = s.a.c(i), n.style[t] = i || ""
                            })
                        }
                    }, s.d.submit = {
                        init: function(n, t, i, r) {
                            if ("function" != typeof t()) throw Error("The value for a submit binding must be a function");
                            s.a.o(n, "submit", function(i) {
                                var u, f = t();
                                try {
                                    u = f.call(r, n)
                                } finally {
                                    !0 !== u && (i.preventDefault ? i.preventDefault() : i.returnValue = !1)
                                }
                            })
                        }
                    }, s.d.text = {
                        update: function(n, t) {
                            s.a.ib(n, t())
                        }
                    }, s.e.L.text = !0, s.d.uniqueName = {
                        init: function(n, t) {
                            if (t()) {
                                var i = "ko_unique_" + ++s.d.uniqueName.tb;
                                s.a.gb(n, i)
                            }
                        }
                    }, s.d.uniqueName.tb = 0, s.d.value = {
                        init: function(n, t, i) {
                            function f() {
                                e = !1;
                                var r = t(),
                                    u = s.h.n(n);
                                s.g.ha(r, i, "value", u)
                            }
                            var r = ["change"],
                                u = i().valueUpdate,
                                e = !1;
                            u && ("string" == typeof u && (u = [u]), s.a.R(r, u), r = s.a.Ma(r)), !s.a.ca || "input" != n.tagName.toLowerCase() || "text" != n.type || "off" == n.autocomplete || n.form && "off" == n.form.autocomplete || -1 != s.a.k(r, "propertychange") || (s.a.o(n, "propertychange", function() {
                                e = !0
                            }), s.a.o(n, "blur", function() {
                                e && f()
                            })), s.a.p(r, function(t) {
                                var i = f;
                                s.a.Tb(t, "after") && (i = function() {
                                    setTimeout(f, 0)
                                }, t = t.substring(5)), s.a.o(n, t, i)
                            })
                        },
                        update: function(n, t) {
                            var u = "select" === s.a.u(n),
                                r = s.a.c(t()),
                                i = s.h.n(n);
                            r !== i && (i = function() {
                                s.h.W(n, r)
                            }, i(), u && setTimeout(i, 0)), u && 0 < n.length && v(n, r, !1)
                        }
                    }, s.d.visible = {
                        update: function(n, t) {
                            var i = s.a.c(t()),
                                r = "none" != n.style.display;
                            i && !r ? n.style.display = "" : !i && r && (n.style.display = "none")
                        }
                    },
                    function(n) {
                        s.d[n] = {
                            init: function(t, i, r, u) {
                                return s.d.event.init.call(this, t, function() {
                                    var t = {};
                                    return t[n] = i(), t
                                }, r, u)
                            }
                        }
                    }("click"), s.v = function() {}, s.v.prototype.renderTemplateSource = function() {
                        throw Error("Override renderTemplateSource");
                    }, s.v.prototype.createJavaScriptEvaluatorBlock = function() {
                        throw Error("Override createJavaScriptEvaluatorBlock");
                    }, s.v.prototype.makeTemplateSource = function(n, t) {
                        if ("string" == typeof n) {
                            t = t || r;
                            var i = t.getElementById(n);
                            if (!i) throw Error("Cannot find template with ID " + n);
                            return new s.l.i(i)
                        }
                        if (1 == n.nodeType || 8 == n.nodeType) return new s.l.Q(n);
                        throw Error("Unknown template type: " + n);
                    }, s.v.prototype.renderTemplate = function(n, t, i, r) {
                        return n = this.makeTemplateSource(n, r), this.renderTemplateSource(n, t, i)
                    }, s.v.prototype.isTemplateRewritten = function(n, t) {
                        return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(n, t).data("isRewritten")
                    }, s.v.prototype.rewriteTemplate = function(n, t, i) {
                        n = this.makeTemplateSource(n, i), t = t(n.text()), n.text(t), n.data("isRewritten", !0)
                    }, s.b("templateEngine", s.v), s.Ea = function() {
                        function n(n, t, i, r) {
                            var o, f, u, e;
                            for (n = s.g.da(n), o = s.g.S, f = 0; f < n.length; f++)
                                if (u = n[f].key, o.hasOwnProperty(u))
                                    if (e = o[u], "function" == typeof e) {
                                        if (u = e(n[f].value)) throw Error(u);
                                    } else if (!e) throw Error("This template engine does not support the '" + u + "' binding within its templates");
                            return i = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + s.g.ea(n) + " } })()},'" + i.toLowerCase() + "')", r.createJavaScriptEvaluatorBlock(i) + t
                        }
                        var t = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                            i = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                        return {
                            Ab: function(n, t, i) {
                                t.isTemplateRewritten(n, i) || t.rewriteTemplate(n, function(n) {
                                    return s.Ea.Lb(n, t)
                                }, i)
                            },
                            Lb: function(r, u) {
                                return r.replace(t, function(t, i, r, f, e) {
                                    return n(e, i, r, u)
                                }).replace(i, function(t, i) {
                                    return n(i, "<!-- ko -->", "#comment", u)
                                })
                            },
                            qb: function(n, t) {
                                return s.s.va(function(i, r) {
                                    var u = i.nextSibling;
                                    u && u.nodeName.toLowerCase() === t && s.Ka(u, n, r)
                                })
                            }
                        }
                    }(), s.b("__tr_ambtns", s.Ea.qb),
                    function() {
                        s.l = {}, s.l.i = function(n) {
                            this.i = n
                        }, s.l.i.prototype.text = function() {
                            var n = s.a.u(this.i),
                                n = "script" === n ? "text" : "textarea" === n ? "value" : "innerHTML",
                                t;
                            if (0 == arguments.length) return this.i[n];
                            t = arguments[0], "innerHTML" === n ? s.a.fa(this.i, t) : this.i[n] = t
                        }, s.l.i.prototype.data = function(n) {
                            if (1 === arguments.length) return s.a.f.get(this.i, "templateSourceData_" + n);
                            s.a.f.set(this.i, "templateSourceData_" + n, arguments[1])
                        }, s.l.Q = function(n) {
                            this.i = n
                        }, s.l.Q.prototype = new s.l.i, s.l.Q.prototype.text = function() {
                            if (0 == arguments.length) {
                                var n = s.a.f.get(this.i, "__ko_anon_template__") || {};
                                return n.Fa === t && n.ma && (n.Fa = n.ma.innerHTML), n.Fa
                            }
                            s.a.f.set(this.i, "__ko_anon_template__", {
                                Fa: arguments[0]
                            })
                        }, s.l.i.prototype.nodes = function() {
                            if (0 == arguments.length) return (s.a.f.get(this.i, "__ko_anon_template__") || {}).ma;
                            s.a.f.set(this.i, "__ko_anon_template__", {
                                ma: arguments[0]
                            })
                        }, s.b("templateSources", s.l), s.b("templateSources.domElement", s.l.i), s.b("templateSources.anonymousTemplate", s.l.Q)
                    }(),
                    function() {
                        function r(n, t, i) {
                            var r;
                            for (t = s.e.nextSibling(t); n && (r = n) !== t;) n = s.e.nextSibling(r), 1 !== r.nodeType && 8 !== r.nodeType || i(r)
                        }

                        function u(n, t) {
                            if (n.length) {
                                var i = n[0],
                                    u = n[n.length - 1];
                                r(i, u, function(n) {
                                    s.Ia(t, n)
                                }), r(i, u, function(n) {
                                    s.s.nb(n, [t])
                                })
                            }
                        }

                        function n(n) {
                            return n.nodeType ? n : 0 < n.length ? n[0] : null
                        }

                        function f(t, r, f, e, o) {
                            o = o || {};
                            var h = t && n(t),
                                h = h && h.ownerDocument,
                                c = o.templateEngine || i;
                            if (s.Ea.Ab(f, c, h), f = c.renderTemplate(f, e, o, h), "number" != typeof f.length || 0 < f.length && "number" != typeof f[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
                            h = !1;
                            switch (r) {
                                case "replaceChildren":
                                    s.e.P(t, f), h = !0;
                                    break;
                                case "replaceNode":
                                    s.a.eb(t, f), h = !0;
                                    break;
                                case "ignoreTargetNode":
                                    break;
                                default:
                                    throw Error("Unknown renderMode: " + r);
                            }
                            return h && (u(f, e), o.afterRender && s.q.I(o.afterRender, null, [f, e.$data])), f
                        }
                        var i;
                        s.Ba = function(n) {
                            if (n != t && !(n instanceof s.v)) throw Error("templateEngine must inherit from ko.templateEngine");
                            i = n
                        }, s.za = function(r, u, e, o, h) {
                            if (e = e || {}, (e.templateEngine || i) == t) throw Error("Set a template engine before calling renderTemplate");
                            if (h = h || "replaceChildren", o) {
                                var c = n(o);
                                return s.j(function() {
                                    var t = u && u instanceof s.A ? u : new s.A(s.a.c(u)),
                                        i = "function" == typeof r ? r(t.$data, t) : r,
                                        t = f(o, h, i, t, e);
                                    "replaceNode" == h && (o = t, c = n(o))
                                }, null, {
                                    Qa: function() {
                                        return !c || !s.a.aa(c)
                                    },
                                    $: c && "replaceNode" == h ? c.parentNode : c
                                })
                            }
                            return s.s.va(function(n) {
                                s.za(r, u, e, n, "replaceNode")
                            })
                        }, s.Rb = function(n, i, r, e, o) {
                            function c(n, t) {
                                u(t, h), r.afterRender && r.afterRender(t, n)
                            }

                            function l(t, i) {
                                h = o.createChildContext(s.a.c(t), r.as), h.$index = i;
                                var u = "function" == typeof n ? n(t, h) : n;
                                return f(null, "ignoreTargetNode", u, h, r)
                            }
                            var h;
                            return s.j(function() {
                                var n = s.a.c(i) || [];
                                "undefined" == typeof n.length && (n = [n]), n = s.a.Y(n, function(n) {
                                    return r.includeDestroyed || n === t || null === n || !s.a.c(n._destroy)
                                }), s.q.I(s.a.Aa, null, [e, n, l, r, c])
                            }, null, {
                                $: e
                            })
                        }, s.d.template = {
                            init: function(n, t) {
                                var i = s.a.c(t());
                                return "string" == typeof i || i.name || 1 != n.nodeType && 8 != n.nodeType || (i = 1 == n.nodeType ? n.childNodes : s.e.childNodes(n), i = s.a.Mb(i), new s.l.Q(n).nodes(i)), {
                                    controlsDescendantBindings: !0
                                }
                            },
                            update: function(n, i, r, u, f) {
                                i = s.a.c(i()), r = {}, u = !0;
                                var e, o = null;
                                "string" != typeof i && (r = i, i = s.a.c(r.name), "if" in r && (u = s.a.c(r["if"])), u && "ifnot" in r && (u = !s.a.c(r.ifnot)), e = s.a.c(r.data)), "foreach" in r ? o = s.Rb(i || n, u && r.foreach || [], r, n, f) : u ? (f = "data" in r ? f.createChildContext(e, r.as) : f, o = s.za(i || n, f, r, n)) : s.e.ba(n), f = o, (e = s.a.f.get(n, "__ko__templateComputedDomDataKey__")) && "function" == typeof e.B && e.B(), s.a.f.set(n, "__ko__templateComputedDomDataKey__", f && f.ta() ? f : t)
                            }
                        }, s.g.S.template = function(n) {
                            return n = s.g.da(n), 1 == n.length && n[0].unknown || s.g.Jb(n, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                        }, s.e.L.template = !0
                    }(), s.b("setTemplateEngine", s.Ba), s.b("renderTemplate", s.za), s.a.Pa = function() {
                        function n(n, t, i, r, u) {
                            for (var o = Math.min, l = Math.max, s = [], a = n.length, f, h = t.length, c = h - a || 1, w = a + h + 1, v, p, b, y, e = 0; e <= a; e++)
                                for (p = v, s.push(v = []), b = o(h, e + c), f = l(0, e - 1); f <= b; f++) v[f] = f ? e ? n[e - 1] === t[f - 1] ? p[f - 1] : o(p[f] || w, v[f - 1] || w) + 1 : f + 1 : e + 1;
                            for (o = [], l = [], c = [], e = a, f = h; e || f;) h = s[e][f] - 1, f && h === s[e][f - 1] ? l.push(o[o.length] = {
                                status: i,
                                value: t[--f],
                                index: f
                            }) : e && h === s[e - 1][f] ? c.push(o[o.length] = {
                                status: r,
                                value: n[--e],
                                index: e
                            }) : (o.push({
                                status: "retained",
                                value: t[--f]
                            }), --e);
                            if (l.length && c.length)
                                for (n = 10 * a, t = i = 0;
                                    (u || t < n) && (y = l[i]); i++) {
                                    for (r = 0; s = c[r]; r++)
                                        if (y.value === s.value) {
                                            y.moved = s.index, s.moved = y.index, c.splice(r, 1), t = r = 0;
                                            break
                                        }
                                    t += r
                                }
                            return o.reverse()
                        }
                        return function(t, i, r) {
                            return t = t || [], i = i || [], t.length <= i.length ? n(t, i, "added", "deleted", r) : n(i, t, "deleted", "added", r)
                        }
                    }(), s.b("utils.compareArrays", s.a.Pa),
                    function() {
                        function n(n) {
                            for (; n.length && !s.a.aa(n[0]);) n.splice(0, 1);
                            if (1 < n.length) {
                                for (var t = n[0], r = n[n.length - 1], i = [t]; t !== r;) {
                                    if (t = t.nextSibling, !t) return;
                                    i.push(t)
                                }
                                Array.prototype.splice.apply(n, [0, n.length].concat(i))
                            }
                            return n
                        }

                        function i(i, r, u, f, e) {
                            var o = [];
                            return i = s.j(function() {
                                var t = r(u, e, n(o)) || [];
                                0 < o.length && (s.a.eb(o, t), f && s.q.I(f, null, [u, t, e])), o.splice(0, o.length), s.a.R(o, t)
                            }, null, {
                                $: i,
                                Qa: function() {
                                    return !s.a.pb(o)
                                }
                            }), {
                                O: o,
                                j: i.ta() ? i : t
                            }
                        }
                        s.a.Aa = function(r, u, f, e, o) {
                            function rt(t, i) {
                                h = k[i], g !== i && (tt[t] = h), h.ra(g++), n(h.O), d.push(h), y.push(h)
                            }

                            function v(n, t) {
                                if (n)
                                    for (var i = 0, r = t.length; i < r; i++) t[i] && s.a.p(t[i].O, function(r) {
                                        n(r, i, t[i].X)
                                    })
                            }
                            var c, b, ut;
                            u = u || [], e = e || {};
                            var b = s.a.f.get(r, "setDomNodeChildrenFromArrayMapping_lastMappingResult") === t,
                                k = s.a.f.get(r, "setDomNodeChildrenFromArrayMapping_lastMappingResult") || [],
                                it = s.a.Z(k, function(n) {
                                    return n.X
                                }),
                                l = s.a.Pa(it, u, e.dontLimitMoves),
                                d = [],
                                a = 0,
                                g = 0,
                                nt = [],
                                y = [];
                            u = [];
                            for (var tt = [], it = [], h, c = 0, p, w; p = l[c]; c++) switch (w = p.moved, p.status) {
                                case "deleted":
                                    w === t && (h = k[a], h.j && h.j.B(), nt.push.apply(nt, n(h.O)), e.beforeRemove && (u[c] = h, y.push(h))), a++;
                                    break;
                                case "retained":
                                    rt(c, a++);
                                    break;
                                case "added":
                                    w !== t ? rt(c, w) : (h = {
                                        X: p.value,
                                        ra: s.m(g++)
                                    }, d.push(h), y.push(h), b || (it[c] = h))
                            }
                            for (v(e.beforeMove, tt), s.a.p(nt, e.beforeRemove ? s.H : s.removeNode), c = 0, b = s.e.firstChild(r); h = y[c]; c++) {
                                for (h.O || s.a.extend(h, i(r, f, h.X, o, h.ra)), a = 0; l = h.O[a]; b = l.nextSibling, ut = l, a++) l !== b && s.e.Va(r, l, ut);
                                !h.Fb && o && (o(h.X, h.O, h.ra), h.Fb = !0)
                            }
                            v(e.beforeRemove, u), v(e.afterMove, tt), v(e.afterAdd, it), s.a.f.set(r, "setDomNodeChildrenFromArrayMapping_lastMappingResult", d)
                        }
                    }(), s.b("utils.setDomNodeChildrenFromArrayMapping", s.a.Aa), s.D = function() {
                        this.allowTemplateRewriting = !1
                    }, s.D.prototype = new s.v, s.D.prototype.renderTemplateSource = function(n) {
                        var t = (9 > s.a.ca ? 0 : n.nodes) ? n.nodes() : null;
                        return t ? s.a.N(t.cloneNode(!0).childNodes) : (n = n.text(), s.a.xa(n))
                    }, s.D.sa = new s.D, s.Ba(s.D.sa), s.b("nativeTemplateEngine", s.D),
                    function() {
                        s.ua = function() {
                            var n = this.Ib = function() {
                                if ("undefined" == typeof i || !i.tmpl) return 0;
                                try {
                                    if (0 <= i.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2
                                } catch (n) {}
                                return 1
                            }();
                            this.renderTemplateSource = function(t, u, f) {
                                if (f = f || {}, 2 > n) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                                var e = t.data("precompiled");
                                return e || (e = t.text() || "", e = i.template(null, "{{ko_with $item.koBindingContext}}" + e + "{{/ko_with}}"), t.data("precompiled", e)), t = [u.$data], u = i.extend({
                                    koBindingContext: u
                                }, f.templateOptions), u = i.tmpl(e, t, u), u.appendTo(r.createElement("div")), i.fragments = {}, u
                            }, this.createJavaScriptEvaluatorBlock = function(n) {
                                return "{{ko_code ((function() { return " + n + " })()) }}"
                            }, this.addTemplate = function(n, t) {
                                r.write("<script type='text/html' id='" + n + "'>" + t + "<\/script>")
                            }, 0 < n && (i.tmpl.tag.ko_code = {
                                open: "__.push($1 || '');"
                            }, i.tmpl.tag.ko_with = {
                                open: "with($1) {",
                                close: "} "
                            })
                        }, s.ua.prototype = new s.v;
                        var n = new s.ua;
                        0 < n.Ib && s.Ba(n), s.b("jqueryTmplTemplateEngine", s.ua)
                    }()
            })
        })()
    }(), function() {
        function c(t, i) {
            var r = t ? t[i.full] || t[i.parent] || t[i.name] || {} : {};
            return n && n(i, r, t), r
        }

        function t(n) {
            return null === n || void 0 === n
        }

        function u(n) {
            return null === n || void 0 === n || n.constructor === String || n.constructor === Number || n.constructor === Boolean || n instanceof Date
        }

        function i(n, f, o, s) {
            var a, h, p, w, b, k, d;
            if (s = s || c(f, o), a = s.custom) k = !0, "function" == typeof a ? h = a(n) : (h = a.map(n), t(h) || (h.___$mapCustom = a.map, a.unmap && (h.___$unmapCustom = a.unmap)));
            else if (s.append) k = !0, h = n;
            else {
                if (s.exclude) return k = !0, e;
                if (u(n)) h = o.parentIsArray ? n : v(n);
                else if (n instanceof Array) {
                    for (h = [], p = 0, a = n.length; p < a; p++) h[p] = i(n[p], f, {
                        name: "[i]",
                        parent: o.name + "[i]",
                        full: o.full + "[i]",
                        parentIsArray: !0
                    });
                    (!o.parentIsArray || l) && (w = {
                        name: "[i]",
                        parent: o.name + "[i]",
                        full: o.full + "[i]",
                        parentIsArray: !0
                    }, h = y(h), (n = s.arrayChildId) && (h.___$childIdName = n), h.pushFromModel = function(n) {
                        n = i(n, f, w), h.push(n)
                    }, h.unshiftFromModel = function(n) {
                        n = i(n, f, w), h.unshift(n)
                    }, h.popToModel = function(n) {
                        return n = h.pop(), r(n, w)
                    }, h.shiftToModel = function(n) {
                        return n = h.shift(), r(n, w)
                    })
                } else if (n.constructor === Object)
                    for (p in h = {}, n) w = {
                        name: p,
                        parent: ("[i]" === o.name ? o.parent : o.name) + "." + p,
                        full: o.full + "." + p
                    }, d = n[p], (a = u(d) ? c(f, w) : void 0) && a.custom ? (h.___$customChildren = h.___$customChildren || {}, h.___$customChildren[p] = a.custom, h[p] = "function" == typeof a.custom ? a.custom(n[p]) : a.custom.map(n[p])) : (a = i(d, f, w, a), a !== e && (h[p] = a))
            }
            return !k && (b = s.extend) && ("function" == typeof b ? h = b(h) || h : b.constructor === Object && ("function" == typeof b.map && (h = b.map(h) || h), "function" == typeof b.unmap && (h.___$unmapExtend = b.unmap))), h
        }

        function r(i, o) {
            var c, s, a, h = f(i),
                l;
            if (l = i !== h, n && n(o), !l && i && i.constructor === Function) return e;
            if (i && i.___$unmapCustom) c = i.___$unmapCustom(i);
            else if (l && u(h) || t(h)) c = h;
            else if (h instanceof Array)
                for (c = [], s = 0, a = h.length; s < a; s++) c[s] = r(h[s], {
                    name: "[i]",
                    parent: o.name + "[i]",
                    full: o.full + "[i]"
                });
            else if (h.constructor === Object)
                for (s in c = {}, h) "___$" !== s.substr(0, 4) && (i.___$customChildren && i.___$customChildren[s] && i.___$customChildren[s].unmap ? c[s] = i.___$customChildren[s].unmap(h[s]) : (l = h[s], ko.isComputed(l) || (a = f(l)) && a.constructor === Function) || (l = r(l, {
                    name: s,
                    parent: ("[i]" === o.name ? o.parent : o.name) + "." + s,
                    full: o.full + "." + s
                }), l !== e && (c[s] = l)));
            else l || "function" == typeof h || (c = h);
            return i && i.___$unmapExtend && (c = i.___$unmapExtend(c, i)), c
        }

        function o(i, r, e) {
            var s, c, l, v, p, y, h = f(r);
            if (c = r !== h, n && n(e), c && t(h) ^ t(i)) r(i);
            else if (i && h && h.constructor == Object && i.constructor === Object)
                for (s in i) r.___$customChildren && r.___$customChildren[s] ? (l = r.___$customChildren[s].map || r.___$customChildren[s], h[s] = l(i[s])) : (l = h[s], !c && h.hasOwnProperty(s) && (u(l) || l && l.constructor === Array) ? h[s] = i[s] : l && "function" == typeof l.___$mapCustom ? a(l) ? (v = l.___$mapCustom(i[s]), v = f(v), l(v)) : h[s] = h[s].___$mapCustom(i[s]) : t(i[s]) && h[s] && h[s].constructor === Object ? h[s] = i[s] : o(i[s], h[s], {
                    name: s,
                    parent: ("[i]" === e.name ? e.parent : e.name) + "." + s,
                    full: e.full + "." + s
                }, h));
            else if (h && h instanceof Array)
                if (y = r.___$childIdName) {
                    for (v = [], s = i.length - 1; 0 <= s; s--) {
                        for (l = !1, p = i[s][y], c = h.length - 1; 0 <= c; c--)
                            if (p === h[c][y]()) {
                                o(i[s], h[c], {
                                    name: "[i]",
                                    parent: e.name + "[i]",
                                    full: e.full + "[i]"
                                }), l = !0, v[c] = !0;
                                break
                            }
                        l || r.splice(s, 1)
                    }
                    for (s = i.length - 1; 0 <= s; s--) v[s] || r.pushFromModel(i[s])
                } else if (c = [], h = r.___$mapCustom, "function" == typeof h) {
                for (s = 0, e = i.length; s < e; s++) c[s] = i[s];
                r(h(c))
            } else
                for (r(c), s = 0, e = i ? i.length : 0; s < e; s++) r.pushFromModel(i[s]);
            else c && r(i)
        }

        function s(t, i) {
            l = t.makeChildArraysObservable, window.console && t.logging ? (console.log(i), n = function(n, t, i) {
                console.log("- " + (t && t.settingType ? t.settingType + " " + n.full + " (matched: '" + ((i[n.full] ? n.full : "") || (i[n.parent] ? n.parent : "") || n.name) + "')" : "default " + n.full))
            }) : n = void 0
        }
        var f = ko.utils.unwrapObservable,
            a = ko.isObservable,
            v = ko.observable,
            y = ko.observableArray,
            h = {
                name: "{root}",
                parent: "{root}",
                full: "{root}"
            },
            n, l, e = function() {};
        ko.viewmodel = {
            options: {
                makeChildArraysObservable: !0,
                logging: !1
            },
            fromModel: function(n, t) {
                var f = {},
                    c = t ? t.shared || {} : {},
                    o, r, u, v, e, a, l;
                for (e in t)
                    if (o = t[e] || {}, "shared" !== e)
                        if (o instanceof Array)
                            for (r = 0, v = o.length; r < v; r++) u = o[r], f[u] = f[u] || {}, f[u][e] = !0, f[u].settingType = f[u].settingType ? "multiple" : e;
                        else if (o.constructor === Object)
                    for (u in o) {
                        if (f[u] = f[u] || {}, r = o[u], (r = "arrayChildId" !== e && r && r.constructor === String && c[r] ? c[r] : r) && r.constructor === Object)
                            for (a in r)(l = r[a]) && l.constructor == String && c[l] && (r[a] = c[l]);
                        f[u][e] = r, f[u].settingType = f[u].settingType ? "multiple" : e
                    }
                return s(this.options, "Mapping From Model"), i(n, f, h)
            },
            toModel: function(n) {
                return s(this.options, "Mapping To Model"), r(n, h)
            },
            updateFromModel: function(n, t) {
                return s(this.options, "Update From Model"), o(t, n, h)
            }
        }
    }(), function(n) {
        function t(t, i, r) {
            var s = i(),
                f = ko.utils.unwrapObservable(s),
                h = r(),
                e, o;
            if (typeof f == "string" && (f = {
                    widget: f
                }), e = f.widget, o = f.options, typeof n.fn[e] != "function") throw new Error("jqueryui binding doesn't recognize '" + e + "' as jQuery UI widget");
            if (h.options && !o && t.tagName !== "SELECT") throw new Error("jqueryui binding options should be specified like this:\n  data-bind='jqueryui: {widget:32f00c915f33483b915ab82fa06f475f1c9946a3quot;" + e + "32f00c915f33483b915ab82fa06f475f1c9946a3quot;, options:{...} }'");
            return {
                widgetName: e,
                widgetOptions: o
            }
        }
        ko.bindingHandlers.jqueryui = {
            update: function(i, r, u, f) {
                var e = t(i, r, u, f);
                n(i)[e.widgetName](e.widgetOptions)
            }
        }
    }(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(n) {
    "use strict";

    function t() {
        var i = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            },
            n;
        for (n in t)
            if (void 0 !== i.style[n]) return {
                end: t[n]
            };
        return !1
    }
    n.fn.emulateTransitionEnd = function(t) {
        var i = !1,
            u = this,
            r;
        n(this).one(n.support.transition.end, function() {
            i = !0
        });
        return r = function() {
            i || n(u).trigger(n.support.transition.end)
        }, setTimeout(r, t), this
    }, n(function() {
        n.support.transition = t()
    })
}(jQuery), + function(n) {
    "use strict";
    var i = '[data-dismiss="alert"]',
        t = function(t) {
            n(t).on("click", i, this.close)
        },
        r;
    t.prototype.close = function(t) {
        function f() {
            i.trigger("closed.bs.alert").remove()
        }
        var u = n(this),
            r = u.attr("data-target"),
            i;
        r || (r = u.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), i = n(r), t && t.preventDefault(), i.length || (i = u.hasClass("alert") ? u : u.parent()), i.trigger(t = n.Event("close.bs.alert")), t.isDefaultPrevented() || (i.removeClass("in"), n.support.transition && i.hasClass("fade") ? i.one(n.support.transition.end, f).emulateTransitionEnd(150) : f())
    }, r = n.fn.alert, n.fn.alert = function(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.alert");
            u || r.data("bs.alert", u = new t(this)), "string" == typeof i && u[i].call(r)
        })
    }, n.fn.alert.Constructor = t, n.fn.alert.noConflict = function() {
        return n.fn.alert = r, this
    }, n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery), + function(n) {
    "use strict";
    var t = function(i, r) {
            this.$element = n(i), this.options = n.extend({}, t.DEFAULTS, r), this.isLoading = !1
        },
        i;
    t.DEFAULTS = {
        loadingText: "loading..."
    }, t.prototype.setState = function(t) {
        var r = "disabled",
            i = this.$element,
            u = i.is("input") ? "val" : "html",
            f = i.data();
        t += "Text", f.resetText || i.data("resetText", i[u]()), i[u](f[t] || this.options[t]), setTimeout(n.proxy(function() {
            "loadingText" == t ? (this.isLoading = !0, i.addClass(r).attr(r, r)) : this.isLoading && (this.isLoading = !1, i.removeClass(r).removeAttr(r))
        }, this), 0)
    }, t.prototype.toggle = function() {
        var t = !0,
            i = this.$element.closest('[data-toggle="buttons"]'),
            n;
        i.length && (n = this.$element.find("input"), "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : i.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")), t && this.$element.toggleClass("active")
    }, i = n.fn.button, n.fn.button = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.button"),
                f = "object" == typeof i && i;
            r || u.data("bs.button", r = new t(this, f)), "toggle" == i ? r.toggle() : i && r.setState(i)
        })
    }, n.fn.button.Constructor = t, n.fn.button.noConflict = function() {
        return n.fn.button = i, this
    }, n(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(t) {
        var i = n(t.target);
        i.hasClass("btn") || (i = i.closest(".btn")), i.button("toggle"), t.preventDefault()
    })
}(jQuery), + function(n) {
    "use strict";
    var t = function(t, i) {
            this.$element = n(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", n.proxy(this.pause, this)).on("mouseleave", n.proxy(this.cycle, this))
        },
        i;
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, t.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
    }, t.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, t.prototype.to = function(t) {
        var r = this,
            i = this.getActiveIndex();
        if (!(t > this.$items.length - 1) && !(0 > t)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            r.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", n(this.$items[t]))
    }, t.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, t.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, t.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, t.prototype.slide = function(t, i) {
        var u = this.$element.find(".item.active"),
            r = i || u[t](),
            s = this.interval,
            f = "next" == t ? "left" : "right",
            h = "next" == t ? "first" : "last",
            e = this,
            o;
        if (!r.length) {
            if (!this.options.wrap) return;
            r = this.$element.find(".item")[h]()
        }
        return r.hasClass("active") ? this.sliding = !1 : (o = n.Event("slide.bs.carousel", {
            relatedTarget: r[0],
            direction: f
        }), this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (this.sliding = !0, s && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function() {
            var t = n(e.$indicators.children()[e.getActiveIndex()]);
            t && t.addClass("active")
        })), n.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, u.addClass(f), r.addClass(f), u.one(n.support.transition.end, function() {
            r.removeClass([t, f].join(" ")).addClass("active"), u.removeClass(["active", f].join(" ")), e.sliding = !1, setTimeout(function() {
                e.$element.trigger("slid.bs.carousel")
            }, 0)
        }).emulateTransitionEnd(1e3 * u.css("transition-duration").slice(0, -1))) : (u.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), s && this.cycle(), this))
    }, i = n.fn.carousel, n.fn.carousel = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.carousel"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i),
                e = "string" == typeof i ? i : f.slide;
            r || u.data("bs.carousel", r = new t(this, f)), "number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
        })
    }, n.fn.carousel.Constructor = t, n.fn.carousel.noConflict = function() {
        return n.fn.carousel = i, this
    }, n(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
        var f, i = n(this),
            r = n(i.attr("data-target") || (f = i.attr("href")) && f.replace(/.*(?=#[^\s]+$)/, "")),
            e = n.extend({}, r.data(), i.data()),
            u = i.attr("data-slide-to");
        u && (e.interval = !1), r.carousel(e), (u = i.attr("data-slide-to")) && r.data("bs.carousel").to(u), t.preventDefault()
    }), n(window).on("load", function() {
        n('[data-ride="carousel"]').each(function() {
            var t = n(this);
            t.carousel(t.data())
        })
    })
}(jQuery), + function(n) {
    "use strict";
    var t = function(i, r) {
            this.$element = n(i), this.options = n.extend({}, t.DEFAULTS, r), this.transitioning = null, this.options.parent && (this.$parent = n(this.options.parent)), this.options.toggle && this.toggle()
        },
        i;
    t.DEFAULTS = {
        toggle: !0
    }, t.prototype.dimension = function() {
        var n = this.$element.hasClass("width");
        return n ? "width" : "height"
    }, t.prototype.show = function() {
        var u, t, r, i, f, e;
        if (!this.transitioning && !this.$element.hasClass("in") && (u = n.Event("show.bs.collapse"), this.$element.trigger(u), !u.isDefaultPrevented())) {
            if (t = this.$parent && this.$parent.find("> .panel > .in"), t && t.length) {
                if (r = t.data("bs.collapse"), r && r.transitioning) return;
                t.collapse("hide"), r || t.data("bs.collapse", null)
            }
            if (i = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[i](0), this.transitioning = 1, f = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[i]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                }, !n.support.transition) return f.call(this);
            e = n.camelCase(["scroll", i].join("-")), this.$element.one(n.support.transition.end, n.proxy(f, this)).emulateTransitionEnd(350)[i](this.$element[0][e])
        }
    }, t.prototype.hide = function() {
        var i, t, r;
        if (!this.transitioning && this.$element.hasClass("in") && (i = n.Event("hide.bs.collapse"), this.$element.trigger(i), !i.isDefaultPrevented())) return t = this.dimension(), this.$element[t](this.$element[t]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1, r = function() {
            this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
        }, n.support.transition ? void this.$element[t](0).one(n.support.transition.end, n.proxy(r, this)).emulateTransitionEnd(350) : r.call(this)
    }, t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i = n.fn.collapse, n.fn.collapse = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.collapse"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i);
            !r && f.toggle && "show" == i && (i = !i), r || u.data("bs.collapse", r = new t(this, f)), "string" == typeof i && r[i]()
        })
    }, n.fn.collapse.Constructor = t, n.fn.collapse.noConflict = function() {
        return n.fn.collapse = i, this
    }, n(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(t) {
        var e, i = n(this),
            s = i.attr("data-target") || t.preventDefault() || (e = i.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""),
            r = n(s),
            u = r.data("bs.collapse"),
            h = u ? "toggle" : i.data(),
            f = i.attr("data-parent"),
            o = f && n(f);
        u && u.transitioning || (o && o.find('[data-toggle=collapse][data-parent="' + f + '"]').not(i).addClass("collapsed"), i[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), r.collapse(h)
    })
}(jQuery), + function(n) {
    "use strict";

    function r(t) {
        n(e).remove(), n(i).each(function() {
            var i = u(n(this)),
                r = {
                    relatedTarget: this
                };
            i.hasClass("open") && (i.trigger(t = n.Event("hide.bs.dropdown", r)), t.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", r))
        })
    }

    function u(t) {
        var i = t.attr("data-target"),
            r;
        return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
    }
    var e = ".dropdown-backdrop",
        i = "[data-toggle=dropdown]",
        t = function(t) {
            n(t).on("click.bs.dropdown", this.toggle)
        },
        f;
    t.prototype.toggle = function(t) {
        var f = n(this),
            i, o, e;
        if (!f.is(".disabled, :disabled")) {
            if (i = u(f), o = i.hasClass("open"), r(), !o) {
                if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n('<div class="dropdown-backdrop"/>').insertAfter(n(this)).on("click", r), e = {
                        relatedTarget: this
                    }, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
                i.toggleClass("open").trigger("shown.bs.dropdown", e), f.focus()
            }
            return !1
        }
    }, t.prototype.keydown = function(t) {
        var e, o, s, h, f, r;
        if (/(38|40|27)/.test(t.keyCode) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
            if (o = u(e), s = o.hasClass("open"), !s || s && 27 == t.keyCode) return 27 == t.which && o.find(i).focus(), e.click();
            h = " li:not(.divider):visible a", f = o.find("[role=menu]" + h + ", [role=listbox]" + h), f.length && (r = f.index(f.filter(":focus")), 38 == t.keyCode && r > 0 && r--, 40 == t.keyCode && r < f.length - 1 && r++, ~r || (r = 0), f.eq(r).focus())
        }
    }, f = n.fn.dropdown, n.fn.dropdown = function(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this)), "string" == typeof i && u[i].call(r)
        })
    }, n.fn.dropdown.Constructor = t, n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f, this
    }, n(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i + ", [role=menu], [role=listbox]", t.prototype.keydown)
}(jQuery), + function(n) {
    "use strict";
    var t = function(t, i) {
            this.options = i, this.$element = n(t), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        },
        i;
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, t.prototype.toggle = function(n) {
        return this[this.isShown ? "hide" : "show"](n)
    }, t.prototype.show = function(t) {
        var i = this,
            r = n.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)), this.backdrop(function() {
            var u = n.support.transition && i.$element.hasClass("fade"),
                r;
            i.$element.parent().length || i.$element.appendTo(document.body), i.$element.show().scrollTop(0), u && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus(), r = n.Event("shown.bs.modal", {
                relatedTarget: t
            }), u ? i.$element.find(".modal-dialog").one(n.support.transition.end, function() {
                i.$element.focus().trigger(r)
            }).emulateTransitionEnd(300) : i.$element.focus().trigger(r)
        }))
    }, t.prototype.hide = function(t) {
        t && t.preventDefault(), t = n.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one(n.support.transition.end, n.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, t.prototype.enforceFocus = function() {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
            this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.focus()
        }, this))
    }, t.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", n.proxy(function(n) {
            27 == n.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, t.prototype.hideModal = function() {
        var n = this;
        this.$element.hide(), this.backdrop(function() {
            n.removeBackdrop(), n.$element.trigger("hidden.bs.modal")
        })
    }, t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, t.prototype.backdrop = function(t) {
        var r = this.$element.hasClass("fade") ? "fade" : "",
            i;
        if (this.isShown && this.options.backdrop) {
            if (i = n.support.transition && r, this.$backdrop = n('<div class="modal-backdrop ' + r + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", n.proxy(function(n) {
                    n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            i ? this.$backdrop.one(n.support.transition.end, t).emulateTransitionEnd(150) : t()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(n.support.transition.end, t).emulateTransitionEnd(150) : t()) : t && t()
    }, i = n.fn.modal, n.fn.modal = function(i, r) {
        return this.each(function() {
            var f = n(this),
                u = f.data("bs.modal"),
                e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
            u || f.data("bs.modal", u = new t(this, e)), "string" == typeof i ? u[i](r) : e.show && u.show(r)
        })
    }, n.fn.modal.Constructor = t, n.fn.modal.noConflict = function() {
        return n.fn.modal = i, this
    }, n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var i = n(this),
            r = i.attr("href"),
            u = n(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            f = u.data("bs.modal") ? "toggle" : n.extend({
                remote: !/#/.test(r) && r
            }, u.data(), i.data());
        i.is("a") && t.preventDefault(), u.modal(f, this).one("hide", function() {
            i.is(":visible") && i.focus()
        })
    }), n(document).on("show.bs.modal", ".modal", function() {
        n(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        n(document.body).removeClass("modal-open")
    })
}(jQuery), + function(n) {
    "use strict";
    var t = function(n, t) {
            this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", n, t)
        },
        i;
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, t.prototype.init = function(t, i, r) {
        var f, e, u, o, s;
        for (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), f = this.options.trigger.split(" "), e = f.length; e--;)
            if (u = f[e], "click" == u) this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
            else "manual" != u && (o = "hover" == u ? "mouseenter" : "focusin", s = "hover" == u ? "mouseleave" : "focusout", this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
        this.options.selector ? this._options = n.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.getOptions = function(t) {
        return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, t.prototype.getDelegateOptions = function() {
        var t = {},
            i = this.getDefaults();
        return this._options && n.each(this._options, function(n, r) {
            i[n] != r && (t[n] = r)
        }), t
    }, t.prototype.enter = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show()
    }, t.prototype.leave = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, t.prototype.show = function() {
        var h = n.Event("show.bs." + this.type),
            u, i, v, s;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(h), h.isDefaultPrevented()) return;
            u = this, i = this.tip(), this.setContent(), this.options.animation && i.addClass("fade");
            var t = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                c = /\s?auto?\s?/i,
                l = c.test(t);
            l && (t = t.replace(c, "") || "top"), i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(t), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
            var r = this.getPosition(),
                f = i[0].offsetWidth,
                e = i[0].offsetHeight;
            if (l) {
                var o = this.$element.parent(),
                    y = t,
                    a = document.documentElement.scrollTop || document.body.scrollTop,
                    p = "body" == this.options.container ? window.innerWidth : o.outerWidth(),
                    w = "body" == this.options.container ? window.innerHeight : o.outerHeight(),
                    b = "body" == this.options.container ? 0 : o.offset().left;
                t = "bottom" == t && r.top + r.height + e - a > w ? "top" : "top" == t && r.top - a - e < 0 ? "bottom" : "right" == t && r.right + f > p ? "left" : "left" == t && r.left - f < b ? "right" : t, i.removeClass(y).addClass(t)
            }
            v = this.getCalculatedOffset(t, r, f, e), this.applyPlacement(v, t), this.hoverState = null, s = function() {
                u.$element.trigger("shown.bs." + u.type)
            }, n.support.transition && this.$tip.hasClass("fade") ? i.one(n.support.transition.end, s).emulateTransitionEnd(150) : s()
        }
    }, t.prototype.applyPlacement = function(t, i) {
        var c, r = this.tip(),
            l = r[0].offsetWidth,
            e = r[0].offsetHeight,
            o = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10),
            f, u, h;
        isNaN(o) && (o = 0), isNaN(s) && (s = 0), t.top = t.top + o, t.left = t.left + s, n.offset.setOffset(r[0], n.extend({
            using: function(n) {
                r.css({
                    top: Math.round(n.top),
                    left: Math.round(n.left)
                })
            }
        }, t), 0), r.addClass("in"), f = r[0].offsetWidth, u = r[0].offsetHeight, ("top" == i && u != e && (c = !0, t.top = t.top + e - u), /bottom|top/.test(i)) ? (h = 0, t.left < 0 && (h = -2 * t.left, t.left = 0, r.offset(t), f = r[0].offsetWidth, u = r[0].offsetHeight), this.replaceArrow(h - l + f, f, "left")) : this.replaceArrow(u - e, u, "top"), c && r.offset(t)
    }, t.prototype.replaceArrow = function(n, t, i) {
        this.arrow().css(i, n ? 50 * (1 - n / t) + "%" : "")
    }, t.prototype.setContent = function() {
        var n = this.tip(),
            t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), n.removeClass("fade in top bottom left right")
    }, t.prototype.hide = function() {
        function r() {
            "in" != t.hoverState && i.detach(), t.$element.trigger("hidden.bs." + t.type)
        }
        var t = this,
            i = this.tip(),
            u = n.Event("hide.bs." + this.type);
        return this.$element.trigger(u), u.isDefaultPrevented() ? void 0 : (i.removeClass("in"), n.support.transition && this.$tip.hasClass("fade") ? i.one(n.support.transition.end, r).emulateTransitionEnd(150) : r(), this.hoverState = null, this)
    }, t.prototype.fixTitle = function() {
        var n = this.$element;
        (n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    }, t.prototype.hasContent = function() {
        return this.getTitle()
    }, t.prototype.getPosition = function() {
        var t = this.$element[0];
        return n.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
            width: t.offsetWidth,
            height: t.offsetHeight
        }, this.$element.offset())
    }, t.prototype.getCalculatedOffset = function(n, t, i, r) {
        return "bottom" == n ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : "top" == n ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        } : "left" == n ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - i
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    }, t.prototype.getTitle = function() {
        var i, t = this.$element,
            n = this.options;
        return i = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, t.prototype.tip = function() {
        return this.$tip = this.$tip || n(this.options.template)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, t.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, t.prototype.enable = function() {
        this.enabled = !0
    }, t.prototype.disable = function() {
        this.enabled = !1
    }, t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, t.prototype.toggle = function(t) {
        var i = t ? n(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, t.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    }, i = n.fn.tooltip, n.fn.tooltip = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tooltip"),
                f = "object" == typeof i && i;
            (r || "destroy" != i) && (r || u.data("bs.tooltip", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    }, n.fn.tooltip.Constructor = t, n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = i, this
    }
}(jQuery), + function(n) {
    "use strict";
    var t = function(n, t) {
            this.init("popover", n, t)
        },
        i;
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    }), t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.setContent = function() {
        var n = this.tip(),
            i = this.getTitle(),
            t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html" : "text"](i), n.find(".popover-content")[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t), n.removeClass("fade top bottom left right in"), n.find(".popover-title").html() || n.find(".popover-title").hide()
    }, t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, t.prototype.getContent = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, t.prototype.tip = function() {
        return this.$tip || (this.$tip = n(this.options.template)), this.$tip
    }, i = n.fn.popover, n.fn.popover = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.popover"),
                f = "object" == typeof i && i;
            (r || "destroy" != i) && (r || u.data("bs.popover", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    }, n.fn.popover.Constructor = t, n.fn.popover.noConflict = function() {
        return n.fn.popover = i, this
    }
}(jQuery), + function(n) {
    "use strict";

    function t(i, r) {
        var u, f = n.proxy(this.process, this);
        this.$element = n(n(i).is("body") ? window : i), this.$body = n("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = n.extend({}, t.DEFAULTS, r), this.selector = (this.options.target || (u = n(i).attr("href")) && u.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = n([]), this.targets = n([]), this.activeTarget = null, this.refresh(), this.process()
    }
    t.DEFAULTS = {
        offset: 10
    }, t.prototype.refresh = function() {
        var i = this.$element[0] == window ? "offset" : "position",
            t;
        this.offsets = n([]), this.targets = n([]), t = this, this.$body.find(this.selector).map(function() {
            var f = n(this),
                u = f.data("target") || f.attr("href"),
                r = /^#./.test(u) && n(u);
            return r && r.length && r.is(":visible") && [
                [r[i]().top + (!n.isWindow(t.$scrollElement.get(0)) && t.$scrollElement.scrollTop()), u]
            ] || null
        }).sort(function(n, t) {
            return n[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var n, i = this.$scrollElement.scrollTop() + this.options.offset,
            f = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
            e = f - this.$scrollElement.height(),
            t = this.offsets,
            r = this.targets,
            u = this.activeTarget;
        if (i >= e) return u != (n = r.last()[0]) && this.activate(n);
        if (u && i <= t[0]) return u != (n = r[0]) && this.activate(n);
        for (n = t.length; n--;) u != r[n] && i >= t[n] && (!t[n + 1] || i <= t[n + 1]) && this.activate(r[n])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    };
    var i = n.fn.scrollspy;
    n.fn.scrollspy = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.scrollspy"),
                f = "object" == typeof i && i;
            r || u.data("bs.scrollspy", r = new t(this, f)), "string" == typeof i && r[i]()
        })
    }, n.fn.scrollspy.Constructor = t, n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = i, this
    }, n(window).on("load", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            t.scrollspy(t.data())
        })
    })
}(jQuery), + function(n) {
    "use strict";
    var t = function(t) {
            this.element = n(t)
        },
        i;
    t.prototype.show = function() {
        var t = this.element,
            e = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target"),
            r, u, f;
        (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), t.parent("li").hasClass("active")) || (r = e.find(".active:last a")[0], u = n.Event("show.bs.tab", {
            relatedTarget: r
        }), (t.trigger(u), u.isDefaultPrevented()) || (f = n(i), this.activate(t.parent("li"), e), this.activate(f, f.parent(), function() {
            t.trigger({
                type: "shown.bs.tab",
                relatedTarget: r
            })
        })))
    }, t.prototype.activate = function(t, i, r) {
        function f() {
            u.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), e ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
        }
        var u = i.find("> .active"),
            e = r && n.support.transition && u.hasClass("fade");
        e ? u.one(n.support.transition.end, f).emulateTransitionEnd(150) : f(), u.removeClass("in")
    }, i = n.fn.tab, n.fn.tab = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this)), "string" == typeof i && r[i]()
        })
    }, n.fn.tab.Constructor = t, n.fn.tab.noConflict = function() {
        return n.fn.tab = i, this
    }, n(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
        t.preventDefault(), n(this).tab("show")
    })
}(jQuery), + function(n) {
    "use strict";
    var t = function(i, r) {
            this.options = n.extend({}, t.DEFAULTS, r), this.$window = n(window).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this)), this.$element = n(i), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
        },
        i;
    t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {
        offset: 0
    }, t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$window.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - n
    }, t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    }, t.prototype.checkPosition = function() {
        var i, e, h;
        if (this.$element.is(":visible")) {
            var c = n(document).height(),
                o = this.$window.scrollTop(),
                s = this.$element.offset(),
                r = this.options.offset,
                f = r.top,
                u = r.bottom;
            "top" == this.affixed && (s.top += o), "object" != typeof r && (u = f = r), "function" == typeof f && (f = r.top(this.$element)), "function" == typeof u && (u = r.bottom(this.$element)), i = null != this.unpin && o + this.unpin <= s.top ? !1 : null != u && s.top + this.$element.height() >= c - u ? "bottom" : null != f && f >= o ? "top" : !1, this.affixed !== i && (this.unpin && this.$element.css("top", ""), e = "affix" + (i ? "-" + i : ""), h = n.Event(e + ".bs.affix"), this.$element.trigger(h), h.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(t.RESET).addClass(e).trigger(n.Event(e.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
                top: c - u - this.$element.height()
            })))
        }
    }, i = n.fn.affix, n.fn.affix = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.affix"),
                f = "object" == typeof i && i;
            r || u.data("bs.affix", r = new t(this, f)), "string" == typeof i && r[i]()
        })
    }, n.fn.affix.Constructor = t, n.fn.affix.noConflict = function() {
        return n.fn.affix = i, this
    }, n(window).on("load", function() {
        n('[data-spy="affix"]').each(function() {
            var i = n(this),
                t = i.data();
            t.offset = t.offset || {}, t.offsetBottom && (t.offset.bottom = t.offsetBottom), t.offsetTop && (t.offset.top = t.offsetTop), i.affix(t)
        })
    })
}(jQuery),
function(n) {
    n(["jquery"], function(n) {
        var t = function() {
            var u = {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    fadeIn: 300,
                    fadeOut: 1e3,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message"
                },
                f = function(n, t, u) {
                    return r({
                        iconClass: i().iconClasses.error,
                        message: n,
                        optionsOverride: u,
                        title: t
                    })
                },
                e = function(t) {
                    var i = n("#" + t.containerId);
                    return i.length ? i : (i = n("<div/>").attr("id", t.containerId).addClass(t.positionClass), i.appendTo(n("body")), i)
                },
                i = function() {
                    return n.extend({}, u, t.options)
                },
                o = function(n, t, u) {
                    return r({
                        iconClass: i().iconClasses.info,
                        message: n,
                        optionsOverride: u,
                        title: t
                    })
                },
                r = function(t) {
                    var r = i(),
                        o = t.iconClass || r.iconClass;
                    typeof t.optionsOverride != "undefined" && (r = n.extend(r, t.optionsOverride), o = t.optionsOverride.iconClass || o);
                    var s = null,
                        h = e(r),
                        u = n("<div/>"),
                        c = n("<div/>"),
                        l = n("<div/>"),
                        a = {
                            options: r,
                            map: t
                        };
                    t.iconClass && u.addClass(r.toastClass).addClass(o), t.title && (c.append(t.title).addClass(r.titleClass), u.append(c)), t.message && (l.append(t.message).addClass(r.messageClass), u.append(l));
                    var f = function() {
                            if (!(n(":focus", u).length > 0)) {
                                var t = function(n) {
                                        return u.fadeOut(r.fadeOut, n)
                                    },
                                    i = function() {
                                        u.is(":visible") || (u.remove(), h.children().length === 0 && h.remove())
                                    };
                                t(i)
                            }
                        },
                        v = function() {
                            (r.timeOut > 0 || r.extendedTimeOut > 0) && (s = setTimeout(f, r.extendedTimeOut))
                        },
                        y = function() {
                            clearTimeout(s), u.stop(!0, !0).fadeIn(r.fadeIn)
                        };
                    return u.hide(), h.prepend(u), u.fadeIn(r.fadeIn), r.timeOut > 0 && (s = setTimeout(f, r.timeOut)), u.hover(y, v), !r.onclick && r.tapToDismiss && u.click(f), r.onclick && u.click(function() {
                        r.onclick() && f()
                    }), r.debug && console && console.log(a), u
                },
                s = function(n, t, u) {
                    return r({
                        iconClass: i().iconClasses.success,
                        message: n,
                        optionsOverride: u,
                        title: t
                    })
                },
                h = function(n, t, u) {
                    return r({
                        iconClass: i().iconClasses.warning,
                        message: n,
                        optionsOverride: u,
                        title: t
                    })
                },
                c = function(t) {
                    var u = i(),
                        r = n("#" + u.containerId),
                        f;
                    if (t && n(":focus", t).length === 0) {
                        f = function() {
                            t.is(":visible") || (t.remove(), r.children().length === 0 && r.remove())
                        }, t.fadeOut(u.fadeOut, f);
                        return
                    }
                    r.length && r.fadeOut(u.fadeOut, function() {
                        r.remove()
                    })
                };
            return {
                clear: c,
                error: f,
                info: o,
                options: {},
                success: s,
                version: "1.1.2",
                warning: h
            }
        }();
        return t
    })
}(typeof define == "function" && define.amd ? define : function(n, t) {
    typeof module != "undefined" && module.exports ? module.exports = t(require(n[0])) : window.toastr = t(window.jQuery)
}),
function() {
    var i = function(t) {
            return n(t).toLowerCase()
        },
        n = function(n) {
            return n >= 200 && n <= 299 ? "Success" : n >= 400 && n <= 599 ? "Error" : "Info"
        },
        r = function(t, r) {
            var f, e, u;
            t && (t.messages ? $.messageToast(t.messages) : t.responseText ? (u = JSON.parse(t.responseText), f = u.title || n(t.status), e = u.type || i(t.status), u.messages ? $.messageToast(u.messages) : u.text ? toastr[e](u.text, f) : u.Message ? toastr[e](u.Message, f) : r ? toastr[e](r, f) : toastr[e](u, f)) : t.statusText && (f = n(t.status), e = i(t.status), toastr[e](t.statusText, f)))
        },
        t = null,
        u = function(n) {
            return $.ajax(n)
        };
    $.extend({
        ajaxToast: function(n) {
            return $.ajax(n).done(function(n, t, i) {
                r(i)
            }).fail(function(n, t, i) {
                r(n, i)
            })
        },
        messageToast: function(n) {
            if (n.length)
                for (var t = 0; t < n.length; t += 1) $.messageToast(n[t]);
            else n.text && (toastr[n.type] ? toastr[n.type](n.text, n.title) : toastr.info(n.text, n.title))
        },
        ajaxMemoized: function(n) {
            return t || (t = memoize(u)), t(n)
        }
    })
}(),
function(n) {
    n.fn.outerHtml = function() {
        var t, i, r;
        return 0 == this.length ? !1 : (t = this[0], i = t.tagName.toLowerCase(), t.outerHTML) ? t.outerHTML : (r = n.map(t.attributes, function(n) {
            return n.name + '="' + n.value + '"'
        }), "<" + i + (r.length > 0 ? " " + r.join(" ") : "") + ">" + t.innerHTML + "<\/" + i + ">")
    }
}(jQuery), ko.bindingHandlers.typeahead = {
        init: function(n, t) {
            var i = $(n),
                r = ko.utils.unwrapObservable(t());
            i.attr("autocomplete", "off").typeahead({
                source: r
            })
        }
    }, ko.bindingHandlers.progress = {
        init: function(n, t, i, r) {
            var u = $(n),
                f = $("<div/>", {
                    "class": "bar",
                    "data-bind": "style: { width:" + t() + " }"
                });
            u.attr("id", guid()).addClass("progress progress-info").append(f), ko.applyBindingsToDescendants(r, u[0])
        }
    }, ko.bindingHandlers.alert = {
        init: function(n, t) {
            var r = $(n),
                i = ko.utils.unwrapObservable(t()),
                u = $("<button/>", {
                    type: "button",
                    "class": "close",
                    "data-dismiss": "alert"
                }).html("&times;"),
                f = $("<p/>").html(i.message);
            r.addClass("alert alert-" + i.priority).append(u).append(f)
        }
    }, ko.bindingHandlers.tooltip = {
        init: function(n, t) {
            var r = ko.utils.unwrapObservable(t()),
                e = r.title,
                u = r.placement,
                f = r.trigger,
                i = {
                    title: e
                };
            ko.utils.extend(i, ko.bindingHandlers.tooltip.options), u && (i.placement = u), f && (i.trigger = f), $(n).tooltip(i)
        },
        options: {
            placement: "top",
            trigger: "hover"
        }
    }, ko.bindingHandlers.popover = {
        init: function(n, t, i, r, u) {
            var e = ko.utils.unwrapObservable(t()),
                c = e.title,
                l = e.template,
                f = "click",
                h;
            e.trigger && (f = e.trigger), "hover" === f ? f = "mouseenter mouseleave" : "focus" === f && (f = "focus blur");
            var s = e.placement,
                a = $("#" + l).html(),
                v = guid(),
                o = "ko-bs-popover-" + v,
                y = u.createChildContext(r),
                p = $("<div/>", {
                    "class": "ko-popover",
                    id: o
                }).html(a);
            return options = {
                content: $(p[0]).outerHtml(),
                title: c
            }, s && (options.placement = s), h = $.extend({}, ko.bindingHandlers.popover.options, options), $(n).bind(f, function() {
                var n = "show",
                    t = $(this),
                    i;
                "click" !== f && (n = "toggle"), t.popover(h).popover(n), i = $("#" + o), $(".ko-popover").not(i).parents(".popover").remove(), $("#" + o).is(":visible") && ko.applyBindingsToDescendants(y, $("#" + o)[0]), $(document).on("click", '[data-dismiss="popover"]', function() {
                    t.popover("hide")
                })
            }), {
                controlsDescendantBindings: !0
            }
        },
        options: {
            placement: "right",
            title: "",
            html: !0,
            content: "",
            trigger: "manual"
        }
    },
    function(n) {
        Number.prototype.toOrdinal || (Number.prototype.toOrdinal = function() {
            switch (this % 100) {
                case 11:
                case 12:
                case 13:
                    return this + "th"
            }
            switch (this % 10) {
                case 1:
                    return this + "st";
                case 2:
                    return this + "nd";
                case 3:
                    return this + "rd";
                default:
                    return this + "th"
            }
        }), n.toPrettyJSON = function(t) {
            for (var l = n.toJSON(t), i = "", s = l, u = 0, a = s.length, h = "&nbsp;&nbsp;&nbsp;&nbsp;", c = "<br />", r = "", e, o, f = 0; f < a; f++) {
                if (r = s.substring(f, f + 1), r == "}" || r == "]")
                    for (i = i + c, u = u - 1, e = 0; e < u; e++) i = i + h;
                if (i = i + r, r == "{" || r == "[" || r == ",")
                    for (i = i + c, (r == "{" || r == "[") && (u = u + 1), o = 0; o < u; o++) i = i + h
            }
            return i
        }, n.sortedObservableArray = function(t, i) {
            var r = n.observableArray(t),
                u = function() {
                    r.sub.dispose(), r.sort(i), r.sub = r.subscribe(u)
                },
                f = r.subscribe(u);
            return r.sub = f, r
        }, n.protectedObservable = function(t) {
            var i = n.observable(t),
                r = t,
                u = n.computed({
                    read: function() {
                        return i()
                    },
                    write: function(n) {
                        r = n
                    }
                });
            return u.commit = function() {
                r !== i() && i(r)
            }, u.reset = function() {
                i.valueHasMutated(), r = i()
            }, u
        }, n.bindingHandlers.enterKey = {
            init: function(t, i, r, u) {
                n.utils.registerEventHandler(t, "keyup", function(r) {
                    return r.keyCode === 13 && (n.utils.triggerEvent(t, "change"), i().call(u, u)), !0
                })
            }
        }, n.bindingHandlers.escKey = {
            init: function(t, i, r, u) {
                n.utils.registerEventHandler(window, "keyup", function(n) {
                    return n.keyCode === 27 && i().call(u, u), !0
                })
            }
        }, n.bindingHandlers.datepicker = {
            init: function(t, i, r) {
                var u = r().datepickerOptions || {};
                $(t).datepicker(u), n.utils.registerEventHandler(t, "change", function() {
                    var n = i();
                    n($(t).datepicker("getDate"))
                }), n.utils.domNodeDisposal.addDisposeCallback(t, function() {
                    $(t).datepicker("destroy")
                })
            },
            update: function(t, i) {
                var r = n.utils.unwrapObservable(i()),
                    u;
                String(r).indexOf("/Date(") == 0 && (r = new Date(parseInt(r.replace(/\/Date\((.*?)\)\//gi, "$1")))), u = $(t).datepicker("getDate"), r - u != 0 && $(t).datepicker("setDate", r)
            }
        }
    }(ko),
    function() {
        Function.prototype.memoized = function(n) {
            return this._values || (this._values = {}), this._values[n] !== undefined ? this._values[n] : this._values[n] = this.apply(this, arguments)
        }, Function.prototype.memoize = function() {
            var n = this;
            return function() {
                return n.memoized.apply(n, arguments)
            }
        }
    }(),
    function(n, t) {
        function ft() {}

        function o(n) {
            return n
        }

        function et(n, t) {
            return n > t ? 1 : t > n ? -1 : 0
        }

        function f(n, t) {
            return fi(n, t)
        }

        function ot(n) {
            return "function" != typeof n.toString && "string" == typeof(n + "")
        }

        function k(n) {
            return n && "object" == typeof n ? h.call(n) == v : !1
        }

        function l(n) {
            return "function" == typeof n
        }

        function d(n, t, i, r) {
            var u, g, nt, e, w, b, s, c, a, f, rt, o;
            if (n === t) return 0 !== n || 1 / n == 1 / t;
            if (g = typeof n, nt = typeof t, !(n !== n || n && vt[g] || t && vt[nt])) return !1;
            if (null == n || null == t) return n === t;
            if (e = h.call(n), w = h.call(t), e == v && (e = y), w == v && (w = y), e != w) return !1;
            switch (e) {
                case gt:
                case ni:
                    return +n == +t;
                case ii:
                    return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
                case ri:
                case ui:
                    return n == t + ""
            }
            if (b = e == dt, !b && (e != y || !tt && (ot(n) || ot(t)) || (s = !it && k(n) ? Object : n.constructor, c = !it && k(t) ? Object : t.constructor, s != c && !(l(s) && s instanceof s && l(c) && c instanceof c)))) return !1;
            for (a = i.length; a--;)
                if (i[a] == n) return r[a] == t;
            if (f = 0, u = !0, i.push(n), r.push(t), b) {
                for (a = n.length, f = t.length, u = f == n.length; f--;)
                    if (rt = t[f], !(u = d(n[f], rt, i, r))) break;
                return u
            }
            for (o in t)
                if (p.call(t, o)) return f++, u = p.call(n, o) && d(n[o], t[o], i, r);
            if (u)
                for (o in n)
                    if (p.call(n, o)) return u = --f > -1;
            return i.pop(), r.pop(), u
        }

        function wt(n) {
            if (!1 & n) return 2 === n;
            for (var i = Math.sqrt(n), t = 3; i >= t;) {
                if (0 == n % t) return !1;
                t += 2
            }
            return !0
        }

        function st(n) {
            for (var r, t, i = 0; w.length > i; ++i)
                if (r = w[i], r >= n) return r;
            for (t = 1 | n; w[w.length - 1] > t;) {
                if (wt(t)) return t;
                t += 2
            }
            return n
        }

        function bt(n) {
            var t = 0,
                i, r, u;
            if (!n.length) return t;
            for (i = 0, r = n.length; r > i; i++) u = n.charCodeAt(i), t = (t << 5) - t + u, t &= t;
            return t
        }

        function kt(n) {
            var t = 668265261;
            return n = 61 ^ n ^ n >>> 16, n += n << 3, n ^= n >>> 4, n *= t, n ^= n >>> 15
        }

        function g() {
            return {
                key: null,
                value: null,
                next: 0,
                hashCode: 0
            }
        }

        function i(n) {
            n && n.dispose()
        }

        function ht(n, t, i, r) {
            this.keySelector = n, this.comparer = t, this.descending = i, this.next = r
        }
        var a = "object" == typeof exports && exports,
            nt = ("object" == typeof module && module && module.exports == a && module, "object" == typeof global && global),
            at, c, ut;
        nt.global === nt && (n = nt);
        var e = {
                Internals: {}
            },
            s = "Sequence contains no elements.",
            ct = "Invalid operation",
            lt = Array.prototype.slice;
        ({}).hasOwnProperty, at = this.inherits = e.Internals.inherits = function(n, t) {
            function i() {
                this.constructor = n
            }
            i.prototype = t.prototype, n.prototype = new i
        }, e.Internals.addProperties = function(n) {
            for (var i, r, u = lt.call(arguments, 1), t = 0, f = u.length; f > t; t++) {
                i = u[t];
                for (r in i) n[r] = i[r]
            }
        };
        var tt, vt = {
                boolean: !1,
                "function": !0,
                object: !0,
                number: !1,
                string: !1,
                undefined: !1
            },
            v = "[object Arguments]",
            dt = "[object Array]",
            gt = "[object Boolean]",
            ni = "[object Date]",
            ti = "[object Function]",
            ii = "[object Number]",
            y = "[object Object]",
            ri = "[object RegExp]",
            ui = "[object String]",
            h = Object.prototype.toString,
            p = Object.prototype.hasOwnProperty,
            it = h.call(arguments) == v;
        try {
            tt = !(h.call(document) == y && !({
                toString: 0
            } + ""))
        } catch (ci) {
            tt = !0
        }
        it || (k = function(n) {
            return n && "object" == typeof n ? p.call(n, "callee") : !1
        }), l(/x/) && (l = function(n) {
            return "function" == typeof n && h.call(n) == ti
        });
        var fi = e.Internals.isEqual = function(n, t) {
                return d(n, t, [], [])
            },
            w = [1, 3, 7, 13, 31, 61, 127, 251, 509, 1021, 2039, 4093, 8191, 16381, 32749, 65521, 131071, 262139, 524287, 1048573, 2097143, 4194301, 8388593, 16777213, 33554393, 67108859, 134217689, 268435399, 536870909, 1073741789, 2147483647],
            yt = "no such key",
            ei = "duplicate key",
            rt = function() {
                var n = 0;
                return function(t) {
                    if (null == t) throw Error(yt);
                    if ("string" == typeof t) return bt(t);
                    if ("number" == typeof t) return kt(t);
                    if ("boolean" == typeof t) return t === !0 ? 1 : 0;
                    if (t instanceof Date) return t.getTime();
                    if (t.getHashCode) return t.getHashCode();
                    var i = 17 * n++;
                    return t.getHashCode = function() {
                        return i
                    }, i
                }
            }(),
            b = function(n, t) {
                if (0 > n) throw Error("out of range");
                n > 0 && this._initialize(n), this.comparer = t || et, this.freeCount = 0, this.size = 0, this.freeList = -1
            };
        DictionaryPrototype = b.prototype, DictionaryPrototype._initialize = function(n) {
            var t, i = st(n);
            for (this.buckets = Array(i), this.entries = Array(i), t = 0; i > t; t++) this.buckets[t] = -1, this.entries[t] = g();
            this.freeList = -1
        }, DictionaryPrototype.add = function(n, t) {
            return this._insert(n, t, !0)
        }, DictionaryPrototype._insert = function(n, i, r) {
            this.buckets || this._initialize(0);
            for (var u, e = 2147483647 & rt(n), o = e % this.buckets.length, f = this.buckets[o]; f >= 0; f = this.entries[f].next)
                if (this.entries[f].hashCode === e && this.comparer(this.entries[f].key, n)) {
                    if (r) throw Error(ei);
                    return this.entries[f].value = i, t
                }
            this.freeCount > 0 ? (u = this.freeList, this.freeList = this.entries[u].next, --this.freeCount) : (this.size === this.entries.length && (this._resize(), o = e % this.buckets.length), u = this.size, ++this.size), this.entries[u].hashCode = e, this.entries[u].next = this.buckets[o], this.entries[u].key = n, this.entries[u].value = i, this.buckets[o] = u
        }, DictionaryPrototype._resize = function() {
            for (var u = st(2 * this.size), r = Array(u), t, i, f, n = 0; r.length > n; ++n) r[n] = -1;
            for (t = Array(u), n = 0; this.size > n; ++n) t[n] = this.entries[n];
            for (n = this.size; u > n; ++n) t[n] = g();
            for (i = 0; this.size > i; ++i) f = t[i].hashCode % u, t[i].next = r[f], r[f] = i;
            this.buckets = r, this.entries = t
        }, DictionaryPrototype.remove = function(n) {
            if (this.buckets)
                for (var r = 2147483647 & rt(n), u = r % this.buckets.length, i = -1, t = this.buckets[u]; t >= 0; t = this.entries[t].next) {
                    if (this.entries[t].hashCode === r && this.comparer(this.entries[t].key, n)) return 0 > i ? this.buckets[u] = this.entries[t].next : this.entries[i].next = this.entries[t].next, this.entries[t].hashCode = -1, this.entries[t].next = this.freeList, this.entries[t].key = null, this.entries[t].value = null, this.freeList = t, ++this.freeCount, !0;
                    i = t
                }
            return !1
        }, DictionaryPrototype.clear = function() {
            var n, t;
            if (!(0 >= this.size)) {
                for (n = 0, t = this.buckets.length; t > n; ++n) this.buckets[n] = -1;
                for (n = 0; this.size > n; ++n) this.entries[n] = g();
                this.freeList = -1, this.size = 0
            }
        }, DictionaryPrototype._findEntry = function(n) {
            if (this.buckets)
                for (var i = 2147483647 & rt(n), t = this.buckets[i % this.buckets.length]; t >= 0; t = this.entries[t].next)
                    if (this.entries[t].hashCode === i && this.comparer(this.entries[t].key, n)) return t;
            return -1
        }, DictionaryPrototype.length = function() {
            return this.size - this.freeCount
        }, DictionaryPrototype.tryGetValue = function(n) {
            var i = this._findEntry(n);
            return i >= 0 ? this.entries[i].value : t
        }, DictionaryPrototype.getValues = function() {
            var i = 0,
                t = [],
                n;
            if (this.entries)
                for (n = 0; this.size > n; n++) this.entries[n].hashCode >= 0 && (t[i++] = this.entries[n].value);
            return t
        }, DictionaryPrototype.get = function(n) {
            var t = this._findEntry(n);
            if (t >= 0) return this.entries[t].value;
            throw Error(yt);
        }, DictionaryPrototype.set = function(n, t) {
            this._insert(n, t, !1)
        }, DictionaryPrototype.has = function(n) {
            return this._findEntry(n) >= 0
        }, DictionaryPrototype.toEnumerable = function() {
            var n = this;
            return new u(function() {
                var i, t = 0;
                return r(function() {
                    if (!n.entries) return !1;
                    for (;;) {
                        if (!(n.size > t)) return !1;
                        if (n.entries[t].hashCode >= 0) {
                            var r = n.entries[t];
                            return i = {
                                key: r.key,
                                value: r.value
                            }, t++, !0
                        }
                    }
                }, function() {
                    return i
                }, ft)
            })
        };
        var oi = function() {
                function t(n) {
                    this.map = n
                }
                var n = t.prototype;
                return n.has = function(n) {
                    return this.map.has(n)
                }, n.length = function() {
                    return this.map.length()
                }, n.get = function(n) {
                    return c(this.map.get(n))
                }, n.toEnumerable = function() {
                    return this.map.toEnumerable().select(function(n) {
                        var t = c(n.value);
                        return t.key = n.key, t
                    })
                }, t
            }(),
            pt = e.Enumerator = function(n, t, i) {
                this.moveNext = n, this.getCurrent = t, this.dispose = i
            },
            r = pt.create = function(n, t, i) {
                var r = !1;
                return i || (i = ft), new pt(function() {
                    if (r) return !1;
                    var t = n();
                    return t || (r = !0, i()), t
                }, function() {
                    return t()
                }, function() {
                    r || (i(), r = !0)
                })
            },
            u = e.Enumerable = function() {
                function t(n) {
                    this.getEnumerator = n
                }

                function e(n, t, i) {
                    i || (i = o);
                    var r = n,
                        u = this.getEnumerator(),
                        f = 0;
                    try {
                        for (; u.moveNext();) r = t(r, u.getCurrent(), f++, this)
                    } finally {
                        u.dispose()
                    }
                    return i ? i(r) : r
                }

                function h(n) {
                    var i, t = this.getEnumerator(),
                        r = 0;
                    try {
                        if (!t.moveNext()) throw Error(s);
                        for (i = t.getCurrent(); t.moveNext();) i = n(i, t.getCurrent(), r++, this)
                    } catch (u) {
                        throw u;
                    } finally {
                        t.dispose()
                    }
                    return i
                }

                function u(n, t) {
                    t || (t = f);
                    for (var i = this.length; i--;)
                        if (t(this[i], n)) return i;
                    return -1
                }

                function l(n, t) {
                    var i = u.call(this, n, t);
                    return -1 === i ? !1 : (this.splice(i, 1), !0)
                }
                var n = t.prototype;
                return n.aggregate = function() {
                    var n = 1 === arguments.length ? h : e;
                    return n.apply(this, arguments)
                }, n.reduce = function() {
                    return 2 === arguments.length ? e.call(this, arguments[1], arguments[0]) : h.apply(this, arguments)
                }, n.all = n.every = function(n, t) {
                    var r = this.getEnumerator(),
                        u = 0;
                    try {
                        for (; r.moveNext();)
                            if (!n.call(t, r.getCurrent(), u++, this)) return !1
                    } catch (f) {
                        throw f;
                    } finally {
                        i(r)
                    }
                    return !0
                }, n.every = n.all, n.any = function(n, t) {
                    var r = this.getEnumerator(),
                        u = 0;
                    try {
                        for (; r.moveNext();)
                            if (!n || n.call(t, r.getCurrent(), u++, this)) return !0
                    } catch (f) {
                        throw f;
                    } finally {
                        i(r)
                    }
                    return !1
                }, n.some = n.any, n.average = function(n) {
                    if (n) return this.select(n).average();
                    var t = this.getEnumerator(),
                        r = 0,
                        u = 0;
                    try {
                        for (; t.moveNext();) r++, u += t.getCurrent()
                    } catch (f) {
                        throw f;
                    } finally {
                        i(t)
                    }
                    if (0 === r) throw Error(s);
                    return u / r
                }, n.concat = function() {
                    var n = lt.call(arguments, 0);
                    return n.unshift(this), si.apply(null, n)
                }, n.contains = function(n, t) {
                    t || (t = f);
                    var r = this.getEnumerator();
                    try {
                        for (; r.moveNext();)
                            if (t(n, r.getCurrent())) return !0
                    } catch (u) {
                        throw u;
                    } finally {
                        i(r)
                    }
                    return !1
                }, n.count = function(n, t) {
                    var u = 0,
                        f = 0,
                        r = this.getEnumerator();
                    try {
                        for (; r.moveNext();)(!n || n.call(t, r.getCurrent(), f++, this)) && u++
                    } catch (e) {
                        throw e;
                    } finally {
                        i(r)
                    }
                    return u
                }, n.defaultIfEmpty = function(n) {
                    var u = this;
                    return new t(function() {
                        var f, t, e = !0,
                            o = !1;
                        return r(function() {
                            return t || (t = u.getEnumerator()), o ? !1 : e ? (e = !1, t.moveNext() ? (f = t.getCurrent(), !0) : (f = n, o = !0, !0)) : t.moveNext() ? (f = t.getCurrent(), !0) : !1
                        }, function() {
                            return f
                        }, function() {
                            i(t)
                        })
                    })
                }, n.distinct = function(n) {
                    n || (n = f);
                    var e = this;
                    return new t(function() {
                        var f, t, o = [];
                        return r(function() {
                            for (t || (t = e.getEnumerator());;) {
                                if (!t.moveNext()) return !1;
                                var i = t.getCurrent();
                                if (-1 === u.call(o, i, n)) return f = i, o.push(f), !0
                            }
                        }, function() {
                            return f
                        }, function() {
                            i(t)
                        })
                    })
                }, n.elementAt = function(n) {
                    return this.skip(n).first()
                }, n.elementAtOrDefault = function(n) {
                    return this.skip(n).firstOrDefault()
                }, n.except = function(n, e) {
                    e || (e = f);
                    var o = this;
                    return new t(function() {
                        var f, t, s = [],
                            h = n.getEnumerator();
                        try {
                            for (; h.moveNext();) s.push(h.getCurrent())
                        } catch (c) {
                            throw c;
                        } finally {
                            i(h)
                        }
                        return r(function() {
                            for (t || (t = o.getEnumerator());;) {
                                if (!t.moveNext()) return !1;
                                if (f = t.getCurrent(), -1 === u.call(s, f, e)) return s.push(f), !0
                            }
                        }, function() {
                            return f
                        }, function() {
                            i(t)
                        })
                    })
                }, n.first = function(n) {
                    var t = this.getEnumerator(),
                        r;
                    try {
                        for (; t.moveNext();)
                            if (r = t.getCurrent(), !n || n(r)) return r
                    } catch (u) {
                        throw u;
                    } finally {
                        i(t)
                    }
                    throw Error(s);
                }, n.firstOrDefault = function(n) {
                    var t = this.getEnumerator(),
                        r;
                    try {
                        for (; t.moveNext();)
                            if (r = t.getCurrent(), !n || n(r)) return r
                    } catch (u) {
                        throw u;
                    } finally {
                        i(t)
                    }
                    return null
                }, n.forEach = function(n, t) {
                    var r = this.getEnumerator(),
                        u = 0;
                    try {
                        for (; r.moveNext();) n.call(t, r.getCurrent(), u++, this)
                    } catch (f) {
                        throw f;
                    } finally {
                        i(r)
                    }
                }, n.groupBy = function(n, u, e, s) {
                    u || (u = o), s || (s = f);
                    var h = this;
                    return new t(function() {
                        var l, f, a, t, p, o = new b(0, s),
                            v = [],
                            w = 0,
                            y = h.getEnumerator();
                        try {
                            for (; y.moveNext();) a = y.getCurrent(), t = n(a), o.has(t) || (o.add(t, []), v.push(t)), p = u(a), o.get(t).push(p)
                        } catch (k) {
                            throw k;
                        } finally {
                            i(y)
                        }
                        return r(function() {
                            var n;
                            return v.length > w ? (f = v[w++], n = c(o.get(f)), e ? l = e(f, n) : (n.key = f, l = n), !0) : !1
                        }, function() {
                            return l
                        })
                    })
                }, n.groupJoin = function(n, u, e, s, h) {
                    var c = this;
                    return h || (h = f), new t(function() {
                        var t, f, l;
                        return r(function() {
                            if (t || (t = c.getEnumerator()), f || (f = n.toLookup(e, o, h)), !t.moveNext()) return !1;
                            var i = t.getCurrent(),
                                r = f.get(u(i));
                            return l = s(i, r), !0
                        }, function() {
                            return l
                        }, function() {
                            i(t)
                        })
                    })
                }, n.join = function(n, u, e, s, h) {
                    var c = this;
                    return h || (h = f), new t(function() {
                        var t, a, f, l, v = 0;
                        return r(function() {
                            var i, r;
                            for (t || (t = c.getEnumerator()), f || (f = n.toLookup(e, o, h));;) {
                                if (null != l) {
                                    if (i = l[v++], i) return a = s(t.getCurrent(), i), !0;
                                    i = null, v = 0
                                }
                                if (!t.moveNext()) return !1;
                                r = u(t.getCurrent()), l = f.has(r) ? f.get(r).toArray() : []
                            }
                        }, function() {
                            return a
                        }, function() {
                            i(t)
                        })
                    })
                }, n.intersect = function(n, u) {
                    u || (u = f);
                    var e = this;
                    return new t(function() {
                        var o, t, s = [],
                            f = n.getEnumerator();
                        try {
                            for (; f.moveNext();) s.push(f.getCurrent())
                        } catch (h) {
                            throw h;
                        } finally {
                            i(f)
                        }
                        return r(function() {
                            for (t || (t = e.getEnumerator());;) {
                                if (!t.moveNext()) return !1;
                                var n = t.getCurrent();
                                if (l.call(s, n, u)) return o = n, !0
                            }
                        }, function() {
                            return o
                        }, function() {
                            i(t)
                        })
                    })
                }, n.last = function(n) {
                    var u, f = !1,
                        t = this.getEnumerator(),
                        r;
                    try {
                        for (; t.moveNext();) r = t.getCurrent(), (!n || n(r)) && (f = !0, u = r)
                    } catch (e) {
                        throw e;
                    } finally {
                        i(t)
                    }
                    if (f) return u;
                    throw Error(s);
                }, n.lastOrDefault = function(n) {
                    var r, u = !1,
                        t = this.getEnumerator(),
                        i;
                    try {
                        for (; t.moveNext();) i = t.getCurrent(), (!n || n(i)) && (u = !0, r = i)
                    } catch (f) {
                        throw f;
                    } finally {
                        t.dispose()
                    }
                    return u ? r : null
                }, n.max = function(n) {
                    var t, i, r, u;
                    if (n) return this.select(n).max();
                    i = !1, r = this.getEnumerator();
                    try {
                        for (; r.moveNext();) u = r.getCurrent(), i ? u > t && (t = u) : (t = u, i = !0)
                    } catch (f) {
                        throw f;
                    } finally {
                        r.dispose()
                    }
                    if (!i) throw Error(s);
                    return t
                }, n.min = function(n) {
                    var t, r, u, f;
                    if (n) return this.select(n).min();
                    r = !1, u = this.getEnumerator();
                    try {
                        for (; u.moveNext();) f = u.getCurrent(), r ? t > f && (t = f) : (t = f, r = !0)
                    } catch (e) {
                        throw e;
                    } finally {
                        i(u)
                    }
                    if (!r) throw Error(s);
                    return t
                }, n.orderBy = function(n, t) {
                    return new ut(this, n, t, !1)
                }, n.orderByDescending = function(n, t) {
                    return new ut(this, n, t, !0)
                }, n.reverse = function() {
                    var t = [],
                        n = this.getEnumerator();
                    try {
                        for (; n.moveNext();) t.unshift(n.getCurrent())
                    } catch (r) {
                        throw r;
                    } finally {
                        i(n)
                    }
                    return c(t)
                }, n.select = function(n, u) {
                    var f = this;
                    return new t(function() {
                        var e, t, o = 0;
                        return r(function() {
                            return t || (t = f.getEnumerator()), t.moveNext() ? (e = n.call(u, t.getCurrent(), o++, f), !0) : !1
                        }, function() {
                            return e
                        }, function() {
                            i(t)
                        })
                    })
                }, n.map = n.select, n.selectMany = function(n, u) {
                    var f = this;
                    return new t(function() {
                        var o, e, t, s = 0;
                        return r(function() {
                            for (e || (e = f.getEnumerator());;) {
                                if (!t) {
                                    if (!e.moveNext()) return !1;
                                    t = n(e.getCurrent(), s++).getEnumerator()
                                }
                                if (t.moveNext()) {
                                    if (o = t.getCurrent(), u) {
                                        var r = e.getCurrent();
                                        o = u(r, o)
                                    }
                                    return !0
                                }
                                i(t), t = null
                            }
                        }, function() {
                            return o
                        }, function() {
                            i(t), i(e)
                        })
                    })
                }, t.sequenceEqual = function(n, t, i) {
                    return n.sequenceEqual(t, i)
                }, n.sequenceEqual = function(n, t) {
                    t || (t = f);
                    var u = this.getEnumerator(),
                        r = n.getEnumerator();
                    try {
                        for (; u.moveNext();)
                            if (!r.moveNext() || !t(u.getCurrent(), r.getCurrent())) return !1;
                        return r.moveNext() ? !1 : !0
                    } catch (e) {
                        throw e;
                    } finally {
                        i(u), i(r)
                    }
                }, n.single = function(n) {
                    var t, r;
                    if (n) return this.where(n).single();
                    t = this.getEnumerator();
                    try {
                        if (!t.moveNext()) throw Error(s);
                        if (r = t.getCurrent(), t.moveNext()) throw Error(ct);
                        return r
                    } catch (u) {
                        throw u;
                    } finally {
                        i(t)
                    }
                }, n.singleOrDefault = function(n) {
                    var t, r;
                    if (n) return this.where(n).single();
                    t = this.getEnumerator();
                    try {
                        for (; t.moveNext();) {
                            if (r = t.getCurrent(), t.moveNext()) throw Error(ct);
                            return r
                        }
                    } catch (u) {
                        throw u;
                    } finally {
                        i(t)
                    }
                    return null
                }, n.skip = function(n) {
                    var u = this;
                    return new t(function() {
                        var f, t, e = !1;
                        return r(function() {
                            if (t || (t = u.getEnumerator()), !e) {
                                for (var i = 0; n > i; i++)
                                    if (!t.moveNext()) return !1;
                                e = !0
                            }
                            return t.moveNext() ? (f = t.getCurrent(), !0) : !1
                        }, function() {
                            return f
                        }, function() {
                            i(t)
                        })
                    })
                }, n.skipWhile = function(n, u) {
                    var f = this;
                    return new t(function() {
                        var e, t, o = !1,
                            s = 0;
                        return r(function() {
                            if (t || (t = f.getEnumerator()), !o) {
                                for (;;) {
                                    if (!t.moveNext()) return !1;
                                    var i = t.getCurrent();
                                    if (!n.call(u, i, s++, f)) return e = i, !0
                                }
                                o = !0
                            }
                            return t.moveNext() ? (e = t.getCurrent(), !0) : !1
                        }, function() {
                            return e
                        }, function() {
                            i(t)
                        })
                    })
                }, n.sum = function(n) {
                    if (n) return this.select(n).sum();
                    var r = 0,
                        t = this.getEnumerator();
                    try {
                        for (; t.moveNext();) r += t.getCurrent()
                    } catch (u) {
                        throw u;
                    } finally {
                        i(t)
                    }
                    return r
                }, n.take = function(n) {
                    var u = this;
                    return new t(function() {
                        var e, t, f = n;
                        return r(function() {
                            return t || (t = u.getEnumerator()), 0 === f ? !1 : t.moveNext() ? (f--, e = t.getCurrent(), !0) : (f = 0, !1)
                        }, function() {
                            return e
                        }, function() {
                            i(t)
                        })
                    })
                }, n.takeWhile = function(n, u) {
                    var f = this;
                    return new t(function() {
                        var e, t, o = 0;
                        return r(function() {
                            return t || (t = f.getEnumerator()), t.moveNext() ? (e = t.getCurrent(), n.call(u, e, o++, f) ? !0 : !1) : !1
                        }, function() {
                            return e
                        }, function() {
                            i(t)
                        })
                    })
                }, n.toArray = function() {
                    var t = [],
                        n = this.getEnumerator();
                    try {
                        for (; n.moveNext();) t.push(n.getCurrent());
                        return t
                    } catch (n) {
                        throw n;
                    } finally {
                        i(n)
                    }
                }, n.toDictionary = function(n, t, r) {
                    var e, u, s, h;
                    t || (t = o), r || (r = f), e = new b(0, r), u = this.getEnumerator();
                    try {
                        for (; u.moveNext();) s = u.getCurrent(), h = n(s), elem = t(s), e.add(h, elem);
                        return e
                    } catch (c) {
                        throw c;
                    } finally {
                        i(u)
                    }
                }, n.toLookup = function(n, t, r) {
                    var u, e, h, s;
                    t || (t = o), r || (r = f), u = new b(0, r), e = this.getEnumerator();
                    try {
                        for (; e.moveNext();) h = e.getCurrent(), s = n(h), elem = t(h), u.has(s) || u.add(s, []), u.get(s).push(elem);
                        return new oi(u)
                    } catch (c) {
                        throw c;
                    } finally {
                        i(e)
                    }
                }, n.where = function(n, u) {
                    var f = this;
                    return new t(function() {
                        var e, t, o = 0;
                        return r(function() {
                            for (t || (t = f.getEnumerator());;) {
                                if (!t.moveNext()) return !1;
                                var i = t.getCurrent();
                                if (n.call(u, i, o++, f)) return e = i, !0
                            }
                        }, function() {
                            return e
                        }, function() {
                            i(t)
                        })
                    })
                }, n.filter = n.where, n.union = function(n, t) {
                    t || (t = f);
                    var e = this;
                    return hi(function() {
                        var o, f, s = [],
                            h = !1,
                            c = !1;
                        return r(function() {
                            for (;;) {
                                if (!f) {
                                    if (c) return !1;
                                    h ? (f = n.getEnumerator(), c = !0) : (f = e.getEnumerator(), h = !0)
                                }
                                if (f.moveNext()) {
                                    if (o = f.getCurrent(), -1 === u.call(s, o, t)) return s.push(o), !0
                                } else i(f), f = null
                            }
                        }, function() {
                            return o
                        }, function() {
                            i(f)
                        })
                    })
                }, n.zip = function(n, u) {
                    var f = this;
                    return new t(function() {
                        var t, e, o;
                        return r(function() {
                            return t || e || (t = f.getEnumerator(), e = n.getEnumerator()), t.moveNext() && e.moveNext() ? (o = u(t.getCurrent(), e.getCurrent()), !0) : !1
                        }, function() {
                            return o
                        }, function() {
                            i(t), i(e)
                        })
                    })
                }, t
            }(),
            si = u.concat = function() {
                return c(arguments).selectMany(o)
            },
            hi = u.create = function(n) {
                return new u(n)
            };
        return u.empty = function() {
            return new u(function() {
                return r(function() {
                    return !1
                }, function() {
                    throw Error(s);
                })
            })
        }, c = u.fromArray = function(n) {
            return new u(function() {
                var t, i = 0;
                return r(function() {
                    return n.length > i ? (t = n[i++], !0) : !1
                }, function() {
                    return t
                })
            })
        }, u["return"] = u.returnValue = function(n) {
            return new u(function() {
                var t = !1;
                return r(function() {
                    return t ? !1 : t = !0
                }, function() {
                    return n
                })
            })
        }, u.range = function(n, t) {
            return new u(function() {
                var i = n - 1,
                    u = n + t - 1;
                return r(function() {
                    return u > i ? (i++, !0) : !1
                }, function() {
                    return i
                })
            })
        }, u.repeat = function(n, t) {
            return new u(function() {
                var i = null == t ? -1 : t,
                    u = null != t;
                return r(function() {
                    return 0 !== i ? (u && i--, !0) : !1
                }, function() {
                    return n
                })
            })
        }, ht.prototype = {
            computeKeys: function(n, t) {
                this.keys = Array(t);
                for (var i = 0; t > i; i++) this.keys[i] = this.keySelector(n[i]);
                this.next && this.next.computeKeys(n, t)
            },
            compareKeys: function(n, t) {
                var i = this.comparer(this.keys[n], this.keys[t]);
                return 0 === i ? null == this.next ? n - t : this.next.compareKeys(n, t) : this.descending ? -i : i
            },
            sort: function(n, t) {
                this.computeKeys(n, t);
                for (var r = Array(t), i = 0; t > i; i++) r[i] = i;
                return this.quickSort(r, 0, t - 1), r
            },
            quickSort: function(n, t, i) {
                var e;
                do {
                    var r = t,
                        u = i,
                        f = n[r + (u - r >> 1)];
                    do {
                        for (; n.length > r && this.compareKeys(f, n[r]) > 0;) r++;
                        for (; u >= 0 && 0 > this.compareKeys(f, n[u]);) u--;
                        if (r > u) break;
                        u > r && (e = n[r], n[r] = n[u], n[u] = e), r++, u--
                    } while (u >= r);
                    i - r >= u - t ? (u > t && this.quickSort(n, t, u), t = r) : (i > r && this.quickSort(n, r, i), i = u)
                } while (i > t)
            }
        }, ut = function() {
            function t(n, t, i, r) {
                this.source = n, this.keySelector = t || o, this.comparer = i || et, this.descending = r
            }
            at(t, u);
            var n = t.prototype;
            return n.getEnumerableSorter = function(n) {
                var t = new ht(this.keySelector, this.comparer, this.descending, n);
                return null != this.parent && (t = this.parent.getEnumerableSorter(t)), t
            }, n.createOrderedEnumerable = function(n, i, r) {
                var u = new t(this.source, n, i, r);
                return u.parent = this, u
            }, n.getEnumerator = function() {
                var t, n = this.source.toArray(),
                    i = n.length,
                    f = this.getEnumerableSorter(),
                    e = f.sort(n, i),
                    u = 0;
                return r(function() {
                    return i > u ? (t = n[e[u++]], !0) : !1
                }, function() {
                    return t
                })
            }, n.thenBy = function(n) {
                return this.createOrderedEnumerable(n, null, !1)
            }, n.thenByDescending = function(n, t) {
                return this.createOrderedEnumerable(n, t, !1)
            }, t
        }(), "function" == typeof define && "object" == typeof define.amd && define.amd ? (n.Ix = e, define(function() {
            return e
        })) : (a ? "object" == typeof module && module && module.exports == a ? module.exports = e : a = e : n.Ix = e, t)
    }(this),
    function(n, t) {
        var i = "object" == typeof exports && exports && ("object" == typeof n && n && n == n.global && (window = n), exports);
        "function" == typeof define && define.amd ? define(["Ix", "exports"], function(i, r) {
            return n.Ix = t(n, r, i), n.Ix
        }) : "object" == typeof module && module && module.exports == i ? module.exports = t(n, module.exports, require("./l2o")) : n.Ix = t(n, {}, n.Ix)
    }(this, function(n, t, i) {
        function c() {}

        function o(n) {
            return n
        }

        function w(n, t) {
            return n > t ? 1 : t > n ? -1 : 0
        }

        function e(n, t) {
            return ct(n, t)
        }

        function et(n, t) {
            t || (t = e);
            for (var i = 0, r = this.length; r > i; i++)
                if (t(n, this[i])) return i;
            return -1
        }

        function b(n, t, i) {
            var u = [],
                r = n.getEnumerator(),
                f, e;
            try {
                if (!r.moveNext()) throw Error(lt);
                for (f = r.getCurrent(), e = t(f), u.push(f); r.moveNext();) {
                    var o = r.getCurrent(),
                        s = t(o),
                        h = i(s, e);
                    0 === h ? u.push(o) : h > 0 && (u = [o], e = s)
                }
            } finally {
                r.dispose()
            }
            return nt(u)
        }

        function l(n) {
            this.readerCount = n, this.list = {}, this.length = 0
        }

        function k() {
            this.list = [], this.length = 0
        }

        function a(n, t) {
            return function() {
                n.apply(t, arguments)
            }
        }

        function ot(n, t) {
            var i = this;
            return new r(function() {
                var e, r, u = n;
                return f(function() {
                    if (r || (r = i.getEnumerator()), !r.moveNext()) return !1;
                    var n = r.getCurrent();
                    return u = t(u, n), e = u, !0
                }, function() {
                    return e
                }, function() {
                    r && r.dispose()
                })
            })
        }

        function st(n) {
            var t = this;
            return new r(function() {
                var u, i, r, e = !1;
                return f(function() {
                    for (i || (i = t.getEnumerator());;) {
                        if (!i.moveNext()) return !1;
                        var f = i.getCurrent();
                        if (e) return r = n(r, f), u = r, !0;
                        e = !0, r = f
                    }
                }, function() {
                    return u
                }, function() {
                    i && i.dispose()
                })
            })
        }

        function ht(n, t) {
            return new r(function() {
                var i, u, r;
                return f(function() {
                    for (e || (e = n.getEnumerator());;) {
                        var u, f;
                        try {
                            u = e.moveNext(), f = e.getCurrent()
                        } catch (e) {
                            r = t(e);
                            break
                        }
                        return u ? (i = f, !0) : !1
                    }
                    return r ? (e.dispose(), e = r.getEnumerator(), e.moveNext() ? (i = e.getCurrent(), !0) : !1) : undefined
                }, function() {
                    return i
                }, function() {
                    u && u.dispose()
                })
            })
        }
        var ct = i.Internals.isEqual,
            lt = "Sequence contains no elements.",
            d = Array.prototype.slice,
            r = i.Enumerable,
            u = r.prototype,
            at = r.concat,
            g = r.empty,
            nt = r.fromArray,
            tt = r.repeat,
            f = i.Enumerator.create,
            it, s, rt, h, v, y, p, ut, ft;
        return inherits = i.Internals.inherits, u.isEmpty = function() {
            return !this.any()
        }, u.minBy = function(n, t) {
            return t || (t = w), b(this, n, function(n, i) {
                return -t(n, i)
            })
        }, u.maxBy = function(n, t) {
            return t || (t = w), b(this, n, t)
        }, it = function() {
            function n(n) {
                this.disposed = !1, this.source = n
            }
            return inherits(n, r), n.prototype.getEnumerator = function() {
                if (this.disposed) throw Error("Object disposed");
                var n, t = this;
                return f(function() {
                    return t.source.moveNext() ? (n = t.source.getCurrent(), !0) : !1
                }, function() {
                    return n
                })
            }, n.prototype.dispose = function() {
                this.disposed || (this.disposed = !0, this.source.dispose(), this.source = null)
            }, n
        }(), u.share = function(n) {
            var t = this;
            return n ? new r(function() {
                return n(t.share()).getEnumerator()
            }) : new it(t.getEnumerator())
        }, s = l.prototype, s.clear = function() {
            this.list = {}, this.length = 0
        }, s.get = function(n) {
            if (!this.list[n]) throw Error("Element no longer available in the buffer.");
            var t = this.list[n];
            return 0 == --t.length && delete this.list[n], t.value
        }, s.push = function(n) {
            this.list[this.length] = {
                value: n,
                length: this.readerCount
            }, this.length++
        }, s.done = function(n) {
            for (var t = n; this.length > t; t++) this.get(t);
            this.readerCount--
        }, rt = function() {
            function n(n) {
                this.source = n, this.buffer = new l(0), this.disposed = !1, this.stopped = !1, this.error = null
            }

            function t(n) {
                var r, t = this,
                    e = !1,
                    u = !0,
                    i = !1;
                return f(function() {
                    if (t.disposed) throw Error("Object disposed");
                    u || n++;
                    var o, f = !1;
                    if (n >= t.buffer.length) {
                        if (!t.stopped) try {
                            f = t.source.moveNext(), f && (o = t.source.getCurrent())
                        } catch (s) {
                            t.stopped = !0, t.error = s, t.source.dispose(), e = !0
                        }
                        if (t.stopped) {
                            if (t.error) throw t.buffer && t.buffer.done(n + 1), i = !0, t.error;
                            return t.buffer && t.buffer.done(n + 1), i = !0, !1
                        }
                        f && t.buffer.push(o)
                    } else f = !0;
                    return f ? (r = t.buffer.get(n), u = !1, !0) : (t.buffer && t.buffer.done(n + 1), i = !0, !1)
                }, function() {
                    return r
                }, function() {
                    i && t.buffer && t.buffer.done(n)
                })
            }
            return inherits(n, r), n.prototype.getEnumerator = function() {
                if (this.disposed) throw Error("Object disposed");
                var n = this.buffer.length;
                return this.buffer.readerCount++, t.call(this, n)
            }, n.prototype.dispose = function() {
                this.disposed || (this.source.dispose(), this.source = null, this.buffer.clear(), this.buffer = null, this.disposed = !0)
            }, n
        }(), u.publish = function(n) {
            var t = this;
            return n ? new r(function() {
                return n(t.publish()).getEnumerator()
            }) : new rt(t.getEnumerator())
        }, h = k.prototype, h.done = c, h.push = function(n) {
            this.list[this.length++] = n
        }, h.clear = function() {
            this.list = [], this.length = 0
        }, h.get = function(n) {
            return this.list[n]
        }, v = function() {
            function n(n, t) {
                this.source = n, this.buffer = t, this.stopped = !1, this.error = null, this.disposed = !1
            }
            return inherits(n, r), n.prototype.getEnumerator = function() {
                if (this.disposed) throw Error("Object disposed");
                var r, t = 0,
                    n = this,
                    e = !1,
                    u = !0,
                    i = !1;
                return f(function() {
                    if (n.disposed) throw Error("Object disposed");
                    u || t++;
                    var o, f = !1;
                    if (t >= n.buffer.length) {
                        if (!n.stopped) try {
                            f = n.source.moveNext(), f && (o = n.source.getCurrent())
                        } catch (s) {
                            n.stopped = !0, n.error = s, n.source.dispose(), e = !0
                        }
                        if (n.stopped) {
                            if (n.error) throw n.buffer && n.buffer.done(t + 1), i = !0, n.error;
                            return n.buffer && n.buffer.done(t + 1), i = !0, !1
                        }
                        f && n.buffer.push(o)
                    } else f = !0;
                    return f ? (r = n.buffer.get(t), u = !1, !0) : (n.buffer && n.buffer.done(t + 1), i = !0, !1)
                }, function() {
                    return r
                }, function() {
                    i && n.buffer && n.buffer.done(t)
                })
            }, n.prototype.dispose = function() {
                this.disposed || (this.source.dispose(), this.source = null, this.buffer.clear(), this.buffer = null, this.disposed = !0)
            }, n
        }(), u.memoize = function() {
            var n = this;
            return 0 === arguments.length ? new v(n.getEnumerator(), new k) : 1 === arguments.length && "function" == typeof arguments[0] ? new r(function() {
                return arguments[1](n.memoize()).getEnumerator()
            }) : 1 === arguments.length && "number" == typeof arguments[0] ? new v(n.getEnumerator(), new l(arguments[0])) : new r(function() {
                return arguments[1](n.memoize(arguments[0])).getEnumerator()
            })
        }, r["throw"] = r.throwException = function(n) {
            return new r(function() {
                return f(function() {
                    throw n;
                }, c)
            })
        }, y = r.defer = function(n) {
            return new r(function() {
                var t;
                return f(function() {
                    return t || (t = n().getEnumerator()), t.moveNext()
                }, function() {
                    return t.getCurrent()
                }, function() {
                    t.dispose()
                })
            })
        }, r.generate = function(n, t, i, u) {
            return new r(function() {
                var r, e, o = !1;
                return f(function() {
                    if (o) {
                        if (r = i(r), !t(r)) return !1
                    } else r = n, o = !0;
                    return e = u(r), !0
                }, function() {
                    return e
                })
            })
        }, r.using = function(n, t) {
            return new r(function() {
                var u, i, r, e = !0;
                return f(function() {
                    return e && (r = n(), i = t(r).getEnumerator(), e = !1), i.moveNext() ? (u = i.getCurrent(), !0) : !1
                }, function() {
                    return u
                }, function() {
                    i && i.dispose(), r && r.dispose()
                })
            })
        }, u["do"] = u.doAction = function(n, t, i) {
            var u, e, o, s = this;
            return "object" == typeof n ? (u = a(n.onNext, n), e = a(n.onError, n), o = a(n.onCompleted, n)) : (u = n, e = t || c, o = i || c), new r(function() {
                var n, t;
                return f(function() {
                    n || (n = s.getEnumerator());
                    try {
                        if (!n.moveNext()) return o(), !1;
                        t = n.getCurrent()
                    } catch (n) {
                        throw e(n), n;
                    }
                    return u(t), !0
                }, function() {
                    return t
                }, function() {
                    n && n.dispose()
                })
            })
        }, u.bufferWithCount = function(n, t) {
            var i = this;
            return null == t && (t = n), new r(function() {
                var e, o, u = [],
                    s = 0;
                return f(function() {
                    for (e || (e = i.getEnumerator());;) {
                        if (!e.moveNext()) return u.length > 0 ? (o = r.fromArray(u.shift()), !0) : !1;
                        0 == s % t && u.push([]);
                        for (var f = 0, h = u.length; h > f; f++) u[f].push(e.getCurrent());
                        if (u.length > 0 && u[0].length === n) return o = r.fromArray(u.shift()), ++s, !0;
                        ++s
                    }
                }, function() {
                    return o
                }, function() {
                    e.dispose()
                })
            })
        }, u.ignoreElements = function() {
            var n = this;
            return new r(function() {
                var t;
                return f(function() {
                    for (t = n.getEnumerator(); t.moveNext(););
                    return !1
                }, function() {
                    throw Error("Operation is not valid due to the current state of the object.");
                }, function() {
                    t.dispose()
                })
            })
        }, u.distinctBy = function(n, t) {
            t || (t = e);
            var i = this;
            return new r(function() {
                var u, r, e = [];
                return f(function() {
                    for (r || (r = i.getEnumerator());;) {
                        if (!r.moveNext()) return !1;
                        var f = r.getCurrent(),
                            o = n(f);
                        if (-1 === et.call(e, o, t)) return e.push(f), u = f, !0
                    }
                }, function() {
                    return u
                }, function() {
                    r && r.dispose()
                })
            })
        }, u.distinctUntilChanged = function(n, t) {
            n || (n = o), t || (t = e);
            var i = this;
            return new r(function() {
                var e, r, o, u;
                return f(function() {
                    for (r || (r = i.getEnumerator());;) {
                        if (!r.moveNext()) return !1;
                        var f = r.getCurrent(),
                            s = n(f),
                            h = !1;
                        if (u && (h = t(o, s)), !u || !h) return e = f, o = s, u = !0, !0
                    }
                }, function() {
                    return e
                }, function() {
                    r && r.dispose()
                })
            })
        }, u.expand = function(n) {
            var t = this;
            return new r(function() {
                var r, i, u = [t];
                return f(function() {
                    for (;;) {
                        if (!i) {
                            if (0 === u.length) return !1;
                            i = u.shift().getEnumerator()
                        }
                        if (i.moveNext()) return r = i.getCurrent(), u.push(n(r)), !0;
                        i.dispose(), i = null
                    }
                }, function() {
                    return r
                }, function() {
                    i && i.dispose()
                })
            })
        }, u.startWith = function() {
            return at(nt(d.call(arguments)), this)
        }, u.scan = function() {
            var n = 1 === arguments.length ? st : ot;
            return n.apply(this, arguments)
        }, u.takeLast = function(n) {
            var t = this;
            return new r(function() {
                var u, r, i;
                return f(function() {
                    if (r || (r = t.getEnumerator()), !i)
                        for (i = []; r.moveNext();) i.push(r.getCurrent()), i.length > n && i.shift();
                    return 0 === i.length ? !1 : (u = i.shift(), !0)
                }, function() {
                    return u
                }, function() {
                    r && r.dispose()
                })
            })
        }, u.skipLast = function(n) {
            var t = this;
            return new r(function() {
                var u, i, r = [];
                return f(function() {
                    for (i || (i = t.getEnumerator());;) {
                        if (!i.moveNext()) return !1;
                        if (r.push(i.getCurrent()), r.length > n) return u = r.shift(), !0
                    }
                }, function() {
                    return u
                }, function() {
                    i && i.dispose()
                })
            })
        }, u.repeat = function(n) {
            var t = this;
            return tt(0, n).selectMany(function() {
                return t
            })
        }, u["catch"] = u.catchException = function(n) {
            if (0 === arguments.length) return p(this);
            if ("function" == typeof n) return ht(this, n);
            var t = d.call(arguments);
            return t.unshift(this), p.apply(null, t)
        }, p = r["catch"] = r.catchException = function() {
            var n = r.fromArray(arguments);
            return new r(function() {
                var i, t, u, r;
                return f(function() {
                    for (i || (i = n.getEnumerator());;) {
                        for (;;) {
                            if (!t) {
                                if (!i.moveNext()) {
                                    if (r) throw r;
                                    return !1
                                }
                                r = null, t = i.getCurrent().getEnumerator()
                            }
                            var f, e;
                            try {
                                f = t.moveNext(), e = t.getCurrent()
                            } catch (o) {
                                r = o, t.dispose(), t = null;
                                break
                            }
                            if (!f) {
                                t.dispose(), t = null;
                                break
                            }
                            return u = e, !0
                        }
                        if (null == r) break
                    }
                }, function() {
                    return u
                }, function() {
                    t && t.dispose(), i && i.dispose()
                })
            })
        }, u["finally"] = u.finallyDo = function(n) {
            var t = this;
            return new r(function() {
                var i, r = !1;
                return f(function() {
                    o || (o = t.getEnumerator());
                    var i;
                    try {
                        return i = o.moveNext(), i ? i : (n(), r = !0, !1)
                    } catch (o) {
                        throw n(), r = !0, o;
                    }
                }, function() {
                    return i.getCurrent()
                }, function() {
                    r || n(), i && i.dispose()
                })
            })
        }, u.onErrorResumeNext = function(n) {
            return ut.apply(null, [this, n])
        }, ut = r.onErrorResumeNext = function() {
            var n = arguments;
            return new r(function() {
                var r, t, i = 0;
                return f(function() {
                    for (; n.length > i;) {
                        t || (t = n[i].getEnumerator());
                        try {
                            var u = t.moveNext();
                            if (u) return r = t.getCurrent(), !0
                        } catch (f) {}
                        t.dispose(), t = null, i++
                    }
                    return !1
                }, function() {
                    return r
                }, function() {
                    t && t.dispose()
                })
            })
        }, u.retry = function(n) {
            var t = this;
            return new r(function() {
                var r, i, u = n,
                    e = null != n;
                return f(function() {
                    for (i || (i = t.getEnumerator());;) try {
                        return i.moveNext() ? (r = i.getCurrent(), !0) : !1
                    } catch (n) {
                        if (e && 0 == --u) throw n;
                        i = t.getEnumerator(), error = null
                    }
                }, function() {
                    return r
                }, function() {
                    i.dispose()
                })
            })
        }, ft = r["while"] = r.whileDo = function(n, t) {
            return tt(t).takeWhile(n).selectMany(o)
        }, r["if"] = r.ifThen = function(n, t, i) {
            return i || (i = g()), y(function() {
                return n() ? t : i
            })
        }, r.doWhile = function(n, t) {
            return n.concat(ft(t, n))
        }, r["case"] = r.switchCase = function(n, t, i) {
            return i || (i = g()), y(function() {
                var r = t[n()];
                return r || (r = i), r
            })
        }, r["for"] = r.forIn = function(n, t) {
            return n.select(t)
        }, i
    }),
    function(n) {
        "use strict";

        function r(t) {
            var i = t.data;
            t.isDefaultPrevented() || (t.preventDefault(), n(this).ajaxSubmit(i))
        }

        function u(t) {
            var r = t.target,
                u = n(r),
                f, i, e;
            if (!u.is("[type=submit],[type=image]")) {
                if (f = u.closest("[type=submit]"), f.length === 0) return;
                r = f[0]
            }
            i = this, i.clk = r, r.type == "image" && (t.offsetX !== undefined ? (i.clk_x = t.offsetX, i.clk_y = t.offsetY) : typeof n.fn.offset == "function" ? (e = u.offset(), i.clk_x = t.pageX - e.left, i.clk_y = t.pageY - e.top) : (i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop)), setTimeout(function() {
                i.clk = i.clk_x = i.clk_y = null
            }, 100)
        }

        function t() {
            if (n.fn.ajaxSubmit.debug) {
                var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
            }
        }
        var i = {};
        i.fileapi = n("<input type='file'/>").get(0).files !== undefined, i.formdata = window.FormData !== undefined, n.fn.ajaxSubmit = function(r) {
            function rt(t) {
                for (var r = n.param(t).split("&"), e = r.length, f = [], u, i = 0; i < e; i++) r[i] = r[i].replace(/\+/g, " "), u = r[i].split("="), f.push([decodeURIComponent(u[0]), decodeURIComponent(u[1])]);
                return f
            }

            function ut(t) {
                for (var e = new FormData, f, u, o, i = 0; i < t.length; i++) e.append(t[i].name, t[i].value);
                if (r.extraData)
                    for (f = rt(r.extraData), i = 0; i < f.length; i++) f[i] && e.append(f[i][0], f[i][1]);
                return r.data = null, u = n.extend(!0, {}, n.ajaxSettings, r, {
                    contentType: !1,
                    processData: !1,
                    cache: !1,
                    type: s || "POST"
                }), r.uploadProgress && (u.xhr = function() {
                    var n = jQuery.ajaxSettings.xhr();
                    return n.upload && n.upload.addEventListener("progress", function(n) {
                        var t = 0,
                            i = n.loaded || n.position,
                            u = n.total;
                        n.lengthComputable && (t = Math.ceil(i / u * 100)), r.uploadProgress(n, i, u, t)
                    }, !1), n
                }), u.data = null, o = u.beforeSend, u.beforeSend = function(n, t) {
                    t.data = e, o && o.call(this, n, t)
                }, n.ajax(u)
            }

            function k(i) {
                function et(n) {
                    return n.contentWindow ? n.contentWindow.document : n.contentDocument ? n.contentDocument : n.document
                }

                function ot() {
                    function e() {
                        try {
                            var n = et(l).readyState;
                            t("state = " + n), n && n.toLowerCase() == "uninitialized" && setTimeout(e, 50)
                        } catch (i) {
                            t("Server abort: ", i, " (", i.name, ")"), w(nt), d && clearTimeout(d), d = undefined
                        }
                    }
                    var o = u.attr("target"),
                        h = u.attr("action"),
                        r, i, v;
                    c.setAttribute("target", k), s || c.setAttribute("method", "POST"), h != f.url && c.setAttribute("action", f.url), f.skipEncodingOverride || s && !/post/i.test(s) || u.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    }), f.timeout && (d = setTimeout(function() {
                        it = !0, w(rt)
                    }, f.timeout)), r = [];
                    try {
                        if (f.extraData)
                            for (i in f.extraData) f.extraData.hasOwnProperty(i) && (n.isPlainObject(f.extraData[i]) && f.extraData[i].hasOwnProperty("name") && f.extraData[i].hasOwnProperty("value") ? r.push(n('<input type="hidden" name="' + f.extraData[i].name + '">').val(f.extraData[i].value).appendTo(c)[0]) : r.push(n('<input type="hidden" name="' + i + '">').val(f.extraData[i]).appendTo(c)[0]));
                        f.iframeTarget || (a.appendTo("body"), l.attachEvent ? l.attachEvent("onload", w) : l.addEventListener("load", w, !1)), setTimeout(e, 15);
                        try {
                            c.submit()
                        } catch (y) {
                            v = document.createElement("form").submit, v.apply(c)
                        }
                    } finally {
                        c.setAttribute("action", h), o ? c.setAttribute("target", o) : u.removeAttr("target"), n(r).remove()
                    }
                }

                function w(i) {
                    var r, u, b, s, k, g, h, c, p;
                    if (!e.aborted && !ct) {
                        try {
                            o = et(l)
                        } catch (tt) {
                            t("cannot access response document: ", tt), i = nt
                        }
                        if (i === rt && e) {
                            e.abort("timeout"), v.reject(e, "timeout");
                            return
                        }
                        if (i == nt && e) {
                            e.abort("server abort"), v.reject(e, "error", "server abort");
                            return
                        }
                        if (o && o.location.href != f.iframeSrc || it) {
                            l.detachEvent ? l.detachEvent("onload", w) : l.removeEventListener("load", w, !1), r = "success";
                            try {
                                if (it) throw "timeout";
                                if (b = f.dataType == "xml" || o.XMLDocument || n.isXMLDoc(o), t("isXml=" + b), !b && window.opera && (o.body === null || !o.body.innerHTML) && --ht) {
                                    t("requeing onLoad callback, DOM not available"), setTimeout(w, 250);
                                    return
                                }
                                s = o.body ? o.body : o.documentElement, e.responseText = s ? s.innerHTML : null, e.responseXML = o.XMLDocument ? o.XMLDocument : o, b && (f.dataType = "xml"), e.getResponseHeader = function(n) {
                                    var t = {
                                        "content-type": f.dataType
                                    };
                                    return t[n]
                                }, s && (e.status = Number(s.getAttribute("status")) || e.status, e.statusText = s.getAttribute("statusText") || e.statusText), k = (f.dataType || "").toLowerCase(), g = /(json|script|text)/.test(k), g || f.textarea ? (h = o.getElementsByTagName("textarea")[0], h ? (e.responseText = h.value, e.status = Number(h.getAttribute("status")) || e.status, e.statusText = h.getAttribute("statusText") || e.statusText) : g && (c = o.getElementsByTagName("pre")[0], p = o.getElementsByTagName("body")[0], c ? e.responseText = c.textContent ? c.textContent : c.innerText : p && (e.responseText = p.textContent ? p.textContent : p.innerText))) : k == "xml" && !e.responseXML && e.responseText && (e.responseXML = at(e.responseText));
                                try {
                                    st = yt(e, k, f)
                                } catch (ut) {
                                    r = "parsererror", e.error = u = ut || r
                                }
                            } catch (ut) {
                                t("error caught: ", ut), r = "error", e.error = u = ut || r
                            }
                            e.aborted && (t("upload aborted"), r = null), e.status && (r = e.status >= 200 && e.status < 300 || e.status === 304 ? "success" : "error"), r === "success" ? (f.success && f.success.call(f.context, st, "success", e), v.resolve(e.responseText, "success", e), y && n.event.trigger("ajaxSuccess", [e, f])) : r && (u === undefined && (u = e.statusText), f.error && f.error.call(f.context, e, r, u), v.reject(e, "error", u), y && n.event.trigger("ajaxError", [e, f, u])), y && n.event.trigger("ajaxComplete", [e, f]), y && !--n.active && n.event.trigger("ajaxStop"), f.complete && f.complete.call(f.context, e, r), ct = !0, f.timeout && clearTimeout(d), setTimeout(function() {
                                f.iframeTarget || a.remove(), e.responseXML = null
                            }, 100)
                        }
                    }
                }
                var c = u[0],
                    tt, g, f, y, k, a, l, e, b, p, it, d, lt = !!n.fn.prop,
                    v = n.Deferred(),
                    rt, nt, ut, ft, st, o, ht, ct;
                if (i)
                    for (g = 0; g < h.length; g++) tt = n(h[g]), lt ? tt.prop("disabled", !1) : tt.removeAttr("disabled");
                if (f = n.extend(!0, {}, n.ajaxSettings, r), f.context = f.context || f, k = "jqFormIO" + +new Date, f.iframeTarget ? (a = n(f.iframeTarget), p = a.attr("name"), p ? k = p : a.attr("name", k)) : (a = n('<iframe name="' + k + '" src="' + f.iframeSrc + '" />'), a.css({
                        position: "absolute",
                        top: "-1000px",
                        left: "-1000px"
                    })), l = a[0], e = {
                        aborted: 0,
                        responseText: null,
                        responseXML: null,
                        status: 0,
                        statusText: "n/a",
                        getAllResponseHeaders: function() {},
                        getResponseHeader: function() {},
                        setRequestHeader: function() {},
                        abort: function(i) {
                            var r = i === "timeout" ? "timeout" : "aborted";
                            t("aborting upload... " + r), this.aborted = 1;
                            try {
                                l.contentWindow.document.execCommand && l.contentWindow.document.execCommand("Stop")
                            } catch (u) {}
                            a.attr("src", f.iframeSrc), e.error = r, f.error && f.error.call(f.context, e, r, i), y && n.event.trigger("ajaxError", [e, f, r]), f.complete && f.complete.call(f.context, e, r)
                        }
                    }, y = f.global, y && 0 == n.active++ && n.event.trigger("ajaxStart"), y && n.event.trigger("ajaxSend", [e, f]), f.beforeSend && f.beforeSend.call(f.context, e, f) === !1) return f.global && n.active--, v.reject(), v;
                if (e.aborted) return v.reject(), v;
                b = c.clk, b && (p = b.name, p && !b.disabled && (f.extraData = f.extraData || {}, f.extraData[p] = b.value, b.type == "image" && (f.extraData[p + ".x"] = c.clk_x, f.extraData[p + ".y"] = c.clk_y))), rt = 1, nt = 2, ut = n("meta[name=csrf-token]").attr("content"), ft = n("meta[name=csrf-param]").attr("content"), ft && ut && (f.extraData = f.extraData || {}, f.extraData[ft] = ut), f.forceSync ? ot() : setTimeout(ot, 10), ht = 50;
                var at = n.parseXML || function(n, t) {
                        return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(n)) : t = (new DOMParser).parseFromString(n, "text/xml"), t && t.documentElement && t.documentElement.nodeName != "parsererror" ? t : null
                    },
                    vt = n.parseJSON || function(s) {
                        return window.eval("(" + s + ")")
                    },
                    yt = function(t, i, r) {
                        var f = t.getResponseHeader("content-type") || "",
                            e = i === "xml" || !i && f.indexOf("xml") >= 0,
                            u = e ? t.responseXML : t.responseText;
                        return e && u.documentElement.nodeName === "parsererror" && n.error && n.error("parsererror"), r && r.dataFilter && (u = r.dataFilter(u, i)), typeof u == "string" && (i === "json" || !i && f.indexOf("json") >= 0 ? u = vt(u) : (i === "script" || !i && f.indexOf("javascript") >= 0) && n.globalEval(u)), u
                    };
                return v
            }
            var s, w, f, u, l, a, h, v, e, c, o, d, g, y, p;
            if (!this.length) return t("ajaxSubmit: skipping submit process - no element selected"), this;
            if (u = this, typeof r == "function" && (r = {
                    success: r
                }), s = this.attr("method"), w = this.attr("action"), f = typeof w == "string" ? n.trim(w) : "", f = f || window.location.href || "", f && (f = (f.match(/^([^#]+)/) || [])[1]), r = n.extend(!0, {
                    url: f,
                    success: n.ajaxSettings.success,
                    type: s || "GET",
                    iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
                }, r), l = {}, this.trigger("form-pre-serialize", [this, r, l]), l.veto) return t("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
            if (r.beforeSerialize && r.beforeSerialize(this, r) === !1) return t("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
            if (a = r.traditional, a === undefined && (a = n.ajaxSettings.traditional), h = [], e = this.formToArray(r.semantic, h), r.data && (r.extraData = r.data, v = n.param(r.data, a)), r.beforeSubmit && r.beforeSubmit(e, this, r) === !1) return t("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
            if (this.trigger("form-submit-validate", [e, this, r, l]), l.veto) return t("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
            c = n.param(e, a), v && (c = c ? c + "&" + v : v), r.type.toUpperCase() == "GET" ? (r.url += (r.url.indexOf("?") >= 0 ? "&" : "?") + c, r.data = null) : r.data = c, o = [], r.resetForm && o.push(function() {
                u.resetForm()
            }), r.clearForm && o.push(function() {
                u.clearForm(r.includeHidden)
            }), !r.dataType && r.target ? (d = r.success || function() {}, o.push(function(t) {
                var i = r.replaceTarget ? "replaceWith" : "html";
                n(r.target)[i](t).each(d, arguments)
            })) : r.success && o.push(r.success), r.success = function(n, t, i) {
                for (var e = r.context || this, f = 0, s = o.length; f < s; f++) o[f].apply(e, [n, t, i || u, u])
            };
            var ft = n('input[type=file]:enabled[value!=""]', this),
                nt = ft.length > 0,
                tt = "multipart/form-data",
                it = u.attr("enctype") == tt || u.attr("encoding") == tt,
                b = i.fileapi && i.formdata;
            for (t("fileAPI :" + b), g = (nt || it) && !b, r.iframe !== !1 && (r.iframe || g) ? r.closeKeepAlive ? n.get(r.closeKeepAlive, function() {
                    y = k(e)
                }) : y = k(e) : y = (nt || it) && b ? ut(e) : n.ajax(r), u.removeData("jqxhr").data("jqxhr", y), p = 0; p < h.length; p++) h[p] = null;
            return this.trigger("form-submit-notify", [this, r]), this
        }, n.fn.ajaxForm = function(i) {
            if (i = i || {}, i.delegation = i.delegation && n.isFunction(n.fn.on), !i.delegation && this.length === 0) {
                var f = {
                    s: this.selector,
                    c: this.context
                };
                return !n.isReady && f.s ? (t("DOM not ready, queuing ajaxForm"), n(function() {
                    n(f.s, f.c).ajaxForm(i)
                }), this) : (t("terminating; zero elements found by selector" + (n.isReady ? "" : " (DOM not ready)")), this)
            }
            if (i.delegation) {
                n(document).off("submit.form-plugin", this.selector, r).off("click.form-plugin", this.selector, u).on("submit.form-plugin", this.selector, i, r).on("click.form-plugin", this.selector, i, u);
                return this
            }
            return this.ajaxFormUnbind().bind("submit.form-plugin", i, r).bind("click.form-plugin", i, u)
        }, n.fn.ajaxFormUnbind = function() {
            return this.unbind("submit.form-plugin click.form-plugin")
        }, n.fn.formToArray = function(t, r) {
            var o = [],
                e, c, l, s, f, h, u, p, w, a, y, v;
            if (this.length === 0 || (e = this[0], c = t ? e.getElementsByTagName("*") : e.elements, !c)) return o;
            for (l = 0, p = c.length; l < p; l++)
                if (u = c[l], f = u.name, f) {
                    if (t && e.clk && u.type == "image") {
                        u.disabled || e.clk != u || (o.push({
                            name: f,
                            value: n(u).val(),
                            type: u.type
                        }), o.push({
                            name: f + ".x",
                            value: e.clk_x
                        }, {
                            name: f + ".y",
                            value: e.clk_y
                        }));
                        continue
                    }
                    if (h = n.fieldValue(u, !0), h && h.constructor == Array)
                        for (r && r.push(u), s = 0, w = h.length; s < w; s++) o.push({
                            name: f,
                            value: h[s]
                        });
                    else if (i.fileapi && u.type == "file" && !u.disabled)
                        if (r && r.push(u), a = u.files, a.length)
                            for (s = 0; s < a.length; s++) o.push({
                                name: f,
                                value: a[s],
                                type: u.type
                            });
                        else o.push({
                            name: f,
                            value: "",
                            type: u.type
                        });
                    else h !== null && typeof h != "undefined" && (r && r.push(u), o.push({
                        name: f,
                        value: h,
                        type: u.type,
                        required: u.required
                    }))
                }
            return !t && e.clk && (y = n(e.clk), v = y[0], f = v.name, f && !v.disabled && v.type == "image" && (o.push({
                name: f,
                value: y.val()
            }), o.push({
                name: f + ".x",
                value: e.clk_x
            }, {
                name: f + ".y",
                value: e.clk_y
            }))), o
        }, n.fn.formSerialize = function(t) {
            return n.param(this.formToArray(t))
        }, n.fn.fieldSerialize = function(t) {
            var i = [];
            return this.each(function() {
                var f = this.name,
                    r, u, e;
                if (f)
                    if (r = n.fieldValue(this, t), r && r.constructor == Array)
                        for (u = 0, e = r.length; u < e; u++) i.push({
                            name: f,
                            value: r[u]
                        });
                    else r !== null && typeof r != "undefined" && i.push({
                        name: this.name,
                        value: r
                    })
            }), n.param(i)
        }, n.fn.fieldValue = function(t) {
            for (var f, i, r = [], u = 0, e = this.length; u < e; u++)(f = this[u], i = n.fieldValue(f, t), i !== null && typeof i != "undefined" && (i.constructor != Array || i.length)) && (i.constructor == Array ? n.merge(r, i) : r.push(i));
            return r
        }, n.fieldValue = function(t, i) {
            var a = t.name,
                u = t.type,
                h = t.tagName.toLowerCase(),
                e, o, r, f;
            if (i === undefined && (i = !0), i && (!a || t.disabled || u == "reset" || u == "button" || (u == "checkbox" || u == "radio") && !t.checked || (u == "submit" || u == "image") && t.form && t.form.clk != t || h == "select" && t.selectedIndex == -1)) return null;
            if (h == "select") {
                if (e = t.selectedIndex, e < 0) return null;
                var c = [],
                    l = t.options,
                    s = u == "select-one",
                    v = s ? e + 1 : l.length;
                for (o = s ? e : 0; o < v; o++)
                    if (r = l[o], r.selected) {
                        if (f = r.value, f || (f = r.attributes && r.attributes.value && !r.attributes.value.specified ? r.text : r.value), s) return f;
                        c.push(f)
                    }
                return c
            }
            return n(t).val()
        }, n.fn.clearForm = function(t) {
            return this.each(function() {
                n("input,select,textarea", this).clearFields(t)
            })
        }, n.fn.clearFields = n.fn.clearInputs = function(t) {
            var i = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
            return this.each(function() {
                var r = this.type,
                    u = this.tagName.toLowerCase();
                i.test(r) || u == "textarea" ? this.value = "" : r == "checkbox" || r == "radio" ? this.checked = !1 : u == "select" ? this.selectedIndex = -1 : r == "file" ? /MSIE/.test(navigator.userAgent) ? n(this).replaceWith(n(this).clone()) : n(this).val("") : t && (t === !0 && /hidden/.test(r) || typeof t == "string" && n(this).is(t)) && (this.value = "")
            })
        }, n.fn.resetForm = function() {
            return this.each(function() {
                typeof this.reset != "function" && (typeof this.reset != "object" || this.reset.nodeType) || this.reset()
            })
        }, n.fn.enable = function(n) {
            return n === undefined && (n = !0), this.each(function() {
                this.disabled = !n
            })
        }, n.fn.selected = function(t) {
            return t === undefined && (t = !0), this.each(function() {
                var r = this.type,
                    i;
                r == "checkbox" || r == "radio" ? this.checked = t : this.tagName.toLowerCase() == "option" && (i = n(this).parent("select"), t && i[0] && i[0].type == "select-one" && i.find("option").selected(!1), this.selected = t)
            })
        }, n.fn.ajaxSubmit.debug = !1
    }(jQuery),
    function(n) {
        function r() {
            var t = u(this);
            return isNaN(t.datetime) || n(this).text(i(t.datetime)), this
        }

        function u(i) {
            if (i = n(i), !i.data("timeago")) {
                i.data("timeago", {
                    datetime: t.datetime(i)
                });
                var r = n.trim(i.text());
                r.length > 0 && !(t.isTime(i) && i.attr("title")) && i.attr("title", r)
            }
            return i.data("timeago")
        }

        function i(n) {
            return t.inWords(f(n))
        }

        function f(n) {
            return +new Date - n.getTime()
        }
        n.timeago = function(t) {
            return t instanceof Date ? i(t) : typeof t == "string" ? i(n.timeago.parse(t)) : typeof t == "number" ? i(new Date(t)) : i(n.timeago.datetime(t))
        };
        var t = n.timeago;
        n.extend(n.timeago, {
            settings: {
                refreshMillis: 6e4,
                allowFuture: !1,
                strings: {
                    prefixAgo: null,
                    prefixFromNow: null,
                    suffixAgo: "ago",
                    suffixFromNow: "from now",
                    seconds: "less than a minute",
                    minute: "about a minute",
                    minutes: "%d minutes",
                    hour: "about an hour",
                    hours: "about %d hours",
                    day: "a day",
                    days: "%d days",
                    month: "about a month",
                    months: "%d months",
                    year: "about a year",
                    years: "%d years",
                    wordSeparator: " ",
                    numbers: []
                }
            },
            inWords: function(t) {
                function r(r, u) {
                    var f = n.isFunction(r) ? r(u, t) : r,
                        e = i.numbers && i.numbers[u] || u;
                    return f.replace(/%d/i, e)
                }
                var i = this.settings.strings,
                    s = i.prefixAgo,
                    h = i.suffixAgo,
                    l, a;
                this.settings.allowFuture && t < 0 && (s = i.prefixFromNow, h = i.suffixFromNow);
                var f = Math.abs(t) / 1e3,
                    e = f / 60,
                    o = e / 60,
                    u = o / 24,
                    c = u / 365;
                return l = f < 45 && r(i.seconds, Math.round(f)) || f < 90 && r(i.minute, 1) || e < 45 && r(i.minutes, Math.round(e)) || e < 90 && r(i.hour, 1) || o < 24 && r(i.hours, Math.round(o)) || o < 42 && r(i.day, 1) || u < 30 && r(i.days, Math.round(u)) || u < 45 && r(i.month, 1) || u < 365 && r(i.months, Math.round(u / 30)) || c < 1.5 && r(i.year, 1) || r(i.years, Math.round(c)), a = i.wordSeparator === undefined ? " " : i.wordSeparator, n.trim([s, l, h].join(a))
            },
            parse: function(t) {
                var i = n.trim(t);
                return i = i.replace(/\.\d+/, ""), i = i.replace(/-/, "/").replace(/-/, "/"), i = i.replace(/T/, " ").replace(/Z/, " UTC"), i = i.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), new Date(i)
            },
            datetime: function(i) {
                var r = t.isTime(i) ? n(i).attr("datetime") : n(i).attr("title");
                return t.parse(r)
            },
            isTime: function(t) {
                return n(t).get(0).tagName.toLowerCase() === "time"
            }
        }), n.fn.timeago = function() {
            var n = this,
                i;
            return n.each(r), i = t.settings, i.refreshMillis > 0 && setInterval(function() {
                n.each(r)
            }, i.refreshMillis), n
        }, document.createElement("abbr"), document.createElement("time")
    }(jQuery), jscolor = {
        dir: "",
        bindClass: "color",
        binding: !0,
        preloading: !0,
        install: function() {
            jscolor.addEvent(window, "load", jscolor.init)
        },
        init: function() {
            jscolor.binding && jscolor.bind(), jscolor.preloading && jscolor.preload()
        },
        getDir: function() {
            if (!jscolor.dir) {
                var n = jscolor.detectDir();
                jscolor.dir = n !== !1 ? n : "jscolor/"
            }
            return jscolor.dir
        },
        detectDir: function() {
            for (var r = location.href, t = document.getElementsByTagName("base"), u, i, n = 0; n < t.length; n += 1) t[n].href && (r = t[n].href);
            for (t = document.getElementsByTagName("script"), n = 0; n < t.length; n += 1)
                if (t[n].src && /(^|\/)jscolor\.js([?#].*)?$/i.test(t[n].src)) return u = new jscolor.URI(t[n].src), i = u.toAbsolute(r), i.path = i.path.replace(/[^\/]+$/, ""), i.query = null, i.fragment = null, i.toString();
            return !1
        },
        bind: function() {
            for (var u = new RegExp("(^|\\s)(" + jscolor.bindClass + ")\\s*(\\{[^}]*\\})?", "i"), t = document.getElementsByTagName("input"), i, r, n = 0; n < t.length; n += 1)
                if (!t[n].color && t[n].className && (i = t[n].className.match(u))) {
                    if (r = {}, i[3]) try {
                        r = new Function("return (" + i[3] + ")")()
                    } catch (f) {}
                    t[n].color = new jscolor.color(t[n], r)
                }
        },
        preload: function() {
            for (var n in jscolor.imgRequire) jscolor.imgRequire.hasOwnProperty(n) && jscolor.loadImage(n)
        },
        images: {
            pad: [181, 101],
            sld: [16, 101],
            cross: [15, 15],
            arrow: [7, 11]
        },
        imgRequire: {},
        imgLoaded: {},
        requireImage: function(n) {
            jscolor.imgRequire[n] = !0
        },
        loadImage: function(n) {
            jscolor.imgLoaded[n] || (jscolor.imgLoaded[n] = new Image, jscolor.imgLoaded[n].src = jscolor.getDir() + n)
        },
        fetchElement: function(n) {
            return typeof n == "string" ? document.getElementById(n) : n
        },
        addEvent: function(n, t, i) {
            n.addEventListener ? n.addEventListener(t, i, !1) : n.attachEvent && n.attachEvent("on" + t, i)
        },
        fireEvent: function(n, t) {
            var i;
            n && (document.createEvent ? (i = document.createEvent("HTMLEvents"), i.initEvent(t, !0, !0), n.dispatchEvent(i)) : document.createEventObject ? (i = document.createEventObject(), n.fireEvent("on" + t, i)) : n["on" + t] && n["on" + t]())
        },
        getElementPos: function(n) {
            var t = n,
                i = n,
                r = 0,
                u = 0;
            if (t.offsetParent)
                do r += t.offsetLeft, u += t.offsetTop; while (t = t.offsetParent);
            while ((i = i.parentNode) && i.nodeName.toUpperCase() !== "BODY") r -= i.scrollLeft, u -= i.scrollTop;
            return [r, u]
        },
        getElementSize: function(n) {
            return [n.offsetWidth, n.offsetHeight]
        },
        getRelMousePos: function(n) {
            var t = 0,
                i = 0;
            return n || (n = window.event), typeof n.offsetX == "number" ? (t = n.offsetX, i = n.offsetY) : typeof n.layerX == "number" && (t = n.layerX, i = n.layerY), {
                x: t,
                y: i
            }
        },
        getViewPos: function() {
            return typeof window.pageYOffset == "number" ? [window.pageXOffset, window.pageYOffset] : document.body && (document.body.scrollLeft || document.body.scrollTop) ? [document.body.scrollLeft, document.body.scrollTop] : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) ? [document.documentElement.scrollLeft, document.documentElement.scrollTop] : [0, 0]
        },
        getViewSize: function() {
            return typeof window.innerWidth == "number" ? [window.innerWidth, window.innerHeight] : document.body && (document.body.clientWidth || document.body.clientHeight) ? [document.body.clientWidth, document.body.clientHeight] : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? [document.documentElement.clientWidth, document.documentElement.clientHeight] : [0, 0]
        },
        URI: function(n) {
            function t(n) {
                for (var t = "", i; n;) n.substr(0, 3) === "../" || n.substr(0, 2) === "./" ? n = n.replace(/^\.+/, "").substr(1) : n.substr(0, 3) === "/./" || n === "/." ? n = "/" + n.substr(3) : n.substr(0, 4) === "/../" || n === "/.." ? (n = "/" + n.substr(4), t = t.replace(/\/?[^\/]*$/, "")) : n === "." || n === ".." ? n = "" : (i = n.match(/^\/?[^\/]*/)[0], n = n.substr(i.length), t = t + i);
                return t
            }
            this.scheme = null, this.authority = null, this.path = "", this.query = null, this.fragment = null, this.parse = function(n) {
                var t = n.match(/^(([A-Za-z][0-9A-Za-z+.-]*)(:))?((\/\/)([^\/?#]*))?([^?#]*)((\?)([^#]*))?((#)(.*))?/);
                return this.scheme = t[3] ? t[2] : null, this.authority = t[5] ? t[6] : null, this.path = t[7], this.query = t[9] ? t[10] : null, this.fragment = t[12] ? t[13] : null, this
            }, this.toString = function() {
                var n = "";
                return this.scheme !== null && (n = n + this.scheme + ":"), this.authority !== null && (n = n + "//" + this.authority), this.path !== null && (n = n + this.path), this.query !== null && (n = n + "?" + this.query), this.fragment !== null && (n = n + "#" + this.fragment), n
            }, this.toAbsolute = function(n) {
                var n = new jscolor.URI(n),
                    i = this,
                    r = new jscolor.URI;
                return n.scheme === null ? !1 : (i.scheme !== null && i.scheme.toLowerCase() === n.scheme.toLowerCase() && (i.scheme = null), i.scheme !== null ? (r.scheme = i.scheme, r.authority = i.authority, r.path = t(i.path), r.query = i.query) : (i.authority !== null ? (r.authority = i.authority, r.path = t(i.path), r.query = i.query) : (i.path === "" ? (r.path = n.path, r.query = i.query !== null ? i.query : n.query) : (i.path.substr(0, 1) === "/" ? r.path = t(i.path) : (r.path = n.authority !== null && n.path === "" ? "/" + i.path : n.path.replace(/[^\/]+$/, "") + i.path, r.path = t(r.path)), r.query = i.query), r.authority = n.authority), r.scheme = n.scheme), r.fragment = i.fragment, r)
            }, n && this.parse(n)
        },
        color: function(n, t) {
            function it(n, t, i) {
                var f = Math.min(Math.min(n, t), i),
                    u = Math.max(Math.max(n, t), i),
                    r = u - f,
                    e;
                return r === 0 ? [null, 0, u] : (e = n === f ? 3 + (i - t) / r : t === f ? 5 + (n - i) / r : 1 + (t - n) / r, [e === 6 ? 0 : e, r / u, u])
            }

            function v(n, t, i) {
                if (n === null) return [i, i, i];
                var f = Math.floor(n),
                    e = f % 2 ? n - f : 1 - (n - f),
                    r = i * (1 - t),
                    u = i * (1 - t * e);
                switch (f) {
                    case 6:
                    case 0:
                        return [i, u, r];
                    case 1:
                        return [u, i, r];
                    case 2:
                        return [r, i, u];
                    case 3:
                        return [r, u, i];
                    case 4:
                        return [u, r, i];
                    case 5:
                        return [i, r, u]
                }
            }

            function rt() {
                delete jscolor.picker.owner, document.getElementsByTagName("body")[0].removeChild(jscolor.picker.boxB)
            }

            function ut(t, r) {
                function w() {
                    var n = i.pickerInsetColor.split(/\s+/),
                        t = n.length < 2 ? n[0] : n[1] + " " + n[0] + " " + n[0] + " " + n[1];
                    h.btn.style.borderColor = t
                }
                var l, v, c, h, y, p;
                if (!jscolor.picker) {
                    for (jscolor.picker = {
                            box: document.createElement("div"),
                            boxB: document.createElement("div"),
                            pad: document.createElement("div"),
                            padB: document.createElement("div"),
                            padM: document.createElement("div"),
                            sld: document.createElement("div"),
                            sldB: document.createElement("div"),
                            sldM: document.createElement("div"),
                            btn: document.createElement("div"),
                            btnS: document.createElement("span"),
                            btnT: document.createTextNode(i.pickerCloseText)
                        }, l = 0, v = 4; l < jscolor.images.sld[1]; l += v) c = document.createElement("div"), c.style.height = v + "px", c.style.fontSize = "1px", c.style.lineHeight = "0", jscolor.picker.sld.appendChild(c);
                    jscolor.picker.sldB.appendChild(jscolor.picker.sld), jscolor.picker.box.appendChild(jscolor.picker.sldB), jscolor.picker.box.appendChild(jscolor.picker.sldM), jscolor.picker.padB.appendChild(jscolor.picker.pad), jscolor.picker.box.appendChild(jscolor.picker.padB), jscolor.picker.box.appendChild(jscolor.picker.padM), jscolor.picker.btnS.appendChild(jscolor.picker.btnT), jscolor.picker.btn.appendChild(jscolor.picker.btnS), jscolor.picker.box.appendChild(jscolor.picker.btn), jscolor.picker.boxB.appendChild(jscolor.picker.box)
                }
                h = jscolor.picker, h.box.onmouseup = h.box.onmouseout = function() {
                    n.focus()
                }, h.box.onmousedown = function() {
                    e = !0
                }, h.box.onmousemove = function(n) {
                    (o || s) && (o && nt(n), s && tt(n), document.selection ? document.selection.empty() : window.getSelection && window.getSelection().removeAllRanges(), a())
                }, h.padM.onmouseup = h.padM.onmouseout = function() {
                    o && (o = !1, jscolor.fireEvent(u, "change"))
                }, h.padM.onmousedown = function(n) {
                    switch (f) {
                        case 0:
                            i.hsv[2] === 0 && i.fromHSV(null, null, 1);
                            break;
                        case 1:
                            i.hsv[1] === 0 && i.fromHSV(null, 1, null)
                    }
                    o = !0, nt(n), a()
                }, h.sldM.onmouseup = h.sldM.onmouseout = function() {
                    s && (s = !1, jscolor.fireEvent(u, "change"))
                }, h.sldM.onmousedown = function(n) {
                    s = !0, tt(n), a()
                }, y = k(i), h.box.style.width = y[0] + "px", h.box.style.height = y[1] + "px", h.boxB.style.position = "absolute", h.boxB.style.clear = "both", h.boxB.style.left = t + "px", h.boxB.style.top = r + "px", h.boxB.style.zIndex = i.pickerZIndex, h.boxB.style.border = i.pickerBorder + "px solid", h.boxB.style.borderColor = i.pickerBorderColor, h.boxB.style.background = i.pickerFaceColor, h.pad.style.width = jscolor.images.pad[0] + "px", h.pad.style.height = jscolor.images.pad[1] + "px", h.padB.style.position = "absolute", h.padB.style.left = i.pickerFace + "px", h.padB.style.top = i.pickerFace + "px", h.padB.style.border = i.pickerInset + "px solid", h.padB.style.borderColor = i.pickerInsetColor, h.padM.style.position = "absolute", h.padM.style.left = "0", h.padM.style.top = "0", h.padM.style.width = i.pickerFace + 2 * i.pickerInset + jscolor.images.pad[0] + jscolor.images.arrow[0] + "px", h.padM.style.height = h.box.style.height, h.padM.style.cursor = "crosshair", h.sld.style.overflow = "hidden", h.sld.style.width = jscolor.images.sld[0] + "px", h.sld.style.height = jscolor.images.sld[1] + "px", h.sldB.style.display = i.slider ? "block" : "none", h.sldB.style.position = "absolute", h.sldB.style.right = i.pickerFace + "px", h.sldB.style.top = i.pickerFace + "px", h.sldB.style.border = i.pickerInset + "px solid", h.sldB.style.borderColor = i.pickerInsetColor, h.sldM.style.display = i.slider ? "block" : "none", h.sldM.style.position = "absolute", h.sldM.style.right = "0", h.sldM.style.top = "0", h.sldM.style.width = jscolor.images.sld[0] + jscolor.images.arrow[0] + i.pickerFace + 2 * i.pickerInset + "px", h.sldM.style.height = h.box.style.height;
                try {
                    h.sldM.style.cursor = "pointer"
                } catch (b) {
                    h.sldM.style.cursor = "hand"
                }
                h.btn.style.display = i.pickerClosable ? "block" : "none", h.btn.style.position = "absolute", h.btn.style.left = i.pickerFace + "px", h.btn.style.bottom = i.pickerFace + "px", h.btn.style.padding = "0 15px", h.btn.style.height = "18px", h.btn.style.border = i.pickerInset + "px solid", w(), h.btn.style.color = i.pickerButtonColor, h.btn.style.font = "12px sans-serif", h.btn.style.textAlign = "center";
                try {
                    h.btn.style.cursor = "pointer"
                } catch (b) {
                    h.btn.style.cursor = "hand"
                }
                h.btn.onmousedown = function() {
                    i.hidePicker()
                }, h.btnS.style.lineHeight = h.btn.style.height;
                switch (f) {
                    case 0:
                        p = "hs.png";
                        break;
                    case 1:
                        p = "hv.png"
                }
                h.padM.style.backgroundImage = "url('" + jscolor.getDir() + "cross.gif')", h.padM.style.backgroundRepeat = "no-repeat", h.sldM.style.backgroundImage = "url('" + jscolor.getDir() + "arrow.gif')", h.sldM.style.backgroundRepeat = "no-repeat", h.pad.style.backgroundImage = "url('" + jscolor.getDir() + p + "')", h.pad.style.backgroundRepeat = "no-repeat", h.pad.style.backgroundPosition = "0 0", d(), g(), jscolor.picker.owner = i, document.getElementsByTagName("body")[0].appendChild(h.boxB)
            }

            function k(n) {
                return [2 * n.pickerInset + 2 * n.pickerFace + jscolor.images.pad[0] + (n.slider ? 2 * n.pickerInset + 2 * jscolor.images.arrow[0] + jscolor.images.sld[0] : 0), n.pickerClosable ? 4 * n.pickerInset + 3 * n.pickerFace + jscolor.images.pad[1] + n.pickerButtonHeight : 2 * n.pickerInset + 2 * n.pickerFace + jscolor.images.pad[1]]
            }

            function d() {
                var e, s, h, r, t, n;
                switch (f) {
                    case 0:
                        e = 1;
                        break;
                    case 1:
                        e = 2
                }
                s = Math.round(i.hsv[0] / 6 * (jscolor.images.pad[0] - 1)), h = Math.round((1 - i.hsv[e]) * (jscolor.images.pad[1] - 1)), jscolor.picker.padM.style.backgroundPosition = i.pickerFace + i.pickerInset + s - Math.floor(jscolor.images.cross[0] / 2) + "px " + (i.pickerFace + i.pickerInset + h - Math.floor(jscolor.images.cross[1] / 2)) + "px", r = jscolor.picker.sld.childNodes;
                switch (f) {
                    case 0:
                        for (t = v(i.hsv[0], i.hsv[1], 1), n = 0; n < r.length; n += 1) r[n].style.backgroundColor = "rgb(" + t[0] * (1 - n / r.length) * 100 + "%," + t[1] * (1 - n / r.length) * 100 + "%," + t[2] * (1 - n / r.length) * 100 + "%)";
                        break;
                    case 1:
                        var t, o, u = [i.hsv[2], 0, 0],
                            n = Math.floor(i.hsv[0]),
                            c = n % 2 ? i.hsv[0] - n : 1 - (i.hsv[0] - n);
                        switch (n) {
                            case 6:
                            case 0:
                                t = [0, 1, 2];
                                break;
                            case 1:
                                t = [1, 0, 2];
                                break;
                            case 2:
                                t = [2, 0, 1];
                                break;
                            case 3:
                                t = [2, 1, 0];
                                break;
                            case 4:
                                t = [1, 2, 0];
                                break;
                            case 5:
                                t = [0, 2, 1]
                        }
                        for (n = 0; n < r.length; n += 1) o = 1 - 1 / (r.length - 1) * n, u[1] = u[0] * (1 - o * c), u[2] = u[0] * (1 - o), r[n].style.backgroundColor = "rgb(" + u[t[0]] * 100 + "%," + u[t[1]] * 100 + "%," + u[t[2]] * 100 + "%)"
                }
            }

            function g() {
                var n, t;
                switch (f) {
                    case 0:
                        n = 2;
                        break;
                    case 1:
                        n = 1
                }
                t = Math.round((1 - i.hsv[n]) * (jscolor.images.sld[1] - 1)), jscolor.picker.sldM.style.backgroundPosition = "0 " + (i.pickerFace + i.pickerInset + t - Math.floor(jscolor.images.arrow[1] / 2)) + "px"
            }

            function l() {
                return jscolor.picker && jscolor.picker.owner === i
            }

            function ft() {
                u === n && i.importColor(), i.pickerOnfocus && i.hidePicker()
            }

            function et() {
                u !== n && i.importColor()
            }

            function nt(n) {
                var t = jscolor.getRelMousePos(n),
                    r = t.x - i.pickerFace - i.pickerInset,
                    u = t.y - i.pickerFace - i.pickerInset;
                switch (f) {
                    case 0:
                        i.fromHSV(r * (6 / (jscolor.images.pad[0] - 1)), 1 - u / (jscolor.images.pad[1] - 1), null, w);
                        break;
                    case 1:
                        i.fromHSV(r * (6 / (jscolor.images.pad[0] - 1)), null, 1 - u / (jscolor.images.pad[1] - 1), w)
                }
            }

            function tt(n) {
                var r = jscolor.getRelMousePos(n),
                    t = r.y - i.pickerFace - i.pickerInset;
                switch (f) {
                    case 0:
                        i.fromHSV(null, null, 1 - t / (jscolor.images.sld[1] - 1), p);
                        break;
                    case 1:
                        i.fromHSV(null, 1 - t / (jscolor.images.sld[1] - 1), null, p)
                }
            }

            function a() {
                if (i.onImmediateChange) {
                    var n;
                    n = typeof i.onImmediateChange == "string" ? new Function(i.onImmediateChange) : i.onImmediateChange, n.call(i)
                }
            }
            var c, b;
            this.required = !0, this.adjust = !0, this.hash = !1, this.caps = !0, this.slider = !0, this.valueElement = n, this.styleElement = n, this.onImmediateChange = null, this.hsv = [0, 0, 1], this.rgb = [1, 1, 1], this.minH = 0, this.maxH = 6, this.minS = 0, this.maxS = 1, this.minV = 0, this.maxV = 1, this.pickerOnfocus = !0, this.pickerMode = "HSV", this.pickerPosition = "bottom", this.pickerSmartPosition = !0, this.pickerButtonHeight = 20, this.pickerClosable = !1, this.pickerCloseText = "Close", this.pickerButtonColor = "ButtonText", this.pickerFace = 10, this.pickerFaceColor = "ThreeDFace", this.pickerBorder = 1, this.pickerBorderColor = "ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight", this.pickerInset = 1, this.pickerInsetColor = "ThreeDShadow ThreeDHighlight ThreeDHighlight ThreeDShadow", this.pickerZIndex = 1e4;
            for (c in t) t.hasOwnProperty(c) && (this[c] = t[c]);
            this.hidePicker = function() {
                l() && rt()
            }, this.showPicker = function() {
                var r, c;
                if (!l()) {
                    var u = jscolor.getElementPos(n),
                        f = jscolor.getElementSize(n),
                        s = jscolor.getViewPos(),
                        h = jscolor.getViewSize(),
                        o = k(this),
                        i, t, e;
                    switch (this.pickerPosition.toLowerCase()) {
                        case "left":
                            i = 1, t = 0, e = -1;
                            break;
                        case "right":
                            i = 1, t = 0, e = 1;
                            break;
                        case "top":
                            i = 0, t = 1, e = -1;
                            break;
                        default:
                            i = 0, t = 1, e = 1
                    }
                    r = (f[t] + o[t]) / 2, c = this.pickerSmartPosition ? [-s[i] + u[i] + o[i] > h[i] ? -s[i] + u[i] + f[i] / 2 > h[i] / 2 && u[i] + f[i] - o[i] >= 0 ? u[i] + f[i] - o[i] : u[i] : u[i], -s[t] + u[t] + f[t] + o[t] - r + r * e > h[t] ? -s[t] + u[t] + f[t] / 2 > h[t] / 2 && u[t] + f[t] - r - r * e >= 0 ? u[t] + f[t] - r - r * e : u[t] + f[t] - r + r * e : u[t] + f[t] - r + r * e >= 0 ? u[t] + f[t] - r + r * e : u[t] + f[t] - r - r * e] : [u[i], u[t] + f[t] - r + r * e], ut(c[i], c[t])
                }
            }, this.importColor = function() {
                u ? this.adjust ? !this.required && /^\s*$/.test(u.value) ? (u.value = "", r.style.backgroundImage = r.jscStyle.backgroundImage, r.style.backgroundColor = r.jscStyle.backgroundColor, r.style.color = r.jscStyle.color, this.exportColor(h | y)) : this.fromString(u.value) || this.exportColor() : this.fromString(u.value, h) || (r.style.backgroundImage = r.jscStyle.backgroundImage, r.style.backgroundColor = r.jscStyle.backgroundColor, r.style.color = r.jscStyle.color, this.exportColor(h | y)) : this.exportColor()
            }, this.exportColor = function(n) {
                if (!(n & h) && u) {
                    var t = this.toString();
                    this.caps && (t = t.toUpperCase()), this.hash && (t = "#" + t), u.value = t
                }
                n & y || !r || (r.style.backgroundImage = "none", r.style.backgroundColor = "#" + this.toString(), r.style.color = .213 * this.rgb[0] + .715 * this.rgb[1] + .072 * this.rgb[2] < .5 ? "#FFF" : "#000"), n & p || !l() || d(), n & w || !l() || g()
            }, this.fromHSV = function(n, t, i, r) {
                n !== null && (n = Math.max(0, this.minH, Math.min(6, this.maxH, n))), t !== null && (t = Math.max(0, this.minS, Math.min(1, this.maxS, t))), i !== null && (i = Math.max(0, this.minV, Math.min(1, this.maxV, i))), this.rgb = v(n === null ? this.hsv[0] : this.hsv[0] = n, t === null ? this.hsv[1] : this.hsv[1] = t, i === null ? this.hsv[2] : this.hsv[2] = i), this.exportColor(r)
            }, this.fromRGB = function(n, t, i, r) {
                var u, f;
                n !== null && (n = Math.max(0, Math.min(1, n))), t !== null && (t = Math.max(0, Math.min(1, t))), i !== null && (i = Math.max(0, Math.min(1, i))), u = it(n === null ? this.rgb[0] : n, t === null ? this.rgb[1] : t, i === null ? this.rgb[2] : i), u[0] !== null && (this.hsv[0] = Math.max(0, this.minH, Math.min(6, this.maxH, u[0]))), u[2] !== 0 && (this.hsv[1] = u[1] === null ? null : Math.max(0, this.minS, Math.min(1, this.maxS, u[1]))), this.hsv[2] = u[2] === null ? null : Math.max(0, this.minV, Math.min(1, this.maxV, u[2])), f = v(this.hsv[0], this.hsv[1], this.hsv[2]), this.rgb[0] = f[0], this.rgb[1] = f[1], this.rgb[2] = f[2], this.exportColor(r)
            }, this.fromString = function(n, t) {
                var i = n.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i);
                return i ? (i[1].length === 6 ? this.fromRGB(parseInt(i[1].substr(0, 2), 16) / 255, parseInt(i[1].substr(2, 2), 16) / 255, parseInt(i[1].substr(4, 2), 16) / 255, t) : this.fromRGB(parseInt(i[1].charAt(0) + i[1].charAt(0), 16) / 255, parseInt(i[1].charAt(1) + i[1].charAt(1), 16) / 255, parseInt(i[1].charAt(2) + i[1].charAt(2), 16) / 255, t), !0) : !1
            }, this.toString = function() {
                return (256 | Math.round(255 * this.rgb[0])).toString(16).substr(1) + (256 | Math.round(255 * this.rgb[1])).toString(16).substr(1) + (256 | Math.round(255 * this.rgb[2])).toString(16).substr(1)
            };
            var i = this,
                f = this.pickerMode.toLowerCase() === "hvs" ? 1 : 0,
                e = !1,
                u = jscolor.fetchElement(this.valueElement),
                r = jscolor.fetchElement(this.styleElement),
                o = !1,
                s = !1,
                h = 1,
                y = 2,
                p = 4,
                w = 8;
            jscolor.addEvent(n, "focus", function() {
                i.pickerOnfocus && i.showPicker()
            }), jscolor.addEvent(n, "blur", function() {
                e ? e = !1 : window.setTimeout(function() {
                    e || ft(), e = !1
                }, 0)
            }), u && (b = function() {
                i.fromString(u.value, h), a()
            }, jscolor.addEvent(u, "keyup", b), jscolor.addEvent(u, "input", b), jscolor.addEvent(u, "blur", et), u.setAttribute("autocomplete", "off")), r && (r.jscStyle = {
                backgroundImage: r.style.backgroundImage,
                backgroundColor: r.style.backgroundColor,
                color: r.style.color
            });
            switch (f) {
                case 0:
                    jscolor.requireImage("hs.png");
                    break;
                case 1:
                    jscolor.requireImage("hv.png")
            }
            jscolor.requireImage("cross.gif"), jscolor.requireImage("arrow.gif"), this.importColor()
        }
    }, jscolor.install(), jQuery.extend({
        Enumerable: function() {
            var y = "Single:sequence contains more than one element.",
                e = !0,
                r = null,
                i = !1,
                n = function(n) {
                    this.GetEnumerator = n
                },
                l, o;
            n.Choice = function() {
                var t = arguments[0] instanceof Array ? arguments[0] : arguments;
                return new n(function() {
                    return new u(f.Blank, function() {
                        return this.Yield(t[Math.floor(Math.random() * t.length)])
                    }, f.Blank)
                })
            }, n.Cycle = function() {
                var t = arguments[0] instanceof Array ? arguments[0] : arguments;
                return new n(function() {
                    var n = 0;
                    return new u(f.Blank, function() {
                        return n >= t.length && (n = 0), this.Yield(t[n++])
                    }, f.Blank)
                })
            }, n.Empty = function() {
                return new n(function() {
                    return new u(f.Blank, function() {
                        return i
                    }, f.Blank)
                })
            }, n.From = function(h) {
                if (h == r) return n.Empty();
                if (h instanceof n) return h;
                if (typeof h == s.Number || typeof h == s.Boolean) return n.Repeat(h, 1);
                if (typeof h == s.String) return new n(function() {
                    var n = 0;
                    return new u(f.Blank, function() {
                        return n < h.length ? this.Yield(h.charAt(n++)) : i
                    }, f.Blank)
                });
                if (typeof h != s.Function) {
                    if (typeof h.length == s.Number) return new o(h);
                    if (!(h instanceof Object) && t.IsIEnumerable(h)) return new n(function() {
                        var t = e,
                            n;
                        return new u(function() {
                            n = new Enumerator(h)
                        }, function() {
                            return t ? t = i : n.moveNext(), n.atEnd() ? i : this.Yield(n.item())
                        }, f.Blank)
                    })
                }
                return new n(function() {
                    var n = [],
                        t = 0;
                    return new u(function() {
                        for (var t in h) h[t] instanceof Function || n.push({
                            Key: t,
                            Value: h[t]
                        })
                    }, function() {
                        return t < n.length ? this.Yield(n[t++]) : i
                    }, f.Blank)
                })
            }, n.Return = function(t) {
                return n.Repeat(t, 1)
            }, n.Matches = function(t, e, o) {
                return o == r && (o = ""), e instanceof RegExp && (o += e.ignoreCase ? "i" : "", o += e.multiline ? "m" : "", e = e.source), o.indexOf("g") === -1 && (o += "g"), new n(function() {
                    var n;
                    return new u(function() {
                        n = new RegExp(e, o)
                    }, function() {
                        var r = n.exec(t);
                        return r ? this.Yield(r) : i
                    }, f.Blank)
                })
            }, n.Range = function(t, i, u) {
                return u == r && (u = 1), n.ToInfinity(t, u).Take(i)
            }, n.RangeDown = function(t, i, u) {
                return u == r && (u = 1), n.ToNegativeInfinity(t, u).Take(i)
            }, n.RangeTo = function(t, i, u) {
                return u == r && (u = 1), t < i ? n.ToInfinity(t, u).TakeWhile(function(n) {
                    return n <= i
                }) : n.ToNegativeInfinity(t, u).TakeWhile(function(n) {
                    return n >= i
                })
            }, n.Repeat = function(t, i) {
                return i != r ? n.Repeat(t).Take(i) : new n(function() {
                    return new u(f.Blank, function() {
                        return this.Yield(t)
                    }, f.Blank)
                })
            }, n.RepeatWithFinalize = function(i, f) {
                return i = t.CreateLambda(i), f = t.CreateLambda(f), new n(function() {
                    var n;
                    return new u(function() {
                        n = i()
                    }, function() {
                        return this.Yield(n)
                    }, function() {
                        n != r && (f(n), n = r)
                    })
                })
            }, n.Generate = function(i, e) {
                return e != r ? n.Generate(i).Take(e) : (i = t.CreateLambda(i), new n(function() {
                    return new u(f.Blank, function() {
                        return this.Yield(i())
                    }, f.Blank)
                }))
            }, n.ToInfinity = function(t, i) {
                return t == r && (t = 0), i == r && (i = 1), new n(function() {
                    var n;
                    return new u(function() {
                        n = t - i
                    }, function() {
                        return this.Yield(n += i)
                    }, f.Blank)
                })
            }, n.ToNegativeInfinity = function(t, i) {
                return t == r && (t = 0), i == r && (i = 1), new n(function() {
                    var n;
                    return new u(function() {
                        n = t + i
                    }, function() {
                        return this.Yield(n -= i)
                    }, f.Blank)
                })
            }, n.Unfold = function(r, o) {
                return o = t.CreateLambda(o), new n(function() {
                    var t = e,
                        n;
                    return new u(f.Blank, function() {
                        return t ? (t = i, n = r, this.Yield(n)) : (n = o(n), this.Yield(n))
                    }, f.Blank)
                })
            }, n.prototype = {
                CascadeBreadthFirst: function(r, f) {
                    var o = this;
                    return r = t.CreateLambda(r), f = t.CreateLambda(f), new n(function() {
                        var s, c = 0,
                            h = [];
                        return new u(function() {
                            s = o.GetEnumerator()
                        }, function() {
                            while (e) {
                                if (s.MoveNext()) return h.push(s.Current()), this.Yield(f(s.Current(), c));
                                var u = n.From(h).SelectMany(function(n) {
                                    return r(n)
                                });
                                if (u.Any()) c++, h = [], t.Dispose(s), s = u.GetEnumerator();
                                else return i
                            }
                        }, function() {
                            t.Dispose(s)
                        })
                    })
                },
                CascadeDepthFirst: function(r, f) {
                    var o = this;
                    return r = t.CreateLambda(r), f = t.CreateLambda(f), new n(function() {
                        var h = [],
                            s;
                        return new u(function() {
                            s = o.GetEnumerator()
                        }, function() {
                            while (e) {
                                if (s.MoveNext()) {
                                    var u = f(s.Current(), h.length);
                                    return h.push(s), s = n.From(r(s.Current())).GetEnumerator(), this.Yield(u)
                                }
                                if (h.length <= 0) return i;
                                t.Dispose(s), s = h.pop()
                            }
                        }, function() {
                            try {
                                t.Dispose(s)
                            } finally {
                                n.From(h).ForEach(function(n) {
                                    n.Dispose()
                                })
                            }
                        })
                    })
                },
                Flatten: function() {
                    var o = this;
                    return new n(function() {
                        var h, s = r;
                        return new u(function() {
                            h = o.GetEnumerator()
                        }, function() {
                            while (e) {
                                if (s != r) {
                                    if (s.MoveNext()) return this.Yield(s.Current());
                                    s = r
                                }
                                if (h.MoveNext())
                                    if (h.Current() instanceof Array) {
                                        t.Dispose(s), s = n.From(h.Current()).SelectMany(f.Identity).Flatten().GetEnumerator();
                                        continue
                                    } else return this.Yield(h.Current());
                                return i
                            }
                        }, function() {
                            try {
                                t.Dispose(h)
                            } finally {
                                t.Dispose(s)
                            }
                        })
                    })
                },
                Pairwise: function(r) {
                    var f = this;
                    return r = t.CreateLambda(r), new n(function() {
                        var n;
                        return new u(function() {
                            n = f.GetEnumerator(), n.MoveNext()
                        }, function() {
                            var t = n.Current();
                            return n.MoveNext() ? this.Yield(r(t, n.Current())) : i
                        }, function() {
                            t.Dispose(n)
                        })
                    })
                },
                Scan: function(f, o, s) {
                    var h, c;
                    return s != r ? this.Scan(f, o).Select(s) : (o == r ? (o = t.CreateLambda(f), h = i) : (o = t.CreateLambda(o), h = e), c = this, new n(function() {
                        var n, r, s = e;
                        return new u(function() {
                            n = c.GetEnumerator()
                        }, function() {
                            if (s) {
                                if (s = i, h) return this.Yield(r = f);
                                if (n.MoveNext()) return this.Yield(r = n.Current())
                            }
                            return n.MoveNext() ? this.Yield(r = o(r, n.Current())) : i
                        }, function() {
                            t.Dispose(n)
                        })
                    }))
                },
                Select: function(r) {
                    var f = this;
                    return r = t.CreateLambda(r), new n(function() {
                        var n, e = 0;
                        return new u(function() {
                            n = f.GetEnumerator()
                        }, function() {
                            return n.MoveNext() ? this.Yield(r(n.Current(), e++)) : i
                        }, function() {
                            t.Dispose(n)
                        })
                    })
                },
                SelectMany: function(f, e) {
                    var o = this;
                    return f = t.CreateLambda(f), e == r && (e = function(n, t) {
                        return t
                    }), e = t.CreateLambda(e), new n(function() {
                        var h, s = undefined,
                            c = 0;
                        return new u(function() {
                            h = o.GetEnumerator()
                        }, function() {
                            if (s === undefined && !h.MoveNext()) return i;
                            do {
                                if (s == r) {
                                    var u = f(h.Current(), c++);
                                    s = n.From(u).GetEnumerator()
                                }
                                if (s.MoveNext()) return this.Yield(e(h.Current(), s.Current()));
                                t.Dispose(s), s = r
                            } while (h.MoveNext());
                            return i
                        }, function() {
                            try {
                                t.Dispose(h)
                            } finally {
                                t.Dispose(s)
                            }
                        })
                    })
                },
                Where: function(r) {
                    r = t.CreateLambda(r);
                    var f = this;
                    return new n(function() {
                        var n, e = 0;
                        return new u(function() {
                            n = f.GetEnumerator()
                        }, function() {
                            while (n.MoveNext())
                                if (r(n.Current(), e++)) return this.Yield(n.Current());
                            return i
                        }, function() {
                            t.Dispose(n)
                        })
                    })
                },
                OfType: function(n) {
                    var t;
                    switch (n) {
                        case Number:
                            t = s.Number;
                            break;
                        case String:
                            t = s.String;
                            break;
                        case Boolean:
                            t = s.Boolean;
                            break;
                        case Function:
                            t = s.Function;
                            break;
                        default:
                            t = r
                    }
                    return t === r ? this.Where(function(t) {
                        return t instanceof n
                    }) : this.Where(function(n) {
                        return typeof n === t
                    })
                },
                Zip: function(r, f) {
                    f = t.CreateLambda(f);
                    var e = this;
                    return new n(function() {
                        var o, s, h = 0;
                        return new u(function() {
                            o = e.GetEnumerator(), s = n.From(r).GetEnumerator()
                        }, function() {
                            return o.MoveNext() && s.MoveNext() ? this.Yield(f(o.Current(), s.Current(), h++)) : i
                        }, function() {
                            try {
                                t.Dispose(o)
                            } finally {
                                t.Dispose(s)
                            }
                        })
                    })
                },
                Join: function(o, s, h, c, l) {
                    s = t.CreateLambda(s), h = t.CreateLambda(h), c = t.CreateLambda(c), l = t.CreateLambda(l);
                    var a = this;
                    return new n(function() {
                        var v, p, y = r,
                            w = 0;
                        return new u(function() {
                            v = a.GetEnumerator(), p = n.From(o).ToLookup(h, f.Identity, l)
                        }, function() {
                            for (var n, t; e;) {
                                if (y != r) {
                                    if (n = y[w++], n !== undefined) return this.Yield(c(v.Current(), n));
                                    n = r, w = 0
                                }
                                if (v.MoveNext()) t = s(v.Current()), y = p.Get(t).ToArray();
                                else return i
                            }
                        }, function() {
                            t.Dispose(v)
                        })
                    })
                },
                GroupJoin: function(e, o, s, h, c) {
                    o = t.CreateLambda(o), s = t.CreateLambda(s), h = t.CreateLambda(h), c = t.CreateLambda(c);
                    var l = this;
                    return new n(function() {
                        var a = l.GetEnumerator(),
                            v = r;
                        return new u(function() {
                            a = l.GetEnumerator(), v = n.From(e).ToLookup(s, f.Identity, c)
                        }, function() {
                            if (a.MoveNext()) {
                                var n = v.Get(o(a.Current()));
                                return this.Yield(h(a.Current(), n))
                            }
                            return i
                        }, function() {
                            t.Dispose(a)
                        })
                    })
                },
                All: function(n) {
                    n = t.CreateLambda(n);
                    var r = e;
                    return this.ForEach(function(t) {
                        if (!n(t)) return r = i, i
                    }), r
                },
                Any: function(n) {
                    n = t.CreateLambda(n);
                    var r = this.GetEnumerator();
                    try {
                        if (arguments.length == 0) return r.MoveNext();
                        while (r.MoveNext())
                            if (n(r.Current())) return e;
                        return i
                    } finally {
                        t.Dispose(r)
                    }
                },
                Concat: function(f) {
                    var e = this;
                    return new n(function() {
                        var s, o;
                        return new u(function() {
                            s = e.GetEnumerator()
                        }, function() {
                            if (o == r) {
                                if (s.MoveNext()) return this.Yield(s.Current());
                                o = n.From(f).GetEnumerator()
                            }
                            return o.MoveNext() ? this.Yield(o.Current()) : i
                        }, function() {
                            try {
                                t.Dispose(s)
                            } finally {
                                t.Dispose(o)
                            }
                        })
                    })
                },
                Insert: function(r, f) {
                    var o = this;
                    return new n(function() {
                        var h, s, c = 0,
                            l = i;
                        return new u(function() {
                            h = o.GetEnumerator(), s = n.From(f).GetEnumerator()
                        }, function() {
                            return c == r && s.MoveNext() ? (l = e, this.Yield(s.Current())) : h.MoveNext() ? (c++, this.Yield(h.Current())) : !l && s.MoveNext() ? this.Yield(s.Current()) : i
                        }, function() {
                            try {
                                t.Dispose(h)
                            } finally {
                                t.Dispose(s)
                            }
                        })
                    })
                },
                Alternate: function(t) {
                    return t = n.Return(t), this.SelectMany(function(i) {
                        return n.Return(i).Concat(t)
                    }).TakeExceptLast()
                },
                Contains: function(n, r) {
                    r = t.CreateLambda(r);
                    var u = this.GetEnumerator();
                    try {
                        while (u.MoveNext())
                            if (r(u.Current()) === n) return e;
                        return i
                    } finally {
                        t.Dispose(u)
                    }
                },
                DefaultIfEmpty: function(r) {
                    var f = this;
                    return new n(function() {
                        var n, o = e;
                        return new u(function() {
                            n = f.GetEnumerator()
                        }, function() {
                            return n.MoveNext() ? (o = i, this.Yield(n.Current())) : o ? (o = i, this.Yield(r)) : i
                        }, function() {
                            t.Dispose(n)
                        })
                    })
                },
                Distinct: function(t) {
                    return this.Except(n.Empty(), t)
                },
                Except: function(r, f) {
                    f = t.CreateLambda(f);
                    var e = this;
                    return new n(function() {
                        var o, s;
                        return new u(function() {
                            o = e.GetEnumerator(), s = new a(f), n.From(r).ForEach(function(n) {
                                s.Add(n)
                            })
                        }, function() {
                            while (o.MoveNext()) {
                                var n = o.Current();
                                if (!s.Contains(n)) return s.Add(n), this.Yield(n)
                            }
                            return i
                        }, function() {
                            t.Dispose(o)
                        })
                    })
                },
                Intersect: function(r, f) {
                    f = t.CreateLambda(f);
                    var e = this;
                    return new n(function() {
                        var o, s, h;
                        return new u(function() {
                            o = e.GetEnumerator(), s = new a(f), n.From(r).ForEach(function(n) {
                                s.Add(n)
                            }), h = new a(f)
                        }, function() {
                            while (o.MoveNext()) {
                                var n = o.Current();
                                if (!h.Contains(n) && s.Contains(n)) return h.Add(n), this.Yield(n)
                            }
                            return i
                        }, function() {
                            t.Dispose(o)
                        })
                    })
                },
                SequenceEqual: function(r, u) {
                    var o, f;
                    u = t.CreateLambda(u), o = this.GetEnumerator();
                    try {
                        f = n.From(r).GetEnumerator();
                        try {
                            while (o.MoveNext())
                                if (!f.MoveNext() || u(o.Current()) !== u(f.Current())) return i;
                            return f.MoveNext() ? i : e
                        } finally {
                            t.Dispose(f)
                        }
                    } finally {
                        t.Dispose(o)
                    }
                },
                Union: function(r, f) {
                    f = t.CreateLambda(f);
                    var e = this;
                    return new n(function() {
                        var h, o, s;
                        return new u(function() {
                            h = e.GetEnumerator(), s = new a(f)
                        }, function() {
                            var t;
                            if (o === undefined) {
                                while (h.MoveNext())
                                    if (t = h.Current(), !s.Contains(t)) return s.Add(t), this.Yield(t);
                                o = n.From(r).GetEnumerator()
                            }
                            while (o.MoveNext())
                                if (t = o.Current(), !s.Contains(t)) return s.Add(t), this.Yield(t);
                            return i
                        }, function() {
                            try {
                                t.Dispose(h)
                            } finally {
                                t.Dispose(o)
                            }
                        })
                    })
                },
                OrderBy: function(n) {
                    return new h(this, n, i)
                },
                OrderByDescending: function(n) {
                    return new h(this, n, e)
                },
                Reverse: function() {
                    var t = this;
                    return new n(function() {
                        var n, r;
                        return new u(function() {
                            n = t.ToArray(), r = n.length
                        }, function() {
                            return r > 0 ? this.Yield(n[--r]) : i
                        }, f.Blank)
                    })
                },
                Shuffle: function() {
                    var t = this;
                    return new n(function() {
                        var n;
                        return new u(function() {
                            n = t.ToArray()
                        }, function() {
                            if (n.length > 0) {
                                var t = Math.floor(Math.random() * n.length);
                                return this.Yield(n.splice(t, 1)[0])
                            }
                            return i
                        }, f.Blank)
                    })
                },
                GroupBy: function(f, e, o, s) {
                    var h = this;
                    return f = t.CreateLambda(f), e = t.CreateLambda(e), o != r && (o = t.CreateLambda(o)), s = t.CreateLambda(s), new n(function() {
                        var n;
                        return new u(function() {
                            n = h.ToLookup(f, e, s).ToEnumerable().GetEnumerator()
                        }, function() {
                            while (n.MoveNext()) return o == r ? this.Yield(n.Current()) : this.Yield(o(n.Current().Key(), n.Current()));
                            return i
                        }, function() {
                            t.Dispose(n)
                        })
                    })
                },
                PartitionBy: function(f, o, s, h) {
                    var l = this,
                        c;
                    return f = t.CreateLambda(f), o = t.CreateLambda(o), h = t.CreateLambda(h), s == r ? (c = i, s = function(n, t) {
                        return new v(n, t)
                    }) : (c = e, s = t.CreateLambda(s)), new n(function() {
                        var r, v, y, a = [];
                        return new u(function() {
                            r = l.GetEnumerator(), r.MoveNext() && (v = f(r.Current()), y = h(v), a.push(o(r.Current())))
                        }, function() {
                            for (var t, u;
                                (t = r.MoveNext()) == e;)
                                if (y === h(f(r.Current()))) a.push(o(r.Current()));
                                else break;
                            return a.length > 0 ? (u = c ? s(v, n.From(a)) : s(v, a), t ? (v = f(r.Current()), y = h(v), a = [o(r.Current())]) : a = [], this.Yield(u)) : i
                        }, function() {
                            t.Dispose(r)
                        })
                    })
                },
                BufferWithCount: function(r) {
                    var f = this;
                    return new n(function() {
                        var n;
                        return new u(function() {
                            n = f.GetEnumerator()
                        }, function() {
                            for (var t = [], u = 0; n.MoveNext();)
                                if (t.push(n.Current()), ++u >= r) return this.Yield(t);
                            return t.length > 0 ? this.Yield(t) : i
                        }, function() {
                            t.Dispose(n)
                        })
                    })
                },
                Aggregate: function(n, t, i) {
                    return this.Scan(n, t, i).Last()
                },
                Average: function(n) {
                    n = t.CreateLambda(n);
                    var i = 0,
                        r = 0;
                    return this.ForEach(function(t) {
                        i += n(t), ++r
                    }), i / r
                },
                Count: function(n) {
                    n = n == r ? f.True : t.CreateLambda(n);
                    var i = 0;
                    return this.ForEach(function(t, r) {
                        n(t, r) && ++i
                    }), i
                },
                Max: function(n) {
                    return n == r && (n = f.Identity), this.Select(n).Aggregate(function(n, t) {
                        return n > t ? n : t
                    })
                },
                Min: function(n) {
                    return n == r && (n = f.Identity), this.Select(n).Aggregate(function(n, t) {
                        return n < t ? n : t
                    })
                },
                MaxBy: function(n) {
                    return n = t.CreateLambda(n), this.Aggregate(function(t, i) {
                        return n(t) > n(i) ? t : i
                    })
                },
                MinBy: function(n) {
                    return n = t.CreateLambda(n), this.Aggregate(function(t, i) {
                        return n(t) < n(i) ? t : i
                    })
                },
                Sum: function(n) {
                    return n == r && (n = f.Identity), this.Select(n).Aggregate(0, function(n, t) {
                        return n + t
                    })
                },
                ElementAt: function(n) {
                    var t, r = i;
                    if (this.ForEach(function(u, f) {
                            if (f == n) return t = u, r = e, i
                        }), !r) throw new Error("index is less than 0 or greater than or equal to the number of elements in source.");
                    return t
                },
                ElementAtOrDefault: function(n, t) {
                    var r, u = i;
                    return this.ForEach(function(t, f) {
                        if (f == n) return r = t, u = e, i
                    }), u ? r : t
                },
                First: function(n) {
                    if (n != r) return this.Where(n).First();
                    var t, u = i;
                    if (this.ForEach(function(n) {
                            return t = n, u = e, i
                        }), !u) throw new Error("First:No element satisfies the condition.");
                    return t
                },
                FirstOrDefault: function(n, t) {
                    if (t != r) return this.Where(t).FirstOrDefault(n);
                    var u, f = i;
                    return this.ForEach(function(n) {
                        return u = n, f = e, i
                    }), f ? u : n
                },
                Last: function(n) {
                    if (n != r) return this.Where(n).Last();
                    var t, u = i;
                    if (this.ForEach(function(n) {
                            u = e, t = n
                        }), !u) throw new Error("Last:No element satisfies the condition.");
                    return t
                },
                LastOrDefault: function(n, t) {
                    if (t != r) return this.Where(t).LastOrDefault(n);
                    var u, f = i;
                    return this.ForEach(function(n) {
                        f = e, u = n
                    }), f ? u : n
                },
                Single: function(n) {
                    if (n != r) return this.Where(n).Single();
                    var u, t = i;
                    if (this.ForEach(function(n) {
                            if (t) throw new Error(y);
                            else t = e, u = n
                        }), !t) throw new Error("Single:No element satisfies the condition.");
                    return u
                },
                SingleOrDefault: function(n, t) {
                    if (t != r) return this.Where(t).SingleOrDefault(n);
                    var f, u = i;
                    return this.ForEach(function(n) {
                        if (u) throw new Error(y);
                        else u = e, f = n
                    }), u ? f : n
                },
                Skip: function(r) {
                    var f = this;
                    return new n(function() {
                        var n, e = 0;
                        return new u(function() {
                            for (n = f.GetEnumerator(); e++ < r && n.MoveNext(););
                        }, function() {
                            return n.MoveNext() ? this.Yield(n.Current()) : i
                        }, function() {
                            t.Dispose(n)
                        })
                    })
                },
                SkipWhile: function(r) {
                    r = t.CreateLambda(r);
                    var f = this;
                    return new n(function() {
                        var n, s = 0,
                            o = i;
                        return new u(function() {
                            n = f.GetEnumerator()
                        }, function() {
                            while (!o)
                                if (n.MoveNext()) {
                                    if (!r(n.Current(), s++)) return o = e, this.Yield(n.Current());
                                    continue
                                } else return i;
                            return n.MoveNext() ? this.Yield(n.Current()) : i
                        }, function() {
                            t.Dispose(n)
                        })
                    })
                },
                Take: function(r) {
                    var f = this;
                    return new n(function() {
                        var n, e = 0;
                        return new u(function() {
                            n = f.GetEnumerator()
                        }, function() {
                            return e++ < r && n.MoveNext() ? this.Yield(n.Current()) : i
                        }, function() {
                            t.Dispose(n)
                        })
                    })
                },
                TakeWhile: function(r) {
                    r = t.CreateLambda(r);
                    var f = this;
                    return new n(function() {
                        var n, e = 0;
                        return new u(function() {
                            n = f.GetEnumerator()
                        }, function() {
                            return n.MoveNext() && r(n.Current(), e++) ? this.Yield(n.Current()) : i
                        }, function() {
                            t.Dispose(n)
                        })
                    })
                },
                TakeExceptLast: function(f) {
                    f == r && (f = 1);
                    var e = this;
                    return new n(function() {
                        if (f <= 0) return e.GetEnumerator();
                        var n, r = [];
                        return new u(function() {
                            n = e.GetEnumerator()
                        }, function() {
                            while (n.MoveNext()) {
                                if (r.length == f) return r.push(n.Current()), this.Yield(r.shift());
                                r.push(n.Current())
                            }
                            return i
                        }, function() {
                            t.Dispose(n)
                        })
                    })
                },
                TakeFromLast: function(f) {
                    if (f <= 0 || f == r) return n.Empty();
                    var e = this;
                    return new n(function() {
                        var h, o, s = [];
                        return new u(function() {
                            h = e.GetEnumerator()
                        }, function() {
                            while (h.MoveNext()) s.length == f && s.shift(), s.push(h.Current());
                            return o == r && (o = n.From(s).GetEnumerator()), o.MoveNext() ? this.Yield(o.Current()) : i
                        }, function() {
                            t.Dispose(o)
                        })
                    })
                },
                IndexOf: function(n) {
                    var t = r;
                    return this.ForEach(function(i, r) {
                        if (i === n) return t = r, e
                    }), t !== r ? t : -1
                },
                LastIndexOf: function(n) {
                    var t = -1;
                    return this.ForEach(function(i, r) {
                        i === n && (t = r)
                    }), t
                },
                ToArray: function() {
                    var n = [];
                    return this.ForEach(function(t) {
                        n.push(t)
                    }), n
                },
                ToLookup: function(n, i, r) {
                    n = t.CreateLambda(n), i = t.CreateLambda(i), r = t.CreateLambda(r);
                    var u = new a(r);
                    return this.ForEach(function(t) {
                        var r = n(t),
                            f = i(t),
                            e = u.Get(r);
                        e !== undefined ? e.push(f) : u.Add(r, [f])
                    }), new w(u)
                },
                ToObject: function(n, i) {
                    n = t.CreateLambda(n), i = t.CreateLambda(i);
                    var r = {};
                    return this.ForEach(function(t) {
                        r[n(t)] = i(t)
                    }), r
                },
                ToDictionary: function(n, i, r) {
                    n = t.CreateLambda(n), i = t.CreateLambda(i), r = t.CreateLambda(r);
                    var u = new a(r);
                    return this.ForEach(function(t) {
                        u.Add(n(t), i(t))
                    }), u
                },
                ToJSON: function(n, t) {
                    return JSON.stringify(this.ToArray(), n, t)
                },
                ToString: function(n, t) {
                    return n == r && (n = ""), t == r && (t = f.Identity), this.Select(t).ToArray().join(n)
                },
                Do: function(r) {
                    var f = this;
                    return r = t.CreateLambda(r), new n(function() {
                        var n, e = 0;
                        return new u(function() {
                            n = f.GetEnumerator()
                        }, function() {
                            return n.MoveNext() ? (r(n.Current(), e++), this.Yield(n.Current())) : i
                        }, function() {
                            t.Dispose(n)
                        })
                    })
                },
                ForEach: function(n) {
                    n = t.CreateLambda(n);
                    var u = 0,
                        r = this.GetEnumerator();
                    try {
                        while (r.MoveNext())
                            if (n(r.Current(), u++) === i) break
                    } finally {
                        t.Dispose(r)
                    }
                },
                Write: function(n, u) {
                    n == r && (n = ""), u = t.CreateLambda(u);
                    var f = e;
                    this.ForEach(function(t) {
                        f ? f = i : document.write(n), document.write(u(t))
                    })
                },
                WriteLine: function(n) {
                    n = t.CreateLambda(n), this.ForEach(function(t) {
                        document.write(n(t)), document.write("<br />")
                    })
                },
                Force: function() {
                    var n = this.GetEnumerator();
                    try {
                        while (n.MoveNext());
                    } finally {
                        t.Dispose(n)
                    }
                },
                Let: function(r) {
                    r = t.CreateLambda(r);
                    var f = this;
                    return new n(function() {
                        var e;
                        return new u(function() {
                            e = n.From(r(f)).GetEnumerator()
                        }, function() {
                            return e.MoveNext() ? this.Yield(e.Current()) : i
                        }, function() {
                            t.Dispose(e)
                        })
                    })
                },
                Share: function() {
                    var e = this,
                        t;
                    return new n(function() {
                        return new u(function() {
                            t == r && (t = e.GetEnumerator())
                        }, function() {
                            return t.MoveNext() ? this.Yield(t.Current()) : i
                        }, f.Blank)
                    })
                },
                MemoizeAll: function() {
                    var o = this,
                        t, e;
                    return new n(function() {
                        var n = -1;
                        return new u(function() {
                            e == r && (e = o.GetEnumerator(), t = [])
                        }, function() {
                            return n++, t.length <= n ? e.MoveNext() ? this.Yield(t[n] = e.Current()) : i : this.Yield(t[n])
                        }, f.Blank)
                    })
                },
                Catch: function(r) {
                    r = t.CreateLambda(r);
                    var f = this;
                    return new n(function() {
                        var n;
                        return new u(function() {
                            n = f.GetEnumerator()
                        }, function() {
                            try {
                                return n.MoveNext() ? this.Yield(n.Current()) : i
                            } catch (t) {
                                return r(t), i
                            }
                        }, function() {
                            t.Dispose(n)
                        })
                    })
                },
                Finally: function(r) {
                    r = t.CreateLambda(r);
                    var f = this;
                    return new n(function() {
                        var n;
                        return new u(function() {
                            n = f.GetEnumerator()
                        }, function() {
                            return n.MoveNext() ? this.Yield(n.Current()) : i
                        }, function() {
                            try {
                                t.Dispose(n)
                            } finally {
                                r()
                            }
                        })
                    })
                },
                Trace: function(n, i) {
                    return n == r && (n = "Trace"), i = t.CreateLambda(i), this.Do(function(t) {
                        console.log(n, ":", i(t))
                    })
                }
            };
            var f = {
                    Identity: function(n) {
                        return n
                    },
                    True: function() {
                        return e
                    },
                    Blank: function() {}
                },
                s = {
                    Boolean: typeof e,
                    Number: "number",
                    String: "string",
                    Object: "object",
                    Undefined: typeof undefined,
                    Function: typeof
                    function() {}
                },
                t = {
                    CreateLambda: function(n) {
                        if (n == r) return f.Identity;
                        if (typeof n == s.String) {
                            if (n == "") return f.Identity;
                            if (n.indexOf("=>") == -1) return new Function("$,$$,$$$,$$$$", "return " + n);
                            var t = n.match(/^[(\s]*([^()]*?)[)\s]*=>(.*)/);
                            return new Function(t[1], "return " + t[2])
                        }
                        return n
                    },
                    IsIEnumerable: function(n) {
                        if (typeof Enumerator != s.Undefined) try {
                            return new Enumerator(n), e
                        } catch (t) {}
                        return i
                    },
                    Compare: function(n, t) {
                        return n === t ? 0 : n > t ? 1 : -1
                    },
                    Dispose: function(n) {
                        n != r && n.Dispose()
                    }
                },
                c = {
                    Before: 0,
                    Running: 1,
                    After: 2
                },
                u = function(n, t, r) {
                    var f = new p,
                        u = c.Before;
                    this.Current = f.Current, this.MoveNext = function() {
                        try {
                            switch (u) {
                                case c.Before:
                                    u = c.Running, n();
                                case c.Running:
                                    return t.apply(f) ? e : (this.Dispose(), i);
                                case c.After:
                                    return i
                            }
                        } catch (r) {
                            this.Dispose();
                            throw r;
                        }
                    }, this.Dispose = function() {
                        if (u == c.Running) try {
                            r()
                        } finally {
                            u = c.After
                        }
                    }
                },
                p = function() {
                    var n = r;
                    this.Current = function() {
                        return n
                    }, this.Yield = function(t) {
                        return n = t, e
                    }
                },
                h = function(n, i, r, u) {
                    var f = this;
                    f.source = n, f.keySelector = t.CreateLambda(i), f.descending = r, f.parent = u
                };
            h.prototype = new n, h.prototype.CreateOrderedEnumerable = function(n, t) {
                return new h(this.source, n, t, this)
            }, h.prototype.ThenBy = function(n) {
                return this.CreateOrderedEnumerable(n, i)
            }, h.prototype.ThenByDescending = function(n) {
                return this.CreateOrderedEnumerable(n, e)
            }, h.prototype.GetEnumerator = function() {
                var e = this,
                    t, n, o = 0;
                return new u(function() {
                    t = [], n = [], e.source.ForEach(function(i, r) {
                        t.push(i), n.push(r)
                    });
                    var i = l.Create(e, r);
                    i.GenerateKeys(t), n.sort(function(n, t) {
                        return i.Compare(n, t)
                    })
                }, function() {
                    return o < n.length ? this.Yield(t[n[o++]]) : i
                }, f.Blank)
            }, l = function(n, t, i) {
                var u = this;
                u.keySelector = n, u.descending = t, u.child = i, u.keys = r
            }, l.Create = function(n, t) {
                var i = new l(n.keySelector, n.descending, t);
                return n.parent != r ? l.Create(n.parent, i) : i
            }, l.prototype.GenerateKeys = function(n) {
                for (var t = this, u = n.length, e = t.keySelector, f = new Array(u), i = 0; i < u; i++) f[i] = e(n[i]);
                t.keys = f, t.child != r && t.child.GenerateKeys(n)
            }, l.prototype.Compare = function(n, i) {
                var u = this,
                    f = t.Compare(u.keys[n], u.keys[i]);
                if (f == 0) {
                    if (u.child != r) return u.child.Compare(n, i);
                    f = t.Compare(n, i)
                }
                return u.descending ? -f : f
            }, o = function(n) {
                this.source = n
            }, o.prototype = new n, o.prototype.Any = function(t) {
                return t == r ? this.source.length > 0 : n.prototype.Any.apply(this, arguments)
            }, o.prototype.Count = function(t) {
                return t == r ? this.source.length : n.prototype.Count.apply(this, arguments)
            }, o.prototype.ElementAt = function(t) {
                return 0 <= t && t < this.source.length ? this.source[t] : n.prototype.ElementAt.apply(this, arguments)
            }, o.prototype.ElementAtOrDefault = function(n, t) {
                return 0 <= n && n < this.source.length ? this.source[n] : t
            }, o.prototype.First = function(t) {
                return t == r && this.source.length > 0 ? this.source[0] : n.prototype.First.apply(this, arguments)
            }, o.prototype.FirstOrDefault = function(t, i) {
                return i != r ? n.prototype.FirstOrDefault.apply(this, arguments) : this.source.length > 0 ? this.source[0] : t
            }, o.prototype.Last = function(t) {
                var i = this;
                return t == r && i.source.length > 0 ? i.source[i.source.length - 1] : n.prototype.Last.apply(i, arguments)
            }, o.prototype.LastOrDefault = function(t, i) {
                var u = this;
                return i != r ? n.prototype.LastOrDefault.apply(u, arguments) : u.source.length > 0 ? u.source[u.source.length - 1] : t
            }, o.prototype.Skip = function(t) {
                var r = this.source;
                return new n(function() {
                    var n;
                    return new u(function() {
                        n = t < 0 ? 0 : t
                    }, function() {
                        return n < r.length ? this.Yield(r[n++]) : i
                    }, f.Blank)
                })
            }, o.prototype.TakeExceptLast = function(n) {
                return n == r && (n = 1), this.Take(this.source.length - n)
            }, o.prototype.TakeFromLast = function(n) {
                return this.Skip(this.source.length - n)
            }, o.prototype.Reverse = function() {
                var t = this.source;
                return new n(function() {
                    var n;
                    return new u(function() {
                        n = t.length
                    }, function() {
                        return n > 0 ? this.Yield(t[--n]) : i
                    }, f.Blank)
                })
            }, o.prototype.SequenceEqual = function(t, u) {
                return (t instanceof o || t instanceof Array) && u == r && n.From(t).Count() != this.Count() ? i : n.prototype.SequenceEqual.apply(this, arguments)
            }, o.prototype.ToString = function(t, i) {
                return i != r || !(this.source instanceof Array) ? n.prototype.ToString.apply(this, arguments) : (t == r && (t = ""), this.source.join(t))
            }, o.prototype.GetEnumerator = function() {
                var n = this.source,
                    t = 0;
                return new u(f.Blank, function() {
                    return t < n.length ? this.Yield(n[t++]) : i
                }, f.Blank)
            };
            var a = function() {
                    var t = function(n, t) {
                            return Object.prototype.hasOwnProperty.call(n, t)
                        },
                        o = function(n) {
                            return n === r ? "null" : n === undefined ? "undefined" : typeof n.toString === s.Function ? n.toString() : Object.prototype.toString.call(n)
                        },
                        l = function(n, t) {
                            var i = this;
                            i.Key = n, i.Value = t, i.Prev = r, i.Next = r
                        },
                        h = function() {
                            this.First = r, this.Last = r
                        },
                        c;
                    return h.prototype = {
                        AddLast: function(n) {
                            var t = this;
                            t.Last != r ? (t.Last.Next = n, n.Prev = t.Last, t.Last = n) : t.First = t.Last = n
                        },
                        Replace: function(n, t) {
                            n.Prev != r ? (n.Prev.Next = t, t.Prev = n.Prev) : this.First = t, n.Next != r ? (n.Next.Prev = t, t.Next = n.Next) : this.Last = t
                        },
                        Remove: function(n) {
                            n.Prev != r ? n.Prev.Next = n.Next : this.First = n.Next, n.Next != r ? n.Next.Prev = n.Prev : this.Last = n.Prev
                        }
                    }, c = function(n) {
                        var t = this;
                        t.count = 0, t.entryList = new h, t.buckets = {}, t.compareSelector = n == r ? f.Identity : n
                    }, c.prototype = {
                        Add: function(n, i) {
                            var r = this,
                                h = r.compareSelector(n),
                                s = o(h),
                                e = new l(n, i),
                                u, f;
                            if (t(r.buckets, s)) {
                                for (u = r.buckets[s], f = 0; f < u.length; f++)
                                    if (r.compareSelector(u[f].Key) === h) {
                                        r.entryList.Replace(u[f], e), u[f] = e;
                                        return
                                    }
                                u.push(e)
                            } else r.buckets[s] = [e];
                            r.count++, r.entryList.AddLast(e)
                        },
                        Get: function(n) {
                            var i = this,
                                e = i.compareSelector(n),
                                s = o(e),
                                u, r, f;
                            if (!t(i.buckets, s)) return undefined;
                            for (u = i.buckets[s], r = 0; r < u.length; r++)
                                if (f = u[r], i.compareSelector(f.Key) === e) return f.Value;
                            return undefined
                        },
                        Set: function(n, r) {
                            var f = this,
                                c = f.compareSelector(n),
                                a = o(c),
                                s, u, h;
                            if (t(f.buckets, a))
                                for (s = f.buckets[a], u = 0; u < s.length; u++)
                                    if (f.compareSelector(s[u].Key) === c) return h = new l(n, r), f.entryList.Replace(s[u], h), s[u] = h, e;
                            return i
                        },
                        Contains: function(n) {
                            var r = this,
                                s = r.compareSelector(n),
                                h = o(s),
                                f, u;
                            if (!t(r.buckets, h)) return i;
                            for (f = r.buckets[h], u = 0; u < f.length; u++)
                                if (r.compareSelector(f[u].Key) === s) return e;
                            return i
                        },
                        Clear: function() {
                            this.count = 0, this.buckets = {}, this.entryList = new h
                        },
                        Remove: function(n) {
                            var i = this,
                                e = i.compareSelector(n),
                                f = o(e),
                                r, u;
                            if (t(i.buckets, f))
                                for (r = i.buckets[f], u = 0; u < r.length; u++)
                                    if (i.compareSelector(r[u].Key) === e) {
                                        i.entryList.Remove(r[u]), r.splice(u, 1), r.length == 0 && delete i.buckets[f], i.count--;
                                        return
                                    }
                        },
                        Count: function() {
                            return this.count
                        },
                        ToEnumerable: function() {
                            var t = this;
                            return new n(function() {
                                var n;
                                return new u(function() {
                                    n = t.entryList.First
                                }, function() {
                                    if (n != r) {
                                        var t = {
                                            Key: n.Key,
                                            Value: n.Value
                                        };
                                        return n = n.Next, this.Yield(t)
                                    }
                                    return i
                                }, f.Blank)
                            })
                        }
                    }, c
                }(),
                w = function(t) {
                    var i = this;
                    i.Count = function() {
                        return t.Count()
                    }, i.Get = function(i) {
                        return n.From(t.Get(i))
                    }, i.Contains = function(n) {
                        return t.Contains(n)
                    }, i.ToEnumerable = function() {
                        return t.ToEnumerable().Select(function(n) {
                            return new v(n.Key, n.Value)
                        })
                    }
                },
                v = function(n, t) {
                    this.Key = function() {
                        return n
                    }, o.call(this, t)
                };
            return v.prototype = new o, n
        }()
    }),
    function(n, t) {
        n.fn.toEnumerable = function() {
            return t.From(this).Select(function(t) {
                return n(t)
            })
        }, t.prototype.TojQuery = function() {
            return n(this.ToArray())
        }
    }(jQuery, this.Enumerable || this.jQuery.Enumerable), window.onload = prepare_linkification,
    function(n) {
        var t = {};
        n.publish = function(i, r) {
            t[i] && n.each(t[i], function() {
                this.apply(n, r || [])
            })
        }, n.subscribe = function(n, i) {
            return t[n] || (t[n] = []), t[n].push(i), [n, i]
        }, n.unsubscribe = function(i) {
            var r = i[0];
            t[r] && n.each(t[r], function(n) {
                this == i[1] && t[r].splice(n, 1)
            })
        }
    }(jQuery),
    function(n) {
        function t(n, t) {
            return this.paginate = null, this.settings = n, this.$elem = t, this
        }
        n.fn.wPaginate = function(i, r) {
            if (typeof i == "object") r = i;
            else if (typeof i == "string") {
                var u = [],
                    f = this.each(function() {
                        var t = n(this).data("_wPaginate");
                        t && (i === "destroy" ? t.destroy() : n.fn.wPaginate.defaultSettings[i] !== undefined && (r !== undefined ? t.settings[i] = r : u.push(t.settings[i])))
                    });
                return u.length === 1 ? u[0] : u.length > 0 ? u : f
            }
            return this.each(function() {
                var i = n(this),
                    f = n.extend({}, n.fn.wPaginate.defaultSettings, r || {}),
                    u = new t(f, i),
                    e = u.generate();
                i.append(e), i.data("_wPaginate", u)
            })
        }, n.fn.wPaginate.defaultSettings = {
            theme: "black",
            first: "<<",
            prev: "<",
            next: ">",
            last: ">>",
            spread: 5,
            total: 400,
            index: 0,
            limit: 20,
            url: "#",
            ajax: !1
        }, t.prototype = {
            generate: function() {
                return this.paginate ? this.paginate : (this.paginate = n('<div class="_wPaginate_holder _wPaginate_' + this.settings.theme + '"><\/div>'), this.generateLinks(), this.paginate)
            },
            generateLinks: function() {
                var n = Math.ceil(this.settings.total / this.settings.limit),
                    f = this.settings.spread * 2 + 1,
                    t = Math.ceil(this.settings.index / this.settings.limit),
                    i = 0,
                    r = 0,
                    u;
                for (console.log(n + ":" + f), n <= f ? (i = 0, r = n) : t < this.settings.spread ? (i = 0, r = f) : t > n - this.settings.spread - 1 ? (i = n - f, r = n) : (i = t - this.settings.spread, r = t + this.settings.spread + 1), this.paginate.html(""), this.settings.first && this.paginate.append(this.getLink(0, "first")), this.settings.prev && this.paginate.append(this.getLink(t === 0 ? 0 : t - 1, "prev")), u = i; u < r; u++) this.paginate.append(this.getLink(u, u * this.settings.limit === this.settings.index ? "active" : null));
                this.settings.next && this.paginate.append(this.getLink(t === n - 1 ? n - 1 : t + 1, "next")), this.settings.last && this.paginate.append(this.getLink(n - 1, "last"))
            },
            getLink: function(t, i) {
                var r, u;
                return this.settings.ajax ? (r = this, n('<span class="_wPaginate_link ' + (i ? "_wPaginate_link_" + i : "") + '"><\/span>').html(this.settings[i] || t + 1).click(function() {
                    r.settings.index = t * r.settings.limit, r.generateLinks(), r.settings.url.apply(r, [t])
                })) : (u = typeof this.settings.url == "function" ? this.settings.url.apply(this, [t]) : this.settings.url + "/" + t * this.settings.limit, n('<a href="' + u + '" class="_wPaginate_link ' + (i ? "_wPaginate_link_" + i : "") + '"><\/a>').html(this.settings[i] || t + 1))
            },
            destroy: function() {
                this.paginate.remove(), this.$elem.removeData("_wPaginate")
            }
        }
    }(jQuery), XBBCODE = function() {
        function v(i, u, f, e, o, s, h) {
            h = h || [], f++;
            var w = new RegExp("(<bbcl=" + f + " )(" + t.join("|") + ")([ =>])", "gi"),
                b = new RegExp("(<bbcl=" + f + " )(" + t.join("|") + ")([ =>])", "i"),
                y = s.match(w) || [],
                p, l, a, c, k = n[i] || {};
            for (w.lastIndex = 0, y || (s = ""), a = 0; a < y.length; a++) b.lastIndex = 0, c = y[a].match(b)[2].toLowerCase(), k.restrictChildrenTo.length > 0 && (k.validChildLookup[c] || (l = 'The tag "' + c + '" is not allowed as a child of the tag "' + i + '".', h.push(l))), p = n[c] || {}, p.restrictParentsTo.length > 0 && (p.validParentLookup[i] || (l = 'The tag "' + i + '" is not allowed as a parent of the tag "' + c + '".', h.push(l)));
            return s = s.replace(r, function(n, t, i, r, u) {
                return h = v(i, n, t, i, r, u, h), n
            }), h
        }

        function y(n) {
            return n = n.replace(/\<([^\>][^\>]*?)\>/gi, function(n, t) {
                var i = t.match(/^bbcl=([0-9]+) /);
                return i === null ? "<bbcl=0 " + t + ">" : "<" + t.replace(/^(bbcl=)([0-9]+)/, function(n, t, i) {
                    return t + (parseInt(i, 10) + 1)
                }) + ">"
            })
        }

        function p(n) {
            return n.replace(/<bbcl=[0-9]+ \/\*>/gi, "").replace(/<bbcl=[0-9]+ /gi, "&#91;").replace(/>/gi, "&#93;")
        }

        function w(n) {
            var t = n.text;
            return t = t.replace(r, u)
        }

        function b(n) {
            for (n = n.replace(/\[(?!\*[ =\]]|list([ =][^\]]*)?\]|\/list[\]])/ig, "<"), n = n.replace(/\[(?=list([ =][^\]]*)?\]|\/list[\]])/ig, ">"); n !== (n = n.replace(/>list([ =][^\]]*)?\]([^>]*?)(>\/list])/gi, function(n) {
                    for (var r = n; r !== (r = r.replace(/\[\*\]([^\[]*?)(\[\*\]|>\/list])/i, function(n, t, i) {
                            i = i === ">/list]" ? "<\/*]<\/list]" : "<\/*][*]";
                            return "<*]" + t + i
                        })););
                    return r = r.replace(/>/g, "<")
                })););
            return n = n.replace(/</g, "[")
        }

        function k(n) {
            while (n !== (n = n.replace(h, function(n) {
                    return n = n.replace(/\[/g, "<"), n = n.replace(/\]/g, ">"), y(n)
                })));
            return n
        }
        var f = {},
            i = /^(?:https?|file|c):(?:\/{1,3}|\\{1})[-a-zA-Z0-9:@#%&()~_?\+=\/\\\.]*$/,
            e = /^(?:red|green|blue|orange|yellow|black|white|brown|gray|silver|purple|maroon|fushsia|lime|olive|navy|teal|aqua)$/,
            o = /^#?[a-fA-F0-9]{6}$/,
            n, t, s = [],
            r, h, c, l, a, u;
        return n = {
                b: {
                    openTag: function() {
                        return "<b>"
                    },
                    closeTag: function() {
                        return "<\/b>"
                    }
                },
                bbcode: {
                    openTag: function() {
                        return ""
                    },
                    closeTag: function() {
                        return ""
                    }
                },
                code: {
                    openTag: function() {
                        return '<span class="xbbcode-code">'
                    },
                    closeTag: function() {
                        return "<\/span>"
                    },
                    noParse: !0
                },
                color: {
                    openTag: function(n) {
                        var i = n.substr(1) || "black";
                        return e.lastIndex = 0, o.lastIndex = 0, e.test(i) || (o.test(i) ? i.substr(0, 1) !== "#" && (i = "#" + i) : i = "black"), '<span style="color:' + i + '">'
                    },
                    closeTag: function() {
                        return "<\/span>"
                    }
                },
                i: {
                    openTag: function() {
                        return "<i>"
                    },
                    closeTag: function() {
                        return "<\/i>"
                    }
                },
                img: {
                    openTag: function(n, t) {
                        var r = t;
                        return i.lastIndex = 0, i.test(r) || (r = ""), '<a href="' + r + '">' + r + "<\/a>"
                    },
                    closeTag: function() {
                        return ""
                    },
                    displayContent: !1
                },
                list: {
                    openTag: function() {
                        return "<ul>"
                    },
                    closeTag: function() {
                        return "<\/ul>"
                    },
                    restrictChildrenTo: ["*", "li"]
                },
                noparse: {
                    openTag: function() {
                        return ""
                    },
                    closeTag: function() {
                        return ""
                    },
                    noParse: !0
                },
                php: {
                    openTag: function() {
                        return '<span class="xbbcode-code">'
                    },
                    closeTag: function() {
                        return "<\/span>"
                    },
                    noParse: !0
                },
                quote: {
                    openTag: function(n) {
                        return '<blockquote><header><cite title="' + n.substring(1) + '">' + n.substring(1) + "<\/cite> said:<\/header><p><em>"
                    },
                    closeTag: function() {
                        return "<\/em><\/p><\/blockquote>"
                    }
                },
                s: {
                    openTag: function() {
                        return '<span class="xbbcode-s">'
                    },
                    closeTag: function() {
                        return "<\/span>"
                    }
                },
                size: {
                    openTag: function(n) {
                        var i = parseInt(n.substr(1), 10) || 0;
                        return (i < 4 || i > 40) && (i = 14), '<span class="xbbcode-size-' + i + '">'
                    },
                    closeTag: function() {
                        return "<\/span>"
                    }
                },
                table: {
                    openTag: function() {
                        return '<table class="xbbcode-table">'
                    },
                    closeTag: function() {
                        return "<\/table>"
                    },
                    restrictChildrenTo: ["tbody", "thead", "tfoot", "tr"]
                },
                tbody: {
                    openTag: function() {
                        return "<tbody>"
                    },
                    closeTag: function() {
                        return "<\/tbody>"
                    },
                    restrictChildrenTo: ["tr"],
                    restrictParentsTo: ["table"]
                },
                tfoot: {
                    openTag: function() {
                        return "<tfoot>"
                    },
                    closeTag: function() {
                        return "<\/tfoot>"
                    },
                    restrictChildrenTo: ["tr"],
                    restrictParentsTo: ["table"]
                },
                thead: {
                    openTag: function() {
                        return '<thead class="xbbcode-thead">'
                    },
                    closeTag: function() {
                        return "<\/thead>"
                    },
                    restrictChildrenTo: ["tr"],
                    restrictParentsTo: ["table"]
                },
                td: {
                    openTag: function() {
                        return '<td class="xbbcode-td">'
                    },
                    closeTag: function() {
                        return "<\/td>"
                    },
                    restrictParentsTo: ["tr"]
                },
                th: {
                    openTag: function() {
                        return '<td class="xbbcode-th">'
                    },
                    closeTag: function() {
                        return "<\/td>"
                    },
                    restrictParentsTo: ["tr"]
                },
                tr: {
                    openTag: function() {
                        return '<tr class="xbbcode-tr">'
                    },
                    closeTag: function() {
                        return "<\/tr>"
                    },
                    restrictChildrenTo: ["td", "th"],
                    restrictParentsTo: ["table", "tbody", "tfoot", "thead"]
                },
                u: {
                    openTag: function() {
                        return '<span class="xbbcode-u">'
                    },
                    closeTag: function() {
                        return "<\/span>"
                    }
                },
                url: {
                    openTag: function(n, t) {
                        var r;
                        return r = n ? n.substr(1) : t.replace(/<.*?>/g, ""), i.lastIndex = 0, i.test(r) || (r = "#"), '<a href="' + r + '">'
                    },
                    closeTag: function() {
                        return "<\/a>"
                    }
                },
                a: {
                    openTag: function(n) {
                        var r = "#",
                            i;
                        return n && (i = n.match(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi), i && i.length > 0 && (r = i[0])), '<a href="' + r + '" target="_blank">'
                    },
                    closeTag: function() {
                        return "<\/a>"
                    }
                },
                "*": {
                    openTag: function() {
                        return "<li>"
                    },
                    closeTag: function() {
                        return "<\/li>"
                    },
                    restrictParentsTo: ["list"]
                }
            }, t = [],
            function() {
                var i, r, u;
                for (i in n)
                    if (n.hasOwnProperty(i)) {
                        for (i === "*" ? t.push("\\" + i) : (t.push(i), n[i].noParse && s.push(i)), n[i].validChildLookup = {}, n[i].validParentLookup = {}, n[i].restrictParentsTo = n[i].restrictParentsTo || [], n[i].restrictChildrenTo = n[i].restrictChildrenTo || [], u = n[i].restrictChildrenTo.length, r = 0; r < u; r++) n[i].validChildLookup[n[i].restrictChildrenTo[r]] = !0;
                        for (u = n[i].restrictParentsTo.length, r = 0; r < u; r++) n[i].validParentLookup[n[i].restrictParentsTo[r]] = !0
                    }
            }(), r = new RegExp("<bbcl=([0-9]+) (" + t.join("|") + ")([ =][^>]*?)?>((?:.|[\\r\\n])*?)<bbcl=\\1 /\\2>", "gi"), h = new RegExp("\\[(" + t.join("|") + ")([ =][^\\]]*?)?\\]([^\\[]*?)\\[/\\1\\]", "gi"), c = new RegExp("\\[(" + s.join("|") + ")([ =][^\\]]*?)?\\]([\\s\\S]*?)\\[/\\1\\]", "gi"),
            function() {
                for (var i = [], n = 0; n < t.length; n++) t[n] !== "\\*" && i.push("/" + t[n]);
                l = new RegExp("(\\[)((?:" + t.join("|") + ")(?:[ =][^\\]]*?)?)(\\])", "gi"), a = new RegExp("(\\[)(" + i.join("|") + ")(\\])", "gi")
            }(), u = function(t, i, f, e, o) {
                f = f.toLowerCase();
                var s = n[f].noParse ? p(o) : o.replace(r, u),
                    h = n[f].openTag(e, s),
                    c = n[f].closeTag(e, s);
                return n[f].displayContent === !1 && (s = ""), h + s + c
            }, f.process = function(n) {
                var t = {
                        html: "",
                        error: !1
                    },
                    i = [];
                for (n.text = n.text.replace(/</g, "&lt;"), n.text = n.text.replace(/>/g, "&gt;"), n.text = n.text.replace(l, function(n, t, i) {
                        return "<" + i + ">"
                    }), n.text = n.text.replace(a, function(n, t, i) {
                        return "<" + i + ">"
                    }), n.text = n.text.replace(/\[/g, "&#91;"), n.text = n.text.replace(/\]/g, "&#93;"), n.text = n.text.replace(/</g, "["), n.text = n.text.replace(/>/g, "]"); n.text !== (n.text = n.text.replace(c, function(n, t, i, r) {
                        return r = r.replace(/\[/g, "&#91;"), r = r.replace(/\]/g, "&#93;"), i = i || "", r = r || "", "[" + t + i + "]" + r + "[/" + t + "]"
                    })););
                return n.text = b(n.text), n.text = k(n.text), i = v("bbcode", n.text, -1, "", "", n.text), t.html = w(n), (t.html.indexOf("[") !== -1 || t.html.indexOf("]") !== -1) && i.push("Some tags appear to be misaligned."), n.removeMisalignedTags && (t.html = t.html.replace(/\[.*?\]/g, "")), n.addInLineBreaks && (t.html = t.html.replace(/\r\n/g, "\n"), t.html = t.html.replace(/(\r|\n)/g, "$1<br/>")), t.html = t.html.replace("&#91;", "["), t.html = t.html.replace("&#93;", "]"), t.error = i.length === 0 ? !1 : !0, t.errorQueue = i, t
            }, f
    }(), String.prototype.capitalize || (String.prototype.capitalize = function() {
        return this.replace(/(?:^|\s)\S/g, function(n) {
            return n.toUpperCase()
        })
    }), String.prototype.format || (String.prototype.format = function() {
        var n = arguments;
        return this.replace(/{(\d+)}/g, function(t, i) {
            return typeof n[i] != "undefined" ? n[i] : t
        })
    })     
