export default function Input({id, label, error, ...props}) {
  return (
      <div className="control no-margin">
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props} />
        <div className="control-error">
          {id === "email" && error && <p>Please enter correct email id</p>}
          {id === "password" && error && <p>Please enter correct password</p>}
        </div>
    </div>
  );
}
