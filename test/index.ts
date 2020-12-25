import fetcher from "../src/main";

(async () => {
    const [get, post] = fetcher("https://jsonplaceholder.typicode.com", { mode: "same-origin" });

    const getRequest = await get({ posts: "/posts", comments: "/comments" });
    console.log(getRequest)
    // { posts: Array(100), comments: Array(500)}

    const postRequest = await post({ data: "muchadata" }, { posts: "/posts", posts2: "/posts2" }, {
        mode: "cors",
        cache: "default",
    });
    console.log(postRequest);   
    // [{id: 101}, {}]
    // (404 for the second query as "/posts2" doesn't exist on jsonplaceholder)

    // Makes 2 post requests : one to "/posts" and th other to "/posts2" both with { data: "muchadata" } as payload
    // last arguments is used to overwrite options from the fetcher instanciation
})();
