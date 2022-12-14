import styled from "styled-components";
import { breakpoints } from "./theme";

export const ServiceCard = styled.div`
    width: 100%;
    max-width: 285px;
    min-width: 240px;
    height: auto;
    border: 1px solid #D2D2D2;
    border-radius: 3px;
    ${breakpoints.md}{
        margin: 0 auto;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const TopImg = styled.div`
    height: 50%; 
    min-height: 210px;
    width: 100%;
    position: relative;
`;
export const ServiceDetails = styled.div`
`;
export const ServUserCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 5px;
    color: #333;
    font-size: 15px;
    p {
        min-width: calc(100% - 80px);
        max-width: calc(100% - 80px);
    }
`;
export const ImageWrap = styled.div`
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
    margin-right: 15px;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
`;
export const ServRate = styled.p`
    text-align: center;
    color: #333;
    span {
        color: #D51045;
        font-weight: 700;
    }
`;
export const ServStats = styled.div`
    display: flex;
    border-top: 1px solid #D2D2D2;
    margin-top: 15px;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 40px;
    }
    div:first-child {
        border-right: 1px solid #D2D2D2;
        span {
            padding-left: 15px;
        }
    }
    button {
        border: none;
        background: transparent;
        font-size: 15px;
        height: 100%;
        width: 100%;
        cursor: pointer;
    }
    #del {
        color: red;
    }
`;
export const SectionTwo = styled.div`
    display: flex;
    ${breakpoints.lg}{
        flex-direction: column;
    }
`;
export const Left = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
export const Right = styled.div`
    width: 330px;
    min-width: 330px;
    ${breakpoints.lg}{
        width: 100%;
    }
`;
export const SocialStats = styled.div`
    display: flex;
    align-items: center;
    p + span {
        padding: 2px 4px;
        border-radius: 99px;
        color: #fff;
        background: #666;
        font-size: 10px;
    }
    p {
        margin: 0 10px;
        font-size: 14px;
        color: #666666;
    }
`;
export const AwardCard = styled.div`
    display: flex;
    align-items: center;
    div {
        padding-left: 15px;
        color: #666666;
        p {
            font-size: 15px;
            font-weight: 600;
        }
        span {
            font-size: 13px;
        }
    }
`;
export const SkillGuage = styled.div`
    color: #666666;
    p {
        font-size: 15px;
        font-weight: 500;
    }
    div {
        height: 5px;
        width: 100%;
        background: #efefef;
        margin: 10px 0;
        ::after {
            content: "";
            display: block;
            background: #019B2C;
            height: 100%;
            width: ${(props) => props.level}%;
        }
    }
`;
export const DataSection = styled.div`
    margin-right: 30px;
    margin-bottom: 10px;
    ${breakpoints.lg}{
        margin-right: 0;
    }
`;
export const DataSectionTwo = styled.div`
    margin-right: 30px;
    margin-bottom: 20px;
    flex: 55%;
    ${breakpoints.lg}{
        margin-right: 0;
    }
`;
export const Tabs = styled.div`
    display: flex;
    height: 60px;
    column-gap: 10px;
`;
export const TabBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    cursor: pointer;
    border: none;
    background: white;
    font-size: 17px;
    color: #333;
    max-width: 260px;
    opacity: ${(props) => props.isActive ? "1" : "0.6"};
`;
export const Content = styled.div`
    margin-top: 5px;
    background: #fff;
    height: calc(100% - 65px);
    padding: 15px;
`;
export const PostWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 15px;
    flex-wrap: wrap;
    row-gap: 15px;
`;
export const PostLayer = styled.div`
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    position: absolute;
    p {
        display: flex;
        align-items: center;
        color: white;
    }
    span {
        padding-left: 10px;
    };
`;
export const PostStats = styled.div`
    display: flex;
    column-gap: 15px;
    padding: 15px 0;
    div {
        height: 50px;
        width: 100%;
        background: #FFF7F7;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
            display: flex;
            align-items: center;
        }
        span {
            font-size: 30px;
            padding-right: 10px;
            color: black;
        }
    }
    ${breakpoints.md}{
        flex-direction: column;
        row-gap: 5px;
    }
`;
export const SocialPost = styled.div`
    height: 230px;
    width: 230px;
    position: relative;
    ${breakpoints.md}{
        margin: 0 auto;
    }
`;
export const ExperienceWrapper = styled.div`
    height: 100%;
    max-height: 100%;
    overflow-y: scroll;
    padding: 0 15px;
`;
export const EmptyWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px 0;
    h3 {
        color: #777
    }
`;
