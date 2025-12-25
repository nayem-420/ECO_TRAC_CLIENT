import { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "../../Components/LoadingSpinner";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const ChallengeDetails = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const { data } = await axiosSecure.get(`/api/challenges/${id}`);
        setChallenge(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchChallenge();
  }, [id,axiosSecure]);

  if (!challenge)
    return (
      <p className="text-center mt-20">
        <LoadingSpinner />
      </p>
    );

  const handleJoin = async () => {
    const userId = user?.email;

    try {
      const { data } = await axiosSecure.post(
        `/api/challenges/join/${challenge._id}`,
        { userId }
      );

      if (data.success) {
        toast.success("Challenge joined successfully!");
        window.location.href = `/api/user-challenges/activity/${challenge._id}`;
      } else {
        toast.success(data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to join the challenge!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-base-200 rounded-md shadow">
      <img
        src={challenge.imageUrl}
        alt={challenge.title}
        className="w-full rounded-md mb-4"
      />
      <h2 className="text-3xl font-bold mb-2">{challenge.title}</h2>
      <p className="mb-4">{challenge.description}</p>

      <div className="space-y-1">
        <p>
          <b>Category:</b> {challenge.category}
        </p>
        <p>
          <b>Duration:</b> {challenge.duration} days
        </p>
        <p>
          <b>Target:</b> {challenge.target}
        </p>
        <p>
          <b>Impact Metric:</b> {challenge.impactMetric}
        </p>
        <p>
          <b>Participants:</b> {challenge.participants}
        </p>
        <p>
          <b>Start Date:</b> {challenge.startDate}
        </p>
        <p>
          <b>End Date:</b> {challenge.endDate}
        </p>
        <p>
          <b>Created By:</b> {challenge.createdBy}
        </p>
      </div>
      <button onClick={handleJoin} className="btn btn-primary w-full mt-4">
        Join Challenge
      </button>
    </div>
  );
};

export default ChallengeDetails;
