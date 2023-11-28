
const products =[
    {
        
        id: '1',
        imagen: 'https://i.ibb.co/BgqLcmR/producto1.jpg',
        nombre: 'Monitor Asus VP228HE 21.5" 75hz', 
        precio: 93000,
        category: 'perifericos',
        descripcion: 'Monitor Asus VP228HE 21.5" 75hz',
        stock: 5
    },

    {    
        id: '2',
        imagen: 'https://i.ibb.co/wR1YP6j/producto2.jpg',
        nombre: 'MSI Rtx3090 Ventus 3X OC', 
        precio: 850000,
        category: 'hardware',
        descripcion: 'MSI Rtx3090 Ventus 3X OC',
        stock: 4
    },

    {    
        id: '3',
        imagen: 'https://i.ibb.co/KwfV0wP/producto3.jpg',
        nombre: 'Fuente Be Quiet 1000W Gold', 
        precio: 115000,
        category: 'hardware',
        descripcion: 'MSI Rtx3090 Ventus 3X OC',
        stock: 10
    },

    {    
        id: '4',
        imagen: 'https://i.ibb.co/82BG4k1/producto4.jpg',
        nombre: 'Notebook Asus TUF FX506L FHD 15.6"', 
        precio: 680000,
        category: 'notebooks',
        descripcion: 'Notebook Asus TUF FX506L FHD 15.6"',
        stock: 3
    },

    {    
        id: '5',
        imagen: 'https://i.ibb.co/YhBDYJq/producto5.jpg',
        nombre: 'Gabinete Lian Li O11 Dynamic XL', 
        precio: 220000,
        category: 'perifericos',
        descripcion: 'Gabinete Lian Li O11 Dynamic XL',
        stock: 4
    },

    {    
        id: '6',
        imagen: 'https://i.ibb.co/b7Ymx9P/producto6.jpg',
        nombre: 'Auriculares HyperX Cloud Flight Black', 
        precio: 85000,
        category: 'perifericos',
        descripcion: 'Auriculares HyperX Cloud Flight Black',
        stock: 10
    },

    {    
        id: '7',
        imagen: 'https://i.ibb.co/QQh1wqP/producto7.jpg',
        nombre: 'Kingston DDR4 8GB 3200MHz Fury Beast', 
        precio: 60000,
        category: 'hardware',
        descripcion: 'Kingston DDR4 8GB 3200MHz Fury Beast',
        stock: 12
    },

    {    
        id: '8',
        imagen: 'https://i.ibb.co/mytkwg8/producto8.jpg',
        nombre: 'Cooler CPU ID-Cooling ZOOMFLOW XT 240', 
        precio: 65000,
        category: 'hardware',
        descripcion: 'Cooler CPU ID-Cooling ZOOMFLOW XT 240',
        stock: 10
    },

    {    
        id: '9',
        imagen: 'https://i.ibb.co/JKv6MX0/producto9.jpg',
        nombre: 'Mother ASUS ROG Z790-E GAMING WIFI', 
        precio: 500000,
        category: 'hardware',
        descripcion: 'Mother ASUS ROG Z790-E GAMING WIFI',
        stock: 2
    },

    {    
        id: '10',
        imagen: 'https://i.ibb.co/XkLpD9C/producto10.jpg',
        nombre: 'AMD Ryzen™ 9 7900X 5.6GHz AM5', 
        precio: 560000,
        category: 'hardware',
        descripcion: 'AMD Ryzen™ 9 7900X 5.6GHz AM5',
        stock: 5
    },

    {    
        id: '11',
        imagen: 'https://i.ibb.co/qgc21wy/producto11.jpg',
        nombre: 'Joystick PS5 Sony Dualsense Gray Camo', 
        precio: 80000,
        category: 'perifericos',
        descripcion: 'Joystick PS5 Sony Dualsense Gray Camo',
        stock: 15
    },

    {    
        id: '12',
        imagen: 'https://i.ibb.co/cb7qMqD/producto12.jpg',
        nombre: 'Disco M.2 WD 500GB Black SN850 Gen4', 
        precio: 105000,
        category: 'hardware',
        descripcion: 'Disco M.2 WD 500GB Black SN850 Gen4',
        stock: 9
    },

    {    
        id: '13',
        imagen: 'https://i.ibb.co/FhLsfLw/producto13.jpg',
        nombre: 'Notebook ASUS X515EA', 
        precio: 650000,
        category: 'notebooks',
        descripcion: 'Notebook ASUS X515EA',
        stock: 4
    },

    {    
        id: '14',
        imagen: 'https://i.ibb.co/DrdVSWv/producto14.png',
        nombre: 'Notebook Lenovo Legion 5 Gen 6', 
        precio: 1500000,
        category: 'notebooks',
        descripcion: 'Notebook ASUS X515EA',
        stock: 3
    },

    {    
        id: '15',
        imagen: 'https://i.ibb.co/KW7dMHL/producto15.jpg',
        nombre: 'Notebook 15" Lenovo V15 G3', 
        precio: 1035000,
        category: 'notebooks',
        descripcion: 'Notebook 15" Lenovo V15 G3',
        stock: 3
    },

    {    
        id: '16',
        imagen: 'https://i.ibb.co/frbbsmj/producto16.jpg',
        nombre: 'Memoria DDR5 16GB Kingston Fury Renegade', 
        precio: 149000,
        category: 'hardware',
        descripcion: 'Memoria DDR5 RGB Silver Black',
        stock: 3
    }
]


export const getProducts = ()=>{

    return new Promise((resolve)=>{

        setTimeout(()=>{
            resolve(products)
        },500)
    })
}


export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}


export const getProductByCategory = (categoryId)=>{

    return new Promise((resolve)=>{

        setTimeout( ()=>{
            resolve(products.filter( prod=>prod.category === categoryId))
        },500)
    })

}

