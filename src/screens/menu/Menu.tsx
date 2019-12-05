import React from "react";
import { Nav, NavItem, NavLink, Container } from "reactstrap";

import { Center, Menu, Links } from "./style";

export default function Inicio() {
  return (
    <Container>
      <Center>
        <Menu>
          <Nav>
            <NavItem>
              <NavLink href="#">
                <Links>Inicio</Links>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <Links>Usuários</Links>
              </NavLink>
            </NavItem>
          </Nav>
        </Menu>
      </Center>
    </Container>
  );
}
