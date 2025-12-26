import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ChallengesForm = () => {
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

 const handleSubmit = async (e) => {
   e.preventDefault();
   setLoading(true);

   const form = e.target;

   const challenge = {
     title: form.title.value,
     category: form.category.value,
     description: form.description.value,
     duration: Number(form.duration.value),
     target: form.target.value,
     participants: 0,
     impactMetric: form.impactMetric.value,
     createdBy: form.createdBy.value,
     startDate: form.startDate.value,
     endDate: form.endDate.value,
     imageUrl: form.imageUrl.value,
   };

   try {
     const res = await axiosSecure.post("/api/challenges", challenge);

     if (res.status === 201 || res.status === 200) {
       toast.success("Challenge Added Successfully! 🎉");
       form.reset(); 
     }
   } catch (error) {
     toast.error(error.response?.data?.message || "Something went wrong!");
     console.log("Error:", error);
   }

   setLoading(false);
 };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 shadow-md rounded-lg bg-base-200">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Challenge</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="input input-bordered w-full"
          required
        />

        <select
          name="category"
          className="select select-bordered w-full"
          required
        >
          <option value="">Select Category</option>
          <option>Waste Reduction</option>
          <option>Energy Conservation</option>
          <option>Water Conservation</option>
          <option>Sustainable Transport</option>
          <option>Green Living</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          rows="2"
          required
        ></textarea>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="duration"
            placeholder="Duration (days)"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="target"
            placeholder="Target"
            className="input input-bordered w-full"
            required
          />
        </div>

        <input
          name="impactMetric"
          type="text"
          placeholder="Impact Metric (e.g., kg plastic saved)"
          className="input input-bordered w-full"
          required
        />

        <input
          name="createdBy"
          type="email"
          placeholder="Created By (Email)"
          className="input input-bordered w-full"
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="date"
            name="startDate"
            className="input input-bordered w-full"
            required
          />
          <input
            type="date"
            name="endDate"
            className="input input-bordered w-full"
            required
          />
        </div>

        <input
          name="imageUrl"
          type="text"
          placeholder="Image URL"
          className="input input-bordered w-full"
          required
        />

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? "Saving..." : "Create Challenge"}
        </button>
      </form>
    </div>
  );
};

export default ChallengesForm;