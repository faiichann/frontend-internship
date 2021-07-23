import { Spin } from 'antd';
import { useState } from 'react';
import { ButtonLoading, ContainerButtonLoading, IsLoadingSpinner } from '../../shared/styles/Test/TestPage.styled';
import { useHistory } from 'react-router-dom';
import { ApiPostCreateGuestToken } from '../../apis/GuestTest.api';

function ButtonLoadingStart() {
    //
    // ─── Set variable ───────────────────────────────────────────────────────────────────
    //
    const history = useHistory();
    const [isLoading, setLoading] = useState(false);
 
    const fetchData = () => {
        console.log(isLoading);
        setLoading(true);
        setTimeout(() => {
            console.log('set Loading:', isLoading);
            setLoading(false);
            ApiPostCreateGuestToken();
            history.push('/testquestion');
        }, 1500);
    };

    return (
        <ContainerButtonLoading>
            {isLoading ? (
                <IsLoadingSpinner>
                    <Spin size="large" />
                </IsLoadingSpinner>
            ) : (
                <ButtonLoading onClick={fetchData}>เริ่มเกม</ButtonLoading>
            )}
        </ContainerButtonLoading>
    );
}

export default ButtonLoadingStart;
