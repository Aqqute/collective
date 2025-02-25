import Link from 'next/link';
import { NavLinks } from './NavLinks';
import { ProfileMenu } from './ProfileMenu';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/api/placeholder/32/32"
                alt="Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </Link>
            <NavLinks />
          </div>
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
};