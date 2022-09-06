import React from 'react'
import {useState} from "react"
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial); 
    const [itemStock, setItemStock] = useState(stock); 
    const [itemAdd, setItemAdd] = useState(onAdd);

    const decrease = (valor) => {
        if (valor > 0) {
            setCantidad(valor);
        }
    }

    const increase = (valor) => {
        if (valor <= itemStock) {
            setCantidad(valor);
        }
    }

    const addProducts = () => {
        if (cantidad <= itemStock) {
            setItemStock(itemStock - cantidad);
            setItemAdd(itemAdd + cantidad);
        }   
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-2">
                    <p className="text-center">Nombre del Producto</p>
                    <div className="input-group">
                        <input type="button" className="btn btn-secondary" value="-" onClick={() => {decrease(cantidad - 1)}} />
                        <input type="text" className="form-control" value={cantidad} onChange={() => {}} />
                        <input type="button" className="btn btn-secondary" value="+" onClick={() => {increase(cantidad + 1)}} />
                    </div>
                    <div className="d-grid gap-2 py-3">
                        <input type="button" className="btn btn-secondary" value="Agregar al carrito" onClick={() => {addProducts()}} />       
                    </div>
                    <p>Productos Seleccionados: {itemAdd}</p>
                </div>
            </div>            
        </div>   
    )
};

export default ItemCount;