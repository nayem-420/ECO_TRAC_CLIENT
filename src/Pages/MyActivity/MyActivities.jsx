import { useEffect, useState } from "react";
import { Link } from "react-router";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../Components/LoadingSpinner";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyActivities = () => {
  const { user, loading: authLoading } = useAuth();

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = user?.email;

  useEffect(() => {
    if (!userId) return;

    const fetchActivities = async () => {
      try {
        setLoading(true);
        const { data } = await useAxiosSecure.get(`/user-challenges/${userId}`);
        setActivities(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load activities");
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [userId]);

  const handleUpdateProgress = async (activityId, currentProgress) => {
    const newProgress = prompt("Enter progress (0 - 100)", currentProgress);

    if (newProgress === null) return;

    const progressNum = Number(newProgress);

    if (isNaN(progressNum) || progressNum < 0 || progressNum > 100) {
      toast.error("Invalid progress value");
      return;
    }

    try {
      const { data } = await useAxiosSecure.patch(
        `/user-challenges/${userId}/${activityId}`,
        { progress: progressNum }
      );

      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success("Progress updated!");

      setActivities((prev) =>
        prev.map((act) =>
          act._id === activityId
            ? {
                ...act,
                progress: progressNum,
                status:
                  progressNum === 0
                    ? "Not Started"
                    : progressNum === 100
                    ? "Finished"
                    : "Ongoing",
              }
            : act
        )
      );
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

  if (!activities.length) {
    return (
      <p className="text-center mt-20 text-xl text-gray-500">
        No joined challenges yet.
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">My Activities</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((act) => (
          <div key={act._id} className="card bg-base-200 shadow-md">
            <figure>
              <img
                src={act.challengeDetails?.imageUrl || "/placeholder.jpg"}
                alt={act.challengeDetails?.title || "Challenge"}
                className="h-40 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">
                {act.challengeDetails?.title || "Untitled Challenge"}
              </h2>

              <p className="text-sm opacity-70 line-clamp-2">
                {act.challengeDetails?.description ||
                  "No description available"}
              </p>

              {/* Status */}
              <div className="mt-3 space-y-1">
                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  <span
                    className={`badge ${
                      act.status === "Finished"
                        ? "badge-success"
                        : act.status === "Ongoing"
                        ? "badge-warning"
                        : "badge-ghost"
                    }`}
                  >
                    {act.status}
                  </span>
                </p>

                <p>
                  <span className="font-semibold">Progress:</span>{" "}
                  {act.progress}%
                </p>

                <progress
                  className="progress progress-primary w-full"
                  value={act.progress}
                  max="100"
                />
              </div>

              {/* Actions */}
              <div className="card-actions justify-between mt-4">
                <button
                  onClick={() => handleUpdateProgress(act._id, act.progress)}
                  className="btn btn-sm btn-primary"
                >
                  Update Progress
                </button>

                <Link to={`/challenges/${act.challengeId}`}>
                  <button className="btn btn-sm btn-outline">
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

export default MyActivities;
