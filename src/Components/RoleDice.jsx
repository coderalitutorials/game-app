
import styled from "styled-components"
const RoleDice = ({currentDice,roleDice}) => {

  

  return (
    <DiceContainer>
        <div
        onClick={roleDice}
        >
            <img src={`/images/dice_${currentDice}.png`} alt="not found" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
    display: flex;
    cursor: pointer;
    flex-direction: column;
    margin-top: 72px;
    align-items: center;
    p{
        font-size:24px;
    }
`