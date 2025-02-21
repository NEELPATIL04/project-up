import { Code, Database, Cloud, GitBranch } from 'lucide-react';

export const services = [
  { icon: <Code size={40} className="text-blue-400" />, title: 'Shopify & Next.js', description: 'Building eCommerce solutions with modern technologies.' },
  { icon: <Code size={40} className="text-green-400" />, title: 'MERN Development', description: 'Full-stack web apps with MongoDB, Express, React, and Node.js.' },
  { icon: <GitBranch size={40} className="text-purple-400" />, title: 'Git Management', description: 'Efficient version control and collaboration.' },
  { icon: <Database size={40} className="text-yellow-400" />, title: 'Database Management', description: 'Optimized database solutions for scalability.' },
  { icon: <Cloud size={40} className="text-red-400" />, title: 'Cloud Deployment', description: 'Deploy applications on cloud platforms seamlessly.' }
];
