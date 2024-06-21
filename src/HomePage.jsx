import React from 'react';
import '/src/HomePage.css';
import { FaArrowRight } from 'react-icons/fa';


const HomePage = () => {
  return (
    <div className="homepage">
        <header className="header">
            <img src="\src\assets\logo.png" alt="True Diploma Logo" className="logo-image" />
            <nav className="nav">
            <a href="#about">About</a>
            <a href="#solutions">Solutions</a>
            <a href="#login">Login</a>
            <a href="#join-us">Join Us</a>
            </nav>
            <button className="contact-button">Contact Us</button>
        </header>
        <main className="main-content">
        <img src="\src\assets\certificate.png" alt="Certificate" className="certificate-image" />
        <div className="text-container">
            <h1>Number 1 solution for diploma's authenticity</h1>
            <p>Where Blockchain and NFTs Meet, Elevating Education's Integrity and Standards</p>
        </div>  
            <div className="features">
            <div className="feature">
            <img src="\src\assets\trust.png" alt="Certificate"/>
                <h2>NFT solution for diploma falsification</h2>
                <p>offering unique NFT version for your achievement</p>
            </div>
            <div className="feature">
            <img src="\src\assets\school.png" alt="Certificate" />
                <h2>Prestigious partners</h2>
                <p>unix, institut Y and 106 other education institutions trust us</p>
            </div>
            <div className="feature">
            <img src="\src\assets\employees.png" alt="Certificate"/>
                <h2>Increase your chances in the market</h2>
                <p>Our nft holders have 60% higher employment rate</p>
            </div>
            </div>
        </main>

      {/*Section 2*/}
        <div className="App">
            <header className="App-header">
                <h2>TrueDiploma is your gateway to authenticating diplomas</h2>
                <p>
                Our startup is revolutionizing the verification process for diplomas and titles, with a primary goal of reducing instances of falsification, particularly <strong>in the professional environment</strong>. By providing a reliable platform, we aim to <strong>assist recruiters</strong> in selecting the right candidates, mitigating the risk of hiring individuals with counterfeit credentials.
                </p>
                <p>
                Moreover, our innovative approach <strong>supports universities in maintaining their credibility and integrity</strong>, safeguarding them from being unwittingly embroiled in fraudulent activities. Through the utilization of <strong>the Hedera blockchain</strong>, TrueDiploma ensures that every verification is <strong>secure, tamper-proof, and authentic</strong>, thereby fostering a culture of trust and transparency in the academic and professional sectors.
                </p>
                <p>
                Whether you're <strong>a student</strong>, <strong>a diploma-issuing institution</strong>, or <strong>a recruiter</strong>, seize the opportunity
                </p>
                <a href="#"> <strong>create your account NOW!</strong> </a>
            </header>
        </div>





        {/*Section 3*/}
        <div className="mobile">
            <div className="mobile-header">
                <div className="mobile-header-text">
                    <p>What we are</p>
                    <p>Offering</p>
                </div>
            </div>


            <div className='container'> 
                <div className="mobile-content">
                    <p className="mobile-content-top">
                        For Students
                    </p>
                    <div className="bullet-list">
                        <li>Secure and tamper-proof verification of academic credentials.</li>
                        <li>Instant access to verified credentials, eliminating the need for manual verification processes.</li>
                        <li>Ensuring fair competition and merit-based opportunities.</li>
                        <li>Safeguarding the integrity and value of your legitimate credentials.</li>
                    </div>
                    <p className="mobile-join"> 
                        Join Us a member
                        <FaArrowRight className='arrow'/>
                    </p>
                </div>
            </div>


            <div className='container'>
                <div className="mobile-content">
                    <p className="mobile-content-top">
                        For Faculties or other diploma-issuing institutions
                    </p>
                    <div className="bullet-list">
                        <li>Protecting the reputation of educational institutions and the value of their degrees.</li>
                        <li>Enhancing trust among stakeholders, including students, alumni, employers, and the community.</li>
                        <li>Protecting the value of the institution's degrees and certifications.</li>
                        <li>Potentially avoiding legal liabilities or accreditation issues associated with fraudulent practices.</li>
                    </div>
                    <p className="mobile-join"> 
                        Join Us an Issuer
                        <FaArrowRight className='arrow'/>
                    </p>
                </div>
            </div>


            <div className='container'>
                <div className="mobile-content">
                    <p className="mobile-content-top">
                        For Recruiters
                    </p>
                    <div className="bullet-list">
                        <li>Streamlined hiring processes by reducing the time and effort required for manual verification.</li>
                        <li>Increased confidence in the authenticity of candidates' credentials, leading to more informed hiring decisions.</li>
                        <li>Reduced risk of hiring individuals with falsified or misrepresented qualifications.</li>
                        <li>Potential cost savings associated with avoiding fraudulent hires or rehiring due to credential discrepancies.</li>
                    </div>
                    <p className="mobile-join"> 
                        Join Us a member
                        <FaArrowRight className='arrow'/>
                    </p>
                </div>
            </div>








        </div>


    </div>
    
  );
};

export default HomePage;
