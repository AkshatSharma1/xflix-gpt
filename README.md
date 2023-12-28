# XFLIX GPT

- Create react app
- setup tailwind css
- Header(done)
- routing
- Login/SignIn form
- Reusing SignIn Form to use it as a SignUp form by adding extra input like name(Important)
- Form Validation on Input fields(done from scratch) (useRef Hook used). note: can also use formik library
  - useRef Hook.
  - When we click sign in button, the form should get validated
- Created signup user in firebase
- Once a user signIn, I need user data for my other features. So, Add user object to our redux store and navigate to browse page
- Created Redux store with userSlice
- onAuthState change, we need to dispatch actions for the redux store. (One way we can do it after .then() in createUser api, signInuser api) but here we will use onAuthStateChange Api
- Redirect to browse when loggedin and to login when signed out. Also, when not logged in, and routed to "/browse" then redirect to login.
- unsubscribed to onAuthStateChanged callback
- Use TMDB API
- Create a movie store i.e movieSlice and add movie data to this slice. addNowPlayingMovies to the reducers object in slice. After that dispatch this action after the api call of movies
- Now, refactored the code and created a custom hook of fetching movies from the api
- The thing which I want on top of something, just make that thing absolute
- Create movieSlice
- Update store with movies data
- Planning for Main and Secondary Container
- Fetching data for Trailer video
- Updating store with trailer data
- Embedding the youtube video using trailerVideo key (autoplay&mute)
- 




# Features

- Login/SignUp page
  - Sign in/ up form
  - redirect to browse page
- Browse page (after auth)
  - Header
  - Main movie
    - Trailer in background
    - Title, desc, play button
    - Movie suggestions
      - Movies*N suggestions

- Netflix GPT
  - Search bar
  - movie suggestion