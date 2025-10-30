import Footer from "../components/Footer";

const ContactCard = ({ icon, title, content }) => (
  <div className="bg-white text-center p-8 rounded-lg shadow-md flex flex-col items-center">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{content}</p>
  </div>
);

const Contact = () => {
  const phoneIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );

  const emailIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const locationIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  return (
    <>
      <section id="contact" className="bg-blue-100 text-blue py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-blue-900 mb-12 max-w-2xl mx-auto">
            Whether it's trying a product or getting software support, we're here to help.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <ContactCard
              icon={phoneIcon}
              title="Call Us"
              content={
                <a href="tel:+915853261312" className="text-blue-600 hover:underline">
                  +91 585-326-1312
                </a>
              }
            />
            <ContactCard
              icon={emailIcon}
              title="Email Us"
              content={
                <a href="mailto:hasna@gmail.com" className="text-blue-600 hover:underline">
                  hasna@gmail.com
                </a>
              }
            />
            <ContactCard
              icon={locationIcon}
              title="Find Us"
              content="Near Lulu Mall, Edappally, Kochi, Kerala – 682024"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
