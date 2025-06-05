type NewsBtnProps = {
    btnTitle: string;
}
type HrefProps = {
    hrefPath: string;
}

type Props = NewsBtnProps & HrefProps;

const NewsBtn = ({btnTitle, hrefPath}: Props) => {
    return (
        <div className="flex justify-center ">
            <a className="border-white border-1 p-2" href={hrefPath} target="_blank">{btnTitle}</a>
        </div>
    )
}

export default NewsBtn