import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

import { Container, Links, Content } from "./styles.js";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
        <ButtonText title="Excluir nota" />

        <h1>Introdução ao React</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos saepe sed ea vel asperiores explicabo blanditiis? Molestias eaque voluptatem ut deserunt ipsum, quia soluta sunt perspiciatis maiores reiciendis dignissimos aliquid.</p>

        <Section title="Links úteis">
          <Links>
            <li><a href="#">link 1</a></li>
            <li><a href="#">link 2</a></li>
            <li><a href="#">link 3</a></li>
          </Links>
        </Section>

        <Section title="Marcadores">
          <Tag title="Nodejs" />
          <Tag title="Express" />
        </Section>

        <Button title="Voltar" />

        </Content>
      </main>

    </Container>
  )
}