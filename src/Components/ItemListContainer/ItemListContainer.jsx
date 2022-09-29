import ItemList from '../ItemList/ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoriaId} = useParams();

    useEffect(() => {
		const querydb = getFirestore();
		const queryCollection = collection(querydb, "products");
		if (categoriaId) {
			const queryFilter = query(
				queryCollection,
				where("categoria", "==", categoriaId),
			);
			getDocs(queryFilter).then((res) =>
				setItems(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		} else {
			getDocs(queryCollection).then((res) =>
				setItems(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		}
	}, [categoriaId]);

  return (
    <div>
        <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer;
