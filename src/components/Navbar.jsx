import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about-us' },
    { label: 'Products', to: '/products' },
    { label: 'Partners', to: '/partners' },
    { label: 'Staff', to: '/staff' }
  ];

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/';
    if (to === '/about-us') return location.pathname === '/about-us';
    if (to === '/products') return location.pathname.startsWith('/products');
    if (to === '/partners') return location.pathname === '/partners';
    if (to === '/staff') return location.pathname === '/staff';
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-auto max-w-[1440px] flex justify-between items-center" style={{ padding: '15px 94px' }}>
        {/* Brand Logo & Name Anchor */}
        <Link to="/" className="flex items-center space-x-3 cursor-pointer">
          <img src="/brand-logo.png" alt="Shelly Entertainment Group Logo" className="h-10 w-auto" />
        </Link>

        {/* Center Menu Links */}
        <div className="hidden md:flex items-center space-x-3 bg-white/10 rounded-full border border-white/10" style={{ padding: '10px' }}>
          {menuItems.map((item) => {
            const active = isActive(item.to);
            // For hash links on homepage, use <a> tag; for routes, use <Link>
            const isHashLink = item.to.startsWith('/#');

            if (isHashLink) {
              return (
                <a
                  key={item.label}
                  href={item.to}
                  className={`rounded-full text-sm font-medium transition-all duration-300 border ${
                    active
                      ? 'border-[#FFB200]/40 bg-[#FFB200]/10 text-[#FFB200]'
                      : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
                  }`}
                  style={{ padding: '8px 12px' }}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.to}
                className={`rounded-full text-sm font-medium transition-all duration-300 border ${
                  active
                    ? 'border-[#FFB200]/40 bg-[#FFB200]/10 text-[#FFB200]'
                    : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
                }`}
                style={{ padding: '8px 12px' }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right Action Button */}
        <div>
          <Link
            to="/contact"
            className="text-white hover:text-brand-gold rounded-full text-sm font-medium transition-all duration-300 border border-white/20 bg-white/10 hover:bg-white/20"
            style={{ padding: '8px 12px' }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
