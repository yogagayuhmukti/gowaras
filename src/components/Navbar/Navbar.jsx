import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import WhatsAppWidget from "react-whatsapp";

// import { logo } from "../../assets";
import "./Navbar.css";

const Navbar = () => {
  // const phoneNumber = "+5285326721633";
  // const message = "Hello, I am interested in your product.";

  // function handleClick() {
  //   const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  //     message
  //   )}`;
  //   window.open(url, "_blank");
  // }
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top py-3 shadow-md-sm">
        <div className="container-fluid justify-content-start-md">
          <Link to="/" className="navbar-brand d-none d-sm-block offset-md-1">
            {/* <img src={logo} alt="logo" /> */}
            <strong>GoWaras</strong>
          </Link>
          <Link
            to="/"
            className="navbar-brand offset-md-1 fw-bold d-block d-sm-none"
          >
            GoWaras
          </Link>
          <button
            className="navbar-toggler offset-sm-8 offset-5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <HashLink className="nav-link text-black" to="/">
                  Pendaftaran
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link text-black" to="/antrian">
                  Antrian
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link text-black" to="/anamnesapasien">
                  Anamese Pasien
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link text-black" to="/rekammedis">
                  Rekam Medis
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  className="nav-link text-black"
                  to="/konsultasilayanan"
                >
                  Konsultasi Layanan
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  className="nav-link text-black"
                  to="/rujukpindahlokasi"
                >
                  Rujuk Pindah Lokasi
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link text-black" to="/rujukandokter">
                  Rujukan ke Dokter
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  className="nav-link text-black"
                  to="/konsultasidokter"
                >
                  Konsultasi Dokter
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  className="nav-link text-black"
                  to="/kasirnotapelayanan"
                >
                  Kasir / Nota Pelayanan
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link text-black" to="/layananteam">
                  Layanan Team maksimal 10 orang
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  className="nav-link text-black"
                  to="/lokasipraktekterdeteksi"
                >
                  Lokasi Praktek Anda terdeteksi
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link text-black" to="/layananhomecare">
                  Layanan Homecare
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link text-black" to="/printnotaviahp">
                  Print nota via HP
                </HashLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-success text-white" to="/">
                  Log in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <WhatsAppWidget phoneNumber={phoneNumber} message={message}>
        <button onClick={handleClick}>Contact us on WhatsApp</button>
      </WhatsAppWidget> */}
    </>
  );
};
export default Navbar;
