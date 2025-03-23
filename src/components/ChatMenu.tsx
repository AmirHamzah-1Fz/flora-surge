interface ChatMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function ChatMenu({ isOpen, onClose }: ChatMenuProps) {
  return (
    <div className={`fixed right-12 z-[10] transition-all duration-[400ms] ease-in-out will-change-transform ${isOpen ? 'bottom-0' : '-bottom-[440px] duration-[400ms]'} h-[440px] w-[320px] overflow-hidden rounded-xl bg-white shadow-xl`}>
      <div className="relative h-full w-full">
        <div className="sticky top-0 left-0 flex h-14 w-full items-center justify-between bg-[#0F2C22] px-4 py-3 text-center text-white">
          <div className="header text-lg font-semibold text-white">
            <h2>Halo, Aku FloraBot!</h2>
          </div>

          <button onClick={onClose} id="exit" className="group flex h-auto w-auto cursor-pointer items-center justify-center rounded-full p-2 transition-colors duration-300 ease-in-out hover:bg-[hsl(159,49%,15%)]" title="Tutup jendela">
            <svg className="h-full w-full shrink-0 fill-[hsl(159,49%,45%)] group-active:scale-95" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatMenu;
