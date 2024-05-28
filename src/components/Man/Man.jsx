import { Route, Routes, Link} from 'react-router-dom'
import './Man.css'

const Kids = () => {
  return (
    <div className='man'>
        <div className='shoes'>
            <ul>
                <div>SHOES</div>
                <li><Link to="snikers">Snikers</Link></li>
                <li><Link to="running">Running</Link></li>
                <li><Link to="slides&sandals">Slides & Sandals</Link></li>
                <li><Link to="walking">Walking</Link></li>
            </ul>
        </div>

        <div className='clothing'>
            <ul>
                <div>CLOTHING</div>
                <li><Link to="t-shorts&tops">T-Shorts & Tops</Link></li>
                <li><Link to="shorts">Shorts</Link></li>
                <li><Link to="dresses & skirts">Dresses & Skirts</Link></li>
                <li><Link to="plus size">Plus Size</Link></li>
            </ul>
        </div>

        <div className='shop_by_sport'>
            <ul>
                <div>SHOP BY SPORT</div>
                <li><Link to="basketball">Basketball</Link></li>
                <li><Link to="cycking">Cycking</Link></li>
                <li><Link to="golf">Golf</Link></li>
                <li><Link to="hiking">Hiking</Link></li>
            </ul>
        </div>
      

        <Routes>
            <Route path="snikers" element={<div>snikers</div>} />
            <Route path="running" element={<div>Running</div>} />
            <Route path="slides&sandals" element={<div>Slides&Sandals</div>} />
            <Route path="walking" element={<div>Walking</div>} />

            <Route path="t-shorts&tops" element={<div>T-Shorts&Tops</div>} />
            <Route path="shorts" element={<div>Shorts</div>} />
            <Route path="plus size" element={<div>Plus Size</div>} />
            <Route path="dresses & skirts" element={<div>Dresses & Skirts</div>} />
            
            <Route path="basketball" element={<div>Basketball</div>} />
            <Route path="cycking" element={<div>Cycking</div>} />
            <Route path="golf" element={<div>Golf</div>} />
            <Route path="hiking" element={<div>Hiking</div>} />

        </Routes>
    </div>

  )
}

export default Kids