import { NavLink } from 'react-router-dom';
import classes from './Topbar.module.css';
import { useHistory } from "react-router-dom";
const Topbar = (props) => {
    const history = useHistory(); 
    const loginrole = window.localStorage.getItem('userType');
    return ( <>
        <div className={classes.topbarWrapper}>
            <div className={classes.topbarLeft}>
                <img width='90px' src='https://image.shutterstock.com/image-vector/pharmacy-logo-letter-p-cross-260nw-1214808757.jpg'></img>
            </div>
            {loginrole=="storemanager"?<div className={classes.topbarMid}>
               
               <NavLink className={classes.menuItem} to='/products' activeClassName={classes.activeNav}> Products</NavLink>
               <NavLink className={classes.menuItem} to='/orders' activeClassName={classes.activeNav}> Orders</NavLink>
               <NavLink className={classes.menuItem} to='/users' activeClassName={classes.activeNav}> Users</NavLink>
           </div>:<div className={classes.topbarMid}><NavLink className={classes.menuItem} to='/orders' activeClassName={classes.activeNav}> Orders</NavLink></div>}
            <div className={classes.topbarRight}>
                <button onClick={()=>{
                    history.push('/')
                }}>Sign Out</button>
            </div>
        </div>
    </> );
}
 
export default Topbar;