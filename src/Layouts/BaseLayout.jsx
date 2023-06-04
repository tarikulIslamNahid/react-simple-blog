import React from 'react'
import Header from '../components/Header';
const BaseLayout = (props) => {
  return (
    <div>
          <Header />
          <div
          style={{
            padding: 24,
          }}
        >
                  {/* <Router/> */}
                  {props.children}

        </div>
    </div>
  )
}

export default BaseLayout
