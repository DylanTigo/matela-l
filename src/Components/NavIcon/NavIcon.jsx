import 'bootstrap/dist/css/bootstrap.min.css'
import "../../css/main.scss"


// eslint-disable-next-line react/prop-types
export function NavIcon({icon}){
    return(<>
        <button className="navIcon text-dark bg-secondary">{icon}</button>
    </>
    )
}