# Fanta UI

Restyled Bootstrap UI Kit for React. As this is an extension of Bootstrap, any class names that Bootstrap uses will also work here! [See Bootstrap Docs](https://getbootstrap.com/docs/4.5/getting-started/introduction/). There is no current standalone version, and to use this, clone this repo.

## Reference

## Components

### Typography

#### Properties

| Property | Description                                                | Type     | Default   | Required? |
| :------- | :--------------------------------------------------------- | :------- | :-------- | :-------- |
| `color`  | Hex code to determine font colour                          | `String` | `#212529` | ❌        |
| `level`  | Corresponds to heading type (h1, h2, etc.). Supports 1 - 6 | `Number` | `1`       | ❌        |

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

---

### Badge

#### Properties

| Property | Description                                                                                                  | Type     | Default | Required? |
| :------- | :----------------------------------------------------------------------------------------------------------- | :------- | :------ | :-------- |
| `type`   | Alert type. Possible values: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark` | `String` | None    | ✔️        |
| `pill`   | Simply add the `pill` property to turn the badge into a rounded badge                                        | `String` | `false` | ❌        |

---

### Breadcrumb

All `BreadCrumbItem` components must be wrapped with a `Breadcrumb` component. Not doing this may lead to unexpected results, as styles are tied to the top level component. An example is shown below.

#### Properties

| Property | Description                                                                                                               | Type      | Default | Required? |
| :------- | :------------------------------------------------------------------------------------------------------------------------ | :-------- | :------ | :-------- |
| `active` | This property for the `BreadcrumbItem` component should be used on the active (usually last) item in the breadcrumb chain | `Boolean` | false   | ❌        |
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

### Finished Components

- Typography
- Tables
- Alerts
- Badge
- Breadcrumb

<!-- ### Unfinished Components

 ! = Probably don't need to touch - just turn into a React component and double check for UI/UX improvements

- Buttons
- Button group
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
