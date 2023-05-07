import React, { useState, useEffect } from "react";
import './index.css';

const UserInitial = [
    { username: "sanda", password: "12336", birthday:"12.12.2002", city: "New York" },
    { username: "arina", password: "last", birthday:"24.05.2003", city: "Cambridge" },
];

const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [EsteLogat, setEsteLogat] = useState(false);
    const [users, SetareUser] = useState(UserInitial);

    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            SetareUser([...users, ...JSON.parse(storedUsers)]);
        }
    }, [users]);

    const handleLogin = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const foundUser = users.find(
            (user) => user.username === username && user.password === password
        );
        if (foundUser) {
            setEsteLogat(true);
            localStorage.setItem("EsteLogat", "true");
            localStorage.setItem("user", JSON.stringify(foundUser));
            alert("Autentificare reușită");
        } else {
            alert("Login eșuat");
        }
    };

    const handleLogout = () => {
        setEsteLogat(false);
        localStorage.setItem("EsteLogat", "false");
        alert("Succes la deconectare");
    };

    const renderLoginForm = () => {
        return (
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input
                        className="input-field"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        className="input-field"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <br />
                <button className="login-button" type="submit">Autentificare</button>
            </form>
        );
    };

    const renderLogoutButton = () => {
        const storedUser = localStorage.getItem("user");
        const loggedInUser = storedUser ? JSON.parse(storedUser) : null;
        return (
            <div className="logout-container">
                <div className="circle">
                    <p className="circle-text">Name: </p>
                    {loggedInUser && <p className="circle-text-bold">{loggedInUser.username}</p>}
                </div>
                <div className="circle">
                    <p className="circle-text">Birthday: </p>
                    {loggedInUser && <p className="circle-text-bold">{loggedInUser.birthday}</p>}
                </div>
                <div className="circle">
                    <p className="circle-text">City: </p>
                    {loggedInUser && <p className="circle-text-bold">{loggedInUser.city}</p>}
                </div>
                <button className="logout-button" onClick={handleLogout}>Ieșire</button>
            </div>
        );
    };

    return (
        <div className={EsteLogat ? "background-green" : ""}>
            {EsteLogat ? renderLogoutButton() : renderLoginForm()}
        </div>
    );
};

export default App;
