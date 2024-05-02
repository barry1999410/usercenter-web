import {PageHeaderWrapper} from '@ant-design/pro-components';
import React from 'react';
import {useIntl} from 'umi';

const Admin: React.FC = (props) => {
  const {children} = props;
  // const intl = useIntl();
  return (
    <PageHeaderWrapper
    >
      {children}
    </PageHeaderWrapper>
  );
};

export default Admin;
// content={intl.formatMessage({
//     id: 'pages.admin.subPage.title',
//     defaultMessage: 'This page can only be viewed by admin',
//   })}
