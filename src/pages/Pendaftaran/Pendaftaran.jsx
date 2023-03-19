import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ReactWhatsapp from "react-whatsapp";
import "./Pendaftaran.css";

const Pendaftaran = () => {
  const [values, setValues] = useState({
    name: "",
    umur: "",
    alamat: "",
    sakit: "",
    lamasakit: "",
  });
  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(values);
  };
  const message = JSON.stringify(values);

  return (
    <div>
      <Navbar />
      <form className="pesan">
        <div className="pesanform">
          <label htmlFor="name">Nama Pasien</label>
          <input
            className="form-control"
            placeholder="Nama Lengkap"
            name="name"
            onChange={handleInput}
          />
        </div>
        <div className="pesanform">
          <label htmlFor="umur">Umur</label>
          <input
            className="form-control"
            placeholder="Umur"
            name="umur"
            onChange={handleInput}
          />
        </div>
        <div className="pesanform">
          <label htmlFor="alamat">Alamat</label>
          <input
            className="form-control"
            placeholder="Alamat Lengkap"
            name="alamat"
            onChange={handleInput}
          />
        </div>
        <div className="pesanform">
          <label htmlFor="sakit">Sakit</label>
          <input
            className="form-control"
            placeholder="Sakit yang dirasakan"
            name="sakit"
            onChange={handleInput}
          />
        </div>
        <div className="pesanform">
          <label htmlFor="lamasakit">"Lama Sakit</label>
          <input
            className="form-control"
            placeholder="Sudah merasa sakit berapa lama ?"
            name="lamasakit"
            onChange={handleInput}
          />
        </div>
        <ReactWhatsapp
          number="=+6285162665635"
          message={message}
          className="tombol-kirim"
        >
          Kirim
        </ReactWhatsapp>
      </form>
      <div></div>
    </div>
  );
};

export default Pendaftaran;
