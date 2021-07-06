import React from 'react'

import Link from '../component/Link/Link.js'

class Home extends React.Component {
  render() {
    return (
      <div className="wrapperHome">
        <Link link={'product_list'} label={'Перейти к проекту 1'} />
        <Link link={'timers'} label={'Перейти к проекту 2'} />
      </div>
    )
  }
}

export default Home
