// components/Footer.js

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="section bg-gray-900 text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h5 className="text-xl font-bold mb-2">Rıza Hurdacı</h5>
            <p className="text-sm">© 2025 Company Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
              <a className="text-sm hover:underline">About</a>
              <a className="text-sm hover:underline">Contact</a>
              <a className="text-sm hover:underline">Privacy Policy</a>
              <a className="text-sm hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
