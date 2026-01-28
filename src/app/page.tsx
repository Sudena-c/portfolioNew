'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredProjects = [
    {
      id: 1,
      title: "Brand Identity Systems",
      category: "Branding",
      description: "Complete brand identity and system for an electric car company specializing in compact, smart vehicles for city use.",
      image: "https://z-cdn-media.chatglm.cn/files/0e0ca0ce-f71d-48a3-855c-dcf9d08279f3_branding%20billboard.jpg?auth_key=1791345399-c902344fe15346e6a271a338562efade-0-480bd33acc335a53634993f909351e92",
      tags: ["Branding", "Logo", "Guidelines"],
      details: {
        client: "Personal",
        duration: "3 weeks",
        role: "Branding, Brand Identity, Brand System",
        tools: ["Adobe Illustrator", "Figma", "Adobe InDesign"],
        overview: "Built a brand for an electric car company that makes compact, smart vehicles for city use. The brand should feel modern, clean, and easy to connect with focusing on design, sustainability, and ease of driving.",
        challenges: "The main challenge was to view the brand's USP from both sides — uncovering how its defining feature could be refined to strengthen the brand's overall positioning and communication.",
        solution: "Focused on highlighting how the brand's strengths naturally outweighed its drawbacks, ensuring its core value remained clear and compelling.",
        results: "Successfully developed a cohesive brand identity and system, along with all supporting collaterals for consistent brand communication."
      }
    },
    {
      id: 2,
      title: "Meal Planning App",
      category: "UI/UX",
      description: "Collaborative cooking application that helps people decide what to make based on available ingredients, reducing food waste and improving mealtime coordination.",
      image: "https://z-cdn-media.chatglm.cn/files/20512ed9-ca98-4ec8-b3c5-49311b16bbfa_Screenshot%202025-10-01%20at%204.45.42%E2%80%AFPM.png?auth_key=1791346554-733aa0fc40a44252a6cd0345757739b2-0-308fcc1f34f67a9e467477d250c4af98",
      tags: ["Mobile", "Food", "UI/UX"],
      details: {
        client: "Personal",
        duration: "6 weeks",
        role: "Research, Interface design, Mapping",
        tools: ["Figma", "Illustrator"],
        overview: "Designed a collaborative cooking application that helps people decide what to make based on the ingredients currently available in their fridge. The app encourages shared decision-making while reducing food waste and improving mealtime coordination.",
        challenges: "The main challenge was enabling real-time updates of fridge inventory and creating a system that could reflect what's available instantly. Another key challenge was designing a collaborative decision-making process that considered everyone's preferences, likes, and dislikes in a seamless and engaging way.",
        solution: "Introduced a voting-based interface that allows all users to share their meal preferences and reach a consensus easily. Integrated smart inventory tracking to automatically update available ingredients, ensuring the system stays accurate and user-friendly."
      }
    },
    {
      id: 3,
      title: "Vinyl - A Timeless Sound",
      category: "Print Design",
      description: "Coffee table book celebrating vinyl records as an ancient yet timeless medium, exploring their enduring relevance and cultural significance.",
      image: "https://z-cdn-media.chatglm.cn/files/7bbfc9a2-17c7-41d2-96e1-a6863be046e4_cover%20page.jpg?auth_key=1791345777-ec21c6aaa4bc4871a450712dfa0213c1-0-a1028ce3df5a4cf9b6ba93dbd5a86f42",
      tags: ["Print", "Book Design", "Typography"],
      details: {
        client: "Personal",
        duration: "3 weeks",
        role: "Researcher, Designer, Content Writer",
        tools: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"],
        overview: "Designed a coffee table book celebrating Vinyl — an ancient yet timeless medium. The book explores its enduring relevance, the intricate process of record-making, its cultural history, and the emotion it continues to evoke today.",
        challenges: "The main challenge was curating only the most meaningful content while maintaining depth — balancing storytelling with restraint. Selecting imagery that perfectly captured the theme and character of 'ancient yet evergreen' required thoughtful exploration and precision.",
        solution: "Created a visually rich, cohesive book where every image, layout, and detail harmonized to reflect the essence of vinyl: nostalgic, timeless, and beautifully crafted.",
        results: "The outcome was a visually rich, cohesive book — where every image, layout, and detail harmonized to reflect the essence of vinyl: nostalgic, timeless, and beautifully crafted."
      }
    },
    {
      id: 4,
      title: "E-commerce Platform",
      category: "Web Design",
      description: "Responsive e-commerce website with modern design and optimized user experience for conversions and sales.",
      image: "https://picsum.photos/seed/ecommerce/600/400.jpg",
      tags: ["Web", "E-commerce", "Responsive"],
      details: {
        client: "Fashion Forward",
        duration: "10 weeks",
        role: "Web Designer",
        tools: ["Figma", "Webflow", "Adobe Creative Suite"],
        overview: "Designed and developed a modern e-commerce platform focused on user experience and conversion optimization.",
        challenges: "Creating a seamless shopping experience across devices while maintaining brand identity and handling complex product variations.",
        solution: "Designed a clean, product-focused interface with intuitive navigation, implemented advanced filtering system, and created engaging product detail pages.",
        results: "Conversion rate increased by 45% and average session duration improved by 60%."
      }
    },
    {
      id: 5,
      title: "Social Media Campaign",
      category: "Digital Marketing",
      description: "Complete social media campaign with visual assets, content strategy, and analytics for a product launch.",
      image: "https://picsum.photos/seed/social/600/400.jpg",
      tags: ["Social Media", "Campaign", "Marketing"],
      details: {
        client: "TechGadgets Inc.",
        duration: "4 weeks",
        role: "Digital Marketing Designer",
        tools: ["Adobe Creative Suite", "Canva", "Hootsuite"],
        overview: "Developed comprehensive social media campaign for new product launch across multiple platforms.",
        challenges: "Creating cohesive visual identity across different social media platforms while adapting content to each platform's unique requirements.",
        solution: "Designed platform-specific templates, created engaging motion graphics, and developed content calendar with strategic posting schedule.",
        results: "Campaign reached 2M+ impressions, engagement rate of 8.5%, and contributed to 30% increase in product sales."
      }
    },
    {
      id: 6,
      title: "Mobile Game Interface",
      category: "Game Design",
      description: "User interface design for a mobile puzzle game including menus, HUD elements, and interactive components.",
      image: "https://picsum.photos/seed/game/600/400.jpg",
      tags: ["Game", "Mobile", "UI"],
      details: {
        client: "PuzzleMind Studios",
        duration: "6 weeks",
        role: "Game UI Designer",
        tools: ["Figma", "Unity", "Adobe After Effects"],
        overview: "Designed intuitive and engaging user interface for a mobile puzzle game targeting casual gamers.",
        challenges: "Creating an interface that is both visually appealing and highly functional for quick gaming sessions on mobile devices.",
        solution: "Designed clean, accessible UI with clear visual hierarchy, implemented satisfying micro-interactions, and created thematic visual elements.",
        results: "Game received 4.8/5 star rating and user retention increased by 40% after UI implementation."
      }
    },
    {
      id: 7,
      title: "Personal Photography Portfolio",
      category: "Personal Projects",
      description: "Personal project showcasing photography skills with custom website design and curated photo galleries.",
      image: "https://picsum.photos/seed/photo/600/400.jpg",
      tags: ["Personal", "Photography", "Portfolio"],
      details: {
        client: "Personal Project",
        duration: "Ongoing",
        role: "Designer & Photographer",
        tools: ["Adobe Lightroom", "Adobe Photoshop", "Webflow"],
        overview: "Personal photography portfolio showcasing urban exploration and nature photography with custom web design.",
        challenges: "Creating an immersive viewing experience that highlights photography while maintaining fast loading times and mobile responsiveness.",
        solution: "Designed minimalist gallery interface with full-screen viewing options, implemented optimized image delivery, and created curated collections.",
        results: "Portfolio received 10K+ monthly visitors and featured in several online design publications."
      }
    },
    {
      id: 8,
      title: "Calligraphy & Font Making",
      category: "Typography",
      description: "Personal exploration of calligraphy and custom font design, blending traditional techniques with modern typography principles.",
      image: "https://picsum.photos/seed/calligraphy/600/400.jpg",
      tags: ["Calligraphy", "Font Design", "Typography"],
      details: {
        client: "Personal Project",
        duration: "6 weeks",
        role: "Calligrapher & Font Designer",
        tools: ["Adobe Illustrator", "Glyphs", "FontLab", "Procreate"],
        overview: "A personal journey into the art of calligraphy and font making, exploring the delicate balance between traditional brush techniques and modern digital typography. This project involved extensive research into historical scripts and contemporary font design principles.",
        challenges: "Mastering the technical aspects of font creation while maintaining the organic, hand-drawn quality of calligraphy. Ensuring consistency across hundreds of glyphs while preserving the natural flow and character of hand-drawn letterforms.",
        solution: "Developed a systematic approach combining traditional calligraphy practice with digital font creation tools. Created extensive guidelines and character sets while experimenting with different brush techniques and digital refinements.",
        results: "Successfully created a functional custom font with over 200 glyphs, including uppercase, lowercase, numbers, and special characters. The font maintains the authentic feel of hand-drawn calligraphy while being fully usable in digital applications."
      }
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: '#14b8a6' }}></div>
              <span className="text-xl font-semibold text-slate-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Design Portfolio
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-slate-900 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-slate-900 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-slate-900 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-slate-900 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                Contact
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-4 py-2 font-medium rounded-lg transition-colors" style={{ backgroundColor: '#14b8a6', color: '#1e293b', fontFamily: 'Inter, sans-serif' }}>
                Get in Touch
              </button>
            </div>
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Hi, I'm
                  <span style={{ color: '#14b8a6' }}> Sudena Chandnani</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  I approach design as a space for curiosity and research-led ideation. Whether in visual design or marketing, I love bringing thoughtful ideas to life with focus and energy. Doing branding, UI/UX, marketing and a lot more.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('projects')} className="px-8 py-4 font-medium rounded-xl hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg" style={{ backgroundColor: '#14b8a6', color: '#1e293b', fontFamily: 'Inter, sans-serif' }}>
                  View My Work
                </button>
                <button className="px-8 py-4 bg-transparent text-slate-900 font-medium rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Download Resume
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://picsum.photos/seed/designer/600/600.jpg" 
                  alt="Designer" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-xl opacity-40" style={{ backgroundColor: '#14b8a6' }}></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-rose-200 rounded-xl opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              About Me
            </h2>
            <p className="text-xl text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get to know me and my design journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://picsum.photos/seed/about/500/500.jpg" 
                alt="About Me" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Design with Purpose
                </h3>
                <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  I'm a passionate designer with a keen eye for detail and a love for creating meaningful work. What began as a confusion between marketing and design soon became a fascination — leading me to explore how ideas connect, communicate, and influence. My curiosity about how things work, paired with a research-driven mindset, has shaped a career focused on solving problems through thoughtful design.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Beyond Design
                </h3>
                <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  When I'm not designing, you'll probably find me dancing in the air, sketching in a notebook, capturing a fleeting moment with my camera, or listening to my favorite songs. I also like cooking from time to time. These hobbies keep me curious, energized, and creatively inspired.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              A selection of my recent work showcasing different design disciplines and creative solutions.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['all', 'Branding', 'UI/UX', 'Print Design', 'Web Design', 'Digital Marketing', 'Game Design', 'Personal Projects'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  backgroundColor: activeFilter === filter ? '#14b8a6' : undefined,
                  color: activeFilter === filter ? '#1e293b' : undefined
                }}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link 
                key={project.id}
                href={`/projects/${project.id}`}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:border-purple-200 cursor-pointer block"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wide font-medium" style={{ color: '#14b8a6', fontFamily: 'Inter, sans-serif' }}>
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      {project.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }} onMouseEnter={(e) => e.target.style.color = '#14b8a6'} onMouseLeave={(e) => e.target.style.color = '#1e293b'}>
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {project.description}
                  </p>
                  <button className="w-full px-4 py-2 font-medium rounded-lg transition-colors" style={{ backgroundColor: '#14b8a6', color: '#1e293b', fontFamily: 'Inter, sans-serif' }}>
                    View Project
                  </button>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 font-medium rounded-lg transition-colors" style={{ backgroundColor: '#14b8a6', color: '#1e293b', fontFamily: 'Inter, sans-serif' }}>
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Skills
            </h2>
            <p className="text-xl text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              The tools and technologies I work with
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'UI/UX Design', icon: '🎨' },
              { name: 'Brand Identity', icon: '🏷️' },
              { name: 'Web Design', icon: '🌐' },
              { name: 'Mobile Design', icon: '📱' },
              { name: 'Prototyping', icon: '⚡' },
              { name: 'Typography', icon: '✏️' },
              { name: 'Color Theory', icon: '🎨' },
              { name: 'User Research', icon: '🔍' }
            ].map((skill, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Get In Touch
            </h2>
            <p className="text-xl text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Let's discuss your next project and how we can work together
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Let's Connect
                </h3>
                <p className="text-slate-600 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  I'm always excited to hear about new projects and opportunities. 
                  Whether you have a specific project in mind or just want to chat about design, 
                  feel free to reach out!
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#14b8a6' }}>
                    <span>📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900" style={{ fontFamily: 'Inter, sans-serif' }}>Email</p>
                    <p className="text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>sudena.swork@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#14b8a6' }}>
                    <span>📱</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900" style={{ fontFamily: 'Inter, sans-serif' }}>Phone</p>
                    <p className="text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>+1234567890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#14b8a6' }}>
                    <span>💬</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900" style={{ fontFamily: 'Inter, sans-serif' }}>WhatsApp</p>
                    <p className="text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>+1234567890</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: '#14b8a6' }}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: '#14b8a6' }}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Message
                  </label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: '#14b8a6' }}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 font-medium rounded-lg transition-colors"
                  style={{ backgroundColor: '#14b8a6', color: '#1e293b', fontFamily: 'Inter, sans-serif' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="rounded-2xl p-12 text-slate-800" style={{ background: 'linear-gradient(to right, #14b8a6, #fca5a5)' }}>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              I'm always excited to work on new projects and collaborate with creative minds. 
              Whether you have a specific project in mind or just want to chat about design, 
              I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:sudena.swork@gmail.com" className="px-8 py-4 bg-white text-slate-800 font-medium rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span>📧</span>
                Write an Email
              </a>
              <a href="tel:+1234567890" className="px-8 py-4 bg-transparent text-slate-800 font-medium rounded-xl border border-slate-600 hover:bg-white/20 transition-colors flex items-center justify-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span>📱</span>
                Call Me
              </a>
              <a href="https://wa.me/1234567890" className="px-8 py-4 bg-transparent text-slate-800 font-medium rounded-xl border border-slate-600 hover:bg-white/20 transition-colors flex items-center justify-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span>💬</span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: '#14b8a6' }}></div>
                <span className="text-xl font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Design Portfolio
                </span>
              </div>
              <p className="text-slate-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                Creating beautiful, functional designs that make a difference.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Brand Identity</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Connect</h4>
              <div className="flex space-x-4 mb-4">
                <a href="mailto:sudena.swork@gmail.com" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-colors" style={{ hoverBackgroundColor: '#14b8a6' }}>
                  <span>📧</span>
                </a>
                <a href="https://linkedin.com" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-colors" style={{ hoverBackgroundColor: '#14b8a6' }}>
                  <span>💼</span>
                </a>
                <a href="https://behance.net" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-colors" style={{ hoverBackgroundColor: '#14b8a6' }}>
                  <span>🎨</span>
                </a>
                <a href="https://instagram.com" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-colors" style={{ hoverBackgroundColor: '#14b8a6' }}>
                  <span>📷</span>
                </a>
              </div>
              <p className="text-slate-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                sudena.swork@gmail.com
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2024 Design Portfolio. All rights reserved. Made with ❤️ and lots of ☕
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}