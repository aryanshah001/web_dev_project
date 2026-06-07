function Cards2({ username = 'ram' , name , name2}){
  return(
    <>
     <table class="table-fixed">
  <thead>
    <tr>
      <th>username</th>
      <th>channel </th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{username}</td>
      <td>{name}</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>{name2}</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
    </>
  )
}
export default Cards2