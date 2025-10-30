import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center">About JobBoard</h1>
          <p className="mt-4 text-lg text-gray-500 text-center">
            Connecting Talent with Opportunity, Seamlessly.
          </p>

          <div className="mt-12 text-gray-700 space-y-6">
            <p>
              Welcome to JobBoard, your premier destination for discovering career opportunities and for companies to find the perfect candidates. Our mission is to bridge the gap between talented professionals and innovative companies, creating a community where careers flourish and businesses thrive.
            </p>
            <p>
              Founded on the principle of simplicity and efficiency, JobBoard offers an intuitive and powerful platform for both job seekers and employers. We believe that finding a job or hiring the right person should be a straightforward and rewarding experience. Our platform is designed to eliminate the noise and connect you with what truly matters.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 pt-4">Our Vision</h2>
            <p>
              We envision a world where every individual can find a fulfilling career that aligns with their passion and skills. For employers, we aim to be the most reliable partner in building dynamic and successful teams. We are constantly innovating, leveraging technology to make recruitment smarter, faster, and more human.
            </p>
            <p>
              Thank you for choosing JobBoard. Let's build the future of work, together.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage; 