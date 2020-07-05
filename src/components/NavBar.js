import React from "react";
import { Link } from "react-router-dom";
import { Input, Menu, Responsive, Dropdown } from "semantic-ui-react";

class NavBar extends React.Component {
  state = {
    activeItem: "home"
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Responsive as={Menu} minWidth={601}>
          <Menu pointing>
            <Link to={"/"}>
              <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to={"/animals"}>
              <Menu.Item
                name="animals"
                active={activeItem === "animals"}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to={"/plants"}>
              <Menu.Item
                name="Plants"
                active={activeItem === "Plants"}
                onClick={this.handleItemClick}
              />
            </Link>

            <Link to={"/form"}>
              <Menu.Item
                name="Add Animal or Plant"
                active={activeItem === "Add Animal or Plant"}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to={"/quiz"}>
              <Menu.Item
                name="quiz"
                active={activeItem === "quiz"}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to={"/about"}>
              <Menu.Item
                name="About"
                active={activeItem === "About"}
                onClick={this.handleItemClick}
              />
            </Link>
            {window.location.href ===
              "https://biome-atlas.netlify.com/animals" ||
            window.location.href ===
              "https://biome-atlas.netlify.com/plants" ? (
              <Menu.Menu position="right">
                <Menu.Item>
                  <Input
                    icon="search"
                    placeholder="Search..."
                    name="search"
                    value={this.props.search}
                    onChange={e => this.props.changeHandler(e.target.value)}
                  />
                </Menu.Item>
              </Menu.Menu>
            ) : null}
          </Menu>
        </Responsive>

        <Responsive as={Menu} maxWidth={600}>
          <Menu>
            <Dropdown item text="Menu">
              <Dropdown.Menu>
                <Link to={"/"}>
                  <Dropdown.Item
                    name="home"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                  >
                    Home
                  </Dropdown.Item>
                </Link>
                <Link to={"/animals"}>
                  <Dropdown.Item
                    name="animals"
                    active={activeItem === "animals"}
                    onClick={this.handleItemClick}
                  >
                    Animals
                  </Dropdown.Item>
                </Link>
                <Link to={"/plants"}>
                  <Dropdown.Item
                    name="Plants"
                    active={activeItem === "Plants"}
                    onClick={this.handleItemClick}
                  >
                    Plants
                  </Dropdown.Item>
                </Link>

                <Link to={"/form"}>
                  <Dropdown.Item
                    name="Add Animal or Plant"
                    active={activeItem === "Add Animal or Plant"}
                    onClick={this.handleItemClick}
                  >
                    Add Animal or Plant
                  </Dropdown.Item>
                </Link>
                <Link to={"/quiz"}>
                  <Dropdown.Item
                    name="quiz"
                    active={activeItem === "quiz"}
                    onClick={this.handleItemClick}
                  >
                    Take a Quiz
                  </Dropdown.Item>
                </Link>
                <Link to={"/about"}>
                  <Dropdown.Item
                    name="About"
                    active={activeItem === "About"}
                    onClick={this.handleItemClick}
                  >
                    About
                  </Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
            {window.location.href ===
              "https://biome-atlas.netlify.com/animals" ||
            window.location.href ===
              "https://biome-atlas.netlify.com/plants" ? (
              <Menu.Menu position="right">
                <Menu.Item>
                  <Input
                    icon="search"
                    placeholder="Search..."
                    name="search"
                    value={this.props.search}
                    onChange={e => this.props.changeHandler(e.target.value)}
                  />
                </Menu.Item>
              </Menu.Menu>
            ) : null}
          </Menu>
        </Responsive>
      </div>
    );
  }
}

export default NavBar;