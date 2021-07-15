import { Card, Col, Row, List, Space, Typography } from 'antd';
import styled from 'styled-components';
import { RightOutlined, FormOutlined , HeartFilled } from '@ant-design/icons';
import { CardStyle } from 'shared/style/theme/component';

export const TextRecommendBoardTopic = styled(Col)`
    font-weight: bolder;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const ButtonSeeAllBoard = styled.div`
    color: var(--Blue-300);
    height: 5vh;
    width: 100px;
    font-weight: bolder;
    font-size: 15px;
    padding-top: 20px;
    display: flex;
    transform: translateX(280%);

    &:hover {
        cursor: pointer;
    }
`;

export const CardContainer = styled.div`
    /* overflow-x: scroll; */
`;

export const RowStyled = styled(Row)`
    width: 100%;
`;

export const BoardCard = styled(Card)`
    margin-bottom: 10px;
    height: 88px;
    width: 100%;
    box-shadow: 0px 3px 6px #c7c7c7;
    border-radius: 10px;
    & .ant-card-body {
        padding: 0px;
    }
`;

export const GridBox = styled.div`
    display: flex;
    overflow-x: scroll;
    ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
    }
`;

export const NewCardStyle = styled(CardStyle)`
    & .ant-card-actions {
        border-top : none;
        background : none;
    }

    & .ant-card-actions > li:not(:last-child) {
    border-right: none;
    }    

    & .ant-card-meta-title {
        font-weight : bold;
    }
`;

export const HistoryImage = styled.img`
    width: 88px;
    height: 88px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    transform: translateY(-1%);
`;

export const CardText = styled.div`
    font-weight: bolder;
    font-size: 16px;
`;

export const RowCardContainer = styled.div`
    display : flex;
    flex-direction : row; 
`;

export const HistoryText = styled.div`
    margin-top: 5px;
    font-size: 14px;
    font-weight: bolder;
    text-overflow: ellipsis; /* เพิ่ม ... จุดจุดจุดท้ายสุด */
    display: block;
    overflow: hidden;
    white-space: nowrap;
`;

export const CommentIcon = styled(FormOutlined)`
    color: var(--Gray-100);
    transform: translateY(20%);
    margin-right: 5px;
`;

export const HeartIconList = styled(HeartFilled)`
    color: var(--Gray-100);
    transform: translateY(20%);
    margin-right: 5px;
`;

export const HeartIconCard = styled(HeartFilled)`
    color : var(--Gray-100);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3px 8px;

    position: absolute;
    width: 48px;
    height: 20px;
    right: 10.46px;
    top: 11px;

    /* White */
    background: #FFFFFF;
    /* Shadow-Light (bottom) */
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.05);
    border-radius: 100px;
`;

export const HeartText = styled(Typography)`
    color : var(--Gray-400);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 17px;

    position: absolute;
    width: 48px;
    height: 20px;
    right: 0px;
    top: 11px;
`;

export const ListBoard = styled(List)`
    font-weight: bolder;
    margin: 0 auto;
`;

export const ListItemBoard = styled(List.Item)`
    margin: 0 auto;
    margin-bottom: 10px;
    box-shadow: 0px 3px 6px #c7c7c7;
    border-radius: 20px;
    height: 130px;
    width: 550px;
    & .ant-list-item-action {
        transform: translateY(-300%);
        padding-left: 135px;
    }
`;

export const SearchField = styled(Space)`
    display: flex;
    justify-content: center;
`;

export const ImgBoardList = styled.img`
    transform: translateX(-15%) translateY(-6%);
    border-radius: 15px;
    width: 120px;
    height: 130px;
`;