import { update } from "@jsonforms/core";
import { create } from "zustand";

const useLeadsStore = create((set) => ({
  // Normalize data
  leads: {},

  updateLead: (id, data) =>
    set((state) => {
      const lead = state.leads[id];
      const updatedLead = { ...lead, ...data };

      return {
        ...state,
        updatedLead,
      };
    }),
  fetchLeads: () =>
    fetch("/leads")
      .then((response) => response.json())
      .then(({ data }) => {
        const normalizedLeads = data.reduce((acc, lead) => {
          acc[lead.id] = lead;
          return acc;
        }, {});

        set((state) => ({
          ...state,
          leads: normalizedLeads,
        }));
      }),
}));

export { useLeadsStore };
