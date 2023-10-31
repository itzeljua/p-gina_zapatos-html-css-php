let btnMenu = document.getElementById('btn-menu');
let mainNav = document.getElementById('main-nav');
btnMenu.addEventListener('click', function(){
  menu.classList.toggle('mostrar');
});
//PRODUCTOS
const productos=[
  {
    id: "botas1",
    titulo: "Botas para dama negro",
    imagen: "C:\Users\Juare\OneDrive\Documentos\proyectojuanga\imagenes\p2.jpg",
    categoria:{
      nombre:"Botas",
      id:"botas"
    },
    precio: 575
  },
  {
    id: "botas2",
    titulo: "Botas negro",
    imagen: "C:\Users\Juare\OneDrive\Documentos\proyectojuanga\imagenes\p3.jpg",
    categoria:{
      nombre:"Botas",
      id:"botas"
    },
    precio: 600
  },
  {
    id: "botas3",
    titulo: "Botas",
    imagen: "C:\Users\Juare\OneDrive\Documentos\proyectojuanga\imagenes\p4.jpg",
    categoria:{
      nombre:"Botas",
      id:"botas"
    },
    precio: 354
  },
  {
    id: "botas4",
    titulo: "Botas (moderna)",
    imagen: "C:\Users\Juare\OneDrive\Documentos\proyectojuanga\imagenes\p5.jpg",
    categoria:{
      nombre:"Botas",
      id:"botas"
    },
    precio: 698
  }


]