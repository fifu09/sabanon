export const SelectCustomed = (props) => {
    const ListOfOptions = ["Todos", "ibai", "yunes", "yahfar", "faisal", "fifu", "iker", "isma"]
    const handleCaseSelect = (event) => {
        const value = event.target.value
        props.setState(value)
    }
    return (
        <select onChange={handleCaseSelect} value={props.nameFiltered} className="h-full w-60 text-center text-2xl bg-transparent border focus:bg-black">
            {ListOfOptions.map((name) => {
                return <option key={name} value={name}>{name}</option>
            })}
        </select>
    )
}