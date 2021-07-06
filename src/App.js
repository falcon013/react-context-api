import React from 'react'
import {PhotoProvider} from "./PhotosContext";
import PhotosList from "./PhotosList";
import Nav from "./Nav";
import {ThemeProvider} from "./ThemeContext";

function App() {

  return (
      <ThemeProvider>
          <PhotoProvider>
              <div className="App">
                  <Nav/>
                  <PhotosList/>
              </div>
          </PhotoProvider>
      </ThemeProvider>
  );
}

export default App;
