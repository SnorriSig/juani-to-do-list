import { Button } from "./Button"

export const List = ({ data, onDelete }: { data: string[]; onDelete: (index:number) => void }) => {
  return (
    <ol className="min-w-xs space-y-3">
        {data.map((element, index) => (
            <li key={index} className="flex justify-between items-center">
                {element}
                <Button type="delete" onClick={() => onDelete(index)} />
            </li>
        ))}
            
    </ol>
  )
}