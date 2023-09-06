const Productos = [
  {
    imgSrc: "./public/assets/Camiseta-Argentina.jpg",
    id: 1,
    titulo: "Camiseta Argentina Titular",
    precio: "$30.000",
    categoria: "Camiseta",
    descripcion: "....",
  },
  {
    imgSrc: "../img/Camiseta-Argentina.jpg",
    id: 2,
    titulo: "Camiseta Argentina Suplente ",
    precio: "$31500",
    categoria: "Camiseta",
    descripcion: "...",
  },
];
const getAllProducts = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      return resolve(Productos);
    }, 2000);
  });
  return promise;
};
export default getAllProducts;
