const LabelInput = ({title, type="text", name, value, placeholder, cbonChange}) => {
    return (
        <div>
            <label>
                <p>{title}</p>
                <input type={type} name={name} value={value} placeholder={placeholder} onChange={cbonChange}/>
            </label>
        </div>
    )
}

export default LabelInput;