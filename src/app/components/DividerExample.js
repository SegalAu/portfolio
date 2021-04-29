import React from 'react'
import { Divider, Header, Icon, Table } from 'semantic-ui-react'

const DividerExample = () => (
  <React.Fragment>
    <Divider horizontal>
      <Header as='h4'>
        <Icon name='tag' />
        Description
      </Header>
    </Divider>


  </React.Fragment>
)

export default DividerExample;
