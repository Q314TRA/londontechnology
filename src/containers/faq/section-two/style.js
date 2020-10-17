import styled from 'styled-components'
import { device } from '../../../theme'

export const SectionWrap = styled.div`
    padding-top: 89px;
    padding-bottom: 80px;
    background: #F8F8F8;
    @media ${device.medium}{
        padding-top: 72px;
    }
    @media ${device.small}{
        padding-top: 53px;
        padding-bottom: 60px;
    }
`;