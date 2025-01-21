"use client";
//Make this bigger and add a Contact Me! header
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  throw new Error(
    "Missing environment variables: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY"
  );
}

const supabase = createClient(url, anonKey);
export default function Feedback() {
  const [feedback, setFeedback] = useState(""); // State to hold textarea value
  const [isSubmitting, setIsSubmitting] = useState(false); // State to handle submission state
  const [message, setMessage] = useState(""); // State to display feedback to the user

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    if (feedback.trim().length == 0) {
      console.log("Please enter a comment");
      setMessage("Please enter a message before submitting");
      setIsSubmitting(false);
    } else {
      try {
        const { data, error } = await supabase
          .from("Feedback")
          .insert([
            { content: feedback.trim(), email_address: null, Name: null },
          ]);

        if (error) {
          console.error("Error inserting feedback:", error);
          setMessage("Failed to submit feedback. Please try again.");
        } else {
          console.log("Feedback submitted:", data);
          setMessage("Thank you for your feedback!");
          setFeedback(""); // Clear the text
        }
      } catch (error) {
        console.error("Unexpected error:", error);
        setMessage("An unexpected error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="p-4 flex flex-col">
      <form onSubmit={handleSubmit} action={""}>
        <p className="text-center text-white text-lg">
          What made you visit my website? Do you have any comments? Share them
          below!
        </p>
        <textarea
          className="resize-none size-2/3 min-h-16 placeholder:text-gray-400 text-black text-lg"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="What made you visit this site? Any feedback/suggestions/comments etc?"
        ></textarea>
        <div>
          <button
            className="rounded-full font-bold bg-blue-500 hover:bg-blue-900 px-6 py-2 ring-white/50 m-4"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      {message && <p className="text-center text-white p-12">{message}</p>}
    </div>
  );
}
