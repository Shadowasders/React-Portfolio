import './styles/App.css'
//import bulma?
//fix fullscreen of panels?
//add projectLIST not project!!
//figure out how to seperate panel information
import 'bulma/css/bulma.min.css'
import { useState } from "react";
import Panel from "./pages/Aboutpanel";
import "./styles/panelstyles.css";
import ProjectList from './components/ProjectListPanel';

  export default function App() {
    const [scrollDistance, setScrollDistance] = useState(0);
  
    const handleScroll = (e) => {
      console.log(e.deltaY);
      setScrollDistance((prev) => prev + e.deltaY * 0.3);
    };
  
    return (
      <main>
        <section id="panels">
          <div id="panels-container" style={{ width: "400%" }}>
            <Panel
              color="red"
              onScroll={handleScroll}
              scrollDistance={scrollDistance}
            />
            <ProjectList
              color="orange"
              onScroll={handleScroll}
              scrollDistance={scrollDistance}
            />
            <Panel
              color="purple"
              onScroll={handleScroll}
              scrollDistance={scrollDistance}
            />
          </div>
        </section>
      </main>
    );
  }