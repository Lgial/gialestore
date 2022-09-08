import ItemList from '../ItemList;'
import ItemCount from '../ItemCount'
import React from 'react'
import { useEffect } from 'react';

const skins = [
	{
		id: 1,
		image:"../../Assets/fireserpent.png",
		title: "AK47 Fire Serpent",
	},
	{
		id: 2,
		image:"../../Assets/howl.png",
        title: "M4 Howl",
	},
	{	id: 3,
		image:"../../Assets/gutfade.png",
		title: "Gut Knife Fade",
	},
];

export const ItemListContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(skins);
            }, 3000)
        })
    })
    getData.then (res => setData(res))
  return (
    <div>
        <ItemCount/>
        <ItemList data={data}/>
    </div>
  )
}
