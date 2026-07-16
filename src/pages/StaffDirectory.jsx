import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* ──────────────────── Departments ──────────────────── */
const departments = [
  'All Departments',
  'Management',
  'Sales',
  'Support',
  'Operations',
  'Partnerships',
];

/* ──────────────────── Staff Data ──────────────────── */
const staffMembers = [
  {
    id: 1,
    name: 'Eleanor Vance',
    role: 'Chief Executive Officer',
    department: 'Management',
    email: 'eleanor.v@libertyrewards.com',
    phone: '+1 (555) 010-1100',
    image: '/staff/eleanor-vance.png',
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'Head of Operations',
    department: 'Operations',
    email: 'marcus.t@libertyrewards.com',
    phone: '+1 (555) 010-2200',
    image: '/staff/marcus-thorne.png',
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'VP of Partnerships',
    department: 'Partnerships',
    email: 'sarah.j@libertyrewards.com',
    phone: '+1 (555) 010-3300',
    image: '/staff/sarah-jenkins.png',
  },
  {
    id: 4,
    name: 'David Wu',
    role: 'Senior Sales Director',
    department: 'Sales',
    email: 'david.w@libertyrewards.com',
    phone: '+1 (555) 010-4400',
    image: '/staff/david-wu.png',
  },
  {
    id: 5,
    name: 'Emily Chen',
    role: 'Customer Support Lead',
    department: 'Support',
    email: 'support@libertyrewards.com',
    phone: '+1 (555) 010-5500',
    image: '/staff/emily-chen.png',
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Compliance Officer',
    department: 'Operations',
    email: 'compliance@libertyrewards.com',
    phone: '+1 (555) 010-6600',
    image: '/staff/james-wilson.png',
  },
];

/* ──────────────────── SVG Icons ──────────────────── */
const EmailIcon = () => (
  <svg className="w-4 h-4 text-[#ff8a00]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 5l8 6 8-6M2 5v10h16V5" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4 text-[#ff8a00]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 3h3l2 5-2 1c1 2 3 4 5 5l1-2 5 2v3c0 1-1 2-2 2C9 19 1 11 1 5c0-1 1-2 2-2z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5 text-black/40 shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="9" cy="9" r="6" />
    <path d="M17 17l-4-4" strokeLinecap="round" />
  </svg>
);

const FilterIcon = () => (
  <svg className="w-4 h-4 text-black/60" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 3h12M4 8h8M6 13h4" strokeLinecap="round" />
  </svg>
);

const BackArrowIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ──────────────────── Staff Card Component ──────────────────── */
const StaffCard = ({ member }) => (
  <div className="bg-white border border-[#e2e2e2] rounded-[24px] overflow-hidden relative group hover:shadow-lg transition-shadow duration-300"
    style={{ boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}
  >
    {/* Photo */}
    <div className="h-[467px] overflow-hidden relative">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
      />
      <span className="absolute top-[11px] right-[12px] bg-black/80 border border-[#1a1a1a] rounded-full px-[10px] py-2 text-white text-[10px] font-medium tracking-widest uppercase">
        {member.department}
      </span>
    </div>

    {/* Info */}
    <div className="flex flex-col gap-4 pt-6 px-6 pb-6">
      <div>
        <h3 className="font-bold text-xl text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
          {member.name}
        </h3>
        <p className="text-[#989898] text-xs font-medium tracking-widest uppercase mt-1" style={{ fontFamily: 'Inter' }}>
          {member.role}
        </p>
      </div>

      <div className="border-t border-[#e2e2e2]"></div>

      {/* Contact details */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div
            className="rounded-2xl w-9 h-9 flex items-center justify-center border border-[rgba(255,138,0,0.1)] shrink-0"
            style={{
              backgroundImage: 'linear-gradient(135deg, rgba(255,106,0,0.1) 0%, rgba(255,178,0,0.1) 100%)',
            }}
          >
            <EmailIcon />
          </div>
          <a href={`mailto:${member.email}`} className="text-xs text-black/40 hover:text-[#ff8a00] transition-colors" style={{ fontFamily: 'Inter' }}>
            {member.email}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="rounded-2xl w-9 h-9 flex items-center justify-center border border-[rgba(255,138,0,0.1)] shrink-0"
            style={{
              backgroundImage: 'linear-gradient(135deg, rgba(255,106,0,0.1) 0%, rgba(255,178,0,0.1) 100%)',
            }}
          >
            <PhoneIcon />
          </div>
          <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-xs text-black/40 hover:text-[#ff8a00] transition-colors" style={{ fontFamily: 'Inter' }}>
            {member.phone}
          </a>
        </div>
      </div>
    </div>
  </div>
);

/* ──────────────────── Page Component ──────────────────── */
function StaffDirectory() {
  const [activeDepartment, setActiveDepartment] = useState('All Departments');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredStaff = staffMembers.filter((m) => {
    const matchesDept =
      activeDepartment === 'All Departments' || m.department === activeDepartment;
    const matchesSearch =
      searchQuery === '' ||
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="bg-white text-[#0c0c0d]">

      {/* ════════════════ HERO ════════════════ */}
      <section className="relative w-full bg-gradient-to-b from-[#0a0a0b] to-[#0f0f10] flex items-center justify-center px-6 md:px-[94px] pt-[140px] pb-[50px] min-h-[341px]">
        <div className="flex flex-col gap-6 items-center relative w-full max-w-[1252px]">

          {/* Back link */}
          <Link
            to="/"
            className="absolute left-0 top-0 flex items-center gap-2 text-[#777] text-sm tracking-tight hover:text-white transition-colors"
          >
            <BackArrowIcon />
            BACK TO HOME
          </Link>

          <div className="flex flex-col gap-6 items-center w-full">
            {/* Category pill */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-4 py-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200] inline-block"></span>
              <span className="text-[#b5b5b5] text-sm tracking-tight" style={{ fontFamily: 'Inter' }}>
                Our Team
              </span>
            </div>

            {/* Title */}
            <h1 className="font-adlam text-white text-4xl md:text-[64px] leading-[1.15] tracking-wide text-center">
              Staff Directory
            </h1>
          </div>

          {/* Description */}
          <p className="text-[#b5b5b5] text-lg leading-7 tracking-tight text-center max-w-[580px]" style={{ fontFamily: 'Inter' }}>
            Meet the Liberty Rewards team. Connect with our dedicated professionals across all departments.
          </p>
        </div>
      </section>

      {/* ════════════════ SEARCH & FILTERS ════════════════ */}
      <section className="bg-white w-full flex flex-col gap-8 items-center py-[50px] px-6">
        {/* Search bar */}
        <div className="bg-black/[0.04] rounded-2xl px-3 py-2 w-full max-w-[576px]">
          <div className="flex gap-4 items-center w-full">
            <SearchIcon />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search name, role..."
              className="flex-1 bg-transparent outline-none text-base text-black placeholder:text-black/60 tracking-tight"
              style={{ fontFamily: 'Inter' }}
            />
            <button className="bg-white/10 rounded-[20px] w-10 h-10 flex items-center justify-center shrink-0">
              <FilterIcon />
            </button>
          </div>
        </div>

        {/* Department filters */}
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDepartment(dept)}
              className={`rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 border cursor-pointer ${
                activeDepartment === dept
                  ? 'border-[#ff8a00] bg-white text-[#ff8a00]'
                  : 'border-[#e2e2e2] text-black hover:border-[#ff8a00]/40'
              }`}
              style={{ fontFamily: 'Inter' }}
            >
              {dept}
            </button>
          ))}
        </div>
      </section>

      {/* ════════════════ STAFF GRID ════════════════ */}
      <section className="bg-white w-full flex flex-col gap-8 items-center px-6 md:px-[94px] pb-[50px]">
        <p className="text-[#989898] text-base tracking-tight" style={{ fontFamily: 'Inter' }}>
          Showing <span className="font-semibold text-black">{filteredStaff.length}</span> staff member{filteredStaff.length !== 1 ? 's' : ''}
        </p>

        {filteredStaff.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px] w-full max-w-[1252px]">
            {filteredStaff.map((member) => (
              <StaffCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 py-16">
            <div className="w-16 h-16 rounded-full bg-black/[0.04] flex items-center justify-center">
              <SearchIcon />
            </div>
            <p className="text-[#989898] text-lg" style={{ fontFamily: 'Inter' }}>
              No staff members found
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveDepartment('All Departments'); }}
              className="text-[#ff8a00] text-sm font-medium hover:underline cursor-pointer"
              style={{ fontFamily: 'Inter' }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default StaffDirectory;
