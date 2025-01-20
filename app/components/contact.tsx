import Form from "next/Form";
//Make this bigger and add a Contact Me! header
export default function Contact() {
  return (
    <div className="p-4">
      <Form action={""}>
        <p className="text-center text-white text-lg">
          What made you visit my website? Do you have any comments? Share them
          below!
        </p>
        <textarea
          className="resize-none size-2/3 min-h-16 placeholder:text-black text-black"
          placeholder="What made you visit this site? Any feedback/suggestions/comments etc?"
        ></textarea>
        <button type="submit"></button>
      </Form>
    </div>
  );
}
