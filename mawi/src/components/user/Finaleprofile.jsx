import axios from 'axios'
import React, { useState } from 'react'
import './Profile.css'
const Finaleprofile = (props) => {
    const [ancientPassword,setancientPassword]=useState('')
    const [newPassword,setNewPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const[Uname,setUname]=useState(props.user.Uname)
    const [Uemail, setUemail] = useState(props.user.Uemail);
    const [Uimage, setUimage] = useState('');
console.log(Uimage);
     const [uploadedImage,setUploadedImage] = useState({current:null})
     const [imageUploader,setImageUploader] = useState({ current: null });

     const Uploaddata=(body)=>{
      axios.put(`http://localhost:5000/user/getUser/${props.user.Uname}`,body).then((res)=>{
        console.log('passed');
      }).catch(err=>console.log(err))
     }
console.log(imageUploader);
     const handleImageUpload = (e) => {
       const [file] = e.target.files;
       if (file) {
         const reader = new FileReader();
         const { current } = uploadedImage;
         current.file = file;
         reader.onload = (e) => {
           current.src = e.target.result;
           setUimage(current.src);
         };
         reader.readAsDataURL(file);
       }
       
     };

      const[show,setShow]=useState(false)
    
      if (show===false) {
          return (
            <div>
              <div className="page-content page-container" id="page-content">
                <div className="padding">
                  <div className="row container d-flex justify-content-center">
                    <div className="col-xl-6 col-md-12">
                      <div className="card user-card-full">
                        <div className="row m-l-0 m-r-0">
                          <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                              <div className="m-b-25">
                                <img
                                  src="https://img.icons8.com/bubbles/100/000000/user.png"
                                  className="img-radius"
                                  alt="User-Profile"
                                />
                              </div>
                              <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <div className="card-block">
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
                                  <h6 className="text-muted f-w-400">
                                    {props.user.Uname}
                                  </h6>
                                </div>
                                <div className="col-sm-6">
                                  <p className="m-b-10 f-w-600">Email</p>
                                  <h6 className="text-muted f-w-400">
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
                                  <h6 className="text-muted f-w-400">
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
          );
      }else{
          return (
            <div>
              <div className="page-content page-container" id="page-content">
                <div className="padding">
                  <div className="row container d-flex justify-content-center">
                    <div className="col-xl-6 col-md-12">
                      <div className="card user-card-full">
                        <div className="row m-l-0 m-r-0">
                          <div className="col-sm-4 bg-c-lite-green user-profile">
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
                                    height: "60px",
                                    width: "60px",
                                    border: "1px dashed black",
                                  }}
                                  onClick={() => imageUploader.current.click()}
                                >
                                  <img
                                    alt="not"
                                    className="rounded-circle"
                                    ref={uploadedImage}
                                    style={{
                                      width: "40%%",
                                      height: "100%",
                                    }}
                                  />
                                </div>
                              </div>
                              <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <div className="card-block">
                              <div>
                                <h6 className="m-b-20 row p-b-5 b-b-default f-w-600">
                                  <div className="col-9"> Information</div>
                                </h6>
                              </div>
                              <div className="row">
                                <div className="col-sm-6">
                                  <p className="m-b-10 f-w-600">name</p>
                                  <h6 className="text-muted f-w-400">
                                    <input
                                      onChange={(e) => setUname(e.target.value)}
                                      type="text"
                                      style={{ width: "90%" }}
                                      defaultValue={props.user.Uname}
                                    />
                                  </h6>
                                </div>
                                <div className="col-sm-6">
                                  <p className="m-b-10 f-w-600">Email</p>
                                  <h6 className="text-muted f-w-400">
                                    <input
                                      onChange={(e) =>
                                        setUemail(e.target.value)
                                      }
                                      type="text"
                                      style={{ width: "90%" }}
                                      defaultValue={props.user.Uemail}
                                    />
                                  </h6>
                                </div>
                              </div>
                              <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                                Password
                              </h6>
                              <div className="row">
                                <div className="col-sm-6">
                                  <p className="m-b-10 f-w-600"></p>
                                  <h6 className="text-muted f-w-400">
                                    type ur old password
                                    <input
                                      onChange={(e) =>
                                        setancientPassword(e.target.value)
                                      }
                                      type="text"
                                      style={{ width: "90%" }}
                                      placeholder="password"
                                    />
                                  </h6>
                                </div>
                                <div className="col-sm-6">
                                  <p className="m-b-10 f-w-600"></p>
                                  <h6 className="text-muted f-w-400">
                                    choose a new password
                                    <input
                                      onChange={(e) =>
                                        setNewPassword(e.target.value)
                                      }
                                      type="text"
                                      style={{ width: "90%" }}
                                      placeholder="password"
                                    />
                                  </h6>
                                </div>
                                <div className="col-sm-6">
                                  <p className="m-b-10 f-w-600"></p>
                                  <h6 className="text-muted f-w-400">
                                    confirm password
                                    <input
                                      onChange={(e) => setConfirmPassword(e.target.value)}
                                      type="text"
                                      style={{ width: "90%" }}
                                      placeholder="password"
                                    />
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
                            <div className="m-4 text-center">
                              <button onClick={()=>{
                                Uploaddata({Uname,Uemail,Uimage,Upassword:newPassword})                              }} className=" center btn btn-info btn-rounded">
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
          );
      }
}

export default Finaleprofile