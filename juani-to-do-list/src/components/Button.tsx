let style: string = "";
const style1: string =
  "bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition";
const style2: string =
  "bg-red-50 text-red-500 hover:bg-red-100 p-2 rounded-lg transition-colors";

export const Button = ({ type, onClick }: { type: string; onClick: () => void }) => {
  if (type === "add") {
    style = style1;
  }
  if (type === "delete") {
    style = style2;
  }
  return <button className={style} onClick={onClick}>{type}</button>;
};
