import { useEffect, useState } from 'react';
import { products } from '../mock/products'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                const product = products.find((prod) => prod.id === 1);
                setTimeout(() => {
                    res(product);
                }, 500);
            });

        getProduct().then((info) => {setItem(info);})
            .catch((error) => {
                console.log(error);
            });
    }, [detalleId]);

    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
