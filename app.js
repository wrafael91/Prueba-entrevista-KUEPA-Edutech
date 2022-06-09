
function personasAPI() {
    const url1 = `https://api.opendota.com/api/proPlayers`;
    fetch(url1)
        .then(respuesta => respuesta.json())
        .then(datos => mostrarLeadsObtenidos(datos))
};

function playersAPI(){
    const url2 = `https://api.opendota.com/api/heroes`;
    fetch(url2)
        .then(respuesta2 => respuesta2.json())
        .then(datos2 => mostrarPlayers(datos2))
};

function mostrarLeadsObtenidos(leads){
    const leadsObtenidos = document.querySelector('#leads_obtenidos');
    const leadsMatriculas = document.querySelector('#leads_matriculas');
    const colaLlamados = document.querySelector('#cola_llamados');

    let leadsSumatoria = '';
    leads.forEach(lead => {
        leadsSumatoria += lead
    });
    
    leadsObtenidos.innerHTML = `50 / ${parseInt(leadsSumatoria.length * 0.00243)}`;
    leadsMatriculas.innerHTML = `10 / ${parseInt(leadsSumatoria.length * 0.00049)}`;
    colaLlamados.innerHTML = `50 / ${parseInt(leadsSumatoria.length * 0.00243)}`;
}

function mostrarPlayers(players){
    const playersPendientes = document.querySelector('#pendientes_ayer');

    let tablaPlayers = [];
    players.forEach(player => {
        const {localized_name} = player
        tablaPlayers += `
            <tr>
                <td>${localized_name}</td>
                <td>Llamar hoy</td>
            </tr>
        `;
    });
    playersPendientes.innerHTML = tablaPlayers;
}

personasAPI();

playersAPI();