import { Route, Routes, Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';

import img1 from '../../assets/snikers/snikers-1.avif'
import img2 from '../../assets/snikers/snikers-2.avif'
import img3 from '../../assets/snikers/snikers-3.avif'
import img4 from '../../assets/snikers/snikers-4.avif'
import img5 from '../../assets/snikers/snikers-5.avif'
import img6 from '../../assets/snikers/snikers-6.avif'
import img7 from '../../assets/snikers/snikers-7.avif'
import img8 from '../../assets/snikers/snikers-8.avif'
import img9 from '../../assets/snikers/snikers-9.avif'
import img10 from '../../assets/snikers/snikers-10.avif'
import img11 from '../../assets/snikers/snikers-11.avif'
import img12 from '../../assets/snikers/snikers-12.avif'
import img13 from '../../assets/snikers/snikers-13.avif'
import img14 from '../../assets/snikers/snikers-14.avif'
import img15 from '../../assets/snikers/snikers-15.avif'
import img16 from '../../assets/snikers/snikers-16.avif'
import img17 from '../../assets/snikers/snikers-17.avif'
import img18 from '../../assets/snikers/snikers-18.avif'
import img19 from '../../assets/snikers/snikers-19.avif'
import img20 from '../../assets/snikers/snikers-20.avif'

import running1 from '../../assets/running/running-1.avif'
import running2 from '../../assets/running/running-2.avif'
import running3 from '../../assets/running/running-3.avif'
import running4 from '../../assets/running/running-4.avif'
import running5 from '../../assets/running/running-5.avif'
import running6 from '../../assets/running/running-6.avif'
import running7 from '../../assets/running/running-7.avif'
import running8 from '../../assets/running/running-8.avif'
import running9 from '../../assets/running/running-9.avif'
import running10 from '../../assets/running/running-10.avif'
import running11 from '../../assets/running/running-11.avif'
import running12 from '../../assets/running/running-12.avif'
import running13 from '../../assets/running/running-13.avif'
import running14 from '../../assets/running/running-14.avif'
import running15 from '../../assets/running/running-15.avif'
import running16 from '../../assets/running/running-16.avif'
import running17 from '../../assets/running/running-17.avif'
import running18 from '../../assets/running/running-18.avif'
import running19 from '../../assets/running/running-19.avif'
import running20 from '../../assets/running/running-20.avif'

import sandals1 from '../../assets/slides_sandals/sandals-1.avif'
import sandals2 from '../../assets/slides_sandals/sandals-2.avif'
import sandals3 from '../../assets/slides_sandals/sandals-3.avif'
import sandals4 from '../../assets/slides_sandals/sandals-4.avif'
import sandals5 from '../../assets/slides_sandals/sandals-5.avif'
import sandals6 from '../../assets/slides_sandals/sandals-6.avif'
import sandals7 from '../../assets/slides_sandals/sandals-7.avif'
import sandals8 from '../../assets/slides_sandals/sandals-8.avif'
import sandals9 from '../../assets/slides_sandals/sandals-9.avif'
import sandals10 from '../../assets/slides_sandals/sandals-10.avif'
import sandals11 from '../../assets/slides_sandals/sandals-11.avif'
import sandals12 from '../../assets/slides_sandals/sandals-12.avif'
import sandals13 from '../../assets/slides_sandals/sandals-13.avif'
import sandals14 from '../../assets/slides_sandals/sandals-14.avif'
import sandals15 from '../../assets/slides_sandals/sandals-15.avif'
import sandals16 from '../../assets/slides_sandals/sandals-16.avif'
import sandals17 from '../../assets/slides_sandals/sandals-17.avif'
import sandals18 from '../../assets/slides_sandals/sandals-18.avif'
import sandals19 from '../../assets/slides_sandals/sandals-19.avif'
import sandals20 from '../../assets/slides_sandals/sandals-20.avif'

import walking1 from '../../assets/walking/walking-1.avif'
import walking2 from '../../assets/walking/walking-2.avif'
import walking3 from '../../assets/walking/walking-3.avif'
import walking4 from '../../assets/walking/walking-4.avif'
import walking5 from '../../assets/walking/walking-5.avif'
import walking6 from '../../assets/walking/walking-6.avif'
import walking7 from '../../assets/walking/walking-7.avif'
import walking8 from '../../assets/walking/walking-8.avif'
import walking9 from '../../assets/walking/walking-9.avif'
import walking10 from '../../assets/walking/walking-10.avif'
import walking11 from '../../assets/walking/walking-11.avif'
import walking12 from '../../assets/walking/walking-12.avif'
import walking13 from '../../assets/walking/walking-13.avif'
import walking14 from '../../assets/walking/walking-14.avif'
import walking15 from '../../assets/walking/walking-15.avif'
import walking16 from '../../assets/walking/walking-16.avif'
import walking17 from '../../assets/walking/walking-17.avif'
import walking18 from '../../assets/walking/walking-18.avif'
import walking19 from '../../assets/walking/walking-19.avif'
import walking20 from '../../assets/walking/walking-20.avif'

import tops1 from '../../assets/t-shorts_tops/t-shorts-1.avif'
import tops2 from '../../assets/t-shorts_tops/t-shorts-2.avif'
import tops3 from '../../assets/t-shorts_tops/t-shorts-3.avif'
import tops4 from '../../assets/t-shorts_tops/t-shorts-4.avif'
import tops5 from '../../assets/t-shorts_tops/t-shorts-5.avif'
import tops6 from '../../assets/t-shorts_tops/t-shorts-6.avif'
import tops7 from '../../assets/t-shorts_tops/t-shorts-7.avif'
import tops8 from '../../assets/t-shorts_tops/t-shorts-8.avif'
import tops9 from '../../assets/t-shorts_tops/t-shorts-9.avif'
import tops10 from '../../assets/t-shorts_tops/t-shorts-10.avif'
import tops11 from '../../assets/t-shorts_tops/t-shorts-11.avif'
import tops12 from '../../assets/t-shorts_tops/t-shorts-12.avif'
import tops13 from '../../assets/t-shorts_tops/t-shorts-13.avif'
import tops14 from '../../assets/t-shorts_tops/t-shorts-14.avif'
import tops15 from '../../assets/t-shorts_tops/t-shorts-15.avif'
import tops16 from '../../assets/t-shorts_tops/t-shorts-16.avif'
import tops17 from '../../assets/t-shorts_tops/t-shorts-17.avif'
import tops18 from '../../assets/t-shorts_tops/t-shorts-18.avif'
import tops19 from '../../assets/t-shorts_tops/t-shorts-19.avif'
import tops20 from '../../assets/t-shorts_tops/t-shorts-20.avif'

import shorts1 from '../../assets/shorts/shorts-1.avif'
import shorts2 from '../../assets/shorts/shorts-2.avif'
import shorts3 from '../../assets/shorts/shorts-3.avif'
import shorts4 from '../../assets/shorts/shorts-4.avif'
import shorts5 from '../../assets/shorts/shorts-5.avif'
import shorts6 from '../../assets/shorts/shorts-6.avif'
import shorts7 from '../../assets/shorts/shorts-7.avif'
import shorts8 from '../../assets/shorts/shorts-8.avif'
import shorts9 from '../../assets/shorts/shorts-9.avif'
import shorts10 from '../../assets/shorts/shorts-10.avif'
import shorts11 from '../../assets/shorts/shorts-11.avif'
import shorts12 from '../../assets/shorts/shorts-12.avif'
import shorts13 from '../../assets/shorts/shorts-13.avif'
import shorts14 from '../../assets/shorts/shorts-14.avif'
import shorts15 from '../../assets/shorts/shorts-15.avif'
import shorts16 from '../../assets/shorts/shorts-16.avif'
import shorts17 from '../../assets/shorts/shorts-17.avif'
import shorts18 from '../../assets/shorts/shorts-18.avif'
import shorts19 from '../../assets/shorts/shorts-19.avif'
import shorts20 from '../../assets/shorts/shorts-20.avif'

import size1 from '../../assets/plus_size/plus-1.avif'
import size2 from '../../assets/plus_size/plus-2.avif'
import size3 from '../../assets/plus_size/plus-3.avif'
import size4 from '../../assets/plus_size/plus-4.avif'
import size5 from '../../assets/plus_size/plus-5.avif'
import size6 from '../../assets/plus_size/plus-6.avif'
import size7 from '../../assets/plus_size/plus-7.avif'
import size8 from '../../assets/plus_size/plus-8.avif'
import size9 from '../../assets/plus_size/plus-9.avif'
import size10 from '../../assets/plus_size/plus-10.avif'
import size11 from '../../assets/plus_size/plus-11.avif'
import size12 from '../../assets/plus_size/plus-12.avif'
import size13 from '../../assets/plus_size/plus-13.avif'
import size14 from '../../assets/plus_size/plus-14.avif'
import size15 from '../../assets/plus_size/plus-15.avif'
import size16 from '../../assets/plus_size/plus-16.avif'
import size17 from '../../assets/plus_size/plus-17.avif'
import size18 from '../../assets/plus_size/plus-18.avif'
import size19 from '../../assets/plus_size/plus-19.avif'
import size20 from '../../assets/plus_size/plus-20.avif'
import './Women.css'


const Kids = () => {
  return (
    <div className='women'>
     
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
        
      
        <div className='cards'>
            <Routes>
                <Route path="snikers" element={<div className='shikers'>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Originals
                                </Card.Text>
                                <Card.Text>$120</Card.Text>
                                <Card.Text>20 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>GAZELLE SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Originals
                                </Card.Text>
                                <Card.Text>$100</Card.Text>
                                <Card.Text>6 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Originals
                                </Card.Text>
                                <Card.Text>$120</Card.Text>
                                <Card.Text>20 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img4} />
                            <Card.Body>
                                <Card.Title>NIZZA PLATFORM SHOES</Card.Title>
                                <Card.Text>
                                    Originals
                                </Card.Text>
                                <Card.Text>$80</Card.Text>
                                <Card.Text>2 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img5} />
                            <Card.Body>
                                <Card.Title>CLOUDFOAM PURE SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Sportswear
                                </Card.Text>
                                <Card.Text>$75</Card.Text>
                                <Card.Text>5 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img6} />
                            <Card.Body>
                                <Card.Title>CAMPUS 00S SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Originals
                                </Card.Text>
                                <Card.Text>$110</Card.Text>
                                <Card.Text>9 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img7} />
                            <Card.Body>
                                <Card.Title>GRAND COURT 2.0</Card.Title>
                                <Card.Text>
                                    Women's • Sportswear
                                </Card.Text>
                                <Card.Text>$70</Card.Text>
                                <Card.Text>2 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img8} />
                            <Card.Body>
                                <Card.Title>Y-3 GAZELLE</Card.Title>
                                <Card.Text>
                                    Y-3
                                </Card.Text>
                                <Card.Text>$350</Card.Text>
                                <Card.Text>6 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img9} />
                            <Card.Body>
                                <Card.Title>NMD_R1 SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Originals
                                </Card.Text>
                                <Card.Text>$130</Card.Text>
                                <Card.Text>12 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img10} />
                            <Card.Body>
                                <Card.Title>SWIFT RUN 1.0 SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Sportswear
                                </Card.Text>
                                <Card.Text>$90</Card.Text>
                                <Card.Text>4 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img11} />
                            <Card.Body>
                                <Card.Title>STAN SMITH X KSENIASCHNAIDER SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Originals
                                </Card.Text>
                                <Card.Text>$105</Card.Text>
                                <Card.Text>3 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img12} />
                            <Card.Body>
                                <Card.Title>OZWEEGO SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Originals
                                </Card.Text>
                                <Card.Text>$120</Card.Text>
                                <Card.Text>4 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img13} />
                            <Card.Body>
                                <Card.Title>SUPERSTAR LUX SHOES</Card.Title>
                                <Card.Text>
                                    Originals
                                </Card.Text>
                                <Card.Text>$150</Card.Text>
                                <Card.Text>4 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img14} />
                            <Card.Body>
                                <Card.Title>BUSENITZ VULC II SHOES</Card.Title>
                                <Card.Text>
                                    Originals
                                </Card.Text>
                                <Card.Text>$75</Card.Text>
                                <Card.Text>4 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img15} />
                            <Card.Body>
                                <Card.Title>SUPERSTAR XLG SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Originals
                                </Card.Text>
                                <Card.Text>$110</Card.Text>
                                <Card.Text>9 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img16} />
                            <Card.Body>
                                <Card.Title>SUPERSTAR XLG SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Originals
                                </Card.Text>
                                <Card.Text>$110</Card.Text>
                                <Card.Text>9 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img17} />
                            <Card.Body>
                                <Card.Title>SUPERSTAR XLG SHOES</Card.Title>
                                <Card.Text>
                                    Originals
                                </Card.Text>
                                <Card.Text>$110</Card.Text>
                                <Card.Text>5 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img18} />
                            <Card.Body>
                                <Card.Title>SUPERSTAR XLG SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Originals
                                </Card.Text>
                                <Card.Text>$110</Card.Text>
                                <Card.Text>9 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img19} />
                            <Card.Body>
                                <Card.Title>GAZELLE INDOOR SHOES</Card.Title>
                                <Card.Text>
                                    Originals
                                </Card.Text>
                                <Card.Text>$150</Card.Text>
                                <Card.Text>2 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img20} />
                            <Card.Body>
                                <Card.Title>VL COURT 3.0 SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Sportswear
                                </Card.Text>
                                <Card.Text>$75</Card.Text>
                                <Card.Text>3 colors</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>} />
                <Route path="running" element={<div className='running'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running1} />
                        <Card.Body>
                            <Card.Title>ADIZERO ADIOS PRO 3 M</Card.Title>
                            <Card.Text>
                                Running
                            </Card.Text>
                            <Card.Text>$250</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running2} />
                        <Card.Body>
                            <Card.Title>ADIZERO TAKUMI SEN 10 W</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$180</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running3} />
                        <Card.Body>
                            <Card.Title>ADIZERO BOSTON 12 RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$160</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running4} />
                        <Card.Body>
                            <Card.Title>ADIZERO ADIOS PRO 3 RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$250</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running5} />
                        <Card.Body>
                            <Card.Title>ADIZERO ADIOS PRO 3 M</Card.Title>
                            <Card.Text>
                                Running
                            </Card.Text>
                            <Card.Text>$250</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running6} />
                        <Card.Body>
                            <Card.Title>ADIZERO PRIME X 2.0 STRUNG RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Running
                            </Card.Text>
                            <Card.Text>$300</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running7} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running8} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running9} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running10} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running11} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running12} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running13} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running14} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE W</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running15} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE W</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running16} />
                        <Card.Body>
                            <Card.Title>ADIZERO AVANTI SHOES</Card.Title>
                            <Card.Text>
                                Track & Field
                            </Card.Text>
                            <Card.Text>$150</Card.Text>
                            <Card.Text>10 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running17} />
                        <Card.Body>
                            <Card.Title>ADIZERO ADIOS 8 W</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$130</Card.Text>
                            <Card.Text>7 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running18} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running19} />
                        <Card.Body>
                            <Card.Title>ADIZERO SL RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={running20} />
                        <Card.Body>
                            <Card.Title>DURAMO 10 SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="slides&sandals" element={<div className='slides_sandals'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals1} />
                        <Card.Body>
                            <Card.Title>ADILETTE PLATFORM SLIDES</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals2} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Originals
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>15 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals3} />
                        <Card.Body>
                            <Card.Title>ADILETTE 22 SLIDES</Card.Title>
                            <Card.Text>
                                Originals
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals4} />
                        <Card.Body>
                            <Card.Title>ADILETTE PLATFORM SLIDES</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals5} />
                        <Card.Body>
                            <Card.Title>ADILETTE AQUA SLIDES</Card.Title>
                            <Card.Text>
                                Swim
                            </Card.Text>
                            <Card.Text>$25</Card.Text>
                            <Card.Text>10 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals6} />
                        <Card.Body>
                            <Card.Title>ZPLAASH SLIDES</Card.Title>
                            <Card.Text>
                                Sportswear
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals7} />
                        <Card.Body>
                            <Card.Title>ADILETTE COMFORT SLIDES</Card.Title>
                            <Card.Text>
                                Yoga
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>17 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals8} />
                        <Card.Body>
                            <Card.Title>ADILETTE 22 XLG SLIDES</Card.Title>
                            <Card.Text>
                                Originals
                            </Card.Text>
                            <Card.Text>$75 </Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals9} />
                        <Card.Body>
                            <Card.Title>ADILETTE COMFORT SLIDES</Card.Title>
                            <Card.Text>
                                Sportswear
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals10} />
                        <Card.Body>
                            <Card.Title>TERREX HYDROTERRA LIGHT SANDALS</Card.Title>
                            <Card.Text>
                            TERREX
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals11} />
                        <Card.Body>
                            <Card.Title>ADILETTE AQUA SLIDES</Card.Title>
                            <Card.Text>
                            Sportswear
                            </Card.Text>
                            <Card.Text>$25</Card.Text>
                            <Card.Text>10 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals12} />
                        <Card.Body>
                            <Card.Title>ADIFOM STAN SMITH MULES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>8 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals13} />
                        <Card.Body>
                            <Card.Title>ADILETTE 22 XLG SLIDES</Card.Title>
                            <Card.Text>
                                Originals
                            </Card.Text>
                            <Card.Text>$75</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals14} />
                        <Card.Body>
                            <Card.Title>ADILETTE SLIDES</Card.Title>
                            <Card.Text>
                                Originals
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals15} />
                        <Card.Body>
                            <Card.Title>ADILETTE LITE SLIDES</Card.Title>
                            <Card.Text>
                                Originals
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals16} />
                        <Card.Body>
                            <Card.Title>ADICANE CLOGS</Card.Title>
                            <Card.Text>
                                Sportswear
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals17} />
                        <Card.Body>
                            <Card.Title>ADILETTE AYOON SLIDES</Card.Title>
                            <Card.Text>
                                Originals
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>13 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals18} />
                        <Card.Body>
                            <Card.Title>TERREX HYDROTERRA SANDALS</Card.Title>
                            <Card.Text>
                                TERREX
                            </Card.Text>
                            <Card.Text>$75</Card.Text>
                            <Card.Text>10 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals19} />
                        <Card.Body>
                            <Card.Title>ADILETTE SLIDES</Card.Title>
                            <Card.Text>
                                Originals
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sandals20} />
                        <Card.Body>
                            <Card.Title>Y-3 SANDALS</Card.Title>
                            <Card.Text>
                                Y-3
                            </Card.Text>
                            <Card.Text>$300</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="walking" element={<div className='walking'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking1} />
                        <Card.Body>
                            <Card.Title>CLOUDFOAM PURE SHOES</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$75</Card.Text>
                            <Card.Text>10 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking2} />
                        <Card.Body>
                            <Card.Title>ULTRABOOST LIGHT SHOES</Card.Title>
                            <Card.Text>
                                Running
                            </Card.Text>
                            <Card.Text>$190</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking3} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE W</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>10 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking4} />
                        <Card.Body>
                            <Card.Title>ADIZERO SL RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking5} />
                        <Card.Body>
                            <Card.Title>RUNFALCON 3 RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking6} />
                        <Card.Body>
                            <Card.Title>ULTRABOOST 1.0 ADICOLOR</Card.Title>
                            <Card.Text>
                                Sportswear
                            </Card.Text>
                            <Card.Text>$190</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking7} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA STRIDE SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$110</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking8} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>10 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking9} />
                        <Card.Body>
                            <Card.Title>ADIDAS BY STELLA MCCARTNEY EARTHLIGHT 2.0 SHOES</Card.Title>
                            <Card.Text>
                                Women's • adidas by Stella McCartney
                            </Card.Text>
                            <Card.Text>$280</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking10} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA STRIDE SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$110</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking11} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>10 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking12} />
                        <Card.Body>
                            <Card.Title>ADIDAS BY STELLA MCCARTNEY ULTRABOOST LIGHT SHOES</Card.Title>
                            <Card.Text>
                                Women's • adidas by Stella McCartney
                            </Card.Text>
                            <Card.Text>$250</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking13} />
                        <Card.Body>
                            <Card.Title>ULTRABOOST 1.0 SHOES</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$133</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking14} />
                        <Card.Body>
                            <Card.Title>DURAMO SPEED RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$63</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking15} />
                        <Card.Body>
                            <Card.Title>ULTRABOOST 1.0 SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$133</Card.Text>
                            <Card.Text>14 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking16} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA STRIDE SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$99</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking17} />
                        <Card.Body>
                            <Card.Title>ADIDAS BY STELLA MCCARTNEY ULTRABOOST 20 SHOES</Card.Title>
                            <Card.Text>
                                Women's • adidas by Stella McCartney
                            </Card.Text>
                            <Card.Text>$161</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking18} />
                        <Card.Body>
                            <Card.Title>DURAMO SL WIDE RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$53</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking19} />
                        <Card.Body>
                            <Card.Title>ADIDAS BY STELLA MCCARTNEY ULTRABOOST LIGHT SHOES</Card.Title>
                            <Card.Text>
                                Women's • adidas by Stella McCartney
                            </Card.Text>
                            <Card.Text>$250</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={walking20} />
                        <Card.Body>
                            <Card.Title>4DFWD 3 W</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$110</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />  

                <Route path="t-shorts&tops" element={<div className='t-shorts_tops'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops1} />
                        <Card.Body>
                            <Card.Title>3-STRIPES TEE</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops2} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES PINSTRIPE TEE</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops3} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES TEE</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops4} />
                        <Card.Body>
                            <Card.Title>DESIGNED FOR TRAINING TANK TOP</Card.Title>
                            <Card.Text>
                                Women's • Training
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops5} />
                        <Card.Body>
                            <Card.Title>DESIGNED FOR TRAINING TEE</Card.Title>
                            <Card.Text>
                                Women's • Training
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops6} />
                        <Card.Body>
                            <Card.Title>PRIMEGREEN ESSENTIALS WARM-UP SLIM 3-STRIPES TRACK JACKET</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops7} />
                        <Card.Body>
                            <Card.Title>ADIDAS X FARM RIO TRAINING TANK TOP</Card.Title>
                            <Card.Text>
                                Women's • Training
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops8} />
                        <Card.Body>
                            <Card.Title>DYE ALLOVER PRINT TEE</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops9} />
                        <Card.Body>
                            <Card.Title>BREAK THE NORM TANK TOP</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$28</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops10} />
                        <Card.Body>
                            <Card.Title>HIIT AIRCHILL TRAINING TEE</Card.Title>
                            <Card.Text>
                                Women's • Training
                            </Card.Text>
                            <Card.Text>$46</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops11} />
                        <Card.Body>
                            <Card.Title>TIRO 24 TRAINING JACKET</Card.Title>
                            <Card.Text>
                                Women's • Soccer
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops12} />
                        <Card.Body>
                            <Card.Title>ADICOLOR TREFOIL BOXY TEE</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops13} />
                        <Card.Body>
                            <Card.Title>ADICOLOR TREFOIL BOXY TEE</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops14} />
                        <Card.Body>
                            <Card.Title>FLORAL MESH GRAPHIC TEE</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$30</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops15} />
                        <Card.Body>
                            <Card.Title>ADIDAS X FARM RIO TIRO TRACK JACKET</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops16} />
                        <Card.Body>
                            <Card.Title>ADIDAS X FARM RIO GRAPHIC TEE</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops17} />
                        <Card.Body>
                            <Card.Title>ALL SZN 3-STRIPES GARMENT WASH BABY TEE </Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$21</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops18} />
                        <Card.Body>
                            <Card.Title>CITY ESCAPE LOOSE CROP TEE</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$28</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops19} />
                        <Card.Body>
                            <Card.Title>3-STRIPES CROP TOP</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$28</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tops20} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS LOOSE FIREBIRD TRACK TOP</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$72</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="shorts" element={<div className='shorts'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts1} />
                        <Card.Body>
                            <Card.Title>FIREBIRD SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts2} />
                        <Card.Body>
                            <Card.Title>TIRO CUT 3-STRIPES SUMMER SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts3} />
                        <Card.Body>
                            <Card.Title>OWN THE RUN SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts4} />
                        <Card.Body>
                            <Card.Title>ADICOLOR ESSENTIALS FRENCH TERRY SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts5} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES FRENCH TERRY SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts6} />
                        <Card.Body>
                            <Card.Title>TERREX AGRAVIC TRAIL RUNNING SHORTS</Card.Title>
                            <Card.Text>
                                Women's • TERREX
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts7} />
                        <Card.Body>
                            <Card.Title>ADIDAS X FARM RIO PACER SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Training
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts8} />
                        <Card.Body>
                            <Card.Title>TIRO 24 SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Soccer
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts9} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES FRENCH TERRY SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts10} />
                        <Card.Body>
                            <Card.Title>ADIDAS X FARM RIO BIKE SHORTS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts11} />
                        <Card.Body>
                            <Card.Title>FASHION GRAPHICS FLORAL SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts12} />
                        <Card.Body>
                            <Card.Title>ULTIMATE365 SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Golf
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts13} />
                        <Card.Body>
                            <Card.Title>DESIGNED FOR TRAINING HEAT.RDY HIIT 2-IN-1 SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Training
                            </Card.Text>
                            <Card.Text>$39</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts14} />
                        <Card.Body>
                            <Card.Title>Z.N.E. WOVEN SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts15} />
                        <Card.Body>
                            <Card.Title>ALL SZN 3-STRIPES GARMENT WASH BIKE SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$25</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts16} />
                        <Card.Body>
                            <Card.Title>FASHION 3-STRIPES SPANDEX CYCLING SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$36</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts17} />
                        <Card.Body>
                            <Card.Title>ULTIMATE365 BERMUDA SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Golf
                            </Card.Text>
                            <Card.Text>$68</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts18} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES FRENCH TERRY SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts19} />
                        <Card.Body>
                            <Card.Title>TIRO 24 SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Soccer
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shorts20} />
                        <Card.Body>
                            <Card.Title>TIRO CUT 3-STRIPES SUMMER SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="plus size" element={<div className='plus_size'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size1} />
                        <Card.Body>
                            <Card.Title>3-STRIPES MAXI DRESS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size2} />
                        <Card.Body>
                            <Card.Title>ADICOLOR FLARED LEGGINGS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size3} />
                        <Card.Body>
                            <Card.Title>ESSENTIALS WARM-UP TRICOT SLIM 3-STRIPES TRACK JACKET (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Essentials
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size4} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES MAXI DRESS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size5} />
                        <Card.Body>
                            <Card.Title>ADICOLOR FLARED LEGGINGS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size6} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS 3-STRIPES V-NECK MAXI DRESS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size7} />
                        <Card.Body>
                            <Card.Title>ADIDAS X FARM RIO BIKE SHORTS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size8} />
                        <Card.Body>
                            <Card.Title>ADICOLOR ADIBREAK PANTS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$85</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size9} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS FIREBIRD TRACK TOP (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size10} />
                        <Card.Body>
                            <Card.Title>TENNIS Y-DRESS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Tennis
                            </Card.Text>
                            <Card.Text>$90</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size11} />
                        <Card.Body>
                            <Card.Title>TERREX MULTI LIGHT FLEECE FULL-ZIP JACKET (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • TERREX
                            </Card.Text>
                            <Card.Text>$90</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size12} />
                        <Card.Body>
                            <Card.Title>TREFOIL DRESS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size13} />
                        <Card.Body>
                            <Card.Title>PACER TRAINING 3-STRIPES WOVEN HIGH-RISE SHORTS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Training
                            </Card.Text>
                            <Card.Text>$26</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size14} />
                        <Card.Body>
                            <Card.Title>OPTIME 7-INCH LEGGINGS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Training
                            </Card.Text>
                            <Card.Text>$32</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size15} />
                        <Card.Body>
                            <Card.Title>ESSENTIALS WARM-UP SLIM TAPERED 3-STRIPES TRACK PANTS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$41</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size16} />
                        <Card.Body>
                            <Card.Title>ESSENTIALS WARM-UP SLIM TAPERED 3-STRIPES TRACK PANTS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$41</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size17} />
                        <Card.Body>
                            <Card.Title>ULTIMATE365 SHORT SLEEVE DRESS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Golf
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size18} />
                        <Card.Body>
                            <Card.Title>DAILYRUN 7/8 LEGGINGS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$46</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size19} />
                        <Card.Body>
                            <Card.Title>ADICOLOR ESSENTIALS CREW SWEATSHIRT (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$44</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={size20} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES DRESS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="dresses & skirts" element={<div className='dresses_skirts'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img6} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img7} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img8} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img9} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img10} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img11} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img12} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img13} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img14} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img15} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img16} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img17} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img18} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img19} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img20} />
                        <Card.Body>
                            <Card.Title>GAZELLE BOLD SHOES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
            </Routes>
        </div>
        
    </div>

  )
}

export default Kids