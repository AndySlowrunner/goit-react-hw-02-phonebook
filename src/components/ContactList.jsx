export const ContactList = ({ contacts, onClick }) => {
    return (
        <ul>
            {contacts.map(({name, number, id}) =>
                <li key={id}>
                    <p>{name}:{' ' + number}</p>
                    <button onClick={() => onClick(id)}>Delete</button>
                </li>
            )}
        </ul>
    )
}