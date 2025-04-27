import React, { useState, useEffect } from 'react';
import flowchartImage from "../../../assets/images/flowcharts/1Flowchart.png";
import ParseGif from "../../../assets/images/flowcharts/ParseGif.gif";
import Picture4 from "../../../assets/images/flowcharts/Picture4.jpg";
import Picture5 from"../../../assets/images/flowcharts/Picture5.png";
import { Home, Briefcase, CheckCircle, Star, Send, Clock, Building, MapPin } from 'lucide-react';

// Sample job data
const jobRecommendations = [
        {
            id: 1,
            title: 'Senior Software Engineer',
            company: 'TechInnovate Solutions',
            matchPercentage: 85,
            status: 'Applied',
            location: 'San Francisco, CA',
            tags: ['React', 'Cloud', 'AI']
        },
        {
        id: 2,
            title: 'Product Manager',
            company: 'GrowthPath Inc.',
            matchPercentage: 72,
            status: 'Interview',
            location: 'New York, NY',
            tags: ['Product', 'Strategy', 'SaaS']
        },
        {
        id: 3,
            title: 'Data Scientist',
            company: 'DataDrive Analytics',
            matchPercentage: 90,
            status: 'Applied',
            location: 'Remote',
            tags: ['Machine Learning', 'Python', 'Statistics']
        },
        {
            id: 4,
                title: 'Developer',
                company: 'Database Management',
                matchPercentage: 99,
                status: 'Screening',
                location: 'Remote',
                tags: ['Machine Learning', 'Python', 'Statistics']
        }
    ];
    
const Benefits = () => { 
    const [activeFilter, setActiveFilter] = useState('all');
    
    const [activeJobFilter, setActiveJobFilter] = useState('all');
    const [formData, setFormData] = useState({
        institution: '',
        email: ''
    });
    const [selectedTestimonial, setSelectedTestimonial] = useState(null); // Modal state
    const [expanded, setExpanded] = useState(null);
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted with email:', email);
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
}, []);


    const testimonials = [
        {
            name: "Rohan Sharma",
            role: "CS Final Year",
            text: "Uden's AI matched me with 3 perfect internships I never would have found myself!",
            image: null  // No image for now
        },
        {
            name: "Neha Gupta",
            role: "ECE Final Year",
            text: "Thanks to Uden, I secured an internship at Google with AI-driven resume insights!",
            image: null  // No image for now
        },
        {
            name: "Abhishek Barjatya ",
            role: "Analyst , AON",
            text: "After  completing  my  training  in  Data  Science  I  was  a  little concerned about the placement opportunities. But UDEN came through  at  the  right  time  and  provided  me  with  the  best interview  opportunity.  Even  after  the  interview  they  kept following up with me and ensured that I received the offer letter from the Company. I am very grateful for all the effort they put in	for	getting	me	placed	and	helping	me	begin	my	career journey. ",
            image: Picture4
        },
        
    ];
    
    const styles = {
        root: {
            "--primary-color": " #F15A24", 
            "--secondary-color": " #c23d00", 
            "--text-color": " #1f2937",
            "--light-bg": " #FFF5D8", 
        },
        testimonialsContainer: {
            margin: "4rem auto",
            textAlign: "center",
            maxWidth: "100%",
            flexWrap: "wrap",
        },
        testimonialsWrapper: {
            display: "flex",
            overflowX: "auto",
            whiteSpace: "nowrap",
            gap: "2rem",
            padding: "20px",
            scrollBehavior: "smooth",
            maxWidth: "100%",
        },
        testimonialCard: {
            background: "  #fff5d8",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            minWidth: "400px",
            maxWidth: "450px",
            flexShrink: 0,
            textAlign: "left",
            fontFamily: "Helvetica, Arial, sans-serif",
            transition: "transform 0.3s ease",
            cursor: "pointer"
        },
        
        app: {
            lineHeight: 1.6,
            color: "var(--text-color)",
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
        lead: {
            fontSize: "1.2rem",
            marginBottom: "2rem",
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
        featureTitle: {
            marginBottom: "1rem",
            color: "var(--primary-color)", 
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold",
            fontSize: "1.8em",
        },
        resumeParserDemo: {
            display: "flex",
            gap: "2rem",
            margin: "1rem 0",
            fontFamily: "Helvetica, Arial, sans-serif",
        },
        codeBlock: {
            background: " #f1f5f9",
            borderRadius: "5px",
            overflowX: "auto",
            maxWidth: "100%", 
            fontFamily: "monospace", 
            fontSize: "0.9rem", 
            whiteSpace: "pre-wrap", 
            wordBreak: "break-word", 
        },
        mediaPlaceholder: {
            borderRadius: "8px",
            textAlign: "center",
            margin: "2rem 0",
            minHeight: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: " #64748b",
            fontFamily: "'Poppins', sans-serif",
        },
        jobFilters: {
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            margin: "2rem 0",
            fontFamily: "'Poppins', sans-serif",
        },
        filterBtn: {
            padding: "8px 16px",
            borderRadius: "20px",
            background: "rgb(67, 22, 9)", 
            border: "none",
            cursor: "pointer",
            transition: "all 0.2s ease",
            fontFamily: "'Poppins', sans-serif",
            color: " #754321", 
            fontWeight: "500",
        },
        filterBtnActive: {
            background: " #F15A24", 
            color: "white",
        },
        registrationBox: {
            background: "var(--light-bg)", 
            padding: "2rem",
            borderRadius: "10px",
            margin: "3rem 0",
            fontFamily: "'Poppins', sans-serif",
        },
        form: {
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            fontFamily: "'Poppins', sans-serif",
        },
        input: {
            padding: "0.8rem",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
            fontFamily: "'Poppins', sans-serif",
        },
        ctaButton: {
            padding: "0.8rem",
            background: "#ed500d", // Primary orange for button
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background 0.2s ease",
            fontFamily: "'Poppins', sans-serif",
        },
        privacyNote: {
            marginTop: "1rem",
            fontSize: "0.9rem",
            color: "#6b7280",
            fontFamily: "'Poppins', sans-serif",
        },
        testimonials: {
            margin: "4rem 0",
            fontFamily: "'Poppins', sans-serif",
        },
        blockquote: {
            fontStyle: "italic",
            borderLeft: "4px solid #ed500d", // Changed to orange
            paddingLeft: "1.5rem",
            fontFamily: "'Poppins', sans-serif",
        },
        cite: {
            display: "block",
            marginTop: "1rem",
            fontWeight: "bold",
            fontStyle: "normal",
            fontFamily: "'Poppins', sans-serif",
        },
        sectionTitle: {
            color: "#ed500d", // Orange for all section titles
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "bold",
            fontSize: "40px",
        },
        placeholderText: {
            color: "#555", // Darker color for placeholder text
            fontWeight: "500",
        },
        smallerPlaceholder: {
            minHeight: "200px",
            background: "rgb(253, 245, 187)",
            borderRadius: "8px",
            padding: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#555",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "0.9rem",
        },
        jobListingsContainer: {
            maxWidth: "1200px", 
            margin: "0 auto", 
            padding: "20px", 
            minHeight: "auto", 
        },
        jobFiltersContainer: {
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            marginBottom: "20px",
            flexWrap: "wrap",
        },
        jobFiltersTitle: {
            fontSize: "24px", 
            fontWeight: "bold", 
            color: "#333", 
            display: "flex", 
            alignItems: "center"
        },
        jobFilterButtons: {
            display: "flex", 
            gap: "10px"
        },
        jobFilterButton: (isActive) => ({
            padding: "8px 12px",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "bold",
            cursor: "pointer",
            background: isActive ?  " #ed500d" : "#ddd",
            color: isActive ? "white" : "#333",
            border: "none",
        }),
        jobListingsScrollContainer: {
            display: "flex", 
            gap: "20px", 
            overflowX: "auto", 
            paddingBottom: "10px", 
            flexWrap: "nowrap"
        },
        jobCard: {
            background: "white", 
            padding: "16px", 
            borderRadius: "8px", 
            minWidth: "320px", 
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            flexShrink: 0,
            transition: "transform 0.2s ease-in-out",
        },
        jobCardHeader: {
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center"
        },
        jobTitle: {
            fontSize: "18px", 
            fontWeight: "bold", 
            color: "#333"
        },
        jobCompanyInfo: {
            display: "flex", 
            alignItems: "center", 
            color: "#777", 
            fontSize: "14px", 
            marginTop: "4px"
        },
        jobMatchPercentage: {
            display: "flex", 
            alignItems: "center", 
            marginTop: "6px"
        },
        jobTags: {
            marginTop: "10px", 
            display: "flex", 
            gap: "6px", 
            flexWrap: "wrap"
        },
        jobTagSpan: {
            background: "#eee", 
            padding: "4px 10px", 
            borderRadius: "6px", 
            fontSize: "12px", 
            color: "#555"
        }
    }
    

    return (
        <div style={{...styles.root, ...styles.app}}>
            {/* Hero Section */}
            <section style={styles.hero}>
                <div style={styles.container}>
                    <h1 style={styles.heroTitle}>Your AI Career Companion</h1>
                    <p style={styles.lead}>Smart Job Matching for Students & Fresh Graduates</p>
                    
                    <div style={styles.mediaPlaceholder}>
                        <span style={styles.placeholderText}>
                            [Embed 60-second explainer video showing:<br />
                            Student dashboard + AI job matching process + Interview prep features]
                        </span>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section style={styles.container}>
                <div style={styles.featuresGrid}>
                    <div style={styles.featureCard}>
                        <h3 style={styles.featureTitle}>Smart Resume Parsing</h3>
                        <div style={styles.resumeParserDemo}>
                            <div style={styles.smallerPlaceholder}>
                                <img
                                    src={ParseGif} 
                                    alt="Resume Parsing Transformation"
                                    style={{ 
                                        width: "100%",height: "auto",maxHeight: "100%", objectFit: "contain", borderRadius: "8px",
                                    }} 
                                    loop="infinite"
                                />
                            </div>
                        </div>
                    </div>

                    <div style={styles.featureCard}>
                        <h3 style={styles.featureTitle}>AI Job Matching</h3>
                        <div style={{...styles.mediaPlaceholder, minHeight: '300px'}}>
                            <img 
                                src={flowchartImage} 
                                alt="AI Job Matching Flowchart"
                                style={{ 
                                    width: "100%",
                                    maxWidth: "600px",
                                    height: "auto",
                                    objectFit: "contain",
                                    borderRadius: "8px",
                                    transition: "transform 0.3s ease-in-out", 
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div style={styles.jobListingsContainer}>
                <div style={styles.jobFiltersContainer}>
                <h1 style={styles.jobFiltersTitle}>
                        <Briefcase size={28} style={{ marginRight: "10px", color:" #ed500d" }} /> Job Board
                    </h1>
                    <div style={styles.jobFilterButtons}>
                        {["All", "Applied", "Interview", "Screening"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveJobFilter(filter.toLowerCase())}
                                style={styles.jobFilterButton(activeJobFilter === filter.toLowerCase())}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={styles.jobListingsScrollContainer}>
                    {jobRecommendations
                        .filter((job) => activeJobFilter === "all" || job.status.toLowerCase() === activeJobFilter)
                        .map((job) => (
                            <div key={job.id} style={styles.jobCard}>
                                <div style={styles.jobCardHeader}>
                                    <div>
                                        <h2 style={styles.jobTitle}>{job.title}</h2>
                                        <div style={styles.jobCompanyInfo}>
                                            <Building size={16} style={{ marginRight: "5px" }} />
                                            {job.company}
                                        </div>
                                        <div style={styles.jobCompanyInfo}>
                                            <MapPin size={16} style={{ marginRight: "5px" }} />
                                            {job.location}
                                        </div>
                                        <div style={styles.jobMatchPercentage}>
                                            <Star size={18} style={{ color: "#FFD700", marginRight: "5px" }} />
                                            <span style={{ fontSize: "14px", fontWeight: "bold" }}>{job.matchPercentage}% Match</span>
                                        </div>
                                    </div>
                                    <span style={{ fontWeight: "bold", fontSize: "14px", color: "#333" }}>{job.status}</span>
                                </div>
                                <div style={styles.jobTags}>
                                    {job.tags.map((tag) => (
                                        <span key={tag} style={styles.jobTagSpan}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            {/* Benefits Section */}
            <section style={styles.container}>
                <h2 style={styles.sectionTitle}>Student Success Features</h2>
                <div style={styles.featuresGrid}>
                    <div style={styles.featureCard}>
                        <h3 style={styles.featureTitle}>Skill Gap Analysis</h3>
                        <div style={{...styles.mediaPlaceholder, minHeight: '300px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" style={{
                                width: '100%',
                                maxWidth: '400px',
                                height: 'auto'
                            }}>
                                {/* Background circle */}
                                <circle cx="200" cy="200" r="180" fill="#fffae3" />
                                
                                {/* Grid circles */}
                                <circle cx="200" cy="200" r="150" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                                <circle cx="200" cy="200" r="100" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                                <circle cx="200" cy="200" r="50" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                                
                                {/* Axes */}
                                <line x1="50" y1="200" x2="350" y2="200" stroke="#e5e7eb" strokeWidth="1" />
                                <line x1="200" y1="50" x2="200" y2="350" stroke="#e5e7eb" strokeWidth="1" />
                                <line x1="98" y1="98" x2="302" y2="302" stroke="#e5e7eb" strokeWidth="1" />
                                <line x1="302" y1="98" x2="98" y2="302" stroke="#e5e7eb" strokeWidth="1" />
                                
                                {/* Category labels */}
                                <text x="370" y="200" fontFamily="Poppins, sans-serif" fontSize="14" textAnchor="middle" fill="#1f2937">JavaScript</text>
                                <text x="200" y="40" fontFamily="Poppins, sans-serif" fontSize="14" textAnchor="middle" fill="#1f2937">Python</text>
                                <text x="30" y="200" fontFamily="Poppins, sans-serif" fontSize="14" textAnchor="middle" fill="#1f2937">React</text>
                                <text x="200" y="370" fontFamily="Poppins, sans-serif" fontSize="14" textAnchor="middle" fill="#1f2937">SQL</text>
                                <text x="90" y="90" fontFamily="Poppins, sans-serif" fontSize="14" textAnchor="middle" fill="#1f2937">Data Analysis</text>
                                <text x="310" y="90" fontFamily="Poppins, sans-serif" fontSize="14" textAnchor="middle" fill="#1f2937">Machine Learning</text>
                                <text x="90" y="310" fontFamily="Poppins, sans-serif" fontSize="14" textAnchor="middle" fill="#1f2937">Testing</text>
                                <text x="310" y="310" fontFamily="Poppins, sans-serif" fontSize="14" textAnchor="middle" fill="#1f2937">Cloud Services</text>
                                
                                {/* Required skills area */}
                                <path d="M200,80 L290,150 L320,200 L290,250 L200,290 L125,270 L90,200 L125,130 Z" 
                                    fill="rgba(237, 80, 13, 0.2)" stroke="#ed500d" strokeWidth="2" />
                                
                                {/* Current skills area */}
                                <path d="M200,120 L265,170 L280,200 L250,235 L200,255 L145,240 L120,200 L145,160 Z" 
                                    fill="rgba(52, 152, 219, 0.4)" stroke="#3498db" strokeWidth="2" />
                                
                                {/* Legend */}
                                <rect x="270" y="340" width="15" height="15" fill="rgba(237, 80, 13, 0.2)" stroke="#ed500d" strokeWidth="2" />
                                <text x="290" y="352" fontFamily="Poppins, sans-serif" fontSize="12" fill="#1f2937">Required Skills</text>
                                
                                <rect x="270" y="365" width="15" height="15" fill="rgba(52, 152, 219, 0.4)" stroke="#3498db" strokeWidth="2" />
                                <text x="290" y="377" fontFamily="Poppins, sans-serif" fontSize="12" fill="#1f2937">Current Skills</text>
                                
                                {/* Central point */}
                                <circle cx="200" cy="200" r="3" fill="#1f2937" />
                            
                            </svg>
                        </div>
                    </div>
                    
                    <div style={styles.featureCard}>
                        <h3 style={styles.featureTitle}>Interview Prep Assistant</h3>
                        <div style={{...styles.mediaPlaceholder, minHeight: '200px'}}>
                            <img 
                                src={Picture5}
                                alt="Mock Interview Interface with AI Feedback"
                                style={{ 
                                    width: "100%", 
                                    height: "auto", 
                                    objectFit: "cover",
                                    borderRadius: "8px"
                                }} 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration CTA */}
            <section style={styles.container}>
                <div style={styles.registrationBox}>
                    <h3 style={styles.featureTitle}>Start Your Career Journey</h3>
                    <form style={styles.form} onSubmit={handleSubmit}>
                        <input 
                            style={styles.input}
                            type="email" 
                            placeholder="Enter your email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <input 
                            style={styles.input}
                            type="file" 
                            accept=".pdf,.docx" 
                        />
                        <button style={styles.ctaButton} type="submit">
                            Analyze My Resume →
                        </button>
                    </form>
                    <p style={styles.privacyNote}>🔒 We never share your data · 🚀 2-minute setup</p>
                </div>
            </section>

            {/* Testimonials Section */}
        <section style={{ margin: "4rem auto", textAlign: "center", maxWidth: "1200px" }}>
                <h2 style={{ color: " #ed500d", fontSize: "2.5rem", marginBottom: "2rem", fontFamily: "Helvetica, Arial, sans-serif" }}>Testimonials</h2>
                
                <div style={{ 
                    display: "flex", overflowX: "auto", gap: "2rem", padding: "20px", scrollBehavior: "smooth",maxWidth: "100%",
                }}>
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            onClick={() => setSelectedTestimonial(testimonial)}
                            style={{
                                background: "#fff5d8",
                                padding: isMobile ? "1rem" : "2rem",
                                borderRadius: "12px",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                                minWidth: isMobile ? "90%" : "400px",
                                maxWidth: isMobile ? "90%" : "450px",
                                textAlign: isMobile ? "center" : "left",
                                fontSize: isMobile ? "14px" : "16px",
                                cursor: "pointer",
                                scrollSnapAlign: "center",
                                margin: "0 auto",
                                
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
                    backdropFilter: "blur(5px)", zIndex: 1000,
                }} 
                onClick={() => setSelectedTestimonial(null)}
            >
                <div 
                    style={{
                        background: "#fff",
                        padding: "2rem 2rem",
                        borderRadius: "12px",
                        maxWidth: "300px",  
                        width: "90%", 
                        textAlign: "center",
                        position: "relative",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                        margin: "0 auto",
                        display: "flex", flexDirection: "column", alignItems: "center",
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
                    <p style={{ 
                        fontStyle: "italic", 
                        color: "#333", 
                        fontSize: window.innerWidth <= 768 ? "14px" : "16px",
                        maxWidth: "90%" 
                    }}>
                        {selectedTestimonial.text}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1rem" }}>
                        {selectedTestimonial.image && (
                            <img src={selectedTestimonial.image} alt={selectedTestimonial.name} 
                                style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "12px" }} />
                        )}
                        <div>
                            <strong style={{ color: "#ed500d" }}>{selectedTestimonial.name}</strong>
                            <p style={{ fontSize: "12px", margin: "0", color: "#666" }}>{selectedTestimonial.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        )}

        </div>
    );
};
export default Benefits;