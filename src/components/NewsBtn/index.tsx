type NewsBtnProps = {
    btnTitle: string;
}

const NewsBtn = ({btnTitle}: NewsBtnProps) => {
    return (
        <div className="flex justify-center ">
            <a className="border-black border-1 p-2" href="/" target="_blank">{btnTitle}</a>
        </div>
    )
}

export default NewsBtn