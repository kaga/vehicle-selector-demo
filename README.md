# Vehicle Selector Demo

[View Demo Here](https://kaga.github.io/vehicle-selector-demo/react/build/)

[View Source Code Here](https://github.com/kaga/react-vehicle-selector)

This is a demo for creating a vehicle selector. It is a filter bar with the options of next
filter element are based on the previous filter selection.

![Demo](https://kaga.github.io/vehicle-selector-demo/asset/preview.gif)

## **WARNING** This is my **Hello World / Technical spike** at trying out React & GraphQL

This followed [this excellent document](https://reactjs.org/docs/thinking-in-react.html) from react

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

When changes merge to master, the [CD Github Action](https://github.com/kaga/react-vehicle-selector/blob/main/.github/workflows/continuous-deployment.yml)
will build, test and create a [Github Releases](https://github.com/kaga/react-vehicle-selector/releases).

A separate [Publish Action](https://github.com/kaga/react-vehicle-selector/blob/main/.github/workflows/publish.yml)
which listen for the release publish event then publish the build artifact to this repo. This will enable CD as well as creating hotfix on demand.

---

## Configure Selection Order

### Year > Make > Model

```TSX
<FilterBar filters={[VehicleYearFilterItem, VehicleMakeFilterItem, VehicleModelFilterItem]}
  onSelectedAllFilterItems={(selectedOption) => onSelectFilterOptions(selectedOption)}>
</FilterBar>
```
### Make > Model > Year

```TSX
<FilterBar filters={[VehicleMakeFilterItem, VehicleModelFilterItem, VehicleYearFilterItem]}
  onSelectedAllFilterItems={(selectedOption) => onSelectFilterOptions(selectedOption)}>
</FilterBar>
```

---

## Design

This demo was designed with the ability to provide general filtering in mind.
i.e. Filter a vehicle model, or vehicle configs

### Separate GraphQL Logic From UI

All network related files are located in **services > vehicle-selector** to separate the concerns

### UI

The UI was build with simple components for better understanding how React works. It was intentional to
use [Controlled Components](https://reactjs.org/docs/forms.html#controlled-components) and
[Hooks](https://reactjs.org/docs/hooks-intro.html) to learn and try to view react with a new perspective.

### Reusable Filter Component

The UI for this demo is separated by 2 parts:

1. A filter bar component
1. Vehicle Selector components which implements filter bar interfaces

#### Filter Bar

It cares about the filter bar UI rendering only. It does not care about the vehicle selection requirement.

#### Vehicle Selector

This connects the network layer and the vehicle selection specific logic.

#### Future Improvements

1. It is assuming certain UI elements (i.e. selectedOption / disabled)
1. Usage of **any**
1. Vehicle Selector components are responsible for handling the next/previous selection filtering logic,
   should extract that logic to enable other ways of filtering
1. Error state handling
