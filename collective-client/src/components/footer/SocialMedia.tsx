import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { label: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { label: 'X', icon: Twitter, href: 'https://x.com' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
];

export const SocialMedia = () => {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Social Media</h3>
      <ul className="space-y-2">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon className="w-5 h-5 mr-2" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
