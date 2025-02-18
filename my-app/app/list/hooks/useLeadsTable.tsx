import { useLeadsStore } from "@/app/state/leadsStore";

const useLeadsTable = () => {
  const leads = useLeadsStore((state) => state.leads);

  const combinedArray = Object.keys(leads).map((id) => ({
    ...leads[id],
  }));

  return combinedArray;
};

export default useLeadsTable;
