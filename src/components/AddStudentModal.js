import React, { useState, useEffect } from "react";
import axios from "../lib/axios";

const AddStudentModal = ({ 
  student, 
  isEditing, 
  onClose, 
  onStudentAdded, 
  onStudentUpdated 
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    course: "",
    batch: "",
    rollNumber: "",
    referralCode: "",
    username: "",
    totalFees: 0,
    feesPaid: 0,
  });
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Populate form data when editing
  useEffect(() => {
    if (isEditing && student) {
      setFormData({
        name: student.name || "",
        email: student.email || "",
        password: "", // Don't prefill password for security
        phone: student.phone || "",
        course: student.course || "",
        batch: student.batch || "",
        rollNumber: student.rollNumber || "",
        referralCode: student.referralCode || "",
        username: student.username || "",
        totalFees: student.totalFees || 0,
        feesPaid: student.feesPaid || 0,
      });
    }
  }, [isEditing, student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        throw new Error("No admin token found. Please login again.");
      }

      const payload = new FormData();
      
      // Only append non-empty values
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== "" && formData[key] !== null && formData[key] !== undefined) {
          // For editing, don't send password if it's empty
          if (isEditing && key === "password" && formData[key] === "") {
            return;
          }
          payload.append(key, formData[key]);
        }
      });

      if (photo) {
        payload.append("photo", photo);
      }

      if (isEditing) {
        // Update existing student
        const response = await axios.put(`/students/update/${student._id}`, payload, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (onStudentUpdated) {
          await onStudentUpdated(formData);
        }
      } else {
        // Add new student
        const response = await axios.post("/students/add", payload, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (onStudentAdded) {
          onStudentAdded(response.data.student || response.data);
        }
      }

      onClose();
    } catch (err) {
      console.error(`Failed to ${isEditing ? 'update' : 'add'} student:`, err);
      setError(
        err.response?.data?.message || 
        err.message || 
        `Failed to ${isEditing ? 'update' : 'add'} student. Please try again.`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? "Edit Student" : "Add New Student"}
        </h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {[
            { name: "name", label: "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { 
              name: "password", 
              label: isEditing ? "Password (leave blank to keep current)" : "Password", 
              type: "password", 
              required: !isEditing 
            },
            { name: "phone", label: "Phone", required: true },
            { name: "course", label: "Course", required: true },
            { name: "batch", label: "Batch", required: true },
            { name: "rollNumber", label: "Roll No.", required: true },
            { name: "referralCode", label: "Referral Code", required: false },
            { name: "username", label: "Username", required: true },
            { name: "totalFees", label: "Total Fees", type: "number", required: true },
            { name: "feesPaid", label: "Fees Paid", type: "number", required: true },
          ].map((field) => (
            <div key={field.name} className={field.name === "referralCode" ? "col-span-2" : ""}>
              <label className="block mb-1 font-medium text-gray-700">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required={field.required}
                placeholder={field.name === "password" && isEditing ? "Leave blank to keep current password" : ""}
              />
            </div>
          ))}

          <div className="col-span-2">
            <label className="block mb-1 font-medium text-gray-700">Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {isEditing && student?.photo && (
              <p className="text-sm text-gray-500 mt-1">
                Current photo will be kept if no new photo is selected
              </p>
            )}
          </div>

          <div className="col-span-2 flex justify-end mt-6 space-x-3">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {isEditing ? "Updating..." : "Adding..."}
                </span>
              ) : (
                isEditing ? "Update Student" : "Add Student"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentModal;