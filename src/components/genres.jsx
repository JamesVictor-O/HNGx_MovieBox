export const Genre = ({genre=[]}) => {
    return (
        <div className=" hidden md:flex flex-row justify-between items-center ml-10">
            {genre.map(genre => (
                <span className="bg-white py-[2px] px-[6px] text-red-800 border-red-800 border text-[13px] font-bolder rounded-xl ml-8" key={genre.id}>{ genre.name}</span>
            ))}
        </div>
    )
}