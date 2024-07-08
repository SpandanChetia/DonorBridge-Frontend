export default function Input(id, label, error, ...props) {
    return (
        <div className>
            <div className="control no-margin">
                <label htmlFor={id}>{label}</label>
                <Input 
                id={id}
                {...props}
                />
                <div className="control-error">
                    {id==='email' && error && <p>Invalid {label}</p>}
                </div>
            </div>
        </div>
    )
}