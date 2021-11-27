export const createUser = (id, userName, firstName, lastName, email, password, phone, userStatus) => {
    return {
        "id": id,
        "username": userName,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password,
        "phone": phone,
        "userStatus": userStatus
    }
}