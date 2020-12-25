(() => {
    "use strict";
    var r = {
            519: function (r, t) {
                var n =
                        (this && this.__assign) ||
                        function () {
                            return (n =
                                Object.assign ||
                                function (r) {
                                    for (var t, n = 1, e = arguments.length; n < e; n++)
                                        for (var o in (t = arguments[n]))
                                            Object.prototype.hasOwnProperty.call(t, o) &&
                                                (r[o] = t[o]);
                                    return r;
                                }).apply(this, arguments);
                        },
                    e =
                        (this && this.__spreadArrays) ||
                        function () {
                            for (var r = 0, t = 0, n = arguments.length; t < n; t++)
                                r += arguments[t].length;
                            var e = Array(r),
                                o = 0;
                            for (t = 0; t < n; t++)
                                for (var u = arguments[t], i = 0, a = u.length; i < a; i++, o++)
                                    e[o] = u[i];
                            return e;
                        };
                Object.defineProperty(t, "__esModule", { value: !0 });
                t.default = function (r, t) {
                    void 0 === t && (t = {});
                    var o = function (t, n) {
                            var e = "";
                            return (
                                "string" == typeof t
                                    ? (e = "" + r + t)
                                    : Array.isArray(t)
                                    ? (e = t.map(function (t) {
                                          return "" + r + t;
                                      }))
                                    : ((e = {}),
                                      Object.keys(t).forEach(function (n) {
                                          e[n] = "" + r + t[n];
                                      })),
                                (function (r, t) {
                                    "string" == typeof r && (r = [r]);
                                    var n = null;
                                    Array.isArray(r) ||
                                        ((n = Object.keys(r)), (r = Object.values(r)));
                                    var e = Promise.all(
                                        r.map(function (r, n) {
                                            var e = t;
                                            return (
                                                Array.isArray(t) && void 0 !== t[n] && (e = t[n]),
                                                (function (r, t) {
                                                    return (
                                                        console.log(t),
                                                        fetch(r, t)
                                                            .then(function (r) {
                                                                return !0 === t.noJson
                                                                    ? r
                                                                    : r.json();
                                                            })
                                                            .catch(function (r) {
                                                                return r;
                                                            })
                                                    );
                                                })(r, e)
                                            );
                                        })
                                    )
                                        .then(function (r) {
                                            return r;
                                        })
                                        .catch(function (r) {
                                            return r;
                                        });
                                    return new Promise(function (r, t) {
                                        if (null !== n) {
                                            var o = {};
                                            return e
                                                .then(function (t) {
                                                    return (
                                                        t.forEach(function (r, t) {
                                                            o[n[t]] = r;
                                                        }),
                                                        r(o)
                                                    );
                                                })
                                                .catch(function (r) {
                                                    return t(r);
                                                });
                                        }
                                        return e
                                            .then(function (t) {
                                                return r(t);
                                            })
                                            .catch(function (r) {
                                                return t(r);
                                            });
                                    });
                                })(e, n)
                            );
                        },
                        u = function (r) {
                            var t;
                            return [null !== (t = r[0]) && void 0 !== t ? t : "", r[1] || {}];
                        },
                        i = function (r) {
                            var t;
                            if (r.length <= 1)
                                throw new Error(
                                    "post function needs at least 1 argument, the data to post in object format"
                                );
                            return [r[0], null !== (t = r[1]) && void 0 !== t ? t : "", r[2] || {}];
                        };
                    return [
                        function () {
                            for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
                            var i = u(r),
                                a = i[0],
                                c = i[1],
                                f = n(n(n({}, t), c), { method: "get" });
                            return o(a, f);
                        },
                        function () {
                            for (var r = [], u = 0; u < arguments.length; u++) r[u] = arguments[u];
                            var a,
                                c = i(r),
                                f = c[0],
                                s = c[1],
                                h = c[2];
                            return (
                                (a = Array.isArray(f)
                                    ? f.reduce(function (r, o) {
                                          return e(r, [
                                              n(n(n({}, t), h), {
                                                  body: JSON.stringify(o),
                                                  method: "post",
                                              }),
                                          ]);
                                      }, [])
                                    : n(n(n({}, t), h), {
                                          body: JSON.stringify(f),
                                          method: "post",
                                      })),
                                o(s, a)
                            );
                        },
                    ];
                };
            },
        },
        t = {};
    !(function n(e) {
        if (t[e]) return t[e].exports;
        var o = (t[e] = { exports: {} });
        return r[e].call(o.exports, o, o.exports, n), o.exports;
    })(519);
})();
