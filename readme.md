# Fetcher

```javascript

import fetcher from "../src/main";

(async () => {
    const [get, post] = fetcher("https://jsonplaceholder.typicode.com");

    const getRequest = await get({ posts: "/posts", comments: "/comments" });
    console.log(getRequest)
    // { posts: Array(100), comments: Array(500)}

    const postRequest = await post({ data: "muchadata" }, ["/posts", "/posts"], {
        mode: "cors",
        cache: "default",
    });
    console.log(postRequest);   
    // [{id: 101}, {id: 101}]
    
})();

```