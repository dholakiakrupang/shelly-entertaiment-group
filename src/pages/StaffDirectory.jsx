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
    image: '/staff/staff-1.png',
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'Head of Operations',
    department: 'Operations',
    email: 'marcus.t@libertyrewards.com',
    phone: '+1 (555) 010-2200',
    image: '/staff/staff-2.png',
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'VP of Partnerships',
    department: 'Partnerships',
    email: 'sarah.j@libertyrewards.com',
    phone: '+1 (555) 010-3300',
    image: '/staff/staff-3.png',
  },
  {
    id: 4,
    name: 'David Wu',
    role: 'Senior Sales Director',
    department: 'Sales',
    email: 'david.w@libertyrewards.com',
    phone: '+1 (555) 010-4400',
    image: '/staff/staff-4.png',
  },
  {
    id: 5,
    name: 'Emily Chen',
    role: 'Customer Support Lead',
    department: 'Support',
    email: 'support@libertyrewards.com',
    phone: '+1 (555) 010-5500',
    image: '/staff/staff-5.png',
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Compliance Officer',
    department: 'Operations',
    email: 'compliance@libertyrewards.com',
    phone: '+1 (555) 010-6600',
    image: '/staff/staff-6.png',
  },
];

/* ──────────────────── SVG Icons ──────────────────── */
const EmailIcon = () => (
  <svg className="w-4 h-4 text-[#ff8a00]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3359 2.66602H2.66927C1.93289 2.66602 1.33594 3.26297 1.33594 3.99935V11.9993C1.33594 12.7357 1.93289 13.3327 2.66927 13.3327H13.3359C14.0723 13.3327 14.6693 12.7357 14.6693 11.9993V3.99935C14.6693 3.26297 14.0723 2.66602 13.3359 2.66602Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.6693 4.66602L8.68927 8.46602C8.48345 8.59497 8.24548 8.66336 8.0026 8.66336C7.75973 8.66336 7.52176 8.59497 7.31594 8.46602L1.33594 4.66602" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4 text-[#ff8a00]" viewBox="0 48 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.665 59.2807V61.2807C14.6657 61.4664 14.6277 61.6502 14.5533 61.8203C14.479 61.9904 14.3699 62.1431 14.233 62.2686C14.0962 62.3941 13.9347 62.4897 13.7588 62.5492C13.5829 62.6087 13.3966 62.6308 13.2117 62.614C11.1602 62.3911 9.18966 61.6901 7.45833 60.5674C5.84755 59.5438 4.48189 58.1782 3.45833 56.5674C2.33165 54.8282 1.63049 52.848 1.41166 50.7874C1.395 50.603 1.41691 50.4172 1.47599 50.2418C1.53508 50.0664 1.63004 49.9052 1.75484 49.7685C1.87964 49.6318 2.03153 49.5225 2.20086 49.4477C2.37018 49.3729 2.55322 49.3342 2.73833 49.334H4.73833C5.06187 49.3309 5.37552 49.4454 5.62084 49.6564C5.86615 49.8674 6.02638 50.1603 6.07166 50.4807C6.15608 51.1208 6.31263 51.7492 6.53833 52.354C6.62802 52.5927 6.64744 52.852 6.59427 53.1013C6.5411 53.3506 6.41757 53.5795 6.23833 53.7607L5.39166 54.6074C6.3407 56.2764 7.72263 57.6583 9.39166 58.6074L10.2383 57.7607C10.4196 57.5815 10.6484 57.4579 10.8977 57.4048C11.1471 57.3516 11.4064 57.371 11.645 57.4607C12.2498 57.6864 12.8783 57.843 13.5183 57.9274C13.8422 57.9731 14.1379 58.1362 14.3494 58.3857C14.5608 58.6352 14.6731 58.9538 14.665 59.2807Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
    <div className="flex flex-col gap-4 pt-[23px] px-[23px] pb-[23px]">
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
      <section className="relative w-full bg-gradient-to-b from-[#0a0a0b] to-[#0f0f10] flex items-center justify-center px-6 md:px-[94px] pt-[167px] pb-[50px] min-h-[341px]">
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
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-[15px] py-[7px] flex items-center gap-2">
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
        <div className="bg-black/[0.04] border border-[#e2e2e2] rounded-2xl px-[11px] py-[6px] w-full max-w-[576px]">
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
              className={`rounded-full px-[23px] py-[11px] text-sm font-semibold tracking-tight transition-all duration-300 border cursor-pointer ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[26px] gap-y-[34px] w-full max-w-[1252px]">
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
