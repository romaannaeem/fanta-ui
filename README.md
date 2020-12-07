# Fanta UI

Restyled Bootstrap UI Kit for React. As this is an extension of Bootstrap, any class names that Bootstrap uses will also work here! [See Bootstrap Docs](https://getbootstrap.com/docs/4.5/getting-started/introduction/). There is no current standalone version, and to use this, clone this repo.

---

## Components

### Typography

#### Properties

| Property | Description                                                | Type     | Default   | Required? |
| :------- | :--------------------------------------------------------- | :------- | :-------- | :-------- |
| `color`  | Hex code to determine font colour                          | `String` | `#212529` | ❌        |
| `level`  | Corresponds to heading type (h1, h2, etc.). Supports 1 - 6 | `Number` | `1`       | ❌        |

#### Example

```javascript
<Title>This is an h1</Title>
<Title level={2}>This is an h2</Title>
<Title level={3}>This is an h3</Title>
```

---

### Table

Simply import the table component and use it instead of the top level `table` JSX component. The rest of the table should be defined as a regular [Bootstrap table](https://getbootstrap.com/docs/4.5/content/tables/).

```javascript
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
```

### Alert

#### Properties

| Property | Description                                                                                                  | Type     | Default | Required? |
| :------- | :----------------------------------------------------------------------------------------------------------- | :------- | :------ | :-------- |
| `type`   | Alert type. Possible values: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark` | `String` | None    | ✔️        |

#### Example

```javascript
<Alert type="primary">This is a primary alert</Alert>
```

---

### Badge

#### Properties

| Property | Description                                                                                                  | Type     | Default | Required? |
| :------- | :----------------------------------------------------------------------------------------------------------- | :------- | :------ | :-------- |
| `type`   | Alert type. Possible values: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark` | `String` | None    | ✔️        |
| `pill`   | Simply add the `pill` property to turn the badge into a rounded badge                                        | `String` | `false` | ❌        |

#### Example

```javascript
<Badge type="primary" pill>New</Badge>
<Badge type="secondary">New</Badge>
```

---

### Breadcrumb

All `BreadCrumbItem` components must be wrapped with a `Breadcrumb` component. Not doing this may lead to unexpected results, as styles are tied to the top level component. An example is shown below.

#### Properties

| Property | Description                                                                                                               | Type      | Default | Required? |
| :------- | :------------------------------------------------------------------------------------------------------------------------ | :-------- | :------ | :-------- |
| `active` | This property for the `BreadcrumbItem` component should be used on the active (usually last) item in the breadcrumb chain | `Boolean` | `false` | ❌        |
| `url`    | The URL that the `BreadcrumbItem` should redirect to                                                                      | `String`  | `#`     | ❌        |

#### Example

```javascript
<Breadcrumb>
  <BreadcrumbItem url="https://google.com">Home</BreadcrumbItem>
  <BreadcrumbItem>Library</BreadcrumbItem>
  <BreadcrumbItem active>Data</BreadcrumbItem>
  <Breadcrumb>Data</BreadcrumbItem>
</Breadcrumb>
```

---

### Button

| Property | Description                                                                                                          | Type     | Default | Required? |
| :------- | :------------------------------------------------------------------------------------------------------------------- | :------- | :------ | :-------- |
| `type`   | Alert type. Possible values: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`, `link` | `String` | None    | ✔️        |

#### Example

```javascript
<Button type="primary">Primary</Button>
```

---

### ButtonGroup

Import a ButtonGroup and use it [as you would in Bootstrap](https://getbootstrap.com/docs/4.5/components/button-group/). Essentially, You can group a series of buttons together on a single line.

#### Example

```javascript
<ButtonGroup className="mr-2">
  <Button type="secondary">Left</Button>
  <Button type="secondary">Middle</Button>
  <Button type="secondary">Right</Button>
</ButtonGroup>
```

---

### ButtonToolbar

You can combine button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.

#### Example

```javascript
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
```

---

### Finished Components

- Typography
- Tables
- Alerts
- Badge
- Breadcrumb
- Buttons
- Button group

<!-- ### Unfinished Components

 ! = Probably don't need to touch - just turn into a React component and double check for UI/UX improvements

- Blockquote
- Card
- Carousel
- Collapse
- Dropdowns
- Forms
- Input group
- Jumbotron
- List group
- Media object
- Modal
- Navs
- Navbar
- Pagination
- Popovers
- Progress
- Scrollspy
- Spinners
- Toasts
- Tooltips
- ! Figures
- ! Images
- ! Code -->
