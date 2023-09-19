export const Filter = ({value, onChange}) => {
    return (
        <form>
            <label>Find contacts by name</label>
            <input
                type="text"
                value={value}
                onChange={evt => onChange(evt.target.value)}
            />
        </form>
    );
}