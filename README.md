
# FilmFusion - advanced Movies and Tv shows Web-App

FilmFusion is a responsive and dynamic web application that allows users to discover, search, and explore movies and TV shows using real-time data fetched from external APIs. Built with modern web technologies, it offers a smooth and engaging user experience with clean design and intuitive navigation.

🔧 Tech Stack
React JS – Component-based front-end framework for building interactive UIs

React Router – Enables seamless navigation across different views

Axios – Handles HTTP requests to fetch data from external movie databases

Tailwind CSS – Utility-first CSS framework for fast and modern styling

🔍 Core Features
Search Functionality – Search for movies and TV shows with instant results

Trending Section – Displays current trending movies and shows

Popular Section – Highlights popular content from various categories

Movie/TV Show Details – Detailed view with cast, ratings, overview, and release information

Actor Profiles – Explore actor-specific pages with filmography and related details

💡 Purpose
FilmFusion focuses on delivering a fluid browsing experience while leveraging external APIs for up-to-date movie and show data. It serves as both a learning project and a practical tool for movie enthusiasts to stay informed about trending and popular entertainment content.




## Acknowledgements


-> TMDb API – For providing movie and TV show data used throughout the app

-> React Documentation – Official docs for building components and managing app state

-> Tailwind CSS Documentation – For rapid UI styling with utility-first classes

-> Axios GitHub – For handling HTTP requests with ease

-> React Router Docs – For managing routing and navigation in the app

-> Heroicons – For elegant, open-source SVG icons used in the UI

-> Vercel – For quick and easy project deployment


## Deployment

Live Demo:  
[https://movie-app-ruddy-two.vercel.app/](https://movie-app-ruddy-two.vercel.app/)

> **Important:**  
> Due to regional restrictions, the TMDB API may not be accessible from India without a VPN.  
> Please use a VPN client to access the app and fetch data properly when using it in India.



## Demo

Linkedin Video Link : https://www.linkedin.com/posts/abhi-suthar08_reactjs-tailwindcss-webdevelopment-activity-7215785749655257090-pgEg/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7fv2EBEFtzS-xel5WUFT5nLnm2N7vDWKA


## Important Notice

Due to regional restrictions, the TMDB (The Movie Database) API used in this project is currently not accessible from India without using a VPN.

If you are accessing this project from India and the data does not load, please make sure to connect through a VPN client that routes your traffic through a country where the TMDB API is accessible.

Without a VPN, some features relying on TMDB API data may not function properly.


## API Reference


## Base URL
https://api.themoviedb.org/3/
---

## Endpoints

| Endpoint                          | Method | Description                                      | Path Parameters                         |
|----------------------------------|--------|------------------------------------------------|---------------------------------------|
| `/trending/{category}/{time_window}` | GET    | Get trending items for a category and time window | `category`: `all`, `movie`, `tv`, `person`<br>`time_window`: `day`, `week` |
| `/movie/{id}`                    | GET    | Get detailed information about a movie          | `id`: Movie ID                        |
| `/movie/{id}/external_ids`       | GET    | Get external IDs (like IMDb, Facebook, etc.) for a movie | `id`: Movie ID                        |
| `/movie/{id}/recommendations`    | GET    | Get movie recommendations                        | `id`: Movie ID                        |
| `/movie/{id}/similar`            | GET    | Get movies similar to the given movie            | `id`: Movie ID                        |
| `/movie/{id}/translations`       | GET    | Get available translations for a movie           | `id`: Movie ID                        |
| `/movie/{id}/videos`             | GET    | Get videos related to a movie (trailers, teasers) | `id`: Movie ID                        |
| `/movie/{id}/watch/providers`    | GET    | Get watch providers available for a movie by country | `id`: Movie ID                        |
| `/tv/{id}`                      | GET    | Get detailed information about a TV show         | `id`: TV Show ID                     |
| `/tv/{id}/external_ids`          | GET    | Get external IDs for a TV show                    | `id`: TV Show ID                     |
| `/tv/{id}/recommendations`       | GET    | Get TV show recommendations                        | `id`: TV Show ID                     |
| `/tv/{id}/similar`               | GET    | Get TV shows similar to the given TV show         | `id`: TV Show ID                     |
| `/tv/{id}/translations`          | GET    | Get available translations for a TV show           | `id`: TV Show ID                     |
| `/tv/{id}/videos`                | GET    | Get videos related to a TV show (trailers, teasers) | `id`: TV Show ID                     |
| `/tv/{id}/watch/providers`       | GET    | Get watch providers available for a TV show by country | `id`: TV Show ID                     |
| `/person/{id}`                  | GET    | Get detailed information about a person (actor/crew) | `id`: Person ID                      |
| `/person/{id}/external_ids`      | GET    | Get external IDs for a person                      | `id`: Person ID                      |
| `/person/{id}/combined_credits`  | GET    | Get all combined credits for a person              | `id`: Person ID                      |
| `/person/{id}/tv_credits`        | GET    | Get TV credits for a person                          | `id`: Person ID                      |
| `/person/{id}/movie_credits`     | GET    | Get movie credits for a person                        | `id`: Person ID                      |

---

## Parameter Details

| Parameter     | Type   | Description                              |
|---------------|--------|----------------------------------------|
| `category`    | string | Trending category: `all`, `movie`, `tv`, `person` |
| `time_window` | string | Trending time window: `day`, `week`     |
| `id`          | string | ID of the movie, TV show, or person     |

---

## Notes

- Replace `{id}`, `{category}`, and `{time_window}` with actual values.
- The watch providers endpoint returns data by country; in your code, you are fetching for India (`results.IN`).
- Videos endpoint typically contains multiple types; your code filters for `type === "Trailer"`.
- Trending endpoint returns trending content by category and time window.

---
## Features

- Fetches real-time movie, TV show, and person data from The Movie Database (TMDB) API
- Displays trending content with filtering options (TV, movies, all)
- Dynamic header wallpaper with randomly selected trending content
- Responsive layout with sidebar and top navigation
- Uses Redux Toolkit for efficient state management of movies, TV shows, and persons
- Async data fetching with loading indicators for better user experience
- Detailed views for movies, TV shows, and persons with additional info like recommendations, trailers, and watch providers
- Dropdown filter to easily switch between content categories
- Clean and modern UI using React components and Tailwind CSS (or custom styling)
