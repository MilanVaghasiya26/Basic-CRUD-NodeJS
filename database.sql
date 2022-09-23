-- create extension if not exists "uuid-ossp";

CREATE TABLE user1(
  id uuid PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  name VARCHAR (255) NOT NULL,
  status VARCHAR (255) NOT NULL,
  age VARCHAR (255) NOT-NULL
);
