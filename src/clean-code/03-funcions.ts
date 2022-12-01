(() => {

    // función para obtener información de una película por Id
    function getMovieById(id: string) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllMovieActorsById(id: string) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById(id: string) {
        console.log({ id });
    }

    interface MovieProps {
        title: string, 
        description: string, 
        rating: number, 
        cast: string[]
    }
    // Crear una película
    function createMovie({title, description, rating, cast}:MovieProps) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor(firstName: string, birthDate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (firstName === 'fernando') return false;

        console.log('Crear actor');
        return true;

    }




})();