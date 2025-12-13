import { DynamicIcon } from "lucide-react/dynamic";

const Cart = ({
  icon,
  title,
  description,
}: {
  icon:
    | "globe"
    | "palette"
    | "database"
    | "brain-circuit"
    | "zap"
    | "shield"
    | "monitor"
    | "trending-up";
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col justify-start items-center bg-white/10 border border-white/70 w-full rounded-xl p-4 mt-8 gap-2 min-h-48">
      <aside className="bg-blue-300  p-2 rounded-lg">
        <DynamicIcon name={icon} size={24} color="blue" />
      </aside>

      <h4 className="text-2xl font-bold text-center">{title}</h4>
      <p className="text-white/50 text-sm text-center">{description}</p>
    </div>
  );
};

export default Cart;
