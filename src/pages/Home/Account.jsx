import React from 'react';
import { Dropdown, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const Account = ({ isLogin, menuUser, userMenuOpen, setUserMenuOpen }) => {
    return (
        <Dropdown
            className='account'
            overlay={menuUser}
            trigger={['hover']}
            visible={userMenuOpen}
            onVisibleChange={setUserMenuOpen}
        >
            <div>
                <Button type="text" icon={<UserOutlined />} />
            </div>
        </Dropdown>
    );
};

export default Account;