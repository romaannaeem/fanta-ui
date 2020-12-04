# Fanta UI

Restyled Bootstrap UI Kit for React. As this is an extension of Bootstrap, any class names that Bootstrap uses will also work here! [See Bootstrap Docs](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

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

#### Properties

---

### Finished Components

- Typography
- Tables

<!-- ### Unfinished Components

 ! = Probably don't need to touch

- Alerts
- Badge
- Breadcrumb
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
