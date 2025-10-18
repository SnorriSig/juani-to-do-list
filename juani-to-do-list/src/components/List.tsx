export const List = ({ data }: { data: string[] }) => {
  return (
    <ol>
    {data.map((element, index) => (
        <li key={index}>{element}</li>
    ))}
    </ol>
  )
}