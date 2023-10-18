import {useState} from 'react';
import DropDownStyles from './DropDown.module.css';
import TuneIcon from '@mui/icons-material/Tune';


const DropDown = () => {
  const [isHover,setIsHover] = useState(false);
  const handleSelectBox = (value) =>{
    localStorage.setItem("value" ,value)
    setIsHover(false)
  }
  
  return (

    <div>
      <button className={DropDownStyles['dropDown-btn']} onClick={() => setIsHover(true)} >
       <TuneIcon style={{color:"#686868",fontSize:"19px",verticalAlign:"sub"}}/> Display
      </button> 
        {isHover && <>
          <div className={DropDownStyles["hover-container"]}>
            <div className={DropDownStyles["grouping"]}>
                <span>Grouing</span>
                <select name="" id="" onChange={(e) => handleSelectBox(e.target.value)}>
                  <option value="">Select</option>
                  <option value="status">Status</option>
                </select>
            </div>
            <div className={DropDownStyles["priority"]}>
              <span>Ordering</span>
                <select name="" id="" onChange={(e) => handleSelectBox(e.target.value)}>
                  <option value="">Select</option>
                  <option value="priority">Priority</option>
                </select>
            </div>
          </div>
        </>}
      </div>
  )
}

export default DropDown
