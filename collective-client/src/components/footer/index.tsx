import { Newsletter } from './NewsLetter';
import { FooterLinks } from './FooterLinks';
import { SocialMedia } from './SocialMedia';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <Newsletter onSubscribe={(email) => console.log('Subscribed:', email)} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FooterLinks />
            <SocialMedia />
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image
              src="/api/placeholder/120/40"
              alt="Go Collective"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <p className="text-gray-400 text-sm">
            ©Qollective 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};