import { useState } from 'react';
import emailjs from '@emailjs/browser';

function FeedbackForm() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, { message }, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      setStatus('success');
      setMessage('');
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="bg-green3 mt-8 flex h-auto w-fit items-center justify-between overflow-hidden rounded-full pl-4" onSubmit={handleSubmit}>
        <input type="text" className="h-10 w-full text-sm outline-none" placeholder="Kirim masukan..." value={message} onChange={(e) => setMessage(e.target.value)} required disabled={loading} />

        <button type="submit" className="group hover:bg-green1 flex h-full w-auto cursor-pointer items-center justify-center rounded-tl-full rounded-bl-full p-3" disabled={!message.trim() || loading}>
          {loading ? (
            <span className="animate-pulse text-lg font-bold">...</span>
          ) : (
            <svg className="fill-green1 group-hover:fill-green2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M792-443 176-183q-20 8-38-3.5T120-220v-520q0-22 18-33.5t38-3.5l616 260q25 11 25 37t-25 37ZM200-280l474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
            </svg>
          )}
        </button>
      </form>
      {status === 'success' && (
        <div className="mt-2 rounded bg-green-100 px-4 py-2 text-sm text-green-700" role="alert">
          Terimakasih, masukkan telah dikirim!
        </div>
      )}
      {status === 'error' && (
        <div className="mt-2 rounded bg-red-100 px-4 py-2 text-sm text-red-700" role="alert">
          Gagal mengirim masukan. Silahkan coba lagi.
        </div>
      )}
    </>
  );
}

export default FeedbackForm;
