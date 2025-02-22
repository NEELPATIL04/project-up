// components/layout/Breadcrumb.tsx
"use client"
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
  const pathname = usePathname();
  
  const generateBreadcrumbs = () => {
    const paths = pathname.split('/').filter(path => path);
    return paths.map((path, index) => ({
      label: path.charAt(0).toUpperCase() + path.slice(1),
      path: '/' + paths.slice(0, index + 1).join('/')
    }));
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <div className="flex items-center space-x-2 text-gray-400">
      <span>🏠</span>
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.path} className="flex items-center">
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-sm">{crumb.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;