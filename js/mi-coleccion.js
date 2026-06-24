const figuritas = [
    {
        id: 1,
        tipo: "Común",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-modric.jpg",
        alt: "Figura de Modric",
        claseImg: "figura-luka-modric",
        año: 2026,
        pais: "Croacia"
    },
    {
        id: 2,
        tipo: "Común",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-messi.jpg",
        alt: "Figura de Messi",
        claseImg: "figura-lionel-messi",
        año: 2026,
        pais: "Argentina"
    },
    {
        id: 3,
        tipo: "Común",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-neymar.jpg",
        alt: "Figura de Neymar",
        claseImg: "figura-neymar-jr",
        año: 2026,
        pais: "Brasil"
    },
    {
        id: 4,
        tipo: "Rara",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-ronaldo.jpg",
        alt: "Figura de Ronaldo",
        claseImg: "figura-cristiano-ronaldo",
        año: 2026,
        pais: "Portugal"
    },
    {
        id: 5,
        tipo: "Común",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-yamal.jpg",
        alt: "Figura de Lamine Yamal",
        claseImg: "figura-lamine-yamal",
        año: 2026,
        pais: "España"
    },
    {
        id: 6,
        tipo: "Coca Cola",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-harrykane.jpg",
        alt: "Figura de Harry Kane",
        claseImg: "figura-harry-kane",
        año: 2026,
        pais: "Inglaterra"
    },
    {
        id: 7,
        tipo: "Común",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-enzoFernandez.jpg",
        alt: "Figura de Enzo Fernandez",
        claseImg: "figura-enzo-fernandez",
        año: 2026,
        pais: "Argentina"
    },
    {
        id: 8,
        tipo: "Común",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-julianAlvarez.jpg",
        alt: "Figura de Julian Alvarez",
        claseImg: "figura-julian-alvarez",
        año: 2026,
        pais: "Argentina"
    },
    {
        id: 9,
        tipo: "Común",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-haaland.jpg",
        alt: "Figura de Haaland",
        claseImg: "figura-erling-haaland",
        año: 2026,
        pais: "Noruega"
    },
    {
        id: 10,
        tipo: "Dorada",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-messiDorada.jpg",
        alt: "Figura de Messi",
        claseImg: "figura-lionel-messi-dorada",
        año: 2026,
        pais: "Argentina"
    },
    {
        id: 11,
        tipo: "Coca Cola",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-lautaroM.jpg",
        alt: "Figura de Lautaro Martinez",
        claseImg: "figura-lautaro-martinez",
        año: 2026,
        pais: "Argentina"
    },
    {
        id: 12,
        tipo: "Dorada",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-mbappe.jpg",
        alt: "Figura de Kylian Mbappé-dictador",
        claseImg: "figura-kylian-mbappe",
        año: 2026,
        pais: "Francia"
    }
]
function mostrarFiguritas(lista) {
    const contenedorFig = document.querySelector('.contenedor-coleccion');

    lista.forEach(figurita => {
        const card = document.createElement('article');
        card.classList.add('card');
        const pTipoFig = document.createElement('p');
        pTipoFig.appendChild(document.createTextNode(figurita.tipo));
        card.appendChild(pTipoFig);
        const img = document.createElement('img');
img.src = figurita.imagen;
img.alt = figurita.alt;
img.classList.add(figurita.claseImg);
card.appendChild(img);
        const pAnio = document.createElement('p');
        pAnio.appendChild(document.createTextNode(figurita.año));
        card.appendChild(pAnio);
        const pPais = document.createElement('p');
        pPais.appendChild(document.createTextNode(figurita.pais));
        card.appendChild(pPais);
    
const botonFav = document.createElement('button');
botonFav.classList.add('boton-fav');
botonFav.appendChild(document.createTextNode('🤍'));
if(figuritasFavoritas.includes(figurita.id)){
 botonFav.textContent = '❤️';
 botonFav.classList.add('favorito-activo');
}
botonFav.addEventListener('click', function()  {
  botonFav.classList.toggle('favorito-activo');
  if (botonFav.classList.contains('favorito-activo')) {
    botonFav.textContent = '❤️';
    figuritasFavoritas.push(figurita.id);
  } else {
    botonFav.textContent = '🤍'
    figuritasFavoritas = figuritasFavoritas.filter(id => id !== figurita.id);
  }
  localStorage.setItem('figuritasFavoritas', JSON.stringify(figuritasFavoritas));
});
card.appendChild(botonFav);
contenedorFig.appendChild(card);
    });
}
let figuritasFavoritas=JSON.parse(localStorage.getItem('figuritasFavoritas'))||[];
mostrarFiguritas(figuritas);

const buscador = document.querySelector('#buscador');
buscador.addEventListener('input', function() { 
    const textoBuscado = buscador.value.toLowerCase();

    const filtradas = figuritas.filter(figurita => {
        return figurita.alt.toLowerCase().includes(textoBuscado)
    })

    const contenedor = document.querySelector('.contenedor-coleccion');
    contenedor.innerHTML = '';
    mostrarFiguritas(filtradas);
})

;