export default function TextInput(props) {
    const { name, label, placeholder, value, fn } = props;
    const changeHandler = (evt) => {
        evt.preventDefault();
        const value = evt.target.value();
        try {
            fn(value);
        } catch {}
    };
    return (
        <>
            <div className="textInput">
                <label htmlFor={name}>{label}</label>
                <input
                    type="text"
                    id={id}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                />
            </div>
        </>
    );
}
