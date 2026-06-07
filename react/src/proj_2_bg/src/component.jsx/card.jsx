function Card({username = 'ram',  email}) {         // props : while duplicating card to change name of other card 
                                                // ram is default value    
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{username}</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>{email}</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Card;
