import Link from 'next/link';
export interface NavLink {
    href: string;
    label: string;
  }
  

const navLinks: NavLink[] = [
  { href: '/jobs-feed', label: 'Jobs feed' },
  { href: '/projects', label: 'Projects' },
  { href: '/payments', label: 'Payments' },
  { href: '/messages', label: 'Messages' },
];

export const NavLinks = () => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};