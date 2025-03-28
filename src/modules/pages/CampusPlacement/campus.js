import React, { useState } from 'react';
import CompanyWorkFlow from "../../../assets/images/company-work-flow.png";
import Picture1 from "../../../assets/images/flowcharts/Picture1.jpg";
import Picture2 from "../../../assets/images/flowcharts/Picture2.jpg";
import Picture3 from "../../../assets/images/flowcharts/Picture3.jpg";
import Dimensions from"../../../assets/images/flowcharts/Dimensions.png";
import Amazon from "../../../assets/images/flowcharts/Amazon.webp";
import Microsoft from "../../../assets/images/flowcharts/Microsoft.webp";
import NVLogo_2D from "../../../assets/images/flowcharts/NVLogo_2D.jpg";
import placementAlgoImage from "../../../assets/images/flowcharts/placementAlgoImage.png";
import { radioClasses } from '@mui/material';
const Campus = () => { 
    const [formData, setState] = useState({
        institution: '',
        email: ''
    });
    const [selectedTestimonial, setSelectedTestimonial] = useState(null); // Modal state
    const [expanded, setExpanded] = useState(null);

    const handleChange = (e) => {
        setState({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const sponsors = [
        { id: 1, image: Amazon, alt: "Amazon" },
        { id: 2, image: Microsoft, alt: "Microsoft" },
        { id: 3, image: NVLogo_2D, alt: "Nvidia" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your interest! We will be in touch soon.');
        setState({ institution: '', email: '' });
    };
    const testimonials = [
        {
            name: "Palak Jain",
            role: "Audit Senior, Deloitte",
            text: "UDEN helped me with the interview preparation and mock interviews which helped build my confidence to tackle the interviewer's questions. Thanks to their team I cracked Delloitte's interview. ",
            image: Picture1
        },
        {
            name: "Pankaj Sharma",
            role: "Assistant Manager - Antlia",
            text: "As a fresher, it was difficult to find jobs. But the team at UDEN guided me to upskill, helped me with the interview process and connected me to the Company directly for the interview. I finally got the offer and now I am hopeful for a bright future. ",
            image: Picture2
        },
        {
            name: "Alekhya",
            role: "Analyst, AON",
            text: "I got a job at a prestigious MNC as an Analyst through UDEN after completing my training in Data Science. The team at UDEN is very supportive and they were constantly in touch with me throughout the process of recruitment until the day of joining. I am thankful to UDEN for their continuous support in getting me a great head start in my career.",
            image: Picture3
        }
    ];
    
    const styles = {
        root: {
            "--primary-color": " #F15A24", 
            "--secondary-color": "#FEF5D8",
            "--text-color": "#1f2937",
            "--light-bg": "#FEF5D8",
            fontFamily: "Helvetica, Arial, sans-serif",
        },
        container: {
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            fontFamily: "Helvetica, Arial, sans-serif",
        },
        hero: { 
            display: "block",
            background: "linear-gradient(135deg,hsl(14, 100.00%, 97.50%) 0%,#fff9dd 100%)",
            padding: "2em 0 4em",
            textAlign: "center",
            borderBottom: "4px solid var(--primary-color)",
        },     
        heroTitle: {
            fontSize: "50px",
            marginBottom: "1.5rem",
            color: "#F15A24",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold",
        },
        heading: {
            fontFamily: "Helvetica, Arial, sans-serif",
        },
        featuresGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            padding: "3rem 0",
            fontFamily: "Helvetica, Arial, sans-serif",
        },
        featureCard: {
            background: "white",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease",
            fontFamily: "Helvetica, Arial, sans-serif",
        },
        mediaPlaceholder: {
            background: "rgb(255, 255, 255)",  
            borderRadius: "8px",
            textAlign: "center",
            margin: "2rem 0",
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#754321",
            fontFamily: "Helvetica, Arial, sans-serif",
        },
        registrationBox: {
            background: "var(--light-bg)",
            padding: "2rem",
            borderRadius: "10px",
            margin: "3rem auto",
            maxWidth: "600px",
            fontFamily: "Helvetica, Arial, sans-serif",
        },
        input: {
            width: "100%",
            padding: "12px",
            margin: "10px 0",
            border: "2px solid #F15A24", 
            borderRadius: "10px",
            fontSize: "16px",
            fontFamily: "Helvetica, Arial, sans-serif",
        },
        ctaButton: {
            background: "var(--primary-color)",
            color: "white",
            padding: "15px 30px",
            border: "none",
            borderRadius: "10px",
            fontSize: "1.1rem",
            cursor: "pointer",
            transition: "background 0.3s ease",
            fontFamily: "Helvetica, Arial, sans-serif",
        },
        preCode: {
            background: "#54200d", 
            color: "#fff5f2",
            padding: "1rem",
            borderRadius: "8px",
            overflowX: "auto",
            margin: "1.5rem 0",
            whiteSpace: "pre-wrap",
            fontFamily: "Helvetica, Arial, sans-serif",
        },
        blockquote: {
            fontStyle: "italic", 
            borderLeft: "4px solid var(--primary-color)", 
            paddingLeft: "1.5rem",
            fontFamily: "Helvetica, Arial, sans-serif",
        },
        cite: {
            display: "block", 
            marginTop: "1rem", 
            fontWeight: "bold",
            fontFamily: "Helvetica, Arial, sans-serif",
        }
    };

    return (
        <div style={styles.root}>
            <section style={styles.hero}>
                <div style={styles.container}>
                    <h1 style={styles.heroTitle}>Revolutionizing Campus Placements with Uden</h1>
                    <p className="lead" style={{ fontFamily: "'Poppins', sans-serif" }}>AI-Driven Automation for Modern Educational Institutions</p>           
                    <div style={styles.mediaPlaceholder}>
                        [Embed 90-second explainer video showing dashboard interface]
                    </div>
                </div>
            </section>

            <section style={styles.container}>
                <div style={styles.featuresGrid}>
                <div style={styles.featureCard}>
                <h3 style={{fontFamily: "Helvetica, Arial, sans-serif",color: " #ed500d", fontSize: "2em" }}>AI-Curated Company Profiles</h3>
                    
                    <div style={{ ...styles.mediaPlaceholder, minHeight: "200px" }}>
                        <img 
                            src={Dimensions}
                            alt="12 Dimensions of Company Analysis"
                            style={{ width: "100%", height: "auto", objectFit: "cover",transition: "transform 0.4s ease-in-out",     borderRadius:"10px"}}
                            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.12)"} 
                            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}   />
                    </div>
                    
                    <p>Our neural networks analyze multiple recruitment dimensions...</p>
                </div>

                <div style={styles.featureCard}>
                <h3 style={{ fontFamily: "Helvetica, Arial, sans-serif",color: " #ed500d", fontSize: "2em"}}>Predictive Analytics Engine</h3> 

                        <img 
                        src={placementAlgoImage} 
                        alt="Placement Prediction Algorithm" 
                        style={{ width: "100%",height: "auto", marginTop: "10px", borderRadius: "8px",transition: "transform 0.4s ease-in-out",}} 
                            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.12)"} 
                            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}   
                        />
                    </div>

                </div>
            </section>
            {/* Results Section */}
            <section style={{ maxWidth: "1200px", margin: "3rem auto", padding: "0 20px", fontFamily: "'Poppins', sans-serif" }}>
            <h2 style={{ fontFamily: "Helvetica, Arial, sans-serif",color: " #ed500d", fontSize: "2em" }}>Transformative Benefits</h2>
                <table style={{ width: "100%", borderCollapse: "collapse", margin: "2rem 0", fontFamily: "'Poppins', sans-serif" }}>
                <thead>
                    <tr>
                    <th style={{ border: "1px solid #ed500d", padding: "12px", textAlign: "left", background: "#f3f4f6", color: "#ed500d" }}>Metric</th>
                    <th style={{ border: "1px solid #ed500d", padding: "12px", textAlign: "left", background: "#f3f4f6", color: "#ed500d" }}>Pre-Uden</th>
                    <th style={{ border: "1px solid #ed500d", padding: "12px", textAlign: "left", background: "#f3f4f6", color: "#ed500d" }}>Post-Uden</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td style={{ border: "1px solid #ed500d", padding: "12px", textAlign: "left" }}>Avg. companies/student</td>
                    <td style={{ border: "1px solid #ed500d", padding: "12px", textAlign: "left" }}>2.1</td>
                    <td style={{ border: "1px solid #ed500d", padding: "12px", textAlign: "left" }}>5.7</td>
                    </tr>
                    <tr>
                    <td style={{ border: "1px solid #ed500d", padding: "12px", textAlign: "left" }}>Placement conversion</td>
                    <td style={{ border: "1px solid #ed500d", padding: "12px", textAlign: "left" }}>68%</td>
                    <td style={{ border: "1px solid #ed500d", padding: "12px", textAlign: "left" }}>89%</td>
                    </tr>
                </tbody>
                </table>
            </section>


            <section style={styles.container}>
                <div style={styles.registrationBox}>
                <h3 style={{ fontFamily: "Helvetica, Arial, sans-serif",color: " #ed500d", fontSize: "2em" }}>Create Your Campus Placement Portal</h3>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="institution"
                            value={formData.institution}
                            onChange={handleChange}
                            placeholder="Institution Name" 
                            style={styles.input} 
                            required
                        />
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Official Email ID" 
                            style={styles.input} 
                            required
                        />
                        <button style={styles.ctaButton} type="submit">
                            Activate Free Trial →
                        </button>
                    </form>
                </div>
            </section>
            {/* Process Visualization */}
            <section style={{ maxWidth: "1200px", margin: "3rem auto", padding: "0 20px" }}>
    <div style={{ 
        background: "rgb(255, 255, 255)", borderRadius: "8px", padding: "2rem",  textAlign: "center", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b" 
    }}>
        <img 
            src={CompanyWorkFlow} alt="Company JD Analysis Process Flow" 
            style={{ 
                width: "100%", maxWidth: "800px", height: "auto", borderRadius: "8px",objectFit: "contain" // Ensures it fits well
            }} 
        />
    </div>
</section>
        
<section style={{ textAlign: "center", padding: "3rem 0", background: "#fff5d8" }}>
    <h2 style={{ color: " #F15A24", fontSize: "2.5rem", marginBottom: "1rem", fontFamily: "'Poppins', sans-serif" }}>Our Sponsors</h2>
    <div style={{ display: "flex", gap: "2rem", padding: "20px", justifyContent: "center" }}>
        {sponsors.map((sponsor, index) => (
            <div key={sponsor.id} style={{ 
                width: "150px", height: "100px",display: "flex",alignItems: "center",justifyContent: "center"
            }}>
                <img 
                    src={sponsor.image} 
                    alt={sponsor.alt} 
                    style={{ 
                        maxWidth: "100%", maxHeight: "100%", objectFit: "contain" 
                    }} 
                />
            </div>
        ))}
    </div>
</section>
        {/* Testimonials Section */}
        <section style={{ margin: "4rem auto", textAlign: "center", maxWidth: "1200px" }}>
                <h2 style={{ color: " #ed500d", fontSize: "2.5rem", marginBottom: "2rem", fontFamily: "'Poppins', sans-serif" }}>Testimonials</h2>
                
                <div style={{ 
                    display: "flex", overflowX: "auto", gap: "2rem", padding: "20px", scrollBehavior: "smooth",maxWidth: "100%",
                }}>
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            onClick={() => setSelectedTestimonial(testimonial)}
                            style={{
                                background: "  #fff5d8",padding: "2rem",borderRadius: "12px",boxShadow: "0 4px 10px rgba(0,0,0,0.1)",minWidth: "400px",maxWidth: "450px",flexShrink: 0,textAlign: "left",cursor: "pointer",
                                transition: "transform 0.3s ease",
                            }}>
                            <p style={{ fontStyle: "italic", color: " #333" }}>
                                "{testimonial.text ? testimonial.text.substring(0, 80) : "No testimonial available"}..."
                            </p>

                            <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
                                <img src={testimonial.image} alt={testimonial.name}
                                    style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "12px" }} />
                                <div>
                                    <strong style={{ color: "#ed500d" }}>- {testimonial.name} </strong>
                                    <p style={{ fontSize: "14px", margin: "0", color: "#666" }}>– {testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
             {/* Popup Modal */}
            {selectedTestimonial && (
                <div 
                    style={{
                        position: "fixed",
                        top: 0, left: 0,
                        width: "100%", height: "100%",
                        background: "rgba(0, 0, 0, 0.5)",
                        display: "flex", justifyContent: "center", alignItems: "center",
                        backdropFilter: "blur(5px)", zIndex: 1000
                    }} 
                    onClick={() => setSelectedTestimonial(null)}
                >
                    <div 
                        style={{
                            background: "#fff",
                            padding: "2rem",
                            borderRadius: "12px",
                            maxWidth: "500px",
                            textAlign: "center",
                            position: "relative",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                        }} 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setSelectedTestimonial(null)}
                            style={{
                                position: "absolute", top: "10px", right: "15px",
                                border: "none", background: "transparent",
                                fontSize: "1.5rem", cursor: "pointer"
                            }}>
                            ✖
                        </button>
                        <p style={{ fontStyle: "italic", color: "#333" }}>
                            {selectedTestimonial.text}
                        </p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1rem" }}>
                            {selectedTestimonial.image && (
                                <img src={selectedTestimonial.image} alt={selectedTestimonial.name} 
                                    style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "12px" }} />
                            )}
                            <div>
                                <strong style={{ color: "#ed500d" }}>{selectedTestimonial.name}</strong>
                                <p style={{ fontSize: "14px", margin: "0", color: "#666" }}>{selectedTestimonial.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Campus;