console.log('KVA')

const obj: StudentModel[] = JSON.parse(JSON.stringify(
    [
        {
            ime: 'Petar',
            prezime: 'Kresoja',
            indeks: '2019200948'
        },
        {
            ime: 'Petar',
            prezime: 'Kresoja',
            indeks: '2019200948'
        }
    ]
))

export interface StudentModel {
    ime: string
    prezime: string
    indeks: string
}

// ----------------------------

console.log(obj[0]!.ime);

// ! oznacava da je objekat sigurno definisan (nikad nece biti undefined)
// ? oznacava da objekat moze da bude nedefinisan
