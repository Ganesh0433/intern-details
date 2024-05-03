import react,{ useState, useEffect } from "react";

import nstyle from './certificate.module.css'

function certificate() {

    const fetchInternData = async (enrollmentNumber) => {
        const app = initializeApp(firebaseConfig)
        try {
            const res = await getDoc(doc(db, "internData", enrollmentNumber))
            return res.data()
        } catch (e) {
            throw("F")
        }
    }
    
  


    var apidata={
        "contactNumber": "9949809099",
        "ethicalProblemSolver": "50",
        "fullName": "Mahamkali Ajay kumar",
        "desiredInternshipPosition": "Front-End Developer",
        "adaptability": "10",
        "analyticalSkills": "60",
        "synergy": "50",
        "emailAddress": "m.ajay12348@gmail.com",
        "attendance": "20",
        "accuracy": "50",
        "communication": "60",
        "persistence": "0",
        "resilience": "50",
        "reliability": "60",
        "enrollmentNumber": "PU24_111",
        "universityCollegeName": "Parul university"
    }







    const [height, setHeight] = useState(100);
    var present=2


    var svg1stroke=753-(present*5.75)
    var absent=100-present
    var svg2stroke=630+(absent*5.75)





    return (
        <>
            <div id={nstyle.page}>
                <div id={nstyle.logo}>

                    <img src='logo.png'></img>
                </div>
                <div id={nstyle.comname}>
                    <h3>Quantum <span>Wave</span></h3>
                    <div></div>
                    <h5>Wave of opportunity</h5>
                </div>
                <div id={nstyle.highlights}>
                    <h1>Highlights</h1>
                    <div id={nstyle.skills}>
                        <div id={nstyle.dot}></div>
                        <div id={nstyle.skill}>
                            <h4>Problem-Solving Skills:</h4>
                            <p>Proactively researched and implemented new solutions to improve CRM efficiency.</p>
                        </div>
                    </div>
                    <div id={nstyle.skills}>
                        <div id={nstyle.dot}></div>
                        <div id={nstyle.skill}>
                            <h4>Feature Development:</h4>
                            <p>Implemented a customer feedback module that resulted in a 15% increase in positive reviews.</p>
                        </div>
                    </div>
                    <div id={nstyle.skills}>
                        <div id={nstyle.dot}></div>
                        <div id={nstyle.skill}>
                            <h4>Technical Expertise:</h4>
                            <p>Utilized ReactJS and Redux to create a dynamic and user-friendly interface.</p>
                        </div>
                    </div>
                    <div id={nstyle.skills}>
                        <div id={nstyle.dot}></div>
                        <div id={nstyle.skill}>
                            <h4>Team Contribution:</h4>
                            <p>Provided clear and concise documentation, facilitating knowledge sharing within the team.</p>
                        </div>
                    </div>

                </div>
                <div id={nstyle.interndetails}>
                    <div id={nstyle.name} className={nstyle.commondet}>
                        <h3>Name</h3>
                        <h4 class='dem'>{apidata.fullName}</h4>
                    </div>
                    <div id={nstyle.college} className={nstyle.commondet}>
                        <h3>College</h3>
                        <h4>{apidata.universityCollegeName}</h4>
                    </div>
                    <div id={nstyle.erp} className={nstyle.commondet}>
                        <h3>Enrollment No</h3>
                        <h4>{apidata.enrollmentNumber}</h4>
                    </div>
                    <div id={nstyle.internrole} className={nstyle.commondet}>
                        <h3>Intern Role</h3>
                        <h4>{apidata.desiredInternshipPosition} </h4>
                    </div>
                    <div id={nstyle.email} className={nstyle.commondet}>
                        <h3>Email</h3>
                        <h4>{apidata.emailAddress}</h4>
                    </div>
                    <div id={nstyle.varified} className={nstyle.commondet}>
                        <h3>Verified By</h3>
                        <div id={nstyle.signimage}>
                            <img src='sign.png'></img>
                            <div></div>
                            <h6>G.Akila ,HR</h6>
                        </div>
                    </div>
                </div>
                <div id={nstyle.analysis}>
                    <div id={nstyle.formheading}>
                        <h2>INTERNSHIP- EVAULTION FORM</h2>

                    </div>
                    <div id={nstyle.performance}>
                        <h3>Performance</h3>
                        <h2>Personal Qualities</h2>

                        <div id={nstyle.separate}>
                        </div>
                        <div id={nstyle.graph}>
                            <div id={nstyle.graphanalysis}>

                                <h1 style={{ height: `${apidata.adaptability}%` }}></h1>
                                <h2 style={{ height: `${apidata.persistence}%` }}></h2>
                                <h3 style={{ height: `${apidata.reliability}%` }}></h3>
                                <h4 style={{ height: `${apidata.accuracy}%` }}></h4>
                                <h5 style={{ height: `${apidata.resilience}%` }}></h5>


                            </div>
                            <div id={nstyle.yaxis}>
                                <h6>5</h6>
                                <h6>4</h6>
                                <h6>3</h6>
                                <h6>2</h6>
                                <h6 >1</h6>
                                <h6 id={nstyle.ylower}>0</h6>
                            </div>
                            <div id={nstyle.xaxis}>
                                <h5>Ad</h5>
                                <h5>Pe</h5>
                                <h5>Re</h5>
                                <h5>Ac</h5>
                                <h5>Ri</h5>
                            </div>
                            <div id={nstyle.parameters}>
                                <h4>&#40;Ad&#41; Adaptability</h4>
                                <h4>&#40;Pe&#41; Persistance</h4>
                                <h4>&#40;Re&#41; Reliability</h4>
                                <h4>&#40;Ac&#41; Accuracy</h4>
                                <h4>&#40;Ri&#41; Resilience</h4>

                            </div>

                        </div>
                    </div>



                    <div id={nstyle.softskill}>
                        <div id={nstyle.softheading}>
                            <h3>Statistics</h3>
                            <h2>Soft-Skills</h2>
                        </div>
                        <div id={nstyle.softline}></div>
                        <div id={nstyle.softanalysis}>
                            <div id={nstyle.communication} class={nstyle.skills}>
                                <h3>Communication Skills</h3>
                                <div id={nstyle.combar} style={{ width: `${apidata.communication}%` }}></div>

                            </div>
                            <div id={nstyle.analytic} class={nstyle.skills}>
                                <h3>Analytical skills</h3>
                                <div id={nstyle.anabar} style={{ width: `${apidata.analyticalSkills}%` }}></div>

                            </div>
                            <div id={nstyle.synergy} class={nstyle.skills}>
                                <h3>Synergy</h3>
                                <div id={nstyle.synbar} style={{ width: `${apidata.synergy}%` }}></div>

                            </div>
                            <div id={nstyle.problemsolver} class={nstyle.skills}>
                                <h3>Ethical problem-solver</h3>
                                <div id={nstyle.probar} style={{ width: `${apidata.ethicalProblemSolver}%` }}></div>

                            </div>
                        </div>
                        <div id={nstyle.softxaxis}>
                            <h4>1</h4>
                            <h4>2</h4>
                            <h4>3</h4>
                            <h4>4</h4>
                            <h4>5</h4>


                        </div>
                        <div id={nstyle.softyaxis}>
                            <h4>5</h4>
                            <h4>3</h4>
                            <h4>2</h4>
                            <h4>1</h4>


                        </div>


                    </div>
                    <div id={nstyle.duration}>
                        <h3>Internship</h3>
                        <div id={nstyle.time}>
                            <h1>Duration :&nbsp; </h1>
                            <h2> 3 Months</h2>
                        </div>
                    </div>
                    <div id={nstyle.statistics}>
                        <h3>Statistics</h3>
                        <h2>Productvity</h2>
                        <div id={nstyle.statisticsline}></div>
                        <div id={nstyle.skilled}>
                            <div id={nstyle.outer}>
                                <div id={nstyle.inner}>

                                </div>

                            </div>
                            <svg id={nstyle.svg1} xmlns="http://www.w3.org/2000/svg" version="1.1" width="400px" height="300px">
                            
                                <circle cx="200" cy="150" r="100" stroke-linecap="round" style={{ 'stroke-dashoffset':svg1stroke}}/>
                            </svg>
                            <svg id={nstyle.svg2} xmlns="http://www.w3.org/2000/svg" version="1.1" width="400px" height="300px">
                             
                                <circle cx="200" cy="150" r="100" stroke-linecap="round" style={{ 'stroke-dashoffset':svg2stroke }} />
                            </svg>



                           <div id={nstyle.review}>
                            <h3>Review</h3>
                            <h1>GOOD</h1>
                           </div>
                           <div id={nstyle.present}>
                            <div></div>
                            <h6>Present</h6>
                            <h5>{present}%</h5>
                           </div>
                           <div id={nstyle.absent}>
                            <div></div>
                            <h6>Absent</h6>
                            <h5>{absent}%</h5>
                           </div>
                           <div id={nstyle.days}>
                           <h1 id={nstyle.present}>62</h1>
                         
                            <h1>/</h1>

                            <h1 id={nstyle.total}>93</h1>
                            <h1>days</h1>
                           </div>
                        </div>

                    </div>






                </div>
            </div>




        </>
    )
}

export default certificate
