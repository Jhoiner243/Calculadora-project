import '../stylesheet/Boton.css'

export interface Props {
    valor?: string
    manejarClic: (valor: string) => void
    children: string
}

function Boton({ children, manejarClic }: Props): JSX.Element {
    const esOperador = (valor: string) => {
        return isNaN(Number(valor)) && valor !== '.' && valor !== '=';
    };

    return (
        <div
            onClick={() => manejarClic(children)}
            className={`boton-contenedor ${esOperador(children) ? 'operador' : ''}`}>
            {children}
        </div>
    );
}

export default Boton;
