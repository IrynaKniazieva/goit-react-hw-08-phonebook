const TextField = ({label, handleChange, ...props}) => {
    return (
        <div>
            <label>{label}</label>
            <inpit onChange={handleChange} {...props}/>
        </div>
    )
}

export default TextField;