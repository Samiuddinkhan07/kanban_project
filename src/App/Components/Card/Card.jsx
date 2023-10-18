import React from 'react'
import CardStyles from './Card.module.css'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ErrorOutlineSharpIcon from '@mui/icons-material/ErrorOutlineSharp';

const Card = (props) => {
  return (
    <>
        <div className={CardStyles['card']}>
            <div className={CardStyles['card-body']}>
                <div className={CardStyles['card-title']}>
                    <div className={CardStyles['card-title-text']}>{props.id}</div>
                    <AccountCircleSharpIcon style={{color:'#686868'}}/>
                </div>
                <div className={CardStyles['card-text']}>
                    <p className={CardStyles['card-text-inner']}>{props.title}</p>
                </div>
            </div>
            <div className={CardStyles['card-footer']}>
                <div className={CardStyles['card-footer-icon']}>
                    <ErrorOutlineSharpIcon style={{color:"#686868",fontSize:"17px",}}/>
                </div>
                <div className={CardStyles['card-footer-text']}>{props.tag}</div>
            </div>
        </div>
    </>
  )
}

export default Card