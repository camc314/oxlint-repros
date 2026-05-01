import { graphql } from "react-relay";

export const userFragment = graphql`
  fragment RelayExample_user on User {
    id
    name
    email
  }
`;

export function RelayExample({ user }) {
  return <span>{user.name}</span>;
}
