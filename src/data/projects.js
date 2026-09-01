import laporanFasumImg from "../assets/projects/laporan-fasum.png";
import perpustakaanImg from "../assets/projects/perpustakaan.png";
import topupImg from "../assets/projects/topup.png";

const projects = [
  
  {
    id: 1,
    title: "Web TopUp Game",
    description: "Sistem ini menyediakan fungsionalitas pemesanan produk game, manajemen inventaris produk, dashboard admin, dan integrasi awal dengan Tripay Payment Gateway.",
    image_url: topupImg,
    link: "https://github.com/MarwahIsrakPadang/Web-TopUp"
  },
  {
    id: 2,
    title: "Event Visitor Management & NFC Tracking",
    description: "Sistem manajemen pengunjung berbasis web terintegrasi gelang NFC untuk tracking real-time acara.",
    image_url: null,
    link: "https://github.com/MarwahIsrakPadang"
  },
  {
    id: 3,
    title: "Laporan Fasum",
    description: "Aplikasi pelaporan kerusakan fasilitas umum berbasis web untuk memudahkan masyarakat menyampaikan aspirasi.",
    image_url: laporanFasumImg,
    link: "https://github.com/MarwahIsrakPadang/Project-Laporan-Fasum"
  },
  {
    id: 4,
    title: "Web Perpustakaan",
    description: "Sistem informasi perpustakaan berbasis web untuk manajemen buku, anggota, dan peminjaman.",
    image_url: perpustakaanImg,
    link: "https://github.com/MarwahIsrakPadang/Web-Perpustakaan"
  }
];

export default projects;
