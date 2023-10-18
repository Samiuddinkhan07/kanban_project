import React from 'react';
import Card from '../Card/Card';
import DashBoardStyles from './Dashboard.module.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import SortByStatus from '../Grouping/SortByStatus';
import SortByPriority from '../Grouping/SortByPriority';
import SortByUser from '../Grouping/SortByUser';

const DashBoard = () => {
    const [userData , setUserData] = useState();
    const [tickets,setTickets] = useState([]);
    const [group,setGroup] = useState("status");
    const [priority,setPriority] = useState();


    const fetchUserData = async () =>{
        await axios.get(`https://api.quicksell.co/v1/internal/frontend-assignment`,).then((response) =>{
            const user = response.data.users;
            const ticket = response.data.tickets;
            setTickets(ticket);
            setUserData(user);
            
        })
    }
      useEffect(() =>{
        let localstorageValue = localStorage.getItem("value");
        setGroup(localstorageValue);
      },[group])
    useEffect(() =>{
        fetchUserData()
    },[])
  return (
    <div className={DashBoardStyles['page-body-container']}>
      <div className={(group == "status") ? "grid" : (group == "priority") ? "grid2" : (group == "user") ? "grid3" : ""}>
      {(group == "status") ? <SortByStatus tickets={tickets} user={userData}/> : (group == "priority") ? <SortByPriority tickets={tickets} user={userData}/> : (group == "user") ? <SortByUser/> : "Cant get the values"}
      </div>
    </div>
  )
}

export default DashBoard