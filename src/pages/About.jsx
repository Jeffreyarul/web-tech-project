const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700 mb-4">
          Welcome to Job Board Platform, your premier destination for connecting talented professionals 
          with exciting career opportunities. Our platform is designed to make the job search and 
          recruitment process seamless and efficient.
        </p>
        <p className="text-gray-700 mb-4">
          Whether you're a job seeker looking for your next career move or an employer searching 
          for top talent, we're here to help you succeed.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To create meaningful connections between employers and job seekers, fostering career 
            growth and helping organizations build strong teams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;