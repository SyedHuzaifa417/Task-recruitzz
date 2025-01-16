import { useState } from "react";
import { X, Plus, ChevronDown } from "lucide-react";
import { clsx } from "clsx";

const defaultTreatments = [
  {
    id: 1,
    name: "Injectables",
    subCategories: [],
  },
  {
    id: 2,
    name: "Skin Improvement",
    subCategories: [
      { id: 21, name: "Chemical Peels" },
      { id: 22, name: "Microdermabrasion" },
      { id: 23, name: "Laser Treatments" },
      { id: 24, name: "Light Therapies" },
    ],
  },
  { id: 3, name: "Hair removal", subCategories: [] },
  { id: 4, name: "Soft surgery", subCategories: [] },
  { id: 5, name: "Plastic surgery", subCategories: [] },
];

const settingsTabs = ["General", "Password", "Price", "Treatments"];

export default function SettingsData() {
  const [activeTab, setActiveTab] = useState("Treatments");
  const [treatments] = useState(() => {
    const saved = localStorage.getItem("treatments");
    return saved ? JSON.parse(saved) : defaultTreatments;
  });
  const [tempTreatments, setTempTreatments] = useState(treatments);
  const [selectedTreatment, setSelectedTreatment] = useState(treatments[1]);
  const [newSubCategory, setNewSubCategory] = useState("");

  const handleTreatmentClick = (treatment) => {
    setSelectedTreatment(treatment);
  };

  const addSubCategory = () => {
    if (!newSubCategory.trim()) return;

    const updatedTreatments = tempTreatments.map((treatment) => {
      if (treatment.id === selectedTreatment.id) {
        return {
          ...treatment,
          subCategories: [
            ...(treatment.subCategories || []),
            { id: Date.now(), name: newSubCategory },
          ],
        };
      }
      return treatment;
    });

    setTempTreatments(updatedTreatments);
    setSelectedTreatment(
      updatedTreatments.find((t) => t.id === selectedTreatment.id)
    );
    setNewSubCategory("");
  };

  const removeSubCategory = (subCategoryId) => {
    const updatedTreatments = tempTreatments.map((treatment) => {
      if (treatment.id === selectedTreatment.id) {
        return {
          ...treatment,
          subCategories:
            treatment.subCategories?.filter(
              (sub) => sub.id !== subCategoryId
            ) || [],
        };
      }
      return treatment;
    });
    setTempTreatments(updatedTreatments);
    setSelectedTreatment(
      updatedTreatments.find((t) => t.id === selectedTreatment.id)
    );
  };

  const handleSave = () => {
    localStorage.setItem("treatments", JSON.stringify(tempTreatments));
  };

  const handleCancel = () => {
    setTempTreatments(treatments);
    setSelectedTreatment(treatments.find((t) => t.id === selectedTreatment.id));
  };

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Settings
          </h2>
        </div>
        <div className="bg-white rounded-lg">
          <div className="flex flex-col lg:flex-row">
            <nav
              className="flex flex-col items-start w-full lg:w-[260px] mb-6 lg:mb-0"
              aria-label="Tabs"
            >
              <div className="rounded-2xl bg-[#F2F5FF] pb-1 mt-1 w-full">
                {settingsTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={clsx(
                      "px-3 py-3 text-start w-full lg:w-[252px] text-sm rounded-lg mx-1 my-0.5 transition-colors",
                      activeTab === tab
                        ? "bg-white text-blue-600 font-medium"
                        : "text-gray-500 hover:text-gray-700"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </nav>

            {activeTab === "Treatments" && (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:ml-11 w-full">
                <div className="space-y-1">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-xl font-bold text-gray-900">
                      Treatments
                    </h2>
                  </div>
                  {tempTreatments.map((treatment) => (
                    <button
                      key={treatment.id}
                      onClick={() => handleTreatmentClick(treatment)}
                      className={clsx(
                        "w-full text-left px-4 py-3 text-sm rounded-md transition-colors",
                        selectedTreatment?.id === treatment.id
                          ? "bg-[#F2F5FF] text-blue-600 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      )}
                    >
                      {treatment.name}
                    </button>
                  ))}
                </div>

                <div className="bg-[#F9FAFF] rounded-2xl mt-6 xl:mt-12 py-4 px-2 w-full xl:w-[703px]">
                  {selectedTreatment && (
                    <>
                      <div className="mb-2 flex flex-col items-start space-y-1 justify-between px-3">
                        <h4 className="text-[15px] font-medium text-gray-700">
                          {selectedTreatment.name} (
                          {selectedTreatment.subCategories?.length || 0})
                        </h4>
                        <span className="text-xs text-[#AEB2BF]">
                          Treatments
                        </span>
                      </div>
                      <div className="my-3 bg-white border border-gray-200 rounded-xl">
                        {selectedTreatment.subCategories?.map((subCategory) => (
                          <div
                            key={subCategory.id}
                            className="flex items-center justify-between border-b last:border-b-0 border-gray-200"
                          >
                            <span className="text-sm text-gray-600 py-3 pl-3">
                              {subCategory.name}
                            </span>
                            <button
                              onClick={() => removeSubCategory(subCategory.id)}
                              className="text-gray-400 hover:text-gray-500 py-3 border-l border-gray-200 px-5"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center space-x-2 px-3">
                        <div className="relative flex-1">
                          <input
                            type="text"
                            value={newSubCategory}
                            onChange={(e) => setNewSubCategory(e.target.value)}
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                addSubCategory();
                              }
                            }}
                            placeholder="Select Treatment..."
                            className="w-full xl:w-[607px] h-12 rounded-xl border border-gray-200 px-3 py-2 text-sm placeholder-gray-400 
                              focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <ChevronDown className="h-5 w-8 mx-4 text-gray-400 absolute right-0 top-1/2 transform -translate-y-1/2" />
                        </div>
                        <button
                          onClick={addSubCategory}
                          className="inline-flex size-12 items-center justify-center rounded-xl text-blue-600 px-3 py-3 text-sm font-medium bg-transparent hover:bg-blue-700 hover:text-white border border-gray-200"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="mt-4 w-full flex justify-center space-x-2 px-3">
                        <button
                          onClick={handleCancel}
                          className="px-4 py-2.5 w-full text-sm font-semibold text-[#6968EC] bg-transparent border border-gray-300 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSave}
                          className="px-4 py-2 w-full text-sm font-semibold text-white bg-[#6968EC] rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Save
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
