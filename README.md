Contact list with pagination

You should be able to list a contact list and support the following functionality:

- Create, Delete and List contacts
  \*The delete can be client-side only
- Add to favorites - Client side only
- List all contacts and favorite contacts
- Use pagination in the Contacts view
- Display all the components in the Storybook

## Design:

https://xd.adobe.com/view/165c41fb-e8a3-40e7-a850-d90f064a94a2-430f/

## Library:

https://adobe.ly/3nVv97j

- Overview
  *List 4 favorite contacts in the "Favorites" section.
  *List 6 contacts in the "Contacts list" section.

- Contacts
  \*List all the contacts with the "Add to favorites" and "Delete" buttons. If the contact is already a favorite, display the "Remove from favorites" and "Delete" button.
- Favorites

## Required for development:

- Consume API
- React: Use react hooks
- React router
- Styled components https://styled-components.com/
- Redux
- unit test to minimun 2 components

Optionals

- Storybook
- typescript
- preprocessor css
- eslint

## API:

See docs for more details about users https://reqres.in/

- Get users, supports pagination https://reqres.in/api/users?page=1
- Create users - POST https://reqres.in/api/users
