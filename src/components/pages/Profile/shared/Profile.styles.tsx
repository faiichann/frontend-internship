import { Alert, Button, Card, Image, Modal, Row } from 'antd';
import styled from 'styled-components';
import { RightOutlined, FormOutlined, HeartFilled } from '@ant-design/icons';
import { Box } from 'shared/style/theme/component';
import ArrowIconImage from '../images/ArrowSeeResultAll.png';
import RadarImage from '../images/Chart.png';

export const ButtonSave = styled(Button)`
    font-weight: bolder;
    font-size: 16px;
    background-color: transparent;
    border: none;
    padding: 5px;
    margin: 5px;
    color: var(--Blue-400);
`;

export const ButtonLeaveModal = styled(Button)`
    font-weight: bolder;
    font-size: 15px;
    border-radius: 10px;
    color: white;
    border-color: var(--Red-300);
    background-color: var(--Red-300);
    width: 295px;
    height: 51px;
    box-shadow: 0px 3px 6px #c7c7c7;
`;
export const ButtonCancleModal = styled(Button)`
    font-weight: bolder;
    font-size: 16px;
    background-color: transparent;
    border: none;
    padding: 0px;
    color: var(--Blue-400);
    width: 65px;
    height: 19px;
    margin-top: 15px;
    transform: translateY(0%);
`;

export const TextTopicEditProfile = styled.div`
    width: 343px;
    text-align: left;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 10px;
    color: var(--Gray-400);
`;

export const TextTopic2 = styled.div`
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    padding-top: 15px;
    text-align: left;
    font-weight: bolder;
    font-size: 22px;
    margin-top: 15px;
    margin-bottom: 10px;
`;

export const TextUserInfo1 = styled.div`
    text-align: left;
    font-weight: bolder;
    font-size: 16px;
    margin-top: 10px;
`;
export const TextUserInfo2 = styled.div`
    text-align: right;
    float: right;
    font-weight: normal;
    font-size: 16px;
    margin-top: 10px;
`;

export const TextUsername = styled.div`
    font-weight: bolder;
    font-size: 22px;
    margin-top: 10px;
    padding-top: 10px;
    color: var(--Gray-600);
    padding-bottom: 25px;
`;
export const TextHeadModal = styled.div`
    font-weight: bolder;
    font-size: 24px;
`;
export const TextBodyModal = styled.div`
    font-weight: normal;
    font-size: 16px;
`;

export const CardText = styled.div`
    font-weight: bolder;
    font-size: 16px;
`;

export const HistoryText = styled.div`
    padding-right: 15px;
    margin-top: 5px;
`;

export const EllipsisText = styled.div`
    text-overflow: ellipsis; /* เพิ่ม ... จุดจุดจุดท้ายสุด */
    display: block;
    overflow: hidden;
    white-space: nowrap;
`;

export const UserImage = styled(Image)`
    width: 120px;
    height: 120px;
    border-radius: 90px;
    margin-top: 16px;
`;

export const ResultImage = styled.img`
    width: 111px;
    height: 112px;
    transform: translateY(4%);
`;

export const HistoryImage = styled.img`
    margin-right: 10px;
    width: 88px;
    height: 88px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    transform: translateY(-1%);
    position: absolute;
`;

export const LinkMoreResult = styled.div`
    width: 100%;
    padding-top: 15px;
    margin-top: 20px;
    text-align: right;
    font-size: 16px;
    color: var(--Blue-300);
    font-weight: bolder;
`;

export const ResultCard = styled(Card)`
    box-shadow: 5px 8px 10px #f0f0f0;
    margin-top: 0px;
    height: 130px;
    width: 100%;
    border-radius: 10px;
    & .ant-card-body {
        padding: 5px;
    }
`;

export const BoardCard = styled(Card)`
    margin-bottom: 15px;
    height: 88px;
    width: 100%;
    box-shadow: 5px 8px 10px #f0f0f0;
    border-radius: 10px;
    & .ant-card-body {
        padding: 0px;
    }
`;

export const RowStyled = styled(Row)`
    width: 100%;
`;

export const ConfirmModal = styled(Modal)`
    display: flex;
    justify-content: center;
    & .ant-modal-content {
        width: 343px;
        height: 249px;
        border-radius: 15px;
        margin-top: 100px;
    }
    & .ant-modal-header {
        height: 89px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
    }
    & .ant-modal-body {
        height: 30px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
    & .ant-modal-footer {
        height: 130px;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
`;

export const IconArrow = styled(RightOutlined)`
    color: #3a8ce4;
    transform: translateY(350%);
`;
export const CommentIcon = styled(FormOutlined)`
    color: var(--Gray-100);
    padding-top: 8px;
    padding-right: 5px;
`;
export const HeartIcon = styled(HeartFilled)`
    color: var(--Gray-100);
    padding-top: 8px;
    padding-right: 5px;
`;

export const CustomBox = styled(Box)`
    font-size: 12px;
    color: #6e7282;
    margin-top: 10px;
`;

export const NotFoundText = styled.div`
    margin-top: 15px;
    text-align: center;
    font-size: 16px;
    color: var(--Gray-200);
`;

export const CustomAlert = styled(Alert)`
    &.ant-alert-with-description {
        align-items: flex-start;
        padding: 15px 15px 15px 24px;
        position: absolute;
        z-index: 10;
        width: 25%;
        margin-top: 20px;
        border-radius: 12px;
    }
`;

export const ButtonEditedProfile = styled(Button)`
    margin-top: 10;
    width: 100%;
    height: 51px;
    border-radius: 12px;
    border: 2px solid #3a8ce4;
    color: #287fde;
    font-size: 16px;
    font-weight: bolder;
`;

export const ArrowIcon = styled.div`
    background-image: url(${ArrowIconImage});
    width: 11.77px;
    height: 23.79px;
    margin-top: 45px;
`;
