import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePortfolioStore = defineStore('portfolio', () => {
  const profile = ref({
    name: 'James Anilov G. Huelgas',
    title: 'Aspiring Full Stack Developer',
    bio: 'Motivated and hardworking Information Technology graduate seeking an opportunity to apply technical knowledge, creativity, and problem-solving skills in a professional environment.',
    descriptions: [
      'Motivated and hardworking Information Technology graduate seeking an opportunity to apply technical knowledge, creativity, and problem-solving skills in a professional environment.',
      'When I’m away from the keyboard, I’m exploring the latest technologies, refining my skills through side projects, and enjoying coffee while planning my next big idea.',
      'I build user-centered web applications with clean code, strong collaboration, and a modern, polished interface.',
    ],
    avatar: '/images/733911651_2192331277992421_1574361777246603930.jpg',
    location: 'Cabuyao, Laguna',
    email: 'huelgasjames46@gmail.com',
    phone: '+63 956 922 6295',
  })

  const projects = ref([
    {
      id: 1,
      title: 'Brew Manager: A Comprehensive Web-Based Management System For Coffee Shops',
      slug: 'pos-system',
      description: 'A full-featured integration for coffee shop management',
      content: 'A comprehensive e-commerce solution built with modern technologies.',
      thumbnail: '/images/projects/BrewManager.jpeg',
      github_url: '#',
      live_url: 'https://brewmanager.ceitesystems.com',
      tech_stack: ['Php', 'MySQL', 'JavaScript', 'Bootstrap'],
      features: ['User authentication', 'POS System', 'Admin & Users Dashboard'],
      category: 'Web Development',
      featured: true,
      status: 'completed',
      completed_date: '2024-01-15',
      order: 1,
      images: [],
    },
    {
      id: 2,
      title: 'Student Profiling System for College of Computing Studies',
      slug: 'task-management-app',
      description: 'Collaborative project management tool',
      content: 'A real-time management application for students and administrators.',
      thumbnail: '/images/projects/StudentProfiling.jpeg',
      github_url: '#',
      live_url: 'https://ccs-isps-itew6.vercel.app/login',
      tech_stack: ['React', 'Supabase', 'TailwindCSS'],
      features: ['Student Profiling System', 'Student Information System', 'File sharing'],
      category: 'System Development',
      featured: true,
      status: 'completed',
      completed_date: '2024-02-20',
      order: 2,
      images: [],
    },
    {
      id: 3,
      title: 'MiSD Inventory System (University of Cabuyao)',
      slug: 'inventory-system',
      description: 'Inventory System for UC(MiSD)',
      content: 'A weather app with beautiful visualizations.',
      thumbnail: '/images/projects/MiSDInv.jpeg',
      github_url: '#',
      live_url: 'https://mis-inventory-sys.vercel.app/',
      tech_stack: ['Vue.js', 'REST API', 'Chart.js'],
      features: ['Repair Service Request System', 'Real-time Inventory Tracking', 'Location-based'],
      category: 'Invetory Management',
      featured: false,
      status: 'completed',
      completed_date: '2024-03-10',
      order: 3,
      images: [],
    },
  ])

  const skills = ref({
    'Frontend': [
      { id: 1, name: 'Vue.js', category: 'Frontend', icon: 'vuejs', level: 'Advanced', order: 1 },
      { id: 2, name: 'React', category: 'Frontend', icon: 'react', level: 'Advanced', order: 2 },
      { id: 3, name: 'TypeScript', category: 'Frontend', icon: 'typescript', level: 'Intermediate', order: 3 },
      { id: 4, name: 'TailwindCSS', category: 'Frontend', icon: 'tailwindcss', level: 'Advanced', order: 4 },
      { id: 5, name: 'Bootstrap', category: 'Frontend', icon: 'bootstrap', level: 'Advanced', order: 5 },
    ],
    'Backend': [
      { id: 6, name: 'Node.js', category: 'Backend', icon: 'nodejs', level: 'Advanced', order: 1 },
      { id: 7, name: 'Python', category: 'Backend', icon: 'python', level: 'Intermediate', order: 2 },
      { id: 8, name: 'PostgreSQL', category: 'Backend', icon: 'postgresql', level: 'Intermediate', order: 3 },
      { id: 9, name: 'Laravel', category: 'Backend', icon: 'laravel', level: 'Advanced', order: 4 },
    ],
    'Tools': [
      { id: 10, name: 'Git', category: 'Tools', icon: 'git', level: 'Advanced', order: 1 },
    ],
  })

  const certifications = ref([
    {
      id: 1,
      title: 'Cisco Networking Academy (JS Institute)',
      organization: 'Cisco',
      image: '/images/b9d37f86-90cc-4ce3-bf12-feb7728ec6de.png',
      issue_date: '2026-04-13',
      expiry_date: null,
      credential_id: '',
      verification_url: 'https://aws.amazon.com/verification',
      description: 'JavaScript Essentials 1 Certificate',
      order: 1,
    },
    {
      id: 2,
      title: 'Cisco Networking Academy (C++ Institute)',
      organization: 'Cisco',
      image: '/images/f53a62ef-f228-45ed-96ba-409fe610025c.png',
      issue_date: '2026-04-13',
      expiry_date: null,
      credential_id: '',
      verification_url: 'https://www.credly.com/badges/9a8210f0-76fd-4df5-962f-ce798266ff24',
      description: 'C++ Essentials 1 Certificate',
      order: 2,
    },
  ])

  const certificateFiles = ref([
    {
      id: 1,
      title: 'Cisco C++ Essentials 1 Certificate',
      file: '/images/certificates/cisco/c++/C--_Essentials_1_certificate_huelgasjames46-gmail-com_4f6f5f05-e919-4202-b2e4-2296aa7c7142.pdf',
    },
    {
      id: 2,
      title: 'Cisco C++ Essentials Update Certificate',
      file: '/images/certificates/cisco/c++/CEssentials1Update20260702-7-hkeist.pdf',
    },
    {
      id: 3,
      title: 'Cisco JavaScript Essentials Update Certificate',
      file: '/images/certificates/cisco/javascript/JavaScriptEssentials1Update20260703-7-go5h0j.pdf',
    },
    {
      id: 4,
      title: 'Cisco JavaScript Essentials 1 Certificate',
      file: '/images/certificates/cisco/javascript/JavaScript_Essentials_1_certificate_huelgasjames46-gmail-com_e92de858-4f22-469b-aba6-b5cc31b86194.pdf',
    },
    {
      id: 5,
      title: 'Wadhwani Certificate - James Huelgas',
      file: '/images/certificates/wadwahni/Huelgas, James Anilov G._6a07047c2115e1e7bf89b13d.pdf',
    },
    {
      id: 6,
      title: 'Skills Score Card',
      file: '/images/certificates/wadwahni/SkillsScoreCard.pdf',
    },
    {
      id: 5,
      title: 'Wadhwani Foundation Certificate A',
      file: '/images/certificates/wadwahni/Wadhwani Foundation Certificate - 69ab9d2b2766cca92b777acd.pdf',
    },
    {
      id: 6,
      title: 'Wadhwani Foundation Certificate B',
      file: '/images/certificates/wadwahni/Wadhwani Foundation Certificate - 69eeeb1104808ecbd8679ba5.pdf',
    },
    {
      id: 7,
      title: 'Wadhwani Foundation Certificate C',
      file: '/images/certificates/wadwahni/Wadhwani Foundation Certificate - 69eeeb1104808ecbd8679b9f.pdf',
    },
    {
      id: 8,
      title: 'Wadhwani Foundation Certificate D',
      file: '/images/certificates/wadwahni/Wadhwani Foundation Certificate - 69ab9d2b2766cca92b777ad3.pdf',
    },
    {
      id: 9,
      title: 'Wadhwani Foundation Certificate E',
      file: '/images/certificates/wadwahni/Wadhwani Foundation Certificate - 69ab9d2b2766cca92b777acf.pdf',
    },
    {
      id: 10,
      title: 'Wadhwani Foundation Certificate F',
      file: '/images/certificates/wadwahni/Wadhwani Foundation Certificate - 69eeeb1104808ecbd8679bad.pdf',
    },
    {
      id: 11,
      title: 'Wadhwani Foundation Certificate G',
      file: '/images/certificates/wadwahni/Wadhwani Foundation Certificate - 69eeeb1104808ecbd8679ba9.pdf',
    },
    {
      id: 12,
      title: 'Wadhwani Foundation Certificate H',
      file: '/images/certificates/wadwahni/Wadhwani Foundation Certificate - 69f60b2872ecd7a408464bc6.pdf',
    },
    {
      id: 13,
      title: 'Wadhwani Foundation Certificate I',
      file: '/images/certificates/wadwahni/Wadhwani Foundation Certificate - 69f60b2872ecd7a408464bca.pdf',
    },
  ])

  const experiences = ref([
    {
      id: 1,
      title: 'Tech Developer',
      company: 'Pamantasan ng Cabuyao – Management Information Systems Department (OJT)',
      location: 'Cabuyao, Laguna',
      start_date: '2026-01-01',
      end_date: '2026-04-30',
      current: false,
      description: 'Assisted in developing and maintaining technical solutions for the department',
      responsibilities: [
        'Assisted in developing and maintaining technical solutions for the department',
        'Conducted troubleshooting and technical support for system-related concerns',
        'Participated in testing and documentation of system processes'
      ],
      achievements: [
        'Created a Full Inventory System with workflows and system functionality'
      ],
      type: 'internship',
      order: 1,
    },
    {
      id: 2,
      title: 'Part-Time Freelance Graphic Designer (Seasonal)',
      company: 'Freelance',
      location: 'Remote',
      start_date: '2020-01-01',
      end_date: '2025-12-31',
      current: false,
      description: 'Designed custom graphics, logos, and branding materials for clients',
      responsibilities: [
        'Designed custom T-shirt graphics, logos, and branding materials for clients',
        'Created promotional and event-related designs for college and department activities',
        'Worked with a clothing shop client to produce apparel designs and visual content aligned with brand identity',
        'Edited and enhanced images for academic projects, presentations, and marketing materials',
        'Collaborated with clients to understand design requirements and deliver creative solutions on time',
        'Utilized graphic design tools to create high-quality and visually appealing outputs'
      ],
      achievements: [],
      type: 'freelance',
      order: 2,
    },
  ])

  const blogs = ref([
    {
      id: 1,
      title: 'Building Scalable Vue.js Applications',
      slug: 'building-scalable-vue-applications',
      excerpt: 'Learn best practices for building large-scale Vue applications',
      content: 'In this article, we explore patterns and techniques for building scalable Vue.js applications...',
      thumbnail: '/images/vue-blog.jpg',
      category: { id: 1, name: 'Frontend', slug: 'frontend', color: '#42b883', order: 1 },
      tags: [{ id: 1, name: 'Vue.js', slug: 'vuejs' }, { id: 2, name: 'Architecture', slug: 'architecture' }],
      status: 'published',
      reading_time: 8,
      published_at: '2024-01-10 10:00:00',
      views: 1250,
      created_at: '2024-01-10 10:00:00',
      updated_at: '2024-01-10 10:00:00',
    },
    {
      id: 2,
      title: 'Modern CSS Techniques',
      slug: 'modern-css-techniques',
      excerpt: 'Explore the latest CSS features and how to use them',
      content: 'CSS has evolved significantly in recent years. Let dive into modern techniques...',
      thumbnail: '/images/css-blog.jpg',
      category: { id: 2, name: 'CSS', slug: 'css', color: '#264de4', order: 2 },
      tags: [{ id: 3, name: 'CSS', slug: 'css' }, { id: 4, name: 'Web Design', slug: 'web-design' }],
      status: 'published',
      reading_time: 6,
      published_at: '2024-02-15 14:30:00',
      views: 890,
      created_at: '2024-02-15 14:30:00',
      updated_at: '2024-02-15 14:30:00',
    },
    {
      id: 3,
      title: 'Getting Started with TypeScript',
      slug: 'getting-started-with-typescript',
      excerpt: 'A comprehensive guide to TypeScript for JavaScript developers',
      content: 'TypeScript adds static typing to JavaScript. Here how to get started...',
      thumbnail: '/images/typescript-blog.jpg',
      category: { id: 3, name: 'JavaScript', slug: 'javascript', color: '#f7df1e', order: 3 },
      tags: [{ id: 5, name: 'TypeScript', slug: 'typescript' }, { id: 6, name: 'JavaScript', slug: 'javascript' }],
      status: 'published',
      reading_time: 10,
      published_at: '2024-03-20 09:00:00',
      views: 2100,
      created_at: '2024-03-20 09:00:00',
      updated_at: '2024-03-20 09:00:00',
    },
  ])

  const socialLinks = ref([
    { id: 1, platform: 'GitHub', url: 'https://github.com/huelgasjames', icon: 'github', visible: true, order: 1 },
    { id: 2, platform: 'LinkedIn', url: 'https://www.linkedin.com/in/huelgas-james-anilov-g-1ba7b6391/', icon: 'linkedin', visible: true, order: 2 },
    { id: 3, platform: 'Facebook', url: 'https://www.facebook.com/hlgs.jms', icon: 'facebook', visible: true, order: 3 },
    { id: 4, platform: 'Email', url: 'mailto:huelgasjames46@gmail.com', icon: 'email', visible: true, order: 4 },
  ])

  const settings = ref({
    site_title: 'James Anilov Huelgas - Portfolio',
    site_description: 'Full Stack Web Developer Portfolio',
    site_keywords: 'developer, portfolio, web development',
    theme_color: '#6366f1',
  })

  const loading = ref(true)
  const error = ref(null)

  function getProjectBySlug(slug) {
    return projects.value.find(p => p.slug === slug)
  }

  function getBlogBySlug(slug) {
    return blogs.value.find(b => b.slug === slug)
  }

  function getProjectsByCategory(category) {
    if (!category || category === 'all') return projects.value
    return projects.value.filter(p => p.category === category)
  }

  async function submitContactForm(formData) {
    loading.value = true
    error.value = null
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Contact form submitted:', formData)
      return { success: true, message: 'Message sent successfully!' }
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  async function fetchAll() {
    // Data is already loaded, no API calls needed
    await new Promise(resolve => setTimeout(resolve, 5000))
    loading.value = false
  }

  return {
    profile,
    projects,
    skills,
    certifications,
    certificateFiles,
    experiences,
    blogs,
    socialLinks,
    settings,
    loading,
    error,
    getProjectBySlug,
    getBlogBySlug,
    getProjectsByCategory,
    submitContactForm,
    fetchAll,
  }
})
