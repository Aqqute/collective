interface LinkSection {
    title: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  }
  
  const footerSections: LinkSection[] = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Browse Freelancers', href: '/freelancers' },
        { label: 'Post a Project', href: '/post-project' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Refund Policy', href: '/refund' },
        { label: 'Cookie Policy', href: '/cookie' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Customer Support', href: '/support' },
        { label: 'Payment & Billing', href: '/billing' },
        { label: 'Dispute Resolution', href: '/disputes' },
        { label: 'Security Center', href: '/security' },
      ],
    },
  ];
  
  export const FooterLinks = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-white font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };