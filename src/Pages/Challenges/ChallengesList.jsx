// import { useEffect, useState } from "react";
import { Link } from "react-router";
import LoadingSpinner from "../../Components/LoadingSpinner";
// import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ChallengeListCard from "./ChallengeListCard";

const ChallengesList = () => {
  // const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  const { data: challenges = [], loading } = useQuery({
    queryKey: ["challenges"],
    queryFn: () => {
      const response = axiosSecure.get("/api/challenges");
      return response.data;
    },
  });

  // useEffect(() => {
  //   const fetchChallenges = async () => {
  //     try {
  //       setLoading(true);
  //       const { data } = await axiosSecure.get("/api/challenges");
  //       setChallenges(data);
  //     } catch (err) {
  //       console.error(err);
  //       toast.error("Failed to load challenges");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchChallenges();
  // }, [axiosSecure]);

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
          <ChallengeListCard key={ch._id} challenge={ch} />
        ))}
      </div>
    </div>
  );
};

export default ChallengesList;
