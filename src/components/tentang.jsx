import React from "react";
import { NavLink } from "react-router-dom";
import SocialMedia from "./akun";

export default function Tentang() {
  return (
    <section className="content">
      <h3 className="title-content">tentang saya</h3>
      <div className="content-body">
        <img
          src="https://cdn.myanimelist.net/r/360x360/images/characters/15/212635.jpg?s=07636714a0e734ddc5b9fc116f674283"
          alt=""
          draggable="false"
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ fontFamily: "monospace", fontSize: 25 }}>
            nama saya hamdan <br />
            ini waifu saya <br />
            namanya tomoko
          </p>
          <NavLink to={"/resume"} draggable="false">
            <button>lihat resume</button>
          </NavLink>
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
