import '../stylesheet/Pantalla.css'
interface Input{
    input: string
}
const Pantalla = ({ input }: Input) =>{
    return(
        <div className="input">
            {input}
        </div>
    )
}

export default Pantalla