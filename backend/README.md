# backend


## instalasi 
- pastikan modul sudah terinstall dengan menjalankan 
```sh 
npm install
```
- copy file env_example menjadi .env
- isi konfigurasi sesuai dengan mesin anda
- jalankan migrasi dengan mengetikkan perintah
```sh
npm run migrate
```
- setelah itu lakukan seeding ketikkan :
```sh
npm run seed
```
- jalankan aplikasi dengan mengetikkan
```sh
npm start
```

## sample response
```js
{
  success: boolean,
  message: string,
  data: array | string | object
}
```
## jwt data 
```js
{
 id: integer,
 name: string,
 role: string
}
```

## endpoint

#### prefix
 ```js
 /api
 ```

- auth
  - [POST] /auth/login ( untuk mendapatkan token jwt )
    - body
   ```js
    {
      email: string,
      password: string
    }
  ```
  - [POST] /auth/register (buat user baru)
    - body
    ```
      name: string,
      email: string,
      password: string
    ```
    - [GET] /auth/verify/:uid (verifikasi user agar bisa masuk ke aplikasi , hanya boleh di lakukan oleh admin)
    - header 
      ```js
      {
        Authorization: bearer {TOKEN_JWT}
      }
      ```
- dashboard
  - [GET] /dashboard ( data untuk dashboard )
- materies
  - [GET] /materies  ( menampilkan semua materi yang tersedia)
  - [GET] /materies/:slug  (menampilkan sebuah materi berdasarkan slug)
  - [POST] /materies  ( membuat materi baru )
    ```json
        body {
        lesson_id: integer,
        title: string,
        content: string
         },
        header {
           Authorization: Bearer {TOKEN_JWT}
        }
      ```
   - [DELETE] /materies/:slug  ( menghapus materi berdasarkan slug )
    ```json
      header {
        Authorization: Bearer {TOKEN_JWT}
      }
    ```

   - [PATCH] /materies/:slug  ( mengupdate sebuah materi )
     ```json
        body {
         title:string,
         content:string,
         lesson_id: ?integer <untuk berpindah lesson>
        }
        header {
          Authorization: Bearer {TOKEN_JWT}
        }
     ```

- lessons
  - /lessons [GET] (daftar semua pelajaran)
  - /lessons/:lesson [GET] (detail suatu pelajaran)
  - /lessons/:lesson/:slug [GET] (materi dari sebuah pelajaran)
  - /lesson [POST] (daftar pelajaran)

> © by our teams under MIT license
