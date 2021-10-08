import Image from "../components/img";
import logo from "../assets/logo.png";
import Header from "../layout/adminheader";

function Admin() {
  return (
    <div className="row p-0 m-0">
      <div className="col-md-2 bg-white rightShadow fullHiehgt">
        <div className="p-3">
          <Image src={logo} width="80px" />
        </div>
        <div className></div>
      </div>
      <div className="col-md-10">
        <Header />
      </div>
    </div>
  );
}
export default Admin;
