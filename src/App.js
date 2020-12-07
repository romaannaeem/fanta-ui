import Title from './components/Title';
import Table from './components/Table';
import Alert from './components/Alert';
import Badge from './components/Badge';
import Breadcrumb from './components/Breadcrumb';
import BreadcrumbItem from './components/BreadcrumbItem';
import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import ButtonToolbar from './components/ButtonToolbar';
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <div className="typography">
        <Title>This is an h1</Title>
        <Title level={2}>This is an h2</Title>
        <Title level={3}>This is an h3</Title>
        <Title level={4}>This is an h4</Title>
        <Title level={5}>This is an h5</Title>
        <Title level={6}>This is an h6</Title>
      </div>

      <br />

      <Title level={5}>Table</Title>
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

      <div className="alerts">
        <Title level={5}>Alerts</Title>
        <Alert type="primary">This is a primary alert</Alert>
        <Alert type="secondary">This is a secondary alert</Alert>
        <Alert type="success">This is a success alert</Alert>
        <Alert type="danger">This is a danger alert</Alert>
        <Alert type="warning">This is a warning alert</Alert>
        <Alert type="info">This is an info alert</Alert>
        <Alert type="light">This is a light alert</Alert>
        <Alert type="dark">This is a dark alert</Alert>
      </div>
      <br />

      <div className="badges">
        <Title level={5}>Badges</Title>
        <Badge type="primary" pill>
          New
        </Badge>
        <Badge type="secondary">New</Badge>
        <Badge type="success">New</Badge>
        <Badge type="danger">New</Badge>
        <Badge type="warning">New</Badge>
        <Badge type="info">New</Badge>
        <Badge type="light">New</Badge>
        <Badge type="dark">New</Badge>
      </div>

      <br />

      <div className="breadcrumbs">
        <Title level={5}>Breadcrumbs</Title>
        <Breadcrumb>
          <BreadcrumbItem url="https://google.com">Home</BreadcrumbItem>
          <BreadcrumbItem>Library</BreadcrumbItem>
          <BreadcrumbItem active>Data</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <br />

      <div className="buttons">
        <Title level={5}>Buttons</Title>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="success">Success</Button>
        <Button type="danger">Danger</Button>
        <Button type="warning">Warning</Button>
        <Button type="info">Info</Button>
        <Button type="light">Light</Button>
        <Button type="dark">Dark</Button>
        <Button type="link">Link</Button>
      </div>

      <br />
      <Title level={5}>Button Group</Title>
      <ButtonGroup className="mr-2">
        <Button type="secondary">Left</Button>
        <Button type="secondary">Middle</Button>
        <Button type="secondary">Right</Button>
      </ButtonGroup>

      <br />
      <br />
      <Title level={5}>Button Toolbar</Title>
      <ButtonToolbar>
        <ButtonGroup className="mr-2">
          <Button type="secondary">1</Button>
          <Button type="secondary">2</Button>
          <Button type="secondary">3</Button>
          <Button type="secondary">4</Button>
        </ButtonGroup>
        <ButtonGroup className="mr-2">
          <Button type="secondary">5</Button>
          <Button type="secondary">6</Button>
          <Button type="secondary">7</Button>
        </ButtonGroup>
        <ButtonGroup className="mr-2">
          <Button type="secondary">8</Button>
        </ButtonGroup>
      </ButtonToolbar>
      <br />
      <br />
      <Title level={5}>Card</Title>
      <Card
        style={{ width: '18rem' }}
        title="Card Title"
        subtitle="subtitle"
        text="Lorem ipsum sit imet dolor"
      />
    </div>
  );
}

export default App;
