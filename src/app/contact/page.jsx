import Form from "@/components/Form";


export const metadata = {
  title: "Contact - Ruan Thai",
  description: "Get in touch with us at Ruan Thai. We are here to assist you with any inquiries or bookings.",
  openGraph: {
    title: "Contact - Ruan Thai",
    description: "Get in touch with us at Ruan Thai. We are here to assist you with any inquiries or bookings.",
    url: "https://www.ruanthai.co.za/contact",
  }
};

const Contact = () => {
  return (
    <>
     
    <div className="min-h-screen">
      <div className="flex items-center justify-center w-full h-48 bg-secondary-400">
        <h1 className="text-4xl text-white md:text-5xl">CONTACT</h1>
      </div>

      <div className="w-full py-10 mx-auto lg:py-16 bg-secondary-101">
        <div className="flex flex-wrap justify-center">
          {/* Let's Get In Touch Section */}
          <div className="w-full px-4 mb-8 lg:w-1/2 lg:mb-0">
            <div className="lg:p-6">
              <h2 className="mb-12 text-3xl font-semibold text-primary-350">
                Let's Get In Touch
              </h2>
              <Form />
            </div>
          </div>
          {/* You Can Find Us At Section */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="lg:p-6">
              <h2 className="mb-12 text-3xl font-semibold text-primary-350">
                You Can Find Us At
              </h2>
              <p className="mb-10">
                <span className="text-lg font-bold text-primary-350">
                  Phone:
                </span>{" "}
                +27 (0) 21 424 7444 | +27 (0) 71 578 0477
              </p>
              <p className="mb-10">
                <span className="text-lg font-bold text-primary-350">
                  Address:
                </span>{" "}
                46 Riebeek Street Cape Town
                <br></br> (Between Buitengracht Street and Bree Street)
              </p>
              <p className="mb-10">
                <span className="text-lg font-bold text-primary-350">
                  Hours:
                </span>{" "}
                Monday to Sunday: 10:00 am to 7:00 pm
              </p>
              <div className="h-64 mb-10 lg:mt-48">
                <iframe
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.896961390309!2d18.42099599999999!3d-33.91805139999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6767258b491b%3A0x7c01358547aa82e6!2s46%20Riebeek%20St%2C%20Cape%20Town%20City%20Centre%2C%20Cape%20Town%2C%208000!5e0!3m2!1sen!2sza!4v1717766091298!5m2!1sen!2sza"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Contact;
