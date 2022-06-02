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
        <div class="productsPageHeader d-flex justify-content-center">
          <h1 class="fw-bold mt-5">
              Upcoming Product 
          </h1>
        </div>
        {/* video */}
        <div class="mainFeatures mt-4">
          <div class="featuresHeader d-flex justify-content-center">
            <h2 class="fw-bold">
              Features
            </h2>
          </div>
          <div class="features row container mx-auto">
            <div class="firstFeature mt-3 col-md-6 d-flex">
              <div class="firstFeatureLogo">
                <BiStats size={50}/>
              </div>
              <div class="firstFeatureDescription d-flex justify-content-center align-items-center ms-2">
                See "historical" statistics about assets' properties
              </div>
            </div>
            <div class="secondFeature mt-3 col-md-6 d-flex">
              <div class="secondFeatureLogo">
                <GiWindTurbine size={50}/>
              </div>
              <div class="secondFeatureDescription d-flex justify-content-center align-items-center ms-2">
                Management of assets (wind farms, solar farms, factories)
              </div>
            </div>
            <div class="thirdFeature mt-3 col-md-6 d-flex">
              <div class="thirdFeatureLogo">
                <ImStatsBars size={50}/>
              </div>
              <div class="thirdFeatureDescription d-flex justify-content-center align-items-center ms-2">
                See predictions about energy needs, production and price
              </div>
            </div>
            <div class="fourthFeature mt-3 col-md-6 d-flex">
              <div class="fourthFeatureLogo">
                <AiOutlineNodeIndex size={50}/>
              </div>
              <div class="fourthFeatureDescription d-flex justify-content-center align-items-center ms-2">
                Aggregate and connect assets
              </div>
            </div>
            <div class="fifthFeature mt-3 col-md-6 d-flex">
              <div class="fifthFeatureLogo">
                <AiFillApi size={50}/>
              </div>
              <div class="fifthFeatureDescription d-flex justify-content-center align-items-center ms-2">
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