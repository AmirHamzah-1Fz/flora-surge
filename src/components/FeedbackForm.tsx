function FeedbackForm() {
  return (
    <form className="mt-8 flex h-auto w-fit items-center justify-between overflow-hidden rounded-full bg-green3 pl-4">
      <input type="text" className="h-10 w-full text-sm outline-none" placeholder="Kirim masukan..." />

      <button type="submit" className="group cursor-pointer h-full w-auto rounded-tl-full rounded-bl-full p-3 hover:bg-green1">
        <svg className="fill-green1 group-hover:fill-green2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
          <path d="M792-443 176-183q-20 8-38-3.5T120-220v-520q0-22 18-33.5t38-3.5l616 260q25 11 25 37t-25 37ZM200-280l474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
        </svg>
      </button>
    </form>
  );
}

export default FeedbackForm;
