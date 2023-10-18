import React from 'react';
import Card from '../Card/Card';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ErrorIcon from '@mui/icons-material/Error';
import SignalCellular4BarIcon from '@mui/icons-material/SignalCellular4Bar';
import SignalCellular3BarIcon from '@mui/icons-material/SignalCellular3Bar';
import SignalCellular1BarIcon from '@mui/icons-material/SignalCellular1Bar';

const SortByPriority = ({tickets,user}) => {
    const priorityArr = [
        {
            icon:<MoreHorizIcon style={{color:"#686868",fontSize:"19px"}}/>,
            text:"No Priority"
        },
        {
            icon:<ErrorIcon style={{color:"orange",fontSize:"19px"}}/>,
            text:"Urgent"
        },
        {
            icon:<SignalCellular4BarIcon style={{color:"#686868",fontSize:"19px"}}/>,
            text:"High"
        },
        {
            icon:<SignalCellular3BarIcon style={{color:"#686868",fontSize:"19px"}}/>,
            text:"Medium"
        },
        {
            icon:<SignalCellular1BarIcon style={{color:"#686868",fontSize:"19px"}}/>,
            text:"Low"
        },
    ]
  const groupByPriority = () =>{
    const  groupPriority = {};
    tickets.forEach(item =>{
        if(!groupPriority[item.priority]){
            groupPriority[item.priority] = []
        }
        groupPriority[item.priority].push(item)
    })
    return groupPriority;
}
return (
    <>
      {Object.keys(groupByPriority()).map(key =>{
          return <div class="column-containers" key={key}>{
            <div className="header-container">
                <div className="left-section">
                    <span>{priorityArr[key].icon}</span>
                    <span>{<h6 style={{fontSize:"15px"}}>{priorityArr[key].text}</h6>}</span>
                </div>
                <div className='right-section'>
                    <AddIcon style={{color:"#686868",fontSize:"19px"}}/>
                    <MoreHorizIcon style={{color:"#686868",fontSize:"19px"}}/>
                </div>
            </div>
          }{groupByPriority()[key].map(elem => <Card priority={elem.priority} userId={elem.userId} title={elem.title} tag={elem.tag} id={elem.id}/>)}</div>
      })}
    </>
)
}

export default SortByPriority
