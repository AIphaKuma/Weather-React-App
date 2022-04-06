import { useEffect, useState } from "react";
import App from "../App";
import 'bootstrap/dist/css/bootstrap.min.css';


function RenderForm() {
    const [apiData, setApiData] = useState({});
    const [getVille, setGetVille] = useState('Paris');
    const [ville, setVille] = useState('Paris');
    const apiKey = "339f8588a4c34f955d4fee90637f8436";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}`;

    const inputHandler = (event) => {
        setGetVille(event.target.value);
    };

    const submitHandler = () => {
        setVille(getVille);
    };

    const kelvinToCelsius = (k) => {
        return (k - 273.15).toFixed(2);
    };

    useEffect(() => {
        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => setApiData(data));
    }, [apiURL]);

    return (
        <div className="App">
            <header className="d-flex justify-content-center align-items-center">
                <h2>React Weather App</h2>
            </header>
            <div className="container">
                <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
                    <div className="col-auto">
                        <label for="location-name" className="col-form-label">
                            Enter Location :
                        </label>
                    </div>
                    <div className="col-auto">
                        <input
                            type="text"
                            id="location-name"
                            class="form-control"
                            onChange={inputHandler}
                            value={getVille}
                        />
                    </div>
                    <button className="btn btn-primary mt-2" onClick={submitHandler}>
                        Search
                    </button>
                </div>
            </div>

            <div className="container">
                <div>
                    
                </div>
            </div>
        </div>

    )};

    export default RenderForm;