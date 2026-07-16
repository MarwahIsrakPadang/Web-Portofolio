import laporanFasumImg from "../assets/laporan Fasum.png";
import perpustakaanImg from "../assets/perpustakaan.png";

export const projectsData = [
  {
    id: 1,
    title: "Event Visitor Management & NFC Tracking",
    description: "Sistem manajemen pengunjung berbasis web terintegrasi gelang NFC untuk tracking real-time acara.",
    tags: ["React", "Node.js", "Express", "MySQL", "NFC"],
    githubLink: "https://github.com/MarwahIsrakPadang",
  },
  {
    id: 2,
    title: "Laporan Fasum",
    description: "Aplikasi pelaporan kerusakan fasilitas umum berbasis web untuk memudahkan masyarakat menyampaikan aspirasi.",
    image: laporanFasumImg,
    tags: ["PHP", "MySQL", "Bootstrap"],
    githubLink: "https://github.com/MarwahIsrakPadang/Project-Laporan-Fasum",
  },
  {
    id: 3,
    title: "Web Perpustakaan",
    description: "Sistem informasi perpustakaan berbasis web untuk manajemen buku, anggota, dan peminjaman.",
    image: perpustakaanImg,
    tags: ["PHP", "MySQL", "Bootstrap"],
    githubLink: "https://github.com/MarwahIsrakPadang/Web-Perpustakaan",
  },
];
