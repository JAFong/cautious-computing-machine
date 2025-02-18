import { useLeadsStore } from "@/app/state/leadsStore";

const ReachOutButton = ({ data }) => {
  const { id } = data;
  const reachOutToLead = useLeadsStore((state) => state.reachOutToLead);
  const handleClick = () => {
    reachOutToLead(id);
  };
  return (
    <button
      className="cursor-pointer bg-green-400 text-white rounded-md px-[10px]"
      onClick={() => handleClick()}
    >
      Reach Out
    </button>
  );
};

export default ReachOutButton;
