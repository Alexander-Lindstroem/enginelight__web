type NewsBtnProps = {
    btnTitle: string;
    hrefPath?: string;
    onClick?: () => void;
}

const NewsBtn = ({ btnTitle, hrefPath, onClick }: NewsBtnProps) => {
    const commonClasses = "text-1xl border-white border-1 basis-xs bg-gradient-to-b from-[#75201D] to-[#FFFFFF] hover:opacity-90 transition-colors p-2 px-4";

    return (
        <div className="flex justify-center">
            {onClick ? (
                <button onClick={onClick} className={commonClasses}>
                    {btnTitle}
                </button>
            ) : (
                <a href={hrefPath} target="_blank" className={commonClasses} rel="noopener noreferrer">
                    {btnTitle}
                </a>
            )}
        </div>
    );
};

export default NewsBtn;