import React, {useContext} from "react";
import {PhotosContext} from "./PhotosContext";

const Nav = () => {
    const [photos] = useContext(PhotosContext);

    return (
        <div>
            <h3>Loaded: {photos.length} photos</h3>
        </div>
    )

}
export default Nav