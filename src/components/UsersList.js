import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UsersList = (props) => {
    const users = [
        {"id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "online": true 
        }, 
        {"id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "online": false
        },
        {"id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "online": false
        },
        {"id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "online": false
        },
        {"id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "online": true
        },
        {"id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "online": true
        },
        {"id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "online": true
        },
        {"id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "online": false
        },
        {"id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "online": true
        },
        {"id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "online": true
        }
    ]

    const onlineUsers = users.filter((ele) => {
        return ele.online === true
    })

    const offlineUsers = users.filter((ele) => {
        return ele.online === false
    })

    return (
        <div>
            <h2>Online Users</h2>
            <ul>
                {onlineUsers.map((el) => {
                    return (
                        <li key={el.id}>{el.name}</li>
                    )
                })}
            </ul>
            <hr />
            <h2>Offline users</h2>
            <ul>
                {offlineUsers.map((el) => {
                    return (
                        <li key={el.id}>{el.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default UsersList