import React from "react";
import avatar from "../asets/user.png";
import {  Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidation } from "../help/validate";
import styles from "../styles/Username.module.css";
import { useState } from "react";
import convertBase64 from "../help/convert";

function Register() {

  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      email: "coba56239@cnogs.com",
      username: "ronal1",
      Password: "ronal@123",
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || ''})
      console.log(values);
    },
  });
  /** formik */
  const onUpload = async e => {
    const base64 =  await convertBase64(e.target.files[0]);
    setFile(base64);
  }
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex  justify-center items-center h-screen">
        <div className={styles.glass} style={{widows:"45%"}}>
          <div className="title  flex flex-col items-center">
            <h4 className="text-4xl font-bold">Register</h4>
            <span className="py-1  text-xl w-3/3 text-center text-gray-500">
              Senang Bergabung Dengan Kamu.
            </span>
          </div>

          <div>
            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center py-2">
                <label htmlFor="profile">
                  <img
                    src={file || avatar}
                    className={styles.profile_img}
                    alt="avatar"
                  ></img>
                </label>
                <input onChange={onUpload} type="file" id="profile" name="profile"/>
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                <input
                  {...formik.getFieldProps("email")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Email*"
                ></input>
                <input
                  {...formik.getFieldProps("username")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Usernama*"
                ></input>
                <input
                  {...formik.getFieldProps("password")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Password*"
                ></input>
                <button className={styles.btn} type="submit">
                  Register
                </button>
              </div>

              <div className="text-center py-2">
                <span className="text-gray-500">
                  Already Register?
                  <Link className="text-red-500" to="/">
                    Login Now
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
