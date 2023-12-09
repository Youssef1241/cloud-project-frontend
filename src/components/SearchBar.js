const SearchBar=(props)=>{
    return(
        <div className="flex flex-col justify-center gap-2">
            <label className="text-white font-bold">
                {props.label}
            </label>
            <input className="rounded-lg h-7 min-w[250px] p-2" type={props.type} >
                
            </input>
        </div>
    )
}
export default SearchBar;