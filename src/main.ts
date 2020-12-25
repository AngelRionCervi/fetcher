interface namedQuery {
    [key: string]: string;
}

type endpoint = string | string[] | namedQuery;

function isObject(val: any) {
    return val !== null && typeof val !== "function" && typeof val === "object";
}

const __fetch = (url: string, options: any) => {
    if (options.method === "post" && isObject(options.body)) {
        options.body = JSON.stringify(options.body);
    }
    console.log(options)
    return fetch(url, options)
        .then((res) => {
            if (options.noJson === true) {
                return res;
            }
            return res.json();
        })
        .catch((err) => {
            return err;
        });
};

const __exec = (urls: any, options: any) => {
    if (typeof urls === "string") {
        urls = [urls];
    }
    let keys: any = null;
    if (!Array.isArray(urls)) {
        keys = Object.keys(urls);
        urls = Object.values(urls);
    }
    const initReq = Promise.all(
        urls.map((u: any, i: number) => {
            let o: any = options;
            if (Array.isArray(options)) {
                if (options[i] !== undefined) {
                    o = options[i];
                }
                o = options[0];
            }
            return __fetch(u, o);
        })
    )
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    return new Promise((resolve, reject) => {
        if (keys !== null) {
            const obj: any = {};
            return initReq
                .then((res: any) => {
                    res.forEach((r: any, i: number) => {
                        obj[keys[i]] = r;
                    });
                    return resolve(obj);
                })
                .catch((err) => {
                    return reject(err);
                });
        }
        return initReq
            .then((res: any) => {
                return resolve(res);
            })
            .catch((err) => {
                return reject(err);
            });
    });
};

export default (url: string, options: any = {}): [Function, Function] => {
    const __start = (endpoint: endpoint, options: any) => {
        let newUrls: any = "";
        if (typeof endpoint === "string") {
            newUrls = `${url}${endpoint}`;
        } else {
            if (Array.isArray(endpoint)) {
                newUrls = endpoint.map((end) => `${url}${end}`);
            } else {
                newUrls = {};
                Object.keys(endpoint).forEach((key) => {
                    newUrls[key] = `${url}${endpoint[key]}`;
                });
            }
        }
        return __exec(newUrls, options);
    };

    const __getArgsGet = (args: any[]): any => {
        let endpoint: any = args[0] ?? "";
        let options = args[1] || {};
        return [endpoint, options];
    };

    const __getArgsPost = (args: any[]): [any, string | string[], any] => {
        if (args.length <= 1) {
            throw new Error(
                `post function needs at least 1 argument, the data to post in object format`
            );
        }
        let data: any = args[0];
        let endpoint: string | string[] = args[1] ?? "";
        let options = args[2] || {};
        return [data, endpoint, options];
    };

    const get = (...args: any) => {
        const [endpoint, overOptions] = __getArgsGet(args);
        const newOptions = { ...options, ...overOptions, method: "get" };
        return __start(endpoint, newOptions);
    };

    const post = (...args: any[]) => {
        const [data, endpoint, overOptions] = __getArgsPost(args);
        let newOptions: any;
        if (Array.isArray(data)) {
            newOptions = data.reduce((acc, d) => {
                return [...acc, { ...options, ...overOptions, body: d, method: "post" }];
            }, []);
        } else {
            newOptions = { ...options, ...overOptions, body: data, method: "post" };
        }
        return __start(endpoint, newOptions);
    };
    return [get, post];
};
