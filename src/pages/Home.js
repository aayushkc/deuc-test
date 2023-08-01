import image1 from "../assesets/Ecd.jpg"
import image2 from "../assesets/drama.jpg"
import image3 from "../assesets/childmeeting.jpg"
import image4 from "../assesets/FinancialLiteracy.jpg"
import image5 from "../assesets/policies.jpg"
import image6 from "../assesets/psy counseling.jpg"
import empFund from "../assesets/empFund.png"
import Helvetas from "../assesets/Helvetas.png"
import nepalGov from "../assesets/nepalGov.png"
import poverty from "../assesets/poverty.png"
import worldBank from "../assesets/worldBank.jpg"
import undp from "../assesets/undp.png"
import partner from "../assesets/partner.jpg"
import stromFound from "../assesets/stromFonud.jpg"
const Home = () => {
    return <>

        <section className="hero">
            <h1 className="align-items-center justify-content-center">
                Inclusive,  <span style={{ color: '#42CAF6', display: "contents" }}>Just</span> and <br /><span style={{ color: '#28C2F2', display: "contents" }}>Prosperous Society</span>
            </h1>
        </section>

        <section className="about-us-home justify-content-center container">
            <h2 className="d-flex justify-content-center mt-5">About Us</h2>
            <p className="d-flex align-items-center justify-content-center p-5" >DEUC, Bara is non-profit making; service-oriented social organization initiated by committed local youth from Dalit,
                indigenous and marginalized communities. It is established and registered in 2059 B.S. as an NGO at Districts
                Administration Office, Bara under the Social Organization Registration act 2034. It aims to improve the overall
                situation of the Dalit, Ethnic, Marginalized and disadvantaged community people by mainstreaming them in community
                development process through their active participation.</p>
        </section>

        <section className="gallery">
            <h2 className="d-flex justify-content-center mt-5 mb-3">Gallery</h2>

            <div className="container-fluid mb-5 mt-5">
                <div className="row  px-5">
                    <div className="col-lg-4 col-sm-12 gallery-img mb-sm-4">
                        <img src={image1} className="img-fluid rounded" alt="vegetable" width="100%" />
                    </div>
                    <div className="col-lg-4 col-sm-12 gallery-img mb-sm-4"><img src={image2} className="img-fluid" alt="vegetable" /></div>
                    <div className="col-lg-4 col-sm-12 gallery-img mb-sm-4"><img src={image3} className="img-fluid" alt="vegetable" /></div>
                </div>

                <div className="row px-5 mt-5">
                    <div className="col-lg-4 col-sm-12 gallery-img mb-sm-4">
                        <img src={image4} className="img-fluid rounded" alt="vegetable" width="100%" />
                    </div>
                    <div className="col-lg-4 col-sm-12 gallery-img mb-sm-4"><img src={image5} className="img-fluid" alt="vegetable" /></div>
                    <div className="col-lg-4 col-sm-12 gallery-img mb-sm-4"><img src={image6} className="img-fluid" alt="vegetable" width="100%"/></div>
                </div>
            </div>
        </section>

        <section className="ourPartners mb-5">

        <h2 className="d-flex justify-content-center mt-5 mb-5">Our Partners</h2>

        <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src={stromFound} height="80" width="150" alt="" />
		</div>
		<div class="slide">
			<img src={worldBank} height="80" width="150" alt="" />
		</div>
		<div class="slide">
			<img src={nepalGov} height="80" width="150" alt="" />
		</div>
		<div class="slide">
			<img src={empFund} height="80" width="150" alt="" />
		</div>
        <div class="slide">
			<img src={Helvetas} height="80" width="150" alt="" />
		</div>
        <div class="slide">
			<img src={poverty} height="80" width="150" alt="" />
		</div>
        <div class="slide">
			<img src={undp} height="80" width="100" alt="" />
		</div>
        <div class="slide">
			<img src={partner} height="80" width="100" alt="" />
		</div>

        <div class="slide">
			<img src={stromFound} height="80" width="150" alt="" />
		</div>
		<div class="slide">
			<img src={worldBank} height="80" width="150" alt="" />
		</div>
		<div class="slide">
			<img src={nepalGov} height="80" width="150" alt="" />
		</div>
		<div class="slide">
			<img src={empFund} height="80" width="150" alt="" />
		</div>
        <div class="slide">
			<img src={Helvetas} height="80" width="150" alt="" />
		</div>
        <div class="slide">
			<img src={poverty} height="80" width="150" alt="" />
		</div>
        <div class="slide">
			<img src={undp} height="80" width="100" alt="" />
		</div>
        <div class="slide">
			<img src={partner} height="80" width="100" alt="" />
		</div>
		
	</div>
</div>
        </section>
    </>
}


export default Home