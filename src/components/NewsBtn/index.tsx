type NewsBtnProps = {
    btnTitle: string;
}
type HrefProps = {
    hrefPath: string;
}

type Props = NewsBtnProps & HrefProps;

const NewsBtn = ({btnTitle, hrefPath}: Props) => {
    return (
        <div className="flex justify-center">
            <a className="text-1xl border-white border-1 basis-xs bg-gradient-to-b from-[#75201D] to-[#FFFFFF] hover:opacity-90 transition-colors p-2 px-4" href={hrefPath} target="_blank">{btnTitle}</a>
        </div>
    )
}

export default NewsBtn