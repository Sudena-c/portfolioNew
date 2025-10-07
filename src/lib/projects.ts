export interface ProjectDetails {
  client: string;
  duration: string;
  role: string;
  tools: string[];
  overview: string;
  challenges: string;
  solution: string;
  results?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  details: ProjectDetails;
}

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Brand Identity System",
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