import { User } from "@/types/chat";

const statusColors = {
  online: "bg-green-500",
  offline: "bg-gray-500",
  away: "bg-yellow-500",
};

export function StatusIndicator({ status }: { status: User["status"] }) {
  return (
    <div
      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${statusColors[status]}`}
    />
  );
}
