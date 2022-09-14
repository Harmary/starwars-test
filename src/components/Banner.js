import React, { useState, useEffect } from 'react';

export function Banner() {
    const [film, setFilm] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://swapi.dev/api/films/1')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setFilm(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className="banner">
                <section className="star-wars">
                    <div className="crawl">
                        <div className="title">
                            <p>Episode IV</p>
                            <h1>{film.title}</h1>
                        </div>
                        <p>{film.opening_crawl}</p>
                    </div>
                </section>
            </div>
        );
    }
}