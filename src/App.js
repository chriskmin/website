import { useState } from "react";
import Header from "./components/Header";
import Me from "./components/Me";
import Services from "./components/Services";

function App() {
    const[darkMode, setDarkMode] = useState(false);

    return(
        <div className={darkMode && "dark"}>
           <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

            <main className="bg-white dark:bg-gray-900 text-gray-500 dark:text-white">
                <Me />
                <Services />
            </main>
        </div>
    );
}
export default App;
