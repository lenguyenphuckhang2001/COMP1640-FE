import './Error.scss';
import { CiWarning } from 'react-icons/Ci';
function Error(props){
    function renderError(){
        let {errors}= props
        if(Object.keys(errors).length > 0){
            return Object.keys(errors).map((key,index)=>{
                return(
                    <li key={index}><CiWarning/> {errors[key]}</li>
                )               
            })
        }
    }
    return(
        <ul>
            {renderError()}
        </ul>
    )
}

export default Error;