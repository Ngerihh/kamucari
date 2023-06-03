import React from "react";
import { Toaster } from "react-hot-toast";

import styles from "../styles/Username.module.css";
function Recovery() {
  
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex  justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title  flex flex-col items-center">
            <h4 className="text-5xl font-bold">Ubah Kata sandi</h4>
            <span className="py-4  text-xl w-2/3 text-center text-gray-500">
              Masukkan OTP untuk memulihkan Kata sandi
            </span>
          </div>

          <div>
            <form className="pt-20">
              <div className="input text-center">
                <span className="py-4 text-sm text-left text-gray-500">
                  Masukkan 6 digit OTP yang dikirim ke Alamat Email Anda
                </span>
                <div className="textbox flex flex-col items-center gap-6">
                  <input
                    className={styles.textbox}
                    type="text"
                    placeholder="OTP"
                  ></input>
                  <button className={styles.btn} type="submit">
                    Recovery
                  </button>
                </div>
              </div>

              <div className="text-center py-3">
                <span className="text-gray-500">
                  Can't get OTP?
                  <button className="text-red-500">Resend</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recovery;
