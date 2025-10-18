export const MyButton = ({ title }: { title: string }) => {
  return <button className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition">{title}</button>;
};
