import { styled } from "styled-components";

const LabelD = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
`;

const InputD = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  color: ${({ $invalid }) => ($invalid ? "#ef4444" : "#374151")};
  border: ${({ $invalid }) =>
    $invalid ? "1px solid #f73f3f" : "1px solid transparent"};
  background-color: ${({ $invalid }) => ($invalid ? "#fed2d2" : "#d1d5db")};
  border-radius: 0.25rem;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export default function CustomInput({ label, invalid, ...props }) {
  return (
    <p>
      <LabelD $invalid={invalid}>{label}</LabelD>
      <InputD $invalid={invalid} {...props} />
    </p>
  );
}
