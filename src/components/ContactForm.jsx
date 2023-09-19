import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";

export const ContactForm = ({onAdd}) => {
    
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
                id: '',
            }}
            onSubmit={(values, { resetForm }) => {
                onAdd({ ...values, id: nanoid() });
                resetForm();
            }}
        >
            <Form >
                <label>Name</label>
                <Field
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <label>Number</label>
                <Field
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <button type="submit">Add contact</button>
            </Form >
        </Formik>
    );
};