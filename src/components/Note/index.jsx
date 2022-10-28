import { Tag } from "../Tag";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <Link to="/details/:id">
      <h1>{data.title}</h1>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
      </Link>
    </Container>
  );
}