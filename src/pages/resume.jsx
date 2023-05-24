import React from "react";
import { NavLink } from "react-router-dom";

export default function Resume() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <NavLink to={"/"} draggable="false">
          <button>Kembali</button>
        </NavLink>
        <button>Download</button>
      </div>
      <div
        style={{
          backgroundColor: "white",
          padding: 25,
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: 10 }}>RESUME</h1>
        <h2>[Nama Anda]</h2>
        <p>[Alamat]</p>
        <p>[Kota, Provinsi, Kode Pos]</p>
        <p>[Nomor Telepon]</p>
        <p>[Alamat Email]</p>

        <h3>Tujuan:</h3>
        <p> 
          Mencari posisi pengembangan full-stack untuk mengaplikasikan
          keterampilan dan pengetahuan yang diperoleh melalui pendidikan di
          sekolah menengah kejuruan, dengan keinginan kuat untuk berkontribusi
          dalam tim pengembangan perangkat lunak yang dinamis.
        </p>

        <h3>Pendidikan:</h3>
        <p>[Nama Sekolah Menengah Kejuruan], [Kota, Provinsi]</p>
        <p>[Tahun Kelulusan]</p>
        <ul>
          <li>
            Menyelesaikan kursus dalam ilmu komputer, bahasa pemrograman,
            pengembangan web, dan manajemen database.
          </li>
          <li>
            Membangun dasar yang kuat dalam prinsip dan praktik pengembangan
            perangkat lunak.
          </li>
          <li>
            Terlibat dalam berbagai proyek pengodean dan menerapkan teknik
            pemecahan masalah.
          </li>
        </ul>

        <h3>Keterampilan:</h3>
        <ul>
          <li>Bahasa Pemrograman: JavaScript, HTML, CSS, Python</li>
          <li>Pengembangan Front-end: React, Vue.js, Angular, Bootstrap</li>
          <li>Pengembangan Back-end: Node.js, Express.js, Django</li>
          <li>Database: MongoDB, MySQL, PostgreSQL</li>
          <li>Kontrol Versi: Git, GitHub</li>
          <li>Pemecahan Masalah dan Pemecahan Bug</li>
          <li>Konsep Pemrograman Berorientasi Objek (OOP)</li>
          <li>Desain Web Responsif</li>
          <li>Kolaborasi dan Kerja Tim</li>
          <li>Keterampilan Analitis dan Pemecahan Masalah yang Kuat</li>
        </ul>

        <h3>Proyek:</h3>
        <ul>
          <li>
            Mengembangkan situs portofolio pribadi menggunakan React, memamerkan
            proyek dan keterampilan saya.
          </li>
          <li>
            Membuat aplikasi web menggunakan Node.js dan Express.js untuk
            mengelola dan melacak tugas-tugas pribadi.
          </li>
          <li>
            Bekerjasama dengan tim untuk membangun situs e-commerce responsif
            menggunakan React dan Redux.
          </li>
          <li>
            Mengontribusikan pada proyek sumber terbuka di GitHub,
            mengimplementasikan fitur baru dan menyelesaikan masalah.
          </li>
        </ul>

        <h3>Pengalaman Kerja:</h3>
        <p>[Perusahaan/Organisasi], [Kota, Provinsi]</p>
        <p>[Posisi], [Tanggal]</p>
        <ul>
          <li>
            Membantu dalam pengembangan dan pemeliharaan situs web perusahaan,
            termasuk mengimplementasikan fitur baru dan memperbaiki bug.
          </li>
          <li>
            Bekerjasama dengan tim pengembangan untuk meningkatkan pengalaman
            pengguna dan mengoptimalkan kinerja situs web.
          </li>
          <li>
            Bekerja dengan database untuk mengambil dan memanipulasi data untuk
            berbagai fungsi.
          </li>
          <li>
            Mengembangkan dan menguji aplikasi perangkat lunak untuk memastikan
            fungsionalitas dan kualitasnya.
          </li>
        </ul>

        <h3>Informasi Tambahan:</h3>
        <ul>
          <li>
            Menghadiri bootcamp dan workshop pemrograman untuk meningkatkan
            keterampilan dan tetap terkini dengan teknologi terbaru.
          </li>
          <li>
            Ikut serta dalam kompetisi pemrograman, memamerkan kemampuan dalam
            pemecahan masalah dan kerja tim.
          </li>
          <li>
            Aktif berkontribusi dalam komunitas pemrograman online dan terus
            belajar melalui sumber daya dan tutorial online.
          </li>
        </ul>

        <h3>Referensi:</h3>
        <p>Tersedia jika diminta</p>
      </div>
    </div>
  );
}
