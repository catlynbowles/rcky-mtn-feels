import "./Homepage.css";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Header from "../Header/Header";
import FeelingSelection from "../FeelingSelection/FeelingSelection";
import CheckIn from "../CheckIn/CheckIn";
import About from "../About/About";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <Route exact path="/" render={() => <FeelingSelection />} />
      <Route exact path="/learn-more" render={() => <About />}/>
      <Route
        path={`/feeling/:name`}
        render={({ match }) => {
          return <CheckIn userFeeling={match.params.name} />;
        }}
      />
    </div>
  );
};

export default Homepage;
