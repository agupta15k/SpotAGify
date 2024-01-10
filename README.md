<h1 align="center">
  <a href="https://github.com/agupta15k/ncsu_se_fall22_22_pr_2">
    SpotAGify
  </a>
</h1>

<h2 align="center"><i> "Where words fail, music speaks." - Hans Christian Andersen </i> </h2>

<div align="center">
  <a href="https://github.com/agupta15k/MyOwnSpotify">
    <img src="https://img.shields.io/github/repo-size/agupta15k/MyOwnSpotify?color=brightgreen">
  </a>
  <a href="https://zenodo.org/badge/latestdoi/569499359">
    <img src="https://zenodo.org/badge/569499359.svg" alt="DOI">
  </a>
  <a href="https://github.com/agupta15k/MyOwnSpotify/tags">
    <img src="https://img.shields.io/github/v/tag/agupta15k/MyOwnSpotify?color=9cf">
  </a>
  <a href="https://github.com/agupta15k/MyOwnSpotify/issues">
    <img src="https://img.shields.io/github/issues-raw/agupta15k/MyOwnSpotify?color=red">
  </a>
  <a href="https://github.com/agupta15k/MyOwnSpotify/issues?q=is%3Aissue+is%3Aclosed">
    <img src="https://img.shields.io/github/issues-closed-raw/agupta15k/MyOwnSpotify?color=success">
  </a>
  <a href="https://github.com/agupta15k/MyOwnSpotify/pulls">
    <img src="https://img.shields.io/github/issues-pr/agupta15k/MyOwnSpotify?color=orange">
  </a>
  <a href="https://github.com/agupta15k/MyOwnSpotify/pulls?q=is%3Apr+is%3Aclosed">
    <img src="https://img.shields.io/github/issues-pr-closed/agupta15k/MyOwnSpotify?color=green">
  </a>
</div>

<h2> Table of Contents </h2>

<li>
  <a href="#overview"> About the Application </a>
</li>
<li>
  <a href="#appInAction"> Application In Action </a>
</li>
<li>
  <a href="#tech"> Technologies </a>
</li>
<li>
  <a href="#ig"> Getting Started </a>
</li>
<li>
  <a href="#directory"> Directory Structure </a>
</li>
<li>
  <a href="#releases"> Releases </a>
</li>
<li>
  <a href="#support"> Support </a>
</li>
<li>
  <a href="#cb"> Contributors </a>
</li>
<li>
  <a href="#credits"> Credits </a>
</li>

<h2 id = "overview"> About the Application </h2>

Embark on an auditory journey where your cherished tunes await at the tap of a screen. Indulge in your preferred melodies, unrestricted by time or place.

This full stack comprehensive platform mirrors the sophistication of the esteemed music service, Spotify. Users can securely register and curate their personal playlists while delving into a diverse array of music shared by others.

The option to subscribe to a premium membership presents itself, offering the flexibility of hassle-free cancellation at any moment.

<h2 id = "appInAction"> Application in Action </h2>

<img width="500" alt="login-page" src="https://github.com/agupta15k/MyOwnSpotify/assets/112216701/94747484-2bbc-4d82-b598-08def385824a">

<img width="500" alt="main-page" src="https://github.com/agupta15k/MyOwnSpotify/assets/112216701/9e2ba0d6-04a8-41dd-a301-30e9864056d7">

<img width="500" alt="music-playing" src="https://github.com/agupta15k/MyOwnSpotify/assets/112216701/ed14c888-f41e-4f0d-a2a2-da1af8d6fcd7">

<img width="500" alt="search-page" src="https://github.com/agupta15k/MyOwnSpotify/assets/112216701/810fe680-cb5c-4f02-b166-5a30d006dd7e">

<img width="500" alt="liked-page" src="https://github.com/agupta15k/MyOwnSpotify/assets/112216701/970a0fc3-99ef-4fda-b105-909591b5cd5f">

<img width="500" alt="premium-page" src="https://github.com/agupta15k/MyOwnSpotify/assets/112216701/b078a24b-c876-4318-8346-0518bac716d7">

<img width="500" alt="payments-page" src="https://github.com/agupta15k/MyOwnSpotify/assets/112216701/98c00745-092d-4e80-bf56-5a69fe017f27">

<h2 id = "tech"> Technologies :electron: </h2>

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) &nbsp; ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) &nbsp; ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) &nbsp; ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) &nbsp; ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) &nbsp; ![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white) &nbsp; ![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white) &nbsp; ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<h2 id = "ig"> Getting started </h2>

***Note***: *All the requirements of the project are listed in the [package.json](https://github.com/agupta15k/MyOwnSpotify/blob/main/package.json) file with their required versions in [package-lock.json](https://github.com/agupta15k/MyOwnSpotify/blob/main/package-lock.json).*

- ### Prerequisites
  - [npm](https://www.npmjs.com/) and [node](https://nodejs.org/en/) (version 14.X or higher) should be installed.
  - Clone the Github repository in your local system.

- ### Installation and Run

    1. Clone the repository locally.

    2. Install all the dependencies using npm. Command to run: `npm i`. This will fetch the dependencies from package.json file, and install them.

    3. Setup `.env.local` file with the following content:
 
         *Ensure to enter your own Supabase and Stripe keys and url. For more information, please refer [this video](https://www.youtube.com/watch?v=2aeMRB8LL4o).*

        ```
        NEXT_PUBLIC_SUPABASE_URL=
        NEXT_PUBLIC_SUPABASE_ANON_KEY=
        SUPABASE_SERVICE_ROLE_KEY=
        
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
        STRIPE_SECRET_KEY=
        STRIPE_WEBHOOK_SECRET=
        ```

    4. Add required databases. You can use the [database.sql](https://github.com/agupta15k/MyOwnSpotify/blob/main/database.sql) file in the repository for this.
 
    5. Start the application by using the command `npm run dev`. This will run the server on port `3000`, and the website can be accessed by going to `http://localhost:3000/`.

    6. If credentials of a registered user are available, use them, else register a new user to interact with application.

- ### Troubleshooting

  Try the following troubleshooting steps. If none of them work, contact the repository owner/file an issue.
  
  1. Since the application is build using TypeScript, Next.js, and React, check for console logs under developer tools to identify any failures.
  2. Consider installing and using [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) to track the request through the system.
  3. Check console logs on the server to check for any errors.

<h2 id = "directory"> Directory Structure </h2>

    .
    ├── actions                              # Folder for actions
    |  ├── getActiveProductsWithPrices.ts    # Action to get current active products with prices for the premium subscription
    |  ├── getLikedSongs.ts                  # Action to get songs liked by a user
    |  ├── getSongs.ts                       # Action to get all songs
    |  ├── getSongsByTitle.ts                # Action to get songs based on input title for searching
    |  ├── getSongsByUserId.ts               # Action to get songs uploaded by a user
    ├── app                                  # Folder for the app router of Next.js
    |  ├── (site)                            # Default folder for "/"
    |  |  ├── components                     # Folder for UI components for "/"
    |  |  |  ├── PageContent.tsx             # Main page UI component
    |  |  ├── error.tsx                      # Error page for "/"
    |  |  ├── loading.tsx                    # Loading page for "/"
    |  |  ├── page.tsx                       # Landing page for "/"
    |  ├── account                           # Folder for "/account"
    |  |  ├── components                     # Folder for UI components for "/account"
    |  |  |  ├── AccountContent.tsx          # Accounts page UI component
    |  |  ├── error.tsx                      # Error page for "/account"
    |  |  ├── loading.tsx                    # Loading page for "/account"
    |  |  ├── page.tsx                       # Landing page for "/account"
    |  ├── api                               # API routes for the UI
    |  |  ├── create-checkout-session        # Stripe checkout API routes
    |  |  |  ├── route.ts                    # File for stripe checkout API routes
    |  |  ├── create-portal-link             # Stripe customer portal API routes
    |  |  |  ├── route.ts                    # File for stripe customer portal API routes
    |  |  ├── webhooks                       # Stripe webhooks API routes
    |  |  |  ├── route.ts                    # File for stripe webhook API routes
    |  ├── liked                             # Folder for "/liked"
    |  |  ├── components                     # Folder for UI components for "/liked"
    |  |  |  ├── LikedContent.tsx            # Liked songs page UI component
    |  |  ├── error.tsx                      # Error page for "/liked"
    |  |  ├── loading.tsx                    # Loading page for "/liked"
    |  |  ├── page.tsx                       # Landing page for "/liked"
    |  ├── search                            # Folder for "/search"
    |  |  ├── components                     # Folder for UI components for "/search"
    |  |  |  ├── SearchContent.tsx           # Search page UI component
    |  |  ├── error.tsx                      # Error page for "/search"
    |  |  ├── loading.tsx                    # Loading page for "/search"
    |  |  ├── page.tsx                       # Landing page for "/search"
    |  ├── favicon.ico                       # Favicon for the application
    |  ├── globals.css                       # Tailwind CSS configuration with custom CSS
    |  ├── layout.tsx                        # Main layout for the Next.js application
    ├── components                           # Folder with UI helper components
    |  ├── AuthModal.tsx                     # Modal component holding auth form
    |  ├── Box.tsx                           # Box helper component
    |  ├── Button.tsx                        # Button helper component
    |  ├── Header.tsx                        # Component for the header across application
    |  ├── Input.tsx                         # Input helper component
    |  ├── Library.tsx                       # Library component for sidebar to show and upload music
    |  ├── LikeButton.tsx                    # Like button helper component
    |  ├── ListItem.tsx                      # Helper component for liked songs box on main screen
    |  ├── MediaItem.tsx                     # Component for displaying a song
    |  ├── Modal.tsx                         # Modal helper component
    |  ├── PlayButton.tsx                    # Component for music player play button
    |  ├── Player.tsx                        # Component for music player
    |  ├── PlayerContent.tsx                 # Component for details on the player
    |  ├── SearchInput.tsx                   # Component to search for a song
    |  ├── Sidebar.tsx                       # Component for the sidebar
    |  ├── SidebarItem.tsx                   # Component to display each song in the sidebar
    |  ├── Slider.tsx                        # Music volume slider component
    |  ├── SongItem.tsx                      # Component to display each song on the main page
    |  ├── SubscribeModal.tsx                # Modal component for subscription option
    |  ├── UploadModal.tsx                   # Modal component for song upload option
    ├── hooks                                # Hooks used by the application
    |  ├── useAuthModal.ts                   # Hook to open/close the authentication modal component
    |  ├── useDebounce.ts                    # Hook at add some debounce to delay search after input
    |  ├── useGetSongById.ts                 # Hook to get the selected song using its id
    |  ├── useLoadImages.ts                  # Hook to get image for the uploaded song
    |  ├── useLoadSong.ts                    # Hook to get the uploaded song
    |  ├── useOnPlay.ts                      # Hook to play a song
    |  ├── usePlayer.ts                      # Hook to initialize the music player
    |  ├── useSubscribeModal.ts              # Hook to open/close the premium subscription modal
    |  ├── useUploadModal.ts                 # Hook to open/close song upload modal
    |  ├── useUser.ts                        # Hook to get currently logged-in user details
    ├── libs                                 # Helper functions for Stripe and Supabase
    |  ├── helpers.ts                        # General helper functions
    |  ├── stripe.ts                         # Helper function for Stripe
    |  ├── stripeClient.ts                   # Helper function for Stripe client
    |  ├── supabaseAdmin.ts                  # Helper function for Supabase admin
    ├── provider                             # Providers for the application
    |  ├── ModalProvider.tsx                 # Provides authentication, song upload, and premium subscription modals
    |  ├── SubabaseProvider.tsx              # Provides session to connect with Supabase
    |  ├── ToasterProvider.tsx               # Provides toast for success/error messages
    |  ├── UserProvider.tsx                  # Provides user context
    ├── public                               # Folder for public assets
    |  ├── images                            # Public images
    |  |  ├── liked.png                      # Liked songs icon
    |  ├── next.svg                          # Next.js icon
    |  ├── vercel.svg                        # Vercel icon
    ├── .eslintrc.json                       # Eslint configuration
    ├── .gitignore                           # Ignore files for git
    ├── database.sql                         # Sample database file to get started with the project
    ├── global.d.ts                          # Global types to overcome dependency issues
    ├── middleware.ts                        # Middleware for authentication
    ├── next.config.js                       # Configuration for Next.js
    ├── package-lock.json                    # Locked dependencies with specific version which worked
    ├── package.json                         # Required dependencies for the project
    ├── postcss.config.js                    # Plugin information for CSS
    ├── README.md                            # Readme file for the application
    ├── tailwind.config.ts                   # Configuration for Tailwind CSS
    ├── tsconfig.json                        # Configuration for TypeScript
    ├── types_db.ts                          # Automated file generated for types in Database    
    └── types.ts                             # Defined types for Stripe

<h2 id = "releases"> Releases </h2>

The releases for the application can be found [here](https://github.com/agupta15k/MyOwnSpotify/releases).

<h2 id = "support"> Support </h2>

I will do my best to answer all tickets in a timely manner, but sometimes the backlog gets accumulated, and may take awhile to respond. Please be patient—I will get back to you as soon as I can! 

<h2 id = "cb"> Contributors </h2>

Thanks goes to [these](https://github.com/agupta15k/MyOwnSpotify/graphs/contributors) wonderful people.

<h2 id = "credits"> Credits </h2>

* A special thanks goes to [Code With Antonio](https://www.youtube.com/@codewithantonio/videos) youtube channel to guide me through the development of this project.
