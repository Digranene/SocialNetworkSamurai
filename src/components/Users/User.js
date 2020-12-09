import React from 'react'
import s from "./users.module.css";
import user from "../../assets/images/user.webp";
import {NavLink} from "react-router-dom";
import Paginator from "../common/paginator/Paginator";


let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount}
                   pageSize={pageSize} onPageChanged={onPageChanged}/>
        {
            users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : user} className={s.usersPhoto} alt=""/>
                        </NavLink>
                        </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.unfollow(u.id)
                                      }}>unFollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }}>Follow</button>}
                            </div>
                            </span>
                <span>
                            <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            </span>
                            <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                            </span>
                            </span>
            </div>)
        }
    </div>
}

export default Users
