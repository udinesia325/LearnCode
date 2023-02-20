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
   ```js
    body {
      email: string,
      password: string
    }
  ```
  - [GET] /auth/me (detail user yang sedang login)
    ```js
     header {
        Authorization: bearer {TOKEN_JWT}
      }
    ```
  - [GET] /auth/users ( daftar semua user)
  - [POST] /auth/register (buat user baru)
    
    ```js
    body{
      name: string,
      email: string,
      password: string
      }
    ```
    - [GET] /auth/verify/:uid (verifikasi user agar bisa masuk ke aplikasi , hanya boleh di lakukan oleh admin)

      ```js 
      header {
        Authorization: bearer {TOKEN_JWT}
      }
      ```
- dashboard
  - [GET] /dashboard ( data untuk dashboard )
- materies
  - [GET] /materies  ( menampilkan semua materi yang tersedia)
  - [GET] /materies/:slug  (menampilkan sebuah materi berdasarkan slug)
  - [POST] /materies  ( membuat materi baru )
    ```js
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
    ```js
      header {
        Authorization: Bearer {TOKEN_JWT}
      }
    ```

   - [PATCH] /materies/:slug  ( mengupdate sebuah materi )
     ```js
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
  - [GET] /lessons (daftar semua pelajaran yang tersedia)
  - [GET] /lessons/:lesson (detail suatu pelajaran)
  - [GET] /lessons/:lesson/:slug (materi dari sebuah pelajaran bersarkan nama pelajaran dan slug)
  - [POST] /lesson (membuat pelajaran baru)
    ```js
    body {
      image: ?file,
      name: string <required>,
      description: string <required>,
    }
      header {
          Authorization: Bearer {TOKEN_JWT}
        }
    ```
  - [PATCH] /lesson (mengupdate pelajaran baru)
    ```js
    body {
      image: ?file,
      name: string <required>,
      description: string <required>,
    }
      header {
          Authorization: Bearer {TOKEN_JWT}
        }
    ```
  - [DELETE] /lesson/:name (menghapus berdasarkan nama)

##### silahkan di coba !

salam titik koma and stay full js :v




build with ❤️ by CodingTeam

> © by our teams under MIT license
