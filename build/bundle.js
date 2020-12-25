!(function (t, r) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = r())
        : "function" == typeof define && define.amd
        ? define("fetchbutitsabitdifferent", [], r)
        : "object" == typeof exports
        ? (exports.fetchbutitsabitdifferent = r())
        : (t.fetchbutitsabitdifferent = r());
})(self, function () {
    return (() => {
        "use strict";
        var t = {
                519: function (t, r) {
                    var n =
                            (this && this.__assign) ||
                            function () {
                                return (n =
                                    Object.assign ||
                                    function (t) {
                                        for (var r, n = 1, e = arguments.length; n < e; n++)
                                            for (var o in (r = arguments[n]))
                                                Object.prototype.hasOwnProperty.call(r, o) &&
                                                    (t[o] = r[o]);
                                        return t;
                                    }).apply(this, arguments);
                            },
                        e =
                            (this && this.__spreadArrays) ||
                            function () {
                                for (var t = 0, r = 0, n = arguments.length; r < n; r++)
                                    t += arguments[r].length;
                                var e = Array(t),
                                    o = 0;
                                for (r = 0; r < n; r++)
                                    for (var u = arguments[r], i = 0, f = u.length; i < f; i++, o++)
                                        e[o] = u[i];
                                return e;
                            };
                    Object.defineProperty(r, "__esModule", { value: !0 });
                    r.default = function (t, r) {
                        void 0 === r && (r = {});
                        var o = function (r, n) {
                                var e = "";
                                return (
                                    "string" == typeof r
                                        ? (e = "" + t + r)
                                        : Array.isArray(r)
                                        ? (e = r.map(function (r) {
                                              return "" + t + r;
                                          }))
                                        : ((e = {}),
                                          Object.keys(r).forEach(function (n) {
                                              e[n] = "" + t + r[n];
                                          })),
                                    (function (t, r) {
                                        "string" == typeof t && (t = [t]);
                                        var n = null;
                                        Array.isArray(t) ||
                                            ((n = Object.keys(t)), (t = Object.values(t)));
                                        var e = Promise.all(
                                            t.map(function (t, n) {
                                                var e = r;
                                                return (
                                                    Array.isArray(r) &&
                                                        (void 0 !== r[n] && (e = r[n]), (e = r[0])),
                                                    (function (t, r) {
                                                        var n;
                                                        return (
                                                            "post" === r.method &&
                                                                null !== (n = r.body) &&
                                                                "function" != typeof n &&
                                                                "object" == typeof n &&
                                                                (r.body = JSON.stringify(r.body)),
                                                            console.log(r),
                                                            fetch(t, r)
                                                                .then(function (t) {
                                                                    return !0 === r.noJson
                                                                        ? t
                                                                        : t.json();
                                                                })
                                                                .catch(function (t) {
                                                                    return t;
                                                                })
                                                        );
                                                    })(t, e)
                                                );
                                            })
                                        )
                                            .then(function (t) {
                                                return t;
                                            })
                                            .catch(function (t) {
                                                return t;
                                            });
                                        return new Promise(function (t, r) {
                                            if (null !== n) {
                                                var o = {};
                                                return e
                                                    .then(function (r) {
                                                        return (
                                                            r.forEach(function (t, r) {
                                                                o[n[r]] = t;
                                                            }),
                                                            t(o)
                                                        );
                                                    })
                                                    .catch(function (t) {
                                                        return r(t);
                                                    });
                                            }
                                            return e
                                                .then(function (r) {
                                                    return t(r);
                                                })
                                                .catch(function (t) {
                                                    return r(t);
                                                });
                                        });
                                    })(e, n)
                                );
                            },
                            u = function (t) {
                                var r;
                                return [null !== (r = t[0]) && void 0 !== r ? r : "", t[1] || {}];
                            },
                            i = function (t) {
                                var r;
                                if (t.length <= 1)
                                    throw new Error(
                                        "post function needs at least 1 argument, the data to post in object format"
                                    );
                                return [
                                    t[0],
                                    null !== (r = t[1]) && void 0 !== r ? r : "",
                                    t[2] || {},
                                ];
                            };
                        return [
                            function () {
                                for (var t = [], e = 0; e < arguments.length; e++)
                                    t[e] = arguments[e];
                                var i = u(t),
                                    f = i[0],
                                    c = i[1],
                                    a = n(n(n({}, r), c), { method: "get" });
                                return o(f, a);
                            },
                            function () {
                                for (var t = [], u = 0; u < arguments.length; u++)
                                    t[u] = arguments[u];
                                var f,
                                    c = i(t),
                                    a = c[0],
                                    s = c[1],
                                    l = c[2];
                                return (
                                    (f = Array.isArray(a)
                                        ? a.reduce(function (t, o) {
                                              return e(t, [
                                                  n(n(n({}, r), l), { body: o, method: "post" }),
                                              ]);
                                          }, [])
                                        : n(n(n({}, r), l), { body: a, method: "post" })),
                                    o(s, f)
                                );
                            },
                        ];
                    };
                },
            },
            r = {};
        return (function n(e) {
            if (r[e]) return r[e].exports;
            var o = (r[e] = { exports: {} });
            return t[e].call(o.exports, o, o.exports, n), o.exports;
        })(519);
    })();
});
