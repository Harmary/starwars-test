import React, { useState, useEffect } from 'react';
import { Tab } from './Tab';

export function Sidebar() {
    const [sidebarState, setSidebar] = useState(false);
    const [people, setPeople] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [request, setRequest] = useState('https://swapi.dev/api/people');

    function setSidebarState() {
        sidebarState === true ? setSidebar(false) : setSidebar(true);
        return;
    }

    function loadData(){
        if (JSON.parse(window.localStorage.getItem('people')) === null || JSON.parse(window.localStorage.getItem('people')).next === request || JSON.parse(window.localStorage.getItem('people')).prev === request) {
            fetch(request)
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        window.localStorage.setItem('people', JSON.stringify(result))
                        setPeople(result.results);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    })
        }
        else {
            setPeople(JSON.parse(window.localStorage.getItem('people')).results);
        }
    }

    useEffect(() => {
        loadData();
    },[])

    return (
        <div className={sidebarState === true ? "sidebar open" : "sidebar close"}>
            <button className="sidebar__button" onClick={() => setSidebarState()}>{sidebarState === true ? "˃" : "˂"}</button>
            <div className='sidebar__tabs'>
                {people === null ?
                    console.log("Ошибка")
                    :
                    people.map((person, index) =>
                        <Tab key={index} person={person} />
                    )
                }
            </div>
        </div>
    );

}