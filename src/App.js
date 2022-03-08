import './App.css';
import {VideoCard} from "./components/VideoCard";

function App() {
    return (
        <div className="App">

          <section className="cards">
              <VideoCard/>
              <VideoCard/>
              <VideoCard/>
              <VideoCard/>
              <VideoCard/>
              <VideoCard/>
              <VideoCard/>
              <VideoCard/>
              <VideoCard/>
          </section>
        </div>
    );
}

export default App;
