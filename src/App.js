import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { MainContainer } from "./Pages/MainContainer";
import { Routes, Route } from "react-router-dom";
import { MovieDetialsPage } from "./Pages/MovieDetialsPage";
import { Layout } from "./layouts/Layout";
import { PopularMovies } from "./Pages/PopularMovies";
import { UpcommingMovies } from "./Pages/UpcommingMovies";
import { ActorDetials } from "./Pages/ActorDetials";
import { TopRatedMovies } from "./Pages/TopRatedMovies";
import { RouteNotFound } from "./components/RouteNotFound";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/movie/details/:id" element={<MovieDetialsPage />} />
          <Route path="/movie/popular" element={<PopularMovies />} />
          <Route path="/movie/upcomming" element={<UpcommingMovies />} />
          <Route path="/movie/toprated" element={<TopRatedMovies />} />
          <Route path="/cast/details/:id" element={<ActorDetials />} />
          <Route path="*" element={<RouteNotFound /> } />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
