
import React from 'react';
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

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
      nombre: "Compresor a tornillo",
      descripcion: "Soluciones industriales para cámaras y procesos.",
      imagen: "/Productos/refrigeracion.jpg",
      categoria: "refrigeracion"
    },
    {
      id: "5",
      nombre: "Aeroenfriador de flujo vertical.",
      descripcion: "Gas y Petróleo",
      imagen: "/Productos/gaspetroleo.jpg",
      categoria: "gas-petroleo"
    },
    {
      id: "6",
      nombre: "Tigombu",
      descripcion: "Biogás",
      imagen: "/Productos/biogas.png",
      categoria: "biogas"
    },     
    {
      id: "7",
      nombre: "Compresor a tornillo",
      descripcion: "Soluciones industriales para cámaras y procesos.",
      imagen: "/Productos/refrigeracion.jpg",
      categoria: "refrigeracion"
    },
    {
      id: "8",
      nombre: "Aeroenfriador de flujo vertical.",
      descripcion: "Gas y Petróleo",
      imagen: "/Productos/gaspetroleo.jpg",
      categoria: "gas-petroleo"
    },
    {
      id: "9",
      nombre: "Tigombu",
      descripcion: "Biogás",
      imagen: "/Productos/biogas.png",
      categoria: "biogas"
    },
        {
      id: "10",
      nombre: "Compresor a tornillo",
      descripcion: "Soluciones industriales para cámaras y procesos.",
      imagen: "/Productos/refrigeracion.jpg",
      categoria: "refrigeracion"
    },
        {
      id: "11",
      nombre: "Aeroenfriador de flujo vertical.",
      descripcion: "Gas y Petróleo",
      imagen: "/Productos/gaspetroleo.jpg",
      categoria: "gas-petroleo"
    },
        {
      id: "12",
      nombre: "Tigombu",
      descripcion: "Biogás",
      imagen: "/Productos/biogas.png",
      categoria: "biogas"
    },
    

];

const ImportarProductos = () => {
  const importarProductosAFirebase = async () => {
    try {
      for (const producto of productos) {
        const docRef = doc(db, "productos", producto.id);
        await setDoc(docRef, producto);
        console.log(`Producto ${producto.nombre} importado.`);
      }
      alert("Importación completa.");
    } catch (error) {
      console.error("Error al importar productos:", error);
      alert("Error en la importación, revisa la consola.");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Importar productos a Firebase (solo una vez)</h2>
      <button onClick={importarProductosAFirebase}>Importar productos</button>
    </div>
  );
};

export default ImportarProductos;
