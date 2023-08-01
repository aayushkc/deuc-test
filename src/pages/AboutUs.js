import OrganizationChart from "../assesets/orgdig.png"
import policy from "../assesets/policy.svg"
import strategy from "../assesets/strategy.svg"
import principle from "../assesets/principle.svg"
const AboutUs = () => {
    return (<>
        <section className="about-us-home justify-content-center container">
            <h2 className="d-flex justify-content-center mt-5">About Us</h2>
            <p className="d-flex align-items-center justify-content-center p-5" >DEUC, Bara is non-profit making; service-oriented social organization initiated by committed local youth from Dalit,
                indigenous and marginalized communities. It is established and registered in 2059 B.S. as an NGO at Districts
                Administration Office, Bara under the Social Organization Registration act 2034. It aims to improve the overall
                situation of the Dalit, Ethnic, Marginalized and disadvantaged community people by mainstreaming them in community
                development process through their active participation.</p>
        </section>

        <section className="vision container mb-5">

            <div className="row">
                <div className="col-lg-12">
                    <h2 className="d-flex justify-content-center mt-5">Vision</h2>
                    <span className="border-line mt-2"></span>
                    <p className="d-flex align-items-center justify-content-center p-4" >Inclusive, justice and prosperous society</p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 px-5">
                    <h2 className="d-flex justify-content-center mt-4">Mission</h2>
                    <span className="border-line mt-2"></span>
                    <p className="d-flex align-items-center justify-content-center p-4" >
                        Mainstreaming the dalit, indigenous marginalized and disadvantage community in community development process through improving their socio-economic status.
                    </p>

                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <h2 className="d-flex justify-content-center mt-4">Goal</h2>
                    <span className="border-line mt-2"></span>
                    <p className="d-flex align-items-center justify-content-center p-4" >  Improved living standard of target groups in a holistic manner </p>
                </div>
            </div>



        </section>

        <section className="organization mt-5">
            <h2 className="d-flex justify-content-center mt-5 mb-5">Organization Chart</h2>
            <div className="container-fluid mt-5 mb-5 justify-content-center d-flex">
                <img src={OrganizationChart} className="img-fluid" alt="organization-chart" />
            </div>
        </section>

        <section id="objectives" className="mb-5">
            <div className="container vision pb-3">
                <div className="row">
                    <div className="col">
                        <h2 className="d-flex justify-content-center mt-5 mb-5">Our Objectives</h2>
                        <ul>

                            <li className="mb-3">To enhance the capacity of the CBOs/NGOs in local level to provide the quality services to the disadvantaged groups of the society.</li>
                            <li className="mb-3">To train local youths and mobilize them for the gearing up of the backward groups of the society.</li>
                            <li className="mb-3">To promote advocacy for ensuring the rights of Children, Youth, Women, Dalits, Ethnic People and Disadvantaged Groups of the Society and Human Rights. </li>
                            <li className="mb-3">To implement educational program, health and nutrition program, water and sanitation, income generating, environment promotion, private and public land plantation, alternative energy, good governance promotion, awareness and sensitization of community as well as social mobilization to bring the positive changes in the lives of targeted people in the communities. </li>
                            <li className="mb-3">To advocate for ensuring of senior citizen rights and services. </li>
                            <li className="mb-3">To construct small infrastructure development activities for poverty alleviation of community. </li>
                            <li className="mb-3">To develop linkage and coordination with local, national and international GOs, NGOs and INGOs for the fulfillment of the needs of the targeted people through partnering program</li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>


        <section id="psp" className="mb-5">
            <div className="container-fluid">
            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={policy} class="card-img-top" height ="32%" alt="..." />
      <div class="card-body">
      <h2 className="card-title d-flex justify-content-center mb-4">Policies</h2>
        {/* <h5 class="">Policies</h5> */}
        <ul className="card-text">
                            <li className="mb-3">Financial/HR Policy </li>
                            <li className="mb-3">Procurement Policy </li>
                            <li className="mb-3">GESI (Gender Equality and Social Inclusion) </li>
                            <li className="mb-3">Anti-Corruption </li>
                            <li className="mb-3">Child Protection /Safe Guarding Policy </li>
                            <li className="mb-3">PSEA Policy  </li>
                            <li className="mb-3">Cost Sharing /Conflict of Interest Policy </li>
                    </ul>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={strategy} class="card-img-top" height ="32%" alt="strategy" />
      <div class="card-body">
      <h2 className="card-title d-flex justify-content-center mb-4">Strategy</h2>
        <ul className="card-text">

                            <li className="mb-3">Community engagement</li>
                            <li className="mb-3">Reached to unreached people</li>
                            <li className="mb-3">Local resource mobilization</li>
                            <li className="mb-3">ENeed & Rights-Based Approach </li>
                            <li className="mb-3">Do No Harm principle </li>
                            <li className="mb-3">Role model promotion </li>
                            
                    </ul>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={principle} class="card-img-top" height ="32%" alt="principle" />
      <div class="card-body">
      <h2 className="card-title d-flex justify-content-center mb-4">Principles</h2>
        {/* <h5 class="">Policies</h5> */}
        <ul className="card-text">
        <li className="mb-3">Children are the base of new Nepal. They should get priority in the development</li>
                            <li className="mb-3">All forms of violence and discrimination are intolerable and unacceptable</li>
                            <li className="mb-3">Information empowers people. Deprivation of the right to information is non-negotiable. </li>
                            <li className="mb-3">Education is the solution of poverty </li>
                    </ul>
      </div>
    </div>
  </div>
</div>

            </div>
       
        </section>
    </>)
}

export default AboutUs;