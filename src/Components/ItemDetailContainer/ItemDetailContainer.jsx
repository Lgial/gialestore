import { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
		const querydb = getFirestore();
		const queryDoc = doc(querydb, "products", detalleId);
		getDoc(queryDoc).then((res) => setItem({ id: res.id, ...res.item() }));
	}, [detalleId]);

    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
