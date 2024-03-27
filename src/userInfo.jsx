const UserInfoUL = ({userList}) => {
  return (
    <ul>
      {
        userList.map(user=> (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </li>
        )
      )}
    </ul>
  )
}

export default UserInfoUL