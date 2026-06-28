# Untuk Kamu 💌 — Web Romantis

Halaman web kecil dengan 4 bagian: pembuka → kuis cinta (game) →
surat → lagu + foto. Semua bisa dibuka langsung dari VSCode, tanpa
perlu install database atau backend apapun.

## Cara buka di VSCode

1. Extract/buka folder ini di VSCode (File → Open Folder).
2. Install extension **Live Server** (cari di tab Extensions, ikon kotak
   di sidebar kiri, ketik "Live Server" punya Ritwick Dey).
3. Klik kanan file `index.html` → **Open with Live Server**.
4. Browser otomatis terbuka dan halamannya langsung bisa dicoba.

   *(Kalau males install extension, double-click aja `index.html` dan
   itu akan kebuka langsung di browser — cuma efek animasi/font kadang
   sedikit beda, Live Server lebih akurat.)*

## Yang perlu kamu edit

Semua **teks, soal kuis, dan daftar foto** ada di satu file:

```
data.js
```

Buka file itu di VSCode, ganti kalimat-kalimat di antara tanda kutip
`" ... "` sesuai cerita kalian. Tidak perlu ngerti coding — strukturnya
sudah dikomentari di setiap bagian.

## Cara nambahin foto

1. Taruh file foto kalian ke folder `assets/photos/`.
2. Buka `data.js`, cari bagian `photos`, ganti nama file di `src`
   supaya sama persis dengan nama file foto kamu (perhatikan huruf
   besar/kecil).
3. Ganti juga `caption` dengan keterangan foto.

Selama foto belum ditaruh, halaman tidak akan error — otomatis muncul
kotak placeholder bertuliskan "taruh foto di sini".

## Soal lagu "Perfect" — Ed Sheeran

Aku **tidak bisa nyertain file lagu atau lirik aslinya langsung** di
dalam kode karena itu materi berhak cipta milik Ed Sheeran / label-nya.
Yang aku pakai di halaman ini adalah **Spotify Embed resmi** — widget
player asli dari Spotify yang legal dipasang di web manapun.

Default-nya sudah diarahkan ke lagu "Perfect" yang benar (album ÷,
2017). Beberapa catatan:

- Pengunjung tanpa akun Spotify Premium biasanya cuma bisa dengar
  preview ±30 detik — itu batasan dari Spotify, bukan dari halaman ini.
- Kalau mau ganti ke lagu lain: cari lagunya di open.spotify.com, klik
  share → copy link, ambil kode unik setelah `/track/`, tempel ke
  `spotifyTrackId` di `data.js`.
- Alternatif lain: pakai embed YouTube dari video resmi Ed Sheeran
  (caranya mirip, tinggal ganti `<iframe>` Spotify dengan embed
  YouTube) — kalau mau aku bantu siapin ini, tinggal bilang.

## Mau dikirim ke pacar kamu tanpa harus buka VSCode dia?

Paling gampang upload gratis ke **Netlify Drop**
(https://app.netlify.com/drop) — tinggal drag folder ini ke situ,
nanti dapat link yang bisa langsung dibuka di HP pacar kamu. Tidak
perlu bikin akun untuk versi paling simpel ini.

## Struktur file

```
index.html      → kerangka halaman (4 layar)
style.css       → tampilan & animasi (tema scrapbook/surat cinta)
script.js       → logika (ganti screen, jalanin kuis, dll) — biasanya
                  ga perlu disentuh
data.js         → "database" kamu — semua teks, soal kuis, lagu, foto
assets/photos/  → taruh foto kalian di sini
```
