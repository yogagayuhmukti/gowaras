import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Pendaftaran,
  Antrian,
  AnamnesePasien,
  RekamMedis,
  KonsultasiLayanan,
  RujukPindahLokasi,
  KonsulDokter,
  KasirNotaPelayanan,
  LayananTeam,
  LokasiPraktekTerdeteksi,
  LayananHomeCare,
  PrintNotaviaHP,
} from "../../pages";

const Rute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pendaftaran></Pendaftaran>} />
        <Route path="/antrian" element={<Antrian></Antrian>} />
        <Route
          path="/anamnesapasien"
          element={<AnamnesePasien></AnamnesePasien>}
        />
        <Route path="/rekammedis" element={<RekamMedis></RekamMedis>} />
        <Route
          path="/konsultasilayanan"
          element={<KonsultasiLayanan></KonsultasiLayanan>}
        />
        <Route
          path="/rujukpindahlokasi"
          element={<RujukPindahLokasi></RujukPindahLokasi>}
        />
        {/* <Route
          path="/RujukKeDokter"
          element={<RujukKeDokter></RujukKeDokter>}
        /> */}
        <Route
          path="/konsultasidokter"
          element={<KonsulDokter></KonsulDokter>}
        />
        <Route
          path="/kasirnotapelayanan"
          element={<KasirNotaPelayanan></KasirNotaPelayanan>}
        />
        <Route path="/layananteam" element={<LayananTeam></LayananTeam>} />
        <Route
          path="/lokasipraktekterdeteksi"
          element={<LokasiPraktekTerdeteksi></LokasiPraktekTerdeteksi>}
        />
        <Route
          path="/layananhomecare"
          element={<LayananHomeCare></LayananHomeCare>}
        />
        <Route
          path="/printnotaviahp"
          element={<PrintNotaviaHP></PrintNotaviaHP>}
        />
      </Routes>
    </Router>
  );
};

export default Rute;
