import {Link} from 'react-router-dom'

function Users (props) {
  return (
    <div className="user">
      <h1>Все пользователи</h1>
      <ul>
      {props.users.map(user => {
        let link = '/users/' + user.id
        return <li key={user.id}><Link  to={link}>{user.name}</Link></li>
      })}
      </ul>
    </div>
  );
}

export default Users