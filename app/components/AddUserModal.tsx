import React, { useState } from "react";
import { X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../src/store/hooks";
import { addUser } from "../../src/store/userSlice";
import { toast } from "sonner";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.users);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    dob: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [dobType, setDobType] = useState("text");


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";

    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
    } else {
      const selectedDate = new Date(formData.dob);
      const today = new Date();
      if (selectedDate > today) {
        newErrors.dob = "Date of birth cannot be in the future";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the form errors before submitting");
      return;
    }

    try {
      await dispatch(addUser(formData)).unwrap();
      toast.success("User added successfully");
      setFormData({ name: "", location: "", dob: "" });
      onClose();
    } catch (error) {
      toast.error("Failed to add user");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="w-[480px] bg-neutral-900 p-6 rounded-2xl shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-xl font-bold">Enter User Details</h2>
          <button onClick={onClose} className="text-white text-lg">
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-white mb-1 text-sm">Name</label>
              
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="E.g James"
                className={`w-full pl-6 pr-3 py-3 rounded-lg bg-zinc-800 text-white placeholder-zinc-600 border ${
                  errors.name ? "border-red-500" : "border-zinc-800"
                }`}
              />
            
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Location Field */}
          <div>
            <label className="block text-white mb-1 text-sm">Location</label>
            
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="E.g Boston, USA"
                className={`w-full pl-6 pr-3 py-3 rounded-lg bg-zinc-800 text-white placeholder-zinc-600 border ${
                  errors.location ? "border-red-500" : "border-zinc-800"
                }`}
              />
            
            {errors.location && <p className="text-sm text-red-500 mt-1">{errors.location}</p>}
          </div>

          {/* DOB Field */}
          <div>
            <label className="block text-white mb-1 text-sm">Date of Birth</label>
            
              <input
                type={dobType}
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                onFocus={() => setDobType("date")}
                onBlur={() => formData.dob === "" && setDobType("text")}
                placeholder="E.g 20/04/1945"
                className={`w-full pl-6 pr-3 py-3 rounded-lg bg-zinc-800 text-white placeholder-zinc-600 border ${
                  errors.dob ? "border-red-500" : "border-zinc-800"
                }`}
              />
            
            {errors.dob && <p className="text-sm text-red-500 mt-1">{errors.dob}</p>}
          </div>
       <div>
          <button
            type="submit"
            disabled={!formData.name || !formData.location || !formData.dob || loading}
            className={` w-full font-medium flex-1 py-3 px-4 rounded-lg transition-colors ${
    !formData.name || !formData.location || !formData.dob || loading
      ? 'bg-stone-700 text-gray-500 cursor-not-allowed'
      : 'bg-white text-black hover:bg-white'
  }`}
          >
            {loading ? "Adding..." : "Save"}
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
