const figuritas = [
    {
        id: 1,
        tipo: "Común",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-modric.jpg",
        alt: "Figura de Modric",
        claseImg: "figura-modric",
        año: 2026,
        pais: "Croacia"
    },
    {
        tipo: "Común",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-messi.jpg",
        alt: "Figura de Messi",
        claseImg: "figura-messi",
        año: 2026,
        pais: "Argentina"
    },
    {
        id: 2,
        tipo: "Común",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-neymar.jpg",
        alt: "Figura de Neymar",
        claseImg: "figura-neymar",
        año: 2026,
        pais: "Brasil"
    },
    {
        id: 3,
        tipo: "Rara",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-ronaldo.jpg",
        alt: "Figura de Ronaldo",
        claseImg: "figura-Ronaldo",
        año: 2026,
        pais: "Portugal"
    },
    {
        id: 4,
        tipo: "Común",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-yamal.jpg",
        alt: "Figura de Lamine Yamal",
        claseImg: "figura-lamine",
        año: 2026,
        pais: "España"
    },
    {
        id: 5,
        tipo: "Colaboracion con coca cola",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-harrykane.jpg",
        alt: "Figura de Harry Kane",
        claseImg: "figura-harrykane",
        año: 2026,
        pais: "Inglaterra"
    },
    {
        id: 6,
        tipo: "Común",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-enzoFernandez.jpg",
        alt: "Figura de Enzo Fernandez",
        claseImg: "figura-enzofernandez",
        año: 2026,
        pais: "Argentina"
    },
    {
        id: 7,
        tipo: "Común",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-julianAlvarez.jpg",
        alt: "Figura de Julian Alvarez",
        claseImg: "figura-julianalvarez",
        año: 2026,
        pais: "Argentina"
    },
    {
        id: 8,
        tipo: "Común",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-haaland.jpg",
        alt: "Figura de Haaland",
        claseImg: "figura-Haaland",
        año: 2026,
        pais: "Noruega"
    },
    {
        id: 9,
        tipo: "Dorada",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-messiDorada.jpg",
        alt: "Figura de Messi",
        claseImg: "figura-messiDorada",
        año: 2026,
        pais: "Argentina"
    },
    {
        id: 10,
        tipo: "Colaboracion con coca cola",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-lautaroM.jpg",
        alt: "Figura de Lautaro Martinez",
        claseImg: "figura-lautaromartinez",
        año: 2026,
        pais: "Argentina"
    },
    {
        id: 11,
        tipo: "Dorada",
        imagen: "../iconos-e-imagenes/imagenes-figus/figu-mbappe.jpg",
        alt: "Figura de Kylian Mbappé",
        claseImg: "figura-mbappe",
        año: 2026,
        pais: "Francia"
    }
]
function mostrarFiguritas() {
    const contenedorFig = document.querySelector('.contenedor-coleccion');

    figuritas.forEach(figurita => {
        const card = document.createElement('article');
        card.classList.add('card');
        const pTipoFig = document.createElement('p');
        pTipoFig.appendChild(document.createTextNode(figurita.tipo));
        card.appendChild(pTipoFig);
        const pAnio = document.createElement('p');
        pAnio.appendChild(document.createTextNode(figurita.año));
        card.appendChild(pAnio);
        card.innerHTML +=
    `<img src="${figurita.imagen}" alt="${figurita.alt}" class="${figurita.claseImg}">
<p>Pais: ${figurita.pais}</p>`;
const botonFav=document.createElement('button');
botonFav.classList.add('boton-fav');
botonFav.appendChild(document.createTextNode('🤍'));
card.appendChild(botonFav);
        contenedorFig.appendChild(card);
    });
}
mostrarFiguritas();