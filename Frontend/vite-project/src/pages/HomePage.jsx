import AboutPage from "./AboutPage";
import MoviesPage from "./MoviesPage";

export const HomePage = () => {
    return (
        <div>
            <h1 className="pdL2">Home</h1>
            <MoviesPage />
            <AboutPage />
        </div>
    );
}