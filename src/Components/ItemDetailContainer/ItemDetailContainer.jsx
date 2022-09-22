import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
const products = [
    {id:1, nombre:"AK Fire Serpent", descripcion:"Legend",imagen:"https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9zdGVhbWNvbW11bml0eS1hLmFrYW1haWhkLm5ldC9lY29ub215L2ltYWdlLy05YTgxZGxXTHdKMlVVR2NWc19uc1Z0emRPRWR0V3dLR1paTFFIVHhEWjdJNTZLVTBad3dvNE5VWDRvRkpaRUhMYlhINUFwZU80WW1saHhZUWtuQ1J2Q28wNERFVmx4a0tncG90N0h4ZkRoanhzek9lQzlIXzlta2hJV0ZnOGoxT08tR3FXbEQ2ZE4tdGVYSThvVGh0MWkxdVJRNWZXRHdMWWJBZFZCcVlWSFJyd0Mya083cmhwTHE2Sl9JelhFMnVuRnhzMy1KbWtHMjAwb2ZaLUp4eGF2SktaaU90NGsvNTEyeDM4NA--/auto/auto/85/notrim/3ef2ffaed1a9547f17c53fbb7aff3687.webp", categoria:'skins1', precio:12000},
    {id:2, nombre:"M4 Howl", descripcion:"Legend", imagen:"https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9zdGVhbWNvbW11bml0eS1hLmFrYW1haWhkLm5ldC9lY29ub215L2ltYWdlLy05YTgxZGxXTHdKMlVVR2NWc19uc1Z0emRPRWR0V3dLR1paTFFIVHhEWjdJNTZLVTBad3dvNE5VWDRvRkpaRUhMYlhINUFwZU80WW1saHhZUWtuQ1J2Q28wNERFVmx4a0tncG91LTZrZWpoanhzekZKVHdUMDlTNWc0eUNtZkRMUDdMV25uOXU1TVJqamV5UDl0cWhpUTJ5cUVvNk1tbjNkb1BCY3dacVpRclJyMU8td2Vfc2dNTzV0Wl9CekNGcjZ5Y2x0bUdkd1VMYTF2R0pGZy81MTJ4Mzg0/auto/auto/85/notrim/e41a19771964b64e16f7449a152ccc15.webp", categoria:'skins1', precio:50000},
    {id:3, nombre:"Gut Knife", descripcion:"Epic", imagen:"https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9zdGVhbWNvbW11bml0eS1hLmFrYW1haWhkLm5ldC9lY29ub215L2ltYWdlLy05YTgxZGxXTHdKMlVVR2NWc19uc1Z0emRPRWR0V3dLR1paTFFIVHhEWjdJNTZLVTBad3dvNE5VWDRvRkpaRUhMYlhINUFwZU80WW1saHhZUWtuQ1J2Q28wNERFVmx4a0tncG92YlNzTFFKZjFPYmNUanhEMDlxM2tJVzBtXzd6TzZfdW1tcEQ3OEFfM095WnJJLW4yd1BrX1JZOU5UcndJTk9TZFFjOU1scldfZ2ZxbGJ1OWpKSzR1Sm1Zd0NCbHZUNWl1eWhHSEFnY1lnLzUxMngzODQ-/auto/auto/85/notrim/3040e32b9b6889ae9b7d9bfcff5f45c4.webp", categoria: 'skins2', precio:10000},
];

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const getProduct = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 500)
        })

        getProduct.then(res => setItem(res.find(skins1 => skins1.id === parseInt(detalleId))))
    }, [detalleId]);

    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
