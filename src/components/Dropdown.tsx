import { useState } from 'react';

interface DropdownProps {
  content: string;
  children?: React.ReactNode;
  isMobile?: boolean;
  isOpen?: boolean;
  onOpen?: () => void;
}

function Dropdown({ content, children, isMobile, isOpen, onOpen }: DropdownProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const handleInteraction = isMobile
    ? { onClick: () => setMobileOpen(!mobileOpen) }
    : { onMouseEnter: onOpen };

  const showDropdown = isMobile ? mobileOpen : isOpen;

  return (
    <li className={`relative ${isMobile ? 'w-full' : ''}`}>
      <div {...handleInteraction} className="relative">
        <button 
          type="button" 
          className={`flex cursor-pointer items-center gap-2 text-sm transition-colors hover:text-[#436850] 
            ${isMobile ? 'w-full justify-between px-2 py-3' : 'px-3 py-2'}`}
        >
          {content}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        {showDropdown && (
          <div className={`
            md:rounded-lg md:bg-white py-2 md:shadow-lg md:ring-1 md:ring-black/5 
            ${isMobile ? 'relative mt-2 w-full' : 'absolute top-full left-0 z-[100] mt-1 min-w-[200px]'}
          `}>
            {children}
          </div>
        )}
      </div>
    </li>
  );
}

export default Dropdown;
