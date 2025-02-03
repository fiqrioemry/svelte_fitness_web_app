import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div className="py-6">
        <div className="flex items-center justify-center h-[70vh]">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Find Your Dream Job
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of job seekers and find the perfect job for you.
            </p>
            <Link
              to="/jobs"
              className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Explore Jobs
            </Link>
          </div>
        </div>
        <div className="py-12">
          <div className="container mx-auto px-6 border-b">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="col-span-3">
                <img
                  className="h-[34rem]"
                  src="https://recruticka-cms.s3.eu-west-2.amazonaws.com/Maximizing_Potential_img_855731e172.png"
                />
              </div>
              <div className="space-y-6 py-12 px-6 col-span-2">
                <h3 className="capitalize text-3xl font-bold">
                  We Are Maximizing the Potential of Your Job Search
                </h3>

                <p className="text-lg text-justify">
                  Accelerating Your Hiring Success and empowering Clients and
                  Candidates to Succeed. Hire Top Recruiters & Find The Best
                  Recruitment Jobs Easily and Effectively!
                </p>

                <Link
                  className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 duration-300"
                  to="/auth/login"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6">
          <div className="text-center space-y-6">
            <h3 className="capitalize text-3xl font-bold">
              Find Your Dream Job, Get Best Talent for Company
            </h3>
            <p>
              We work with some of the best recruitment brands across the
              indonesia.
            </p>
            <div className="flex items-center justify-center">
              <img src="https://cdn.builder.io/api/v1/image/assets%2Fe66bf03d6780474ca60ed872a491086c%2Fde3350d51a5f42d0bb62655e6191bbc0?format=webp&width=1600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
