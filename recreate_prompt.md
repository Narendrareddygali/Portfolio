You are an expert Frontend Web Developer. I need you to recreate my entire portfolio project from end to end. 

Please create the following three files (`index.html`, `styles.css`, and `script.js`) using the exact code provided below to reconstruct my portfolio website. Keep all the styling, theme toggles, animations, text, and structure identical.

### 1. `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>G. Narendra Reddy | Systems Engineer</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css?v=3">
</head>
<body class="light-mode">

    <!-- Template-Style Floating Taskbar -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-socials">
                <a href="https://github.com/Narendrareddygali/" target="_blank" class="social-btn yellow-btn"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/narendra-reddy-7029a92a1/" target="_blank" class="social-btn dark-btn"><i class="fab fa-linkedin-in"></i></a>
            </div>
            
            <div class="nav-pill desktop-nav">
                <ul class="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#achievements">Certificates</a></li>
                    <li><a href="#badges">Achievements</a></li>
                    <li><a href="#skills">Skills</a></li>
                </ul>
            </div>

            <div class="nav-actions">
                <button id="theme-toggle" class="icon-btn theme-toggle-btn" title="Toggle Theme"><i class="fas fa-sun"></i></button>
                <a href="GeneralCv.pdf" download="G_Narendra_Reddy_General_CV.pdf" target="_blank" class="btn-pill" style="background-color: var(--accent); color: white; border: 1px solid var(--accent); font-family: 'Inter', sans-serif; font-weight: 800; text-transform: uppercase; padding: 0.6rem 1.2rem;">Download CV</a>
            </div>
        </div>
    </nav>

    <main class="minimal-grid">
        
        <!-- Hero Section -->
        <section class="hero-section reveal">
            <div class="hero-content">
                <p class="greeting hero-animate-1" style="letter-spacing: 2px;">HELLO, I AM</p>
                <h1 class="giant-text hero-animate-2" style="background: linear-gradient(135deg, var(--text-main) 0%, var(--accent) 100%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: transparent;">G. NARENDRA<br>REDDY</h1>
                <h2 class="subtitle-text hero-animate-3" style="font-family: 'JetBrains Mono', monospace; font-size: 1.4rem; color: var(--text-main); margin-top: 1rem;">I am a <span class="typing-text" style="color: var(--accent);">Full Stack Developer</span><span class="cursor" style="color: var(--accent); font-weight: normal; animation: blink 1s infinite;">|</span></h2>
                <p class="hero-bio hero-animate-4">
                    A developer dedicated to building high-end, scalable web experiences where refined design meets robust engineering.
                </p>
                <div class="hero-buttons hero-animate-5" style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <a href="#projects" class="btn-pill" style="background-color: var(--accent); color: white; border: 1px solid var(--accent); font-family: 'Inter', sans-serif; font-weight: 800; text-align: center; text-transform: uppercase;">VIEW PROJECTS</a>
                    <a href="#skills" class="btn-pill" style="background-color: var(--accent); color: white; border: 1px solid var(--accent); font-family: 'Inter', sans-serif; font-weight: 800; text-align: center; text-transform: uppercase;">CODING PLATFORMS</a>
                </div>
            </div>
            
            <div class="hero-image-wrap">
                <div class="orbit-ring ring-1"></div>
                <div class="orbit-ring ring-2"></div>
                <div class="orbit-ring ring-3"></div>
                <div class="hero-img" style="background-image: url('hero-avatar.jpg?v=3');" title="Narendra Profile"></div>
            </div>
        </section>

        <div class="elegant-line mt-huge reveal delay-1"></div>

        <!-- About Me Section -->
        <section id="about" class="about-section reveal delay-2">
            <div class="about-container">
                <div class="about-image-wrapper">
                    <div class="about-image-frame">
                        <div class="about-img" style="background-image: url('hero-avatar.jpg?v=3');" title="Narendra Profile"></div>
                    </div>
                </div>
                
                <div class="about-text-content">
                    <h2 class="about-heading">About me</h2>
                    <div class="about-line"></div>
                    <p class="about-description">
                        I am a Computer Science & Engineering student with a strong interest in full-stack development and modern web technologies. I work with robust tech stacks to build scalable, high-performance applications that deliver smooth and intuitive user experiences.
                    </p>
                    
                    <div class="about-cards">
                        <a href="https://www.linkedin.com/in/narendra-reddy-7029a92a1/" target="_blank" class="about-card">
                            <div class="card-icon">
                                <i class="fab fa-linkedin-in"></i>
                            </div>
                            <div class="card-text">
                                <span class="card-label">LINKEDIN</span>
                                <span class="card-title">linkedIn/NarendraReddyG</span>
                            </div>
                        </a>

                        <a href="https://github.com/Narendrareddygali/" target="_blank" class="about-card">
                            <div class="card-icon">
                                <i class="fab fa-github"></i>
                            </div>
                            <div class="card-text">
                                <span class="card-label">GITHUB</span>
                                <span class="card-title">github/Narendrareddygali</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <div class="elegant-line mt-huge reveal delay-1"></div>

        <!-- FEATURED WORKS SECTION -->
        <section id="projects" class="featured-works-section reveal delay-2">
            <h2 class="featured-heading">Projects</h2>
            
            <div class="projects-grid">
                
                <!-- Project 1 -->
                <div class="template-project-card project-panel">
                    <div class="image-panel" style="flex-direction: column; align-items: flex-start;">
                        <h3 style="font-family: 'Playfair Display', serif; font-size: 2.2rem; font-weight: 700; color: var(--text-main); margin-bottom: 1.2rem; line-height: 1.1; letter-spacing: -0.5px;">Farm-Tech Website</h3>
                        <div class="image-inner-frame" style="width: 100%;">
                            <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Farm Tech Image" class="project-img animated-img">
                        </div>
                    </div>
                    <div class="content-panel">
                        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--accent); margin-bottom: 0.5rem; letter-spacing: 1px;">APRIL 2025</div>
                        <ul>
                            <li>Developed Farm-Tech, a web-based farmer support system that determines eligibility for government crop schemes based on state, income, land size, and farmer category</li>
                            <li>Built core modules using PHP, HTML, Tailwind CSS, including scheme-eligibility logic, form validations, and responsive dashboard UI</li>
                            <li>Enabled farmers to instantly check scheme eligibility, improving accessibility and reducing manual verification time by >60%</li>
                        </ul>
                        <div class="techstack-container">
                            <span class="techstack-tag">TECHSTACK : HTML, TAILWIND CSS, PHP</span>
                        </div>

                        <div class="project-links">
                            <a href="https://github.com/Narendrareddygali/farmer_portel" target="_blank" class="btn-pill solid-white">
                                <i class="fab fa-github"></i> GITHUB
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="template-project-card project-panel">
                    <div class="image-panel" style="flex-direction: column; align-items: flex-start;">
                        <h3 style="font-family: 'Playfair Display', serif; font-size: 2.2rem; font-weight: 700; color: var(--text-main); margin-bottom: 1.2rem; line-height: 1.1; letter-spacing: -0.5px;">Inventory Management System</h3>
                        <div class="image-inner-frame" style="width: 100%;">
                            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Inventory Data Server" class="project-img animated-img">
                        </div>
                    </div>
                    <div class="content-panel">
                        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--accent); margin-bottom: 0.5rem; letter-spacing: 1px;">JULY 2025</div>
                        <ul>
                            <li>Built an Inventory Management System that allows users to add, rename, delete, search, and view all products with efficient data handling and organized product tracking</li>
                            <li>Designed and implemented core functionalities using C++ with AVL Tree, optimizing product lookup and ensuring balanced, high-performance operations</li>
                            <li>Improved product retrieval speed and system stability, reducing search time by up to 50% through AVL tree–based indexing</li>
                        </ul>
                        <div class="techstack-container">
                            <span class="techstack-tag">TECHSTACK : C++, AVL TREES</span>
                        </div>

                        <div class="project-links">
                            <a href="https://github.com/Narendrareddygali/Inventory-Management-System" target="_blank" class="btn-pill solid-white">
                                <i class="fab fa-github"></i> GITHUB
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <div class="elegant-line mt-huge reveal delay-1"></div>

        <!-- TRAINING SECTION -->
        <section id="training" class="training-modern-section reveal delay-2" style="padding: 3rem 0; width: 100%;">
            <div class="section-header-container" style="margin-bottom: 2.5rem;">
                <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 800; color: var(--text-main); letter-spacing: -0.5px;">Training</h2>
                <div style="width: 40px; height: 3px; background-color: var(--accent); margin-top: 0.5rem; border-radius: 2px;"></div>
            </div>
            
            <div class="about-container" style="align-items: stretch; padding: 2.5rem; gap: 2rem; border: 1px solid var(--border); border-radius: 12px; background-color: var(--bg-main);">
                               <!-- Left Side: Information -->
                <div class="training-info" style="flex: 1.2; display: flex; flex-direction: column; justify-content: space-between; gap: 1.5rem;">
                    <div>
                        <h3 style="font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.4rem; line-height: 1.3;">Summer Training in Advance Data Structure</h3>
                        <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; font-weight: 800; color: #ca8a04; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 0.4rem;">LOVELY PROFESSIONAL UNIVERSITY</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem;">July 2025</div>
                        
                        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; color: var(--text-muted); letter-spacing: 1.5px; text-transform: uppercase; font-weight: 800; margin-bottom: 0.6rem;">PROGRAM HIGHLIGHTS</div>
                        
                        <ul style="list-style: none; padding: 0; margin-bottom: 0;">
                            <li style="position: relative; padding-left: 1.5rem; margin-bottom: 0.5rem; color: var(--text-muted); font-size: 0.9rem; line-height: 1.5;"><span style="position: absolute; left: 0; color: var(--text-muted);">â€”</span> Learned key advanced data structures like AVL Trees, Heaps, and Trees</li>
                            <li style="position: relative; padding-left: 1.5rem; margin-bottom: 0.5rem; color: var(--text-muted); font-size: 0.9rem; line-height: 1.5;"><span style="position: absolute; left: 0; color: var(--text-muted);">â€”</span> Implemented efficient search and traversal techniques using BFS and DFS</li>
                            <li style="position: relative; padding-left: 1.5rem; margin-bottom: 0.5rem; color: var(--text-muted); font-size: 0.9rem; line-height: 1.5;"><span style="position: absolute; left: 0; color: var(--text-muted);">â€”</span> Applied graph and tree algorithms to solve complex computational problems</li>
                        </ul>
                    </div>
                    
                    <a href="https://drive.google.com/file/d/1X8ytof5u1TPQis5ZPlai_RRsvQOQmr8A/view" target="_blank" class="btn-pill outline-yellow" style="color: var(--accent); border: 1px solid var(--accent); padding: 0.7rem 1.6rem; border-radius: 6px; display: inline-flex; width: max-content; font-size: 0.7rem; font-weight: 800; letter-spacing: 1.5px; text-decoration: none; transition: 0.3s ease;" onmouseover="this.style.backgroundColor='var(--accent)'; this.style.color='#fff';" onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--accent';">
                        <i class="fas fa-download" style="margin-right: 0.5rem;"></i> DOWNLOAD CERTIFICATE
                    </a>
                </div>

                <!-- Right Side: Certificate Image -->
                <div class="training-certificate-pane" style="flex: 1.1; display: flex; align-items: center; justify-content: center; padding: 0.5rem; border: 1px solid var(--border); border-radius: 12px; background: transparent;">
                    <img src="https://drive.google.com/thumbnail?id=1X8ytof5u1TPQis5ZPlai_RRsvQOQmr8A&sz=w1000" alt="Training Certificate" style="width: 100%; border-radius: 6px; max-width: 550px; aspect-ratio: 1.414/1; object-fit: cover; object-position: center 8%; border: none; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease; position: relative; z-index: 1; cursor: zoom-in;" onmouseover="this.style.transform='translateY(-10px) scale(1.2)'; this.style.boxShadow='0 30px 60px rgba(0,0,0,0.2)'; this.style.zIndex='50'" onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 10px 30px rgba(0, 0, 0, 0.1)'; this.style.zIndex='1'" onclick="document.getElementById('img-lightbox').style.display='flex'; document.getElementById('lightbox-content').src=this.src.replace('w1000', 'w2500');">
                </div>
            </div>
        </section>

        <!-- CERTIFICATIONS SECTION -->
        <section id="achievements" class="achievements-section reveal delay-2">
            <div class="section-header-container">
                <h2 class="template-heading">Certifications</h2>
                <div class="template-line"></div>
            </div>
            
            <div class="cert-grid">
                <!-- Certificate 1 -->
                <div class="cert-card">
                    <div class="cert-image-container">
                        <span class="cert-number">01</span>
                        <div class="cert-image-inner" style="overflow: hidden; border-radius: 8px; padding: 10px;">
                            <img src="https://drive.google.com/thumbnail?id=1nhdQZieIbk9KWPaxl5IBz-Etgxct7Vpv&sz=w800" alt="Certificate" style="cursor: zoom-in; width: 100%; height: auto; object-fit: contain; border-radius: 4px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);" onclick="document.getElementById('lightbox-content').src=this.src; document.getElementById('img-lightbox').style.display='flex';">
                        </div>
                    </div>
                    <div class="cert-content">
                        <h3 class="cert-title">Responsive Web Design</h3>
                        <div class="cert-issuer" style="color: var(--accent);">FreeCodecamp</div>
                        <div class="cert-date">October 2023</div>
                    </div>
                    <a href="https://drive.google.com/file/d/1nhdQZieIbk9KWPaxl5IBz-Etgxct7Vpv/view" target="_blank" class="cert-download-btn" style="color: var(--accent); border-color: var(--accent);">
                        <i class="fas fa-download"></i> VIEW CERTIFICATE
                    </a>
                </div>
                
                <!-- Certificate 2 -->
                <div class="cert-card">
                    <div class="cert-image-container">
                        <span class="cert-number">02</span>
                        <div class="cert-image-inner" style="overflow: hidden; border-radius: 8px; padding: 10px;">
                            <img src="https://drive.google.com/thumbnail?id=1nw8DSHX2GiOWTuHZfDWio-x2OX50KKpz&sz=w800" alt="Certificate" style="cursor: zoom-in; width: 100%; height: 100%; object-fit: cover; object-position: center; border-radius: 4px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);" onclick="document.getElementById('lightbox-content').src=this.src; document.getElementById('img-lightbox').style.display='flex';">
                        </div>
                    </div>
                    <div class="cert-content">
                        <h3 class="cert-title">Certificate of Complete Full-Stack Web Development Bootcamp</h3>
                        <div class="cert-issuer" style="color: var(--accent);">UDEMY</div>
                        <div class="cert-date">September 2024</div>
                    </div>
                    <a href="https://drive.google.com/file/d/1nw8DSHX2GiOWTuHZfDWio-x2OX50KKpz/view?usp=sharing" target="_blank" class="cert-download-btn" style="color: var(--accent); border-color: var(--accent);">
                        <i class="fas fa-download"></i> VIEW CERTIFICATE
                    </a>
                </div>

                <!-- Certificate 3 -->
                <div class="cert-card">
                    <div class="cert-image-container">
                        <span class="cert-number">03</span>
                        <div class="cert-image-inner" style="overflow: hidden; border-radius: 8px; padding: 10px;">
                            <img src="https://drive.google.com/thumbnail?id=10USHNJ3dpTaPcNRatpAmqbxcf7RljNDB&sz=w800" alt="Certificate" style="cursor: zoom-in; width: 100%; height: 100%; object-fit: cover; object-position: center; border-radius: 4px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);" onclick="document.getElementById('lightbox-content').src=this.src; document.getElementById('img-lightbox').style.display='flex';">
                        </div>
                    </div>
                    <div class="cert-content">
                        <h3 class="cert-title">Completion of Advance Data structure</h3>
                        <div class="cert-issuer" style="color: var(--accent);">LPU</div>
                        <div class="cert-date">July 2025</div>
                    </div>
                    <a href="https://drive.google.com/file/d/10USHNJ3dpTaPcNRatpAmqbxcf7RljNDB/view?usp=sharing" target="_blank" class="cert-download-btn" style="color: var(--accent); border-color: var(--accent);">
                        <i class="fas fa-download"></i> VIEW CERTIFICATE
                    </a>
                </div>

                <!-- Certificate 4 -->
                <div class="cert-card">
                    <div class="cert-image-container">
                        <span class="cert-number">04</span>
                        <div class="cert-image-inner" style="overflow: hidden; border-radius: 8px; padding: 10px;">
                            <img src="https://drive.google.com/thumbnail?id=1V5GwLBElqqZyS3BIrYYGsNEfr-YtlNRN&sz=w800" alt="Certificate" style="cursor: zoom-in; width: 100%; height: auto; object-fit: contain; border-radius: 4px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);" onclick="document.getElementById('lightbox-content').src=this.src; document.getElementById('img-lightbox').style.display='flex';">
                        </div>
                    </div>
                    <div class="cert-content">
                        <h3 class="cert-title">Completion of Full Stack development with MERN</h3>
                        <div class="cert-issuer" style="color: var(--accent);">thingQbator</div>
                        <div class="cert-date">2024</div>
                    </div>
                    <a href="https://drive.google.com/file/d/1V5GwLBElqqZyS3BIrYYGsNEfr-YtlNRN/view?usp=sharing" target="_blank" class="cert-download-btn" style="color: var(--accent); border-color: var(--accent);">
                        <i class="fas fa-download"></i> VIEW CERTIFICATE
                    </a>
                </div>

                <!-- Certificate 5 -->
                <div class="cert-card">
                    <div class="cert-image-container">
                        <span class="cert-number">05</span>
                        <div class="cert-image-inner" style="overflow: hidden; border-radius: 8px; padding: 10px;">
                            <img src="https://drive.google.com/thumbnail?id=1Di7gbOYCSoTV3N44ECyHFqI-Yu4E96Zm&sz=w800" alt="Certificate" style="cursor: zoom-in; width: 100%; height: auto; object-fit: contain; border-radius: 4px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);" onclick="document.getElementById('lightbox-content').src=this.src; document.getElementById('img-lightbox').style.display='flex';">
                        </div>
                    </div>
                    <div class="cert-content">
                        <h3 class="cert-title">NPTEL CLOUD COMPUTING</h3>
                        <div class="cert-issuer" style="color: var(--accent);">NPTEL</div>
                        <div class="cert-date">APRIL 2025</div>
                    </div>
                    <a href="https://drive.google.com/file/d/1Di7gbOYCSoTV3N44ECyHFqI-Yu4E96Zm/view?usp=sharing" target="_blank" class="cert-download-btn" style="color: var(--accent); border-color: var(--accent);">
                        <i class="fas fa-download"></i> VIEW CERTIFICATE
                    </a>
                </div>

                <!-- Certificate 6 -->
                <div class="cert-card">
                    <div class="cert-image-container">
                        <span class="cert-number">06</span>
                        <div class="cert-image-inner" style="overflow: hidden; border-radius: 8px; padding: 10px;">
                            <img src="https://drive.google.com/thumbnail?id=1Xc3vTtOtxc038Yh9WA8MMyaMlGNMQcbY&sz=w800" alt="Certificate" style="cursor: zoom-in; width: 100%; height: auto; object-fit: contain; border-radius: 4px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);" onclick="document.getElementById('lightbox-content').src=this.src; document.getElementById('img-lightbox').style.display='flex';">
                        </div>
                    </div>
                    <div class="cert-content">
                        <h3 class="cert-title">HACKATON</h3>
                        <div class="cert-issuer" style="color: var(--accent);">IoT Hackathon</div>
                        <div class="cert-date">FEB-2024</div>
                    </div>
                    <a href="https://drive.google.com/file/d/1Xc3vTtOtxc038Yh9WA8MMyaMlGNMQcbY/view?usp=sharing" target="_blank" class="cert-download-btn" style="color: var(--accent); border-color: var(--accent);">
                        <i class="fas fa-download"></i> VIEW CERTIFICATE
                    </a>
                </div>

            </div>
        </section>

        <div class="elegant-line mt-huge reveal delay-1"></div>

        <!-- ACHIEVEMENTS SECTION -->
        <section id="badges" class="achievements-section reveal delay-2">
            <div class="section-header-container" style="margin-bottom: 2.5rem;">
                <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 800; color: var(--text-main); letter-spacing: -0.5px;">Achievements</h2>
                <div style="width: 40px; height: 3px; background-color: var(--accent); margin-top: 0.5rem; border-radius: 2px;"></div>
            </div>
            
            <div class="cert-grid">
                <!-- Achievement 1 -->
                <div class="badge-card">
                    <div class="badge-number">01</div>
                    <div class="badge-image">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/200px-HackerRank_Icon-1000px.png" style="width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));" alt="HackerRank">
                    </div>
                    <div class="badge-text">
                        5 Star Achievement<br>in C++ HackerRank
                    </div>
                </div>

                <!-- Achievement 2 -->
                <div class="badge-card">
                    <div class="badge-number">02</div>
                    <div class="badge-image">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/200px-HackerRank_Icon-1000px.png" style="width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));" alt="HackerRank">
                    </div>
                    <div class="badge-text">
                        5 Star Achievement<br>in Java HackerRank
                    </div>
                </div>

                <!-- Achievement 3 -->
                <div class="badge-card">
                    <div class="badge-number">03</div>
                    <div class="badge-image">
                        <img src="https://leetcode.com/static/images/badges/2024/gif/2024-50.gif" onerror="this.src='https://leetcode.com/static/images/badges/2024/gif/2024-01.gif'" alt="50 Days Badge">
                    </div>
                    <div class="badge-text">
                        50 Days Badge<br>2026
                    </div>
                </div>

                <!-- Achievement 4 -->
                <div class="badge-card">
                    <div class="badge-number">04</div>
                    <div class="badge-image">
                        <img src="https://leetcode.com/static/images/badges/2024/gif/2024-01.gif" alt="Jan LeetCoding">
                    </div>
                    <div class="badge-text">
                        Jan LeetCoding<br>Challenge
                    </div>
                </div>
            </div>
        </section>

        <!-- PROGRAMMING PROFICIENCY SECTION -->
        <section id="programming-proficiency" class="programming-section reveal delay-2" style="margin-top: 5rem;">
            <div class="section-header-container" style="margin-bottom: 2.5rem;">
                <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 800; color: var(--text-main); letter-spacing: -0.5px;">Programming Proficiency</h2>
                <div style="width: 60px; height: 3px; background-color: var(--accent); margin-top: 0.5rem; border-radius: 2px;"></div>
            </div>
            
            <div class="prog-grid">
                <!-- LeetCode Card -->
                <div class="prog-card">
                    <div class="prog-header">
                        <div class="prog-icon"><i class="fas fa-code"></i></div>
                        <h3 class="prog-title">LeetCode</h3>
                    </div>
                    
                    <div class="prog-stats">
                        <div class="prog-stat">
                            <div class="prog-label">GLOBAL RANK</div>
                            <div class="prog-value">990,707</div>
                        </div>
                        <div class="prog-stat">
                            <div class="prog-label">SOLVED</div>
                            <div class="prog-value">155/3873</div>
                        </div>
                        <div class="prog-stat">
                            <div class="prog-label">MAX STREAK</div>
                            <div class="prog-value">93 Days</div>
                        </div>
                        <div class="prog-stat">
                            <div class="prog-label">TOTAL ACTIVE</div>
                            <div class="prog-value">95 Days</div>
                        </div>
                    </div>
                    
                    <div class="prog-mastery">
                        <div class="prog-mastery-header">
                            <span class="prog-mastery-label">Skill Mastery</span>
                            <span class="prog-mastery-percent">65%</span>
                        </div>
                        <div class="prog-mastery-bar">
                            <div class="prog-mastery-fill" style="width: 65%;"></div>
                        </div>
                    </div>
                    
                    <a href="https://leetcode.com/u/Narendra_i8/" target="_blank" class="prog-btn">Visit Profile</a>
                </div>
                
                

                <!-- HackerRank Card -->
                <div class="prog-card">
                    <div class="prog-header">
                        <div class="prog-icon"><i class="fas fa-terminal"></i></div>
                        <h3 class="prog-title">HackerRank</h3>
                    </div>
                    
                    <div class="prog-stats" style="grid-template-rows: auto auto; align-content: start;">
                        <div class="prog-stat">
                            <div class="prog-label">BADGES</div>
                            <div class="prog-value">C++, Java, 30 Days</div>
                        </div>
                        <div class="prog-stat">
                            <div class="prog-label">PROFICIENCY</div>
                            <div class="prog-value">5 Stars</div>
                        </div>
                    </div>
                    
                    <div class="prog-mastery" style="margin-top: auto;">
                        <div class="prog-mastery-header">
                            <span class="prog-mastery-label">Skill Mastery</span>
                            <span class="prog-mastery-percent">85%</span>
                        </div>
                        <div class="prog-mastery-bar">
                            <div class="prog-mastery-fill" style="width: 85%;"></div>
                        </div>
                    </div>
                    
                    <a href="https://www.hackerrank.com/profile/narendra18reddy" target="_blank" class="prog-btn">Visit Profile</a>
                </div>
            </div>
        </section>
        <div class="elegant-line mt-huge reveal delay-1"></div>

        <!-- TECHNICAL PROFICIENCY SECTION -->
        <section id="skills" class="skills-section reveal delay-2">
            <div class="section-header-container">
                <h2 class="template-heading">Technical Proficiency</h2>
                <div class="template-line"></div>
            </div>

            <div class="prof-grid">
                <!-- Card 1: Core Languages -->
                <div class="prof-card">
                    <div class="prof-category">CORE LANGUAGES</div>
                    <div class="tech-grid">
                        <div class="tech-item"><div class="tech-icon"><span style="font-family: 'Inter', sans-serif; color: #3b82f6; font-size: 1.3rem; font-weight: 800;">C++</span></div><span>C++</span></div>
                        <div class="tech-item"><div class="tech-icon"><i class="fab fa-java" style="color: #ef4444;"></i></div><span>Java</span></div>
                        <div class="tech-item"><div class="tech-icon"><i class="fab fa-js-square" style="color: #facc15;"></i></div><span>JavaScript</span></div>
                        <div class="tech-item"><div class="tech-icon"><i class="fab fa-python" style="color: #eab308;"></i></div><span>Python</span></div>
                        <div class="tech-item"><div class="tech-icon"><i class="fab fa-html5" style="color: #f97316;"></i></div><span>HTML</span></div>
                        <div class="tech-item"><div class="tech-icon"><i class="fab fa-css3-alt" style="color: #3b82f6;"></i></div><span>CSS</span></div>
                    </div>
                </div>

                <!-- Card 2: Architecture & Frameworks -->
                <div class="prof-card">
                    <div class="prof-category">ARCHITECTURE & FRAMEWORKS</div>
                    <div class="tech-grid">
                        <div class="tech-item"><div class="tech-icon"><i class="fab fa-react" style="color: #38bdf8;"></i></div><span>React JS</span></div>
                        <div class="tech-item"><div class="tech-icon"><i class="fab fa-node-js" style="color: #22c55e;"></i></div><span>Node JS</span></div>
                        <div class="tech-item"><div class="tech-icon"><span style="font-family: 'Inter', sans-serif; color: #a3a3a3; font-size: 0.9rem; font-weight: 800;">ex</span></div><span>Express JS</span></div>
                    </div>
                </div>

                <!-- Card 3: Databases & Tools -->
                <div class="prof-card">
                    <div class="prof-category">DATABASES & TOOLS</div>
                    <div class="tech-grid">
                        <div class="tech-item"><div class="tech-icon"><i class="fas fa-database" style="color: #60a5fa;"></i></div><span>MySQL</span></div>
                        <div class="tech-item"><div class="tech-icon"><i class="fas fa-rocket" style="color: #f97316;"></i></div><span>Postman</span></div>
                        <div class="tech-item"><div class="tech-icon"><i class="fas fa-laptop-code" style="color: #3b82f6;"></i></div><span>VS Code</span></div>
                        <div class="tech-item"><div class="tech-icon"><i class="fab fa-github" style="color: #ffffff;"></i></div><span>Git/GitHub</span></div>
                    </div>
                </div>

            </div>
        </section>

        <div class="elegant-line mt-huge reveal delay-1"></div>

        <!-- EDUCATION SECTION -->
        <section id="education" class="list-section reveal delay-2" style="padding: 3rem 0; width: 100%;">
            <div class="section-header-container" style="margin-bottom: 2.5rem;">
                <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 800; color: var(--text-main); letter-spacing: -0.5px;">Education</h2>
                <div style="width: 40px; height: 3px; background-color: var(--accent); margin-top: 0.5rem; border-radius: 2px;"></div>
            </div>
            <div class="list-container" style="padding: 0 4rem; background-color: var(--nav-bg); border: none; border-radius: 20px; box-shadow: 0 15px 50px rgba(0,0,0,0.08);">
                <div class="list-item" style="display: flex; flex-direction: column; gap: 0.8rem; align-items: stretch;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h3 style="margin: 0; font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 800; color: var(--text-main);">Lovely Professional University</h3>
                        <span style="font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 700; color: var(--text-main); text-align: right;">Punjab, India</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                        <p style="margin: 0; font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #64748b;">&bull;&nbsp; Bachelor of Technology - Computer Science and Engineering; CGPA: 6.70</p>
                        <span style="font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 800; color: var(--accent); white-space: nowrap;">Since August 2023</span>
                    </div>
                </div>
                <div class="elegant-line" style="opacity: 0.2"></div>
                <div class="list-item" style="display: flex; flex-direction: column; gap: 0.8rem; align-items: stretch;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h3 style="margin: 0; font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 800; color: var(--text-main);">Sri.Chaitanya</h3>
                        <span style="font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 700; color: var(--text-main); text-align: right;">Vijayawada, Andhra Pradesh</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                        <p style="margin: 0; font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #64748b;">&bull;&nbsp; Intermediate; Percentage: 76%</p>
                        <span style="font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 800; color: var(--accent); white-space: nowrap;">2021 - 2023</span>
                    </div>
                </div>
                <div class="elegant-line" style="opacity: 0.2"></div>
                <div class="list-item" style="display: flex; flex-direction: column; gap: 0.8rem; align-items: stretch;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h3 style="margin: 0; font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 800; color: var(--text-main);">St.Ann’s English Medium School</h3>
                        <span style="font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 700; color: var(--text-main); text-align: right;">Macherla, Andhra Pradesh</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                        <p style="margin: 0; font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #64748b;">&bull;&nbsp; Matriculation; Percentage: 92.4%</p>
                        <span style="font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 800; color: var(--accent); white-space: nowrap;">2020 - 2021</span>
                    </div>
                </div>
            </div>
        </section>

        <div class="elegant-line mt-huge reveal delay-1"></div>

        <!-- CONTACT SECTION -->
        <section id="contact-me" class="contact-section reveal delay-2" style="margin-top: 3rem;">
            <div class="contact-layout">
                <!-- Left Side: Text and info -->
                <div class="contact-copy">
                    <h2 class="contact-heading">Let's<br><span class="contact-accent">Connect</span></h2>
                    <div class="contact-accent-line"></div>
                    <p class="contact-desc">
                        Currently open to new opportunities and interesting collaborations. Reach out if you have a project in mind or just want to chat.
                    </p>
                    
                    <div class="contact-info-grid">
                        <div class="contact-info-item" style="cursor: pointer;" onclick="window.location.href='mailto:narendra18reddy@gmail.com'">
                            <div class="contact-icon-box"><i class="fas fa-envelope"></i></div>
                            <div class="contact-info-text">
                                <span>EMAIL</span>
                                <strong>narendra18reddy@gmail.com</strong>
                            </div>
                        </div>
                        <div class="contact-info-item" style="cursor: pointer;" onclick="window.open('https://www.linkedin.com/in/narendra-reddy-7029a92a1/', '_blank')">
                            <div class="contact-icon-box"><i class="fab fa-linkedin-in"></i></div>
                            <div class="contact-info-text">
                                <span>LINKEDIN</span>
                                <strong>linkedIn/NarendraReddyG</strong>
                            </div>
                        </div>
                        <div class="contact-info-item" style="cursor: pointer;" onclick="window.location.href='tel:+919063773772'">
                            <div class="contact-icon-box"><i class="fas fa-phone"></i></div>
                            <div class="contact-info-text">
                                <span>MOBILE</span>
                                <strong>+91 9063773772</strong>
                            </div>
                        </div>
                        <div class="contact-info-item" style="cursor: pointer;" onclick="window.open('https://github.com/Narendrareddygali/', '_blank')">
                            <div class="contact-icon-box"><i class="fab fa-github"></i></div>
                            <div class="contact-info-text">
                                <span>GITHUB</span>
                                <strong>github/Narendrareddygali</strong>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Right Side: Form Card -->
                <div class="contact-form-card">
                    <form id="contact-form" action="https://formsubmit.co/narendra18reddy@gmail.com" method="POST" class="contact-form">
                        <!-- Extra configuration for FormSubmit -->
                        <input type="hidden" name="_captcha" value="false">
                        <input type="hidden" name="_template" value="table">
                        <input type="hidden" name="_subject" value="New Portfolio Inquiry!">

                        <div class="form-row">
                            <div class="form-group">
                                <label>FULL NAME</label>
                                <input type="text" name="name" placeholder="Enter your name" required>
                            </div>
                            <div class="form-group">
                                <label>EMAIL ADDRESS</label>
                                <input type="email" name="email" placeholder="Enter your email" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>YOUR MESSAGE</label>
                            <textarea name="message" placeholder="Feel free to reach out..." rows="5" required></textarea>
                        </div>
                        <div id="form-status" class="form-status"></div>
                        <button type="submit" id="submit-btn" class="submit-btn"><i class="fas fa-paper-plane" style="margin-right: 8px;"></i> SEND INQUIRY</button>
                    </form>
                </div>
            </div>
        </section>

        <footer class="rich-footer">
            <div class="rich-footer-container">
                <!-- Column 1: Brand & Bio -->
                <div class="rich-col brand-col" style="flex: 1.5;">
                    <h2 class="rich-brand">G. N. R.</h2>
                    <p class="rich-bio">Design-driven software engineer focused on building beautiful, functional, and user-centric digital experiences.</p>
                    <div class="rich-socials">
                        <a href="https://github.com/Narendrareddygali/" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/narendra-reddy-7029a92a1/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

                <!-- Column 2: Navigation -->
                <div class="rich-col links-col">
                    <h4 class="rich-heading">NAVIGATION</h4>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact-me">Contact</a></li>
                    </ul>
                </div>

                <!-- Column 3: Connect -->
                <div class="rich-col icon-links-col">
                    <h4 class="rich-heading">CONNECT</h4>
                    <ul>
                        <li><a href="mailto:narendra18reddy@gmail.com"><i class="far fa-envelope"></i> narendra18reddy@gmail.com</a></li>
                        <li><a href="tel:+919063773772"><i class="fas fa-phone-alt" style="transform: scaleX(-1);"></i> +91 9063773772</a></li>
                    </ul>
                </div>

                <!-- Column 4: Availability -->
                <div class="rich-col avail-col" style="flex: 1.2;">
                    <h4 class="rich-heading">AVAILABILITY</h4>
                    <div class="avail-card">
                        <div class="avail-top">
                            <span class="status-dot"></span>
                            <span class="status-text">Available for hire</span>
                        </div>
                        <p class="avail-desc">Open for high-impact roles or projects.</p>
                    </div>
                </div>
            </div>

            <div class="rich-footer-bottom">
                <p>&copy; 2026 Developed by G. Narendra Reddy.</p>
            </div>
        </footer>
    </main>

    <!-- Lightbox Modal Overlay -->
    <div id="img-lightbox" style="display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.85); z-index: 10000; align-items: center; justify-content: center; cursor: zoom-out; backdrop-filter: blur(5px);" onclick="this.style.display='none'">
        <img id="lightbox-content" src="" alt="Expanded Certificate" style="max-width: 90%; max-height: 90vh; object-fit: contain; border-radius: 8px; box-shadow: 0 15px 50px rgba(0,0,0,0.5);">
    </div>

    <!-- Back to Top Button -->
    <button id="back-to-top" class="back-to-top-btn" title="Go to top">
        <i class="fas fa-arrow-up"></i>
    </button>

    <!-- Scripts -->
    <script src="script.js"></script>
</body>
</html>

```

### 2. `styles.css`
```css
/* ===== TEMPLATE ACCENT & TYPOGRAPHY (Original Layout) ===== */
:root {
    --bg-main: #f4f4f5;
    --text-main: #0f172a;
    --text-muted: #64748b;
    --accent: #ca8a04;
    --accent-hover: #a16207;
    --border: #e2e8f0;
    --nav-bg: #ffffff;
    --nav-btn: #f1f5f9;
}

body.dark-mode {
    --bg-main: #09090b;
    --text-main: #f8fafc;
    --text-muted: #9ca3af;
    --accent: #facc15;
    --accent-hover: #eab308;
    --border: #27272a;
    --nav-bg: #18181b;
    --nav-btn: #27272a;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-main);
    color: var(--text-main);
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
}



/* Base Container - Reduced from 1400px to 1100px for comprehensive global downscaling */
.minimal-grid {
    max-width: 1100px;
    margin: 0 auto;
    padding: 120px 2rem 4rem 2rem;
}

/* ===== TEMPLATE TASKBAR/NAVBAR ===== */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 1.2rem 0;
    transition: all 0.3s ease;
}

.navbar.scrolled {
    background-color: var(--nav-bg);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--border);
}

.nav-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-socials {
    display: flex;
    gap: 0.6rem;
}

.social-btn {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    transition: 0.2s;
    color: var(--text-main);
}

.social-btn.yellow-btn {
    background-color: var(--accent);
    color: #000;
}

.social-btn.yellow-btn:hover {
    background-color: var(--accent-hover);
    transform: scale(1.05);
}

.social-btn.dark-btn {
    background-color: var(--nav-btn);
    border: 1px solid var(--border);
}

.social-btn.dark-btn:hover {
    background-color: var(--border);
    transform: scale(1.05);
}

.nav-pill {
    background-color: var(--nav-bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.7rem 2rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.nav-links {
    display: flex;
    gap: 1.5rem;
}

.nav-links a {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: var(--text-main);
    transition: color 0.2s;
}

.nav-links a:hover {
    color: var(--accent);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 1.2rem;
}

.theme-toggle-btn {
    background: transparent;
    border: none;
    font-size: 1.2rem;
    color: var(--text-main);
    cursor: pointer;
    transition: 0.2s;
    display: flex;
}

.theme-toggle-btn:hover {
    color: var(--accent);
    transform: scale(1.1);
}

.btn-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: 0.2s;
    cursor: pointer;
    text-decoration: none;
}

.btn-pill.solid-yellow {
    background-color: var(--accent);
    color: #fff;
    border: 1px solid var(--accent);
}

.btn-pill.solid-yellow:hover {
    background-color: var(--accent-hover);
    border-color: var(--accent-hover);
}

.btn-pill.outline-yellow {
    background-color: transparent;
    color: var(--accent);
    border: 1px solid var(--accent);
}

.btn-pill.outline-yellow:hover {
    background-color: var(--accent);
    color: #fff;
}

.btn-pill.solid-white {
    background-color: var(--text-main);
    color: var(--bg-main);
    border: 1px solid var(--text-main);
}

.btn-pill.solid-white:hover {
    background-color: transparent;
    color: var(--text-main);
}

/* ===== TEMPLATE HERO ===== */
.hero-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 3rem 0;
}

.hero-content {
    flex: 1.2;
}

.greeting {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-muted);
    margin-bottom: 0.5rem;
    letter-spacing: 0.5px;
}

.giant-text {
    font-family: 'Inter', sans-serif;
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -1.5px;
    color: var(--text-main);
    margin-bottom: 0.8rem;
}

.subtitle-text {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--accent);
}

.cursor {
    animation: blink 1s step-end infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

.hero-bio {
    font-size: 1rem;
    color: var(--text-muted);
    max-width: 450px;
    margin-bottom: 2rem;
    line-height: 1.8;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
}

.hero-image-wrap {
    flex: 0.8;
    display: flex;
    justify-content: center;
    position: relative;
    perspective: 1000px;
}

.hero-img {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-size: cover;
    background-position: center 20%;
    background-repeat: no-repeat;
    position: relative;
    z-index: 5;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
    border: 10px solid var(--nav-bg);
    animation: floatProfile 6s ease-in-out infinite;
}

@keyframes floatProfile {

    0%,
    100% {
        transform: translateY(0);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }

    50% {
        transform: translateY(-15px);
        box-shadow: 0 30px 40px rgba(0, 0, 0, 0.05);
    }
}

@keyframes slideUpFade {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero-animate-1 {
    animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
}

.hero-animate-2 {
    animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s;
    opacity: 0;
}

.hero-animate-3 {
    animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.35s;
    opacity: 0;
}

.hero-animate-4 {
    animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.5s;
    opacity: 0;
}

.hero-animate-5 {
    animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.65s;
    opacity: 0;
}

.orbit-ring {
    position: absolute;
    border-radius: 50%;
    opacity: 0.8;
    z-index: 1;
    pointer-events: none;
    display: block;
}

.ring-1 {
    inset: -30px;
    animation: spin 40s linear infinite;
}

.ring-2 {
    inset: -65px;
    border: 1px dotted var(--text-main);
    opacity: 0.15;
    animation: spin-reverse 50s linear infinite;
}

.ring-3 {
    inset: -100px;
    border: 1px dashed var(--text-main);
    opacity: 0.08;
    animation: spin 60s linear infinite;
}

@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes spin-reverse {
    100% {
        transform: rotate(-360deg);
    }
}

/* ===== REUSABLE SECTION HEADERS ===== */
.section-header-container {
    margin-bottom: 3rem;
}

.template-heading {
    font-family: 'Playfair Display', serif;
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--accent);
    text-shadow: 0 0 15px rgba(250, 204, 21, 0.1);
    margin-bottom: 0.8rem;
    letter-spacing: -0.5px;
}

.template-line {
    width: 40px;
    height: 3px;
    background-color: var(--accent);
    border-radius: 2px;
}

/* ===== SECTION: ABOUT ME ===== */
.about-section {
    padding: 2rem 0;
}

.about-container {
    display: flex;
    gap: 3rem;
    align-items: center;
    padding: 3rem;
    background-color: var(--nav-bg);
    border: 1px solid #cbd5e1;
    border-radius: 20px;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
}

.about-image-wrapper {
    flex: 0.8;
}

.about-image-frame {
    background-color: var(--bg-main);
    border-radius: 12px;
    padding: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--border);
}

.about-img {
    width: 100%;
    max-width: 250px;
    aspect-ratio: 1/1.1;
    background-size: cover;
    background-position: center 20%;
    background-repeat: no-repeat;
    border-radius: 10px;
    filter: grayscale(100%);
}

.about-text-content {
    flex: 1.2;
}

.about-heading {
    font-family: 'Playfair Display', serif;
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--accent);
    text-shadow: 0 0 15px rgba(250, 204, 21, 0.1);
    margin-bottom: 0.8rem;
    letter-spacing: -0.5px;
}

.about-line {
    width: 40px;
    height: 3px;
    background-color: var(--accent);
    margin-bottom: 1.5rem;
    border-radius: 2px;
}

.about-description {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--text-muted);
    margin-bottom: 2rem;
}

.about-cards {
    display: flex;
    gap: 1rem;
}

.about-card {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.2rem;
    background-color: var(--nav-bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    transition: 0.3s ease;
    text-decoration: none;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
}

.about-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
    border-color: var(--accent);
}

.card-icon {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 1.2rem;
    background-color: rgba(250, 204, 21, 0.08);
    color: var(--accent);
}

.card-text {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.card-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.6rem;
    font-weight: 700;
    color: var(--text-muted);
    letter-spacing: 1.5px;
    text-transform: uppercase;
}

.card-title {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--text-main);
}


/* ===== SECTION: FEATURED WORKS ===== */
.featured-works-section {
    padding: 3rem 0;
    width: 100%;
}

.featured-heading {
    font-family: 'Playfair Display', serif;
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--accent);
    text-shadow: 0 0 15px rgba(250, 204, 21, 0.1);
    text-align: left;
    margin-bottom: 3rem;
    letter-spacing: -0.5px;
}

.projects-grid {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 4rem;
    background-color: var(--nav-bg);
    border: 1px solid #cbd5e1;
    border-radius: 20px;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
}

.template-project-card.project-panel {
    display: flex;
    align-items: flex-start;
    gap: 3rem;
    width: 100%;
    padding: 2.5rem;
    border-radius: 16px;
    background-color: var(--nav-bg);
    border: 1px solid var(--border);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.template-project-card.project-panel:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.20);
    border-color: var(--accent);
}

.image-panel {
    flex: 1.1;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-inner-frame {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    background-color: var(--bg-main);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.img-overlay-label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
    color: #ffffff;
    padding: 2.5rem 1.5rem 1.2rem 1.5rem;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 1.5rem;
    z-index: 10;
    pointer-events: none;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
    letter-spacing: 0.5px;
}

.project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.image-panel:hover .project-img {
    transform: scale(1.1);
}

.content-panel {
    flex: 1.0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.content-panel h3 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-main);
    margin-bottom: 0.8rem;
    line-height: 1.1;
    letter-spacing: -0.5px;
}

.content-panel p {
    color: var(--text-muted);
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 1.2rem;
}

.content-panel ul {
    list-style-type: none;
    margin-bottom: 1.5rem;
}

.content-panel ul li {
    position: relative;
    padding-left: 1.2rem;
    margin-bottom: 0.8rem;
    color: var(--text-muted);
    font-size: 0.95rem;
    line-height: 1.6;
}

.content-panel ul li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--accent);
    font-weight: bold;
}

.techstack-container {
    margin-bottom: 2rem;
}

.techstack-tag {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 800;
    color: var(--accent);
    border: 1px solid var(--border);
    padding: 0.5rem 1.2rem;
    border-radius: 6px;
    display: inline-block;
    letter-spacing: 1px;
}

.project-links {
    display: flex;
    gap: 1.2rem;
}


/* ===== SECTION: ACHIEVEMENTS (Image Grid) ===== */
.achievements-section {
    padding: 3rem 0;
}

.cert-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 1.5rem;
    padding: 3rem;
    background-color: var(--nav-bg);
    border: 1px solid #cbd5e1;
    border-radius: 20px;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
}

.cert-grid::-webkit-scrollbar {
    height: 6px;
}

.cert-grid::-webkit-scrollbar-track {
    background: var(--nav-bg);
    border-radius: 10px;
}

.cert-grid::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 10px;
}

.cert-card {
    background-color: var(--nav-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cert-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);
}

.cert-image-container {
    background: transparent;
    border-radius: 12px;
    padding: 2.5rem 1rem 1rem 1rem;
    position: relative;
    margin-bottom: 2rem;
    border: 1px solid var(--border);
    width: 100%;
    aspect-ratio: 1.35 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cert-number {
    display: block;
    position: absolute;
    top: 1rem;
    left: 1.2rem;
    font-size: 1.4rem;
    font-weight: 800;
    font-family: 'Inter', sans-serif;
    color: #cbd5e1;
    line-height: 1;
}

.cert-image-inner {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    border-radius: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cert-thumb-iframe {
    width: auto !important;
    height: auto !important;
    max-width: 100% !important;
    max-height: 100% !important;
    object-fit: contain !important;
    padding: 1rem !important;
    border: none;
    pointer-events: none;
}

.cert-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
}

.cert-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem;
    font-weight: 800;
    line-height: 1.4;
    color: var(--text-main);
    margin-bottom: 1rem;
}

.cert-issuer {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.4rem;
    color: var(--accent);
}

.cert-date {
    font-family: 'Inter', sans-serif;
    font-size: 0.8rem;
    color: var(--text-muted);
    font-weight: 500;
}

.cert-download-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    width: 100%;
    padding: 0.9rem;
    background: transparent;
    border: 1px solid var(--accent);
    color: var(--accent) !important;
    border-radius: 4px;
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transition: 0.3s ease;
    text-decoration: none;
    margin-top: auto;
}

.cert-download-btn:hover {
    background: var(--accent);
    color: #fff !important;
}

/* ===== BADGE CARDS (Achievements) ===== */
.badge-card {
    background-color: var(--nav-bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1.5rem 1.2rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.badge-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
    border-color: var(--accent);
}

.badge-number {
    font-size: 1.6rem;
    font-weight: 800;
    color: #cbd5e1;
    font-family: 'Inter', sans-serif;
    opacity: 0.6;
}

.badge-image {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}

.badge-image img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.badge-text {
    font-family: 'Playfair Display', serif;
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--text-main);
    line-height: 1.3;
}


/* ===== SECTION: TECHNICAL PROFICIENCY ===== */
.skills-section {
    padding: 3rem 0;
    margin-bottom: 5rem;
}

.prof-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 3rem;
    background-color: var(--nav-bg);
    border: 1px solid #cbd5e1;
    border-radius: 20px;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
}

.prof-card {
    background-color: var(--nav-bg);
    border-radius: 8px;
    border: 1px solid var(--border);
    padding: 1.2rem 1rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.prof-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
    border-color: var(--accent);
}

.prof-category {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    font-weight: 800;
    color: var(--accent);
    letter-spacing: 1.5px;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    text-align: center;
}

.tech-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 0.8rem;
    justify-content: center;
}

.tech-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    width: 55px;
}

.tech-icon {
    width: 42px;
    height: 42px;
    background-color: var(--bg-main);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--text-main);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
    transition: 0.3s;
}

.tech-item:hover .tech-icon {
    transform: scale(1.05);
}

.tech-item span {
    font-size: 0.7rem;
    color: var(--text-main);
    font-weight: 600;
    text-align: center;
}


/* ===== LIST SECTIONS (Education & Training) ===== */
.list-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
    width: 100%;
}

.section-label {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent);
    letter-spacing: 0.5px;
    margin-bottom: 2rem;
}

.list-container {
    display: flex;
    flex-direction: column;
}

.list-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2.5rem 0;
    border-bottom: 1px solid var(--border);
}

.item-meta {
    flex: 1;
    padding-right: 2rem;
}

.item-meta h3 {
    font-family: 'Inter', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--text-main);
}

.item-meta h4 {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--text-muted);
    margin-bottom: 1.2rem;
}

.item-meta p {
    font-size: 0.95rem;
    color: var(--text-muted);
    margin-bottom: 0.5rem;
}

.item-meta ul {
    list-style: none;
}

.item-meta ul li {
    position: relative;
    padding-left: 1.2rem;
    margin-bottom: 0.6rem;
    color: var(--text-muted);
    font-size: 0.95rem;
    line-height: 1.6;
}

.item-meta ul li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--accent);
}

.item-year {
    font-weight: 700;
    color: var(--text-muted);
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    text-align: right;
    line-height: 1.4;
    padding-top: 0.5rem;
}

.item-year strong {
    color: var(--accent);
    display: block;
    margin-top: 0.2rem;
}

/* ===== GLOBAL UTILS ===== */
/* Container Animations */
.about-container,
.projects-grid,
.list-container,
.cert-grid,
.prof-grid {
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease !important;
}

.about-container:hover,
.projects-grid:hover,
.list-container:hover,
.cert-grid:hover,
.prof-grid:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.08) !important;
}

.elegant-line {
    width: 100%;
    height: 1px;
    background: var(--border);
}

.mt-huge {
    margin: 4rem 0;
}

.minimal-footer {
    font-size: 0.8rem;
    text-align: center;
    padding: 3rem 0;
    color: var(--text-muted);
}

/* Reveals */
.reveal {
    opacity: 0;
    transform: translateY(15px);
    transition: all 0.6s ease;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

.delay-1 {
    transition-delay: 0.1s;
}

.delay-2 {
    transition-delay: 0.2s;
}

/* Responsive */
@media (max-width: 1000px) {
    .minimal-grid {
        padding-top: 100px;
    }

    .hero-section {
        flex-direction: column-reverse;
        text-align: center;
        justify-content: center;
        gap: 2rem;
    }

    .hero-buttons {
        justify-content: center;
    }

    .desktop-nav {
        display: none;
    }

    .about-container {
        flex-direction: column;
        padding: 2rem;
        gap: 2rem;
    }

    .about-cards {
        flex-direction: column;
    }

    .list-item {
        flex-direction: column;
        gap: 1rem;
    }

    .item-meta {
        padding-right: 0;
    }

    .item-year {
        text-align: left;
    }

    .template-project-card.project-panel {
        flex-direction: column;
        gap: 1.5rem;
        padding: 1.2rem;
    }

    .image-inner-frame {
        min-height: 200px;
    }

    .content-panel {
        padding: 0.5rem 0;
    }

    .content-panel h3 {
        font-size: 1.8rem;
    }

    .project-links {
        flex-direction: column;
    }

    .cert-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .prof-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {
    .cert-grid {
        grid-template-columns: 1fr;
    }

    .tech-grid {
        justify-content: center;
    }
}

/* PROGRAMMING PROFICIENCY CSS */
.prog-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    margin: 1.5rem auto 0 auto;
    max-width: 900px;
}

.prog-card {
    background-color: var(--nav-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 2.5rem 2.5rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.prog-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);
}

.prog-header {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 2.5rem;
}

.prog-icon {
    width: 50px;
    height: 50px;
    background-color: var(--bg-main);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: var(--text-main);
    border: 1px solid var(--border);
}

.prog-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--text-main);
}

.prog-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    column-gap: 1rem;
    margin-bottom: 2.5rem;
    flex-grow: 1;
}

.prog-stat {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.prog-label {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #94a3b8;
}

.prog-value {
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--text-main);
}

.prog-mastery {
    margin-bottom: 2rem;
}

.prog-mastery-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    font-weight: 800;
}

.prog-mastery-label {
    color: var(--text-main);
}

.prog-mastery-percent {
    color: var(--accent);
}

.prog-mastery-bar {
    height: 6px;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    overflow: hidden;
}

.prog-mastery-fill {
    height: 100%;
    background-color: var(--accent);
    border-radius: 3px;
}

.prog-btn {
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem;
    border: 1px solid var(--border);
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 0.9rem;
    color: var(--text-main);
    text-decoration: none;
    transition: all 0.3s ease;
}

.prog-btn:hover {
    background-color: var(--accent);
    color: white;
    border-color: var(--accent);
}

@media (max-width: 992px) {
    .prog-grid {
        grid-template-columns: 1fr;
    }
}

/* CONTACT SECTION CSS */
.contact-section {
    padding: 4rem 0;
    width: 100%;
}

.contact-layout {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
    align-items: center;
}

.contact-copy {
    display: flex;
    flex-direction: column;
}

.contact-heading {
    font-family: 'Playfair Display', serif;
    font-size: 3.5rem;
    line-height: 1.1;
    font-weight: 800;
    color: var(--text-main);
    margin-bottom: 1.5rem;
}

.contact-accent {
    color: var(--accent);
}

.contact-accent-line {
    width: 60px;
    height: 3px;
    background-color: var(--accent);
    border-radius: 2px;
    margin-bottom: 2rem;
}

.contact-desc {
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    line-height: 1.8;
    color: #64748b;
    margin-bottom: 3rem;
    max-width: 90%;
}

.contact-info-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 2rem;
}

.contact-info-item.full-width {
    grid-column: span 2;
}

.contact-info-item {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.contact-icon-box {
    width: 45px;
    height: 45px;
    background-color: rgba(168, 114, 73, 0.05); /* very light wash */
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    flex-shrink: 0;
    font-size: 1.1rem;
}

.contact-info-text {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}

.contact-info-text span {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 1px;
    color: #94a3b8;
    text-transform: uppercase;
}

.contact-info-text strong {
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--text-main);
}

.contact-form-card {
    background-color: var(--nav-bg);
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 16px;
    padding: 3.5rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 0;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-bottom: 1.5rem;
}

.form-group label {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 1px;
    color: #94a3b8;
    text-transform: uppercase;
}

.form-group input, .form-group textarea {
    background-color: rgba(0, 0, 0, 0.015);
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    padding: 1rem 1.2rem;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    color: var(--text-main);
    transition: all 0.3s ease;
    resize: vertical;
}

.form-group input::placeholder, .form-group textarea::placeholder {
    color: #cbd5e1;
}

.form-group input:focus, .form-group textarea:focus {
    outline: none;
    border-color: var(--accent);
    background-color: white;
    box-shadow: 0 0 0 3px rgba(168, 114, 73, 0.1);
}

.submit-btn {
    width: 100%;
    background-color: #1a1a1a;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 1.2rem;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.submit-btn:hover {
    background-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(168, 114, 73, 0.3);
}

@media (max-width: 992px) {
    .contact-layout {
        grid-template-columns: 1fr;
        gap: 4rem;
    }
}
@media (max-width: 768px) {
    .form-row {
        grid-template-columns: 1fr;
    }
    .contact-info-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    .contact-info-item.full-width {
        grid-column: span 1;
    }
    .contact-form-card {
        padding: 2.5rem;
    }
}

/* BACK TO TOP BUTTON */
.back-to-top-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: var(--accent);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(168, 114, 73, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    pointer-events: none;
}

.back-to-top-btn.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
}

.back-to-top-btn:hover {
    background-color: #8c5b36;
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(168, 114, 73, 0.6);
}

@media (max-width: 768px) {
    .back-to-top-btn {
        bottom: 20px;
        right: 20px;
        width: 45px;
        height: 45px;
        font-size: 1rem;
    }
}

/* RICH FOOTER CSS */
.rich-footer {
    position: relative;
    width: 100vw;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    background-color: #0b0b0e;
    background-image: radial-gradient(rgba(168, 114, 73, 0.15) 1.5px, transparent 1px);
    background-size: 40px 40px;
    background-position: 0 0, 20px 20px;
    color: #a1a1aa;
    padding: 6rem 0 2rem 0;
    margin-top: 4rem;
    overflow: hidden;
    border-top: 1px solid rgba(255,255,255,0.02);
}

.rich-footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
    gap: 3rem;
}

.rich-col {
    display: flex;
    flex-direction: column;
}

.rich-brand {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--accent);
    margin-bottom: 1.5rem;
    letter-spacing: 2px;
}

.rich-bio {
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: #94a3b8;
}

.rich-socials {
    display: flex;
    gap: 1rem;
}

.rich-socials a {
    color: #94a3b8;
    font-size: 1.1rem;
    transition: color 0.3s;
}

.rich-socials a:hover {
    color: var(--accent);
}

.rich-heading {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 800;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 2rem;
}

.links-col ul, .icon-links-col ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

.links-col a, .icon-links-col a {
    color: #94a3b8;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    transition: color 0.3s;
}

.links-col a:hover, .icon-links-col a:hover {
    color: white;
}

.icon-links-col a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.icon-links-col i {
    color: var(--accent);
    font-size: 0.95rem;
}

.avail-card {
    background-color: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 1.5rem;
}

.avail-top {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 0.8rem;
}

.status-dot {
    width: 8px;
    height: 8px;
    background-color: #10b981;
    border-radius: 50%;
    box-shadow: 0 0 12px rgba(16, 185, 129, 0.8);
}

.status-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    color: white;
}

.avail-desc {
    font-family: 'Inter', sans-serif;
    font-size: 0.8rem;
    line-height: 1.6;
    color: #94a3b8;
}

.rich-footer-bottom {
    margin-top: 5rem;
    border-top: 1px solid rgba(255,255,255,0.05);
    padding-top: 2rem;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 0.8rem;
    color: #64748b;
}

@media (max-width: 992px) {
    .rich-footer-container {
        grid-template-columns: 1fr 1fr;
    }
}
@media (max-width: 600px) {
    .rich-footer-container {
        grid-template-columns: 1fr;
    }
}
```

### 3. `script.js`
```javascript
// ===== THEME TOGGLE =====
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

const setLightMode = () => {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
};

const setDarkMode = () => {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
};

// Check local storage for persistent theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    setDarkMode();
} else {
    // Default to light white mode
    setLightMode();
}

// Simple fast transition click event
themeBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        setLightMode();
        localStorage.setItem('theme', 'light');
    } else {
        setDarkMode();
        localStorage.setItem('theme', 'dark');
    }
});

// ===== Scroll Reveal Anim =====
const revealElements = document.querySelectorAll('.reveal');
const revealOptions = { rootMargin: "0px 0px -40px 0px", threshold: 0.05 };

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(el => revealOnScroll.observe(el));

// ===== Typewriter Effect =====
const roles = ["Full Stack Developer", "MERN Stack Developer", "Responsive Web Developer"];
let roleIndex = 0;
let charIndex = roles[0].length;
let isDeleting = true;
const typingTextElement = document.querySelector('.typing-text');

function typeEffect() {
    if(!typingTextElement) return;

    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000; // Pause at the end of typing
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 400; // Pause before typing the next phrase
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect firmly after a 2-second initial pause so the hero text holds strong on load
setTimeout(typeEffect, 2000);

// ===== NAVBAR SCROLL BACKGROUND =====
const navbarElement = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbarElement.classList.add('scrolled');
    } else {
        navbarElement.classList.remove('scrolled');
    }
});

// ===== BACK TO TOP BUTTON =====
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

```

Please output the code for these files completely so I can reconstruct the whole project.
