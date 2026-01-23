
import { Article, Resource, Service } from './types.ts';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The Future of Hybrid Workplace Culture',
    excerpt: 'How organizations are adapting their HR strategies for a post-pandemic world.',
    content: `Workplace culture is undergoing a radical shift. The traditional 9-to-5 office model has evolved into a fluid ecosystem of remote, in-office, and hybrid environments. Successful firms are now focusing on 'asynchronous collaboration' as their primary productivity driver.

In our consulting experience, we've found that companies prioritizing employee wellbeing and flexible output see a 40% increase in retention. This article explores how to build these structures from the ground up, starting with digital infrastructure and ending with empathy-led management training.

Strategic HR is no longer about compliance; it is about competitive advantage. We recommend assessing your current cultural footprint at least quarterly to ensure alignment with global market shifts.`,
    date: 'Oct 12, 2023',
    author: 'Sarah Jenkins',
    category: 'HR & Culture',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    title: 'Accounting Standards for Startups',
    excerpt: 'A comprehensive guide to maintaining clean books from day one.',
    content: `Financial clarity is the lifeblood of any growing startup. Many founders make the mistake of postponing professional accounting until their first major audit or tax season. This is a high-risk strategy that often leads to significant technical debt.

We advise startups to implement GAAP standards (Generally Accepted Accounting Principles) from their first month. This ensures that when venture capital firms perform due diligence, your financials are transparent, accurate, and scalable.

Key areas to focus on include burn rate monitoring, revenue recognition policies, and rigorous expense categorization. Utilizing cloud-based automated tools can reduce administrative overhead by up to 25%.`,
    date: 'Nov 05, 2023',
    author: 'Mark Sterling',
    category: 'Accounting',
    image: 'https://images.unsplash.com/photo-1454165833767-027eeed1596e?auto=format&fit=crop&q=80&w=1000'
  }
];

export const RESOURCES: Resource[] = [
  {
    id: 'r1',
    title: 'Business Types Guide',
    description: 'Explore the various legal structures and commercial registrations available for your venture.',
    type: 'website',
    url: 'https://www.sijilat.bh/guides-laws/BusinessTypes.aspx',
    thumbnail: 'https://picsum.photos/400/225?random=20'
  },
  {
    id: 'r2',
    title: 'Setup Your Business',
    description: 'A step-by-step walkthrough of the official process to establish your commercial entity.',
    type: 'website',
    url: 'https://www.sijilat.bh/setupyourbusiness.aspx',
    thumbnail: 'https://picsum.photos/400/225?random=21'
  },
  {
    id: 'r3',
    title: 'Official Sijilat User Manual',
    description: 'Comprehensive documentation (PDF) for navigating the Sijilat system and legal requirements.',
    type: 'website',
    url: 'https://www.sijilat.bh/temp/Doc/Sijilat%202.61_en_Finial.pdf',
    thumbnail: 'https://picsum.photos/400/225?random=22'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Commercial Entity Advisory',
    description: 'For established commercial registrations looking for structure and scaling.',
    category: 'Commercial',
    durations: [20, 40, 60],
    subServices: [
      { id: 'ss1', title: 'Accounting Consultancy', description: 'Single sessions or tailored packages for your business ledger.' },
      { id: 'ss2', title: 'HR & Culture Consultancy', description: 'Optimize your workforce management and organizational health.' },
      { id: 'ss3', title: 'Structural Establishment', description: 'Setting up accounting and HR-culture structures from the ground up.' }
    ]
  },
  {
    id: 's2',
    title: 'Individual Career & Wellbeing',
    description: 'Specialized support for students, employees, and the unemployed.',
    category: 'Individual',
    durations: [20, 40, 60],
    subServices: [
      { id: 'ss4', title: 'Goal Setting & Strategy', description: 'Align your career path with your life goals.' },
      { id: 'ss5', title: 'Occupational Wellbeing', description: 'Mental health support and burnout prevention.' }
    ]
  },
  {
    id: 's3',
    title: 'Strategic Business Planning',
    description: 'Intensive planning for those looking to launch or pivot their business.',
    category: 'Strategic',
    durations: [60],
  }
];
