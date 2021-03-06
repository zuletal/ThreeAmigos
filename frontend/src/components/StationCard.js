import styled from "styled-components";


const StationCard = (station) => {

    return(
    <>
        <CardContainer>
            <div>Brentwood</div>
            <div>30 min ago</div>
        </CardContainer>
    </>
    )
}

export default StationCard;

const CardContainer = styled.div`
    background-color: #f0be53;
    width: 250px;
    padding: 10px;
    margin: 20px
`