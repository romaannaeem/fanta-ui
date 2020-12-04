import Typography from './components/Typography/Typography';
import Table from './components/Table/Table';
import Alert from './components/Alert/Alert';

function App() {
  return (
    <div className="container">
      <Typography />
      <br />
      <Table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <Alert type="primary">This is a primary alert</Alert>
      <Alert type="secondary">This is a secondary alert</Alert>
      <Alert type="success">This is a success alert</Alert>
      <Alert type="danger">This is a danger alert</Alert>
      <Alert type="warning">This is a warning alert</Alert>
      <Alert type="info">This is an info alert</Alert>
      <Alert type="light">This is a light alert</Alert>
      <Alert type="dark">This is a dark alert</Alert>
    </div>
  );
}

export default App;
