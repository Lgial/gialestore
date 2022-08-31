import './Lista.css';
import React from 'react'

const Lista = (props) => {
    const {
        products,
    } = props;
  return (
    <div>
        {
            products.map((objeto) => {
              return  <li className='lista'>{objeto}</li>

            })
        }
    </div>
  )
}
export default Lista