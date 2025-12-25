import { useEffect, useState } from "react";
import { Link } from "react-router";
import LoadingSpinner from "../../Components/LoadingSpinner";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ChallengesList = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        setLoading(true);
        const { data } = await axiosSecure.get("/api/challenges");
        setChallenges(data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load challenges");
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">All Challenges</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((ch) => (
          <div key={ch._id} className="card bg-base-200 shadow-md">
            <figure>
              <img
                src={ch.imageUrl}
                alt={ch.title}
                className="h-40 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{ch.title}</h2>
              <p className="text-sm opacity-70">{ch.description}</p>

              <div className="mt-2 text-sm">
                <p>
                  <span className="font-semibold">Category:</span> {ch.category}
                </p>
                <p>
                  <span className="font-semibold">Duration:</span> {ch.duration}{" "}
                  days
                </p>
                <p>
                  <span className="font-semibold">Impact:</span>{" "}
                  {ch.impactMetric}
                </p>
                <p>
                  <span className="font-semibold">Participants:</span>{" "}
                  {ch.participants}
                </p>
              </div>

              <div className="card-actions justify-end mt-4">
                <Link to={`/api/challenges/${ch._id}`}>
                  <button className="btn btn-primary btn-sm">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengesList;
