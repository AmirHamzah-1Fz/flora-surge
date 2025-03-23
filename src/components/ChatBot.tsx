import { useState, useRef, useEffect } from 'react';
import ChatMenu from './ChatMenu';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const chatMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatMenuRef.current && !chatMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-tr-5xl fixed right-6 md:right-12 z-[20] transition-all ease-in-out will-change-transform ${isOpen ? '-bottom-20 duration-[600ms]' : 'bottom-12 duration-[400ms]'} flex h-14 w-14 cursor-pointer items-center justify-center rounded-tl-full rounded-br-full rounded-bl-full bg-[#12372A] p-[14px] hover:scale-105 hover:bg-[#0F2C22] hover:shadow-lg active:scale-95`}
        title="Tanya FloraBot"
      >
        <svg className="h-full w-full shrink-0" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
          <path d="m240-240-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm-34-80h594v-480H160v525l46-45Zm-46 0v-480 480Zm120-80h240q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480H280q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0-120h400q17 0 28.5-11.5T720-560q0-17-11.5-28.5T680-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-120h400q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720H280q-17 0-28.5 11.5T240-680q0 17 11.5 28.5T280-640Z" />
        </svg>
      </button>

      <div ref={chatMenuRef}>
        <ChatMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
}

export default ChatBot;
