const ItemDetail = ( {item}) =>{
    return(
        <div className='fondo'>
            <p className='text'> Informacion sobre : {item.titulo}</p>
            <img className="ItemDetalle" src={item.imgSrc} />
        </div>
    )
};
export default ItemDetail;