import React from 'react'
import NavbarComponent from '../components/Navbar'
import { BiStats } from 'react-icons/bi';
import { GiWindTurbine } from 'react-icons/gi';
import { ImStatsBars } from 'react-icons/im';
import { AiOutlineNodeIndex, AiFillApi } from 'react-icons/ai';

function ProductsPage() {
  return (
    <>
    <NavbarComponent/>
    <div className="productsPage">
        <div className="productsPageHeader d-flex flex-column justify-content-center align-items-center">
          <h1 className="fw-bold mt-5">
              Upcoming Product 
          </h1>
          <div className="productPageLink">
            <h4 className="mt-3">Check it out: <a href="http://app.zeus-gis.pt/" className='link-dark'>Electrica Imperium</a></h4>
          </div>
        </div>
        {/* video */}
        <div className="mainFeatures mt-5">
          <div className="featuresHeader d-flex justify-content-center">
            <h2 className="fw-bold">
              Features
            </h2>
          </div>
          <div className="features row container mx-auto">
            <div className="firstFeature mt-3 col-md-6 d-flex">
              <div className="firstFeatureLogo">
                <BiStats size={50}/>
              </div>
              <div className="firstFeatureDescription d-flex justify-content-center align-items-center ms-2">
                See "historical" statistics about assets' properties
              </div>
            </div>
            <div className="secondFeature mt-3 col-md-6 d-flex">
              <div className="secondFeatureLogo">
                <GiWindTurbine size={50}/>
              </div>
              <div className="secondFeatureDescription d-flex justify-content-center align-items-center ms-2">
                Management of assets (wind farms, solar farms, factories)
              </div>
            </div>
            <div className="thirdFeature mt-3 col-md-6 d-flex">
              <div className="thirdFeatureLogo">
                <ImStatsBars size={50}/>
              </div>
              <div className="thirdFeatureDescription d-flex justify-content-center align-items-center ms-2">
                See predictions about energy needs, production and price
              </div>
            </div>
            <div className="fourthFeature mt-3 col-md-6 d-flex">
              <div className="fourthFeatureLogo">
                <AiOutlineNodeIndex size={50}/>
              </div>
              <div className="fourthFeatureDescription d-flex justify-content-center align-items-center ms-2">
                Aggregate and connect assets
              </div>
            </div>
            <div className="fifthFeature mt-3 col-md-6 d-flex">
              <div className="fifthFeatureLogo">
                <AiFillApi size={50}/>
              </div>
              <div className="fifthFeatureDescription d-flex justify-content-center align-items-center ms-2">
                API for insertion/update of historical assets' data and of predictions.
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default ProductsPage