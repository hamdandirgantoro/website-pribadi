import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SocialMedia from "./akun";

export default function Tentang() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="content">
      {screenSize <= 1024 ? (
        <div>
          <h3 className="title-content" style={{ textAlign:"center" }}>tentang saya</h3>
          <div className="content-body" style={{ display:"flex", flexDirection:"column" }}>
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
              <SocialMedia screenSize={screenSize} />
            </div>
          </div>
        </div>
      ) : (
        <div>
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
        </div>
      )}
    </section>
  );
}
