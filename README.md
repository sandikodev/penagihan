# APLIKASI PENAGIHAN INTERNET SEDERHANA

## ROADMAP

- pendataan pelanggan & scheduling tenggat
- integrasi wa gateway
- integrasi sistem mikrotik
- integrasi sistem payment gateway(3rd party)

## Work In Progress

work in progress updated weekly here(hopefuly)

1. membuat diagram kerja workflow development (on-going)
2. membuat diagram kerja workflow database (discourse)
3. membuat diagram kerja workflow frontend (discourse)

## How To Contribute

1. git clone this project
2. let's rock with your own way
3. commit your rock then pull request to this repo's
4. happy coding

## How To Rock

1. fork this project
2. git clone the repo
   ```sh
   git clone git@github.com:username/penagihan.git
   ```
   > we recomend you to using ssh protocol instead http
3. open cloned folder
   ```sh
   cd penagihan
   ```
4. install dependencies
   ```sh
   bun install
   ```
   > we recomend you to using pnpm or bun
5. get ready for prisma
   ```sh
    bunx prisma db pull
    bunx prisma generate
   ```
6. start your development
   ```sh
   bun dev
   ```
7. lives prisma studio (optional)
   ```sh
   bunx prisma studio
   ```

## TECH STACK

| fungsi       | nama        |
| ------------ | ----------- |
| frontend     | svelte      |
| backend      | kit         |
| ORM          | prisma      |
| database     | mysql       |
| cloud hosted | planetscale |
| auth         | authjs      |
| typesafe api | trpc        |

## Regards

@sandikodev
