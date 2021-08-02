import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const TextBox = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 1.3em;

  margin-top: 5px;
  margin-right: 1rem;
`;

// export const Slider = styled.span`
//   position: absolute;
//   cursor: pointer;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: #ccc;
//   -webkit-transition: 0.4s;
//   transition: 0.4s;

//   &:before {
//     position: absolute;
//     content: '';
//     height: 26px;
//     width: 26px;
//     left: 4px;
//     bottom: 4px;
//     background-color: white;
//     -webkit-transition: 0.4s;
//     transition: 0.4s;
//   }
// `;

// export const Switch = styled.label`
//   position: relative;
//   display: inline-block;
//   width: 60px;
//   height: 34px;

//   input {
//     opacity: 0;
//     width: 0;
//     height: 0;

//     &:checked + Slider {
//       background-color: #2196f3;
//     }
//     &:focus + Slider {
//       box-shadow: 0 0 1px #2196f3;
//     }
//     &:checked + Slider:before {
//       -webkit-transform: translateX(26px);
//       -ms-transform: translateX(26px);
//       transform: translateX(26px);
//     }
//   }
// `;

export const ToggleButton = styled.button``;
