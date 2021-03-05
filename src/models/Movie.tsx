export class Movie {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    favorite?: boolean;

    constructor(
        id: number,
        title: string,
        poster_path: string,
        backdrop_path: string,
        favorite = false
    ) {
        this.id = id;
        this.title = title;
        this.poster_path = poster_path;
        this.backdrop_path = backdrop_path;
        this.favorite = favorite;
    }
}