import logo from "./logo.svg";
import "./App.css";

// image
import stp1 from "./ast/Group 2799.png";
import success1 from "./ast/Group 2755.png";
import member1 from "./ast/Group 2700.png";
import mbr1 from "./ast/Group 2722.png";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="ulmenu">
          <div className="ulli">Roadmap</div>
          <div className="ulli">Team</div>
          <div className="ulli">FAQ</div>
        </div>
      </div>

      {/* banner  */}

      <div className="banner">
        <div className="bttn">
          <button>play</button>
        </div>
      </div>

      <div className="steps containerC">
        <div className="row">
          <div className="col-md-5">
            <div className="banner-img">
              <div className="img">
                <img src={stp1} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              distinctio iure corporis quidem placeat molestiae neque
              repellendus a alias. Dolorum magni mollitia possimus. Laudantium
              ea odio atque, quis ut provident?
            </p>
          </div>
        </div>

        {/* steps */}
        <div className="row">
          <div className="col-md-7">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              distinctio iure corporis quidem placeat molestiae neque
              repellendus a alias. Dolorum magni mollitia possimus. Laudantium
              ea odio atque, quis ut provident?
            </p>
          </div>
          <div className="col-md-5">
            <div className="banner-img">
              <div className="img">
                <img src={stp1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* success */}
      <div className="succes containerC">
        <div className="success-header mt-5">
          <div className="header">
            <div className="ulli">Who are the succes ?</div>
          </div>

          <div className="row">
            <div className="col-md-4 mt-5">
              <div className="banner-img">
                <div className="img">
                  <img src={success1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="banner-img">
                <div className="img">
                  <img src={success1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="banner-img">
                <div className="img">
                  <img src={success1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="banner-img">
                <div className="img">
                  <img src={success1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="banner-img">
                <div className="img">
                  <img src={success1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="banner-img">
                <div className="img">
                  <img src={success1} alt="" />
                </div>
              </div>
            </div>
          </div>

          <h1 className="succ-h1 ">Free to play Play to earn </h1>

          <div className="header mt-5">
            <div className="ulli">Roadmap</div>
          </div>
          <div className="header mt-5">
            <div className="ulli">Our Team members</div>
          </div>

          <div className="row mb1">
            <div className="col-md-4 mt-5">
              <div className="banner-img">
                <div className="img">
                  <img src={member1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="banner-img">
                <div className="img">
                  <img src={member1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="banner-img">
                <div className="img">
                  <img src={member1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="banner-img">
                <div className="img">
                  <img src={member1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="banner-img">
                <div className="img">
                  <img src={member1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="banner-img">
                <div className="img">
                  <img src={member1} alt="" />
                </div>
              </div>
            </div>
          </div>

          <h2 className="succ-h2 pb-1">Let's go on an adventure</h2>
          <h1 className="Bolder-header mb-5">Breed . Fight . Earn</h1>

          <div className="row ">
            <div className="col-md-4 mt-5">
              <div className="banner-img">
                <div className="img">
                  <img src={mbr1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="banner-img">
                <div className="img">
                  <img src={mbr1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="banner-img">
                <div className="img">
                  <img src={mbr1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="banner-img">
                <div className="img">
                  <img src={mbr1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="banner-img">
                <div className="img">
                  <img src={mbr1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="banner-img">
                <div className="img">
                  <img src={mbr1} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="footer">
            <p>@2022 Succies. All Right Reserved</p>
            <h5>Privacy Policy</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
