# Vehicle Selector Demo

[View Demo Here](https://kaga.github.io/vehicle-selector-demo/react)

[View Source Code Here](https://github.com/kaga/react-vehicle-selector)

This is a demo for creating a vehicle selector. It is a filter bar with the options of next
filter element are based on the previous filter selection.

## **WARNING** This is not a ~~**best practice**~~ for writing react application

This is my **Hello World / Technical spike** at trying out React & GraphQL. Bulk of the work
followed [this excellent document](https://reactjs.org/docs/thinking-in-react.html) by react

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI](https://material-ui.com/)
- [Apollo Client](https://www.apollographql.com/docs/react/)

There are many things yet to explore / implement, such as:

- i18n
- GraphQL
  - Pagination
  - Returning Mocking Data
- React
  - View State Handling
  - Responsive Design
- UI Testing
- Unit Testing
- Prettify / Lint Setup

## Github Page

The build artifact was published by Github action on push to master branch.

---

## Configure Selection Order

### Make > Model > Year

```TSX
<FilterBar filters={[VehicleMakeFilterItem, VehicleModelFilterItem, VehicleYearFilterItem]}></FilterBar>
```

### Year > Make > Model

```TSX
<FilterBar filters={[VehicleYearFilterItem, VehicleMakeFilterItem, VehicleModelFilterItem]}></FilterBar>
```

---

## Design

### Reusable Filter Component

The UI for this demo is separated by 2 parts:

1. A general filter bar component
1. Vehicle Selector components which implements filter bar interfaces

#### TODO

- FilterBar is designed for reusable, but it is assuming certain UI elements (i.e. selectedOption / disabled)
- Vehicle Selector components are responsible for handling the next/previous selection filtering logic, should extract that logic to enable other ways of filtering

