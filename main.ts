//RETURNING JSON RESPONSE FROM WEB FETCH
export async function http(
  request: RequestInfo
): Promise<any> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

// example consuming code
const data = await http(
  "https://jsonplaceholder.typicode.com/todos"
);


//SECOND FETCH EXAMPLE
class Movie {
  title: string;
  id: number;
  constructor(title: string, id: number) {
    this.title = title;
    this.id = id;
  }
}

function formatMovie(movie: any): Movie {
  return { title: movie.title, id: movie.id };
}

class MovieService {
  getMovies(genre: string): Promise<Movie[]> {
    return fetch(`https://www.movies.com/${genre}`)
        .then(res => res.json())
        .then(res => res.map((movie: any) => formatMovie(movie))
  }
}
const apiClient = new MovieService();
//log list of movies
apiClient.getMovies('sci-fi').then(movies => console.log(movies));
