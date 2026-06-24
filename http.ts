// GET
// POST
// PUT
// DELETE

import axios from "axios"

// STATUS KODOVI:
// 200 OK
// 204 NO CONTENT (sve je ok, ali nemamo povarni objekat)
// 400 (i svi 4xx) - BAD REQUEST
// 500 SERVER ERROR

export interface FlightModel {
    id: number
    type: {
        id: number
        name: "ARRIVAL" | 'DEPARTURE'
    }
    flightKey: string
    flightNumber: string
    destination: string
    scheduledAt: string
    estimatedAt: null | string
    connectedType: string,
    connectedFlight: string
    plane: string
    gate: string
    terminal: string
}

// fetch('https://flight.pequla.com/api/flight/list')
//     .then(rsp => rsp.json())
//     .then((obj: any) => {
//         const flights = obj as FlightModel[]
//         console.log(flights[0]!.destination)
//     })

const client = axios.create({
    baseURL: 'https://flight.pequla.com/api',
    headers: {
        'Accept': 'application/json',
        'X-Name': 'KVA-Uvod/1.0'
    },
    validateStatus: (status: number) => {
        return status === 200 || status === 204
    }
})

client.request<FlightModel[]>({
    url: '/flight/list',
    params: {
        'type': 'departure'
    }
}).then(rsp => {
    // for (let f of rsp.data) {
    //     console.log(formatDate(f.scheduledAt))
    // }
    rsp.data
        .map(f => f.scheduledAt)
        .map(d => formatDate(d))
        .forEach(d => console.log(d))
})
    .catch(e => console.log(e))

function formatDate(iso: string) {
    return new Date(iso).toLocaleString('SR-RS', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    })
}