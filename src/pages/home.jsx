import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import Content from "../components/tentang";
import Skill from "../components/skill";
import Sertifikat from "../components/sertifikat";
import Pendidikan from "../components/pendidikan";
import Project from "../components/projek";
import Pengalaman from "../components/pengalaman";
import Resume from "./resume";
import Popup from "../components/popup";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <div className="title">
        <h1 style={{ marginLeft: "auto" }}>Portofolio Hamdan</h1>
        <button
          className="tentang-website"
          onClick={handleOpenPopup}
          style={{ marginLeft: "auto" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/3357/3357329.png"
            alt=""
            height={40}
            draggable="false"
          />
        </button>
      </div>
      <Navbar />
      <div className="home-body">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/sertifikat" element={<Sertifikat />} />
          <Route path="/pendidikan" element={<Pendidikan />} />
          <Route path="/project" element={<Project />} />
          <Route path="/pengalaman" element={<Pengalaman />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        {isPopupOpen && <Popup />}
        {/* tombol close */}
        {isPopupOpen && (
          <button onClick={handleClosePopup} className="close-button">
            Close
          </button>
        )}
      </div>
    </>
  );
}
