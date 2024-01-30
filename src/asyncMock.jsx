const products = [
    {
        id: '1',
        name: 'Nike Dunk Low - Team Red',
        description: 'Avance rápido. Rebobinar. No importa, esta zapatilla lleva lo retro al futuro.',
        img: 'https://imgnike-a.akamaihd.net/768x768/017077P1.jpg',
        price: 200,
        category: 'nike',
        stock: 4
    },
    {
        id: '2',
        name: 'Nike Dunk Low - Safari Swoosh Chlorophy',
        description: 'Creado para la cancha pero conquistado en las calles, el ícono del baloncesto de los 80 regresa con detalles clásicos y un toque retro.',
        img: 'https://imgnike-a.akamaihd.net/768x768/025288NX.jpg',
        price: 190,
        category: 'nike',
        stock: 6
    },
    {
        id: '3',
        name: 'Adidas Forum 84 High Blue',
        description: 'Salieron a la venta por primera vez en 1984, luego en 1990 en una versión editada, y hoy, las zapatillas adidas Forum llegan con toda su fuerza para cumplir con los estándares de los más grandes sneakerheads.',
        img: 'https://th.bing.com/th/id/OIP.LmRTVdbIf-8g5PY_T0-NmwHaHa?rs=1&pid=ImgDetMain',
        price: 180,
        category: 'adidas',
        stock: 12
    },
    {
        id: '4',
        name: 'Adidas Grand Court 2.0',
        description: '¡Mejora tu estilo moderno y original con las zapatillas Adidas Grand Court 2.0! Perfectas para el uso diario, estas zapatillas Adidas cuentan con amortiguación y estabilidad durante tu zancada.',
        img: 'https://static.netshoes.com.br/produtos/tenis-adidas-grand-court-20-feminino/28/3ZP-8900-028/3ZP-8900-028_zoom1.jpg?ts=1702295024&ims=544x',
        price: 190,
        category: 'adidas',
        stock: 3
    },
    {
        id: '5',
        name: 'Puma RS Metric',
        description: 'La zapatilla Rs-Metric es ideal para ti que priorizas la calidad, la comodidad y mucho estilo a la hora de realizar tus actividades.',
        img: 'https://ekj5hnw5qse.exactdn.com/wp-content/uploads/2023/05/1-21.png?strip=all&lossy=1&sharp=1&ssl=1',
        price: 210,
        category: 'puma',
        stock: 4
    },
    {
        id: '6',
        name: 'Puma Prime Rs-Metric',
        description: 'La zapatilla Prime Rs-Metric es ideal para ti que priorizas la calidad, la comodidad y mucho estilo a la hora de realizar tus actividades.',
        img: 'https://imgcentauro-a.akamaihd.net/768x768/974511FR.jpg',
        price: 240,
        category: 'puma',
        stock: 7
    },
    {
        id: '7',
        name: 'Lacoste Neo Athleisure - Off White',
        description: '¡Apuesta por el estilo! Las Zapatillas Lacoste Neo Athleisure son la apuesta adecuada para acompañar tus outfits urbanos.',
        img: 'https://static.netshoes.com.br/produtos/tenis-lacoste-neo-athleisure-sneakers-masculino/05/D66-8764-205/D66-8764-205_zoom1.jpg?ts=1697040281&ims=544x',
        price: 350,
        category: 'lacoste',
        stock: 0
    }, 
    {
        id: '8',
        name: 'Lacoste Court Cage - 082',
        description: 'Inspiradas en el tenis, diseñadas para la vida diaria. Nuestras zapatillas Court Cage son una versión fresca y creativa del estilo Lacoste. Un modelo versátil y urbano con detalles emblemáticos de la marca.',
        img: 'https://f.fcdn.app/imgs/7ce8c9/www.zooko.com.uy/zoo/daf3/original/catalogo/LC43SMA0060-082-1/460x460/lacoste-court-cage-black.jpg',
        price: 350,
        category: 'lacoste',
        stock: 1
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}
