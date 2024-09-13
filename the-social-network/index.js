const API_URL = "https://randomuser.me/api/"
async function getUsers(num) {
    const url = `${API_URL}?results=${num}`
    const response = await fetch(url)
    const responseJson = await response.json()
    return responseJson?.results
}
async function main() {
    const users = await getUsers(10)
    const userListDiv = document.getElementById("user-list")
    for (const user of users) {
        const userElement = createUserElement(user)
        userListDiv.appendChild(userElement)
    }
}

function createUserElement(user) {
    const cardDiv = document.createElement("div")
    cardDiv.className = "userCard"

    const profilePic = document.createElement("img")
    profilePic.setAttribute("src", user?.picture?.thumbnail)

    const fullName = document.createElement("div")
    fullName.className = "fullName"

    const firstNameDiv = document.createElement("div")
    const lastNameDiv = document.createElement("div")
    const firstName = document.createTextNode(user?.name?.first)
    const lastName = document.createTextNode(user?.name?.last)
    firstNameDiv.appendChild(firstName)
    lastNameDiv.appendChild(lastName)
    fullName.appendChild(firstNameDiv)
    fullName.appendChild(lastNameDiv)

    cardDiv.appendChild(profilePic)
    cardDiv.appendChild(fullName)
    return cardDiv
}

main()

// example user
// {
//     "gender": "male",
//     "name": {
//         "title": "Mr",
//         "first": "Abhimanyu",
//         "last": "Kamath"
//     },
//     "location": {
//         "street": {
//             "number": 8135,
//             "name": "Janpath"
//         },
//         "city": "Gangtok",
//         "state": "Manipur",
//         "country": "India",
//         "postcode": 71767,
//         "coordinates": {
//             "latitude": "5.1493",
//             "longitude": "-157.8469"
//         },
//         "timezone": {
//             "offset": "-11:00",
//             "description": "Midway Island, Samoa"
//         }
//     },
//     "email": "abhimanyu.kamath@example.com",
//     "login": {
//         "uuid": "061d549a-c6bb-40e7-813a-857f31db4d20",
//         "username": "brownmouse580",
//         "password": "ashton",
//         "salt": "XyRTd6Dp",
//         "md5": "389a7e33f786723c33211070a9b2a978",
//         "sha1": "d94882f9be94632a65031722ba99b2d10a2a0fa9",
//         "sha256": "9ce08313a26d10fa4f6a0b2422a0d0ef375e840ed127f537281e8c30a189bc7d"
//     },
//     "dob": {
//         "date": "1964-04-23T07:31:16.014Z",
//         "age": 60
//     },
//     "registered": {
//         "date": "2011-07-30T09:17:17.823Z",
//         "age": 13
//     },
//     "phone": "7087281075",
//     "cell": "8619107860",
//     "id": {
//         "name": "UIDAI",
//         "value": "407991959683"
//     },
//     "picture": {
//         "large": "https://randomuser.me/api/portraits/men/94.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/94.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/94.jpg"
//     },
//     "nat": "IN"
// }