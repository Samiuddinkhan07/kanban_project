import React from 'react';
import Card from '../Card/Card';


const SortByStatus = ({tickets,user}) => {
    const groupByStatus = () =>{
        const groupStatus = {};
        for (const ticket of tickets) {
          const { status } = ticket;
          if (!groupStatus[status]) {
            groupStatus[status] = [];
          }
          groupStatus[status].push(ticket);
        }
        return groupStatus
    }
  return (
    <>
      {Object.keys(groupByStatus()).map(status =>{
        return <div class="column-containers">{<h1>{status}</h1>}{groupByStatus()[status].map(elem => <Card  status={elem.status} userId={elem.userId} title={elem.title} tag={elem.tag} id={elem.id}/>)}</div>
      })}
    </>
  )
}

export default SortByStatus
