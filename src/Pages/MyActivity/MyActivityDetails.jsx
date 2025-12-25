import { useEffect, useState } from "react";
import { useParams } from "react-router";
import toast from "react-hot-toast";

import LoadingSpinner from "../../Components/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyActivityDetails = () => {
  const { id } = useParams();
  const { user, loading: authLoading } = useAuth();

  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = user?.email;

  useEffect(() => {
    if (!userId || !id) return;

    const fetchActivity = async () => {
      try {
        setLoading(true);
        const { data } = await useAxiosSecure.get(
          `/user-challenges/activity/${id}`
        );
        setActivity(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load activity details");
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, [userId, id]);

  const handleUpdateProgress = async () => {
    if (!activity) return;

    const newProgress = prompt("Enter progress (0 - 100)", activity.progress);

    if (newProgress === null) return;

    const progressNum = Number(newProgress);

    if (isNaN(progressNum) || progressNum < 0 || progressNum > 100) {
      toast.error("Invalid progress value");
      return;
    }

    try {
      const { data } = await useAxiosSecure.patch(
        `/user-challenges/${userId}/${id}`,
        {
          progress: progressNum,
        }
      );

      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success("Progress updated!");

      setActivity((prev) => ({
        ...prev,
        progress: progressNum,
        status:
          progressNum === 0
            ? "Not Started"
            : progressNum === 100
            ? "Finished"
            : "Ongoing",
      }));
    } catch (error) {
      console.error(error);
      toast.error("Failed to update progress");
    }
  };

  if (authLoading || loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (!activity) {
    return (
      <p className="text-center mt-20 text-lg text-gray-500">
        No activity found.
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-base-200 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">
        {activity.challengeTitle || "Challenge Activity"}
      </h2>

      <div className="space-y-2 text-lg">
        <p>
          <span className="font-semibold">Status:</span>{" "}
          <span
            className={`badge ${
              activity.status === "Finished"
                ? "badge-success"
                : activity.status === "Ongoing"
                ? "badge-warning"
                : "badge-ghost"
            }`}
          >
            {activity.status}
          </span>
        </p>

        <p>
          <span className="font-semibold">Progress:</span> {activity.progress}%
        </p>

        <progress
          className="progress progress-primary w-full"
          value={activity.progress}
          max="100"
        />

        <p>
          <span className="font-semibold">Join Date:</span>{" "}
          {new Date(activity.joinDate).toLocaleDateString()}
        </p>
      </div>

      <button className="btn btn-primary mt-6" onClick={handleUpdateProgress}>
        Update Progress
      </button>
    </div>
  );
};

export default MyActivityDetails;
