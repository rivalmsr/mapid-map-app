# DELIVERY TUGAS

Tugas ini adalah sebagai syarat seleksi pertama untuk proses rekrutmen React Front End Developer MAPID.

## Struktur folder

- folder app terdapat file store.js : tempat init redux store;
- folder feature terdapat file pointSlice.js : tempat deklarasi function get API, init state, reducer, dan entity adapter
- folder pages -> map terdapat file index.js : untuk membuat base dari map
- file app.js : tempat merender component Map
- file index.js : tempat merender componet App dan configurasi redux
- file index.css : tempat menambahkan/ arahkan tailwind css
- file tailwind.config.js : tempat konfigurasi tailwind, ex. menambahkan path file template

## Lokasi API key mapbox

- terdapat pada folder map file index.js

## Cara penginstalan librari

### react

- yarn create react-app

### urbica react

- yarn add mapbox-gl @urbica/react-map-gl

### redux

- yarn add redux react-redux @reduxjs/toolkit

### axios

- yarn add axios

### redux tailwindcss

- yarn add install -D tailwindcss postcss autoprefixer
- yarn add tailwindcss init -p

## Fitur basik sesuai rekuiremen

1. Base map menggunakan Urbica React Map GL dan Mapbox
2. Mengakses API dengan axios dan data disimpan distate management redux
3. Filter warna sesuai dengan status, menggunakan loop serta membuat fungsi filter manual dengan pengkondisian/switch
4. Popup dimunculkan dengan memberikan event click pada Layer Circle, data pada Layer Circle yang diclick disimpan distate kemudian dirender bersama Popup.
5. Fitur tambahannya NavigationControl untuk memudahkan dalam interaksi map dan GeolocateControl untuk mengarahkan titip map pada komputer kita.
