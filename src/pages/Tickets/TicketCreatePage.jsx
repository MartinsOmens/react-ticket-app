import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { ArrowLeft, PlusCircle } from "lucide-react";
import Footer from "../../components/layout/Footer";

export default function TicketCreatePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Open",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    const newTicket = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      status: formData.status,
      createdAt: new Date().toISOString(),
    };

    const existingTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const updatedTickets = [...existingTickets, newTicket];

    localStorage.setItem("tickets", JSON.stringify(updatedTickets));

    toast.success("✅ Ticket created successfully!");

    setFormData({ title: "", description: "", status: "Open" });
  };

  return (
    <>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-8">
      <Toaster position="top-right" />

      {/* ✅ Sticky Back to Dashboard */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>
      </div>

      {/* Page Header */}
      <div className="max-w-2xl w-full bg-white shadow-md rounded-2xl p-8 mt-16 border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
          <PlusCircle className="text-blue-600" />
          Create New Ticket
        </h2>

        {/* ✅ Ticket Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Enter ticket title"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Describe the issue..."
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all"
          >
            Create Ticket
          </button>
        </form>
      </div>
    </div>

    <Footer/>
    </>
  );
}
