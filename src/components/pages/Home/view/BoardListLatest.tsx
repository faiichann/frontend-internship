import { Col, Row } from 'antd';
import { MONTHS } from 'components/pages/Board/shared/months';
import { useHistory } from 'react-router';
import { Box } from 'shared/style/theme/component';
import useSWR from 'swr';
import { transalateToThai } from 'utils/transalator/transalator';
import {
    BoardImageOfContent,
    BoardList,
    BoardTextInfo,
    CommentIcon,
    ContainerOfBoardInfo,
    ContainerOfIcon,
    ContainerOfIconAndText,
    HeartIcon,
    TextOverflowHide,
} from '../shared/style/boardList.styled';
import { ButtonSeeAllBoard, TextBoardTopic } from '../shared/style/homepage.styles';

function BoardListLatest() {
    const history = useHistory();
    const { data: boardList, error: errorOfBoardList } = useSWR('/user/content/get');
    const isLoadingBoardList = !boardList && !errorOfBoardList;
    console.log('☯ [Board List] ☯ : ', boardList);

    //-------------- SORT DATE CREATED LATEST --------------//
    if (boardList) {
        boardList?.sort(function (a: any, b: any) {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });

        console.log('☞ [sort Board created latest] :', boardList);
    }

    return (
        <>
            <Row>
                <TextBoardTopic>กระทู้</TextBoardTopic>
                <ButtonSeeAllBoard onClick={() => history.push('/board')}>ดูเพิ่มเติม</ButtonSeeAllBoard>
            </Row>
            {isLoadingBoardList ? (
                <div>loading ...</div>
            ) : (
                <>
                    {boardList?.slice(0, 3).map((item: any, index: any) => {
                        const cardDate = new Date(item?.created_at);
                        const dateFormat = cardDate.getDate() + MONTHS[cardDate.getMonth()] + cardDate.getFullYear();
                        return (
                            <BoardList
                                key={index}
                                onClick={() => {
                                    history.push(`/boardContent/${item._id}`);
                                }}
                            >
                                <TextOverflowHide>
                                    <BoardImageOfContent src={item.image} />
                                    <ContainerOfBoardInfo>
                                        <Box direction="column" justify="flex-start" align="flex-start" style={{ marginLeft: '52%' }}>
                                            <BoardTextInfo style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.title}</BoardTextInfo>
                                            <Box direction="row" justify="flex-start" align="flex-start">
                                                <BoardTextInfo style={{ fontSize: '14px', fontWeight: 'bold' }}>บทความ</BoardTextInfo>
                                                {item?.tag?.map((item: any, index: any) => {
                                                    return <BoardTextInfo key={index}>#{transalateToThai(item)}</BoardTextInfo>;
                                                })}
                                            </Box>
                                            <ContainerOfIconAndText>
                                                <ContainerOfIcon>
                                                    <CommentIcon />
                                                </ContainerOfIcon>
                                                <BoardTextInfo>{item.author_username}</BoardTextInfo>
                                                <BoardTextInfo>{dateFormat}</BoardTextInfo>
                                                <ContainerOfIcon>
                                                    <HeartIcon />
                                                </ContainerOfIcon>
                                                <BoardTextInfo>{item.uid_likes.length}</BoardTextInfo>
                                            </ContainerOfIconAndText>
                                        </Box>
                                    </ContainerOfBoardInfo>
                                </TextOverflowHide>
                            </BoardList>
                        );
                    })}
                </>
            )}
        </>
    );
}
export default BoardListLatest;
