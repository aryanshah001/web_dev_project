function PracComp({song1,song2,song3, artist = "arijit singh"}) {
  return (
    <div>
      <table class="table-fixed">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{song1}</td>
            <td>{artist}</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>{song2}</td>
            <td>{artist}</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>{song3}</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PracComp;
