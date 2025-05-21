import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return <ButtonContainer  as="button" disabled={disabled} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
