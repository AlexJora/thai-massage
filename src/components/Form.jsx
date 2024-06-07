import React from "react";

export default function Form() {
  return (
    <>
      <div className="p-6 border border-gray-200 rounded-lg bg-primary-80">
        <form>
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
                defaultValue=""
                style={{ appearance: "none" }}
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
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-bold text-white bg-primary-350 hover:bg-black focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
