import styled from "styled-components";

const HeaderWrapper = styled.div`
    .row {
        display: flex;
        justify-content: space-between;
    }

    .day {
        font-size: 35px;
    }
    .hour, .minutes {
        font-size: 25px;
    }
`

export default HeaderWrapper;  