import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getAllProducts from "./Productos";
import ItemDetail from "./ItemDetail"
import Producto from "./Productos";

const ItemDetailContainer =() => {
const [item, setItem] =useState({})
const {id}= useParams()
console.log(id)
useEffect(() => {
    const getData = () => {
        return getAllProducts((resolve, reject) => {
          setTimeout(() => {
              resolve(Producto)
          }, 3000);
        }
        )
    }
    getData().then(item => setItem(item.find((item)=> item.id === Number(id))));
},[id])
console.log(item)
    return( <div className="text"> <ItemDetail item={item}/> <p>Id: {id}</p> <p>Precio {item.precio}</p> </div>
    )
}
export default ItemDetailContainer;