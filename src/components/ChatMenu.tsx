// Import dependencies dan assets yang dibutuhkan
import FloraBot from '../assets/icons/FloraBot.svg';
import User from '../assets/icons/User.svg';
import ReactMarkdown from 'react-markdown';
import { useState, useRef, useEffect } from 'react';
import LogoStempel from '../assets/logo/Logo-stempel.svg';

// Interface untuk props dan tipe data yang digunakan
interface ChatMenuProps {
  isOpen: boolean; // Status apakah chat window sedang terbuka
  onClose: () => void; // Fungsi untuk menutup chat window
}

interface Message {
  content: string; // Isi pesan chat
  isBot: boolean; // Flag untuk membedakan pesan bot dan user
  timestamp: Date; // Waktu pesan dikirim
  isLoading?: boolean; // Status loading saat menunggu respon
}

export default function ChatMenu({ isOpen, onClose }: ChatMenuProps) {
  // State management untuk berbagai fitur chatbot
  const [inputText, setInputText] = useState(''); // State untuk input text user
  const [showSuggestions, setShowSuggestions] = useState(true); // State untuk menampilkan suggestion
  const [isLoading, setIsLoading] = useState(false); // State untuk loading indicator
  const [messages, setMessages] = useState<Message[]>([
    // State untuk menyimpan history chat
    {
      content: 'Halo, aku FloraBot. Aku akan membantu menjawab pertanyaan kamu di **sektor hijau**.',
      isBot: true,
      timestamp: new Date(),
    },
  ]);

  // Ref untuk auto-scroll ke pesan terbaru
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Fungsi untuk auto-scroll ke bagian bawah chat
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Daftar suggestion awal untuk user
  const suggestions = ['Apa itu Green Jobs?', 'Apa itu Green Economy?', 'Mengapa Green Economy itu penting?'];

  // Fungsi untuk menghandle klik pada suggestion
  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
  };

  // Fungsi untuk menghandle API call ke backend chatbot
  const callChatbotAPI = async (question: string) => {
    // Array format payload yang akan dicoba untuk kompatibilitas dengan berbagai API endpoint
    const payloadFormats = [{ message: question }, { query: question }, { input: question }, { text: question }, { prompt: question }, { question: question }, { user_input: question }];

    // Mencoba setiap format payload sampai berhasil
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
     return 'Duh, FloraBot lagi mengalami masalah dalam memproses permintaan. Coba lagi nanti.';
  };

  // Fungsi untuk handle submit pesan baru
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

  // Komponen untuk menampilkan animasi loading
  const LoadingDots = () => (
    <div className="flex space-x-2">
      <div className="h-2 w-2 animate-[pulse_1s_ease-in-out_infinite] rounded-full bg-[hsl(141,22%,60%)]"></div>
      <div className="h-2 w-2 animate-[pulse_1s_ease-in-out_0.333s_infinite] rounded-full bg-[hsl(141,22%,60%)]"></div>
      <div className="h-2 w-2 animate-[pulse_1s_ease-in-out_0.667s_infinite] rounded-full bg-[hsl(141,22%,60%)]"></div>
    </div>
  );

  return (
    // Container utama chatbot window dengan animasi slide
    <div
      className={`fixed right-0 z-[100] ring ring-white/10 transition-all duration-[400ms] ease-in-out will-change-transform md:right-12 ${
        isOpen ? 'max-md:top-0 md:bottom-0' : 'max-md:top-full max-md:translate-y-[100px] md:-bottom-[560px]'
      } h-screen w-screen overflow-x-hidden bg-white shadow-xl md:h-[480px] md:w-[400px] md:rounded-t-xl`}
    >
      <div className="flex h-full w-full flex-col">
        {/* Header chatbot dengan logo dan tombol close */}
        <div className="flex h-12 w-full items-center justify-between bg-[#12372A] px-4 py-3 text-center shadow-lg md:shadow-md">
          <div className="header flex items-center justify-start gap-2 text-lg font-semibold text-[#FFF1D1]">
            <img src={LogoStempel || '/placeholder.svg'} alt="FloraBot icon" width="24" height="24" />
            <h2>FloraBot</h2>
          </div>

          {/* Button untuk menutup chatbot window */}
          <button onClick={onClose} id="exit" className="group flex h-auto w-auto cursor-pointer items-center justify-center rounded-full p-2 transition-colors duration-300 ease-in-out hover:bg-[hsl(159,48%,18%)]" title="Tutup jendela">
            <svg className="h-full w-full shrink-0 fill-[#3BAB84] group-active:scale-95" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
            </svg>
          </button>
        </div>

        {/* Kontent Chat */}
        <div ref={chatContainerRef} className="scrollbar-thin scroll-smooth flex-1 overflow-y-scroll border-b border-b-[#00000050]">
          <div className="flex h-auto w-full flex-col px-4 py-8">
            {messages.map((message, index) => (
              <div key={index} className={`w-full border-b border-b-[#00000020] py-4 last:border-b-0`}>
                <div className={`w-auto max-w-[87%] md:max-w-[85%] ${message.isBot ? 'self-start' : 'ml-auto'}`}>
                  <div className={`flex w-full items-start gap-2 ${!message.isBot && 'flex-row-reverse'}`}>
                    <img src={message.isBot ? FloraBot : User} alt={`${message.isBot ? 'FloraBot' : 'User'} icon`} width={36} height={36} />
                    <div className={`flex flex-col ${!message.isBot ? 'items-end' : 'items-start'}`}>

                      <div
                        className={`flex h-auto min-h-[30px] w-fit items-center px-4 py-2 text-[#FBFADA] ${message.isBot ? 'flex h-auto min-h-[30px] w-fit items-center rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] bg-[#436850]' : 'rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] bg-[#12372A]'}`}
                      >
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

                      {/* Mencetak timestamp jika urutan indeks chatboxnya bukan 0 (pertama) */}

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

        {/* Area suggestion/prompt awal */}
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

        {/* Area input pesan dengan form submit */}
        <div className="h-auto w-full">
          <div id="prompt" className="sticky bottom-0 left-0 z-[20] h-24 w-full bg-white px-4 max-md:h-28 max-sm:h-36">
            <form onSubmit={handleSubmit} className="flex h-full w-full items-start justify-between gap-2 pt-6">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isLoading}
                className={`w-full rounded-full bg-white px-4 py-3 text-sm ring-1 ring-[#12372A] outline-none ring-inset ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
                placeholder={isLoading ? 'Tunggu sebentar...' : 'Hello World!'}
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className={`group flex h-auto w-auto cursor-pointer items-center justify-center rounded-full p-3 transition-[background-color,shadow,scale] duration-300 ease-in-out will-change-[background-color,box-shadow] hover:scale-[1.050] active:scale-100 ${
                  inputText.trim() && !isLoading ? 'bg-[#12372A] hover:bg-[hsl(159,51%,10%)] hover:shadow-lg' : 'pointer-events-none cursor-not-allowed bg-zinc-400'
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
