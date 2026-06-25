
interface TitleProps {
    text: string
} 

const TitlePage : React.FC<TitleProps> = ({text})=>{
    return (
    <div className="w-full mb-4">
        <h1 className="text-3xl font-bold text-white mb-1 capitalize">{text}</h1>
    </div>
    )
}

export default TitlePage;