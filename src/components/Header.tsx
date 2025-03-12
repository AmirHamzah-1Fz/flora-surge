function Header() {
  return (
    <header className="fixed top-0 left-0 h-auto w-full px-[3%] py-2">
      <nav className="flex w-full items-center justify-between">
        {/* LOGO */}
        <div className="text-lg font-bold">Flora Surge</div>

        {/* LIST MENU */}
        <div className="flex w-auto h-auto gap-4 items-center justify-end">
          <a href="#home" className="text-sm">Home</a>
          <a href="#about" className="text-sm">About</a>
          <a href="#services" className="text-sm">Services</a>
          <a href="#contact" className="text-sm">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
