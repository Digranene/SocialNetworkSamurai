import {Redirect} from "react-router-dom";
import React from "react";

let AuthRedirectComponent = (props) => {
    if (!this.props.isAuth) return <Redirect to="/login" />
    return <ProfileContainer {...props} />
}
