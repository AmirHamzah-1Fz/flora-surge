import FloraBot from '../assets/icons/FloraBot.svg';
import User from '../assets/icons/User.svg';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import LogoStempel from '../assets/logo/Logo-stempel.svg';

interface ChatMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  content: string;
  isBot: boolean;
}

function ChatMenu({ isOpen, onClose }: ChatMenuProps) {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      content: 'Halo, saya FloraBot. Saya akan membantu menjawab pertanyaan Anda di **bidang hijau**.',
      isBot: true,
    },
    {
      content: 'Halo test, tes',
      isBot: false,
    },
    {
      content: `# Test Markdown Format

Kesadaran terhadap *ekonomi hijau* dan *pekerjaan hijau* bukan lagi sekadar tren, melainkan kebutuhan mendesak untuk keberlangsungan hidup di planet ini. Berikut adalah beberapa alasan mengapa kesadaran ini sangat penting bagi kehidupan kita:

## 1. Menghadapi Perubahan Iklim

Perubahan iklim adalah ancaman nyata bagi kehidupan di bumi. Dampaknya sudah kita rasakan dalam bentuk cuaca ekstrem, kenaikan permukaan air laut, dan kerusakan ekosistem.

## 2. Melestarikan Sumber Daya Alam

Sumber daya alam kita terbatas dan semakin menipis. Ekonomi hijau mendorong penggunaan sumber daya secara berkelanjutan, sehingga sumber daya tersebut tetap tersedia untuk generasi mendatang.

## Kesimpulan

Kesadaran terhadap ekonomi hijau dan pekerjaan hijau adalah investasi untuk masa depan yang lebih baik. Dengan mengadopsi gaya hidup dan praktik bisnis yang ramah lingkungan, kita dapat menciptakan dunia yang lebih berkelanjutan, sehat, dan sejahtera bagi generasi mendatang.`,
      isBot: true,
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { content: inputText, isBot: false }]);
    setInputText('');
  };

  return (
    <div
      className={`fixed right-0 z-[999] transition-all duration-[400ms] ease-in-out will-change-transform md:right-12 ${isOpen ? 'md:bottom-0 max-sm:top-0' : '-bottom-[140vh] rounded-none duration-[400ms] md:-bottom-[480px]'} h-screen w-screen overflow-x-hidden bg-white shadow-xl md:h-[480px] md:w-[400px] md:rounded-t-xl`}
    >
      <div className="flex h-full w-full flex-col">
        {/* HEADER */}
        <div className="flex h-12 w-full items-center justify-between bg-[var(--primary)] px-4 py-3 text-center text-[var(--green4)] shadow-lg md:shadow-md">
          <div className="header flex items-center justify-start gap-2 text-lg font-semibold text-[#FFF1D1]">
            <img src={LogoStempel} alt="FloraBot icon" width="24" height="24" />
            <h2>FloraBot</h2>
          </div>

          {/* CLOSE */}
          <button onClick={onClose} id="exit" className="group flex h-auto w-auto cursor-pointer items-center justify-center rounded-full p-2 transition-colors duration-300 ease-in-out hover:bg-[hsl(159,48%,18%)]" title="Tutup jendela">
            <svg className="h-full w-full shrink-0 fill-[#3BAB84] group-active:scale-95" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
            </svg>
          </button>
        </div>

        {/* CHAT CONTENT */}
        <div className="scrollbar-thin flex-1 overflow-y-auto border-b border-b-[#00000050]">
          <div className="flex h-auto w-full flex-col gap-y-6 px-4 py-8">
            {messages.map((message, index) => (
              <div key={index} className={`w-auto max-w-[87%] md:max-w-[85%] ${message.isBot ? 'self-start' : 'self-end'}`}>
                <div className={`flex w-auto items-start justify-start gap-2 ${!message.isBot && 'flex-row-reverse'}`}>
                  <img src={message.isBot ? FloraBot : User} alt={`${message.isBot ? 'FloraBot' : 'User'} icon`} width={36} height={36} />
                  <div className={`mt-1 px-4 py-2 text-[#FBFADA] ${message.isBot ? 'rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] bg-[#436850]' : 'rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] bg-[var(--primary)]'}`}>
                    {message.isBot ? (
                      <div className="prose prose-invert prose-p:text-[#FFF1D1] prose-sm prose-headings:text-[#FFF1D1] prose-headings:text-xl prose-headings:font-bold prose-headings:-mb-3 prose-p:mb-0 prose-h1:text-[#FFF1D1] prose-h2:text-[#FFF1D1] prose-strong:text-[#FFF1D1] prose-em:text-[#FFF1D1] max-w-none text-sm leading-relaxed [overflow-wrap:break-word] [word-break:break-word] whitespace-pre-wrap">
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                      </div>
                    ) : (
                      <p className="text-sm leading-relaxed [overflow-wrap:break-word] [word-break:break-word] whitespace-pre-wrap">{message.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROMPT */}
        <div className="h-auto w-full">
          <div id="prompt" className="sticky bottom-0 left-0 z-[20] h-22 w-full bg-white px-4">
            <form onSubmit={handleSubmit} className="flex h-full w-full items-start justify-between gap-2 pt-4">
              <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} className="w-full rounded-full bg-white px-4 py-3 ring-1 ring-black outline-none ring-inset" placeholder="Hello World!" />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className={`group flex h-auto w-auto cursor-pointer items-center justify-center rounded-full p-3 transition-[background-color,shadow,scale] duration-300 ease-in-out will-change-[background-color,box-shadow] hover:scale-[1.050] active:scale-100 ${
                  inputText.trim() ? 'bg-[#12372A] hover:bg-[hsl(159,51%,10%)] hover:shadow-lg' : 'pointer-events-none cursor-not-allowed bg-zinc-400'
                }`}
              >
                <svg className="fill-[#ffffff] group-hover:fill-[#ffffff]" xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="currentColor">
                  <path d="M792-443 176-183q-20 8-38-3.5T120-220v-520q0-22 18-33.5t38-3.5l616 260q25 11 25 37t-25 37ZM200-280l474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatMenu;
