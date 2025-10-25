import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BarChart3, Ticket, LogOut, Pencil, ArrowRight } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import Footer from "../../components/layout/Footer";

export default function Dashboard() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [editingTicket, setEditingTicket] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Open",
  });

  // ✅ Load tickets from localStorage
  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(storedTickets);

    // Sync changes from other tabs
    const handleStorage = () => {
      const updated = JSON.parse(localStorage.getItem("tickets")) || [];
      setTickets(updated);
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // ✅ Stats
  const totalTickets = tickets.length;
  const openTickets = tickets.filter((t) => t.status === "Open").length;
  const closedTickets = tickets.filter((t) => t.status === "Closed").length;

  const stats = [
    { label: "Total Tickets", value: totalTickets, color: "bg-blue-100 text-blue-700" },
    { label: "Open Tickets", value: openTickets, color: "bg-yellow-100 text-yellow-700" },
    { label: "Closed Tickets", value: closedTickets, color: "bg-green-100 text-green-700" },
  ];

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // ✅ Edit Ticket
  const handleEdit = (ticket) => {
    setEditingTicket(ticket);
    setFormData(ticket);
  };

  // ✅ Delete Ticket
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      const updatedTickets = tickets.filter((t) => t.id !== id);
      setTickets(updatedTickets);
      localStorage.setItem("tickets", JSON.stringify(updatedTickets));
      toast.success("Ticket deleted successfully!");
    }
  };

  // ✅ Save Updates
  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    const updatedTickets = tickets.map((t) =>
      t.id === editingTicket.id ? { ...formData, id: t.id, createdAt: t.createdAt } : t
    );

    setTickets(updatedTickets);
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
    setEditingTicket(null);
    setFormData({ title: "", description: "", status: "Open" });
    toast.success("Ticket updated successfully!");
  };

  return (
    <>
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Toaster position="top-right" />

      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center border-b border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600">Ticketly</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-500 hover:text-red-600 font-medium transition"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 p-6 hidden md:flex flex-col">
          <nav className="space-y-4">
            <Link to="/dashboard" className="flex items-center gap-3 text-blue-600 font-medium">
              <BarChart3 className="w-5 h-5" />
              Dashboard
            </Link>
            <Link
              to="/tickets"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
            >
              <Ticket className="w-5 h-5" />
              Tickets
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10">
          <div className="w-full max-w-[1440px] mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-semibold text-gray-800">Dashboard Overview</h2>

              <Link
                to="/tickets"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                View All Tickets
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {stats.map((card, i) => (
                <div
                  key={i}
                  className={`rounded-2xl shadow-sm border border-gray-200 bg-white p-6 flex flex-col items-start ${card.color}`}
                >
                  <p className="text-sm font-medium opacity-70">{card.label}</p>
                  <h3 className="text-2xl font-bold mt-2">{card.value}</h3>
                </div>
              ))}
            </div>

            {/* Recent Tickets */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Tickets</h3>

              {tickets.length === 0 ? (
                <p className="text-gray-600">No tickets created yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tickets
                    .slice()
                    .reverse()
                    .slice(0, 6)
                    .map((ticket) => (
                      <div
                        key={ticket.id}
                        className="border border-gray-200 rounded-2xl p-6 bg-gray-50 shadow-sm"
                      >
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{ticket.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{ticket.description}</p>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            ticket.status === "Open"
                              ? "bg-yellow-100 text-yellow-700"
                              : ticket.status === "In Progress"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {ticket.status}
                        </span>

                        {/* Edit & Delete Buttons */}
                        <div className="mt-3 flex gap-3">
                          <button
                            onClick={() => handleEdit(ticket)}
                            className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition"
                          >
                            <Pencil className="w-4 h-4" /> Edit
                          </button>

                          <button
                            onClick={() => handleDelete(ticket.id)}
                            className="flex items-center gap-1 text-red-500 hover:text-red-700 transition"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Inline Edit Form */}
            {editingTicket && (
              <form
                onSubmit={handleUpdateSubmit}
                className="mt-10 bg-white shadow-sm rounded-2xl border border-gray-200 p-6"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Edit Ticket</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Title"
                    className="border px-3 py-2 rounded-lg"
                  />
                  <select
                    name="status"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="border px-3 py-2 rounded-lg"
                  >
                    <option>Open</option>
                    <option>In Progress</option>
                    <option>Closed</option>
                  </select>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Description"
                    className="border px-3 py-2 rounded-lg md:col-span-2"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Save Changes
                </button>
              </form>
            )}
          </div>
        </main>
      </div>
    </div>
     <Footer/>
    </>
  );
}
