import Input from "../components/input";
import "./screen.css";
import Button from "../components/button";
import Img from "../components/img";
import DropDown from "../components/dropdown";

function ComponentsProps() {
  return (
    <div className="bg-light">
      <div className="backgroundPrimary sticky-top p-3">
        <div className="container text-start text-white">
          <h2>Components and Props</h2>
        </div>
      </div>
      <div className="container">
        <div className="text-start py-5 p-4 rounded shadow bg-white my-5">
          <h2 className="p-3 color">input {`<Input />`}</h2>
          <Input placeholder="Enter Name" />
          <div className="py-4">
            <ul className="propList">
              <li>
                <span className="color">placeholder</span>=" "
              </li>
              <li>
                <span className="color">onChange</span>=" "
              </li>
              <li>
                <span className="color">onBlur</span>=" "
              </li>
              <li>
                <span className="color">min</span>=" "
              </li>
              <li>
                <span className="color">max</span>='maximum value'
              </li>
              <li>
                <span className="color">value</span>='value'
              </li>
              <li>
                <span className="color">className</span>='any class'
              </li>
              <li>
                <span className="color">type</span>="text"
                {/* <ul>
                  <li>button</li>
                  <li>text</li>
                  <li>number</li>
                  <li>email</li>
                  <li>password</li>
                  <li>url</li>
                  <li>color</li>
                  <li>date</li>
                  <li>datetime-local</li>
                  <li>month</li>
                  <li>radio</li>
                  <li>range</li>
                  <li>search</li>
                  <li>time</li>
                  <li>week </li>
                </ul> */}
              </li>
            </ul>
          </div>
        </div>
        <div className="text-start py-5 p-4 rounded shadow bg-white my-5">
          <h2 className="p-3 color">button {`<Button />`}</h2>
          <Button value="Value" />
          <div className="py-4">
            <ul className="propList">
              <li>
                <span className="color">onClick</span>=" "
              </li>

              <li>
                <span className="color">value</span>=" "
              </li>
              <li>
                <span className="color">className</span>=" "
              </li>
              <li>
                <span className="color">style</span>= object
              </li>
            </ul>
          </div>
        </div>
        <div className="text-start py-5 p-4 rounded shadow bg-white my-5">
          <h2 className="p-3 color">img {`<Img />`}</h2>
          <Img src="https://picsum.photos/seed/picsum/536/354" />
          <div className="py-4">
            <ul className="propList">
              <li>
                <span className="color">src</span>=" "
              </li>
              <li>
                <span className="color">width</span>=" "
              </li>
              <li>
                <span className="color">className</span>=" "
              </li>
              <li>
                <span className="color">width</span>=" "
              </li>
              <li>
                <span className="color">height</span>=" "
              </li>
              <li>
                <span className="color">alt</span>=" "
              </li>
              <li>
                <span className="color">style</span>= object
              </li>
            </ul>
          </div>
        </div>
        <div className="text-start py-5 p-4 rounded shadow bg-white my-5">
          <h2 className="p-3 color">dropdown {`<DropDown />`}</h2>
          <div id="DropDown">
            <DropDown
              label="Options"
              dataSource={["option 1", "option 2", "option 3"]}
            />
          </div>
          <div className="py-4">
            <ul className="propList">
              <li>
                <span className="color">dataSource</span>= [options array]
              </li>
              <li>
                <span className="color">onChange</span>=" "
              </li>
              <li>
                <span className="color">label</span>=" "
              </li>
              <li>
                <span className="color">className</span>=" "
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ComponentsProps;
