

export const DetailCardCategory = ({label, littleDescription}) => {
    return ( 
        <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4">
                <div className="flex flex-col">
                    <div 
                    className="text-lg font-semibold"
                    >
                        {label}
                    </div>
                    <div 
                    className="text-neutral-500 font-light"
                    >
                        {littleDescription}
                    </div>
                </div>
            </div>
        </div>
       );
}