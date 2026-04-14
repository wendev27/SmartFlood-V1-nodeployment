type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4 border border-gray-100">
      {children}
    </div>
  );
}
