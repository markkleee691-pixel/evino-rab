/* ============================================================
   DATA.JS — INI "DATABASE" KAMU 💌
   ------------------------------------------------------------
   Semua kata-kata, soal kuis, foto, dan info lagu ada di sini.
   Kamu GA PERLU ngerti coding buat edit file ini.
   Tinggal ganti teks di antara tanda kutip ("...") sesuai cerita
   kalian. Simpan filenya, refresh browser, langsung berubah.
   ============================================================ */

const LOVE_DATA = {

  // ---------- HALAMAN PEMBUKA ----------
  intro: {
    title: "Untuk Kamu,",
    subtitle: "ada sesuatu yang udah lama mau aku kasih...",
    buttonText: "Mulai ↦",
  },

  // ---------- GAME: KUIS CINTA ----------
  // Ganti pertanyaan, pilihan jawaban, index jawaban benar (mulai dari 0),
  // dan "fact" yang muncul setelah dijawab (boleh diisi kenangan asli).
  quiz: {
    title: "Kuis Cinta 💘",
    instruction: "Jawab dulu sebelum lanjut ke bagian berikutnya~",
    questions: [
      {
        question: "Pertama kali ketemu, di mana?",
        options: ["Kampus", "Lewat HP", "Acara temen", "Kerjaan"],
        correctIndex: 1,
        fact: "Ganti ini sesuai cerita kalian berdua ya 😊",
      },
      {
        question: "Makanan favorit dia apa?",
        options: ["Pedas-pedas", "Manis-manis", "Mie ayam", "Semuanya juga doyan"],
        correctIndex: 3,
        fact: "Edit jawaban & fakta lucu di file data.js!",
      },
      {
        question: "Kalo lagi kangen, biasanya ngapain?",
        options: ["Video call", "Kirim chat panjang", "Cuma liatin foto", "Telpon sampe ketiduran"],
        correctIndex: 3,
        fact: "Tulis kebiasaan kalian yang sebenernya di sini.",
      },
    ],
  },

  // ---------- SURAT CINTA ----------
  // paragraphs = array, tiap elemen jadi satu paragraf yang diketik pelan-pelan.
  letter: {
    title: "Surat Kecil",
    paragraphs: [
      "Halo, sayang.",
      "Aku bikin halaman ini cuma buat satu orang — kamu.",
      "Ganti seluruh paragraf ini di file data.js sama kata-kata kamu sendiri ya. Tulis aja apa yang mau kamu sampein, gausah formal-formal.",
      "Makasih udah jadi bagian paling baik dari hari-hariku.",
    ],
    signature: "— Aku, yang sayang kamu",
    buttonText: "Lanjut ↦",
  },

  // ---------- LAGU ----------
  // Default-nya pakai embed Spotify resmi (legal, gratis, ga perlu upload file lagu).
  // Track ID di bawah ini ID resmi "Perfect" - Ed Sheeran dari album ÷ (2017).
  // Kalau mau ganti lagu lain, cari link spotify-nya, ambil bagian setelah
  // "open.spotify.com/track/" lalu tempel ke sini.
  music: {
    title: "Perfect",
    artist: "Ed Sheeran",
    spotifyTrackId: "0tgVpDi06FyKpA1z0VMD4v",
    note: "Tekan play buat dengerin bareng 🎶",
  },

  // ---------- FOTO ----------
  // 1. Taruh foto kalian di folder assets/photos/
  // 2. Tulis nama filenya di "src" (harus sama persis termasuk huruf besar/kecil)
  // 3. Tulis caption di bawahnya
  // Selama foto belum ditaruh, otomatis muncul kotak placeholder — gapapa, web-nya tetep jalan.
  photos: [
    { src: "assets/photos/foto1.jpg", caption: "Ganti caption ini" },
    { src: "assets/photos/foto2.jpg", caption: "Momen favorit kita" },
    { src: "assets/photos/foto3.jpg", caption: ":)" },
    { src: "assets/photos/foto4.jpg", caption: "Selalu pengen kayak gini" },
  ],

  // ---------- PENUTUP ----------
  finale: {
    title: "Makasih udah baca sampe sini 💛",
    message: "Edit pesan penutup ini juga sesuai mau kamu di file data.js.",
    replayText: "Ulangi dari awal",
  },
};
