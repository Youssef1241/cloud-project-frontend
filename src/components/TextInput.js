const TextInput=(props)=>{
    return(
        <div className="flex flex-col justify-center gap-2">
            <label className="text-white font-bold">
                {props.label}
            </label>
            <input className="rounded-lg h-7 min-w[250px] p-2" type={props.type} {...props.register(props.name,props.validation)}>
            </input>
        </div>
    )
}
export default TextInput