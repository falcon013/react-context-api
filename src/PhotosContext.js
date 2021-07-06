import React, {useState, useEffect, createContext} from "react";

export const PhotosContext = createContext();
const apiUrl = `http://hp-api.herokuapp.com/api/characters`

export const PhotoProvider = (props) => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {

    }, [setPhotos]);

    const fetchPhotos = () => {
        fetch(apiUrl)
            .then((response) => {
                if (response.ok) return response.json();
                throw new Error("Something did not work out...");
            })
            .then((data) => {
                // console.log(data);
                setPhotos(data);
            })
            .catch((error) => (error.message));
        // console.log(photos);
    }

    return (
        <PhotosContext.Provider value={[photos, fetchPhotos]}>
            {props.children}
        </PhotosContext.Provider>
    )
}