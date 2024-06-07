import Form from "@/components/Form";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center w-full bg-secondary-500 h-44">
        <h1 className="text-4xl font-semibold text-primary-100">CONTACT</h1>
      </div>

      <div className="container px-4 pt-24 mx-auto">
        <div className="flex flex-wrap justify-center -mx-4">
          {/* Let's Get In Touch Section */}
          <div className="w-full px-4 mb-8 lg:w-1/2 lg:mb-0">
            <div className="p-6">
              <h2 className="mb-12 text-3xl font-semibold text-primary-350">
                Let's Get In Touch
              </h2>
              <Form />
            </div>
          </div>
          {/* You Can Find Us At Section */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="p-6">
              <h2 className="mb-12 text-3xl font-semibold text-primary-350">
                You Can Find Us At
              </h2>
              <p className="mb-10">
                <strong>Phone:</strong> +27 (0) 21 424 7444 | +27 (0) 71 578
                0477
              </p>
              <p className="mb-10">
                <strong>Address:</strong> 46 Riebeek Street Cape Town<br></br>{" "}
                (Between Buitengracht Street and Bree Street)
              </p>
              <p className="mb-10">
                <strong>Hours:</strong> Monday to Sunday: 10:00 am to 7:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
