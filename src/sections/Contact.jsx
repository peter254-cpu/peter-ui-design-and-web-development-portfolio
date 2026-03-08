/* eslint-disable react-refresh/only-export-components */
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import EarthCanvas from "../components/Earth";
import { SectionWrapper } from "./hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ FIXED INPUT HANDLER
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // prevent spam submit

    setLoading(true);

    try {
      await emailjs.send(
        "service_qu2gule",
        "template_t5oivvl",
        {
          from_name: form.name,
          to_name: "Peter",
          from_email: form.email,
          to_email: "peterslap67@gmail.com",
          message: form.message,
        },
        "JG5WM0dKQoPy02Emd"
      );

      toast.success("Your message has been sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      formRef.current?.reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      
      {/* LEFT SIDE FORM */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-600 p-8 rounded-2xl"
      >
        <h3 className="head-text text-center">Hit Me Up</h3>

        <p className="text-lg text-white-600 mt-3">
          Whether you are looking to list your services online or want an
          entire ecommerce platform built, I’m here to help!
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col space-y-7"
        >
          {/* NAME */}
          <label className="space-y-3">
            <span className="field-label">Full Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="Your Name"
            />
          </label>

          {/* EMAIL */}
          <label className="space-y-3">
            <span className="field-label">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="Your Email Address"
            />
          </label>

          {/* MESSAGE */}
          <label className="space-y-3">
            <span className="field-label">Your Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="field-input"
              placeholder="Hi, I'm interested in..."
            />
          </label>

          {/* BUTTON */}
          <button
            type="submit"
            className="field-btn"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
            <img
              src="/assets/arrow-up.png"
              alt="arrow-up"
              className="field-btn_arrow"
            />
          </button>
        </form>
      </motion.div>

      {/* RIGHT SIDE EARTH */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");