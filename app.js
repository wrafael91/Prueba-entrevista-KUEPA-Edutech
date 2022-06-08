
function personasAPI() {
    const url1 = `https://api.opendota.com/api/proPlayers`
    fetch(url1)
        .then(respuesta => respuesta.json())
        .then(datos => mostrarLeadsObtenidos(datos))
};

function mostrarLeadsObtenidos(leads){
    const leadsObtenidos = document.querySelector('#leads_obtenidos');
    let leadsSumatoria = '';
    leads.forEach(lead => {
        leadsSumatoria += lead
    });
    leadsObtenidos.innerHTML = `50 / ${parseInt(leadsSumatoria.length*0.00243)}`;
}

personasAPI();