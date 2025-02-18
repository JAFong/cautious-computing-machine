import { update } from "@jsonforms/core";
import { create } from "zustand";

const useLeadsStore = create((set, get) => ({
  // Normalize data
  leads: {},

  reachOutToLead: (id) =>
    fetch("/reach-lead", {
      method: "POST",
      body: JSON.stringify({ id }),
    }).then(() => {
      set((state) => {
        const lead = state.leads[id];
        const updatedLead = { ...lead, status: "Reached Out" };

        return {
          leads: {
            ...state.leads,
            [id]: updatedLead,
          },
        };
      });
    }),
  fetchLeads: () =>
    fetch("/leads")
      .then((response) => response.json())
      .then(({ data }) => {
        const normalizedLeads = data.reduce((acc, lead) => {
          acc[lead.id] = lead;
          return acc;
        }, {});
        set(() => ({
          leads: normalizedLeads,
        }));
      }),
}));

export { useLeadsStore };
