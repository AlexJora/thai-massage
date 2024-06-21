"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
export default function Form() {
  const [status, setStatus] = useState("Send Message");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [no, setNo] = useState("");
  const [treatment, setTreatment] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState("");

  const sendMail = () => {
    const params = {
      name,
      email,
      phone,
      date,
      time,
      no,
      treatment,
      message,
    };
    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_USER_ID;

    emailjs.send(serviceID, templateID, params, userID).then(
      (response) => {
        setStatus("Send Message");
        setNotification("Your message has been sent successfully!");
        // Clear input fields after successful submission
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setTime("");
        setNo("");
        setTreatment("");
        setMessage("");

        // Clear notification after 5 seconds
        setTimeout(() => setNotification(""), 3000);
      },
      (error) => {
        setStatus("Send Message");
        setNotification("Something went wrong. Please try again later.");

        // Clear notification after 5 seconds
        setTimeout(() => setNotification(""), 3000);
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    sendMail();
  };

  return (
    <>
      <div className="p-6 rounded-lg bg-primary-80">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="phone"
              type="phone"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="time"
            >
              Time
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="time"
              type="time"
              placeholder="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="time"
            >
              No. of people
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="no"
              type="number"
              placeholder="No. of people"
              value={no}
              onChange={(e) => setNo(e.target.value)}
              required
            />
          </div>
          <div className="relative mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="treatment"
            >
              Treatment Selection
            </label>
            <div className="relative">
              <select
                className="w-full px-3 py-2 pr-10 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="treatment"
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a treatment
                </option>
                <optgroup label="Massage Treatments">
                  <option value="head_back_neck_shoulder">
                    Head, Back, Neck, Shoulder
                  </option>
                  <option value="foot_reflexology">Foot Reflexology</option>
                  <option value="traditional_thai_massage">
                    Traditional Thai Massage
                  </option>
                  <option value="thai_oil_mix_massage">
                    Thai Oil Mix Massage
                  </option>
                  <option value="deep_tissue_massage">
                    Deep Tissue Massage
                  </option>
                  <option value="thai_herbal_heat_compression">
                    Thai Herbal Heat Compression
                  </option>
                  <option value="thai_hot_oil_massage">
                    Thai Hot Oil Massage
                  </option>
                  <option value="hot_stone_massage">Hot Stone Massage</option>
                </optgroup>
                <optgroup label="Beauty Treatments">
                  <option value="deep_cleansing_facial">
                    Deep Cleansing Facial
                  </option>

                  <option value="body_scrub">Body Scrub</option>
                </optgroup>
                <optgroup label="Spa Packages">
                  <option value="happy_feet_package">Happy Feet Package</option>
                  <option value="in_a_rush_package">In a Rush Package</option>
                  <option value="anti_stress_package">
                    Anti Stress Package
                  </option>
                </optgroup>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col justify-start">
            <button
              className="px-4 py-4 mt-4 font-bold text-white lg:w-2/4 bg-primary-350 hover:bg-black focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {status}
            </button>
            {notification && (
              <p
                className={`mt-2 text-sm ${
                  notification.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {notification}
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
