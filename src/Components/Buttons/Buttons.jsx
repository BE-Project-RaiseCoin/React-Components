import React, { useState } from "react";
import styled from "styled-components";
import "./Buttons.css";

const theme = {
	blue: {
		default: "#3f51b5",
		hover: "#283593",
	},
	pink: {
		default: "#e91e63",
		hover: "#ad1457",
	},
};

const Button = styled.button`
	background-color: ${(props) => theme[props.theme].default};
	color: white;
	padding: 5px 15px;
	border-radius: 5px;
	outline: 0;
	border: 0;
	text-transform: uppercase;
	margin: 10px 0px;
	cursor: pointer;
	box-shadow: 0px 2px 2px lightgray;
	transition: ease background-color 250ms;
	&:hover {
		background-color: ${(props) => theme[props.theme].hover};
	}
	&:disabled {
		cursor: default;
		opacity: 0.7;
	}
`;

Button.defaultProps = {
	theme: "blue",
};

function clickMe() {
	alert("You clicked me!");
}

const ButtonToggle = styled(Button)`
	opacity: 0.7;
	${({ active }) =>
		active &&
		`

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457",
  },
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  border: 0; 
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue",
};

function clickMe() {
  alert("You clicked me!");
}

const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ active }) =>
    active &&
    `
    opacity: 1; 
  `}
`;

const Tab = styled.button`

	padding: 10px 30px;
	cursor: pointer;
	opacity: 0.6;
	background: white;
	border: 0;
	outline: 0;
	border-bottom: 2px solid transparent;
	transition: ease border-bottom 250ms;
	${({ active }) =>
		active &&
		`

  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `

    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

function TabGroup() {

	const [active, setActive] = useState(types[0]);
	return (
		<>
			<div>
				{types.map((type) => (
					<Tab
						key={type}
						active={active === type}
						onClick={() => setActive(type)}>
						{type}
					</Tab>
				))}
			</div>
			<p />
			<p> Your payment selection: {active} </p>
		</>
	);

  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </div>
      <p />
      <p> Your payment selection: {active} </p>
    </>
  );

}

const types = ["Cash", "Credit Card", "Bitcoin"];

function ToggleGroup() {

	const [active, setActive] = useState(types[0]);
	return (
		<div>
			{types.map((type) => (
				<ButtonToggle active={active === type} onClick={() => setActive(type)}>
					{type}
				</ButtonToggle>
			))}
		</div>
	);
}

export const Buttons = () => {
	return (
		<>
			<h1> Button Examples </h1>

			<div>
				<button onClick={clickMe}>Default Button</button>
			</div>

			<div>
				<Button onClick={clickMe}>Styled Button</Button>
			</div>

			<div>
				<Button theme="pink" onClick={clickMe}>
					Pink theme
				</Button>
			</div>

			<div>
				<Button disabled onClick={clickMe}>
					Disabled
				</Button>
			</div>

			<a href="https://react.school" target="_blank">
				<Button>Link</Button>
			</a>

			<div className="flex flex-wrap gap-2">
				<button type="button" class="b1">
					Default
				</button>
				<button type="button" class="b2">
					Alternative
				</button>
				<button type="button" class="b3">
					Dark
				</button>
			</div>

			<ToggleGroup />

			<TabGroup />
		</>
	);
};

  const [active, setActive] = useState(types[0]);
  return (
    <div>
      {types.map((type) => (
        <ButtonToggle active={active === type} onClick={() => setActive(type)}>
          {type}
        </ButtonToggle>
      ))}
    </div>
  );
}

export const Buttons = () => {
  return (
    <>
      <h1> Button Examples </h1>
      <div>
        <button onClick={clickMe}>Default Button</button>
      </div>
      <div>
        <Button onClick={clickMe}>Styled Button</Button>
      </div>
      <div>
        <Button theme="pink" onClick={clickMe}>
          Pink theme
        </Button>
      </div>
      <div>
        <Button disabled onClick={clickMe}>
          Disabled
        </Button>
      </div>
      <a href="https://react.school" target="_blank">
        <Button>Link</Button>
      </a>
      <ToggleGroup />
      <TabGroup />
    </>
  )
}

