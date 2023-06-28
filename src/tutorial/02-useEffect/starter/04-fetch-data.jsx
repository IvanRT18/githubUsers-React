import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const promise = await fetch(url);
        const result = await promise.json();
        setUsers(result);
      } catch (error) {
        console.log(`There is an error: ${error}`);
      }
    };

    //Se llama a la función porque si no luego no se ejecuta la funcionalidad
    getData();
  }, []);

  console.log(users);

  // console.log(users);
  return (
    <section>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          // user es un objeto entoces se destructura con llaves {}
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h3>{login}</h3>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
