//Make this bigger and add a Contact Me! header
export default function Contact() {
  return (
    <div className="p-4 flex flex-col">
      <form action={""}>
        <p className="text-center text-white text-lg">
          What made you visit my website? Do you have any comments? Share them
          below!
        </p>
        <textarea
          className="resize-none size-2/3 min-h-16 placeholder:text-black text-black text-lg"
          placeholder="What made you visit this site? Any feedback/suggestions/comments etc?"
        ></textarea>
        <div>
          <button
            className="rounded-full font-bold bg-blue-500 hover:bg-blue-900 px-6 py-2 ring-white/50 m-4"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
