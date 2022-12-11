import axios from "axios";
import React, { useState } from "react";
import "./Profile.css";
import Navbar from "../navbar/Navbar.jsx";
//TODO: fixe the req !!
const Finaleprofile = (props) => {
  const [oldPassword, setancientPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Uname, setUname] = useState(props.user.Uname);
  const [Uemail, setUemail] = useState(props.user.Uemail);
  const [Uimage, setUimage] = useState(props.user.Uimage);

  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const [imageUploader, setImageUploader] = useState({ current: null });

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const Uploaddata = (body) => {
    axios
      .put(`http://localhost:5000/user/getUser/${props.user.Uname}`, body).catch((err) => alert(err));
  };

  const [show, setShow] = useState(false);

  if (show === false) {
    return (
      <div>
        <Navbar user={props.user} />
        <div>
          <div>
            <div className="page-content page-container" id="page-content">
              <div className="padding">
                <div
                  className="row container d-flex justify-content-center"
                  style={{ position: "relative", left: "6%", top: "65px" }}
                >
                  <div className="col-xl-6 col-md-12">
                    <div className="card user-card-full">
                      <div className="row m-l-0 m-r-0">
                        <div
                          className="col-sm-4 bg-c-lite-green user-profile"
                          style={{ width: "100%" }}
                        >
                          <div className="card-block text-center text-white">
                            <div className="m-b-25">
                              <img
                                style={{ height: "130px", width: "140px" }}
                                src={props.user.Uimage}
                                className="rounded-circle"
                                alt="User-Profile"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-8 align-items-center justify-content-center">
                          <div
                            className="card-block"
                            style={{ position: "relative", left: "26%" }}
                          >
                            <div>
                              <h6 className="m-b-20 row p-b-5 b-b-default f-w-600">
                                <div className="col-9"> Information</div>
                                <div
                                  className="col-2"
                                  onClick={() => setShow(true)}
                                >
                                  <img
                                    src="https://res.cloudinary.com/dugewmeeh/image/upload/c_scale,h_30/v1670434332/mawi%20cuisine/account-settings-icon-vector-account-settings-icon-vector-filled-flat-sign-solid-pictogram-isolated-white-user-gear-wheel-104052542-removebg-preview_pkdlsj.png"
                                    alt=""
                                  />
                                </div>
                              </h6>
                            </div>
                            <div className="row">
                              <div className="col-sm-6">
                                <p className="m-b-10 f-w-600">name</p>
                                <h6 className="text-muted f-w-600">
                                  {props.user.Uname}
                                </h6>
                              </div>
                              <div className="col-sm-10">
                                <p className="m-b-10 f-w-600">Email</p>
                                <h6 className="text-muted f-w-600">
                                  {" "}
                                  {props.user.Uemail}
                                </h6>
                              </div>
                            </div>
                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                              Password
                            </h6>
                            <div className="row">
                              <div className="col-sm-6">
                                <p className="m-b-10 f-w-600"></p>
                                <h6 className="text-muted f-w-600">
                                  ***********
                                </h6>
                              </div>
                            </div>
                            <ul className="social-link list-unstyled m-t-40 m-b-10">
                              <li>
                                <a
                                  href="/"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title=""
                                  data-original-title="facebook"
                                  data-abc="true"
                                >
                                  <i
                                    className="mdi mdi-facebook feather icon-facebook facebook"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title=""
                                  data-original-title="twitter"
                                  data-abc="true"
                                >
                                  <i
                                    className="mdi mdi-twitter feather icon-twitter twitter"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title=""
                                  data-original-title="instagram"
                                  data-abc="true"
                                >
                                  <i
                                    className="mdi mdi-instagram feather icon-instagram instagram"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar user={props.user} />
        <div>
          <div>
            <div className="page-content page-container" id="page-content">
              <div className="padding">
                <div
                  className="row container d-flex justify-content-center"
                  style={{ position: "relative", left: "6%", top: "65px" }}
                >
                  <div className="col-xl-6 col-md-12">
                    <div className="card user-card-full">
                      <div className="row m-l-0 m-r-0">
                        <div
                          className="col-sm-4 bg-c-lite-green user-profile"
                          style={{ width: "100%" }}
                        >
                          <div className="card-block text-center text-white">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                ref={imageUploader}
                                style={{
                                  display: "none",
                                }}
                              />
                              <div
                                className="rounded-circle"
                                style={{
                                  height: "130px",
                                  width: "140px",
                                  border: "1px dashed black",
                                }}
                                onClick={() => imageUploader.current.click()}
                              >
                                <img
                                  alt="not"
                                  className="rounded-circle"
                                  src={previewSource}
                                  style={{ height: "130px", width: "140px" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="card-block">
                            <div>
                              <h6 className="m-b-20 row p-b-5 b-b-default f-w-600">
                                <div className="col-9"> Information</div>
                              </h6>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <p className="m-b-10 f-w-600">name</p>
                                <h6 className="text-muted f-w-600">
                                  <input
                                    onChange={(e) => setUname(e.target.value)}
                                    type="text"
                                    style={{ width: "90%" }}
                                    defaultValue={props.user.Uname}
                                  />
                                </h6>
                              </div>
                              <div className="col-12">
                                <p className="m-b-10 f-w-600">Email</p>
                                <h6 className="text-muted f-w-600">
                                  <input
                                    onChange={(e) => setUemail(e.target.value)}
                                    type="text"
                                    style={{ width: "90%" }}
                                    defaultValue={props.user.Uemail}
                                  />
                                </h6>   <br></br>
                              </div>

                            </div>
                            <h6 className="m-b-20 m-t-40  p-b-5 b-b-default f-w-600">
                              Password
                            </h6>
                            <div className="row">
                              <div className="col-12">
                                <p className="m-b-10 f-w-600"></p>
                                <h6 className="text-muted f-w-600">
                                  type ur old password

                                  <input
                                    onChange={(e) =>
                                      setancientPassword(e.target.value)
                                    }
                                    type="text"
                                    style={{ width: "90%" }}
                                    placeholder="password"
                                  />
                                </h6><br></br>
                              </div>

                              <div className="col-12">
                                <p className="m-b-10 f-w-600"></p>
                                <h6 className="text-muted f-w-600">
                                  choose a new password
                                  <input
                                    onChange={(e) =>
                                      setNewPassword(e.target.value)
                                    }
                                    type="text"
                                    style={{ width: "90%" }}
                                    placeholder="password"
                                  />
                                </h6>  <br></br>
                              </div>
                              <div className="col-12">
                                <p className="m-b-10 f-w-600"></p>
                                <h6 className="text-muted f-w-600">
                                  confirm password
                                  <input
                                    onChange={(e) =>
                                      setConfirmPassword(e.target.value)
                                    }
                                    type="text"
                                    style={{ width: "90%" }}
                                    placeholder="password"
                                  />
                                </h6>
                              </div>
                            </div>
                            <ul className="social-link list-unstyled m-t-30 m-b-10">
                              <li>
                                <a
                                  href="/"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title=""
                                  data-original-title="facebook"
                                  data-abc="true"
                                >
                                  <i
                                    className="mdi mdi-facebook feather icon-facebook facebook"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title=""
                                  data-original-title="twitter"
                                  data-abc="true"
                                >
                                  <i
                                    className="mdi mdi-twitter feather icon-twitter twitter"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title=""
                                  data-original-title="instagram"
                                  data-abc="true"
                                >
                                  <i
                                    className="mdi mdi-instagram feather icon-instagram instagram"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="m-4 text-center text-center">
                            <button
                              onClick={() => {
                                Uploaddata({
                                  Uname,
                                  Uemail,
                                  Uimage: previewSource,
                                  password: newPassword,
                                });
                              }}
                              className="   btn btn-outline-success btn-rounded"
                            >
                              update
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Finaleprofile;
