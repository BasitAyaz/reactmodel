import "./screen.css";
import Button from "../components/button";
import { useHistory } from "react-router";
import { FaGithub } from "react-icons/fa";

function Home() {
  const history = useHistory();
  return (
    <div className="bg-light">
      <div className="backgroundPrimary sticky-top p-3">
        <div className="container text-start text-white">
          <h2>Model</h2>
        </div>
      </div>
      <div className="container">
        <div className="py-5 p-4 rounded shadow bg-white my-5">
          <h2 className="py-5">For Components</h2>
          <Button
            onClick={() => {
              history.push("/components");
            }}
            value="View Docs"
          />{" "}
          <a
            href="https://github.com/BasitAyaz/reactmodel"
            className="fs-4 text-dark"
            target="_blank"
          >
            <FaGithub /> See Github
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
