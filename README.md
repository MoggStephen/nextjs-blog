This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Basics of react.
- # Components
    - These are small building blocks of a ui
    - Nest components within components.
- # Props
    - Used to pass information between components.
    - Can use to get the information:
        - object property with dot notation.
        - template literal.
        - returned value of a function.
        - ternary operators.

- # State
    - State is used to initiate and store information within the component.
    - Hooks like useState() are used to do this!

# Basics of next.js
- Developing a webpage in next.js offers a superior developer experience. Rich with tools like fast refresh, elsint integration etc.
- Production stage performance, optimization and accessebility.
- Automatic compilation of code during development stage.(typescript, sass, jsx)
- Automatic minification of js and css files for production.
- Bundles and optimizes the bundles automatically. Bundling is optimizing and handling the web of dependancies throughout the website.
- Code splitting to improve initial load time. Creating smaller code chunks allows less code to be run. Preloads code of other pages user are likely to navigate to to make that page load faster.
- Build time is what prepares your code for production. Runtime is the time in which the application runs in response to a request.
- Client is the browser that requests your code. It then turns the response into a ui the user interacts with.
- Server stores your application code, recieves requests and computates to send users appropriate responses.
- Rendering a webpage is what takes the react code and converts it into html and your ui. There are threeaways to do this in next.js. Server-Side Rendering, Static Site Generation, Client-Side Rendering.
- Server-side rendering and static site generation are reffered to as pre-rendering. These are done on the server. Fetching of data and react compilation into html happend before it is sent to the user.
- by default next.js prerenders. A basic react applicaiton will use client-side rendering. In next.js reacts useEffect hook and useSWR can be used to client-side render things.
- Server-Side rendering. HTML is generated on the server. HTML,JSON and js instructions to make the page interactive are sent to client. (next12 and react 18 dont send javascript to the client, keeping logic on the server, reducing bundle size,improving client-side rendering performance(and surely security?)). [getServerSideProps]
- Static-Site generation, html is generated on the server side, but unlike server-side rendering content is generated once at the build time and the html is stored in a cdn and reused for each request. Incremental static regeneration is used to create or update static pages after you have built your site.[getStaticProps]
- Origin servers are the original location and main computer that stores the application code. The origin server receives a request and sends the code to cdn or edge servers.
- CDNS's store static content of the website. These are locations around the world that hold the cached result of the code. This makes the distance shorter for the code to travel. Origin also doesnt need to take up each request reducint the load.
- The edge can hold static content like the cdn, however it can also run small snippets of code. This moves work to be done client-side to be done server-side. It reduces the amount of code sent to the client. The request doesnt have to go all the way to the origin just like with cdn.

# Rundown

- static generation is used to prerender websites where its content doesnt change and can be done with and without data. lib/posts.js. getSortedPostsData() is used to get get data from the file system. getStaticProps is used in static generation with data. So in our index.js we use getStaticProps to recieve the blog data. Data from any server api, or file system like this needs to be requested in this way in getStaticProps on a page.
- server side rendering is used when the data changes on the webpage all the time unlike the static generation. This uses getServerSideProps. This will get the data at request time in order to make sure that webpage is the most recent version it can be.
- client side rendering is used when you dont need to prerender the data. When a webpage is a user-specific page like a dashboard seo isnt relevent. Next.js create a data fetching hook called 'swr' which is to be used on the client side rendering.
- Pages are used to define pages. index files are automatiicaly routed to within the root of each directory. Nested roots are allowed. Use bracket syntax to match dynamic segments. Use next/link link element to link between pages! This element allows for dynamic linking too. useRouter/withRouter is reccomended for routing.
- Images in a next.js page should be coded in with next/image. This automatically optimizes the image, puts it into a modern format webp and lazy loads the image. This automatically renders the image to avoid cumalative shift, which is a web vital to help boost search engine ranking.
- next/head next.js component should be used.
- next/script should be used to load scripts.
- Styling is done with css modules in a component. This avoids class name collisions unique classnames are made when it builds so they never clash. Global styles are applied in global.css. globals.css can only be applied in _app.js in pages folder.(You have to restart the dev server when you add this file!).
- sass package has been installed to use sass. clsx is used to style the alert component(not in use).
- dynamic page with pages/posts/[id].js and lib/posts.js
- Simple api serverless endpoint with pages/api/hello.js. This code is not bundled to a users client browser so its safe for server-side code. Do notfetch an api route from getStaticProps or getStaticPaths instead write server-side code here! Preview mode is used to fetch data from a headless cms. Endpoints can be dynamic like regular pages.
- Deployment should be done with vercel with a next.js project.

sm-dev branch changes
