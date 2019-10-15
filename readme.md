# FLIX

## Getting Started

A full stack movie database application built on NodeJS and React.

## Endpoints

### Basic

| REQUEST                                | URL                                 | HTTP METHOD | REQUEST DATA FORMAT                                                    | RESPONSE DATA FORMAT                                        |
| -------------------------------------- | ----------------------------------- | ----------- | ---------------------------------------------------------------------- | ----------------------------------------------------------- |
| Get a list of all movies to the user   | api/movies                          | GET         | -                                                                      | \* all movies                                               |
| Get data about a single movie by title | api/movies/:title                   | GET         | -                                                                      | \* the single movie requested                               |
| Get data about a genre by name         | api/genres/:name                    | GET         | -                                                                      | \* the single genre requested (description)                 |
| Get data about a director by name      | api/directors/:name                 | GET         | -                                                                      | \* the single genre requested (bio, birth year, death year) |
| Add new user                           | api/users                           | POST        | \* the new user details (username, password, email, date of birth)     | \* the added user (including unique ID)                     |
| Update user                            | api/users/:username                 | POST        | \* the updated user details (username, password, email, date of birth) | \* the added user (description)                             |
| Add movie to user favourites           | api/users/:username/movies/:movieid | POST        | -                                                                      | \* the updated user including favourited movies             |
| Remove movie from user favourites      | api/users/:username/:movie/:movieid | DELETE      | -                                                                      | \* the updated user including favourited movies             |
| Delete user                            | api/users/:username                 | DELETE      | -                                                                      | A message saying the user has been deleted                  |

> Note: \* indicates "**A JSON object containing data of**"

<br>

### Examples

#### Get a list of all movies to the user

**Request:** url/api/movies

**Response:**

```JSON
[
    {
        "genre": {
            "name": "Thriller",
            "description": "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience."
        },
        "director": {
            "name": "Quentin Tarantino",
            "bio": "American director and screenwriter whose films are noted for their stylized violence, razor-sharp dialogue, and fascination with film and pop culture.",
            "birth": "1963-04-27T00:00:00.000Z"
        },
        "_id": "5cf6b85862b239127ce8959a",
        "title": "Reservoir Dogs",
        "description": "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
        "imagePath": "https://bit.ly/2JAgQoB",
        "featured": true
    },
    {
        "genre": {
            "name": "Thriller",
            "description": "Comedy is a genre of film in which the main emphasis is on humour. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect. Films in this style traditionally have a happy ending (black comedy being an exception). One of the oldest genres in film, some of the very first silent movies were comedies, as slapstick comedy often relies on visual depictions, without requiring sound. When sound films became more prevalent during the 1920s, comedy films took another swing, as laughter could result from burlesque situations but also dialogue."
        },
        "director": {
            "name": "Steven Spielberg",
            "bio": "Steven Allan Spielberg (born December 18, 1946) is an American filmmaker. He is considered one of the founding pioneers of the New Hollywood era and one of the most popular directors and producers in film history.",
            "birth": "1946-12-18T00:00:00.000Z"
        },
        "_id": "5cf6b85862b239127ce8959f",
        "title": "The Terminal",
        "description": "An Eastern European tourist unexpectedly finds himself stranded in JFK airport, and must take up temporary residence there.",
        "imagePath": "https://bit.ly/2W25xMd",
        "featured": false
    }
]
```

#### Get data about a single movie by title

**Request:** url/api/movies/:title

**Response:**

```JSON
{
    "genre": {
        "name": "biography",
        "description": "A biographical film, or biopic (abbreviation for biographical motion picture), is a film that dramatizes the life of a non-fictional or historically-based person or people. Such films show the life of a historical person and the central character's real name is used. They differ from films \"based on a true story\" or \"historical drama films\" in that they attempt to comprehensively tell a single person's life story or at least the most historically important years of their lives."
    },
    "director": {
        "name": "Martin Scorsese",
        "bio": "Martin Charles Scorsese (born November 17, 1942) is an American and naturalized-Italian filmmaker and historian, whose career spans more than 50 years. Scorsese's body of work addresses such themes as Italian-American identity (most notably Sicilian), Roman Catholic concepts of guilt and redemption, faith, machismo, modern crime, and gang conflict. Many of his films are also known for their depiction of violence and liberal use of profanity.",
        "birth": "1942-11-17T00:00:00.000Z"
    },
    "_id": "5cf6b85862b239127ce8959b",
    "title": "The Aviator",
    "description": "A biopic depicting the early years of legendary director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.",
    "imagePath": "https://bit.ly/2W0pJOF",
    "featured": false
}
```

#### Get data about a genre by name

**Request:** url/api/genres/:name

**Response:**

```JSON
{
    "name": "Thriller",
    "description": "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience."
}
```

#### Get data about a director by name

**Request:** url/api/directors/:name

**Response:**

```JSON
{
    "name": "Steven Spielberg",
    "bio": "Steven Allan Spielberg (born December 18, 1946) is an American filmmaker. He is considered one of the founding pioneers of the New Hollywood era and one of the most popular directors and producers in film history.",
    "birth": "1946-12-18T00:00:00.000Z"
}
```

#### Add new user

**Request:** POST | url/api/users/

Request Body:

```JSON
{
    "username": "JohnDoe",
    "password": "securepassword",
    "email": "JohnD@email.com",
    "birthday": "13/07/1987"
}
```

**Response:**

```JSON
{
    "username": "JohnDoe",
    "password": "securepassword",
    "email": "JohnD@email.com",
    "birthday": "13/07/1987"
}
```

#### Update user

**Request:** PUT | url/api/users/

Request Body:

```JSON
{
    "username": "JohnDoeUpdated",
    "password": "securepassword",
    "email": "JohnD@email.com",
    "birthday": "13/07/1987"
}
```

**Response:**

```JSON
{
    "username": "JohnDoeUpdated",
    "password": "securepassword",
    "email": "JohnD@email.com",
    "birthday": "13/07/1987"
}
```

#### Add movie to user favourites

**Request:** POST | /url/api/users/JohnDoe/movies/Pulp%20Fiction

Request Body:

```JSON
{
    "username": "JohnDoeUpdated",
    "password": "securepassword",
    "email": "JohnD@email.com",
    "birthday": "13/07/1987"
}
```

**Response:**

```JSON
{
    "favouriteMovies": [
        "5cf6b85862b239127ce8959c",
        "5cf6b85862b239127ce8959e",
        "5cf6b85862b239127ce8959b",
        "5cf6b85862b239127ce89598"
    ],
    "_id": "5da1c9ed442eff0017f0a4eb",
    "username": "JohnDoeUpdated",
    "password": "securepassword",
    "email": "JohnD@email.com",
    "birthday": "1987-07-13T00:00:00.000Z",
    "__v": 0
}
```

#### Remove movie from user favourites

**Request:** DELETE | /url/api/users/JohnDoe/movies/Pulp%20Fiction

**Response:**

```JSON
{
    "favouriteMovies": [
        "5cf6b85862b239127ce8959e",
        "5cf6b85862b239127ce8959b",
        "5cf6b85862b239127ce89598"
    ],
    "_id": "5da1c9ed442eff0017f0a4eb",
    "username": "JohnDoeUpdated",
    "password": "securepassword",
    "email": "JohnD@email.com",
    "birthday": "1987-07-13T00:00:00.000Z",
    "__v": 0
}
```

#### Delete user

**Request:** DELETE | url/api/users/JohnDoeUpdated

**Response:**

```JSON
{
    "username": "JohnDoeUpdated",
    "password": "securepassword",
    "email": "JohnD@email.com",
    "birthday": "13/07/1987"
}
```
