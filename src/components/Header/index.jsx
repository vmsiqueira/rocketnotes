import { RiShutDownLine } from "react-icons/ri";

import { Container, Profile, Logout } from "./styles";

export function Header() {
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/vmsiqueira.png" alt="user logo" />
        <div>
          <span>Bem vindo</span>
          <strong>Vitor Siqueira</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  );
}