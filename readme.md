# fetchbutitsabitdifferent

```javascript
import fetcher from "fetchbutitsabitdifferent";

(async () => {
    const [get, post] = fetcher("https://jsonplaceholder.typicode.com", { cache: "no-store" });

    const getRequest = await get({ posts: "/posts", comments: "/comments" });
    console.log(getRequest)
    // { posts: Array(100), comments: Array(500)}

    const postRequest = await post({ data: "muchadata" }, ["/posts", "/posts2"], {
        mode: "cors",
        cache: "default",
    });
    console.log(postRequest);   
    // [{id: 101}, {}]
    // (404 for the second query as "/posts2" doesn't exist on jsonplaceholder)

    // Makes 2 post requests, "/posts" and "/posts2" both with { data: "muchadata" } as payload
    // last argument is used to overwrite options from the fetcher instanciation, 
    // (cache option "no-store" is overwrite for "default" in the post requests)
})();
```

By default the library will assume you want to receive json and will automatically try to convert the result of a get request to json. 
If it's not the case you can add `noJson: true` in the options. 

I'm open to any suggestions.