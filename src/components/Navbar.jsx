import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="mx-auto max-w-[1440px] flex justify-between items-center px-5 md:px-8 lg:px-12 xl:px-[94px] py-[15px]">
          {/* Brand Logo & Name Anchor */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer relative z-[60]">
            <img src="/brand-logo.png" alt="Shelly Entertainment Group Logo" className="h-10 w-auto" />
          </Link>

          {/* Center Menu Links — Desktop */}
          <div className="hidden md:flex items-center space-x-3 bg-white/10 rounded-full border border-white/10" style={{ padding: '10px' }}>
            {menuItems.map((item) => {
              const active = isActive(item.to);
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

          {/* Right: Contact Us (desktop) + Hamburger (mobile) */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-block text-white hover:text-brand-gold rounded-full text-sm font-medium transition-all duration-300 border border-white/20 bg-white/10 hover:bg-white/20"
              style={{ padding: '8px 12px' }}
            >
              Contact Us
            </Link>

            {/* Hamburger Button — Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-[60] flex flex-col items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-white rounded-full mt-[4px] transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-[#0a0a0b]/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-400 md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {menuItems.map((item) => {
            const active = isActive(item.to);
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`text-2xl font-medium transition-colors duration-300 ${
                  active ? 'text-[#FFB200]' : 'text-white/80 hover:text-white'
                }`}
                style={{ fontFamily: 'Inter' }}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="mt-4 border border-[#FFB200] rounded-full px-6 py-3 text-[#FFB200] font-bold text-lg hover:bg-[#FFB200]/10 transition-colors"
            style={{ fontFamily: 'Inter' }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
