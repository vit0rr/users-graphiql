# How to run the project

```bash
### Install dependecies
$ yarn install

### Run GraphQL server
$ yarn dev

### Run Json Server
$ yarn run json:server

### The server will start at port http://localhost:4000/graphql 
### The Json Server will start at port http://localhost:3000/users/
```

# How the project work?

In my `server.js` I have my express code that can start my server and listen on localhost:4000/graphql a GraphQL server that listen my schema and a rule that set my property graphiql to `true`.

`schema.js` has the GraphQL schema, with my types, Queryes and mutations.

# How to run the CRUD?

With the both server started, I made two principles fetches: `user` and `company`.

The user fetch:
```GraphQL

# Will return informations about user with id "41"

{
  user(id: "41") {
    id
    firstName
    age
    company {
      name
    }
  }
}
```

The company fetch:
```GraphQL
# Will return informations about the company by id and who users work in this company

{
  company(id: "2"){
    id	
    name
    description
    users{
      firstName
    }
  }
}

```

Add users:
```GraphQL

mutation{
  addUser(firstName: "Elon" age: 32){
    firstName
    age
  }
}

```

Delete users:
```GraphQL

mutation{
  deleteUser(id: "4pQ-ym-"){
    id
  }
}

```

Edit users:

```GraphQL

mutation {
  editUser(id: "uX1tabO", firstName: "Markinhos", age: 100, companyId: "2") {
    id
    firstName
    age
    company{
      id
      name
      description
    }
  }
}



```