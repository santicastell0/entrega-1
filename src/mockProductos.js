const productos = [
    {
      id: "1",
      nombre: "Compresor a tornillo",
      descripcion: "Soluciones industriales para cámaras y procesos.",
      imagen: "/Productos/refrigeracion.jpg",
      categoria: "refrigeracion"
    },
    {
      id: "2",
      nombre: "Aeroenfriador de flujo vertical.",
      descripcion: "Gas y Petróleo",
      imagen: "/Productos/gaspetroleo.jpg",
      categoria: "gas-petroleo"
    },
    {
      id: "3",
      nombre: "Tigombu",
      descripcion: "Biogás",
      imagen: "/Productos/biogas.png",
      categoria: "biogas"
    },
    {
      id: "4",
      nombre: "Tigombu",
      descripcion: "Biogás",
      imagen: "/Productos/biogas.png",
      categoria: "biogas"
    },
    {
      id: "5",
      nombre: "Tigombu",
      descripcion: "Biogás",
      imagen: "/Productos/biogas.png",
      categoria: "biogas"
    }
    ,
    {
      id: "6",
      nombre: "Tigombu",
      descripcion: "Biogás",
      imagen: "/Productos/biogas.png",
      categoria: "biogas"
    }
    ,
    {
      id: "7",
      nombre: "Tigombu",
      descripcion: "Biogás",
      imagen: "/Productos/biogas.png",
      categoria: "biogas"
    }
    ,
    {
      id: "8",
      nombre: "Tigombu",
      descripcion: "Biogás",
      imagen: "/Productos/biogas.png",
      categoria: "biogas"
    },
    {
      id: "9",
      nombre: "Tigombu",
      descripcion: "Biogás",
      imagen: "/Productos/biogas.png",
      categoria: "biogas"
    }
  ]
  
  
  export const getProductos = () => {
    return new Promise((res) => {
      setTimeout(() => {
        res(productos)
      }, 1000)
    })
  }
  