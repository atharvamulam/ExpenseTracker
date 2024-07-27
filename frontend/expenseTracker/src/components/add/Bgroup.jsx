import React, { useEffect } from 'react';
import { Container, ButtonGroup, ToggleButton } from 'react-bootstrap';
import { radioAtom } from './atom';
import { useRecoilState } from 'recoil';

function CenteredButtonGroup() {
  const [radioValue, setRadioValue] = useRecoilState(radioAtom);

  useEffect(() => { console.log(radioValue); }, [radioValue]);

  const radios = [
    { name: 'Expense', value: '1' },
    { name: 'Income', value: '2' },
  ];

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-10 mx-5 px-5" style={{ marginTop: '20px' }}>
      <Container className="text-center">
        <ButtonGroup className="col-8">
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? 'outline-success' : 'outline-danger'}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              className="m-1"
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Container>
    </Container>
  );
}

export default CenteredButtonGroup;
