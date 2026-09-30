import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Default Location",
                avatar_url: "",
            },
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({ userInfo: json });
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <img
                    src={avatar_url || "https://via.placeholder.com/150"}
                    alt="user avatar"
                    style={{ width: "100px", borderRadius: "50%" }}
                />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
            </div>
        );
    }
}

export default UserClass;