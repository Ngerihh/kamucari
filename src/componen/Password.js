import React from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../help/validate";
import styles from "../styles/Username.module.css";
function Password() {
  const formik = useFormik({
    initialValues :{
      Password : 'ronal@123'
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      console.log(values)
    }
  })
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex  justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title  flex flex-col items-center">
            <h4 className="text-5xl font-bold"> Helo lagi!</h4>
            <span className="py-4  text-xl w-2/3 text-center text-gray-500">
              jelajahi lebih lanjut dengan terhubung oleh kami!
            </span>
          </div>

          <div>
            <form className="py-1" onSubmit={formik.handleSubmit}>
              

              <div className="textbox flex flex-col items-center gap-6">
                <input {...formik.getFieldProps('password')}
                  className={styles.textbox}
                  type="text"
                  placeholder="Password"
                ></input>
                <button className={styles.btn} type="submit">
                  Sign in 
                </button>
              </div>

              <div className="text-center py-3">
                <span className="text-gray-500">
                  Lupa Password?
                  <Link className="text-red-500" to="/recovery">
                    Ubah sekarang
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

export default Password;
