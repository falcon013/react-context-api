import React, {useContext} from "react";
import {PhotosContext} from "./PhotosContext";
import {ThemeContext} from "./ThemeContext";

const PhotosList = () => {
    const [photos, fetchPhotos] = useContext(PhotosContext)
    // console.log(photos)
    const [theme] = useContext(ThemeContext)
    const bg =
        theme === "dark"
            ? "#photos-list-container {background-color: white; color: black;}"
            : "#photos-list-container  {background-color: black; color: white;}"

    return (
        <div id="photos-list-container">
            <style>{bg}</style>
            <ul id="photos-list">
                {photos.map(photo => (
                    <li key={photo.name}>
                        <h3>{photo.name}</h3>
                        <img src={photo.image} alt=""/>
                    </li>
                ))}
            </ul>
            <button id="fetch-photos" onClick={fetchPhotos}>Fetch Photos</button>
        </div>
    )
}
export default PhotosList