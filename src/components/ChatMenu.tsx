import FloraBot from '../assets/icons/FloraBot.svg';
import User from '../assets/icons/User.svg';
import ReactMarkdown from 'react-markdown';
import { useState, useRef, useEffect } from 'react';
import LogoStempel from '../assets/logo/Logo-stempel.svg';

interface ChatMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  content: string;
  isBot: boolean;
  timestamp: Date;
  isLoading?: boolean;
}

export default function ChatMenu({ isOpen, onClose }: ChatMenuProps) {
  const [inputText, setInputText] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      content: 'Halo, aku FloraBot. Aku akan membantu menjawab pertanyaan kamu di **bidang hijau**.',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestions = ['Apa itu Green Jobs?', 'Apa itu Green Economy?', 'Manfaat Green Economy'];

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
  };

  const callChatbotAPI = async (question: string) => {
    const payloadFormats = [{ message: question }, { query: question }, { input: question }, { text: question }, { prompt: question }, { question: question }, { user_input: question }];

    for (const payload of payloadFormats) {
      try {
        console.log('Trying payload format:', payload);

        const response = await fetch('https://greenjobs-api-chatbot.onrender.com/chatbot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        });

        const responseText = await response.text();
        console.log(`Response status: ${response.status}, Response body:`, responseText);

        if (!response.ok) {
          console.log(`Format ${JSON.stringify(payload)} failed with status ${response.status}`);
          continue;
        }

        let data;
        try {
          data = JSON.parse(responseText);
        } catch {
          console.log('Response is not valid JSON:', responseText);
          data = { response: responseText };
        }

        return data.response || data.message || data.answer || data.result || data.reply || data.text || (typeof data === 'string' ? data : JSON.stringify(data));
      } catch (error) {
        console.error('Error with format', payload, ':', error);
      }
    }

    return 'Maaf, terjadi kesalahan dalam memproses permintaan Anda.';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        content: inputText,
        isBot: false,
        timestamp: new Date(),
      },
      // LOADING MESSAGE
      {
        content: '',
        isBot: true,
        timestamp: new Date(),
        isLoading: true,
      },
    ]);

    const userQuestion = inputText;
    setInputText('');
    setShowSuggestions(false);
    setIsLoading(true);

    const botResponse = await callChatbotAPI(userQuestion);

    setMessages((prev) => [
      ...prev.slice(0, -1),
      {
        content: botResponse,
        isBot: true,
        timestamp: new Date(),
      },
    ]);

    setIsLoading(false);
  };

  const LoadingDots = () => (
    <div className="flex space-x-2">
      <div className="h-2 w-2 animate-[pulse_1s_ease-in-out_infinite] rounded-full bg-[hsl(141,22%,60%)]"></div>
      <div className="h-2 w-2 animate-[pulse_1s_ease-in-out_0.333s_infinite] rounded-full bg-[hsl(141,22%,60%)]"></div>
      <div className="h-2 w-2 animate-[pulse_1s_ease-in-out_0.667s_infinite] rounded-full bg-[hsl(141,22%,60%)]"></div>
    </div>
  );

  return (
    <div
      className={`fixed right-0 z-[100] ring ring-white/10 transition-all duration-[400ms] ease-in-out will-change-transform md:right-12 ${
        isOpen ? 'max-md:top-0 md:bottom-0' : 'max-md:top-full max-md:translate-y-[100px] md:-bottom-[560px]'
      } h-screen w-screen overflow-x-hidden bg-white shadow-xl md:h-[480px] md:w-[400px] md:rounded-t-xl`}
    >
      <div className="flex h-full w-full flex-col">
        {/* HEADER */}
        <div className="flex h-12 w-full items-center justify-between bg-[#12372A] px-4 py-3 text-center shadow-lg md:shadow-md">
          <div className="header flex items-center justify-start gap-2 text-lg font-semibold text-[#FFF1D1]">
            <img src={LogoStempel || '/placeholder.svg'} alt="FloraBot icon" width="24" height="24" />
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
        <div ref={chatContainerRef} className="scrollbar-thin scroll-smooth flex-1 overflow-y-scroll border-b border-b-[#00000050]">
          <div className="flex h-auto w-full flex-col px-4 py-8">
            {messages.map((message, index) => (
              <div key={index} className={`w-full border-b border-b-[#00000020] py-4 last:border-b-0`}>
                <div className={`w-auto max-w-[87%] md:max-w-[85%] ${message.isBot ? 'self-start' : 'ml-auto'}`}>
                  <div className={`flex w-full items-start gap-2 ${!message.isBot && 'flex-row-reverse'}`}>
                    <img src={message.isBot ? FloraBot : User} alt={`${message.isBot ? 'FloraBot' : 'User'} icon`} width={36} height={36} />
                    <div className={`flex flex-col ${!message.isBot ? 'items-end' : 'items-start'}`}>

                      <div className={`px-4 py-2 text-[#FBFADA] w-fit min-h-[30px] flex items-center h-auto ${message.isBot ? 'w-fit min-h-[30px] flex items-center h-auto rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] bg-[#436850]' : 'rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] bg-[#12372A]'}`}>
                        {message.isLoading ? (
                          <LoadingDots />
                        ) : message.isBot ? (
                          
                          <div className="prose prose-invert prose-p:text-[#FFF1D1] prose-sm prose-headings:text-[#FFF1D1] prose-headings:text-xl prose-headings:font-bold prose-headings:-mb-3 prose-p:mb-0 prose-h1:text-[#FFF1D1] prose-h2:text-[#FFF1D1] prose-strong:text-[#FFF1D1] prose-em:text-[#FFF1D1] max-w-none text-sm leading-relaxed [overflow-wrap:break-word] [word-break:break-word] whitespace-pre-wrap">
                            <ReactMarkdown>{message.content}</ReactMarkdown>
                          </div>
                        ) : (
                          <p className="text-sm leading-relaxed [overflow-wrap:break-word] [word-break:break-word] whitespace-pre-wrap">{message.content}</p>
                        )}
                      </div>

                      {index !== 0 && !message.isLoading && (
                        <span className={`mt-2 px-4 text-xs text-[#12372A]/60`}>
                          {message.timestamp.toLocaleString('en-US', {
                            timeZone: 'Asia/Jakarta',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false,
                          })}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showSuggestions && (
          <div className="flex flex-wrap justify-start gap-2 border-b border-b-[#00000050] p-4">
            {suggestions.map((suggestion, index) => (
              <button key={index} onClick={() => handleSuggestionClick(suggestion)} className="cursor-pointer rounded-full bg-[#436850] px-4 py-2 text-sm text-[#FFF1D1] transition-colors hover:bg-[#12372A]" title={suggestion}>
                {suggestion}
              </button>
            ))}
          </div>
        )}

        {isLoading && null}

        {/* PROMPT */}
        <div className="h-auto w-full">
          <div id="prompt" className="sticky bottom-0 left-0 z-[20] h-24 w-full bg-white px-4 max-md:h-28 max-sm:h-36">
            <form onSubmit={handleSubmit} className="flex h-full w-full items-start justify-between gap-2 pt-6">
              <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} className="w-full rounded-full bg-white px-4 py-3 text-sm ring-1 ring-[#12372A] outline-none ring-inset" placeholder="Hello World!" />
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
