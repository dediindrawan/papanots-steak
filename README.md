* Papanots Steak Website *

Website yang menampilkan berbagai informasi menu dari sebuah resto yang menyajikan hidangan makanan utama berupa olahan steak dan juga menu-menu lainnya.

# Terdiri dari 3 halaman:
- Beranda
- Menu
- Promo

# Halaman beranda:
Menampilkan ringkasan menu favorit dan ringkasan promo 

# Halaman Menu:
Menampilkan keseluruhan daftar menu

# Halaman Promo:
Menampilkan keseluruhan daftar promo

Mockup tampilan di berbagai ukuran layar:
![Google-Pixel5-127 0 0 1 (1)](https://github.com/dediindrawan/papanots-steak/assets/107289320/36fae664-54db-42a6-9f4b-8743c2075ef4)

![Google-Pixel5-127 0 0 1](https://github.com/dediindrawan/papanots-steak/assets/107289320/d0c01518-acf9-4110-9f8d-7826ed6de01e)

![iPad-Mini-127 0 0 1](https://github.com/dediindrawan/papanots-steak/assets/107289320/4f733346-4acf-4d16-8da6-273206e2fb0e)

![Macbook-Air-127 0 0 1](https://github.com/dediindrawan/papanots-steak/assets/107289320/1e96821c-7dde-4a22-b2f5-e192b69c42ec)

# Live preview: https://papanots-steak.vercel.app/

# Tech stack yang digunakan:
- HTML
- Tailwindcss (cli)
- JavaScript

* Proses instalasi tailwindcss *

# Instalasi node modules. Jalankan perintah pada terminal:
  npm install -y

# Instalasi dependencies tailwindcss, postcss, autoprefixer. Jalankan perintah pada terminal:
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init

# Configurasi tailwindcss didalam file tailwind.config.js:
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }

# Menambahkkan tailwindcss directives kedalam file css didalam file src/css/input.css:
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

# Mulai proses pengembangan, jalankan cli untuk memindai file css. Jalankan perintah pada terminal:
  npx tailwindcss -i ./src/css/input.css -o ./dist/css/style.css --watch

# Tambahkan file css yang sudah di compile kedalam tag <head> didalam file html:
  <link href="/dist/css/style.css">

# Agar proses development lebih mudah, masuk kedalam file package.json kemudian tulis seperti ini didalam object scripts:
  "scripts": {
    "dev": "npx tailwindcss -i ./src/css/input.css -o ./dist/css/style.css --watch"
  }

# Jalankan tailwind untuk proses development interface menggunakan perintah pada terminal:
  npm run dev
