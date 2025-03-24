import Dropdown from './Dropdown';
import { useState, useRef } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const MenuItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#436850]">
      {children}
    </a>
  );

  const menuItems = [
    {
      label: 'Beranda',
      items: [
        { label: 'Tentang', href: '#about' },
        { label: 'Kontak', href: '#contact' },
      ],
    },
    {
      label: 'Pembelajaran',
      items: [
        { label: 'Mulai pembelajaran', href: '#' },
        { label: 'Artikel', href: '#' },
      ],
    },
    {
      label: 'Lowongan',
      items: [{ label: 'Job finder', href: '#' }],
    },
    {
      label: 'Bantuan',
      items: [{ label: 'Tanya FloraBot', href: '#' }]
    },
  ];

  return (
    <header ref={headerRef} className="fixed top-0 left-0 z-50 h-16 w-full bg-white  py-2 px-[5%] md:px-[4%]" onMouseLeave={handleMouseLeave}>
      <div className="flex h-full w-full items-center justify-between">
        {/* LOGO */}
        <a href="#home">
          <svg className="shrink-0" width="160" viewBox="0 0 259 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M45.7886 33.2206C45.2212 33.8495 34.0335 45.5579 22.7393 40.6193C15.5763 37.4008 12.9168 29.8357 12.3672 28.023C11.0185 28.9154 9.82034 30.0341 8.82114 31.3339C7.1551 33.5774 6.0247 36.2022 5.52332 38.9916C4.70773 43.0053 5.52332 45.2804 3.96306 46.1867C3.59813 46.3923 3.18989 46.5 2.77514 46.5C2.36039 46.5 1.95215 46.3923 1.58722 46.1867C-1.24961 44.6145 -0.0439604 35.5512 3.30705 29.8357C4.04738 28.5947 4.92189 27.4466 5.91338 26.4138C7.55207 24.6807 9.45041 23.2375 11.5339 22.1411C13.8059 20.7774 16.1772 19.6023 18.6259 18.6267C23.1979 16.9725 27.9757 16.0193 32.8101 15.7967C32.6747 15.2947 32.439 14.8283 32.1186 14.428C28.5371 9.82232 14.1402 17.295 13.0232 17.9054C13.1 16.2904 13.4795 14.7069 14.1402 13.2442C17.7926 5.4756 28.5726 5.08717 29.6541 5.08717C30.8799 5.10993 32.1016 5.23986 33.3065 5.4756L34.0689 5.66057C35.2822 5.9216 36.518 6.05176 37.7568 6.049C40.1672 6.06652 42.5569 5.58511 44.7877 4.63262C47.0186 3.68013 49.0461 2.27549 50.753 0.5C55.0083 12.4488 53.1466 25.23 45.7886 33.2206Z"
              fill="#436850"
            />
            <path
              d="M91 12.664V16.28H81.688V22.008H88.824V25.56H81.688V35H77.208V12.664H91ZM98.6568 11.32V35H94.1768V11.32H98.6568ZM110.955 35.288C109.248 35.288 107.712 34.9147 106.347 34.168C104.982 33.4 103.904 32.3227 103.115 30.936C102.347 29.5493 101.963 27.9493 101.963 26.136C101.963 24.3227 102.358 22.7227 103.147 21.336C103.958 19.9493 105.056 18.8827 106.443 18.136C107.83 17.368 109.376 16.984 111.083 16.984C112.79 16.984 114.336 17.368 115.723 18.136C117.11 18.8827 118.198 19.9493 118.987 21.336C119.798 22.7227 120.203 24.3227 120.203 26.136C120.203 27.9493 119.787 29.5493 118.955 30.936C118.144 32.3227 117.035 33.4 115.627 34.168C114.24 34.9147 112.683 35.288 110.955 35.288ZM110.955 31.384C111.766 31.384 112.523 31.192 113.227 30.808C113.952 30.4027 114.528 29.8053 114.955 29.016C115.382 28.2267 115.595 27.2667 115.595 26.136C115.595 24.4507 115.147 23.16 114.251 22.264C113.376 21.3467 112.299 20.888 111.019 20.888C109.739 20.888 108.662 21.3467 107.787 22.264C106.934 23.16 106.507 24.4507 106.507 26.136C106.507 27.8213 106.923 29.1227 107.755 30.04C108.608 30.936 109.675 31.384 110.955 31.384ZM127.969 20.024C128.545 19.0853 129.292 18.3493 130.209 17.816C131.148 17.2827 132.215 17.016 133.409 17.016V21.72H132.225C130.817 21.72 129.751 22.0507 129.025 22.712C128.321 23.3733 127.969 24.5253 127.969 26.168V35H123.489V17.272H127.969V20.024ZM135.275 26.072C135.275 24.28 135.627 22.6907 136.331 21.304C137.056 19.9173 138.027 18.8507 139.243 18.104C140.48 17.3573 141.856 16.984 143.371 16.984C144.693 16.984 145.845 17.2507 146.827 17.784C147.829 18.3173 148.629 18.9893 149.227 19.8V17.272H153.739V35H149.227V32.408C148.651 33.24 147.851 33.9333 146.827 34.488C145.824 35.0213 144.661 35.288 143.339 35.288C141.845 35.288 140.48 34.904 139.243 34.136C138.027 33.368 137.056 32.2907 136.331 30.904C135.627 29.496 135.275 27.8853 135.275 26.072ZM149.227 26.136C149.227 25.048 149.013 24.12 148.587 23.352C148.16 22.5627 147.584 21.9653 146.859 21.56C146.133 21.1333 145.355 20.92 144.523 20.92C143.691 20.92 142.923 21.1227 142.219 21.528C141.515 21.9333 140.939 22.5307 140.491 23.32C140.064 24.088 139.851 25.0053 139.851 26.072C139.851 27.1387 140.064 28.0773 140.491 28.888C140.939 29.6773 141.515 30.2853 142.219 30.712C142.944 31.1387 143.712 31.352 144.523 31.352C145.355 31.352 146.133 31.1493 146.859 30.744C147.584 30.3173 148.16 29.72 148.587 28.952C149.013 28.1627 149.227 27.224 149.227 26.136ZM173.451 35.224C171.894 35.224 170.486 34.9573 169.227 34.424C167.99 33.8907 167.009 33.1227 166.283 32.12C165.558 31.1173 165.185 29.9333 165.163 28.568H169.963C170.027 29.4853 170.347 30.2107 170.923 30.744C171.521 31.2773 172.331 31.544 173.355 31.544C174.401 31.544 175.222 31.2987 175.819 30.808C176.417 30.296 176.715 29.6347 176.715 28.824C176.715 28.1627 176.513 27.6187 176.107 27.192C175.702 26.7653 175.19 26.4347 174.571 26.2C173.974 25.944 173.142 25.6667 172.075 25.368C170.625 24.9413 169.441 24.5253 168.523 24.12C167.627 23.6933 166.849 23.064 166.187 22.232C165.547 21.3787 165.227 20.248 165.227 18.84C165.227 17.5173 165.558 16.3653 166.219 15.384C166.881 14.4027 167.809 13.656 169.003 13.144C170.198 12.6107 171.563 12.344 173.099 12.344C175.403 12.344 177.27 12.9093 178.699 14.04C180.15 15.1493 180.95 16.7067 181.099 18.712H176.171C176.129 17.944 175.798 17.3147 175.179 16.824C174.582 16.312 173.782 16.056 172.779 16.056C171.905 16.056 171.201 16.28 170.667 16.728C170.155 17.176 169.899 17.8267 169.899 18.68C169.899 19.2773 170.091 19.7787 170.475 20.184C170.881 20.568 171.371 20.888 171.947 21.144C172.545 21.3787 173.377 21.656 174.443 21.976C175.894 22.4027 177.078 22.8293 177.995 23.256C178.913 23.6827 179.702 24.3227 180.363 25.176C181.025 26.0293 181.355 27.1493 181.355 28.536C181.355 29.7307 181.046 30.84 180.427 31.864C179.809 32.888 178.902 33.7093 177.707 34.328C176.513 34.9253 175.094 35.224 173.451 35.224ZM201.975 17.272V35H197.463V32.76C196.887 33.528 196.13 34.136 195.191 34.584C194.274 35.0107 193.271 35.224 192.183 35.224C190.797 35.224 189.57 34.936 188.503 34.36C187.437 33.7627 186.594 32.8987 185.975 31.768C185.378 30.616 185.079 29.2507 185.079 27.672V17.272H189.559V27.032C189.559 28.44 189.911 29.528 190.615 30.296C191.319 31.0427 192.279 31.416 193.495 31.416C194.733 31.416 195.703 31.0427 196.407 30.296C197.111 29.528 197.463 28.44 197.463 27.032V17.272H201.975ZM210.876 20.024C211.452 19.0853 212.198 18.3493 213.116 17.816C214.054 17.2827 215.121 17.016 216.316 17.016V21.72H215.132C213.724 21.72 212.657 22.0507 211.932 22.712C211.228 23.3733 210.876 24.5253 210.876 26.168V35H206.396V17.272H210.876V20.024ZM226.277 16.984C227.6 16.984 228.762 17.2507 229.765 17.784C230.768 18.296 231.557 18.968 232.133 19.8V17.272H236.645V35.128C236.645 36.7707 236.314 38.232 235.653 39.512C234.992 40.8133 234 41.8373 232.677 42.584C231.354 43.352 229.754 43.736 227.877 43.736C225.36 43.736 223.29 43.1493 221.669 41.976C220.069 40.8027 219.162 39.2027 218.949 37.176H223.397C223.632 37.9867 224.133 38.6267 224.901 39.096C225.69 39.5867 226.64 39.832 227.749 39.832C229.05 39.832 230.106 39.4373 230.917 38.648C231.728 37.88 232.133 36.7067 232.133 35.128V32.376C231.557 33.208 230.757 33.9013 229.733 34.456C228.73 35.0107 227.578 35.288 226.277 35.288C224.784 35.288 223.418 34.904 222.181 34.136C220.944 33.368 219.962 32.2907 219.237 30.904C218.533 29.496 218.181 27.8853 218.181 26.072C218.181 24.28 218.533 22.6907 219.237 21.304C219.962 19.9173 220.933 18.8507 222.149 18.104C223.386 17.3573 224.762 16.984 226.277 16.984ZM232.133 26.136C232.133 25.048 231.92 24.12 231.493 23.352C231.066 22.5627 230.49 21.9653 229.765 21.56C229.04 21.1333 228.261 20.92 227.429 20.92C226.597 20.92 225.829 21.1227 225.125 21.528C224.421 21.9333 223.845 22.5307 223.397 23.32C222.97 24.088 222.757 25.0053 222.757 26.072C222.757 27.1387 222.97 28.0773 223.397 28.888C223.845 29.6773 224.421 30.2853 225.125 30.712C225.85 31.1387 226.618 31.352 227.429 31.352C228.261 31.352 229.04 31.1493 229.765 30.744C230.49 30.3173 231.066 29.72 231.493 28.952C231.92 28.1627 232.133 27.224 232.133 26.136ZM257.501 25.752C257.501 26.392 257.458 26.968 257.373 27.48H244.413C244.519 28.76 244.967 29.7627 245.757 30.488C246.546 31.2133 247.517 31.576 248.669 31.576C250.333 31.576 251.517 30.8613 252.221 29.432H257.053C256.541 31.1387 255.559 32.5467 254.109 33.656C252.658 34.744 250.877 35.288 248.765 35.288C247.058 35.288 245.522 34.9147 244.157 34.168C242.813 33.4 241.757 32.3227 240.989 30.936C240.242 29.5493 239.868 27.9493 239.868 26.136C239.868 24.3013 240.242 22.6907 240.989 21.304C241.735 19.9173 242.781 18.8507 244.125 18.104C245.469 17.3573 247.015 16.984 248.765 16.984C250.45 16.984 251.954 17.3467 253.277 18.072C254.621 18.7973 255.655 19.832 256.381 21.176C257.127 22.4987 257.501 24.024 257.501 25.752ZM252.861 24.472C252.839 23.32 252.423 22.4027 251.613 21.72C250.802 21.016 249.81 20.664 248.637 20.664C247.527 20.664 246.589 21.0053 245.821 21.688C245.074 22.3493 244.615 23.2773 244.445 24.472H252.861Z"
              fill="#436850"
            />
          </svg>
        </a>

        {/* DROP DOWN LG SCREEN */}
        <div className="hidden h-auto w-auto md:block">
          <ul className="flex items-center gap-x-4">
            {menuItems.map((menu) => (
              <Dropdown key={menu.label} content={menu.label} isOpen={activeDropdown === menu.label} onOpen={() => setActiveDropdown(menu.label)}>
                {menu.items.map((item) => (
                  <MenuItem key={item.label} href={item.href}>
                    {item.label}
                  </MenuItem>
                ))}
              </Dropdown>
            ))}
          </ul>
        </div>

        {/* HAMBURGER MENU */}
        <button className="relative block cursor-pointer md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 left-0 bg-white p-4 shadow-lg md:hidden">
            <ul className="flex flex-col gap-y-2">
              {menuItems.map((menu) => (
                <Dropdown key={menu.label} content={menu.label} isMobile>
                  {menu.items.map((item) => (
                    <MenuItem key={item.label} href={item.href}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Dropdown>
              ))}
            </ul>
          </div>
        )}

        <button type="button" className="hidden cursor-pointer rounded-full bg-[var(--primary)] px-4 py-2 text-center text-sm text-[var(--green3)] lg:block">
          Mulai Sekarang
        </button>
      </div>
    </header>
  );
}

export default Header;
