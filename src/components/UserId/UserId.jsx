
import {NavLink, useParams} from 'react-router-dom'


function UserId (props) {
  let {userName} = useParams()
  let user = {}
  props.users.forEach(el => {
    if (el.id == userName) {
      user = el
    }
  });
  return (
    <div className="user">
      <NavLink to='/users'>Назад</NavLink>
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
    </div>
  );
}

export default UserId