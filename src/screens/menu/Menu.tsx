import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Container,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { Center, Menu, Links } from "./style";

type Props = {
  filter: string;
  onChangeFilter: (x: string) => void;
};
export default function Inicio({ filter, onChangeFilter }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // function getStatus(status: number) {
  //   switch (status) {
  //     case 0:
  //       return ["Todos", "#ff0000"];

  //     case 1:
  //       return ["Priscila"];

  //     case 2:
  //       return ["Carlos", "#ded41b"];

  //     case 3:
  //       return ["Andre", "#d6a609"];

  //     case 4:
  //       return ["Hugo", "#0a0791"];

  //     default:
  //       return [];
  //   }
  // }

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
            <Dropdown
              isOpen={dropdownOpen}
              toggle={() => setDropdownOpen(!dropdownOpen)}
            >
              <DropdownToggle caret>{filter}</DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => onChangeFilter("Todos")}>
                  Todos
                </DropdownItem>
                <DropdownItem
                  onClick={() =>
                    onChangeFilter("PRISCILA CAROLINA ARAUJO SILVA")
                  }
                >
                  Priscila
                </DropdownItem>
                <DropdownItem
                  onClick={() =>
                    onChangeFilter("CARLOS ROBERTO PARREIRA JUNIOR")
                  }
                >
                  Carlos
                </DropdownItem>
                <DropdownItem
                  onClick={() => onChangeFilter("ANDRE LANA ALMEIDA")}
                >
                  Andre
                </DropdownItem>
                <DropdownItem onClick={() => onChangeFilter("HUGO LIMA MOURA")}>
                  Hugo
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Menu>
      </Center>
    </Container>
  );
}
