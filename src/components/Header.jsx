import React, {useEffect, useState} from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import Axios from 'axios'

export default function Header() {
  const [mass, setMass] = useState([])
  const [mass1, setMass1] = useState([])

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const responsive1 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  useEffect(() => {
    getVal()
    getElder()
  }, [])



  function getVal() {
    Axios.get('https://api.npoint.io/1f822fe5bc64d29bf01e')
    .then(ress => {
      setMass(ress.data)
    })
  }

  function getElder(){
    Axios.get('https://api.npoint.io/f9fe43fa3c86e6215083')
    .then(ress => {
      setMass1(ress.data)
    })
  }

  console.log(mass, mass1);

  return (
    <div className='container'>
      <div className="row my-3">
        <div className="col-6">
          <select className='form-control'>
            <option value="kiyim">kiyimlar</option>
            <option value="Oyoqkiym">oyoqkiyimlar</option>
            <option value="acsesuar">aksessuar</option>
          </select>
        </div>
        <div className="col-3">
          <input className='form-control' type="number" placeholder='dan' />
        </div>
        <div className="col-3">
          <input className='form-control' type="number" placeholder='gacha' />
        </div>
      </div>
      <input type="text" className='form-control' placeholder='Search' />

      <Carousel className='text-center my-4' infinite={true} keyBoardControl={true} responsive={responsive}>
        {
          (mass) && mass.map((item, index) => {
            return(
              <div key={index}>
                <img width={150} className='img' src={item.nav_image1}/>
              </div>
            )
          })
        }
      </Carousel>

      <Carousel className='text-center d-flex align-items-center my-5' infinite={true} keyBoardControl={true} autoPlaySpeed={1000}  autoPlay={true} responsive={responsive1}>
        {
          (mass1) && mass1.map((item, index) => {
            return(
              <div key={index}>
                <img width={800} height={500} style={{objectFit:"cover"}} className='img' src={item.head_image1}/>
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )
}
