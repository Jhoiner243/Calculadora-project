import '../stylesheet/BotonClear.css'
interface ClearProps {
    manejarClic: () => void;
    children: string;
  }
const BotonClear = ({children, manejarClic}: ClearProps) =>{
    return(
        <div className="boton-clear" onClick={manejarClic}>
            {children}
        </div>
    )
}
export default BotonClear