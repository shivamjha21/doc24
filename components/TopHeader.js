import React, { Component } from "react";
import Link from "next/link";


class TopHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login_user_first_name: "",
            login_user_last_name: "",
        };
    }

    componentDidMount() {
        if (sessionStorage.getItem("tech_been_p_image") == "null" || sessionStorage.getItem("tech_been_p_image") == "") {
            var profile_image = "/img/no_profile_image.jpg";
        } else {
            var profile_image = "/img/no_profile_image.jpg"
        }
        this.setState({
            login_user_first_name: sessionStorage.getItem("tech_been_full_name"),
            profile_image: profile_image,
        });
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand topbar static-top shadow" style={{ background: "#ffffff" , zIndex: 2}}>
                    <div className="ml-5">
                        <p style={{ margin: '0 30px 0 1050px', color: "#000", display:'inline-block' }}> <i className="fa fa-phone" style={{color: "#2888BB"}}></i> +91 00000 00000</p>
                        <span style={{   color: "#000", display:'inline-block'}}> <i className="fa fa-envelope" style={{color: "#2888BB"}}></i> support@gmail.com</span>
                    </div>

                </nav>
            </>
        );
    }
}

export default TopHeader;
