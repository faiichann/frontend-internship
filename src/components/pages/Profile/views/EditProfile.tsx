import { useState, useEffect, useCallback } from 'react';
import { API_Profile_Data } from '../apis/profile.api';
import { IProfile } from '../shared/Profile.interface';
import { BackHeader } from 'components/Container/Header.styled';
import {
    ContainerProfile,
    AlignCenter,
    ButtonSave,
    FormInput,
    UserImage,
    TextTopicEditProfile,
    AlignRight,
    ConfirmModal,
    ButtonLeaveModal,
    ButtonCancleModal,
    TextModal,
    TextUserInfo2,
} from '../shared/Profile.styles';
import { LeftOutlined } from '@ant-design/icons';
import Container from 'components/Container/Container';
import { Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';

function EditProfile() {
    const [cred, setCred] = useState<IProfile>({ name: '', surname: '', email: '', result: '', pic: '', username: '' });

    const handleOnChange = (name: string, value: string) => {
        setCred((prev) => ({ ...prev, [name]: value }));
        console.log(cred.username);
    };

    const editedUser = () => {
        console.log(cred);
    };

    async function getStatisticData() {
        const response = await API_Profile_Data();
        if (response) {
            setCred((prevState) => ({ ...prevState, name: response.name, surname: response.surname, email: response.email, result: response.result, pic: response.pic, username: response.username }));
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getStatisticData();
    }, []);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const history = useHistory();

    const goBack = useCallback(() => {
        history.goBack();
    }, []);

    return (
        <Container
            header={{
                left: (
                    <BackHeader onClick={showModal}>
                        <LeftOutlined style={{ color: '#8a8888' }} />
                    </BackHeader>
                ),
                children: 'แก้ไขข้อมูลส่วนตัว',
                right: <ButtonSave onClick={editedUser}>บันทึก</ButtonSave>
            }}
        >
            <AlignRight>
                <ButtonSave onClick={editedUser}>บันทึก</ButtonSave>
            </AlignRight>
            <AlignCenter>
                <ConfirmModal
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    title={[<TextModal>ออกจากหน้านี้?</TextModal>]}
                    footer={[<ButtonLeaveModal onClick={goBack}>ออก</ButtonLeaveModal>, <ButtonCancleModal onClick={handleCancel}>ยกเลิก</ButtonCancleModal>]}
                >
                    <TextUserInfo2>การเปลี่ยนแปลงทั้งหมดจะไม่ถูกบันทึก</TextUserInfo2>
                </ConfirmModal>
            </AlignCenter>
            <ContainerProfile>
                <AlignCenter>
                    <UserImage src={cred.pic} />
                </AlignCenter>
                <TextTopicEditProfile>ชื่อผู้ใช้</TextTopicEditProfile>
                <AlignCenter>
                    <FormInput
                        name="username"
                        value={cred.username}
                        onChange={({ target: { value, name } }) => {
                            handleOnChange(name, value);
                        }}
                    />
                </AlignCenter>
                <TextTopicEditProfile>ชื่อจริง</TextTopicEditProfile>
                <AlignCenter>
                    <FormInput
                        name="name"
                        value={cred.name}
                        onChange={({ target: { value, name } }) => {
                            handleOnChange(name, value);
                        }}
                    />
                </AlignCenter>
                <TextTopicEditProfile>นามสกุล</TextTopicEditProfile>
                <AlignCenter>
                    <FormInput
                        name="surname"
                        value={cred.surname}
                        onChange={({ target: { value, name } }) => {
                            handleOnChange(name, value);
                        }}
                    />
                </AlignCenter>
                <TextTopicEditProfile>อีเมล</TextTopicEditProfile>
                <AlignCenter>
                    <FormInput
                        name="email"
                        value={cred.email}
                        onChange={({ target: { value, name } }) => {
                            handleOnChange(name, value);
                        }}
                        disabled
                    />
                </AlignCenter>
            </ContainerProfile>
        </Container>
    );
}

export default EditProfile;
